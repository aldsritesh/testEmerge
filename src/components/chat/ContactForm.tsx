import moment from "moment";
import React, { useState } from "react";

const ContactForm = ({ user }: any) => {
  const [formData, setFormData] = useState<any>({
    fullName: user?.name,
    email: user?.email,
    phone: user?.phone,
    dob: "",
    ssn: "",
    dateOfInjury: "",
    tags: "",
  });

  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({ ...prevData, [name]: value }));
  };

  const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData((prevData: any) => ({ ...prevData, tags: value }));
  };

  const handleTagKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && formData.tags) {
      setFormData((prevData: any) => ({
        ...prevData,
        tags: prevData.tags
          ? prevData.tags + `,${e.currentTarget.value}`
          : e.currentTarget.value,
      }));
      e.currentTarget.value = "";
    }
  };

  const handleTagRemove = (tag: string) => {
    setFormData((prevData: any) => ({
      ...prevData,
      tags: prevData.tags
        .split(",")
        .filter((item: string) => item.trim() !== tag)
        .join(","),
    }));
  };

  const validateForm = () => {
    const newErrors: any = {};

    if (!formData.fullName) {
      newErrors.fullName = "Full name is required.";
    }

    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d+$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number.";
    }

    if (!formData.dob) {
      newErrors.dob = "Date of birth is required.";
    }

    if (!formData.ssn) {
      newErrors.ssn = "Social security number is required.";
    }

    if (!formData.dateOfInjury) {
      newErrors.dateOfInjury = "Date of injury is required.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      // Submit the form or perform further actions
      console.log("Form data:", formData);
    } else {
      console.log("Form validation failed.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col justify-start items-center">
        <label htmlFor="fullName" className="w-full text-sm text-[#808181]">
          Full Name:
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Jerome Bell"
          className="placeholder:font-semibold placeholder:text-[#3d3c3c] px-2 rounded-lg mt-2 mb-2 py-2 text-sm font-medium bg-transparent focus:bg-transparent w-full  border-[1px] border-[#dbd9d9] text-space focus:outline-none   focus:border-[#dbd9d9] text-black "
        />
        {errors.fullName && (
          <span className="error text-xs text-red-500 w-full mb-2 pl-1">
            {errors.fullName}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="email" className="w-full text-sm text-[#808181]">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="emailkuyahut@gmail.com"
          className="placeholder:font-semibold placeholder:text-[#3d3c3c] px-2 rounded-lg mt-2 mb-2 py-2 text-sm font-medium bg-transparent focus:bg-transparent w-full  border-[1px] border-[#dbd9d9] text-space focus:outline-none   focus:border-[#dbd9d9] text-black "
        />
        {errors.email && (
          <span className="error text-xs text-red-500 w-full mb-2 pl-1">
            {errors.email}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="w-full text-sm text-[#808181]">
          Phone:
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+44 7480 488670"
          className="placeholder:font-semibold placeholder:text-[#3d3c3c] px-2 rounded-lg mt-2 mb-2 py-2 text-sm font-medium bg-transparent focus:bg-transparent w-full  border-[1px] border-[#dbd9d9] text-space focus:outline-none   focus:border-[#dbd9d9] text-black "
        />
        {errors.phone && (
          <span className="error text-xs text-red-500 w-full mb-2 pl-1">
            {errors.phone}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="dob" className="w-full text-sm text-[#808181]">
          Date of Birth:
        </label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          placeholder={moment().format("dd/mm/yyyy")}
          className="placeholder:font-semibold placeholder:text-[#3d3c3c] px-2 rounded-lg mt-2 mb-2 py-2 text-sm font-medium bg-transparent focus:bg-transparent w-full  border-[1px] border-[#dbd9d9] text-space focus:outline-none   focus:border-[#dbd9d9] text-black "
        />
        {errors.dob && (
          <span className="error text-xs text-red-500 w-full mb-2 pl-1">
            {errors.dob}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="ssn" className="w-full text-sm text-[#808181]">
          Social Security No:
        </label>
        <input
          type="number"
          id="ssn"
          name="ssn"
          value={formData.ssn}
          onChange={handleChange}
          placeholder="123-456-789"
          className="placeholder:font-semibold placeholder:text-[#3d3c3c] px-2 rounded-lg mt-2 mb-2 py-2 text-sm font-medium bg-transparent focus:bg-transparent w-full  border-[1px] border-[#dbd9d9] text-space focus:outline-none   focus:border-[#dbd9d9] text-black "
        />
        {errors.ssn && (
          <span className="error text-xs text-red-500 w-full mb-2 pl-1">
            {errors.ssn}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="dateOfInjury" className="w-full text-sm text-[#808181]">
          Date of Injury:
        </label>
        <input
          type="date"
          id="dateOfInjury"
          name="dateOfInjury"
          value={formData.dateOfInjury}
          onChange={handleChange}
          placeholder={moment().format("dd/mm/yyyy")}
          className="placeholder:font-semibold placeholder:text-[#3d3c3c] px-2 rounded-lg mt-2 mb-2 py-2 text-sm font-medium bg-transparent focus:bg-transparent w-full  border-[1px] border-[#dbd9d9] text-space focus:outline-none   focus:border-[#dbd9d9] text-black "
        />
        {errors.dateOfInjury && (
          <span className="error text-xs text-red-500 w-full mb-2 pl-1">
            {errors.dateOfInjury}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="tags" className="w-full text-sm text-[#808181]">
          Tags:
        </label>
        <input
          type="text"
          id="tags"
          name="tags"
          value={formData.tags}
          onChange={handleTagChange}
          onKeyPress={handleTagKeyPress}
          placeholder="Add Tags (separate by comma)"
          className="placeholder:font-semibold placeholder:text-[#3d3c3c] px-2 rounded-lg mt-2 mb-2 py-2 text-sm font-medium bg-transparent focus:bg-transparent w-full  border-[1px] border-[#dbd9d9] text-space focus:outline-none   focus:border-[#dbd9d9] text-black "
        />
        {errors.tags && (
          <span className="error text-xs text-red-500 w-full mb-2 pl-1">
            {errors.tags}
          </span>
        )}
        {formData.tags && (
          <div className="flex flex-wrap mt-1">
            {formData.tags.split(",").map((tag: string, index: number) => (
              <div
                key={index}
                className="bg-gray-200 px-4 py-1 rounded-full mr-2 mb-2 text-sm text-newBlue"
              >
                {tag.trim()}
                <button
                  type="button"
                  onClick={() => handleTagRemove(tag.trim())}
                  className="ml-1 text-newBlue font-semibold focus:outline-none"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className=" ">
        <button
          type="submit"
          className="bg-newBlue px-8 py-2 mt-5 text-center text-white rounded-md"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
