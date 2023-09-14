import DashBoardSelect from "@/components/Dashboard/DashboardComponents/DashboardSelect";
import DashBuilderSelect from "@/components/Dashboard/DashboardComponents/DashboardSelect";
import { baseUrl } from "@/config/APIConstants";
import { useAuthentication } from "@/controllers/auth";
import { GlobalContext } from "@/layouts/GlobalLayout";
import { DashboardBuilderContext } from "@/pages/builder/dashboard/playground";
// import { DashboardbuilderContext } from "@/pages/builder/GridDrag";
import { InputLabel, MenuItem, Select } from "@mui/material";
import axios from "axios";
import React, { useContext, useState } from "react";

export default function NumberSetting({
  ChangeSize,
  layout,
  item,
  dispatchLayout,
}: any) {
  console.log(item, "layout");
  const dashctx: any = useContext(GlobalContext);
  const CurrencyRadio = [
    { symbol: "$" },
    { symbol: "Є" },
    { symbol: "£" },
    { symbol: "%" },
  ];

  const SizeRadio = [{ name: "Small" }, { name: "Medium" }, { name: "Large" }];

  const [NumberData, setNumberData] = useState({
    numberHeader: dashctx?.formValues?.find(
      (item: { id: number }) => item?.id === 2
    )?.formData?.Source,
    numberAmount: dashctx?.formValues?.find(
      (item: { id: number }) => item?.id === 2
    )?.formData?.numberAmount,
    numberLastAmount: dashctx?.formValues?.find(
      (item: { id: number }) => item?.id === 2
    )?.formData?.numberLastAmount,
    unit: dashctx?.formValues?.find((item: { id: number }) => item?.id === 2)
      ?.formData?.unit,
    Source: dashctx?.formValues?.find((item: { id: number }) => item?.id === 2)
      ?.formData?.Source,
    Type: dashctx?.formValues?.find((item: { id: number }) => item?.id === 2)
      ?.formData?.Type,
    size: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setNumberData((prevData: any) => ({ ...prevData, [name]: value }));
    // dashctx.setFormValues((prevFormValues: any) =>
    //   prevFormValues.map((formValue: any) =>
    //     formValue.id === 2
    //       ? { ...formValue, formData: { ...formValue.formData, [name]: value } }
    //       : formValue
    //   )
    // );
    item.data = {
      ...item.data,
      [name]: value,
    };
    dispatchLayout({ type: "REFRESH_LAYOUT_ITEM", payload: item });
  };

  const ValueSourceData = [
    "New patients",
    "Claims pending",
    "Claims submitted",
    "Claims rejected",
    "Accounts Receivable",
    "Total revenue",
    "Total Patient balance",
    "Total Leads",
    "Total Appointments",
    // "List of all appointments",
    "Total ROF",
    "Total Active Patients",
  ];
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
  // console.log(selectedSymbol);

  const [SourceValue, setSourceValue] = useState(ValueSourceData[0]);
  const [TypeValue, setTypeValue] = useState(ValueTypeData[0]);
  const [selectedSymbol, setSelectedSymbol] = useState("USD");
  const [currPrice, setCurrPrice] = useState(item?.data?.CurrentNumber);
  const { location, token }: any = useAuthentication();
  // const { setNumberDataCurr } = useContext(DashboardBuilderContext);
  console.log(parseInt(TypeValue));

  const WidgetGet = async (
    SourceValue: any,
    TypeValue: any,
    selectedSymbol: any
  ) => {
    await axios
      .get(
        `${baseUrl}widgets/location/f209ee50-96e6-4ca2-9eb5-80b93d31591f/number?source=${SourceValue.toString()
          .toUpperCase()
          .replace(" ", "_")}&timeframe=${
          TypeValue === "1 year" ? "365" : parseInt(TypeValue)
        }&unit=${
          selectedSymbol === "%"
            ? "PER"
            : selectedSymbol === "$"
            ? "USD"
            : selectedSymbol === "Є"
            ? "EUR"
            : "GBP"
        }`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log("ResponseWidget===>", res);
        item.data = {
          ...item.data,
          PreviousNumber: res?.data?.numberWidget?.previousValue,
          CurrentNumber: res?.data?.numberWidget?.currentValue,
          ChangePercentage: res?.data?.numberWidget?.changePercentage,
          vsText:
            `${TypeValue}` == "1 day"
              ? "Last Day"
              : `${TypeValue}` == "7 day"
              ? "Last Week"
              : `${TypeValue}` == "14 day"
              ? "Last Two week"
              : `${TypeValue}` == "30 day"
              ? "Last Month"
              : `${TypeValue}` == "60 day"
              ? "Last Two Month"
              : `${TypeValue}` == "90 day"
              ? "Last FInancial Quarter"
              : `${TypeValue}` == "180 day"
              ? "Last Half Year"
              : `${TypeValue}` == "1 year"
              ? "Last Year"
              : null,
        };
        dispatchLayout({ type: "REFRESH_LAYOUT_ITEM", payload: item });
      })
      .catch((err) => {
        console.log("WidgetErr", err);
        alert(err.response.data.error);
      });
  };

  const handleSelection = (symbol: any) => {
    setSelectedSymbol(symbol);
    WidgetGet(SourceValue, TypeValue, symbol);
  };

  const SourceHandleChange = (e: any) => {
    const value = e.target.value;
    setSourceValue(value);
    handleChange(e);
    WidgetGet(value, TypeValue, selectedSymbol);
  };

  const TypeHandleChange = (e: any) => {
    const value = e.target.value;
    setTypeValue(value);
    WidgetGet(SourceValue, value, selectedSymbol);
  };

  return (
    <div className="bg-white w-[30%] px-4 py-2 h-[89vh] overflow-y-scroll scrollbar-hide">
      <p className="mb-4  text-lg font-semibold">
        {
          dashctx?.formValues?.find((item: { id: number }) => item?.id === 2)
            ?.name
        }
      </p>
      <div className="grid grid-flow-row gap-5">
        <div className="">
          <p className="text-sm mb-2 font-semibold">Widget Header</p>
          <input
            disabled
            type="text"
            name="numberHeader"
            value={NumberData.numberHeader}
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
          <p className="text-sm mb-2 font-semibold">Value Timeframe</p>
          <DashBoardSelect
            name="Type"
            value={TypeValue}
            optionData={ValueTypeData}
            onChange={TypeHandleChange}
          />
        </div>

        {/* <div className="">
          <p className="text-sm mb-2 font-semibold">Amount</p>
          <input
            disabled
            type="number"
            name="numberAmount"
            value={NumberData.numberAmount}
            onChange={handleChange}
            className="form-input border px-3 py-2 w-full border-grey/50 focus:ring-0 focus:border-grey text-base text-black rounded-md"
          />
        </div> */}
        {/* <div className="">
          <p className="text-sm mb-2 font-semibold">Last Month Amount</p>
          <input
            disabled
            type="number"
            name="numberLastAmount"
            value={NumberData.numberLastAmount}
            onChange={handleChange}
            className="form-input border px-3 py-2 w-full border-grey/50 focus:ring-0 focus:border-grey text-base text-black rounded-md"
          />
        </div> */}
        <div className="">
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
            <p className="text-sm mb-2 font-semibold"> Widget Size</p>
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
