import React, { useState } from "react";
import { BsQuestionCircleFill } from "react-icons/bs";

import { MenuItem, OutlinedInput, Select, TextField } from "@mui/material";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
export default function Confirmation({
  onClose,
  handleNewTab,
  handleStoreFormData,
  handleBack,
}: any) {
  const [formValues, setFormValues] = useState<any>({
    customForm: "",
    stickyContact: "",
    contact: "",
    emails: "",
    autoConfirm: "",
    allowGoogleCalendar: "",
    allowReschdule: "",
    allowCancellation: "",
    additionalNotes: "",
    faceBookID: "",
    customCode: "",
    formSubmit: "",
    customMessage: "",
    thankMessage: "",
  });
  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormValues((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Validate form fields
    console.log(formValues);

    const validationErrors: any = {};

    if (!formValues.customForm.trim()) {
      validationErrors.customForm = "required";
    }
    if (!formValues.additionalNotes.trim()) {
      validationErrors.additionalNotes = "required";
    }
    if (!formValues.faceBookID.trim()) {
      validationErrors.faceBookID = "required";
    }
    if (!formValues.customCode.trim()) {
      validationErrors.customCode = "required";
    }
    if (!formValues.thankMessage.trim()) {
      validationErrors.thankMessage = "required";
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setFormValues({
      customForm: "",
      stickyContact: "",
      contact: "",
      emails: "",
      autoConfirm: "",
      allowGoogleCalendar: "",
      allowReschdule: "",
      allowCancellation: "",
      additionalNotes: "",
      faceBookID: "",
      customCode: "",
      formSubmit: "",
      customMessage: "",
      thankMessage: "",
    });

    setErrors({});

    handleStoreFormData(formValues);
    handleNewTab();
  };

  return (
    <div className="px-2 ">
      <div className=" h-full overflow-hidden px-4">
        <div className="lg:h-[50vh] overflow-y-scroll scrollbar-hide">
          <div className=" mb-4 pt-5">
            <h1 className="text-[#47494b] text-md font-semibold">
              Form Setting
            </h1>
            <p className="text-gray-400 text-sm">
              Configure your form and other related options
            </p>
          </div>
          <div>
            <div>
              <label
                htmlFor=""
                className="text-[#47494b] text-sm flex items-center gap-2 font-semibold"
              >
                Custom Form <BsQuestionCircleFill className="text-sm" />
              </label>

              <Select
                placeholder="Contact Changed"
                name="customForm"
                onChange={handleChange}
                value={formValues.customForm}
                className="border-none ouline-none rounded-md mt-2 mb-2  text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark   text-space focus:outline-none focus:border-gray-300 text-black"
              >
                <MenuItem value="">Select</MenuItem>
                <MenuItem value="CustomForm1">CustomForm1</MenuItem>
                <MenuItem value="CustomForm2">CustomForm2</MenuItem>
              </Select>
              {errors.customForm && (
                <div className="mb-2 text-red-500 text-[12px]">
                  {errors.customForm}
                </div>
              )}
            </div>

            <div className="flex items-center px-2 py-3 gap-2">
              <input
                type="checkbox"
                name="stickyContact"
                onChange={handleChange}
                value={formValues.stickyContact}
                className="checkbox scale-75 "
              />
              <label
                htmlFor=""
                className="text-[#47494b] text-sm flex items-center gap-2 font-semibold"
              >
                Use Sticky Contact <BsQuestionCircleFill className="text-sm" />
              </label>
            </div>

            <div className="mt-3">
              <h1 className="text-[#47494b] text-md font-semibold">
                Notification & Additional Options
              </h1>
              <p className="text-gray-400 text-sm">
                Configure notiffication and other miscellaneous options
              </p>
            </div>

            <div className="bg-gray-100 my-3 rounded-md p-3">
              <div className="W-[40%]">
                <label
                  htmlFor=""
                  className="text-gray-500 text-sm flex font-semibold"
                >
                  Notification Type{" "}
                </label>
                <Select
                  placeholder="Contact Changed"
                  name="notificationType"
                  onChange={handleChange}
                  value={formValues.notificationType}
                  className="border-none ouline-none rounded-md mt-2 mb-2  text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark   text-space focus:outline-none focus:border-gray-300 text-black"
                >
                  <MenuItem value="">Select</MenuItem>
                  <MenuItem value="Acknowledge Email">
                    Acknowledge Email
                  </MenuItem>
                  <MenuItem value="Acknowledge SMS">Acknowledge SMS</MenuItem>
                </Select>
                {errors.notificationType && (
                  <div className="mb-2 text-red-500 text-[12px]">
                    {errors.notificationType}
                  </div>
                )}
              </div>
              <p className="text-gray-400 text-sm">
                Who should recieve this notification?
              </p>

              <div className=" py-3 gap-2">
                <div className="flex items-center py-2 gap-2">
                  <input
                    type="checkbox"
                    name="contact"
                    onChange={handleChange}
                    value={formValues.contact}
                    className="checkbox scale-75 "
                  />
                  <label
                    htmlFor=""
                    className="text-[#47494b] text-sm flex items-center gap-2 font-semibold"
                  >
                    Contact{" "}
                  </label>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="emails"
                    onChange={handleChange}
                    value={formValues.emails}
                    className="checkbox scale-75"
                  />
                  <label
                    htmlFor=""
                    className="text-[#47494b] text-sm flex items-center gap-2 font-semibold"
                  >
                    Emails <BsQuestionCircleFill className="text-sm" />
                  </label>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 my-3 rounded-md">
              <label htmlFor="" className="flex gap-3 p-2">
                <input
                  type="checkbox"
                  onChange={handleChange}
                  className="checkbox scale-75"
                  name="autoConfirm"
                  value={formValues.autoConfirm}
                />
                <span className="text-gray-600 flex items-center gap-2 font-semibold text-sm">
                  Let the calendar auto confirm my appointment{" "}
                  <BsQuestionCircleFill className="text-sm" />
                </span>
              </label>
            </div>

            <div className=" my-3 rounded-md">
              <label htmlFor="" className="flex gap-3 p-2">
                <input
                  type="checkbox"
                  className="checkbox scale-75"
                  name="allowGoogleCalendar"
                  onChange={handleChange}
                  value={formValues.allowGoogleCalendar}
                />
                <span className="text-gray-600 font-semibold text-sm">
                  Allow google calendar to send invitation or update emails to
                  attendees
                </span>
              </label>
            </div>

            <div className="bg-gray-100 my-3 rounded-md">
              <label htmlFor="" className="flex gap-3 p-2">
                <input
                  type="checkbox"
                  className="checkbox scale-75"
                  onChange={handleChange}
                  name="allowReschdule"
                  value={formValues.allowReschdule}
                />
                <span className="text-gray-600  font-semibold text-sm">
                  Allow Reschedule{" "}
                </span>
              </label>
            </div>

            <div className="bg-gray-100 my-3 rounded-md">
              <label htmlFor="" className="flex gap-3 p-2">
                <input
                  type="checkbox"
                  className="checkbox scale-75"
                  onChange={handleChange}
                  name="allowCancellation"
                  value={formValues.allowCancellation}
                />
                <span className="text-gray-600 font-semibold text-sm">
                  Allow Cancellation
                </span>
              </label>
            </div>

            <div className="py-2">
              <label
                htmlFor=""
                className="block text-[#47494b] text-sm py-1 font-semibold"
              >
                Additional Notes
              </label>
              <textarea
                onChange={handleChange}
                name="additionalNotes"
                value={formValues.additionalNotes}
                className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
              />
              {errors.additionalNotes && (
                <div className="mb-2 text-red-500 text-[12px]">
                  {errors.additionalNotes}
                </div>
              )}
            </div>

            <div className="py-2">
              <label
                htmlFor=""
                className="block text-[#47494b] text-sm py-1 font-semibold"
              >
                Facebook pixel ID
              </label>
              <input
                type="text"
                name="faceBookID"
                value={formValues.faceBookID}
                onChange={handleChange}
                placeholder="Facebook Pixel ID"
                className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
              />{" "}
              {errors.faceBookID && (
                <div className="mb-2 text-red-500 text-[12px]">
                  {errors.faceBookID}
                </div>
              )}
            </div>

            <div className="py-2">
              <label
                htmlFor=""
                className="block text-[#47494b] text-sm py-1 font-semibold"
              >
                Custom Code
              </label>
              <textarea
                onChange={handleChange}
                name="customCode"
                value={formValues.customCode}
                className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
                placeholder="Enter Custom Code"
              />
              {errors.customCode && (
                <div className="mb-2 text-red-500 text-[12px]">
                  {errors.customCode}
                </div>
              )}
            </div>

            <div className="mt-3">
              <h1 className="text-[#47494b] text-md font-semibold">
                Form Submissions
              </h1>
              <p className="text-gray-400 text-sm">
                Control how you want the confirmation page to be displayed or
                redirected
              </p>
            </div>

            <div className="w-9/12">
              {" "}
              <RadioGroup
                row
                name="formSubmit"
                value={formValues.formSubmit}
                onChange={handleChange}
              >
                <div className="w-1/2 pr-2">
                  <FormControlLabel
                    value="redirectUrl"
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
                    label="Form Submit Redirected URL"
                  />
                </div>
                <div className="w-1/2 pr-2">
                  <FormControlLabel
                    value="customMessage"
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
                    label="Custom Thank You Message"
                  />
                </div>
              </RadioGroup>
            </div>

            <textarea
              onChange={handleChange}
              name="thankMessage"
              value={formValues.thankMessage}
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
              placeholder="Message"
            />
            {errors.thankMessage && (
              <div className="mb-2 text-red-500 text-[12px]">
                {errors.thankMessage}
              </div>
            )}
          </div>
        </div>
        <div className="lg:h-[20vh]">
          <div className="flex justify-end gap-3 p-4 mt-2 border-t ">
            <button
              onClick={onClose}
              className="border text-[#47494b] rounded-md px-3 py-2"
            >
              Close
            </button>
            <button
              onClick={handleBack}
              className="border text-[#47494b] rounded-md px-3 py-2"
            >
              Back
            </button>
            <button
              onClick={() => handleSubmit()}
              className="border bg-newBlue text-white rounded-md px-3 py-2"
            >
              Save & continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
