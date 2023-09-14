import {
    CalendarIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    EllipsisHorizontalIcon,
  } from "@heroicons/react/24/outline";
  import { Avatar } from "@mui/material";

  import { TbClipboardText } from "react-icons/tb";
  import { FaUsers } from "react-icons/fa";
  import { IoCallOutline } from "react-icons/io5";
import { CiStickyNote } from "react-icons/ci";
import Image from "next/image";
  

export default function Notes({data}:any) {

  return (
    <div>
      { data.map((item:any,index:number)=> (
        <div key={index} className="font-main w-full rounded-lg border border-gray-100 bg-white mb-5  shadow-sm">
        <div className="px-3 py-2 flex items-center border-b border-b-gray-100">
          <ChevronDownIcon className="w-4 h-4 text-grey stroke-2" />
  
          <span className="ml-4 p-1 rounded-full bg-blue-200">
          <CiStickyNote className="text-blue-700 w-5 h-5"/>
          </span>
          <span className="pl-3 text-sm font-medium text-gray-700">
            Note <span className="text-main font-light">By</span> {item.userName}
          </span>
  
          <span className="flex items-center ml-auto">
            <span className="font-light text-sm text-gray-400 pr-2">Due: </span>
            <CalendarIcon className="w-5 h-5 text-gray-500" />
            <time className="pl-2 text-sm font-medium text-gray-700">
              {item.dueDate}
            </time>
            <span className="ml-2 p-2 cursor-pointer rounded-full hover:bg-gray-50 active:bg-gray-100 transition-all duration-200">
              <EllipsisHorizontalIcon className="w-6 h-6 text-gray-400 stroke-2" />
            </span>
          </span>
        </div>
  
        <div className="p-5 flex">  
          <div>
            <p className="leading-7 font-semibold">
             {item?.title}
            </p>
            <p className="pt-2 text-sm text-gray-400 font-light tracking-wider"  dangerouslySetInnerHTML={{__html: item?.desc}}>
            </p>
          </div>
        </div>
  
        <div className="px-5 pb-4 w-full  ">
          <Image src={item?.image } width={100} height={10}  alt="" className=" w-full h-[30vh] object-cover rounded-lg" />
        </div>
      </div>

      ))
      }
    </div>
  )
}
