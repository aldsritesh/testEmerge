import { XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { MenuItem, Select } from "@mui/material";
import styles from "../style.module.css";

export default function Google({ handleHChange }: any) {
  const [selectedComponent, setSelectedComponent] = useState(true);
  const [selectedIntegration, setSelectedIntegration] = useState(true);
  const [google, selectedgoogle] = useState("");

  const handleChange = ({ target }: any) => {
    selectedgoogle(target.value);
  };
  const [showSelectedComponent, SetShowSelectedComponent] = useState(false);
  const [show, setshow] = useState(false);

  return (
    <>
      <div
        className={`transition-all fixed ${
          showSelectedComponent
            ? "bottom-0 opacity-100 z-50"
            : "-bottom-[20px] opacity-0 -z-10"
        }  left-0 bg-black backdrop-blur-[5px] bg-opacity-20 h-screen w-full overflow-x-hidden flex items-center justify-center scrollbar-hide `}
      >
        <div
          className={`relative z-50 bg-white  shadow-md rounded-xl w-[600px] `}
        >
          <div className=" scrollbar-hide overflow-y-scroll h-96 md:h-auto md:max-h-[48rem]">
            <div className="flex justify-between items-center px-5 py-2 border-b">
              <p className="text-gray-600 font-semibold fontStrawFord text-lg pb-2 pt-3 leading-5">
                Google
              </p>
              <button onClick={() => SetShowSelectedComponent(false)}>
                <XMarkIcon className="h-5 w-5 text-gray-600" />
              </button>
            </div>
            <div className="w-full">
              <div className=" w-full h-full mt-3 mb-5 pb-5 ">
                <div className=" w-full p-4">
                  <label className="block text-[#47494b] text-sm pt-1 font-semibold ">
                    Which Business do you want to link to this location
                  </label>
                  <Select
                    name="businessLocation"
                    // value={formData.businessType}
                    onChange={handleChange}
                    className="border-none outline-none rounded-lg mt-2 mb-2  text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark   text-space focus:outline-none focus:border-gray-300 text-black"
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
                        setshow(true);
                        handleHChange();
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
        <div>
          <div className="flex justify-center items-center">
            <div className="bg-gray-100 rounded-full">
              <Image
                src={require("../../../../../public/images/integrations/google.png")}
                alt="emerge"
                height={80}
                width={80}
              />
            </div>
          </div>
          <div className="pb-4 pl-4 pr-4">
            {show ? (
              <div>
                <div className="flex justify-center">
                  <p className="text-[12px] text-center">
                    Google Account (corey.pdgroup@gmail.com)
                  </p>
                </div>
                <div className="flex justify-center">
                  <p className="text-[12px] pt-2 text-center">
                    Select Analytics Account
                  </p>
                </div>
                <div>
                  <Select
                    name="businessLocation"
                    onChange={handleChange}
                    placeholder="Select Account"
                    defaultValue={"Select Account"}
                    className={`${styles.selectTag} border-none outline-none rounded-lg mt-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark   text-space focus:outline-none focus:border-gray-300 text-black  bg-[#e9f1f8]`}
                  >
                    <MenuItem disabled value="Select Account">
                      Select Account
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

                <div>
                  <Select
                    name="businessLocation"
                    // value={formData.businessType}
                    onChange={handleChange}
                    placeholder="Select Property"
                    defaultValue={"Select Property"}
                    className="border-none outline-none rounded-lg  mb-2  text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark   text-space focus:outline-none focus:border-gray-300 text-black bg-[#e9f1f8]"
                  >
                    <MenuItem disabled value="Select Property">
                      Select Property
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

                <div>
                  <label className="text-sm pt-4">Adwords MCC Account Id</label>
                  <Select
                    name="businessLocation"
                    // value={formData.businessType}
                    placeholder="Select MCC Account Id"
                    defaultValue={"Select MCC Account Id"}
                    onChange={handleChange}
                    className="border-none outline-none rounded-lg  mb-2  text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark   text-space focus:outline-none focus:border-gray-300 text-black  "
                  >
                    <MenuItem disabled value="Select MCC Account Id">
                      Select MCC Account Id
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

                <div>
                  <label className="text-sm   pt-4">
                    Adwords Client Account Idwant
                  </label>
                  <Select
                    name="businessLocation"
                    // value={formData.businessType}
                    placeholder="Adwords Client Account Id"
                    defaultValue={"Adwords Client Account Id"}
                    onChange={handleChange}
                    className="border-none outline-none rounded-lg  mb-2  text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark   text-space focus:outline-none focus:border-gray-300 text-black  "
                  >
                    <MenuItem disabled value="Adwords Client Account Id">
                      Adwords Client Account Id
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

                <button className="bg-green-50 w-full py-2 mt-2 text-green-400">
                  Connected!
                </button>

                <button className="text-sm pt-4">Add Another account!</button>
              </div>
            ) : (
              <div className="flex justify-center items-center mt-2">
                <p className="text-[12px] text-center">
                  Connect your location&#39;s Google account
                </p>
              </div>
            )}
          </div>

          <div className="bg-white shadow   shadow-gray-400 py-2 flex justify-center items-center m-auto cursor-pointer rounded-md w-fit  px-2">
            <Image
              src={require("../../../../../public/images/integrations/google.png")}
              alt="emerge"
              height={25}
              width={25}
            />
            <div
              onClick={() => {
                setSelectedComponent(false);
                SetShowSelectedComponent(true);
                setSelectedIntegration(false);
              }}
            >
              <p className="text-stone-500 pl-2 ">Sign in with google</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
