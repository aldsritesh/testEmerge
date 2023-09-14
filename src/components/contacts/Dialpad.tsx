import { useState, useRef, useEffect, useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { CiVoicemail } from "react-icons/ci";
import { MdCallEnd } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MdOutlineDialpad } from "react-icons/md";
import { HiOutlineBackspace } from "react-icons/hi";
import { BsMicFill } from "react-icons/bs";
import { TbPlayerPauseFilled } from "react-icons/tb";
import { Avatar } from "@mui/material";
import { TbNotes } from "react-icons/tb";
import { AiOutlineTag } from "react-icons/ai";
import { RxPerson } from "react-icons/rx";
import { BsPersonPlusFill } from "react-icons/bs";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { ImPhoneHangUp, ImPhone } from "react-icons/im";
import { TbCopy } from "react-icons/tb";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { GlobalContext } from "@/layouts/GlobalLayout";
import useLongPress from "../controls/LongPress";
import { Device } from "@twilio/voice-sdk";
import axios from "axios";
import { baseUrl, locationID, token } from "@/config/APIConstants";

const setupDevice = async (
  ctx: any,
  startIncomingCall: any,
  setCallDetails: any,
  setCurrentCall: any,
  endCall: any
) => {
  if (!ctx.showDialer || ctx.twilioDevice !== null) return;
  const setupTwilioDevice = async () => {
    axios
      .get(`${baseUrl}messages/twilio-token/location/${locationID}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        const data = response.data;
        const device = new Device(data.token, {
          logLevel: 1,
        });

        device.on("registered", (device: any) => {
          console.log("device registered");
        });

        device.on("error", (twilioError: any, call: any) => {
          console.log("An error has occurred: ", twilioError);
        });

        device.on("incoming", function (call: any) {
          setCallDetails({
            phoneNumber: call.parameters.From,
            name: "Unknown",
            profileImage: "/profile-img5.jpg",
            status: "Incoming Call",
          });

          call.on("disconnect", (call: any) => {
            console.log("The call has been disconnected.");
            endCall();
          });

          setCurrentCall(call);
          startIncomingCall();
        });

        device.register();
        ctx.setTwilioDevice(device);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  setupTwilioDevice();
};

const startOutgoingCall = async (
  device: any,
  phoneNumber: string,
  setCurrentCall: any,
  endCall: any
) => {
  let call = await device.connect({
    params: {
      To: phoneNumber,
    },
  });

  call.on("disconnect", (call: any) => {
    console.log("The call has been disconnected.");
    endCall();
  });

  setCurrentCall(call);
};

interface ModifyContactPanelProps {
  setIsModifyContactPanelOpen: (open: boolean) => void;
}

function ModifyContactPanel({
  setIsModifyContactPanelOpen,
}: ModifyContactPanelProps) {
  return (
    <>
      <div className="text-black animate-in slide-in-from-bottom-8 border z-10 border-gray-100 rounded-lg drop-shadow-lg bg-white w-[260px] h-[424px] pb-4">
        <button
          className="fixed m-1 z-20 rounded-full"
          onClick={() => setIsModifyContactPanelOpen(false)}
        >
          <RxCross2 className="w-4 h-4 m-1 font-bold text-gray-500" />
        </button>
        <button
          className="fixed m-1 z-20 right-1 rounded-full"
          onClick={() => setIsModifyContactPanelOpen(false)}
        >
          <span className="font-semibold text-md text-gray-500">Save</span>
        </button>
        <div className="font-semibold text-center text-gray-500 mt-1">
          Modify Contact
        </div>
        <div className="m-[10%] w-[80%] h-[85%] overflow-y-scroll scrollbar-hide pb-2 px-1">
          <div className="grid space-y-2">
            <span className="font-main  tracking-wide font-light text-light-grey">
              Full Name
            </span>
            <input
              className="font-main tracking-wide text-black px-3 border border-gray-200 rounded-lg shadow-sm w-full h-10"
              value="Jerome Bell"
            />
          </div>
          <div className="grid space-y-2 mt-4">
            <span className="font-main tracking-wide font-light text-light-grey">
              Email
            </span>
            <input
              className="font-main tracking-wide text-black px-3 border border-gray-200 rounded-lg shadow-sm w-full h-10"
              value="emailkuyahut@gmail.com"
            />
          </div>
          <div className="grid space-y-2 mt-4">
            <span className="font-main tracking-wide font-light text-light-grey">
              Phone
            </span>
            <input
              className="font-main tracking-wide text-black px-3 border border-gray-200 rounded-lg shadow-sm w-full h-10"
              value="+44 7480 488670"
            />
          </div>
          <div className="grid space-y-2 mt-4">
            <span className="font-main tracking-wide font-light text-light-grey">
              Date Of Birth
            </span>
            <input
              type="date"
              className="font-main tracking-wide text-black px-3 border border-gray-200 rounded-lg shadow-sm w-full h-10"
              value="1990-12-12"
            />
          </div>
          <div className="grid space-y-2 mt-4">
            <span className="font-main tracking-wide font-light text-light-grey">
              Social Secruity Number
            </span>
            <input
              className="font-main tracking-wide text-black px-3 border border-gray-200 rounded-lg shadow-sm w-full h-10"
              value="123-456-789"
            />
          </div>
          <div className="grid space-y-2 mt-4">
            <span className="font-main tracking-wide font-light text-light-grey">
              Date Of Injury
            </span>
            <input
              type="date"
              className="font-main tracking-wide text-black px-3 border border-gray-200 rounded-lg shadow-sm w-full h-10"
              value="2023-01-01"
            />
          </div>
        </div>
      </div>
    </>
  );
}

interface TagsPanelProps {
  setTagsPanelOpen: (open: boolean) => void;
}

function TagsPanel({ setTagsPanelOpen }: TagsPanelProps) {
  const [chipList, setChipList] = useState<string[]>([
    "hello",
    "goodbye",
    "ok",
  ]);

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const addChipToArray = (chip: string) => {
    if (!chipList.includes(chip.trim().replaceAll(",", ""))) {
      setChipList([...chipList, chip.trim().replaceAll(",", "")]);
    }
  };

  const removeChipFromArray = (index: number) => {
    setChipList(chipList.filter((chip, i) => i !== index));
  };

  const handleAddChip = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === ",") {
      if (event.currentTarget.value.trim().replaceAll(",", "") !== "")
        addChipToArray(event.currentTarget.value);
      event.currentTarget.value = "";
    }
  };

  return (
    <>
      <div className="text-black animate-in slide-in-from-bottom-8 border z-10 border-gray-100 rounded-lg drop-shadow-lg bg-white w-[260px] h-[424px] pb-4">
        <button
          className="fixed m-1 z-20 right-1 rounded-full"
          onClick={() => setTagsPanelOpen(false)}
        >
          <span className="font-semibold text-md text-gray-500">Save</span>
        </button>
        <div className="font-semibold text-center text-gray-500 mt-1">
          Add Tags
        </div>
        <div className="flex flex-col m-[5%] w-[90%] h-[85%] pb-2">
          <div
            className="grid space-y-2 px-1"
            onClick={() => {
              if (textAreaRef.current !== null) {
                textAreaRef.current.focus();
              }
            }}
          >
            <Stack
              className="scroll-snap-type-y snap-strict snap-points-y-1 flex font-main tracking-wide text-black px-3 border border-gray-200 rounded-lg shadow-sm w-full h-20 overflow-scroll py-1"
              direction="row"
              alignItems="center"
              spacing={1}
              useFlexGap
              flexWrap="wrap"
            >
              {chipList.map((chip, index) => (
                <div
                  className="rounded-full flex items-center justify-center p-1 bg-blue-50 text-blue-500"
                  key={index}
                >
                  <span className="text-xs mr-1">{chip}</span>
                  <button
                    className="w-4 h-4 rounded-full border items-center justify-center flex"
                    key={index}
                  >
                    <RxCross2
                      className="w-3 h-3 text-gray-400 font-bold"
                      onClick={() => removeChipFromArray(index)}
                    />
                  </button>
                </div>
              ))}
              <textarea
                className="resize-none scrollbar-hide text-xs outline-none w-20"
                ref={textAreaRef}
                rows={1}
                onKeyUp={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
                  handleAddChip(e);
                }}
              />
            </Stack>
          </div>
          <div className="flex-1 overflow-y-scroll scrollbar px-1 mt-2">
            <List>
              {[...Array(10)].map((__, index) => (
                <ListItem key={index}>
                  <ListItemButton
                    className="text-sm font-main"
                    onClick={() => {
                      addChipToArray("Tag " + (index + 1));
                      if (textAreaRef.current !== null) {
                        textAreaRef.current.focus();
                      }
                    }}
                  >
                    Tag {index + 1}
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Dialpad() {
  const ctx: any = useContext(GlobalContext);
  const [isCallActive, setIsCallActive] = useState(false);
  const [isCallMuted, setIsCallMuted] = useState(false);
  const [isModifyContactPanelOpen, setIsModifyContactPanelOpen] =
    useState(false);
  const [isTagsPanelOpen, setTagsPanelOpen] = useState(false);
  const phoneNumber = ctx.dialerNumber;
  const setPhoneNumber = ctx.setDialerNumber;
  const [isIncomingCall, setIsIncomingCall] = useState(false);
  const [isCallEnded, setIsCallEnded] = useState(false);
  const [currentCall, setCurrentCall] = useState<any>(null);
  const [callDetails, setCallDetails] = useState({
    phoneNumber: "+1 123 456 7890",
    name: "Unknown",
    profileImage: "",
    status: "Incoming Call",
  });
  const inputRef = useRef<HTMLInputElement>(null);

  const toggleMute = () => {
    currentCall?.mute(!isCallMuted);
    setIsCallMuted((prev) => !prev);
  };

  const [callTime, setCallTime] = useState(0);
  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isCallActive) {
      intervalId = setInterval(() => {
        setCallTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isCallActive]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const resetToDialpad = () => {
    setIsCallActive(false);
    setIsIncomingCall(false);
    setCallTime(0);
    setCurrentCall(null);
    setIsCallMuted(false);
    setIsCallEnded(false);
  };

  const endCall = () => {
    setIsCallActive(false);
    setIsIncomingCall(false);
    setCurrentCall(null);
    setIsCallMuted(false);
    setIsCallEnded(true);
    setCallDetails((prev) => ({ ...prev, status: "Call Ended" }));
  };

  const startIncomingCall = () => {
    setIsIncomingCall(true);
    setIsCallActive(false);
    setIsCallMuted(false);
    setIsCallEnded(false);
    ctx.setShowDialer(true);
  };

  const endOutgoingCall = (device: any) => {
    device.disconnectAll();
    endCall();
  };

  const endIncomingCall = (call: any) => {
    call.reject();
    endCall();
  };

  useEffect(() => {
    setupDevice(
      ctx,
      startIncomingCall,
      setCallDetails,
      setCurrentCall,
      endCall
    );
  }, [ctx.showDialer]);

  const zeroLongPressEvent = useLongPress(
    () => {
      setPhoneNumber(phoneNumber + (phoneNumber.includes("+") ? "" : "+"));
      inputRef.current?.focus();
    },
    () => {
      setPhoneNumber(phoneNumber + "0");
      inputRef.current?.focus();
    },
    {
      shouldPreventDefault: true,
      delay: 500,
    }
  );

  return (
    <>
      {isCallEnded ? (
        <>
          <div className="text-black flex flex-col w-[260px] rounded-xl bg-[#16163f] -mb-4 text-white pb-8 p-1">
            <span className="m-1 text-sm font-semibold">07:30</span>
            <button
              className="m-1 font-bold text-gray-400 fixed right-0 mr-2"
              onClick={() => ctx.setShowDialer(false)}
            >
              <RxCross2 className="w-4 h-4" />
            </button>
            {isModifyContactPanelOpen === true ? (
              <></>
            ) : isTagsPanelOpen === true ? (
              <></>
            ) : (
              <div className="-mb-4 items-center justify-center flex w-full">
                <Avatar className="w-14 h-14" src={callDetails.profileImage} />
              </div>
            )}
          </div>
          {isModifyContactPanelOpen === true ? (
            <ModifyContactPanel
              setIsModifyContactPanelOpen={setIsModifyContactPanelOpen}
            />
          ) : isTagsPanelOpen === true ? (
            <TagsPanel setTagsPanelOpen={setTagsPanelOpen} />
          ) : (
            <>
              <div className="text-black border border-[#16163f] z-10 rounded-xl drop-shadow-lg bg-[#16163f] w-[260px] h-96 pb-4">
                <div className="flex flex-col justify-center items-center px-4 text-white">
                  <span className="text-2xl font-semibold text-center">
                    {callDetails.name}
                  </span>
                  <button className="flex">
                    <span className="text-center">
                      {callDetails.phoneNumber}
                    </span>
                    <TbCopy className="text-gray-400 mt-1 ml-1" />
                  </button>
                  <span className="text-center text-lg text-gray-200 mt-4">
                    {callDetails.status}
                  </span>
                  <span className="text-center text-lg text-gray-200 mt-4">
                    {formatTime(callTime)}
                  </span>
                </div>
                <div className="flex flex-col p-4 space-y-8 justify-center items-center text-white">
                  <div className="flex space-x-8 mt-16">
                    <div className="flex flex-col justify-center">
                      <button
                        className="items-center flex justify-center rounded-full w-14 h-14 shadow-sm text-lg text-white bg-gray-500 font-semibold"
                        onClick={() => resetToDialpad()}
                      >
                        <MdOutlineDialpad className="w-7 h-7" />
                      </button>
                      <span className="text-sm mt-2">Dialpad</span>
                    </div>
                    <div className="flex flex-col justify-center">
                      <button
                        className="items-center flex justify-center rounded-full w-14 h-14 shadow-sm text-lg text-white bg-green-600 font-semibold"
                        onClick={() => {
                          setCallDetails({
                            phoneNumber: phoneNumber,
                            status: "Calling",
                            profileImage: "",
                            name: "Unknown",
                          });

                          if (ctx.twilioDevice) {
                            setCallTime(0);
                            setIsCallActive(true);
                            setIsCallEnded(false);
                            startOutgoingCall(
                              ctx.twilioDevice,
                              phoneNumber,
                              setCurrentCall,
                              endCall
                            );
                          } else {
                            console.log("Device not initialized");
                          }
                        }}
                      >
                        <ImPhone className="w-7 h-7" />
                      </button>
                      <span className="text-sm mt-2">Call Again</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      ) : isIncomingCall ? (
        <>
          <div className="text-black flex flex-col w-[260px] rounded-xl bg-[#16163f] -mb-4 text-white pb-8 p-1">
            <span className="m-1 text-sm font-semibold">07:30</span>
            <button
              className="m-1 font-bold text-gray-400 fixed right-0 mr-2"
              onClick={() => ctx.setShowDialer(false)}
            >
              <RxCross2 className="w-4 h-4" />
            </button>
            {isModifyContactPanelOpen === true ? (
              <></>
            ) : isTagsPanelOpen === true ? (
              <></>
            ) : (
              <div className="-mb-4 items-center justify-center flex w-full">
                <Avatar className="w-14 h-14" src={callDetails.profileImage} />
              </div>
            )}
          </div>
          {isModifyContactPanelOpen === true ? (
            <ModifyContactPanel
              setIsModifyContactPanelOpen={setIsModifyContactPanelOpen}
            />
          ) : isTagsPanelOpen === true ? (
            <TagsPanel setTagsPanelOpen={setTagsPanelOpen} />
          ) : (
            <>
              <div className="text-black border border-[#16163f] z-10 rounded-xl drop-shadow-lg bg-[#16163f] w-[260px] h-96 pb-4">
                <div className="flex flex-col justify-center items-center px-4 text-white">
                  <span className="text-2xl font-semibold text-center">
                    {callDetails.name}
                  </span>
                  <button className="flex">
                    <span className="text-center">
                      {callDetails.phoneNumber}
                    </span>
                    <TbCopy className="text-gray-400 mt-1 ml-1" />
                  </button>
                  <span className="text-center text-lg text-gray-200 mt-4">
                    {callDetails.status}
                  </span>
                </div>
                <div className="flex flex-col p-4 space-y-8 justify-center items-center text-white">
                  <div className="flex space-x-8 mt-32">
                    <div className="flex justify-center">
                      <button
                        className="items-center flex justify-center rounded-full w-14 h-14 shadow-sm text-lg text-white bg-red-600 font-semibold"
                        onClick={() => endIncomingCall(currentCall)}
                      >
                        <ImPhoneHangUp className="w-7 h-7" />
                      </button>
                    </div>
                    <div className="flex justify-center">
                      <button
                        className="items-center flex justify-center rounded-full w-14 h-14 shadow-sm text-lg text-white bg-green-600 font-semibold"
                        onClick={() => {
                          if (currentCall) {
                            currentCall.accept();
                            setIsIncomingCall(false);
                            setIsCallActive(true);
                          }
                        }}
                      >
                        <ImPhone className="w-7 h-7" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      ) : isCallActive ? (
        <>
          <div className="text-black flex flex-col w-[260px] rounded-xl bg-[#16163f] -mb-4 text-white pb-8 p-1">
            <span className="m-1 text-sm font-semibold">07:30</span>
            <button
              className="m-1 font-bold text-gray-400 fixed right-0 mr-2"
              onClick={() => ctx.setShowDialer(false)}
            >
              <RxCross2 className="w-4 h-4" />
            </button>
            {isModifyContactPanelOpen === true ? (
              <></>
            ) : isTagsPanelOpen === true ? (
              <></>
            ) : (
              <div className="-mb-4 items-center justify-center flex w-full">
                <Avatar className="w-14 h-14" src={callDetails.profileImage} />
              </div>
            )}
          </div>
          {isModifyContactPanelOpen === true ? (
            <ModifyContactPanel
              setIsModifyContactPanelOpen={setIsModifyContactPanelOpen}
            />
          ) : isTagsPanelOpen === true ? (
            <TagsPanel setTagsPanelOpen={setTagsPanelOpen} />
          ) : (
            <>
              <div className="text-black border border-[#16163f] z-10 rounded-xl drop-shadow-lg bg-[#16163f] w-[260px] h-96 pb-4">
                <div className="flex flex-col justify-center items-center px-4 text-white">
                  <span className="text-2xl font-semibold text-center">
                    {callDetails.name}
                  </span>
                  <button className="flex">
                    <span className="text-center">
                      {callDetails.phoneNumber}
                    </span>
                    <TbCopy className="text-gray-400 mt-1 ml-1" />
                  </button>
                  <span className="text-center text-lg text-gray-200">
                    {formatTime(callTime)}
                  </span>
                </div>
                <div className="flex flex-col p-4 space-y-8 justify-center items-center text-white">
                  <div className="flex space-x-4">
                    <div className={"flex flex-col items-center text-sm"}>
                      <button
                        className={
                          isCallMuted
                            ? "flex flex-col items-center justify-center p-3 bg-gray-600 rounded-2xl"
                            : "flex flex-col items-center justify-center p-3"
                        }
                        onClick={() => toggleMute()}
                      >
                        <BsMicFill className="w-6 h-6" />
                      </button>
                      <span className="text-gray-200">
                        {isCallMuted ? "Unmute" : "Mute"}
                      </span>
                    </div>

                    <div className="flex flex-col items-center text-sm">
                      <button className="flex flex-col items-center justify-center p-3">
                        <TbPlayerPauseFilled className="w-6 h-6" />
                      </button>
                      <span className="text-gray-200">Hold</span>
                    </div>

                    <button
                      className="flex flex-col items-center text-sm"
                      onClick={() => setIsCallActive(false)}
                    >
                      <div className="flex flex-col items-center justify-center p-3">
                        <MdOutlineDialpad className="w-6 h-6" />
                      </div>
                      <span className="text-gray-200">Dial</span>
                    </button>
                  </div>
                  <div className="flex space-x-3">
                    <div className="flex flex-col items-center text-sm">
                      <button className="flex flex-col items-center justify-center p-1 w-[70px] h-[70px] rounded-xl bg-[#2d2f50] space-y-1">
                        <TbNotes className="w-6 h-6" />
                        <span className="text-gray-200">Notes</span>
                      </button>
                    </div>

                    <div className="flex flex-col items-center text-sm">
                      <button
                        className="flex flex-col items-center justify-center p-1 w-[70px] h-[70px] rounded-xl bg-[#2d2f50] space-y-1"
                        onClick={() => setTagsPanelOpen(true)}
                      >
                        <AiOutlineTag className="w-6 h-6" />
                        <span className="text-gray-200">Tags</span>
                      </button>
                    </div>

                    <div className="flex flex-col items-center text-sm">
                      <button
                        className="flex flex-col items-center justify-center p-1 w-[70px] h-[70px] rounded-xl bg-[#2d2f50] space-y-1"
                        onClick={() => setIsModifyContactPanelOpen(true)}
                      >
                        <RxPerson className="w-6 h-6" />
                        <span className="text-gray-200">Contact</span>
                      </button>
                    </div>
                  </div>
                  <div className="flex space-x-8">
                    <div className="flex justify-center">
                      <button
                        className="items-center flex justify-center rounded-full w-11 h-11 shadow-sm text-lg text-white bg-red-600 font-semibold"
                        onClick={() => endOutgoingCall(ctx.twilioDevice)}
                      >
                        <ImPhoneHangUp className="w-6 h-6" />
                      </button>
                    </div>
                    <div className="flex justify-center">
                      <button className="flex flex-col items-center justify-center space-y-2 w-12 h-12">
                        <BsPersonPlusFill className="w-6 h-6 ml-2" />
                        <span className="text-gray-200 text-xs">Add</span>
                      </button>
                    </div>
                    <div className="flex justify-center">
                      <button className="flex flex-col items-center justify-center space-y-2 w-12 h-12">
                        <BsFillTelephoneForwardFill className="w-6 h-6 mb-0.5" />
                        <span className="text-gray-200 text-xs">Transfer</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      ) : (
        <>
          <div className="text-black flex w-[260px] rounded-xl bg-[#16163f] -mb-4 text-white pb-8 p-1">
            <span className="m-1 text-sm font-semibold">07:30</span>
            <button
              className="font-bold text-gray-400 fixed right-0 mr-1"
              onClick={() => ctx.setShowDialer(false)}
            >
              <RxCross2 className="w-4 h-4 m-1 " />
            </button>
          </div>
          <div className="text-black animate-in slide-in-from-bottom-8 border z-10 border-gray-100 rounded-lg drop-shadow-lg bg-white w-[260px] h-[424px] pb-4">
            <button
              className={currentCall ? "fixed m-1 z-20 rounded-full" : "hidden"}
              onClick={() => setIsCallActive(true)}
            >
              <RxCross2 className="w-4 h-4 m-1 font-bold text-gray-500" />
            </button>
            <div className="text-black font-semibold text-center text-gray-500 mt-2">
              Dial Pad
            </div>
            <div className="text-black flex items-center p-3 mx-6 mb-6">
              <input
                type="text"
                className="flex-1 w-32 outline-none bg-transparent text-2xl text-center"
                placeholder="Enter a number"
                onChange={(e) => setPhoneNumber(e.target.value)}
                ref={inputRef}
                value={phoneNumber}
              />
            </div>
            <div className="text-black pb-4 space-y-2 -mt-4">
              <div className="flex justify-center space-x-5">
                <button
                  className="flex flex-col items-center rounded-full w-14 h-14 border"
                  onClick={() => {
                    setPhoneNumber(phoneNumber + "1");
                    inputRef.current?.focus();
                  }}
                >
                  <span className="text-2xl font-main font-semibold">1</span>
                  <CiVoicemail className="w-4 h-4 -mt-1.5 text-gray-500" />
                </button>
                <button
                  className="flex flex-col items-center rounded-full w-14 h-14 border"
                  onClick={() => {
                    setPhoneNumber(phoneNumber + "2");
                    inputRef.current?.focus();
                  }}
                >
                  <span className="text-2xl font-main font-semibold">2</span>
                  <span className="text-[10px] -mt-1.5 text-gray-500">ABC</span>
                </button>
                <button
                  className="flex flex-col items-center rounded-full w-14 h-14 border"
                  onClick={() => {
                    setPhoneNumber(phoneNumber + "3");
                    inputRef.current?.focus();
                  }}
                >
                  <span className="text-2xl font-main font-semibold">3</span>
                  <span className="text-[10px] -mt-1.5 text-gray-500">DEF</span>
                </button>
              </div>
              <div className="flex justify-center space-x-5">
                <button
                  className="flex flex-col items-center rounded-full w-14 h-14 border"
                  onClick={() => {
                    setPhoneNumber(phoneNumber + "4");
                    inputRef.current?.focus();
                  }}
                >
                  <span className="text-2xl font-main font-semibold">4</span>
                  <span className="text-[10px] -mt-1.5 text-gray-500">GHI</span>
                </button>
                <button
                  className="flex flex-col items-center rounded-full w-14 h-14 border"
                  onClick={() => {
                    setPhoneNumber(phoneNumber + "5");
                    inputRef.current?.focus();
                  }}
                >
                  <span className="text-2xl font-main font-semibold">5</span>
                  <span className="text-[10px] -mt-1.5 text-gray-500">JKL</span>
                </button>
                <button
                  className="flex flex-col items-center rounded-full w-14 h-14 border"
                  onClick={() => {
                    setPhoneNumber(phoneNumber + "6");
                    inputRef.current?.focus();
                  }}
                >
                  <span className="text-2xl font-main font-semibold">6</span>
                  <span className="text-[10px] -mt-1.5 text-gray-500">MNO</span>
                </button>
              </div>
              <div className="flex justify-center space-x-5">
                <button
                  className="flex flex-col items-center rounded-full w-14 h-14 border"
                  onClick={() => {
                    setPhoneNumber(phoneNumber + "7");
                    inputRef.current?.focus();
                  }}
                >
                  <span className="text-2xl font-main font-semibold">7</span>
                  <span className="text-[10px] -mt-1.5 text-gray-500">
                    PQRS
                  </span>
                </button>
                <button
                  className="flex flex-col items-center rounded-full w-14 h-14 border"
                  onClick={() => {
                    setPhoneNumber(phoneNumber + "8");
                    inputRef.current?.focus();
                  }}
                >
                  <span className="text-2xl font-main font-semibold">8</span>
                  <span className="text-[10px] -mt-1.5 text-gray-500">TUV</span>
                </button>
                <button
                  className="flex flex-col items-center rounded-full w-14 h-14 border"
                  onClick={() => {
                    setPhoneNumber(phoneNumber + "9");
                    inputRef.current?.focus();
                  }}
                >
                  <span className="text-2xl font-main font-semibold">9</span>
                  <span className="text-[10px] -mt-1.5 text-gray-500">
                    WXYZ
                  </span>
                </button>
              </div>
              <div className="flex justify-center space-x-5">
                <button
                  className="flex flex-col items-center justify-center rounded-full w-14 h-14 border"
                  onClick={() => {
                    setPhoneNumber(phoneNumber + "*");
                    inputRef.current?.focus();
                  }}
                >
                  <span className="text-2xl font-main pt-1 font-semibold">
                    *
                  </span>
                </button>
                <button
                  className="flex flex-col items-center rounded-full w-14 h-14 border"
                  {...zeroLongPressEvent}
                >
                  <span className="text-2xl mt-1 font-main font-semibold">
                    0
                  </span>
                  <span className="text-sm -mt-3 text-gray-500">+</span>
                </button>
                <button
                  className="flex flex-col items-center justify-center rounded-full w-14 h-14 border"
                  onClick={() => {
                    setPhoneNumber(phoneNumber + "#");
                    inputRef.current?.focus();
                  }}
                >
                  <span className="text-2xl font-main font-semibold">#</span>
                </button>
              </div>
              <div className="flex justify-center">
                <button
                  className="flex border rounded-full w-12 h-12 shadow-sm items-center justify-center text-lg text-white bg-[#00c04b] border-[#00c04b] font-semibold"
                  onClick={() => {
                    setCallDetails({
                      phoneNumber: phoneNumber,
                      status: "Calling",
                      profileImage: "",
                      name: "Unknown",
                    });

                    if (ctx.twilioDevice) {
                      setCallTime(0);
                      setIsCallActive(true);
                      startOutgoingCall(
                        ctx.twilioDevice,
                        phoneNumber,
                        setCurrentCall,
                        endCall
                      );
                    } else {
                      console.log("Device not initialized");
                    }
                  }}
                >
                  <ImPhone className="w-6 h-6" />
                </button>
                <button
                  className="fixed right-10 mt-4"
                  onClick={() => {
                    if (phoneNumber.length > 0) {
                      setPhoneNumber(phoneNumber.slice(0, -1));
                      inputRef.current?.focus();
                    }
                  }}
                >
                  <HiOutlineBackspace className="text-gray-500 text-xl" />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
