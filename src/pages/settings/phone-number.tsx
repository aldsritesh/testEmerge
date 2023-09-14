import React, { useContext, useState } from "react";
import SettingsSidebar from "@/components/SettingsSidebar/TeamsSidebar";

import PhoneNo from "@/components/Settings/PhoneNo/PhoneNumber";
import NumberPool from "@/components/Settings/PhoneNo/NumberPool";
import VerifiedCaller from "@/components/Settings/PhoneNo/VerifiedCaller";
import SMSProvider from "@/components/Settings/PhoneNo/SMSProvider";
import { GlobalContext } from "@/layouts/GlobalLayout";
export default function PhoneNumber() {
  const ctx = useContext(GlobalContext);
  ctx.setOpen(false);
  return (
    <>
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-[25%] border-r-[1px]   bg-white    ">
          <SettingsSidebar />
        </div>
        <div className="w-full lg:w-[75%]  bg-gray-50 h-[100vh] scrollbar-hide  overflow-y-scroll pb-20">
          <div className="    flex items-center justify-between  px-4 pb-3 pt-4">
            <p className="text-[#47494b] text-lg font-semibold"> Phone No </p>
          </div>
          <div className=" bg-white border ">
            {/* SMS Provider*/}
            <SMSProvider />

            {/* Phone Numbers */}
            <PhoneNo />

            {/* Number Pool */}
            <NumberPool />

            {/* verified caller id */}
            <VerifiedCaller />
          </div>
        </div>
      </div>
    </>
  );
}
