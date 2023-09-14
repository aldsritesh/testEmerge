// import { DashboardbuilderContext } from "@/pages/builder/GridDrag";
import { GlobalContext } from "@/layouts/GlobalLayout";
import { DashboardBuilderContext } from "@/pages/builder/dashboard/playground";
import React, { useContext, useState } from "react";
import DashBoardSelect from "../DashboardComponents/DashboardSelect";

export default function GanttChartSetting({ ChangeSize }: any) {
  const dashctx: any = useContext(GlobalContext);

  const SizeRadio = [{ name: "Small" }, { name: "Medium" }, { name: "Large" }];

  const [ganttData, setganttData] = useState({
    ganttHeader: dashctx?.formValues?.find(
      (item: { id: number }) => item?.id === 8
    )?.formData?.ganttHeader,
    Source: dashctx?.formValues?.find((item: { id: number }) => item?.id === 8)
      ?.formData?.Source,
    Type: dashctx?.formValues?.find((item: { id: number }) => item?.id === 8)
      ?.formData?.Type,
    size: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setganttData((prevData: any) => ({ ...prevData, [name]: value }));

    dashctx.setFormValues((prevFormValues: any) =>
      prevFormValues.map((formValue: any) =>
        formValue.id === 8
          ? { ...formValue, formData: { ...formValue.formData, [name]: value } }
          : formValue
      )
    );
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
      <p className="mb-4  text-lg font-semibold">
        {
          dashctx?.formValues?.find((item: { id: number }) => item?.id === 8)
            ?.name
        }
      </p>
      <div className="grid grid-flow-row gap-5">
        <div className="">
          <p className="text-sm mb-2 font-semibold">Widget Header</p>
          <input
            disabled
            type="text"
            name="ganttHeader"
            value={ganttData.ganttHeader}
            onChange={(e) => handleChange(e)}
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
  );
}
