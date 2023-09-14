import React, { useContext, useState } from "react";
import SettingsSidebar from "@/components/SettingsSidebar/TeamsSidebar";
import PipelineTable from "@/components/Settings/PipeLineSettings/Table";
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
        <div className="w-full    py-4">
          <div className="  border-b flex items-center justify-between pt-4  px-4 pb-3">
            <p className="text-[#47494b] text-lg font-semibold">Pipeline</p>
          </div>
          <PipelineTable />
        </div>
      </div>
    </div>
  );
}
