import {
  ArrowLeftIcon,
  SignalIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import React, { useContext, useState } from "react";
import data from "./data";
import { useRouter } from "next/router";
import Logo from "@/components/UI/Logo";
import Link from "next/link";
import Image from "next/image";
import { GlobalContext } from "..";
import { FiSettings } from "react-icons/fi";

export default function AdminSidebar() {
  const { asPath } = useRouter();
  const [showSidebar, setShowSidebar] = useState(false);
  const ctx = useContext(GlobalContext);
  const router = useRouter();
  return (
    <div className="w-full relative overflow-hidden flex justify-between items-center flex-col">
      <div
        className={`${
          router.asPath == "/calendar" ? "h-[90vh]" : "h-[90vh]"
        }  fixed top-28 lg:top-0 left-0 pt-10 lg:pt-2 flex bg-white overflow-y-scroll scrollbar-hide flex-col justify-between   pl-0 w-[50%] md:w-[30%] lg:w-full  bg-auth shadow-md    lg:relative   z-40  ease-in-out duration-300 `}
      >
        {/* <div className="absolute block lg:hidden top-10 lg:top-5 right-10">
          <button>
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div> */}
        <div className="w-full pt-0">
          {data.map((item, index) => (
            <div
              key={index}
              className={`${
                index == 0 ? "border-b-[1px] border-dashed" : null
              } pt-2 border-gray-300`}
            >
              <ul>
                {item?.subContent?.map((mainData: any, mainIndex: any) => (
                  <li key={mainIndex} className={`mb-3  pl-1 w-full`}>
                    <Link href={mainData.link}>
                      <div
                        onClick={() => ctx.setOpen(!ctx.open)}
                        className={`flex md:hidden items-center px-3 w-full justify-start`}
                      >
                        <div
                          className={` ${
                            asPath == mainData.link
                              ? " text-[#4375EA] "
                              : "text-[#4B5563]"
                          }
                    text-[14px] font-semibold tracking-wide  ml-3`}
                        >
                          {mainData.iconCustom}
                        </div>

                        <span
                          className={` ${
                            asPath == mainData.link
                              ? "text-[#4375EA]"
                              : "text-[#4B5563]"
                          }  
                    text-[14px] font-semibold tracking-wide  ml-5`}
                        >
                          {mainData.title}
                        </span>
                      </div>
                      <div
                        className={`hidden md:flex   items-center   py-1 px-3 w-full justify-start`}
                      >
                        <div
                          className={` ${
                            asPath == mainData.link
                              ? " text-[#4375EA] "
                              : "text-[#4B5563]"
                          }
                    text-[14px] font-semibold tracking-wide  ml-3`}
                        >
                          {mainData.iconCustom}
                        </div>
                        <span
                          className={` ${
                            asPath == mainData.link
                              ? "text-[#4375EA]"
                              : "text-[#4B5563]"
                          } ${ctx?.open ? "block" : " block lg:hidden"}
                    text-[14px] font-semibold tracking-wide  ml-5`}
                        >
                          {mainData.title}
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={`mb-4  pl-1 w-full py-1 `}>
          <Link href="/settings">
            <div
              className={`flex   items-center   py-1 px-3 w-full justify-start`}
            >
              <div
                className={` ${
                  asPath == "/settings" ? " text-[#4375EA] " : "text-[#4B5563]"
                }
                    text-[15px] font-semibold tracking-wide  ml-3`}
              >
                <FiSettings />
              </div>

              <span
                className={` ${
                  asPath == "/settings" ? "text-[#4375EA]" : "text-[#4B5563]"
                } ${ctx?.open ? "block" : " block lg:hidden"}
                    text-[15px] font-semibold tracking-wide  ml-5`}
              >
                Settings
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
