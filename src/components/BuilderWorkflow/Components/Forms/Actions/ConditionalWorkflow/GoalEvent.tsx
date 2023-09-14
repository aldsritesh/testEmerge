import { modalItemState } from "@/atoms/modalItem";
import { offCanvasOpenState } from "@/atoms/offCanvasOpen";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useRecoilState } from "recoil";
import { MenuItem, Select } from "@mui/material";
import { nameTrigger } from "@/atoms/nameTrigger";

export default function GoalEvent({ onDataStore, onClose }: any) {
  const [isFlyOutVisible, setIsFlyOutVisible] =
    useRecoilState(offCanvasOpenState);
  const [data, setData] = useRecoilState(modalItemState);

  const [actionData, setActionData] = useRecoilState(nameTrigger);

  const [formValues, setFormValues] = useState<any>({
    actionName: actionData,
    goalType: "",
    step: "",
    event: "",
    goalConditions: "",
    leadValue: "",
    status: "",
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
    if (!formValues.goalType.trim()) {
      validationErrors.goalType = "In Pipeline is required";
    }
    if (!formValues.step.trim()) {
      validationErrors.step = "In Pipeline Stage is required";
    }
    if (!formValues.event.trim()) {
      validationErrors.event = "Opportunity Name is required";
    }
    if (!formValues.goalConditions.trim()) {
      validationErrors.goalConditions = "Opportunity Source is required";
    }
    if (!formValues.leadValue.trim()) {
      validationErrors.leadValue = "Lead Value is required";
    }
    if (!formValues.status.trim()) {
      validationErrors.status = "Status is required";
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
      goalType: "",
      step: "",
      event: "",
      opportunitySource: "",
      leadValue: "",
      status: "",
    });
    setErrors({});
    onDataStore(formValues.waitFor, formValues);

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
              placeholder="Goal"
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
              Select Type of Goal
            </label>

            <Select
              name="goalType"
              value={formValues.goalType}
              onChange={handleChange}
              className=" border-none outline-none rounded-md mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark  text-space focus:outline-none focus:border-none text-black"
            >
              <MenuItem value="Received on Email Event">
                Received on Email Event
              </MenuItem>{" "}
            </Select>
            {errors.goalType && (
              <span className="mb-5 error text-red-500 ">
                {errors.goalType}
              </span>
            )}
          </div>
          <div className="w-full mt-4">
            <label className="w-full mb-2 text-sm text-gray-600 font-semibold fontStrawFord">
              Pick email step to wait for
            </label>

            <Select
              name="step"
              value={formValues.step}
              onChange={handleChange}
              className=" border-none outline-none rounded-md mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark  text-space focus:outline-none focus:border-none text-black"
            >
              <MenuItem value="">Select a step</MenuItem>{" "}
              <MenuItem value="step 1"> Step 1</MenuItem>{" "}
              <MenuItem value="step 2"> Step 2</MenuItem>{" "}
            </Select>
            {errors.step && (
              <span className="mb-5 error text-red-500 ">{errors.step}</span>
            )}
          </div>
          <div className="w-full mt-4">
            <label className="w-full mb-2 text-sm text-gray-600 font-semibold fontStrawFord">
              Select Email Event
            </label>

            <Select
              name="event"
              value={formValues.event}
              onChange={handleChange}
              className=" border-none outline-none rounded-md mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark  text-space focus:outline-none focus:border-none text-black"
            >
              <MenuItem value="">Select a step</MenuItem>{" "}
              <MenuItem value="step 1"> Step 1</MenuItem>{" "}
              <MenuItem value="step 2"> Step 2</MenuItem>{" "}
            </Select>
            {errors.step && (
              <span className="mb-5 error text-red-500 ">{errors.step}</span>
            )}
          </div>

          <div className="w-full mt-4">
            <label className="w-full mb-2 text-sm text-gray-600 font-semibold fontStrawFord">
              If contact reaches this goal action without meeting its conditions
            </label>

            <Select
              name="goalConditions"
              value={formValues.goalConditions}
              onChange={handleChange}
              className=" border-none outline-none rounded-md mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark  text-space focus:outline-none focus:border-none text-black"
            >
              <MenuItem value="End this workflow"> End this workflow </MenuItem>{" "}
            </Select>
            {errors.step && (
              <span className="mb-5 error text-red-500 ">{errors.step}</span>
            )}
          </div>

          <p
            className={`  text-gray-500 text-xs font-medium  tracking-wide ml-2 pb-3   `}
          >
            The selected action will be performed if the contact reaches this
            step, and has not meet the goal condition yet.
          </p>
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
