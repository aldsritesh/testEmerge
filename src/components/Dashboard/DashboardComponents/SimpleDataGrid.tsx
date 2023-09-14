// import { DashboardbuilderContext } from "@/pages/builder/GridDrag";
import { GlobalContext } from "@/layouts/GlobalLayout";
import { DashboardBuilderContext } from "@/pages/builder/dashboard/playground";
import moment from "moment";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoCopyOutline } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";

export default function SimpleDataGrid({
  item,
  handleDelete,
  handleDuplicate,
  index,
}: any) {
  const dashctx: any = useContext(GlobalContext);
  const [showMenu, setShowMenu] = useState(false);

  function formatNumberWithCommas(number: any) {
    const numberWithCommas = number
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return numberWithCommas;
  }

  const [data, setData] = useState(
    dashctx?.formValues?.find((item: { id: number }) => item?.id === 4)
      ?.formData?.cardData
  );

  const unit = dashctx?.formValues?.find(
    (item: { id: number }) => item?.id === 4
  )?.formData?.unit;

  const compData = dashctx?.layout;

  // const handleDelete = (e: any) => {
  //   e.stopPropagation();
  //   const filteredData = compData.filter(
  //     (item: any) => item.i !== "SimpleData"
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
    <div className="overflow-y-scroll scrollbar-hide rounded-md h-[100%] w-[100%] m-1 pt-2">
      <div
        className="bg-white border-gray-100 rounded-md shadow w-100 py-3 h-fit px-2 pt-2 relative overflow-y-scroll scrollbar-hide"
        style={{ width: "100%" }}
      >
        <div className="bg-white fixed top-2 py-2 pr-3 w-[98%] flex items-center justify-between mb-5 ">
          <p className="font-semibold text-sm ">
            {
              dashctx?.formValues?.find(
                (item: { id: number }) => item?.id === 4
              )?.formData?.simpleHeader
            }
          </p>
          {!dashctx?.previewEnable && (
            <div>
              <div
                onClick={(e: any) => {
                  handleShow(e);
                }}
                className="hover:cursor-pointer relative"
              >
                <BsThreeDotsVertical className="scale-90 " color="red" />
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
        <div className="grid grid-flow-row gap-2 overflow-y-scroll scrollbar-hide mt-5">
          {data?.map((item: any, index: number) => (
            <div key={index} className=" bg-gray-50 rounded p-[0.8rem]">
              <div className="flex gap-2 items-center justify-between">
                <div className="space-y-1 text-left ">
                  <p className="text-[rgb(188,186,188)] text-[12px] s font-medium">
                    Closing date:{" "}
                    {moment(item.simpleDate).format("DD MMM YYYY")}
                  </p>
                  <p className="text-black font-medium pt-1 line-clamp-1">
                    {item.simpleCardTitle}
                  </p>

                  <div className="flex items-center  gap-2 pt-1">
                    <div className="flex justify-center items-center bg-red-300 w-6 h-6 overflow-hidden rounded-full">
                      <Image
                        className=""
                        width={25}
                        height={10}
                        src={item.simpleCardImage}
                        alt="SimpleCardImage"
                      />
                    </div>
                    <div className="text-grey text-xs font-semibold">
                      {item.clientName}
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[18px] text-black font-medium text-right mb-1">
                    {unit == "%" ? "" : unit}
                    {formatNumberWithCommas(item.amount)}
                    {unit == "%" && unit}
                  </p>
                  <span className="bg-blue-100 text-blue-600 whitespace-nowrap text-[12px] rounded-full px-2 py-1 font-medium">
                    {item.simpleStatus}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
