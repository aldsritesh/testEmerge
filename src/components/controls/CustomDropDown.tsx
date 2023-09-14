import { useState } from "react";

import { TfiAngleDown } from "react-icons/tfi";

export interface CustomDropDownData {
  label: string;
  value: string;
  color: string;
}

interface ICustomDropDownProps {
  data: CustomDropDownData[];
  onChange: Function;
  activeIndex: number;
}

export default function CustomDropDown({
  data,
  onChange,
  activeIndex,
}: ICustomDropDownProps) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  return (
    <div className="w-full relative">
      <div
        className="flex justify-between items-center w-full lg:w-full bg-white py-2 px-3 rounded-lg shadow-md hover:ring transition-all"
        onClick={() => setIsDropdownVisible(!isDropdownVisible)}
      >
        <div className="flex items-center gap-2 font-semibold text-lg">
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: data[activeIndex].color }}
          ></div>
          <p>{data[activeIndex].label}</p>
        </div>
        <TfiAngleDown />
      </div>

      {isDropdownVisible && (
        <div className="transition-all mt-2 bg-white py-2 px-3 rounded-lg shadow-md w-full lg:w-full absolute z-50 max-h-80 overflow-y-scroll scrollbar-hide">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-2"
              onClick={() => {
                onChange(item, index);
                setIsDropdownVisible(false);
              }}
            >
              <div className="flex items-center gap-2 font-semibold text-lg">
                <div
                  className={`w-2 h-2 rounded-full`}
                  style={{ backgroundColor: item.color }}
                ></div>
                <p>{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
