import React from "react";

export default function DropDownData() {
  return (
    <div>
      <div className="flex justify-start items-start py-2">
        <input
          type="checkbox"
          name="1"
          className="checkbox checkbox-sm rounded-sm bg-transparent"
        />
        <p className=" text-[13px] font-medium  ml-2 mt-[-0.5px]">Data 1</p>
      </div>
      <div className="flex justify-start items-start py-2">
        <input
          type="checkbox"
          name="2"
          className="checkbox checkbox-sm rounded-sm bg-transparent"
        />
        <p className=" text-[13px] font-medium  ml-2 mt-[-0.5px]">Data 2</p>
      </div>
      <div className="flex justify-start items-start py-2">
        <input
          type="checkbox"
          name="3"
          className="checkbox checkbox-sm rounded-sm bg-transparent"
        />
        <p className=" text-[13px] font-medium  ml-2 mt-[-0.5px]">Data 3</p>
      </div>
      <div className="flex justify-start items-start py-2">
        <input
          type="checkbox"
          name="4"
          className="checkbox checkbox-sm rounded-sm bg-transparent"
        />
        <p className=" text-[13px] font-medium  ml-2 mt-[-0.5px]">Data 4</p>
      </div>
    </div>
  );
}
