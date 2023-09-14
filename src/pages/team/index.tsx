import TeamsSidebar from "@/components/SettingsSidebar/TeamsSidebar";
import Search from "@/layouts/GlobalLayout/components/Search";
import {
  BellIcon,
  CalendarDaysIcon,
  PlusIcon,
  ShieldCheckIcon,
  UserIcon,
  EllipsisVerticalIcon,
  EyeIcon,
  ChevronDownIcon,
  PlusCircleIcon,
  PlusSmallIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

const userData = [
  {
    name: "Cy Ganderton",
    email: "cyganderton@gmail.com",
    date: "23 Dec 2022",
    role: "Admin",
    status: "complete",
  },
  {
    name: "Guy Hawkins",
    email: "guyhawk@gmail.com",
    date: "28 Dec 2022",
    role: "Read Only",
    status: "pending",
  },
  {
    name: "Jhon Doe",
    email: "jhondoe@gmail.com",
    date: "29 Dec 2022",
    role: "Basic",
    status: "pending",
  },
  {
    name: "Sarah Doe",
    email: "cyganderton@gmail.com",
    date: "23 Dec 2022",
    role: "Admin",
    status: "pending",
  },
];

const secondUserData = [
  {
    name: "Cy Ganderton",
    email: "cyganderton@gmail.com",
    date: "23 Dec 2022",
    role: "Admin",
    status: "pending",
  },
  {
    name: "Guy Hawkins",
    email: "guyhawk@gmail.com",
    date: "28 Dec 2022",
    role: "Read Only",
    status: "pending",
  },
];

export default function Team() {
  return (
    <>
      <div className="flex flex-wrap justify-center ">
        <div className="w-full lg:w-[25%] border-r-[1px]   bg-white    ">
          <TeamsSidebar />
        </div>
        <div className="w-full lg:w-[75%]  bg-white h-[100vh] scrollbar-hide  ">
          <header className="block w-full mb-5 h-32 lg:h-16 items-center relative z-10 border-b-[1px] border-lightGray">
            <div className="flex flex-center flex-col h-full justify-center lg:mx-auto relative  text-white z-10">
              <div className="flex flex-wrap lg:flex-nowrap justify-center items-center  relative w-full sm:ml-0 sm:pr-2  ">
                <div className="flex justify-between items-center  w-full md:w-[25%] pl-2 pr-5 py-1.5 rounded-md">
                  <div className={`flex items-center w-full justify-start`}>
                    <div className="flex lg:hidden justify-between items-center">
                      <button className=" font-space tracking-wider ml-6 block lg:hidden  ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="  h-12 w-12 text-black mt-[20%]  "
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                          />
                        </svg>
                      </button>
                    </div>
                    <p
                      className={`ml-6 capitalize text-dark   text-[20px] font-semibold  tracking-wide  `}
                    >
                      Team Members
                    </p>
                  </div>
                </div>

                <div className=" flex items-center justify-start lg:justify-end pl-5 lg:p-1   w-full md:w-[75%]   ">
                  <Search />
                  <div className="relative ml-3">
                    <a className="h-8 mr-2  bg-newBlue font-medium py-2 text-sm flex justify-center items-center rounded-lg px-3">
                      <PlusSmallIcon className="h-6 w-6 text-white mr-1" />
                      <span>Add Member</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div className="overflow-x-auto p-4">
            <table className="table w-full shadow-md rounded-lg border">
              {/* head */}
              <thead>
                <tr className="border-b border-b-gray-200">
                  <th className="bg-white">
                    <div className="flex items-center">
                      <div className="mr-2">Name</div>
                      <div>
                        <ChevronUpIcon className="text-newBlue h-2 w-2" />
                        <ChevronDownIcon className="text-newBlue h-2 w-2" />
                      </div>
                    </div>
                  </th>
                  <th className="bg-white">
                    <div className="flex items-center">
                      <div className="mr-2">Last Active</div>
                      <div>
                        <ChevronUpIcon className="text-newBlue h-2 w-2" />
                        <ChevronDownIcon className="text-newBlue h-2 w-2" />
                      </div>
                    </div>
                  </th>
                  <th className="bg-white">
                    <div className="flex items-center">
                      <div className="mr-2">Role</div>
                      <div>
                        <ChevronUpIcon className="text-newBlue h-2 w-2" />
                        <ChevronDownIcon className="text-newBlue h-2 w-2" />
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}

                {userData.map((item, index) => (
                  <tr key={index} className="border-b border-b-gray-200">
                    <td className=" w-[70%]">
                      <p className="text-black font-medium">{item.name}</p>
                      <span className="text-sm text-gray-500">
                        {item.email}
                      </span>
                    </td>
                    <td>
                      <span
                        className={`${
                          item.status == "pending"
                            ? "bg-[#fef0c7] text-[#854925]"
                            : "bg-gray-100 text-gray-500"
                        }  px-2 py-1  rounded-lg shadow text-xs font-medium`}
                      >
                        {item.status == "pending"
                          ? "Pending Invite"
                          : item.date}
                      </span>
                    </td>
                    <td>
                      <div className="flex justify-between">
                        <div className="flex items-center">
                          {item.role == "Admin" && (
                            <ShieldCheckIcon className="text-newBlue h-4 w-4 mr-1" />
                          )}

                          {item.role == "Read Only" && (
                            <EyeIcon className="text-newBlue h-4 w-4 mr-1" />
                          )}

                          {item.role == "Basic" && (
                            <UserIcon className="text-newBlue h-4 w-4 mr-1" />
                          )}

                          <span className="text-newBlue text-sm font-semibold mr-2">
                            {item.role}
                          </span>
                          <ChevronDownIcon className="text-newBlue h-4 w-4" />
                        </div>
                        <div>
                          <div className="dropdown dropdown-bottom dropdown-end">
                            <EllipsisVerticalIcon
                              tabIndex={0}
                              className="text-newBlue h-6 w-6 mr-1 m-1"
                            />
                            <ul
                              tabIndex={0}
                              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                            >
                              <li>
                                <a>Item 1</a>
                              </li>
                              <li>
                                <a>Item 2</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <table className="table w-full shadow-md rounded-lg mt-5 border">
              {/* head */}
              <thead>
                <tr className="border-b border-b-gray-200">
                  <th className="bg-white w-[77%]">
                    User imported from your salesforce consider inviting them.
                  </th>

                  <th className="bg-white text-right">Close This</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}

                {secondUserData.map((item, index) => (
                  <tr key={index} className="border-b border-b-gray-200">
                    <td>
                      <p className="text-black font-medium">{item.name}</p>
                      <span className="text-sm text-gray-500">
                        {item.email}
                      </span>
                    </td>

                    <td>
                      <div className="flex justify-between">
                        <div className="flex items-center">
                          {item.role == "Admin" && (
                            <ShieldCheckIcon className="text-newBlue h-4 w-4 mr-1" />
                          )}

                          {item.role == "Read Only" && (
                            <EyeIcon className="text-newBlue h-4 w-4 mr-1" />
                          )}

                          {item.role == "Basic" && (
                            <UserIcon className="text-newBlue h-4 w-4 mr-1" />
                          )}

                          <span className="text-newBlue text-sm font-semibold mr-2">
                            {item.role}
                          </span>
                          <ChevronDownIcon className="text-newBlue h-4 w-4" />
                        </div>
                        <div>
                          <button className="bg-white border px-4 py-2 shadow-md rounded hover:shadow-xl hover:drop-shadow-sm transition-all text-xs font-semibold">
                            Send Invite
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
