import { baseUrl, userID } from "@/config/APIConstants";
import { useAuthentication } from "@/controllers/auth";
import { Close } from "@mui/icons-material";
import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
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
export default function TaskEditForm({
  onClose,
  id,
  taskDescription,
  taskPriority,
  taskTitle,
}: any) {
  const date = new Date();

  const formattedDate = date.toISOString(); // "YYYY-MM-DDTHH:mm:ss.sssZ"

  const formattedDateWithoutMilliseconds = formattedDate.substring(0, 19) + "Z";

  const [errors, setErrors] = useState<any>({});
  const [open, SetOpen] = useState(false);
  const [formValues, setFormValues] = useState<any>({
    taskDescription: taskDescription,
    taskTitle: taskTitle,
    taskPriority: taskPriority,
    dueDate: formattedDateWithoutMilliseconds,
  });

  const handleQuillChange = (value: any) => {
    setFormValues((prevValues: any) => ({
      ...prevValues,
      taskDescription: value,
    }));
  };
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const { location, token }: any = useAuthentication();

  const router = useRouter();
  const handleSubmit = (e: any) => {
    e.preventDefault();

    const validationErrors: any = {};

    if (!formValues.taskTitle) {
      validationErrors.taskTitle = "Required";
    }
    if (!formValues.taskDescription) {
      validationErrors.taskDescription = "Required";
    }
    if (!formValues.taskPriority) {
      validationErrors.taskPriority = "Required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    let newdesp = formValues.taskDescription
      .replace("<p>", "")
      .replace("</p>", "");

    try {
      axios
        .put(
          `${baseUrl}tasks/${id}`,
          {
            taskDescription: newdesp,
            taskTitle: formValues.taskTitle,
            taskPriority: formValues.taskPriority,
            dueDate: formattedDateWithoutMilliseconds,
            locationID: location?.id,
            ownerUserID: userID,
            contactID: "8c5678b1-c7f4-4d77-8215-5f9f17740492",
            assignedUserID: "e40d111b-8856-4207-a30f-3f00fc09056c",
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then(({ response }: any) => {
          // setupdate(update + 1);
          router.reload();
          console.log("first response", response);
        });
    } catch (error) {
      console.log("", error);
    }

    setFormValues({
      taskDescription: "",
      taskTitle: "",
    });

    setErrors({});
    SetOpen(false);
    onClose(true);
  };

  const [arr, setArr] = useState([]);
  useEffect(() => {
    axios
      .get(`${baseUrl}tasks/contact/8c5678b1-c7f4-4d77-8215-5f9f17740492`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }: any) => {
        setArr(data.tasks);
        // array1 = [data.tasks];
        console.log("first task list data ----------->", data.tasks);
      })
      .catch((error: any) => {
        console.log("", error);
      });
  }, []);
  return (
    <form onSubmit={handleSubmit} className="m-5">
      <div className="flex justify-between  my-5">
        <h1 className="text-gray-800 font-bold text-lg"> Update Task</h1>
        <span
          onClick={() => onClose(false)}
          className="px-5 py-1  text-sm bg-[#1066CF] text-white border-[1px] border-lightGray h-10 rounded-md shadow-sm"
        >
          {" "}
          close
        </span>
      </div>

      <div className="w-full mt-2 rounded-[10px] ">
        <QuillNoSSRWrapper
          modules={modules}
          formats={formats}
          theme="snow"
          value={formValues.taskDescription}
          onChange={handleQuillChange}
          placeholder="taskDescription"
          style={{
            height: "30vh",
            background: "white",
            marginBottom: 8,
            paddingBottom: 65,
          }}
          className="scrollbar-hide outline-none  bg-white"
        />
        {errors.taskDescription && (
          <span className="mt-1 error text-red-500 ">
            {errors.taskDescription}
          </span>
        )}

        <div className="space-y-3 pt-3">
          <div>
            <div className="font-main text-md font-semibold tracking-wide  text-gray-700 text-sm">
              Task Title
            </div>
            <input
              className="font-main tracking-wide w-80 py-1 px-3 border border-gray-200 rounded-lg shadow-sm  "
              type="text"
              name="taskTitle"
              value={formValues.taskTitle}
              onChange={handleChange}
            />
            {errors.taskTitle && (
              <div className="mt-1 error text-red-500 ">{errors.taskTitle}</div>
            )}
          </div>
        </div>
        <div className="space-y-3 pt-3">
          <div>
            <div className="font-main text-md font-semibold tracking-wide  text-gray-700 text-sm">
              Task Priority
            </div>

            <select
              className="font-main tracking-wide w-80 py-1 px-3 border border-gray-200 rounded-lg shadow-sm"
              name="taskPriority"
              value={formValues.taskPriority}
              onChange={handleChange}
            >
              <option value="HIGH">HIGH</option>
              <option value="MID">MID</option>
              <option value="LOW">LOW</option>
            </select>
            {errors.taskTitle && (
              <div className="mt-1 error text-red-500 ">{errors.taskTitle}</div>
            )}
          </div>
        </div>
        <div className="flex items-center justify-end">
          <button
            className="px-5 py-1  text-sm bg-[#1066CF] text-white border-[1px] border-lightGray h-10 rounded-md shadow-sm"
            onSubmit={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
    // <form onSubmit={handleSubmit}>
    //   <div className="flex justify-between mx-5 my-5">
    //     {" "}
    //     <h1 className="text-gray-800 font-semibold text-lg">
    //       {" "}
    //       Update task
    //     </h1>{" "}
    //     <div></div>
    //   </div>
    //   <div className="w-full mt-2 rounded-[10px]  mx-5 mr-4">
    //     <div className="pr-10">
    //       <QuillNoSSRWrapper
    //         modules={modules}
    //         formats={formats}
    //         theme="snow"
    //         value={formValues.taskDescription}
    //         onChange={handleQuillChange}
    //         placeholder="taskDescription"
    //         style={{
    //           height: "30vh",
    //           background: "white",
    //           marginBottom: 8,
    //           paddingBottom: 65,
    //         }}
    //         className="scrollbar-hide outline-none  bg-white"
    //       />
    //       {errors.taskDescription && (
    //         <span className="mt-1 error text-red-500 ">
    //           {errors.taskDescription}
    //         </span>
    //       )}
    //     </div>

    //     <div className="space-y-3 pt-3">
    //       <div>
    //         <div className="font-main text-md font-semibold tracking-wide  text-gray-700 text-sm">
    //           Task Title
    //         </div>
    //         <input
    //           className="font-main tracking-wide w-80 py-1 px-3 border border-gray-200 rounded-lg shadow-sm  "
    //           type="text"
    //           name="taskTitle"
    //           value={formValues.taskTitle}
    //           onChange={handleChange}
    //         />
    //         {errors.taskTitle && (
    //           <div className="mt-1 error text-red-500 ">{errors.taskTitle}</div>
    //         )}
    //       </div>
    //     </div>
    //     <div className="space-y-3 pt-3">
    //       <div>
    //         <div className="font-main text-md font-semibold tracking-wide  text-gray-700 text-sm">
    //           Task Priority
    //         </div>

    //         <select
    //           className="font-main tracking-wide w-80 py-1 px-3 border border-gray-200 rounded-lg shadow-sm"
    //           name="taskPriority"
    //           value={formValues.taskPriority}
    //           onChange={handleChange}
    //         >
    //           <option value="HIGH">HIGH</option>
    //           <option value="MID">MID</option>
    //           <option value="LOW">LOW</option>
    //         </select>
    //         {errors.taskTitle && (
    //           <div className="mt-1 error text-red-500 ">{errors.taskTitle}</div>
    //         )}
    //       </div>
    //     </div>
    //     <div className="flex items-center justify-start my-3">
    //       <button
    //         className="px-5 py-1  text-sm bg-[#1066CF] text-white border-[1px] border-lightGray h-10 rounded-md shadow-sm"
    //         onSubmit={handleSubmit}
    //       >
    //         Submit
    //       </button>
    //     </div>
    //   </div>
    // </form>
  );
}
