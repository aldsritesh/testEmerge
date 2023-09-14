import Image from "next/image";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Simpledata({ index }) {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  const { components, save, previewing } = useSelector(
    (state) => state.WidthObj
  );

  const _handleDelete = () => {
    setShowMenu(false);
    const tempComps = JSON.parse(JSON.stringify(components));
    tempComps.splice(index, 1);
    dispatch({ type: "COMPONENT_CHANGED", payload: [] });
    setTimeout(() => {
      dispatch({ type: "COMPONENT_CHANGED", payload: tempComps });
      dispatch({ type: "CURRENT_SELECTED_INDEX", payload: -1 });
    }, 0);
  };
  const _handleDuplicate = () => {
    setShowMenu(false);
  };

  const data = [
    {
      title: "Web devlopment deal with Jane",
      date: "18 jan 2021",
      amount: "$40000",
      name: "Jane Mayer",
      image:  <Image
      width={10}
      height={10}
      src={require("../../../../public/images/avatar/blackdog.jpg")}
      alt=""
      className="rounded-full h-[18px] w-[18px] object-cover"
    />,
      status: "Contract Sent",
    },
    {
      title: "Web devlopment deal with Jane",
      date: "18 jan 2021",
      amount: "$40000",
      name: "Jane Mayer",
      image:  <Image
      width={10}
      height={10}
      src={require("../../../../public/images/avatar/blackdog.jpg")}
      alt=""
      className="rounded-full h-[18px] w-[18px] object-cover"
    />,
      status: "Contract Sent",
    },
    {
      title: "Web devlopment deal with Jane",
      date: "18 jan 2021",
      amount: "$40000",
      name: "Jane Mayer",
      image:  <Image
      width={10}
      height={10}
      src={require("../../../../public/images/avatar/blackdog.jpg")}
      alt=""
      className="rounded-full h-[18px] w-[18px] object-cover"
    />,
      status: "Contract Sent",
    },
    {
      title: "Web devlopment deal with Jane",
      date: "18 jan 2021",
      amount: "$40000",
      name: "Jane Mayer",
      image:  <Image
      width={10}
      height={10}
      src={require("../../../../public/images/avatar/blackdog.jpg")}
      alt=""
      className="rounded-full h-[18px] w-[18px] object-cover"
    />,
      status: "Contract Sent",
    },
    {
      title: "Web devlopment deal with Jane",
      date: "18 jan 2021",
      amount: "$40000",
      name: "Jane Mayer",
      image:  <Image
      width={10}
      height={10}
      src={require("../../../../public/images/avatar/blackdog.jpg")}
      alt=""
      className="rounded-full h-[18px] w-[18px] object-cover"
    />,
      status: "Contract Sent",
    },
    {
      title: "Web devlopment deal with Jane",
      date: "18 jan 2021",
      amount: "$40000",
      name: "Jane Mayer",
      image:  <Image
      width={10}
      height={10}
      src={require("../../../../public/images/avatar/blackdog.jpg")}
      alt=""
      className="rounded-full h-[18px] w-[18px] object-cover"
    />,
      status: "Contract Sent",
    },
  ];
  return (
    <div className="overflow-y-scroll scrollbar-hide rounded-md" style={{ width: "100%", height: "100%"}}>
      <div
        className="bg-white rounded-md shadow w-100 py-3 h-fit px-2 relative overflow-y-scroll scrollbar-hide"
        style={{ width: "100%" }}
      >
        <div className="flex items-center justify-between mb-3">
          <p className="font-semibold text-sm ">Deals Open</p>
        </div>
        <div className="grid grid-flow-row gap-2 ">
        {data.map((item)=>(
          <div key={index} className=" bg-gray-50 rounded p-[0.8rem]">
            <div className="flex gap-2 items-center justify-between">
              <div className="space-y-1 text-left ">
                <p className="text-[#BCBABC] text-[12px] font-medium">
                  Clossing date: {item.date}
                </p>
                <p className="text-black font-medium pt-1 line-clamp-1">
                 {item.title}
                </p>
                <div className="flex items-center gap-2 pt-1">
                 {item.image}
                  <p className="text-grey text-xs font-semibold">{item.name}</p>
                </div>
              </div>
              <div>
                <p className="text-[18px] text-black font-medium text-right mb-1">
                  {item.amount}
                </p>
                <span className="bg-blue-100 text-blue-600 whitespace-nowrap text-[12px] rounded-full px-2 py-1 font-medium">
                  {item.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      
          {/* <div className="border border-gray-300 rounded p-[0.8rem]">
            <div className="flex gap-2 items-center justify-between">
              <div className="space-y-1 text-left">
                <p className="text-grey text-[12px] font-medium">
                  Clossing date: 18 jan 2021
                </p>
                <p className="text-black font-medium pt-1 line-clamp-1">
                  Web devlopment deal with Jane
                </p>
                <div className="flex items-center gap-1 pt-1">
                  <Image
                    width={10}
                    height={10}
                    src={require("/public/images/avatar/blackdog.jpg")}
                    alt=""
                    className="rounded-full h-[18px] w-[18px] object-cover"
                  />
                  <p className="text-grey text-[11px]">Jane mayer</p>
                </div>
              </div>

              <div>
                <p className="text-[18px] text-black font-medium text-right mb-1">
                  $40,000
                </p>
                <span className="bg-accent/10 whitespace-nowrap text-accent text-[12px] rounded-full px-2 py-1 font-medium">
                  Contract sent
                </span>
              </div>
            </div>
          </div>
          <div className="border border-gray-300 rounded p-[0.8rem]">
            <div className="flex gap-2 items-center justify-between">
              <div className="space-y-1 text-left">
                <p className="text-grey text-[12px] font-medium">
                  Clossing date: 18 jan 2021
                </p>
                <p className="text-black font-medium pt-1 line-clamp-1">
                  Web devlopment deal with Jane
                </p>
                <div className="flex items-center gap-1 pt-1">
                  <Image
                    width={10}
                    height={10}
                    src={require("/public/images/avatar/blackdog.jpg")}
                    alt=""
                    className="rounded-full h-[18px] w-[18px] object-cover"
                  />
                  <p className="text-grey text-[11px]">Jane mayer</p>
                </div>
              </div>
              <div>
                <p className="text-[18px] text-black font-medium text-right mb-1">
                  $40,000
                </p>
                <span className="bg-accent/10 whitespace-nowrap text-accent text-[12px] rounded-full px-2 py-1 font-medium">
                  Contract sent
                </span>
              </div>
            </div>
          </div>
          <div className="border border-gray-300 rounded p-[0.8rem]">
            <div className="flex gap-2 items-center justify-between">
              <div className="space-y-1 text-left">
                <p className="text-grey text-[12px] font-medium">
                  Clossing date: 18 jan 2021
                </p>
                <p className="text-black font-medium pt-1 line-clamp-1">
                  Web devlopment deal with Jane
                </p>
                <div className="flex items-center gap-1 pt-1">
                  <Image
                    width={10}
                    height={10}
                    src={require("/public/images/avatar/blackdog.jpg")}
                    alt=""
                    className="rounded-full h-[18px] w-[18px] object-cover"
                  />
                  <p className="text-grey text-[11px]">Jane mayer</p>
                </div>
              </div>
              <div>
                <p className="text-[18px] text-black font-medium text-right mb-1">
                  $40,000
                </p>
                <span className="bg-accent/10 whitespace-nowrap text-accent text-[12px] rounded-full px-2 py-1 font-medium">
                  Contract sent
                </span>
              </div>
            </div>
          </div> */}
        </div>

        {!(save || previewing) && (
          <div className="absolute right-2 top-4">
            <span
              className="text-black cursor-pointer"
              onClick={() => setShowMenu(!showMenu)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M112,60a16,16,0,1,1,16,16A16,16,0,0,1,112,60Zm16,52a16,16,0,1,0,16,16A16,16,0,0,0,128,112Zm0,68a16,16,0,1,0,16,16A16,16,0,0,0,128,180Z"></path>
              </svg>
            </span>
            <ul
              className={`absolute z-50 mt-1 min-w-[120px] rounded bg-white p-0 py-2 text-sm shadow right-0 whitespace-nowrap ${
                showMenu ? "" : "hidden"
              }`}
            >
              <li onClick={_handleDuplicate}>
                <a className="cursor-pointer flex items-center px-4 gap-1 py-2 hover:bg-black/5 hover:text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"></path>
                  </svg>
                  Duplicate Widget
                </a>
              </li>
              <li onClick={_handleDelete}>
                <a className="cursor-pointer flex items-center px-4 gap-1 py-2 text-primary hover:bg-black/5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path>
                  </svg>
                  Delete Widget
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
