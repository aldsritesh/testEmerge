// import { DashboardbuilderContext } from "@/pages/builder/GridDrag";
// import { token } from "@/config/APIConstants";
import { GlobalContext } from "@/layouts/GlobalLayout";
import { DashboardBuilderContext } from "@/pages/builder/dashboard/playground";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineDollar,
  AiOutlineEuroCircle,
  AiOutlinePound,
} from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiDollar, CiPercent } from "react-icons/ci";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { IoCopyOutline } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";
import { TbFileDollar } from "react-icons/tb";

export default function NumberGrid({
  item,
  handleDelete,
  handleDuplicate,
  index,
}: any) {
  console.log(item);
  const { hidden, setHidden } = useContext(DashboardBuilderContext);
  const dashctx: any = useContext(GlobalContext);
  const [showMenu, setShowMenu] = useState(false);

  function formatNumberWithCommas(number: any) {
    const numberWithCommas = number
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return numberWithCommas;
  }

  const numberAmount = parseFloat(item?.data?.CurrentNumber);
  const numberLastAmount = parseFloat(
    dashctx?.formValues?.find((item: { id: number }) => item?.id === 2)
      ?.formData?.numberLastAmount
  );
  const SizeRadio = [{ name: "Small" }, { name: "Medium" }, { name: "Large" }];

  const formattedNumberAmount = formatNumberWithCommas(numberAmount);
  const formattedLastAmount = formatNumberWithCommas(numberLastAmount);
  const unit = dashctx?.formValues?.find(
    (item: { id: number }) => item?.id === 2
  )?.formData?.unit;
  const ValueSource = dashctx?.formValues?.find(
    (item: { id: number }) => item?.id === 2
  )?.formData?.Source;

  const compData = dashctx?.layout;

  // const { numberDataCurr } = useContext(DashboardBuilderContext);

  // useEffect(() => {
  //   const WidgetGet = async () => {
  //     await axios
  //       .get(
  //         `${baseUrl}widgets/location/f209ee50-96e6-4ca2-9eb5-80b93d31591f/number?source=${SourceValue.toString()
  //           .toUpperCase()
  //           .replace(" ", "_")}&timeframe=${parseInt(TypeValue)}&unit=${
  //           selectedSymbol === "%"
  //             ? "PER"
  //             : selectedSymbol === "$"
  //             ? "USD"
  //             : selectedSymbol === "Є"
  //             ? "EUR"
  //             : "GBP"
  //         }`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       )
  //       .then((res) => {
  //         console.log("ResponseWidget===>", res);
  //         console.log(
  //           "res?.data?.numberWidget?.currentValue",
  //           res?.data?.numberWidget?.currentValue
  //         );
  //         setCurrPrice(res?.data?.numberWidget?.currentValue);
  //         setTimeout(() => {
  //           console.log("currprice", currPrice);
  //         }, 3000);

  //         dispatchLayout({ type: "REFRESH_LAYOUT_ITEM", payload: item });
  //       })
  //       .catch((err) => console.log("WidgetErr", err));
  //   };
  // }, []);

  // const handleDelete = (e: any) => {
  //   e.stopPropagation();
  //   const filteredData = compData.filter((item: any) => item.i !== "Numbers");
  //   dashctx?.setLayout(filteredData);
  //   dashctx?.setSelectedIndex([]);
  // };

  // const handleDuplicate = (e: any) => {
  //   e.stopPropagation();
  //   const DuplicateItem = dashctx?.selectedIndex;
  //   dashctx?.setLayout((prevLayout: any) => [...prevLayout, DuplicateItem]);
  //   console.log(dashctx?.layout);
  // };
  const handleShow = (e: any) => {
    e.stopPropagation();
    dashctx?.setSelectedId(item);
    setShowMenu(!showMenu);
  };
  console.log(
    "dashctx?.formValues?.find((item: { id: number }) => item?.id === 2)?.formData",
    dashctx?.formValues?.find((item: { id: number }) => item?.id === 2)
      ?.formData
  );

  return (
    <div className="m-1">
      <div
        className={`bg-white border-gray-100  rounded-md shadow w-full relative py-2 px-2`}
      >
        <div className="flex items-center justify-between gap-2 text-grey/80 mb-4">
          <div className="text-md  flex items-center gap-1">
            {ValueSource === "Invoice" ? (
              <TbFileDollar className="scale-125 text-gray-500" />
            ) : (
              <CiDollar className="scale-125 text-gray-500" />
            )}
            {
              // dashctx?.formValues?.find(
              //   (item: { id: number }) => item?.id === 2
              // )?.formData?.Source
              item.data?.Source
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
        <div className="flex flex-col flex-wrap gap-2 items-start">
          <div className="flex justify-between items-start">
            <p className={` text-black font-bold text-2xl mr-2`}>
              {/* {unit == "%" ||
              item?.data?.Source === "New Patient" ||
              item?.data?.Source == "New patients"
                ? ""
                : unit}
              {item?.data?.Source === "New Patient" ||
              item?.data?.Source == "New patients"
                ? formattedNumberAmount
                : "1000"}
              {unit === "%" && unit} */}
              {item?.data?.CurrentNumber}
              {/* {numberDataCurr} */}
            </p>

            <div className="grid grid-flow-row text-left mt-1">
              <p>
                <span
                  className={`text-green-600 ${
                    parseInt(item?.data?.ChangePercentage) < 0 &&
                    "text-red-600 bg-red-100 "
                  } items-center gap-px px-2 py-1 text-[10px] bg-green-100 rounded-full inline-flex`}
                >
                  {parseInt(item?.data?.ChangePercentage) < 0 ? (
                    <AiOutlineArrowDown />
                  ) : (
                    <AiOutlineArrowUp />
                  )}
                  {item?.data?.ChangePercentage}
                </span>
              </p>
            </div>
          </div>
          <div>
            <p className="text-xs text-grey">
              vs {item?.data?.vsText}:
              <span className="font-bold text-black">
                {/* {unit == "%" ? "" : unit}
                {formattedLastAmount}
                {unit === "%" && unit} */}
                {item?.data?.PreviousNumber}
              </span>
            </p>
          </div>
        </div>
        {/* {!(save || previewing) && (
          <div className="absolute right-2 top-2">
            <span
              className="text-black cursor-pointer"
              onClick={() => setShowMenu(!showMenu)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 256 256"
                onClick={() => {
                  ChangeDropDown();
                }}
              >
                <path d="M112,60a16,16,0,1,1,16,16A16,16,0,0,1,112,60Zm16,52a16,16,0,1,0,16,16A16,16,0,0,0,128,112Zm0,68a16,16,0,1,0,16,16A16,16,0,0,0,128,180Z"></path>
              </svg>
            </span>
            <ul
              className="absolute z-50 mt-1 min-w-[120px] rounded bg-white p-0 py-2 text-sm shadow right-0 whitespace-nowrap "
              style={{
                visibility: ShowDropDown == true ? "visible" : "hidden",
              }}
            >
              <li onClick={_handleDuplicate}>
                <a className=" cursor-pointer flex items-center px-4 gap-1 py-2 hover:bg-black/5 hover:text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"></path>
                  </svg>
                  Duplicate Widget
                </a>
              </li>
              <li onClick={_handleDelete}>
                <a className=" cursor-pointer flex items-center px-4 gap-1 py-2 text-primary hover:bg-black/5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path>
                  </svg>
                  Delete Widget
                </a>
              </li>
            </ul>
          </div>
        )} */}
      </div>
      <div className={`pt-3 ${hidden} w-[300px]`}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-2">
          {SizeRadio.map((item: any, index: number) => (
            <div key={index}>
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
              <p className="text-sm mt-1">Small</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
