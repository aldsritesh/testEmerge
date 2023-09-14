import { NodeTree, useEditor } from "@craftjs/core";
import { DragIndicatorOutlined } from "@mui/icons-material";
import Image from "next/image";
import { JSXElementConstructor, ReactElement } from "react";

interface IPrebuiltToolsLayoutProps {
  toolName: string;
  image: string;
  tool:
    | ReactElement<any, string | JSXElementConstructor<any>>
    | (() => ReactElement<any, string | JSXElementConstructor<any>> | NodeTree);
}

export default function PrebuiltToolsLayout({
  toolName,
  tool,
  image,
}: IPrebuiltToolsLayoutProps) {
  const { connectors, query } = useEditor();

  return (
    <div className="w-full shadow px-2 py-3 border-gray-200 border-[1px] bg-white rounded-md">
      <button
        ref={(ref: any) => connectors.create(ref, tool)}
        className="flex items-start gap-1 w-full"
      >
        <div className="">
          <DragIndicatorOutlined className="text-gray-400" />
        </div>
        <div className="flex flex-col items-center w-full">
          <Image src={image} alt="hero layout" />
          <h6 className="text-black font-medium text-center"> {toolName}</h6>
        </div>
      </button>
    </div>
  );
}
