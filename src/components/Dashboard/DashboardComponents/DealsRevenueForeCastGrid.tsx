import React, { useContext, useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiChevronRight } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

import dynamic from "next/dynamic";
// import { DashboardbuilderContext } from "@/pages/builder/GridDrag";
import { IoCopyOutline } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";
import { DashboardBuilderContext } from "@/pages/builder/dashboard/playground";
import { Height } from "@mui/icons-material";
import { GlobalContext } from "@/layouts/GlobalLayout";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function DealsRevenueForecastgrid({
  item,
  handleDelete,
  handleDuplicate,
  index,
}: any) {
  const dashctx: any = useContext(GlobalContext);
  const [showMenu, setShowMenu] = useState(false);
  const [data, setData] = useState<any>({});
  const [chartKey, setChartKey] = useState(0);
  // const [cashCollected, setCashCollected] = useState(false);
  // const [paidClaims, setPaidClaims] = useState(false);
  // const [pendingClaims, setPendingClaims] = useState(false);
  // const [draftClaims, setDraftClaims] = useState(false);

  useEffect(() => {
    // Find the object with id equal to 3 in the 'formValues' array
    const formDataWithId3: any = dashctx?.formValues.find(
      (item: { id: number }) => item.id === 3
    );

    // Check if such an object exists and set the state accordingly
    if (formDataWithId3) {
      setData(formDataWithId3.formData);
      setChartKey((prevKey) => prevKey + 1);
    }
  }, [dashctx?.setFormValues, dashctx, data, setData, dashctx?.setFormValues]);

  function formatNumberWithCommas(number: any) {
    if (number) {
      const numberWithCommas = number
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return numberWithCommas;
    }
  }

  const unit = dashctx?.formValues?.find(
    (item: { id: number }) => item?.id === 3
  )?.formData?.unit;

  const indiAmt1 = dashctx?.formValues?.find(
    (item: { id: number }) => item?.id === 3
  )?.formData?.indiGoal1Amt;

  const indiAmt2 = dashctx?.formValues?.find(
    (item: { id: number }) => item?.id === 3
  )?.formData?.indiGoal2Amt;

  const indiAmt3 = dashctx?.formValues?.find(
    (item: { id: number }) => item?.id === 3
  )?.formData?.indiGoal3Amt;

  const indiTotalAmt1 = dashctx?.formValues?.find(
    (item: { id: number }) => item?.id === 3
  )?.formData?.indiGoal1TotalAmt;

  const indiTotalAmt2 = dashctx?.formValues?.find(
    (item: { id: number }) => item?.id === 3
  )?.formData?.indiGoal2TotalAmt;

  const indiTotalAmt3 = dashctx?.formValues?.find(
    (item: { id: number }) => item?.id === 3
  )?.formData?.indiGoal3TotalAmt;

  const CompanyGoalAmount =
    parseInt(indiTotalAmt1) + parseInt(indiTotalAmt2) + parseInt(indiTotalAmt3);

  const AchievedGoalAmount =
    parseInt(indiAmt1) + parseInt(indiAmt2) + parseInt(indiAmt3);

  const radialCurve = (AchievedGoalAmount / CompanyGoalAmount) * 100;

  const state: any = {
    series: [radialCurve],
    options: {
      chart: {
        type: "radialBar",
      },
      stroke: {
        lineCap: "round",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 15,
            size: "60%",
          },
          dataLabels: {
            value: {
              color: "#111",
              fontSize: "20px",
              show: true,
              fontWeight: "bold",
            },
            total: {
              show: true,
              label: item?.revenueData?.goalHeader,
              color: "#A6A4A6",
              formatter: function () {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function

                if (unit == "%") {
                  return item?.revenueData?.TotalGoal + unit;
                } else {
                  return unit + item?.revenueData?.TotalGoal;
                }
              },
            },
          },
        },
      },
    },
  };

  const IndiGoalPercent1 = (indiAmt1 / indiTotalAmt1) * 100;
  const IndiGoalPercent2 = (indiAmt2 / indiTotalAmt2) * 100;
  const IndiGoalPercent3 = (indiAmt3 / indiTotalAmt3) * 100;

  const handleShow = (e: any) => {
    e.stopPropagation();
    dashctx?.setSelectedId(item);
    setShowMenu(!showMenu);
  };

  return (
    <div className="h-[100%] w-[100%] m-1">
      <div
        className="bg-white px-4 pt-4 rounded-md border-gray-100 shadow w-full h-auto relative"
        style={{ width: "100%", height: "100%" }}
      >
        <div className="flex justify-between w-full  ">
          <span className="font-semibold  ">{item?.revenueData?.name}</span>
          {!dashctx?.previewEnable && (
            <div className="flex w-36 items-center justify-end gap-3 text-xs font-semibold  ">
              <button className="flex items-center text-[#FF7145]">
                View More{" "}
                <span>
                  <FiChevronRight />
                </span>
              </button>

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

        <div className="flex gap-5 mt-5 ">
          <div className=" flex flex-col items-center  ">
            <div className="text-base text-black font-medium  ">
              {item?.revenueData?.mainGoal}
            </div>
            <div className=" w-44">
              <ReactApexChart
                key={chartKey} // <-- Add this key to trigger the rerender
                options={state.options}
                series={state.series}
                type="radialBar"
                height={250}
              />
            </div>
          </div>

          <div className="w-full ">
            <div className="text-base text-black font-medium mb-3">
              {item?.revenueData?.indiGoal}
            </div>
            <div className="mt-5 overflow-y-scroll scrollbar-hide ">
              {item?.revenueData?.cashCollected?.cashCollectedBool ? (
                <div className="space-y-1  mb-5">
                  <div>
                    <p className="text-sm text-black">
                      {item?.revenueData?.cashCollected?.name}
                    </p>
                    <p className="text-sm font-semibold text-[#A6A4A6]">
                      <span className="text-black font-bold">
                        {" "}
                        {unit == "%" ? "" : unit}
                        {formatNumberWithCommas(
                          item?.revenueData?.cashCollected?.amountInitial
                        )}
                        {unit == "%" && unit}/
                      </span>{" "}
                      {unit == "%" ? "" : unit}
                      {formatNumberWithCommas(
                        item?.revenueData?.cashCollected?.totalAmount
                      )}
                      {unit == "%" && unit}
                    </p>
                  </div>

                  {/* {item?.revenueData?.cashCollected === 1 ? ( */}
                  <div className="w-full h-2 bg-black/10 rounded-full">
                    <div
                      className={`bg-[#ff7043] h-2 rounded-full ${
                        IndiGoalPercent1 <= 25
                          ? "w-2/12"
                          : IndiGoalPercent1 > 25 && IndiGoalPercent1 <= 50
                          ? "w-5/12"
                          : IndiGoalPercent1 > 50 && IndiGoalPercent1 <= 75
                          ? "w-9/12"
                          : IndiGoalPercent1 > 75 && IndiGoalPercent1 <= 98
                          ? "w-11/12"
                          : IndiGoalPercent1 > 98 && IndiGoalPercent1 <= 100
                          ? "w-full"
                          : "w-1/12"
                      }`}
                    ></div>
                  </div>
                  {/* ) : null} */}
                </div>
              ) : null}
              {item?.revenueData?.paidClaims?.paidClaimsBool ? (
                <div className="space-y-1 mb-5">
                  <div>
                    <p className="text-sm text-black">
                      {item?.revenueData?.paidClaims?.name}
                    </p>
                    <p className="text-sm font-semibold text-[#A6A4A6]">
                      <span className="text-black font-bold">
                        {" "}
                        {unit == "%" ? "" : unit}
                        {formatNumberWithCommas(
                          item?.revenueData?.paidClaims?.amountInitial
                        )}
                        {unit == "%" && unit} /
                      </span>{" "}
                      {unit == "%" ? "" : unit}
                      {formatNumberWithCommas(
                        item?.revenueData?.paidClaims?.totalAmount
                      )}
                      {unit == "%" && unit}
                    </p>
                  </div>
                  <div className="w-full h-2 bg-black/10 rounded-full">
                    <div
                      className={`bg-[#ff7043] h-2 rounded-full  ${
                        IndiGoalPercent2 <= 25
                          ? "w-2/12"
                          : IndiGoalPercent2 > 25 && IndiGoalPercent2 <= 50
                          ? "w-5/12"
                          : IndiGoalPercent2 > 50 && IndiGoalPercent2 <= 75
                          ? "w-9/12"
                          : IndiGoalPercent2 > 75 && IndiGoalPercent2 <= 98
                          ? "w-11/12"
                          : IndiGoalPercent2 > 98 && IndiGoalPercent2 <= 100
                          ? "w-full"
                          : "w-1/12"
                      }`}
                    ></div>
                  </div>
                </div>
              ) : null}
              {item?.revenueData?.pendingClaims?.pendingClaimsBool ? (
                <div className="space-y-1 mb-5">
                  <div>
                    <p className="text-sm text-black">
                      {item?.revenueData?.pendingClaims?.name}
                    </p>
                    <p className="text-sm font-semibold text-[#A6A4A6]">
                      <span className="text-black font-bold">
                        {unit == "%" ? "" : unit}
                        {formatNumberWithCommas(
                          item?.revenueData?.pendingClaims?.amountInitial
                        )}
                        {unit == "%" && unit}/
                      </span>{" "}
                      {unit == "%" ? "" : unit}
                      {formatNumberWithCommas(
                        item?.revenueData?.pendingClaims?.totalAmount
                      )}
                      {unit == "%" && unit}
                    </p>
                  </div>
                  <div className="w-full h-2 bg-black/10 rounded-full">
                    <div
                      className={`bg-[#ff7043] h-2 rounded-full ${
                        IndiGoalPercent3 <= 25
                          ? "w-2/12"
                          : IndiGoalPercent3 > 25 && IndiGoalPercent3 <= 50
                          ? "w-5/12"
                          : IndiGoalPercent3 > 50 && IndiGoalPercent3 <= 75
                          ? "w-9/12"
                          : IndiGoalPercent3 > 75 && IndiGoalPercent3 <= 98
                          ? "w-11/12"
                          : IndiGoalPercent3 > 98 && IndiGoalPercent3 <= 95
                          ? "w-full"
                          : "w-1/12"
                      }`}
                    ></div>
                  </div>
                </div>
              ) : null}
              {item?.revenueData?.draftClaims?.draftClaimsBool ? (
                <div className="space-y-1 mb-5">
                  <div>
                    <p className="text-sm text-black">
                      {item?.revenueData?.draftClaims?.name}
                    </p>
                    <p className="text-sm font-semibold text-[#A6A4A6]">
                      <span className="text-black font-bold">
                        {unit == "%" ? "" : unit}
                        {formatNumberWithCommas(
                          item?.revenueData?.draftClaims?.amountInitial
                        )}
                        {unit == "%" && unit}/
                      </span>{" "}
                      {unit == "%" ? "" : unit}
                      {formatNumberWithCommas(
                        item?.revenueData?.draftClaims?.totalAmount
                      )}
                      {unit == "%" && unit}
                    </p>
                  </div>
                  <div className="w-full h-2 bg-black/10 rounded-full">
                    <div
                      className={`bg-[#ff7043] h-2 rounded-full ${
                        IndiGoalPercent3 <= 25
                          ? "w-2/12"
                          : IndiGoalPercent3 > 25 && IndiGoalPercent3 <= 50
                          ? "w-5/12"
                          : IndiGoalPercent3 > 50 && IndiGoalPercent3 <= 75
                          ? "w-9/12"
                          : IndiGoalPercent3 > 75 && IndiGoalPercent3 <= 98
                          ? "w-11/12"
                          : IndiGoalPercent3 > 98 && IndiGoalPercent3 <= 95
                          ? "w-full"
                          : "w-1/12"
                      }`}
                    ></div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
