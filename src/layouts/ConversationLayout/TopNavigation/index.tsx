/* eslint-disable @next/next/no-html-link-for-pages */
import {
  BellIcon,
  CalendarIcon,
  ChatBubbleBottomCenterIcon,
  ChevronDownIcon,
  PlusIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BiLogInCircle, BiNotepad } from "react-icons/bi";
import { BsCupHot } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";

export default function TopNavigation() {
  const router = useRouter();
  const [buttonActive, setButtonActive] = useState(true);

  return (
    <>
      <div
        className={` w-full  bg-[#1F2228] py-1.5 border-b-[1px]  border-gray-200  lg:sticky top-0 z-50`}
      >
        <div className=" block w-full  h-28 lg:h-16 items-center relative z-10">
          <div className="flex flex-wrap lg:flex-nowrap items-center lg:items-start flex-col h-full justify-center mx-auto relative  text-white z-10">
            <div className="flex flex-wrap  lg:flex-nowrap lg:items-center  relative w-full sm:ml-0 sm:pr-2  ">
              <div className="flex justify-between items-center w-full md:w-[45%] pl-2 pr-5 py-1.5 rounded-md">
                <div className={`flex items-center pl-5  w-full justify-start`}>
                  <div>
                    <Link href="/">
                      <Image
                        src={require("../../../../public/images/logo/logo.png")}
                        alt="Emerge"
                        className="w-36"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <ul className="   flex justify-start items-center gap-12 pt-3">
                <Link href="/dashboard">
                  <li
                    className={` ${
                      router.asPath == "/conversations/dashboard"
                        ? "text-white text-sm  font-semibold"
                        : "text-white  text-[14px]  font-medium"
                    } hover:text-secondary pb-5`}
                  >
                    Dashboard
                  </li>
                </Link>
                <li>
                  <div className="dropdown dropdown-bottom">
                    <div
                      tabIndex={0}
                      className={`flex justify-between items-center  `}
                    >
                      <p
                        className={` ${
                          router.asPath == "/conversations"
                            ? "text-blue-100 text-sm  font-semibold"
                            : "text-white text-[14px]  font-medium"
                        } hover:text-secondary pb-5`}
                      >
                        Conversations
                      </p>
                      <ChevronDownIcon className="h-4 w-4 mb-5 ml-2 text-white" />
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu py-2 px-4  shadow bg-base-100 rounded-md w-52"
                    >
                      <a href="/conversations">
                        <li
                          className={`${
                            router.asPath == "/conversations"
                              ? " text-newBlue   "
                              : "text-gray-600"
                          } hover:text-secondary text-sm  font-semibold mb-3 mt-2`}
                        >
                          Conversations
                        </li>
                      </a>
                      <a href="/conversations/manual-call">
                        <li
                          className={`${
                            router.asPath == "/conversations/manual-calls"
                              ? " text-newBlue   "
                              : "text-gray-600"
                          } hover:text-secondary text-sm  font-semibold mb-3 mt-2`}
                        >
                          Manual Calls
                        </li>
                      </a>
                      <a href="/conversations/24hr-reminder">
                        <li
                          className={`${
                            router.asPath == "/conversations/24hr-reminder"
                              ? " text-newBlue   "
                              : "text-gray-600"
                          } hover:text-secondary text-sm  font-semibold mb-3 mt-2`}
                        >
                          24hr reminder
                        </li>
                      </a>
                      <a href="/conversations/action-required">
                        <li
                          className={`${
                            router.asPath == "/conversations/action-required"
                              ? " text-newBlue   "
                              : "text-gray-600"
                          } hover:text-secondary text-sm  font-semibold mb-3 mt-2`}
                        >
                          Action Required
                        </li>
                      </a>
                    </ul>
                  </div>
                </li>

                <Link href="/conversations/settings">
                  <li
                    className={` ${
                      router.pathname.startsWith("/conversations/settings")
                        ? "text-blue-100 text-sm  font-semibold"
                        : "text-white  text-[14px]  font-medium"
                    } hover:text-secondary pb-5`}
                  >
                    Settings
                  </li>
                </Link>
              </ul>

              <div className=" flex items-center justify-start lg:justify-end p-1 w-full lg:w-[55%]   ">
                <div className="relative ml-3 bg-logoRed p-2 rounded-full shadow-sm mr-3">
                  <IoCallOutline className="text-white w-4 h-4" />
                </div>

                <div className="border-l border-l-[#a0a0a0]  h-full">
                  <div className="ml-3 mr-2.5">
                    {buttonActive ? (
                      <button
                        onClick={() => setButtonActive(!buttonActive)}
                        className=" flex justify-start items-center bg-logoRed py-2.5 px-3 rounded-md mb-1"
                      >
                        <BiLogInCircle className="h-4 w-4 text-white" />
                        <span className="text-[12px] ml-2 text-white font-semibold">
                          Log In
                        </span>
                      </button>
                    ) : (
                      <button
                        onClick={() => setButtonActive(!buttonActive)}
                        className="  flex justify-start items-center bg-logoRed py-2.5 px-2 rounded-md mb-1"
                      >
                        <BsCupHot className="h-4 w-4 text-white" />
                        <span className="text-[12px] ml-2 text-white font-semibold">
                          Lets take a break
                        </span>
                      </button>
                    )}
                  </div>
                </div>

                <div className="border-l border-l-[#a0a0a0]">
                  <div className="relative ml-3  shadow-sm flex gap-2 items-center">
                    <div className="relative  bg-logoRed p-2 rounded-full shadow-sm">
                      <UserIcon className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm">Jhon Kelly</div>
                      <div className="text-sm text-[#a0a0a0]">
                        CEO, Superadmin
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
