import React, { useContext, useState } from "react";
import Contact from "./Contact";
import GeneralInfo from "./GeneralInfo";
import AdditionalInfo from "./AdditionalInfo";
import FAQs from "./FAQs";
import Appts from "./Appts";
import Notes from "./Notes";
import Tasks from "./Tasks";
import PatientInfo from "./PatientInfo";

export default function ChatRightSidebar({ chat }: any) {
  const innerTabs = [
    {
      id: "tab1",
      label: "Contact",
      content: <Contact chat={chat} />,
    },
    // {
    //   id: "tab2",
    //   label: "General Info",
    //   content: <GeneralInfo />,
    // },
    {
      id: "tab3",
      label: "Patient Info",
      content: <PatientInfo />,
    },
    {
      id: "tab4",
      label: "FAQS",
      content: <FAQs />,
    },
    {
      id: "tab5",
      label: "Appointments",
      content: <Appts />,
    },
    {
      id: "tab6",
      label: "Notes",
      content: <Notes />,
    },
    {
      id: "tab7",
      label: "Tasks",
      content: <Tasks />,
    },
  ];

  // const [activeTab, setActiveTab] = useState<any>(tabs[3].id);
  const [activeInnerTab, setActiveInnerTab] = useState(innerTabs[0].id);

  return (
    <div className="overflow-hidden ">
      <ul className="lg:px-2 border-b-[1px] border-[#dfdfdf] pt-2 flex justify-start items-center overflow-auto scrollbar-hide gap-2 bg-white  ">
        {innerTabs.map((tab: any) => (
          <li key={tab.id}>
            <button
              className={`px-3 lg:px-1 transition-all duration-300 font-medium text-xs   ${
                activeInnerTab === tab.id
                  ? "border-b-[1px] border-newBlue text-newBlue pb-3.5 font-semibold md:text-[12px]"
                  : "text-gray-600 pb-4 font-semibold md:text-[12px]"
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
