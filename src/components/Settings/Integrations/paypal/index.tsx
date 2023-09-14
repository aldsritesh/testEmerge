import { ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { MenuItem, Select } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useState } from "react";

export default function Paypal() {
  const [selectedComponent, setSelectedComponent] = useState(true);
  const [selectedIntegration, setSelectedIntegration] = useState(true);
  const [showSelectedComponent, SetShowSelectedComponent] = useState(false);
  const [stripe, selectedStripe] = useState("");
  const [showLiveData, setShowLiveData] = useState<any>(false);

  const [show, setshow] = useState(false);
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
          <div className=" scrollbar-hide overflow-y-scroll h-96 md:h-auto md:max-h-[40rem] ">
            <div className="flex justify-between items-center px-5 py-2 border-b">
              <p className="text-gray-600  font-semibold fontStrawFord text-lg pb-2 pt-3 leading-5">
                Paypal
              </p>
              <button onClick={() => SetShowSelectedComponent(false)}>
                <XMarkIcon className="h-5 w-5 text-gray-600" />
              </button>
            </div>
            {/* <div> {selectedComponent}</div> */}

            {/* <div className="w-full p-4">
              <label className="block text-[#47494b] text-sm pt-1 font-semibold">
                Which Business do you wnat to link to this location
              </label>
              <Select
                name="businessLocation"
                onChange={handleChange}
                className="px-2 rounded-lg mt-2 mb-2  text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark   text-space focus:outline-none focus:border-gray-300 text-black"
              >
                <MenuItem value="HealthSource Chiropractic of Arlington Matlock - Arlington, TX">
                  HealthSource Chiropractic of Arlington Matlock - Arlington, TX
                </MenuItem>
                <MenuItem value="HealthSource Chiropractic of Arlington Matlock - Arlington, TX">
                  HealthSource Chiropractic of Arlington Matlock - Arlington, TX
                </MenuItem>
                <MenuItem value="HealthSource Chiropractic of Arlington Matlock - Arlington, TX">
                  HealthSource Chiropractic of Arlington Matlock - Arlington, TX
                </MenuItem>
              </Select>
            </div> */}

            {/* new idea start*/}

            <div className="pt-5 w-full bg-white  text-center h-full  mb-5  ">
              <div className="pb-6 border-b border-gray-200">
                <div className="items-center space-y-4  ">
                  <Image
                    src={require("../../../../../public/images/integrations/paypal.png")}
                    alt=""
                    height={60}
                    width={60}
                    className="  m-auto"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center w-full px-4 pt-5">
                  <div className="flex justify-start items-center">
                    <div className="form-control mr-2">
                      <input
                        type="checkbox"
                        className="checkbox checkbox-success rounded-full"
                      />
                    </div>
                    <p className="font-medium text-gray-600 text-[15px] pb-0.5">
                      Stripe live mode is enable
                    </p>
                  </div>
                  <div onClick={() => setShowLiveData(!showLiveData)}>
                    <ChevronRightIcon className="h-4 w-4 text-gray-600 " />
                  </div>
                </div>
                <div className="w-full">
                  {showLiveData && (
                    <div
                      className={`${showLiveData ? "block" : "hidden"}  w-full`}
                    >
                      <p> Here Live Data</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-3 pb-6">
                <div className="flex justify-between items-center w-full px-4 pt-2">
                  <div className="flex justify-start items-center">
                    <div className="form-control mr-2">
                      <input
                        type="checkbox"
                        className="checkbox checkbox-success rounded-full"
                      />
                    </div>
                    <p className="font-medium text-gray-600 text-[15px] pb-0.5">
                      Stripe Test mode is enable
                    </p>
                  </div>
                  <div onClick={() => setShowLiveData(!showLiveData)}>
                    <ChevronRightIcon className="h-4 w-4 text-gray-600 " />
                  </div>
                </div>
                <div className="w-full">
                  {showLiveData && (
                    <div
                      className={`${showLiveData ? "block" : "hidden"}  w-full`}
                    >
                      <p> Here Live Data</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex space-x-3">
                <div className="text-center pl-4">
                  <input type="checkbox" className="toggle toggle-md " />
                </div>
                <p className="font-medium text-gray-600 text-[15px] pb-0.5">
                  Enable Google Play and Apple Play
                </p>
              </div>
              <div>
                <button className="bg-red-200 h-12 w-[30%] rounded-lg text-red-600 mb-3 mt-6 font-bold">
                  Disconnected
                </button>
              </div>
            </div>

            {/* new idea end*/}

            <div className="flex justify-end">
              <div
                className="bg-green-500 w-24 py-2 rounded-md  mb-3 mx-4 cursor-pointer"
                onClick={() => {
                  SetShowSelectedComponent(false);
                  setshow(true);
                }}
              >
                <p className="text-center text-white">Connect!</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-full h-full opacity-30 absolute top-0 left-0 z-40 bg-popup bg-cover bg-bottom"
          onClick={() => SetShowSelectedComponent(false)}
        ></div>
      </div>

      <div className=" shadow-gray-300 bg-white pb-8 pt-3 px-6  rounded-md">
        <div className="flex justify-center items-center">
          <div className="bg-gray-200 rounded-full">
            <Image
              src={require("../../../../../public/images/integrations/paypal.png")}
              alt="emerge"
              height={60}
              width={60}
            />
          </div>
        </div>

        <div className="flex justify-center items-center pt-3">
          <p className="text-[12px]">Paypal Account</p>
        </div>

        <div className="p-4">
          {show ? (
            <div>
              {/* <div className="flex justify-center">
                  <p className="text-sm text-center pt-2">{google}</p>
                </div> */}
            </div>
          ) : (
            <div className="flex justify-center items-center pt-1">
              <p className="text-[12px]">
                Connect your location&#39;s Paypal account
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
              // setshow(true);
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
