// import { DashboardbuilderContext } from "@/pages/builder/GridDrag";
import moment from "moment";
import React, { useContext, useState } from "react";
import DashBoardSelect from "../DashboardComponents/DashboardSelect";
import { DashboardBuilderContext } from "@/pages/builder/dashboard/playground";
import { GlobalContext } from "@/layouts/GlobalLayout";

export default function CalendarSetting({ ChangeSize }: any) {
  const dashctx: any = useContext(GlobalContext);

  const SizeRadio = [{ name: "Small" }, { name: "Medium" }, { name: "Large" }];

  const [calendarData, setcalendarData] = useState<any>({
    calendarHeader: dashctx?.formValues?.find(
      (item: { id: number }) => item?.id === 6
    )?.formData?.calendarHeader,
    Source: dashctx?.formValues?.find((item: { id: number }) => item?.id === 6)
      ?.formData?.Source,
    Type: dashctx?.formValues?.find((item: { id: number }) => item?.id === 6)
      ?.formData?.Type,
    calendarItemHeader: "",
    calendarDesc: "",
    therapyRoom: "",
    calendarTime: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    // Parse time input as a valid Date object using moment
    if (name === "calendarTime") {
      const parsedTime = moment(value, "HH:mm", true);
      setcalendarData((prevData: any) => ({
        ...prevData,
        [name]: parsedTime.isValid() ? parsedTime.toDate() : value,
      }));
    } else {
      setcalendarData((prevData: any) => ({ ...prevData, [name]: value }));
    }

    dashctx.setFormValues((prevFormValues: any) =>
      prevFormValues.map((formValue: any) =>
        formValue.id === 6
          ? {
              ...formValue,
              formData: { ...formValue?.formData, [name]: value },
            }
          : formValue
      )
    );
  };

  const handleNew = (e: any) => {
    e.preventDefault();

    const newItem = {
      calendarItemHeader: calendarData.calendarItemHeader,
      calendarDesc: calendarData.calendarDesc,
      calendarTime: calendarData.calendarTime,
      therapyRoom: calendarData.therapyRoom,
    };

    let form = dashctx?.formValues;
    let ind = form.findIndex((i: any) => i.id == 6);
    let obj = form[ind];
    obj.formData.cardData.push(newItem);

    dashctx.setFormValues((prevFormValues: any) =>
      prevFormValues.map((formValue: any) =>
        formValue.id === 6
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

    setcalendarData({
      calendarItemHeader: "",
      calendarDesc: "",
      therapyRoom: "",
      calendarTime: "",
    });
  };

  const ValueSourceData = [
    "All Appointments",
    "All ROFs",
    "All Requested Appointments",
    // "Sales Order",
    // "Invoice",
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
          dashctx?.formValues?.find((item: { id: number }) => item?.id === 6)
            ?.name
        }
      </p>
      <form onSubmit={handleNew} className="grid grid-flow-row gap-5">
        <div className="">
          <p className="text-sm mb-2 font-semibold">Widget Header</p>
          <input
            disabled
            type="text"
            name="calendarHeader"
            value={calendarData.calendarHeader}
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
          <p className="text-sm mb-2 font-semibold">Card Header</p>
            <input disabled
            type="text"
            name="calendarItemHeader"
            value={calendarData.calendarItemHeader}
            onChange={handleChange}
            className="form-input border px-3 py-2 w-full border-grey/50 focus:ring-0 focus:border-grey text-base text-black rounded-md"
          />
        </div>

        <div className="">
          <p className="text-sm mb-2 font-semibold">Therapy Name</p>
            <input disabled
            type="text"
            name="therapyRoom"
            value={calendarData.therapyRoom}
            onChange={handleChange}
            className="form-input border px-3 py-2 w-full border-grey/50 focus:ring-0 focus:border-grey text-base text-black rounded-md"
          />
        </div>

        <div className="">
          <p className="text-sm mb-2 font-semibold">Time</p>
            <input disabled
            type="time"
            name="calendarTime"
            value={calendarData.calendarTime}
            onChange={handleChange}
            className="form-input border px-3 py-2 w-full border-grey/50 focus:ring-0 focus:border-grey text-base text-black rounded-md"
          />
        </div>

        <div className="">
          <p className="text-sm mb-2 font-semibold">Description</p>
            <input disabled
            type="text"
            name="calendarDesc"
            value={calendarData.calendarDesc}
            onChange={handleChange}
            className="form-input border px-3 py-2 w-full border-grey/50 focus:ring-0 focus:border-grey text-base text-black rounded-md"
          />
        </div> */}

        <div className="">
          <div className="">
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

        {/* <div className="bg-[#1258FC] rounded-md my-3">
            <button type="submit" disabled className="text-md font-medium form-input border px-3 py-2 w-full border-grey/50 focus:ring-0 focus:border-grey text-base text-white rounded-md">Submit</button>
          </div> */}
      </form>
    </div>
  );
}
