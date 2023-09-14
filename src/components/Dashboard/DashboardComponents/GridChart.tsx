import React, { useState, useContext, useEffect, useReducer } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { dashContext } from "../Header/Maindashboard";
import ReactApexChart from "react-apexcharts";
// import { DashboardbuilderContext } from "@/pages/builder/GridDrag";
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";
import item from "@/components/Leads/dnd/styles/item";
import { AiOutlineRight } from "react-icons/ai";
import { IoCopyOutline } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";
import { DashboardBuilderContext } from "@/pages/builder/dashboard/playground";
import { GlobalContext } from "@/layouts/GlobalLayout";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options: any = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Chart.js Bar Chart",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        callback: function (value: any, index: any, values: any) {
          const label = yLabels[value];
          return label ? label : value;
        },
      },
    },
  },
};

var yLabels: any = {
  0.5: "$5K",
  1: "$10K",
  1.5: "$15K",
  2: "$20K",
  2.5: "$25K",
};

// const labels = item?.chartData?.labels;

export default function GridChart({
  item,
  handleDelete,
  handleDuplicate,
  index,
}: any) {
  const { hidden, setHidden } = useContext(DashboardBuilderContext);
  const [sizeNew, setSizeNew] = useState("");
  const dashctx: any = useContext(GlobalContext);
  const [showMenu, setShowMenu] = useState(false);

  const data = {
    type: "bar",
    labels: item?.chartData?.labels,
    datasets: [
      {
        label: "2022",
        data: item?.chartData?.data,
        backgroundColor: "#2E66F6",
        borderRadius: 5,
      },
      item?.chartData?.compare && {
        label: "2023",
        data: item?.chartData?.data,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        borderRadius: 5,
      },
    ].filter(Boolean),
  };

  function formatNumberWithCommas(number: any) {
    const numberWithCommas = number
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return numberWithCommas;
  }
  const SizeRadio = [
    { name: "Small", value: "30vw" },
    { name: "Medium", value: "50vw" },
    { name: "Large", value: "100vw" },
  ];

  const chartAmount = parseFloat(item?.chartData?.chartAmount);
  const formattedChartAmount = formatNumberWithCommas(chartAmount);

  const handleShow = (e: any) => {
    e.stopPropagation();
    dashctx?.setSelectedId(item);
    setShowMenu(!showMenu);
  };

  const unit = dashctx?.formValues?.find(
    (item: { id: number }) => item?.id === 1
  )?.formData?.unit;

  return (
    <div className="m-1  w-[100%] h-[100%] ">
      <div
        style={{ height: "100%", width: "100%" }}
        className="bg-white border-gray-100 p-4 rounded-md shadow w-full h-full relative flex-col justify-between items-center"
      >
        <div className="flex items-center w-full justify-between gap-2 mb-4 mr-4">
          <p className="text-sm text-black font-semibold">
            {item?.chartData?.name}
          </p>
          {!dashctx?.previewEnable && (
            <div className="flex ">
              <span
                // href="/"
                className="flex items-center text-xs  text-[#fc6c43]"
              >
                View details
                <AiOutlineRight className="scale-75" />
              </span>
              <div
                onClick={(e: any) => handleShow(e)}
                className="hover:cursor-pointer relative"
              >
                <BsThreeDotsVertical className="scale-90 " />
              </div>
              {showMenu && (
                <div className="dropdown shadow-lg rounded-2xl text-xl font-semibold scale-50 absolute z-50 top-[1.5rem]  right-[-2.6rem]">
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
        <div className="flex flex-wrap justify-between gap-2 items-center mb-4 ">
          <div>
            <h4 className="text-xs text-grey mb-px font-bold">
              {item?.chartData?.chartSubHeader}
            </h4>
            <p className="text-3xl text-black font-semibold">
              {unit == "%" ? "" : unit == "#" ? "" : unit}
              {formattedChartAmount}
              {unit == "%" && unit}
            </p>
          </div>
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
        <div className="w-[100%] h-[70%] flex items-center">
          {/* <div id="chart">
                  <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={380} />
                </div> */}
          <Bar options={options} data={data} />
        </div>
      </div>
      {/* <div className={`pt-3 ${hidden} w-[300px]`}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-2">
          {SizeRadio.map((item: any, index: number) => (
            <div
              key={index}
              onClick={() => {
                setSizeNew(item.value);
              }}
            >
              <div className="relative">
                <label className="flex cursor-pointer rounded-md border border-grey/20 bg-white justify-between items-start gap-4 p-1.5 text-center">
                  <div
                    className={`h-7 ${
                      item.name === "Small"
                        ? "w-4/12"
                        : item.name === "Medium"
                        ? "w-6/12"
                        : "w-full"
                    } bg-gray-200 rounded-md`}
                  ></div>
                  <input
                    name="size"
                    type="radio"
                    className="form-checkbox relative hidden z-10 peer"
                  />
                  <span className="rounded-lg border border-grey/20 peer-checked:border-grey absolute top-0 left-0 z-0 w-full h-full"></span>
                </label>
              </div>
              <p className="text-sm mt-1">{item.name}</p>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}
