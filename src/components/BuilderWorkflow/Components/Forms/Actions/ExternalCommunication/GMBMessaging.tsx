/* eslint-disable react/jsx-key */
import { modalItemState } from "@/atoms/modalItem";
import { nameTrigger } from "@/atoms/nameTrigger";
import { offCanvasOpenState } from "@/atoms/offCanvasOpen";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { useRecoilState } from "recoil";

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

export default function GMBMessaging({ onDataStore, onClose }: any) {
  const [isFlyOutVisible, setIsFlyOutVisible] =
    useRecoilState(offCanvasOpenState);
  const [data, setData] = useRecoilState(modalItemState);

  const [actionData, setActionData] = useRecoilState(nameTrigger);

  const [formValues, setFormValues] = useState<any>({
    actionName: actionData,
    message: "",
  });
  const [errors, setErrors] = useState<any>({});
  const [attachment, setAttachment] = useState(false);
  const [fileUrls, setFileUrls] = useState<any>([]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if (name == "actionName") {
      setData(value);
    }
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

  const handleAdd = () => {
    setFileUrls([...fileUrls, { url: "" }]);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Validate form fields
    const validationErrors: any = {};

    if (!formValues.actionName.trim()) {
      validationErrors.actionName = "Action name is required";
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
    setFormValues({
      actionName: "",
      message: "",
    });
    setErrors({});
    onDataStore(formValues.actionName, formValues);

    setIsFlyOutVisible(false);
  };

  return (
    <div>
      <div className=" h-[75vh] 2xl:h-[80vh] overflow-y-scroll scrollbar-hide">
        <form onSubmit={handleSubmit} className="flex flex-wrap px-2  ">
          <div className="w-full mt-4">
            <label className="w-full mb-2 text-sm text-gray-600 font-semibold fontStrawFord">
              Action Name:
            </label>
            <input
              type="text"
              name="actionName"
              value={formValues.actionName}
              onChange={handleChange}
              placeholder="GMB"
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 rounded-md mt-2 mb-2 py-3.5 font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            />
            {errors.actionName && (
              <span className="mb-5 error text-red-500 ">
                {errors.actionName}
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
        </form>
      </div>
      <div className="flex justify-end items-end  py-2 px-4 ">
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
