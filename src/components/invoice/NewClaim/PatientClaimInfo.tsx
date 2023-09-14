import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PatientClaimInfo = () => {
  const [errors, setErrors] = useState<any>({});
  const [formData, setFormData] = useState({
    patientName: "",
    patientAddress: "",
    patientDOB: "",
    patientStatus: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Validate form fields
    const validationErrors: any = {};

    if (!formData.patientName) {
      validationErrors.patientName = "Patient Name is required";
    }

    if (!formData.patientAddress) {
      validationErrors.patientAddress = "Patient Address is required";
    }

    if (!formData.patientDOB) {
      validationErrors.patientDOB = "Patient DOB is required";
    }

    if (!formData.patientStatus) {
      validationErrors.patientStatus = "Patient Status is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setFormData({
      patientName: "",
      patientAddress: "",
      patientDOB: "",
      patientStatus: "",
    });
    setErrors({});
  };

  return (
    <div className="  rounded-r-lg   bg-white">
      <div className="flex justify-between items-center px-3 py-3 border-b-[1px] bg-gray-100">
        <p className="text-[#47494b] text-base font-semibold ">
          Patient Information
        </p>
      </div>
      <form onSubmit={handleSubmit} className=" pt-5 pb-3">
        <div className="px-4 flex flex-wrap pb-6">
          <div className="w-full mb-2">
            <label className="block text-[#47494b] text-sm pt-1 font-semibold">
              Patient Name
            </label>
            <input
              name="patientName"
              type="text"
              value={formData.patientName}
              onChange={handleChange}
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            ></input>

            {errors.patientName && (
              <span className=" text-red-500 text-xs">
                {errors.patientName}
              </span>
            )}
          </div>

          <div className="w-full mb-2">
            <label className="block text-[#47494b] text-sm pt-1 font-semibold">
              Patient Address
            </label>
            <input
              type="text"
              name="patientAddress"
              value={formData.patientAddress}
              onChange={handleChange}
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            ></input>
            {errors.patientAddress && (
              <span className=" text-red-500 text-xs">
                {errors.patientAddress}
              </span>
            )}
          </div>

          <div className="w-full mb-2">
            <label className="block text-[#47494b] text-sm pt-1 font-semibold">
              Patient DOB
            </label>
            <DatePicker
              name="patientDOB"
              className={
                "w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
              }
              selected={formData.patientDOB}
              onChange={(e: any) => {
                setFormData((prevValues: any) => ({
                  ...formData,
                  patientDOB: e,
                }));
              }}
              placeholderText="Select DOB"
            />

            {errors.patientDOB && (
              <span className=" text-red-500 text-xs">{errors.patientDOB}</span>
            )}
          </div>

          <div className="w-full">
            <label className="block text-[#47494b] text-sm pt-1 font-semibold">
              Patient Status
            </label>
            <input
              type="text"
              name="patientStatus"
              value={formData.patientStatus}
              onChange={handleChange}
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            />
            {errors.patientStatus && (
              <span className=" text-red-500 text-xs">
                {errors.patientStatus}
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
      </form>
    </div>
  );
};

export default PatientClaimInfo;
