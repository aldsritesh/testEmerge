import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveReactGridLayout = WidthProvider(Responsive);
import { useState, createContext } from "react";

import NumberGrid from "@/components/Dashboard/DashboardComponents/NumberGrid";
import GridChart from "@/components/Dashboard/DashboardComponents/GridChart";
import SimpleDataGrid from "@/components/Dashboard/DashboardComponents/SimpleDataGrid";
import CalenderGrid from "@/components/Dashboard/DashboardComponents/CalendarGrid";
import DealsRevenueForecastgrid from "@/components/Dashboard/DashboardComponents/DealsRevenueForeCastGrid";
import EmailReportGrid from "@/components/Dashboard/DashboardComponents/EmailReportGrid";
import GanttGrid from "@/components/Dashboard/DashboardComponents/GanttGrid";
import TaskGrid from "@/components/Dashboard/DashboardComponents/TaskGrid";
import PipelineSalesChartGrid from "@/components/Dashboard/DashboardComponents/PipelineSalesChartGrid";
import DashboardBuilderSidebar from "./DashboardBuilderSidebar";
import WidgetForm from "@/components/Dashboard/DashboardForms/ChartSetting";
import DealsRevenueSetting from "@/components/Dashboard/DashboardForms/DealsRevenueSetting";
import EmailChartSetting from "@/components/Dashboard/DashboardForms/EmailChartSetting";
import ChartSetting from "@/components/Dashboard/DashboardForms/ChartSetting";
import NumberSetting from "@/components/Dashboard/DashboardForms/NumberSetting";
import SalesPipelineSetting from "@/components/Dashboard/DashboardForms/SalesPipelineSetting";
import GanttChartSetting from "@/components/Dashboard/DashboardForms/GanttchartSetting";
import { dashboardFormConfig } from "@/config/dashboardFormConfig";
import SimpleDataSetting from "@/components/Dashboard/DashboardForms/SimpleDataSetting";
import TaskSetting from "@/components/Dashboard/DashboardForms/TaskSetting";
import CalendarSetting from "@/components/Dashboard/DashboardForms/CalendarSetting";
import Maindashboard from "@/components/Dashboard/Header/Maindashboard";

export const DashboardbuilderContext = createContext({
  hidden: {},
  setHidden: {},
  formValues: {},
  setFormValues: (item: any) => {},
  layout: {},
  setLayout: (item: any) => {},
  compare: {},
  setCompare: (item: any) => {},
  selectedIndex: {},
  setSelectedIndex: (item: any) => {},
});

export default function GridDrag({ layout, setLayout }: any) {
  const [hidden, setHidden] = useState("hidden");
  // const [mounted, setMounted] = useState(true);
  // const [layout, setLayout] = useState<any>([]);
  const [compactType, setCompactType] = useState("vertical");
  const [selectedIndex, setSelectedIndex] = useState<any>([]);
  const [formValues, setFormValues] = useState(dashboardFormConfig);
  const [compare, setCompare] = useState(false);

  const handleSelectComponent = (e: any, item: any) => {
    e.stopPropagation();
    setHidden("");
    setSelectedIndex(item);
  };

  const values = {
    hidden,
    setHidden,
    formValues,
    setFormValues,
    layout,
    setLayout,
    compare,
    setCompare,
    selectedIndex,
    setSelectedIndex,
  };

  const onDrop = (layout: any, layoutItem: any, _event: any) => {
    // alert(
    //   `Dropped element props:\n${JSON.stringify(
    //     layoutItem,
    //     ["x", "y", "w", "h"],
    //     2
    //   )}`
    // );
    // setMounted(false);

    const itemType = _event.dataTransfer.getData("text/plain");
    const containerRect = _event.currentTarget.getBoundingClientRect();
    const x = _event.clientX - containerRect.left;
    const y = _event.clientY - containerRect.top;

    const newItem = {
      i: itemType,
      x: Math.round(x / 100) * 2,
      y: Math.round(y / 30),
      w: 300,
      h: 30,
      data: {},
    };
    setLayout((prevLayout: any) => [...prevLayout, newItem]);
    // setMounted(true);
  };

  // const onDrop = (l, p, e: any) => {
  //   // e.preventDefault();
  //   const itemType = e.dataTransfer.getData("text/plain");

  //   const containerRect = e.currentTarget.getBoundingClientRect();
  //   const x = e.clientX - containerRect.left;
  //   const y = e.clientY - containerRect.top;

  //   const newItem = {
  //     i: itemType,
  //     x: Math.round(x / 100) * 2,
  //     y: Math.round(y / 30),
  //     w: 300,
  //     h: 30,
  //   };

  //   setLayout((prevLayout: any) => [...prevLayout, newItem]);
  // };

  const onDragOver = (e: any) => {
    // e.preventDefault();
    // setMounted(false);
  };

  const handleLayoutChange = (layouts: any) => {
    localStorage.setItem("grid-layout", JSON.stringify(layouts));
  };

  const defaultProps = {
    className: "newData",
    // rowHeight: 300,
    onLayoutChange: function () {},

    cols: { lg: 4, md: 3, sm: 2, xs: 1, xxs: 1 },
  };

  const handleCloseSetting = () => {
    setSelectedIndex([]);
    setHidden("hidden");
  };

  // console.log(layout)

  return (
    <DashboardbuilderContext.Provider value={values}>
      <div className="flex h-auto  overflow-scroll ">
        {selectedIndex.length == 0 ? (
          <DashboardBuilderSidebar />
        ) : selectedIndex.i === "Chart" ? (
          <ChartSetting />
        ) : selectedIndex.i === "Numbers" ? (
          <NumberSetting />
        ) : selectedIndex.i === "Deals Revenue Forecast" ? (
          <DealsRevenueSetting />
        ) : selectedIndex.i === "Email" ? (
          <EmailChartSetting />
        ) : selectedIndex.i === "PipeLine Sales Chart" ? (
          <SalesPipelineSetting />
        ) : selectedIndex.i === "Gantt" ? (
          <GanttChartSetting />
        ) : selectedIndex.i === "Task" ? (
          <TaskSetting />
        ) : selectedIndex.i === "Calendar" ? (
          <CalendarSetting />
        ) : selectedIndex.i === "SimpleData" ? (
          <SimpleDataSetting />
        ) : null}

        <div
          className="w-full h-[100vh] overflow-y-scroll scrollbar-hide bg-gray-200"
          onClick={handleCloseSetting}
        >
          <ResponsiveReactGridLayout
            {...defaultProps}
            onLayoutChange={handleLayoutChange}
            isResizable={false}
            measureBeforeMount={false}
            useCSSTransforms={false}
            compactType={null}
            preventCollision={!compactType}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            onDrop={onDrop}
            onDragStop={onDragOver}
            onDragOver={onDragOver}
            isDroppable={true}
            // allowOverlap={true}

            // layouts={layouts}
            // onBreakpointChange={onBreakpointChange}
            // onLayoutChange={onLayoutChange}
            // WidthProvider option
            // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
            // and set `measureBeforeMount={true}`.
            // useCSSTransforms={mounted}
            // compactType={compactType}
            // preventCollision={!compactType}
            // isDroppable={true}
          >
            {layout?.map((item: any, index: number) => (
              <div
                key={index}
                onClick={(e) => handleSelectComponent(e, item)}
                className="h-auto w-full border "
              >
                {item.i === "Chart" && <GridChart item={item} />}
                {item.i === "Numbers" && <NumberGrid item={item} />}
                {item.i === "SimpleData" && <SimpleDataGrid item={item} />}
                {item.i === "Calendar" && <CalenderGrid item={item} />}
                {item.i === "Deals Revenue Forecast" && (
                  <DealsRevenueForecastgrid item={item} />
                )}
                {item.i === "Email" && <EmailReportGrid item={item} />}
                {item.i === "Gantt" && <GanttGrid item={item} />}
                {item.i === "Task" && <TaskGrid item={item} />}
                {item.i === "PipeLine Sales Chart" && (
                  <PipelineSalesChartGrid item={item} />
                )}
              </div>
            ))}
          </ResponsiveReactGridLayout>
        </div>
      </div>
    </DashboardbuilderContext.Provider>
  );
}
