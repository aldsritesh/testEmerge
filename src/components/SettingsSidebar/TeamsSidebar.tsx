import {
  ArrowLeftIcon,
  SignalIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import React, { useState, useContext } from "react";
import data from "./data";
import { useRouter } from "next/router";
import Logo from "@/components/UI/Logo";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineLeft } from "react-icons/ai";
import { GlobalContext } from "@/layouts/GlobalLayout";

export default function SettingsSidebar() {
  const { asPath } = useRouter();
  const router = useRouter();

  const ctx = useContext(GlobalContext);
  // console.log(router, router.asPath == "/settings");
  // console.log(ctx?.open);

  const handleChange = () => {
    // if (router.pathname.startsWith("/settings")) {
    //   ctx.setOpen(false);
    //   router.back();
    // }
    if (router.asPath == "/settings") {
      ctx.setOpen(false);
      router.back();
    }
    if (router.asPath == "/settings/my-profile") {
      ctx.setOpen(false);
      router.back();
    }
    if (router.asPath == "/settings/company-profile") {
      ctx.setOpen(false);
      router.back();
    }
    if (router.asPath == "/settings/team-member") {
      ctx.setOpen(false);
      router.back();
    }
    if (router.asPath == "/settings/integrations") {
      ctx.setOpen(false);
      router.back();
    }
    if (router.asPath == "/settings/calendar") {
      ctx.setOpen(false);
      router.back();
    }

    if (router.asPath == "/settings/custom-fields") {
      ctx.setOpen(false);
      router.back();
    }
    if (router.asPath == "/settings/custom-value") {
      ctx.setOpen(false);
      router.back();
    }
    if (router.asPath == "/settings/tags") {
      ctx.setOpen(false);
      router.back();
    }
    if (router.asPath == "/settings/pipeline") {
      ctx.setOpen(false);
      router.back();
    }
    if (router.asPath == "/settings/phone-number") {
      ctx.setOpen(false);
      router.back();
    }
    if (router.asPath == "/settings/domain") {
      ctx.setOpen(false);
      router.back();
    } else {
      ctx.setOpen(true);
      router.back();
    }
  };

  return (
    <>
      <div
        className={`py-5 flex bg-mainBg overflow-y-scroll scrollbar-hide flex-col justify-start top-0 left-0 pl-0 w-[80%] md:w-[40%]  lg:w-full  bg-auth shadow-md  fixed lg:relative h-screen z-40  ease-in-out duration-300 translate-x-0 `}
      >
        <div className="pb-2.5 px-4 flex justify-start items-center w-full ">
          <div className=" h-8  items-between  px-1.5 py-2 bg-white border-[1px] border-lightGray rounded-md shadow-sm flex justify-center items-center">
            <Link href="/">
              <div className="" onClick={() => ctx.setOpen(true)}>
                <AiOutlineLeft className="h-5 w-5 text-newBlue hover:text-secondary duration-300" />
              </div>
            </Link>
          </div>
          <p
            className={`ml-3 capitalize text-dark   text-[16px] font-semibold  tracking-wide  `}
          >
            Settings
          </p>
        </div>

        <ul className="w-full pt-3 px-4 ">
          {data.map((item, index) => (
            <li
              key={index}
              className="border-[1px] border-lightGray bg-white mb-4 py-2   rounded-[5px] shadow-sm"
            >
              <p
                className={`px-3 capitalize text-dark text-xs font-semibold  tracking-wide  `}
              >
                {item?.title}
              </p>
              <ul className="px-3 mt-2 pt-3 border-t-[1px] border-lightGray">
                {item?.subContent?.map((mainData, mainIndex) => (
                  <li className="  mb-3" key={mainIndex}>
                    <Link href={mainData?.link} className="flex justify-start ">
                      {mainData?.icon}
                      <p className="ml-2.5 text-dark text-[13px] font-semibold ">
                        {mainData?.title}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
