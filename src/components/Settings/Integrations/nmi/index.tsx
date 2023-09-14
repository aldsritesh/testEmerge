import React from "react";
import Image from "next/image";
import Live from "./Live";
import Sandbox from "./Sandbox";

export default function NMI() {
  return (
    <div className="w-full flex justify-center items-center ">
      <div className=" w-full text-center  h-full mt-3 mb-5 pb-5 ">
        <div className="pb-6 border-b border-gray-200">
          <div className="items-center space-y-4  ">
            <Image
              src={require("../../../../../public/images/integrations/NMI.png")}
              alt=""
              className="w-52 mt-8 m-auto"
            />
            <p className="  font-bold">NMI</p>
          </div>
        </div>

        <div className="pl-4 pr-4">
          <div className=" flex justify-between text-2xl ">
            <p className="align-top text-[15px] font-bold pl-2 pt-1">Live</p>
            <p className="text-blue-500 text-sm p-2 pr-4">
              How to find NMI API keys?
            </p>
          </div>
          <Live />
        </div>
        <div className="w-full h-1 bg-slate-100 mt-6 "></div>

        <div className="pl-4 pr-4">
          <div className="pt-2 pb-4 flex justify-between">
            <p className="align-top text-[15px] font-bold pl-2">Sandbox</p>
          </div>
          <Sandbox />
        </div>
      </div>
    </div>
  );
}
