import React from "react";

export default function Filter() {
  return (
    <div>
      <div className="flex justify-start items-start py-2">
        <input
          type="checkbox"
          name="1"
          className="checkbox checkbox-sm rounded-sm bg-transparent"
        />
        <p className=" text-[13px] font-medium  ml-2 mt-[-0.5px]">
          Consultation Room
        </p>
      </div>
      <div className="flex justify-start items-start py-2">
        <input
          type="checkbox"
          name="2"
          className="checkbox checkbox-sm rounded-sm bg-transparent"
        />
        <p className=" text-[13px] font-medium  ml-2 mt-[-0.5px]">ROF Room</p>
      </div>
      <div className="flex justify-start items-start py-2">
        <input
          type="checkbox"
          name="3"
          className="checkbox checkbox-sm rounded-sm bg-transparent"
        />
        <p className=" text-[13px] font-medium  ml-2 mt-[-0.5px]">
          Sandra Restrepo
        </p>
      </div>
      <div className="flex justify-start items-start py-2">
        <input
          type="checkbox"
          name="4"
          className="checkbox checkbox-sm rounded-sm bg-transparent"
        />
        <p className=" text-[13px] font-medium  ml-2 mt-[-0.5px]">
          Physical Therapy Room
        </p>
      </div>
      <div className="flex justify-start items-start py-2">
        <input
          type="checkbox"
          name="5"
          className="checkbox checkbox-sm rounded-sm bg-transparent"
        />
        <p className=" text-[13px] font-medium  ml-2 mt-[-0.5px]">
          Justin Dempsey
        </p>
      </div>
      <div className="flex justify-start items-start py-2">
        <input
          type="checkbox"
          name="6"
          className="checkbox checkbox-sm rounded-sm bg-transparent"
        />
        <p className=" text-[13px] font-medium  ml-2 mt-[-0.5px]">
          Claudia Garcia
        </p>
      </div>
      <div className="flex justify-start items-start py-2">
        <input
          type="checkbox"
          name="6"
          className="checkbox checkbox-sm rounded-sm bg-transparent"
        />
        <p className=" text-[13px] font-medium  ml-2 mt-[-0.5px]">
          InvisaRed Room
        </p>
      </div>
    </div>
  );
}
