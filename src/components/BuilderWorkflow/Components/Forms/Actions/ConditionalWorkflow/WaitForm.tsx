import { modalItemState } from "@/atoms/modalItem";
import { offCanvasOpenState } from "@/atoms/offCanvasOpen";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useRecoilState } from "recoil";
import { MenuItem, Select } from "@mui/material";
import { nameTrigger } from "@/atoms/nameTrigger";

export default function WaitForm({ onDataStore, onClose }: any) {
  const [isFlyOutVisible, setIsFlyOutVisible] =
    useRecoilState(offCanvasOpenState);
  const [data, setData] = useRecoilState(modalItemState);

  const [actionData, setActionData] = useRecoilState(nameTrigger);

  const [formValues, setFormValues] = useState<any>({
    actionName: actionData,
    waitFor: "",
    checkBox1: "",
    timeNumber: "",
    timeMinutes: "",
    days: "",
    type: "",
    start: "",
    end: "",
    filter1: "",
    filter2: "",
    filter3: "",
  });

  const daysData = [
    {
      title: "Sun",
    },
    {
      title: "Mon",
    },
    {
      title: "Tue",
    },
    {
      title: "Wed",
    },
    {
      title: "Thu",
    },
    {
      title: "Fri",
    },
    {
      title: "Sat",
    },
  ];

  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if (name == "actionName") {
      setData(value);
    }
    setFormValues((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Validate form fields
    const validationErrors: any = {};

    if (!formValues.actionName.trim()) {
      validationErrors.actionName = "required";
    }
    if (!formValues.waitFor.trim()) {
      validationErrors.waitFor = "required";
    }
    if (!formValues.timeNumber.trim()) {
      validationErrors.timeNumber = "required";
    }
    if (!formValues.days.trim()) {
      validationErrors.days = "required";
    }
    if (!formValues.type.trim()) {
      validationErrors.type = "required";
    }
    if (!formValues.start.trim()) {
      validationErrors.start = "required";
    }
    if (!formValues.end.trim()) {
      validationErrors.end = "required";
    }
    if (!formValues.filter1.trim()) {
      validationErrors.filter1 = "required";
    }
    if (!formValues.filter2.trim()) {
      validationErrors.filter2 = "required";
    }
    if (!formValues.filter3.trim()) {
      validationErrors.filter3 = "required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Form submission logic goes here
    // You can access the form field values and attachment in the formValues state

    // Reset form after successful submission
    setFormValues({
      actionName: "",
      waitFor: "",
      timeNumber: "",
      timeMinutes: "",
    });
    setErrors({});
    onDataStore(formValues.waitFor, formValues);

    setIsFlyOutVisible(false);
  };

  return (
    <div>
      <div className="h-[75vh] 2xl:h-[80vh] overflow-y-scroll scrollbar-hide">
        <form onSubmit={handleSubmit} className="flex flex-wrap px-2  ">
          <div className="w-full mt-4">
            <label className="w-full mb-2 text-sm text-gray-600 font-semibold fontStrawFord">
              Action Name:
            </label>
            <input
              type="text"
              name="actionName"
              value={formValues.actionName}
              onChange={handleChange}
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3  py-3.5  rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            />
            {errors.actionName && (
              <span className="mb-5 error text-red-500 text-xs ">
                {errors.actionName}
              </span>
            )}
          </div>

          <div className="w-full mt-2">
            <label className="w-full mb-2 text-sm text-gray-600 font-semibold fontStrawFord">
              Wait For :
            </label>

            <Select
              name="waitFor"
              value={formValues.waitFor}
              onChange={handleChange}
              className="border-none outline-none rounded-md mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark  text-space focus:outline-none focus:border-none text-black"
            >
              <MenuItem value="">Time Delay </MenuItem>
              <MenuItem value=" 1.  "> 1. </MenuItem>
              <MenuItem value=" 2.  "> 2. </MenuItem>{" "}
            </Select>

            {errors.waitFor && (
              <span className="mb-5 error text-red-500 text-xs ">
                {errors.waitFor}
              </span>
            )}
          </div>

          <div className="w-full mt-2">
            <label className="w-full mb-2 text-sm text-gray-600 font-semibold fontStrawFord">
              Custom Data:
            </label>

            <div className="flex flex-wrap">
              <div className="w-4/12">
                <input
                  type="number"
                  name="timeNumber"
                  value={formValues.timeNumber}
                  onChange={handleChange}
                  placeholder="timeNumber"
                  className="mt-2 w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3.5 rounded-md  mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
                />
                {errors.timeNumber && (
                  <span className="mb-5 error text-red-500 text-xs ">
                    {errors.timeNumber}
                  </span>
                )}
              </div>
              <div className="w-8/12 pl-4">
                <Select
                  name="timeMinutes"
                  value={formValues.timeMinutes}
                  onChange={handleChange}
                  className=" rounded-md  border-none outline-none mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark  text-space focus:outline-none focus:border-none text-black"
                >
                  <MenuItem value="Minutes">Minutes</MenuItem>
                  <MenuItem value="Hours"> Hours </MenuItem>
                  <MenuItem value="Seconds"> Seconds. </MenuItem>
                </Select>

                {errors.timeMinutes && (
                  <span className="mb-5 error text-red-500 text-xs ">
                    {errors.timeMinutes}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="w-full mt-2">
            <div className="flex justify-start items-center   mb-3   rounded-lg">
              <input
                type="checkbox"
                className="toggle toggle-md toggle-success"
                name="checkBox1"
                onChange={handleChange}
              />
              <p
                className={` text-sm text-gray-600 font-semibold fontStrawFord ml-2 `}
              >
                Advance Window
              </p>
            </div>
          </div>
          <div className="w-full mt-2">
            <label className="w-full mb-2 text-sm text-gray-600 font-semibold fontStrawFord">
              Resume On
            </label>

            <div className=" flex-wrap md:flex-nowrap flex justify-start gap-2 pt-3 pb-4 items-center">
              {daysData.map((item: any, index: number) => (
                <div key={index} className="w-[12.5%]">
                  <div
                    onClick={() => {
                      setFormValues((prevValues: any) => ({
                        ...prevValues,
                        days: item?.title,
                      }));
                    }}
                    className={` ${
                      formValues.days == item.title
                        ? "border-secondary px-4 text-secondary"
                        : "border-newBlue px-4 text-newBlue"
                    }  cursor-pointer w-full text-center border-[1px] text-sm   font-medium fontStrawFord py-1 rounded-md focus:outline-none focus:border-blue-500 focus:bg-transparent`}
                  >
                    {item?.title}
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full">
              {errors.days && (
                <span className="mb-5 error text-red-500 text-xs ">
                  {errors.days}
                </span>
              )}
            </div>
            <p className="w-full mb-2 mt-4 text-sm text-gray-600 font-semibold fontStrawFord">
              Resume Between Hours
            </p>
          </div>

          <div className="w-full flex justify-between items-center gap-3">
            <div className="w-1/3 mt-5 ">
              <Select
                name="type"
                value={formValues.type}
                onChange={handleChange}
                className="  border-none outline-none rounded-md mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark  text-space focus:outline-none focus:border-none text-black"
              >
                <MenuItem value="Window">Window</MenuItem>
              </Select>

              {errors.type && (
                <span className="mb-5 error text-red-500 text-xs ">
                  {errors.type}
                </span>
              )}
            </div>

            <div className="w-1/3 ">
              <p className="w-full text-sm text-gray-600 font-semibold fontStrawFord">
                Start From
              </p>
              <Select
                name="start"
                value={formValues.start}
                onChange={handleChange}
                className=" border-none outline-none rounded-md mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark  text-space focus:outline-none focus:border-none text-black"
              >
                <MenuItem value="08:00 AM">08:00 AM</MenuItem>
                <MenuItem value="08:05 AM">08:05 AM</MenuItem>
                <MenuItem value="08:10 AM">08:10 AM</MenuItem>
                <MenuItem value="08:05 AM">08:05 AM</MenuItem>
              </Select>

              {errors.start && (
                <span className="mb-5 error text-red-500 text-xs ">
                  {errors.start}
                </span>
              )}
            </div>

            <div className="w-1/3 ">
              <p className="w-full text-sm text-gray-600 font-semibold fontStrawFord">
                End at
              </p>
              <Select
                name="end"
                value={formValues.end}
                onChange={handleChange}
                className="border-none outline-none rounded-md mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark  text-space focus:outline-none focus:border-none text-black"
              >
                <MenuItem value="08:00 PM">08:00 PM</MenuItem>
                <MenuItem value="08:05 PM">08:05 PM</MenuItem>
                <MenuItem value="08:10 PM">08:10 PM</MenuItem>
                <MenuItem value="08:05 PM">08:05 PM</MenuItem>
              </Select>

              {errors.end && (
                <span className="mb-5 error text-red-500 text-xs ">
                  {errors.end}
                </span>
              )}
            </div>
          </div>
          <div className="w-full mt-2">
            <label className="w-full mb-1 text-sm text-gray-600 font-semibold fontStrawFord">
              Additional Filter
            </label>

            <div className="w-full flex justify-between items-center gap-3">
              <div className="w-1/3 mt-1">
                <Select
                  name="filter1"
                  value={formValues.filter1}
                  onChange={handleChange}
                  className=" border-none outline-none  rounded-md mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark  text-space focus:outline-none focus:border-none text-black"
                >
                  <MenuItem value="Filter 1">Filter 1</MenuItem>
                  <MenuItem value="Filter 2">Filter 2</MenuItem>
                </Select>

                {errors.filter1 && (
                  <span className="mb-5 error text-red-500 text-xs ">
                    {errors.filter1}
                  </span>
                )}
              </div>
              <div className="w-1/3 mt-1">
                <Select
                  name="filter2"
                  value={formValues.filter2}
                  onChange={handleChange}
                  className=" border-none outline-none rounded-md mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark  text-space focus:outline-none focus:border-none text-black"
                >
                  <MenuItem value="Filter 2">Filter 2</MenuItem>
                  <MenuItem value="Filter 3">Filter 3</MenuItem>
                </Select>

                {errors.filter2 && (
                  <span className="mb-5 error text-red-500 text-xs ">
                    {errors.filter2}
                  </span>
                )}
              </div>
              <div className="w-1/3 mt-1">
                <Select
                  name="filter3"
                  value={formValues.filter3}
                  onChange={handleChange}
                  className=" border-none outline-none  rounded-md mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark  text-space focus:outline-none focus:border-none text-black"
                >
                  <MenuItem value="Filter 3">Filter 3</MenuItem>
                  <MenuItem value="Filter 4">Filter 4</MenuItem>
                </Select>

                {errors.filter3 && (
                  <span className="mb-5 error text-red-500 text-xs ">
                    {errors.filter3}
                  </span>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="flex justify-end items-end  py-2 px-4">
        <button
          onClick={onClose}
          className="border-2 mr-5 fontStrawFord border-OrangeBuilder rounded-md flex justify-center items-center px-8 py-1.5 text-OrangeBuilder"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          type="submit"
          className="bg-OrangeBuilder fontStrawFord rounded-md flex justify-center items-center px-8 py-2 text-white"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
