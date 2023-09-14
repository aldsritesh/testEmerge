import { AiOutlinePlus } from "react-icons/ai";
import { useEffect, useState } from "react";
import { MenuItem, Select } from "@mui/material";
import moment from "moment";
import { APIConst, calendarBaseUrl } from "@/config/APIConstants";
import axios from "@/utils/axios";
import ConversationModalDerived from "../../UI/ConversationModalDerived";
import { PlusIcon } from "@heroicons/react/24/solid";

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

export default function Appts() {
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
  ]);

  const [selectedDate, setSelectedDate] = useState<any>(""); // State to store the selected date

  // Filter the slots based on the selected date
  const filteredSlots = allSlots.filter(
    (slot: any) => Object.keys(slot)[0] === selectedDate
  );

  // console.log(allSlots[0][Object.keys(allSlots[0])].slots);

  // console.log(allSlots[0]);

  const [slotsId, setSlotsId] = useState<any>(null);
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
          setAllSlots([...allSlots, ...response.data.date]);
        } catch (error) {
          console.error("Error:", error);
        }
      };
      fetchSlots();
    }
  }, [calendarId]);

  const assignTo = ["BHRT Calendar"];
  const timeSlots = [
    "11:00am - 12:00pm",
    "12:00pm - 1:00pm",
    "1:00pm - 2:00pm",
    "2:00pm - 3:00pm",
    "3:00pm - 4:00pm",
  ];

  const types = ["Ascending", "Descending"];
  const [formData, setFormData] = useState({
    assignTo: "",
    timeZone: "",
    date: "",
    slot: "",
    title: "",
  });

  const [appointments, setAppointments] = useState<any>([]);

  const [errors, setErrors] = useState<any>({});

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const newErrors: any = {};

    // Perform validation
    if (!formData.assignTo) {
      newErrors.assignTo = "Please select an assignee";
    }

    if (!formData.timeZone) {
      newErrors.timeZone = "Please select a timezone";
    }

    if (!formData.date) {
      newErrors.date = "Please select a date";
    }

    if (!formData.slot) {
      newErrors.slot = "Please select a time slot";
    }

    if (!formData.title.trim()) {
      newErrors.title = "Please enter an appointment title";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Submit the form or perform further actions

      try {
        const requestBody = {
          calendarId: "CVokAlI8fgw4WYWoCtQz",
          locationId: "C2QujeCh8ZnC7al2InWR",
          contactId: "0007BWpSzSwfiuSl0tR2",
          startTime: formData.date,
          endTime: formData.date,
          title: formData.title,
          appointmentStatus: "new",
          assignedUserId: "0007BWpSzSwfiuSl0tR2",
          address: "Zoom",
          ignoreDateRange: false,
          toNotify: false,
        };
        const response = await axios.post(
          `${APIConst.appAppointment}`,
          requestBody
        );

        setAppointments([
          ...appointments,
          {
            assignTo: formData.assignTo,
            timeZone: formData.timeZone,
            date: formData.date,
            slot: formData.slot,
            title: formData.title,
          },
        ]);
        setFormData({
          assignTo: "",
          timeZone: "",
          date: "",
          slot: "",
          title: "",
        });
      } catch (error: any) {
        console.error(error);
        if (error.response.status == 422) {
          setErrors("Unprocessable Entity");
        }
        if (error.response.status == 401) {
          setErrors("Unauthorized");
        }
        if (error.response.status == 400) {
          setErrors("Bad Request");
        }
      }
    }
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    console.log(name, value);
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
    setFormData((prevData) => ({
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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const makeApiCall = async () => {
    console.log(formData);
    const requestBody = {
      calendarId: "CVokAlI8fgw4WYWoCtQz",
      locationId: "C2QujeCh8ZnC7al2InWR",
      contactId: "0007BWpSzSwfiuSl0tR2",
      startTime: "2021-06-23T03:30:00+05:30",
      endTime: "2021-06-23T04:30:00+05:30",
      title: "Test Event",
      appointmentStatus: "new",
      assignedUserId: "0007BWpSzSwfiuSl0tR2",
      address: "Zoom",
      ignoreDateRange: false,
      toNotify: false,
    };
    setIsReady(false);
    // console.log(tagsAdd);
    try {
      const response = await axios.post(
        `${APIConst.appAppointment}`,
        requestBody
      );
      console.log(response.data);
      setIsError(null);
      setIsReady(true);
    } catch (error: any) {
      console.error(error);
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
  };

  return (
    <div className=" h-[100vh] pb-[30%]  overflow-y-scroll w-full scrollbar-hide ">
      <div>
        {isModalOpen && (
          <ConversationModalDerived
            visibility={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          >
            <div className="bg-white px-5 rounded-lg py-5 pb-[5%] w-screen md:w-[70vh]">
              <p className="text-gray-800 font-medium md:text-lg mb-3">
                Select Campaign / Workflow
              </p>

              <div className="flex flex-wrap">
                <form className="flex flex-wrap gap-5 justify-between">
                  <div className="bg-[#f2f4f7] p-4 w-full flex gap-4 flex-col">
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
                        {allCalendars?.map((item: any, index: any) => (
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
                    <div className="flex flex-wrap">
                      <div className="w-1/2 pl-1">
                        <label htmlFor="title">Date</label>
                        <Select
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          className="rounded-md mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark text-space focus:outline-none focus:border-gray-300 text-black"
                          MenuProps={MenuProps}
                        >
                          {allSlots.map((slot: any) => (
                            <MenuItem
                              key={Object.keys(slot)[0]}
                              value={Object.keys(slot)[0]}
                            >
                              {Object.keys(slot)[0]}
                            </MenuItem>
                          ))}
                        </Select>
                        {errors.date && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.date}
                          </p>
                        )}
                      </div>
                      <div className="w-1/2 pl-1">
                        <label htmlFor="title">Slot</label>
                        {filteredSlots.map((slot: any) => (
                          <>
                            <Select
                              name="slot"
                              value={formData.slot}
                              onChange={handleInputChange}
                              className="rounded-md mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark text-space focus:outline-none focus:border-gray-300 text-black"
                            >
                              {/* @ts-ignore */}
                              {Object.values(slot)[0].slots.map((time) => (
                                <MenuItem key={time} value={time}>
                                  {moment(time).format("DD-mm-yyyy")}
                                  &nbsp;&nbsp;&nbsp;&nbsp;
                                </MenuItem>
                              ))}
                            </Select>
                          </>
                        ))}

                        {errors.slot && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.slot}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </form>

                <div className="w-full flex justify-end items-center gap-2 border-t mt-4 pt-4">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-sm text-gray-600 font-medium flex justify-start items-center border-[1px] border-gray-300 py-1.5 px-5 rounded-md  "
                  >
                    Cancel
                  </button>

                  {isReady ? (
                    <button
                      onClick={makeApiCall}
                      className="text-sm flex justify-start items-center bg-newBlue py-1.5 px-5 text-white rounded-md  "
                    >
                      <span className="text-white text-sm">Add</span>
                    </button>
                  ) : (
                    <button className="text-sm flex justify-start items-center bg-newBlue py-1.5 px-5 text-white rounded-md  ">
                      <span className="text-white text-sm">Loading</span>
                    </button>
                  )}
                </div>
                <br />
              </div>
            </div>
          </ConversationModalDerived>
        )}
      </div>

      <div className="flex justify-end items-end pt-3 pr-5">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-600 px-3 py-1.5 text-white rounded-md w-28 flex justify-center items-center"
        >
          <PlusIcon className="h-4 w-4" />
          <span className="font-semibold text-sm"> Schedule </span>
        </button>
      </div>
    </div>
  );
}
