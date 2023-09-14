import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import AddLocation from "./AddLocation";
import AddUser from "./AddUser";
import FAQS from "./FAQS";
export default function LocationModal({ onClose }: any) {
  const items = [
    { title: "Add Locations", content: <AddLocation /> },
    { title: "Add Users", content: <AddUser /> },
    { title: "Add FAQS", content: <FAQS /> },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full h-full md:w-[100vh] md:h-[80vh] bg-white px-5  py-4 overflow-y-scroll scrollbar-hide rounded-lg shadow-lg">
      <div className="flex justify-between items-center">
        <div className="bg-[#8ac0ec27] rounded-full h-10 w-10 p-1 flex justify-center items-center">
          <div className="bg-blue-100 rounded-full h-8 w-8 flex justify-center items-center">
            <AiOutlineUser className="h-5 w-5 text-newBlue" />
          </div>
        </div>
        <button onClick={onClose}>
          <RxCross1 className="h-4 w-4 text-gray-700" />
        </button>
      </div>
      <p className="text-gray-700 font-semibold md:text-lg pt-6">
        Locations Management
      </p>

      <div className="mt-5 ">
        {items.map((item, index) => (
          <div
            className={`${
              activeIndex === index
                ? "border-[1px] border-gray-200  shadow-md rounded-lg pt-1 pb-2"
                : ""
            } mb-3`}
            key={index}
          >
            <div
              className={`flex justify-start items-center mb-2 bg-white px-3 pt-3.5   ${
                activeIndex === index
                  ? " pb-2.5"
                  : "border-[1px] border-gray-200 shadow-md rounded-lg  pb-3.5"
              }`}
              onClick={() => toggleAccordion(index)}
            >
              {activeIndex === index ? (
                <HiOutlineChevronRight className="h-4 w-4" />
              ) : (
                <HiOutlineChevronLeft className="h-4 w-4" />
              )}
              <p className="text-gray-700 font-medium md:text-[14px] ml-2">
                {item.title}
              </p>
            </div>

            {activeIndex === index && (
              <div className=" px-4 pt-1 pb-3">{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
