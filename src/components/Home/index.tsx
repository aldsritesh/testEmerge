import React from "react";
import Top from "./Left/Top";
import Main from "./Right/Main";
import Center from "./Left/Center";
import Bottom from "./Left/Bottom";

export default function HomeComponents() {
  return (
    <>
      <div className="flex flex-wrap ">
        <div className="w-full lg:w-3/12 bg-white   border-[1px] border-gray-200">
          <div className="w-full h-screen overflow-y-scroll  scrollbar-hide pt-6 ">
            <Top />
            <Center />
            <Bottom />
          </div>
        </div>
        <div className="w-full lg:w-9/12 bg-mainBg">
          <Main />
        </div>
      </div>
    </>
  );
}
