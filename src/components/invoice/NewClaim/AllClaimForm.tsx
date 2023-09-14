import React from "react";
import { useState } from "react";
import { MenuItem, Select } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { RiAddFill } from "react-icons/ri";

const AllClaimsForm = ({ handleStoreChange }: any) => {
  const [errors, setErrors] = useState<any>({
    insurance: [
      {
        primaryInsurance: "",
        payerAddress: "",
        insuredID: "",
        programTyp: "",
        alrdyInsured: "",
        insuredName: "",
        insuredAddress: "",
        relToInsured: "",
      },
    ],
  });
  const [formData, setFormData] = useState({
    patientName: "",
    patientAddress: "",
    patientDOB: "",
    patientStatus: "",
    patientCondition: "",
    currentIllness: "",
    similarIllness: "",
    unableFrom: "",
    unableTo: "",
    hospitalizationDate: "",
    insurance: [
      {
        primaryInsurance: "",
        payerAddress: "",
        insuredID: "",
        programTyp: "",
        alrdyInsured: "",
        insuredName: "",
        insuredAddress: "",
        relToInsured: "",
      },
    ],
    physicianName: "",
    physicianID: "",
    physicianNPI: "",
    patientAccountNumber: "",
    federalTaxID: "",
    facility: "",
    physicianInfo: "",
    signOfPhysician: "",
  });

  // console.log(ClaimForm);

  const handleInputChange = (e: any, index: any) => {
    const { name, value } = e.target;
    const newInsurance = [...formData.insurance];
    newInsurance[index] = { ...newInsurance[index], [name]: value };
    setFormData((prevState: any) => ({
      ...prevState,
      insurance: newInsurance,
    }));
  };
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddField = () => {
    setFormData((prevState: any) => ({
      ...prevState,
      insurance: [
        ...prevState.insurance,
        {
          primaryInsurance: "",
          payerAddress: "",
          insuredID: "",
          programTyp: "",
          alrdyInsured: "",
          insuredName: "",
          insuredAddress: "",
          relToInsured: "",
        },
      ],
    }));
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

    if (!formData.patientCondition) {
      validationErrors.patientCondition = "Patient Condition is required";
    }

    if (!formData.currentIllness) {
      validationErrors.currentIllness = "Required";
    }

    if (!formData.similarIllness) {
      validationErrors.similarIllness = "Required";
    }

    if (!formData.unableFrom) {
      validationErrors.unableFrom = "Required";
    }

    if (!formData.unableTo) {
      validationErrors.unableTo = "Required";
    }

    if (!formData.hospitalizationDate) {
      validationErrors.hospitalizationDate = "Required";
    }

    // if (!formData.primaryInsurance) {
    //   validationErrors.primaryInsurance = "Primary Insurance is required";
    // }

    // if (!formData.payerAddress) {
    //   validationErrors.payerAddress = "Payer Address is required";
    // }

    // if (!formData.insuredID) {
    //   validationErrors.insuredID = "Insured ID is required";
    // }

    // if (!formData.programTyp) {
    //   validationErrors.programTyp = "Program Typ is required";
    // }

    // if (!formData.alrdyInsured) {
    //   validationErrors.alrdyInsured = "Required";
    // }

    if (!formData.physicianName) {
      validationErrors.physicianName = "Physician Name is required";
    }

    if (!formData.physicianID) {
      validationErrors.physicianID = "Physician ID is required";
    }

    if (!formData.physicianNPI) {
      validationErrors.physicianNPI = "Physician NPI is required";
    }

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

    handleStoreChange(formData);

    setFormData({
      patientName: "",
      patientAddress: "",
      patientDOB: "",
      patientStatus: "",
      patientCondition: "",
      currentIllness: "",
      similarIllness: "",
      unableFrom: "",
      unableTo: "",
      hospitalizationDate: "",
      insurance: [
        {
          primaryInsurance: "",
          payerAddress: "",
          insuredID: "",
          programTyp: "",
          alrdyInsured: "",
          insuredName: "",
          insuredAddress: "",
          relToInsured: "",
        },
      ],
      physicianName: "",
      physicianID: "",
      physicianNPI: "",
      patientAccountNumber: "",
      federalTaxID: "",
      facility: "",
      physicianInfo: "",
      signOfPhysician: "",
    });
    setErrors({});
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        {/* Patient Claim Info */}
        <div className="  rounded-r-lg  mb-3 bg-white">
          <div className="flex justify-between items-center px-3 py-3 border-b-[1px] bg-gray-100 mb-5">
            <p className="text-[#47494b] text-base font-semibold ">
              Patient Information
            </p>
          </div>

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
                <span className=" text-red-500 text-xs">
                  {errors.patientDOB}
                </span>
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
        </div>

        {/* Patient Condition */}
        <div className="my-3">
          <div className="flex justify-between items-center border-b px-3 py-3 bg-gray-100 mb-5">
            <p className="text-[#47494b] text-base font-semibold">
              Patient Condition
            </p>
          </div>

          <div className="px-4 flex flex-wrap pb-6">
            <div className="w-full mb-2">
              <label className="block text-[#47494b] text-sm pt-1 font-semibold">
                Patient Condition Related To
              </label>
              <input
                name="patientCondition"
                type="text"
                value={formData.patientCondition}
                onChange={handleChange}
                className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2  font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
              ></input>

              {errors.patientCondition && (
                <span className=" text-red-500 text-xs">
                  {errors.patientCondition}
                </span>
              )}
            </div>

            <div className="w-full mb-2">
              <label className="block text-[#47494b] text-sm pt-1 font-semibold">
                Date of current Illness , Injury or Pregnancy
              </label>
              <DatePicker
                className={
                  "w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
                }
                selected={formData.currentIllness}
                name="currentIllness"
                onChange={(e: any) => {
                  setFormData((prevValues: any) => ({
                    ...formData,
                    currentIllness: e,
                  }));
                }}
                placeholderText="Select Date"
              />

              {errors.currentIllness && (
                <span className=" text-red-500 text-xs">
                  {errors.currentIllness}
                </span>
              )}
            </div>

            <div className="w-full mb-2">
              <label className="block text-[#47494b] text-sm pt-1 font-semibold">
                If a Patient had the similar illness. Give the First Date
              </label>
              <DatePicker
                className={
                  "w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2    font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
                }
                selected={formData.similarIllness}
                name="similarIllness"
                onChange={(e: any) => {
                  setFormData((prevValues: any) => ({
                    ...formData,
                    similarIllness: e,
                  }));
                }}
                placeholderText="Select Date"
              />

              {errors.similarIllness && (
                <span className=" text-red-500 text-xs">
                  {errors.similarIllness}
                </span>
              )}
            </div>

            <div className="w-full mb-2">
              <label className="block text-[#47494b] text-sm pt-1 font-semibold">
                Dates between patient unable to work in current occupation
              </label>
              <div className="flex gap-2">
                <div>
                  <DatePicker
                    className={
                      "w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
                    }
                    selected={formData.unableFrom}
                    name="unableFrom"
                    onChange={(e: any) => {
                      setFormData((prevValues: any) => ({
                        ...formData,
                        unableFrom: e,
                      }));
                    }}
                    placeholderText="Select Date"
                  />
                  {errors.unableFrom && (
                    <span className=" text-red-500 text-xs">
                      {errors.unableFrom}
                    </span>
                  )}
                </div>

                <div>
                  <DatePicker
                    className={
                      "w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2  font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
                    }
                    selected={formData.unableTo}
                    name="unableTo"
                    onChange={(e: any) => {
                      setFormData((prevValues: any) => ({
                        ...formData,
                        unableTo: e,
                      }));
                    }}
                    placeholderText="Select Date"
                  />
                  {errors.unableTo && (
                    <span className=" text-red-500 text-xs">
                      {errors.unableTo}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="w-full">
              <label className="block text-[#47494b] text-sm pt-1 font-semibold">
                Hospitalization Date Related To Current Services
              </label>
              <DatePicker
                className={
                  "w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
                }
                selected={formData.hospitalizationDate}
                name="hospitalizationDate"
                onChange={(e: any) => {
                  setFormData((prevValues: any) => ({
                    ...formData,
                    hospitalizationDate: e,
                  }));
                }}
                placeholderText="Select Date"
              />

              {errors.hospitalizationDate && (
                <span className=" text-red-500 text-xs">
                  {errors.hospitalizationDate}
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

        {/* Insurance */}
        <div className="my-3">
          <div className="flex justify-between items-center border-b px-3 py-3 bg-gray-100 mb-5">
            <p className="text-[#47494b] text-base font-semibold ">Insurance</p>
          </div>
          <div className="w-full flex justify-end items-end px-4">
            <button
              type="button"
              className="  bg-newBlue font-medium py-2 text-sm  rounded-lg px-5 text-white flex items-center gap-1"
              onClick={handleAddField}
            >
              <RiAddFill className="font-semibold" /> Add Insurance
            </button>
          </div>
          {formData?.insurance.map((item: any, index: number) => (
            <div className="border-b" key={index}>
              <div className="px-4 flex flex-wrap pb-6 ">
                <div className="w-full mb-2">
                  <label className="block text-[#47494b] text-sm pt-1 font-semibold">
                    Primary Insurance
                  </label>
                  <input
                    name="primaryInsurance"
                    type="text"
                    value={item.primaryInsurance}
                    onChange={(e) => handleInputChange(e, index)}
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
                    value={item.payerAddress}
                    onChange={(e) => handleInputChange(e, index)}
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
                    value={item.insuredID}
                    onChange={(e) => handleInputChange(e, index)}
                    className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2    font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
                  ></input>

                  {errors.insuredID && (
                    <span className=" text-red-500 text-xs">
                      {errors.insuredID}
                    </span>
                  )}
                </div>

                <div className="w-full mb-2">
                  <label className="block text-[#47494b] text-sm pt-1 font-semibold">
                    Program Type
                  </label>
                  <Select
                    name="programTyp"
                    value={item.programTyp}
                    onChange={(e) => handleInputChange(e, index)}
                    className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px]   mt-2    font-medium bg-transparent focus:bg-transparent  text-space focus:outline-none focus:border-gray-300  "
                  >
                    <MenuItem value="typ">Select Program Type</MenuItem>
                    <MenuItem value="type1">Type1</MenuItem>
                    <MenuItem value="type2">Type2</MenuItem>
                    <MenuItem value="type3">Type3</MenuItem>
                  </Select>
                  {errors.programTyp && (
                    <span className=" text-red-500 text-xs">
                      {errors.programTyp}
                    </span>
                  )}
                </div>

                <div className="w-full">
                  <label className="block text-[#47494b] text-sm pt-1 font-semibold">
                    Are you Insured ?
                  </label>
                  <Select
                    name="alrdyInsured"
                    value={item.alrdyInsured}
                    onChange={(e) => handleInputChange(e, index)}
                    className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px]   mt-2    font-medium bg-transparent focus:bg-transparent     text-space focus:outline-none focus:border-gray-300  "
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
              {item?.alrdyInsured == "yes" ? (
                <div>
                  <div className="flex justify-between items-center border-b px-3 py-3 bg-gray-100 my-5">
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
                        value={item.insuredName}
                        onChange={(e) => handleInputChange(e, index)}
                        className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
                      ></input>
                    </div>

                    <div className="w-full mb-2">
                      <label className="block text-[#47494b] text-sm pt-1 font-semibold">
                        Insured Address
                      </label>
                      <input
                        type="text"
                        name="insuredAddress"
                        value={item.insuredAddress}
                        onChange={(e) => handleInputChange(e, index)}
                        className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
                      ></input>
                    </div>

                    <div className="w-full ">
                      <label className="block text-[#47494b] text-sm pt-1 font-semibold">
                        Patient Relation to Insured
                      </label>
                      <input
                        type="text"
                        name="relToInsured"
                        value={item.relToInsured}
                        onChange={(e) => handleInputChange(e, index)}
                        className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2    font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
                      />
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>

        {/* Refering Physician */}
        <div className="w-full my-3">
          <div className="flex justify-between items-center border-b px-3 py-3 bg-gray-100 mb-5">
            <p className="text-[#47494b] text-base font-semibold">
              Physician Reference
            </p>
          </div>
          <div className="px-4 flex flex-wrap pb-6">
            <div className="w-full mb-2">
              <label className="block text-[#47494b] text-sm pt-1 font-semibold">
                Physician Name
              </label>
              <input
                name="physicianName"
                type="text"
                value={formData.physicianName}
                onChange={handleChange}
                className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
              ></input>

              {errors.physicianName && (
                <span className=" text-red-500 text-xs">
                  {errors.physicianName}
                </span>
              )}
            </div>

            <div className="w-full mb-2">
              <label className="block text-[#47494b] text-sm pt-1 font-semibold">
                Physician ID
              </label>
              <input
                type="text"
                name="physicianID"
                value={formData.physicianID}
                onChange={handleChange}
                className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
              ></input>
              {errors.physicianID && (
                <span className=" text-red-500 text-xs">
                  {errors.physicianID}
                </span>
              )}
            </div>

            <div className="w-full ">
              <label className="block text-[#47494b] text-sm pt-1 font-semibold">
                Physician NPI
              </label>
              <input
                type="text"
                name="physicianNPI"
                value={formData.physicianNPI}
                onChange={handleChange}
                className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2  font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
              />
              {errors.physicianNPI && (
                <span className=" text-red-500 text-xs">
                  {errors.physicianNPI}
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

        {/* Patient Other Details */}
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
                <span className=" text-red-500 text-xs">
                  {errors.federalTaxID}
                </span>
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
      </form>
    </div>
  );
};

export default AllClaimsForm;
