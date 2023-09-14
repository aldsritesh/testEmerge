import { useNode, Element, useEditor } from "@craftjs/core";
import { Text } from "./Text/Text";
import { MuiColorInput } from "mui-color-input";
import TextInput from "@/components/controls/TextInput";
import { IoContract } from "react-icons/io5";
import React from "react";

const defaults = {
  backgroundColor: "transparent",
  borderColor: "#313641",
  borderRadius: 10,
};

interface ILinkProps {
  text?: string;
  backgroundColor?: string;
  href: string;
  targetData: boolean;
}

export const Link = ({
  href = "#",
  text = "Learn More",
  backgroundColor = defaults.backgroundColor,
  targetData = false,
}: ILinkProps) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div
      ref={(ref: any) => connect(drag(ref))}
      className={`mr-2 hover:outline-newBlue hover:outline p-1 w-fit`}
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <a
        href={href}
        target={targetData ? "_blank" : ""}
        onClick={(event) => event.preventDefault()}
      >
        <Element id="link" is={LinkText} canvas>
          <Text
            alignment="left"
            text={text}
            fontSize={16}
            bold="font-semibold"
            color="#000"
          />
        </Element>
      </a>
    </div>
  );
};

export const LinkSettings = () => {
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
    state.nodes[state.nodes[data.linkedNodes["link"]].data.nodes[0]].related
      .settings;

  return (
    <div>
      <div className="mb-4">
        <label className="text-sm text-gray-400 pb-0.5">URL</label>
        <TextInput
          lefticon={<IoContract />}
          value={props.href}
          placeholder="Please enter url"
          onChange={(e) =>
            setProp((props: any) => (props.href = e.target.value))
          }
        />
      </div>
      <div>
        <label className="text-sm text-gray-400 pb-0.5">Target Blank</label>
        <div className="flex justify-start items-center border-[1px] border-gray-200 mb-3 p-2 rounded-lg">
          <input
            type="checkbox"
            className="checkbox checked:bg-blue-500"
            value={props.targetData}
            placeholder="Please enter url"
            onChange={(e) =>
              setProp((props: any) => (props.targetData = !props.targetData))
            }
            checked={props.targetData ? true : false}
          />
          <p
            className={` capitalize text-gray-600 text-xs font-semibold  tracking-wide ml-2 `}
          >
            Open URL in new window
          </p>
        </div>
      </div>

      <div className="mb-4 mt-2 flex flex-col gap-1">
        <label className="text-sm text-gray-400 ">Background Color</label>
        <div className="">
          <MuiColorInput
            format="hex"
            value={
              props.backgroundColor
                ? props.backgroundColor
                : defaults.backgroundColor
            }
            onChange={(e) =>
              setProp((props: any) => (props.backgroundColor = e))
            }
          />
        </div>
      </div>

      {textNodeSettings && React.createElement(textNodeSettings)}
    </div>
  );
};

Link.craft = {
  related: {
    settings: LinkSettings,
  },
  props: {
    background: defaults.backgroundColor,
    href: "#",
  },
  displayName: "Link",
};

export const LinkText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return <div ref={connect}>{children}</div>;
};

LinkText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every((incomingNode: any) => false),
  },
};
