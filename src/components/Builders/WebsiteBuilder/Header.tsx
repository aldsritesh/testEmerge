import ReportingStats from "@/components/Reporting/Stats";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { AiOutlineFundView } from "react-icons/ai";
import { FiTrendingDown } from "react-icons/fi";
import { HiCursorClick } from "react-icons/hi";
import { MdLeaderboard } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { CgOptions } from "react-icons/cg";

export default function Header() {
  // const buttonData = [
  //   {
  //     id: "tab1",
  //     label: "Manage",
  //     content: " ",
  //   },
  //   {
  //     id: "tab2",
  //     label: "Blog",
  //     content: " ",
  //   },
  //   {
  //     id: "tab3",
  //     label: "Site Tree",
  //     content: " ",
  //   },
  //   {
  //     id: "tab4",
  //     label: "SEO",
  //     content: " ",
  //   },
  // ];
  // const [buttonDemo, setButtonDemo] = useState<any>(buttonData[0].id);

  return (
    <div>
      <div className="bg-white w-full py-4 px-5">
        <div className=" justify-start ">
          <div className="mr-5">
            <p className="pb-4 px-4 font-semibold text-2xl">
              Site Builder
            </p>
          </div>
          {/* <div className="bg-gray-200 flex items-center my-2 rounded-lg">
            {buttonData?.map((tab: any, index: any) => (
              <div
                key={index}
                onClick={() => setButtonDemo(tab.id)}
                className={`py-2 px-4   duration-300   ${
                  buttonDemo == tab.id
                    ? "bg-white text-darkBlack shadow-md shadow-gray-400 rounded-md"
                    : "  text-gray-400 "
                } cursor-pointer`}
              >
                {tab.label}
              </div>
            ))}
          </div> */}
        
        </div>
      </div>
    </div>
  );
}
