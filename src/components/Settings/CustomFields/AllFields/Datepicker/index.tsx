import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
export default function DatePickers() {
  const timings = [
    {
      label: "08:00 am - 08:30 am",
      value: "08:00 am - 08:30 am",
      color: "#fff",
    },
    {
      label: "08:30 am - 09:00 am",
      value: "08:30 am - 09:00 am",
      color: "#fff",
    },
    {
      label: "09:00 am - 09:30 am",
      value: "09:00 am - 09:30 am",
      color: "#fff",
    },
    {
      label: "09:30 am - 10:00 am",
      value: "09:30 am - 10:00 am",
      color: "#fff",
    },
    {
      label: "10:00 am - 10:30 am",
      value: "10:00 am - 10:30 am",
      color: "#fff",
    },
    {
      label: "10:30 am - 11:00 am",
      value: "10:30 am - 11:00 am",
      color: "#fff",
    },
    {
      label: "11:00 am - 11:30 am",
      value: "11:00 am - 11:30 am",
      color: "#fff",
    },
    {
      label: "11:30 am - 12:00 am",
      value: "11:30 am - 12:00 am",
      color: "#fff",
    },
    {
      label: "12:00 pm - 12:30 pm",
      value: "12:00 pm - 12:30 pm",
      color: "#fff",
    },
    {
      label: "12:30 pm - 01:00 pm",
      value: "12:30 pm - 01:00 pm",
      color: "#fff",
    },
    {
      label: "01:00 pm - 01:30 pm",
      value: "01:00 pm - 01:30 pm",
      color: "#fff",
    },
    {
      label: "01:30 pm - 01:00 pm",
      value: "01:30 pm - 01:00 pm",
      color: "#fff",
    },
    {
      label: "01:00 pm - 01:30 pm",
      value: "01:00 pm - 01:30 pm",
      color: "#fff",
    },
  ];
  const [dateTime, setDateTime] = useState<any>({
    date: new Date(),
    time: timings[0].value,
  });
  return (
    <div className=" p-2">
      <div>
        <p className="text-sm">Select</p>
      </div>
      <div className=" bg-white mt-2">
        <DatePicker
          selected={dateTime.date}
          onChange={(e: any) => {
            setDateTime((prevValues: any) => ({
              ...prevValues,
              date: e,
            }));
          }}
          placeholderText={dateTime.date}
          minDate={new Date()}
        />

        {/* <DatePickerElement /> */}
      </div>
    </div>
  );
}
