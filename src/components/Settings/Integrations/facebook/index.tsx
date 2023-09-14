import { XMarkIcon } from "@heroicons/react/24/solid";
import { MenuItem, Select } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useState } from "react";

export default function Facebook({ handleHChange }: any) {
  const [selectedComponent, setSelectedComponent] = useState(true);
  const [selectedIntegration, setSelectedIntegration] = useState(true);
  const [showSelectedComponent, SetShowSelectedComponent] = useState(false);
  const [facebook, selectedfacebook] = useState("");
  const [show, setshow] = useState(false);
  const handleChange = ({ target }: any) => {
    selectedfacebook(target.value);
  };

  return (
    <>
      <div
        className={`transition-all fixed ${
          showSelectedComponent
            ? "bottom-0 opacity-100 z-50"
            : "-bottom-[20px] opacity-0 -z-10"
        }  left-0 bg-black backdrop-blur-[5px] bg-opacity-20   h-screen w-full overflow-x-hidden flex items-center justify-center scrollbar-hide `}
      >
        <div
          className={`relative z-50 bg-white  shadow-md rounded-xl w-[600px] `}
        >
          <div className=" scrollbar-hide overflow-y-scroll h-96 md:h-auto md:max-h-[48rem] ">
            <div className="flex justify-between items-center px-5 py-2 border-b">
              <p className="text-gray-600  font-semibold fontStrawFord text-lg pb-2 pt-3 leading-5">
                Facebook
              </p>
              <button onClick={() => SetShowSelectedComponent(false)}>
                <XMarkIcon className="h-5 w-5 text-gray-600" />
              </button>
            </div>

            <div className="w-full">
              <div className=" w-full h-full mt-3 mb-5 pb-5">
                <div className=" w-full p-4">
                  <label className="block text-[#47494b] text-sm pt-1 font-semibold">
                    Which Business do you want to link to this location
                  </label>
                  <Select
                    name="businessLocation"
                    // value={formData.businessType}
                    onChange={handleChange}
                    className="border-none ouline-none rounded-lg shadow-none mt-2 mb-2  text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark   text-space focus:outline-none focus:border-gray-300 text-black"
                  >
                    <MenuItem value="HealthSource Chiropractic of Arlington Matlock - Arlington, TX">
                      HealthSource Chiropractic of Arlington Matlock -
                      Arlington, TX
                    </MenuItem>
                    <MenuItem value="HealthSource Chiropractic of Arlington Matlock - Arlington, TX">
                      HealthSource Chiropractic of Arlington Matlock -
                      Arlington, TX
                    </MenuItem>
                    <MenuItem value="HealthSource Chiropractic of Arlington Matlock - Arlington, TX">
                      HealthSource Chiropractic of Arlington Matlock -
                      Arlington, TX
                    </MenuItem>
                  </Select>

                  <div className="flex justify-end">
                    <div
                      className="bg-green-500 w-24 py-2 rounded-md  mb-3 mx-4 cursor-pointer"
                      onClick={() => {
                        SetShowSelectedComponent(false);
                        handleHChange();
                        setshow(true);
                      }}
                    >
                      <p className="text-center text-white">Connect!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-full h-full opacity-30 absolute top-0 left-0 z-40 bg-popup bg-cover bg-bottom"
          onClick={() => SetShowSelectedComponent(false)}
        ></div>
      </div>

      <div>
        <div className="pt-2 shadow-gray-300 bg-white py-8 rounded-md px-5">
          <div className="flex justify-center items-center">
            <div className="bg-gray-200 rounded-full">
              <Image
                src={require("../../../../../public/images/integrations/facebook.png")}
                alt="emerge"
                height={70}
                width={70}
              />
            </div>
          </div>

          <div>
            {show ? (
              <div>
                {/* <div className="flex justify-center">
                  <p className="text-sm text-center pt-2">{google}</p>
                </div> */}
                <div>
                  <Select
                    name="businessLocation"
                    onChange={handleChange}
                    placeholder="Select Account"
                    defaultValue={"Select Account"}
                    className="border-none outline-none rounded-lg mt-4 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark   text-space focus:outline-none focus:border-gray-300 text-black  bg-[#e9f1f8]"
                  >
                    <MenuItem disabled value="Select Account">
                      Select Ad Account
                    </MenuItem>
                    <MenuItem value="HealthSource Chiropractic of Arlington Matlock - Arlington, TX">
                      HealthSource Chiropractic of Arlington Matlock -
                      Arlington, TX
                    </MenuItem>
                    <MenuItem value="HealthSource Chiropractic of Arlington Matlock - Arlington, TX">
                      HealthSource Chiropractic of Arlington Matlock -
                      Arlington, TX
                    </MenuItem>
                    <MenuItem value="HealthSource Chiropractic of Arlington Matlock - Arlington, TX">
                      HealthSource Chiropractic of Arlington Matlock -
                      Arlington, TX
                    </MenuItem>
                  </Select>
                </div>

                <div className="flex justify-center ">
                  <button className="bg-green-50 w-full py-2 mt-4 text-green-400">
                    Connected!
                  </button>
                </div>

                <div className="flex justify-center mt-4">
                  <button className="bg-transparent text-md hover:bg-blue-400 hover:text-white hover:border-white text-blue-400 px-2 py-2  border border-blue-400 rounded-md mt-3  ">
                    Select a Facebook Page
                  </button>
                </div>

                <div className="flex justify-center space-x-2 mt-6">
                  <div className="bg-newBlue text-white text-sm px-5 py-2 rounded-md cursor-pointer">
                    <p>Messenger</p>
                  </div>
                  <div className="bg-newBlue text-white text-sm px-5 py-2 rounded-md cursor-pointer">
                    <p>Instagram</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex justify-center items-center pt-6">
                <p className="text-[12px] text-center">
                  Connect your location&#39;s Facebook account
                </p>
              </div>
            )}
          </div>

          {!show && (
            <div
              className="bg-newBlue xl:mx-20 rounded-md mt-7 cursor-pointer "
              onClick={() => {
                setSelectedComponent(false);
                SetShowSelectedComponent(true);
                setSelectedIntegration(false);
              }}
            >
              <p className="text-white text-center py-2 text-sm px-2">
                Connect
              </p>
            </div>
          )}
          <div className="pt-3">
            <p className="text-[10px]">
              To use instagrams DM&#39;s you need to connect your instagram
              Account with a Facebook Page.
              <span className="text-blue-500"> Learn more</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
