import Image from "next/image";
import React, { useState, useCallback, useEffect } from "react";
import { GoPlus } from "react-icons/go";
import { MdOutlineClose } from "react-icons/md";
import { useDropzone } from "react-dropzone";
import { BsQuestionCircleFill } from "react-icons/bs";
import { MenuItem, Select } from "@mui/material";
import { GetServerSideProps } from "next";

const PersonalData = ({ data }: any) => {
  console.log(data);
  // const data1 = data?.data;

  const [errors, setErrors] = useState<any>({});
  const [formValues, setFormValues] = useState<any>({
    image: null,
    firstName: data?.fullName,
    lastName: "",
    email: data?.emailAddress,
    phone: "",
    extention: "",
    language: "",
  });
  // useEffect(() => {
  //   if (data) {
  //     setFormValues({
  //       image: null,
  //       firstName: data1?.fullName,
  //       lastName: "",
  //       email: data1?.emailAddress,
  //       phone: "",
  //       extention: "",
  //       language: "",
  //     });
  //   }
  // }, [data]);
  // console.log("users", data1?.fullName, data1?.emailAddress);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      // Do something with the files
      setFormValues({ ...formValues, image: acceptedFiles[0] });
    },
    [formValues, setFormValues]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  });

  const handleImageDelete = () => {
    setFormValues({ ...formValues, image: null });
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormValues((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log(formValues);
    const validationErrors: any = {};

    if (!formValues.firstName.trim()) {
      validationErrors.firstName = "Required";
    }
    if (!formValues.lastName.trim()) {
      validationErrors.lastName = "Required";
    }
    if (!formValues.email.trim()) {
      validationErrors.email = "Required";
    }
    if (!formValues.phone.trim()) {
      validationErrors.phone = "Required";
    }
    if (!formValues.extention) {
      validationErrors.extention = "Required";
    }
    if (!formValues.image) {
      validationErrors.image = "Required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setFormValues({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      extention: "",
      language: "",
    });

    setErrors({});
  };
  // console.log("errees", formValues.image);
  return (
    <div className=" border rounded-md  mb-5  bg-white  shadow-md">
      {/* first section */}
      <div className="  p-4 border-b flex items-center justify-between">
        <p className="text-[#47494b] text-base font-semibold">Personal Data</p>
      </div>

      {/* Add profile photo */}
      <div className=" flex gap-4 rounded-md w-full mb-4 pl-8 pr-2 pt-4">
        <div className="w-[20%]">
          {formValues.image ? (
            <div className="bg-gray-200 w-32 h-32 flex items-center justify-center relative"></div>
          ) : (
            <div className="bg-gray-200 w-32 rounded-md  h-32 flex items-center justify-center">
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <span>
                  <GoPlus />
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="w-[60%] pl-4">
          <div className="px-5 pb-3 pt-4 text-xs text-gray-400 font-semibold">
            <p className="text-[#47494b] text-[12px] font-semibold">
              Business Logo
            </p>
            <p className="text-[#47494b] text-[11px] font-medium py-0.5">
              The proposed size is 350px * 180px.
            </p>
            <p className="text-[#47494b] text-[11px] font-medium ">
              Not bigger than 2.5MB
            </p>
          </div>
          <div className="px-5  gap-2 flex text-sm">
            <div
              {...getRootProps()}
              className="border-[1px] rounded-md px-4 pt-1 cursor-pointer border-gray-300 text-blue-400"
            >
              Upload
            </div>
            <div
              onClick={handleImageDelete}
              className="border-[1px]  border-gray-300 rounded-md px-4 py-1 cursor-pointer"
            >
              Remove
            </div>
          </div>
        </div>
      </div>
      {errors.image && (
        <div className="mb-3 text-red-500 text-xs px-8 ">{errors.image}</div>
      )}

      <div className="px-8 ">
        <form action="" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="py-2 w-full flex gap-12 items-center">
            <div className="w-1/2">
              <label
                htmlFor=""
                className="block text-[#47494b] text-sm pt-1 font-semibold"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formValues.firstName}
                onChange={handleChange}
                placeholder="Enter First Name"
                className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-0.5   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300"
              />
              {errors.firstName && (
                <div className="mb-3 text-red-500 text-xs  ">
                  {errors.firstName}
                </div>
              )}
            </div>

            <div className="w-1/2">
              <label
                htmlFor=""
                className="block text-[#47494b] text-sm pt-1 font-semibold"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formValues.lastName}
                onChange={handleChange}
                placeholder="Enter Last Name"
                className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-0.5   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300"
              />
              {errors.lastName && (
                <div className=" mb-3 text-red-500 text-xs  ">
                  {errors.lastName}
                </div>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="py-2  ">
            <label
              htmlFor=""
              className="block text-[#47494b] text-sm pt-1 font-semibold"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              placeholder="Enter Email"
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-0.5   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300"
            />
            {errors.email && (
              <div className="mb-3 text-red-500 text-xs  ">{errors.email}</div>
            )}
          </div>

          {/* Phone and Extention */}
          <div className="py-2 w-full flex gap-4 items-center">
            <div className="lg:w-8/12">
              <label
                htmlFor=""
                className="block text-[#47494b] text-sm pt-1 font-semibold"
              >
                Phone
              </label>
              <input
                type="number"
                name="phone"
                value={formValues.phone}
                onChange={handleChange}
                placeholder="Enter Phone Number"
                className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-0.5   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300"
              />
              {errors.phone && (
                <div className="mb-3 text-red-500 text-xs  ">
                  {errors.phone}
                </div>
              )}
            </div>

            <div className="lg:w-4/12">
              <label
                htmlFor=""
                className="block text-[#47494b] text-sm pt-1 font-semibold"
              >
                Extention
              </label>
              <input
                type="text"
                name="extention"
                value={formValues.extention}
                onChange={handleChange}
                placeholder="Enter Extention"
                className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-0.5   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300"
              />
              {errors.extention && (
                <div className="mb-3 text-red-500 text-xs  ">
                  {errors.extention}
                </div>
              )}
            </div>
          </div>

          {/* Platform Language */}
          <div className="py-2  ">
            <label
              htmlFor=""
              className="  text-[#47494b] text-sm pt-1 font-semibold flex justify-start pb-0.5 items-center gap-2"
            >
              Platform Language <BsQuestionCircleFill className="text-xs " />
            </label>
            <Select
              name="language"
              value={formValues.language}
              onChange={handleChange}
              className="border-none ouline-none rounded-md mt-2 mb-2  text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark   text-space focus:outline-none focus:border-gray-300 text-black"
            >
              <MenuItem value="">Select</MenuItem>
              <MenuItem value="us">English (United States)</MenuItem>
              <MenuItem value="uk">English (United KingDom)</MenuItem>
            </Select>
            {errors.language && (
              <div className="mb-3 text-red-500 text-xs  ">
                {errors.language}
              </div>
            )}
          </div>

          <button
            onSubmit={handleSubmit}
            className="border bg-newBlue mb-4 mt-2  text-white rounded-md text-sm px-3 py-2"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default PersonalData;
