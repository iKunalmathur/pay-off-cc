import React from "react";

const Card = ({ card, deleteCard }) => {
  return (
    <div className="relative group bg-[#181818] shadow-lg rounded-lg p-6 flex flex-col gap-6 border border-gray-600 first:border-primary-500">
      <button
        className="absolute top-3 right-3 text-gray-700 hover:text-red-500 transition-colors duration-200"
        onClick={() => deleteCard(card.id)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 "
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
      <div>
        <p className="uppercase text-gray-500">{card.nickname}</p>
        <p className="text-green-500 font-semibold">₹ {card.monthlyLimit}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-lg font-semibold">{`XXXX  XXXX  XXXX  ${card.last4digits}`}</p>
        <p>
          <p className="text-4xl font-semibold text-gray-600 group-hover:text-gray-400 transition-colors duration-200">
            {card.coolDownDays}
          </p>
        </p>
      </div>
      <div className="flex gap-4">
        <div
          className={`text-xs text-gray-500 mt-1 ${
            card.billDateStatus == "generated" ? "text-yellow-500" : ""
          }`}
        >
          <p>Current billing</p>
          <p>{card.billDate}</p>
        </div>
        <div
          className={`text-xs text-gray-500 mt-1 ${
            card.dueDateStatus == "overdue" ? "text-red-500" : ""
          }`}
        >
          <p>Due Date</p>
          <p>{card.dueDate}</p>
        </div>
        <div className="text-xs text-gray-500">
          <p>Next billing</p>
          <p>{card.nextBillDate}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
