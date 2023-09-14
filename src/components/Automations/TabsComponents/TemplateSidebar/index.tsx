import React from "react";
import data from "./data";

export default function TemplateSidebar({ handleChange, errors }: any) {
  return (
    <>
      <div
        className={`py-3 flex bg-white overflow-y-scroll scrollbar-hide flex-col justify-start top-0 left-0 pl-0 w-[80%] md:w-[40%]  lg:w-full  bg-auth shadow-md  fixed lg:relative h-screen z-40  ease-in-out duration-300 translate-x-0 `}
      >
        <p
          className={`px-5 capitalize text-dark   text-[16px] font-semibold  tracking-wide  `}
        >
          Select Workflow type
        </p>

        <ul className="w-full pt-3 px-4 ">
          {data.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                handleChange(item?.title);
              }}
              className="  border-[1px] border-gray-100 bg-white shadow-md mb-4 py-4   rounded-[5px] "
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
          {" "}
          {errors.workFlowTypeError}{" "}
        </p>
      </div>
    </>
  );
}
