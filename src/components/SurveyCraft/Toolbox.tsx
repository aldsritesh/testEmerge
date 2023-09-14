import React, { useContext } from "react";
import { CraftContext } from "@/pages/builder/survey/craft";
import ElementToolsLayout from "./Toolboxes/tools/ElementToolsLayout";
import Container from "./widgets/Container";
import { Headline } from "./widgets/Text/Headline";
import { BsPlusSquare } from "react-icons/bs";
import StandardToolbox from "./Toolboxes/StandardToolbox";
import CustomizeToolbox from "./Toolboxes/CustomizeToolbox";
import { Slide } from "./widgets/Slide";

export const Toolbox = () => {
  const { tools, setTools } = useContext(CraftContext);
  console.log(tools);

  return (
    <div>
      <div className="px-3 pt-3">
        <ElementToolsLayout
          toolName="Slide"
          tool={<Slide />}
          image={require("@/../public/craft/grid/1.png")}
          icon={<BsPlusSquare className="h-5 w-5 text-gray-500" />}
        />
      </div>
      <div className="px-3 pt-2">
        <div className={`p-[2px] flex flex-wrap bg-[#eeeef1]  rounded-md`}>
          <button
            className={`w-1/2   px-4 py-2 text-center ${
              tools == "standard"
                ? "bg-white rounded-md shadow-md"
                : "bg-transparent"
            }  text-black font-medium  border-none capitalize hover:bg-white`}
            onClick={() => setTools("standard")}
          >
            Standard
          </button>
          <button
            className={`w-1/2   px-4 py-2 text-center ${
              tools == "customize"
                ? "bg-white rounded-md shadow-md"
                : "bg-transparent"
            }  text-black font-medium  border-none capitalize hover:bg-white`}
            onClick={() => setTools("customize")}
          >
            Custom
          </button>
        </div>
      </div>
      {tools === "standard" && <StandardToolbox />}
      {tools === "customize" && <CustomizeToolbox />}
    </div>
  );
};
