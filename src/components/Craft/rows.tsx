import React from "react";
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";
import { RxDragHandleDots2 } from "react-icons/rx";

const Rows = () => {
  return (
    <div className="overflow-y-scroll flex justify-around  flex-wrap h-fit scrollbar-hide  ">
      <div className=" mx-2 my-2 w-[45%] h-[100px] border-2 border-gray-200 px-2 pb-1 flex-col hover:shadow-lg">
        <div className=" w-full h-5 mt-2 flex justify-center items-center">
          <RxDragHandleDots2
            color="gray"
            style={{ transform: "rotate(90deg)" }}
          />
        </div>
        <div className="flex justify-center items-center">
          <div className="px-1 py-1 border-2 border-gray-300 w-full">
            <div className="bg-gray-300 w-full h-5 flex justify-between items-center"></div>
          </div>
        </div>
        <div className="mt-2 font-medium text-slate-950 text-sm flex justify-center items-center">
          {" "}
          1 Column
        </div>
      </div>

      <div className=" mx-2 my-2 w-[45%] h-[100px] px-3 border-2 border-gray-200 hover:shadow-lg">
        <div className=" w-full mt-2 h-5 flex justify-center items-center">
          <RxDragHandleDots2
            color="gray"
            style={{ transform: "rotate(90deg)" }}
          />
        </div>
        <div className="flex justify-around items-center border-2 border-gray-300">
          <div className="w-[50%] px-1 py-1 border-r border-gray-300">
            <div className="bg-gray-300 w-full h-5 flex justify-between items-center"></div>
          </div>
          <div className="w-[50%] px-1 py-1">
            <div className="bg-gray-300 w-full h-5  flex justify-between items-center"></div>
          </div>
        </div>
        <div className="mt-2 flex font-medium text-slate-950 text-sm justify-center items-center">
          {" "}
          2 Column
        </div>
      </div>

      <div className=" mx-2 my-2 w-[45%] h-[100px] px-4 border-2 border-gray-200 hover:shadow-lg">
        <div className=" w-full mt-2 h-5 flex justify-center items-center">
          <RxDragHandleDots2
            color="gray"
            style={{ transform: "rotate(90deg)" }}
          />
        </div>
        <div className="flex justify-center items-center border-2 border-gray-300">
          <div className="w-[50%] px-1 py-1 border-r border-gray-300">
            <div className="bg-gray-300 w-full h-5 flex justify-between items-center"></div>
          </div>
          <div className="w-[50%] px-1 py-1 border-r border-gray-300">
            <div className="bg-gray-300 w-full h-5  flex justify-between items-center"></div>
          </div>
          <div className="w-[50%] px-1 py-1">
            <div className="bg-gray-300 w-full h-5  flex justify-between items-center"></div>
          </div>
        </div>
        <div className="mt-2 flex font-medium text-slate-950 text-sm justify-center items-center">
          {" "}
          3 Column
        </div>
      </div>

      <div className=" mx-2 my-2 w-[45%] h-[100px] px-4 border-2 border-gray-200 hover:shadow-lg">
        <div className=" w-full h-5 mt-2 flex justify-center items-center">
          <RxDragHandleDots2
            color="gray"
            style={{ transform: "rotate(90deg)" }}
          />
        </div>
        <div className="flex justify-center items-center border-2 border-gray-300">
          <div className="w-[50%] px-1 py-1 border-r border-gray-300">
            <div className="bg-gray-300 w-full h-5 flex justify-between items-center"></div>
          </div>
          <div className="w-[50%] px-1 py-1 border-r border-gray-300">
            <div className="bg-gray-300 w-full h-5  flex justify-between items-center"></div>
          </div>
          <div className="w-[50%] px-1 py-1 border-r border-gray-300">
            <div className="bg-gray-300 w-full h-5  flex justify-between items-center"></div>
          </div>
          <div className="w-[50%] px-1 py-1">
            <div className="bg-gray-300 w-full h-5  flex justify-between items-center"></div>
          </div>
        </div>
        <div className="mt-2 flex font-medium text-slate-950 text-sm justify-center items-center">
          {" "}
          4 Column
        </div>
      </div>

      <div className=" mx-2 my-2 w-[45%] h-[100px] px-4 border-2 border-gray-200 hover:shadow-lg">
        <div className=" w-full h-5 mt-2 flex justify-center items-center">
          <RxDragHandleDots2
            color="gray"
            style={{ transform: "rotate(90deg)" }}
          />
        </div>
        <div className="flex justify-center items-center border-2 border-gray-300">
          <div className="w-[50%] px-1 py-1 border-r border-gray-300">
            <div className="bg-gray-300 w-full h-5 flex justify-between items-center"></div>
          </div>
          <div className="w-[50%] px-1 py-1 border-r border-gray-300">
            <div className="bg-gray-300 w-full h-5  flex justify-between items-center"></div>
          </div>
          <div className="w-[50%] px-1 py-1 border-r border-gray-300">
            <div className="bg-gray-300 w-full h-5  flex justify-between items-center"></div>
          </div>
          <div className="w-[50%] px-1 py-1 border-r border-gray-300">
            <div className="bg-gray-300 w-full h-5  flex justify-between items-center"></div>
          </div>
          <div className="w-[50%] px-1 py-1">
            <div className="bg-gray-300 w-full h-5  flex justify-between items-center"></div>
          </div>
        </div>
        <div className="mt-2 flex font-medium text-slate-950 text-sm justify-center items-center">
          {" "}
          5 Column
        </div>
      </div>

      <div className=" mx-2 my-2 w-[45%] h-[100px] px-4 border-2 border-gray-200 hover:shadow-lg">
        <div className=" w-full h-5 mt-2 flex justify-center items-center">
          <RxDragHandleDots2
            color="gray"
            style={{ transform: "rotate(90deg)" }}
          />
        </div>
        <div className="flex justify-center items-center border-2 border-gray-300">
          <div className="w-[50%] px-1 py-1 border-r border-gray-300">
            <div className="bg-gray-300 w-full h-5 flex justify-between items-center"></div>
          </div>
          <div className="w-[50%] px-1 py-1 border-r border-gray-300">
            <div className="bg-gray-300 w-full h-5  flex justify-between items-center"></div>
          </div>
          <div className="w-[50%] px-1 py-1 border-r border-gray-300">
            <div className="bg-gray-300 w-full h-5  flex justify-between items-center"></div>
          </div>
          <div className="w-[50%] px-1 py-1 border-r border-gray-300">
            <div className="bg-gray-300 w-full h-5  flex justify-between items-center"></div>
          </div>
          <div className="w-[50%] px-1 py-1 border-r border-gray-300">
            <div className="bg-gray-300 w-full h-5  flex justify-between items-center"></div>
          </div>
          <div className="w-[50%] px-1 py-1">
            <div className="bg-gray-300 w-full h-5  flex justify-between items-center"></div>
          </div>
        </div>
        <div className="mt-2 flex font-medium text-slate-950 text-sm justify-center items-center">
          {" "}
          6 Column
        </div>
      </div>
    </div>
  );
};

export default Rows;
