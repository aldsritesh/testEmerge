import React, { useState } from "react";

export default function AuthorizeRepresentative() {
  const [formData, setFormData] = useState<any>({
    firstName: "",
    lastName: "",
    email: "",
    job: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState<any>({
    firstName: "",
    lastName: "",
    email: "",
    job: "",
    phoneNumber: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors: any = {};

    // Validate first name
    if (formData.firstName.trim() === "") {
      newErrors.firstName = "First name is required.";
      isValid = false;
    }

    // Validate last name
    if (formData.lastName.trim() === "") {
      newErrors.lastName = "Last name is required.";
      isValid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email.trim() === "") {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = "Invalid email address.";
      isValid = false;
    }

    // Validate job
    if (formData.job.trim() === "") {
      newErrors.job = "Job is required.";
      isValid = false;
    }

    // Validate phone number
    const phonePattern = /^\d{10}$/;
    if (formData.phoneNumber.trim() === "") {
      newErrors.phoneNumber = "Phone number is required.";
      isValid = false;
    } else if (!phonePattern.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Invalid phone number.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (validateForm()) {
      // Form is valid, submit the data or perform other actions
      console.log("Form submitted:", formData);
      // Reset the form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        job: "",
        phoneNumber: "",
      });
      setErrors({
        firstName: "",
        lastName: "",
        email: "",
        job: "",
        phoneNumber: "",
      });
    }
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="border rounded-lg mt-5">
      <div className="flex justify-between items-center border-b px-3 py-3">
        <p className="text-[#47494b] text-base font-semibold">
          Authorize Representative
        </p>
      </div>
      <form onSubmit={handleSubmit} className=" pt-5 pb-3">
        <div className="px-4 flex flex-wrap pb-6">
          <div className="w-1/2 pr-3">
            <label
              htmlFor="firstName"
              className="block text-[#47494b] text-sm pt-1 font-semibold"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            />
            {errors.firstName && (
              <span className="mb-3 text-red-500 text-xs">
                {errors.firstName}
              </span>
            )}
          </div>
          <div className="w-1/2 pl-3">
            <label
              htmlFor="lastName"
              className="block text-[#47494b] text-sm pt-1 font-semibold"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            />
            {errors.lastName && (
              <span className="mb-3 text-red-500 text-xs">
                {errors.lastName}
              </span>
            )}
          </div>
          <div className="w-full">
            <label
              htmlFor="email"
              className="block text-[#47494b] text-sm pt-1 font-semibold"
            >
              Representative Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            />
            {errors.email && (
              <span className="mb-3 text-red-500 text-xs">{errors.email}</span>
            )}
          </div>
          <div className="w-full">
            <label
              htmlFor="job"
              className="block text-[#47494b] text-sm pt-1 font-semibold"
            >
              Job Position
            </label>
            <input
              type="text"
              id="job"
              name="job"
              value={formData.job}
              onChange={handleChange}
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            />
            {errors.job && (
              <span className="mb-3 text-red-500 text-xs">{errors.job}</span>
            )}
          </div>
          <div className="w-full">
            <label
              htmlFor="phoneNumber"
              className="block text-[#47494b] text-sm pt-1 font-semibold"
            >
              Phone Number (With Country Code)
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            />
            {errors.phoneNumber && (
              <span className="mb-3 text-red-500 text-xs">
                {errors.phoneNumber}
              </span>
            )}
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
