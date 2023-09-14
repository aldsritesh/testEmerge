import React from "react";
import { AiOutlineBarChart } from "react-icons/ai";

const Component = ({ icon, WidgetName }: any) => {
  const onDragStart = (e: any, id: any) => {
    e.dataTransfer.setData("text/plain", id);
  };

  return (
    <div
      className="widget w-72"
      draggable
      onDragStart={(e) => onDragStart(e, WidgetName)}
    >
      <div className="border border-grey/20 rounded-md w-full flex items-center divide-x divide-grey/20">
        <div className="flex-none p-3 text-grey">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M104,60A12,12,0,1,1,92,48,12,12,0,0,1,104,60Zm60,12a12,12,0,1,0-12-12A12,12,0,0,0,164,72ZM92,116a12,12,0,1,0,12,12A12,12,0,0,0,92,116Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,116ZM92,184a12,12,0,1,0,12,12A12,12,0,0,0,92,184Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,184Z"></path>
          </svg>
        </div>
        <div className="flex-1 p-3 flex items-center gap-2 text-black">
          {icon}
          <p>{WidgetName}</p>
        </div>
      </div>
    </div>
  );
};

export default Component;
