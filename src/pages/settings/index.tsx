import React, { useContext, useState } from "react";
import SettingsSidebar from "@/components/SettingsSidebar/TeamsSidebar";
import { GlobalContext } from "@/layouts/GlobalLayout";
import MyProfile from "./my-profile";
import MyProfileData from "./My-ProfileData";

export default function Settings() {
  const ctx = useContext(GlobalContext);
  ctx.setOpen(false);
  return (
    <div className="flex w-full  items-center">
      <div className="w-full lg:w-[25%] border-r-[1px]   bg-white    ">
        <SettingsSidebar />
      </div>
      <div className="w-full bg-white  h-[100vh] scrollbar-hide overflow-y-scroll pb-20">
        <MyProfileData/>
      </div>
    </div>
  );
}
