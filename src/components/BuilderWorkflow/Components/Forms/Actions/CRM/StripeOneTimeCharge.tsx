import { itemState } from "@/atoms/item";
import { modalItemState } from "@/atoms/modalItem";
import { offCanvasOpenState } from "@/atoms/offCanvasOpen";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useRecoilState, useRecoilValue } from "recoil";
import { MenuItem, Select } from "@mui/material";
import { TagIcon } from "@heroicons/react/24/solid";
import { nameTrigger } from "@/atoms/nameTrigger";

export default function StripeOneTimeCharge({ onDataStore, onClose }: any) {
  const recoilItem = useRecoilValue(itemState);

  const [data, setData] = useRecoilState(modalItemState);

  const [actionData, setActionData] = useRecoilState(nameTrigger);

  const [formValues, setFormValues] = useState<any>({
    actionName: actionData,
    customerId: "",
    description: "",
    amount: "",
    currency: "",
    currency1: "",
    currency2: "",
    currency3: "",
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

    if (!formValues.customerId.trim()) {
      validationErrors.customerId = "Customer Id is required";
    }

    if (!formValues.amount.trim()) {
      validationErrors.amount = "Amount is required";
    }

    if (!formValues.currency.trim()) {
      validationErrors.currency = "Currency is required";
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
      customerId: "",
      description: "",
      amount: "",
      currency: "",
      currency1: "",
      currency2: "",
      currency3: "",
    });
    setErrors({});
    // onDataStore(formValues.actionName, formValues);

    onDataStore(formValues.actionName, recoilItem);
  };

  return (
    <div>
      <div className="h-[75vh] 2xl:h-[80vh] overflow-y-scroll scrollbar-hide">
        <form onSubmit={handleSubmit} className="flex flex-wrap px-2  ">
          <div className="w-full mt-4">
            <label className="w-full mb-2 text-sm   text-gray-500 font-semibold fontStrawFord">
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

          <div className="w-full mt-1.5relative">
            <label className="w-full mb-2 text-sm   text-gray-500 font-semibold fontStrawFord">
              Customer ID
            </label>
            <input
              type="number"
              name="customerId"
              value={formValues.customerId}
              onChange={handleChange}
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3  py-3.5  rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            />
            {errors.customerId && (
              <span className="mb-5 error text-red-500 ">
                {errors.customerId}
              </span>
            )}{" "}
            <div className="absolute right-4 top-12">
              <TagIcon className="h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="w-full mt-1.5flex justify-between  items-center ">
            <div className="w-[90%]">
              <label className="w-full mb-2 text-sm   text-gray-500 font-semibold fontStrawFord block">
                Description
              </label>
              <textarea
                name="description"
                value={formValues.description}
                onChange={handleChange}
                className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3  py-3.5  rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
              ></textarea>
            </div>

            <div className="w-[10%] pt-6 pr-3 flex justify-end items-end">
              <TagIcon className="h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="w-full mt-1.5relative">
            <label className="w-full mb-2 text-sm   text-gray-500 font-semibold fontStrawFord">
              Amount
            </label>
            <input
              type="number"
              name="amount"
              value={formValues.amount}
              onChange={handleChange}
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3  py-3.5  rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            />
            {errors.amount && (
              <span className="mb-5 error text-red-500 ">{errors.amount}</span>
            )}
            <div className="absolute right-4 top-12">
              <TagIcon className="h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="w-full mt-4">
            <label className="w-full mb-2 text-sm   text-gray-500 font-semibold fontStrawFord">
              Currency
            </label>
            <Select
              name="currency"
              value={formValues.currency}
              onChange={handleChange}
              className="border-none outline-none rounded-md mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark  text-space focus:outline-none focus:border-none text-black"
            >
              <MenuItem value="">Select</MenuItem>
              <MenuItem value="currency1">Currency1</MenuItem>
              <MenuItem value="currency2">Currency2</MenuItem>
              <MenuItem value="currency3">Currency3</MenuItem>
            </Select>

            {errors.currency && (
              <span className="mb-5 error text-red-500 ">
                {errors.currency}
              </span>
            )}
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
