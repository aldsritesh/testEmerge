import {
  ChevronLeftIcon,
  PlusIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { useRouter } from "next/router";
import { useContext } from "react";
import {
  CalendarDaysIcon,
  BellAlertIcon,
  ChatBubbleBottomCenterIcon,
  BellIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";
import Search from "./Search";
import { useRecoilState } from "recoil";
import { titleState } from "@/atoms/title";
import Image from "next/image";
import HeaderTitle from "./HeaderTitle";
import { GlobalContext } from "..";
import { TfiAlignJustify, TfiAlignRight, TfiAngleRight } from "react-icons/tfi";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import Link from "next/link";
export default function TopNavigation() {
  const router = useRouter();
  const ctx = useContext(GlobalContext);
  return (
    <header className=" block w-full  h-28 lg:h-16 items-center relative z-10">
      {/* {ctx.open.toString()} */}
      <div className="flex flex-wrap lg:flex-nowrap items-center lg:items-start flex-col h-full justify-center mx-auto relative  text-white z-10">
        <div className="flex flex-wrap  lg:flex-nowrap lg:items-start  relative w-full sm:ml-0 sm:pr-2  ">
          <div className="flex justify-between items-center w-full md:w-[45%] pl-2 pr-5 py-1.5 rounded-md">
            <div className={`flex items-center pl-5  w-full justify-start`}>
              {/* <div
                onClick={() => ctx.setOpen(!ctx.open)}
                className="text-lg font-bold mr-3"
              >
                <button className="bg-gray-200 rounded-full h-5 w-5 p-1 flex justify-center items-center">
                  {ctx.open ? (
                    <IoChevronForward className="h-4 w-4 text-gray-700" />
                  ) : (
                    <IoChevronBack className="h-4 w-4 text-gray-700" />
                  )}
                </button>
              </div> */}
              <div>
                <Link href="/">
                  <Image
                    src={require("../../../../public/images/logo/logo.png")}
                    alt="Emerge"
                    className="w-36 lg:w-40"
                  />
                </Link>
              </div>
              {/* <div className="w-[90%]">
                <HeaderTitle />
              </div> */}
            </div>
          </div>

          <div className=" flex items-center justify-start lg:justify-end p-1 w-full lg:w-[55%]   ">
            {/* <Text text="alok ranjan" /> */}
            <Search />
            <div className="relative ml-3 bg-logoRed p-2 rounded-full shadow-sm mr-3">
              <PlusIcon className="text-white w-4 h-4" />
            </div>

            <div className="border-l border-l-[#a0a0a0] mr-3 h-full">
              <div className="relative ml-3  shadow-sm flex gap-2  py-2">
                <ChatBubbleBottomCenterIcon className="text-[#a0a0a0] w-6 h-6" />
                <BellIcon className="text-[#a0a0a0] w-6 h-6" />
                <CalendarIcon className="text-[#a0a0a0] w-6 h-6" />
              </div>
            </div>

            <div className="border-l border-l-[#a0a0a0]">
              <div className="relative ml-3  shadow-sm flex gap-2 items-center">
                <div className="relative  bg-logoRed p-2 rounded-full shadow-sm">
                  <UserIcon className="text-white w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm">Jhon Kelly</div>
                  <div className="text-sm text-[#a0a0a0]">CEO, Superadmin</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
