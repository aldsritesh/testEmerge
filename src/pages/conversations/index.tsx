import ChatBody from "@/components/Conversations/ChatBody";
import ChatRightSidebar from "@/components/Conversations/ChatRightSidebar";
import ChatSidebar from "@/components/Conversations/Sidebar";
import { contactBaseUrl } from "@/config/APIConstants";
import { GlobalContext } from "@/layouts/GlobalLayout";
import axios from "@/utils/axios";
import { createContext, useContext, useEffect, useState } from "react";

export const CnvContext = createContext({
  messageText: "",
  setMessageText: (e: string) => {},
});

export const chatDataItems = [
  {
    name: "Angelina Martin",
    image: "",
    message: "Please let me know if you need anything else.",
    time: "2m ago",
    messageCount: "3",
    designation: "Senior Product Designer",
    email: "angelinamartin@gmail.com",
    phone: "+919929607416",
    locationId: 1,
    date: "09-06-23",
    status: "unread",
  },
  {
    name: "John Doe",
    image: "",
    message: "Hey, how's it going?",
    time: "1m ago",
    messageCount: "7",
    designation: "Software Engineer",
    email: "johndoe@gmail.com",
    phone: "+919929607416",
    date: "4-4-23",
    locationId: 2,
    status: "unread",
  },
  {
    name: "Emily Brown",
    image: "",
    message: "Can you send me that file you mentioned?",
    time: "2w ago",
    messageCount: "4",
    designation: "Marketing Manager",
    email: "emily@gmail.com",
    phone: "+919929607416",
    date: "2-1-22",
    locationId: 3,
    status: "unread",
  },
  {
    name: "Jane Smith",
    image: "",
    message: "Thanks for getting back to me!",
    time: "2d ago",
    messageCount: "1",
    designation: "Customer Support Representative",
    email: "janesmith@gmail.com",
    phone: "+919929607416",
    date: "22-5-24",
    locationId: 4,
    status: "unread",
  },
  {
    name: "Mike Johnson",
    image: "",
    message: "Have you had a chance to review the latest design?",
    time: "1d ago",
    messageCount: "2",
    designation: "Product Manager",
    email: "mikejohnson@gmail.com",
    phone: "+919929607416",
    date: "10-7-19",
    locationId: 5,
    status: "read",
  },
  {
    name: "Olivia Taylor",
    image: "",
    message: "I'm running late for the meeting, can we reschedule?",
    time: "1d ago",
    messageCount: "1",
    designation: "Sales Representative",
    email: "Olivia@gmail.com",
    phone: "+919929607416",
    date: "3-11-11",
    locationId: 6,
    status: "read",
  },
  {
    name: "Angelina Martin",
    image: "",
    message: "Please let me know if you need anything else.",
    time: "2m ago",
    messageCount: "3",
    designation: "Senior Product Designer",
    email: "angelinamartin@gmail.com",
    phone: "+919929607416",
    locationId: 7,
    date: "7-7-23",
    status: "read",
  },
  {
    name: "John Doe",
    image: "",
    message: "Hey, how's it going?",
    time: "1m ago",
    messageCount: "7",
    designation: "Software Engineer",
    email: "johndoe@gmail.com",
    phone: "+919929607416",
    date: "8-8-23",
    locationId: 8,
    status: "read",
  },
  {
    name: "Emily Brown",
    image: "",
    message: "Can you send me that file you mentioned?",
    time: "2w ago",
    messageCount: "4",
    designation: "Marketing Manager",
    email: "emily@gmail.com",
    phone: "+919929607416",
    date: "12-12-22",
    locationId: 9,
    status: "read",
  },
  {
    name: "Jane Smith",
    image: "",
    message: "Thanks for getting back to me!",
    time: "2d ago",
    messageCount: "1",
    designation: "Customer Support Representative",
    email: "janesmith@gmail.com",
    phone: "+919929607416",
    date: "22-2-24",
    locationId: 10,
    status: "read",
  },
  {
    name: "Mike Johnson",
    image: "",
    message: "Have you had a chance to review the latest design?",
    time: "1d ago",
    messageCount: "2",
    designation: "Product Manager",
    email: "mikejohnson@gmail.com",
    phone: "+919929607416",
    date: "15-4-19",
    locationId: 11,
    status: "read",
  },
  {
    name: "Olivia Taylor",
    image: "",
    message: "I'm running late for the meeting, can we reschedule?",
    time: "1d ago",
    messageCount: "1",
    designation: "Sales Representative",
    email: "Olivia@gmail.com",
    phone: "+919929607416",
    date: "4-4-89",
    locationId: 12,
    status: "read",
  },
  {
    name: "Angelina Martin",
    image: "",
    message: "Please let me know if you need anything else.",
    time: "2m ago",
    messageCount: "3",
    designation: "Senior Product Designer",
    email: "angelinamartin@gmail.com",
    phone: "+919929607416",
    date: "7-4-23",
    locationId: 13,
    status: "read",
  },
  {
    name: "John Doe",
    image: "",
    message: "Hey, how's it going?",
    time: "1m ago",
    messageCount: "7",
    designation: "Software Engineer",
    email: "johndoe@gmail.com",
    phone: "+919929607416",
    date: "9-9-23",
    locationId: 14,
    status: "read",
  },
  {
    name: "Emily Brown",
    image: "",
    message: "Can you send me that file you mentioned?",
    time: "2w ago",
    messageCount: "4",
    designation: "Marketing Manager",
    email: "emily@gmail.com",
    phone: "+919929607416",
    date: "11-11-22",
    locationId: 15,
    status: "read",
  },
  {
    name: "Jane Smith",
    image: "",
    message: "Thanks for getting back to me!",
    time: "2d ago",
    messageCount: "1",
    designation: "Customer Support Representative",
    email: "janesmith@gmail.com",
    phone: "+919929607416",
    date: "30-1-24",
    locationId: 16,
    status: "read",
  },
  {
    name: "Mike Johnson",
    image: "",
    message: "Have you had a chance to review the latest design?",
    time: "1d ago",
    messageCount: "2",
    designation: "Product Manager",
    email: "mikejohnson@gmail.com",
    phone: "+919929607416",
    date: "29-2-19",
    locationId: 17,
    status: "read",
  },
  {
    name: "Olivia Taylor",
    image: "",
    message: "I'm running late for the meeting, can we reschedule?",
    time: "1d ago",
    messageCount: "1",
    designation: "Sales Representative",
    email: "Olivia@gmail.com",
    phone: "+919929607416",
    date: "27-3-11",
    locationId: 18,
    status: "read",
  },
];

export default function Chat() {
  const [chatData, setChatData] = useState(chatDataItems);
  const [conversations, setConversations] = useState([
    {
      id: "ocQHyuzHvysMo5N5VsXc",
      locationId: "C2QujeCh8ZnC7al2InWR1",
      email: "JohnDeo@gmail.com",
      timezone: "Central Standard Time (CST)",
      country: "DE",
      source: "xyz form",
      dateAdded: "2020-10-5T09:34:30.255Z",
      customFields: [
        {
          id: "MgobCB14YMVKuE4Ka8p1",
          value: "name",
        },
      ],
      tags: ["nisi sint commodo amet", "consequat"],
      businessId: "641c094001436dbc2081e642",
      attributions: [
        {
          url: "Trigger Link",
          campaign: "string",
          utmSource: "string",
          utmMedium: "string",
          utmContent: "string",
          referrer: "https: //www.google.com",
          campaignId: "string",
          fbclid: "string",
          gclid:
            "CjOKCQjwnNyUBhCZARISAI9AYIFtNnIcWcYGIOQINz_ZoFI5SSLRRugSoPZoiEu27IZBY£1-MAIWmEaAo2VEALW_WCB",
          msclikid: "string",
          dclid: "string",
          fbc: "string",
          fbp: "fb. 1.1674748390986.1171287961",
          fbEventId: "Mozilla/5.0",
          userAgent: "Mozilla/5.0",
          ip: "58.111.106.198",
          medium: "survey",
          mediumId: "FglfHAn30PRwsZVyQlKp",
        },
      ],
    },
    {
      id: "ocQHyuzHvysMo5N5VsXc",
      locationId: "C2QujeCh8ZnC7al2InWR3",
      email: "frhnDeo@gmail.com",
      timezone: "Coordinated Universal Time (UTC)",
      country: "DE",
      source: "xyz form",
      dateAdded: "2020-2-22T09:44:30.255Z",
      customFields: [
        {
          id: "MgobCB14YMVKuE4Ka8p1",
          value: "name",
        },
      ],
      tags: ["nisi sint commodo amet", "consequat"],
      businessId: "641c094001436dbc2081e642",
      attributions: [
        {
          url: "Trigger Link",
          campaign: "string",
          utmSource: "string",
          utmMedium: "string",
          utmContent: "string",
          referrer: "https: //www.google.com",
          campaignId: "string",
          fbclid: "string",
          gclid:
            "CjOKCQjwnNyUBhCZARISAI9AYIFtNnIcWcYGIOQINz_ZoFI5SSLRRugSoPZoiEu27IZBY£1-MAIWmEaAo2VEALW_WCB",
          msclikid: "string",
          dclid: "string",
          fbc: "string",
          fbp: "fb. 1.1674748390986.1171287961",
          fbEventId: "Mozilla/5.0",
          userAgent: "Mozilla/5.0",
          ip: "58.111.106.198",
          medium: "survey",
          mediumId: "FglfHAn30PRwsZVyQlKp",
        },
      ],
    },
    {
      id: "ocQHyuzHvysMo5N5VsXc",
      locationId: "C2QujeCh8ZnC7al2InWR5",
      email: "drgfdgnDeo@gmail.com",
      timezone: "Greenwich Mean Time (GMT)",
      country: "DE",
      source: "xyz form",
      dateAdded: "2020-5-13T09:09:30.255Z",
      customFields: [
        {
          id: "MgobCB14YMVKuE4Ka8p1",
          value: "name",
        },
      ],
      tags: ["nisi sint commodo amet", "consequat"],
      businessId: "641c094001436dbc2081e642",
      attributions: [
        {
          url: "Trigger Link",
          campaign: "string",
          utmSource: "string",
          utmMedium: "string",
          utmContent: "string",
          referrer: "https: //www.google.com",
          campaignId: "string",
          fbclid: "string",
          gclid:
            "CjOKCQjwnNyUBhCZARISAI9AYIFtNnIcWcYGIOQINz_ZoFI5SSLRRugSoPZoiEu27IZBY£1-MAIWmEaAo2VEALW_WCB",
          msclikid: "string",
          dclid: "string",
          fbc: "string",
          fbp: "fb. 1.1674748390986.1171287961",
          fbEventId: "Mozilla/5.0",
          userAgent: "Mozilla/5.0",
          ip: "58.111.106.198",
          medium: "survey",
          mediumId: "FglfHAn30PRwsZVyQlKp",
        },
      ],
    },
    {
      id: "ocQHyuzHvysMo5N5VsXc",
      locationId: "C2QujeCh8ZnC7al2InWR7",
      email: "4435nDeo@gmail.com",
      timezone: "Indian Standard Time (IST)",
      country: "DE",
      source: "xyz form",
      dateAdded: "2020-1-7T09:20:30.255Z",
      customFields: [
        {
          id: "MgobCB14YMVKuE4Ka8p1",
          value: "name",
        },
      ],
      tags: ["nisi sint commodo amet", "consequat"],
      businessId: "641c094001436dbc2081e642",
      attributions: [
        {
          url: "Trigger Link",
          campaign: "string",
          utmSource: "string",
          utmMedium: "string",
          utmContent: "string",
          referrer: "https: //www.google.com",
          campaignId: "string",
          fbclid: "string",
          gclid:
            "CjOKCQjwnNyUBhCZARISAI9AYIFtNnIcWcYGIOQINz_ZoFI5SSLRRugSoPZoiEu27IZBY£1-MAIWmEaAo2VEALW_WCB",
          msclikid: "string",
          dclid: "string",
          fbc: "string",
          fbp: "fb. 1.1674748390986.1171287961",
          fbEventId: "Mozilla/5.0",
          userAgent: "Mozilla/5.0",
          ip: "58.111.106.198",
          medium: "survey",
          mediumId: "FglfHAn30PRwsZVyQlKp",
        },
      ],
    },
    {
      id: "ocQHyuzHvysMo5N5VsXc",
      locationId: "C2QujeCh8ZnC7al2InWR9",
      email: "rsdfrgnDeo@gmail.com",
      timezone: "Eastern Standard Time (EST)",
      country: "DE",
      source: "xyz form",
      dateAdded: "2020-20-18T09:9:30.255Z",
      customFields: [
        {
          id: "MgobCB14YMVKuE4Ka8p1",
          value: "name",
        },
      ],
      tags: ["nisi sint commodo amet", "consequat"],
      businessId: "641c094001436dbc2081e642",
      attributions: [
        {
          url: "Trigger Link",
          campaign: "string",
          utmSource: "string",
          utmMedium: "string",
          utmContent: "string",
          referrer: "https: //www.google.com",
          campaignId: "string",
          fbclid: "string",
          gclid:
            "CjOKCQjwnNyUBhCZARISAI9AYIFtNnIcWcYGIOQINz_ZoFI5SSLRRugSoPZoiEu27IZBY£1-MAIWmEaAo2VEALW_WCB",
          msclikid: "string",
          dclid: "string",
          fbc: "string",
          fbp: "fb. 1.1674748390986.1171287961",
          fbEventId: "Mozilla/5.0",
          userAgent: "Mozilla/5.0",
          ip: "58.111.106.198",
          medium: "survey",
          mediumId: "FglfHAn30PRwsZVyQlKp",
        },
      ],
    },
  ]);
  const [data, setData] = useState<any>(null);
  const [chatToOpen, setChatToOpen] = useState<any>(
    data ? data[0] : chatData[0]
  );
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [messageText, setMessageText] = useState("");
  const ctx = useContext(GlobalContext);
  ctx.setTitle("Chat");

  const [chatIsSelected, setChatIsSelected] = useState(false);
  const [searchString, setSearchString] = useState("");

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

  useEffect(() => {
    // const fetchCalendar = async () => {
    //   try {
    //     const response = await axios.get(
    //       `${contactBaseUrl}?locationId=ve9EPM428h8vShlRW1KT`
    //     );
    //     setConversations((prevData: any) => [
    //       ...conversations,
    //       response.data.contacts,
    //     ]);
    //   } catch (error) {
    //     console.error("Error:", error);
    //   }
    // };
    // fetchCalendar();
  }, []);

  return (
    <CnvContext.Provider value={{ messageText, setMessageText }}>
      <div className="lg:h-full w-full bg-white overflow-hidden relative pb-2">
        <div
          className={`w-full lg:h-full flex flex-wrap overflow-x-hidden overflow-hidden `}
        >
          <div
            className={`${
              chatIsSelected ? "hidden lg:block" : "block lg:block"
            } w-full lg:w-[22%] border-r-[1px] border-b-gray-300`}
          >
            <ChatSidebar
              chatData={conversations}
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
            } w-full lg:w-[48%] border-r-[1px] border-gray-300 relative`}
          >
            <ChatBody
              chat={chatToOpen}
              chatOpen={isChatOpen}
              onClose={() => setIsChatOpen(false)}
              onProfileToggle={() => setShowProfile(!showProfile)}
              chatSelected={chatIsSelected}
            />
          </div>
          <div
            className={` ${
              showProfile ? "block lg:block" : "hidden lg:block"
            } w-full lg:w-[30%] h-full`}
          >
            <ChatRightSidebar chat={chatToOpen} />
          </div>
        </div>
      </div>
    </CnvContext.Provider>
  );
}
