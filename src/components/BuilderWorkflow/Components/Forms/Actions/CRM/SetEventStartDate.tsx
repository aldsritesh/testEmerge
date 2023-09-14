import { itemState } from "@/atoms/item";
import { modalItemState } from "@/atoms/modalItem";
import { offCanvasOpenState } from "@/atoms/offCanvasOpen";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useRecoilState, useRecoilValue } from "recoil";
import { MenuItem, Select } from "@mui/material";
import { nameTrigger } from "@/atoms/nameTrigger";

export default function SetEventStartDate({ onDataStore, onClose }: any) {
  const recoilItem = useRecoilValue(itemState);

  const [data, setData] = useRecoilState(modalItemState);

  const [actionData, setActionData] = useRecoilState(nameTrigger);

  const [formValues, setFormValues] = useState<any>({
    actionName: actionData,
    type: "",
    selectDate: "",
    selectDay: "",
  });
  const [errors, setErrors] = useState<any>({});
  const [date, setDate] = useState<any>({});
  const [day, setDay] = useState<any>({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;

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
      validationErrors.actionName = "Action name is required";
    }

    if (!formValues.type.trim()) {
      validationErrors.type = "Type is required";
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
      type: "",
      selectDate: "",
    });
    setErrors({});
    // onDataStore(formValues.actionName, formValues);

    onDataStore(formValues.actionName, recoilItem);
  };

  return (
    <div>
      <div className="h-[76vh]  overflow-y-scroll scrollbar-hide">
        <form onSubmit={handleSubmit} className="flex flex-wrap px-2  ">
          <div className="w-full mt-4">
            <label className="w-full mb-2 text-sm text-gray-600 font-semibold fontStrawFord">
              Action Name
            </label>
            <input
              type="text"
              name="actionName"
              value={formValues.actionName}
              onChange={handleChange}
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3  py-3.5  rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            />
            {errors.actionName && (
              <span className="mb-5 error text-red-500 ">
                {errors.actionName}
              </span>
            )}
          </div>

          <div className="w-full mt-4">
            <label className="w-full mb-2 text-sm text-gray-600 font-semibold fontStrawFord">
              Type
            </label>
            <Select
              name="type"
              onChange={handleChange}
              value={formValues.type}
              className="border-none outline-none rounded-md mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark  text-space focus:outline-none focus:border-none text-black"
            >
              <MenuItem value="Specific Date/Time">Specific Date/Time</MenuItem>
              <MenuItem value="Specific Day">Specific Day</MenuItem>
            </Select>
            {errors.type && (
              <span className="mb-5 error text-red-500">{errors.type}</span>
            )}
          </div>

          {formValues?.type == "Specific Date/Time" && (
            <div className="w-full mt-4">
              <label className="w-full mb-2 text-sm text-gray-600 font-semibold fontStrawFord">
                Select Date
              </label>
              <input
                type="date"
                className="px-3 rounded-md mt-2 mb-2 py-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300 text-black"
                name="selectDate"
                placeholder="Select a Date"
              ></input>
              {errors.selectDate && (
                <span className="mb-5 error text-red-500">
                  {errors.selectDate}
                </span>
              )}
            </div>
          )}

          {formValues?.type == "Specific Day" && (
            <div className="w-full mt-4">
              <label className="w-full mb-2 text-sm text-gray-600 font-semibold fontStrawFord">
                Select Specific Day
              </label>
              <Select
                name="selectDay"
                onChange={handleChange}
                value={formValues?.selectDay}
                className="border-none outline-none rounded-md mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark  text-space focus:outline-none focus:border-none text-black"
              >
                <MenuItem value="">Status selectDay</MenuItem>
                <MenuItem value="Current Day of month">
                  Current Day of month
                </MenuItem>
                <MenuItem value="Current Day of Week">
                  Current Day of Week
                </MenuItem>
              </Select>
              {errors.selectDay && (
                <span className="mb-5 error text-red-500">
                  {errors.selectDay}
                </span>
              )}
            </div>
          )}
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
