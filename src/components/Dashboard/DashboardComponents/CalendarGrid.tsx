// import { DashboardbuilderContext } from "@/pages/builder/GridDrag";
import { GlobalContext } from "@/layouts/GlobalLayout";
import { DashboardBuilderContext } from "@/pages/builder/dashboard/playground";
import moment from "moment";
import React, { useContext, useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import {
  BsCalendar2Minus,
  BsThreeDots,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { CgCreditCard } from "react-icons/cg";
import { FaRegEdit } from "react-icons/fa";
import { GoCalendar } from "react-icons/go";
import { HiOutlineCalendar } from "react-icons/hi";
import { IoCopyOutline } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";

export default function CalenderGrid({
  item,
  handleDelete,
  handleDuplicate,
  index,
}: any) {
  console.log("calenderItem", item);
  const dashctx: any = useContext(GlobalContext);
  const [showMenu, setShowMenu] = useState(false);

  const [dropDown, setDropDown] = useState(false);
  //   const { components, save, previewing } = useSelector(state => state.WidthObj);
  //   const dispatch = useDispatch();
  const _toggleDropDown = () => setDropDown(!dropDown);
  //   const _handleDuplicate = () => {
  //       setDropDown(false);
  //   }
  //   const _handleDelete = () => {
  //       setDropDown(false);
  //       const tempComps = JSON.parse(JSON.stringify(components));
  //       tempComps.splice(index, 1);
  //       dispatch({type: 'COMPONENT_CHANGED', payload: []});
  //       setTimeout(() => {
  //         dispatch({type: 'COMPONENT_CHANGED', payload: tempComps});
  //         dispatch({type: 'CURRENT_SELECTED_INDEX', payload: -1});
  //       }, 0);
  //   }

  const [data, setData] = useState(
    dashctx?.formValues?.find((item: { id: number }) => item?.id === 6)
      ?.formData?.cardData
  );

  const compData = dashctx?.layout;

  const handleShow = (e: any) => {
    e.stopPropagation();
    dashctx?.setSelectedId(item);
    setShowMenu(!showMenu);
  };

  return (
    <div className="h-[100%] w-[100%] m-1">
      <div
        style={{ width: "100%", height: "100%" }}
        className="bg-white p-4 rounded-md shadow w-full relative border-gray-100"
      >
        <div className="flex items-center justify-between gap-2 mb-4 ">
          <div className="text-sm text-black font-semibold">
            {
              dashctx?.formValues?.find(
                (item: { id: number }) => item?.id === 6
              )?.formData?.calendarHeader
            }
          </div>
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
        <div
          className="grid grid-flow-row gap-2 max-h-[90%] overflow-y-scroll scrollbar-hide"
          style={{ paddingRight: "7px" }}
        >
          {data.map((item: any, index: number) => (
            <div key={index} className="border border-grey/50 rounded-md p-3">
              <div className="flex flex-wrap items-center gap-2 justify-between mb-4">
                <h3 className="text-base text-accent font-semibold line-clamp-1">
                  {item.calendarItemHeader}
                </h3>
                <div className="flex items-center w-full justify-between">
                  <p className="text-sm font-semibold text-black">
                    {item.therapyRoom}
                  </p>
                  <span>
                    <CgCreditCard />
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 justify-between">
                <p className="text-grey text-[12px] font-medium">
                  {item.calendarDesc}
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <FaRegEdit />
                    <p className="text-sm text-black font-medium">
                      {moment(item.calendarTime).isValid()
                        ? moment(item.calendarTime).format("h:mm a")
                        : "format it"}
                    </p>
                  </div>
                  <button type="button">
                    <BsThreeDots />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
