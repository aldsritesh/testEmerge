import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import { useEffect, useState } from "react";
import { MenuItem, Select } from "@mui/material";
import moment from "moment";
import { APIConst, calendarBaseUrl } from "@/config/APIConstants";
import axios from "@/utils/axios";
import ConversationModalDerived from "../../UI/ConversationModalDerived";
import { PlusIcon } from "@heroicons/react/24/solid";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { HiOutlineExternalLink } from "react-icons/hi";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function AppointmentForm({
  onClose,
  handleStoreAppointment,
}: any) {
  const timezonesData = [
    {
      name: "Coordinated Universal Time (UTC)",
      abbreviation: "UTC",
      offset: "+00:00",
    },
    {
      name: "Greenwich Mean Time (GMT)",
      abbreviation: "GMT",
      offset: "+00:00",
    },
    {
      name: "Indian Standard Time (IST)",
      abbreviation: "IST",
      offset: "+05:30",
    },
    {
      name: "Eastern Standard Time (EST)",
      abbreviation: "EST",
      offset: "-05:00",
    },
    {
      name: "Central Standard Time (CST)",
      abbreviation: "CST",
      offset: "-06:00",
    },
    {
      name: "Pacific Standard Time (PST)",
      abbreviation: "PST",
      offset: "-08:00",
    },
    {
      name: "Australian Eastern Standard Time (AEST)",
      abbreviation: "AEST",
      offset: "+10:00",
    },
    {
      name: "Japan Standard Time (JST)",
      abbreviation: "JST",
      offset: "+09:00",
    },
    {
      name: "Central European Time (CET)",
      abbreviation: "CET",
      offset: "+01:00",
    },
    {
      name: "Eastern European Time (EET)",
      abbreviation: "EET",
      offset: "+02:00",
    },
  ];
  const [allCalendars, setAllCalendars] = useState([]);
  const [calendarId, setCalendarId] = useState<any>(null);
  const [allSlots, setAllSlots] = useState<any>([
    {
      "2023-06-12": {
        slots: [
          "2023-06-15T21:30:00+05:30",
          "2023-06-12T22:30:00+05:30",
          "2023-06-15T21:30:00+05:30",
          "2023-06-12T22:30:00+05:30",
          "2023-06-15T21:30:00+05:30",
          "2023-06-12T22:30:00+05:30",
        ],
      },
    },
    {
      "2023-06-15": {
        slots: [
          "2023-06-15T21:30:00+05:30",
          "2023-06-12T22:30:00+05:30",
          "2023-06-15T21:30:00+05:30",
          "2023-06-12T22:30:00+05:30",
          "2023-06-15T21:30:00+05:30",
          "2023-06-12T22:30:00+05:30",
        ],
      },
    },
  ]);
  const [selectedDate, setSelectedDate] = useState<any>(""); // State to store the selected date
  useEffect(() => {
    // const fetchCalendar = async () => {
    //   try {
    //     const response = await axios.get(
    //       `${APIConst.allCalendar}ve9EPM428h8vShlRW1KT`
    //     );
    //     setAllCalendars(response.data.calendars);
    //   } catch (error) {
    //     console.error("Error:", error);
    //   }
    // };
    // fetchCalendar();
  }, []);
  useEffect(() => {
    if (calendarId) {
      const fetchSlots = async () => {
        try {
          const response = await axios.get(
            `${calendarBaseUrl}${calendarId[0]?.id}/free-slots?startDate=1548898600000&endDate=1601490599999`
          );
          console.log(response);
          setAllSlots([...allSlots, ...response.data]);
        } catch (error) {
          console.error("Error:", error);
        }
      };
      fetchSlots();
    }
  }, [calendarId]);
  const [formData, setFormData] = useState<any>({
    name: "",
    timeZone: "",
    date: "",
    slot: "",
    title: "",
  });

  const [errors, setErrors] = useState<any>({});
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    if (name == "timeZone") {
      console.log("ok");
      setCalendarId(
        allCalendars.filter((item: any) =>
          item.name.toLowerCase().includes(value)
        )
      );
    }
    if (name == "date") {
      console.log("ok", value);
      setSelectedDate(value);
    }
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear the corresponding error message when the user starts typing
    setErrors((prevErrors: any) => ({
      ...prevErrors,
      [name]: "",
    }));
  };
  const [isReady, setIsReady] = useState(true);
  const [isError, setIsError] = useState<any>(null);
  // Find the slots for the selected date
  const selectedSlots = allSlots.find(
    (slot: any) => Object.keys(slot)[0] === selectedDate
  );
  const [showSelectBox, setShowSelectBox] = useState(false);
  const [selectAppointmentType, setSelectAppointmentType] = useState<any>(null);
  const contacts = [
    {
      name: "CharleyOssai",
      link: "",
    },
  ];
  const makeApiCall = async () => {
    const newErrors: any = {};
    if (!formData.name) {
      newErrors.name = "Please select an assignee";
    }
    if (!formData.timeZone) {
      newErrors.timeZone = "Please select a timezone";
    }
    if (!formData.date) {
      newErrors.date = "Please select a date";
    }
    if (!formData.title.trim()) {
      newErrors.title = "Please enter an appointment title";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      const requestBody = {
        calendarId: "CVokAlI8fgw4WYWoCtQz",
        locationId: "C2QujeCh8ZnC7al2InWR",
        contactId: "0007BWpSzSwfiuSl0tR2",
        startTime: formData?.date,
        endTime: formData?.date,
        title: formData?.title,
        appointmentStatus: "new",
        assignedUserId: "0007BWpSzSwfiuSl0tR2",
        address: "Zoom",
        ignoreDateRange: false,
        toNotify: false,
      };
      setIsReady(false);
      try {
        const response = await axios.post(
          `${APIConst.appAppointment}`,
          requestBody
        );
        handleStoreAppointment(formData);
        setFormData({});
        setIsError(null);
        setIsReady(true);
        onClose();
      } catch (error: any) {
        if (error.response.status == 422) {
          setIsError("Unprocessable Entity");
        }
        if (error.response.status == 401) {
          setIsError("Unauthorized");
        }
        if (error.response.status == 400) {
          setIsError("Bad Request");
        }
        setIsReady(true);
      }
    }
  };

  return (
    <div className=" h-[85vh] pb-[5%]  overflow-y-scroll w-full scrollbar-hide ">
      <div className="bg-white   rounded-lg pt-5 pb-3 w-screen md:w-[110vh]">
        <div className="flex justify-between items-center  mb-3 px-5">
          <p className="text-gray-800 font-medium md:text-lg ">
            Book Appointment
          </p>

          <button onClick={onClose}>
            <AiOutlineClose className="text-gray-800 h-6 w-6" />
          </button>
        </div>

        <div className="flex justify-between flex-wrap border-t-[1px]   px-4">
          <div className="w-8/12 pt-4 pr-2 border-r-[1px] pb-3">
            <form className="flex flex-wrap">
              <div className="w-full pr-2">
                <label className="w-full text-sm text-gray-600 font-medium ">
                  Calendar:
                </label>
                <Select
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="rounded-md mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark  text-space focus:outline-none focus:border-gray-300 text-black"
                >
                  {allCalendars?.map((item: any, index: any) => (
                    <MenuItem value={item.name} key={index}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>
              <div className="bg-[#f2f4f7] mt-2 rounded-md p-4 w-full flex items-center gap-4 flex-col">
                <div className="w-full">
                  <label htmlFor="status" className="text-sm mb-1">
                    Showing slots in this timezone:{" "}
                    <span className="font-medium">(Account Timezone)</span>
                  </label>
                  <Select
                    name="timeZone"
                    value={formData.timeZone}
                    onChange={handleInputChange}
                    className="rounded-md mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark text-space focus:outline-none focus:border-gray-300 text-black"
                  >
                    {timezonesData?.map((item: any, index: any) => (
                      <MenuItem value={item.name} key={index}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.timeZone && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.timeZone}
                    </p>
                  )}
                </div>

                {/* //map slots here  */}
                <div className="flex flex-wrap w-full">
                  <div className="w-1/2 pr-1">
                    <label className="w-full text-sm text-gray-600 font-medium ">
                      Date
                    </label>
                    <div className="pt-1 w-full ">
                      <DatePicker
                        selected={formData.date}
                        onChange={(e: any) => {
                          const dateFormat = moment(e).format("yyyy-MM-DD");
                          console.log(dateFormat);
                          setFormData((formData: any) => ({
                            ...formData,
                            date: e,
                          }));
                          setSelectedDate(dateFormat);
                        }}
                        placeholderText={formData.date}
                        minDate={new Date()}
                      />
                    </div>
                    {errors.date && (
                      <p className="text-red-500 text-xs mt-1">{errors.date}</p>
                    )}
                  </div>

                  <div className="w-1/2 pl-1">
                    <label className="w-full text-sm text-gray-600 font-medium mb-1">
                      Slots
                    </label>
                    {selectedSlots ? (
                      <Select
                        name="slots"
                        value={formData.slots}
                        onChange={handleInputChange}
                        className="rounded-md mt-1 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark text-space focus:outline-none focus:border-gray-300 text-black"
                      >
                        {selectedSlots[selectedDate].slots.map(
                          (timeSlot: any, index: number) => (
                            <MenuItem key={index} value={timeSlot}>
                              {moment(timeSlot).format("hh:ss a")}
                            </MenuItem>
                          )
                        )}
                      </Select>
                    ) : (
                      <div className="text-sm py-3 text-start px-2 rounded-md border-[1px] border-gray-200">
                        {" "}
                        No record found
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="w-full mt-4">
                <label className="w-full text-sm text-gray-600 font-medium ">
                  Appointment Title :
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Appointment with User"
                  className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3  py-3.5  rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
                />
                {errors.title && (
                  <p className="text-red-500 text-xs mt-1">{errors.title}</p>
                )}
              </div>
            </form>
          </div>
          <div className="w-4/12 pt-4 pl-3 pb-3">
            <label className="w-full text-sm text-gray-600 font-medium ">
              Contact:
            </label>

            <ul>
              {contacts.map((item: any, index: number) => (
                <li key={index} className="border-[1px] rounded-md py-2 px-2">
                  <div className="flex justify-between items-center gap-1.5">
                    <div className="flex justify-between items-center gap-1.5">
                      <div>
                        <div className="text-white bg-newBlue h-8 w-8 rounded-full flex justify-center items-center">
                          CR
                        </div>
                      </div>
                      <p className="w-full text-sm text-gray-600 font-medium ">
                        Chahat Rakshawat
                      </p>
                    </div>

                    <div className=" ">
                      <HiOutlineExternalLink className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full flex justify-end items-center gap-2 border-t  pt-4 px-4">
          <button
            onClick={onClose}
            className="text-sm text-gray-600 font-medium flex justify-start items-center border-[1px] border-gray-300 py-1.5 px-5 rounded-md  "
          >
            Cancel
          </button>

          {isReady ? (
            <button
              onClick={makeApiCall}
              className="text-sm flex justify-start items-center bg-newBlue py-1.5 px-5 text-white rounded-md  "
            >
              <span className="text-white text-sm">Book Appointment</span>
            </button>
          ) : (
            <button className="text-sm flex justify-start items-center bg-newBlue py-1.5 px-5 text-white rounded-md  ">
              <span className="text-white text-sm">Loading</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
