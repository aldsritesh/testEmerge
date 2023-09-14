import React, { useContext, useState } from "react";
import { MenuItem, Select } from "@mui/material";

import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { MdFileDownload, MdSms, MdEmail } from "react-icons/md";
import { BsQuestionCircleFill, BsUpload } from "react-icons/bs";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import { formDataCtx } from "./AddProfile";

export default function VoiceMailSettings({ handleNext }: any) {
  const { formDataValues, setFormDataValues } = useContext(formDataCtx);
  const [errors, setErrors] = useState<any>({});
  const [formValues, setFormValues] = useState<any>({
    inbound: "",
  });
  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormValues((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // console.log(formValues);
    const validationErrors: any = {};

    if (!formValues.inbound.trim()) {
      validationErrors.inbound = "Required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setFormValues({
      inbound: "",
    });

    setErrors({});
    setFormDataValues((prev: any) => ({ ...prev, ...formValues }));
    handleNext();
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="  bg-white h-[60vh] overflow-y-scroll scrollbar-hide px-4">
        <div className="flex flex-wrap items-center">
          {/* Platform Language */}
          <div className="py-2 w-full lg:w-1/2 ">
            <label
              htmlFor=""
              className="  text-[#47494b] text-sm pt-1 font-semibold flex justify-start pb-0.5 items-center gap-2"
            >
              Inbound Numbers
            </label>
            <Select
              name="inbound"
              value={formValues.inbound}
              onChange={handleChange}
              className="border-none ouline-none rounded-lg shadow-none mt-2 mb-2  text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark   text-space focus:outline-none focus:border-gray-300 text-black"
            >
              <MenuItem value="">Select</MenuItem>
              <MenuItem value="No.1">No.1</MenuItem>
              <MenuItem value="No.2">No.2</MenuItem>
              <MenuItem value="No.3">No.3</MenuItem>
            </Select>
            {errors.inbound && (
              <div className="mb-3 text-red-500 text-xs  ">
                {errors.inbound}
              </div>
            )}
            <label
              htmlFor=""
              className="  text-[#47494b] text-sm pt-1 font-semibold flex justify-center pb-0.5 items-center gap-2"
            >
              Forward Calls to mobile app{" "}
              <ExclamationCircleIcon className="text-xs h-5 w-5" />
            </label>
          </div>
          <div className="py-2 w-full lg:w-1/2 px-4">
            <p className=" text-gray-500 text-[12px] pt-1 font-medium">
              {" "}
              This is only required of the users needs a dedicated number. Not
              require for voicemail for routing the call to the assigned user.{" "}
            </p>
          </div>
        </div>

        <div className=" pt-5 pb-1 ">
          <p className="text-gray-500 text-[12px] mt-3 font-semibold">
            This voicemail messages will be played instead of the one by phone
            carrier. We recommended a timeout of 20 seconds or less
          </p>
          <p className="text-gray-700 text-[14px] mt-3 font-semibold">
            Incoming Call Timeout
          </p>
        </div>

        <div className=" pt-1 pb-1  flex flex-wrap items-start">
          <div className="py-2 w-full lg:w-1/2 ">
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
          <div className="py-2 w-full lg:w-1/2 px-4">
            <p className=" text-gray-500 text-[12px] pt-1 font-medium">
              We will record a voicemail if call is not answered before this
              duration
            </p>
          </div>
        </div>
      </div>
      <div className="h-[10vh] flex justify-between items-center border-t-[1px] pb-4 mt-1.5 px-5">
        <button className="border-[1px] rounded-md px-5 py-2 border-gray-300 text-[12px] font-medium">
          Cancel
        </button>
        <button
          onSubmit={handleSubmit}
          className="text-white bg-newBlue rounded-md px-5 py-2  text-[12px] font-medium"
        >
          Save
        </button>
      </div>
    </form>
  );
}
