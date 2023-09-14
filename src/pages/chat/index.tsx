import ChatBody from "../../components/chat/ChatBody";
import DropDownData from "@/components/chat/DropDownData";
import Profile from "@/components/chat/Profile";
import ChatSidebar from "@/components/chat/Sidebar";
import { GlobalContext } from "@/layouts/GlobalLayout";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  FunnelIcon,
  XMarkIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/solid";
import { useContext, useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoChevronBackOutline } from "react-icons/io5";
import { baseUrl } from "@/config/APIConstants";
import axios from "axios";
import { EContactType, IContactData } from "@/components/Interfaces";
import { useRouter } from "next/router";
import RightSidebar from "@/components/chat/RightSidebar";
import { useAuthentication } from "@/controllers/auth";

export default function Chat() {
  const { location, token }: any = useAuthentication();
  const router = useRouter();
  const [data, setData] = useState<IContactData>({
    contact: {
      id: "",
      ownerUserID: null,
      pipelineID: null,
      pipelineStageID: null,
      fullName: "",
      emailAddress: "",
      phoneNumber: "",
      addedOn: "",
      contactType: EContactType.LEAD,
      tags: [],
      leadSources: [],
    },
    contactProfile: {
      contactID: "",
      dateOfBirth: "",
      dateOfInjury: "",
      ssn: "",
    },
    contactAddress: {
      contactID: "",
      street: "",
      city: "",
      region: "",
      postalCode: "",
      country: "",
    },
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    axios
      .post(
        `${baseUrl}contacts/filter`,
        {
          locationID: location?.id,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(({ data }) => {
        // console.log("pppgpgpgpg", data);
        setChatData(data.contacts);
        if (data.contacts.length > 0) {
          setChatToOpen(data.contacts[0]);
        }
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  const [chatData, setChatData] = useState([]);
  const [chatToOpen, setChatToOpen] = useState<any>({});
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const ctx = useContext(GlobalContext);
  ctx.setTitle("Chat");
  const [chatIsSelected, setChatIsSelected] = useState(false);
  const [searchString, setSearchString] = useState("");
  const [showConversation, setShowConversation] = useState(false);
  const [conversationModeIndex, setConversationModeIndex] = useState(0);

  useEffect(() => {
    const fetchData = async (id: string) => {
      try {
        axios
          .get(`${baseUrl}contacts/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            setData((prevData) => {
              return {
                ...prevData,
                contact: response.data.contact,
              };
            });
          })
          .catch((err) => {
            console.log(err);
          });

        axios
          .get(`${baseUrl}contacts/${id}/profile`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            setData((prevData) => {
              return {
                ...prevData,
                contactProfile: response.data.contactProfile,
              };
            });
          })
          .catch((err) => {
            console.log(err);
          });

        axios
          .get(`${baseUrl}contacts/${id}/address`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            setData((prevData) => {
              return {
                ...prevData,
                contactAddress: response.data.contactAddress,
              };
            });
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.error(error);
      }
    };

    if (router.isReady && chatToOpen) fetchData(chatToOpen.id);
  }, [router.isReady, chatToOpen]);

  useEffect(() => {
    if (searchString == "") {
      setChatData(chatData);
      return;
    }

    setChatData(
      chatData.filter((item: any) =>
        item.name.toLowerCase().includes(searchString)
      )
    );
  }, [searchString, chatData]);

  return (
    <div className="lg:h-full w-full bg-mainBg overflow-hidden relative pb-2">
      <div
        className={` w-full lg:h-full flex flex-wrap overflow-x-hidden overflow-hidden`}
      >
        <div
          className={` ${
            showProfile ? "hidden lg:block" : "block lg:block"
          } w-full lg:w-[78%] bg-white`}
        >
          <div className="border border-b-gray-300  flex flex-wrap justify-between">
            <div
              className={`${
                chatIsSelected ? "hidden lg:block" : "block lg:block"
              } w-full lg:w-[30%]`}
            >
              <div className="pt-1 bg-blue-50 pb-2 px-4 border-b-gray-300 border-r-[1px]   ">
                <div>
                  <div className="flex items-center shadow px-2 py-1 border-gray-200 border-[1px] bg-white rounded-md">
                    <MagnifyingGlassIcon className="w-6 h-6 text-gray-400 font-bold  " />
                    <input
                      placeholder="Search..."
                      value={searchString}
                      onChange={(e) => setSearchString(e.target.value)}
                      className="w-full bg-transparent outline-none border-none pl-2 font-fontSource font-medium text-sm"
                    />
                  </div>
                </div>
                <div className="w-full flex justify-between mt-2.5">
                  <select className="text-dark text-sm font-medium bg-transparent  focus-within:bottom-0 focus-within:outline-0 focus-visible:border-0">
                    <option>All</option>
                    <option>Unread</option>
                    <option>Recent</option>
                  </select>

                  <div className="dropdown dropdown-end">
                    <label tabIndex={0}>
                      <Bars3Icon className="h-6 w-6 text-gray-600" />
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

            <div
              className={`${
                chatIsSelected ? "block lg:block" : "hidden lg:block"
              }  w-full lg:w-[70%]  `}
            >
              <div className="flex flex-col justify-end items-start h-full pb-2 pl-2">
                <div className="w-full flex flex-wrap justify-between items-center px-4 3xl:pb-2">
                  <div className="flex justify-start items-center">
                    <div
                      onClick={() => setChatIsSelected(false)}
                      className="mr-2 bg-white h-5 w-5 shadow-md rounded-full flex lg:hidden justify-center items-center"
                    >
                      <IoChevronBackOutline className="h-3 w-3 text-gray-900" />
                    </div>
                    <div
                      onClick={() => setShowProfile(true)}
                      className="mb-1 mr-2"
                    >
                      <h1 className="text-xl font-semibold">
                        {chatToOpen.fullName}
                      </h1>
                    </div>
                  </div>
                  <div className="flex gap-3 mb-1">
                    <FaPhoneAlt
                      className="h-11 w-11 bg-[#f1f3f4] p-3 rounded-full cursor-pointer hover:bg-white hover:shadow-md transition-all hidden md:block"
                      onClick={() => {
                        ctx.setDialerNumber(data.contact.phoneNumber);
                        ctx.setShowDialer(true);
                      }}
                    />
                    <XMarkIcon
                      onClick={() => setShowProfile(false)}
                      className="h-11 w-11 bg-[#f1f3f4] p-3 rounded-full cursor-pointer hover:bg-white hover:shadow-md transition-all md:hidden"
                    />

                    <div className="dropdown dropdown-end md:hidden">
                      <label tabIndex={0}>
                        <EllipsisHorizontalIcon
                          onClick={() => setShowProfile(!showProfile)}
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
          </div>
          <div className="flex flex-wrap justify-between">
            <div
              className={`${
                chatIsSelected ? "hidden lg:block" : "block lg:block"
              } w-full lg:w-[30%] border-r-[1px] border-b-gray-300`}
            >
              <ChatSidebar
                chatData={chatData}
                onSelect={(chat) => {
                  setChatToOpen(chat);
                  setIsChatOpen(true);
                  setChatIsSelected(true);
                }}
                selectedChat={chatToOpen}
              />
            </div>

            <div
              className={`${
                chatIsSelected ? "block lg:block" : "hidden lg:block"
              } w-full lg:w-[70%] border-r-[1px] border-gray-300`}
            >
              <ChatBody
                contact={data.contact}
                conversationModeIndex={conversationModeIndex}
                setConversationModeIndex={setConversationModeIndex}
              />
            </div>
          </div>
        </div>

        <div
          className={` ${
            showProfile ? "block lg:block" : "hidden lg:block"
          } w-full lg:w-[22%] h-full bg-white `}
        >
          <RightSidebar
            setShowConversation={setShowConversation}
            setConversationModeIndex={setConversationModeIndex}
            data={data}
          />
        </div>
        {/* <div className="w-full md:w-[22%] h-full pt-2 pb-1">
          <ChatSidebar
            chatData={chatData}
            onSelect={(chat) => {
              setChatToOpen(chat);
              setIsChatOpen(true);
              setChatIsSelected(true);
            }}
            selectedChat={chatToOpen}
          />
        </div>
        <div className="w-full md:w-[56%] h-full bg-white pt-6 2xl:pt-0 md:border-r md:border-r-gray-300">
          <ChatBody
            chat={chatToOpen}
            chatOpen={isChatOpen}
            onClose={() => setIsChatOpen(false)}
            onProfileToggle={() => setShowProfile(!showProfile)}
            chatSelected={chatIsSelected}
          />
        </div> */}
      </div>
    </div>
  );
}
