// import { DashboardbuilderContext } from "@/pages/builder/GridDrag";
import { GlobalContext } from "@/layouts/GlobalLayout";
import { DashboardBuilderContext } from "@/pages/builder/dashboard/playground";
import React, { useContext, useState } from "react";
import DashBoardSelect from "../DashboardComponents/DashboardSelect";

export default function SimpleDataSetting({ ChangeSize }: any) {
  const dashctx: any = useContext(GlobalContext);
  // console.log(dashctx)
  const CurrencyRadio = [
    { symbol: "$" },
    { symbol: "Є" },
    { symbol: "£" },
    { symbol: "%" },
  ];

  const SizeRadio = [{ name: "Small" }, { name: "Medium" }, { name: "Large" }];

  const [simpleData, setSimpleData] = useState<any>({
    simpleHeader: dashctx?.formValues?.find(
      (item: { id: number }) => item?.id === 4
    )?.formData?.simpleHeader,
    simpleCardTitle: "",
    simpleCardImage: null,
    simpleStatus: "",
    simpleDate: "",
    clientName: "",
    unit: dashctx?.formValues?.find((item: { id: number }) => item?.id === 4)
      ?.formData?.unit,
    Source: dashctx?.formValues?.find((item: { id: number }) => item?.id === 4)
      ?.formData?.Source,
    Type: dashctx?.formValues?.find((item: { id: number }) => item?.id === 4)
      ?.formData?.Type,
    amount: "",
  });

  // console.log()

  // console.log("form", dashctx.formValues);

  const handleChange = (e: any) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      // If the input type is file, update the selected image file
      const file = files[0];
      if (file instanceof File || file instanceof Blob) {
        setSimpleData((prevData: any) => ({ ...prevData, [name]: file }));
      } else {
        console.error("Invalid file object.");
        // Handle the error or show a message to the user that the selected file is invalid.
      }
    } else {
      setSimpleData((prevData: any) => ({ ...prevData, [name]: value }));
    }

    dashctx.setFormValues((prevFormValues: any) =>
      prevFormValues.map((formValue: any) =>
        formValue.id === 4
          ? {
              ...formValue,
              formData: { ...formValue?.formData, [name]: value },
            }
          : formValue
      )
    );
  };

  const [selectedSymbol, setSelectedSymbol] = useState(null);

  const handleSelection = (symbol: any) => {
    setSelectedSymbol(symbol);
    setSimpleData((prevData: any) => ({ ...prevData, unit: symbol }));
  };

  const handleNew = (e: any) => {
    e.preventDefault();

    const imageUrl = URL.createObjectURL(simpleData.simpleCardImage);
    // console.log(imageUrl)
    const newItem = {
      simpleCardTitle: simpleData.simpleCardTitle,
      simpleCardImage: imageUrl,
      simpleStatus: simpleData.simpleStatus,
      simpleDate: simpleData.simpleDate,
      clientName: simpleData.clientName,
      amount: simpleData.amount,
      unit: simpleData.unit,
    };

    let form = dashctx?.formValues;
    let ind = form.findIndex((i: any) => i.id == 4);
    let obj = form[ind];
    obj.formData.cardData.push(newItem);

    dashctx.setFormValues((prevFormValues: any) =>
      prevFormValues.map((formValue: any) =>
        formValue.id === 4
          ? {
              ...formValue,
              formData: {
                ...formValue?.formData,
                cardData: obj.formData.cardData,
              },
            }
          : formValue
      )
    );

    setSimpleData({
      simpleCardTitle: "",
      simpleCardImage: null,
      simpleDate: "",
      simpleStatus: "",
      amount: "",
      clientName: "",
    });
  };

  const ValueSourceData = ["Task", "Appointments", "Pending Claims"];
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
    <div className="bg-white w-[30%] px-4 h-[89vh] overflow-y-scroll scrollbar-hide">
      <p className="mb-4 pt-2 text-lg font-semibold">
        {
          dashctx?.formValues?.find((item: { id: number }) => item?.id === 4)
            ?.name
        }
      </p>
      <form onSubmit={handleNew} className="grid w-full  grid-flow-row gap-5">
        <div className="">
          <p className="text-sm mb-2 font-semibold">Widget Header </p>
          <input
            disabled
            type="text"
            name="simpleHeader"
            value={simpleData.simpleHeader}
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
          <p className="text-sm mb-2 font-semibold">Title</p>
           <input disabled
            type="text"
            name="simpleCardTitle"
            value={simpleData.simpleCardTitle}
            onChange={handleChange}
            className="form-input border px-3 py-2 w-full border-grey/50 focus:ring-0 focus:border-grey text-base text-black rounded-md"
          />
        </div> */}
        {/* 
        <div className="">
          <p className="text-sm mb-2 font-semibold">Image</p>
           <input disabled
            type="file"
            name="simpleCardImage"
            onChange={handleChange}
            className="form-input border px-3 py-2 w-full border-grey/50 focus:ring-0 focus:border-grey text-base text-black rounded-md"
          />
        </div> */}

        {/* <div className="">
          <p className="text-sm mb-2 font-semibold">Client Name </p>
           <input disabled
            type="text"
            name="clientName"
            value={simpleData.clientName}
            onChange={handleChange}
            className="form-input border px-3 py-2 w-full border-grey/50 focus:ring-0 focus:border-grey text-base text-black rounded-md"
          />
        </div> */}

        {/* <div className="">
          <p className="text-sm mb-2 font-semibold">Date</p>
           <input disabled
            type="date"
            name="simpleDate"
            value={(simpleData.simpleDate)}
            onChange={handleChange}
            className="form-input border px-3 py-2 w-full border-grey/50 focus:ring-0 focus:border-grey text-base text-black rounded-md"
          />
        </div> */}

        {/* <div className="">
          <p className="text-sm mb-2 font-semibold">Amount</p>
           <input disabled
            type="number"
            name="amount"
            value={simpleData.amount}
            onChange={handleChange}
            className="form-input border px-3 py-2 w-full border-grey/50 focus:ring-0 focus:border-grey text-base text-black rounded-md"
          />
        </div> */}

        {/* <div className="">
          <p className="text-sm mb-2 font-semibold">Status</p>
           <input disabled
            type="text"
            name="simpleStatus"
            value={simpleData.simpleStatus}
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

          {/* <div className="bg-[#1258FC] rounded-md my-3">
            <button disabled type="submit" className="text-md font-medium form-input border px-3 py-2 w-full border-grey/50 focus:ring-0 focus:border-grey text-base text-white rounded-md">Submit</button>
          </div> */}
        </div>
      </form>
    </div>
  );
}
