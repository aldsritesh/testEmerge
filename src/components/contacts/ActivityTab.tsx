import React from "react";
import { ActivityCard, ActivityCard2, ActivityCard4 } from "./ActivityCard";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function ActivityTab() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap  pb-4 pt-2">
        <details className="dropdown w-fit mr-2">
          <summary className="mt-3 lg:mt-0 cursor-pointer   items-between px-2 py-2 bg-white border-[1px] border-lightGray h-10 rounded-md shadow-sm flex justify-center items-center">
            <div className="flex justify-center items-center">
              <p className="text-sm text-gray-500">Filter Activity 21/25</p>
              <ChevronDownIcon className="h-4 w-4 text-FontGray cursor-pointer hover:text-secondary duration-300" />
            </div>
          </summary>
          <ul className="p-2 shadow dropdown-content z-[1] bg-base-100 rounded-box w-52 calendar-dropdown-content   overflow-y-auto">
            <div>
              <li className="py-2">
                <a>Name</a>
              </li>
              <li className="py-2">
                <a>Name</a>
              </li>
            </div>
          </ul>
        </details>
        <details className="dropdown w-fit mr-2">
          <summary className="mt-3 lg:mt-0  ml-2 cursor-pointer items-between px-2 py-2 bg-white border-[1px] border-lightGray h-10 rounded-md shadow-sm flex justify-center items-center">
            <div className="flex justify-center items-center">
              <p className="text-sm text-gray-500">All Users</p>
              <ChevronDownIcon className="h-4 w-4 text-FontGray cursor-pointer hover:text-secondary duration-300" />
            </div>
          </summary>
          <ul className="p-2 shadow   dropdown-content z-[1] bg-base-100 rounded-box w-52 calendar-dropdown-content   overflow-y-auto">
            {/* <li>
                <a>{calendarData.name}</a>
          </li> */}
            <div>
              <li className="py-2">
                <a>Name</a>
              </li>
              <li className="py-2">
                <a>Name</a>
              </li>
            </div>
          </ul>
        </details>
      </div>
      <div className="overflow-y-scroll scrollbar-hide xl:h-[62vh] 2xl:h-[74vh]">
        <span className="font-main text-black text-md font-semibold tracking-wide ">
          Upcoming Activity
        </span>
        <div className="overflow-y-scroll scrollbar-hide mb-3 ">
          <div className=" mt-2  ">
            <div className="mb-4 ">
              <ActivityCard />
              <ActivityCard2 />
            </div>
          </div>
        </div>

        <div>
          <span className="font-main text-black text-md font-semibold px-1 tracking-wide ">
            Activity History
          </span>
          <div className="px-1 text-gray-500 text-sm"> 11 July 2023 </div>
          <div className="overflow-y-scroll scrollbar-hide mb-3 ">
            <div className=" mt-2  ">
              <div className="mb-4 space-y-4">
                <ActivityCard2 />
                <ActivityCard4 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
