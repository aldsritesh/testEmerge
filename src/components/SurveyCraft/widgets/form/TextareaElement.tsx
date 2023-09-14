import TextInput from "@/components/controls/TextInput";
import { useNode } from "@craftjs/core";
import { MuiColorInput } from "mui-color-input";
import { InputHTMLAttributes, useContext, useEffect, useState } from "react";
import { IoContract } from "react-icons/io5";
import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "./CommonSettings";
import { CraftContext } from "@/pages/builder/survey/craft";
const elementName = "Textarea Input";

const textInputTypes = ["text", "number", "email"];

interface ITextAreaProps extends ICommonSettingsProps {
  color?: string;
  textInputProps?: InputHTMLAttributes<HTMLTextAreaElement>;
}

export const TextAreaElement = ({
  color = "#000000",
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
}: ITextAreaProps) => {
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
  const ctx = useContext(CraftContext);

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
        hovered && "hover:outline-gray-500 hover:outline-1 hover:outline-dashed"
      }  relative`}
    >
      {hovered && (
        <div className="absolute top-0 left-0 bg-blue-500 text-white text-[10px] px-1 capitalize">
          {elementName}
        </div>
      )}
      <div>
        <textarea
          disabled={!editable}
          className={`flex shadow px-2 py-2 rounded-md w-full focus-within:outline-2 focus-within:outline-blue-400 ${shadow} ${borderType} ${borderColor}`}
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
          onChange={(e) =>
            setProp(
              (props: any) => (props.textInputProps.value = e.target.value)
            )
          }
        ></textarea>
      </div>
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
          placeholder="Enter field name"
          onChange={(e) =>
            setProp(
              (props: any) => (props.textInputProps.name = e.target.value)
            )
          }
        />
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

TextAreaElement.craft = {
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

  displayName: "TextAreaElement",
};
