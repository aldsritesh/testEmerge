import React, { createContext, useState } from "react";
import ModalDerived from "@/components/Modal";
import { AiOutlineClose } from "react-icons/ai";
import CalendarListTable from "./calendarListTable";
import RoomsListTable from "./RoomsListTable";
import ProviderListTable from "./ProvidersListTable";
import AptTypeListTable from "./AptTypeListTable";
interface RowData {
  [key: string]: any;
}
const FieldType = [
  { title: "Calendars" },
  { title: "Rooms" },
  { title: "Providers" },
  { title: "Apt Type" },
];
export const CalendarSettingsContext = createContext({
  openModal1: false,
  setOpenModal1: (string: string) => {},
  openModal2: false,
  setOpenModal2: (string: string) => {},
  openModal3: false,
  setOpenModal3: (string: string) => {},
  openModal4: false,
  setOpenModal4: (string: string) => {},
});

export default function CalendarListData({
  AppointmentDatas,
  calendarData,
  calendarCount,
  calendarRoomData,
  CaledarProviderData,
  CalendarAppointmentData,
}: any) {
  // console.log("Datassss", CalendarAppointmentData);
  const [openAddTagModel, setAddTagModel] = useState<any>(false);
  const [select, setSelect] = useState<any>(0);
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const [openModal4, setOpenModal4] = useState(false);
  const value: any = {
    openModal1,
    setOpenModal1,
    openModal2,
    setOpenModal2,
    openModal3,
    setOpenModal3,
    openModal4,
    setOpenModal4,
  };
  return (
    <>
      <CalendarSettingsContext.Provider value={value}>
        <div className="w-full px-2 py-2">
          <div className="flex  items-center justify-between">
            <p className="text-[#47494B] text-base font-semibold  ">
              {select == 0 && "Calendars"}
              {select == 1 && "Rooms"}
              {select == 2 && "Providers"}
              {select == 3 && "Apt Type"}
            </p>
            <button
              onClick={() => {
                if (select == 0) {
                  setOpenModal1(true);
                }
                if (select == 1) {
                  setOpenModal2(true);
                }
                if (select == 2) {
                  setOpenModal3(true);
                }
                if (select == 3) {
                  setOpenModal4(true);
                }
              }}
              className="text-xs flex justify-center items-center   bg-newBlue hover:bg-secondary duration-300 m-1 py-2.5 px-5 2xl:px-6 text-white rounded-md "
            >
              {select == 0 && "Add Calendars"}
              {select == 1 && "Add Rooms"}
              {select == 2 && "Add Providers"}
              {select == 3 && "Add Apt Type"}
            </button>
          </div>
        </div>
        <div className="text-[#34373A] font-semibold bg-gray-100 text-xs border-t border-x rounded-t-md  flex ">
          {FieldType.map((item: any, index: number) => (
            <button
              key={index}
              onClick={() => setSelect(index)}
              className={`px-4 py-2.5 ${
                select == index ? "bg-white rounded-t-md" : ""
              } `}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="  pb-10 w-full">
          {select == 0 && (
            <CalendarListTable
              calendarCount={calendarCount}
              calendarData={calendarData}
            />
          )}
          {select == 1 && (
            <RoomsListTable calendarRoomDataTable={calendarRoomData.rooms} />
          )}
          {select == 2 && (
            <ProviderListTable
              calendarProviderDataTable={CaledarProviderData}
            />
          )}
          {select == 3 && (
            // <AptTypeListTable
            //   calendarAppointmentDataTable={CaledarAppointmentData}
            // />

            <AptTypeListTable
              CalendarAppointmentData={CalendarAppointmentData}
            />
          )}
        </div>
      </CalendarSettingsContext.Provider>
    </>
  );
}
