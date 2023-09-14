import React, { useState } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";

export default function BusinessPhysicalAddress() {
  const [formData, setFormData] = useState<any>({
    streetAddress: "",
    city: "",
    postalCode: "",
    state: "",
    country: "",
    timezone: "",
    platformLanguage: "",
    outboundCommunication: "",
  });

  const [errors, setErrors] = useState<any>({});

  const validateForm = () => {
    const newErrors: any = {};

    if (formData.streetAddress.trim() === "") {
      newErrors.streetAddress = "Street address is required.";
    }

    if (formData.city.trim() === "") {
      newErrors.city = "City is required.";
    }

    if (formData.postalCode.trim() === "") {
      newErrors.postalCode = "Postal code is required.";
    }

    if (formData.state.trim() === "") {
      newErrors.state = "State is required.";
    }

    if (formData.country.trim() === "") {
      newErrors.country = "Country is required.";
    }

    if (formData.timezone.trim() === "") {
      newErrors.timezone = "Timezone is required.";
    }

    if (formData.platformLanguage.trim() === "") {
      newErrors.platformLanguage = "Platform language is required.";
    }

    if (formData.outboundCommunication.trim() === "") {
      newErrors.outboundCommunication = "Outbound communication is required.";
    }

    setErrors(newErrors);

    // Check if there are any errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid, submit the data
      console.log("Form data:", formData);
    } else {
      console.log("Form has errors.");
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prevFormData: any) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="border rounded-lg mt-5">
      <div className="flex justify-start items-center border-b px-3 py-3">
        <p className="text-[#47494b] text-base font-semibold">
          Business Physical Address
        </p>
        <AiOutlineExclamationCircle className="text-[#47494b] text-sm ml-2" />
      </div>
      <form onSubmit={handleSubmit} className=" pt-3 pb-3">
        <div className="px-4 flex flex-wrap pb-6  ">
          <div className="w-full">
            <label
              htmlFor="streetAddress"
              className="block text-[#47494b] text-sm pt-1 font-semibold"
            >
              Street Address
            </label>
            <input
              type="text"
              id="streetAddress"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleChange}
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            />
            {errors.streetAddress && (
              <span className="mb-3 text-red-500 text-xs">
                {errors.streetAddress}
              </span>
            )}
          </div>
          <div className="w-8/12 pr-3">
            <label
              htmlFor="city"
              className="block text-[#47494b] text-sm pt-1 font-semibold"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            />
            {errors.city && (
              <span className="mb-3 text-red-500 text-xs">{errors.city}</span>
            )}
          </div>
          <div className="w-4/12 pl-2">
            <label
              htmlFor="postalCode"
              className="block text-[#47494b] text-sm pt-1 font-semibold"
            >
              Postal Code
            </label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            />
            {errors.postalCode && (
              <span className="mb-3 text-red-500 text-xs">
                {errors.postalCode}
              </span>
            )}
          </div>
          <div className="w-full">
            <label
              htmlFor="state"
              className="block text-[#47494b] text-sm pt-1 font-semibold"
            >
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            />
            {errors.state && (
              <span className="mb-3 text-red-500 text-xs">{errors.state}</span>
            )}
          </div>
          <div className="w-full">
            <label
              htmlFor="country"
              className="block text-[#47494b] text-sm pt-1 font-semibold"
            >
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            />
            {errors.country && (
              <span className="mb-3 text-red-500 text-xs">
                {errors.country}
              </span>
            )}
          </div>
          <div className="w-full">
            <label
              htmlFor="timezone"
              className="block text-[#47494b] text-sm pt-1 font-semibold"
            >
              Timezone
            </label>
            <input
              type="text"
              id="timezone"
              name="timezone"
              value={formData.timezone}
              onChange={handleChange}
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            />
            {errors.timezone && (
              <span className="mb-3 text-red-500 text-xs">
                {errors.timezone}
              </span>
            )}
          </div>
          <div className="w-full">
            <label
              htmlFor="platformLanguage"
              className="block text-[#47494b] text-sm pt-1 font-semibold"
            >
              Platform Language
            </label>
            <input
              type="text"
              id="platformLanguage"
              name="platformLanguage"
              value={formData.platformLanguage}
              onChange={handleChange}
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            />
            {errors.platformLanguage && (
              <span className="mb-3 text-red-500 text-xs">
                {errors.platformLanguage}
              </span>
            )}
          </div>
          <div className="w-full">
            <label
              htmlFor="outboundCommunication"
              className="block text-[#47494b] text-sm pt-1 font-semibold"
            >
              Outbound Communication
            </label>
            <input
              type="text"
              id="outboundCommunication"
              name="outboundCommunication"
              value={formData.outboundCommunication}
              onChange={handleChange}
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            />
            {errors.outboundCommunication && (
              <span className="mb-3 text-red-500 text-xs">
                {errors.outboundCommunication}
              </span>
            )}
          </div>
        </div>
        <div className="w-full flex justify-end items-end mt-3 px-4 border-t pt-4">
          <button
            type="submit"
            className="  bg-newBlue font-medium py-2 text-sm  rounded-lg px-5 text-white"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
