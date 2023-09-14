import {
  CalendarIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import { Avatar } from "@mui/material";
import { BsCheck2 } from "react-icons/bs";
import { TbClipboardText } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import moment from "moment";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import axios from "axios";
import { baseUrl } from "@/config/APIConstants";
import { useRouter } from "next/router";
import ModalDerived from "../Modal";
import ValueEdit from "../Settings/CustomValues/ValuesEdit";
import { useState } from "react";
import TaskEditForm from "./TaskEditForm";
import { useAuthentication } from "@/controllers/auth";

const ActivityCard = (props: any) => {
  console.log(props);
  const {
    name,
    addedOn,
    dueDate,
    taskDescription,
    taskPriority,
    taskTitle,
    id,
    updatedOn,
  } = props;
  console.log("first props :----------", props.id);
  const router = useRouter();
  const { location, token }: any = useAuthentication();
  const handleDelete = (deleteid: any) => {
    axios
      .delete(`${baseUrl}tasks/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ response }: any) => {
        router.reload();
        // console.log("response updated here -------------->", response);
      });
  };

  const [openModal, setOpenModal] = useState(false);
  const [index, setIndex] = useState();
  const [valuedata, setValuedata] = useState();
  const [keydata, setKeydata] = useState();
  return (
    <div className="font-main w-full rounded-lg border border-gray-100 bg-white shadow-sm">
      <div className="px-3 py-2 flex items-center border-b border-b-gray-100">
        <ChevronDownIcon className="w-4 h-4 text-grey stroke-2" />

        <span className="ml-4 p-1 rounded-full bg-blue-200">
          <TbClipboardText className="text-blue-500 w-5 h-5" />
        </span>
        <span className="pl-3 text-sm font-medium text-gray-700">
          Task <span className="text-main font-light">created</span> {name}
        </span>

        <span className="flex items-center ml-auto">
          <span className="font-light text-sm text-gray-400 pr-2">Due: </span>
          <CalendarIcon className="w-5 h-5 text-gray-500" />
          <time className="pl-2 text-sm font-medium text-gray-700">
            {moment(dueDate).calendar()}
          </time>
          <CiEdit
            className="h-4 w-4 text-gray-600 mx-2"
            onClick={() => setOpenModal(!openModal)}
          />
          <span className="ml-2 p-2 cursor-pointer rounded-full hover:bg-gray-50 active:bg-gray-100 transition-all duration-200">
            <button onClick={() => handleDelete(id)}>
              <RiDeleteBin5Line className="h-4 w-4 text-gray-600" />
            </button>
          </span>
        </span>
      </div>
      {
        <ModalDerived
          visibility={openModal}
          onClose={() => setOpenModal(false)}
        >
          <TaskEditForm
            onClose={() => setOpenModal(false)}
            id={id}
            taskDescription={taskDescription}
            taskPriority={taskPriority}
            taskTitle={taskTitle}
          />
        </ModalDerived>
      }

      <div className="p-5 flex">
        <span className=" flex justify-center items-center border border-gray-200 bg-gray-100 w-10 h-7 rounded-full mr-4"></span>

        <div>
          <p className="leading-7 font-semibold">{taskTitle}</p>
          <p className="pt-2 text-sm text-gray-400 font-light tracking-wider">
            {taskDescription}
          </p>
        </div>
      </div>

      <div className="p-5">
        <div className="w-full grid grid-cols-3 p-3 border border-gray-200 rounded-md">
          <div className="pr-12 pl-2 w-fit border-r border-r-gray-200">
            <label className="text-sm text-gray-400 font-light">Reminder</label>
            <span className="flex gap-x-1 items-center  text-gray-600">
              No reminder
              <ChevronDownIcon className="w-3 h-3 text-gray-600 translate-y-[2px]" />
            </span>
          </div>
          <div className="pr-12 pl-5 w-fit border-r border-r-gray-200">
            <label className="text-sm text-gray-400 font-light">
              Task Priority
            </label>
            <span className="flex gap-x-1 items-center">
              <span className="block w-4 h-4 bg-primary rounded mr-1  text-gray-600" />
              {taskPriority}
              <ChevronDownIcon className="w-3 h-3 text-gray-600 translate-y-[2px]" />
            </span>
          </div>
          <div className="pr-12 w-56 text-gray-600">
            <span className="text-sm text-gray-400 font-light">
              Assigned to
            </span>
            <span className="flex gap-x-1.5 items-center">
              <Avatar
                sx={{
                  bgcolor: "#1066cf",
                  width: 16,
                  height: 16,
                }}
                src="/profile-img4.jpg"
              />{" "}
              Esther Howard
              <ChevronDownIcon className="w-3 h-3 text-gray-600 translate-y-[2px]" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ActivityCard2 = () => {
  return (
    <div className="font-main mt-4 w-full rounded-lg border border-gray-100 bg-white shadow-sm">
      <div className="px-3 py-2 flex items-center border-b border-b-gray-100">
        <ChevronRightIcon className="w-4 h-4 text-grey stroke-2" />

        <span className="ml-4 p-1 rounded-full bg-blue-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#1066cf"
            className="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
            />
          </svg>
        </span>
        <span className="pl-3 text-sm font-medium text-gray-700">
          Task <span className="text-main font-light">created</span> Easther
          Howard
        </span>

        <span className="flex items-center ml-auto">
          <span className="font-light text-sm text-gray-400 pr-2">Due: </span>
          <CalendarIcon className="w-5 h-5 text-gray-500" />
          <time className="pl-2 text-sm font-medium text-gray-700">
            Today, 12:00 PM
          </time>
          <span className="ml-2 p-2 cursor-pointer rounded-full hover:bg-gray-50 active:bg-gray-100 transition-all duration-200">
            <EllipsisHorizontalIcon className="w-6 h-6 text-gray-400 stroke-2" />
          </span>
        </span>
      </div>

      <div className="p-5 flex">
        <span className=" flex justify-center items-center border border-gray-200 bg-gray-100 w-10 h-7 rounded-full mr-4">
          <BsCheck2 className="h-5 w-5 text-orange-500" />
        </span>
        <div>
          <p className="leading-7 font-semibold">
            Prepare quote for Jerome Bell
          </p>
          <p className="pt-2 text-sm text-gray-400 font-light tracking-wider">
            She&apos;s interested in our new product line and wants our very
            best price. Please include a detailed breakdown of costs.
          </p>
        </div>
      </div>
    </div>
  );
};

const ActivityCard3 = () => {
  return (
    <div className="font-main mt-4 w-full rounded-md bg-white shadow-sm">
      <div className="px-3 py-2 flex items-center border-b border-b-gray-100">
        <ChevronRightIcon className="w-4 h-4 text-grey stroke-2" />

        <span className="ml-4 p-1 rounded-full bg-blue-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#1066cf"
            className="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
            />
          </svg>
        </span>
        <span className="pl-3 text-sm font-medium text-gray-700">
          Task <span className="text-main font-light">created</span> Easther
          Howard
        </span>

        <span className="flex items-center ml-auto">
          <span className="font-light text-sm text-gray-400 pr-2">Due: </span>
          <CalendarIcon className="w-5 h-5 text-gray-500" />
          <time className="pl-2 text-sm font-medium text-gray-700">
            Today, 12:00 PM
          </time>
          <span className="ml-2 p-2 cursor-pointer rounded-full hover:bg-gray-50 active:bg-gray-100 transition-all duration-200">
            <EllipsisHorizontalIcon className="w-6 h-6 text-gray-400 stroke-2" />
          </span>
        </span>
      </div>

      <div className="p-5 flex">
        <div>
          <p className="leading-7 font-semibold">
            Prepare quote for Jerome Bell
          </p>
          <p className="pt-2 text-sm text-gray-400 font-light tracking-wider">
            She&apos;s interested in our new product line and wants our very
            best price. Please include a detailed breakdown of costs.
          </p>
        </div>
      </div>
    </div>
  );
};

const ActivityCard4 = () => {
  return (
    <div className="font-main w-full rounded-lg border border-gray-100 bg-white shadow-sm">
      <div className="px-3 py-2 flex items-center border-b border-b-gray-100">
        <ChevronDownIcon className="w-4 h-4 text-grey stroke-2" />

        <span className="ml-4 p-1 rounded-full bg-blue-200">
          <FaUsers className="text-blue-500 w-5 h-5" />
        </span>
        <span className="pl-3 text-sm font-medium text-gray-700">
          Meeting <span className="text-main font-light">By</span> Easther
          Howard
        </span>

        <span className="flex items-center ml-auto">
          {/* <span className="font-light text-sm text-gray-400 pr-2">Due: </span> */}
          <CalendarIcon className="w-5 h-5 text-gray-500" />
          <time className="pl-2 text-sm font-medium text-gray-700">
            Today, 12:00 PM
          </time>
          <span className="ml-2 p-2 cursor-pointer rounded-full hover:bg-gray-50 active:bg-gray-100 transition-all duration-200">
            <EllipsisHorizontalIcon className="w-6 h-6 text-gray-400 stroke-2" />
          </span>
        </span>
      </div>

      <div className="p-5 flex">
        <span className=" flex justify-center items-center border border-gray-200 bg-gray-100 w-10 h-7 rounded-full mr-4">
          <IoCallOutline className="h-5 w-5" />
        </span>

        <div>
          <p className="leading-7 font-semibold">
            Meeting Schdeuled with Jerome Bell
          </p>
          <p className="pt-2 text-sm text-gray-400 font-light tracking-wider">
            She&apos;s interested in our new product line and wants our very
            best price. Please include a detailed breakdown of costs.
          </p>
        </div>
      </div>

      <div className="p-5">
        <div className="w-full grid grid-cols-3 p-3 border border-gray-200 rounded-md">
          <div className="pr-5 pl-2 w-fit border-r  border-r-gray-200">
            <label className="text-sm text-gray-400 font-light">Reminder</label>
            <span className="flex gap-x-1 items-center w-32 text-gray-600 text-sm font-semibold">
              20 min before
              <ChevronDownIcon className="w-3 h-3 text-gray-600 translate-y-[2px]" />
            </span>
          </div>
          <div className="pr-5 pl-3 w-fit border-r text-sm  border-r-gray-200">
            <label className="text-sm text-gray-400 font-light">Duration</label>
            <span className="flex gap-x-1  items-center w-24">
              <span className="block w-4 h-4 bg-primary rounded mr-1  text-gray-600" />
              1 Hour
              <ChevronDownIcon className="w-3 h-3 text-gray-600 translate-y-[2px]" />
            </span>
          </div>
          <div className=" text-gray-600 text-sm w-58">
            <span className=" text-gray-400 font-light">Attendance</span>
            <span className="flex gap-x-1 items-center">
              <Avatar
                sx={{
                  bgcolor: "#1066cf",
                  width: 16,
                  height: 16,
                }}
                src="/profile-img4.jpg"
              />{" "}
              Esther Howard ,{" "}
              <span className="text-[#1066cf] font-semibold text-[0.5rem]">
                +1 more
              </span>
              <ChevronDownIcon className="w-3 h-3 text-gray-600 translate-y-[2px]" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ActivityCard, ActivityCard2, ActivityCard3, ActivityCard4 };
