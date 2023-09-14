import { XMarkIcon } from "@heroicons/react/24/solid";
import { MouseEventHandler, ReactNode } from "react";

interface ILeftFlyoutProps {
  visibility: boolean;
  onClose: MouseEventHandler;
  children: ReactNode;
  width?: number;
  disableOverlay?: boolean;
}

export default function LeftFlyOut({
  visibility,
  onClose,
  children,
  width = 40,
  disableOverlay = false,
}: ILeftFlyoutProps) {
  return (
    <div
      className={`w-full min-h-screen  scrollbar-hide  fixed left-0 top-0  z-50 transition-all ${
        !disableOverlay && "bg-black"
      } overflow-hidden ${
        visibility
          ? "translate-x-0 opacity-100 bg-opacity-30"
          : "translate-x-[-100%] opacity-0 bg-opacity-0"
      }`}
    >
      <div
        className={`${
          !disableOverlay && "backdrop-blur-md"
        } absolute h-full w-full z-40 `}
        onClick={onClose}
      ></div>
      <div
        className={`bg-mainBg w-full md:w-[${width}%] absolute left-0  h-full z-50`}
      >
        <div className="">
          <div
            className="absolute top-5 right-0 bg-newBlue  rounded-md p-1 cursor-pointer"
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
