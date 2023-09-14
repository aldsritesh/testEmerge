// import { DashboardbuilderContext } from "@/pages/builder/GridDrag";
import { GlobalContext } from "@/layouts/GlobalLayout";
import { DashboardBuilderContext } from "@/pages/builder/dashboard/playground";
import { InputLabel, MenuItem, Select } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import DashBoardSelect from "../DashboardComponents/DashboardSelect";

export default function DealsRevenueSetting({
  ChangeSize,
  dispatchLayout,
  item,
  layout,
}: any) {
  console.log("item", item);
  const dashctx: any = useContext(GlobalContext);
  const CurrencyRadio = [
    { symbol: "$" },
    { symbol: "Є" },
    { symbol: "£" },
    { symbol: "%" },
  ];

  const [totalGoal, setTotalGoal] = useState(item?.revenueData?.TotalGoal);

  const SizeRadio = [{ name: "Small" }, { name: "Medium" }, { name: "Large" }];

  const [revenueData, setRevenueData] = useState({
    revenueHeader: dashctx?.formValues?.find(
      (item: { id: number }) => item?.id === 3
    )?.formData?.revenueHeader,
    totalGoal: dashctx?.formValues?.find(
      (item: { id: number }) => item?.id === 3
    )?.formData?.totalGoal,
    indiGoal: dashctx?.formValues?.find(
      (item: { id: number }) => item?.id === 3
    )?.formData?.indiGoal,
    goalHeader: dashctx?.formValues?.find(
      (item: { id: number }) => item?.id === 3
    )?.formData?.goalHeader,
    totalGoalAmt: dashctx?.formValues?.find(
      (item: { id: number }) => item?.id === 3
    )?.formData?.totalGoalAmt,
    indiGoalTitle1: dashctx?.formValues?.find(
      (item: { id: number }) => item?.id === 3
    )?.formData?.indiGoalTitle1,
    indiGoalTitle2: dashctx?.formValues?.find(
      (item: { id: number }) => item?.id === 3
    )?.formData?.indiGoalTitle2,
    indiGoalTitle3: dashctx?.formValues?.find(
      (item: { id: number }) => item?.id === 3
    )?.formData?.indiGoalTitle3,
    indiGoal1Amt: dashctx?.formValues?.find(
      (item: { id: number }) => item?.id === 3
    )?.formData?.indiGoal1Amt,
    indiGoal2Amt: dashctx?.formValues?.find(
      (item: { id: number }) => item?.id === 3
    )?.formData?.indiGoal2Amt,
    indiGoal3Amt: dashctx?.formValues?.find(
      (item: { id: number }) => item?.id === 3
    )?.formData?.indiGoal3Amt,
    indiGoal1TotalAmt: dashctx?.formValues?.find(
      (item: { id: number }) => item?.id === 3
    )?.formData?.indiGoal1TotalAmt,
    indiGoal2TotalAmt: dashctx?.formValues?.find(
      (item: { id: number }) => item?.id === 3
    )?.formData?.indiGoal2TotalAmt,
    indiGoal3TotalAmt: dashctx?.formValues?.find(
      (item: { id: number }) => item?.id === 3
    )?.formData?.indiGoal3TotalAmt,
    unit: dashctx?.formValues?.find((item: { id: number }) => item?.id === 3)
      ?.formData?.unit,
    Source: dashctx?.formValues?.find((item: { id: number }) => item?.id === 3)
      ?.formData?.Source,
    Type: dashctx?.formValues?.find((item: { id: number }) => item?.id === 3)
      ?.formData?.Type,
    size: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setRevenueData((prevData: any) => ({ ...prevData, [name]: value }));

    dashctx.setFormValues((prevFormValues: any) =>
      prevFormValues.map((formValue: any) =>
        formValue.id === 3
          ? { ...formValue, formData: { ...formValue.formData, [name]: value } }
          : formValue
      )
    );
  };
  const handleChange1 = (e: any) => {
    const value = e.target.value;
    setTotalGoal(value);
    item.revenueData = {
      ...item.revenueData,
      TotalGoal: value,
    };
    handleChange(e);
    console.log("hello");
    dispatchLayout({ type: "REFRESH_LAYOUT_ITEM", payload: item });
  };
  // useEffect(() => {

  // }, [item, totalGoal, dispatchLayout]);

  const [selectedSymbol, setSelectedSymbol] = useState(null);

  const handleSelection = (symbol: any) => {
    setSelectedSymbol(symbol);
  };

  const ValueSourceData = ["Lead", "Deal", "Quote", "Sales Order", "Invoice"];
  const ValueTypeData = [
    "1 day",
    "7 day",
    "14 day",
    "30 day",
    "60 day",
    "90 day",
    "180 day",
    "1 year",
  ];

  const [SourceValue, setSourceValue] = useState(ValueSourceData[0]);
  const [TypeValue, setTypeValue] = useState(ValueTypeData[0]);

  const SourceHandleChange = (e: any) => {
    const value = e.target.value;
    setSourceValue(value);
    handleChange(e);
  };

  const TypeHandleChange = (e: any) => {
    const value = e.target.value;
    setTypeValue(value);
  };
  console.log("itemDeals", item);
  return (
    <div className="bg-white w-[30%] px-4 py-2 h-[89vh] overflow-y-scroll scrollbar-hide">
      <p className="mb-4  text-lg font-semibold">
        {item?.revenueData?.settingName}
      </p>
      <div className="grid grid-flow-row gap-5">
        <div>
          <p className="text-sm mb-2 font-semibold">Widget Header</p>
          <input
            disabled
            type="text"
            name="revenueHeader"
            value={revenueData.revenueHeader}
            onChange={handleChange}
            className="form-input border px-3 py-2 w-full border-grey/50 focus:ring-0 focus:border-grey text-base text-black rounded-md"
          />
        </div>
        <div>
          <p className="text-sm mb-2 font-semibold">Total Goal</p>
          <input
            type="number"
            name="TotalGoal"
            value={totalGoal}
            onChange={handleChange1}
            className="form-input border px-3 py-2 w-full border-grey/50 focus:ring-0 focus:border-grey text-base text-black rounded-md"
          />
          {/* <button onClick={saveGoal}>Save</button> */}
        </div>

        <div className="">
          <p className="text-sm mb-2 font-semibold">Value Source</p>
          <DashBoardSelect
            name="Source"
            value={SourceValue}
            optionData={ValueSourceData}
            onChange={SourceHandleChange}
          />
        </div>

        <div className="">
          <p className="text-sm mb-2 font-semibold">Value Type</p>
          <DashBoardSelect
            name="Type"
            value={TypeValue}
            optionData={ValueTypeData}
            onChange={TypeHandleChange}
          />
        </div>

        {/* <div >
          <p className="text-sm mb-2 font-semibold">Total Goal Header</p>
           <input disabled
            type="text"
            name="totalGoal"
            value={revenueData.totalGoal}
            onChange={handleChange}
            className="form-input border px-3 py-2 w-full border-grey/50 focus:ring-0 focus:border-grey text-base text-black rounded-md"
          />
        </div> */}
        {/* <div >
          <p className="text-sm mb-2 font-semibold">Individual Goal Header</p>
           <input disabled
            type="text"
            name="indiGoal"
            value={revenueData.indiGoal}
            onChange={handleChange}
            className="form-input border px-3 py-2 w-full border-grey/50 focus:ring-0 focus:border-grey text-base text-black rounded-md"
          />
        </div> */}
        {/* <div >
          <p className="text-sm mb-2 font-semibold">Goal Header</p>
           <input disabled
            type="text"
            name="goalHeader"
            value={revenueData.goalHeader}
            onChange={handleChange}
            className="form-input border px-3 py-2 w-full border-grey/50 focus:ring-0 focus:border-grey text-base text-black rounded-md"
          />
        </div> */}

        {/* <div >
          <p className="text-sm mb-2 font-semibold">Total Goal Amount</p>
           <input disabled
            type="number"
            name="totalGoalAmt"
            value={revenueData.totalGoalAmt}
            onChange={handleChange}
            className="form-input border px-3 py-2 w-full border-grey/50 focus:ring-0 focus:border-grey text-base text-black rounded-md"
          />
        </div>
        */}
        {/* <div >
          <p className="text-sm mb-2 font-semibold">Individual Goal Sub Heading</p>
          <div className="space-y-3">
           <input disabled
            type="text"
            name="indiGoalTitle1"
            value={revenueData.indiGoalTitle1}
            onChange={handleChange}
            className="form-input border px-3 py-2 w-full border-grey/50 focus:ring-0 focus:border-grey text-base text-black rounded-md"
          />
           <input disabled
            type="text"
            name="indiGoalTitle2"
            value={revenueData.indiGoalTitle2}
            onChange={handleChange}
            className="form-input border px-3 py-2 w-full border-grey/50 focus:ring-0 focus:border-grey text-base text-black rounded-md"
          />
           <input disabled
            type="text"
            name="indiGoalTitle3"
            value={revenueData.indiGoalTitle3}
            onChange={handleChange}
            className="form-input border px-3 py-2 w-full border-grey/50 focus:ring-0 focus:border-grey text-base text-black rounded-md"
          />
          </div>
        </div> */}

        {/* <div >
          <p className="text-sm mb-2 font-semibold">Individual Goal Amount</p>
          <div className="space-y-3">
           <input disabled
            type="number"
            name="indiGoal1Amt"
            value={revenueData.indiGoal1Amt}
            onChange={handleChange}
            className="form-input border px-3 py-2 w-full border-grey/50 focus:ring-0 focus:border-grey text-base text-black rounded-md"
          />
           <input disabled
            type="number"
            name="indiGoal2Amt"
            value={revenueData.indiGoal2Amt}
            onChange={handleChange}
            className="form-input border px-3 py-2 w-full border-grey/50 focus:ring-0 focus:border-grey text-base text-black rounded-md"
          />
           <input disabled
            type="number"
            name="indiGoal3Amt"
            value={revenueData.indiGoal3Amt}
            onChange={handleChange}
            className="form-input border px-3 py-2 w-full border-grey/50 focus:ring-0 focus:border-grey text-base text-black rounded-md"
          />
          </div>
        </div> */}

        {/* <div >
          <p className="text-sm mb-2 font-semibold">Individual Goal Total Amount</p>
          <div className="space-y-3">
           <input disabled
            type="number"
            name="indiGoal1TotalAmt"
            value={revenueData.indiGoal1TotalAmt}
            onChange={handleChange}
            className="form-input border px-3 py-2 w-full border-grey/50 focus:ring-0 focus:border-grey text-base text-black rounded-md"
          />
           <input disabled
            type="number"
            name="indiGoal2TotalAmt"
            value={revenueData.indiGoal2TotalAmt}
            onChange={handleChange}
            className="form-input border px-3 py-2 w-full border-grey/50 focus:ring-0 focus:border-grey text-base text-black rounded-md"
          />
           <input disabled
            type="number"
            name="indiGoal3TotalAmt"
            value={revenueData.indiGoal3TotalAmt}
            onChange={handleChange}
            className="form-input border px-3 py-2 w-full border-grey/50 focus:ring-0 focus:border-grey text-base text-black rounded-md"
          />
          </div>
        </div> */}
        <div className="">
          <p className="text-sm mb-2 font-semibold">Data Setting</p>
          <div className="flex items-center  gap-3">
            <input
              checked={item?.revenueData?.cashCollected?.cashCollectedBool}
              name="compare"
              type="checkbox"
              onChange={(e) => {
                item.revenueData.cashCollected = {
                  ...item.revenueData.cashCollected,
                  cashCollectedBool: e.target.checked,
                };
                dispatchLayout({
                  type: "REFRESH_LAYOUT_ITEM",
                  payload: item,
                });
              }}
              className="w-[18px] h-[18px] text-accent bg-white border-grey/20 rounded focus:ring-0 focus:outline-0 focus:outline-offset-0 focus:ring-offset-0"
            />
            <label htmlFor="teams" className="text-black text-base">
              Cash Collected
            </label>
          </div>
          <div className="flex items-center  gap-3">
            <input
              checked={item?.revenueData?.paidClaims?.paidClaimsBool}
              name="compare"
              type="checkbox"
              onChange={(e) => {
                item.revenueData.paidClaims = {
                  ...item.revenueData.paidClaims,
                  paidClaimsBool: e.target.checked,
                };

                console.log("itemnew", item);
                dispatchLayout({
                  type: "REFRESH_LAYOUT_ITEM",
                  payload: item,
                });
              }}
              className="w-[18px] h-[18px] text-accent bg-white border-grey/20 rounded focus:ring-0 focus:outline-0 focus:outline-offset-0 focus:ring-offset-0"
            />
            <label htmlFor="teams" className="text-black text-base">
              Paid Claims
            </label>
          </div>
          <div className="flex items-center  gap-3">
            <input
              checked={item?.revenueData?.pendingClaims?.pendingClaimsBool}
              name="compare"
              type="checkbox"
              onChange={(e) => {
                item.revenueData.pendingClaims = {
                  ...item.revenueData.pendingClaims,
                  pendingClaimsBool: e.target.checked,
                };
                dispatchLayout({
                  type: "REFRESH_LAYOUT_ITEM",
                  payload: item,
                });
              }}
              className="w-[18px] h-[18px] text-accent bg-white border-grey/20 rounded focus:ring-0 focus:outline-0 focus:outline-offset-0 focus:ring-offset-0"
            />
            <label htmlFor="teams" className="text-black text-base">
              Pending Claims
            </label>
          </div>
          <div className="flex items-center  gap-3">
            <input
              checked={item?.revenueData?.draftClaims?.draftClaimsBool}
              name="compare"
              type="checkbox"
              onChange={(e) => {
                item.revenueData.draftClaims = {
                  ...item.revenueData.draftClaims,
                  draftClaimsBool: e.target.checked,
                };
                dispatchLayout({
                  type: "REFRESH_LAYOUT_ITEM",
                  payload: item,
                });
              }}
              className="w-[18px] h-[18px] text-accent bg-white border-grey/20 rounded focus:ring-0 focus:outline-0 focus:outline-offset-0 focus:ring-offset-0"
            />
            <label htmlFor="teams" className="text-black text-base">
              Draft Claims
            </label>
          </div>
        </div>
        <div>
          <p className="text-sm mb-2 font-semibold">Value Unit</p>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-2">
            {CurrencyRadio.map((item: any, index: any) => (
              <div key={index} className="relative">
                <label
                  className={`flex cursor-pointer rounded-lg border border-grey/20 bg-${
                    selectedSymbol === item.symbol ? "blue-400" : "white"
                  } justify-between items-start gap-4 py-1.5 px-2.5 text-center`}
                >
                  <h3 className="font-semibold text-lg relative z-10 mx-auto">
                    {item.symbol}
                  </h3>
                  <input
                    name="unit"
                    type="radio"
                    value={item.symbol}
                    className={`form-checkbox relative hidden z-10 peer `}
                    onChange={(e) => {
                      handleSelection(item.symbol);
                      handleChange(e);
                    }}
                  />
                  <span className="rounded-lg border border-grey/20 peer-checked:border-grey absolute top-0 left-0 z-0 w-full h-full"></span>
                </label>
              </div>
            ))}
          </div>

          <div className="pt-3">
            <p className="text-sm mb-2 font-semibold">Widget Size</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-2">
              {SizeRadio.map((item: any, index: number) => (
                <div key={index} onClick={() => ChangeSize(item.name)}>
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
      </div>
    </div>
  );
}
