import React, { useContext, useState } from "react";
import SettingsSidebar from "@/components/SettingsSidebar/TeamsSidebar";

import TeamEventSetup from "@/components/Settings/CalendarSettings/EditCalendar/teamEventSetup";
import Availability from "@/components/Settings/CalendarSettings/EditCalendar/availability";
import Confirmation from "@/components/Settings/CalendarSettings/EditCalendar/confirmation";
import { GlobalContext } from "@/layouts/GlobalLayout";

export default function EditCalendar() {
  const ctx = useContext(GlobalContext);
  ctx.setOpen(false);
  const [select, setSelect] = useState(0);
  const calendarType = [
    { title: "Team & Event Setup", number: 1 },
    { title: "Availability", number: 2 },
    { title: "Confirmation", number: 3 },
  ];

  console.log("Select", select);
  const [formData, setFormData] = useState({});
  return (
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
              onClose={() => setSelect(0)}
              handleNewTab={() => setSelect(1)}
              handleStoreFormData={(item: any) => setFormData(item)}
            />
          )}
          {select == 1 && (
            <Availability
              onClose={() => setSelect(1)}
              handleNewTab={() => {
                setSelect(2);
                console.log("Next Page");
              }}
              handleStoreFormData={(item: any) => setFormData(item)}
            />
          )}
          {select == 2 && (
            <Confirmation
              onClose={() => setSelect(2)}
              handleNewTab={() => setSelect(3)}
              handleStoreFormData={(item: any) => setFormData(item)}
            />
          )}

          {select == 3 && <p className="pl-10 py-4"> Form Submitted</p>}
        </div>
      </div>
    </div>
  );
}
