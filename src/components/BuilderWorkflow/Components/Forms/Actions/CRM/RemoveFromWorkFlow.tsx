import { modalItemState } from "@/atoms/modalItem";
import { offCanvasOpenState } from "@/atoms/offCanvasOpen";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useRecoilState } from "recoil";
import { MenuItem, Select } from "@mui/material";
import { nameTrigger } from "@/atoms/nameTrigger";

export default function RemoveFromWorkFlow({ onDataStore, onClose }: any) {
  const [isFlyOutVisible, setIsFlyOutVisible] =
    useRecoilState(offCanvasOpenState);
  const [data, setData] = useRecoilState(modalItemState);

  const [actionData, setActionData] = useRecoilState(nameTrigger);

  const [formValues, setFormValues] = useState<any>({
    actionName: actionData,
    template: "",
    workflowType: "",
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
    if (!formValues.template.trim()) {
      validationErrors.template = "Template is required";
    }

    if (!formValues.workflowType.trim()) {
      validationErrors.workflowType = "workflowType is required";
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
      template: "",
      workflowType: "",
    });
    setErrors({});
    onDataStore(formValues.actionName, formValues);

    setIsFlyOutVisible(false);
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
              Workflow
            </label>
            <div className="flex flex-wrap justify-between items-center pr-4">
              <div className="flex justify-start items-center   mb-3 p-2 rounded-lg">
                <input
                  type="radio"
                  name="workflowType"
                  className="radio :bg-blue-500"
                  onChange={handleChange}
                />
                <p
                  className={`w-full mb-2 text-sm text-gray-600 font-semibold fontStrawFord ml-2 mt-2`}
                >
                  Current Workflow
                </p>
              </div>
              <div className="flex justify-start items-center   mb-3 p-2 rounded-lg">
                <input
                  type="radio"
                  name="workflowType"
                  className="radio checked:bg-blue-500"
                  onChange={handleChange}
                />
                <p
                  className={`w-full mb-2 text-sm text-gray-600 font-semibold fontStrawFord ml-2 mt-2`}
                >
                  Another Workflow
                </p>
              </div>
            </div>
            {errors.workflowType && (
              <span className="mb-5 error text-red-500 ">
                {errors.workflowType}
              </span>
            )}
          </div>

          <div className="w-full ">
            <label className="w-full mb-2 text-sm text-gray-600 font-semibold fontStrawFord">
              Template:
            </label>
            <Select
              name="template"
              value={formValues.template}
              onChange={handleChange}
              className="border-none outline-none rounded-md mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark  text-space focus:outline-none focus:border-none text-black"
            >
              <MenuItem value="">Status template</MenuItem>
              <MenuItem value="New Template"> New Template</MenuItem>{" "}
              <MenuItem value="None"> None </MenuItem>
            </Select>

            {errors.template && (
              <span className="mb-5 error text-red-500 ">
                {errors.template}
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
