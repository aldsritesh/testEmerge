import React, { useState } from "react";
import { AiFillFacebook, AiOutlineClose } from "react-icons/ai";
import AddMarketingAsset from "./Assets/AddMarketingAsset";

export default function AddAssets({ onClose, visibility, onSave }: any) {
  const assetsTabs = [
    {
      id: "tab1",
      label: "Ads Campaign",
      content: <AddMarketingAsset handleChange={onSave} onClose={onClose} />,
    },
    {
      id: "tab2",
      label: "Blog Posts",
      content: " ",
    },
    {
      id: "tab3",
      label: "Email",
      content: " ",
    },
    {
      id: "tab4",
      label: "Landing Page",
      content: "",
    },
    {
      id: "tab5",
      label: "Social Post",
      content: "",
    },
  ];

  // const [activeTab, setActiveTab] = useState<any>(tabs[3].id);
  const [activeInnerTab, setActiveInnerTab] = useState(assetsTabs[0].id);

  return (
    <div>
      <div
        className={`w-full min-h-screen  scrollbar-hide  fixed right-0 top-0  z-50 transition-all bg-black overflow-hidden ${
          visibility
            ? "translate-x-0 opacity-100 bg-opacity-30"
            : "translate-x-[100%] opacity-0 bg-opacity-0"
        }`}
      >
        <div className="absolute h-full w-full z-40" onClick={onClose}></div>
        <div className="bg-white w-full md:w-[50%] lg:w-[40%] absolute right-0  h-full z-50 ">
          <div className="border-[1px] px-3">
            <div className="px-2">
              <div className="main  flex  justify-between text-[12px] mt-3 text-[#7c7a7a] ">
                <p className="text-xs font-medium text-gray-500 capitalize  ">
                  Campaign Details
                </p>
                <button onClick={onClose}>
                  <AiOutlineClose className="h-5 w-5 text-gray-500 " />
                </button>
              </div>

              <div className="heading font-semibold text-[24px] mb-4 ">
                <p className="text-lg font-semibold text-gray-700 capitalize pb-2">
                  Add Marketing Asset
                </p>
              </div>
            </div>

            <div className="overflow-auto ">
              <ul className="border-b-[1px] border-[#dfdfdf]  flex  justify-between overflow-x-scroll scrollbar-hide   bg-white gap-2 ">
                {assetsTabs.map((tab: any) => (
                  <li
                    key={tab.id}
                    className={`px-3 lg:px-1 transition-all duration-300  text-xs md:text-[13px]   ${
                      activeInnerTab === tab.id
                        ? "border-b-[4px] border-gray-700 text-gray-700 pb-3 "
                        : "text-gray-500 pb-4"
                    }`}
                    onClick={() => setActiveInnerTab(tab.id)}
                  >
                    {tab.label}
                  </li>
                ))}
              </ul>
              <div className="  bg-white">
                {assetsTabs.map((tab: any) => (
                  <div
                    key={tab.id}
                    className={`shadow-md transition-all duration-300 rounded-md  ${
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
      </div>
    </div>
  );
}
