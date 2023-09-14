import { XMarkIcon } from "@heroicons/react/24/solid";
import { MouseEventHandler, ReactNode } from "react";

interface IFlyoutProps {
  visibility: boolean;
  onClose: MouseEventHandler;
  children: ReactNode;
  width?: number;
  disableOverlay?: boolean;
}

export default function FlyOut({
  visibility,
  onClose,
  children,
  width = 40,
  disableOverlay = false,
}: IFlyoutProps) {
  return (
    <div
      className={`w-full min-h-screen  scrollbar-hide  fixed right-0 top-0  z-50 transition-all ${
        !disableOverlay && "bg-black"
      } overflow-hidden ${
        visibility
          ? "translate-x-0 opacity-100 bg-opacity-30"
          : "translate-x-[100%] opacity-0 bg-opacity-0"
      }`}
    >
      <div
        className={`${
          !disableOverlay && "backdrop-blur-md"
        } absolute h-full w-full z-40 `}
        onClick={onClose}
      ></div>
      <div
        className={`bg-mainBg w-full md:w-[${width}%] absolute right-0  h-full z-50`}
      >
        <div className="">
          <div
            className="absolute top-5 -left-5 bg-blue-500  rounded-md p-1 cursor-pointer"
            onClick={onClose}
          >
            <XMarkIcon className="text-white w-5 h-5" />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
