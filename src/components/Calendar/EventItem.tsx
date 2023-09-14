import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import * as React from "react";
import DropDown from "../controls/DropDown";

interface ICalendarItemProps {
  eventInfo: any;
  handleChange: any;
}

function getBorderColorByCategoryId(cid: number) {
  switch (cid) {
    case 1:
      return "#e02d5b";
    case 2:
      return "#238dfe";
    case 3:
      return "#fd8d16";
    case 4:
      return "#4ec69b";
    case 5:
      return "#e328d1";
    case 6:
      return "#9b9871";
    default:
      return "#4ec69b";
  }
}

export default function CalendarItem({
  eventInfo,
  handleChange,
}: ICalendarItemProps) {
  return (
    <div
      className={`w-full p-2 m-h-28 text-black flex flex-col justify-between h-full overflow-scroll border-t-[5px]`}
      style={{
        borderTopColor: getBorderColorByCategoryId(
          eventInfo.event.extendedProps.category
        ),
      }}
    >
      <div className="flex justify-between items-center  ">
        <div className="flex flex-wrap flex-col">
          <div className="flex overflow-x-hidden flex-col">
            <h3 className="font-bold uppercase text-md">
              {eventInfo.event.title}
            </h3>
            <h5 className="text-xs">
              {eventInfo.event.extendedProps.subtitle}
            </h5>
          </div>
        </div>
        <div>
          <button onClick={() => handleChange()}>
            <EllipsisVerticalIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
      <b>{eventInfo.timeText}</b>
    </div>
  );
}
