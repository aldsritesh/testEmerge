import { nameTrigger } from "@/atoms/nameTrigger";
import { baseUrl } from "@/config/APIConstants";
import axios from "axios";
import dynamic from "next/dynamic";
import React, { useCallback, useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

import "react-quill/dist/quill.snow.css";
import { useRecoilState } from "recoil";
import FormDataString from "../contacts/FormDataString";
import { useDropzone } from "react-dropzone";
import { useAuthentication } from "@/controllers/auth";

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

export default function Notes() {
  const [data, setData] = useState<any[]>([]);
  const [dataString, setDataString] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [notesData, setNotesData] = useState<any>([
    {
      userName: "Easther Howard",
      dueDate: "22/07/2023",
      title: "This is Note Title",
      desc: "She's interested in our new product line and wants our very best price. Please include a detailed breakdown of costs.",
      image: require("../../../public/images/dentalTemplate/dentalTemplatefirst.jpg"),
    },
  ]);
  const { location, token }: any = useAuthentication();
  const [errors, setErrors] = useState<any>({});
  useEffect(() => {
    axios
      .get(`${baseUrl}forms/location/f209ee50-96e6-4ca2-9eb5-80b93d31591f`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }: any) => {
        setData(data.forms);
        setIsLoading(false);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  const [actionData, setActionData] = useRecoilState(nameTrigger);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const validationErrors: any = {};
    if (!formValues.noteTitle) {
      validationErrors.noteTitle = "Required";
    }
    if (!formValues.message) {
      validationErrors.message = "Required";
    }
    if (!formValues.noteImage) {
      validationErrors.noteImage = "Required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setNotesData([
      ...notesData,
      {
        userName: "Jhon Kelly",
        dueDate: "25/08/2023",
        title: formValues.noteTitle,
        desc: formValues.message,
        image: URL.createObjectURL(formValues.noteImage),
      },
    ]);
    setFormValues({
      message: "",
      noteTitle: "",
      noteImage: "",
    });

    setErrors({});
    // SetOpen(false);
  };
  const handleQuillChange = (value: any) => {
    setFormValues((prevValues: any) => ({
      ...prevValues,
      message: value,
    }));
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const [formValues, setFormValues] = useState<any>({
    actionName: actionData,
    formName: "",
    fromEmail: "",
    subject: "",
    template: "",
    message: "",
    attachment: null,
  });
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setFormValues({ ...formValues, noteImage: acceptedFiles[0] });
    },
    [formValues, setFormValues]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  });
  return (
    <>
      {/* Olde code */}

      {/* <div className="mx-24  mt-2   h-screen">
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
            marginBottom: 100,
            // overflowY: "scroll",
            // resize: "vertical",
          }}
          className="scrollbar-hide pt-4"
        />
      </div> */}

      {/* Old code end */}

      <div className=" border rounded-md  mb-5  bg-white  shadow-md px-4 py-4">
        <div className="flex items-center">
          <div className="font-main text-black text-md font-semibold  tracking-wide ">
            <p>Add New Note</p>
          </div>

          <div className="dropdown dropdown-bottom ml-2">
            <label
              tabIndex={1}
              className="border-[1px] border-gray-200 m-1  px-2  2xl:px-4 2xl:py-2 rounded-md flex flex-wrap justify-between items-center"
            >
              <span className="text-gray-500 font-semibold text-[12px] 2xl:text-sm">
                All Forms
              </span>
              <FiChevronDown className="h-5 w-5 text-darkBlack mt-1 ml-2" />
            </label>
            <ul
              tabIndex={1}
              className="dropdown-content overflow-x-hidden p-2 scrollbar-hide  shadow bg-base-100  h-32 overflow-y-auto"
            >
              {data.map((item: any, index: any) => (
                <li
                  key={index}
                  className="py-1 cursor-pointer hover:bg-gray-100 px-2 rounded-md"
                >
                  <a
                    onClick={() => {
                      // console.log(item.data);
                      setDataString(item.data);
                      console.log(dataString);
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full mt-2 rounded-[10px] ">
          {dataString ? (
            <FormDataString data={dataString} />
          ) : (
            <QuillNoSSRWrapper
              modules={modules}
              formats={formats}
              theme="snow"
              value={formValues.message}
              onChange={handleQuillChange}
              placeholder="message"
              style={{
                height: "30vh",
                background: "white",
                marginBottom: 18,
                paddingBottom: 65,
              }}
              className="scrollbar-hide outline-none pb-5 bg-white"
            />
          )}
          {errors.message && (
            <span className="mb-5 error text-red-500 ">{errors.message}</span>
          )}

          <div className="space-y-3">
            <div>
              <div className="font-main text-md font-semibold tracking-wide  text-gray-700 text-sm">
                Note Title
              </div>
              <input
                className="font-main tracking-wide w-80 py-1 px-3 border border-gray-200 rounded-lg shadow-sm  "
                type="text"
                name="noteTitle"
                placeholder="Note Title"
                value={formValues.noteTitle}
                onChange={handleChange}
              />
              {errors.noteTitle && (
                <div className=" error text-red-500 ">{errors.noteTitle}</div>
              )}
            </div>
            <div>
              <div className="font-main text-md font-semibold tracking-wide  text-gray-700 text-sm">
                Note Image
              </div>
              {formValues?.noteImage ? (
                <div
                  {...getRootProps()}
                  className="border-[1px] my-1 mb-3 rounded-md px-4 py-1 w-[1/4] text-center cursor-pointer border-gray-300 text-blue-400"
                >
                  Image Uploaded Successfully
                </div>
              ) : (
                <div
                  {...getRootProps()}
                  className="border-[1px] my-1 mb-3 rounded-md px-4 py-1 w-[1/4] text-center cursor-pointer border-gray-300 text-blue-400"
                >
                  Upload
                </div>
              )}

              {errors.noteImage && (
                <div className=" error text-red-500 ">{errors.noteImage}</div>
              )}
            </div>
          </div>
          <div className="flex items-center justify-end">
            <button
              className="px-5 py-1  text-sm bg-[#1066CF] text-white border-[1px] border-lightGray h-10 rounded-md shadow-sm"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
