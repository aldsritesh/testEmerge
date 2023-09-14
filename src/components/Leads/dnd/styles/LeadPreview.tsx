import {
  ChevronDownIcon,
  ChevronRightIcon,
  EllipsisHorizontalIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import { AiOutlineCheck, AiOutlineMail, AiOutlinePlus } from "react-icons/ai";
import { BsArrowBarRight, BsArrowRight } from "react-icons/bs";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
import Activities from "./Activities";
import Main from "@/components/Home/Right/Main";
import Notes from "./Notes";
export default function LeadPreview({ lead }: any) {
  console.log("feslfsefesesofesfmesifmsei", lead.fullName);
  const status = [
    {
      title: "New",
      status: "completed",
    },
    {
      title: "Open",
      status: "completed",
    },
    {
      title: "In Progress",
      status: "inprogress",
    },
    {
      title: "Open Deals",
      status: "pending",
    },
    {
      title: "Closed",
      status: "pending",
    },
  ];

  return (
    <div className=" ">
      <div className=" flex justify-between items-center pt-5 px-5 pb-6 border-b-[1px] border-gray-300">
        <div className="flex items-center">
          <BsArrowBarRight className="h-6 w-6 text-gray-600  font-semibold" />
          <p className="text-lg text-dark font-semibold ml-4"> Lead Preview</p>
        </div>
        <div className="border-[1px] border-gray-300 flex items-center justify-center px-4 py-2.5 rounded-md">
          <p className="text-xs text-gray-700 font-semibold mr-2.5">
            Lead Preview
          </p>
          <BsArrowRight className="h-4 w-4 text-gray-600  font-semibold" />
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-center px-5 pt-5 pb-4 border-b-[1px] border-gray-300">
        <div className="border-[1px] border-gray-200 w-full rounded-md">
          <div className="flex justify-between items-start pt-4 px-3 pb-4 border-b-[1px] border-gray-300">
            <div className="flex justify-between items-start">
              <div className="avatar-group -space-x-6">
                <div className="avatar">
                  <div className="w-16">
                    <Image
                      src={require("../../../../../public/images/avatar/blackdog.jpg")}
                      width={100}
                      height={100}
                      alt=""
                      className="rounded-full"
                    />
                  </div>
                </div>
              </div>
              <div className="ml-2 mt-2">
                <h4 className="font-bold text-xl font-noto">
                  {" "}
                  {lead?.fullName}
                </h4>
                <div className="flex justify-between items-center mt-0.5">
                  <div className="flex justify-between items-center">
                    <FiMail className="h-4 w-4 text-gray-500 mr-1.5 lowercase" />
                    <p className="text-sm text-gray-500 font-medium  font-noto">
                      {lead?.emailAddress}
                    </p>
                  </div>
                  <div className="bg-gray-500 h-1 w-1 rounded-full mx-4"></div>
                  <div className="flex justify-between items-center">
                    <FiPhoneCall className="h-4 w-4 text-gray-500 mr-1.5 lowercase" />
                    <p className="text-sm text-gray-500  font-medium  font-noto">
                      {lead?.phoneNumber}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex  gap-3 mb-1">
              <button className="h-8 w-8 flex justify-center items-center border-[1px] border-gray-200 p-1 rounded-full cursor-pointer hover:bg-white ">
                <AiOutlinePlus className="h-8 w-8 text-gray-500 " />
              </button>
              <button className="h-8 w-8 flex justify-center items-center border-[1px] border-gray-200 p-1.5 rounded-full cursor-pointer hover:bg-white ">
                <AiOutlineMail className="h-8 w-8 text-gray-500 " />
              </button>
              <button className="h-8 w-8 flex justify-center items-center border-[1px] border-gray-200 p-1.5 rounded-full cursor-pointer hover:bg-white ">
                <IoCallOutline className="h-8 w-8 text-gray-500 " />
              </button>
              <button className="h-8 w-8 flex justify-center items-center border-[1px] border-gray-200 p-1 rounded-full cursor-pointer hover:bg-white ">
                <EllipsisHorizontalIcon className="h-8 w-8 text-gray-500 " />
              </button>
            </div>
          </div>
          <div className="flex items-start overflow-hidden">
            <div className="border-r-[1px] border-gray-300 px-5 py-3 w-1/4">
              <p className="text-xs text-gray-600 font-semibold tracking-wider font-noto ">
                Lead Owner
              </p>
              <h4 className="font-bold  tracking-wider text-[#353535] text-sm pt-1.5 font-noto">
                {lead?.lead_owner?.name}
              </h4>
            </div>
            <div className="border-r-[1px] border-gray-300 px-5 py-3 w-1/4">
              <p className="text-xs text-gray-600 font-semibold tracking-wider font-noto ">
                Source
              </p>
              <h4 className="font-bold  tracking-wider text-[#353535] text-sm pt-1.5 font-noto">
                Ads
              </h4>
            </div>
            <div className="border-r-[1px] border-gray-300 px-5 py-3 w-1/4">
              <p className="text-xs text-gray-600 font-semibold tracking-wider font-noto ">
                Payer{" "}
              </p>
              <h4 className="font-bold  tracking-wider text-[#353535] text-sm pt-1.5 font-noto">
                Online
              </h4>
            </div>
            <div className="border-r-[1px] border-gray-300 px-5 py-3 w-1/4">
              <p className="text-xs text-gray-600 font-semibold tracking-wider font-noto ">
                Patient Value
              </p>
              <h4 className="font-bold  tracking-wider text-[#353535] text-sm pt-1.5 font-noto">
                $ 5,000
              </h4>
            </div>
          </div>
        </div>
        <div className="w-full flex overflow-hidden mt-5">
          {status.map((item, index) => (
            <div className="w-1/5 px-1" key={index}>
              <button
                className={` ${
                  item.status == "completed"
                    ? "bg-[#ceffd2] text-[#48c44e]"
                    : item.status == "inprogress"
                    ? "bg-[#49c14e] text-white"
                    : item.status == "pending"
                    ? "bg-gray-200 text-gray-500"
                    : null
                }  px-4 py-2 w-full rounded-[5px] flex justify-center items-center`}
              >
                {item.status == "completed" && (
                  <AiOutlineCheck className="mr-1" />
                )}
                <span className="text-sm font-medium  font-noto">
                  {item.title}
                </span>
              </button>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-between items-center overflow-hidden mt-6">
          <div className="flex justify-between items-center px-1">
            <p className="text-sm text-gray-500 font-semibold tracking-wider font-noto ">
              Lead Owner :
            </p>
            <div className="dropdown dropdown-bottom ml-2">
              <div className="flex justify-between items-center px-1">
                <label
                  tabIndex={0}
                  className="text-base text-gray-700 font-medium tracking-wider font-noto "
                >
                  Online Store
                </label>
                <ChevronDownIcon className="text-gray-800 h-5 w-5" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-between items-center px-1">
            <div
              className={` bg-green-700 h-1.5 w-1.5 rounded-full   mr-2 ml-2 `}
            ></div>
            <p className="text-sm text-gray-700 font-medium tracking-wider font-noto ">
              Last activity : 2 Jan 2020 at 10:00 A.M
            </p>
          </div>
        </div>
      </div>

      <div className="px-8 py-5">
        <div className="flex justify-between items-centers mb-3">
          <div className="flex justify-between items-centers ">
            <p className="font-bold text-lg font-noto text-gray-800  ">
              Upcoming Activity
            </p>
            <div className="bg-gray-100 h-8 w-8 rounded-full flex justify-center items-center ml-2 font-medium font-noto text-gray-500">
              3
            </div>
          </div>
          <div className="flex justify-between items-centers ">
            <p className="font-semibold mr-1.5 text-sm font-noto text-secondary">
              View all activity
            </p>
            <ChevronRightIcon className="h-5 w-5 text-secondary" />
          </div>
        </div>
        <div className="my-5">
          <Activities
            title="Task"
            tType="created"
            name="Esther Howard"
            showActions={true}
          />
        </div>
        <div className="flex justify-between items-centers mt-5 mb-3">
          <div className="flex justify-between items-centers ">
            <p className="font-bold text-lg font-noto text-gray-800  ">Notes</p>
            <div className="bg-gray-100 h-8 w-8 rounded-full flex justify-center items-center ml-2 font-medium font-noto text-gray-500">
              3
            </div>
          </div>
          <div className="flex justify-between items-centers ">
            <p className="font-semibold mr-1.5 text-sm font-noto text-secondary">
              Add notes
            </p>
            <PlusIcon className="h-5 w-5 text-secondary" />
          </div>
        </div>
        <div className="my-5">
          <Notes title="Task" type="created" name="Esther Howard" />
        </div>
      </div>
    </div>
  );
}
