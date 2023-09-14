import {
  ChatBubbleOvalLeftEllipsisIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";
import AppointmentDetails from "../Calendar/AppointmentDetails";

interface IDropDownProps {
  dropdownComponent: React.ReactNode;
  handleChange: any;
}

export default function DropDown({
  dropdownComponent,
  handleChange,
}: IDropDownProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white  text-sm font-semibold text-gray-900 shadow-sm  hover:bg-gray-50"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={() => setIsVisible(!isVisible)}
          >
            {dropdownComponent}
          </button>
        </div>
        <div
          className={` transition-all lg:right-[-20px] 2xl:right-0 top-3 ${
            isVisible
              ? "absolute z-50 opacity-100 translate-y-0"
              : "hidden opacity-0 -z-50 -translate-y-6"
          }  w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="flex flex-wrap  py-2 px-3 items-center justify-between  rounded-t-md bg-[#212f49]  ">
            <div>
              <p className="text-white  text-[11px] mb-1 "> Dimas </p>
              <p className="text-white  text-[12px] "> Root Canal </p>
            </div>

            <div className="flex flex-wrap items-center justify-between">
              <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6 text-gray-300 mr-2" />
              <button
                onClick={() => {
                  handleChange();
                  setIsVisible(false);
                }}
              >
                <PencilSquareIcon className="h-6 w-6 text-gray-300" />
              </button>
            </div>
          </div>
          <div className="bg-[#2a3958]  py-1 px-3   rounded-b-md">
            <div className="border-b-[1px] border-FontGray py-1.5 ">
              <p className="text-gray-400    text-[12px] font-medium">
                {" "}
                Last :{" "}
              </p>
              <p className="text-gray-400   text-xs font-medium"> Dressing </p>
            </div>
            <div className="border-b-[1px] border-FontGray py-1.5 mb-1">
              <p className="text-gray-400    text-[12px] font-medium">
                Ongoing :
              </p>
              <p className="text-gray-400   text-xs font-medium">Obturation</p>
            </div>
            <div>
              <p className="text-gray-400    text-[12px] font-medium">
                Tooth Case :{" "}
              </p>
              <p className="text-gray-400   text-xs font-medium">3.7</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
