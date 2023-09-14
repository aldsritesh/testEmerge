import { ClockIcon } from "@heroicons/react/24/outline";
import moment from "moment";
import Image from "next/image";
import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import LeadPreview from "./LeadPreview";

interface IQuoteItem {
  quote: any;
  provided: any;
  isDragging: boolean;
  isClone?: boolean;
  isGroupedOver?: boolean;
  index?: number;
}

function QuoteItem(props: IQuoteItem) {
  const { quote, isDragging, isGroupedOver, provided, isClone, index } = props;
  const [showOffCanvas, setShowOffCanvas] = useState(false);
  return (
    <>
      <div
        className={`w-full h-screen overflow-y-scroll  scrollbar-hide fixed right-0 top-0  z-50 transition-all bg-black overflow-hidden ${
          showOffCanvas
            ? "translate-x-0 opacity-100 bg-opacity-30"
            : "translate-x-[100%] opacity-0 bg-opacity-0"
        }`}
      >
        <div
          className="absolute h-full w-full z-40 "
          onClick={() => setShowOffCanvas(false)}
        ></div>
        <div className="bg-white w-full md:w-[50%] lg:w-[50%] absolute right-0 min-h-full h-auto z-50 overflow-y-scroll scrollbar-hide">
          <LeadPreview lead={quote} />
        </div>
      </div>
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className={`mb-5 bg-white shadow-md p-3 rounded-md  ${
          isDragging && "ring"
        }`}
        onClick={() => setShowOffCanvas(true)}
      >
        {isClone ? <div>Clone</div> : null}
        <div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full">
              <Image
                alt={quote.lead_name.name}
                src={quote.lead_name.image}
                className="rounded-full h-10 w-10"
              />
            </div>
            <div>
              <p className="font-noto text-gray-800 font-semibold text-base mb-1">
                {quote.lead_name.name}
              </p>
              <div className="text-sm -mt-1 text-gray-600 flex gap-1 items-center">
                <ClockIcon className="w-4 h-4" />
                <p className=" text-gray-700 font-medium text-[13px]">
                  {moment().format("DD MMM YYYY")}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-2">
            <div className="flex gap-1 items-center  ">
              <FaPhoneAlt className="w-4 h-4 text-gray-500 mr-1" />
              <p className=" text-gray-700 font-medium text-[13px]">
                {quote.contact.phone}
              </p>
            </div>
            <div className="flex gap-1 items-center  pt-0.5">
              <FaEnvelope className="w-4 h-4 text-gray-500 mr-1" />
              <p className=" text-gray-700 font-medium text-[13px]">
                {quote.contact.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(QuoteItem);
