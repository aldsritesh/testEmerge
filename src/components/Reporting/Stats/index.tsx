import { useEffect, useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";

interface IFactCard {
  title: string;
  titleIcon: React.ReactNode;
  subSpanData: string;
  subIcon: React.ReactNode;
  currency: string;
  index: number;
  numberValue: number;
  numberValueData: string;
  totalNo: number;
}

export default function ReportingStats({
  title,
  titleIcon,
  subSpanData,
  subIcon,
  currency,
  index,
  numberValue,
  numberValueData,
  totalNo,
}: IFactCard) {
  const [count, setCount] = useState(0);
  var timesRun = numberValue - 20;

  useEffect(() => {
    var interval = setInterval(function () {
      timesRun += 1;
      if (timesRun > numberValue) {
        setCount(numberValue);
        clearInterval(interval);
      } else {
        setCount(timesRun);
      }
      //do whatever here..
    }, 40);
  }, [numberValue, timesRun]);

  return (
    <div className="  w-full h-full  bg-white pt-4 pb-4 relative pr-3">
      <div className="flex items-center gap-2">
        <div className="p-2 border rounded-full">{titleIcon}</div>
        <h4 className="text-[12px] text-gray-500 font-semibold">{title}</h4>
      </div>

      <div className="flex justify-between items-center">
        <div className="w-full flex justify-start flex-col items-start ">
          <div className="mt-2 text-2xl font-bold ml-1  pl-3">{count}</div>
          <div
            className={` ${
              index == 1
                ? "text-green-700"
                : index == 2
                ? "text-green-700"
                : index == 3
                ? "text-cyan-700"
                : index == 4
                ? "text-red-700"
                : "text-gray-700"
            }  mt-1 text-[12px] font-semibold ml-1 flex gap-1 items-center pr-2  `}
          >
            <div>
              <span className="text-gray-600 text-[11px] pl-0.5">
                {subSpanData}
              </span>
            </div>
            {subIcon} {numberValueData}
          </div>
        </div>
      </div>

      {index == totalNo ? null : (
        <div className="h-24 w-[1px] bg-gray-200 absolute right-0 top-5 hidden lg:block"></div>
      )}
    </div>
  );
}
