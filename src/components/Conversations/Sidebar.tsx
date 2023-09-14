import Image from "next/image";
import { MouseEventHandler, useEffect, useState } from "react";
import { FiFilter } from "react-icons/fi";
import {
  BsArrowDownUp,
  BsArrowUp,
  BsSortAlphaDown,
  BsSortAlphaDownAlt,
} from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import { GoSearch } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";
import moment from "moment";
import { FaSortAlphaDown, FaSortAlphaUpAlt } from "react-icons/fa";

export default function ChatSidebar({
  chatData,
  onSelect,
  selectedChat,
}: {
  chatData: any;
  onSelect: MouseEventHandler;
  selectedChat: any;
}) {
  const locations = [
    {
      id: "C2QujeCh8ZnC7al2InWR1",
      title: "New York City",
    },
    {
      id: "C2QujeCh8ZnC7al2InWR2",
      title: "Los Angeles",
    },
    {
      id: "C2QujeCh8ZnC7al2InWR3",
      title: "San Francisco",
    },
    {
      id: "C2QujeCh8ZnC7al2InWR4",
      title: "Chicago",
    },
    {
      id: "C2QujeCh8ZnC7al2InWR5",
      title: "Las Vegas",
    },
    {
      id: "C2QujeCh8ZnC7al2InWR6",
      title: "Grand Canyon",
    },
    {
      id: "C2QujeCh8ZnC7al2InWR7",
      title: "Yellowstone National Park",
    },
    {
      id: "C2QujeCh8ZnC7al2InWR8",
      title: "Miami",
    },
    {
      id: "C2QujeCh8ZnC7al2InWR9",
      title: "New Orleans",
    },
    {
      id: "C2QujeCh8ZnC7al2InWR10",
      title: "Seattle",
    },

    // Add more options as needed
  ];

  const sortData = [
    {
      id: 1,
      name: "Time Zone",
      value: "timeZone",
    },
    {
      id: 2,
      name: "Most Recent",
      value: "mostRecent",
    },
    {
      id: 3,
      name: "Longest Wait",
      value: "longestWait",
    },
  ];

  const [openSearchBox, setOpenSearchBox] = useState(false);
  const [selectedLocations, setSelectedLocations] = useState<number[]>([]);
  const [selectedSorted, setSelectedSorted] = useState<number[]>([]);
  const [searchEmail, setSearchEmail] = useState("");
  const [sortAscending, setSortAscending] = useState(true);
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortType, setSortType] = useState("timezone");

  // Function to handle search input change
  const handleSearchInputChange = (e: any) => {
    setSearchEmail(e.target.value);
  };

  // Function to handle sort button click
  const handleSortButtonClick = () => {
    setSortAscending(!sortAscending);
  };

  // Filter conversations by email
  const filteredConversations = chatData.filter(
    (item: any) =>
      item.email &&
      item.email.toLowerCase().includes(searchEmail.toLowerCase()) &&
      (selectedLocations.length === 0 ||
        selectedLocations.includes(item.locationId))
  );

  const sortedConversations = [...filteredConversations].sort(
    (a: any, b: any) => {
      if (sortType == "mostRecent") {
        const dateA: any = new Date(a.dateAdded);
        const dateB: any = new Date(b.dateAdded);

        if (sortOrder === "asc") {
          return dateA - dateB;
        } else {
          return dateB - dateA;
        }
      }
      if (sortType == "timeZone") {
        const emailA = a.timezone.toLowerCase();
        const emailB = b.timezone.toLowerCase();
        if (sortOrder === "asc") {
          return emailA.localeCompare(emailB);
        } else {
          return emailB.localeCompare(emailA);
        }
      }
      if (sortType == "longestWait") {
        const emailA = a.email.toLowerCase();
        const emailB = b.email.toLowerCase();
        if (sortOrder === "asc") {
          return emailA.localeCompare(emailB);
        } else {
          return emailB.localeCompare(emailA);
        }
      }
    }
  );

  const toggleSortOrder = (item: any, checked: boolean) => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    setSortType(item?.value);
    if (checked) {
      setSelectedSorted([...selectedSorted, item?.id]);
    } else {
      setSelectedSorted(selectedSorted.filter((id) => id !== item?.id));
    }
  };

  const handleLocationCheckboxChange = (
    locationId: number,
    checked: boolean
  ) => {
    if (checked) {
      setSelectedLocations([...selectedLocations, locationId]);
    } else {
      setSelectedLocations(selectedLocations.filter((id) => id !== locationId));
    }
  };

  // Display all conversations by default
  const conversationsToDisplay =
    searchEmail === "" ? chatData : filteredConversations;

  return (
    <>
      <div className="border border-b-gray-300  flex justify-between items-center">
        <h2 className="text-black font-medium text-lg px-2">Messages</h2>
        <div className="flex gap-2 p-4 items-center">
          <button onClick={() => setOpenSearchBox(!openSearchBox)} className="">
            <GoSearch className="text-lg" />
          </button>
          <div className="dropdown">
            <label tabIndex={0} className="">
              <FiFilter className="text-lg" />
            </label>

            <div
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <p className="px-2 font-semibold text-sm line-clamp-1">
                Filter By Location Id
              </p>

              <div className="py-2 h-[35vh] overflow-y-scroll scrollbar-hide">
                {locations.map((item: any, index: number) => (
                  <div key={index} className="px-2 mb-1">
                    <div className="flex justify-start items-center mb-3">
                      <input
                        type="checkbox"
                        value={item.id}
                        checked={selectedLocations.includes(item.id)}
                        onChange={(e) =>
                          handleLocationCheckboxChange(
                            item.id,
                            e.target.checked
                          )
                        }
                        className="border-gray-400 checkbox checkbox-xs checkbox-info rounded-sm bg-white"
                      />
                      <p className="line-clamp-1 text-[12px] font-medium text-gray-600 ml-1">
                        {item?.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="dropdown">
            <label tabIndex={0} className=" ">
              {sortAscending ? (
                <BsSortAlphaDownAlt className="text-lg" />
              ) : (
                <BsSortAlphaDown className="text-lg" />
              )}
            </label>
            <div
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <p className="px-2 font-semibold text-sm line-clamp-1">Sort By</p>
              <div className="py-2 h-[15vh] overflow-y-scroll scrollbar-hide">
                {sortData.map((item: any, index: number) => (
                  <div key={index} className="px-2 mb-1">
                    <div className="flex justify-start items-center mb-3">
                      <input
                        type="checkbox"
                        value={item.id}
                        checked={selectedSorted.includes(item.id)}
                        onChange={(e) =>
                          toggleSortOrder(item, e.target.checked)
                        }
                        className="border-gray-400 checkbox checkbox-xs checkbox-info rounded-sm bg-white"
                      />
                      <p className="line-clamp-1 text-[12px] font-medium text-gray-600 ml-1">
                        {item?.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* <BiMessageDetail className="text-lg" /> */}
          <div className="text-sm bg-[#e3e3e5] px-2 py-1 rounded-2xl font-medium">
            {sortedConversations?.length} (05)
          </div>
        </div>
      </div>
      {openSearchBox && (
        <div className="px-2 relative">
          <input
            type="text"
            placeholder="Search by email"
            value={searchEmail}
            onChange={handleSearchInputChange}
            className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3  py-3.5  rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
          />
          <button
            onClick={() => setOpenSearchBox(!openSearchBox)}
            className="absolute right-5 top-6"
          >
            <RxCross1 className="text-base text-gray-400 " />
          </button>
        </div>
      )}

      <div className="lg:h-[100vh] pb-40 overflow-y-scroll border-b  w-full pt-1 scrollbar-hide">
        {sortedConversations.map((item: any, index: number) => (
          <div key={index} className="px-2">
            <div
              className={`py-2 flex w-full border-b border-gray-200 rounded-xl ${
                item === selectedChat && "bg-[#cbd0d9]"
              } hover:bg-[#cbd0d9] hover:shadow transition-all cursor-pointer px-4`}
              onClick={() => onSelect(item)}
            >
              <div className="mr-3">
                <Image
                  src={require("../../../public/images/avatar/blackdog.jpg")}
                  width={50}
                  height={50}
                  alt={item.name}
                  className="rounded-full"
                />
              </div>
              <div className="w-full">
                <div className="flex justify-between items-center w-full">
                  <h5 className="font-semibold  text-sm line-clamp-1">
                    {item.email}
                  </h5>
                  {item === selectedChat ? (
                    <div className="bg-newBlue h-2 w-2 mb-1 rounded-full"></div>
                  ) : null}
                </div>

                <div className="flex justify-between items-center w-full">
                  <p className="line-clamp-1 text-[12px] mb-1 font-medium text-gray-600">
                    {item?.timezone}
                  </p>
                </div>

                <div className="flex justify-between items-center w-full -mt-1">
                  <p className="text-[11px] line-clamp-1 font-medium w[100%]">
                    {item?.dateAdded}
                    {moment(item?.dateAdded).format("dd-mm-yyyy")}{" "}
                    {moment(item?.dateAdded).fromNow()}
                  </p>
                  {/* <div className="w-5 h-5 bg-green-500 text-xs flex items-center justify-center rounded-full text-white ml-2">
                  <span>{item.messageCount}</span>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
