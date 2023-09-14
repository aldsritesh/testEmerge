import { baseUrl } from "@/config/APIConstants";
import { useAuthentication } from "@/controllers/auth";
import { Close } from "@mui/icons-material";
import axios from "axios";

import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function SubaccForm({ onClose, update }: any) {
  const [errors, setErrors] = useState<any>({});
  const [formValues, setFormValues] = useState<any>({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    postalCode: "",
    city: "",
    businessName: "",
    website: "",
    street: "",
    timezone: "",
    country: "",
    region: "",
  });
  const { location, token }: any = useAuthentication();

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormValues((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleStore = async (values: any) => {
    const data = await axios.post(`${baseUrl}locations`, values, {
      headers: { Authorization: `Bearer ${token}` },
    });

    console.log("stored", data);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log(formValues);
    const validationErrors: any = {};

    if (!formValues.fullName.trim()) {
      validationErrors.fullName = "Required";
    }
    if (!formValues.website.trim()) {
      validationErrors.website = "Required";
    }
    if (!formValues.emailAddress.trim()) {
      validationErrors.emailAddress = "Required";
    }
    if (!formValues.phoneNumber.trim()) {
      validationErrors.phoneNumber = "Required";
    }
    if (!formValues.street) {
      validationErrors.street = "Required";
    }
    if (!formValues.city) {
      validationErrors.city = "Required";
    }
    if (!formValues.region) {
      validationErrors.region = "Required";
    }

    if (!formValues.postalCode) {
      validationErrors.postalCode = "Required";
    }
    if (!formValues.businessName) {
      validationErrors.businessName = "Required";
    }
    if (!formValues.timezone) {
      validationErrors.timezone = "Required";
    }
    if (!formValues.country) {
      validationErrors.country = "Required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    handleStore(formValues);
    update();
    setFormValues({
      fullName: "",
      emailAddress: "",
      phoneNumber: "",
      postalCode: "",
      city: "",
      businessName: "",
      website: "",
      street: "",
      timezone: "",
      country: "",
      region: "",
    });

    setErrors({});

    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="   bg-white h-[75vh] w-[40vw] overflow-y-scroll scrollbar-hide  rounded-md">
        <div className="flex justify-between">
          <h1 className="p-5 text-lg text-gray-600   underline">
            Create New Sub-Account
          </h1>
          <button onClick={onClose}>
            <AiOutlineClose className="text-gray-800 h-6 w-6" />
          </button>
        </div>
        <div className="px-6">
          <div>
            {/* Name */}
            <div className="py-2 w-full flex gap-4 items-center">
              <div className="w-1/2">
                <label
                  htmlFor=""
                  className="block text-[#47494b] text-sm pt-1 font-semibold"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formValues.fullName}
                  onChange={handleChange}
                  placeholder="Enter First Name"
                  className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-0.5   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300"
                />
                {errors.fullName && (
                  <div className="mb-3 text-red-500 text-xs  ">
                    {errors.fullName}
                  </div>
                )}
              </div>

              <div className="w-1/2">
                <label
                  htmlFor=""
                  className="block text-[#47494b] text-sm pt-1 font-semibold"
                >
                  Phone
                </label>
                <input
                  type="number"
                  name="phoneNumber"
                  value={formValues.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter Phone Number"
                  className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-0.5   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300"
                />
                {errors.phoneNumber && (
                  <div className=" mb-3 text-red-500 text-xs  ">
                    {errors.phoneNumber}
                  </div>
                )}
              </div>
            </div>
            <div className="py-2 w-full flex gap-4 items-center">
              <div className="w-1/2">
                <label
                  htmlFor=""
                  className="block text-[#47494b] text-sm pt-1 font-semibold"
                >
                  Business Name
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={formValues.businessName}
                  onChange={handleChange}
                  placeholder="Enter Business Name"
                  className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-0.5   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300"
                />
                {errors.businessName && (
                  <div className="mb-3 text-red-500 text-xs  ">
                    {errors.businessName}
                  </div>
                )}
              </div>

              <div className="w-1/2">
                <label
                  htmlFor=""
                  className="block text-[#47494b] text-sm pt-1 font-semibold"
                >
                  Website
                </label>
                <input
                  type="text"
                  name="website"
                  value={formValues.website}
                  onChange={handleChange}
                  placeholder="Enter website"
                  className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-0.5   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300"
                />
                {errors.website && (
                  <div className=" mb-3 text-red-500 text-xs  ">
                    {errors.website}
                  </div>
                )}
              </div>
            </div>
            {/* emailAddress */}
            <div className="py-2  ">
              <label
                htmlFor=""
                className="block text-[#47494b] text-sm pt-1 font-semibold"
              >
                Email
              </label>
              <input
                type="email"
                name="emailAddress"
                value={formValues.emailAddress}
                onChange={handleChange}
                placeholder="Enter Email"
                className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-0.5   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300"
              />
              {errors.emailAddress && (
                <div className="mb-3 text-red-500 text-xs  ">
                  {errors.emailAddress}
                </div>
              )}
            </div>

            <div className="w-full">
              <label
                htmlFor=""
                className="block text-[#47494b] text-sm pt-1 font-semibold"
              >
                Street
              </label>
              <input
                type="text"
                name="street"
                value={formValues.street}
                onChange={handleChange}
                placeholder="Enter street"
                className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-0.5   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300"
              />
              {errors.street && (
                <div className="mb-3 text-red-500 text-xs  ">
                  {errors.street}
                </div>
              )}
            </div>
            <div className="py-2 w-full flex gap-4 items-start ">
              <div className="w-1/2">
                <label
                  htmlFor=""
                  className="block text-[#47494b] text-sm  font-semibold"
                >
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={formValues.city}
                  onChange={handleChange}
                  placeholder="Enter city"
                  className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-0.5   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300"
                />
                {errors.city && (
                  <div className="mb-3 text-red-500 text-xs  ">
                    {errors.city}
                  </div>
                )}
              </div>

              <div className="w-1/2 -pt-2">
                <label
                  htmlFor=""
                  className="block text-[#47494b] text-sm   font-semibold"
                >
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  value={formValues.country}
                  onChange={handleChange}
                  placeholder="Enter country"
                  className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-0.5   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300"
                />
                {errors.country && (
                  <div className="mb-3 text-red-500 text-xs  ">
                    {errors.country}
                  </div>
                )}
              </div>
            </div>

            {/* phoneNumber and Extention */}
            <div className="py-2 w-full flex gap-4 items-center">
              <div className="w-1/2">
                <label
                  htmlFor=""
                  className="block text-[#47494b] text-sm pt-1 font-semibold"
                >
                  PostalCode
                </label>
                <input
                  type="number"
                  name="postalCode"
                  value={formValues.postalCode}
                  onChange={handleChange}
                  placeholder="Enter PostalCode "
                  className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-0.5   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300"
                />
                {errors.postalCode && (
                  <div className="mb-3 text-red-500 text-xs  ">
                    {errors.postalCode}
                  </div>
                )}
              </div>

              <div className=" w-1/2">
                <label
                  htmlFor=""
                  className="block text-[#47494b] text-sm pt-1 font-semibold"
                >
                  Timezone
                </label>
                <input
                  type="text"
                  name="timezone"
                  value={formValues.timezone}
                  onChange={handleChange}
                  placeholder="  Timezone"
                  className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-0.5   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300"
                />
                {errors.timezone && (
                  <div className="mb-3 text-red-500 text-xs  ">
                    {errors.timezone}
                  </div>
                )}
              </div>
            </div>
            <div className=" w-1/2">
              <label
                htmlFor=""
                className="block text-[#47494b] text-sm pt-1 font-semibold"
              >
                Region
              </label>
              <input
                type="text"
                name="region"
                value={formValues.region}
                onChange={handleChange}
                placeholder="  Region"
                className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-0.5   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300"
              />
              {errors.region && (
                <div className="mb-3 text-red-500 text-xs  ">
                  {errors.region}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="h-[10vh] flex justify-between items-center border-t-[1px] pb-4 mt-1.5 px-5">
        <button className="border-[1px] rounded-md px-5 py-2 border-gray-300 text-[12px] font-medium">
          Cancel
        </button>
        <button
          onSubmit={handleSubmit}
          className="text-white bg-newBlue rounded-md px-5 py-2  text-[12px] font-medium"
        >
          Save
        </button>
      </div>
    </form>
  );
}
