import React, { useContext, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import dynamic from "next/dynamic";
// import { DashboardbuilderContext } from "@/pages/builder/GridDrag";
import { IoCopyOutline } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { DashboardBuilderContext } from "@/pages/builder/dashboard/playground";
import { GlobalContext } from "@/layouts/GlobalLayout";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options: any = {
  chart: {
    type: "area",
    height: 350,
    zoom: {
      enabled: false,
    },
  },
  xaxis: {
    categories: ["Lead", "ROF", "Patient"],
  },
};
const series = [
  {
    name: "series-1",
    data: [42, 36, 24],
    color: "#1258fc",
  },
];

export default function PipelineSalesChartGrid({
  item,
  handleDelete,
  handleDuplicate,
  index,
}: any) {
  const dashctx: any = useContext(GlobalContext);
  const [showMenu, setShowMenu] = useState(false);

  const unit = dashctx?.formValues?.find(
    (item: { id: number }) => item?.id === 9
  )?.formData?.unit;

  function formatNumberWithCommas(number: any) {
    const numberWithCommas = number
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return numberWithCommas;
  }

  const compData = dashctx?.layout;

  // const handleDelete = (e: any) => {
  //   e.stopPropagation();
  //   const filteredData = compData.filter(
  //     (item: any) => item.i !== "PipeLine Sales Chart"
  //   );
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
    <div className="m-1">
      <div
        className="bg-white p-4 border-gray-100 rounded-md shadow w-full relative"
        style={{ height: "100%", width: "100%" }}
      >
        <div className="flex justify-between">
          <div className="flex-col md:flex-row gap-4 mb-4 mr-4">
            <span className="text-md text-black font-semibold flex items-center h-7">
              {
                dashctx?.formValues?.find(
                  (item: { id: number }) => item?.id === 9
                )?.formData?.pipelineHeader
              }
            </span>
            <div className="relative">
              <select
                name="country"
                autoComplete="country-name"
                className="block w-32 rounded-md border py-1.5 pl-6 text-sm text-gray-900 border-grey/50 focus:ring-0"
              >
                <option>This Month</option>
                <option>This Year</option>
                <option>Last Year</option>
              </select>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-2.5 left-1 w-4 h-4"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z"></path>
              </svg>
            </div>
          </div>

          <div className="flex gap-2 ">
            <div className="flex flex-col justify-end   mb-4">
              <div className="border-b-2 border-gray-300 pb-3">
                <p className="text-2xl text-black font-semibold mb-2">
                  {unit == "%" ? "" : unit}
                  {formatNumberWithCommas(
                    dashctx?.formValues?.find(
                      (item: { id: number }) => item?.id === 9
                    )?.formData?.pipelineAmount
                  )}
                  {unit == "%" && unit}
                </p>
                <h4 className="text-xs text-[#9F9E9F]  font-medium text-end">
                  Total Amount
                </h4>
              </div>

              <div>
                <p className="text-2xl text-black font-semibold my-2 text-end">
                  {
                    dashctx?.formValues?.find(
                      (item: { id: number }) => item?.id === 9
                    )?.formData?.pipelineDealsNumber
                  }
                </p>
                <h4 className="text-xs text-[#9F9E9F]  font-medium text-end">
                  Total Deals
                </h4>
              </div>
            </div>
            {!dashctx?.previewEnable && (
              <div>
                {" "}
                <div
                  onClick={(e: any) => {
                    handleShow(e);
                  }}
                  className="hover:cursor-pointer relative pt-2"
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
        </div>

        <div>
          <ReactApexChart
            options={options}
            series={series}
            type="area"
            height={150}
          />
        </div>
      </div>
    </div>
  );
}
