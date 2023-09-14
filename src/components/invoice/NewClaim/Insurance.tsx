import { MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

const Insurance = () => {
  const [errors, setErrors] = useState<any>({});
  const [formData, setFormData] = useState<any>({
    primaryInsurance: "",
    payerAddress: "",
    insuredID: "",
    programTyp: "",
    alrdyInsured: "",
    insuredName: "",
    insuredAddress: "",
    relToInsured: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Validate form fields
    const validationErrors: any = {};

    if (!formData.primaryInsurance) {
      validationErrors.primaryInsurance = "Primary Insurance is required";
    }

    if (!formData.payerAddress) {
      validationErrors.payerAddress = "Payer Address is required";
    }

    if (!formData.insuredID) {
      validationErrors.insuredID = "Insured ID is required";
    }

    if (!formData.programTyp) {
      validationErrors.programTyp = "Program Typ is required";
    }

    if (!formData.alrdyInsured) {
      validationErrors.alrdyInsured = "Required";
    }

    if (!formData.insuredName) {
      validationErrors.insuredName = "Insured Name is Required";
    }

    if (!formData.insuredAddress) {
      validationErrors.insuredAddress = "Insured Address is Required";
    }

    if (!formData.relToInsured) {
      validationErrors.relToInsured = "Relation to Insured is Required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setFormData({
      primaryInsurance: "",
      payerAddress: "",
      insuredID: "",
      programTyp: "",
      alrdyInsured: "",
    });
  };

  return (
    <div>
      <div className="  bg-white">
        <div className="flex justify-between items-center border-b px-3 py-3 bg-gray-100">
          <p className="text-[#47494b] text-base font-semibold ">Insurance</p>
        </div>
        <div className="px-4 flex flex-wrap pb-6 ">
          <div className="w-full mb-2">
            <label className="block text-[#47494b] text-sm pt-1 font-semibold">
              Primary Insurance
            </label>
            <input
              name="primaryInsurance"
              type="text"
              value={formData.primaryInsurance}
              onChange={handleChange}
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            ></input>

            {errors.primaryInsurance && (
              <span className=" text-red-500 text-xs">
                {errors.primaryInsurance}
              </span>
            )}
          </div>

          <div className="w-full mb-2">
            <label className="block text-[#47494b] text-sm pt-1 font-semibold">
              Payer Address
            </label>
            <input
              type="text"
              name="payerAddress"
              value={formData.payerAddress}
              onChange={handleChange}
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            ></input>
            {errors.payerAddress && (
              <span className=" text-red-500 text-xs">
                {errors.payerAddress}
              </span>
            )}
          </div>

          <div className="w-full mb-2">
            <label className="block text-[#47494b] text-sm pt-1 font-semibold">
              Insured Id
            </label>

            <input
              type="text"
              name="insuredID"
              value={formData.insuredID}
              onChange={handleChange}
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2    font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            ></input>

            {errors.insuredID && (
              <span className=" text-red-500 text-xs">{errors.insuredID}</span>
            )}
          </div>

          <div className="w-full mb-2">
            <label className="block text-[#47494b] text-sm pt-1 font-semibold">
              Program Type
            </label>
            <Select
              name="programTyp"
              value={formData.programTyp}
              onChange={handleChange}
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px]  rounded-md mt-2    font-medium bg-transparent focus:bg-transparent    border-gray-200  focus:outline-none focus:border-gray-300  "
            >
              <MenuItem value="typ">Select Program Type</MenuItem>
              <MenuItem value="type1">Type1</MenuItem>
              <MenuItem value="type2">Type2</MenuItem>
              <MenuItem value="type3">Type3</MenuItem>
            </Select>
            {errors.programTyp && (
              <span className=" text-red-500 text-xs">{errors.programTyp}</span>
            )}
          </div>

          <div className="w-full">
            <label className="block text-[#47494b] text-sm pt-1 font-semibold">
              Are you Insured ?
            </label>
            <Select
              name="alrdyInsured"
              value={formData.alrdyInsured}
              onChange={handleChange}
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px]  rounded-md mt-2  font-medium bg-transparent focus:bg-transparent  text-space focus:outline-none    "
            >
              <MenuItem value="">Select </MenuItem>
              <MenuItem value="yes">Yes</MenuItem>
              <MenuItem value="no">No</MenuItem>
            </Select>
            {errors.alrdyInsured && (
              <span className=" text-red-500 text-xs">
                {errors.alrdyInsured}
              </span>
            )}
          </div>
        </div>
        {/* 
          <div className="w-full flex justify-end items-end px-4 ">
            <button
              type="submit"
              className="  bg-newBlue font-medium py-2 text-sm  rounded-lg px-5 text-white"
            >
              Submit
            </button>
          </div> */}
      </div>
      {formData.alrdyInsured == "yes" ? (
        <div>
          <div className="flex justify-between items-center border-b px-3 py-3 bg-gray-100 mt-3">
            <p className="text-[#47494b] text-base font-semibold">
              Insured Information
            </p>
          </div>
          <div className="px-4 flex flex-wrap pb-6">
            <div className="w-full mb-2">
              <label className="block text-[#47494b] text-sm pt-1 font-semibold">
                Insured Name
              </label>
              <input
                name="insuredName"
                type="text"
                value={formData.insuredName}
                onChange={handleChange}
                className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
              ></input>

              {errors.insuredName && (
                <span className=" text-red-500 text-xs">
                  {errors.insuredName}
                </span>
              )}
            </div>

            <div className="w-full mb-2">
              <label className="block text-[#47494b] text-sm pt-1 font-semibold">
                Insured Address
              </label>
              <input
                type="text"
                name="insuredAddress"
                value={formData.insuredAddress}
                onChange={handleChange}
                className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
              ></input>
              {errors.insuredAddress && (
                <span className=" text-red-500 text-xs">
                  {errors.insuredAddress}
                </span>
              )}
            </div>

            <div className="w-full ">
              <label className="block text-[#47494b] text-sm pt-1 font-semibold">
                Patient Relation to Insured
              </label>
              <input
                type="text"
                name="relToInsured"
                value={formData.relToInsured}
                onChange={handleChange}
                className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2    font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
              />
              {errors.relToInsured && (
                <span className=" text-red-500 text-xs">
                  {errors.relToInsured}
                </span>
              )}
            </div>
          </div>

          {/* <div className="w-full flex justify-end items-end px-4 ">
              <button
                type="submit"
                className="  bg-newBlue font-medium py-2 text-sm  rounded-lg px-5 text-white"
              >
                Submit
              </button>
            </div> */}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Insurance;
