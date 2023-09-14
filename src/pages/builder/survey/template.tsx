import React, { useEffect, useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import TemplateSidebar from "@/components/Automations/TabsComponents/TemplateSidebar";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Template() {
  const router = useRouter();
  const [activeToggle, setActiveToggle] = useState<any>(true);
  const sideData = [
    {
      title: "All Template",
    },
    {
      title: "Premium Template",
    },
    {
      title: "My Template",
    },
    {
      title: "Simple",
    },
    {
      title: "Communication",
    },
    {
      title: "Newsletter",
    },
    {
      title: "Promotion",
    },
  ];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data = [
    {
      image: require("../../../../public/images/sites/AddTemplate.png"),
      title: "Blank Email",
      paragraph: "Start with a blank email and create your own email design ",
    },
    {
      image: require("../../../../public/images/sites/welcome.png"),
      title: "Welcome",
      paragraph: "Lorem Ipsum is simply dummy text of the printing. ",
    },
    {
      image: require("../../../../public/images/sites/plainmail.png"),
      title: "Plain Mail",
      paragraph: "Lorem Ipsum is simply dummy text of the printing. ",
    },
    {
      image: require("../../../../public/images/sites/productpromo.png"),
      title: "Product Promo",
      paragraph: "Lorem Ipsum is simply dummy text of the printing. ",
    },
    {
      image: require("../../../../public/images/sites/Registration.png"),
      title: "Registration",
      paragraph: "Lorem Ipsum is simply dummy text of the printing. ",
    },
    {
      image: require("../../../../public/images/sites/newsletter.png"),
      title: "Newsletter",
      paragraph: "Lorem Ipsum is simply dummy text of the printing. ",
    },
    {
      image: require("../../../../public/images/sites/Sales.png"),
      title: "Sales",
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
            <Link href={"/builder"}>
              <div className="flex justify-start items-center">
                <div className="bg-white h-5 w-5 shadow-md rounded-full flex justify-center items-center">
                  <IoChevronBackOutline className="h-3 w-3 text-gray-900" />
                </div>
                <span className="ml-2 text-xs font-semibold text-gray-700">
                  Back to Builder
                </span>
              </div>
            </Link>
            <p className="mt-2 text-base font-semibold text-gray-700">
              New Website Template
            </p>
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
            className={`py-3 flex bg-white overflow-y-scroll scrollbar-hide flex-col justify-start top-0 left-0 pl-0 w-[80%] md:w-[40%]  lg:w-full fixed lg:relative h-screen z-40 `}
          >
            <ul className="w-full pt-3 px-4 ">
              {sideData.map((item: any, index: any) => (
                <li
                  key={index}
                  onClick={() => {
                    setWorkFlowData(item?.title);
                  }}
                  className={` ${
                    workFlowData == item?.title
                      ? "border-newBlue border-2  bg-gray-100"
                      : " hover:border-newBlue  bg-white "
                  } cursor-pointer mb-2 py-2   rounded-[5px]`}
                >
                  <p
                    className={`px-3 capitalize text-gray-500 ${
                      workFlowData == item?.title ? " text-gray-900" : null
                    } hover:text-dark text-sm font-semibold  tracking-wide  `}
                  >
                    {item?.title}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[75%]  bg-mainBg h-[100vh] scrollbar-hide  ">
          <div className="flex flex-wrap px-4 py-5">
            {newData.map((item, index) => (
              <>
                <Link
                  key={index}
                  href="/builder/survey/craft"
                  className="w-full md:w-1/2 lg:w-1/3 px-3 cursor-pointer"
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
                </Link>
                {/* {workFlowData == null ? (
                  <div
                    key={index}
                    onClick={handleCheck}
                    className="w-full md:w-1/2 lg:w-1/3 px-3 cursor-pointer"
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
                  </div>
                ) : (
                  <p>oksc</p>
                )} */}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
