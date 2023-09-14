import EmailMessage from "./EmailMessage";
import SMSMessage from "./SMSMessage";
import Image from "next/image";
import { createContext, useRef, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { MdFileDownload } from "react-icons/md";

import { TfiAngleDown, TfiAngleUp } from "react-icons/tfi";
import moment from "moment";

import { FaRegEnvelope } from "react-icons/fa";
import { useRouter } from "next/router";
import { EllipsisHorizontalIcon, XMarkIcon } from "@heroicons/react/24/solid";
import DropDownData from "./DropDownData";
import { IoChevronBackOutline } from "react-icons/io5";
import { HiPhoneOutgoing } from "react-icons/hi";
import { AiFillPlusCircle } from "react-icons/ai";
import ConversationModalDerived from "./UI/ConversationModalDerived";
import EndChat from "./EndChat";
import Template from "./Template";
import { BiMessageDetail } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { SlCallOut } from "react-icons/sl";
import { BsThreeDots } from "react-icons/bs";
import AppointmentForm from "./ChatRightSidebar/Appts/AppointmentForm";

export const ChatBodyContext = createContext({
  endChatModelVisibility: false,
  setEndChatModelVisibility: (e: boolean) => {},
  templateModalVisibility: false,
  setTemplateModalVisibility: (e: boolean) => {},
  isModalOpen: false,
  setIsModalOpen: (e: boolean) => {},
});

interface IChatBodyProps {
  chat: any;
  chatOpen: boolean;
  onClose: Function;
  onProfileToggle: Function;
  chatSelected: boolean;
}

export default function ChatBody({
  chat,
  chatOpen,
  onClose,
  onProfileToggle,
  chatSelected,
}: IChatBodyProps) {
  const [chatMailOpen, setChatMailOpen] = useState(true);
  const [endChatModelVisibility, setEndChatModelVisibility] = useState(false);
  const [templateModalVisibility, setTemplateModalVisibility] = useState(false);
  const [messages, setMessages] = useState([
    {
      date: "May 11, 2023",
      messages: [
        {
          type: "chats",
          direction: 0,
          message: "Sample text from recieved from the contact",
          time: "05:02 PM",
        },
        {
          type: "call",
          direction: 0,
          recordingLink: "",
          time: "06:02 PM",
        },
        {
          type: "sms",
          direction: 0,
          message: `See You Soon at Location Name on Thursday, May 11, 2023 3:00 PM! 

          Our Medical, Regenerative, & Wellness Teams look forward to learning about you! We treat others how we want to be treated—like individuals..not a number or a condition. 
          
          Get ready for a Patient Experience that’s like no other.
          
          We are located at:
           Location's location, 1238988 USA
          
          See you soon! Location Name`,
          time: "06:12 PM",
          userID: "123",
        },
        {
          type: "email",
          direction: 0,
          toName: "Front Desk",
          fromName: "Front Desk",
          subject:
            "See You Soon at Location Name on Thursday, May 11, 2023 3:00 PM!",
          message: "Thanks for booking your appointment with Location Name",
          time: "06:02 PM",
          userID: "123",
        },
      ],
    },
    {
      date: "May 11, 2023",
      messages: [
        {
          type: "chats",
          direction: 1,
          message: "Sample text from recieved from the contact",
          time: "05:02 PM",
        },
        {
          type: "call",
          direction: 1,
          recordingLink: "",
          time: "06:02 PM",
        },
        {
          type: "sms",
          direction: 1,
          message: `See You Soon at Location Name on Thursday, May 11, 2023 3:00 PM! 

          Our Medical, Regenerative, & Wellness Teams look forward to learning about you! We treat others how we want to be treated—like individuals..not a number or a condition. 
          
          Get ready for a Patient Experience that’s like no other.
          
          We are located at:
           Location's location, 1238988 USA
          
          See you soon! Location Name`,
          time: "06:12 PM",
          userID: "123",
        },
        {
          type: "email",
          direction: 1,
          toName: "Front Desk",
          fromName: "Front Desk",
          subject:
            "See You Soon at Location Name on Thursday, May 11, 2023 3:00 PM!",
          message: "Thanks for booking your appointment with Location Name",
          time: "06:02 PM",
          userID: "123",
        },
      ],
    },
  ]);

  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const messagesEndRef = useRef<any>(null);
  // useEffect(() => {
  //   if (chatOpen) {
  //     if (messagesEndRef != null) messagesEndRef?.current?.scrollIntoView({});
  //   }
  // }, [chatData, chat, chatOpen]);

  function handleSMSSend(message: string) {
    setChatMailOpen(false);
    setMessages([
      ...messages,
      {
        date: moment().format("dd nn yyyy hh:mm:ss a"),
        messages: [
          {
            type: "sms",
            direction: 1,
            message: message,
            time: moment().format("hh:mm:ss a"),
          },
        ],
      },
    ]);
  }

  function handleEmailSend(emailData: any) {
    setChatMailOpen(false);
    setMessages([
      ...messages,
      {
        date: moment().format("dd nn yyyy hh:mm:ss a"),
        messages: [
          {
            type: "email",
            direction: 0,
            fromName: emailData.from,
            toName: emailData.to,
            subject: emailData.subject,
            message: emailData.message,
            time: moment().format("hh:mm:ss a"),
            userID: "123",
          },
        ],
      },
    ]);
  }

  const [messageType, setMessageType] = useState("sms");

  function Message({ messageData }: any) {
    return (
      <div
      // className={
      //   messageData.direction === 0
      //     ? `${
      //         messageData.type !== "call"
      //           ? "bg-gray-100 py-2 px-3 rounded-r-lg rounded-bl-lg"
      //           : messageData.type == "email"
      //           ? "bg-white"
      //           : ""
      //       }`
      //     : `${
      //         messageData.type !== "call"
      //           ? "bg-[#1066cf] text-white p-4 tracking-wide rounded-l-lg rounded-br-lg"
      //           : messageData.type == "email"
      //           ? "bg-white"
      //           : ""
      //       }`
      // }
      >
        {(messageData.type === "sms" && (
          <div
            style={{ whiteSpace: "pre-line" }}
            className={`
            ${
              messageData.direction == "0"
                ? " text-gray-600 bg-gray-100 py-2 px-3 rounded-r-lg rounded-bl-lg"
                : "bg-[#1066cf] text-white p-4 tracking-wide rounded-l-lg rounded-br-lg "
            }  text-sm font-medium smsData `}
            dangerouslySetInnerHTML={{ __html: messageData.message }}
          ></div>
        )) ||
          (messageData.type === "chats" && (
            <div>
              <p
                className={`
               ${
                 messageData.direction == "0"
                   ? " text-gray-600 bg-gray-100 py-2 px-3 rounded-r-lg rounded-bl-lg"
                   : "bg-[#1066cf] text-white p-4 tracking-wide rounded-l-lg rounded-br-lg "
               }  text-sm font-medium smsData `}
              >
                {messageData.message}{" "}
              </p>
            </div>
          )) ||
          (messageData.type === "call" && (
            <>
              <div
                className={` ${
                  messageData.direction == "0"
                    ? "flex justify-start items-start"
                    : "flex justify-end items-end"
                } `}
              >
                <div className="bg-red-700 border-[1px] border-gray-300 p-1 h-6 w-6 flex justify-center items-center">
                  <SlCallOut className="text-white" />
                </div>
                <p className={`text-gray-600 font-medium ml-2`}>
                  {" "}
                  Inbound Call{" "}
                </p>
              </div>
            </>
          )) ||
          (messageData.type === "email" && (
            <>
              <div className="flex flex-col ">
                <span className={`text-gray-700 font-semibold   text-sm `}>
                  {messageData.fromName + " > " + messageData.toName}
                </span>
                <span className={`text-gray-700 font-medium mt-1 text-[12px] `}>
                  <span> {messageData.time} </span>
                </span>
                <span className={`text-gray-700 font-bold  mt-1  text-[12px] `}>
                  <span>{messageData.subject}</span>
                </span>
                <div
                  style={{ whiteSpace: "pre-line" }}
                  className={`text-gray-700font-medium mt-1 text-sm smsData pt-3 `}
                  dangerouslySetInnerHTML={{ __html: messageData.message }}
                ></div>
                <div className="mt-6">
                  <BsThreeDots />
                </div>
                {/* <button className="justify-self-end w-14 rounded-lg bg-gray-200 text-black font-semibold text-sm mr-2 h-5 px-2 text-center mt-2">
                  View
                </button> */}
              </div>
            </>
          ))}
      </div>
    );
  }

  return (
    <ChatBodyContext.Provider
      value={{
        setEndChatModelVisibility,
        endChatModelVisibility,
        templateModalVisibility,
        setTemplateModalVisibility,
        isModalOpen,
        setIsModalOpen,
      }}
    >
      <div
        className={`${
          chatOpen ? "block lg:block" : "hidden lg:block"
        }  w-full py-[6.5px] border-b border-b-gray-300`}
      >
        <div className="flex flex-col justify-end items-start h-full pl-2">
          <div className="w-full flex flex-wrap justify-between items-center px-4 3xl:pb-2">
            <div className="flex justify-start items-center">
              <div
                // onClick={() => setChatIsSelected(false)}
                className="mr-2 bg-white h-5 w-5 shadow-md rounded-full flex lg:hidden justify-center items-center"
              >
                <IoChevronBackOutline className="h-3 w-3 text-gray-900" />
              </div>
              <div
                onClick={() => onProfileToggle()}
                className="mb-1 mr-2 flex items-center gap-2"
              >
                <h1 className="text-lg font-semibold capitalize">
                  {chat.email}
                </h1>
                <HiPhoneOutgoing className="text-lg" />
              </div>
            </div>
            <div className="flex gap-3 mb-1 items-center">
              <div className="bg-[#e1e6fe] text-[#5846de] flex gap-1 items-center h-6 px-3 text-sm font-bold rounded-3xl">
                <FaRegEnvelope />
                <p>Mark as read</p>
              </div>

              <div className="text-[#5846de] flex gap-1 items-center h-6 px-2 text-sm font-bold rounded-3xl">
                <AiFillPlusCircle />
                Assign to
              </div>

              <XMarkIcon
                onClick={() => onProfileToggle()}
                className="h-11 w-11 bg-[#f1f3f4] p-3 rounded-full cursor-pointer hover:bg-white hover:shadow-md transition-all md:hidden"
              />

              <div className="dropdown dropdown-end md:hidden">
                <label tabIndex={0}>
                  <EllipsisHorizontalIcon
                    onClick={() => onProfileToggle()}
                    className="h-11 w-11 bg-[#f1f3f4] p-3 rounded-full cursor-pointer hover:bg-white hover:shadow-md transition-all"
                  />
                </label>
                <div
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <DropDownData />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          messageType == "email"
            ? "pb-[65%]"
            : messageType == "sms"
            ? "pb-[40%]"
            : "pb-[10%]"
        }  w-full px-2 h-[90vh] overflow-y-scroll  scrollbar-hide `}
      >
        {messages.map((message, index) => (
          <div key={index}>
            <div className="flex flex-col">
              <div className="flex justify-center mx-4 mb-4 sticky top-0 transition">
                <span className="text-sm text-gray-600 py-0.5 border px-2 rounded-full bg-white border-gray-100 shadow-sm">
                  {message.date}
                </span>
              </div>
              {message.messages.map((messageData, index) => (
                <div key={index} className="mb-10">
                  {messageData.direction === 0 ? (
                    <>
                      <div className="flex w-full gap-3 justify-start items-start">
                        {messageData.type === "sms" ? (
                          <div className="bg-blue-100 rounded-full h-8 w-8 flex justify-center items-center">
                            <BiMessageDetail className="h-5 w-5 text-newBlue" />
                          </div>
                        ) : messageData.type === "email" ? (
                          <div className="bg-blue-100 rounded-full h-8 w-8 flex justify-center items-center">
                            <FiMail className="h-5 w-5 text-newBlue" />
                          </div>
                        ) : (
                          <div className="avatar-group -space-x-6">
                            <div className="avatar">
                              <div className="w-8">
                                <Image
                                  src={require("../../../public/images/avatar/yellowdog.jpg")}
                                  width={40}
                                  height={40}
                                  alt=""
                                  className="rounded-full"
                                />
                              </div>
                            </div>
                          </div>
                        )}

                        <div>
                          <div className="w-[250px] lg:w-[380px] overflow-x-hidden">
                            <Message messageData={messageData} />
                          </div>
                          <div className="flex justify-between items-center pt-2">
                            <p className="text-sm text-FontGray leading-none">
                              {messageData.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="w-full">
                      <div className="flex  gap-3 justify-end items-start">
                        <div>
                          <div className="w-[250px] lg:w-[380px] overflow-x-hidden">
                            <Message messageData={messageData} />
                          </div>
                          <div className="flex justify-end items-center pt-2">
                            <p className="text-sm text-FontGray leading-none">
                              {messageData.time}
                            </p>
                          </div>
                        </div>
                        <div>
                          <div className="bg-newBlue h-8 w-8 p-1 rounded-full text-white flex justify-center items-center">
                            <p className="text-xs"> HCB </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {!chatMailOpen && (
        <div
          className={`fixed ${
            router.asPath == "/calendar"
              ? "lg:w-[55%] bottom-[-8%] 2xl:bottom-[-1%]"
              : "w-full lg:w-[48%] fixed bottom-0"
          } `}
        >
          <div className="w-full pb-3  flex  justify-start items-center border-[1px] border-lightGray px-6 bg-white">
            <div className="w-full pt-4  flex  justify-start items-center  ">
              <button
                onClick={() => {
                  setMessageType("sms");
                  setChatMailOpen(true);
                }}
                className={` ${
                  messageType == "sms"
                    ? "font-semibold text-md text-base text-[#3486E2]"
                    : "font-semibold text-md text-base text-dark"
                }  `}
              >
                SMS
              </button>
              <button
                onClick={() => {
                  setMessageType("email");
                  setChatMailOpen(true);
                }}
                className={`ml-5 ${
                  messageType == "email"
                    ? "font-semibold text-md text-base text-[#3486E2]"
                    : "font-semibold text-md text-base text-gray-700"
                }  `}
              >
                Email
              </button>
            </div>
            <button
              className="pt-4  "
              onClick={() => {
                setChatMailOpen(true);
                setMessageType("sms");
              }}
            >
              <TfiAngleUp className="h-4 w-4 text-dark" />
            </button>
          </div>
        </div>
      )}

      {chatMailOpen && (
        <div
          className={`fixed  border-[1px] bg-white w-full   flex flex-col  shadow-md rounded-b-md  pb-2   overflow-y-scroll scrollbar-hide   ${
            chatMailOpen
              ? "translate-y-[0%] opacity-1"
              : "translate-y-[140%] opacity-0"
          }   ${
            router.asPath == "/calendar"
              ? "lg:w-[55%] bottom-[-7%] 2xl:bottom-[-1%]"
              : "w-full lg:w-[48%] fixed bottom-0"
          } `}
        >
          <div className="  w-full bg-white">
            <div className="flex  justify-between items-center px-6  border-b-[1px] border-lightGray pb-1 mb-2 ">
              <div className="w-full pt-3.5 pb-2  flex  justify-start items-center  ">
                <button
                  onClick={() => {
                    setMessageType("sms");
                    setChatMailOpen(true);
                  }}
                  className={` ${
                    messageType == "sms"
                      ? "font-semibold text-md text-base text-[#3486E2]"
                      : "font-semibold text-md text-base text-dark"
                  }  `}
                >
                  SMS
                </button>
                <button
                  onClick={() => {
                    setMessageType("email");
                    setChatMailOpen(true);
                  }}
                  className={`ml-5 ${
                    messageType == "email"
                      ? "font-semibold text-md text-base text-[#3486E2]"
                      : "font-semibold text-md text-base text-gray-700"
                  }  `}
                >
                  Email
                </button>
              </div>
              <button
                onClick={() => {
                  setChatMailOpen(false);
                  setMessageType("");
                }}
              >
                <TfiAngleDown className="h-4 w-4 text-dark" />
              </button>
            </div>

            {messageType == "sms" ? (
              <SMSMessage
                onClose={() => setChatMailOpen(false)}
                handleChange={(message: string) => handleSMSSend(message)}
              />
            ) : (
              <EmailMessage
                onClose={() => setChatMailOpen(false)}
                handleChange={(emailData: string) => handleEmailSend(emailData)}
              />
            )}
          </div>
        </div>
      )}

      <ConversationModalDerived
        visibility={endChatModelVisibility}
        onClose={() => setEndChatModelVisibility(false)}
      >
        <EndChat onClose={() => setEndChatModelVisibility(false)} />
      </ConversationModalDerived>

      <ConversationModalDerived
        visibility={templateModalVisibility}
        onClose={() => setTemplateModalVisibility(false)}
      >
        <Template onClose={() => setTemplateModalVisibility(false)} />
      </ConversationModalDerived>

      <ConversationModalDerived
        visibility={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <AppointmentForm
          onClose={() => setIsModalOpen(false)}
          handleStoreAppointment={(item: any) => console.log(item)}
        />
      </ConversationModalDerived>
    </ChatBodyContext.Provider>
  );
}
