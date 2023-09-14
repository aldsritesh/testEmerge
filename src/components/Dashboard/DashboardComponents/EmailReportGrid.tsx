import React, { useContext, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
// import { DashboardbuilderContext } from "@/pages/builder/GridDrag";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoCopyOutline } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";
import { DashboardBuilderContext } from "@/pages/builder/dashboard/playground";
import { GlobalContext } from "@/layouts/GlobalLayout";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options: any = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
    },
  },
};

const labels = ["Dec 15", "Dec 16", "Dec 17", "Dec 18"];

export const data = {
  labels,
  datasets: [
    {
      label: "Sent",
      data: [10, 75, 52, 100, 5, 65, 20],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Opened",
      data: [6, 45, 13, 68, 43, 90, 25],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Clicked",
      data: [6, 35, 18, 48, 63, 80, 55],
      borderColor: "#FEB019",
      backgroundColor: "#FEB001",
    },
    {
      label: "Sign Ups",
      data: [6, 25, 15, 58, 66, 82, 52],
      borderColor: "#E81510",
      backgroundColor: "#E81510",
    },
  ],
};

export default function EmailReportGrid({
  item,
  handleDelete,
  handleDuplicate,
  index,
}: any) {
  const dashctx: any = useContext(GlobalContext);
  const [showMenu, setShowMenu] = useState(false);

  const compData = dashctx?.layout;

  // const handleDelete = (e: any) => {
  //   e.stopPropagation();
  //   const filteredData = compData.filter((item: any) => item.i !== "Email");
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
        style={{ width: "100%", height: "100%" }}
        className="bg-white rounded-md border-gray-100 shadow w-full h-[100%] relative p-4"
      >
        <div className="flex items-center justify-between gap-2 mb-4">
          <h2 className="text-lg font-semibold text-black">
            {
              dashctx?.formValues?.find(
                (item: { id: number }) => item?.id === 7
              )?.formData?.emailHeader
            }
          </h2>

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
        <div>
          <Line options={options} data={data} />
        </div>
      </div>
    </div>
  );
}
