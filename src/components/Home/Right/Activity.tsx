import {
  CalendarDaysIcon,
  ChevronDownIcon,
  ClipboardDocumentIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/solid";
import DropDown from "./components/DropDown";
import Image from "next/image";

interface IDropDownProps {
  title: string;
  tType: string;
  name: string;
  showActions: boolean;
}
export default function ActivityCard({
  title,
  tType,
  name,
  showActions,
}: IDropDownProps) {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <div className="flex justify-between border-b-gray-200 border-b pb-4">
        <div className="flex items-center">
          <ChevronDownIcon className="w-4 h-4 mr-4 text-tertiary" />
          <div className="bg-blue-100 h-5 w-5 rounded-full flex justify-center items-center mr-4">
            <ClipboardDocumentIcon className="h-3 w-3 text-secondary" />
          </div>
          <div className="text-sm font-semibold">
            <span className="text-tertiary">{title} </span>
            <span>{tType} </span>
            <span className="text-tertiary">{name}</span>
          </div>
        </div>
        <div className="  flex justify-end items-center">
          <p className="  text-center font-semibold font-fontSource text-[13px] text-darkgray">
            Due:
          </p>
          <CalendarDaysIcon className="h-4 w-4 text-darkgray ml-2" />
          <p className="  text-center font-semibold font-fontSource text-[13px] text-tertiary ml-2">
            Today, 12:00 PM
          </p>
          <EllipsisHorizontalIcon className="h-5 w-5 text-tertiary ml-3" />
        </div>
      </div>
      <div className="flex justify-between items-center  py-4 px-2">
        <div className="  flex justify-start items-start pr-8">
          <input
            type="radio"
            name="radio-5"
            className="radio bg-gray-100 h-6 w-6 rounded-full"
          />
          <div>
            <p className="ml-4 mt-[-1px]  font-bold text-tertiary ">
              Prepare quote for Jerome Bell
            </p>
            <p className="ml-4 font-semibold text-grayText text-[14px] mt-1 font-fontSource">
              Lorem Ipsum has been the industry standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
      {showActions && (
        <div className="flex justify-center border-[1px] border-gray-200 p-4 rounded-lg flex-wrap">
          <div className="w-full md:w-1/3 flex flex-col md:border-r-[1px] border-gray-200 mb-2 md:mb-0">
            <h3 className="text-sm text-grayText font-semibold">Reminder</h3>
            <DropDown
              btnTitle="No Reminder"
              items={[
                { item: "item 1", handler: () => {} },
                { item: "item 1", handler: () => {} },
                { item: "item 1", handler: () => {} },
              ]}
              shadowAndRadius={false}
            />
          </div>

          <div className="w-full md:w-1/3 flex flex-col md:items-center md:border-r-[1px] border-gray-200 mb-2 md:mb-0">
            <div>
              <h3 className="text-sm text-grayText font-semibold">
                Task Priority
              </h3>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-sm mr-2"></div>
                <DropDown
                  btnTitle="High"
                  items={[
                    { item: "item 1", handler: () => {} },
                    { item: "item 1", handler: () => {} },
                    { item: "item 1", handler: () => {} },
                  ]}
                  shadowAndRadius={false}
                />
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 flex flex-col md:items-end">
            <div>
              <h3 className="text-sm text-grayText font-semibold">
                Assigned To
              </h3>
              <div className="flex items-center">
                <Image
                  src={require("../../../../public/images/left/avatar.png")}
                  alt=""
                  className="h-4 w-4  bg-purple-200 rounded-full mr-2"
                />
                <DropDown
                  btnTitle={name}
                  items={[
                    { item: "item 1", handler: () => {} },
                    { item: "item 1", handler: () => {} },
                    { item: "item 1", handler: () => {} },
                  ]}
                  shadowAndRadius={false}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
