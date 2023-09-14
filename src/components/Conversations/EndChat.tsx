import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function EndChat({ onClose }: { onClose: Function }) {
  const statuses = [
    "Pending",
    "Confirmed",
    "Next Day Confirmed",
    "Canceled",
    "Left VM",
    "No VM/Full VM",
    "Rescheduled",
    "Task Set",
    "Task Called",
    "Replied SMS",
    "Replied Email",
    "Hung Up",
    "Not Interested",
    "DND",
    "24 hour Call Confirmed",
    "24 hour SMS Confirmed",
    "24 hr Left VM",
    "24 hr Not Confirmed",
    "24hr Cancel",
    "Same Day Cancel",
    "24 hr Rescheduled",
    "24hr DND/NI",
  ];

  return (
    <div className="w-full h-full md:w-[60vh] md:h-[90vh] bg-white py-4 overflow-y-hidden rounded-lg shadow-lg">
      <div className="flex justify-between items-center border-b border-b-gray-300 pb-3 px-4 rounded-lg">
        <div>Select how your ticket was handled:</div>
        <button
          className="btn btn-xs bg-transparent border-none hover:bg-transparent hover:border-none text-black text-xl"
          onClick={() => onClose()}
        >
          <AiOutlineClose />
        </button>
      </div>
      <div className="h-[90%] overflow-y-scroll px-4 mt-2 scrollbar-hide">
        {statuses.map((item, index) => (
          <div
            key={index}
            className="text-center mt-4 shadow border border-gray-100 px-4 py-2 cursor-pointer"
            onClick={() => onClose()}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
