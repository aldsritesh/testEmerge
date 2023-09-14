import AdsTable from "@/components/Marketing/Ads/AdsTable";
import CampaignTable from "@/components/Marketing/Campaign/Main/CampaignTable";
import CareplanTable from "@/components/invoice/CarePlanTable";
import ClaimTab from "@/components/invoice/ClaimTab";
import PayersTable from "@/components/invoice/PayersTable";
import ProductsTable from "@/components/invoice/ProductsTable";
import { GlobalContext } from "@/layouts/GlobalLayout";
import React, { useContext, useState } from "react";
import ServicesTable from "@/components/invoice/ServicesTable";

export default function Marketing() {
  const ctx = useContext(GlobalContext);
  ctx.setTitle("Marketing");

  const [DropDownRole, SetDropDownRole] = useState("");

  const innerTabs = [
    {
      id: "tab1",
      label: "Claims",
      content: <ClaimTab />,
    },
    {
      id: "tab2",
      label: "Products",
      content: <ProductsTable />,
    },
    {
      id: "tab3",
      label: "Care Plans",
      content: <CareplanTable />,
    },
    {
      id: "tab4",
      label: "Payers",
      content: <PayersTable />,
    },
    {
      id: "tab5",
      label: "Services",
      content: <ServicesTable />,
    },
  ];

  // const [activeTab, setActiveTab] = useState<any>(tabs[3].id);
  const [activeInnerTab, setActiveInnerTab] = useState(innerTabs[0].id);

  return (
    <div className="overflow-hidden pb-24 ">
      <ul className="lg:px-5 border-b-[1px] border-[#dfdfdf] pt-4 flex justify-start items-center overflow-auto scrollbar-hide gap-6 bg-white  ">
        {innerTabs.map((tab: any) => (
          <li key={tab.id}>
            <button
              className={`px-3 lg:px-2 transition-all duration-300 font-semibold text-xs md:text-base ${
                activeInnerTab === tab.id
                  ? "border-b-[4px] border-secondary text-secondary pb-3 "
                  : "text-gray-500 pb-4"
              }`}
              onClick={() => setActiveInnerTab(tab.id)}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
      <div className="  bg-white">
        {innerTabs.map((tab: any) => (
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
  );
}
