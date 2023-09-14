import TextInput from "@/components/controls/TextInput";
import { useEditor, useNode } from "@craftjs/core";
import { Slider } from "@mui/base";
import { MuiColorInput } from "mui-color-input";
import { useEffect, useState } from "react";
import ContentEditable from "react-contenteditable";
import {
  AiOutlineAlignCenter,
  AiOutlineAlignLeft,
  AiOutlineAlignRight,
  AiOutlineBold,
  AiOutlineItalic,
  AiOutlineStrikethrough,
  AiOutlineUnderline,
} from "react-icons/ai";
import {
  BiAlignJustify,
  BiAlignLeft,
  BiAlignMiddle,
  BiAlignRight,
  BiBold,
  BiItalic,
  BiStrikethrough,
  BiUnderline,
} from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "../CommonSettings";
const elementName = "Text";

const fonts = ["font-main", "font-poppins", "font-noto"];
const cases = ["normal-case", "uppercase", "lowercase", "capitalize"];

const defaults = {
  fontSize: 16,
  mobileFontSize: 16,
  color: "#000000",
  alignment: "left",
  bold: "font-normal",
  italic: false,
  underline: false,
  lineHeight: 1.5,
  font: fonts[0],
  case: cases[0],
};

const fontWeights = [
  "font-thin",
  "font-extralight",
  "font-light",
  "font-normal",
  "font-medium",
  "font-semibold",
  "font-bold",
  "font-extrabold",
];

export interface ITextProps extends ICommonSettingsProps {
  text: string;
  fontSize?: number;
  mobileFontSize?: number;
  alignment?: "left" | "right" | "center" | "justify";
  color?: string;
  bold?:
    | "font-thin"
    | "font-extralight"
    | "font-light"
    | "font-normal"
    | "font-medium"
    | "font-semibold"
    | "font-bold"
    | "font-extrabold";
  italic?: boolean;
  underline?: boolean;
  lineHeight?: number;
  font?: string;
  textCase?: string;
  tagName?: string;
  lineThrough?: boolean;
}
export const Text = ({
  text,
  fontSize = 16,
  mobileFontSize = 16,
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
  tagName = "p",
  lineThrough,
}: ITextProps) => {
  const {
    connectors: { connect, drag },
    hasSelectedNode,
    hovered,
    id,
    actions: { setProp },
  } = useNode((state) => ({
    hasSelectedNode: state.events.selected,
    hasDraggedNode: state.events.dragged,
    isActive: state.events.selected,
    hovered: state.events.hovered,
    selected: state.related,
  }));

  const { actions } = useEditor();
  const [editable, setEditable] = useState(false);
  const [openCreateModal, setOpenCreateModal] = useState(false);

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
        hovered && "hover:outline-blue-500 hover:outline  hover:outline-1"
      } relative`}
    >
      {hovered && (
        <>
          <div className="absolute top-0 left-0 bg-blue-500 text-white text-[7px] px-1 capitalize">
            {elementName}
          </div>
        </>
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
          mobileFontSize: `${mobileFontSize}px`,
          color: color,
          lineHeight: lineHeight,
          borderRadius: borderRadius + "px",
          backgroundColor,
          paddingTop: `${paddingTop}px`,
          paddingBottom: `${paddingBottom}px`,
          paddingLeft: `${paddingLeft}px`,
          paddingRight: `${paddingRight}px`,
        }}
        className={`text-${alignment}   ${bold} ${underline && "underline"} ${
          italic && "italic"
        } ${font} ${textCase} ${borderType} ${lineThrough && "line-through"}`}
      />
    </div>
  );
};

export const TextSettings: any = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div className="w-full ">
      <div className="mb-4 mt-2 flex flex-col gap-1">
        <label className="text-sm text-black font-semibold">Text</label>

        <TextInput
          value={props.text}
          placeholder="Start typing here..."
          onChange={(e) =>
            setProp((props: any) => (props.text = e.target.value))
          }
          isTextArea={props.text.length > 30}
          defaultRows={8}
        />
      </div>

      <h3 className="mt-3 font-poppins font-medium text-lg">Typography</h3>

      <div className="mb-2 mt-4 flex flex-col gap-1">
        <label className="text-sm text-black font-semibold ">Font</label>
        <div className="dropdown border-2 border-gray-100 shadow-md">
          <label
            tabIndex={0}
            className={`btn hover:bg-transparent hover:text-black rounded-md py-2 btn-sm bg-transparent text-black border-gray-300 capitalize w-full text-left justify-start ${props.font} text-gray-500`}
          >
            {props.font.replace("-", " ")}
          </label>
          <div
            tabIndex={0}
            className="dropdown-content card card-compact w-64 p-2 shadow bg-white text-gray-700 max-h-80 overflow-y-scroll scrollbar-hide"
          >
            <ul tabIndex={0} className="menu w-full bg-transparent">
              {fonts.map((item, index) => (
                <li
                  key={index}
                  onClick={() => setProp((props: any) => (props.font = item))}
                  className={`${
                    item === props.font &&
                    "bg-primary text-primary-content rounded-md"
                  }`}
                >
                  <a className={`capitalize ${item} text-sm`}>
                    {item.replace("-", " ")}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex-col">
        <div className="mb-2 mt-4 flex flex-col gap-1 w-full pr-1">
          <label className="text-sm text-black font-semibold">
            Mobile Font Size (PX)
          </label>
          {/* <TextInput
            value={props.fontSize}
            placeholder="Font size in px"
            onChange={(e) =>
              setProp((props: any) => (props.fontSize = e.target.value))
            }
            type="number"
            max={90}
            min={10}
          /> */}
          <div className="flex justify-between items-center gap-3">
            <input
              value={props.mobileFontSize}
              placeholder="Font size in px"
              onChange={(e) =>
                setProp((props: any) => (props.mobileFontSize = e.target.value))
              }
              max={500}
              min={10}
              type="range"
              className="range range-xs w-[80%]"
            />
            <TextInput
              className="w-[10%]"
              value={props.mobileFontSize}
              placeholder="Font size in px"
              onChange={(e) =>
                setProp((props: any) => (props.mobileFontSize = e.target.value))
              }
              type="number"
              max={500}
              min={10}
            />
          </div>
          <label className="text-sm text-black font-semibold">
            Desktop Font Size (PX)
          </label>
          <div className="flex justify-between items-center gap-3">
            <input
              value={props.fontSize}
              placeholder="Font size in px"
              onChange={(e) =>
                setProp((props: any) => (props.fontSize = e.target.value))
              }
              max={500}
              min={10}
              type="range"
              className="range range-xs w-[80%]"
            />
            <TextInput
              className="w-[10%]"
              value={props.fontSize}
              placeholder="Font size in px"
              onChange={(e) =>
                setProp((props: any) => (props.fontSize = e.target.value))
              }
              type="number"
              max={500}
              min={10}
            />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="mb-2 mt-4 flex flex-col gap-1 w-[40%] ">
            <label className="text-sm text-black  font-semibold">
              Line Height
            </label>
            <TextInput
              value={props.lineHeight}
              placeholder="Font size in px"
              onChange={(e) =>
                setProp((props: any) => (props.lineHeight = e.target.value))
              }
              type="number"
              max={8}
              min={0.5}
              step=".05"
            />
          </div>
          <div className="mb-2 mt-4 flex flex-col gap-1 w-[60%]">
            <label className="text-sm text-black  font-semibold ml-2">
              Letter Case
            </label>
            <div className="relative border-[1px] dropdown shadow-sm border-gray-200 ml-2 rounded-md h-full py-1">
              <label
                tabIndex={0}
                className={`  btn hover:bg-transparent hover:text-black  py-2 btn-sm bg-transparent text-black capitalize w-full text-left justify-start ${props.textCase} text-gray-500`}
              >
                {props.textCase}
              </label>
              <p className="absolute right-1 top-3">
                <RiArrowDropDownLine />
              </p>
              <div
                tabIndex={0}
                className=" mt-2 dropdown-content card card-compact w-64 p-2 shadow bg-white text-gray-700 max-h-80 overflow-y-scroll scrollbar-hide"
              >
                <ul tabIndex={0} className="menu w-full bg-transparent">
                  {cases.map((item, index) => (
                    <li
                      key={index}
                      onClick={() =>
                        setProp((props: any) => (props.textCase = item))
                      }
                      className={`${
                        item === props.textCase &&
                        "bg-primary text-primary-content rounded-md"
                      }`}
                    >
                      <a className={`${item} text-sm`}>
                        {item.replace("-", " ")}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-2 mt-4 flex flex-col gap-1">
          <label className="text-sm text-black font-semibold ">
            Text Color
          </label>
          <div className="w-full">
            <div className="builderTextBox">
              <MuiColorInput
                // format="hex"
                value={props.color ? props.color : "#000000"}
                onChange={(e) => setProp((props: any) => (props.color = e))}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-6 mt-4 flex flex-col gap-2">
        <label className="text-sm text-black font-semibold ">Decoration</label>
        <div className="btn-group w-full border">
          <button className="dropdown w-1/4 border-r">
            <label
              tabIndex={0}
              className={`flex justify-center items-center btn btn-sm border-gray-300 hover:text-[#0048BA] hover:bg-[#BCDAF9] capitalize w-full ${
                props.bold != defaults.bold
                  ? "bg-[#BCDAF9] text-[#0048BA]"
                  : "bg-white text-black"
              }`}
            >
              <AiOutlineBold size={18} />
            </label>
            <div
              tabIndex={0}
              className="dropdown-content card card-compact w-64 p-2 shadow bg-white text-gray-700 max-h-72 overflow-y-scroll scrollbar-hide"
            >
              <ul tabIndex={0} className="menu w-full bg-transparent">
                {fontWeights.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => setProp((props: any) => (props.bold = item))}
                    className={`${
                      item === props.bold &&
                      "bg-primary text-primary-content rounded-md"
                    }`}
                  >
                    <a className={`capitalize ${item} text-sm`}>
                      {item.replace("-", " ")}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </button>

          <button
            className={`flex justify-center items-center btn-sm border-r  border-gray-300 hover:text-[#0048BA] hover:bg-[#BCDAF9] capitalize w-1/4 ${
              props.italic
                ? "bg-[#BCDAF9] text-[#0048BA]"
                : "bg-white text-black"
            }`}
            onClick={() =>
              setProp((props: any) => (props.italic = !props.italic))
            }
          >
            <AiOutlineItalic size={18} />
          </button>
          <button
            className={`flex justify-center items-center btn-sm border-r border-gray-300 hover:text-[#0048BA] hover:bg-[#BCDAF9] capitalize w-1/4 ${
              props.underline
                ? "bg-[#BCDAF9] text-[#0048BA]"
                : "bg-white text-black"
            }`}
            onClick={() =>
              setProp((props: any) => (props.underline = !props.underline))
            }
          >
            <AiOutlineUnderline size={18} />
          </button>

          <button
            className={`flex justify-center items-center text-center btn-sm border-gray-300 hover:text-[#0048BA] hover:bg-[#BCDAF9] capitalize w-1/4 ${
              props.lineThrough
                ? "bg-[#BCDAF9] text-[#0048BA]"
                : "bg-white text-black"
            }`}
            onClick={() =>
              setProp((props: any) => (props.lineThrough = !props.lineThrough))
            }
          >
            <AiOutlineStrikethrough size={18} />
          </button>
        </div>
      </div>

      <div className="mb-2 mt-4 flex flex-col gap-2">
        <label className="text-sm text-black font-semibold ">
          Text Alignment
        </label>
        <div className="btn-group w-full border-2">
          <button
            className={`flex justify-center items-center border-r btn-sm border-gray-300 hover:text-[#0048BA] hover:bg-[#BCDAF9] capitalize w-1/4 ${
              props.alignment == "left"
                ? "bg-[#BCDAF9] text-[#0048BA]"
                : "bg-white text-black"
            }`}
            onClick={() => setProp((props: any) => (props.alignment = "left"))}
            aria-label="Left"
            title="Left"
          >
            <AiOutlineAlignLeft size={20} />
          </button>

          <button
            className={`flex justify-center items-center btn-sm border-r border-gray-300 hover:text-[#0048BA] hover:bg-[#BCDAF9] capitalize w-1/4 ${
              props.alignment == "center"
                ? "bg-[#BCDAF9] text-[#0048BA]"
                : "bg-white text-black"
            }`}
            onClick={() =>
              setProp((props: any) => (props.alignment = "center"))
            }
            aria-label="Center"
            title="Center"
          >
            <AiOutlineAlignCenter size={20} />
          </button>

          <button
            className={`flex justify-center items-center btn-sm border-r border-gray-300 hover:text-[#0048BA] hover:bg-[#BCDAF9] capitalize w-1/4 ${
              props.alignment == "right"
                ? "bg-[#BCDAF9] text-[#0048BA]"
                : "bg-white text-black"
            }`}
            onClick={() => setProp((props: any) => (props.alignment = "right"))}
            aria-label="right"
            title="right"
          >
            <AiOutlineAlignRight size={20} />
          </button>

          <button
            className={`flex justify-center items-center btn-sm border-gray-300 hover:text-[#0048BA] hover:bg-[#BCDAF9] capitalize w-1/4 ${
              props.alignment == "justify"
                ? "bg-[#BCDAF9] text-[#0048BA]"
                : "bg-white text-black"
            }`}
            onClick={() =>
              setProp((props: any) => (props.alignment = "justify"))
            }
            aria-label="justify"
            title="justify"
          >
            <BiAlignJustify size={20} />
          </button>
        </div>
      </div>

      <CommonSettings />
    </div>
  );
};

export const textProps = {
  text: "Start writing here...",
  fontSize: defaults.fontSize,
  mobileFontSize: defaults.mobileFontSize,
  underline: defaults.underline,
  bold: defaults.bold,
  italic: defaults.italic,
  alignment: defaults.alignment,
  lineHeight: defaults.lineHeight,
  font: defaults.font,
  textCase: defaults.case,
  ...getCommonSettingsProps(),
  borderRadius: 10,
  borderWidth: baseDefaults.borderWidth,
  marginTop: baseDefaults.marginTop,
  marginBottom: baseDefaults.marginBottom,
  marginLeft: baseDefaults.marginLeft,
  marginRight: baseDefaults.marginRight,
  paddingTop: baseDefaults.paddingTop,
  paddingBottom: baseDefaults.paddingBottom,
  paddingLeft: baseDefaults.paddingLeft,
  paddingRight: baseDefaults.paddingRight,
  tagName: "p",
  lineThrough: false,
};

Text.craft = {
  related: {
    settings: TextSettings,
  },
  props: textProps,
  displayName: "Text",
};
