import { MouseEventHandler, useState } from "react";
import WorkflowFlyout from "./WorkflowFlyout";

export default function ExecutionBox({
  onFlyoutToggle,
}: {
  onFlyoutToggle: MouseEventHandler;
}) {
  return (
    <div>
      <button className="btn" onClick={onFlyoutToggle}>
        Open Flyout
      </button>
    </div>
  );
}
