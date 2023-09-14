import { itemState } from "@/atoms/item";
import { modalItemState } from "@/atoms/modalItem";
import { offCanvasOpenState } from "@/atoms/offCanvasOpen";
import { TagIcon } from "@heroicons/react/24/solid";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { MenuItem, Select } from "@mui/material";
import { nameTrigger } from "@/atoms/nameTrigger";

export default function UpdateCustomValue({ onDataStore, onClose }: any) {
  const recoilItem = useRecoilValue(itemState);

  const [data, setData] = useRecoilState(modalItemState);

  const [actionData, setActionData] = useRecoilState(nameTrigger);

  const [formValues, setFormValues] = useState<any>({
    actionName: actionData,
  });
  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormValues((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleQuillChange = (value: any) => {
    setFormValues((prevValues: any) => ({
      ...prevValues,
      message: value,
    }));
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Validate form fields
    const validationErrors: any = {};

    if (!formValues.actionName.trim()) {
      validationErrors.actionName = "Action name is required";
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
    });
    setErrors({});
    // onDataStore(formValues.actionName);

    onDataStore(formValues.actionName, formValues);
  };

  return (
    <div>
      <div className="h-[75vh] 2xl:h-[80vh]  overflow-y-scroll scrollbar-hide">
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
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            />
            {errors.actionName && (
              <span className="mb-5 error text-red-500 ">
                {errors.actionName}
              </span>
            )}
          </div>

          <div className="w-full mt-4">
            <label className="w-full mb-2 text-sm text-gray-600 font-semibold fontStrawFord">
              Custom Value
            </label>

            <Select
              name="customValues"
              value={formValues.customValues}
              onChange={handleChange}
              className="border-none outline-none rounded-md mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark  text-space focus:outline-none focus:border-none text-black"
            >
              <MenuItem value="">Select a custom value</MenuItem>
              <MenuItem value="#1 Ticket Status Webhook">
                {" "}
                #1 Ticket Status Webhook{" "}
              </MenuItem>
              <MenuItem value="#2 Customer Replies">
                {" "}
                #2 Customer Replies{" "}
              </MenuItem>
              <MenuItem value="Appointment Length">
                {" "}
                Appointment Length{" "}
              </MenuItem>
              <MenuItem value="Benefits of Visit"> Benefits of Visit </MenuItem>
              <MenuItem value="Calendar Page"> Calendar Page</MenuItem>
              <MenuItem value="Company Name">Company Name</MenuItem>
              <MenuItem value="cpv-1-Offer"> cpv-1-Offer </MenuItem>
              <MenuItem value="cpv-2-Address"> cpv-2-Address </MenuItem>
              <MenuItem value="cpv-3-Directions"> cpv-3-Directions </MenuItem>
              <MenuItem value="cpv-3-Entrance Location">
                {" "}
                cpv-3-Entrance Location{" "}
              </MenuItem>
              <MenuItem value="cpv-3-Parking"> cpv-3-Parking </MenuItem>
              <MenuItem value="cpv-4-Payment Method Clinic">
                {" "}
                cpv-4-Payment Method Clinic{" "}
              </MenuItem>
              <MenuItem value="cpv-5-Practice Number">
                {" "}
                cpv-5-Practice Number{" "}
              </MenuItem>
              <MenuItem value="cpv-6-Practice Website">
                {" "}
                cpv-6-Practice Site{" "}
              </MenuItem>
              <MenuItem value="cpv-7-Buddy Campaign">
                {" "}
                cpv-7-Buddy Campaign{" "}
              </MenuItem>
              <MenuItem value="cpv-8-Callback Number">
                {" "}
                cpv-8-Callback Number{" "}
              </MenuItem>
              <MenuItem value="cpv-9-Languages"> cpv-9-Languages </MenuItem>
              <MenuItem value="cpv-url"> cpv-url </MenuItem>
              <MenuItem value="Email to Notify"> Email to Notify </MenuItem>
              <MenuItem value="Insurances Accepted">
                {" "}
                Insurances Accepted{" "}
              </MenuItem>
            </Select>
          </div>

          <div className="w-full mt-4">
            <label className="w-full mb-2 text-sm text-gray-600 font-semibold fontStrawFord">
              Current Value
            </label>
            <input
              type="text"
              name="currentValue"
              value={formValues.currentValue}
              onChange={handleChange}
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3  py-3.5  rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            />
            {errors.currentValue && (
              <span className="mb-5 error text-red-500 ">
                {errors.currentValue}
              </span>
            )}
          </div>

          <div className="w-full mt-1.5relative">
            <label className="w-full mb-2 text-sm text-gray-600 font-semibold fontStrawFord">
              New Value
            </label>
            <input
              type="text"
              name="newValue"
              value={formValues.newValue}
              onChange={handleChange}
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            />
            {errors.newValue && (
              <span className="mb-5 error text-red-500 ">
                {errors.newValue}
              </span>
            )}
            <div className="absolute top-6 right-4 pt-6 pl-3">
              <TagIcon className="h-5 w-5 text-gray-500" />
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
