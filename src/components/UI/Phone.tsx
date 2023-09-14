import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import React, { useState, useContext, useEffect, useCallback } from "react";
import Dialpad from "@/components/contacts/Dialpad";
import { GlobalContext } from "@/layouts/GlobalLayout";
type Position = {
  xRate: number;
  yRate: number;
};

export const Phone = () => {
  const ctx = useContext(GlobalContext);
  const [maxX, setMaxX] = useState(0);
  const [maxY, setMaxY] = useState(0);

  useEffect(() => {
    setMaxX(window.innerWidth);
    setMaxY(window.innerHeight);

    function handleResize() {
      setMaxX(window.innerWidth);
      setMaxY(window.innerHeight);
      currentPosition.xRate = Math.min(
        window.innerWidth,
        currentPosition.xRate
      );
      currentPosition.yRate = Math.min(
        window.innerHeight,
        currentPosition.yRate
      );
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  const [currentPosition, setCurrentPosition] = useState<Position>({
    xRate: 550,
    yRate: 550,
  });

  const onDrag = (e: DraggableEvent, data: DraggableData) => {
    setCurrentPosition({ xRate: data.lastX, yRate: data.lastY });
  };

  return (
    <Draggable
      defaultPosition={{ x: 1000, y: 200 }}
      onDrag={onDrag}
      bounds={{ left: 510, top: 85, right: maxX + 232, bottom: maxY - 480 }}
    >
      {
        <div className={ctx.showDialer ? "" : "hidden"}>
          <Dialpad />
        </div>
      }
    </Draggable>
  );
};
