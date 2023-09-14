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

  return (
    <>
      <div
        className={`py-5 pl-2 flex bg-mainBg overflow-y-scroll scrollbar-hide flex-col justify-start top-0 left-0 w-[80%] md:w-[40%]  lg:w-full  bg-auth shadow-md  fixed lg:relative h-screen z-40  ease-in-out duration-300 translate-x-0 `}
      >
        <ul className="px-3 mt-2 pt-3  ">
          {data?.map((mainData, mainIndex) => (
            <li className="mb-6" key={mainIndex}>
              <Link href={mainData?.link} className="flex justify-start ">
                {mainData?.icon}
                <p
                  className={`${
                    router.asPath == mainData?.link
                      ? " text-newBlue   "
                      : "text-dark"
                  } ml-2.5   text-[13px] font-semibold`}
                >
                  {mainData?.title}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
