import React, { useState } from "react";
import { MenuItem, Select } from "@mui/material";

export default function BusinessInformation() {
  const [formData, setFormData] = useState({
    businessType: "",
    businessIndustry: "",
    registrationId: "",
    registrationNo: "",
    businessRegister: false,
  });

  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;
    setFormData((prevData) => ({ ...prevData, [name]: fieldValue }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Validate form fields
    const validationErrors: any = {};

    if (!formData.businessType) {
      validationErrors.businessType = "Business type is required";
    }

    if (!formData.businessIndustry) {
      validationErrors.businessIndustry = "Business industry is required";
    }

    if (!formData.registrationId) {
      validationErrors.registrationId = "Registration ID is required";
    }

    if (!formData.registrationNo) {
      validationErrors.registrationNo = "Registration number is required";
    }

    setErrors(validationErrors);

    // Submit form if there are no errors
    if (Object.keys(validationErrors).length === 0) {
      // Perform form submission here
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="border rounded-lg mt-5">
      <div className="flex justify-between items-center border-b px-3 py-3">
        <p className="text-[#47494b] text-base font-semibold">
          Business Information
        </p>
      </div>
      <form onSubmit={handleSubmit} className=" pt-5 pb-3">
        <div className="px-4 flex flex-wrap pb-6">
          <div className="w-full">
            <label className="block text-[#47494b] text-sm pt-1 font-semibold">
              Business Type
            </label>
            <Select
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              className="border-none ouline-none rounded-md mt-2 mb-2  text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark   text-space focus:outline-none focus:border-gray-300 text-black"
            >
              <MenuItem value="type1">Type 1</MenuItem>
              <MenuItem value="type2">Type 2</MenuItem>
              <MenuItem value="type3">Type 3</MenuItem>
            </Select>

            {errors.businessType && (
              <span className="mb-3 text-red-500 text-xs">
                {errors.businessType}
              </span>
            )}
          </div>

          <div className="w-full">
            <label className="block text-[#47494b] text-sm pt-1 font-semibold">
              Business Industry
            </label>
            <Select
              name="businessIndustry"
              value={formData.businessIndustry}
              onChange={handleChange}
              className="border-none ouline-none rounded-md mt-2 mb-2  text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark   text-space focus:outline-none focus:border-gray-300 text-black"
            >
              <MenuItem value="">Select Business Industry</MenuItem>
              <MenuItem value="industry1">Industry 1</MenuItem>
              <MenuItem value="industry2">Industry 2</MenuItem>
              <MenuItem value="industry3">Industry 3</MenuItem>
            </Select>
            {errors.businessIndustry && (
              <span className="mb-3 text-red-500 text-xs">
                {errors.businessIndustry}
              </span>
            )}
          </div>

          <div className="w-full">
            <label className="block text-[#47494b] text-sm pt-1 font-semibold">
              Business Registration ID Type
            </label>
            <Select
              name="registrationId"
              value={formData.registrationId}
              onChange={handleChange}
              className="border-none ouline-none rounded-md mt-2 mb-2  text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark   text-space focus:outline-none focus:border-gray-300 text-black"
            >
              <MenuItem value="">Select Registration ID</MenuItem>
              <MenuItem value="id1">ID 1</MenuItem>
              <MenuItem value="id2">ID 2</MenuItem>
              <MenuItem value="id3">ID 3</MenuItem>
            </Select>

            {errors.registrationId && (
              <span className="mb-3 text-red-500 text-xs">
                {errors.registrationId}
              </span>
            )}
          </div>

          <div className="w-full">
            <label className="block text-[#47494b] text-sm pt-1 font-semibold">
              Business Registration Number
            </label>
            <input
              type="number"
              name="registrationNo"
              value={formData.registrationNo}
              onChange={handleChange}
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            />
            {errors.registrationNo && (
              <span className="mb-3 text-red-500 text-xs">
                {errors.registrationNo}
              </span>
            )}
          </div>
          <div className="flex justify-start items-center pt-5  mb-3   rounded-lg">
            <input
              type="checkbox"
              name="businessRegister"
              checked={formData.businessRegister}
              onChange={handleChange}
              className="checkbox"
            />

            <p
              className={` fontStrawFord text-gray-600 text-xs font-semibold  tracking-wide ml-2   `}
            >
              My Business is Not Register
            </p>
          </div>
        </div>

        <div className="w-full flex justify-end items-end mt-3 px-4 border-t pt-4">
          <button
            type="submit"
            className="  bg-newBlue font-medium py-2 text-sm  rounded-lg px-5 text-white"
          >
            Update Information
          </button>
        </div>
      </form>
    </div>
  );
}
