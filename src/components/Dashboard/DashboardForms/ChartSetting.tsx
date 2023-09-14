// import { DashboardbuilderContext } from "@/pages/builder/GridDrag";
// import GlobalLayout, { GlobalContext } from "@/layouts/GlobalLayout";
import { GlobalContext } from "@/layouts/GlobalLayout";
import { DashboardBuilderContext } from "@/pages/builder/dashboard/playground";
import React, { useContext, useState } from "react";
import DashBoardSelect from "../DashboardComponents/DashboardSelect";

export default function ChartSetting({
  ChangeSize,
  dispatchLayout,
  item,
}: any) {
  const dashctx: any = useContext(GlobalContext);
  // console.log(dashctx)
  const CurrencyRadio = [
    { symbol: "$" },
    { symbol: "#" },
    // { symbol: "Є" },
    // { symbol: "£" },
    { symbol: "%" },
  ];

  const SizeRadio = [{ name: "Small" }, { name: "Medium" }, { name: "Large" }];

  const [chartData, setChartData] = useState({
    chartHeader: dashctx?.formValues?.find(
      (item: { id: number }) => item?.id === 1
    )?.formData?.chartHeader,
    chartSubHeader: dashctx?.formValues?.find(
      (item: { id: number }) => item?.id === 1
    )?.formData?.chartSubHeader,
    chartAmount: dashctx?.formValues?.find(
      (item: { id: number }) => item?.id === 1
    )?.formData?.chartAmount,
    unit: dashctx?.formValues?.find((item: { id: number }) => item?.id === 1)
      ?.formData?.unit,
    source: dashctx?.formValues?.find((item: { id: number }) => item?.id === 1)
      ?.formData?.source,
    type: dashctx?.formValues?.find((item: { id: number }) => item?.id === 1)
      ?.formData?.type,
    compare: "",
    size: "",
  });

  // console.log("form", dashctx.formValues)

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setChartData((prevData: any) => ({ ...prevData, [name]: value }));

    dashctx.setFormValues((prevFormValues: any) =>
      prevFormValues.map((formValue: any) =>
        formValue.id === 1
          ? { ...formValue, formData: { ...formValue.formData, [name]: value } }
          : formValue
      )
    );
  };

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

  return (
    <div className="bg-white  md:w-[30%] px-4 py-2 h-[80vh] overflow-y-scroll scrollbar-hide">
      <p className="mb-4 text-lg font-semibold">
        {
          dashctx?.formValues?.find((item: { id: number }) => item?.id === 1)
            ?.name
        }
      </p>
      <div className="grid grid-flow-row gap-5">
        <div className="">
          <p className="text-sm mb-2 font-semibold">Widget Header</p>
          <input
            disabled
            type="text"
            name="chartHeader"
            value={chartData.chartHeader}
            onChange={handleChange}
            className="form-input border px-3 py-2 w-full border-grey/50 focus:ring-0 focus:border-grey text-base text-black rounded-md"
          />
        </div>
        {/* <div className="">
          <p className="text-sm mb-2 font-semibold">Sub Header</p>
          <input      disabled
            type="text"
            name="chartSubHeader"
            value={chartData.chartSubHeader}
            onChange={handleChange}
            className="form-input border px-3 py-2 w-full border-grey/50 focus:ring-0 focus:border-grey text-base text-black rounded-md"
          />
        </div>
        <div className="">
          <p className="text-sm mb-2 font-semibold">Amount</p>
          <input      disabled
            type="number"
            name="chartAmount"
            value={chartData.chartAmount}
            onChange={handleChange}
            className="form-input border px-3 py-2 w-full border-grey/50 focus:ring-0 focus:border-grey text-base text-black rounded-md"
          />
        </div> */}

        <div className="">
          <p className="text-sm mb-2 font-semibold rounded-lg">Value Source</p>
          <DashBoardSelect
            name="source"
            value={SourceValue}
            optionData={ValueSourceData}
            onChange={SourceHandleChange}
          />
        </div>

        <div className="">
          <p className="text-sm mb-2 font-semibold">Value Type</p>
          <DashBoardSelect
            name="type"
            value={TypeValue}
            optionData={ValueTypeData}
            onChange={TypeHandleChange}
          />
        </div>

        <div className="">
          <p className="text-sm mb-2 font-semibold">Value Unit</p>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 ">
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
        </div>
        <div className="">
          <p className="text-sm mb-2 font-semibold">Data Setting</p>
          <div className="flex items-center  gap-3">
            <input
              checked={item?.chartData?.compare}
              name="compare"
              type="checkbox"
              onChange={(e) => {
                item.chartData = {
                  ...item.chartData,
                  compare: e.target.checked,
                };
                dispatchLayout({
                  type: "REFRESH_LAYOUT_ITEM",
                  payload: item,
                });
              }}
              className="w-[18px] h-[18px] text-accent bg-white border-grey/20 rounded focus:ring-0 focus:outline-0 focus:outline-offset-0 focus:ring-offset-0"
            />
            <label htmlFor="teams" className="text-black text-base">
              Compare with past data
            </label>
          </div>
        </div>
        <div className="">
          <p className="text-sm mb-2 font-semibold">Data Y labels</p>
          <div className="flex items-center  gap-3">
            <input
              checked={item?.chartData?.label1value}
              name="compare"
              type="radio"
              onChange={(e) => {
                item.chartData = {
                  ...item.chartData,
                  labels: ["Lead", " Day 1", "ROF", " Plan Sent"],
                  label1value: e.target.checked,
                };
                dispatchLayout({
                  type: "REFRESH_LAYOUT_ITEM",
                  payload: item,
                });
              }}
              className="w-[18px] h-[18px] text-accent bg-white border-grey/20 rounded focus:ring-0 focus:outline-0 focus:outline-offset-0 focus:ring-offset-0"
            />
            <label htmlFor="teams" className="text-black text-base">
              Label1
            </label>
          </div>
        </div>
        {/* <div className=""> */}
        {/* <p className="text-sm mb-2 font-semibold">Data Y labels</p> */}
        <div className="flex items-center  gap-3">
          <input
            checked={item?.chartData?.label2value}
            name="compare"
            type="radio"
            onChange={(e) => {
              item.chartData = {
                ...item.chartData,
                labels: ["Lead", " Day 1", "ROF"],
                label2value: e.target.checked,
              };
              dispatchLayout({
                type: "REFRESH_LAYOUT_ITEM",
                payload: item,
              });
            }}
            className="w-[18px] h-[18px] text-accent bg-white border-grey/20 rounded focus:ring-0 focus:outline-0 focus:outline-offset-0 focus:ring-offset-0"
          />
          <label htmlFor="teams" className="text-black text-base">
            Label2
          </label>
        </div>
        <div className="flex items-center  gap-3">
          <input
            checked={item?.chartData?.label3value}
            name="compare"
            type="radio"
            onChange={(e) => {
              item.chartData = {
                ...item.chartData,
                labels: ["Lead", " Day 1"],
                label3value: e.target.checked,
              };
              dispatchLayout({
                type: "REFRESH_LAYOUT_ITEM",
                payload: item,
              });
            }}
            className="w-[18px] h-[18px] text-accent bg-white border-grey/20 rounded focus:ring-0 focus:outline-0 focus:outline-offset-0 focus:ring-offset-0"
          />
          <label htmlFor="teams" className="text-black text-base">
            Label3
          </label>
        </div>
        <div className="flex items-center  gap-3">
          <input
            checked={item?.chartData?.label4value}
            name="compare"
            type="radio"
            onChange={(e) => {
              item.chartData = {
                ...item.chartData,
                labels: ["Lead"],
                label4value: e.target.checked,
              };
              dispatchLayout({
                type: "REFRESH_LAYOUT_ITEM",
                payload: item,
              });
            }}
            className="w-[18px] h-[18px] text-accent bg-white border-grey/20 rounded focus:ring-0 focus:outline-0 focus:outline-offset-0 focus:ring-offset-0"
          />
          <label htmlFor="teams" className="text-black text-base">
            Label4
          </label>
        </div>
        {/* </div> */}
        <div className="pt-3">
          <p className="text-sm mb-2 font-semibold">Widget Size</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-2">
            {SizeRadio.map((item: any, index: number) => (
              <div
                key={index}
                onClick={() => {
                  // item.name === "Small"
                  //   ? ChangeSmallSize()
                  //   : item.name === "Medium"
                  //   ? ChangeBigSize()
                  //   : item.name === "Large"
                  //   ? ChangeLargeSize()
                  //   : null;
                  ChangeSize(item.name);
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
    </div>
  );
}
