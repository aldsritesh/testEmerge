import { ChevronLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import modalData from "./modalData";
import { useRecoilValue } from "recoil";
import { itemState } from "@/atoms/item";

export default function TriggerList({ onClose, updateData, components }: any) {
  const recoilItem = useRecoilValue(itemState);

  return (
    <>
      <div className="py-3 h-full ">
        <div className="h-12 pt-3 flex justify-between items-center border-b-[1px] border-gray-300 pb-5 px-5">
          <p className="  text-xl text-dark font-semibold fontStrawFord ">
            {recoilItem}
          </p>
          <button onClick={onClose}>
            <XMarkIcon className="h-5 w-5 text-FontGray" />
          </button>
        </div>
        <div className=" overflow-y-scroll scrollbar-hide h-[91vh]">
          <div onClick={onClose} className="flex justify-start pt-5 pl-5 pb-3">
            <div className="h-5 w-5 bg-white rounded-full shadow-md flex justify-center items-center">
              <ChevronLeftIcon className="h-3 w-3 text-gray-600" />
            </div>
            <p className="text-xs pl-2 pt-0.5 text-gray-600 font-semibold mt-1 fontStrawFord">
              Back to Workflow
            </p>
          </div>

          <div className="px-2  ">{components}</div>
        </div>
      </div>
    </>
  );
}
