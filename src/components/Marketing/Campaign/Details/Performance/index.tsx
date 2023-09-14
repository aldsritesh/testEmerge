import { Fullscreen } from "@mui/icons-material";
import React, { useRef, useState } from "react";
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineCalendar,
} from "react-icons/ai";
import { BiCalendarAlt } from "react-icons/bi";
import { BsArrowDownShort } from "react-icons/bs";
import ChartCard from "./ChartCard";
import { HiChevronDown } from "react-icons/hi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const mDeatails = [
  { title: "Marketing Assets" },
  { title: "Task" },
  { title: "Performance" },
];

const Performance = () => {
  const chartReview = [
    {
      id: 1,
      title: "Session",
      number: "456",
      percentage: "0.08%",
      status: "top",
    },
    {
      id: 2,
      title: "New Contact",
      number: "356",
      percentage: "0.05%",
      status: "down",
    },
    {
      id: 3,
      title: "Influenced Contact",
      number: "2.356",
      percentage: "18%",
      status: "down",
    },
    {
      id: 4,
      title: "Closed Deals",
      number: "106",
      percentage: "21%",
      status: "top",
    },
    {
      id: 5,
      title: "Influenced Revenue",
      number: "$1.564",
      percentage: "8%",
      status: "top",
    },
  ];

  const emailSummary = [
    {
      title: "Email Sent",
      number: "23",
    },
    {
      title: "Email Clicked",
      number: "43",
    },
    {
      title: "Email Opened",
      number: "10",
    },
  ];

  const adsSummary = [
    {
      title: "Impression",
      number: "456",
    },
    {
      title: "Clicks",
      number: "56",
    },
    {
      title: "Contact",
      number: "45",
    },
    {
      title: "Amount Spent",
      number: "$1.556",
    },
  ];

  const [select, setSelect] = useState(0);

  const options: any = {
    chart: {
      id: "line-chart",
      background: "#f8f8f8", // Set the background color of the chart
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
    stroke: {
      curve: "straight", // Use a straight line curve for the lines
    },
    fill: {
      type: "gradient", // Use gradient fill below the line
      gradient: {
        shade: "dark", // Set the shade color of the gradient
        type: "vertical", // Set the gradient direction
        shadeIntensity: 0.2, // Set the intensity of the shade color
        inverseColors: false, // Set the gradient color order
        opacityFrom: 0.5, // Set the starting opacity of the gradient
        opacityTo: 0.1, // Set the ending opacity of the gradient
      },
    },
  };

  const series = [
    {
      name: "New Contacts",
      data: [30, 40, 25, 50, 49, 60],
      color: "#1258fc", // Set the color of the red line
    },
    {
      name: "Influenced Contacts",
      data: [45, 35, 50, 30, 60, 42],
      color: "#e95757", // Set the color of the green line
    },
  ];
  //date
  const [selectedDate, setSelectedDate] = useState(null);
  const datepickerRef: any = useRef(null);
  const handleButtonClick = () => {
    datepickerRef.current.setOpen(true);
  };
  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };

  return (
    <div className="px-4">
      <div className="   h-full  rounded-lg">
        <div className="w-full h-20  flex items-center justify-between">
          <div>
            <form className="flex  gap-2 font-semibold items-center text-sm text-slate-600 ">
              <div className="dropdown dropdown-bottom border rounded-md py-2 px-2 ">
                <div
                  tabIndex={0}
                  onClick={handleButtonClick}
                  className="flex justify-between items-center"
                >
                  <AiOutlineCalendar className="h-4 w-4" />
                  <span className="text-[12px] text-gray-600 px-2">
                    {selectedDate == null
                      ? " Date created"
                      : moment(selectedDate).format("MM-DD-yyyy")}
                  </span>
                  <HiChevronDown className="h-4 w-4" />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-white rounded-box w-40 ml-[-10px]"
                >
                  <DatePicker
                    ref={datepickerRef}
                    selected={selectedDate}
                    onChange={handleDateChange}
                    onClickOutside={() => datepickerRef.current.setOpen(false)}
                  />
                </ul>
              </div>

              <div className="dropdown dropdown-bottom border rounded-md py-2 px-2">
                <div tabIndex={1} className="flex justify-between items-center">
                  <span className="text-[12px] text-gray-600 px-2">
                    Contact Attribution
                  </span>
                  <HiChevronDown className="h-4 w-4" />
                </div>
                <ul
                  tabIndex={1}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52  ml-[-10px]"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>
            </form>
          </div>
          <div className="w-full  lg:w-auto flex justify-between items-center mb-2">
            <div className="dropdown dropdown-bottom  border-r-[1px] border-gray-200 pr-2 mr-2">
              <div
                tabIndex={0}
                className="border-[1px] border-gray-200 m-1 py-2 px-2  2xl:px-4 2xl:py-2  rounded-md flex flex-wrap justify-between items-center"
              >
                <span className="text-gray-500 font-semibold text-[12px] 2xl:text-sm px-2">
                  Export
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="  flex items-center justify-between mt-5 mb-2">
          {chartReview.map((item: any, index: number) => (
            <div key={index} className={`w-1/5 px-3`}>
              <div className={`${item?.id == 5 ? null : "border-r-[1px]"}`}>
                <p className="text-gray-500 font-medium text-[12px] 2xl:text-sm px-2">
                  {item?.title}
                </p>
                <div className="flex space-x-3 items-center pt-1.5">
                  <p className="text-2xl font-semibold text-gray-700 pl-2">
                    {item?.number}
                  </p>
                  <div
                    className={` ${
                      item.status == "top"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    } flex items-center rounded-3xl justify-center font-medium px-2 py-1`}
                  >
                    {item.status == "top" ? (
                      <AiOutlineArrowUp className="text-[12px]" />
                    ) : (
                      <AiOutlineArrowDown className="text-[12px]" />
                    )}

                    <span className="text-[12px] pl-1">
                      {" "}
                      {item?.percentage}{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Chart Section Starts From Here */}
        <div className="border  mt-5 ml-5 mr-5 rounded">
          <div className="w-full md:w-10/12 flex flex-wrap ">
            <ChartCard
              data={{
                options: options,
                series: series,
                type: "area",
                height: 500,
                width: "120%",
              }}
              name="Contact"
            />
          </div>
        </div>
        {/* Last Box/ 4th Box */}
        <div className="px-5 flex mb-10 gap-5">
          {/* Email Summary box */}
          <div className="border w-1/2 mt-4 rounded-lg p-5 ">
            <p className="text-lg font-semibold mb-2">Email Summary</p>
            <div className="flex justify-between items-center">
              {/* Email Sent Section */}
              {emailSummary.map((item: any, index: number) => (
                <div className="mt-5 w-1/3" key={index}>
                  <p className="text-gray-500 font-medium text-[10px] 2xl:text-sm px-2">
                    {item.title}
                  </p>
                  <p className="text-2xl font-semibold text-gray-700 pl-2">
                    {item.number}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="border w-1/2 mt-4 rounded-lg p-5 ">
            <p className="text-lg font-semibold mb-2">Email Summary</p>
            <div className="flex justify-between items-center">
              {/* Email Sent Section */}
              {adsSummary.map((item: any, index: number) => (
                <div className="mt-5 w-1/3" key={index}>
                  <p className="text-gray-500 font-medium text-[10px] 2xl:text-sm px-2">
                    {item.title}
                  </p>
                  <p className="text-2xl font-semibold text-gray-700 pl-2">
                    {item.number}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
