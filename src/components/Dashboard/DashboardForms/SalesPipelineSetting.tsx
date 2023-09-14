// import { DashboardbuilderContext } from "@/pages/builder/GridDrag";
import { GlobalContext } from "@/layouts/GlobalLayout";
import { DashboardBuilderContext } from "@/pages/builder/dashboard/playground";
import React, { useContext, useState } from "react";
import DashBoardSelect from "../DashboardComponents/DashboardSelect";

export default function SalesPipelineSetting({ ChangeSize }: any) {
  const dashctx: any = useContext(GlobalContext);
  const CurrencyRadio = [
    { symbol: "$" },
    { symbol: "Є" },
    { symbol: "£" },
    { symbol: "%" },
  ];

  const SizeRadio = [{ name: "Small" }, { name: "Medium" }, { name: "Large" }];

  const [pipelineChartData, setPipelineChartData] = useState({
    pipelineHeader: dashctx?.formValues?.find(
      (item: { id: number }) => item?.id === 9
    )?.formData?.pipelineHeader,
    // pipelineAmtHeader:"",
    // pipelineDealsHeader:"",
    pipelineAmount: dashctx?.formValues?.find(
      (item: { id: number }) => item?.id === 9
    )?.formData?.pipelineAmount,
    pipelineDealsNumber: dashctx?.formValues?.find(
      (item: { id: number }) => item?.id === 9
    )?.formData?.pipelineDealsNumber,
    unit: dashctx?.formValues?.find((item: { id: number }) => item?.id === 9)
      ?.formData?.unit,
    Source: dashctx?.formValues?.find((item: { id: number }) => item?.id === 9)
      ?.formData?.Source,
    Type: dashctx?.formValues?.find((item: { id: number }) => item?.id === 9)
      ?.formData?.Type,
    size: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setPipelineChartData((prevData: any) => ({ ...prevData, [name]: value }));

    dashctx.setFormValues((prevFormValues: any) =>
      prevFormValues.map((formValue: any) =>
        formValue.id === 9
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
    <div className="bg-white w-[30%] px-4 py-2 h-[89vh] overflow-y-scroll scrollbar-hide">
      <p className="mb-4 text-lg font-semibold">
        {
          dashctx?.formValues?.find((item: { id: number }) => item?.id === 9)
            ?.name
        }
      </p>
      <div className="grid grid-flow-row gap-5">
        <div className="">
          <p className="text-sm mb-2 font-semibold">Widget Header</p>
          <input
            type="text"
            name="pipelineHeader"
            value={pipelineChartData.pipelineHeader}
            onChange={handleChange}
            className="form-input border px-3 py-2 w-full border-grey/50 focus:ring-0 focus:border-grey text-base text-black rounded-md"
          />
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
        {/* <div className="">
          <p className="text-sm mb-2 font-semibold">Sub Header</p>
          <input
            type="text"
            name="pipelineDealsHeader"
            value={pipelineChartData.pipelineDealsHeader}
            onChange={handleChange}
            className="form-input border px-3 py-2 w-full border-grey/50 focus:ring-0 focus:border-grey text-base text-black rounded-md"
          />
        </div> */}
        {/* <div className="">
          <p className="text-sm mb-2 font-semibold">Amount</p>
          <input
            type="number"
            name="pipelineAmount"
            value={pipelineChartData.pipelineAmount}
            onChange={handleChange}
            className="form-input border px-3 py-2 w-full border-grey/50 focus:ring-0 focus:border-grey text-base text-black rounded-md"
          />
        </div>
        <div className="">
          <p className="text-sm mb-2 font-semibold">Total Deals</p>
          <input
            type="number"
            name="pipelineDealsNumber"
            value={pipelineChartData.pipelineDealsNumber}
            onChange={handleChange}
            className="form-input border px-3 py-2 w-full border-grey/50 focus:ring-0 focus:border-grey text-base text-black rounded-md"
          />
        </div> */}
        <div className="">
          <p className="text-sm mb-2 font-semibold">Widget Size</p>
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
          {/* <div className="pt-3">
          <p className="text-sm mb-2 font-semibold">Data Setting</p>
          <div className="flex items-center p-1.5 gap-3">
            <input
              id="teams"
              name="compare"
              type="checkbox"
              // onChange={(e)=>
              // {if(e.target.checked)
              // setCompare(true)}}
              className="w-[18px] h-[18px] text-accent bg-white border-grey/20 rounded focus:ring-0 focus:outline-0 focus:outline-offset-0 focus:ring-offset-0"
            />
            <label htmlFor="teams" className="text-black text-base">
              Compare with past data
            </label>
          </div>
        </div> */}
          <div className="pt-3">
            <p className="text-sm mb-2 font-semibold">Value Unit</p>
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
