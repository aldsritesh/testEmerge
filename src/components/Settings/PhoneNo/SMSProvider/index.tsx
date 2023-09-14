import React, { useState } from "react";
export default function SMSProvider() {
  return (
  
    <div className="border rounded-md  m-5  bg-white  shadow-md">
      <div className=" text-[#47494b] text-lg font-semibold  border-b  px-3 pt-3">
        <p className="m-2">SMS Providers</p>
      </div>

      <div className="mx-5 my-4 flex  flex-wrap gap-10">
        {/* Default Provider CheckBox */}
        <div className="form-control  mt-1 w-56">
          <label className=" cursor-pointer  flex  flex-col gap-3 ">
            <span className="label-text text-[#47494b] text-sm font-semibold">
              {" "}
              Default Provider
            </span>
            <input
              type="checkbox"
              className="checkbox checkbox-primary scale-75"
            />
          </label>
        </div>

        {/* Provider Name */}
        <div className="w-[19.5rem]">
          <h1 className="block text-[#47494b] text-sm pt-1 font-semibold">
            Provider Name
          </h1>

          <p className="  text-gray-500 text-[12px] py-3 rounded-md mt-2 mb-2   font-medium    ">
            {" "}
            Lead Connector
          </p>
        </div>

        {/* Provider Type */}
        <div>
          <h1 className="block text-[#47494b] text-sm pt-1 font-semibold">
            Provider Type
          </h1>

          <p className="  text-gray-500 text-[12px] py-3 rounded-md mt-2 mb-2   font-medium    ">
            {" "}
            Lead Connector
          </p>
        </div>
      </div>
      <div className=" flex justify-end mx-4">
        <button className="border bg-newBlue mb-4 mt-2 w-20  text-white rounded-md text-sm px-3 py-2">
          Save
        </button>
      </div>
      </div>
    
  );
}
