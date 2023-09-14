import { modalItemState } from "@/atoms/modalItem";
import { offCanvasOpenState } from "@/atoms/offCanvasOpen";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useRecoilState } from "recoil";
import { MenuItem, Select } from "@mui/material";
import { nameTrigger } from "@/atoms/nameTrigger";

export default function WebHooks({ onDataStore, onClose }: any) {
  const [isFlyOutVisible, setIsFlyOutVisible] =
    useRecoilState(offCanvasOpenState);
  const [data, setData] = useRecoilState(modalItemState);

  const [customData, setCustomData] = useState([{ key: "", value: "" }]);

  const handleChangeCustom = (e: any, index: number) => {
    const { name, value } = e.target;
    const updatedCustomData = [...customData];
    updatedCustomData[index] = { ...updatedCustomData[index], [name]: value };
    setCustomData(updatedCustomData);
  };
  const handleAddItem = () => {
    setCustomData([...customData, { key: "", value: "" }]);
  };

  const [actionData, setActionData] = useRecoilState(nameTrigger);

  const [formValues, setFormValues] = useState<any>({
    actionName: actionData,
    method: "",
    url: "",
  });
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
      validationErrors.actionName = "Action name is required";
    }

    if (!formValues.method.trim()) {
      validationErrors.method = "Facebook Event is required";
    }

    if (!formValues.url.trim()) {
      validationErrors.url = "Lead Value is required";
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
      method: "",
      url: "",
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
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3.5 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            />
            {errors.actionName && (
              <span className="mb-5 error text-red-500 ">
                {errors.actionName}
              </span>
            )}
          </div>

          <div className="w-full mt-4">
            <label className="w-full mb-2 text-sm text-gray-600 font-semibold fontStrawFord">
              Method
            </label>

            <Select
              name="method"
              value={formValues.method}
              onChange={handleChange}
              className=" border-none outline-none rounded-md mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark  text-space focus:outline-none focus:border-none text-black"
            >
              <MenuItem value="Select a method">Select a method</MenuItem>
              <MenuItem value="Post"> Post </MenuItem>
              <MenuItem value="Put"> Put</MenuItem>
              <MenuItem value="Patch"> Patch </MenuItem>
            </Select>

            {errors.method && (
              <span className="mb-5 error text-red-500 ">{errors.method}</span>
            )}
          </div>
          <div className="w-full mt-4">
            <label className="w-full mb-2 text-sm text-gray-600 font-semibold fontStrawFord">
              URL:
            </label>
            <input
              type="url"
              name="url"
              placeholder="https://www.google.com/"
              value={formValues.url}
              onChange={handleChange}
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3.5 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            />
            {errors.url && (
              <span className="mb-5 error text-red-500 ">{errors.url}</span>
            )}
          </div>

          <div className="w-full mt-4">
            <label className="w-full mb-2 text-sm text-gray-600 font-semibold fontStrawFord">
              Custom Data:
            </label>
            <p className="w-full mb-2 text-sm text-FontGray font-medium  ">
              These custom key-value pair will be including along with the
              standard data
            </p>
            <div className="flex flex-wrap">
              {customData.map((item: any, index: any) => (
                <div className="flex flex-wrap" key={index}>
                  <div className="w-4/12">
                    <input
                      type="text"
                      name="key"
                      value={item.key}
                      onChange={(e: any) => handleChangeCustom(e, index)}
                      placeholder="key"
                      className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
                    />
                    {/* Render error message if needed */}
                    {errors.key && (
                      <span className="mb-5 error text-red-500 ">
                        {errors.key}
                      </span>
                    )}
                  </div>
                  <div className="w-8/12 pl-4">
                    <input
                      type="text"
                      name="value"
                      value={item.value}
                      onChange={(e: any) => handleChangeCustom(e, index)}
                      placeholder="valueData"
                      className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
                    />
                    {/* Render error message if needed */}
                    {errors.value && (
                      <span className="mb-5 error text-red-500 ">
                        {errors.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={handleAddItem}
              className="flex  flex-wrap justify-start items-center mt-2"
            >
              <PlusCircleIcon className="h-4 w-4 text-dark" />
              <p className="ml-1 text-sm text-gray-600 font-semibold fontStrawFord">
                Add Item
              </p>
            </button>
          </div>

          <div className="w-full mt-4">
            <label className="w-full mb-2 text-sm text-gray-600 font-semibold fontStrawFord">
              Header Data:
            </label>
            <div className="flex  flex-wrap justify-start items-center mt-2">
              <PlusCircleIcon className="h-4 w-4 text-dark" />
              <p className="ml-1 text-sm text-gray-600 font-semibold fontStrawFord">
                Add Item
              </p>
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
