import React, { useContext, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import SettingsSidebar from "@/components/SettingsSidebar/TeamsSidebar";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { RxCopy } from "react-icons/rx";
import GeneralInformation from "@/components/Settings/CompanyProfile/generalInformation";
import BusinessPhysicalAddress from "@/components/Settings/CompanyProfile/BusinessPhysicalAddress";
import AuthorizeRepresentative from "@/components/Settings/CompanyProfile/AuthorizeRepresentative";
import BusinessInformation from "@/components/Settings/CompanyProfile/BusinessInformation";
import General from "@/components/Settings/CompanyProfile/General";
import Voicemail from "@/components/Settings/CompanyProfile/Voicemail";
import { GlobalContext } from "@/layouts/GlobalLayout";

export default function CompanyProfile() {
  const ctx = useContext(GlobalContext);
  ctx.setOpen(false);
  return (
    <div className="flex flex-wrap items-center">
      <div className="w-full lg:w-[25%] border-r-[1px]   bg-white    ">
        <SettingsSidebar />
      </div>
      <div className="w-full lg:w-[75%]  bg-white h-[100vh] scrollbar-hide  overflow-y-scroll pb-20">
        <div className="w-full bg-white  py-4">
          <div className="  border-b flex items-center justify-between  px-4 pb-3">
            <p className="text-[#47494b] text-lg font-semibold">
              Business Profile Setting
            </p>
          </div>

          <div className="flex flex-wrap">
            <div className="w-1/2 pl-4 pr-2">
              <GeneralInformation />
              <BusinessInformation />
              <Voicemail />
            </div>
            <div className="w-1/2 pl-2 pr-4">
              <BusinessPhysicalAddress />
              <AuthorizeRepresentative />
              <General />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
