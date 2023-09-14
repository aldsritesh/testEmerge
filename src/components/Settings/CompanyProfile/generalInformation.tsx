import Image from "next/image";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { GoPlus } from "react-icons/go";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { RxCopy } from "react-icons/rx";
import { TfiReload } from "react-icons/tfi";

export default function GeneralInformation() {
  //random String
  const [randomString, setRandomString] = useState(
    "tvqgm39xsh j0a6800wea e4vja5lle3o"
  );

  const generateRandomString = () => {
    setRandomString(
      Array.from({ length: 3 }, () => Math.random().toString(36).slice(2)).join(
        " "
      )
    );
  };

  const [formData, setFormData] = useState<any>({
    friendlyBusinessName: "",
    legalBusinessName: "",
    businessEmail: "",
    businessPhone: "",
    businessWebsite: "",
    businessNiche: "",
    api_key: randomString,
    image: null,
  });

  const [errors, setErrors] = useState<any>({});

  //image
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      // Do something with the files
      setFormData({ ...formData , image: acceptedFiles[0] });
    },
    [formData, setFormData]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  });

  const handleImageDelete = () => {
    setFormData({ ...formData, image: null });
  };

  //all
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Perform validation
    const validationErrors: any = {};

    if (formData.friendlyBusinessName.trim() === "") {
      validationErrors.friendlyBusinessName =
        "Friendly Business Name is required";
    }

    if (formData.legalBusinessName.trim() === "") {
      validationErrors.legalBusinessName = "Legal Business Name is required";
    }

    if (formData.businessEmail.trim() === "") {
      validationErrors.businessEmail = "Business Email is required";
    } else if (!isValidEmail(formData.businessEmail)) {
      validationErrors.businessEmail = "Invalid Business Email";
    }

    if (formData.businessPhone.trim() === "") {
      validationErrors.businessPhone = "Business Phone is required";
    } else if (!isValidPhone(formData.businessPhone)) {
      validationErrors.businessPhone = "Invalid Business Phone";
    }

    if (formData.businessWebsite.trim() === "") {
      validationErrors.businessWebsite = "Business Website is required";
    } else if (!isValidURL(formData.businessWebsite)) {
      validationErrors.businessWebsite = "Invalid Business Website";
    }

    if (formData.businessNiche.trim() === "") {
      validationErrors.businessNiche = "Business Niche is required";
    }

    // Update errors state
    setErrors(validationErrors);

    // If there are no validation errors, submit the form
    if (Object.keys(validationErrors).length === 0) {
      // Submit the form or perform any other actions here
      console.log("Form submitted:", formData);
    }
  };

  const isValidEmail = (email: any) => {
    // Basic email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const isValidPhone = (phone: any) => {
    // Basic phone number validation regex pattern
    const phonePattern = /^[0-9]{10}$/;
    return phonePattern.test(phone);
  };

  const isValidURL = (url: any) => {
    // Basic URL validation regex pattern
    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return urlPattern.test(url);
  };

  return (
    <div className="border rounded-lg mt-5">
      <div className="flex justify-between items-center border-b px-3 py-3">
        <p className="text-[#47494b] text-base font-semibold">
          General Information
        </p>
        <div className="flex justify-start items-center gap-1">
          <p className="text-[#47494b] text-sm font-semibold">Location Id</p>
          <AiOutlineExclamationCircle className="text-[#47494b] text-sm" />

          <div
            onClick={() => {
              navigator.clipboard.writeText("QUOOFVDMXC");
              alert("location Id copied successfully");
            }}
            className="cursor-pointer flex justify-start items-center"
          >
            <p className="text-[#47494b] text-xs font-medium">QUOOFVDMXC</p>

            <RxCopy className="text-[#47494b] text-sm" />
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit} className=" pt-5 pb-3">
        <div className="px-4 flex flex-wrap pb-6">
          <div className=" flex gap-4 rounded-md w-full mb-4">
            <div className="w-[20%]">
              {formData.image ? (
                <div className="bg-gray-200 w-32 h-32 flex items-center justify-center relative">
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <Image
                      fill={true}
                      src={
                        formData.image
                          ? URL.createObjectURL(formData.image)
                          : require("@/../public/images/avatar/blackdog.jpg")
                      }
                      style={{ objectFit: "cover" }}
                      alt="image"
                      className="rounded-md"
                    />
                  </div>
                </div>
              ) : (
                <div className="bg-gray-200 w-32 rounded-md  h-32 flex items-center justify-center">
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <span>
                      <GoPlus />
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="w-[60%] pl-4">
              <div className="px-5 pb-3 pt-4 text-xs text-gray-400 font-semibold">
                <p className="text-[#47494b] text-[12px] font-semibold">
                  Business Logo
                </p>
                <p className="text-[#47494b] text-[11px] font-medium py-0.5">
                  The proposed size is 350px * 180px.
                </p>
                <p className="text-[#47494b] text-[11px] font-medium ">
                  Not bigger than 2.5MB
                </p>
              </div>
              <div className="px-5  gap-2 flex text-sm">
                <div
                  {...getRootProps()}
                  className="border-[1px] rounded-md px-4 pt-1 cursor-pointer border-gray-300 text-blue-400"
                >
                  Upload
                </div>
                <div
                  onClick={handleImageDelete}
                  className="border-[1px]  border-gray-300 rounded-md px-4 py-1 cursor-pointer"
                >
                  Remove
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <label
              className="block text-[#47494b] text-sm pt-1 font-semibold"
              htmlFor="friendlyBusinessName"
            >
              Friendly Business Name
            </label>
            <input
              type="text"
              id="friendlyBusinessName"
              name="friendlyBusinessName"
              value={formData.friendlyBusinessName}
              onChange={handleChange}
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            />
            {errors.friendlyBusinessName && (
              <p className="mb-3 text-red-500 text-xs">
                {errors.friendlyBusinessName}
              </p>
            )}
          </div>

          <div className="w-full mb-2">
            <label
              className="block text-[#47494b] text-sm pt-1 font-semibold"
              htmlFor="legalBusinessName"
            >
              Legal Business Name
            </label>
            <input
              type="text"
              id="legalBusinessName"
              name="legalBusinessName"
              value={formData.legalBusinessName}
              onChange={handleChange}
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            />
            <p className="block text-[#787a7c] text-xs pb-1 font-medium">
              Enter the exact legal business name, as registered with the EIN.
            </p>{" "}
            {errors.legalBusinessName && (
              <p className="mb-3 text-red-500 text-xs">
                {errors.legalBusinessName}
              </p>
            )}
          </div>

          <div className="w-1/2 pr-3">
            <label
              className="block text-[#47494b] text-sm pt-1 font-semibold"
              htmlFor="businessEmail"
            >
              Business Email
            </label>
            <input
              type="email"
              id="businessEmail"
              name="businessEmail"
              value={formData.businessEmail}
              onChange={handleChange}
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            />
            {errors.businessEmail && (
              <p className="mb-3 text-red-500 text-xs">
                {errors.businessEmail}
              </p>
            )}
          </div>

          <div className="w-1/2 pl-3">
            <label
              className="block text-[#47494b] text-sm pt-1 font-semibold"
              htmlFor="businessPhone"
            >
              Business Phone
            </label>
            <input
              type="tel"
              id="businessPhone"
              name="businessPhone"
              value={formData.businessPhone}
              onChange={handleChange}
              placeholder="(+1)"
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            />
            {errors.businessPhone && (
              <p className="mb-3 text-red-500 text-xs">
                {errors.businessPhone}
              </p>
            )}
          </div>

          <div className="w-full">
            <label
              className="block text-[#47494b] text-sm pt-1 font-semibold"
              htmlFor="businessWebsite"
            >
              Business Website
            </label>
            <input
              type="url"
              id="businessWebsite"
              name="businessWebsite"
              value={formData.businessWebsite}
              onChange={handleChange}
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            />
            {errors.businessWebsite && (
              <p className="mb-3 text-red-500 text-xs">
                {errors.businessWebsite}
              </p>
            )}
          </div>

          <div className="w-full">
            <label
              className="block text-[#47494b] text-sm pt-1 font-semibold"
              htmlFor="businessNiche"
            >
              Business Niche
            </label>
            <input
              type="text"
              id="businessNiche"
              name="businessNiche"
              value={formData.businessNiche}
              onChange={handleChange}
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            />
            {errors.businessNiche && (
              <p className="mb-3 text-red-500 text-xs">
                {errors.businessNiche}
              </p>
            )}
          </div>
          <div className="w-full">
            <div className="flex justify-start items-center gap-1 py-3">
              <p className="text-[#47494b] text-sm font-semibold">API Key</p>
              <AiOutlineExclamationCircle className="text-[#47494b] text-sm ml-1" />
              <p className="text-[#47494b] text-xs font-medium mx-0.5">
                ********_****_****_**********
              </p>
              <div
                onClick={() => {
                  navigator.clipboard.writeText(randomString);
                  alert("api copied successfully");
                }}
                className="cursor-pointer"
              >
                <RxCopy className="text-[#47494b] text-sm mx-0.5" />
              </div>

              <div onClick={generateRandomString} className="cursor-pointer">
                <TfiReload className="text-[#47494b] text-sm" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end items-end mt-3 px-4 border-t pt-4">
          <button
            type="submit"
            className="  bg-newBlue font-medium py-2 text-sm  rounded-lg px-5 text-white"
          >
            Update Information
          </button>
        </div>
      </form>
    </div>
  );
}
