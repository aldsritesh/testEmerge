/* eslint-disable @next/next/no-img-element */
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useState, MouseEventHandler, useContext } from "react";
import { StoreLeadContext } from "./TabLeads";
import MobileNo from "../UI/MobileNo";

interface IAddItemProps {
  visibility: boolean;
  onClose: MouseEventHandler;
  onSave: MouseEventHandler;
}

export default function AddItem({
  visibility,
  onClose,
  onSave,
}: IAddItemProps) {
  const statusData = [
    "Open",
    "New",
    "Deal Unqualified",
    "Attempt to a contact",
    "Bad Timing",
  ];
  const [showImage, setShowImage] = useState<any>({
    profile: false,
    logo: false,
  });
  const [formData, setFormData] = useState<any>({
    fullName: "",
    email: "",
    leadOwner: "",
    jobTitle: "",
    phoneNumber: "",
    leadSource: "",
    leadStatus: "",
    profile: null,
    logo: null,
  });
  const [errors, setErrors] = useState<any>({});
  const [value, setValue] = useState<any>();
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    if (name == "profile") {
      setFormData({
        ...formData,
        [event.target.name]: event.target.files[0],
      });
      setShowImage((imageData: any) => ({
        ...imageData,
        profile: false,
      }));
    } else if (name == "logo") {
      setFormData({
        ...formData,
        [event.target.name]: event.target.files[0],
      });
      setShowImage((imageData: any) => ({
        ...imageData,
        logo: false,
      }));
    } else {
      setFormData((prevValues: any) => ({
        ...prevValues,
        [name]: value,
      }));
    }
  };
  const handleStatusChange = (item: any) => {
    if (item) {
      setFormData((prevValues: any) => ({
        ...prevValues,
        leadStatus: item,
      }));
    }
  };
  const ctx = useContext(StoreLeadContext);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Validate form fields
    const validationErrors: any = {};
    if (!formData.fullName.trim()) {
      validationErrors.fullName = " enter your full name";
    }
    if (!formData.email.trim()) {
      validationErrors.email = " enter your email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = " enter a valid email";
    }
    if (!formData.leadOwner.trim()) {
      validationErrors.leadOwner = " enter lead owner name";
    }
    if (!formData.jobTitle.trim()) {
      validationErrors.jobTitle = " enter job title name";
    }
    if (!formData.leadSource.trim()) {
      validationErrors.leadSource = " select leadSource";
    }
    if (!formData.leadStatus.trim()) {
      validationErrors.leadStatus = " select leadStatus";
    }
    // if (!formData.phoneNumber.trim()) {
    //   validationErrors.phoneNumber = " enter your phone number";
    // }
    // if (!formData.profile.trim()) {
    //   validationErrors.profile = " select profile image";
    // }
    // if (!formData.logo.trim()) {
    //   validationErrors.logo = " select logo";
    // }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // ctx.setFormValue(formData);
    // onClose(false);
    onSave(formData);
    // Form submission logic goes here
    // You can access the form field values and attachment in the formValues state

    // Reset form after successful submission
  };

  return (
    <div>
      <div
        className={`w-full min-h-screen  scrollbar-hide  fixed right-0 top-0  z-50 transition-all bg-black overflow-hidden ${
          visibility
            ? "translate-x-0 opacity-100 bg-opacity-30"
            : "translate-x-[100%] opacity-0 bg-opacity-0"
        }`}
      >
        <div className="absolute h-full w-full z-40   " onClick={onClose}></div>
        <div className="bg-white w-full md:w-[80%] lg:w-[50%] absolute right-0  h-full z-50 ">
          <div className="flex justify-between items-center   px-4 md:px-4 pt-4 pb-2  border-b-gray-200 border-b  ">
            <h3 className="font-semibold  text-2xl">Create Leads</h3>

            <div onClick={onClose}>
              <XMarkIcon className="h-5 w-5" />
            </div>
          </div>
          <div className="px-3  pt-5 h-[95vh] overflow-y-scroll scrollbar-hide pb-5">
            <form
              onSubmit={handleSubmit}
              className="flex flex-wrap justify-start items-start"
            >
              <div
                className={` ${
                  showImage.profile ? "w-6/12" : "w-2/12"
                } px-2 flex flex-col justify-start items-start mb-3 `}
              >
                <p className="font-semibold text-gray-800 mb-2">Profile Pic</p>
                {showImage.profile ? (
                  <input
                    name="profile"
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                    className="placeholder:font-semibold placeholder:text-[#3d3c3c] px-2 rounded-md mb-2 py-2 text-sm font-medium bg-transparent focus:bg-[#F6F7FA] w-full  border-[1px] border-[#dbd9d9] text-space focus:outline-none   focus:border-[#dbd9d9] text-black "
                  />
                ) : (
                  <>
                    {formData?.profile ? (
                      <div>
                        <div
                          onClick={() =>
                            setShowImage((e: any) => ({
                              ...e,
                              profile: true,
                            }))
                          }
                          className="pr-4"
                        >
                          <img
                            src={URL.createObjectURL(formData?.profile)}
                            alt="Thumb"
                          />
                        </div>
                      </div>
                    ) : (
                      <div
                        onClick={() =>
                          setShowImage((e: any) => ({
                            ...e,
                            profile: true,
                          }))
                        }
                        className="bg-gray-200 h-10 w-10 rounded-full flex justify-center items-center"
                      >
                        <PlusIcon className="h-6 w-6" />
                      </div>
                    )}
                  </>
                )}

                {errors.profile && (
                  <p className="text-sm text-red-500 mb-2 mt-1">
                    {errors.profile}
                  </p>
                )}
              </div>

              <div
                className={` ${
                  showImage.profile ? "w-6/12" : "w-10/12"
                } px-2 flex flex-col justify-start items-start  mb-3  `}
              >
                <p className="font-semibold text-gray-800 mb-2">Full Name</p>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="placeholder:font-semibold  placeholder:text-[#3d3c3c] px-2 rounded-md mb-2 py-3 text-sm font-medium bg-transparent focus:bg-[#F6F7FA] w-full  border-[1px] border-[#dbd9d9] text-space focus:outline-none   focus:border-[#dbd9d9] text-black "
                />
                {errors.fullName && (
                  <p className="text-sm text-red-500 mb-2 mt-1">
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div className="w-full px-2 mb-5 ">
                <p className="font-semibold text-gray-800 mb-2">Email:</p>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="placeholder:font-semibold  placeholder:text-[#3d3c3c] px-2 rounded-md mb-2 py-3 text-sm font-medium bg-transparent focus:bg-[#F6F7FA] w-full  border-[1px] border-[#dbd9d9] text-space focus:outline-none   focus:border-[#dbd9d9] text-black "
                />
                {errors.email && (
                  <p className="text-sm text-red-500 mb-2 mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* <div
                className={` ${
                  showImage.logo ? "w-6/12" : "w-3/12"
                } px-2 flex flex-col justify-center items-center  mb-3 `}
              >
                <p className="font-semibold text-gray-800 mb-2">Company Logo</p>
                {showImage.logo ? (
                  <input
                    name="logo"
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                    className="placeholder:font-semibold placeholder:text-[#3d3c3c] px-2 rounded-md mb-2 py-2 text-sm font-medium bg-transparent focus:bg-[#F6F7FA] w-full  border-[1px] border-[#dbd9d9] text-space focus:outline-none   focus:border-[#dbd9d9] text-black "
                  />
                ) : (
                  <div
                    onClick={() =>
                      setShowImage((e: any) => ({
                        ...e,
                        logo: true,
                      }))
                    }
                    className="bg-gray-200 h-10 w-10 rounded-full flex justify-center items-center"
                  >
                    <PlusIcon className="h-6 w-6" />
                  </div>
                )}{" "}
                {errors.logo && (
                  <p className="text-sm text-red-500 mb-2 mt-1">
                    {errors.logo}
                  </p>
                )}
              </div>

              <div
                className={` ${
                  showImage.logo ? "w-6/12" : "w-9/12"
                } px-2 flex flex-col justify-start items-start mb-3   `}
              >
                <p className="font-semibold text-gray-800 mb-2">
                  Company Name (Optional)
                </p>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="placeholder:font-semibold  placeholder:text-[#3d3c3c] px-2 rounded-md mb-2 py-3 text-sm font-medium bg-transparent focus:bg-[#F6F7FA] w-full  border-[1px] border-[#dbd9d9] text-space focus:outline-none   focus:border-[#dbd9d9] text-black "
                />
                {errors.companyName && (
                  <p className="text-sm text-red-500 mb-2 mt-1">
                    {errors.companyName}
                  </p>
                )}
              </div> */}

              <div className="w-full px-2 mb-3">
                <p className="font-semibold text-gray-800 mb-2">Lead Owner</p>
                <select
                  name="leadOwner"
                  value={formData.leadOwner}
                  onChange={handleChange}
                  className="placeholder:font-semibold  placeholder:text-[#3d3c3c] px-2 rounded-md mb-2 py-3 text-sm font-medium bg-transparent focus:bg-[#F6F7FA] w-full  border-[1px] border-[#dbd9d9] text-space focus:outline-none   focus:border-[#dbd9d9] text-black "
                >
                  <option value="">Select</option>
                  <option value="owner1">Owner 1</option>
                  <option value="owner2">Owner 2</option>
                  <option value="owner3">Owner 3</option>
                </select>
                {errors.leadOwner && (
                  <p className="text-sm text-red-500 mb-2 mt-1">
                    {errors.leadOwner}
                  </p>
                )}
              </div>
              <div className="w-full mb-2">
                <p className="font-semibold text-gray-800 mb-2 pl-1">
                  Phone No
                </p>
                <MobileNo name="mobile_phone" type="text" />
                {errors.phone && (
                  <p className="text-sm text-red-500 mb-2 mt-1">
                    {errors.phone}
                  </p>
                )}
              </div>
              <div className="w-full px-2 mb-3">
                <p className="font-semibold text-gray-800 mb-2">Job Title</p>
                <select
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className="placeholder:font-semibold  placeholder:text-[#3d3c3c] px-2 rounded-md mb-2 py-3 text-sm font-medium bg-transparent focus:bg-[#F6F7FA] w-full  border-[1px] border-[#dbd9d9] text-space focus:outline-none   focus:border-[#dbd9d9] text-black "
                >
                  <option value="">Select</option>
                  <option value="title1">Title 1</option>
                  <option value="title2">Title 2</option>
                </select>
                {errors.jobTitle && (
                  <p className="text-sm text-red-500 mb-2 mt-1">
                    {errors.jobTitle}
                  </p>
                )}
              </div>

              {/* <div>
                <label>Phone Number:</label>
                <input
                  type="number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
                {errors.phoneNumber &&  <p className="text-sm text-red-500 mb-2 mt-1">{errors.phoneNumber}</p>}
              </div> */}

              <div className="w-full px-2 mb-3">
                <p className="font-semibold text-gray-800 mb-2">Lead Source</p>

                <select
                  name="leadSource"
                  value={formData.leadSource}
                  onChange={handleChange}
                  className="placeholder:font-semibold  placeholder:text-[#3d3c3c] px-2 rounded-md mb-2 py-3 text-sm font-medium bg-transparent focus:bg-[#F6F7FA] w-full  border-[1px] border-[#dbd9d9] text-space focus:outline-none   focus:border-[#dbd9d9] text-black "
                >
                  <option value="">Select</option>
                  <option value="source1">Source 1</option>
                  <option value="source2">Source 2</option>
                  <option value="source3">Source 3</option>
                </select>
                {errors.leadSource && (
                  <p className="text-sm text-red-500 mb-2 mt-1">
                    {errors.leadSource}
                  </p>
                )}
              </div>

              <div className="w-full px-2 mb-3">
                <p className="font-semibold text-gray-800 mb-2">Lead Status</p>

                <div className="flex flex-wrap justify-start items-center">
                  {statusData.map((item: any, index: any) => (
                    <div key={index} className="mr-1.5">
                      <div
                        onClick={() => {
                          setFormData((prevValues: any) => ({
                            ...prevValues,
                            leadStatus: item,
                          }));
                        }}
                        className={` ${
                          item == "Open"
                            ? " border-newBlue bg-blue-100"
                            : item == "New"
                            ? " border-gray-500 bg-gray-200"
                            : item == "Deal Unqualified"
                            ? " border-secondary bg-red-200"
                            : item == "Attempt to a contact"
                            ? " border-green-500 bg-green-200"
                            : item == "Bad Timing"
                            ? " border-orange-500 bg-orange-200"
                            : " border-gray-300 bg-gray-100"
                        }   ${
                          formData.leadStatus == item
                            ? "border-2"
                            : " border-[1px]  "
                        }
                    flex justify-start items-center mb-4 text-center py-2 px-2 rounded-full font-normal text-dark`}
                      >
                        <div
                          className={`${
                            item == "Open"
                              ? " bg-newBlue "
                              : item == "New"
                              ? " bg-gray-600  "
                              : item == "Deal Unqualified"
                              ? " bg-secondary"
                              : item == "Attempt to a contact"
                              ? " bg-green-500"
                              : item == "Bad Timing"
                              ? "  bg-orange-500"
                              : " bg-gray-500"
                          }
                    
                    h-1.5 w-1.5 rounded-full   mr-2 ml-2`}
                        ></div>
                        <span
                          className={`${
                            item == "Open"
                              ? " text-newBlue "
                              : item == "New"
                              ? " text-gray-500  "
                              : item == "Deal Unqualified"
                              ? " text-secondary"
                              : item == "Attempt to a contact"
                              ? " text-green-500"
                              : item == "Bad Timing"
                              ? " text-orange-500"
                              : " text-gray-600"
                          }  pr-3  ${
                            formData.leadStatus == item
                              ? "font-semibold"
                              : "font-medium"
                          }  text-sm`}
                        >
                          {item}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                {errors.leadStatus && (
                  <p className="text-sm text-red-500 mb-2 mt-1">
                    {errors.leadStatus}
                  </p>
                )}
              </div>

              {/* <div>
                <label>Lead Status:</label>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="leadStatus"
                      value="status1"
                      checked={formData.leadStatus === "status1"}
                      onChange={handleChange}
                    />
                    Status 1
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="leadStatus"
                      value="status2"
                      checked={formData.leadStatus === "status2"}
                      onChange={handleChange}
                    />
                    Status 2
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="leadStatus"
                      value="status3"
                      checked={formData.leadStatus === "status3"}
                      onChange={handleChange}
                    />
                    Status 3
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="leadStatus"
                      value="status4"
                      checked={formData.leadStatus === "status4"}
                      onChange={handleChange}
                    />
                    Status 4
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="leadStatus"
                      value="status5"
                      checked={formData.leadStatus === "status5"}
                      onChange={handleChange}
                    />
                    Status 5
                  </label>
                </div>
              </div> */}

              <div className="w-full flex justify-between items-center px-4 md:px-4 pt-4 pb-2 border-gray-200 border-t mt-4">
                <button
                  onClick={onClose}
                  className="font-semibold text-gray-800 mb-2 text-lg"
                >
                  Cancel
                </button>

                <div className="flex justify-between items-center">
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="mr-4 font-semibold text-gray-800 mb-2 border-2 border-gray-200 rounded-md py-1.5 px-3"
                  >
                    Create and add another
                  </button>
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="font-semibold   mb-2 bg-secondary rounded-md py-1.5 px-6 text-white"
                  >
                    Create lead
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
