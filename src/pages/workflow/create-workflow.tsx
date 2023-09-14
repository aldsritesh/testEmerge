import React, { useEffect, useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import TemplateSidebar from "@/components/Automations/TabsComponents/TemplateSidebar";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function CreateWorkflow() {
  const router = useRouter();
  const [activeToggle, setActiveToggle] = useState<any>(true);
  const sideData = [
    {
      title: "Start from scratch",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    // {
    //   title: "Center on a date",
    //   paragraph:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    // },
    // {
    //   title: "Center on a date property",
    //   paragraph:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    // },
  ];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data = [
    {
      image: require("../../../public/images/automation/automation.svg"),
      title: "Lead Board",
      paragraph: "Lorem Ipsum is simply dummy text of the printing. ",
    },
    {
      image: require("../../../public/images/automation/automation.svg"),
      title: "Contract Board",
      paragraph: "Lorem Ipsum is simply dummy text of the printing. ",
    },
    {
      image: require("../../../public/images/automation/automation.svg"),
      title: "Company Board",
      paragraph: "Lorem Ipsum is simply dummy text of the printing. ",
    },
    {
      image: require("../../../public/images/automation/automation.svg"),
      title: "Deal Board",
      paragraph: "Lorem Ipsum is simply dummy text of the printing. ",
    },
    {
      image: require("../../../public/images/automation/automation.svg"),
      title: "Ticket Board",
      paragraph: "Lorem Ipsum is simply dummy text of the printing. ",
    },
    {
      image: require("../../../public/images/automation/automation.svg"),
      title: "Quote Board",
      paragraph: "Lorem Ipsum is simply dummy text of the printing. ",
    },
    {
      image: require("../../../public/images/automation/automation.svg"),
      title: "Invoice Board",
      paragraph: "Lorem Ipsum is simply dummy text of the printing. ",
    },
    {
      image: require("../../../public/images/automation/automation.svg"),
      title: "Conversation Board",
      paragraph: "Lorem Ipsum is simply dummy text of the printing. ",
    },
  ];

  const [newData, setNewData] = useState(data);
  const [searchString, setSearchString] = useState("");
  useEffect(() => {
    if (searchString == "") {
      setNewData(data);
    } else {
      setNewData(
        data.filter((item) =>
          item.title.toLowerCase().includes(searchString.toLowerCase())
        )
      );
    }
  }, [searchString, data]);

  const [workFlowData, setWorkFlowData] = useState(null);
  const [errors, setErrors] = useState({
    workFlowTypeError: null,
    BoardsError: null,
  });

  // const handleCheck = () => {
  //   if (workFlowData == null) {
  //     setErrors((e: any) => ({
  //       ...e,
  //       workFlowTypeError: "Please select workflow type",
  //     }));
  //   }
  // };

  return (
    <div>
      <div className="bg-white shadow-md border-b-[1px] py-4 px-5">
        <div className="flex justify-between items-center">
          <div>
            <div className="flex justify-start items-center">
              <div className="bg-white h-5 w-5 shadow-md rounded-full flex justify-center items-center">
                <IoChevronBackOutline className="h-3 w-3 text-gray-900" />
              </div>
              <span className="ml-2 text-xs font-semibold text-gray-700">
                Back to workflow
              </span>
            </div>
            <p className="mt-2 text-base font-semibold text-gray-700">
              Create New Workflow
            </p>
          </div>

          <div className="  ml-4  bg-gray-200 rounded-lg mr-4 flex justify-between items-center">
            <div
              onClick={() => setActiveToggle(!activeToggle)}
              className={`py-2 px-4 rounded-md duration-300 ${
                activeToggle
                  ? "bg-white text-darkBlack shadow-md shadow-gray-400 "
                  : "bg-gray-200 text-gray-500"
              }   `}
            >
              From Scrath
            </div>
            <div
              onClick={() => setActiveToggle(!activeToggle)}
              className={`py-2 px-4 rounded-md duration-300 ${
                activeToggle
                  ? "bg-gray-200 text-gray-500"
                  : "bg-white text-darkBlack shadow-md shadow-gray-400 "
              }`}
            >
              Template
            </div>
          </div>

          <div>
            <div className="mb-2 px-2 py-2 flex justify-end items-end">
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 font-bold  " />
              <input
                placeholder="Search template"
                value={searchString}
                onChange={(e) => setSearchString(e.target.value)}
                className="w-[60%] bg-transparent outline-none border-none pl-4 font-fontSource font-medium text-sm "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center ">
        <div className="w-full lg:w-[25%] border-r-[1px]   bg-white    ">
          <div
            className={`py-3 flex bg-white overflow-y-scroll scrollbar-hide flex-col justify-start top-0 left-0 pl-0 w-[80%] md:w-[40%]  lg:w-full  bg-auth shadow-md  fixed lg:relative h-screen z-40  ease-in-out duration-300 translate-x-0 `}
          >
            <p
              className={`px-5 capitalize text-dark   text-[16px] font-semibold  tracking-wide  `}
            >
              Select Workflow type
            </p>

            <ul className="w-full pt-3 px-4 ">
              {sideData.map((item: any, index: any) => (
                <li
                  key={index}
                  onClick={() => {
                    setWorkFlowData(item?.title);
                    setErrors((e: any) => ({
                      ...e,
                      workFlowTypeError: null,
                    }));
                  }}
                  className={` ${
                    workFlowData == item?.title
                      ? "border-newBlue border-2"
                      : "border-gray-100 border-[1px] hover:border-newBlue hover:border-2 "
                  } cursor-pointer bg-white shadow-md mb-4 py-4   rounded-[5px]`}
                >
                  <p
                    className={`px-3 capitalize text-dark text-sm font-semibold  tracking-wide  `}
                  >
                    {item?.title}
                  </p>
                  <p
                    className={` px-3  text-gray-500 text-xs font-normal  tracking-wide  `}
                  >
                    {item?.paragraph}
                  </p>
                </li>
              ))}
            </ul>

            <p className="text-red-500 text-xs pl-4">
              {errors.workFlowTypeError}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-[75%]  bg-mainBg h-[100vh] scrollbar-hide  ">
          <div className="flex flex-wrap px-4 py-5">
            {newData.map((item, index) => (
              // {workFlowData == null ? (
              //   <div
              //     key={index}
              //     // onClick={handleCheck}
              //     className="w-full md:w-1/2 lg:w-1/4 px-3 cursor-pointer"
              //   >
              //     <div className="border-[1px] border-gray-100 hover:border-2 hover:border-newBlue bg-white shadow-md mb-4 py-2 px-2 rounded-lg">
              //       <figure className="bg-mainBg px-4 py-2 flex justify-center items-center">
              //         <Image src={item.image} alt="" />
              //       </figure>
              //       <p
              //         className={` mt-3 capitalize text-dark text-base font-semibold mb-1 tracking-wide  `}
              //       >
              //         {item?.title}
              //       </p>
              //       <p
              //         className={`  mb-3 text-gray-600 text-xs font-normal  tracking-wide  `}
              //       >
              //         {item?.paragraph}
              //       </p>
              //     </div>
              //   </div>
              // ) : (
              // eslint-disable-next-line @next/next/no-html-link-for-pages
              <a
                key={index}
                href="/workflow/new-workflow"
                className="w-full md:w-1/2 lg:w-1/4 px-3 cursor-pointer"
              >
                <div className="border-[1px] border-gray-100 hover:border-2 hover:border-newBlue bg-white shadow-md mb-4 py-2 px-2 rounded-lg">
                  <figure className="bg-mainBg px-4 py-2 flex justify-center items-center">
                    <Image src={item.image} alt="" />
                  </figure>
                  <p
                    className={` mt-3 capitalize text-dark text-base font-semibold mb-1 tracking-wide  `}
                  >
                    {item?.title}
                  </p>
                  <p
                    className={`  mb-3 text-gray-600 text-xs font-normal  tracking-wide  `}
                  >
                    {item?.paragraph}
                  </p>
                </div>
              </a>
              // )}
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
