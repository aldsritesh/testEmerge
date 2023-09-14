import { CalendarDaysIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import {
  ChevronRightIcon,
  ClipboardDocumentIcon,
  ClipboardIcon,
  EllipsisHorizontalIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import React from "react";

export default function BottomToolTip() {
  return (
    <div>
      <ol className="relative   ml-3   ">
        <div className="absolute bg-gray-200 ml-3  h-[110vh] md:h-[55vh] lg:h-[78vh] 2xl:h-[50vh] w-[2px] left-[-4%] lg:left-[-1.3%] md:left-[-2%] 2xl:left-[-1.2%]   top-10"></div>
        <li className="mb-10 ml-6 bg-white p-4 shadow-md rounded-lg">
          <div className="top-10 absolute w-3.5 h-3.5 bg-darkgray  rounded-full  -left-1.5 2xl:-left-2 z-10 border border-white  "></div>
          <div className="flex justify-between border-b-gray-200 border-b pb-4">
            <div className="flex items-center">
              <ChevronDownIcon className="w-4 h-4 mr-4 text-tertiary" />
              <div className="bg-blue-100 h-5 w-5 rounded-full flex justify-center items-center mr-4">
                <ClipboardDocumentIcon className="h-3 w-3 text-secondary" />
              </div>
              <div className="text-sm font-semibold">
                <span className="text-tertiary"> Prepare quote </span>
                <span> for</span>
                <span className="text-tertiary">Jerome Bell </span>
              </div>
            </div>
            <div className="  flex justify-end items-center">
              <p className="  text-center font-semibold font-fontSource text-[13px] text-darkgray">
                Due:
              </p>
              <CalendarDaysIcon className="h-4 w-4 text-darkgray ml-2" />
              <p className="  text-center font-semibold font-fontSource text-[13px] text-tertiary ml-2">
                Today, 12:00 PM
              </p>
              <EllipsisHorizontalIcon className="h-5 w-5 text-tertiary ml-3" />
            </div>
          </div>
          <div className="flex justify-between items-center  py-4 px-2">
            <div className="  flex justify-start items-start pr-8  ">
              <input
                type="radio"
                name="radio-5"
                className="radio radio-success bg-gray-100 h-6 w-6 rounded-full"
                checked
              />
              <div>
                <p className="ml-4 mt-[-1px]  font-bold text-tertiary ">
                  Prepare quote for Jerome Bell
                </p>
                <p className="ml-4 font-semibold text-grayText text-[14px] mt-1 font-fontSource">
                  Lorem Ipsum has been the industry standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
              </div>
            </div>
          </div>
        </li>

        <li className="mb-10 ml-6 bg-white p-4 shadow-md rounded-lg">
          <div className=" absolute w-3.5 h-3.5 bg-darkgray  rounded-full  -left-1.5 2xl:-left-2  z-10 border border-white  "></div>
          <div className="flex justify-between border-b-gray-200 border-b pb-4">
            <div className="flex items-center">
              <ChevronDownIcon className="w-4 h-4 mr-4 text-tertiary" />
              <div className="bg-blue-100 h-5 w-5 rounded-full flex justify-center items-center mr-4">
                <ClipboardDocumentIcon className="h-3 w-3 text-secondary" />
              </div>
              <div className="text-sm font-semibold">
                <span className="text-tertiary"> Prepare quote </span>
                <span> for</span>
                <span className="text-tertiary">Jerome Bell </span>
              </div>
            </div>
            <div className="  flex justify-end items-center">
              <p className="  text-center font-semibold font-fontSource text-[13px] text-darkgray">
                Due:
              </p>
              <CalendarDaysIcon className="h-4 w-4 text-darkgray ml-2" />
              <p className="  text-center font-semibold font-fontSource text-[13px] text-tertiary ml-2">
                Today, 12:00 PM
              </p>
              <EllipsisHorizontalIcon className="h-5 w-5 text-tertiary ml-3" />
            </div>
          </div>
          <div className="flex justify-between items-center  py-4 px-2">
            <div className="  flex justify-start items-start pr-8  ">
              <input
                type="radio"
                name="radio-5"
                className="radio radio-success bg-gray-100 h-6 w-6 rounded-full"
                checked
              />
              <div>
                <p className="ml-4 mt-[-1px]  font-bold text-tertiary ">
                  Prepare quote for Jerome Bell
                </p>
                <p className="ml-4 font-semibold text-grayText text-[14px] mt-1 font-fontSource">
                  Lorem Ipsum has been the industry standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
              </div>
            </div>
          </div>
        </li>

        <li className="mb-10 ml-6 bg-white p-4 shadow-md rounded-lg">
          <div className=" absolute w-3.5 h-3.5 bg-darkgray  rounded-full  -left-1.5 2xl:-left-2  z-10 border border-white  "></div>
          <div className="flex justify-between border-b-gray-200 border-b pb-4">
            <div className="flex items-center">
              <ChevronDownIcon className="w-4 h-4 mr-4 text-tertiary" />
              <div className="bg-blue-100 h-5 w-5 rounded-full flex justify-center items-center mr-4">
                <ClipboardDocumentIcon className="h-3 w-3 text-secondary" />
              </div>
              <div className="text-sm font-semibold">
                <span className="text-tertiary"> Prepare quote </span>
                <span> for</span>
                <span className="text-tertiary">Jerome Bell </span>
              </div>
            </div>
            <div className="  flex justify-end items-center">
              <p className="  text-center font-semibold font-fontSource text-[13px] text-darkgray">
                Due:
              </p>
              <CalendarDaysIcon className="h-4 w-4 text-darkgray ml-2" />
              <p className="  text-center font-semibold font-fontSource text-[13px] text-tertiary ml-2">
                Today, 12:00 PM
              </p>
              <EllipsisHorizontalIcon className="h-5 w-5 text-tertiary ml-3" />
            </div>
          </div>
          <div className="flex justify-between items-center  py-4 px-2">
            <div className="  flex justify-start items-start pr-8  ">
              <input
                type="radio"
                name="radio-5"
                className="radio radio-success bg-gray-100 h-6 w-6 rounded-full"
                checked
              />
              <div>
                <p className="ml-4 mt-[-1px]  font-bold text-tertiary ">
                  Prepare quote for Jerome Bell
                </p>
                <p className="ml-4 font-semibold text-grayText text-[14px] mt-1 font-fontSource">
                  Lorem Ipsum has been the industry standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
              </div>
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
}
