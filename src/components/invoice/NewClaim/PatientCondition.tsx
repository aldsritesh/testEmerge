import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PatientCondition = () => {
  const [errors, setErrors] = useState<any>({});
  const [formData, setFormData] = useState({
    patientCondition: "",
    currentIllness: "",
    similarIllness: "",
    unableFrom: "",
    unableTo: "",
    hospitalizationDate: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Validate form fields
    const validationErrors: any = {};

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

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setFormData({
      patientCondition: "",
      currentIllness: "",
      similarIllness: "",
      unableFrom: "",
      unableTo: "",
      hospitalizationDate: "",
    });

    setErrors({});
  };

  return (
    <div>
      <div className="flex justify-between items-center border-b px-3 py-3 bg-gray-100">
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
                <span className=" text-red-500 text-xs">{errors.unableTo}</span>
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
  );
};

export default PatientCondition;
