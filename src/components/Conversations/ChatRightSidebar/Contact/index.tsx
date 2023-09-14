import moment from "moment";
import React, { useState } from "react";
import {
  BsChevronDown,
  BsChevronUp,
  BsClipboard,
  BsEnvelope,
  BsHouseDoor,
} from "react-icons/bs";
import {
  IoCallOutline,
  IoLocationOutline,
  IoTimeOutline,
} from "react-icons/io5";
import "moment-timezone";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import Tags from "./Tags";
import DND from "./DND";
import { TfiReload } from "react-icons/tfi";
import ActiveCampaignWorkflow from "./ActiveCampaignWorkflow";
import PastCampaignWorkflow from "./PastCampaignWorkflow";
import Opportunity from "./Opportunity";
import PersonalInformation from "./PersonalInformation";

export default function Contact({ chat }: any) {
  const [currentTime, setCurrentTime] = useState(
    moment().tz(moment.tz.guess())
  );

  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isCollapsed1, setIsCollapsed1] = useState(false);
  const [isCollapsed2, setIsCollapsed2] = useState(false);
  const [isCollapsed3, setIsCollapsed3] = useState(false);

  return (
    <div className="px-4  h-[100vh] pb-[30%]  overflow-y-scroll w-full scrollbar-hide ">
      <div className="bg-gray-100 my-4 rounded-md py-3 px-2 ">
        <div className="flex justify-start items-center mb-3 px-2">
          <div className="w-[8%]">
            <IoLocationOutline />
          </div>
          <p className="text-gray-700 font-medium md:text-[12px]">
            Chase Sandboc
          </p>
        </div>
        <div className="flex justify-between items-center mb-3 px-2">
          <div className="flex justify-start items-center w-[90%]">
            <div className="w-[8%]">
              <BsHouseDoor />
            </div>
            <p className="text-gray-700 font-medium md:text-[12px]">
              555 Chase St, philadelphia, PA, US, 18901
            </p>
          </div>
          <button
            onClick={() => {
              navigator.clipboard.writeText(
                "555 Chase St, philadelphia, PA, US, 18901"
              );
              alert("address copied successfully");
            }}
          >
            <BsClipboard className="h-3 w-3" />
          </button>
        </div>
        <div className="bg-gray-200  rounded-md py-3 px-2">
          <div className="flex justify-start items-center mb-1.5">
            <div className="w-[8%]">
              <IoTimeOutline />
            </div>
            <p className="text-gray-700 font-medium md:text-[12px]">
              {currentTime.format("HH")}:{currentTime.format("mm")}&nbsp;
              {currentTime.format("A")}&nbsp;
              {currentTime.format("z")}
            </p>
          </div>
          <div className="flex justify-start items-center mb-1.5">
            <div className="w-[8%]">
              <IoCallOutline />
            </div>
            <p className="text-gray-700 font-medium md:text-[12px]">
              +1234567890
            </p>
          </div>
          <div className="flex justify-start items-center">
            <div className="w-[8%]">
              <BsEnvelope />
            </div>
            {/* <p className="text-gray-700 font-medium md:text-[12px]">
              555 Chase St, philadelphia, PA, US, 18901
            </p> */}
          </div>
        </div>
      </div>
      <PersonalInformation />

      <div className="bg-gray-100 my-4 rounded-md py-3 px-2 ">
        <p className="text-gray-700 font-medium md:text-[14px] px-2">
          Add Tags
        </p>
        <Tags />
      </div>

      <div className="bg-gray-100 my-4 rounded-md py-3 px-2 ">
        <div
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="flex justify-between items-center mb-2 px-2"
        >
          <p className="text-gray-700 font-medium md:text-[14px]">DND</p>
          <div>
            {isCollapsed ? (
              <BsChevronUp className="h-3 w-3" />
            ) : (
              <BsChevronDown className="h-3 w-3" />
            )}
          </div>
        </div>

        {isCollapsed && (
          <div className="bg-gray-200  rounded-md py-3 px-2">
            <DND />
          </div>
        )}
      </div>

      <div className="bg-gray-100 my-4 rounded-md py-3 px-2 ">
        <div
          onClick={() => setIsCollapsed1(!isCollapsed1)}
          className="flex justify-between items-center mb-2 px-2"
        >
          <div className="flex justify-start items-center">
            <p className="text-black font-medium md:text-[14px]">
              Active Campaigns / Workflows{" "}
            </p>
            <TfiReload className="h-3 w-3 ml-2" />
          </div>
          <div>
            {isCollapsed1 ? (
              <BsChevronUp className="h-3 w-3" />
            ) : (
              <BsChevronDown className="h-3 w-3" />
            )}
          </div>
        </div>

        {!isCollapsed1 && <ActiveCampaignWorkflow />}
      </div>

      <div className="bg-gray-100 my-4 rounded-md py-3 px-2 ">
        <div
          onClick={() => setIsCollapsed2(!isCollapsed2)}
          className="flex justify-between items-center mb-2 px-2"
        >
          <div className="flex justify-start items-center">
            <p className="text-black font-medium md:text-[14px]">
              Past Campaigns / Workflows{" "}
            </p>
            <TfiReload className="h-3 w-3 ml-2" />
          </div>
          <div>
            {isCollapsed2 ? (
              <BsChevronUp className="h-3 w-3" />
            ) : (
              <BsChevronDown className="h-3 w-3" />
            )}
          </div>
        </div>

        {!isCollapsed2 && <PastCampaignWorkflow />}
      </div>

      <div className="bg-gray-100 my-4 rounded-md py-3 px-2 ">
        <div
          onClick={() => setIsCollapsed3(!isCollapsed3)}
          className="flex justify-between items-center mb-2 px-2"
        >
          <div className="flex justify-start items-center">
            <p className="text-black font-medium md:text-[14px]">
              Opportunities
            </p>
            <TfiReload className="h-3 w-3 ml-2" />
          </div>
          <div>
            {isCollapsed3 ? (
              <BsChevronUp className="h-3 w-3" />
            ) : (
              <BsChevronDown className="h-3 w-3" />
            )}
          </div>
        </div>

        {!isCollapsed3 && <Opportunity />}
      </div>
    </div>
  );
}
