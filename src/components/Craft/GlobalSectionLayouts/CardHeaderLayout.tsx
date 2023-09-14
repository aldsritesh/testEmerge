import { Text } from "../widgets/Text/Text";
// import { Text } from "./Text/Text";
import { Button } from "../widgets/Button";
import { useNode, Element, useEditor } from "@craftjs/core";
import { BuilderImage } from "../widgets/Image";

import {
  baseDefaults,
  CommonSettings,
  getCommonSettingsProps,
  ICommonSettingsProps,
} from "../widgets/CommonSettings";
import { createElement, useState } from "react";

const elementName = "CardHeader";

const defaults = {
  backgroundColor: "#ffffff",
  borderColor: "#313641",
  borderRadius: 10,
};

interface ICardHeadersProps extends ICommonSettingsProps {
  size?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;
}

export const CardImage = ({ children }: any) => {
  const {
    connectors: { connect, drag },
  }: any = useNode();
  return <div ref={connect}>{children}</div>;
};

CardImage.craft = {
  rules: {
    // Only accept Buttons
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === BuilderImage || Text
      ),
  },
};

export const GlobalCardHeadersText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

GlobalCardHeadersText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every((incomingNode: any) => false),
  },
};

export const GlobalCardHeader = ({
  size,
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
}: ICardHeadersProps) => {
  const {
    connectors: { connect, drag },
    hovered,
  }: any = useNode((state) => ({ hovered: state.events.hovered }));

  return (
    <div className="my-2 w-full" ref={(ref: any) => connect(drag(ref))}>
      {/* <div className="card card-compact w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <Element id="heroImage" is={CardImage} canvas>
            <BuilderImage />
          </Element>
        </div>
      </div> */}
      <div
        className={`w-full h-auto ${size} mr-2 ${
          hovered && "hover:outline-pink-500 hover:outline "
        }  relative ${shadowColor} ${shadow} ${borderType} `}
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
          <div className="absolute top-0 right-0 bg-purple-500 text-white text-[10px] px-1 z-10 capitalize">
            {elementName}
          </div>
        )}
        <Element id="CardHeadersText" is={GlobalCardHeadersText} canvas>
          <nav className="flex items-center justify-around flex-wrap  p-6 rounded">
            {/* <Element id="" is="" canvas></Element> */}
            <div className="flex items-center flex-shrink-0 text-white mr-2">
              <Text
                alignment="left"
                text="Committed to"
                fontSize={15}
                bold="font-semibold"
                color="#000000"
              />
            </div>
            <div>
              <Text
                alignment="right"
                text="Excellence"
                fontSize={25}
                bold="font-bold"
                color="#F49A07"
              />{" "}
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto justify-end">
              <Button text="View All Services" />
            </div>
          </nav>
        </Element>
      </div>
    </div>
  );
};

const CardHeadersSettings = () => {
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
    state.nodes[state.nodes[data.linkedNodes["CardHeadersText"]].data.nodes[0]]
      .related.settings;
  return (
    <div>
      <CommonSettings />

      {textNodeSettings && createElement(textNodeSettings)}
    </div>
  );
};

GlobalCardHeader.craft = {
  related: {
    settings: CardHeadersSettings,
  },
  props: {
    ...getCommonSettingsProps(),
    background: defaults.backgroundColor,
    borderRadius: defaults.borderRadius,
    borderColor: defaults.borderColor,
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 0,
    marginBottom: 0,
  },
  displayName: elementName,
};
