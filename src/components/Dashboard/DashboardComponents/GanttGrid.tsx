import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import dynamic from "next/dynamic";
// import { DashboardbuilderContext } from "@/pages/builder/GridDrag";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoCopyOutline } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";
import { DashboardBuilderContext } from "@/pages/builder/dashboard/playground";
import { GlobalContext } from "@/layouts/GlobalLayout";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function GanttGrid({
  item,
  handleDelete,
  handleDuplicate,
  index,
}: any) {
  const dashctx: any = useContext(GlobalContext);

  const [series, setSeries] = useState<any>([
    {
      data: [
        {
          x: "Code",
          y: [
            new Date("2019-03-02").getTime(),
            new Date("2019-03-04").getTime(),
          ],
        },
        {
          x: "Test",
          y: [
            new Date("2019-03-04").getTime(),
            new Date("2019-03-08").getTime(),
          ],
        },
        {
          x: "Validation",
          y: [
            new Date("2019-03-08").getTime(),
            new Date("2019-03-12").getTime(),
          ],
        },
        {
          x: "Deployment",
          y: [
            new Date("2019-03-12").getTime(),
            new Date("2019-03-18").getTime(),
          ],
        },
      ],
    },
  ]);
  const [options, setOptions] = useState<any>({
    chart: {
      height: 350,
      type: "rangeBar",
      toolbar: "none",
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    xaxis: {
      type: "datetime",
    },
  });
  const [showMenu, setShowMenu] = useState(false);

  const compData = dashctx?.layout;

  // const handleDelete = (e: any) => {
  //   e.stopPropagation();
  //   const filteredData = compData.filter((item: any) => item.i !== "Gantt");
  //   dashctx?.setLayout(filteredData);
  //   dashctx?.setSelectedIndex([]);
  // };

  // const handleDuplicate = (e: any) => {
  //   e.stopPropagation();
  //   const DuplicateItem = dashctx?.selectedIndex;
  //   dashctx?.setLayout((prevLayout: any) => [...prevLayout, DuplicateItem]);
  //   // console.log(dashctx?.layout)
  // };
  const handleShow = (e: any) => {
    e.stopPropagation();
    dashctx?.setSelectedId(item);
    setShowMenu(!showMenu);
  };

  return (
    <div className="h-[100%] w-[100%] m-1">
      <div
        style={{ height: "100%", width: "100%" }}
        className="bg-white p-4 border-gray-100 rounded-md shadow w-full relative"
      >
        <div className="text-sm text-black font-semibold flex items-center justify-between">
          <span>
            {
              dashctx?.formValues?.find(
                (item: { id: number }) => item?.id === 8
              )?.formData?.ganttHeader
            }
          </span>
          {!dashctx?.previewEnable && (
            <div>
              <div
                onClick={(e: any) => {
                  handleShow(e);
                }}
                className="hover:cursor-pointer relative"
              >
                <BsThreeDotsVertical className="scale-90 " />
              </div>
              {showMenu && (
                <div className="dropdown shadow-lg rounded-2xl text-xl font-semibold scale-50 absolute z-50 top-[.80rem]  right-[-3.2rem]">
                  <ul className=" menu  shadow-lg bg-base-100 rounded-box w-64 ">
                    <div
                      onClick={(e) => handleDuplicate(e)}
                      className=" flex gap-2 p-2 w-full px-5 items-center hover:cursor-pointer rounded-t-2xl hover:bg-gray-200"
                    >
                      <span>
                        <IoCopyOutline className="scale-110" />
                      </span>
                      <span>Duplicate Widget</span>
                    </div>
                    <div
                      onClick={() => handleDelete(index)}
                      className="text-red-500 p-2 flex gap-2 w-full px-5 rounded-b-2xl items-center hover:cursor-pointer hover:bg-gray-200"
                    >
                      <span>
                        <RiDeleteBin5Line className="scale-110" />
                      </span>
                      <span>Delete widget</span>
                    </div>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
        <ReactApexChart
          options={options}
          series={series}
          type="rangeBar"
          height={"100%"}
          width={"100%"}
        />
      </div>
    </div>
  );
}
