import Image from "next/image";
import React, { useState, useCallback, useContext } from "react";
import { GoPlus } from "react-icons/go";
import { MdOutlineClose } from "react-icons/md";
import { useDropzone } from "react-dropzone";
import { BsQuestionCircleFill } from "react-icons/bs";
import { MenuItem, Select } from "@mui/material";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { formDataCtx } from "./AddProfile";

export default function UserRoles({ handleNext }: any) {
  const [errors, setErrors] = useState<any>({});
  const { formDataValues, setFormDataValues } = useContext(formDataCtx);
  const [formValues, setFormValues] = useState<any>({
    userRole: "",
    userType: "",
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

    // console.log(formValues);
    const validationErrors: any = {};

    if (!formValues.userRole.trim()) {
      validationErrors.userRole = "Required";
    }
    if (!formValues.userType.trim()) {
      validationErrors.userType = "Required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setFormValues({
      userRole: "",
      userType: "",
    });

    setFormDataValues((prev: any) => ({ ...prev, ...formValues }));
    setErrors({});
    handleNext();
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="  bg-white h-[60vh] overflow-y-scroll scrollbar-hide px-4">
        <div className="py-4 ">
          <label
            htmlFor=""
            className="  text-[#47494b] text-sm pt-1 font-semibold flex justify-start pb-0.5 items-center gap-2"
          >
            User Roles <BsQuestionCircleFill className="text-xs " />
          </label>
          <Select
            name="userRole"
            value={formValues.userRole}
            onChange={handleChange}
            className="border-none ouline-none rounded-lg shadow-none mt-2 mb-2  text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark   text-space focus:outline-none focus:border-gray-300 text-black"
          >
            <MenuItem value="">Select</MenuItem>
            <MenuItem value="USER">User</MenuItem>
            <MenuItem value="ADMIN">Admin</MenuItem>
            <MenuItem value="MANAGER">Manager</MenuItem>
          </Select>
          {errors.userRole && (
            <div className="mb-3 text-red-500 text-xs  ">{errors.userRole}</div>
          )}
        </div>
        <div className="py-4 ">
          <label
            htmlFor=""
            className="  text-[#47494b] text-sm pt-1 font-semibold flex justify-start pb-0.5 items-center gap-2"
          >
            User Types <BsQuestionCircleFill className="text-xs " />
          </label>
          <Select
            name="userType"
            value={formValues.userType}
            onChange={handleChange}
            className="border-none ouline-none rounded-lg shadow-none mt-2 mb-2  text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark   text-space focus:outline-none focus:border-gray-300 text-black"
          >
            <MenuItem value="">Select</MenuItem>
            <MenuItem value="LOCATION">location</MenuItem>
            <MenuItem value="AGENCY">agency</MenuItem>
          </Select>
          {errors.userType && (
            <div className="mb-3 text-red-500 text-xs  ">{errors.userType}</div>
          )}
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
