import React, { useContext } from "react";
import { CraftContext } from "@/pages/builder/website/craft";
import ElementToolbox from "./Toolboxes/ElementToolbox";

export const Toolbox = () => {
  const { tools, setTools } = useContext(CraftContext);

  return (
    <div className=" ">
     <ElementToolbox />
    </div>
  );
};
