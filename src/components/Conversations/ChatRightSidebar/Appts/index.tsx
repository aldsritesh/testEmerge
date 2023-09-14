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
import AppointmentForm from "./AppointmentForm";

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
  const [appointments, setAppointments] = useState<any>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className=" h-[100vh] pb-[30%]  overflow-y-scroll w-full scrollbar-hide ">
      <div>
        {isModalOpen && (
          <ConversationModalDerived
            visibility={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          >
            <AppointmentForm
              onClose={() => setIsModalOpen(false)}
              handleStoreAppointment={(item: any) =>
                setAppointments((prevData: any) => [
                  ...appointments,
                  {
                    name: item?.name,
                    timeZone: item?.timeZone,
                    date: item?.date,
                    slot: item?.slot,
                    title: item?.title,
                  },
                ])
              }
            />
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

      <div className="px-2 py-6 flex flex-warp ">
        {appointments.length == 0 ? null : (
          <div className="w-full flex flex-wrap mb-4 justify-between items-center ">
            {appointments.map((item: any, index: number) => (
              <div
                className="w-full px-2 py-2 bg-[#f2f3f6] mb-2 rounded-lg"
                key={index}
              >
                <p className="font-semibold text-base pb-2">{item?.title}</p>
                <p className="font-medium text-sm pb-0.5">{item?.name}</p>
                <p className="font-medium text-sm pb-1">{item?.timeZone}</p>
                <div className="flex justify-between items-center">
                  <p className="font-medium text-sm pb-0.5">
                    {moment(item?.date).format("DD-MM-YYYY")}{" "}
                  </p>
                  <p className="font-medium text-sm pb-0.5">{item?.slot}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
