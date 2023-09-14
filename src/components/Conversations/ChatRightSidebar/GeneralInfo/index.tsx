import React, { useState } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";

export default function BusinessPhysicalAddress() {
  const [formData, setFormData] = useState<any>({
    legalBusinessName: "",
    streetAddress: "191 Beulah Road",
    city: "Dolyestown",
    postalCode: "18901",
    state: "PA",
    country: "United States",
    timezone: "",
    businessWebsite: "www.gohighlevel.com",
  });

  const [errors, setErrors] = useState<any>({});

  const validateForm = () => {
    const newErrors: any = {};

    if (formData.legalBusinessName.trim() === "") {
      newErrors.legalBusinessName = "Business name is required.";
    }

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

    if (formData.businessWebsite.trim() === "") {
      newErrors.businessWebsite = "Outbound communication is required.";
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
      alert("data saved");
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
    <div className="h-[100vh] pb-[30%]  overflow-y-scroll w-full scrollbar-hide ">
      <form onSubmit={handleSubmit} className=" pt-3 pb-3">
        <div className="px-4 flex flex-wrap pb-6  ">
          <div className="w-full mb-1">
            <label
              className="block text-[#47494b] text-[12px] pt-1 font-semibold"
              htmlFor="legalBusinessName"
            >
              Business Name
            </label>
            <input
              type="text"
              id="legalBusinessName"
              name="legalBusinessName"
              value={formData.legalBusinessName}
              onChange={handleChange}
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-1.5 py-1.5 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            />
            {errors.legalBusinessName && (
              <p className="mb-3 text-red-500 text-xs">
                {errors.legalBusinessName}
              </p>
            )}
          </div>
          <div className="w-full">
            <label
              htmlFor="streetAddress"
              className="block text-[#47494b] text-[12px] pt-1 font-semibold"
            >
              Street Address
            </label>
            <input
              type="text"
              id="streetAddress"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleChange}
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-1.5 py-1.5 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            />
            {errors.streetAddress && (
              <span className="mb-3 text-red-500 text-xs">
                {errors.streetAddress}
              </span>
            )}
          </div>
          <div className="w-full">
            <label
              htmlFor="city"
              className="block text-[#47494b] text-[12px] pt-1 font-semibold"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-1.5 py-1.5 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            />
            {errors.city && (
              <span className="mb-3 text-red-500 text-xs">{errors.city}</span>
            )}
          </div>

          <div className="w-full">
            <label
              htmlFor="country"
              className="block text-[#47494b] text-[12px] pt-1 font-semibold"
            >
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-1.5 py-1.5 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            />
            {errors.country && (
              <span className="mb-3 text-red-500 text-xs">
                {errors.country}
              </span>
            )}
          </div>

          <div className="w-full">
            <label
              htmlFor="state"
              className="block text-[#47494b] text-[12px] pt-1 font-semibold"
            >
              State/Prov/Region
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-1.5 py-1.5 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            />
            {errors.state && (
              <span className="mb-3 text-red-500 text-xs">{errors.state}</span>
            )}
          </div>

          <div className="w-full">
            <label
              htmlFor="postalCode"
              className="block text-[#47494b] text-[12px] pt-1 font-semibold"
            >
              Zip/Postal/Code
            </label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-1.5 py-1.5 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            />
            {errors.postalCode && (
              <span className="mb-3 text-red-500 text-xs">
                {errors.postalCode}
              </span>
            )}
          </div>

          <div className="w-full">
            <label
              className="block text-[#47494b] text-[12px] pt-1 font-semibold"
              htmlFor="businessWebsite"
            >
              Website
            </label>
            <input
              type="url"
              id="businessWebsite"
              name="businessWebsite"
              value={formData.businessWebsite}
              onChange={handleChange}
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-1.5 py-1.5 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            />
            {errors.businessWebsite && (
              <p className="mb-3 text-red-500 text-xs">
                {errors.businessWebsite}
              </p>
            )}
          </div>

          <div className="w-full">
            <label
              htmlFor="timezone"
              className="block text-[#47494b] text-[12px] pt-1 font-semibold"
            >
              Timezone
            </label>
            <input
              type="text"
              id="timezone"
              name="timezone"
              value={formData.timezone}
              onChange={handleChange}
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-1.5 py-1.5 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            />
            {errors.timezone && (
              <span className="mb-3 text-red-500 text-xs">
                {errors.timezone}
              </span>
            )}
          </div>
        </div>
        <div className="w-full flex justify-end items-center gap-2 px-4">
          <button className="text-sm text-newBlue font-medium flex justify-start items-center border-[1px] border-newBlue py-1.5 px-5 rounded-md  ">
            Reset
          </button>
          <button
            type="submit"
            className="text-sm flex justify-start items-center bg-newBlue py-1.5 px-5 text-white rounded-md  "
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
