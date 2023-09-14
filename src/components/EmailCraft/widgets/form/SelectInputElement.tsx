import TextInput from "@/components/controls/TextInput";
import { useNode } from "@craftjs/core";
import { MuiColorInput } from "mui-color-input";
import { InputHTMLAttributes, useEffect, useState } from "react";
import { IoContract } from "react-icons/io5";
import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "./CommonSettings";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
const elementName = "Checkbox Input";

interface ISelectBoxProps extends ICommonSettingsProps {
  color?: string;
  selectBoxBasicProps?: InputHTMLAttributes<HTMLSelectElement>;
  options?: {
    optionProps: InputHTMLAttributes<HTMLInputElement>;
    label: string;
  }[];
  column?: boolean;
}

export const SelectBoxInputElement = ({
  color = "#000000",
  selectBoxBasicProps,
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
  options = [],
  column = false,
}: ISelectBoxProps) => {
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
      }  relative`}
    >
      {hovered && (
        <div className="absolute top-0 right-0 bg-green-500 text-white text-[10px] px-1 capitalize">
          {elementName}
        </div>
      )}

      <select
        {...selectBoxBasicProps}
        className={`flex gap-3 flex-wrap shadow px-2 py-2  rounded-md w-full focus-within:outline-2 focus-within:outline-blue-400 ${shadow} ${borderType} ${borderColor}`}
        style={{
          color: color,
          borderRadius: borderRadius + "px",
          backgroundColor,
          paddingTop: `${paddingTop}px`,
          paddingBottom: `${paddingBottom}px`,
          paddingLeft: `${paddingLeft}px`,
          paddingRight: `${paddingRight}px`,
        }}
        placeholder="hrere"
      >
        {options?.map((item, index) => (
          <option value={item.optionProps.value} key={index}>
            {item.label}
          </option>
        ))}
      </select>
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
          value={props.selectBoxBasicProps.name}
          placeholder="Enter field name"
          onChange={(e) =>
            setProp(
              (props: any) => (props.selectBoxBasicProps.name = e.target.value)
            )
          }
        />
      </div>

      <div className="mb-4 mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <label className="text-sm text-gray-400">Items</label>
          <button
            className="btn bg-transparent btn-xs border-none hover:border-none hover:bg-transparent"
            onClick={() =>
              setProp(
                (props: any) =>
                  (props.options = [
                    ...props.options,
                    {
                      optionProps: {
                        value: "new item",
                        required: true,
                      },
                      label: "New Item",
                    },
                  ])
              )
            }
          >
            <PlusIcon className="h-4 w-4 text-black" />
          </button>
        </div>
        {props.options.map((item: any, index: number) => (
          <div key={index} className="flex items-center">
            <TextInput
              lefticon={<IoContract />}
              value={item.label}
              placeholder="Enter field name"
              onChange={(e) => {
                setProp(
                  (props: any) => (props.options[index].label = e.target.value)
                );
                setProp(
                  (props: any) =>
                    (props.options[index].optionProps.value = e.target.value)
                );
              }}
            />

            <button
              className="btn bg-transparent btn-xs border-none hover:border-none hover:bg-transparent"
              onClick={() =>
                setProp((props: any) => props.options.splice(index, 1))
              }
            >
              <TrashIcon className="h-4 w-4 text-red-500" />
            </button>
          </div>
        ))}
      </div>

      <div className="form-control">
        <label className=" flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={props.selectBoxBasicProps.required}
            className="checkbox"
            onChange={({ target: { value } }) =>
              setProp(
                (props: any) =>
                  (props.selectBoxBasicProps.required =
                    !props.selectBoxBasicProps.required)
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

SelectBoxInputElement.craft = {
  related: {
    settings: TextSettings,
  },
  props: {
    value: "",
    selectBoxBasicProps: {
      name: "option-10",
      required: true,
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

    options: [
      {
        optionProps: {
          checked: true,
          value: "Option 1",
          required: true,
        },
        label: "Option 1",
      },
      {
        optionProps: {
          checked: true,
          value: "Option 2",
          required: true,
        },
        label: "Option 2",
      },
      {
        optionProps: {
          checked: true,
          value: "Option 3",
          required: true,
        },
        label: "Option 3",
      },
    ],
  },
  column: false,
};
