import TextInput from "@/components/controls/TextInput";
import { useNode } from "@craftjs/core";
import { MuiColorInput } from "mui-color-input";
import { createElement, useEffect, useState } from "react";
import ContentEditable from "react-contenteditable";
import { BiBold, BiItalic, BiUnderline } from "react-icons/bi";
import { IoContract } from "react-icons/io5";
import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "./CommonSettings";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitch,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { IconType } from "react-icons/lib";

const fonts = ["font-main", "font-poppins", "font-noto"];
const cases = ["normal-case", "uppercase", "lowercase", "capitalize"];
const justifyContentData = [
  "center",
  "space-between",
  "space-around",
  "space-evenly",
  "flex-start",
  "flex-end",
  "initial",
  "inherit",
];
const alignItemsData = [
  "center",
  "normal",
  "start",
  "end",
  "stretch",
  "flex-start",
  "flex-end",
  "baseline",
  "initial",
  "inherit",
];

const socialIcons = [
  { icon: FaFacebook, name: "Facebook" },
  { icon: FaLinkedin, name: "Facebook" },
  { icon: FaTwitch, name: "Facebook" },
  { icon: FaTwitter, name: "Facebook" },
  { icon: FaInstagram, name: "Facebook" },
  { icon: FaWhatsapp, name: "Facebook" },
  { icon: FaYoutube, name: "Facebook" },
  { icon: FaFacebook, name: "Facebook" },
  { icon: FaFacebook, name: "Facebook" },
  { icon: FaFacebook, name: "Facebook" },
];

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
  justifyContent: justifyContentData[0],
  alignItems: alignItemsData[0],
  href: "#",
  social: {
    name: "Facebook",
    icon: FaFacebook,
  },
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

interface Socials {
  name: string;
  icon: IconType;
}

interface ITextProps extends ICommonSettingsProps {
  fontSize?: number;
  alignment?: "left" | "right" | "center";
  color?: string;
  href: string;
  social?: Socials;
  justifyContent: string;
  alignItems: string;
}

export const Social = ({
  fontSize = 16,
  alignment = "left",
  color = "#000000",
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
  shadow = "shadow-none",
  shadowColor = "transparent",
  justifyContent = defaults.justifyContent,
  alignItems = defaults.alignItems,
  href,
  social = defaults.social,
}: ITextProps) => {
  const {
    connectors: { connect, drag },
    hasSelectedNode,
    hasDraggedNode,
    isActive,
    actions: { setProp },
  } = useNode((state) => ({
    hasSelectedNode: state.events.selected,
    hasDraggedNode: state.events.dragged,
    isActive: state.events.selected,
  }));

  const [editable, setEditable] = useState(false);

  useEffect(() => {
    !hasSelectedNode && setEditable(false);
  }, [hasSelectedNode]);

  const Icon = social.icon;

  return (
    <div
      ref={(ref: any) => connect(drag(ref))}
      onClick={(e) => setEditable(true)}
      style={{
        backgroundColor,
        borderColor,
        borderWidth: `${borderWidth}px`,
        borderRadius: `${borderRadius}px`,
        marginTop: `${marginTop}px`,
        marginBottom: `${marginBottom}px`,
        marginLeft: `${marginLeft}px`,
        marginRight: `${marginRight}px`,
        paddingTop: `${paddingTop}px`,
        paddingBottom: `${paddingBottom}px`,
        paddingLeft: `${paddingLeft}px`,
        paddingRight: `${paddingRight}px`,
        justifyContent: `${justifyContent}`,
        alignItems: `${alignItems}`,
      }}
      className={`flex hover:outline-gray-500 hover:outline outline-1 hover:outline-dashed ${borderType} ${shadow} shadow-[${shadowColor}]`}
    >
      <a className="p-4" href={href}>
        <Icon
          className="text-red-500"
          style={{
            fontSize: `${fontSize}px`,
            color: color,
          }}
        />
      </a>
    </div>
  );
};

const TextSettings: any = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div className="w-full">
      <div className="mb-4 mt-2 flex flex-col gap-1">
        <label className="text-sm text-gray-400 ">Select Font</label>
        <div className="dropdown">
          <label
            tabIndex={0}
            className={`btn hover:bg-transparent hover:text-black rounded-md py-2 btn-sm bg-transparent border-gray-300 capitalize w-full text-left justify-start text-gray-500`}
          >
            {createElement(props.social.icon)} {props.social.name}
          </label>
          <div
            tabIndex={0}
            className="dropdown-content card card-compact w-64 p-2 shadow bg-white text-gray-700 max-h-80 overflow-y-scroll scrollbar-hide"
          >
            <ul tabIndex={0} className="menu w-full bg-transparent">
              {socialIcons.map((item, index) => (
                <li
                  key={index}
                  onClick={() => setProp((props: any) => (props.social = item))}
                  className={`${
                    item === props.font &&
                    "bg-primary text-primary-content rounded-md"
                  }`}
                >
                  <a className={`capitalize ${item} text-sm`}>
                    {createElement(item.icon)} {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-4 mt-2 flex flex-col gap-1">
        <label className="text-sm text-gray-400 ">Social Link</label>
        <div className="">
          <TextInput
            lefticon={<IoContract />}
            value={props.href}
            onChange={(e) =>
              setProp((props: any) => (props.href = e.target.value))
            }
            placeholder="Link"
          />
        </div>
      </div>
      <div className="mb-4 mt-2 flex flex-col gap-1">
        <label className="text-sm text-gray-400">Icon Size</label>
        <TextInput
          lefticon={<IoContract />}
          value={props.fontSize}
          placeholder="Font size in px"
          onChange={(e) =>
            setProp((props: any) => (props.fontSize = e.target.value))
          }
          type="number"
          max={90}
          min={10}
        />
      </div>
      <div className="mb-4 mt-2 flex flex-col gap-1">
        <label className="text-sm text-gray-400 ">Icon Color</label>
        <div className="">
          <MuiColorInput
            format="hex"
            value={props.color ? props.color : "#000000"}
            onChange={(e) => setProp((props: any) => (props.color = e))}
          />
        </div>
      </div>
      <div className="mb-4 mt-2 flex flex-col gap-1">
        <label className="text-sm text-gray-400 ">Justify Content</label>
        <div className="dropdown">
          <label
            tabIndex={0}
            className={`btn hover:bg-transparent hover:text-black rounded-md pt-3 pb-6 btn-sm bg-transparent  border-gray-300 capitalize w-full text-left justify-start   text-gray-500`}
          >
            {props.justifyContent}
          </label>
          <div
            tabIndex={0}
            className="dropdown-content card card-compact w-64 p-2 shadow bg-white text-gray-700 max-h-80 overflow-y-scroll scrollbar-hide"
          >
            <ul tabIndex={0} className="menu w-full bg-transparent">
              {justifyContentData.map((item, index) => (
                <li
                  key={index}
                  onClick={() =>
                    setProp((props: any) => (props.justifyContent = item))
                  }
                  className={`${
                    item === props.justifyContent &&
                    "bg-primary text-primary-content rounded-md"
                  }`}
                >
                  <a className={`${item} text-sm`}>{item.replace("-", " ")}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-4 mt-2 flex flex-col gap-1">
        <label className="text-sm text-gray-400 ">Align Items</label>
        <div className="dropdown">
          <label
            tabIndex={0}
            className={`btn hover:bg-transparent hover:text-black rounded-md pt-3 pb-6 btn-sm bg-transparent  border-gray-300 capitalize w-full text-left justify-start   text-gray-500`}
          >
            {props.alignItems}
          </label>
          <div
            tabIndex={0}
            className="dropdown-content card card-compact w-64 p-2 shadow bg-white text-gray-700 max-h-80 overflow-y-scroll scrollbar-hide"
          >
            <ul tabIndex={0} className="menu w-full bg-transparent">
              {alignItemsData.map((item, index) => (
                <li
                  key={index}
                  onClick={() =>
                    setProp((props: any) => (props.alignItems = item))
                  }
                  className={`${
                    item === props.alignItems &&
                    "bg-primary text-primary-content rounded-md"
                  }`}
                >
                  <a className={`${item} text-sm`}>{item.replace("-", " ")}</a>
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

Social.craft = {
  related: {
    settings: TextSettings,
  },
  props: {
    text: "Start writing here...",
    fontSize: defaults.fontSize,
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
    href: defaults.href,
    social: defaults.social,
    justifyContent: defaults.justifyContent,
    alignItems: defaults.alignItems,
  },
  displayName: "Social",
};
