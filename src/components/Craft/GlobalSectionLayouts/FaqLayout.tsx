import { useNode, Element, useEditor } from "@craftjs/core";
import { Text } from "../../Craft/widgets/Text/Text";
import { createElement, useState } from "react";
import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "../../Craft/widgets/CommonSettings";

const elementName = "FAQs";

const defaults = {
  backgroundColor: "#ffffff",
  borderColor: "#313641",
  borderRadius: 10,
};

interface IFAQsProps extends ICommonSettingsProps {
  size?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;
}

export const GlobalFAQsText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

GlobalFAQsText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every((incomingNode: any) => false),
  },
};

export const GlobalFAQs = ({
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
}: IFAQsProps) => {
  // const [showResults, setShowResults] = useState(false);

  // const handleClick = () => {
  //   setShowResults(true);
  // };

  const {
    connectors: { connect, drag },
    hovered,
  } = useNode((state) => ({ hovered: state.events.hovered }));

  // console.log(showResults);
  return (
    <div ref={(ref: any) => connect(drag(ref))}>
      <div
        className={`w-full h-auto ${size} mr-2 ${
          hovered &&
          "hover:outline-gray-500 hover:outline hover:outline-1 hover:outline-dashed"
        }  relative ${shadowColor} ${shadow} ${borderType} `}
        style={{
          backgroundColor,
          marginTop: `${marginTop}px`,
          marginBottom: `${marginBottom}px`,
          marginLeft: `${marginLeft}px`,
          marginRight: `${marginRight}px`,
          paddingTop: `${5}px`,
          paddingBottom: `${5}px`,
          paddingLeft: `${paddingLeft}px`,
          paddingRight: `${paddingRight}px`,
          borderWidth: `${borderWidth}px`,
          borderRadius: `${borderRadius}px`,
          borderColor,
        }}
      >
        {hovered && (
          <div className="absolute top-0 left-0 bg-gray-500 text-white text-[10px] px-1 capitalize">
            {elementName}
          </div>
        )}
        <Element id="FAQsText" is={GlobalFAQsText} canvas>
          <div
            className={`   w-full h-auto ${size} mr-2 ${
              hovered && "hover:outline-pink-500 hover:outline "
            }  relative ${shadowColor} ${shadow} ${borderType}`}
            style={{
              backgroundColor: "#f8f8f8",
              marginTop: `${marginTop}px`,
              marginBottom: `${marginBottom}px`,
              marginLeft: `${marginLeft}px`,
              marginRight: `${marginRight}px`,
              paddingTop: `${paddingTop}px`,
              paddingBottom: `${paddingBottom}px`,
              paddingLeft: `${paddingLeft}px`,
              paddingRight: `${paddingRight}px`,
              borderWidth: `${borderWidth}px`,
              borderRadius: `2px`,
              borderColor,
            }}
            // onClick={handleClick}
            // onClick={() => setShowResults(true)}
          >
            <Text
              paddingLeft={10}
              paddingBottom={10}
              paddingTop={10}
              alignment="left"
              text="Question"
              fontSize={20}
              bold="font-semibold"
              color="#000000"
              backgroundColor="#f8f8f8"
            />
          </div>
          <div
            className={` w-full h-auto ${size} mr-2 ${
              hovered && "hover:outline-pink-500 hover:outline "
            }  relative ${shadowColor} ${shadow} ${borderType} `}
            style={{
              backgroundColor: "#f8f8f8",
              marginTop: `${marginBottom}px`,
              marginBottom: `${marginBottom}px`,
              marginLeft: `${marginLeft}px`,
              marginRight: `${marginRight}px`,
              paddingTop: `${"0px"}`,
              paddingBottom: `${"5px"}`,
              paddingLeft: `${paddingLeft}px`,
              paddingRight: `${paddingRight}px`,
              borderWidth: `${borderWidth}px`,
              borderRadius: `2px`,
              borderColor,
            }}
          >
            <Text
              paddingLeft={15}
              paddingBottom={10}
              paddingTop={10}
              marginTop={1}
              alignment="left"
              text="Answer"
              fontSize={16}
              bold="font-medium"
              color="#474343"
              backgroundColor="#f8f8f8"
            />
          </div>
        </Element>
      </div>
    </div>
  );
};

const FAQsSettings = () => {
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
    state.nodes[state.nodes[data.linkedNodes["FAQsText"]].data.nodes[0]].related
      .settings;
  return (
    <div>
      <CommonSettings />

      {textNodeSettings && createElement(textNodeSettings)}
    </div>
  );
};

GlobalFAQs.craft = {
  related: {
    settings: FAQsSettings,
  },
  props: {
    ...getCommonSettingsProps(),
    background: defaults.backgroundColor,
    borderRadius: defaults.borderRadius,
    borderColor: defaults.borderColor,
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  displayName: elementName,
};
