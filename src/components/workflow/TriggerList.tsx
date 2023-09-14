import { XMarkIcon } from "@heroicons/react/24/solid";
import data from "./data";
import Link from "next/link";

export default function TriggerList({ onClose, updateData }: any) {
  return (
    <div className=" py-3  ">
      <div className="flex justify-between items-center border-b-[1px] border-gray-300 pb-2 px-3 ">
        <p className="  text-base text-dark font-medium">Triggers </p>
        <button onClick={onClose}>
          <XMarkIcon className="h-5 w-5 text-FontGray" />
        </button>
      </div>
      <ul className="w-full px-2 pt-2">
        {data.map((item, index) => (
          <li key={index} className="  bg-white mb-3">
            <p
              className={` capitalize text-dark text-lg font-semibold  tracking-wide  `}
            >
              {item?.title}
            </p>
            <ul className="pt-2">
              {item?.subContent?.map((mainData, mainIndex) => (
                <li
                  onClick={() => updateData(mainData?.title)}
                  className=" border-[1px] border-gray-300  mb-2"
                  key={mainIndex}
                >
                  <Link href="" className="flex justify-start items-center">
                    <div className="bg-darkBlack py-2 px-1">
                      {mainData?.icon}
                    </div>
                    <p className="ml-2.5 text-dark text-[13px] font-semibold ">
                      {mainData?.title}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
