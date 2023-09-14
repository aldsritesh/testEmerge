import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
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

export default function EmailMessage({ handleChange, onClose }: any) {
  const [formValues, setFormValues] = useState({
    to: "",
    from: "",
    cc: "",
    bcc: "",
    subject: "",
    message: "",
  });

  const [ccVisible, setCCVisible] = useState(false);
  const [bccVisible, setBCCVisible] = useState(false);
  const [errors, setErrors] = useState<any>({});

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues((prevData) => ({
      ...prevData,
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

    if (!formValues.to.trim()) {
      validationErrors.to = "Please specify recipient.";
    }
    if (!formValues.from.trim()) {
      validationErrors.from = "Please specify from";
    }
    if (!formValues.subject.trim()) {
      validationErrors.subject = "Please specify a subject";
    }
    if (!formValues.message.trim()) {
      validationErrors.message = "Enter something in your message box";
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Form submission logic goes here
    // You can access the form field values and attachment in the formValues state

    // Reset form after successful submission
    setFormValues({
      to: "",
      from: "",
      cc: "",
      bcc: "",
      subject: "",
      message: "",
    });
    setErrors({});
    handleChange(formValues);
  };

  return (
    <div>
      <div className="bg-[#F9F9FB]  w-full px-2 pt-2  ">
        <form onSubmit={handleSubmit}>
          <div className="bg-white shadow-md  px-2 pt-1 pb-0.5 rounded-lg">
            <div className="mb-2 flex flex-wrap items-center w-full bg-[#f6f6fc] border-[1px] border-gray-300 rounded-md py-1 px-3">
              <div className=" w-[12%]">
                <div className="border-r-[1px] border-gray-200 mr-5">
                  <p className="text-sm text-purpleShade font-semibold pr-5 ">
                    To
                  </p>
                </div>
              </div>
              <div className=" w-[73%] relative">
                <input
                  type="text"
                  name="to"
                  value={formValues.to}
                  onChange={handleInputChange}
                  // placeholder="Obinathaniel@gmail.com"
                  className="w-full text-sm placeholder:text-purpleShade text-purpleShade font-semibold bg-transparent focus:bg-transparent focus:outline-none  "
                />
                <div className="absolute right-5 top-0  mb-3">
                  {errors.to && (
                    <span className="  error text-red-500 text-sm">
                      {errors.to}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex justify-end items-center w-[15%]">
                <button
                  onClick={() => setCCVisible(true)}
                  className="bg-[#E9E9F7] rounded-md text-purpleShade py-1 px-2 text-sm font-semibold"
                >
                  Cc
                </button>
                <button
                  onClick={() => setBCCVisible(true)}
                  className="ml-3 bg-[#E9E9F7] rounded-md text-purpleShade py-1 px-2 text-sm font-semibold"
                >
                  Bcc
                </button>
              </div>
            </div>

            {ccVisible && (
              <div className="mb-2 flex flex-wrap items-center w-full bg-[#f6f6fc] border-[1px] border-gray-300 rounded-md py-1 px-3">
                <div className=" w-[12%]">
                  <div className="border-r-[1px] border-gray-200 mr-5">
                    <span className="text-sm text-purpleShade font-semibold pr-5  ">
                      Cc
                    </span>
                  </div>
                </div>
                <div className=" w-[88%]">
                  <input
                    type="email"
                    name="cc"
                    value={formValues.cc}
                    onChange={handleInputChange}
                    // placeholder="Cc"
                    className="w-full text-sm placeholder:text-purpleShade text-purpleShade font-semibold bg-transparent focus:bg-transparent focus:outline-none  "
                  />
                </div>
              </div>
            )}

            {bccVisible && (
              <div className="mb-2 flex flex-wrap items-center w-full bg-[#f6f6fc] border-[1px] border-gray-300 rounded-md py-1 px-3">
                <div className=" w-[12%]">
                  <div className="border-r-[1px] border-gray-200 mr-5">
                    <span className="text-sm text-purpleShade font-semibold pr-5  ">
                      Bcc
                    </span>
                  </div>
                </div>
                <div className=" w-[88%]">
                  <input
                    type="email"
                    name="bcc"
                    value={formValues.bcc}
                    onChange={handleInputChange}
                    // placeholder="Bcc"
                    className="w-full text-sm placeholder:text-purpleShade text-purpleShade font-semibold bg-transparent focus:bg-transparent focus:outline-none  "
                  />
                </div>
              </div>
            )}

            <div className="mb-2 flex flex-wrap items-center w-full bg-[#f6f6fc] border-[1px] border-gray-300 rounded-md py-1 px-3">
              <div className=" w-[12%]">
                <div className="border-r-[1px] border-gray-200 mr-5">
                  <span className="text-sm text-purpleShade font-semibold pr-5  ">
                    From
                  </span>
                </div>
              </div>
              <div className=" w-[88%] relative">
                <input
                  type="email"
                  name="from"
                  value={formValues.from}
                  onChange={handleInputChange}
                  // placeholder="From"
                  className="w-full text-sm placeholder:text-purpleShade text-purpleShade font-semibold bg-transparent focus:bg-transparent focus:outline-none  "
                />
                <div className="absolute right-0 top-0  mb-3">
                  {errors.from && (
                    <span className="  error text-red-500 text-sm">
                      {errors.from}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="mb-2 w-full bg-[#f6f6fc] border-[1px] border-gray-300 rounded-md ">
              <div className=" flex flex-wrap items-center w-full bg-[#f6f6fc] border-b-[1px] border-gray-300 py-2 px-3">
                <div className=" w-[12%]">
                  <span className="text-sm text-purpleShade font-semibold border-r-[1px] border-gray-200 pr-5 mr-5">
                    Subject
                  </span>
                </div>
                <div className=" w-[88%] relative">
                  <input
                    type="text"
                    name="subject"
                    value={formValues.subject}
                    onChange={handleInputChange}
                    // placeholder="Subject"
                    className="w-full text-sm placeholder:text-purpleShade text-purpleShade font-semibold bg-transparent focus:bg-transparent focus:outline-none  "
                  />
                  <div className="absolute right-0 top-0  mb-3">
                    {errors.subject && (
                      <span className="  error text-red-500 text-sm">
                        {errors.subject}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="">
                <QuillNoSSRWrapper
                  modules={modules}
                  formats={formats}
                  theme="snow"
                  value={formValues.message}
                  onChange={handleQuillChange}
                  //   onBlur={handleBlur("content")}
                  placeholder="message"
                  className=" h-[22vh] overflow-y-scroll scrollbar-hide "
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-3 px-2">
            <div className="flex justify-between items-center ">
              <Image
                src={require("../../../public/images/icons/buffer.png")}
                alt=""
                className="h-6 w-6"
              />
              <p className="text-[#878ab8] font-medium text-sm ml-2">
                Saving Draft
              </p>
            </div>
            <button className="bg-purpleShade py-1 px-8 rounded-full text-white">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
