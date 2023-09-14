import { MouseEvent, useEffect, useState } from "react";
import { ActivityCard, ActivityCard2, ActivityCard4 } from "./ActivityCard";
import AppointmentCard from "./AppointmentCard";
import Conversations from "./Conversations";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { IContactData } from "../Interfaces";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import dynamic from "next/dynamic";
import { useRecoilState } from "recoil";
import { nameTrigger } from "@/atoms/nameTrigger";
import Notes from "./Notes";
import MeetingHistoryCard from "./MeetingHistoryCard";
import ActivityTab from "./ActivityTab";
import NotesTab from "./NotesTab";
import TaskTab from "./TaskTab";
import ChatBody from "./ChatBody";
import AppointmentTab from "./AppointmentTab";

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
});

const tabs = ["Activity", "Notes", "Conversation", "Task", "Appointments"];

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }],
    [{ font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

interface IProps {
  data: IContactData;
  conversationModeIndex: number;
  setConversationModeIndex: (index: number) => void;
  showConversation: boolean;
  setShowConversation: (showConversation: boolean) => void;
}

export default function Center({
  data,
  showConversation,
  setShowConversation,
  conversationModeIndex,
  setConversationModeIndex,
}: IProps) {
  const [topTabIndex, setTopTabIndex] = useState(0);
  const [chatData, setChatData] = useState([]);
  const [chatToOpen, setChatToOpen] = useState<any>(chatData[0]);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    if (showConversation) setTopTabIndex(2);
  }, [showConversation]);
  return (
    <div className={`h-[100%] flex flex-col transition-all`}>
      <div className="my-4 px-2 flex flex-cols border-b border-[#E9E9E9]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="#78889B"
          aria-hidden="true"
          className="w-5 h-5 mt-2.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          ></path>
        </svg>
        <input
          type="text"
          className="focus:outline-none text-gray-400 text-sm block bg-mainBg w-full py-2.5 pr-2.5 pl-2 text-grey font-main font-light tracking-wider"
          placeholder="Search activity, notes, email and more"
        />
      </div>
      <div className="w-full flex justify-center">
        <div className="flex flex-wrap w-full mx-4 justify-between bg-[#cecccc2a] rounded-lg">
          {tabs.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                setTopTabIndex(index);
                setShowConversation(false);
              }}
              className={`relative  font-main font-medium px-5 py-2 flex items-center ${
                topTabIndex === index
                  ? "bg-white font-semibold rounded-md m-0.5 shadow-md text-black"
                  : "text-gray-400"
              } transition-all duration-200`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col">
        {topTabIndex === 0 ? (
          <div className="m-4">
            <ActivityTab />
          </div>
        ) : topTabIndex === 1 ? (
          <div className="m-4">
            <NotesTab />
          </div>
        ) : topTabIndex === 2 ? (
          <div className="rounded-md block mt-4 w-[90%] flex-1 overflow-y-auto scrollbar-hide bg-white">
            <ChatBody
              contact={data.contact}
              conversationModeIndex={conversationModeIndex}
              setConversationModeIndex={setConversationModeIndex}
            />
          </div>
        ) : topTabIndex === 3 ? (
          <div className="m-4">
            <TaskTab />
          </div>
        ) : topTabIndex === 4 ? (
          <div className="m-4">
            <AppointmentTab />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
