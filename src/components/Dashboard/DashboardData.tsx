import moment from "moment";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiNotepad } from "react-icons/bi";
import {
  BsArrowDownShort,
  BsArrowUpShort,
  BsCalendar4,
  BsChevronDown,
  BsColumns,
  BsPencil,
  BsTag,
} from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import { RiExchangeDollarLine } from "react-icons/ri";
import DashboardOutput from "./DashboardOutput";

export default function DashboardData() {
  return (
    <div className="bg-white">
      <div className="w-full px-4 pt-4 flex items-center justify-between">
        <div className="flex items-center ">
          <h1 className="py-4 pl-4 pr-2 font-bold text-2xl">Easter Home</h1>
          <p className="text-gray-500 text-[12px] pt-2 ">
            {" "}
            Last edited, {moment().format("MMMM DD, YYYY")}
          </p>
        </div>

        <div className="w-full  lg:w-auto flex justify-between items-center mb-2 gap-1">
          <Link
            href="/builder/dashboard/create"
            className="text-xs flex justify-center items-center ml-3 bg-secondary hover:bg-newBlue duration-300 m-1 py-3 px-5 2xl:px-6 text-white rounded-md "
          >
            <AiOutlinePlus className="mr-2" /> Create Dashboard
          </Link>

          <button className="text-xs flex justify-center items-center ml-3 border-[1px] border-gray-300 duration-300 m-1 py-3 px-4 2xl:px-6 text-gray-700 rounded-md font-semibold">
            <BsPencil className="mr-2" /> Edit Widgets
          </button>
        </div>
      </div>
      <div className="flex pl-5 pt-6 items-center text-xs justify-between w-[90%] pb-5 ">
        <div className="text-slate-600 border-r items-center  w-full md:w-1/2 lg:w-1/4 mr-5 ">
          <div className="flex justify-start items-center">
            <RiExchangeDollarLine className="h-5 w-5 text-gray-600 mr-1 pb-1" />
            <p className="text-[11px] pb-1 text-gray-500 font-medium">
              Current Patients
            </p>
          </div>
          <div className="flex gap-2 items-center ">
            <p className="font-bold text-xl text-gray-700">537</p>
            <p className="text-green-500 bg-green-100 m-2 rounded-lg flex items-center px-1.5">
              <BsArrowUpShort />
              0.08%
            </p>
          </div>
          <p className="text-[10px] pb-1 text-gray-600 font-medium">
            vs Last month : <strong className="text-[12px]"> 20 </strong>
          </p>
        </div>

        <div className="text-slate-600 border-r items-center md:w-1/2 lg:w-1/4 mr-5 ">
          <div className="flex justify-start items-center">
            <BiNotepad className="h-5 w-5 text-gray-600 mr-1 pb-1" />
            <p className="text-[11px] pb-1 text-gray-500 font-medium">
              New Patients
            </p>
          </div>
          <div className="flex gap-2 items-center ">
            <p className="font-bold text-xl text-gray-700">155</p>
            <p className="text-green-500 bg-green-100 m-2 rounded-lg flex items-center px-1.5">
              <BsArrowUpShort />
              0.08%
            </p>
          </div>
          <p className="text-[10px] pb-1 text-gray-600 font-medium">
            vs Last month : <strong className="text-[12px]"> 20 </strong>
          </p>
        </div>

        <div className="text-slate-600 border-r items-center md:w-1/2 lg:w-1/4 mr-5 ">
          <div className="flex justify-start items-center">
            <IoCallOutline className="h-5 w-5 text-gray-600 mr-1 pb-1" />
            <p className="text-[11px] pb-1 text-gray-500 font-medium">
              Total Calls Made
            </p>
          </div>
          <div className="flex gap-2 items-center ">
            <p className="font-bold text-xl text-gray-700">141</p>
            <p className="text-green-500 bg-green-100 m-2 rounded-lg flex items-center px-1.5">
              <BsArrowUpShort />
              0.08%
            </p>
          </div>
          <p className="text-[10px] pb-1 text-gray-600 font-medium">
            vs Last month : <strong className="text-[12px]"> 20 </strong>
          </p>
        </div>

        <div className="text-slate-600  items-center  md:w-1/2 lg:w-1/4 mr-5 ">
          <div className="flex justify-start items-center">
            <FaRegUserCircle className="h-5 w-5 text-gray-600 mr-1 pb-1" />
            <p className="text-[11px] pb-1 text-gray-500 font-medium">Leads</p>
          </div>
          <div className="flex gap-2 items-center ">
            <p className="font-bold text-xl text-gray-700">$ 113.507</p>
            <p className="text-red-500 bg-red-100 m-2 rounded-lg flex items-center px-1.5">
              <BsArrowDownShort />
              0.08%
            </p>
          </div>
          <p className="text-[10px] pb-1 text-gray-600 font-medium">
            vs Last month : <strong className="text-[12px]"> 20 </strong>
          </p>
        </div>
      </div>

      <DashboardOutput />
    </div>
  );
}
