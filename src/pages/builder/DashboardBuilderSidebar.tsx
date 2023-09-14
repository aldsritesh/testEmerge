import React from "react";
import Component from "./dashboardComponent";
import {
  AiOutlineAreaChart,
  AiOutlineBarChart,
  AiOutlineCalendar,
  AiOutlineDatabase,
  AiOutlineLineChart,
  AiOutlineMail,
} from "react-icons/ai";
import { TbChartDots2, TbNumbers } from "react-icons/tb";
import { BiTask } from "react-icons/bi";
import NumberGrid from "@/components/Dashboard/DashboardComponents/NumberGrid";
import GridChart from "@/components/Dashboard/DashboardComponents/GridChart";
import SimpleDataGrid from "@/components/Dashboard/DashboardComponents/SimpleDataGrid";
import CalenderGrid from "@/components/Dashboard/DashboardComponents/CalendarGrid";
import DealsRevenueForecastgrid from "@/components/Dashboard/DashboardComponents/DealsRevenueForeCastGrid";
import EmailreportGrid from "@/components/Dashboard/DashboardComponents/EmailReportGrid";
import EmailReportGrid from "@/components/Dashboard/DashboardComponents/EmailReportGrid";
import GanttGrid from "@/components/Dashboard/DashboardComponents/GanttGrid";
import TaskGrid from "@/components/Dashboard/DashboardComponents/TaskGrid";
import PipelineSalesChartGrid from "@/components/Dashboard/DashboardComponents/PipelineSalesChartGrid";

export default function DashboardBuilderSidebar() {
  const ComponentList = [
    { id: "1", title: "Chart", logo: <AiOutlineBarChart /> },
    { id: "2", title: "SimpleData", logo: <AiOutlineDatabase /> },
    { id: "3", title: "Numbers", logo: <TbNumbers /> },
    { id: "4", title: "Calendar", logo: <AiOutlineCalendar /> },
    { id: "5", title: "Deals Revenue Forecast", logo: <AiOutlineLineChart /> },
    { id: "6", title: "Email", logo: <AiOutlineMail /> },
    // { id: "7", title: "Gantt", logo: <TbChartDots2 /> },
    { id: "8", title: "Task", logo: <BiTask /> },
    { id: "9", title: "PipeLine Sales Chart", logo: <AiOutlineAreaChart /> },
  ];
  return (
    <div>
      <div className="bg-white px-4 py-2 h-[84vh] overflow-y-scroll scrollbar-hide">
        <div className="px-4 py-2 font-semibold text-md">Widgets</div>
        <div>
          {ComponentList.map((item: any, index: number) => (
            <div key={index} className="w-full px-4 py-2">
              <Component WidgetName={item?.title} icon={item?.logo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
