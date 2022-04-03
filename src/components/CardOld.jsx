import React from "react";

const CardOld = ({ card }) => {
  return (
    <div className="relative bg-[#151515] shadow-lg rounded-lg p-6 grid grid-cols-3 gap-4 first:border first:border-gray-500">
      <div className="col-span-2 ">
        <div>
          <button
            className="absolute top-3 right-3"
            onClick={() => deleteCard(card.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
        <p className="text-lg font-semibold  text-blue-500">
          XXXX-XXXX-XXXX-{card.last4digits}
        </p>
        <p
          className={`text-xs text-gray-500 mt-1 ${
            card.billDateStatus == "generated" ? "text-yellow-500" : ""
          }`}
        >
          Current Billing Date : {card.billDate}
        </p>
        <p className={`text-xs text-gray-500 mt-1 `}>
          Next Billing Date : {card.nextBillDate}
        </p>
        <p
          className={`text-xs text-gray-500 mt-1 ${
            card.dueDateStatus == "overdue" ? "text-red-500" : ""
          }`}
        >
          Due Date : {card.dueDate}
        </p>
        <p className="text-green-500 font-semibold mt-1">
          ₹ {card.monthlyLimit}
        </p>
      </div>
      <div className="col-span-1 flex  gap-2 items-center justify-center">
        <p className="text-4xl font-semibold text-gray-500">
          {card.coolDownDays}
        </p>
      </div>
    </div>
  );
};

export default CardOld;
