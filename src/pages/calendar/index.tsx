import { useEffect, useState, useRef, useContext } from "react";
import { titleState } from "@/atoms/title";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useRecoilState } from "recoil";
import interactionPlugin from "@fullcalendar/interaction";
import moment from "moment";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CalendarDaysIcon,
  PlusIcon,
  BellIcon,
  AdjustmentsHorizontalIcon,
  FunnelIcon,
  PrinterIcon,
  ArrowPathIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import CalendarItem from "@/components/Calendar/EventItem";
import Search from "@/layouts/GlobalLayout/components/Search";
import { UserIcon } from "@heroicons/react/24/outline";
import AddItem from "@/components/Calendar/AddItem";
import AppointmentDetails from "@/components/Calendar/AppointmentDetails";
import Filter from "@/components/Calendar/Filter";
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import Link from "next/link";
import { GlobalContext } from "@/layouts/GlobalLayout";
import axios from "axios";
import { baseUrl } from "@/config/APIConstants";
import { useAuthentication } from "@/controllers/auth";
export default function Calendar() {
  const ctx = useContext(GlobalContext);
  const { location, token }: any = useAuthentication();
  ctx.setTitle("Calendar");
  const [title, setTitle] = useRecoilState<any>(titleState);
  const headingData = [
    {
      heading: "Calendar",
      icon: "/images/icons/calendar.svg",
    },
  ];
  const [currentView, setCurrentView] = useState<string | null>(null);
  const calendarRef = useRef<FullCalendar>(null);
  const [changeCalendar, setChangeCalendar] = useState<string>("");
  const [dates, setDates] = useState<any>([]);
  const [weekRange, setWeekRange] = useState("");
  const [heightObj, setHeightObj] = useState({});
  const [isAddNewEventPopUpVisible, setIsAddNewEventPopUpVisible] =
    useState(false);
  const [eventArg, setEventArg] = useState<any>();
  const [calendarData, setCalendarData] = useState<any>([]);
  const [allAppointments, setallAppointments] = useState();
  const [allProviders, setAllProviders] = useState();
  const [allRooms, setAllRooms] = useState();
  useEffect(() => {
    if (window.innerWidth < 640) {
      setCurrentView("timeGridDay");
      setHeightObj({ height: "100%" });
    } else {
      setCurrentView("timeGridWeek");
    }
  }, []);
  useEffect(() => {
    setTitle(headingData);
  }, []);

  useEffect(() => {
    axios
      .get(`${baseUrl}calendars/location/${location?.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }) => {
        // console.log("data", data);
        setCalendarData(data);
        if (data.calendars.length > 0) setChangeCalendar(data.calendars[0].id);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (changeCalendar === "") return;

    axios
      .get(`${baseUrl}calendars/${changeCalendar}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        setCurrentCalendar(data.calendar);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, [changeCalendar]);

  useEffect(() => {
    axios
      .get(`${baseUrl}appointments`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }) => {
        // console.log("appointment ka sara data", data);
        let arr: any = [];
        data.appointments.map((i: any) => {
          arr.push({
            title: i.appointmentTitle,
            subtitle: i.appointmentStatus,
            start: i.startTime,
            end: i.updatedOn,
            backgroundColor: "#fff",
            extendedProps: { subtitle: i.appointmentStatus, category: 1 },
            resourceId: "123",
          });
        });
        setallAppointments(arr);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${baseUrl}providers/location/${location?.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }) => {
        setAllProviders(data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${baseUrl}rooms/location/${location?.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }) => {
        setAllRooms(data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  //Resources
  const resources = [
    {
      id: "123",
      title: "Room 1",
    },
    {
      id: "124",
      title: "Room 2",
    },
    {
      id: "125",
      title: "Room 3",
    },
    {
      id: "126",
      title: "Room 4",
    },
    {
      id: "127",
      title: "Room 5",
    },
  ];
  // Update this state to change data in calendar
  const [events, setEvents] = useState<any>([
    {
      title: "Willy",
      subtitle: " ",
      start: "2023-08-17T09:00:00",
      end: "2023-08-17T10:00:00",
      backgroundColor: "#fff",
      extendedProps: { subtitle: " ", category: 1 },
      resourceId: "123",
    },
    {
      title: "Willy",
      subtitle: " ",
      start: "2023-08-20T11:00:00",
      end: "2023-08-20T12:00:00",
      backgroundColor: "#fff",
      extendedProps: { subtitle: " ", category: 1 },
      resourceId: "123",
    },
    {
      title: "Willy",
      subtitle: " ",
      start: "2023-08-19T11:00:00",
      end: "2023-08-19T12:00:00",
      backgroundColor: "#fff",
      extendedProps: { subtitle: " ", category: 1 },
      resourceId: "123",
    },
    {
      title: "Willy",
      subtitle: " ",
      start: "2023-08-18T10:00:00",
      end: "2023-08-18T11:00:00",
      backgroundColor: "#fff",
      extendedProps: { subtitle: " ", category: 1 },
      resourceId: "123",
    },
    {
      title: "Willy",
      subtitle: " ",
      start: "2023-08-16T10:00:00",
      end: "2023-08-16T11:00:00",
      backgroundColor: "#fff",
      extendedProps: { subtitle: " ", category: 1 },
      resourceId: "123",
    },
    {
      title: "Willy",
      subtitle: " ",
      start: "2023-08-15T11:00:00",
      end: "2023-08-15T12:00:00",
      backgroundColor: "#fff",
      extendedProps: { subtitle: " ", category: 1 },
      resourceId: "123",
    },
    {
      title: "Willy",
      subtitle: " ",
      start: "2023-06-02T10:00:00",
      end: "2023-06-02T11:00:00",
      backgroundColor: "#fff",
      extendedProps: { subtitle: " ", category: 3 },
      resourceId: "123",
    },
    {
      title: "Willy",
      subtitle: " ",
      start: "2023-06-28T11:00:00",
      end: "2023-06-28T12:00:00",
      backgroundColor: "#fff",
      extendedProps: { subtitle: " ", category: 4 },
      resourceId: "123",
    },
    {
      title: "Willy",
      subtitle: " ",
      start: "2023-06-22T10:00:00",
      end: "2023-06-22T10:00:00",
      backgroundColor: "#fff",
      extendedProps: { subtitle: " ", category: 5 },
      resourceId: "123",
    },
    {
      title: "Willy",
      subtitle: " ",
      start: "2023-06-18T10:00:00",
      end: "2023-06-18T11:00:00",
      backgroundColor: "#fff",
      extendedProps: { subtitle: " ", category: 6 },
      resourceId: "123",
    },
    {
      title: "Willy",
      subtitle: " ",
      start: "2023-06-06T11:00:00",
      end: "2023-06-06T12:00:00",
      backgroundColor: "#fff",
      extendedProps: { subtitle: " ", category: 2 },
      resourceId: "123",
    },
    {
      title: "Willy",
      subtitle: " ",
      start: "2023-04-30T10:00:00",
      end: "2023-04-30T11:00:00",
      backgroundColor: "#fff",
      extendedProps: { subtitle: " ", category: 2 },
      resourceId: "123",
    },
    {
      title: "Willy",
      subtitle: " ",
      start: "2023-06-15T12:00:00",
      end: "2023-06-15T13:30:00",
      backgroundColor: "#fff",
      extendedProps: { subtitle: " ", category: 3 },
      resourceId: "123",
    },
    {
      title: "Willy",
      subtitle: " ",
      start: "2023-06-03T14:00:00",
      end: "2023-06-03T15:30:00",
      backgroundColor: "#fff",
      extendedProps: { subtitle: " ", category: 4 },
      resourceId: "123",
    },
    {
      title: "Willy",
      subtitle: " ",
      start: "2023-06-04T9:00:00",
      end: "2023-06-04T10:00:00",
      backgroundColor: "#fff",
      extendedProps: { subtitle: " ", category: 2 },
      resourceId: "123",
    },
  ]);
  // To post new data into calendar
  function handleAddFlyOutOpen(arg: any) {
    setIsAddNewEventPopUpVisible(true);
    setEventArg(arg);
  }
  function handleSelect(arg: any) {
    const title = arg.patient.name;
    if (title) {
      const newEvent = {
        title: title,
        start: arg.startStr,
        end: arg.endStr,
        backgroundColor: "#fff",
        extendedProps: { subtitle: " ", category: 5 },
        resourceId: arg?.resource?._resource?.id
          ? arg.resource._resource.id
          : "123",
      };
      setEvents([...events, newEvent]);
      setIsAddNewEventPopUpVisible(false);
    }
  }
  // Update a record from calendar
  function handleEventChange(eventChangeInfo: any) {
    const updatedEvent = eventChangeInfo.event;
    // prompt user for new title
    const newTitle = prompt(
      "Enter a new title for the event:",
      updatedEvent.title
    );
    if (newTitle) {
      // create a new event object with the updated title
      const updatedEventObject = {
        ...updatedEvent,
        title: newTitle,
      };
      // update the events state with the new event object
      setEvents((prevEvents: any) =>
        prevEvents.map((event: any) =>
          event === updatedEvent ? updatedEventObject : event
        )
      );
    }
  }
  // Drag Start Behavior
  function handleDragStart(eventDragInfo: any) {
    const draggableEventEl = eventDragInfo.el;
    draggableEventEl.classList.add("fc-dragging");
  }
  // Drag End Behavior
  function handleEventDrop(eventDropInfo: any) {
    const droppedEventEl = eventDropInfo.el;
    droppedEventEl.classList.remove("fc-dragging");
    droppedEventEl.classList.add("fc-dropped");
    setTimeout(() => {
      droppedEventEl.classList.remove("fc-dropped");
    }, 1000);
  }
  // Previous Week
  function handlePrev() {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      calendarApi.prev();
      const view = calendarApi.view;
      const startDate = moment(view.activeStart).format("MMM DD");
      const endDate = moment(view.activeEnd).format("MMM DD, yyyy");
      setWeekRange(`${startDate} - ${endDate}`);
    }
  }
  // Next Week
  function handleNext() {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      calendarApi.next();
      const view = calendarApi.view;
      const startDate = moment(view.activeStart).format("MMM DD");
      const endDate = moment(view.activeEnd).format("MMM DD, yyyy");
      setWeekRange(`${startDate} - ${endDate}`);
    }
  }
  // Changing View
  function handleWeekView() {
    setCurrentView("timeGridWeek");
    if (calendarRef.current) {
      calendarRef.current.getApi().changeView("timeGridWeek");
    }
  }
  // Changing View
  function handleDayView() {
    setCurrentView("resourceTimeGridDay");
    if (calendarRef.current) {
      calendarRef.current.getApi().changeView("resourceTimeGridDay");
    }
  }

  // Resource Week timeline
  function handleWeekResourceTimeline() {
    setCurrentView("resourceTimeline");
    if (calendarRef.current) {
      calendarRef.current.getApi().changeView("resourceTimeline");
    }
  }
  // Changing View
  function handleMonthView() {
    setCurrentView("dayGridMonth");
    if (calendarRef.current) {
      calendarRef.current.getApi().changeView("dayGridMonth");
    }
  }
  // Initial Calendar REF:
  useEffect(() => {
    const api = calendarRef.current?.getApi();
    const startDate = moment(api?.getDate()).startOf("week").format("MMM DD");
    const endDate = moment(api?.getDate()).endOf("week").format("MMM DD");
    setWeekRange(`${startDate} - ${endDate}`);
    // if (api) {
    //   const startDate = moment(api.getDate()).startOf("week").format("MMM DD");
    //   const endDate = moment(api.getDate()).endOf("week").format("MMM DD");
    //   setWeekRange(`${startDate} - ${endDate}`);
    // }
  }, [calendarRef]);

  const [modalOpen, setModalOpen] = useState(false);
  const [currentCalendar, setCurrentCalendar] = useState<any>({});

  const updateModal = () => {
    setModalOpen(true);
  };
  const renderEventContent = (eventInfo: any) => (
    <CalendarItem eventInfo={eventInfo} handleChange={updateModal} />
  );
  const [filterModal, setFilterModal] = useState(false);

  // console.log(data)
  return (
    <>
      <AddItem
        calendar={currentCalendar}
        onClose={() => setIsAddNewEventPopUpVisible(false)}
        visibility={isAddNewEventPopUpVisible}
        onSave={(arg) => handleSelect(arg)}
        eventArg={eventArg}
        Allproviders={allProviders}
        AllRooms={allRooms}
      />

      <AppointmentDetails
        onClose={() => setModalOpen(false)}
        visibility={modalOpen}
      />
      <div className="md:h-auto bg-mainBg overflow-hidden relative">
        <header className="block w-full mb-5 h-16 lg:h-16 items-center relative z-10 border-b-[1px] border-lightGray">
          <div className="flex w-full  lg:h-full lg:mx-auto relative text-white z-10">
            <div className="flex items-center justify-between relative w-full sm:ml-0 sm:pr-2">
              <div className="flex justify-between items-center w-full  pl-2 pr-5 py-1.5 rounded-md">
                <div
                  className={`flex items-center pl-5 w-full lg:justify-start`}
                >
                  <div className="flex items-center text-[20px] gap-2">
                    <CalendarDaysIcon className="h-8 w-8 text-newBlue" />
                    <p
                      className={`md:ml-3 capitalize text-dark font-semibold tracking-wide`}
                    >
                      {/* Calendar */}
                      {currentCalendar.name ? currentCalendar.name : "Calendar"}
                    </p>
                  </div>
                  <div className="lg:ml-12 flex justify-between items-center py-1 rounded-md w-1/2 lg:w-[35%]">
                    <button
                      onClick={handleWeekResourceTimeline}
                      className={`w-full lg:w-auto ${
                        currentView == "resourceTimeline"
                          ? "  text-newBlue"
                          : "   text-FontGray"
                      }  px-4 py-3  duration-300 text-[14px] font-medium text-center`}
                    >
                      List
                    </button>
                    <button
                      onClick={handleDayView}
                      className={`w-full lg:w-auto ${
                        currentView == "resourceTimeGridDay"
                          ? "  text-newBlue"
                          : "   text-FontGray"
                      }  px-4 py-3  duration-300 text-[14px] font-medium text-center`}
                    >
                      Day
                    </button>
                    <button
                      onClick={handleMonthView}
                      className={`hidden md:block ${
                        currentView == "dayGridMonth"
                          ? "  text-newBlue"
                          : "   text-FontGray"
                      }  px-4  py-3   duration-300  text-[14px] font-medium text-center`}
                    >
                      Monthly
                    </button>
                    <button
                      onClick={handleWeekView}
                      className={`hidden md:block ${
                        currentView == "timeGridWeek"
                          ? "  text-newBlue"
                          : "   text-FontGray"
                      }   px-4 py-3 duration-300 text-[14px] font-medium text-center`}
                    >
                      Weekly
                    </button>
                  </div>
                </div>
              </div>

              <div className=" flex items-center justify-start lg:justify-end pl-5 lg:p-1 w-full md:w-[75%]">
                {/* <Search /> */}
                <div className="relative ml-3">
                  <button
                    onClick={() => {
                      setIsAddNewEventPopUpVisible(!isAddNewEventPopUpVisible);
                      setEventArg({
                        title: "Willy",
                        subtitle: " ",
                        start: "2023-06-15T11:00:00",
                        end: "2023-06-15T12:00:00",
                        backgroundColor: "#fff",
                        extendedProps: { subtitle: " ", category: 1 },
                        resourceId: "123",
                      });
                    }}
                    className="w-8 h-8 mr-2 bg-newBlue font-bold flex justify-center items-center rounded-full"
                  >
                    <PlusIcon className="h-6 w-6 text-white" />
                  </button>
                </div>
                <div className="relative ml-1 mr-5">
                  <a className="w-10 h-10 mr-2  bg-white font-bold flex justify-center items-center rounded-full">
                    <BellIcon className="h-6 w-6 text-FontGray" />
                  </a>
                  <div className="h-2 w-2 rounded-full bg-secondary top-1 absolute right-2" />
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="block w-full   pt-1 items-center relative z-10  ">
          <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center  relative w-full px-2 lg:pl-6 lg:pr-8">
            <div className="flex justify-start items-center lg:w-[50%]  ">
              <button
                onClick={handlePrev}
                className="bg-white border-[1px] border-lightGray h-10 w-10 rounded-sm shadow-sm flex justify-center items-center"
              >
                <ChevronLeftIcon className="h-5 w-5 text-FontGray hover:text-secondary duration-300" />
              </button>
              <div className=" mx-2 px-4 py-2 bg-white border-[1px] border-lightGray h-10 rounded-sm shadow-sm flex justify-center items-center">
                <p
                  className={`text-center uppercase text-FontGray text-[14px] font-medium font- pt-1 `}
                >
                  {weekRange}
                </p>
              </div>
              <button
                onClick={handleNext}
                className="bg-white border-[1px] border-lightGray h-10 w-10 rounded-sm shadow-sm flex justify-center items-center"
              >
                <ChevronRightIcon className="h-5 w-5 text-FontGray hover:text-primary duration-300" />
              </button>
            </div>

            <div className="  flex flex-wrap lg:flex-nowrap justify-center lg:justify-end items-center w-full">
              {/* <div className="mt-3 lg:mt-0  mr-2 items-between  px-2 py-2 bg-white border-[1px] border-lightGray h-10 rounded-sm shadow-sm flex justify-center items-center">
                <ChevronDownIcon className="h-5 w-5 text-FontGray hover:text-secondary duration-300" />
              </div> */}

              <div className="flex flex-col">
                <details className="dropdown  mr-2">
                  <summary className="mt-3 lg:mt-0  ml-2 items-between px-2 py-2 bg-white border-[1px] border-lightGray h-10 rounded-md shadow-sm flex justify-center items-center">
                    <CalendarDaysIcon className="h-5 w-5 text-FontGray cursor-pointer hover:text-secondary duration-300" />
                  </summary>
                  <ul className="scroll-hide p-2 shadow   dropdown-content z-[1] bg-base-100 rounded-box w-52 calendar-dropdown-content h-52 overflow-y-auto">
                    {/* <li>
                    <a>{calendarData.name}</a>
                  </li> */}
                    {calendarData?.calendars?.map((item: any, index: any) => (
                      <div key={index}>
                        <button
                          className="py-2 cursor-pointer hover:bg-gray-300 w-full text-start"
                          onClick={() => setChangeCalendar(item.id)}
                        >
                          <span className="cursor-pointer">{item.name}</span>
                        </button>
                      </div>
                    ))}
                  </ul>
                </details>
              </div>
              <div className="mt-3 lg:mt-0 relative mr-2 items-between px-3 py-2 bg-white border-[1px] border-lightGray h-10 rounded-sm shadow-sm flex justify-center items-center">
                <UserIcon className="h-5 w-5 text-FontGray hover:text-secondary duration-300" />
                <p className={`ml-2 text-FontGray text-[15px] font-medium`}>
                  Request Approval
                </p>
                <div className="h-5 w-5 rounded-full bg-secondary text-white top-[-8px] absolute right-[-5px] text-xs pt-0.5">
                  <p className="flex justify-center items-center">6</p>
                </div>
              </div>
              <div className="mt-3 lg:mt-0  ml-2 items-between  px-2 py-2 bg-white border-[1px] border-lightGray h-10 rounded-sm shadow-sm flex justify-center items-center">
                <ArrowPathIcon className="h-5 w-5 text-FontGray hover:text-secondary duration-300" />
              </div>
              <div className="mt-3 lg:mt-0  ml-2 items-between  px-2 py-2 bg-white border-[1px] border-lightGray h-10 rounded-sm shadow-sm flex justify-center items-center">
                <PrinterIcon className="h-5 w-5 text-FontGray hover:text-secondary duration-300" />
              </div>

              <div className="dropdown">
                <label
                  tabIndex={0}
                  className="cursor-pointer mt-3 lg:mt-0  lg:ml-2 items-between  px-3 py-2 bg-white border-[1px] border-lightGray h-10 rounded-sm shadow-sm flex justify-center items-center"
                >
                  <FunnelIcon className="h-5 w-5 text-FontGray hover:text-secondary duration-300" />
                  <p className={`ml-2 text-FontGray text-[15px] font-medium`}>
                    Filter
                  </p>
                </label>
                <div
                  tabIndex={0}
                  className="dropdown-content calendar-dropdown-content card card-compact w-64 p-2 shadow bg-white text-dark"
                >
                  <Filter />
                </div>
              </div>

              <Link href="/settings/calendar">
                <div className="mt-3 lg:mt-0  ml-2 items-between px-3 py-2 bg-white border-[1px] border-lightGray h-10 rounded-sm shadow-sm flex justify-center items-center">
                  <AdjustmentsHorizontalIcon className="h-5 w-5 text-FontGray hover:text-secondary duration-300" />
                  <p className={`ml-2 text-FontGray text-[15px] font-medium`}>
                    Schedule setting
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-mainBg h-full md:h-auto">
        {currentView && (
          <FullCalendar
            plugins={[
              timeGridPlugin,
              interactionPlugin,
              dayGridPlugin,
              resourceTimeGridPlugin,
              resourceTimelinePlugin,
            ]}
            resources={resources}
            initialView={currentView}
            ref={calendarRef}
            eventResizableFromStart={true}
            headerToolbar={{ start: "", left: "", right: "", center: "" }}
            events={events}
            dayHeaderContent={renderDate}
            eventContent={renderEventContent}
            // Change start slot time
            slotMinTime="00:00:00"
            // Change end slot time
            slotMaxTime="24:00:00"
            // Interval between slots
            slotDuration="00:30:00"
            // Editable Flag
            editable={true}
            expandRows={true}
            selectable={true}
            select={handleAddFlyOutOpen}
            eventDragStart={handleDragStart}
            eventDrop={handleEventDrop}
            stickyHeaderDates={true}
            nowIndicator={true}
            {...heightObj}
            nowIndicatorContent={() => (
              <div className="h-1 w-full bg-primary rounded-full -mt-1"></div>
            )}
            schedulerLicenseKey="CC-Attribution-NonCommercial-NoDerivatives"
          />
        )}
      </div>
    </>
  );

  function renderDate(e: any) {
    return (
      <div className="flex items-center py-1">
        {currentView != "dayGridMonth" && (
          <div
            className={`h-10 w-10 mr-2 ${
              e.isToday
                ? "bg-primary text-white drop-shadow-xl"
                : "  text-black drop-shadow-xl"
            }  flex items-center justify-center rounded-full`}
          >
            {moment(e.date).format("DD")}
          </div>
        )}
        <div
          className={` ${
            e.isToday ? "text-primary " : "  text-black "
          }  text-lg uppercase font-normal`}
        >
          {moment(e.date).format("ddd")}
        </div>
      </div>
    );
  }
}
