import { MouseEventHandler, ReactNode } from "react";

interface IWorkflowFlyout {
  visibility: boolean;
  onClose: MouseEventHandler;
  renderData: ReactNode;
}
export default function WorkflowFlyout({
  visibility,
  onClose,
  renderData,
}: IWorkflowFlyout) {
  return (
    <div
      className={`w-full h-screen overflow-y-scroll  scrollbar-hide fixed right-0 top-0  z-50 transition-all bg-black overflow-hidden ${
        visibility
          ? "translate-x-0 opacity-100 bg-opacity-30"
          : "translate-x-[100%] opacity-0 bg-opacity-0"
      }`}
    >
      <div className="absolute h-full w-full z-40 " onClick={onClose}></div>
      <div className="bg-white w-full md:w-[50%] lg:w-[40%] absolute right-0 min-h-full h-auto z-50 overflow-y-scroll scrollbar-hide">
        {renderData}
      </div>
    </div>
  );
}
