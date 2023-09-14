import React, { useState } from "react";
import Image from "next/image";
import { SlPaperPlane } from "react-icons/sl";
import { SiGooglecalendar } from "react-icons/si";
import { RxDotsVertical, RxChevronLeft, RxPaperPlane } from "react-icons/rx";
import { IoChevronBackOutline } from "react-icons/io5";
import moment from "moment";
import { AiOutlineCalendar } from "react-icons/ai";
import Comments from "./comments";
import Link from "next/link";
export default function Sidebar({ marketing }: any) {
  const [isTruncated, setIsTruncated] = useState(true);
  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <main>
      <div className="flex flex-col justify-between h-[100vh] 2xl:h-screen 2xl:justify-start 2xl:gap-6 overflow-y-scroll scrollbar-hide">
        <div className="border-[1px] border-b-0 px-3 pt-3 pb-3">
          <Link href="/marketing">
            <div className="flex justify-start items-center">
              <div className="bg-white h-5 w-5 shadow-md rounded-full flex justify-center items-center">
                <IoChevronBackOutline className="h-3 w-3 text-gray-900" />
              </div>
              <span className="ml-2 text-xs font-semibold text-gray-700">
                Back to Campaign
              </span>
            </div>
          </Link>

          <div className="pt-3">
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold text-gray-700 capitalize pb-2">
                {marketing?.campaign_name}
              </p>
              <button className="pb-2">
                <RxDotsVertical />
              </button>
            </div>
            <div className="flex flex-row justify-start items-center ">
              <div className="bg-green-500 h-1.5 w-1.5 rounded-full"></div>
              <p className="ml-2 text-center font-medium font-noto text-[11px] text-gray-700">
                Last Activity : 2 Jan 2020 at 09:00 AM
              </p>
            </div>
          </div>
        </div>

        <div className="border-[1px]  px-3">
          <p className="text-base font-semibold text-gray-700 capitalize  pt-4 pb-2">
            Campaign Info
          </p>

          <div className="  flex flex-col  ">
            <p className="  text-[#888888] text-normal mb-1.5 text-[12px]">
              Owner
            </p>

            <div className=" flex items-center ">
              <Image
                className="w-7 rounded-full mr-2 mb-1 text-slate-500 "
                src={require("../../../../../../../public/images/avatar/blackdog.jpg")}
                alt=""
              />
              <p className="ml-1 mb-1 text-center font-medium font-noto text-sm text-gray-600">
                {marketing?.owner?.name}
              </p>
            </div>
          </div>

          <div className="  flex flex-col  my-3">
            <p className="  text-[#888888] text-normal mb-1.5 text-[12px]">
              Goals
            </p>
            <p className="  mb-1  font-medium font-noto text-sm text-gray-600">
              {marketing?.goals}
            </p>
          </div>

          <div className="  flex flex-col  my-3">
            <p className="  text-[#888888] text-normal mb-1.5 text-[12px]">
              Budget
            </p>
            <p className="  mb-1  font-medium font-noto text-sm text-gray-600">
              {marketing?.budget}
            </p>
          </div>

          <div className="  flex flex-col  my-3">
            <p className="  text-[#888888] text-normal mb-1.5 text-[12px]">
              Date Created
            </p>

            <div className="flex justify-start items-center">
              <AiOutlineCalendar className="h-4 w-4 mb-1.5 mr-1.5" />
              <p className="  mb-1  font-medium font-noto text-sm text-gray-600">
                {moment(marketing?.dateCreated).format("MMM, dd yyyy, hh:mmA")}
              </p>
            </div>
          </div>

          <div className="  flex flex-col  my-3">
            <p className="  text-[#888888] text-normal mb-1.5 text-[12px]">
              Description
            </p>

            {isTruncated ? (
              <p className="mb-1 font-medium font-noto text-[12px] text-gray-600">
                {marketing?.description.slice(0, 110)}...
                <button
                  className="text-orange-400 pl-1"
                  onClick={toggleTruncate}
                >
                  View more
                </button>
              </p>
            ) : (
              <p className="mb-1 font-medium font-noto text-[12px] text-gray-600">
                {marketing?.description}
                <button
                  className="text-orange-400 pl-1"
                  onClick={toggleTruncate}
                >
                  View less
                </button>
              </p>
            )}
          </div>
        </div>
        <Comments />
      </div>
    </main>
  );
}
