import TablesData from "@/components/Marketing/Reporting/TablesData";
import Link from "next/link";
import React, { useState } from "react";
import {
  BsArrowDownShort,
  BsArrowUpRight,
  BsArrowUpShort,
  BsCalendar4,
  BsColumns,
  BsTag,
} from "react-icons/bs";
import { FaBookmark, FaRegUserCircle } from "react-icons/fa";
import { HiChevronDown, HiCursorClick } from "react-icons/hi";
import AdsData from "./AdsData";
import { MdLeaderboard } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FiTrendingDown } from "react-icons/fi";

interface RowData {
  [key: string]: any;
}

export default function AdsTable() {
  const mAds = [
    { title: "Campaign", number: "24" },
    { title: "Audience", number: "32" },
  ];

  const [select, setSelect] = useState(0);
  const [data, setData] = useState<RowData[]>([
    {
      id: "1",
      campaign_name: {
        name: "Design Asset Promo",
        account: "Emerge",
        status: "active",
      },
      impression: "198",
      clicks: "101",
      totalContact: "108",
      costPerContact: "$3.56",
      amountSpent: "$204",
      action: "",
    },
    {
      id: "2",
      campaign_name: {
        name: "Design Asset Promo",
        account: "Emerge",
        status: "active",
      },
      impression: "198",
      clicks: "101",
      totalContact: "108",
      costPerContact: "$3.56",
      amountSpent: "$204",
      action: "",
    },
    {
      id: "3",
      campaign_name: {
        name: "Design Asset Promo",
        account: "Emerge",
        status: "active",
      },
      impression: "198",
      clicks: "101",
      totalContact: "108",
      costPerContact: "$3.56",
      amountSpent: "$204",
      action: "",
    },
    {
      id: "4",
      campaign_name: {
        name: "Design Asset Promo",
        account: "Emerge",
        status: "active",
      },
      impression: "198",
      clicks: "101",
      totalContact: "108",
      costPerContact: "$3.56",
      amountSpent: "$204",
      action: "",
    },
    {
      id: "5",
      campaign_name: {
        name: "Design Asset Promo",
        account: "Emerge",
        status: "active",
      },
      impression: "198",
      clicks: "101",
      totalContact: "108",
      costPerContact: "$3.56",
      amountSpent: "$204",
      action: "",
    },
  ]);

  return (
    <div className=" pt-4">
      <div className="flex gap-4 items-center ">
        <h1 className="pt-4 px-4 font-semibold text-3xl">Ads</h1>
        {/* <div className="flex rounded-md bg-gray-100 ">
          {mAds.map((item: any, index: number) => (
            <button
              className={` py-3 text-xs px-5 ${
                select == index
                  ? "bg-white  text-black shadow-sm font-semibold rounded-md text-md border  "
                  : "text-gray-600   font-semibold "
              }`}
              onClick={() => setSelect(index)}
              key={index}
            >
              {item.title}
              <span
                className={`${
                  select == index ? "bg-newBlue" : "bg-gray-600 "
                } ml-2 h-5 w-3  rounded   px-1  text-xs text-white `}
              >
                {item.number}
              </span>
            </button>
          ))}
        </div> */}
      </div>

      {/* Second Section */}
      <div className="w-full px-4 pt-4 flex items-center justify-between">
        <div className="flex justify-start items-center gap-2">
          <div className="dropdown dropdown-bottom border rounded-md py-2 px-2">
            <div tabIndex={1} className="flex justify-between items-center">
              <FaRegUserCircle className="h-4 w-4 text-gray-600 mr-2" />
              <span className="text-[12px] text-gray-600 px-2font-medium">
                3 Account Selected
              </span>
              <HiChevronDown className="h-4 w-4 text-gray-600 " />
            </div>
            <ul
              tabIndex={1}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52  ml-[-10px]"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-bottom border rounded-md py-2 px-2">
            <div tabIndex={1} className="flex justify-between items-center">
              <BsCalendar4 className="h-4 w-4 text-gray-600 " />
              <span className="text-[12px] text-gray-600 px-2 font-medium">
                Last 30 days
              </span>
              <HiChevronDown className="h-4 w-4 text-gray-600 " />
            </div>
            <ul
              tabIndex={1}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52  ml-[-10px]"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-bottom border rounded-md py-2 px-2">
            <div tabIndex={1} className="flex justify-between items-center">
              <BsTag className="h-4 w-4" />
              <span className="text-[12px] text-gray-600 px-2 font-medium">
                Active
              </span>
              <HiChevronDown className="h-4 w-4 text-gray-600 " />
            </div>
            <ul
              tabIndex={1}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52  ml-[-10px]"
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

        {/*  Button */}
        <div className="w-full  lg:w-auto flex justify-between items-center mb-2 gap-2">
          <div className="flex justify-between items-center border rounded-md py-2 px-2">
            <span className="text-[12px] text-gray-600 px-2 font-medium">
              Export
            </span>
          </div>

          <div className="border-l-[1px] border-gray-200 pl-2">
            <div className="dropdown dropdown-bottom border rounded-md py-2 px-2">
              <div tabIndex={1} className="flex justify-between items-center">
                <span className="text-[12px] text-gray-600 px-2 font-medium">
                  Connected Ad Account
                </span>
              </div>
              <ul
                tabIndex={1}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52  ml-[-10px]"
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

          <Link
            href="/builder/ads"
            className="text-xs flex justify-center items-center   bg-secondary hover:bg-newBlue duration-300 m-1 py-2.5 px-5 2xl:px-6 text-white rounded-md "
          >
            Create Ads
          </Link>
        </div>
      </div>

      {/* Third Section */}
      {/* <div className="flex pl-5 pt-6 items-center text-xs justify-between w-9/12 ">
        <div className="text-slate-600 border-r items-center  w-44 ">
          <p className="text-[11px] pb-1 text-gray-600 font-medium">
            Impression
          </p>
          <div className="flex gap-2 items-center ">
            <p className="font-bold text-xl text-gray-700">537</p>
            <p className="text-green-500 bg-green-100 m-2 rounded-lg flex items-center px-1.5">
              <BsArrowUpShort />
              0.08%
            </p>
          </div>
          <p className="text-[10px] pb-1 text-gray-600 font-medium">
            Across All Network
          </p>
        </div>

        <div className="text-slate-600 border-r items-center  w-40 ">
          <p className="">Clicks</p>
          <div className="flex gap-2 items-center ">
            <p className="font-bold text-xl text-gray-700">155</p>
            <p className="text-green-500 bg-green-100 m-2 rounded-lg flex items-center px-1.5">
              <BsArrowUpShort />
              0.08%
            </p>
          </div>
          <p className="text-[10px] pb-1 text-gray-600 font-medium">
            $0.37 <strong> each</strong>
          </p>
        </div>

        <div className="text-slate-600 border-r items-center  w-40 ">
          <p className="">Contact</p>
          <div className="flex gap-2 items-center ">
            <p className="font-bold text-xl text-gray-700">141</p>
            <p className="text-green-500 bg-green-100 m-2 rounded-lg flex items-center px-1.5">
              <BsArrowUpShort />
              0.08%
            </p>
          </div>
          <p className="text-[10px] pb-1 text-gray-600 font-medium">
            $0.37 <strong> each</strong>
          </p>
        </div>

        <div className="text-slate-600  items-center  w-46 ">
          <p className="">Amount Spent</p>
          <div className="flex gap-2 items-center ">
            <p className="font-bold text-xl text-gray-700">$ 113.507</p>
            <p className="text-red-500 bg-red-100 m-2 rounded-lg flex items-center px-1.5">
              <BsArrowDownShort />
              0.08%
            </p>
          </div>
          <p className="text-[10px] pb-1 text-gray-600 font-medium">
            vs Last month: <strong> $113.620</strong>
          </p>
        </div>
      </div> */}

      <div className="flex  pl-5 items-center text-xs justify-between w-10/12 gap-5">
        <div className="w-full md:w-1/4">
          <AdsData
            title="Impression"
            currency="$"
            titleIcon={<FaBookmark className="text-sm text-newBlue" />}
            subSpanData={"vs Last month:"}
            subIcon={<BsArrowUpRight className="text-[8px]" />}
            index={1}
            numberValue={537}
            numberValueData={"+0.25%"}
          />
        </div>

        <div className="w-full md:w-1/4">
          <AdsData
            title="Clicks"
            currency="$"
            titleIcon={<HiCursorClick className="h-4 w-4 text-yellow-500" />}
            subSpanData={"vs Last month:"}
            subIcon={<BsArrowUpRight className="text-[8px]" />}
            index={2}
            numberValue={537}
            numberValueData={"+0.15%"}
          />
        </div>

        <div className="w-full md:w-1/4">
          <AdsData
            title="Leads"
            currency="$"
            titleIcon={<MdLeaderboard className="h-4 w-4 text-greenShade" />}
            subSpanData={"vs Last month:"}
            subIcon={<BsArrowUpRight className="text-[8px]" />}
            index={3}
            numberValue={537}
            numberValueData={"+0.08%"}
          />
        </div>

        <div className="w-full md:w-1/4">
          <AdsData
            title="Amount Spent"
            currency="$"
            titleIcon={
              <RiMoneyDollarCircleFill className="h-4 w-4 text-secondary" />
            }
            subSpanData={"vs Last month:"}
            subIcon={<FiTrendingDown className="text-[8px]" />}
            index={4}
            numberValue={537}
            numberValueData={"-0.08%"}
          />
        </div>
      </div>
      {/* Third Section table */}
      <div className=" px-4 pt-5 pb-10">
        <TablesData data={data} />
      </div>
    </div>
  );
}
