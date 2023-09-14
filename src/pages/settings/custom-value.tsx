import React, { useContext } from "react";
import SettingsSidebar from "@/components/SettingsSidebar/TeamsSidebar";
import CustomValueData from "@/components/Settings/CustomValues";
import { GlobalContext } from "@/layouts/GlobalLayout";
export default function CustomValue() {
  const ctx = useContext(GlobalContext);
  ctx.setOpen(false);
  return (
    <div className="flex flex-wrap items-center">
      <div className="w-full lg:w-[25%] border-r-[1px]   bg-white    ">
        <SettingsSidebar />
      </div>
      
      <div className="w-full lg:w-[75%]   bg-white h-[100vh] scrollbar-hide  overflow-y-scroll pb-20">
        <div className="  border-b flex items-center justify-between  px-4 pb-3 pt-4">
          <p className="text-[#47494b] text-lg font-semibold">Custom Values </p>
        </div>

        <div className="flex flex-wrap   overflow-hidden ">
          <CustomValueData />
        </div>
      </div>
    </div>
  );
}
