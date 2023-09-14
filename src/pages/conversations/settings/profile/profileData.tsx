import Image from "next/image";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { GoPlus } from "react-icons/go";

const ProfileData = () => {
  const [errors, setErrors] = useState<any>({});
  const [update, setUpdate] = useState<any>(false);
  const [formValues, setFormValues] = useState<any>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    newPassword: "",
    confirmPassword: "",
    image: null,
  });

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

    if (!formValues.firstName) {
      validationErrors.firstName = "Required";
    }
    if (!formValues.lastName) {
      validationErrors.lastName = "Required";
    }
    if (!formValues.email) {
      validationErrors.email = "Required";
    }
    if (!formValues.phoneNumber) {
      validationErrors.phoneNumber = "Required";
    }
    if (!formValues.image) {
      validationErrors.image = "Required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (formValues.newPassword !== formValues.confirmPassword) {
      setErrors({ confirmPassword: "Passwords do not match" });
      return;
    }

    setFormValues({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      newPassword: "",
      confirmPassword: "",
    });

    setErrors({});
  };

  return (
    <div className="flex justify-between mx-5">
      <div className="w-1/3  text-[#47494b] text-lg py-1 font-semibold">
        Profile Data
      </div>
      <div className=" w-2/3  bg-white border rounded-md">
        <form action="" onSubmit={handleSubmit}>
          <div className="w-10/12 mx-5">
            {/* Name */}
            <div className="py-2 mt-8 w-full flex gap-5 items-center">
              <div className="w-1/2">
                <label
                  htmlFor=""
                  className=" block text-[#47494b] text-sm py-1 font-semibold"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formValues.firstName}
                  onChange={handleChange}
                  placeholder="Enter First Name"
                  className="border-2 rounded-md w-full  px-2 py-1 placeholder:text-xs font-semibold"
                />
                {errors.firstName && (
                  <div className=" error text-red-500 ">{errors.firstName}</div>
                )}
              </div>

              <div className="w-1/2">
                <label
                  htmlFor=""
                  className="block text-[#47494b] text-sm py-1 font-semibold"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formValues.lastName}
                  onChange={handleChange}
                  placeholder="Enter Last Name"
                  className="border-2 rounded-md w-full  px-2 py-1 placeholder:text-xs font-semibold"
                />
                {errors.lastName && (
                  <div className="  error text-red-500 ">{errors.lastName}</div>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="py-2  ">
              <label
                htmlFor=""
                className="block text-[#47494b] text-sm py-1 font-semibold"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                placeholder="Enter Email"
                className="border-2 rounded-md w-full px-2 py-1 placeholder:text-xs font-semibold bg-gray-50"
              />
              {errors.email && (
                <div className=" error text-red-500 ">{errors.email}</div>
              )}
            </div>

            {/* Phone Number */}
            <div className="py-2  ">
              <label
                htmlFor=""
                className="block text-[#47494b] text-sm py-1 font-semibold"
              >
                Phone Number (Country Code and Number)
              </label>
              <input
                type="number"
                name="phoneNumber"
                value={formValues.phoneNumber}
                onChange={handleChange}
                placeholder="Enter Your Phone Number"
                className="border-2 rounded-md w-full px-2 py-1 placeholder:text-xs font-semibold"
              />
              {errors.phoneNumber && (
                <div className=" error text-red-500 ">{errors.phoneNumber}</div>
              )}
            </div>

            {/* Add profile photo */}
            <h1 className=" pt-4 text-[#47494b] text-sm py-1 font-semibold">
              Profile Photo
            </h1>
            <div className="gap-5 flex  items-center">
              {formValues.image ? (
                <div className="bg-gray-200 w-20 h-20 rounded-full flex items-center justify-center relative">
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <Image
                      fill={true}
                      src={
                        formValues.image
                          ? URL.createObjectURL(formValues.image)
                          : require("@/../public/images/avatar/blackdog.jpg")
                      }
                      className="rounded-full"
                      style={{ objectFit: "fill" }}
                      alt="image"
                    />
                  </div>
                </div>
              ) : (
                <div className="bg-gray-200 w-20 h-20 rounded-full  flex items-center justify-center">
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <span>
                      <GoPlus />
                    </span>
                  </div>
                </div>
              )}

              {/* Change button */}
              <div>
                <div className=" flex text-sm">
                  <div
                    {...getRootProps()}
                    className="border border-gray-400 rounded-md px-5 py-2 cursor-pointer text-[#47494b] font-semibold"
                  >
                    Change
                  </div>
                </div>
              </div>
            </div>
            {errors.image && (
              <div className="  error text-red-500 ">{errors.image}</div>
            )}

            {/* Update Password */}
            {update ? (
              <div>
                <div className="py-2  ">
                  <label
                    htmlFor=""
                    className="block text-[#47494b] text-sm py-1 font-semibold"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="newPassword"
                    value={formValues.newPassword}
                    onChange={handleChange}
                    placeholder="New Password"
                    className="border-2 rounded-md w-full p-2 placeholder:text-sm font-semibold"
                  />
                </div>

                <div className="py-2  ">
                  <label
                    htmlFor=""
                    className="block text-[#47494b] text-sm py-1 font-semibold"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="text"
                    name="confirmPassword"
                    value={formValues.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    className="border-2 rounded-md w-full p-2 placeholder:text-sm font-semibold"
                  />
                  {errors.confirmPassword && (
                    <div className=" error text-red-500 ">
                      {errors.confirmPassword}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className=" py-5 text-sm">
                <h1 className=" text-[#47494b] text-sm py-1 font-semibold">
                  Password
                </h1>
                <div
                  className="border flex justify-center bg-[#5450ee] border-gray-400 rounded-md w-40 px-3 py-2 cursor-pointer text-white font-semibold"
                  onClick={() => {
                    setUpdate(true);
                  }}
                >
                  Update Password
                </div>
              </div>
            )}
          </div>
          {/* Save Button */}
          <div className="flex mx-8 my-4 justify-end ">
            <button
              onSubmit={handleSubmit}
              className="border flex justify-center bg-[#5450ee] border-gray-400 rounded-md w-24 px-3 py-2 cursor-pointer text-white font-semibold"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileData;
