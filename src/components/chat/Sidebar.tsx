import { FunnelIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import TextInput from "../controls/TextInput";
import Image from "next/image";
import { MouseEventHandler, useEffect, useState } from "react";
import DropDownData from "./DropDownData";
import { Bars3Icon } from "@heroicons/react/24/outline";
import moment from "moment-timezone"

export default function ChatSidebar({
  chatData,
  onSelect,
  selectedChat,
}: {
  chatData: any;
  onSelect: MouseEventHandler;
  selectedChat: any;
}) {
  const [chats, setChats] = useState(chatData);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    if (searchString == "") {
      setChats(chatData);
      return;
    }

    setChats(
      chatData.filter((item: any) =>
        item.name.toLowerCase().includes(searchString)
      )
    );
  }, [searchString, chatData]);

  return (
    <>
      <div className="lg:h-[100vh] pb-40 overflow-y-scroll  w-full pt-1 scrollbar-hide">
        {chats.map((item: any, index: number) => (
          <div
            key={index}
            className={`py-4 flex w-full border-b border-gray-300 ${item === selectedChat && "bg-white"
              } hover:bg-white hover:shadow transition-all cursor-pointer px-4 rounded-sm `}
            onClick={() => onSelect(item)}
          >
            <div className="mr-3">
              <Image
                src={require("../../../public/dummy/dummy-doc.png")}
                width={50}
                height={50}
                alt={item.fullName}
                className="rounded-full"
              />
            </div>
            <div className="w-full">
              <div className="flex justify-between items-center w-full">
                <h5 className="font-semibold line-clamp-1">{item.fullName}</h5>
                <time className="line-clamp-1 text-[11px] font-medium text-gray-600 text-right">
                  {moment.tz(item.addedOn, "YYYY-MM-DDThh:mm:ssZ", "Etc/UTC").local().fromNow()}
                </time>
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="text-[12px] line-clamp-1 font-medium w[95%]">
                  {"Latest message type"}
                </p>
                <div className="w-5 h-5 bg-green-500 text-xs flex items-center justify-center rounded-full text-white ml-2">
                  <span>{"0"}</span>
                </div>
              </div>
              <h6 className="line-clamp-1 text-[11px] font-medium text-gray-600">
                {""}
              </h6>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
