import {
  CalendarDaysIcon,
  ChevronDownIcon,
  ClipboardDocumentIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import { BiNote } from "react-icons/bi";
import { BsCalendar } from "react-icons/bs";

interface IDropDownProps {
  title: string;
  type: string;
  name: string;
}
export default function Notes({ title, type, name }: IDropDownProps) {
  return (
    <div className="bg-white px-2 pt-4 pb-3 border-[1px] border-gray-200 rounded-lg">
      {" "}
      <div className="flex justify-between border-b-gray-200 border-b pb-4">
        <div className="flex items-center px-3 py-1">
          <div className="bg-blue-100 h-6 w-6 rounded-full flex justify-center items-center mr-4">
            <BiNote className="h-5 w-5 text-newBlue" />
          </div>
          <div className="text-sm font-semibold">
            <span className="font-semibold text-gray-600 text-sm font-noto">
              {" "}
              Note
            </span>
            <span className="font-medium text-gray-800 text-sm font-noto mx-1">
              By
            </span>
            <span className="font-semibold text-gray-600 text-sm font-noto">
              {name}
            </span>
          </div>
        </div>
        <div className="  flex justify-end items-center">
          <BsCalendar className="h-4 w-4  text-gray-600" />
          <p className="font-semibold text-gray-600 text-sm font-noto ml-2">
            Today, 12:00 PM
          </p>
          <EllipsisHorizontalIcon className="h-5 w-5 text-gray-600  ml-2" />
        </div>
      </div>
      <div className="flex justify-between items-center py-2 px-2">
        <p className="ml-2 text-sm text-gray-600 font-medium font-noto pt-1 ">
          Lorem Ipsum has been the industry standard dummy text ever since the
          1500s, when an unknown printer .
        </p>
      </div>
    </div>
  );
}
