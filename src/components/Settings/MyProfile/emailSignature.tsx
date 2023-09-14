import dynamic from "next/dynamic";
import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { MdOutlineClose, MdUpload } from "react-icons/md";

// const QuillNoSSRWrapper = dynamic(import("react-quill"), {
//   ssr: false,
// });

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

export default function EmailSignature() {
  const [formValues, setFormValues] = useState<any>({
    message: "",
  });
  const [errors, setErrors] = useState<any>({});

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

    if (!formValues.message) {
      validationErrors.message = "Message is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Reset form after successful submission
    setFormValues({
      message: "",
    });
    setErrors({});
  };
  return (
    <div>
      <div className=" border rounded-md  mb-5  bg-white  shadow-md">
        {/* first section */}

        <div className="  p-4 border-b flex items-center justify-between">
          <p className="text-[#47494b] text-base font-semibold">
            Email Signature
          </p>
        </div>
        {/* checkboxes */}
        <div className="pt-3 px-4">
          <div className="flex justify-start items-center mb-3 rounded-lg">
            <input
              type="checkbox"
              className="checkbox"
              onChange={handleChange}
            />

            <p
              className={` fontStrawFord text-gray-600 text-xs font-semibold  tracking-wide ml-2   `}
            >
              Enable Signature On All Outgoing Messages
            </p>
          </div>
          <div className="flex justify-start items-center mb-1 rounded-lg">
            <input
              type="checkbox"
              className="checkbox"
              onChange={handleChange}
            />

            <p
              className={` fontStrawFord text-gray-600 text-xs font-semibold  tracking-wide ml-2   `}
            >
              Include This Signature Before Quoted Text In Replies
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className=" flex-wrap  p-4 ">
          {/* <div className="w-full mb-20">
            <QuillNoSSRWrapper
              modules={modules}
              formats={formats}
              theme="snow"
              value={formValues.message}
              onChange={handleQuillChange}
              placeholder="message"
              style={{
                height: 150,
                marginBottom: 50,
              }}
              className="scrollbar-hide"
            />
          </div> */}
          {errors.message && (
            <span className="mb-3 text-red-500 text-xs ">{errors.message}</span>
          )}
          <div className="w-full flex justify-start items-center">
            <button
              onSubmit={handleSubmit}
              className="border bg-newBlue  text-white rounded-md text-sm px-8 py-2 mt-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
