// import React from "react";
// import { ActivityCard4 } from "./ActivityCard";
// import MeetingHistoryCard from "./MeetingHistoryCard";
// import { useState } from "react";
// import "react-quill/dist/quill.snow.css";
// import { ChevronDownIcon } from "@heroicons/react/24/solid";
// import dynamic from "next/dynamic";
// import ModalDerived from "../Modal";
// import { AiOutlineClose, AiOutlineFileAdd } from "react-icons/ai";
// import { InputLabel, MenuItem, Select } from "@mui/material";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import moment from "moment";

// const QuillNoSSRWrapper = dynamic(import("react-quill"), {
//   ssr: false,
// });

// const tabs = ["Activity", "Notes", "Conversation", "Task", "Appointments"];

// const modules = {
//   toolbar: [
//     [{ header: "1" }, { header: "2" }],
//     [{ font: [] }],
//     [{ size: [] }],
//     ["bold", "italic", "underline", "strike", "blockquote"],
//     [
//       { list: "ordered" },
//       { list: "bullet" },
//       { indent: "-1" },
//       { indent: "+1" },
//     ],
//     ["link", "image", "video"],
//     [{ header: [1, 2, 3, 4, 5, 6, false] }],
//     ["clean"],
//   ],
//   clipboard: {
//     // toggle to add extra line breaks when pasting HTML:
//     matchVisual: false,
//   },
// };

// const formats = [
//   "header",
//   "font",
//   "size",
//   "bold",
//   "italic",
//   "underline",
//   "strike",
//   "blockquote",
//   "list",
//   "bullet",
//   "indent",
//   "link",
//   "image",
//   "video",
// ];

// export default function AppointmentTab() {
//   const [errors, setErrors] = useState<any>({});
//   const [open, SetOpen] = useState(false);
//   const [openFieldModel, setOpenFieldModel] = useState<any>(false);
//   const [selectedDate, setSelectedDate] = useState<any>(new Date());
//   const [filterDates, setFilterDates] = useState<any>([]);
//   const [formValues, setFormValues] = useState<any>({
//     message: "",
//     appointmentTitle: "",
//   });
//   const handleQuillChange = (value: any) => {
//     setFormValues((prevValues: any) => ({
//       ...prevValues,
//       message: value,
//     }));
//   };
//   const handleChange = (e: any) => {
//     const { name, value } = e.target;
//     setFormValues((prevValues: any) => ({
//       ...prevValues,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e: any) => {
//     e.preventDefault();

//     const validationErrors: any = {};

//     if (!formValues.appointmentTitle) {
//       validationErrors.appointmentTitle = "Required";
//     }
//     if (!formValues.message) {
//       validationErrors.message = "Required";
//     }

//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     setFormValues({
//       message: "",
//       appointmentTitle: "",
//     });

//     setErrors({});
//     SetOpen(false);
//   };

//   return (
//     <div className={` lg:h-[100vh] pb-[40%]  overflow-y-scroll scrollbar-hide`}>
//       <div className=" flex items-center justify-between pb-4 pt-2">
//         <details className="dropdown w-[18%] mr-2">
//           <summary className="mt-3 lg:mt-0   cursor-pointer items-between px-2 py-1 bg-white border-[1px] border-lightGray h-10 rounded-md shadow-sm flex justify-center items-center">
//             <div className="flex justify-center items-center">
//               <p className="text-sm text-gray-500">All Users</p>
//               <ChevronDownIcon className="h-4 w-4 text-FontGray cursor-pointer hover:text-secondary duration-300" />
//             </div>
//           </summary>
//           <ul className="p-2 shadow   dropdown-content z-[1] bg-base-100 rounded-box w-52 calendar-dropdown-content   overflow-y-auto">
//             {/* <li>
//             <a>{calendarData.name}</a>
//       </li> */}
//             <div>
//               <li className="py-2">
//                 <a>Name</a>
//               </li>
//               <li className="py-2">
//                 <a>Name</a>
//               </li>
//             </div>
//           </ul>
//         </details>
//         <button
//           className="px-2 py-1 text-sm bg-[#1066CF] text-white border-[1px] border-lightGray h-10 rounded-md shadow-sm"
//           // onClick={() => SetOpen(true)}
//           onClick={() => setOpenFieldModel(true)}
//         >
//           Create Appointment
//         </button>
//       </div>

//       {/* {open ? (
//         <div className=" border rounded-md  mb-5  bg-white  shadow-md px-4 py-4">
//           <span className="font-main text-black text-md font-semibold  tracking-wide ">
//             Add New Appointment
//           </span>
//           <form onSubmit={handleSubmit}>
//             <div className="w-full mt-2 rounded-[10px] ">
//               <QuillNoSSRWrapper
//                 modules={modules}
//                 formats={formats}
//                 theme="snow"
//                 value={formValues.message}
//                 onChange={handleQuillChange}
//                 placeholder="message"
//                 style={{
//                   height: "30vh",
//                   background: "white",
//                   marginBottom: 8,
//                   paddingBottom: 65,
//                 }}
//                 className="scrollbar-hide outline-none  bg-white"
//               />
//               {errors.message && (
//                 <span className="mt-1 error text-red-500 ">
//                   {errors.message}
//                 </span>
//               )}

//               <div className="space-y-3 pt-3">
//                 <div>
//                   <div className="font-main text-md font-semibold tracking-wide  text-gray-700 text-sm">
//                     Appointment Title
//                   </div>
//                   <input
//                     className="font-main tracking-wide w-80 py-1 px-3 border border-gray-200 rounded-lg shadow-sm  "
//                     type="text"
//                     name="appointmentTitle"
//                     value={formValues.appointmentTitle}
//                     onChange={handleChange}
//                   />
//                   {errors.appointmentTitle && (
//                     <div className="mt-1 error text-red-500 ">
//                       {errors.appointmentTitle}
//                     </div>
//                   )}
//                 </div>
//               </div>
//               <div className="flex items-center justify-end">
//                 <button
//                   className="px-5 py-1  text-sm bg-[#1066CF] text-white border-[1px] border-lightGray h-10 rounded-md shadow-sm"
//                   onSubmit={handleSubmit}
//                 >
//                   Submit
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       ) : (
//         ""
//       )} */}

//       <ModalDerived
//         visibility={openFieldModel}
//         onClose={() => {
//           setOpenFieldModel(false);
//         }}
//       >
//         <div className=" bg-white rounded-lg overflow-y-auto w-full scrollbar-hide z-[9999] ">
//           <div className=" pt-5 pb-3 w-screen h-[80vh] lg:h-[110vh] xl:h-[72vh] 2xl:h-[44vh] md:w-[110vh]">
//             <div className="border-b-[1px] pb-4 px-5">
//               <div className="h-[8vh] flex justify-between items-start  ">
//                 <div>
//                   <p className="text-gray-800 font-medium md:text-lg text-center">
//                     Create Appointment
//                   </p>
//                 </div>

//                 <button
//                   onClick={() => {
//                     setOpenFieldModel(false);
//                   }}
//                 >
//                   <AiOutlineClose className="text-gray-800 h-6 w-6" />
//                 </button>
//               </div>
//             </div>

//             <div>
//               <div className="mx-4 flex flex-wrap">
//                 <div className="border-none xl:w-[50%] mt-3">
//                   <InputLabel id="demo-simple-select-label my-3">
//                     Select Appointment Type
//                   </InputLabel>
//                   <Select
//                     labelId="demo-simple-select-label"
//                     id="demo-simple-select"
//                     value={"age"}
//                     label="Age"
//                     // onChange={handleChange}
//                     className="w-full"
//                   >
//                     <MenuItem value={10}>Select Appointment Type</MenuItem>
//                     <MenuItem value={20}>Appointment Type A</MenuItem>
//                     <MenuItem value={30}>Appointment Type B</MenuItem>
//                   </Select>
//                 </div>
//                 <div className="border-none xl:w-[50%] mt-3">
//                   <div className="ml-2">
//                     <InputLabel id="demo-simple-select-label my-3">
//                       Select Provider
//                     </InputLabel>
//                     <Select
//                       labelId="demo-simple-select-label"
//                       id="demo-simple-select"
//                       value={"age"}
//                       label="Age"
//                       onChange={handleChange}
//                       className="w-full"
//                     >
//                       <MenuItem value={10}>Ten</MenuItem>
//                       <MenuItem value={20}>Twenty</MenuItem>
//                       <MenuItem value={30}>Thirty</MenuItem>
//                     </Select>
//                   </div>
//                 </div>

//                 <div className="border-none xl:w-[50%] mt-3">
//                   <InputLabel id="demo-simple-select-label my-3">
//                     Select Rooms
//                   </InputLabel>
//                   <Select
//                     labelId="demo-simple-select-label"
//                     id="demo-simple-select"
//                     value={"age"}
//                     label="Age"
//                     onChange={handleChange}
//                     className="w-full"
//                   >
//                     <MenuItem value={10}>Ten</MenuItem>
//                     <MenuItem value={20}>Twenty</MenuItem>
//                     <MenuItem value={30}>Thirty</MenuItem>
//                   </Select>
//                 </div>

//                 <div className="border-none xl:w-[50%] mt-3">
//                   <div className="ml-2">
//                     <InputLabel id="demo-simple-select-label my-3">
//                       Add Patient
//                     </InputLabel>
//                     <Select
//                       labelId="demo-simple-select-label"
//                       id="demo-simple-select"
//                       value={"age"}
//                       label="Age"
//                       // onChange={handleChange}
//                       className="w-full"
//                     >
//                       <MenuItem value={10}>Ten</MenuItem>
//                       <MenuItem value={20}>Twenty</MenuItem>
//                       <MenuItem value={30}>Thirty</MenuItem>
//                     </Select>
//                   </div>
//                 </div>
//                 <div className="mt-3 xl:w-[50%]">
//                   <DatePicker
//                     selected={selectedDate}
//                     onChange={(e: any) => {
//                       setSelectedDate(e);
//                     }}
//                     filterDate={(date: any) => {
//                       return filterDates.includes(
//                         moment(date).format("YYYY-MM-DD")
//                       );
//                     }}
//                     placeholderText={selectedDate}
//                     minDate={new Date()}
//                   />
//                 </div>
//               </div>
//               <div className="absolute bottom-4 right-2 mt-10 flex justify-end">
//                 <button
//                   onClick={() => {
//                     setOpenFieldModel(false);
//                   }}
//                   className="mr-3 px-3 py-2 text-orange-500"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={() => {
//                     setOpenFieldModel(false);
//                   }}
//                   className="px-4 py-1 bg-orange-500 text-white rounded-md"
//                 >
//                   Save
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </ModalDerived>

//       <div className="overflow-y-scroll scrollbar-hide h-[65vh]">
//         <span className="font-main text-black text-md font-semibold tracking-wide ">
//           Upcoming Appointment
//         </span>
//         <div className="overflow-y-scroll scrollbar-hide mb-3 ">
//           <div className=" mt-2  ">
//             <div className="mb-4 ">
//               <ActivityCard4 />
//             </div>
//           </div>
//         </div>

//         <div>
//           <span className="font-main text-black text-md font-semibold px-1 tracking-wide ">
//             Apointment History
//           </span>
//           <div className="px-1 text-gray-500 text-sm"> 11 July 2023 </div>
//           <div className="overflow-y-scroll scrollbar-hide mb-3 ">
//             <div className=" mt-2  ">
//               <div className="mb-4 space-y-4">
//                 <MeetingHistoryCard />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { MouseEventHandler } from "react";
import { ActivityCard4 } from "./ActivityCard";
import MeetingHistoryCard from "./MeetingHistoryCard";
import { useState, useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import {
  ChevronDownIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import dynamic from "next/dynamic";
import ModalDerived from "../Modal";
import { AiOutlineClose, AiOutlineFileAdd } from "react-icons/ai";
import { InputLabel, MenuItem, Select } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import ComboBox from "../controls/ComboBox";
import axios from "axios";
import { baseUrl, userID } from "@/config/APIConstants";
import { AuthorizationErrors } from "@twilio/voice-sdk/es5/twilio/errors";
import AppointmentCard from "./AppointmentCard";
import { any } from "prop-types";
import { useCallback } from "react";
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

// interface IAddItemProps {
//   calendar: any;
//   visibility: boolean;
//   onClose: MouseEventHandler;
//   onSave: MouseEventHandler;
//   eventArg: any;
//   Allproviders: any;
//   AllRooms: any;
// }

export default function AppointmentTab({
  calendar,
  visibility,
  onClose,
  eventArg,
  onSave,
  Allproviders,
  AllRooms,
}: any) {
  const [errors, setErrors] = useState<any>({});
  const [open, SetOpen] = useState(false);
  const [openFieldModel, setOpenFieldModel] = useState<any>(false);
  const [selectedDate, setSelectedDate] = useState<any>(new Date());
  const [filterDates, setFilterDates] = useState<any>([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);

  const handleTimeChange = (time: any) => {
    setSelectedTime(time);
  };

  const handleBookSlot = () => {
    if (selectedTime) {
      setAvailableSlots([...availableSlots, selectedTime]);
      setSelectedTime(null);
    }
  };
  const [formValues, setFormValues] = useState<any>({
    message: "",
    appointmentTitle: "",
    appointmentType: "",
    provider: "",
    rooms: "",
    AddPatient: "",
    slot: "",
  });
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

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log("hello2", formValues);
    const validationErrors: any = {};

    if (!formValues.appointmentTitle) {
      validationErrors.appointmentTitle = "Required";
    }
    if (!formValues.message) {
      validationErrors.message = "Required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setFormValues({
      message: "",
      appointmentTitle: "",
    });

    setErrors({});
    SetOpen(false);
  };

  const patients = [
    {
      name: "Patient A",
      id: 1,
    },
    {
      name: "Patient B",
      id: 1,
    },
    {
      name: "Patient C",
      id: 1,
    },
    {
      name: "Patient D",
      id: 1,
    },
    {
      name: "Patient E",
      id: 1,
    },
    {
      name: "Patient F",
      id: 1,
    },
    {
      name: "Patient G",
      id: 1,
    },
    {
      name: "Patient H",
      id: 1,
    },
  ];

  const [selectAppointmentType, setSelectAppointmentType] = useState<any>(null);
  const [appointmentTypeComboBoxVisible, setAppointmentTypeComboBoxVisible] =
    useState(false);
  const [isProviderComboBoxVisible, setIsProviderComboBoxVisible] =
    useState(false);
  const [selectedProvider, setSelectedProvider] = useState<any>(null);
  const [isDoctorComboBoxVisible, setIsDoctorComboBoxVisible] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);
  const [isPatientComboBoxVisible, setIsPatientComboBoxVisible] =
    useState(false);

  const [selectedPatient, setSelectedPatient] = useState<any>(null);
  const [isDateTimeComboBoxVisible, setIsDateTimeComboBoxVisible] =
    useState(false);
  const [dateTime, setDateTime] = useState<any>({
    date: new Date(),
    time: "",
  });

  const [appointmentData, setAppointmentData] = useState<any>([]);
  const [fullName, setFullName] = useState<any>("");
  const { location, token }: any = useAuthentication();

  useEffect(() => {
    axios
      .get(
        `${baseUrl}appointments/contact/8c5678b1-c7f4-4d77-8215-5f9f17740492`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response: any) => {
        setAppointmentData(response?.data?.appointments);
        console.log(response?.data?.appointments);
      });

    axios
      .get(`${baseUrl}users/${userID}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response: any) => {
        setFullName(response?.data?.user?.fullName);
      });

    axios
      .get(`${baseUrl}users/${userID}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response: any) => {
        setFullName(response?.data?.user?.fullName);
      });
  }, []);

  // console.log("dtaaaa", appointmentData);

  return (
    <div
      className={` lg:h-[100vh] pb-[40%]  overflow-y-scroll scrollbar-hide `}
    >
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
          // onClick={() => SetOpen(true)}
          onClick={() => setOpenFieldModel(true)}
        >
          Create Appointments
        </button>
      </div>

      <ModalDerived
        visibility={openFieldModel}
        onClose={() => {
          setOpenFieldModel(false);
        }}
      >
        {/* new design */}
        <div className="overflow-y-scroll scrollbar-hide    py-5 ">
          {/* <div className="flex justify-between py-3 px-5 sticky mb-6 ">
            <h3 className="font-semibold pb-3 text-center">Create Appointments</h3>
            <button
              className=" h-8 w-8 pb-3 "
              onClick={() => setOpenFieldModel(!openFieldModel)}
            >
              <XMarkIcon className="text-dark h-5 w-5" />
            </button>
          </div>
          <hr /> */}
          {/* <div className="mb-4 p-12 pt-6">
            <div className="mb-4">
              <h3 className="font-400">Select appointment Type</h3>
              <select name="" id="" title=" " className="w-full mt-1 rounded  border p-1">
              <option value="" className="w-100"></option>
            </select>
            </div>
            <div className="mb-1">
              <h3 className="font-400">Select appointment type</h3>
              <select name="" id="" title=" " className="w-full mt-1 rounded  border p-1">
              <option value="" className="w-100"></option>
            </select>
            </div>
            <div className="mb-1">
              <h3 className="font-400">Select appointment type</h3>
              <select name="" id="" title=" " className="w-full mt-1 rounded  border p-1">
              <option value="" className="w-100"></option>
            </select>
            </div>
            <div className="mb-1">
              <h3 className="font-400">Select appointment type</h3>
              <select name="" id="" title=" " className="w-full mt-1 rounded  border p-1">
              <option value="" className="w-100"></option>
            </select>
            </div>
          </div> */}

          {/* <div className="flex   items-center  w-[800px] px-14">
            <ol className="relative text-gray-500  w-full">
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-green-400 rounded-full -left-4 ring-4 ring-green-500 text-white font-bold">
                  1
                </span>
                <div className="bg-white shadow ring-1 ring-gray-200 rounded px-2 py-2 ml-2">
                  <div className="flex justify-between">
                    <h3 className="font-semibold text-sm text-black">
                      Appointment Type
                    </h3>
                    <button className="text-sm font-semibold text-newBlue">
                      EDIT
                    </button>
                  </div>

                  <div className="bg-white   relative">
                    <div
                      className="flex items-center mt-3 justify-center ring-2 ring-gray-100 p-2 cursor-pointer"
                      onClick={() =>
                        setAppointmentTypeComboBoxVisible(
                          !appointmentTypeComboBoxVisible
                        )
                      }
                    >
                      <PlusIcon className="h-5 w-5 mr-1 text-primary" />
                      <span className="text-sm text-black font-semibold">
                        {selectAppointmentType
                          ? selectAppointmentType.name
                          : "Select Appointment Type"}
                      </span>
                    </div>

                    <ComboBox
                      isVisible={appointmentTypeComboBoxVisible}
                      onClose={() => setAppointmentTypeComboBoxVisible(false)}
                      data={[
                        {
                          name: "Appointment Type A",
                          id: 1,
                        },
                      ]}
                      onItemSelect={(data: any) =>
                        setSelectAppointmentType(data)
                      }
                    />
                  </div>
                </div>
              </li>
              <li className="mb-10 ml-6">
                <span className="mt-2 absolute flex items-center justify-center w-8 h-8 bg-green-400 rounded-full -left-4 ring-4 ring-green-500 text-white font-bold">
                  2
                </span>
                <div className="bg-white shadow ring-1 ring-gray-200 rounded px-2 py-2 ml-2">
                  <div className="flex justify-between">
                    <h3 className="font-semibold text-sm text-black">
                      Provider
                    </h3>
                    <button className="text-sm font-semibold text-newBlue">
                      EDIT
                    </button>
                  </div>

                  <div className="bg-white   relative">
                    <div
                      className="flex items-center mt-3 justify-center ring-2 ring-gray-100 p-2 cursor-pointer"
                      onClick={() =>
                        setIsProviderComboBoxVisible(!isProviderComboBoxVisible)
                      }
                    >
                      <PlusIcon className="h-5 w-5 mr-1 text-primary" />
                      <span className="text-sm text-black font-semibold">
                        {selectedProvider
                          ? selectedProvider.name
                          : "Select Provider"}
                      </span>
                    </div>

                    <ComboBox
                      isVisible={isProviderComboBoxVisible}
                      onClose={() => setIsProviderComboBoxVisible(false)}
                      data={Allproviders?.providers}
                      onItemSelect={(data: any) => setSelectedProvider(data)}
                    />
                  </div>
                </div>
              </li>
              <li className="mb-10 ml-6">
                <span className="mt-2 absolute flex items-center justify-center w-8 h-8 bg-green-400 rounded-full -left-4 ring-4 ring-green-500 text-white font-bold">
                  3
                </span>
                <div className="bg-white shadow ring-1 ring-gray-200 rounded px-2 py-2 ml-2">
                  <div className="flex justify-between">
                    <h3 className="font-semibold text-sm text-black">Rooms</h3>
                    <button className="text-sm font-semibold text-newBlue">
                      EDIT
                    </button>
                  </div>

                  <div className="bg-white   relative">
                    <div
                      className="flex items-center mt-3 justify-center ring-2 ring-gray-100 p-2 cursor-pointer"
                      onClick={() =>
                        setIsDoctorComboBoxVisible(!isDoctorComboBoxVisible)
                      }
                    >
                      <PlusIcon className="h-5 w-5 mr-1 text-primary" />
                      <span className="text-sm text-black font-semibold">
                        {selectedDoctor ? selectedDoctor.name : "Select Room"}
                      </span>
                    </div>

                    <ComboBox
                      isVisible={isDoctorComboBoxVisible}
                      onClose={() => setIsDoctorComboBoxVisible(false)}
                      data={AllRooms?.rooms}
                      onItemSelect={(data: any) => setSelectedDoctor(data)}
                    />
                  </div>
                </div>
              </li>
              <li className="mt-2 mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-green-400 rounded-full -left-4 ring-4 ring-green-500 text-white font-bold">
                  4
                </span>
                <div className="bg-white shadow ring-1 ring-gray-200 rounded px-2 py-2 ml-2">
                  <div className="flex justify-between">
                    <h3 className="font-semibold text-sm text-black">
                      Add Patient
                    </h3>
                  </div>

                  <div
                    className="flex items-center mt-5 justify-center ring-2 ring-gray-100 p-2 cursor-pointer"
                    onClick={() =>
                      setIsPatientComboBoxVisible(!isPatientComboBoxVisible)
                    }
                  >
                    <PlusIcon className="h-5 w-5 mr-1 text-primary" />
                    <span className="text-sm text-black font-semibold">
                      {selectedPatient
                        ? selectedPatient.name
                        : "Select Patient"}
                    </span>
                  </div>

                  <ComboBox
                    isVisible={isPatientComboBoxVisible}
                    onClose={() => setIsPatientComboBoxVisible(false)}
                    data={patients}
                    onItemSelect={(data: any) => setSelectedPatient(data)}
                  />
                </div>
              </li>

              <li className="mt-2 mb-5 ml-6">
                <span className="mt-2 absolute flex items-center justify-center w-8 h-8 bg-green-400 rounded-full -left-4 ring-4 ring-green-500 text-white font-bold">
                  5
                </span>
                <div className="bg-white shadow ring-1 ring-gray-200 rounded px-2 py-2 ml-2 relative">
                  <div className="flex justify-between px-1">
                    <h3 className="font-semibold text-sm text-black">
                      Time and Date
                    </h3>
                    <button
                      onClick={() =>
                        setIsDateTimeComboBoxVisible(!isDateTimeComboBoxVisible)
                      }
                      className="text-sm font-semibold text-newBlue"
                    >
                      EDIT
                    </button>
                  </div>
                  <div className="flex flex-wrap justify-between items-start mt-3  ">
                    <div className="pt-1  px-4">
                      <DatePicker
                        selected={selectedDate}
                        onChange={(e: any) => {
                          setSelectedDate(e);
                        }}
                        filterDate={(date: any) => {
                          return filterDates.includes(
                            moment(date).format("YYYY-MM-DD")
                          );
                        }}
                        placeholderText={selectedDate}
                        minDate={new Date()}
                      />
                    </div>

                    <div className="relative flex justify-end items-end  w-full lg:  px-4">
                      <input
                        type="time"
                        className="border border-gray-300 focus:outline-none w-full h-12 mt-1 rounded-lg px-2"
                      />
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-3 pb-3 px-2">
                    <div>
                      <p className="text-sm text-black font-medium">
                        {moment(selectedDate).format("dddd, DD MMMM")},&nbsp;
                        {dateTime?.time}
                      </p>
                      <p className="text-xs">
                        Video call with to doctor to consult any issue.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ol>
          </div>
          <div className="mt-4 flex justify-end pb-5 px-5">
            <button
              onClick={onClose}
              className="bg-white font-medium w-32 text-gray-400 px-4 py-2 shadow-md rounded hover:shadow-xl hover:drop-shadow-sm transition-all text-md mr-3"
            >
              Cancel
            </button>
            <button
              className="bg-primary w-32 text-white px-4 py-2 shadow-md rounded hover:shadow-xl hover:drop-shadow-sm transition-all text-md font-medium"
              onClick={() => {
                if (selectedPatient == null) {
                  alert("please select a patient");
                  return false;
                }
                if (selectedDoctor == null) {
                  alert("please select a doctor");
                  return false;
                }
                console.log(eventArg);
                onSave({
                  ...eventArg,
                  patient: selectedPatient,
                  // start: `${moment(dateTime.date).format("yyyy-mm-d")}T${
                  //   dateTime?.time
                  // }`,
                  // end: `${moment(dateTime.date).format("yyyy-mm-d")}T${
                  //   dateTime?.time
                  // }`,
                  start: moment(dateTime.date).format("yyyy-mm-DDThh:mm:ss"),
                  end: moment(dateTime.date).format("yyyy-mm-DDThh:mm:ss"),
                });
              }}
            >
              Save
            </button>
          </div> */}

          {/*
         {
  const appointment [
    {value : 10, label:'Select Appointment Type'}
    {value : 20, label:'Appointment Type A'}
    {value : 10, label:'Appointment Type B'}
  ]

  appoint.map((i)=>{
    <FormCard value=i.value , label=i.label />
  })

  const FormCard=(value,label)=>{
    return(
      <div className="border-none xl: mt-3 text-sm/[12px]  my-4">
                  <InputLabel id="" className="font-400 text-[#000000]">
                    {Title}
                  </InputLabel>
                  
                  <Select
                  name="appointmentType"
                    value={formValues.appointmentType}
                    onChange={handleChange}
                    className="w-full  rounded-lg outline-none overflow-hidden h-10 border-[#E2E2E2] focus:border-none focus:outline-none  "
                  >
                    <MenuItem value={value}>{value}</MenuItem>
                  </Select>
                </div>
    )
  }
          } */}
          {/* new design end */}

          <div className=" bg-white rounded-lg overflow-y-auto w-full scrollbar-hide z-[9999] ">
            <div className=" 2xl:h-[60vh] w-[30vw] ">
              <div className="border-b-[1px] px-4 ">
                <div className="h-[8vh] flex justify-between items-center">
                  <div className="flex ">
                    <p className="text-[#1F2229] font-medium md:text-xl text-center ml-10 ">
                      Create Appointment
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setOpenFieldModel(false);
                    }}
                    className=""
                  >
                    <AiOutlineClose className="text-[#000000] h-6 w-6" />
                  </button>
                </div>
              </div>

              <div className="mx-14">
                <div className=" mt-6">
                  <div className="border-none xl: mt-3 text-sm/[12px]  my-4">
                    <InputLabel id="" className="font-400 text-[#000000]">
                      Select Appointment Type
                    </InputLabel>

                    <Select
                      name="appointmentType"
                      value={formValues.appointmentType}
                      onChange={handleChange}
                      className="w-full  rounded-lg outline-none overflow-hidden h-10 border-[#E2E2E2] focus:border-none focus:outline-none  "
                    >
                      <MenuItem value={10}>Select Appointment Type</MenuItem>
                      <MenuItem value={20}>Appointment Type A</MenuItem>
                      <MenuItem value={30}>Appointment Type B</MenuItem>
                    </Select>
                  </div>
                  <div className="border-none xl: mt-3">
                    <div className="text-[#000000]">
                      <InputLabel className="font-400 text-[#000000]">
                        Select Provider
                      </InputLabel>
                      <Select
                        name="provider"
                        value={formValues.provider}
                        onChange={handleChange}
                        className="w-full  rounded-lg outline-none overflow-hidden h-10 border-[#E2E2E2] focus:border-none focus:outline-none  "
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </div>
                  </div>

                  <div className="border-none xl: mt-3 text-[#000000]">
                    <InputLabel className="font-400 text-[#000000]">
                      Select Rooms
                    </InputLabel>
                    <Select
                      name="rooms"
                      value={formValues.rooms}
                      onChange={handleChange}
                      className="w-full  rounded-lg outline-none overflow-hidden h-10 border-[#E2E2E2] focus:border-none focus:outline-none  "
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </div>

                  <div className="border-none xl: mt-3 text-[#000000]">
                    <div className="">
                      <InputLabel className="font-400 text-[#000000]">
                        Add Patient
                      </InputLabel>
                      <Select
                        name="AddPatient"
                        value={formValues.AddPatient}
                        onChange={handleChange}
                        className="w-full  rounded-lg overflow-hidden h-10 border-[#E2E2E2]  "
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </div>
                  </div>
                  <div className="flex text-[#000000] gap-2">
                    <div className="mt-3 xl: w-1/2">
                      <InputLabel className="font-400 text-[#000000]">
                        Date
                      </InputLabel>
                      <DatePicker
                        className="w-full  rounded-lg overflow-hidden h-10 border-[#E2E2E2]"
                        selected={selectedDate}
                        onChange={(e: any) => {
                          setSelectedDate(e);
                        }}
                        filterDate={(date: any) => {
                          return filterDates.includes(
                            moment(date).format("YYYY-MM-DD")
                          );
                        }}
                        placeholderText={selectedDate}
                        minDate={new Date()}
                      />
                    </div>

                    <div className="mt-3 xl:   w-1/2">
                      <InputLabel className="font-400 text-[#000000]">
                        Slot
                      </InputLabel>

                      <Select
                        value={formValues.slot}
                        name="slot"
                        onChange={handleChange}
                        className="w-full  rounded-lg overflow-hidden h-10 border-[#E2E2E2]"

                        // onChange={handleChange}
                      >
                        <MenuItem value="">Select</MenuItem>
                        <MenuItem value={10}>09:30am-10:30am</MenuItem>
                        <MenuItem value={20}>10:30am-11:30am</MenuItem>
                        <MenuItem value={30}>11:30am-12:30am</MenuItem>
                      </Select>
                    </div>
                  </div>
                  <div className=" flex w-full justify-end mt-6 gap-4">
                    <button
                      onClick={() => {
                        setOpenFieldModel(false);
                      }}
                      className="text-sm text-gray-600 font-medium flex justify-start items-center border-[1px] border-gray-300 py-2 px-9 rounded-md "
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => {
                        setOpenFieldModel(false);
                      }}
                      className="text-sm flex justify-start items-center bg-[#0F66CF] py-2 px-9 text-white rounded-md "
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ModalDerived>

      {/* Appointments Mapped */}
      <div className="overflow-y-scroll scrollbar-hide h-[65vh]">
        <span className="font-main text-black text-md font-semibold tracking-wide ">
          Upcoming Appointment
        </span>
        <div className="overflow-y-scroll scrollbar-hide mb-3 ">
          <div className=" mt-2  ">
            {appointmentData.map((item: any, index: number) => (
              <div key={index} className="mb-4 ">
                <AppointmentCard data={item} fullName={fullName} />
              </div>
            ))}
          </div>
        </div>

        <div>
          <span className="font-main text-black text-md font-semibold px-1 tracking-wide ">
            Apointment History
          </span>
          <div className="px-1 text-gray-500 text-sm"> 11 July 2023 </div>
          <div className="overflow-y-scroll scrollbar-hide mb-3 ">
            <div className=" mt-2  ">
              <div className="mb-4 space-y-4">
                <MeetingHistoryCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
