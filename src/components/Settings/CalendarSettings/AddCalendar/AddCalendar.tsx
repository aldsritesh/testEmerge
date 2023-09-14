import React, { useState } from "react";
import SettingsSidebar from "@/components/SettingsSidebar/TeamsSidebar";
import TeamEventSetup from "./teamEventSetup";
import Availability from "./availability";
import Confirmation from "./confirmation";
import axios from "axios";
import { baseUrl } from "@/config/APIConstants";
import { useAuthentication } from "@/controllers/auth";
export default function AddCalendar({ handleChange, onClose }: any) {
  const [select, setSelect] = useState(0);
  const calendarType = [
    { title: "Team & Event Setup", number: 1 },
    { title: "Availability", number: 2 },
    { title: "Confirmation", number: 3 },
  ];

  const [formData, setFormData] = useState<any>([]);
  const { location, token }: any = useAuthentication();
  // console.log("formDatasss", formData);
  const submitData = async (formDatas: any) => {
    console.log("formDatas", formDatas);
    let obj = formDatas[0];
    let obj1 = formDatas[formData.length - 1];

    let data = {
      appointmentPerDay: parseInt(obj1?.appointmentsPerDay),
      appointmentPerSlot: parseInt(obj1?.appointmentsPerSlot),
      appointmentTitle: obj?.appointmentTitle,
      dateRangeDays: parseInt(obj1?.dateRange),
      description: obj?.description,
      eventColor: obj?.eventColor,
      isActive: true,
      locationID: location?.id,
      minSchedulingNoticeHours: parseInt(obj1?.minScheduleNotice),
      name: obj?.calendarName,
      officeHours: [
        {
          dayOfWeek: "MONDAY",
          endHour: 9,
          endMinute: 30,
          startHour: 8,
          startMinute: 30,
        },
      ],
      slotBuffer: parseInt(obj1?.buffer),
      slotDuration: parseInt(obj1?.slotDuration),
      slotInterval: parseInt(obj1?.slotInterval),
      slug: obj?.calendarUrl,
      teamUserIDs: ["9b36de41-f652-4bf2-ba38-7a96103f09a3"],
    };
    console.log("data", data);
    await axios
      .post(`${baseUrl}calendars`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        alert("Calender is created successfully");
        setSelect(2);
      });
  };

  {
    console.log("FormData", formData);
  }
  return (
    <div className="w-full bg-white">
      <div className="w-full bg-white">
        {/* Second Section */}

        <div className="flex gap-3 border-b p-3">
          {calendarType.map((item: any, index: number) => (
            <button
              key={index}
              className={`border rounded-3xl pr-3 pl-2 gap-2 py-[7px] flex justify-around ${
                select == index
                  ? "bg-white font-semibold toggleShadow shadow-md"
                  : "text-gray-400 "
              }`}
              // onClick={() => setSelect(index)}
            >
              <span
                className={` px-2 rounded-full space-x-2 ${
                  select == index
                    ? "bg-blue-400 text-white"
                    : "bg-gray-200 text-gray-400"
                } `}
              >
                {item.number}
              </span>
              {item.title}
            </button>
          ))}
        </div>

        {/* Main Section */}
        {select == 0 && (
          <TeamEventSetup
            onClose={() => {
              setSelect(0);
              onClose();
            }}
            handleNewTab={() => setSelect(1)}
            handleStoreFormData={(item: any) =>
              setFormData([...formData, item])
            }
          />
        )}
        {select == 1 && (
          <Availability
            onClose={() => {
              setSelect(0);
              onClose();
            }}
            handleBack={() => setSelect(0)}
            handleNewTab={() => {}}
            handleStoreFormData={(item: any) => {
              console.log("item", item);
              setFormData([...formData, item]);
              submitData([...formData, item]);
            }}
          />
        )}
        {select == 2 && (
          <Confirmation
            onClose={() => {
              setSelect(0);
              onClose();
            }}
            handleBack={() => setSelect(1)}
            handleNewTab={() => {
              setSelect(0);
              onClose();
            }}
            handleStoreFormData={(item: any) => {
              setFormData([...formData, item]);
              handleChange(formData);
              setFormData([]);
            }}
          />
        )}

        {select == 4 && <p className="pl-10 py-4"> Form Submitted</p>}
      </div>
    </div>
  );
}
