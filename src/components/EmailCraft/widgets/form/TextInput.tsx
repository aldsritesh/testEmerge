import TextInput from "@/components/controls/TextInput";
import { Element, useNode } from "@craftjs/core";
import { MuiColorInput } from "mui-color-input";
import { InputHTMLAttributes, useEffect, useState } from "react";
import { IoContract } from "react-icons/io5";
import { Text } from "@/components/Craft/widgets/Text/Text";
import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "./CommonSettings";
import WebContainer from "./webContainer";

const elementName = "Text Input";

const textInputTypes = ["text", "number", "email", "url", "text"];

export interface ITextProps extends ICommonSettingsProps {
  color?: string;
  textInputProps?: InputHTMLAttributes<HTMLInputElement>;
  text?: any;
}

export const TextInputElement = ({
  text,
  color = "",
  textInputProps,
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
}: ITextProps) => {
  const {
    connectors: { connect, drag },
    hasSelectedNode,
    hasDraggedNode,
    isActive,
    id,
    hovered,
    actions: { setProp },
  } = useNode((state) => ({
    hasSelectedNode: state.events.selected,
    hasDraggedNode: state.events.dragged,
    isActive: state.events.selected,
    hovered: state.events.hovered,
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
      <Element is={WebContainer} id="demo_text" canvas>
        <Text
          text={text}
          fontSize={17}
          marginBottom={-5}
          alignment="left"
          color="#4b5563"
          bold="font-semibold"
        />
      </Element>
      <input
        disabled={!editable}
        className={`flex shadow px-2 py-2  rounded-md w-full focus-within:outline-2 focus-within:outline-blue-400 ${shadow} ${borderType} ${borderColor}`}
        style={{
          color: color,
          borderRadius: borderRadius + "px",
          backgroundColor,
          paddingTop: `${paddingTop}px`,
          paddingBottom: `${paddingBottom}px`,
          paddingLeft: `${paddingLeft}px`,
          paddingRight: `${paddingRight}px`,
        }}
        {...textInputProps}
        placeholder={`${textInputProps?.placeholder} ${
          textInputProps?.required ? "*" : ""
        }`}
        onChange={(e) =>
          setProp((props: any) => (props.textInputProps.value = e.target.value))
        }
      />
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
        <label className="text-sm text-gray-400">Name</label>
        <TextInput
          lefticon={<IoContract />}
          value={props.textInputProps.name}
          placeholder={"Enter field name"}
          onChange={(e) =>
            setProp(
              (props: any) => (props.textInputProps.name = e.target.value)
            )
          }
        />
      </div>

      <div className="mb-4 mt-2 flex flex-col gap-1">
        <label className="text-sm text-gray-400 ">Input Type</label>
        <div className="dropdown">
          <label
            tabIndex={0}
            className={`btn hover:bg-transparent hover:text-black rounded-md py-2 btn-sm bg-transparent border-blue-300 capitalize w-full text-left justify-start text-gray-500`}
          >
            {props.textInputProps.type}
          </label>
          <div
            tabIndex={0}
            className="dropdown-content card card-compact w-64 p-2 shadow bg-white text-gray-700 max-h-80 overflow-y-scroll scrollbar-hide"
          >
            <ul tabIndex={0} className="menu w-full bg-transparent">
              {textInputTypes.map((item, index) => (
                <li
                  key={index}
                  onClick={() =>
                    setProp((props: any) => (props.textInputProps.type = item))
                  }
                >
                  <a className={`capitalize ${item} text-sm`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-4 mt-2 flex flex-col gap-1">
        <label className="text-sm text-gray-400">Placeholder</label>
        <TextInput
          lefticon={<IoContract />}
          value={props.textInputProps.placeholder}
          placeholder="Enter placeholder"
          onChange={(e) =>
            setProp(
              (props: any) =>
                (props.textInputProps.placeholder = e.target.value)
            )
          }
        />
      </div>

      <div className="mb-4 mt-2 flex flex-col gap-1">
        <label className="text-sm text-gray-400">Value</label>
        <TextInput
          lefticon={<IoContract />}
          value={props.textInputProps.value}
          placeholder="Field Default value"
          onChange={(e) =>
            setProp(
              (props: any) => (props.textInputProps.value = e.target.value)
            )
          }
          type={props.textInputProps.type}
        />
      </div>

      <div className="form-control">
        <label className=" flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={props.textInputProps.required}
            className="checkbox"
            onChange={({ target: { value } }) =>
              setProp(
                (props: any) =>
                  (props.textInputProps.required =
                    !props.textInputProps.required)
              )
            }
          />
          <span className="label-text">Is Required?</span>
        </label>
      </div>

      <div className="mb-4 mt-2 flex flex-col gap-1">
        <label className="text-sm text-gray-400 ">Text Color</label>
        <div className="">
          <MuiColorInput
            format="hex"
            value={props.color ? props.color : "#000000"}
            onChange={(e) => setProp((props: any) => (props.color = e))}
          />
        </div>
      </div>

      <CommonSettings />
    </div>
  );
};

TextInputElement.craft = {
  related: {
    settings: TextSettings,
  },
  props: {
    value: "",
    textInputProps: {
      placeholder: "placeholder",
      value: "",
      name: "",
      required: true,
      type: "text",
    },
    ...getCommonSettingsProps(),
    borderRadius: 5,
    borderWidth: baseDefaults.borderWidth,
    marginTop: baseDefaults.marginTop,
    marginBottom: 16,
    marginLeft: baseDefaults.marginLeft,
    marginRight: baseDefaults.marginRight,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#f6f6fc",
  },
};
