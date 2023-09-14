import AdsTable from "@/components/Marketing/Ads/AdsTable";
import CampaignTable from "@/components/Marketing/Campaign/Main/CampaignTable";
import ReportingAppointmentTable from "@/components/Reporting/Appointment";
import ReportingCallTable from "@/components/Reporting/Call";
import ReportingEmailTable from "@/components/Reporting/Email";
import ReportingFacebookTable from "@/components/Reporting/FacebookAds";
import ReportingGoogleADSTable from "@/components/Reporting/GoogleAds";
import ReportingSocialMediaTable from "@/components/Reporting/SocialMedia";
import ReportingTikTokTable from "@/components/Reporting/TiktokAds";
import ReportingWebsiteTable from "@/components/Reporting/Website";
import { GlobalContext } from "@/layouts/GlobalLayout";
import React, { useContext, useState } from "react";

interface RowData {
  [key: string]: any;
}

export default function Reporting() {
  const ctx = useContext(GlobalContext);
  ctx.setTitle("Reporting");

  const [DropDownRole, SetDropDownRole] = useState("");

  const [data, setData] = useState<RowData[]>([
    {
      id: "1",
      campaign_name: {
        name: "Design Asset Promo",
        account: "Fikri Studio",
        status: "active",
      },
      impression: "198",
      clicks: "101",
      totalContact: "108",
      costPerContact: "$3.56",
      amountSpent: "$204",
      action: "",
    },
    {
      id: "2",
      campaign_name: {
        name: "Design Asset Promo",
        account: "Fikri Studio",
        status: "active",
      },
      impression: "198",
      clicks: "101",
      totalContact: "108",
      costPerContact: "$3.56",
      amountSpent: "$204",
      action: "",
    },
    {
      id: "3",
      campaign_name: {
        name: "Design Asset Promo",
        account: "Fikri Studio",
        status: "active",
      },
      impression: "198",
      clicks: "101",
      totalContact: "108",
      costPerContact: "$3.56",
      amountSpent: "$204",
      action: "",
    },
    {
      id: "4",
      campaign_name: {
        name: "Design Asset Promo",
        account: "Fikri Studio",
        status: "active",
      },
      impression: "198",
      clicks: "101",
      totalContact: "108",
      costPerContact: "$3.56",
      amountSpent: "$204",
      action: "",
    },
    {
      id: "5",
      campaign_name: {
        name: "Design Asset Promo",
        account: "Fikri Studio",
        status: "active",
      },
      impression: "198",
      clicks: "101",
      totalContact: "108",
      costPerContact: "$3.56",
      amountSpent: "$204",
      action: "",
    },
  ]);

  const innerTabs = [
    {
      id: "tab1",
      label: "Appointment",
      content: <ReportingAppointmentTable />,
    },
    {
      id: "tab2",
      label: "Google Ads",
      content: <ReportingGoogleADSTable data={data} />,
    },
    {
      id: "tab3",
      label: "Facebook Ads",
      content: <ReportingFacebookTable data={data} />,
    },
    {
      id: "tab4",
      label: "Tiktok Ads",
      content: <ReportingTikTokTable data={data} />,
    },
    {
      id: "tab5",
      label: "Email",
      content: <ReportingEmailTable data={data} />,
    },
    // {
    //   id: "tab5",
    //   label: "Social Media",
    //   content: <ReportingSocialMediaTable data={data} />,
    // },
    {
      id: "tab6",
      label: "Site",
      content: <ReportingWebsiteTable data={data} />,
    },
    {
      id: "tab7",
      label: "Call",
      content: <ReportingCallTable />,
    },
  ];

  // const [activeTab, setActiveTab] = useState<any>(tabs[3].id);
  const [activeInnerTab, setActiveInnerTab] = useState(innerTabs[0].id);

  return (
    <div className="overflow-hidden ">
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
      <div className="pb-24 bg-white">
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
