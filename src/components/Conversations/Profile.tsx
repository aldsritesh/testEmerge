import {
  MapPinIcon,
  EllipsisHorizontalIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import StatusControl from "./StatusControl";
import TextArea from "../controls/Textarea";
import DropDownData from "./DropDownData";
import ContactForm from "./ContactForm";

interface IChatBodyProps {
  chat: any;
  visible: boolean;
  onClose: Function;
}

export default function Profile({ chat, visible, onClose }: IChatBodyProps) {
  return (
    <div
      className={`  transition-all  md:block lg:h-[100vh] pb-40 lg:pb-20 overflow-y-scroll  w-full   scrollbar-hide`}
    >
      <div className="  overflow-y-scroll pb-2 w-full  scrollbar-hide">
        <div className="flex justify-end px-4">
          <div className="dropdown dropdown-end">
            <label tabIndex={0}>
              <EllipsisHorizontalIcon
                onClick={() => onClose()}
                className="h-11 w-11  p-3 rounded-full cursor-pointer hover:bg-white hover:shadow-md transition-all"
              />{" "}
            </label>
            <div
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <DropDownData />
            </div>
          </div>
        </div>
        <div className="mt-3 flex items-center flex-col">
          <Image
            src={require("../../../public/images/avatar/blackdog.jpg")}
            width={90}
            height={90}
            alt=""
            className="rounded-full"
          />

          <h2 className="text-lg font-semibold mt-1">{chat.name}</h2>
          <p className="text-[12px] text-gray-700 line-clamp-1 font-medium mt-0.5">
            Applied a week ago.
          </p>
        </div>
        {/* <div className="px-4 mt-8">
          <b className="font-medium text-xs text-dark">APPLIED JOBS</b>
          <div className="bg-gray-100 py-2 px-2 rounded-md mt-1">
            <b className="font-semibold text-xs text-dark">
              {chat.designation}
            </b>
            <div className="flex items-center justify-start">
              <p className="font-medium text-xs text-gray-600">Full Time</p>
              <div className="bg-FontGray h-1 w-1 rounded-full mx-2"></div>
              <p className="font-medium text-xs text-gray-600">
                Rajasthan, India
              </p>
            </div>
          </div>
        </div> */}
        {/* <div className="mt-4 px-4">
          <div className="bg-white py-2 px-2 rounded-md mt-3 ring-1 ring-gray-200">
            <div className="flex justify-between">
              <p className="text-[12px] text-gray-700   font-medium mt-0.5">
                Status
              </p>
              <div className="text-sm flex items-center gap-1">
                <div className="w-2 h-2 bg-newBlue rounded-full"></div>
                <p className="text-[10px] font-semibold mt-0.5">Screening</p>
              </div>
            </div>
            <StatusControl active={2} />
          </div>
        </div> */}
        <div className="border-t border-t-gray-200 mt-4 ">
          <h3 className="text-base font-semibold mt-1 mb-3">Contact Details</h3>
          <ContactForm user={chat} />
          {/* <div className="flex flex-col gap-6 mt-3">
            <div className="flex gap-2 items-center">
              <EnvelopeIcon className="h-11 w-11 bg-[#f1f3f4] p-3 rounded-full cursor-pointer hover:bg-white hover:shadow-md transition-all" />
              <div>
                <p className="font-semibold text-xs text-gray-600">Email</p>
                <p className="text-[12px] text-gray-700 font-medium ">
                  {chat.email}
                </p>
              </div>
            </div>

            <div className="flex gap-2 items-center">
              <PhoneIcon className="h-11 w-11 bg-[#f1f3f4] p-3 rounded-full cursor-pointer hover:bg-white hover:shadow-md transition-all" />
              <div>
                <p className="font-semibold text-xs text-gray-600">Phone</p>
                <p className="text-[12px] text-gray-700 font-medium ">
                  {chat.phone}
                </p>
              </div>
            </div>

            <div className="flex gap-2 items-center">
              <MapPinIcon className="h-11 w-11 bg-[#f1f3f4] p-3 rounded-full cursor-pointer hover:bg-white hover:shadow-md transition-all" />
              <div>
                <p className="font-semibold text-xs text-gray-600">Address</p>
                <p className="text-[12px] text-gray-700 font-medium ">
                  Rajasthan, India
                </p>
              </div>
            </div>
          </div> */}
        </div>
        <div className="border-t border-t-gray-200 mt-4 p-4">
          <h3 className="text-base font-semibold mt-1">Notes</h3>
          <div className="flex flex-col gap-6 mt-3">
            <TextArea placeholder="Write a note here" />
          </div>
        </div>
      </div>
    </div>
  );
}
