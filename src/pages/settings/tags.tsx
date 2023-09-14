import React, { useContext } from "react";
import SettingsSidebar from "@/components/SettingsSidebar/TeamsSidebar";

import TagsData from "@/components/Settings/Tags";
import { GlobalContext } from "@/layouts/GlobalLayout";
export default function Tags() {
  const ctx = useContext(GlobalContext);
  ctx.setOpen(false);
  return (
    <div className="flex flex-wrap items-center">
      <div className="w-full lg:w-[25%] border-r-[1px]   bg-white    ">
        <SettingsSidebar />
      </div>
      <div className="w-full lg:w-[75%]   bg-white h-[100vh] scrollbar-hide  overflow-y-scroll pb-20">
        <div className="  border-b flex items-center justify-between  px-4 pb-3 pt-4">
          <p className="text-[#47494b] text-lg font-semibold"> Tags </p>
        </div>

        <div className="flex flex-wrap px-4 pt-4  overflow-hidden ">
          <TagsData />
        </div>
      </div>
    </div>
  );
}
