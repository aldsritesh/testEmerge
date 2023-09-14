import { ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { MenuItem, Select } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import Live from "../nmi/Live";
import Sandbox from "../nmi/Sandbox";

export default function Nmi() {
  const [selectedComponent, setSelectedComponent] = useState(true);
  const [selectedIntegration, setSelectedIntegration] = useState(true);
  const [showSelectedComponent, SetShowSelectedComponent] = useState(false);

  const [stripe, selectedStripe] = useState("");
  const [show, setshow] = useState(false);
  const [showLiveData, setShowLiveData] = useState<any>(false);
  const handleChange = ({ target }: any) => {
    selectedStripe(target.value);
  };
  return (
    <div>
      <div
        className={`transition-all fixed ${
          showSelectedComponent
            ? "bottom-0 opacity-100 z-50"
            : "-bottom-[20px] opacity-0 -z-10"
        }  left-0 bg-black backdrop-blur-[5px] bg-opacity-20   h-screen w-full overflow-x-hidden flex items-center justify-center scrollbar-hide `}
      >
        <div
          className={`relative z-50 bg-white shadow-md rounded-xl w-[600px] `}
        >
          {" "}
          <div className=" scrollbar-hide overflow-y-scroll h-96 md:h-auto md:max-h-[40rem] ">
            <div className="flex justify-between items-center px-5 py-2 border-b">
              <p className="text-gray-600  font-semibold fontStrawFord text-lg pb-2 pt-3 leading-5">
                NMI
              </p>
              <button onClick={() => SetShowSelectedComponent(false)}>
                <XMarkIcon className="h-5 w-5 text-gray-600" />
              </button>
            </div>
            <div className="pb-6 border-b border-gray-200">
              <div className="items-center space-y-4  ">
                <Image
                  src={require("../../../../../public/images/integrations/NMI.png")}
                  alt=""
                  className="w-72 mt-7 m-auto"
                />
              </div>
            </div>

            <div className="pl-4 pr-4">
              <div className=" flex justify-between text-2xl ">
                <p className="align-top text-[15px] font-bold pl-2">Live</p>
                <p className="text-blue-500 text-sm p-2 pr-4">
                  How to find Authorize.net API keys?
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
        <div
          className="w-full h-full opacity-30 absolute top-0 left-0 z-40 bg-popup bg-cover bg-bottom"
          onClick={() => SetShowSelectedComponent(false)}
        ></div>
      </div>

      <div className=" shadow-gray-300 bg-white pb-8 pt-3 px-6 rounded-md">
        <div className="flex justify-center items-center">
          <div>
            <Image
              src={require("../../../../../public/images/integrations/NMI.png")}
              alt="emerge"
              height={180}
              width={180}
            />
          </div>
        </div>

        <div className="flex justify-center items-center pt-3">
          <p className="text-[12px]">NMI</p>
        </div>

        <div className="p-4">
          {!show ? (
            <div>
              {/* <div className="flex justify-center">
                  <p className="text-sm text-center pt-2">{google}</p>
                </div> */}
            </div>
          ) : (
            <div className="flex justify-center items-center pt-3">
              <p className="text-[12px]">
                Connect your location&#39;s NMI account
              </p>
            </div>
          )}
        </div>

        {!show ? (
          <div
            onClick={() => {
              setSelectedComponent(false);
              SetShowSelectedComponent(true);
              setSelectedIntegration(false);
              setshow(true);
            }}
            className="bg-green-600 xl:mx-20 rounded-md mt-2 cursor-pointer"
          >
            <p className="text-white text-center py-2 text-sm">Connect</p>
          </div>
        ) : (
          <button className="bg-green-50 w-full py-2 mt-2 text-green-400">
            Connected!
          </button>
        )}
        <p className="text-[9px] pt-3">
          Manage Paypal Integration on payment Integration
          <span className="font-bold text-md"> &rarr; </span>
          Integrations
        </p>
      </div>
    </div>
  );
}
