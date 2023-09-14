import React, { useContext } from "react";
import SettingsSidebar from "@/components/SettingsSidebar/TeamsSidebar";
import CustomFieldsData from "@/components/Settings/CustomFields";
import { GlobalContext } from "@/layouts/GlobalLayout";
import SourcesData from "@/components/Settings/Sources";

export default function Sources() {
  const ctx = useContext(GlobalContext);
  ctx.setOpen(false);
  return (
    <div className="flex flex-wrap items-center">
      <div className="w-full lg:w-[25%] border-r-[1px] bg-white">
        <SettingsSidebar />
      </div>
      <div className="w-full lg:w-[75%]   bg-white h-[100vh] scrollbar-hide  overflow-y-scroll pb-20">
        <div className="  border-b flex items-center justify-between  px-4 pb-3 pt-4">
          <p className="text-[#47494b] text-lg font-semibold">Sources</p>
        </div>
        <div className="flex flex-wrap   overflow-hidden ">
          <SourcesData />
        </div>
      </div>
    </div>
  );
}
