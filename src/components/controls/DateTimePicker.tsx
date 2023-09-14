import { MouseEventHandler, useEffect, useState } from "react";

interface IDateTimePickerProps {
  isVisible: boolean;
  onClose: Function;
  onItemSelect: Function;
}

export default function DateTimePicker({
  isVisible,
  onClose,
  onItemSelect,
}: IDateTimePickerProps) {
  const [selectedDateTime, setSelectedDateTime] = useState("");

  return (
    <div>
      <div
        className={`absolute transition-all bottom-[-8px] left-0 mt-5 w-full shadow-md  scrollbar-hide ${
          isVisible
            ? "translate-y-0 opacity-100 z-50"
            : "-translate-y-[2%] opacity-0 -z-50"
        }`}
        onBlur={() => console.log("here")}
      >
        <div className=" bg-white ">
          <div className="flex justify-between  ">
            <input
              type="datetime-local"
              className="w-full bg-gray-100 outline-none border-none px-4 py-3 rounded-l-sm"
              placeholder="Search"
              value={selectedDateTime}
              onChange={(e) => {
                setSelectedDateTime(e.target.value);
                onItemSelect(e.target.value);
              }}
            />
            <button
              className="rounded-r-sm bg-newBlue duration-300 hover:bg-secondary px-4 py-1 text-white capitalize"
              onClick={(e) => {
                onClose();
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
