import { NodeTree, useEditor } from "@craftjs/core";
import { DragIndicatorOutlined } from "@mui/icons-material";
import Image from "next/image";
import { JSXElementConstructor, ReactElement } from "react";
import { RxDragHandleDots2 } from "react-icons/rx";

interface IElementToolsLayoutProps {
  icon: any;
  toolName: string;
  image: string;
  tool:
    | ReactElement<any, string | JSXElementConstructor<any>>
    | (() => ReactElement<any, string | JSXElementConstructor<any>> | NodeTree);
}

export default function ElementToolsLayout({
  icon,
  toolName,
  tool,
  image,
}: IElementToolsLayoutProps) {
  const { connectors, query } = useEditor();

  return (
    <div
      className="w-full shadow px-2 py-3 hover:border-blue-200 hover:border-[1px] bg-white rounded-md cursor-pointer"
      ref={(ref: any) => connectors.create(ref, tool)}
    >
      <div className="flex items-center gap-2">
        <div>
          <RxDragHandleDots2 className="text-gray-500 h-6 w-6" />
        </div>
        {icon}
        <h6 className="text-gray-600 text-lg font-medium text-center pl-2">
          {toolName}
        </h6>
      </div>
    </div>
  );
}
