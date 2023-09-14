import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { useState } from "react";

export default function Stripe() {
  const [showLiveData, setShowLiveData] = useState<any>(false);
  const [show, setshow] = useState(false);
  const [stripe, selectedStripe] = useState("");
  const handleChange = ({ target }: any) => {
    selectedStripe(target.value);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="pt-5 w-full bg-white  text-center h-full  mb-5  ">
        <div className="pb-6 border-b border-gray-200">
          <div className="items-center space-y-4  ">
            <Image
              src={require("../../../../../public/images/integrations/stripeFull.png")}
              alt=""
              className="w-40 m-auto"
            />
            <p className="font-bold"> Stripe </p>
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
              <div className={`${showLiveData ? "block" : "hidden"}  w-full`}>
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
              <div className={`${showLiveData ? "block" : "hidden"}  w-full`}>
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
    </div>
  );
}
