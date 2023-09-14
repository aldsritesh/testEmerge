import React, { useState } from "react";

const Live = () => {
  const [formData, setFormData] = useState<any>({
    gatewayId: "",
    securityKey: "",
    publicKey: "",
  });

  const [errors, setErrors] = useState<any>({
    gatewayId: "",
    securityKey: "",
    publicKey: "",
  });

  const [isReady, setIsReady] = useState(false);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors: any) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Perform form validation
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setIsReady(true);
      setErrors({
        gatewayId: "",
        securityKey: "",
        publicKey: "",
      });
      // Form is valid, perform form submission logic here
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const validationErrors: any = {};
    // Add validation rules for each field
    if (formData.gatewayId.trim() === "") {
      validationErrors.gatewayId = "Gateway Id is required";
    }
    if (formData.securityKey.trim() === "") {
      validationErrors.securityKey = "Security Key is required";
    }
    if (formData.publicKey.trim() === "") {
      validationErrors.publicKey = "Public Key is required";
    }
    return validationErrors;
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <div className="flex px-3 flex-col text-left pb-2">
        <label className="font-medium text-gray-500 text-sm pb-1">
          Gateway Id
        </label>
        <input
          type="text"
          name="gatewayId"
          value={formData.gatewayId}
          onChange={handleChange}
          placeholder="Live Gateway Id"
          className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md  font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-300 text-space focus:outline-none focus:border-gray-300  "
        />
        {errors.gatewayId && (
          <p className="text-red-500 text-xs mt-1">{errors.gatewayId}</p>
        )}
      </div>
      <div className="flex px-3 flex-col text-left pb-4">
        <label className="font-medium text-gray-500 text-sm pb-1">
          Security Key
        </label>
        <input
          type="text"
          name="securityKey"
          value={formData.securityKey}
          onChange={handleChange}
          placeholder="Live Security Key"
          className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md  font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-300 text-space focus:outline-none focus:border-gray-300  "
        />
        {errors.securityKey && (
          <p className="text-red-500 text-xs mt-1">{errors.securityKey}</p>
        )}
      </div>
      <div className="flex px-3 flex-col text-left pb-4">
        <label className="font-medium text-gray-500 text-sm pb-1">
          Public Key
        </label>
        <input
          type="text"
          name="publicKey"
          value={formData.publicKey}
          onChange={handleChange}
          placeholder="Live Public Key"
          className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md  font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-300 text-space focus:outline-none focus:border-gray-300  "
        />
        {errors.publicKey && (
          <p className="text-red-500 text-xs mt-1">{errors.publicKey}</p>
        )}
      </div>
      <div className="flex justify-center items-center ">
        {isReady ? (
          <button
            disabled
            className="bg-green-200 h-10 w-2/5 rounded-lg text-gray-400"
          >
            Data Submitted
          </button>
        ) : (
          <button
            type="submit"
            className="bg-greenShade h-10 w-2/5 rounded-lg text-white  "
          >
            Save
          </button>
        )}
      </div>
    </form>
  );
};

export default Live;
