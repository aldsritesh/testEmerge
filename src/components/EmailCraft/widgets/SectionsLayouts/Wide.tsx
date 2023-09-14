import React from "react";
// import {
//   CommonSettings,
//   baseDefaults,
//   getCommonSettingsProps,
// } from "../widgets/CommonSettings";
import { Element, useEditor, useNode } from "@craftjs/core";
import {
  baseDefaults,
  CommonSettings,
  getCommonSettingsProps,
} from "../CommonSettings";
import FullWidthContainer from "../FullWidthContainer";

// import FullWidthContainer from "../widgets/FullWidthContainer";

const elementName = "Section";
const WideWidth = ({
  size = 200,
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
}: any) => {
  const {
    connectors: { connect, drag },
    hovered,
  }: any = useNode((state) => ({
    hovered: state.events.hovered,
  }));
  return (
    <div
      className={`bg-white p-2  w-full flex justify-center ${
        hovered && " my-2 hover:outline-2 hover:outline-blue-500 hover:outline"
      }`}
      ref={(ref: any) => connect(drag(ref))}
    >
      <div
        className={`w-[90%]     outline-2  border-2  ${size} mr-2  ${
          hovered && " "
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
          <div>
            <div className="absolute  -bottom-4 -right-[5%] hover:bg-blue-500 text-white text-[10px] px-1 z-50 capitalize">
              {elementName}
            </div>
          </div>
        )}
        <Element id="Text" is={FullWidthContainer} canvas>
          <h1></h1>
        </Element>
      </div>
    </div>
  );
};
const SmallWidthSettings = () => {
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

  // const textNodeSettings =
  //   state.nodes[state.nodes[data.linkedNodes["AboutTempsText"]].data.nodes[0]]
  //     .related.settings;
  return (
    <div>
      <CommonSettings />

      {/* {textNodeSettings && createElement(textNodeSettings)} */}
    </div>
  );
};
WideWidth.craft = {
  related: {
    settings: SmallWidthSettings,
  },
  props: {
    ...getCommonSettingsProps(),
    background: baseDefaults.backgroundColor,
    borderRadius: baseDefaults.borderRadius,
    borderColor: baseDefaults.borderColor,
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 0,
    marginBottom: 0,
  },
  displayName: elementName,
};
export default WideWidth;
