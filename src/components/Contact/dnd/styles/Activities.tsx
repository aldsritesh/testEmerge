import {
  CalendarDaysIcon,
  ChevronDownIcon,
  ClipboardDocumentIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";

interface IDropDownProps {
  title: string;
  tType: string;
  name: string;
  showActions: boolean;
}
export default function Activities({
  title,
  tType,
  name,
  showActions,
}: IDropDownProps) {
  return (
    <div className="bg-white px-2 py-4 border-[1px] border-gray-200 rounded-lg">
      <div className="flex justify-between items-center py-2 px-2">
        <div className="  flex justify-start items-start pr-8">
          <input
            type="radio"
            name="radio-5"
            className="radio bg-gray-100 h-6 w-6 rounded-full"
          />
          <div>
            <p className="ml-4 mt-[-4px] font-bold text-gray-800 text-base font-noto">
              Prepare quote for Jerome Bell
            </p>
            <p className="ml-4 text-sm text-gray-600 font-medium font-noto pt-1 pb-2">
              Lorem Ipsum has been the industry standard dummy text ever since
              the 1500s, when an unknown printer .
            </p>
          </div>
        </div>
      </div>
      {showActions && (
        <div className="flex justify-center border-[1px] border-gray-200 rounded-lg flex-wrap w-full">
          <div className="w-full md:w-1/3 flex flex-col md:border-r-[1px] border-gray-200 mb-2 md:mb-0 p-3">
            <p className=" text-sm text-gray-600 font-medium font-noto ">
              Reminder
            </p>{" "}
            <div className="dropdown dropdown-bottom">
              <div className="flex justify-start items-center pt-2">
                <label
                  tabIndex={0}
                  className="text-[15px] text-gray-800 font-medium tracking-wider font-noto "
                >
                  Online Store
                </label>
                <ChevronDownIcon className="text-gray-800 h-4 w-4 ml-1 mt-1" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex flex-col md:border-r-[1px] border-gray-200 mb-2 md:mb-0 p-3">
            <p className=" text-sm text-gray-600 font-medium font-noto ">
              Task Priority
            </p>{" "}
            <div className="dropdown dropdown-bottom">
              <div className="flex justify-start items-center pt-2">
                <div className="w-[15px] h-[15px] bg-red-500 rounded-sm mr-1.5"></div>
                <label
                  tabIndex={0}
                  className="text-[15px] text-gray-800 font-medium tracking-wider font-noto "
                >
                  High
                </label>
                <ChevronDownIcon className="text-gray-800 h-4 w-4 ml-1 mt-1" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex flex-col md:border-r-[1px] border-gray-200 mb-2 md:mb-0 p-3">
            <p className=" text-sm text-gray-600 font-medium font-noto ">
              Reminder
            </p>{" "}
            <div className="dropdown dropdown-bottom">
              <div className="flex justify-start items-center pt-2">
                <Image
                  src={require("../../../../../public/images/avatar/yellowdog.jpg")}
                  alt=""
                  className="h-5 w-5 bg-purple-200 rounded-full mr-2"
                />
                <label
                  tabIndex={0}
                  className="text-[15px] text-gray-800 font-medium tracking-wider font-noto "
                >
                  Esther Howard
                </label>
                <ChevronDownIcon className="text-gray-800 h-4 w-4 ml-1 mt-1" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
