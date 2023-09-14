/* eslint-disable @next/next/no-img-element */
import MobileNo from "@/components/UI/MobileNo";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useState, MouseEventHandler, useContext } from "react";

interface IAddCampaignProps {
  visibility: boolean;
  onClose: MouseEventHandler;
  onSave: MouseEventHandler;
}

export default function AddCampaign({
  visibility,
  onClose,
  onSave,
}: IAddCampaignProps) {
  const [showImage, setShowImage] = useState<any>({
    profile: false,
    logo: false,
  });
  const [formData, setFormData] = useState<any>({
    campaign_name: "",
    owner_name: "",
    goals: "",
    budget: "",
    description: "",
    profile: null,
  });
  const [errors, setErrors] = useState<any>({
    campaign_name: "",
    owner_name: "",
    goals: "",
    budget: "",
    description: "",
    profile: null,
  });
  const [value, setValue] = useState<any>();
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    if (name == "profile") {
      setFormData({
        ...formData,
        [event.target.name]: event.target.files[0],
      });
      setShowImage((imageData: any) => ({
        ...imageData,
        profile: false,
      }));
    } else {
      setFormData((prevValues: any) => ({
        ...prevValues,
        [name]: value,
      }));
    }
  };
  const handleStatusChange = (item: any) => {
    if (item) {
      setFormData((prevValues: any) => ({
        ...prevValues,
        leadStatus: item,
      }));
    }
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Validate form fields
    const validationErrors: any = {};
    if (!formData.campaign_name.trim()) {
      validationErrors.campaign_name = "required **";
    }
    if (!formData.owner_name.trim()) {
      validationErrors.owner_name = "required **";
    }
    if (!formData.goals.trim()) {
      validationErrors.goals = "required **";
    }
    if (!formData.budget.trim()) {
      validationErrors.budget = "required **";
    }
    if (!formData.description.trim()) {
      validationErrors.description = "required **";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    onSave(formData);
  };

  return (
    <div>
      <div
        className={`w-full min-h-screen  scrollbar-hide  fixed right-0 top-0  z-50 transition-all bg-black overflow-hidden ${
          visibility
            ? "translate-x-0 opacity-100 bg-opacity-30"
            : "translate-x-[100%] opacity-0 bg-opacity-0"
        }`}
      >
        <div className="absolute h-full w-full z-40   " onClick={onClose}></div>
        <div className="bg-white w-full md:w-[80%] lg:w-[45%] absolute right-0  h-full z-50 ">
          <div className="flex justify-between items-center   px-4 md:px-4 pt-4 pb-2  border-b-gray-200 border-b  ">
            <h3 className="font-semibold  text-2xl">Create Campaign</h3>

            <div onClick={onClose}>
              <XMarkIcon className="h-5 w-5" />
            </div>
          </div>
          <div className="px-3 pt-3 h-[95vh] overflow-y-scroll scrollbar-hide pb-5">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-between items-center h-full"
            >
              <div className="flex flex-wrap justify-start items-start">
                <div
                  className={` w-full px-2 flex flex-col justify-start items-start  mb-3  `}
                >
                  <p className="font-semibold text-gray-800 mb-2">Campaign</p>
                  <input
                    type="text"
                    name="campaign_name"
                    value={formData.campaign_name}
                    onChange={handleChange}
                    className="placeholder:font-semibold  placeholder:text-[#3d3c3c] px-2 rounded-md mb-2 py-3 text-sm font-medium bg-transparent focus:bg-[#F6F7FA] w-full  border-[1px] border-[#dbd9d9] text-space focus:outline-none   focus:border-[#dbd9d9] text-black "
                  />
                  {errors.campaign_name && (
                    <p className="text-sm text-red-500 mb-2 mt-1">
                      {errors.campaign_name}
                    </p>
                  )}
                </div>

                <div
                  className={` ${
                    showImage.profile ? "w-6/12" : "w-2/12"
                  } px-2 flex flex-col justify-start items-start mb-3 `}
                >
                  <p className="font-semibold text-gray-800 mb-2">Owner Pic</p>
                  {showImage.profile ? (
                    <input
                      name="profile"
                      type="file"
                      accept="image/*"
                      onChange={handleChange}
                      className="placeholder:font-semibold placeholder:text-[#3d3c3c] px-2 rounded-md mb-2 py-2 text-sm font-medium bg-transparent focus:bg-[#F6F7FA] w-full  border-[1px] border-[#dbd9d9] text-space focus:outline-none   focus:border-[#dbd9d9] text-black "
                    />
                  ) : (
                    <>
                      {formData?.profile ? (
                        <div>
                          <div
                            onClick={() =>
                              setShowImage((e: any) => ({
                                ...e,
                                profile: true,
                              }))
                            }
                            className="pr-4"
                          >
                            <img
                              src={URL.createObjectURL(formData?.profile)}
                              alt="Thumb"
                            />
                          </div>
                        </div>
                      ) : (
                        <div
                          onClick={() =>
                            setShowImage((e: any) => ({
                              ...e,
                              profile: true,
                            }))
                          }
                          className="bg-gray-200 h-10 w-10 rounded-full flex justify-center items-center"
                        >
                          <PlusIcon className="h-6 w-6" />
                        </div>
                      )}
                    </>
                  )}

                  {errors.profile && (
                    <p className="text-sm text-red-500 mb-2 mt-1">
                      {errors.profile}
                    </p>
                  )}
                </div>

                <div
                  className={` ${
                    showImage.profile ? "w-6/12" : "w-10/12"
                  } px-2 flex flex-col justify-start items-start  mb-3  `}
                >
                  <p className="font-semibold text-gray-800 mb-2">Owner Name</p>
                  <input
                    type="text"
                    name="owner_name"
                    value={formData.owner_name}
                    onChange={handleChange}
                    className="placeholder:font-semibold  placeholder:text-[#3d3c3c] px-2 rounded-md mb-2 py-3 text-sm font-medium bg-transparent focus:bg-[#F6F7FA] w-full  border-[1px] border-[#dbd9d9] text-space focus:outline-none   focus:border-[#dbd9d9] text-black "
                  />
                  {errors.owner_name && (
                    <p className="text-sm text-red-500 mb-2 mt-1">
                      {errors.owner_name}
                    </p>
                  )}
                </div>

                <div className="w-full px-2 mb-5 ">
                  <p className="font-semibold text-gray-800 mb-2">Goals:</p>
                  <input
                    type="text"
                    name="goals"
                    value={formData.goals}
                    onChange={handleChange}
                    className="placeholder:font-semibold  placeholder:text-[#3d3c3c] px-2 rounded-md mb-2 py-3 text-sm font-medium bg-transparent focus:bg-[#F6F7FA] w-full  border-[1px] border-[#dbd9d9] text-space focus:outline-none   focus:border-[#dbd9d9] text-black "
                  />
                  {errors.goals && (
                    <p className="text-sm text-red-500 mb-2 mt-1">
                      {errors.goals}
                    </p>
                  )}
                </div>

                <div className="w-full px-2 mb-5 ">
                  <p className="font-semibold text-gray-800 mb-2">Budget:</p>
                  <input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="placeholder:font-semibold  placeholder:text-[#3d3c3c] px-2 rounded-md mb-2 py-3 text-sm font-medium bg-transparent focus:bg-[#F6F7FA] w-full  border-[1px] border-[#dbd9d9] text-space focus:outline-none   focus:border-[#dbd9d9] text-black "
                  />
                  {errors.budget && (
                    <p className="text-sm text-red-500 mb-2 mt-1">
                      {errors.budget}
                    </p>
                  )}
                </div>

                <div className="w-full px-2   ">
                  <p className="font-semibold text-gray-800 mb-2">
                    Description:
                  </p>

                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={3}
                    className="placeholder:font-semibold  placeholder:text-[#3d3c3c] px-2 rounded-md mb-2 py-3 text-sm font-medium bg-transparent focus:bg-[#F6F7FA] w-full  border-[1px] border-[#dbd9d9] text-space focus:outline-none   focus:border-[#dbd9d9] text-black "
                  ></textarea>

                  {errors.description && (
                    <p className="text-sm text-red-500 mb-2 mt-1">
                      {errors.description}
                    </p>
                  )}
                </div>
              </div>

              <div className="w-full flex justify-between items-center px-4 md:px-4 pt-4 pb-2 border-gray-200 border-t mt-4">
                <button
                  onClick={onClose}
                  className="font-semibold text-gray-800 mb-2 text-lg"
                >
                  Cancel
                </button>

                <div className="flex justify-between items-center">
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="mr-4 font-semibold text-gray-800 mb-2 border-2 border-gray-200 rounded-md py-1.5 px-3"
                  >
                    Create and add another
                  </button>
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="font-semibold   mb-2 bg-secondary rounded-md py-1.5 px-6 text-white"
                  >
                    Create lead
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
