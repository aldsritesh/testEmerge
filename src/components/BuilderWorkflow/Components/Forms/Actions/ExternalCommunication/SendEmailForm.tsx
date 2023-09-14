import { modalItemState } from "@/atoms/modalItem";
import { offCanvasOpenState } from "@/atoms/offCanvasOpen";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useRecoilState } from "recoil";
import { MdUpload } from "react-icons/md";
import { MenuItem, Select } from "@mui/material";
import { nameTrigger } from "@/atoms/nameTrigger";

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
});

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }],
    [{ font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

export default function SendEmailForm({ onDataStore, onClose }: any) {
  const [isFlyOutVisible, setIsFlyOutVisible] =
    useRecoilState(offCanvasOpenState);
  const [data, setData] = useRecoilState(modalItemState);

  const [actionData, setActionData] = useRecoilState(nameTrigger);

  const [formValues, setFormValues] = useState<any>({
    actionName: actionData,
    formName: "",
    fromEmail: "",
    subject: "",
    template: "",
    message: "",
    attachment: null,
  });
  const [errors, setErrors] = useState<any>({});
  const [attachment, setAttachment] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormValues((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleQuillChange = (value: any) => {
    setFormValues((prevValues: any) => ({
      ...prevValues,
      message: value,
    }));
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Validate form fields
    const validationErrors: any = {};

    if (!formValues.actionName.trim()) {
      validationErrors.actionName = "Action name is required";
    }

    if (!formValues.formName.trim()) {
      validationErrors.formName = "Form name is required";
    }

    if (!formValues.fromEmail.trim()) {
      validationErrors.fromEmail = "From email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.fromEmail)) {
      validationErrors.fromEmail = "Invalid email address";
    }

    if (!formValues.subject.trim()) {
      validationErrors.subject = "Subject is required";
    }

    if (!formValues.template.trim()) {
      validationErrors.template = "Template is required";
    }

    if (!formValues.message.trim()) {
      validationErrors.message = "Message is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Form submission logic goes here
    // You can access the form field values and attachment in the formValues state

    // Reset form after successful submission
    onDataStore(formValues.actionName, formValues);
    setFormValues({
      actionName: "",
      formName: "",
      fromEmail: "",
      subject: "",
      template: "",
      message: "",
      attachment: null,
    });
    setErrors({});
    setIsFlyOutVisible(false);
  };

  return (
    <div>
      <div className=" h-[75vh] 2xl:h-[80vh] overflow-y-scroll scrollbar-hide">
        <form onSubmit={handleSubmit} className="flex flex-wrap px-2  ">
          <div className="w-full mt-1.5">
            <label className="w-full mb-2 text-sm text-gray-600 font-semibold fontStrawFord">
              Action Name
            </label>
            <input
              type="text"
              name="actionName"
              value={formValues.actionName}
              onChange={handleChange}
              placeholder="Send Email"
              className="placeholder:text-gray-400 text-gray-500 text-[12px] px-3 rounded-md mt-2 mb-2 py-3.5 font-medium bg-transparent focus:bg-transparent w-full  border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            />
            {errors.actionName && (
              <span className="mb-5 error text-red-500 ">
                {errors.actionName}
              </span>
            )}
          </div>
          <div className="w-full mt-1.5">
            <label className="w-full mb-2 text-sm text-gray-600 font-semibold fontStrawFord">
              From Name
            </label>
            <input
              type="text"
              name="formName"
              value={formValues.formName}
              onChange={handleChange}
              className="placeholder:text-gray-400 text-gray-500 text-[12px] px-3 rounded-md mt-2 mb-2 py-3.5  font-medium bg-transparent focus:bg-transparent w-full  border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            />
            {errors.formName && (
              <span className="mb-5 error text-red-500 ">
                {errors.formName}
              </span>
            )}
          </div>
          <div className="w-full mt-1.5">
            <label className="w-full mb-2 text-sm text-gray-600 font-semibold fontStrawFord">
              From Email
            </label>
            <input
              type="email"
              name="fromEmail"
              value={formValues.fromEmail}
              onChange={handleChange}
              className="placeholder:text-gray-400 text-gray-500 text-[12px] px-3 rounded-md mt-2 mb-2 py-3.5  font-medium bg-transparent focus:bg-transparent w-full  border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            />
            {errors.fromEmail && (
              <span className="mb-5 error text-red-500 ">
                {errors.fromEmail}
              </span>
            )}
          </div>
          <div className="w-full mt-1.5">
            <label className="w-full mb-2 text-sm text-gray-600 font-semibold fontStrawFord">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formValues.subject}
              onChange={handleChange}
              className="placeholder:text-gray-400 text-gray-500 text-[12px] px-3 rounded-md mt-2 mb-2 py-3.5 font-medium bg-transparent focus:bg-transparent w-full  border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            />
            {errors.subject && (
              <span className="mb-5 error text-red-500 ">{errors.subject}</span>
            )}
          </div>
          <div className="w-full mt-1.5">
            <label className="w-full mb-2 text-sm text-gray-600 font-semibold fontStrawFord">
              Templates
            </label>
            <Select
              name="template"
              value={formValues.template}
              onChange={handleChange}
              className="
              border-none outline-none rounded-md mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark  text-space focus:outline-none focus:border-none text-black"
            >
              <MenuItem value="">Select a template</MenuItem>
              <MenuItem value="None">None</MenuItem>{" "}
              <MenuItem value="New Template"> New Template</MenuItem>
            </Select>
            {errors.template && (
              <span className="mb-5 error text-red-500 ">
                {errors.template}
              </span>
            )}
          </div>
          <div className="w-full mt-1.5 mb-12">
            <label className="w-full mb-2 text-sm text-gray-600 font-semibold fontStrawFord">
              Message
            </label>
            <QuillNoSSRWrapper
              modules={modules}
              formats={formats}
              theme="snow"
              value={formValues.message}
              onChange={handleQuillChange}
              //   onBlur={handleBlur("content")}
              placeholder="message"
              style={{
                height: 100,
                marginBottom: 20,
                // overflowY: "scroll",
                // resize: "vertical",
              }}
              className="scrollbar-hide"
            />

            {/* <textarea
              name="message"
              value={formValues.message}
              onChange={handleQuillChange}
              className="px-2 rounded-lg mt-2 mb-2 py-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark border-[1px] border-gray-400 text-space focus:outline-none   focus:border-gray-300 text-black "
            ></textarea> */}
            {errors.message && (
              <span className="mb-5 error text-red-500 ">{errors.message}</span>
            )}
          </div>

          {attachment == false ? (
            <button
              onClick={() => {
                setAttachment(true);
              }}
              className="fontStrawFord flex items-center justify-center bg-[#ed754b] text-white px-6 py-1 w-2/4 rounded font-bold mt-3 hover:bg-[#ed825c]"
            >
              <MdUpload /> Add attachment
            </button>
          ) : (
            <input
              type="file"
              name="attachment"
              onChange={(e: any) =>
                setFormValues((prevValues: any) => ({
                  ...prevValues,
                  attachment: e.target.files[0],
                }))
              }
              className="placeholder:text-gray-400 text-gray-500 text-[12px] px-3 rounded-md mt-2 mb-2 py-3.5 font-medium bg-transparent focus:bg-transparent w-full  border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            />
          )}

          <div className="w-full mt-1.5">
            <label className="w-full mb-2 text-sm text-gray-600 font-semibold fontStrawFord">
              Test Emails
            </label>
            <div className="flex justify-between">
              <input
                type="email"
                className="w-[70%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 rounded-md mt-2 mb-2 py-3.5  font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
              />

              <button className="fontStrawFord bg-transparent text-blue-400  border-2 border-blue-400 px-4 py-2 rounded my-2 hover:bg-blue-100">
                Send Test Mail
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="flex justify-end items-end  py-2 px-4">
        <button
          onClick={onClose}
          className="border-2 mr-5 fontStrawFord border-OrangeBuilder rounded-md flex justify-center items-center px-8 py-1.5 text-OrangeBuilder"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          type="submit"
          className="bg-OrangeBuilder fontStrawFord rounded-md flex justify-center items-center px-8 py-2 text-white"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
