import React, { useContext, useEffect, useState } from "react";
import SettingsSidebar from "@/components/SettingsSidebar/TeamsSidebar";
import CalendarListData from "@/components/Settings/CalendarSettings/CalendarListData";
import { GetServerSidePropsContext } from "next";
import { baseUrl } from "@/config/APIConstants";
import { ICalendarData } from "@/components/Interfaces";
import { GlobalContext } from "@/layouts/GlobalLayout";
import axios from "axios";
import { useAuthentication } from "@/controllers/auth";

export default function CalendarList() {
  const [calendarDatas, setCalendarDatas] = useState<any>({});
  const [roomsDatas, setRoomsDatas] = useState<any>([]);
  const [ProvidersDatas, setProvidersDatas] = useState<any>([]);
  const [AppointmentDatas, setAppointmentDatas] = useState<any>([]);
  const { location, token }: any = useAuthentication();
  useEffect(() => {
    axios
      .get(
        `${baseUrl}calendars/location/f209ee50-96e6-4ca2-9eb5-80b93d31591f`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(({ data }: any) => {
        setCalendarDatas(data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  // Rooms
  useEffect(() => {
    axios
      .get(`${baseUrl}rooms/location/${location?.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }: any) => {
        setRoomsDatas(data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  // Providers
  useEffect(() => {
    axios
      .get(`${baseUrl}providers/location/${location?.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }: any) => {
        setProvidersDatas(data);
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
      .then(({ data }: any) => {
        setProvidersDatas(data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${baseUrl}appointment-types/location/${location?.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }: any) => {
        setAppointmentDatas(data.appointmentTypes);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  const ctx = useContext(GlobalContext);
  ctx.setOpen(false);
  return (
    <div className="flex flex-wrap items-center">
      <div className="w-full lg:w-[25%] border-r-[1px]   bg-white    ">
        <SettingsSidebar />
      </div>
      <div className="w-full lg:w-[75%]   bg-white h-[100vh] scrollbar-hide  overflow-y-scroll ">
        <div className="flex flex-wrap px-4 pt-4 pb-20 overflow-hidden ">
          {calendarDatas?.calendars && (
            <CalendarListData
              calendarCount={calendarDatas.calendars}
              calendarData={calendarDatas.calendars}
              calendarRoomData={roomsDatas}
              CaledarProviderData={ProvidersDatas.providers}
              CalendarAppointmentData={AppointmentDatas}
            />
          )}
        </div>
      </div>
    </div>

    //   <div className="flex flex-wrap items-center">
    //   <div className="w-full lg:w-[25%] border-r-[1px]   bg-white    ">
    //     <SettingsSidebar />
    //   </div>
    //   <div className="w-full lg:w-[75%]   bg-white h-[100vh] scrollbar-hide  overflow-y-scroll pb-20">
    //     <div className="  border-b flex items-center justify-between  px-4 pb-3 pt-4">
    //       <p className="text-[#47494b] text-lg font-semibold">Custom Fields </p>
    //     </div>
    //     <div className="flex flex-wrap   overflow-hidden ">
    //     <CalendarListData
    //         calendarCount={calendarDatas.calendars}
    //           calendarData={calendarDatas.calendars}
    //            />
    //     </div>
    //   </div>
    // </div>
  );
}
