
import { Avatar } from "@mui/material";
import { useState } from "react";
import CountrySelect from "../controls/CountrySelect";
import Image from "next/image";

interface IChatBodyProps {
  chat: any;
  visible: boolean;
  onClose: Function;

}


export default function Profile({ chat, visible, onClose  }: IChatBodyProps) {
  const [tabIndex, setTabIndex] = useState(0);
  // const [country, setCountry] = useState(data.contactAddress.country);
  return (
    
    <div
      className={`  transition-all  md:block lg:h-[100vh] pb-40 lg:pb-20 overflow-y-scroll  w-full   scrollbar-hide`}
    >
      <div className="  overflow-y-scroll pb-2 w-full  scrollbar-hide">
    
        <div className="flex flex-col items-center mt-1">
        <Image
            src={require("../../../public/images/avatar/blackdog.jpg")}
            width={90}
            height={90}
            alt=""
            className="rounded-full"
          />
          <span className="text-2xl font-main font-semibold text-black my-1">
          Angelina Martin
          </span>
          <div className="flex flex-nowrap items-center">
            <span className="text-green-400 text-3xl text-bold mt-0.5 mr-0.5">
              •
            </span>
            <span className="text-sm font-main font-normal text-gray-600 ml-0.5 tracking-wider">
            Applied a week ago.
            </span>
          </div>
          <div className="w-full grid grid-cols-2 mt-1 mb-3">
            {["Contact info", "Address info"].map((item, index) => (
              <button
                key={index}
                className={`text-center inline-block p-1 ${
                  tabIndex === index
                    ? "border-b-[3px] border-b-black font-semibold"
                    : "text-gray-500"
                }`}
                onClick={() => setTabIndex(index)}
              >
                {item}
              </button>
            ))}
          </div>
          {(tabIndex === 0 && (
            <div className="w-full flex flex-wrap justify-between items-center px-4">
              <div className="w-full grid mb-3">
                <span className="font-main tracking-wide font-light text-gray-700 text-sm">
                  Full Name
                </span>
                <input
                  className="font-main tracking-wide h-10 text-black px-3 border border-gray-200 rounded-lg shadow-sm w-full "
                  value="Angelina Martin"
                />
              </div>
              <div className=" w-full  mt-1 mb-3">
                <span className="font-main tracking-wide font-light text-gray-700 text-sm">
                  Email
                </span>
                <input
                  className="font-main tracking-wide text-black px-3 border border-gray-200 rounded-lg shadow-sm w-full h-10"
                  // value={emailAddress}
                />
              </div>
              <div className=" w-full   mt-1 mb-3">
                <span className="font-main tracking-wide font-light text-gray-700 text-sm">
                  Phone
                </span>
                <input
                  className="font-main tracking-wide text-black px-3 border border-gray-200 rounded-lg shadow-sm w-full h-10"
                  // value={phoneNumber}
                />
              </div>
              <div className=" w-full  mt-1 mb-3">
                <span className="font-main tracking-wide font-light text-gray-700 text-sm">
                  Date Of Birth
                </span>
                <input
                  type="date"
                  className="font-main tracking-wide text-black px-3 border border-gray-200 rounded-lg shadow-sm w-full h-10"
                  // value={dateOfBirth}
                />
              </div>

              <div className=" w-full  mt-1 mb-3">
                <span className="font-main tracking-wide font-light text-gray-700 text-sm">
                  Date Of Injury
                </span>
                <input
                  type="date"
                  className="font-main tracking-wide text-black px-3 border border-gray-200 rounded-lg shadow-sm w-full h-10"
                  // value={dateOfInjury}
                />
              </div>
              <div className="grid  w-full mb-3 mt-1">
                <span className="font-main tracking-wide font-light text-gray-700 text-sm">
                  Social Secruity Number
                </span>
                <input
                  className="font-main tracking-wide text-black px-3 border border-gray-200 rounded-lg shadow-sm w-full h-10"
                  // value={ssn}
                />
              </div>

             
            
            </div>
          )) ||
            (tabIndex === 1 && (
              <div className="w-full flex flex-wrap justify-between items-center px-4">
                <div className="grid w-full ">
                  <span className="font-main text-sm tracking-wide font-light text-gray-700">
                    Street Address
                  </span>
                  <input
                  className="font-main tracking-wide text-black px-3 border border-gray-200 rounded-lg shadow-sm w-full h-10"
                  value=""
                  placeholder="Street Address"
                />
                </div>
                <div className="grid  w-full mt-1 mb-3">
                  <span className="font-main tracking-wide font-light text-gray-700 text-sm">
                    City
                  </span>
                  <input
                    className="font-main tracking-wide text-black px-3 border border-gray-200 rounded-lg shadow-sm w-full h-10"
                    // value={city}
                  />
                </div>
               
                <div className="grid mt-1 w-full mb-3">
                  <span className="font-main tracking-wide font-light text-gray-700 text-sm">
                    State
                  </span>
                  <input
                    className="font-main tracking-wide text-black px-3 border border-gray-200 rounded-lg shadow-sm w-full h-10"
                    // value={region}
                  />
                </div>
                <div className="grid mt-1 w-full mb-3">
                  <span className="font-main tracking-wide font-light text-gray-700 text-sm">
                    Postal Code
                  </span>
                  <input
                    className="font-main tracking-wide text-black px-3 border border-gray-200 rounded-lg shadow-sm w-full h-10"
                    // value={postalCode}
                  />
                </div>
                <div className="grid mt-1 w-full mb-3">
                  <span className="font-main tracking-wide font-light text-gray-700 text-sm">
                    Country
                  </span>
                  {/* <CountrySelect  setCountry={}/> */}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
   
  );
}
