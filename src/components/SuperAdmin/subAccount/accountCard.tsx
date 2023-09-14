import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BiCalendarWeek, BiUserCheck } from "react-icons/bi";
import {
  BsCalendar2Range,
  BsClipboard2Check,
  BsMailbox,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { CgMail, CgMailOpen, CgSandClock } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { FaRegCommentDots, FaRegSmile } from "react-icons/fa";
import { HiDocumentReport, HiOutlineSwitchHorizontal } from "react-icons/hi";
import { HiOutlineInboxArrowDown } from "react-icons/hi2";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import {
  MdOutlineAssignmentLate,
  MdOutlineMarkEmailRead,
  MdOutlineMarkEmailUnread,
  MdOutlineWorkOutline,
} from "react-icons/md";
import {
  RiEmotionUnhappyLine,
  RiSettings4Fill,
  RiUserLine,
} from "react-icons/ri";
import { SlCallIn, SlCallOut } from "react-icons/sl";

const AccountCard = ({ data }: any) => {
  return (
    <div className="border rounded-md w-full my-3 ">
      <div className="m-3 flex  justify-between ">
        {/* first column */}
        <div className="w-1/3 ">
          <div className="flex items-center justify-center gap-2 pb-3">
            <div className="bg-gray-300 h-8 w-8 rounded-full"></div>
            <p className="text-[#4b5563]  font-semibold">
              {/* Hearing Aids Now Hiring Account{" "} */}
              {data?.businessName}
            </p>
            <div className="border border-blue-500 bg-blue-200 text-blue-600 text-center rounded-xl scale-75 font-semibold text-xs py-1 px-1">
              Closed(won)
            </div>
          </div>

          <div className="text-gray-500 flex items-center font-semibold text-sm gap-1 space-y-3">
            <IoLocationOutline className="text-gray-500" /> {data?.street}{" "}
            {data?.city},{data?.region}, {data?.country} {data?.postalCode}
          </div>
          <div className="text-gray-500 flex items-center font-semibold text-sm gap-1">
            <IoCallOutline className="text-gray-500" /> {data?.phoneNumber}
          </div>
        </div>

        <div className="flex justify-around w-2/3 text-gray-500">
          {/* Second Column */}
          <div className="flex flex-col gap-20  ">
            <div>
              <div className="text-sm font-semibold"> Active Users</div>
              <div className="flex items-center text-start gap-1 font-semibold py-1 ">
                <BiUserCheck className="scale-110" />0{" "}
                <span className="h-6 w-6 rounded-full bg-red-200 text-red-400 text-xs p-1 font-semibold scale-75 ">
                  0%
                </span>
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold">No. of Contacts</div>
              <div className="flex items-center text-start gap-1 font-semibold py-1 ">
                <RiUserLine className="scale-90" />0{" "}
                <span className="h-6 w-6 rounded-full bg-red-200 text-red-400 text-xs p-1 font-semibold scale-75 ">
                  0%
                </span>
              </div>
            </div>
          </div>

          {/* Third Column  */}
          <div className="flex flex-col gap-4 w-30 ">
            <div>
              <div className="text-sm font-semibold">Calls</div>
              <div className="flex items-center text-start gap-1 font-semibold py-1 ">
                <SlCallIn className="scale-90" />0{" "}
                <span className="h-6 w-6 rounded-full bg-red-200 text-red-400 text-xs p-1 font-semibold scale-75 ">
                  0%
                </span>
              </div>
              <div className="flex items-center text-start gap-1 font-semibold py-1 ">
                <SlCallOut className="scale-90" />0{" "}
                <span className="h-6 w-6 rounded-full bg-red-200 text-red-400 text-xs p-1 font-semibold scale-75 ">
                  0%
                </span>
              </div>
              <div className="flex items-center text-start gap-1 font-semibold py-1 ">
                <CgSandClock className="scale-90" />
                0m{" "}
                <span className="h-6 w-6 rounded-full bg-red-200 text-red-400 text-xs p-1 font-semibold scale-75 ">
                  0%
                </span>
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold">No. of Appointments</div>
              <div className="flex items-center text-start gap-1 font-semibold py-1 ">
                <BiCalendarWeek className="scale-90" />0{" "}
                <span className="h-6 w-6 rounded-full bg-red-200 text-red-400 text-xs p-1 font-semibold scale-75 ">
                  0%
                </span>
              </div>
            </div>
          </div>

          {/* Fourth Column */}
          <div className="flex flex-col gap-[3rem]  ">
            <div>
              <div className="text-sm font-semibold">Emails</div>
              <div className="flex items-center text-start gap-1 font-semibold py-1 ">
                <CgMailOpen className="scale-90" />0{" "}
                <span className="h-6 w-6 rounded-full bg-red-200 text-red-400 text-xs p-1 font-semibold scale-75 ">
                  0%
                </span>
              </div>
              <div className="flex items-center text-start gap-1 font-semibold py-1 ">
                <CgMail className="scale-90" />0{" "}
                <span className="h-6 w-6 rounded-full bg-red-200 text-red-400 text-xs p-1 font-semibold scale-75 ">
                  0%
                </span>
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold">Submissions</div>
              <div className="flex items-center text-start gap-1 font-semibold py-1 ">
                <BsCalendar2Range className="scale-90" />0{" "}
                <span className="h-6 w-6 rounded-full bg-red-200 text-red-400 text-xs p-1 font-semibold scale-75 ">
                  0%
                </span>
              </div>
              <div className="flex items-center text-start gap-1 font-semibold py-1 ">
                <BsClipboard2Check className="scale-90" />0{" "}
                <span className="h-6 w-6 rounded-full bg-red-200 text-red-400 text-xs p-1 font-semibold scale-75 ">
                  0%
                </span>
              </div>
              <div className="flex items-center text-start gap-1 font-semibold py-1 ">
                <MdOutlineAssignmentLate className="scale-90" />0{" "}
                <span className="h-6 w-6 rounded-full bg-red-200 text-red-400 text-xs p-1 font-semibold scale-75 ">
                  0%
                </span>
              </div>
            </div>
          </div>

          {/* Fifth Column */}
          <div className="flex flex-col gap-[3rem]">
            <div>
              <div className="text-sm font-semibold">Test Messages</div>
              <div className="flex items-center text-start gap-1 font-semibold py-1 ">
                <MdOutlineMarkEmailRead className="scale-90" />0{" "}
                <span className="h-6 w-6 rounded-full bg-red-200 text-red-400 text-xs p-1 font-semibold scale-75 ">
                  0%
                </span>
              </div>
              <div className="flex items-center text-start gap-1 font-semibold py-1 ">
                <MdOutlineMarkEmailUnread className="scale-90" />0{" "}
                <span className="h-6 w-6 rounded-full bg-red-200 text-red-400 text-xs p-1 font-semibold scale-75 ">
                  0%
                </span>
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold">Reviews</div>
              <div className="flex items-center text-start gap-1 font-semibold py-1 ">
                <AiOutlineStar className="scale-90" />0{" "}
                <span className="h-6 w-6 rounded-full bg-red-200 text-red-400 text-xs p-1 font-semibold scale-75 ">
                  0%
                </span>
              </div>
              <div className="flex items-center text-start gap-1 font-semibold py-1 ">
                <FaRegSmile className="scale-90" />0{" "}
                <span className="h-6 w-6 rounded-full bg-red-200 text-red-400 text-xs p-1 font-semibold scale-75 ">
                  0%
                </span>
              </div>
              <div className="flex items-center text-start gap-1 font-semibold py-1 ">
                <RiEmotionUnhappyLine className="scale-90" />0{" "}
                <span className="h-6 w-6 rounded-full bg-red-200 text-red-400 text-xs p-1 font-semibold scale-75 ">
                  0%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center border-t">
        <div className="flex gap-2 text-2xl px-3">
          <FaRegCommentDots />
          <CiSettings />
          <BsMailbox />
          <HiOutlineInboxArrowDown />
          <MdOutlineWorkOutline />
        </div>
        <div className="flex">
          <div className="flex items-center text-gray-500 px-5 text-sm font-semibold border-r">
            <HiDocumentReport />
            Reports
          </div>
          <div className="  text-[#155eef] flex items-center gap-1 px-4 py-3 text-sm  font-semibold border-r">
            <HiOutlineSwitchHorizontal /> Switch to Sub-Account
          </div>
          <div className="text-gray-500 scale-110 flex items-center justify-center w-10">
            <BsThreeDotsVertical />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountCard;
