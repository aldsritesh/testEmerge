import RecentlyDeleteTable from "@/components/Automations/TabsComponents/TemplateSidebar/Tables/RecentlyDeleteTable";
import UnusedWorkflowTable from "@/components/Automations/TabsComponents/TemplateSidebar/Tables/UnusedWorkflowTable";
import WorkFlowErrorTable from "@/components/Automations/TabsComponents/TemplateSidebar/Tables/WorkFlowErrorTable";
import WorkFlowTables from "@/components/Automations/TabsComponents/TemplateSidebar/Tables/WorkflowTables";
import { baseUrl } from "@/config/APIConstants";
import { useAuthentication } from "@/controllers/auth";
import { GlobalContext } from "@/layouts/GlobalLayout";
import axios from "axios";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { BsDiagram2Fill } from "react-icons/bs";

export default function Workflow() {
  const ctx = useContext(GlobalContext);
  const { location, token }: any = useAuthentication();
  ctx.setTitle("Automation");

  const [allWorkflows, setAllWorkflows] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}workflows/location/${location?.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }: any) => {
        setAllWorkflows(data.workflows);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  const [DropDownRole, SetDropDownRole] = useState("");
  const tabs = [
    {
      id: "tab1",
      label: "Ticket",
      content: " ",
    },
    {
      id: "tab2",
      label: "Task",
      content: " ",
    },
    {
      id: "tab3",
      label: "Meeting",
      content: " ",
    },
    {
      id: "tab4",
      label: "Automation",
      content: " ",
    },
    {
      id: "tab5",
      label: "File Management",
      content: " ",
    },
  ];

  const innerTabs = [
    {
      id: "tab1",
      label: "All Workflow",
      content: <WorkFlowTables allWorkflows={allWorkflows} />,
    },
    {
      id: "tab2",
      label: "Workflow with error",
      content: <WorkFlowErrorTable />,
    },
    {
      id: "tab3",
      label: "Unused Workflow",
      content: <UnusedWorkflowTable />,
    },
    {
      id: "tab4",
      label: "Recently Delete",
      content: <RecentlyDeleteTable />,
    },
  ];
  // const [activeTab, setActiveTab] = useState<any>(tabs[3].id);
  const [activeInnerTab, setActiveInnerTab] = useState(tabs[0].id);

  return (
    <div>
      <div className=" bg-white w-full h-[100vh] overflow-y-scroll scrollbar-hide overflow-auto pt-2 lg:pt-5">
        {/* <div className="pl-3 lg:px-6 py-2 flex justify-start items-start">
          <p
            className={`ml-3 capitalize text-dark text-2xl font-semibold  tracking-wide  `}
          >
            Automation
          </p>
          <div className="mb-4 ml-4  bg-gray-200 rounded-lg mr-4 flex justify-between items-center">
            <div
              onClick={() => setActiveToggle(!activeToggle)}
              className={`py-2 px-4 rounded-md duration-300 ${
                activeToggle
                  ? "bg-white text-darkBlack shadow-md shadow-gray-400 "
                  : "bg-gray-200 text-gray-500"
              }   `}
            >
              Workflow
            </div>
            <div
              onClick={() => setActiveToggle(!activeToggle)}
              className={`py-2 px-4 rounded-md duration-300 ${
                activeToggle
                  ? "bg-gray-200 text-gray-500"
                  : "bg-white text-darkBlack shadow-md shadow-gray-400 "
              }`}
            >
              Sequence
            </div>
          </div>
        </div> */}

        <div className="px-5 lg:px-5 mb-5 w-full mt-1">
          <div className="px-5 bg-gradient-to-r from-[#F4B09F]  via-[#f1c0b8] to-[#FBEAE6] rounded-lg flex justify-start items-center py-3 ">
            <div className="mr-4 bg-white h-8 w-16 lg:h-8 lg:w-8 rounded-full flex justify-center items-center">
              <BsDiagram2Fill className="h-5 w-5 text-secondary  " />
            </div>
            <p className="text-gray-900 font-semibold text-xs md:text-sm">
              Workflow rules allow you to perform certain automatic actions on
              specific records based on filter criteria.
            </p>
          </div>
        </div>

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
          <div className="pb-12  bg-white">
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
      </div>
    </div>
  );
}
