import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Main from "./Main";

export default function ManageColumns({ onClose }: any) {
  return (
    <div>
      <div className=" bg-white rounded-lg  h-[85vh] pb-[5%]  overflow-y-hidden w-full scrollbar-hide ">
        <div className=" h-[100vh]  pt-5 pb-3 w-screen md:w-[100vh]">
          <div className="h-[10vh] flex justify-between items-start border-b-[1px] pb-4 px-5">
            <div>
              <p className="text-gray-800 font-medium md:text-lg ">
                Manage Columns
              </p>
              <p className="text-gray-500 font-normal md:text-sm pt-1">
                Set the columns you had like to see on this dashboard.
              </p>
            </div>
            <button onClick={onClose}>
              <AiOutlineClose className="text-gray-800 h-6 w-6" />
            </button>
          </div>
          <div className="overflow-hidden ">
            <div className=" h-[62vh] 2xl:h-[38vh] overflow-y-scroll scrollbar-hide">
              <Main />
            </div>
          </div>
          <div className="h-[10vh] flex justify-between items-center border-t-[1px] pt-3 pb-2 px-5">
            <p className="text-gray-600 font-normal md:text-base pt-1">
              Reset to Default
            </p>
            <div className=" flex justify-end items-center gap-3">
              <button
                onClick={onClose}
                className="text-base text-gray-600 font-medium flex justify-start items-center border-[1px] border-gray-300 py-2 px-5 rounded-md  "
              >
                Cancel
              </button>
              <button
                type="submit"
                className="text-base flex justify-start items-center bg-secondary py-2 px-5 text-white rounded-md  "
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
