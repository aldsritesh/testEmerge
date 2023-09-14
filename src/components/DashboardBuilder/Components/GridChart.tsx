import React, { useState, useContext } from "react";
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
// import { DashboardBuilderContext } from "@/pages/demo";
// import { DashboardBuilderContext } from "";

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

const labels = ["Lead", "Proposal", "Negotiation", "Contract Sent", "Lost"];

const data = {
  type: "bar",
  labels,
  datasets: [
    {
      label: "2022",
      data: [0.5, 1, 1.5, 2, 2.5],
      backgroundColor: "#2E66F6",
      borderRadius: 5,
    },
    {
      label: "2023",
      data: [0.5, 1, 1.5, 2, 2.5],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      borderRadius: 5,
    },
  ],
};

export default function GridChart({ handleChange }: any) {
  // const { hidden, setHidden } = useContext(DashboardBuilderContext);
  const [sizeNew, setSizeNew] = useState("");
  // const dashctx: any = useContext(DashboardBuilderContext);
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

  // const chartAmount = parseFloat(
  //   dashctx?.formValues?.find((item: { id: number }) => item?.id === 1)
  //     ?.formData?.chartAmount
  // );
  // const formattedChartAmount = formatNumberWithCommas(chartAmount);

  return (
    <div className={``}>
      <div className="bg-white p-4 rounded-md shadow relative z-50">
        <div className="flex items-center justify-between gap-2 mb-4 mr-4">
          <p className="text-sm text-black font-semibold">
            {/* {
              dashctx?.formValues?.find(
                (item: { id: number }) => item?.id === 1
              )?.formData?.chartHeader
            } */}
          </p>
          <Link
            href="/"
            className="flex items-center text-xs gap-px text-[#fc6c43]"
          >
            View details
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-2"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
            </svg>
          </Link>
        </div>
        <div className="flex flex-wrap justify-between gap-2 items-center mb-4">
          <div>
            <h4 className="text-xs text-grey mb-px font-bold">
              {/* {
                dashctx?.formValues?.find(
                  (item: { id: number }) => item?.id === 1
                )?.formData?.chartSubHeader
              }{" "} */}
            </h4>
            <p className="text-3xl text-black font-semibold">
              {/* {
                dashctx?.formValues?.find(
                  (item: { id: number }) => item?.id === 1
                )?.formData?.unit
              } */}
              {/* {formattedChartAmount} */}
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
        <div className="w-[100%] h-[70%]">
          {/* <div id="chart">
                  <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={380} />
                </div> */}
          <Bar options={options} data={data} />
        </div>
        {/* {!(save || previewing) && <div className="absolute right-2 top-4">
                  <span className="text-black cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M112,60a16,16,0,1,1,16,16A16,16,0,0,1,112,60Zm16,52a16,16,0,1,0,16,16A16,16,0,0,0,128,112Zm0,68a16,16,0,1,0,16,16A16,16,0,0,0,128,180Z"></path></svg>         
                  </span>
                  <ul className={`absolute z-50 mt-1 min-w-[120px] rounded bg-white p-0 py-2 text-sm shadow right-0 whitespace-nowrap ${showMenu ? '' : 'hidden'}`}>
                      <li onClick={_handleDuplicate}><a className='cursor-pointer flex items-center px-4 gap-1 py-2 hover:bg-black/5 hover:text-black'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"></path></svg>
                        Duplicate Widget
                        </a></li>
                      <li onClick={_handleDelete}><a className='cursor-pointer flex items-center px-4 gap-1 py-2 text-primary hover:bg-black/5'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path></svg>
                        Delete Widget</a>
                        </li>
                  </ul>
              </div>} */}
      </div>
      <div className={`pt-3  w-[300px]`}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-2">
          {SizeRadio.map((item: any, index: number) => (
            <div
              key={index}
              onClick={() => {
                console.log(item.value);
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
      </div>
    </div>
  );
}
