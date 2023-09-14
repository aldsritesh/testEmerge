import React, { useEffect } from "react";
import { ActivityCard, ActivityCard2 } from "./ActivityCard";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useRecoilState } from "recoil";
import { nameTrigger } from "@/atoms/nameTrigger";
import dynamic from "next/dynamic";
import axios from "axios";
import { baseUrl, contactID, userID } from "@/config/APIConstants";
import { Select } from "antd";
import moment from "moment";
import { useAuthentication } from "@/controllers/auth";
const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
});

const tabs = ["Activity", "Notes", "Conversation", "Task", "Appointments"];

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

export default function TaskTab() {
  const date = new Date();

  const formattedDate = date.toISOString(); // "YYYY-MM-DDTHH:mm:ss.sssZ"

  const formattedDateWithoutMilliseconds = formattedDate.substring(0, 19) + "Z";

  const [errors, setErrors] = useState<any>({});
  const { location, token }: any = useAuthentication();
  const [open, SetOpen] = useState(false);
  const [formValues, setFormValues] = useState<any>({
    taskDescription: "",
    taskTitle: "",
    taskPriority: "",
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
        .post(
          `${baseUrl}tasks`,
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

  // console.log("arrrr", arr);
  return (
    <div className={` lg:h-[100vh] pb-[40%]  overflow-y-scroll scrollbar-hide`}>
      <div className=" flex items-center justify-between pb-4 pt-2">
        <details className="dropdown w-[18%] mr-2">
          <summary className="mt-3 lg:mt-0   cursor-pointer items-between px-2 py-1 bg-white border-[1px] border-lightGray h-10 rounded-md shadow-sm flex justify-center items-center">
            <div className="flex justify-center items-center">
              <p className="text-sm text-gray-500">All Users</p>
              <ChevronDownIcon className="h-4 w-4 text-FontGray cursor-pointer hover:text-secondary duration-300" />
            </div>
          </summary>
          <ul className="p-2 shadow   dropdown-content z-[1] bg-base-100 rounded-box w-52 calendar-dropdown-content   overflow-y-auto">
            {/* <li>
            <a>{calendarData.name}</a>
      </li> */}
            <div>
              <li className="py-2">
                <a>Name</a>
              </li>
              <li className="py-2">
                <a>Name</a>
              </li>
            </div>
          </ul>
        </details>
        <button
          className="px-2 py-1 text-sm bg-[#1066CF] text-white border-[1px] border-lightGray h-10 rounded-md shadow-sm"
          onClick={() => SetOpen(true)}
        >
          Create Task
        </button>
      </div>
      {open ? (
        <div className=" border rounded-md  mb-5  bg-white  shadow-md px-4 py-4">
          <span className="font-main text-black text-md font-semibold  tracking-wide ">
            Add New Task
          </span>
          <form onSubmit={handleSubmit}>
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
                    <div className="mt-1 error text-red-500 ">
                      {errors.taskTitle}
                    </div>
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
                    <div className="mt-1 error text-red-500 ">
                      {errors.taskTitle}
                    </div>
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
        </div>
      ) : (
        ""
      )}

      <div className="overflow-y-scroll scrollbar-hide h-[65vh]">
        <span className="font-main text-black text-md font-semibold tracking-wide ">
          Upcoming Task
        </span>
        <div className="overflow-y-scroll scrollbar-hide mb-3 ">
          <div className=" mt-2  ">
            <div className="mb-4 ">
              {arr.map((item: any, i: any) => (
                <div key={i}>
                  <ActivityCard
                    dueDate={item.dueDate}
                    taskTitle={item.taskTitle}
                    taskDescription={item.taskDescription}
                    name="abc"
                    taskPriority={item.taskPriority}
                    updatedOn={item.updatedOn}
                    id={item.id}
                  />
                </div>
              ))}
              {/* <ActivityCard /> */}
              <ActivityCard2 />
            </div>
          </div>
        </div>

        <div>
          <span className="font-main text-black text-md font-semibold px-1 tracking-wide ">
            Task History
          </span>
          <div className="px-1 text-gray-500 text-sm"> 11 July 2023 </div>
          <div className="overflow-y-scroll scrollbar-hide mb-3 ">
            <div className=" mt-2  ">
              <div className="mb-4 space-y-4">
                <ActivityCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
