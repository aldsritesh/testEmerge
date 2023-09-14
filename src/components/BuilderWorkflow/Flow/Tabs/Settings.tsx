import { MenuItem, Select } from "@mui/material";
import React from "react";
import { GoTag } from "react-icons/go";

export default function Settings() {
  return (
    <div className="bg-white pt-3 px-8 pb-32">
      {/* Heading */}
      <div className="text-[#6b7280] text-xl py-3 font-semibold">
        Default Settings
      </div>
      <form action="">
        {/* Communication Management */}
        <div className="py-3 border-b">
          <p className="text-[#263648] font-semibold text-lg">
            Communication Management
          </p>

          {/* Time Window */}
          <div className="my-3">
            <p className="text-[#6b7280]  font-semibold pb-3">Time Window</p>
            <div className="space-y-5 ">
              <div className="form-control">
                <label className=" flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-blue-500 scale-90"
                    checked
                  />
                  <div className="flex flex-col items-center ">
                    <span className="label-text font-semibold text-[#6b7280]">
                      Any Time
                    </span>
                  </div>
                </label>
                <span className="text-xs text-gray-400 font-semibold px-8">
                  Allows messages to be sent from this workflow at anytime.
                </span>
              </div>

              <div className="form-control ">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-blue-500 scale-90"
                    checked
                  />
                  <span className="label-text font-semibold text-[#6b7280]">
                    Specific Time
                  </span>
                </label>
                <span className="text-xs text-gray-400 font-semibold px-8">
                  Restricts actions from being sent outside the window you
                  define.
                </span>
              </div>
            </div>
          </div>

          {/* TimeZone */}
          <div className="flex  my-6  w-full gap-40 ">
            <div className="w-[16.5%] ">
              <p className="text-[#6b7280]  font-semibold pb-1">Timezone</p>
              <p className="text-xs text-gray-400 font-semibold ">
                Wait steps and time window executions will proceed based on this
                timezone.
              </p>
            </div>
            <div className="w-1/2 ">
              <Select
                name="timeZone"
                className="w-2/3 border-none outline-none"
              >
                <MenuItem value="timeZone1">Account TimeZone</MenuItem>
                <MenuItem value="timeZone2">Option 1</MenuItem>
                <MenuItem value="timeZone3">Option 2</MenuItem>
              </Select>
            </div>
          </div>

          {/* Sender Address */}
          <div className="text-[#6b7280]  font-semibold">Sender Address</div>
          <p className="text-[#6b7280]  font-semibold mt-2 pb-1">Email</p>
          <div className="flex space-x-20 w-full  ">
            <div className="w-[23%] ">
              <p className="text-xs text-gray-400 font-semibold ">
                Gives your emails a default from name and from email address.
                You can override by this setting from name and from email in the
                email actions themselves.
              </p>
            </div>
            <div className="w-2/3 space-x-5 flex items-center">
              <div className="relative  w-[50%]">
                <input
                  type="text"
                  placeholder="Location Name"
                  name="location"
                  className="border rounded-md py-3 px-3 w-full "
                />
                <div className="absolute top-5 right-2">
                  <GoTag className="scale-150 text-gray-400" />
                </div>
              </div>

              <div className="w-[48%] relative">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="border rounded-md py-3 px-3 w-full"
                />
                <div className="absolute top-5 right-2">
                  <GoTag className="scale-150 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Management */}
        <div className="border-b">
          <div className="text-[#263648] font-semibold text-lg py-3">
            Contact Management
          </div>
          <div className="flex items-center gap-20">
            <div className="w-[23%]">
              <p className="text-[#6b7280] pb-1 font-semibold ">
                Allow Multiple
              </p>
              <p className="text-xs text-gray-400 font-semibold ">
                Allow a single contact to re-enter once it has left this
                workflow. If the contact attempt to re-enter while it is still
                enrolled in this workflow , It will be get skipped.
              </p>
            </div>

            <div className="w-1/4">
              <div className="form-control w-52">
                <label className="cursor-pointer ">
                  <input
                    type="checkbox"
                    className="toggle toggle-primary scale-90"
                  />
                </label>
              </div>
              <p className="text-xs text-gray-400 font-semibold ">
                Workflows having appointment or invoice based input triggers
                will accept contacts multiple times regardless of whether
                &quot;Allow Multiple&quot; is turned on or not{" "}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-20 py-7">
            <div className="w-[23%]">
              <p className="text-[#6b7280] pb-1 font-semibold ">
                Stop on Response{" "}
              </p>
              <p className="text-xs text-gray-400 font-semibold ">
                Ends workflow for a contact if the contact responds to a message
                that came from this workflow.
              </p>
            </div>

            <div className="w-1/4">
              <div className="form-control w-52">
                <label className="cursor-pointer ">
                  <input
                    type="checkbox"
                    className="toggle toggle-primary scale-90"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Conversation Management */}
        <div className="border-b">
          <div className="text-[#263648] font-semibold text-lg py-3">
            Conversation Management
          </div>
          <div className="flex items-center gap-20">
            <div className="w-[23%]">
              <p className="text-[#6b7280] pb-1 font-semibold ">
                Auto mark as Read
              </p>
              <p className="text-xs text-gray-400 font-semibold ">
                By default automated messages don&apos;t mark conversations as
                read. Toggle this on if you want the conversations that this
                workflow will read.
              </p>
            </div>

            <div className="w-1/4">
              <div className="form-control w-52">
                <label className="cursor-pointer ">
                  <input
                    type="checkbox"
                    className="toggle toggle-primary scale-90"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
