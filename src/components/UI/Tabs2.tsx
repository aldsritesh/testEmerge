import React, { useState } from "react";

interface ITabs {
  tabs: any;
}

export default function Tabs2({ tabs }: ITabs) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="overflow-hidden ">
      <ul className="flex justify-start items-center overflow-auto scrollbar-hide gap-6 bg-white p-4">
        {tabs.map((tab: any) => (
          <li key={tab.id} className="">
            <button
              className={`text-dark transition-all duration-300 font-semibold text-[11px] md:text-base ${
                activeTab === tab.id ? "border-b-[4px] border-newBlue" : ""
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
      <div className="  bg-white">
        {tabs.map((tab: any) => (
          <div
            key={tab.id}
            className={`shadow-md transition-all duration-300 rounded-md  ${
              activeTab === tab.id ? "block" : " text-black hidden"
            } `}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}
