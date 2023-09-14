import React, { useEffect, useState } from "react";
import { MenuItem, Select } from "@mui/material";
import { BsChevronDown } from "react-icons/bs";
import moment from "moment";

const dummyData = [
  {
    contactName: "John Doe",
    campaign: "Campaign A",
    date: new Date(),

    assign_to: "User A",
    type: "Type X",
  },
  {
    contactName: "Jane Smith",
    campaign: "Campaign B",
    date: new Date(),

    assign_to: "User B",
    type: "Type Y",
  },
  {
    contactName: "Alex Johnson",
    campaign: "Campaign C",
    date: new Date(),

    assign_to: "User C",
    type: "Type Z",
  },
  {
    contactName: "Emily Davis",
    campaign: "Campaign D",
    date: new Date(),

    assign_to: "User D",
    type: "Type X",
  },
  {
    contactName: "Michael Brown",
    campaign: "Campaign E",
    date: new Date(),

    assign_to: "User E",
    type: "Type Y",
  },
  {
    contactName: "Sophia Wilson",
    campaign: "Campaign F",
    date: new Date(),

    assign_to: "User F",
    type: "Type Z",
  },
  {
    contactName: "Oliver Taylor",
    campaign: "Campaign G",
    date: new Date(),

    assign_to: "User G",
    type: "Type X",
  },
  {
    contactName: "Ava Anderson",
    campaign: "Campaign H",
    date: new Date(),

    assign_to: "User H",
    type: "Type Y",
  },
  {
    contactName: "William Martinez",
    campaign: "Campaign I",
    date: new Date(),

    assign_to: "User I",
    type: "Type Z",
  },
  {
    contactName: "Mia Clark",
    campaign: "Campaign J",
    date: new Date(),

    assign_to: "User J",
    type: "Type X",
  },
  {
    contactName: "James Lewis",
    campaign: "Campaign K",
    date: new Date(),

    assign_to: "User K",
    type: "Type Y",
  },
  {
    contactName: "Lily Rodriguez",
    campaign: "Campaign L",
    date: new Date(),

    assign_to: "User L",
    type: "Type Z",
  },
  {
    contactName: "Benjamin Lee",
    campaign: "Campaign M",
    date: new Date(),

    assign_to: "User M",
    type: "Type X",
  },
  {
    contactName: "Ella Harris",
    campaign: "Campaign N",
    date: new Date(),

    assign_to: "User N",
    type: "Type Y",
  },
  {
    contactName: "Henry Walker",
    campaign: "Campaign O",
    date: new Date(),

    assign_to: "User O",
    type: "Type Z",
  },
  {
    contactName: "Victoria Turner",
    campaign: "Campaign P",
    date: new Date(),

    assign_to: "User P",
    type: "Type X",
  },
  {
    contactName: "Sebastian Scott",
    campaign: "Campaign Q",
    date: new Date(),

    assign_to: "User Q",
    type: "Type Y",
  },
  {
    contactName: "Penelope Hall",
    campaign: "Campaign R",
    date: new Date(),

    assign_to: "User R",
    type: "Type Z",
  },
  {
    contactName: "Leo Young",
    campaign: "Campaign S",
    date: new Date(),

    assign_to: "User S",
    type: "Type X",
  },
  {
    contactName: "Stella King",
    campaign: "Campaign T",
    date: new Date(),

    assign_to: "User T",
    type: "Type Y",
  },
  {
    contactName: "Lucas Brown",
    campaign: "Campaign U",
    date: new Date(),

    assign_to: "User U",
    type: "Type Z",
  },
  {
    contactName: "John Doe",
    campaign: "Campaign A",
    date: new Date(),

    assign_to: "User A",
    type: "Type X",
  },
  {
    contactName: "Jane Smith",
    campaign: "Campaign B",
    date: new Date(),

    assign_to: "User B",
    type: "Type Y",
  },
  {
    contactName: "Alex Johnson",
    campaign: "Campaign C",
    date: new Date(),

    assign_to: "User C",
    type: "Type Z",
  },
  {
    contactName: "Emily Davis",
    campaign: "Campaign D",
    date: new Date(),

    assign_to: "User D",
    type: "Type X",
  },
  {
    contactName: "Michael Brown",
    campaign: "Campaign E",
    date: new Date(),

    assign_to: "User E",
    type: "Type Y",
  },
  {
    contactName: "Sophia Wilson",
    campaign: "Campaign F",
    date: new Date(),

    assign_to: "User F",
    type: "Type Z",
  },
  {
    contactName: "Oliver Taylor",
    campaign: "Campaign G",
    date: new Date(),

    assign_to: "User G",
    type: "Type X",
  },
  {
    contactName: "Ava Anderson",
    campaign: "Campaign H",
    date: new Date(),

    assign_to: "User H",
    type: "Type Y",
  },
  {
    contactName: "William Martinez",
    campaign: "Campaign I",
    date: new Date(),

    assign_to: "User I",
    type: "Type Z",
  },
  {
    contactName: "Mia Clark",
    campaign: "Campaign J",
    date: new Date(),

    assign_to: "User J",
    type: "Type X",
  },
  {
    contactName: "James Lewis",
    campaign: "Campaign K",
    date: new Date(),

    assign_to: "User K",
    type: "Type Y",
  },
  {
    contactName: "Lily Rodriguez",
    campaign: "Campaign L",
    date: new Date(),

    assign_to: "User L",
    type: "Type Z",
  },
  {
    contactName: "Benjamin Lee",
    campaign: "Campaign M",
    date: new Date(),

    assign_to: "User M",
    type: "Type X",
  },
  {
    contactName: "Ella Harris",
    campaign: "Campaign N",
    date: new Date(),

    assign_to: "User N",
    type: "Type Y",
  },
  {
    contactName: "Henry Walker",
    campaign: "Campaign O",
    date: new Date(),

    assign_to: "User O",
    type: "Type Z",
  },
  {
    contactName: "Victoria Turner",
    campaign: "Campaign P",
    date: new Date(),

    assign_to: "User P",
    type: "Type X",
  },
  {
    contactName: "Sebastian Scott",
    campaign: "Campaign Q",
    date: new Date(),

    assign_to: "User Q",
    type: "Type Y",
  },
  {
    contactName: "Penelope Hall",
    campaign: "Campaign R",
    date: new Date(),

    assign_to: "User R",
    type: "Type Z",
  },
  {
    contactName: "Leo Young",
    campaign: "Campaign S",
    date: new Date(),

    assign_to: "User S",
    type: "Type X",
  },
  {
    contactName: "Stella King",
    campaign: "Campaign T",
    date: new Date(),

    assign_to: "User T",
    type: "Type Y",
  },
  {
    contactName: "Lucas Brown",
    campaign: "Campaign U",
    date: new Date(),

    assign_to: "User U",
    type: "Type Z",
  },
  // Add more dummy data here...
];

export default function Reminder24Hr() {
  const [currentPage, setCurrentPage] = useState(0);
  const [campaignFilter, setCampaignFilter] = useState("");
  const [assignToFilter, setAssignToFilter] = useState("");
  const pageSize = 12;

  const filteredData = dummyData.filter(
    (data) =>
      (campaignFilter === "" || data.campaign === campaignFilter) &&
      (assignToFilter === "" || data.assign_to === assignToFilter)
  );

  const startIndex = currentPage * pageSize;
  const endIndex = startIndex + pageSize;
  const currentPageData = filteredData.slice(startIndex, endIndex);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleCampaignFilterChange = (item: any) => {
    setCampaignFilter(item);
    setCurrentPage(0);
  };

  const handleAssignToFilterChange = (item: any) => {
    setAssignToFilter(item);
    setCurrentPage(0);
  };
  const [openFilterDropdownOne, seTOpenFilterDropdownOne] = useState(false);
  const [openFilterDropdownTwo, seTOpenFilterDropdownTwo] = useState(false);

  const color = [
    "#FFFFCC",
    "#FFCCFF",
    "#CCFFFF",
    "#FFDDCC",
    "#DDCCFF",
    "#CCFFDD",
    "#FFEECC",
    "#EECCFF",
    "#CCFFEE",
    "#FFFECC",
    "#FECCFF",
    "#CCFFFE",
    "#FFFFDD",
    "#DDFFFF",
    "#FFEEDD",
    "#DDEEFF",
    "#DDFFEE",
    "#FFDDDD",
    "#DDDDFF",
    "#FFEEEE",
  ];

  return (
    <div className="h-[100vh] pb-[5%] overflow-y-scroll scrollbar-hide ">
      <div className="flex flex-wrap justify-between items-center bg-mainBg py-3 px-5">
        <h1 className="text-xl font-medium">Manual Calls</h1>

        <div className="flex justify-end items-center py-2 px-2 w-[50%] ">
          <div>
            <div className="relative flex justify-end items-end  w-full   px-2">
              <div className="py-3 px-5 bg-transparent border-[1px] rounded-md bg-white flex justify-center items-center">
                <p
                  onClick={() =>
                    seTOpenFilterDropdownOne(!openFilterDropdownOne)
                  }
                  className="text-[11px] font-medium"
                >
                  {campaignFilter
                    ? `T${campaignFilter}`
                    : "Select Campaign/Workflow"}
                </p>
                <BsChevronDown className="ml-2" />
              </div>
              {openFilterDropdownOne && (
                <div className="  absolute w-[80%] left-8 h-[20vh] py-2 top-10 overflow-y-scroll scrollbar-hide">
                  {dummyData.map((item: any, index: any) => (
                    <button
                      key={index}
                      onClick={() => {
                        handleCampaignFilterChange(item?.campaign);
                        seTOpenFilterDropdownOne(false);
                      }}
                      className="w-full bg-white rounded-md hover:bg-[#F3F3F5] text-[#4E5153] hover:text-[#3272F0] py-2 px-3"
                    >
                      {item.campaign}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div>
            <div className="relative flex justify-end items-end  w-full   px-2">
              <div className="py-3 px-5 bg-transparent border-[1px] rounded-md bg-white flex justify-center items-center">
                <p
                  onClick={() =>
                    seTOpenFilterDropdownTwo(!openFilterDropdownTwo)
                  }
                  className="text-[11px] font-medium"
                >
                  {assignToFilter ? `T${assignToFilter}` : "Select Assignee"}
                </p>
                <BsChevronDown className="ml-2" />
              </div>
              {openFilterDropdownTwo && (
                <div className="  absolute w-[80%] left-8 h-[20vh] py-2 top-10 overflow-y-scroll scrollbar-hide">
                  {dummyData.map((item: any, index: any) => (
                    <button
                      key={index}
                      onClick={() => {
                        handleAssignToFilterChange(item?.assign_to);
                        seTOpenFilterDropdownTwo(false);
                      }}
                      className="w-full bg-white rounded-md hover:bg-[#F3F3F5] text-[#4E5153] hover:text-[#3272F0] py-2 px-3"
                    >
                      {item.campaign}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div>
            <button className="ml-2 py-2 px-2 bg-greenShade rounded-md text-white  text-lg w-28">
              Start
            </button>
          </div>
        </div>
        <div className="flex justify-end items-end w-full pt-5 pb-3 px-2">
          <div className="flex justify-end items-end">
            <button
              disabled={currentPage === 0}
              onClick={goToPreviousPage}
              className="bg-white border-[1px] px-6 py-2"
            >
              Previous
            </button>
            <button
              disabled={endIndex >= filteredData.length}
              onClick={goToNextPage}
              className="bg-white border-[1px] px-6 py-2"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table  w-full">
          {/* head */}
          <thead className="sticky ">
            <tr>
              <th className="text-sm text-gray-700 font-semibold  bg-white border-b-[1px]">
                Contact Name
              </th>
              <th className="text-sm text-gray-700 font-semibold  bg-white border-b-[1px]">
                Campaign
              </th>
              <th className="text-sm text-gray-700 font-semibold  bg-white border-b-[1px]">
                Date
              </th>
              <th className="text-sm text-gray-700 font-semibold  bg-white border-b-[1px]">
                Assign To
              </th>
              <th className="text-sm text-gray-700 font-semibold  bg-white border-b-[1px]">
                Type
              </th>
            </tr>
          </thead>
          <tbody className=" ">
            {currentPageData.map((item, index) => (
              <tr key={index}>
                <td className="flex justify-start items-center gap-2">
                  <div
                    className="h-8 w-8 rounded-full flex justify-center items-center  text-gray-700 text-[12px] text-semibold"
                    style={{
                      backgroundColor:
                        color[Math.floor(Math.random() * color.length)],
                    }}
                  >
                    {item.contactName.substring(0, 2)}
                  </div>
                  <span className="text-[13px] text-gray-600 font-medium capitalize">
                    {item.contactName}
                  </span>
                </td>
                <td className="text-[13px] text-gray-600 font-medium capitalize">
                  {item.campaign}
                </td>
                <td className="text-[13px] text-gray-600 font-medium">
                  {moment(item.date).format("MMM DD YYYY, hh:mm a")}
                </td>
                <td className="flex justify-start items-center gap-2">
                  <div className="bg-blue-600 h-8 w-8 rounded-full flex justify-center items-center  text-white text-[12px]">
                    {item.assign_to.substring(0, 2)}
                  </div>
                  <span className="text-[13px] text-gray-600 font-medium capitalize">
                    {item.assign_to}
                  </span>
                </td>
                <td className="text-[13px] text-gray-600 font-medium capitalize">
                  {item.type}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
