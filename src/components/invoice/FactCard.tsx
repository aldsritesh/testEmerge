import { useEffect, useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";

interface IFactCard {
  title: string;
  titleIcon: React.ReactNode;
  subSpanData: string;
  subIcon: React.ReactNode;
  currency: string;
  index: number;
  moneyValue: number;
  moneyValueData: string;
  numberValue: number;
  numberValueData: string;
}

export default function FactCard({
  title,
  titleIcon,
  subSpanData,
  subIcon,
  currency,
  index,
  moneyValue,
  moneyValueData,
  numberValue,
  numberValueData,
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
        <div className="w-1/2 flex justify-center flex-col items-center ">
          <div className="mt-2 text-2xl font-bold ml-1">{count}</div>
          <div
            className={` ${
              index == 1
                ? "text-green-700"
                : index == 2
                ? "text-red-700"
                : index == 3
                ? "text-cyan-700"
                : "text-gray-700"
            }  mt-1 text-[12px] font-semibold ml-1 flex gap-1 items-center pr-2`}
          >
            {subIcon}
            <div>
              {numberValueData}
              <span className="text-gray-600 text-[12px]">{subSpanData}</span>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex justify-center flex-col items-center pr-5">
          <div className="mt-2 text-2xl font-bold ml-1">
            {currency}
            {moneyValue}
          </div>
          <div
            className={` ${
              index == 1
                ? "text-green-700"
                : index == 2
                ? "text-red-700"
                : index == 3
                ? "text-cyan-700"
                : "text-gray-700"
            }  mt-1 text-[12px] font-semibold ml-1 flex gap-1 items-center`}
          >
            {subIcon}
            <div>
              {moneyValueData}
              <span className="text-gray-600 text-[12px]">{subSpanData}</span>
            </div>
          </div>
        </div>
      </div>

      {index == 3 ? null : (
        <div className="h-24 w-[2px] bg-gray-200 absolute right-0 top-5 hidden lg:block"></div>
      )}
    </div>
  );
}
