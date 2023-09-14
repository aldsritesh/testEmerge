import Tabs from "@/components/UI/Tabs";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

export default function Bottom() {
  const tabs = [
    {
      id: "tab1",
      label: "Leads Info",
      content: "",
    },
    {
      id: "tab2",
      label: "Address Info",
      content: "",
    },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <>
      <div className="mt-5">
        <ul className=" flex flex-wrap justify-start items-center  ">
          {tabs.map((tab: any) => (
            <li
              className={`w-1/2 text-center px-6 py-1.5 rounded-sm  duration-300 cursor-pointer ${
                activeTab === tab.id
                  ? "  text-tertiary  font-bold  border-b-[3px] rounded-b-md border-tertiary bg-white"
                  : "  text-gray-600  font-semibold  "
              }`}
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </li>
          ))}
        </ul>
        <div className="  overflow-hidden border-t-[1px] border-gray-200">
          {tabs.map((tab: any) => (
            <div
              key={tab.id}
              className={`py-5  px-4 overflow-hidden bg-white  shadow-md   duration-300 rounded-md  ${
                activeTab === tab.id ? "block" : "   hidden"
              } `}
            >
              <div className="flex flex-wrap justify-between items-center">
                <div className="mb-3 w-full md:w-1/2 lg:w-full">
                  <p className="font-semibold text-darkgray text-sm text-left font-fontSource mb-1.5">
                    Email
                  </p>
                  <p className="text-left font-semibold font-fontSource text-[14px] text-tertiary">
                    emailkuyahut@gmail.com
                  </p>
                </div>

                <div className="mb-3 w-full md:w-1/2 lg:w-full">
                  <p className="font-semibold text-darkgray text-sm text-left font-fontSource mb-1.5">
                    Phone
                  </p>
                  <p className="text-left font-semibold font-fontSource text-[14px] text-tertiary">
                    (405) 555-0128
                  </p>
                </div>

                <div className="mb-3 w-full md:w-1/2 lg:w-full">
                  <p className="font-semibold text-darkgray text-sm text-left font-fontSource mb-1.5">
                    Lead Owner
                  </p>
                  <p className="text-left font-semibold font-fontSource text-[14px] text-tertiary">
                    Esther Howard
                  </p>
                </div>

                <div className="mb-3 w-full md:w-1/2 lg:w-full">
                  <p className="font-semibold text-darkgray text-sm text-left font-fontSource mb-1.5">
                    Job Title
                  </p>
                  <p className="text-left font-semibold font-fontSource text-[14px] text-tertiary">
                    Content Writer
                  </p>
                </div>

                <div className="mb-3 w-full md:w-1/2 lg:w-full">
                  <p className="font-semibold text-darkgray text-sm text-left font-fontSource mb-1.5">
                    Annual Revenue
                  </p>
                  <p className="text-left font-semibold font-fontSource text-[14px] text-tertiary">
                    $ 5,000
                  </p>
                </div>

                <div className="w-full md:w-1/2 lg:w-full">
                  <p className="font-semibold text-darkgray text-sm text-left font-fontSource mb-1.5">
                    Lead Source
                  </p>
                  <div className=" flex justify-between items-center">
                    <p className="text-left font-semibold font-fontSource text-[14px] text-tertiary">
                      Online Store
                    </p>
                    <ChevronDownIcon className="h-4 w-4 text-tertiary" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
