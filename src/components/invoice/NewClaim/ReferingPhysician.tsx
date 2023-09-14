import React, { useState } from "react";

const ReferPhysicianData = () => {
  const [errors, setErrors] = useState<any>({});
  const [formData, setFormData] = useState({
    physicianName: "",
    physicianID: "",
    physicianNPI: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Validate form fields
    const validationErrors: any = {};

    if (!formData.physicianName) {
      validationErrors.physicianName = "Physician Name is required";
    }

    if (!formData.physicianID) {
      validationErrors.physicianID = "Physician ID is required";
    }

    if (!formData.physicianNPI) {
      validationErrors.physicianNPI = "Physician NPI is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setFormData({
      physicianName: "",
      physicianID: "",
      physicianNPI: "",
    });

    setErrors({});
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center border-b px-3 py-3 bg-gray-100">
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
            <span className=" text-red-500 text-xs">{errors.physicianID}</span>
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
            <span className=" text-red-500 text-xs">{errors.physicianNPI}</span>
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

export default ReferPhysicianData;
