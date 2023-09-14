import React from "react";
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";
import { RxDragHandleDots2 } from "react-icons/rx";

const Sections = () => {
  return (
    <div className="overflow-y-scroll flex flex-wrap w-full h-fit scrollbar-hide ">
      <div className=" ml-2 my-2 w-[45%] h-[100px] border-2 border-blue-200 px-2 pb-1 flex-col hover:shadow-lg">
        <div className=" w-full h-5 mt-2 flex justify-center items-center">
          <RxDragHandleDots2
            color="gray"
            style={{ transform: "rotate(90deg)" }}
          />
        </div>
        <div className="flex justify-center items-center">
          <div className="bg-gray-300 w-full h-5 my-2 flex justify-between items-center">
            <BiArrowToLeft color="white" />

            <BiArrowToRight color="white" />
          </div>
        </div>
        <div className="mt-2 font-medium text-slate-950 text-sm flex justify-center items-center">
          Full Width
        </div>
      </div>

      <div className=" ml-2 my-2 w-[45%] h-[100px] px-3 border-2 border-gray-200 hover:shadow-lg">
        <div className=" w-full mt-2 h-5 flex justify-center items-center">
          <RxDragHandleDots2
            color="gray"
            style={{ transform: "rotate(90deg)" }}
          />
        </div>
        <div className="flex justify-center items-center border-x-2 border-gray-300">
          <div className="bg-gray-300 w-[50%] h-5 my-2 flex justify-between items-center">
            <BiArrowToLeft color="white" />

            <BiArrowToRight color="white" />
          </div>
        </div>
        <div className="mt-2 flex font-medium text-slate-950 text-sm justify-center items-center">
          {" "}
          Wide
        </div>
      </div>

      <div className=" ml-2 my-2 w-[45%] h-[100px] px-4 border-2 border-gray-200 hover:shadow-lg">
        <div className=" w-full mt-2 h-5 flex justify-center items-center">
          <RxDragHandleDots2
            color="gray"
            style={{ transform: "rotate(90deg)" }}
          />
        </div>
        <div className="flex justify-center items-center border-x-2 border-gray-300">
          <BiArrowToRight color="gray" />
          <div className="bg-blue-300 w-[40%] h-5 my-2 mx-1 flex justify-between items-center" />
          <BiArrowToLeft color="gray" />
        </div>
        <div className="mt-2 flex font-medium text-slate-950 text-sm justify-center items-center">
          {" "}
          Medium
        </div>
      </div>

      <div className=" mx-2 my-2 w-[45%] h-[100px] px-4 border-2 border-gray-200 hover:shadow-lg">
        <div className=" w-full h-5 mt-2 flex justify-center items-center">
          <RxDragHandleDots2
            color="gray"
            style={{ transform: "rotate(90deg)" }}
          />
        </div>
        <div className="flex justify-center items-center border-x-2 border-gray-300">
          <BiArrowToRight color="gray" />
          <div className="bg-gray-300 w-[25%] h-5 my-2 mx-1 flex justify-between items-center" />
          <BiArrowToLeft color="gray" />
        </div>
        <div className="mt-2 flex font-medium text-slate-950 text-sm justify-center items-center">
          {" "}
          Small
        </div>
      </div>
    </div>
  );
};

export default Sections;
