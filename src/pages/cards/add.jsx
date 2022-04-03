import AppLayout from "@/components/AppLayout";
import envVar from "@/lib/envVar";
import { isObjEmpty, localStorageData } from "@/lib/helper";
import { useRouter } from "next/router";
import React from "react";

const Add = () => {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const formData = Object.fromEntries(form);
    // set id
    formData["id"] = Math.random().toString(36).substr(2, 9);
    if (isObjEmpty(formData)) {
      alert("Please fill all the fields");
      return;
    }
    const { cards } = localStorageData() ?? {};
    if (cards) {
      const newCards = [...cards, formData];
      localStorage.setItem(envVar.appName, JSON.stringify({ cards: newCards }));
    } else {
      localStorage.setItem(
        envVar.appName,
        JSON.stringify({ cards: [formData] })
      );
    }

    alert("Card added successfully");
    event.target.reset();
    router.push("/");
  };

  return (
    <AppLayout>
      <main className="py-6">
        <section>
          <h2 className="mb-4 capitalize text-lg font-semibold">
            Add New Card
          </h2>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="flex flex-col gap-4">
              <div className="">
                <label
                  htmlFor="nickname"
                  className="text-gray-300 capitalize text-sm"
                >
                  Card Nickname
                </label>
                <input
                  id="nickname"
                  name="nickname"
                  type="text"
                  className="mt-2 py-3 px-3 w-full bg-[#151515] shadow-lg rounded-lg"
                  placeholder="e.g. American Express"
                />
              </div>
              <div className="">
                <label
                  htmlFor="last4digits"
                  className="text-gray-300 capitalize text-sm"
                >
                  Card Last 4 Digits Only
                </label>
                <input
                  id="last4digits"
                  name="last4digits"
                  type="number"
                  min={0}
                  step={1}
                  className="mt-2 py-3 px-3 w-full bg-[#151515] shadow-lg rounded-lg"
                  placeholder="XXXX-XXXX-XXXX-1234"
                />
              </div>
              <div className="">
                <label
                  htmlFor="billGenerateMonthlyOn"
                  className="text-gray-300 capitalize text-sm"
                >
                  Every Month billing date
                </label>
                <input
                  id="billGenerateMonthlyOn"
                  name="billGenerateMonthlyOn"
                  type="number"
                  min={0}
                  step={1}
                  className="mt-2 py-3 px-3 w-full bg-[#151515] shadow-lg rounded-lg"
                  placeholder="e.g. 01"
                />
              </div>
              <div className="">
                <label
                  htmlFor="dueDateOffset"
                  className="text-gray-300 capitalize text-sm"
                >
                  Every Month Due date
                </label>
                <input
                  id="dueDateOffset"
                  name="dueDateOffset"
                  type="number"
                  min={0}
                  step={1}
                  className="mt-2 py-3 px-3 w-full bg-[#151515] shadow-lg rounded-lg"
                  placeholder="e.g. 30"
                />
              </div>
              <div className="">
                <label
                  htmlFor="monthlyLimit"
                  className="text-gray-300 capitalize text-sm"
                >
                  Monthly Limit
                </label>
                <input
                  id="monthlyLimit"
                  name="monthlyLimit"
                  type="number"
                  min={0}
                  step={1}
                  className="mt-2 py-3 px-3 w-full bg-[#151515] shadow-lg rounded-lg"
                  placeholder="e.g. 30000"
                />
              </div>
              <div className="">
                <button
                  type="submit"
                  className="mt-2 py-3 px-3 border border-primary-500 hover:bg-primary-500 transition-colors duration-300 w-full bg-[#151515] shadow-lg rounded-lg"
                >
                  Add
                </button>
              </div>
            </div>
          </form>
        </section>
      </main>
    </AppLayout>
  );
};

export default Add;
