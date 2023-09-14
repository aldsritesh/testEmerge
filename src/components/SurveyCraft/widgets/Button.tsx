import { useNode, Element, useEditor } from "@craftjs/core";
import { Text } from "./Text/Text";
import { createElement } from "react";
import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "./CommonSettings";
import { MuiColorInput } from "mui-color-input";
import TextInput from "@/components/controls/TextInput";
import { IoContract } from "react-icons/io5";

const elementName = "Button";

const defaults = {
  backgroundColor: "#313641",
  borderColor: "#313641",
  borderRadius: 10,
};

const btnSizes = [
  {
    value: "btn-xs",
    label: "Tiny",
  },
  {
    value: "btn-sm",
    label: "Small",
  },
  {
    value: "btn",
    label: "Normal",
  },
  {
    value: "btn-lg",
    label: "Large",
  },
];

interface IButtonProps extends ICommonSettingsProps {
  size?: string;
  text?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;
}

export const ButtonText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

ButtonText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every((incomingNode: any) => false),
  },
};

export const Button = ({
  size,
  text = "Learn More",
  backgroundColor = defaults.backgroundColor,
  borderRadius = defaults.borderRadius,
  borderColor = defaults.borderColor,
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
}: IButtonProps) => {
  const {
    connectors: { connect, drag },
    hovered,
  } = useNode((state) => ({ hovered: state.events.hovered }));

  return (
    <div ref={(ref: any) => connect(drag(ref))}>
      <button
        className={`btn ${size} mr-2 ${
          hovered &&
          "hover:outline-gray-500 hover:outline-1 hover:outline-dashed"
        }  relative ${shadowColor} ${shadow} ${borderType}`}
        style={{
          backgroundColor,
          marginTop: `${marginTop}px`,
          marginBottom: `${marginBottom}px`,
          marginLeft: `${marginLeft}px`,
          marginRight: `${marginRight}px`,
          paddingTop: `${paddingTop}px`,
          paddingBottom: `${paddingBottom}px`,
          paddingLeft: `${paddingLeft}px`,
          paddingRight: `${paddingRight}px`,
          borderWidth: `${borderWidth}px`,
          borderRadius: `${borderRadius}px`,
          borderColor,
        }}
      >
        {hovered && (
          <div className="absolute top-0 left-0 bg-blue-500 text-white text-[10px] px-1 capitalize">
            {elementName}
          </div>
        )}
        <Element id="buttonText" is={ButtonText} canvas>
          <Text
            alignment="left"
            text={text}
            fontSize={16}
            bold="font-semibold"
            color="#ffffff"
          />
        </Element>
      </button>
    </div>
  );
};

const ButtonSettings = () => {
  const {
    actions: { setProp },
    props,
    id,
    data,
  } = useNode((node) => ({
    props: node.data.props,
    data: node.data,
  }));

  const { state } = useEditor((state) => {
    return { state };
  });

  const textNodeSettings =
    state.nodes[state.nodes[data.linkedNodes["buttonText"]].data.nodes[0]]
      .related.settings;
  return (
    <div>
      {/* <div className="mb-4">
        <TextInput
          lefticon={<IoContract />}
          value={props.text}
          placeholder="Button Text"
          onChange={(e) =>
            setProp((props: any) => (props.text = e.target.value))
          }
        />
      </div> */}

      <div className={`flex gap-3 flex-wrap w-full`}>
        {btnSizes?.map((item, index) => (
          <div className="form-control" key={index}>
            <label className="cursor-pointer flex items-center gap-2">
              <input
                type="radio"
                name="btn_size"
                className="radio checked:bg-green-500"
                checked={item.value === props.size}
                required={true}
                value={item.value}
                onChange={(e) =>
                  setProp((props: any) => (props.size = e.target.value))
                }
              />
              <span className="label-text">{item.label}</span>
            </label>
          </div>
        ))}
      </div>
      <div className={`flex gap-3 flex-col w-full my-2`}>
        <div className="font-bold mt-2">Button Caption</div>
        <TextInput
          value={props.text}
          placeholder="Add Button Text"
          onChange={(e) =>
            setProp((props: any) => (props.text = e.target.value))
          }
          defaultRows={8}
        />
      </div>
      <div className={`flex gap-3 flex-col w-full my-2`}>
        <div className="font-bold mt-2">Button Color</div>
        {/* <MuiColorInput
          className="w-full"
          // format="hex"
          value={
            props.backgroundColor
              ? props.backgroundColor
              : baseDefaults.backgroundColor
          }
          onChange={(e) => setProp((props: any) => (props.backgroundColor = e))}
        /> */}
        <div className="builderTextBox">
          <MuiColorInput
            value={
              props.backgroundColor
                ? props.backgroundColor
                : baseDefaults.backgroundColor
            }
            onChange={(e) =>
              setProp((props: any) => (props.backgroundColor = e))
            }
          />{" "}
        </div>
      </div>
      <div className={`flex gap-3 flex-col w-full my-2`}>
        <div className="font-bold mt-2">Link to</div>
        <TextInput
          value="URL"
          className="dropdown"
          placeholder="Add Button Text"
          onChange={(e) =>
            setProp((props: any) => (props.text = e.target.value))
          }
          defaultRows={8}
        />
      </div>
      <div className="mb-2 mt-2 flex flex-col gap-1">
        <label className="text-sm text-gray-400 ">Border Radius</label>
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center gap-3">
            <input
              value={props.borderRadius}
              placeholder="Border radius in px"
              onChange={(e) =>
                setProp((props: any) => (props.borderRadius = e.target.value))
              }
              min={0}
              type="range"
              className="range range-xs w-[80%]"
            />
          </div>
          <TextInput
            value={props.borderRadius}
            width={10}
            placeholder="Border radius in px"
            onChange={(e) =>
              setProp((props: any) => (props.borderRadius = e.target.value))
            }
            type="number"
            className="w-[10%]"
            min={0}
          />
        </div>
      </div>

      <CommonSettings />

      {textNodeSettings && createElement(textNodeSettings)}
    </div>
  );
};

Button.craft = {
  related: {
    settings: ButtonSettings,
  },
  props: {
    ...getCommonSettingsProps(),
    background: defaults.backgroundColor,
    borderRadius: defaults.borderRadius,
    borderColor: defaults.borderColor,
    paddingRight: 10,
    paddingLeft: 10,
    size: "btn",
  },
  displayName: elementName,
};