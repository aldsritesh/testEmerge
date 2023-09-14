import { CalendarIcon, ChevronRightIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { BsCameraVideo, BsCheck2 } from 'react-icons/bs'
import { FaUsers } from 'react-icons/fa'
import { MdGroups2 } from 'react-icons/md'

export default function MeetingHistoryCard() {
  return (
    <div className="font-main mt-4 w-full rounded-lg border border-gray-100 bg-white shadow-sm">
      <div className="px-3 py-2 flex items-center border-b border-b-gray-100">
        <ChevronRightIcon className="w-4 h-4 text-grey stroke-2" />
        <span className="ml-4 p-1 rounded-full bg-blue-200">
        <FaUsers className="text-blue-500 w-5 h-5"/>
        </span>
        <span className="pl-3 text-sm font-medium text-gray-700">
          Meeting <span className="text-main font-light">By</span> Easther
          Howard
        </span>

        <span className="flex items-center ml-auto">
          <span className="font-light text-sm text-gray-400 pr-2">Due: </span>
          <CalendarIcon className="w-5 h-5 text-gray-500" />
          <time className="pl-2 text-sm font-medium text-gray-700">
            Today, 12:00 PM
          </time>
          <span className="ml-2 p-2 cursor-pointer rounded-full hover:bg-gray-50 active:bg-gray-100 transition-all duration-200">
            <EllipsisHorizontalIcon className="w-6 h-6 text-gray-400 stroke-2" />
          </span>
        </span>
      </div>

      <div className="p-5 flex">
      <span className=" flex justify-center items-center border border-gray-200 bg-gray-100 w-10 h-7 rounded-full mr-4" >
          <BsCameraVideo className="h-5 w-5 text-orange-500"/>
        </span>
        <div>
          <p className="leading-7 font-semibold">
            Meeting Scheduled with Jerome Bell
          </p>
          <p className="pt-2 text-sm text-gray-400 font-light tracking-wider">
            She&apos;s interested in our new product line and wants our very best
            price. Please include a detailed breakdown of costs.
          </p>
        </div>
      </div>
    </div>
  )
}
