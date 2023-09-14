import React, { useState } from "react";

const Sandbox = () => {
  const [formData, setFormData] = useState<any>({
    loginId: "",
    transactionKey: "",
    signatureKey: "",
  });

  const [errors, setErrors] = useState<any>({
    loginId: "",
    transactionKey: "",
    signatureKey: "",
  });

  const [isReady, setIsReady] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform form validation
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setIsReady(true);
      setErrors({
        loginId: "",
        transactionKey: "",
        signatureKey: "",
      });
      // Form is valid, perform form submission logic here
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const validationErrors: any = {};
    // Add validation rules for each field
    if (formData.loginId.trim() === "") {
      validationErrors.loginId = "Login Id is required";
    }
    if (formData.transactionKey.trim() === "") {
      validationErrors.transactionKey = "Transaction Key is required";
    }
    if (formData.signatureKey.trim() === "") {
      validationErrors.signatureKey = "Signature Key is required";
    }
    return validationErrors;
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <div className="flex px-3 flex-col text-left pb-2">
        <label className="font-medium text-gray-500 text-sm pb-1">
          Login Id
        </label>
        <input
          type="text"
          name="loginId"
          value={formData.loginId}
          placeholder="Login Gateway Id"
          className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md  font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-300 text-space focus:outline-none focus:border-gray-300  "
          onChange={handleChange}
        />
        {errors.loginId && (
          <span className="text-red-500 text-sm">{errors.loginId}</span>
        )}
      </div>
      <div className="flex px-3 flex-col text-left pb-4">
        <label className="font-medium text-gray-500 text-sm pb-1">
          Transaction Key
        </label>
        <input
          type="text"
          name="transactionKey"
          value={formData.transactionKey}
          placeholder="Live Transaction Key"
          className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md  font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-300 text-space focus:outline-none focus:border-gray-300  "
          onChange={handleChange}
        />
        {errors.transactionKey && (
          <span className="text-red-500 text-sm">{errors.transactionKey}</span>
        )}
      </div>
      <div className="flex px-3 flex-col text-left pb-4">
        <label className="font-medium text-gray-500 text-sm pb-1">
          Signature Key
        </label>
        <input
          type="text"
          name="signatureKey"
          value={formData.signatureKey}
          placeholder="Live Signature Key"
          className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md  font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-300 text-space focus:outline-none focus:border-gray-300  "
          onChange={handleChange}
        />
        {errors.signatureKey && (
          <span className="text-red-500 text-sm">{errors.signatureKey}</span>
        )}
      </div>
      <div className="flex justify-center items-center pb-6">
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
            className="bg-greenShade h-10 w-2/5 rounded-lg text-white"
          >
            Save
          </button>
        )}
      </div>
    </form>
  );
};

export default Sandbox;
