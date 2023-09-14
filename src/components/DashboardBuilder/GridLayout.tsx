import { useContext, useEffect, useState } from "react";
import { Layout, Responsive, WidthProvider } from "react-grid-layout";
import CalenderGrid from "../Dashboard/DashboardComponents/CalendarGrid";
import DealsRevenueForecastgrid from "../Dashboard/DashboardComponents/DealsRevenueForeCastGrid";
import EmailReportGrid from "../Dashboard/DashboardComponents/EmailReportGrid";
import GanttGrid from "../Dashboard/DashboardComponents/GanttGrid";
import GridChart from "../Dashboard/DashboardComponents/GridChart";
import NumberGrid from "../Dashboard/DashboardComponents/NumberGrid";
import PipelineSalesChartGrid from "../Dashboard/DashboardComponents/PipelineSalesChartGrid";
import SimpleDataGrid from "../Dashboard/DashboardComponents/SimpleDataGrid";
import TaskGrid from "../Dashboard/DashboardComponents/TaskGrid";
import { DashboardBuilderContext } from "@/pages/builder/dashboard/playground";
// import GridChart from "./Components/GridChart";
const ResponsiveReactGridLayout = WidthProvider(Responsive);
export default function GridLayout({
  layout,
  onDrop,
  setSelectedIndex,
  handleDelete,
  handleDuplicate,
}: {
  layout: any;
  onDrop?: Function;
  setSelectedIndex?: any;
  handleDelete?: Function;
  handleDuplicate?: Function;
}) {
  const [currentBreakPoints, setCurrentBreakPoints] = useState("");
  const dashctx = useContext(DashboardBuilderContext);

  const [compactType, setcompactType] = useState<any>("vertical");
  const [mounted, setmounted] = useState(false);
  const handleCloseSetting = () => {
    setSelectedIndex([]);
    // setHidden("hidden");
  };

  const defaultProps = {
    className: `w-[100%]`,
    isDraggable: !dashctx?.previewEnable,
    isResizable: true,
    breakpoints: { xxl: 1600, xl: 1200, lg: 992, md: 768, sm: 576, xs: 480 },
    cols: { xxl: 10, xl: 10, lg: 8, md: 6, sm: 4, xs: 2 },
    rowHeight: 100,
    margin: [0, 0],
    containerPadding: [0, 0],
    onBreakpointChange: setCurrentBreakPoints,
    // onClick: setSelectedIndex([]),
  };

  useEffect(() => {
    setmounted(true);
  }, []);

  return (
    <ResponsiveReactGridLayout
      {...defaultProps}
      layout={layout}
      // onLayoutChange={this.onLayoutChange}
      onDrop={onDrop}
      // WidthProvider option
      measureBeforeMount={false}
      // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
      // and set `measureBeforeMount={true}`.
      useCSSTransforms={mounted}
      compactType={compactType}
      preventCollision={!compactType}
      isDroppable={true}
      isResizable={false}
      // isDraggable={false}
      //   droppingItem={{ i: "xx", h: 50, w: 250 }}
    >
      {layout?.map((itm: any, i: any) => (
        <div
          key={i}
          data-grid={{
            x: itm.x,
            y: itm.y,
            w: itm.w,
            h: itm.h,
          }}
          className={`w-[100%] h-[100%] overflow-hidden
          ${dashctx?.previewEnable ? "" : "relative"}`}
          onClick={(e) => {
            e.stopPropagation();
            setSelectedIndex(itm);
          }}
        >
          {/* <GridChart /> */}
          {itm.i === "Chart" && (
            <GridChart
              item={itm}
              index={i}
              handleDelete={handleDelete}
              handleDuplicate={handleDuplicate}
            />
          )}
          {itm.i === "Numbers" && (
            <NumberGrid
              item={itm}
              index={i}
              handleDelete={handleDelete}
              handleDuplicate={handleDuplicate}
            />
          )}
          {itm.i === "SimpleData" && (
            <SimpleDataGrid
              item={itm}
              index={i}
              handleDelete={handleDelete}
              handleDuplicate={handleDuplicate}
            />
          )}
          {itm.i === "Calendar" && (
            <CalenderGrid
              item={itm}
              index={i}
              handleDelete={handleDelete}
              handleDuplicate={handleDuplicate}
            />
          )}
          {itm.i === "Deals Revenue Forecast" && (
            <DealsRevenueForecastgrid
              index={i}
              item={itm}
              handleDelete={handleDelete}
              handleDuplicate={handleDuplicate}
            />
          )}
          {itm.i === "Email" && (
            <EmailReportGrid
              item={itm}
              index={i}
              handleDelete={handleDelete}
              handleDuplicate={handleDuplicate}
            />
          )}
          {itm.i === "Gantt" && (
            <GanttGrid
              item={itm}
              index={i}
              handleDelete={handleDelete}
              handleDuplicate={handleDuplicate}
            />
          )}
          {itm.i === "Task" && (
            <TaskGrid
              item={itm}
              index={i}
              handleDelete={handleDelete}
              handleDuplicate={handleDuplicate}
            />
          )}
          {itm.i === "PipeLine Sales Chart" && (
            <PipelineSalesChartGrid
              item={itm}
              index={i}
              handleDelete={handleDelete}
              handleDuplicate={handleDuplicate}
            />
          )}
        </div>
      ))}
    </ResponsiveReactGridLayout>
  );
}
