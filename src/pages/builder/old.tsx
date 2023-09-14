import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveReactGridLayout = WidthProvider(Responsive);
import { useState } from "react";
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

export default function NewDashboardBuilder() {
  const [layout, setLayout] = useState<any>([]);

  // const onLayoutChange = (layout: any) => {
  //   setLayout(layout);
  // };

  const ComponentList = [
    { id: "1", title: "Chart", logo: <AiOutlineBarChart /> },
    { id: "2", title: "SimpleData", logo: <AiOutlineDatabase /> },
    { id: "3", title: "Numbers", logo: <TbNumbers /> },
    { id: "4", title: "Calendar", logo: <AiOutlineCalendar /> },
    { id: "5", title: "Deals Revenue Forecast", logo: <AiOutlineLineChart /> },
    { id: "6", title: "Email", logo: <AiOutlineMail /> },
    { id: "7", title: "Gantt", logo: <TbChartDots2 /> },
    { id: "8", title: "Task", logo: <BiTask /> },
    { id: "9", title: "PipeLine Sales Chart", logo: <AiOutlineAreaChart /> },
  ];

  const onDrop = (e: any) => {
    e.preventDefault();
    const itemType = e.dataTransfer.getData("text/plain");

    // Calculate the x and y coordinates of the dropped item within the grid
    const containerRect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - containerRect.left;
    const y = e.clientY - containerRect.top;

    // console.log(itemType);

    // Create a new grid item with the dropped component's id
    const newItem = {
      // console: console.log("inside", itemType),
      i: itemType,
      x: Math.round(x / 100) * 2, // Convert the x-coordinate to grid units
      y: Math.round(y / 30), // Convert the y-coordinate to grid units
      w: 300, // Width of the grid item in grid units
      h: 30, // Height of the grid item in grid units
    };

    // Add the new grid item to the layout state
    setLayout((prevLayout: any) => [...prevLayout, newItem]);
  };

  const onDragOver = (e: any) => {
    e.preventDefault();
  };

  const getLayouts = () => {
    const savedLayouts = localStorage.getItem("grid-layout");

    return savedLayouts ? JSON.parse(savedLayouts) : { lg: layout };
  };

  // styled-components definition removed for brevity...
  const handleLayoutChange = (ComponentList: any, layouts: any) => {
    localStorage.setItem("grid-layout", JSON.stringify(layouts));
  };

  const defaultProps = {
    className: "layout",
    rowHeight: 65,
    onLayoutChange: function () {},
    cols: { lg: 12, md: 12, sm: 12, xs: 12, xxs: 12 },
  };

  const [compactType, setCompactType] = useState("vertical");
  const [mounted, setMounted] = useState(false);

  return (
    <div className="flex bg-white">
      <div>
        <div
          className="overflow-y-scroll scrollbar-hide"
          onDrop={onDrop}
          onDragOver={onDragOver}
        >
          <div className="px-4 py-2 font-semibold text-md">Widgets</div>
          {ComponentList.map((item: any, index: number) => (
            <div
              key={index}
              className="w-full px-4 py-2"
              draggable // Add the draggable attribute here
              onDragStart={(e) => e.dataTransfer.setData("text/plain", item.id)}
            >
              <Component WidgetName={item?.title} icon={item?.logo} />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-full bg-gray-200">
        <ResponsiveReactGridLayout
          {...defaultProps}
          onLayoutChange={handleLayoutChange}
          isResizable={true}
          maxW={16}
          maxH={16}
          measureBeforeMount={false}
          compactType={compactType}
          preventCollision={!compactType}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        >
          {/* Your grid items go here */}
          {/* For example, you can render custom components as grid items */}
          {layout.map((item: any, index: number) => (
            <div key={item.i} className="h-full w-full border border-blue-400">
              {item.i === "Numbers" ? <NumberGrid item={item} /> : null}
              {item.i === "Chart" ? <GridChart /> : null}
              {/* Add other conditions for rendering components */}
            </div>
          ))}
        </ResponsiveReactGridLayout>
      </div>
    </div>
  );
}
