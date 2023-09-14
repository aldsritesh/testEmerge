import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { EllipsisHorizontalIcon, PlusIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

export default function Center() {
  return (
    <div className="px-6">
      <div className="flex flex-col  justify-center items-center mt-8">
        <div className="h-20 w-20 bg-purple-200 flex flex-col justify-end items-center rounded-full">
          <Image
            src={require("../../../../public/images/left/avatar.png")}
            alt=""
            className="h-16 w-16  bg-purple-200 rounded-full"
          />
        </div>
        <p className="pt-2 font-bold text-tertiary text-xl text-center">
          Jerome Bell
        </p>
        <div className="flex flex-row  justify-center items-center mt-1">
          <div className="  rounded-md  ">
            <Image
              src={require("../../../../public/images/left/google.png")}
              className="w-4 h-4"
              alt="ok"
            />
          </div>
          <p className="ml-1 font-semibold text-darkgray text-sm text-center font-fontSource">
            Google
          </p>
        </div>

        <div className="flex justify-center items-center mt-5">
          <div className="flex flex-col justify-start items-center mr-5">
            <div className="border-[1px] border-gray-300 bg-gray-50 h-8 w-8 rounded-full flex justify-center items-center">
              <PlusIcon className="h-4 w-4 text-tertiary" />
            </div>
            <p className="mt-2 text-center font-semibold font-fontSource text-[13px] text-tertiary">
              Log
            </p>
          </div>

          <div className="flex flex-col justify-start items-center mr-5">
            <div className="border-[1px] border-gray-300 bg-gray-50 h-8 w-8 rounded-full flex justify-center items-center">
              <EnvelopeIcon className="h-4 w-4 text-tertiary" />
            </div>
            <p className="mt-2 text-center font-semibold font-fontSource text-[13px] text-tertiary">
              Email
            </p>
          </div>

          <div className="flex flex-col justify-start items-center mr-5">
            <div className="border-[1px] border-gray-300 bg-gray-50 h-8 w-8 rounded-full flex justify-center items-center">
              <PhoneIcon className="h-4 w-4 text-tertiary" />
            </div>
            <p className="mt-2 text-center font-semibold font-fontSource text-[13px] text-tertiary">
              Call
            </p>
          </div>

          <div className="flex flex-col justify-start items-center">
            <div className="border-[1px] border-gray-300  bg-gray-50 h-8 w-8 rounded-full flex justify-center items-center">
              <EllipsisHorizontalIcon className="h-4 w-4 text-tertiary" />
            </div>
            <p className="mt-2 text-center font-semibold font-fontSource text-[13px] text-tertiary">
              More
            </p>
          </div>
        </div>

        <button className="bg-primary hover:bg-secondary duration-300 py-2.5 w-[70%] md:w-[40%] lg:w-[85%] mt-4 rounded-lg font-medium text-gray-100">
          Convert to contact
        </button>

        <div className="flex flex-row justify-start items-center mt-5">
          <div className="bg-green-500 h-1.5 w-1.5 rounded-full"></div>
          <p className="ml-1 text-center font-semibold font-fontSource text-[14px] text-tertiary">
            Last Activity : 2 Jan 2020 at 09:00 AM
          </p>
        </div>
      </div>
    </div>
  );
}
