import { itemState } from "@/atoms/item";
import { modalItemState } from "@/atoms/modalItem";
import { offCanvasOpenState } from "@/atoms/offCanvasOpen";
import dynamic from "next/dynamic";
import React, { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useRecoilState, useRecoilValue } from "recoil";
import { MdUpload } from "react-icons/md";
import { MenuItem, Select } from "@mui/material";
import { nameTrigger } from "@/atoms/nameTrigger";
import { BiRightArrow } from "react-icons/bi";
import { baseUrl } from "@/config/APIConstants";
import axios from "axios";
import { useAuthentication } from "@/controllers/auth";
import { useRouter } from "next/router";

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

export default function SendInternalNotification({
  onDataStore,
  onClose,
}: any) {
  const recoilItem = useRecoilValue(itemState);

  const [data, setData] = useRecoilState(modalItemState);
  const [attachment, setAttachment] = useState(false);

  const [actionData, setActionData] = useRecoilState(nameTrigger);
  const { location, token }: any = useAuthentication();

  const [formValues, setFormValues] = useState<any>({
    actionName: actionData,
    fromName: "",
    fromEmail: "",
    redirectPage: "",
    title: "",
    type: "",
    usertype: "",
    template: "",
    email: "",
    notification: "",
    sms: "",
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

    if (!formValues.actionName.trim()) {
      validationErrors.actionName = "Action name is required";
    }

    if (!formValues.type.trim()) {
      validationErrors.type = "Type is required";
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
      fromName: "",
      fromEmail: "",
      redirectPage: "",
      title: "",
      type: "",
      usertype: "",
      template: "",
      email: "",
      notification: "",
      sms: "",
      message: "",
    });
    setErrors({});
    // onDataStore(formValues.actionName, formValues);

    onDataStore(formValues.actionName, recoilItem);
  };
  const [show, setShow] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });

  const [contactData, setContactData] = useState<any>([]);

  const [appointmentData, setAppointmentData] = useState<any>([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    axios
      .post(
        `${baseUrl}contacts/filter`,
        {
          locationID: location?.id,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(({ data }) => {
        console.log("all Contacts---------->", data);
        setContactData(data.contacts);
      })
      .catch((error: any) => {
        console.log(error);
      });

    axios
      .get(
        `${baseUrl}appointments/contact/8c5678b1-c7f4-4d77-8215-5f9f17740492`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response: any) => {
        setAppointmentData(response?.data?.appointments);
        // console.log(">>>>> response data ", response?.data?.appointments);
      });
  }, []);

  const [fullnamelist, setFullnamelist] = useState(false);
  const [emaillist, setEmaillist] = useState(false);
  const [phonelist, setPhonelist] = useState(false);
  // const [selected, setSelected] = useState("");
  const [appointmentlist, setAppointmentlist] = useState(false);
  const [showAppointmentTitle, setShowAppointmentTitle] = useState(false);
  const [showAuser, setShowAuser] = useState(false);

  function selectedtitle(title: any) {
    // console.log("first -->", title);

    setFormValues((prevValues: any) => ({
      ...prevValues,
      message: prevValues.message.replace("{{", `   ${title} `),
    }));
    setFullnamelist(false);
    setEmaillist(false);
    setPhonelist(false);
    setShowContact(false);
    setShowAppointmentTitle(false);
    setShowAuser(false);
    setAppointmentlist(false);
  }

  const [updateMessage, setUpdateMessage] = useState("");

  return (
    <div>
      <div className="h-[75vh] 2xl:h-[80vh] overflow-y-scroll scrollbar-hide  ">
        <form onSubmit={handleSubmit} className="flex flex-wrap px-2  ">
          <div className="w-full mt-4">
            <label className="w-full mb-2 text-sm text-gray-600 font-semibold fontStrawFord">
              Action Name
            </label>
            <input
              type="text"
              name="actionName"
              value={formValues.actionName}
              onChange={handleChange}
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3  py-3.5  rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            />
            {errors.actionName && (
              <span className="mb-5 error text-red-500 ">
                {errors.actionName}
              </span>
            )}
          </div>

          <div className="w-full mt-4">
            <label className="w-full mb-2 text-sm text-gray-600 font-semibold fontStrawFord">
              Type of Notification
            </label>
            <Select
              name="type"
              onChange={handleChange}
              value={formValues.type}
              className="border-none outline-none rounded-md mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark  text-space focus:outline-none focus:border-none text-black"
            >
              <MenuItem value="">Select a type </MenuItem>
              <MenuItem value="email">Email</MenuItem>
              <MenuItem value="notification">Notification</MenuItem>
              <MenuItem value="sms">SMS</MenuItem>
            </Select>

            {errors.type && (
              <span className="mb-5 error text-red-500">{errors.type}</span>
            )}
          </div>

          {/* When user select Email */}

          {formValues.type == "email" && (
            <div className="w-full ">
              <div className="w-full mt-4">
                <label className="w-full mb-2 text-sm text-gray-600 font-semibold fontStrawFord">
                  From Name
                </label>
                <input
                  type="text"
                  name="fromName"
                  value={formValues.fromName}
                  onChange={handleChange}
                  className="px-3 rounded-md mt-2 mb-2 py-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300 text-black"
                />
              </div>

              <div className="w-full mt-4">
                <label className="w-full mb-2 text-sm text-gray-600 font-semibold fontStrawFord">
                  From Email
                </label>
                <input
                  type="text"
                  name="fromEmail"
                  value={formValues.fromEmail}
                  onChange={handleChange}
                  className="px-3 rounded-md mt-2 mb-2 py-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300 text-black"
                />
              </div>

              <div className="mt-4">
                <label className="w-full mb-2 text-sm text-gray-600 font-semibold fontStrawFord">
                  Template
                </label>
                <Select
                  name="template"
                  onChange={handleChange}
                  value={formValues.template}
                  className="border-none outline-none rounded-md mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark  text-space focus:outline-none focus:border-none text-black"
                >
                  <MenuItem value="Select User Type">Select </MenuItem>
                  <MenuItem value="template1">Template1</MenuItem>
                  <MenuItem value="template2">Template2</MenuItem>
                  <MenuItem value="template3">Template3</MenuItem>
                </Select>
              </div>

              <div
                className="w-full mt-4  relative"
                // onClick={(e) => {
                //   logMousePosition(e); // Log the mouse position >
                // }}
              >
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
                    height: 200,
                    marginBottom: 20,
                    overflowY: "scroll",
                    resize: "vertical",
                  }}
                  className="scrollbar-hide"
                />

                {
                  // suggestionlist start here
                  <div className={` absolute   -top-[0.1rem] left-0 bg-white `}>
                    {formValues.message.includes("{{") && (
                      <ul className="list-disc relative  border-2 border-gray-200   w-32">
                        <li
                          className=" flex items-center justify-between w-full text-sm  gap-2  hover:bg-gray-200 p-1 px-2 "
                          onClick={() => {
                            setShowContact(!showContact);
                            setShowUser(false);
                            setAppointmentlist(false);
                            setShowAppointmentTitle(false);
                            setShowAuser(false);
                          }}
                        >
                          Contact <span className="font-bold"> {`>`} </span>
                        </li>
                        {showContact && (
                          <ul
                            className={` text-md text-gray-[#a8a8a8] text-sm list-none  absolute left-32  bg-white border-[1px]     rounded-sm  w-40 bottom-[50%]`}
                          >
                            <li
                              onClick={() => {
                                setFullnamelist(!fullnamelist);
                                setEmaillist(false);
                                setPhonelist(false);
                              }}
                              className=" flex items-center justify-between w-full text-sm  gap-2  hover:bg-gray-200 p-1 px-2 "
                            >
                              FullName{" "}
                              <span className="font-bold"> {`>`} </span>
                            </li>
                            <li
                              onClick={() => {
                                setEmaillist(!emaillist);
                                setPhonelist(false);
                                setFullnamelist(false);
                              }}
                              className=" flex items-center justify-between w-full text-sm  gap-2  hover:bg-gray-200 p-1 px-2 "
                            >
                              Email <span className="font-bold"> {`>`} </span>
                            </li>
                            <li
                              onClick={() => {
                                setPhonelist(!phonelist);
                                setEmaillist(false);
                                setFullnamelist(false);
                              }}
                              className=" flex items-center justify-between w-full text-sm  gap-2  hover:bg-gray-200 p-1 px-2 "
                            >
                              Phone <span className="font-bold"> {`>`} </span>
                            </li>
                            {/* <li    onClick={() => setownerlist(!ownerlist)} className=" flex items-center justify-between w-full text-sm  gap-2  hover:bg-gray-200 p-1 px-2 ">
                              owner
                            </li> */}

                            {fullnamelist && (
                              <div className="absolute left-[10rem] top-0  bg-white border-[1px] w-fil">
                                {contactData.map((item: any, i: number) => (
                                  <li
                                    onClick={() => {
                                      selectedtitle(item.fullName);
                                    }}
                                    className=" flex items-center justify-between w-full text-sm  gap-2  hover:bg-gray-200 p-1 px-2"
                                    key={i}
                                  >
                                    {item.fullName}
                                  </li>
                                ))}
                              </div>
                            )}
                            {emaillist && (
                              <div className="absolute left-[10rem] top-0  bg-white border-[1px] w-fit">
                                {contactData.map((item: any, i: number) => (
                                  <li
                                    onClick={() => {
                                      selectedtitle(item.emailAddress);
                                    }}
                                    className=" flex items-center justify-between w-full text-sm  gap-2  hover:bg-gray-200 p-1 px-2"
                                    key={i}
                                  >
                                    {item.emailAddress}
                                  </li>
                                ))}
                              </div>
                            )}
                            {phonelist && (
                              <div className="absolute left-[10rem] top-0  bg-white border-[1px] w-fit">
                                {contactData.map((item: any, i: number) => (
                                  <li
                                    onClick={() => {
                                      selectedtitle(item.phoneNumber);
                                    }}
                                    className=" flex items-center justify-between w-full text-sm  gap-2  hover:bg-gray-200 p-1 px-2"
                                    key={i}
                                  >
                                    {item.phoneNumber}
                                  </li>
                                ))}
                              </div>
                            )}
                          </ul>
                        )}

                        <li
                          onClick={() => {
                            setAppointmentlist(!appointmentlist);
                            setShowContact(false);
                            setShowUser(false);
                            setFullnamelist(false);
                            setEmaillist(false);
                            setPhonelist(false);
                          }}
                          className=" flex items-center justify-between w-full text-sm   hover:bg-gray-200 p-1  px-2"
                        >
                          Appointment <span className="font-bold"> {`>`} </span>
                        </li>
                        {appointmentlist && (
                          <div className="absolute left-[124px] -top-0  w-44 bg-white border-[1px]">
                            <ul>
                              <li
                                className=" flex items-center justify-between  text-sm  gap-2  hover:bg-gray-200 p-1 px-2 "
                                onClick={() => {
                                  setShowAppointmentTitle(
                                    !showAppointmentTitle
                                  );
                                  setShowAuser(false);
                                }}
                              >
                                Appointment Title{" "}
                                <span className="font-bold"> {`>`} </span>
                              </li>
                              <li
                                className=" flex items-center justify-between w-full text-sm  gap-2  hover:bg-gray-200 p-1 px-2 "
                                onClick={() => {
                                  setShowAuser(!showAuser);
                                  setShowAppointmentTitle(false);
                                }}
                              >
                                Appointment Status{" "}
                                <span className="font-bold"> {`>`} </span>
                              </li>
                            </ul>
                          </div>
                        )}
                      </ul>
                    )}
                  </div>
                }

                {showAppointmentTitle && (
                  <div className="absolute left-[19rem] top-0  bg-white border-[1px] w-20">
                    {appointmentData.map((item: any, i: number) => (
                      <li
                        onClick={() => selectedtitle(item.appointmentTitle)}
                        className=" flex items-center justify-between w-full text-sm  gap-2  hover:bg-gray-200 p-1 px-2"
                        key={i}
                      >
                        {item.appointmentTitle}
                      </li>
                    ))}
                  </div>
                )}
                {showAuser && (
                  <div className="absolute left-[19rem] top-8  bg-white border-[1px] w-20">
                    {appointmentData.map((item: any, i: number) => (
                      <li
                        onClick={() => selectedtitle(item.appointmentStatus)}
                        className=" flex items-center justify-between w-full text-sm  gap-2  hover:bg-gray-200 p-1 px-2"
                        key={i}
                      >
                        {item.appointmentStatus}
                      </li>
                    ))}
                  </div>
                )}
                {/* suggestion list end  */}
              </div>

              {attachment == false ? (
                <button
                  onClick={() => {
                    setAttachment(true);
                  }}
                  className="flex items-center justify-between w-28 text-sm  justify-center bg-[#ed754b] text-white px-6 py-1 w-2/4 rounded font-bold mt-3 hover:bg-[#ed825c]"
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
                  className="px-3 rounded-md mt-2 mb-2 py-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300 text-black"
                />
              )}

              <div className="w-full mt-1.5">
                <label className="w-full  text-base text-dark font-semibold uppercase block">
                  Test Email
                </label>
                <div className="flex justify-between">
                  <input
                    type="number"
                    className="px-3 rounded-md mt-2 mb-2 py-3 text-sm font-medium bg-transparent focus:bg-transparent w-2/3 placeholder-dark border-[1px] border-gray-400 text-space focus:outline-none focus:border-gray-300 text-black"
                  />

                  <button className="bg-transparent text-blue-400   border-2 border-blue-400 px-4 py-2 rounded my-2 hover:bg-blue-100">
                    Send Test Mail
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* When user select notification */}

          {formValues?.type == "notification" && (
            <div className="w-full ">
              <div className="w-full mt-4">
                <label className="w-full mb-2 text-sm text-gray-600 font-semibold fontStrawFord">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formValues.title}
                  onChange={handleChange}
                  className="px-3 rounded-md mt-2 mb-2 py-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300 text-black"
                />
              </div>

              <div className="w-full mt-4">
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
                    height: 200,
                    marginBottom: 20,
                    overflowY: "scroll",
                    resize: "vertical",
                  }}
                  className="scrollbar-hide"
                />
              </div>

              <div className="mt-4">
                <label className="w-full mb-2 text-sm text-gray-600 font-semibold fontStrawFord">
                  Redirect Page
                </label>

                <Select
                  name="redirectPage"
                  onChange={handleChange}
                  value={formValues.redirectPage}
                  className="border-none outline-none rounded-md mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark  text-space focus:outline-none focus:border-none text-black"
                >
                  <MenuItem value="Select User Type">Select </MenuItem>
                  <MenuItem value="page1">Page1</MenuItem>
                  <MenuItem value="page2">Page2</MenuItem>
                  <MenuItem value="page3">Page3</MenuItem>
                </Select>
              </div>

              <div className="w-full mt-4">
                <label className="w-full mb-2 text-sm text-gray-600 font-semibold fontStrawFord">
                  To user type
                </label>
                <Select
                  name="usertype"
                  onChange={handleChange}
                  value={formValues.usertype}
                  className="border-none outline-none rounded-md mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark  text-space focus:outline-none focus:border-none text-black"
                >
                  <MenuItem value="Select User Type">
                    Select User Type{" "}
                  </MenuItem>
                  <MenuItem value="user1">User1</MenuItem>
                  <MenuItem value="user2">User2</MenuItem>
                  <MenuItem value="user3">User3</MenuItem>
                </Select>
              </div>
            </div>
          )}

          {/* If user select sms */}

          {formValues?.type == "sms" && (
            <div className="w-full mt-4">
              <label className="w-full mb-2 text-sm text-gray-600 font-semibold fontStrawFord">
                To user type
              </label>
              <Select
                name="usertype"
                onChange={handleChange}
                value={formValues.usertype}
                className="border-none outline-none rounded-md mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark  text-space focus:outline-none focus:border-none text-black"
              >
                <MenuItem value="Select User Type">Select User Type </MenuItem>
                <MenuItem value="user1">User1</MenuItem>
                <MenuItem value="user2">User2</MenuItem>
                <MenuItem value="user3">User3</MenuItem>
              </Select>

              <div className="mt-4">
                <label className="w-full mb-2 text-sm text-gray-600 font-semibold fontStrawFord">
                  Template
                </label>
                <Select
                  name="template"
                  onChange={handleChange}
                  value={formValues.template}
                  className="border-none outline-none rounded-md mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark  text-space focus:outline-none focus:border-none text-black"
                >
                  <MenuItem value="Select User Type">Select </MenuItem>
                  <MenuItem value="template1">Template1</MenuItem>
                  <MenuItem value="template2">Template2</MenuItem>
                  <MenuItem value="template3">Template3</MenuItem>
                </Select>
              </div>

              <div className="w-full mt-4">
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
                    height: 200,
                    marginBottom: 20,
                    overflowY: "scroll",
                    resize: "vertical",
                  }}
                  className="scrollbar-hide"
                />
              </div>

              <div className="w-full mt-4">
                {attachment == false ? (
                  <button
                    onClick={() => {
                      setAttachment(true);
                    }}
                    className="flex items-center  text-sm  justify-center bg-[#ed754b] text-white px-6 py-1 w-2/4 rounded font-bold mt-3 hover:bg-[#ed825c]"
                  >
                    {" "}
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
                    className="px-3 rounded-md mt-2 mb-2 py-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300 text-black"
                  />
                )}
              </div>

              <div className="w-full mt-1.5">
                <label className="w-full  text-base text-dark font-semibold uppercase block">
                  Test Phone Number
                </label>
                <div className="flex justify-between">
                  <input
                    type="number"
                    className="px-3 rounded-md mt-2 mb-2 py-3 text-sm font-medium bg-transparent focus:bg-transparent w-2/3 placeholder-dark border-[1px] border-gray-400 text-space focus:outline-none focus:border-gray-300 text-black"
                  />

                  <button className="bg-transparent text-blue-400   border-2 border-blue-400 px-4 py-2 rounded my-2 hover:bg-blue-100">
                    Send Test SMS
                  </button>
                </div>

                <p className="text-[#e21515]">
                  * Please add country codes along with the numbers.
                </p>
              </div>
            </div>
          )}
        </form>
      </div>
      <div className="flex justify-end items-end  py-2 px-4">
        <button
          onClick={onClose}
          className="border-2 mr-5 fontStrawFord border-OrangeBuilder rounded-md flex justify-center items-center justify-between w-28 text-sm  px-8 py-1.5 text-OrangeBuilder"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          type="submit"
          className="bg-OrangeBuilder fontStrawFord rounded-md flex justify-center items-center justify-between w-28 text-sm  px-8 py-2 text-white"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
