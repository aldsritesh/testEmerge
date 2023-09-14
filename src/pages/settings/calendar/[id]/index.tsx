import Center from "@/components/contacts/Center";
import RightSidebar from "@/components/contacts/RightSidebar";
import LeftSidebar from "@/components/contacts/LeftSidebar";
import { GetServerSidePropsContext } from "next";
import {
  EContactType,
  ICalendarData,
  IContactData,
} from "@/components/Interfaces";
import axios from "axios";
import Head from "next/head";
import { baseUrl, token } from "@/config/APIConstants";

import React, { useContext, useState } from "react";
import SettingsSidebar from "@/components/SettingsSidebar/TeamsSidebar";
import TeamEventSetup from "@/components/Settings/CalendarSettings/EditCalendar/teamEventSetup";
import Availability from "@/components/Settings/CalendarSettings/EditCalendar/availability";
import Confirmation from "@/components/Settings/CalendarSettings/EditCalendar/confirmation";
import { GlobalContext } from "@/layouts/GlobalLayout";

interface IProps {
  data: any;
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { id } = ctx.query;

  const tokens = token;
  // const token = ctx.req.cookies.jwt;
  // if (!token) {
  //   return {
  //     redirect: {
  //       destination: '/login',
  //       permanent: false,
  //     },
  //   };
  // }

  const res: any = {
    calendar: {
      addedOn: "string",
      appointmentPerDay: 0,
      appointmentPerSlot: 0,
      appointmentTitle: "string",
      dateRangeDays: 0,
      description: "string",
      eventColor: "string",
      id: "string",
      isActive: true,
      locationID: "string",
      minSchedulingNoticeHours: 0,
      name: "string",
      officeHours: [
        {
          dayOfWeek: "string",
          endHour: 0,
          endMinute: 0,
          startHour: 0,
          startMinute: 0,
        },
      ],
      slotBuffer: 0,
      slotDuration: 0,
      slotInterval: 0,
      slug: "string",
      teamUserIDs: ["string"],
      updatedOn: "string",
    },
  };

  await axios
    .get(`${baseUrl}calendars/${id}`, {
      headers: { Authorization: `Bearer ${tokens}` },
    })
    .then((response) => {
      console.log("response.data", response.data);
      res.calendar = response.data.calendar;
    })
    .catch((err) => {
      console.log(err);
    });

  if (res.calendar.id === "") {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: res,
    },
  };
}

export default function ContactsID({ data }: IProps) {
  const ctx = useContext(GlobalContext);
  ctx.setOpen(false);
  const [select, setSelect] = useState(0);
  const calendarType = [
    { title: "Team & Event Setup", number: 1 },
    { title: "Availability", number: 2 },
    { title: "Confirmation", number: 3 },
  ];

  const [formData, setFormData] = useState({});
  console.log("selected", select);
  return (
    <>
      <Head>
        <title>{data.calendar.name} - Calendar | Emerge</title>
      </Head>

      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-[25%] border-r-[1px]   bg-white    ">
          <SettingsSidebar />
        </div>
        <div className="w-full lg:w-[75%]  bg-white h-[100vh] scrollbar-hide  overflow-y-scroll pb-20">
          <div className="w-full bg-white  ">
            <div className="  border-b flex items-center justify-between pt-4 px-4 pb-3">
              <p className="text-[#47494b] text-lg font-semibold">Calendar</p>
            </div>

            {/* Second Section */}
            <div className="flex gap-3 border-b p-3">
              {calendarType.map((item: any, index: number) => (
                <button
                  key={index}
                  className={`border rounded-3xl  pr-3 pl-2 gap-2 py-[7px] flex justify-around ${
                    select == index
                      ? "bg-white font-semibold toggleShadow shadow-md"
                      : "text-gray-400 "
                  }`}
                  // onClick={() => setSelect(index)}
                >
                  {" "}
                  <span
                    className={` px-2 rounded-full space-x-2 ${
                      select == index
                        ? "bg-blue-400 text-white"
                        : "bg-gray-200 text-gray-400"
                    } `}
                  >
                    {item.number}
                  </span>{" "}
                  {item.title}
                </button>
              ))}
            </div>

            {/* Main Section */}
            {select == 0 && (
              <TeamEventSetup
                calendar={data.calendar}
                handleNewTab={() => {
                  setSelect(1);
                }}
                handleStoreFormData={(item: any) => setFormData(item)}
              />
            )}
            {select == 1 && (
              <Availability
                calendar={data.calendar}
                handleprevTab={() => setSelect(0)}
                handleNewTab={() => {
                  setSelect(2);
                }}
                handleStoreFormData={(item: any) => setFormData(item)}
              />
            )}
            {select == 2 && (
              <Confirmation
                calendar={data.calendar}
                handleprevTab={() => setSelect(1)}
                handleNewTab={() => setSelect(3)}
                handleStoreFormData={(item: any) => {
                  setFormData(item);
                }}
              />
            )}

            {select == 3 && <p className="pl-10 py-4"> Form Submitted</p>}
          </div>
        </div>
      </div>
    </>
  );
}
