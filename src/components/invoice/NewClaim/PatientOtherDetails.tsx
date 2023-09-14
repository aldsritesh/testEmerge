import React, { useState } from "react";

const PatientOtherDetails = () => {
  const [errors, setErrors] = useState<any>({});
  const [formData, setFormData] = useState({
    patientAccountNumber: "",
    federalTaxID: "",
    facility: "",
    physicianInfo: "",
    signOfPhysician: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Validate form fields
    const validationErrors: any = {};

    if (!formData.patientAccountNumber) {
      validationErrors.patientAccountNumber =
        "Patient Account Number is required";
    }

    if (!formData.federalTaxID) {
      validationErrors.federalTaxID = "Federal Tax ID is required";
    }

    if (!formData.facility) {
      validationErrors.facility = "Required";
    }

    if (!formData.physicianInfo) {
      validationErrors.physicianInfo = "Physician Info is required";
    }

    if (!formData.signOfPhysician) {
      validationErrors.signOfPhysician = "Physician Signature is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setFormData({
      patientAccountNumber: "",
      federalTaxID: "",
      facility: "",
      physicianInfo: "",
      signOfPhysician: "",
    });

    setErrors({});
  };

  return (
    <div className="my-3">
      <div className="flex justify-between items-center border-b px-3 py-3 bg-gray-100 mb-5">
        <p className="text-[#47494b] text-base font-semibold">
          Patient Details
        </p>
      </div>
      <div className="px-4 flex flex-wrap pb-6">
        <div className="w-full mb-2">
          <label className="block text-[#47494b] text-sm pt-1 font-semibold">
            Patient Account Number
          </label>
          <input
            name="patientAccountNumber"
            type="text"
            value={formData.patientAccountNumber}
            onChange={handleChange}
            className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
          ></input>

          {errors.patientAccountNumber && (
            <span className=" text-red-500 text-xs">
              {errors.patientAccountNumber}
            </span>
          )}
        </div>

        <div className="w-full mb-2">
          <label className="block text-[#47494b] text-sm pt-1 font-semibold">
            Federal Tax ID
          </label>
          <input
            type="text"
            name="federalTaxID"
            value={formData.federalTaxID}
            onChange={handleChange}
            className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
          ></input>
          {errors.federalTaxID && (
            <span className=" text-red-500 text-xs">{errors.federalTaxID}</span>
          )}
        </div>

        <div className="w-full mb-2">
          <label className="block text-[#47494b] text-sm pt-1 font-semibold">
            Facility of Service Rendered
          </label>
          <input
            type="text"
            name="facility"
            value={formData.facility}
            onChange={handleChange}
            className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
          />
          {errors.facility && (
            <span className=" text-red-500 text-xs">{errors.facility}</span>
          )}
        </div>

        <div className="w-full mb-2">
          <label className="block text-[#47494b] text-sm pt-1 font-semibold">
            Physician Info
          </label>
          <input
            type="text"
            name="physicianInfo"
            value={formData.physicianInfo}
            onChange={handleChange}
            className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2  font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
          />
          {errors.physicianInfo && (
            <span className=" text-red-500 text-xs">
              {errors.physicianInfo}
            </span>
          )}
        </div>

        <div className="w-full">
          <label className="block text-[#47494b] text-sm pt-1 font-semibold">
            Signature of Physician
          </label>
          <input
            type="text"
            name="signOfPhysician"
            value={formData.signOfPhysician}
            onChange={handleChange}
            className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2  font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
          />
          {errors.signOfPhysician && (
            <span className=" text-red-500 text-xs">
              {errors.signOfPhysician}
            </span>
          )}
        </div>
      </div>

      <div className="w-full flex justify-end items-end px-4 ">
        <button
          type="submit"
          className="  bg-newBlue font-medium py-2 text-sm  rounded-lg px-5 text-white"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PatientOtherDetails;
