import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";

const ChangePassword = () => {
  const [errors, setErrors] = useState<any>({});
  const [formValues, setFormValues] = useState<any>({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
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

    //validate
    const validationErrors: any = {};

    if (!formValues.currentPassword) {
      validationErrors.currentPassword = "Required";
    }

    if (!formValues.newPassword) {
      validationErrors.newPassword = "Required";
    }
    if (!formValues.confirmPassword) {
      validationErrors.confirmPassword = "Required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (formValues.newPassword !== formValues.confirmPassword) {
      setErrors({ confirmPassword: "Passwords do not match" });
      return;
    }

    // reset after submission
    setFormValues({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });

    setErrors({});
  };

  return (
    <div className=" border rounded-md  mb-5  bg-white  shadow-md">
      {/* first section */}
      <div className="text-[#47494b] text-lg font-semibold p-4 border-b flex items-center justify-between">
        <h1>Change Password</h1>
      </div>

      <form action="" onSubmit={handleSubmit} className="py-3">
        {/* Existing Password */}
        <div className="pb-2 px-4 ">
          <label
            htmlFor=""
            className="block text-[#47494b] text-sm pt-1 font-semibold"
          >
            Existing Password
          </label>
          <input
            type="text"
            name="currentPassword"
            value={formValues.currentPassword}
            onChange={handleChange}
            placeholder="Current Password"
            className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 rounded-md mt-2  py-3.5  font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300"
          />
          {errors.currentPassword && (
            <div className=" mb-3 text-red-500 text-xs  ">
              {errors.currentPassword}
            </div>
          )}
        </div>

        {/* New Password */}
        <div className="px-4 ">
          <label
            htmlFor=""
            className="block text-[#47494b] text-sm pt-1 font-semibold"
          >
            Password
          </label>
          <input
            type="password"
            name="newPassword"
            value={formValues.newPassword}
            onChange={handleChange}
            placeholder="New Password"
            className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 rounded-md mt-2  py-3.5  font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300"
          />
          {errors.newPassword && (
            <div className=" mb-3 text-red-500 text-xs  ">
              {errors.newPassword}
            </div>
          )}
        </div>

        {/* Confirm Password */}
        <div className="px-4 ">
          <label
            htmlFor=""
            className="block text-[#47494b] text-sm pt-1 font-semibold"
          >
            Confirm Password
          </label>
          <input
            type="text"
            name="confirmPassword"
            value={formValues.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 rounded-md mt-2  py-3.5  font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300"
          />
          {errors.confirmPassword && (
            <div className=" mb-3 text-red-500 text-xs  ">
              {errors.confirmPassword}
            </div>
          )}
        </div>

        <button
          onSubmit={handleSubmit}
          className="border bg-newBlue  text-white rounded-md text-sm px-8 py-2 mt-5 mx-4"
        >
          Update Password
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
