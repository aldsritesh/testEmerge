import moment from "moment";
import { useEffect, useRef, useState } from "react";

export default function CountdownComp({ dateTime }: { dateTime: string }) {
  const calculateDuration = (eventTime: number) => {
    const duration = moment.duration(
      Math.max(eventTime - Math.floor(Date.now() / 1000), 0),
      "seconds"
    );

    return duration;
  };

  const [eventTime, setEventTime] = useState(
    Number(moment(dateTime).format("X"))
  );

  const interval = 1000;
  const initialDuration = calculateDuration(eventTime);
  const [duration, setDuration] = useState(initialDuration);
  const timerRef: any = useRef(0);

  useEffect(() => {
    clearInterval(timerRef.current);
    setEventTime(Number(moment(dateTime).format("X")));
    const initialDuration = calculateDuration(eventTime);
    setDuration(initialDuration);

    const timerCallback = () => {
      setDuration(calculateDuration(eventTime));
    };
    timerRef.current = setInterval(timerCallback, interval);
  }, [dateTime, eventTime]);

  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);
  return (
    <div className="flex items-center justify-center gap-4">
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          {duration?.days() < 10 ? `0${duration?.days()}` : duration?.days()}
        </span>
        Days
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          {duration?.hours() < 10 ? `0${duration?.hours()}` : duration?.hours()}
        </span>
        Hours
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          {duration?.minutes() < 10
            ? `0${duration?.minutes()}`
            : duration?.minutes()}
        </span>
        Minutes
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          {duration?.seconds() < 10
            ? `0${duration?.seconds()}`
            : duration?.seconds()}
        </span>
        Seconds
      </div>
    </div>
  );
}
