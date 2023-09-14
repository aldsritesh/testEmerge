import Image from "next/image";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { BsQuestionCircleFill } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import { MenuItem, OutlinedInput, Select, TextField } from "@mui/material";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import Link from "next/link";

const colorPalette = [
  { color: "bg-red-500", title: "Red" },
  { color: "bg-blue-500", title: "Blue" },
  { color: "bg-green-500", title: "Green" },
  { color: "bg-yellow-800", title: "Yellow" },
  { color: "bg-violet-500", title: "Violet" },
  { color: "bg-cyan-300", title: "Cyan" },
  { color: "bg-gray-700", title: "Gray" },
  { color: " bg-orange-500", title: "Orange" },
  { color: "bg-pink-500", title: "Pink" },
];

export default function TeamEventSetup({
  onClose,
  handleNewTab,
  handleStoreFormData,
}: any) {
  const [errors, setErrors] = useState<any>({});
  const [formValues, setFormValues] = useState<any>({
    name: "",
    description: "",
    calendarUrl: "",
    widgetTyp: "",
    widgetShape: "square",
    appointmentTitle: "",
    meetingLocation: "",
    linkToCalendar: "",
    googleCalendar: "",
    syncOption: "",
    eventColor: "",
    image: null,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormValues((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const [adsData, setAdsData] = useState<any>();
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

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Validate form fields
    const validationErrors: any = {};

    if (!formValues.name.trim()) {
      validationErrors.name = "required";
    }
    if (!formValues.description.trim()) {
      validationErrors.description = "required";
    }
    if (!formValues.calendarUrl.trim()) {
      validationErrors.calendarUrl = "required";
    }
    if (!formValues.widgetTyp.trim()) {
      validationErrors.widgetTyp = "required";
    }
    if (!formValues.widgetShape.trim()) {
      validationErrors.widgetShape = "required";
    }
    if (!formValues.appointmentTitle.trim()) {
      validationErrors.appointmentTitle = "required";
    }
    if (!formValues.meetingLocation.trim()) {
      validationErrors.meetingLocation = "required";
    }
    if (!formValues.linkToCalendar.trim()) {
      validationErrors.linkToCalendar = "required";
    }
    if (!formValues.syncOption.trim()) {
      validationErrors.syncOption = "required";
    }
    if (!formValues.eventColor.trim()) {
      validationErrors.eventColor = "required";
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setFormValues({
      name: "",
      description: "",
      calendarUrl: "",
      widgetTyp: "",
      widgetShape: "",
      appointmentTitle: "",
      meetingLocation: "",
      linkToCalendar: "",
      googleCalendar: "",
      syncOption: "",
      eventColor: "",
      image: null,
    });

    setErrors({});

    handleStoreFormData(formValues);
    handleNewTab();
  };

  return (
    <div>
      <div className="px-2 ">
        <div className="px-4 pt-5">
          <h1 className="text-[#47494b] text-md font-semibold">Calendar</h1>
          <p className="text-gray-400 text-sm">
            How would you describe your calendar?
          </p>
        </div>
        {/* form */}
        <div className="  px-4">
          <form action="" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="py-2">
              <label
                htmlFor=""
                className="block text-[#47494b] text-sm py-1 font-semibold"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                placeholder="Add Calendar Name"
                className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
              />
              {errors.name && (
                <div className="mb-2 text-red-500 text-[12px]">
                  {errors.name}
                </div>
              )}
            </div>

            {/* Description */}
            <div className="py-2">
              <label
                htmlFor=""
                className="block text-[#47494b] text-sm py-1 font-semibold"
              >
                Description
              </label>
              <textarea
                onChange={handleChange}
                name="description"
                value={formValues.description}
                placeholder="Add Calendar Description"
                className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
              />
              {errors.description && (
                <div className="mb-2 text-red-500 text-[12px]">
                  {errors.description}
                </div>
              )}
            </div>

            {/* Calendar URL */}
            <div className="py-2">
              <label
                htmlFor=""
                className="block text-[#47494b] text-sm py-1 font-semibold"
              >
                Calendar URL
              </label>
              <div className="form-control">
                <div className="flex justify-start items-center">
                  <p className=" rounded-md text-sm bg-gray-100 border-[1px] border-gray-200 w-[15%] px-3 py-3">
                    /widget/bookins/
                  </p>
                  <input
                    type="url"
                    name="calendarUrl"
                    value={formValues.calendarUrl}
                    onChange={handleChange}
                    placeholder="Enter Calendar Slug"
                    className="w-[85%]  placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
                  />
                </div>
              </div>
              {errors.calendarUrl && (
                <div className="mb-2 text-red-500 text-[12px]">
                  {errors.calendarUrl}
                </div>
              )}
            </div>

            {/* Add LOGO */}
            <label
              htmlFor=""
              className="block text-[#47494b] text-sm py-1 font-semibold"
            >
              Add Logo
            </label>
            <div className="border-[1px] border-gray-200  flex gap-4 rounded-md w-full p-2 ">
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
                    />
                  </div>
                </div>
              ) : (
                <div className="bg-gray-200 w-32 h-32 flex items-center justify-center">
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <span>
                      <GoPlus />
                    </span>
                  </div>
                </div>
              )}

              <div className="w-[40%]">
                <div className="px-5 py-4 text-xs text-gray-400 font-semibold">
                  <p>The proposed size is 180*180px</p>
                  <p>Supported formats .jpeg, .gif, .png </p>
                  <p>Not bigger than 2.5MB</p>
                </div>
                <div className="px-5  gap-2 flex text-sm">
                  <div
                    {...getRootProps()}
                    className="border-2 rounded-md px-4 pt-1 cursor-pointer border-blue-400 text-blue-400"
                  >
                    Add
                  </div>
                  <div
                    onClick={handleImageDelete}
                    className="border-2 rounded-md px-4 py-1 cursor-pointer"
                  >
                    Remove
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 px-5 py-4 text-xs text-gray-600 font-semibold">
                <label className="block text-[#47494b] text-sm py-2 font-semibold">
                  Widget Shape:
                </label>
                <div className="px-2 py-3">
                  <RadioGroup
                    row
                    name="widgetShape"
                    value={formValues.widgetShape}
                    onChange={handleChange}
                  >
                    <div className="w-1/2 pr-2">
                      <FormControlLabel
                        value="square"
                        control={
                          <Radio
                            sx={{
                              color: "#8a9191",
                              fontWeight: "medium",
                              "&.Mui-checked": {
                                color: "#1258fc",
                              },
                            }}
                          />
                        }
                        label="Square"
                      />
                    </div>
                    <div className="w-1/2 pr-2">
                      <FormControlLabel
                        value="circle"
                        control={
                          <Radio
                            sx={{
                              color: "#8a9191",
                              fontWeight: "medium",
                              "&.Mui-checked": {
                                color: "#1258fc",
                              },
                            }}
                          />
                        }
                        label="Circle"
                      />
                    </div>
                  </RadioGroup>
                </div>

                {/* <div className="flex  gap-3">
                  <div className="form-control">
                    <label className="label cursor-pointer flex gap-2">
                      <input
                        value={formValues.square}
                        type="radio"
                        name="square"
                        className="radio checked:bg-blue-500 scale-75"
                        onChange={handleChange}
                      />
                      <span className="label-text text-xs"> Square </span>
                    </label>
                  </div>
                  <div className="form-control ">
                    <label className="label cursor-pointer flex gap-2">
                      <input
                        value={formValues.square}
                        type="radio"
                        name="square"
                        className="radio checked:bg-blue-500 scale-75"
                        onChange={handleChange}
                      />
                      <span className="label-text text-xs"> Circle </span>
                    </label>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Widget type */}
            <div className="py-2">
              <label
                htmlFor=""
                className="block text-[#47494b] text-sm py-2 font-semibold"
              >
                Widget Type
              </label>
              <Select
                placeholder="Contact Changed"
                onChange={handleChange}
                name="widgetTyp"
                value={formValues.widgetTyp}
                className="border-none ouline-none rounded-lg shadow-none mt-2 mb-2  text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark   text-space focus:outline-none focus:border-gray-300 text-black"
              >
                <MenuItem value="">Select</MenuItem>

                <MenuItem key="Neo" value="Neo">
                  Neo
                </MenuItem>
                <MenuItem key="Type2" value="Type2">
                  Type2
                </MenuItem>
              </Select>
              {errors.widgetTyp && (
                <div className="mb-2 text-red-500 text-[12px]">
                  {errors.widgetTyp}
                </div>
              )}
            </div>

            {/* Appointment Title */}
            <div className="py-2">
              <label
                htmlFor=""
                className="block text-[#47494b] text-sm py-2 font-semibold"
              >
                Appointment Title
              </label>
              <input
                type="text"
                onChange={handleChange}
                name="appointmentTitle"
                value={formValues.appointmentTitle}
                placeholder="{{contact.name}}"
                className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
              />
              {errors.appointmentTitle && (
                <div className="mb-2 text-red-500 text-[12px]">
                  {errors.appointmentTitle}
                </div>
              )}
              <p className="text-gray-400 text-sm">
                It will be used while creating appointment table, you can use
                template parameters.
              </p>
            </div>

            {/* Meeting location */}
            <div className="py-2">
              <label
                htmlFor=""
                className="  flex items-center gap-2 text-[#47494b] text-sm py-2 font-semibold"
              >
                Meeting Location <BsQuestionCircleFill className="text-xs " />
              </label>
              <input
                type="text"
                onChange={handleChange}
                name="meetingLocation"
                value={formValues.meetingLocation}
                placeholder="Enter Location"
                className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
              />
              {errors.meetingLocation && (
                <div className="mb-2 text-red-500 text-[12px]">
                  {errors.meetingLocation}
                </div>
              )}
            </div>

            {/* Event Color */}
            <div className="py-2">
              <label
                htmlFor=""
                className="  flex items-center gap-2 text-[#47494b] text-sm py-2 font-semibold"
              >
                Event Color <BsQuestionCircleFill className="text-xs " />
              </label>
              <div className="flex gap-1">
                {colorPalette.map((item: any, index: number) => (
                  <div key={index} className="tooltip" data-tip={item.title}>
                    <button
                      onClick={() => {
                        setFormValues((prevValues: any) => ({
                          ...prevValues,
                          eventColor: item?.title,
                        }));
                      }}
                      className={`rounded-full w-8 h-8 ${item.color}  `}
                    ></button>
                  </div>
                ))}
              </div>
              {errors.eventColor && (
                <div className="mb-2 text-red-500 text-[12px]">
                  {errors.eventColor}
                </div>
              )}
            </div>

            {/* Link to Calendar */}
            <div className="py-2">
              <label
                htmlFor=""
                className="block text-[#47494b] text-sm py-2 font-semibold"
              >
                Link to Calendar
              </label>
              <div className="flex items-center gap-2">
                <Select
                  placeholder="Contact Changed"
                  onChange={handleChange}
                  name="linkToCalendar"
                  value={formValues.linkToCalendar}
                  className="border-none ouline-none rounded-lg shadow-none mt-2 mb-2  text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark   text-space focus:outline-none focus:border-gray-300 text-black"
                >
                  <MenuItem value="">Select</MenuItem>

                  <MenuItem key="None" value="None">
                    None
                  </MenuItem>
                  <MenuItem key="Google" value="Google">
                    Google
                  </MenuItem>
                </Select>

                <BsQuestionCircleFill className="text-xs " />
              </div>
              {errors.linkToCalendar && (
                <div className="mb-2 text-red-500 text-[12px]">
                  {errors.linkToCalendar}
                </div>
              )}
            </div>

            {formValues.linkToCalendar == "google" ? (
              <div className="py-2">
                <label
                  htmlFor=""
                  className="block text-[#47494b] text-sm py-2 font-semibold"
                >
                  Google Calendar
                </label>
                <Select
                  placeholder="Contact Changed"
                  onChange={handleChange}
                  name="googleCalendar"
                  value={formValues.googleCalendar}
                  className="border-none ouline-none rounded-lg shadow-none mt-2 mb-2  text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark   text-space focus:outline-none focus:border-gray-300 text-black"
                >
                  <MenuItem value="">Select</MenuItem>

                  <MenuItem key="Holidays in US" value="Holidays in US">
                    Holidays in US
                  </MenuItem>
                  <MenuItem key="Birthdays" value="Birthdays">
                    Birthdays
                  </MenuItem>
                  <MenuItem key="Family" value="Family">
                    Family
                  </MenuItem>
                </Select>
                {errors.googleCalendar && (
                  <div className="mb-2 text-red-500 text-[12px]">
                    {errors.googleCalendar}
                  </div>
                )}
              </div>
            ) : (
              ""
            )}

            {/* Sync Option */}
            <div className="py-2">
              <label
                htmlFor=""
                className="block text-[#47494b] text-sm py-2 font-semibold"
              >
                Sync Option
              </label>
              <Select
                placeholder="Contact Changed"
                onChange={handleChange}
                name="syncOption"
                value={formValues.syncOption}
                className="border-none ouline-none rounded-lg shadow-none mt-2 mb-2  text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark   text-space focus:outline-none focus:border-gray-300 text-black"
              >
                <MenuItem value="">Select</MenuItem>

                <MenuItem key="One way" value="One wayS">
                  One way
                </MenuItem>
                <MenuItem key="Two way" value="Two way">
                  Two way
                </MenuItem>
              </Select>
              {errors.syncOption && (
                <div className="mb-2 text-red-500 text-[12px]">
                  {errors.syncOption}
                </div>
              )}
            </div>
            <Link href={"/settings/calendar"}>
              <div className="flex justify-end gap-3 p-4 mt-2 border-t ">
                <button
                  onClick={onClose()}
                  className="border text-[#47494b] rounded-md px-3 py-2"
                >
                  Close
                </button>
                <button
                  onSubmit={handleSubmit}
                  className="border bg-[#25992a] text-white rounded-md px-3 py-2"
                >
                  Save & continue
                </button>
              </div>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
