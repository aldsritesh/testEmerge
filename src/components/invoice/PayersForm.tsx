import React from "react";
import { useState } from "react";
import { MenuItem, Select } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { RiAddFill } from "react-icons/ri";

const PayersForm = ({ handleStoreChange }: any) => {
  const [errors, setErrors] = useState<any>({});
  const [formData, setFormData] = useState({
    payerName: "",
    customerName: "",
    amount: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Validate form fields
    const validationErrors: any = {};

    if (!formData.payerName) {
      validationErrors.payerName = "Payer Name is required";
    }

    if (!formData.customerName) {
      validationErrors.customerName = "Customer Name is required";
    }

    if (!formData.amount) {
      validationErrors.amount = "Amount is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    handleStoreChange(formData);

    setFormData({
      payerName: "",
      customerName: "",
      amount: "",
    });
    setErrors({});
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        {/* Product Info */}
        <div className="  rounded-r-lg  mb-3 bg-white">
          <div className="flex justify-between items-center px-3 py-3 border-b-[1px] bg-gray-100 mb-5">
            <p className="text-[#47494b] text-base font-semibold ">
              Payers Information
            </p>
          </div>

          <div className="flex flex-col justify-between h-[90vh]">
            <div className="px-4 flex flex-wrap pb-6">
              {/* Payer Name */}
              <div className="w-full mb-2">
                <label className="block text-[#47494b] text-sm pt-1 font-semibold">
                  Payer Name
                </label>
                <input
                  name="payerName"
                  type="text"
                  value={formData.payerName}
                  onChange={handleChange}
                  className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
                ></input>

                {errors.payerName && (
                  <span className=" text-red-500 text-xs">
                    {errors.payerName}
                  </span>
                )}
              </div>

              {/* Customer Name */}
              <div className="w-full mb-2">
                <label className="block text-[#47494b] text-sm pt-1 font-semibold">
                  Customer Name
                </label>
                <input
                  type="text"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleChange}
                  className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
                ></input>
                {errors.customerName && (
                  <span className=" text-red-500 text-xs">
                    {errors.cusotmerName}
                  </span>
                )}
              </div>

              {/* Amount */}
              <div className="w-full">
                <label className="block text-[#47494b] text-sm pt-1 font-semibold">
                  Amount
                </label>
                <input
                  type="text"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
                />
                {errors.amount && (
                  <span className=" text-red-500 text-xs">{errors.amount}</span>
                )}
              </div>

            
            </div>

            {/* Submit Button */}
            <div className="w-full flex justify-end items-end px-4 my-4">
              <button
                onSubmit={handleSubmit}
                type="submit"
                className="  bg-newBlue font-medium py-2 text-sm  rounded-lg px-5 text-white"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PayersForm;
