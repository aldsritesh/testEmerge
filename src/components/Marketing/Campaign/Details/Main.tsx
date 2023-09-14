import React, { useState } from "react";
import MarketingAssets from "./MarketingAssets";
import Performance from "./Performance";

export default function Main({ marketing }: any) {
  const innerTabs = [
    {
      id: "tab1",
      label: "Marketing Assets",
      content: <MarketingAssets marketing={marketing} />,
    },
    {
      id: "tab2",
      label: "Task",
      content: " ",
    },
    {
      id: "tab3",
      label: "Performance",
      content: <Performance />,
    },
  ];
  const [activeInnerTab, setActiveInnerTab] = useState(innerTabs[0].id);

  return (
    <div>
      <div className="h-[100vh] overflow-y-scroll scrollbar-hide">
        <ul className="bg-gray-100 flex items-center my-2 rounded-lg ml-4 mt-5">
          {innerTabs.map((tab: any) => (
            <li key={tab.id}>
              <button
                className={`py-2 duration-300   ${
                  activeInnerTab === tab.id
                    ? "bg-white text-darkBlack shadow-sm shadow-gray-300 rounded-md px-4"
                    : "  text-gray-500 px-6"
                } cursor-pointer`}
                onClick={() => setActiveInnerTab(tab.id)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="w-full border-t-[1px]  bg-white mt-5 pt-2">
          <div className="pb-5  ">
            {innerTabs.map((tab: any) => (
              <div
                key={tab.id}
                className={` ${
                  activeInnerTab === tab.id ? "block" : " text-black hidden"
                } `}
              >
                {tab.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
