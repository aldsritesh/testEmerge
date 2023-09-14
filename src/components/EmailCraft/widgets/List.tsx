import { Element, useEditor, useNode } from "@craftjs/core";
import {
  CommonSettings,
  baseDefaults,
  getCommonSettingsProps,
} from "./CommonSettings";
import { ITextProps, Text } from "./Text/Text";
import ListItem from "./ListItem";
import { RxDragHandleDots2 } from "react-icons/rx";

const elementName = "List";

const fonts = ["font-main", "font-poppins", "font-noto"];
const cases = ["normal-case", "uppercase", "lowercase", "capitalize"];

const listStyles = [
  "list-none",
  "list-disc",
  "list-decimal",
  "list-square",
  "list-upper-roman",
];

interface IHeadlineProps extends ITextProps {
  listStyle?:
    | "list-none"
    | "list-disc"
    | "list-decimal"
    | "list-square"
    | "list-upper-roman";
}

const defaults = {
  fontSize: 16,
  color: "#000000",
  alignment: "left",
  bold: "font-normal",
  italic: false,
  underline: false,
  lineHeight: 1.5,
  font: fonts[0],
  case: cases[0],
};

export const List = ({
  backgroundColor = baseDefaults.backgroundColor,
  borderRadius = baseDefaults.borderRadius,
  borderColor = baseDefaults.borderColor,
  borderType = "border-solid",
  borderWidth = baseDefaults.borderWidth,
  marginTop = baseDefaults.marginTop,
  marginBottom = baseDefaults.marginBottom,
  marginLeft = baseDefaults.marginLeft,
  marginRight = baseDefaults.marginRight,
  paddingTop = baseDefaults.paddingTop,
  paddingBottom = baseDefaults.paddingBottom,
  paddingLeft = baseDefaults.paddingLeft,
  paddingRight = baseDefaults.paddingRight,
  shadow,
  shadowColor,

  listStyle = "list-disc",
}: IHeadlineProps) => {
  const {
    connectors: { connect, drag },
    hasSelectedNode,
    hovered,
    actions: { setProp },
  } = useNode((state) => ({
    hasSelectedNode: state.events.selected,
    hasDraggedNode: state.events.dragged,
    isActive: state.events.selected,
    hovered: state.events.hovered,
    selected: state.related,
  }));

  return (
    <ul
      style={{
        borderColor,
        borderWidth: `${borderWidth}px`,
        borderRadius: borderRadius + "px",
        backgroundColor,
        paddingTop: `${paddingTop}px`,
        paddingBottom: `${paddingBottom}px`,
        paddingLeft: `${paddingLeft}px`,
        paddingRight: `${paddingRight}px`,
        marginTop: `${marginTop}px`,
        marginBottom: `${marginBottom}px`,
        marginLeft: `${marginLeft}px`,
        marginRight: `${marginRight}px`,
      }}
      className={`${borderType} ${shadow} shadow-[${shadowColor}] ${listStyle} ${
        hovered &&
        "outline-2 outline-dotted p-2 outline-gray-400 border-gray-400 "
      } relative`}
      ref={(ref: any) => connect(drag(ref))}
    >
      {hovered && (
        <div className="absolute top-0 left-0 bg-blue-500 text-white text-xs px-1 z-50">
          {elementName}
        </div>
      )}
      <Element is={ListItem} canvas id="mainList">
        <ListItem>
          <Text text="New Item" alignment="left" />
        </ListItem>
      </Element>
    </ul>
  );
};

const ListSettings: any = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  const { connectors, query } = useEditor();

  return (
    <div className="w-full">
      <div
        className="w-full shadow px-2 py-3 border-gray-200 border-[1px] bg-white rounded-md cursor-pointer"
        ref={(ref: any) =>
          connectors.create(
            ref,
            <ListItem>
              <Text text="New Item" alignment="left" />
            </ListItem>
          )
        }
      >
        <div className="flex items-center gap-2">
          <div>
            <RxDragHandleDots2 className="text-gray-500 h-6 w-6" />
          </div>

          <h6 className="text-gray-600 text-lg font-medium text-center pl-2">
            New List Item
          </h6>
        </div>
      </div>

      <div className="mb-4 mt-2 flex flex-col gap-1">
        <label className="text-sm text-gray-400 ">Shadow Type</label>
        <div className="dropdown">
          <label
            tabIndex={0}
            className={`btn hover:bg-transparent hover:text-black rounded-md pt-4 pb-8 btn-sm bg-transparent border-gray-300 capitalize w-full text-left justify-start text-gray-500`}
          >
            {props.listStyle}
          </label>
          <div
            tabIndex={0}
            className="dropdown-content card card-compact w-64 p-2 shadow bg-white text-gray-700 max-h-80 overflow-y-scroll scrollbar-hide"
          >
            <ul tabIndex={0} className="menu w-full bg-transparent">
              {listStyles.map((item, index) => (
                <li
                  key={index}
                  onClick={() =>
                    setProp((props: any) => (props.listStyle = item))
                  }
                  className={`${
                    item === props.listStyle &&
                    "bg-primary text-primary-content rounded-md"
                  }`}
                >
                  <p className={`capitalize ${item} text-sm`}>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <CommonSettings />
    </div>
  );
};

List.craft = {
  related: {
    settings: ListSettings,
  },
  props: {
    ...getCommonSettingsProps(),

    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 16,
    paddingRight: 16,
    listStyle: "list-disc",
  },
  displayName: "List",
};
