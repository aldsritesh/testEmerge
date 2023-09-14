import { useNode } from "@craftjs/core";
import { useEffect, useState } from "react";
import ContentEditable from "react-contenteditable";

import { baseDefaults } from "../CommonSettings";
import { ITextProps, TextSettings, textProps } from "./Text";
const elementName = "Headline";

const tagTypes = ["h1", "h2", "h3", "h4", "h5", "h6"];

const fonts = ["font-main", "font-poppins", "font-noto"];
const cases = ["normal-case", "uppercase", "lowercase", "capitalize"];

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

interface IHeadlineProps extends ITextProps {}

export const Headline = ({
  text,
  fontSize = 16,
  alignment = "left",
  color = "#000000",
  bold = "font-normal",
  italic = defaults.italic,
  underline = defaults.underline,
  lineHeight = defaults.lineHeight,
  font = defaults.font,
  textCase = defaults.case,
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
  tagName = "h1",
}: IHeadlineProps) => {
  const {
    connectors: { connect, drag },
    hasSelectedNode,
    hovered,
    selected,
    actions: { setProp },
  } = useNode((state) => ({
    hasSelectedNode: state.events.selected,
    hasDraggedNode: state.events.dragged,
    isActive: state.events.selected,
    hovered: state.events.hovered,
    selected: state.related,
  }));

  const [editable, setEditable] = useState(false);

  useEffect(() => {
    !hasSelectedNode && setEditable(false);
  }, [hasSelectedNode]);

  return (
    <div
      ref={(ref: any) => connect(drag(ref))}
      onClick={(e) => setEditable(true)}
      style={{
        borderColor,
        borderWidth: `${borderWidth}px`,
        borderRadius: `${borderRadius}px`,
        marginTop: `${marginTop}px`,
        marginBottom: `${marginBottom}px`,
        marginLeft: `${marginLeft}px`,
        marginRight: `${marginRight}px`,
      }}
      className={`${
        hovered && "hover:outline-green-500 hover:outline"
      } relative`}
    >
      {hovered && (
        <div className="absolute top-0 right-0 bg-green-500 text-white text-[10px] px-1 capitalize">
          {elementName}
        </div>
      )}
      <ContentEditable
        html={text}
        disabled={!editable}
        onChange={(e) =>
          setProp(
            (props: any) =>
              (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, ""))
          )
        }
        tagName={tagName}
        style={{
          fontSize: `${fontSize}px`,
          color: color,
          lineHeight: lineHeight,
          borderRadius: borderRadius + "px",
          backgroundColor,
          paddingTop: `${paddingTop}px`,
          paddingBottom: `${paddingBottom}px`,
          paddingLeft: `${paddingLeft}px`,
          paddingRight: `${paddingRight}px`,
        }}
        className={`text-${alignment}  ${bold} ${underline && "underline"} ${
          italic && "italic"
        } ${font} ${textCase} ${borderType}`}
      />
    </div>
  );
};

const HeadlineSettings: any = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div className="w-full">
      <div className="mb-4 mt-2 flex flex-col gap-1">
        <label className="text-sm text-gray-400 ">Heading Type</label>
        <div className="dropdown">
          <label
            tabIndex={0}
            className={`btn hover:bg-transparent hover:text-black rounded-md py-2 btn-sm bg-transparent  border-gray-300 capitalize w-full text-left justify-start text-gray-500`}
          >
            {props.tagName}
          </label>
          <div
            tabIndex={0}
            className="dropdown-content card card-compact w-64 p-2 shadow bg-white text-gray-700 max-h-80 overflow-y-scroll scrollbar-hide"
          >
            <ul tabIndex={0} className="menu w-full bg-transparent">
              {tagTypes.map((item, index) => (
                <li
                  key={index}
                  onClick={() =>
                    setProp((props: any) => (props.tagName = item))
                  }
                  className={`${
                    item === props.tagName &&
                    "bg-primary text-primary-content rounded-md"
                  }`}
                >
                  <p className={`${item} text-sm`}>{item.replace("-", " ")}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <TextSettings />
    </div>
  );
};

Headline.craft = {
  related: {
    settings: HeadlineSettings,
  },
  props: {
    ...textProps,
  },
  displayName: "Headline",
};
