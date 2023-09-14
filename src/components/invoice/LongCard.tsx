import { useEffect, useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";

interface IFactCard {
  title: string;
  number: number;
  titleIcon: React.ReactNode;
  subData: string;
  subSpanData: string;
  subIcon: React.ReactNode;
  currency: string;
}

export default function LongCard({
  title,
  number,
  titleIcon,
  subData,
  subSpanData,
  subIcon,
  currency,
}: IFactCard) {
  const [count, setCount] = useState(0);
  const [progressCounter] = useState(0);
  var timesRun = number - 20;

  useEffect(() => {
    var interval = setInterval(function () {
      timesRun += 1;
      if (timesRun > number) {
        setCount(number);
        clearInterval(interval);
      } else {
        setCount(timesRun);
      }
      //do whatever here..
    }, 40);
  }, [number, timesRun]);

  return (
    <div className="w-full h-full border bg-white shadow-md rounded-lg pt-2">
      <div className="px-4">
        <h4 className="text-base text-black font-bold pb-1">{title}</h4>
        <h6 className="text-[12px] text-gray-500 font-semibold">
          {subSpanData}
        </h6>
      </div>
      <div className="text-xl font-semibold ml-1 -mt-2 px-4">
        <progress
          className="progress progress-mine w-full h-1"
          value="62"
          max="100"
        ></progress>
      </div>
      <div className="flex flex-wrap border-t mt-1 py-2 px-4">
        <div className="w-1/2 border-r">
          <h6 className="text-newBlue font-medium text-[12px] uppercase">
            Current
          </h6>
          <h4 className="text-black font-bold text-sm">
            {currency}
            {count}
          </h4>
        </div>
        <div className="w-1/2 pl-4">
          <h6 className="text-[#b6b5b5] font-medium text-[12px] uppercase">
            Overdue
          </h6>
          <h4 className="text-black font-bold text-sm">
            {currency}
            {count}
          </h4>
        </div>
      </div>
    </div>
  );
}
