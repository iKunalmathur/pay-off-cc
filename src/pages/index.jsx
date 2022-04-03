import { useState, useEffect } from "react";
import { dateDiffInDays } from "@/lib/datefun";
import AppLayout from "@/components/AppLayout";
import { localStorageData } from "@/lib/helper";
import Card from "@/components/Card";
import envVar from "@/lib/envVar";

export default function Home() {
  const [cards, setCards] = useState([]);
  const [sortOrder, setSortOrder] = useState("desc");
  const [sortBy, setSortBy] = useState("coolDownDays");

  const setDueDate = () => {
    const today = new Date();

    const { cards } = localStorageData() ?? [];
    // const cards = cardsData;

    cards?.map((card) => {
      // set due date
      card["dueDate"] = new Date(
        today.getFullYear(),
        today.getMonth(),
        parseInt(card.billGenerateMonthlyOn) + parseInt(card.dueDateOffset)
      ).toDateString();
      //set due date status
      card["dueDateStatus"] =
        dateDiffInDays(today, new Date(card.dueDate)) <= 0 ? "overdue" : "due";

      // set billing date
      card["billDate"] = new Date(
        today.getFullYear(),
        today.getMonth(),
        parseInt(card.billGenerateMonthlyOn)
      ).toDateString();

      // set bill date status
      card["billDateStatus"] =
        dateDiffInDays(today, new Date(card.billDate)) < 0
          ? "generated"
          : "not-generated";

      // next bill date
      card["nextBillDate"] = new Date(
        today.getFullYear(),
        today.getMonth() + 1,
        parseInt(card.billGenerateMonthlyOn)
      ).toDateString();

      // set cool down days
      if (card.billDateStatus == "generated") {
        card["coolDownDays"] = dateDiffInDays(
          today,
          new Date(card.nextBillDate)
        );
      } else {
        card["coolDownDays"] = dateDiffInDays(today, new Date(card.billDate));
      }

      return card;
    });
    applyFilter(cards, sortBy, sortOrder);
  };

  const applyFilter = (cards, sortBy, order = "asc") => {
    const sortedCards = cards.sort((a, b) => {
      let comparison = 0;
      if (a[sortBy] < b[sortBy]) {
        comparison = -1;
      }
      if (a[sortBy] > b[sortBy]) {
        comparison = 1;
      }

      return order == "desc" ? comparison * -1 : comparison;
    });
    setCards(sortedCards);
  };

  const deleteCard = (id) => {
    // delete card from local storage
    const { cards } = localStorageData() ?? [];
    const newCards = cards.filter((card) => card.id != id);
    localStorage.setItem(envVar.appName, JSON.stringify({ cards: newCards }));
    setDueDate();
  };

  useEffect(() => {
    setDueDate();
  }, []);

  return (
    <AppLayout>
      <main className="py-6 ">
        {/* hero */}
        <section className="">
          <div className="bg-[#181818] shadow-lg  rounded-lg p-6 grid grid-cols-3 gap-4">
            <div className="col-span-3">
              <h2 className="text-2xl font-bold">Welcome to Pay-Off-CC</h2>
              <p className="text-sm text-gray-500 mt-1 max-w-[70%]">
                Helps you to choose to select perfect card for your next
                spending credit card.
              </p>
            </div>
            <div className="col-span-1 flex items-center justify-center"></div>
          </div>
        </section>
        {/* cards */}
        <section className="mt-8 space-y-8">
          {/* filters */}
          <div className="flex justify-between items-center">
            <p className="text-base text-gray-500">Apply Filters</p>
            <div className="flex gap-4">
              <select
                name="sortOrder"
                className="bg-[#151515] shadow-lg rounded-lg py-3 px-4 border-none capitalize text-sm font-semibold"
                onChange={(evt) => {
                  setSortOrder(evt.target.value);
                  applyFilter(cards, sortBy, evt.target.value);
                }}
                value={sortOrder}
              >
                <option value="asc">asc</option>
                <option value="desc">desc</option>
              </select>
              <select
                name="sortBy"
                className="bg-[#151515] shadow-lg rounded-lg py-3 px-4 border-none capitalize text-sm font-semibold"
                onChange={(evt) => {
                  setSortBy(evt.target.value);
                  applyFilter(cards, evt.target.value, sortOrder);
                }}
              >
                <option value="coolDownDays">Cool Down</option>
                <option value="dueDate">Due Date</option>
                <option value="monthlyLimit">Monthly Limit</option>
              </select>
            </div>
          </div>
          <div className="space-y-8 overflow-auto h-[50vh]">
            {/* {console.clear()} */}

            {cards.length > 0 ? (
              cards.map((card, index) => (
                <Card card={card} key={index} deleteCard={deleteCard} />
              ))
            ) : (
              <div className="bg-[#151515] shadow-lg rounded-lg p-6 grid grid-cols-3 gap-4 first:border first:border-gray-500">
                <div className="col-span-2">
                  <p className="text-lg font-semibold  text-gray-500">
                    No Cards Found
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="flex gap-2 text-sm items-center justify-center">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-primary-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </p>
            <p className="text-yellow-500">Bill generated</p>
            <p className="text-red-500">Payment overdue</p>
          </div>
        </section>
      </main>
    </AppLayout>
  );
}
