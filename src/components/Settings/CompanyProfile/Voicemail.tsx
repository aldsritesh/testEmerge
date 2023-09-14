import React, { useState } from "react";
import { MenuItem, Select } from "@mui/material";

import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { MdFileDownload, MdSms, MdEmail } from "react-icons/md";
import { BsUpload } from "react-icons/bs";

export default function Voicemail() {
  return (
    <div className="border rounded-lg mt-5">
      <div className="flex justify-between items-center border-b px-3 py-3">
        <p className="text-[#47494b] text-base font-semibold">
          Call and Voicemail Settings
        </p>
      </div>

      <div className=" pt-5 pb-1 px-4">
        <p className="text-gray-500 text-[12px] font-semibold">
          This is the default voicemail message for all Twillo numbers in the
          loctaion unless customized under{" "}
          <strong className="text-newBlue"> Team Management </strong> Settings
        </p>
        <p className="text-gray-500 text-[12px] mt-3 font-semibold">
          This voicemail messages will be played instead of the one by phone
          carrier. We recommended a timeout of 20 seconds or less
        </p>
      </div>
      <div className=" pt-1 pb-1 px-4">
        <p className="text-gray-700 text-[14px] mt-3 font-semibold">
          Incoming Call Timeout
        </p>
      </div>
      <div className="px-4 pt-1 pb-4">
        <div className="border-[1px] border-gray-300 rounded-md">
          <AudioPlayer
            className="rounded-lg"
            src="https://api.twilio.com/cowbell.mp3"
            customAdditionalControls={[
              // eslint-disable-next-line react/jsx-key
              <div className="grid grid-cols-2 space-x-3 -mr-16 py-1.5">
                <button className="text-white text-sm font-semibold rounded-lg bg-[#868686]">
                  x1
                </button>
                <button>
                  <MdFileDownload className="w-7 h-7 text-[#868686]" />
                </button>
              </div>,
            ]}
          />
        </div>

        <div className="border-[1px] border-gray-200 bg-gray-50 rounded-md mt-5 py-3 flex flex-col justify-center items-center">
          <BsUpload className="h-4 w-4 text-gray-500 mb-1" />
          <p className="text-gray-500 text-[12px] font-semibold">
            <strong className="text-newBlue">Upload</strong> mp3/wav File
          </p>
        </div>
      </div>
      <div className="w-full flex justify-end items-end mt-3 px-4 border-t pt-4 pb-3">
        <button
          type="submit"
          className="  bg-newBlue font-medium py-2 text-sm  rounded-lg px-5 text-white"
        >
          Save Call Settings
        </button>
      </div>
    </div>
  );
}
