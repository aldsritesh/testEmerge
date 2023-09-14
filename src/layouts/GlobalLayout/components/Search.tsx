import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React from "react";

export default function Search() {
  return (
    <div className="hidden md:block relative  p-1">
      <input
        type="text"
        className="pl-10 bg-[#35383e] border-[1px] border-lightGray  rounded-full py-2.5  w-[190px] md:w-[260px]  text-sm focus:outline-none focus:border-none   focus:bg-white focus:rounded-full  text-black"
        placeholder="Search lead, contact and more"
        onChange={({ target }) => {}}
      />
      <div className="   absolute top-2 left-2 font-bold h-[30px] w-[30px] p-1.5 rounded-full">
        <MagnifyingGlassIcon className="  text-FontGray" />
      </div>
    </div>
  );
}
