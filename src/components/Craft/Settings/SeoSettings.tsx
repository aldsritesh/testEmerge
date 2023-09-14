import Image from "next/image";
import React, { useState, useCallback } from "react";
import { GoPlus } from "react-icons/go";
import { MdOutlineClose } from "react-icons/md";
import { useDropzone } from "react-dropzone";
import { BsQuestionCircleFill } from "react-icons/bs";
import { MenuItem, Select } from "@mui/material";

export default function SeoSettings() {
  const [errors, setErrors] = useState<any>({});
  const [formValues, setFormValues] = useState<any>({
    image: null,
    MetaTagTitle: "",
    MetaTagdescription: "",
    ScripsTag: "",
    GoogleTag: "",
    GoogleTagDescription: "",
    Og: "",
    TwitterCard: "",
  });

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      // Do something with the files
      setFormValues({ ...formValues, image: acceptedFiles[0] });
    },
    [formValues, setFormValues]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  });

  const handleImageDelete = () => {
    setFormValues({ ...formValues, image: null });
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormValues((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log(formValues);
    const validationErrors: any = {};

    if (!formValues.MetaTagTitle.trim()) {
      validationErrors.MetaTagTitle = "Required";
    }
    if (!formValues.MetaTagdescription.trim()) {
      validationErrors.MetaTagdescription = "Required";
    }
    if (!formValues.ScripsTag.trim()) {
      validationErrors.ScripsTag = "Required";
    }
    if (!formValues.GoogleTag.trim()) {
      validationErrors.GoogleTag = "Required";
    }
    if (!formValues.GoogleTagDescription.trim()) {
      validationErrors.GoogleTagDescription = "Required";
    }
    if (!formValues.Og.trim()) {
      validationErrors.Og = "Required";
    }
    if (!formValues.TwitterCard.trim()) {
      validationErrors.TwitterCard = "Required";
    }
    if (!formValues.image) {
      validationErrors.image = "Required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setFormValues({
      MetaTagTitle: "",
      MetaTagdescription: "",
      ScripsTag: "",
      GoogleTag: "",
      GoogleTagDescription: "",
      Og: "",
      TwitterCard: "",
    });

    setErrors({});
  };

  return (
    <div className=" border  mb-5 bg-white  shadow-md h-screen overflow-y-scroll pb-44 w-full p-12 ">
      {/* wrap subcontainer */}
      <div className="border shadow-md rounded-md  ">
        {/* first section */}
        <div className="  p-4 border-b flex items-center justify-between">
          <p className="text-[#47494b] text-base font-semibold">
            Personal Data
          </p>
        </div>

        {/* Add profile photo */}
        <div className=" flex gap-4  w-full mb-4 pl-8 pr-2 pt-4 border-t">
          <div className="w-[20%] ">
            {formValues.image ? (
              <div className="bg-gray-200 w-32 h-32 flex items-center justify-center relative">
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <Image
                    fill={true}
                    src={
                      formValues.image
                        ? URL.createObjectURL(formValues.image)
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

          <div className="w-[60%] pl-4  ">
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
        {errors.image && (
          <div className="mb-3 text-red-500 text-xs px-8 ">{errors.image}</div>
        )}

        <div className="px-8 pb-4 shadow-md">
          <form action="" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="py-2 w-full  gap-12 items-center  ">
              <div className=" w-full md:w-[50%]  ">
                <label
                  htmlFor=""
                  className="block text-[#47494b] text-sm pt-1 font-semibold"
                >
                  Meta Tag Title
                </label>
                <input
                  type="text"
                  name="MetaTagTitle"
                  value={formValues.MetaTagTitle}
                  onChange={handleChange}
                  placeholder="Enter Meta Tag"
                  className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-0.5   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300"
                />
                {errors.MetaTagTitle && (
                  <div className="mb-3 text-red-500 text-xs  ">
                    {errors.MetaTagTitle}
                  </div>
                )}
              </div>

              <div className="w-full md:w-[50%] mt-5">
                <label
                  htmlFor=""
                  className="block text-[#47494b] text-sm pt-1 font-semibold"
                >
                  Meta Tag Description
                </label>
                <textarea
                  name="MetaTagDescription"
                  value={formValues.MetaTagDescription}
                  onChange={handleChange}
                  placeholder="Enter Meta Tag Description"
                  className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-0.5   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300"
                />
                {errors.MetaTagDescription && (
                  <div className=" mb-3 text-red-500 text-xs  ">
                    {errors.MetaTagDescription}
                  </div>
                )}
              </div>
            </div>
            {/* scrips  tag start */}

            <div className="py-2  w-full md:w-[50%]  gap-12 items-center ">
              <div className="w-full">
                <label
                  htmlFor=""
                  className="block text-[#47494b] text-sm pt-1 font-semibold"
                >
                  Scrips Tag
                </label>
                <textarea
                  name="ScripsTag"
                  rows={4}
                  value={formValues.ScripsTag}
                  onChange={handleChange}
                  placeholder="Enter Scrips Tag"
                  className="w-[100%]  placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-0.5   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300"
                />
                {errors.ScripsTag && (
                  <div className="mb-3 text-red-500 text-xs  ">
                    {errors.ScripsTag}
                  </div>
                )}
              </div>
            </div>
            {/*scrips  tag end */}

            {/* Google tag start */}

            <div className="py-2  w-full md:w-[50%]  gap-12 items-center ">
              <div className="w-full">
                <label
                  htmlFor=""
                  className="block text-[#47494b] text-sm pt-1 font-semibold"
                >
                  Google Tag
                </label>
                <input
                  type="text"
                  name="GoogleTag"
                  value={formValues.GoogleTag}
                  onChange={handleChange}
                  placeholder="Enter Google Tag"
                  className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-0.5   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300"
                />
                {errors.GoogleTag && (
                  <div className="mb-3 text-red-500 text-xs  ">
                    {errors.GoogleTag}
                  </div>
                )}
              </div>

              <div className="w-[100%] mt-5">
                <label
                  htmlFor=""
                  className="block text-[#47494b] text-sm pt-1 font-semibold"
                >
                  Google Tag Description
                </label>
                <textarea
                  name="GoogleTagDescription"
                  value={formValues.GoogleTagDescription}
                  onChange={handleChange}
                  placeholder="Enter Google Tag Description"
                  className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-0.5   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300"
                />
                {errors.GoogleTagDescription && (
                  <div className=" mb-3 text-red-500 text-xs  ">
                    {errors.GoogleTagDescription}
                  </div>
                )}
              </div>
            </div>
            {/* Google tag end */}

            {/* og  tag start */}

            <div className="py-2 w-full  gap-12 items-center ">
              <div className="w-full">
                <label
                  htmlFor=""
                  className="block text-[#47494b] text-sm pt-1 font-semibold"
                >
                  Og Tag
                </label>
                <textarea
                  name="OgTag"
                  rows={4}
                  value={formValues.OgTag}
                  onChange={handleChange}
                  placeholder="Enter Og Tag"
                  className="w-full md:w-[50%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-0.5   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300"
                />
                {errors.OgTag && (
                  <div className="mb-3 text-red-500 text-xs  ">
                    {errors.OgTag}
                  </div>
                )}
              </div>
            </div>
            {/*og  tag end */}

            {/* twitter  tag start */}

            <div className="py-2 w-full  gap-12 items-center ">
              <div className="w-full">
                <label
                  htmlFor=""
                  className="block text-[#47494b] text-sm pt-1 font-semibold"
                >
                  Twitter Card
                </label>
                <textarea
                  name="TwitterCard"
                  rows={4}
                  value={formValues.TwitterCard}
                  onChange={handleChange}
                  placeholder="Enter Twitter Card"
                  className="w-full md:w-[50%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-0.5   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300"
                />
                {errors.TwitterCard && (
                  <div className="mb-3 text-red-500 text-xs  ">
                    {errors.TwitterCard}
                  </div>
                )}
              </div>
            </div>
            {/*twitter  tag end */}

            {/* save button start */}

            <button
              onSubmit={handleSubmit}
              className="border bg-newBlue mb-4 mt-2  text-white rounded-md text-sm px-3 py-2"
            >
              save
            </button>
            {/* save button end */}
          </form>
        </div>
      </div>
    </div>
  );
}
