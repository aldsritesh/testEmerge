import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import ConversationModalDerived from "../../UI/ConversationModalDerived";

import { MenuItem, Select } from "@mui/material";
import { MdOutlineCampaign } from "react-icons/md";
import moment from "moment";
import { RxCross1 } from "react-icons/rx";
export default function ActiveCampaignWorkflow() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<any>({
    campaign: "",
    dateTime: "",
    errors: {},
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Validate the form fields
    const newErrors: any = {};
    if (!formData.campaign) {
      newErrors.campaign = "Campaign is required";
    }
    if (!formData.dateTime) {
      newErrors.dateTime = "Date and time are required";
    }

    if (Object.keys(newErrors).length > 0) {
      setFormData((prevFormData: any) => ({
        ...prevFormData,
        errors: newErrors,
      }));
    } else {
      // Submit the form data
      // ...
      // Reset the form fields
      // setFormData({
      //   campaign: "",
      //   dateTime: "",
      //   errors: {},
      // });
      setIsModalOpen(false);
    }
  };

  return (
    <div>
      <div>
        <div>
          {isModalOpen && (
            <ConversationModalDerived
              visibility={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            >
              <div className="bg-white px-5 rounded-lg py-5 pb-[40%] w-screen md:w-[65vh]">
                <p className="text-gray-800 font-medium md:text-lg mb-3">
                  Select Campaign / Workflow
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="mt-2">
                    <label className="w-full text-sm text-gray-600 font-medium ">
                      Campaign:
                    </label>
                    <Select
                      id="campaign"
                      name="campaign"
                      value={formData.campaign}
                      onChange={handleChange}
                      className="rounded-md mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark  text-space focus:outline-none focus:border-gray-300 text-black"
                    >
                      <MenuItem value="">Select a campaign</MenuItem>
                      <MenuItem value="None">None</MenuItem>
                    </Select>

                    {formData.errors.campaign && (
                      <span className="mb-8 text-xs text-red-500 ">
                        {formData.errors.campaign}
                      </span>
                    )}
                  </div>
                  <div className="mt-2">
                    <label className="w-full text-sm text-gray-600 font-medium ">
                      Select Event start date and time
                    </label>
                    <div className="w-full">
                      <input
                        type="datetime-local"
                        id="dateTime"
                        name="dateTime"
                        value={formData.dateTime}
                        onChange={handleChange}
                        className="w-[45%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 rounded-md mt-2 mb-2 py-2  font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
                      />
                    </div>{" "}
                    {formData.errors.dateTime && (
                      <span className="mb-8 text-xs text-red-500 ">
                        {formData.errors.dateTime}
                      </span>
                    )}
                  </div>

                  <div className="w-full flex justify-end items-center gap-2 border-t mt-4 pt-4">
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="text-sm text-gray-600 font-medium flex justify-start items-center border-[1px] border-gray-300 py-1.5 px-5 rounded-md  "
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="text-sm flex justify-start items-center bg-newBlue py-1.5 px-5 text-white rounded-md  "
                    >
                      Add
                    </button>
                  </div>
                </form>
              </div>
            </ConversationModalDerived>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-between mt-1 px-2">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex justify-start items-center bg-newBlue py-2 px-3 rounded-md  "
          >
            <span className="text-[12px]   text-white font-semibold">Add</span>
            <AiOutlinePlus className="h-4 w-4 text-white ml-2" />
          </button>
          {formData?.campaign == "" ? null : (
            <div className="ml-4 bg-blue-100 px-4 py-2 rounded-md mr-2   text-[12px] text-newBlue font-semibold flex justify-start items-center">
              <div className="flex justify-start items-center">
                <MdOutlineCampaign className="h-5 w-5 mr-1" />{" "}
                <p className="font-medium"> {formData?.campaign} , </p>
              </div>
              <div className="flex justify-start items-center ml-1">
                <p className="font-medium">
                  {" "}
                  {moment(formData?.dateTime).format("DD-MM-yyyy | hh:ss: A")}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setFormData(null)}
                className="ml-2 text-secondary font-semibold focus:outline-none"
              >
                <RxCross1 className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
