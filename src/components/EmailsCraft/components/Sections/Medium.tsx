// import React from "react";

// const Medium = () => {
//   return <div>Medium</div>;
// };

// export default Medium;

import React from "react";
import {
  CommonSettings,
  baseDefaults,
  getCommonSettingsProps,
} from "../CommonSettings";
import { Element, useEditor, useNode } from "@craftjs/core";

import MediumWidthContainer from "./FullWidthContainer";

const elementName = "Section";
const MediumWidth = ({
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
      className={`bg-white  my-1 p-2 w-full flex justify-center
         hover:outline-1 hover:outline outline-blue-500
      `}
      ref={(ref: any) => connect(drag(ref))}
    >
      <div
        className={`w-[80%]   px-20  ${size} mr-2  ${
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
            <div className="absolute -bottom-4  bg-green-500 -right-20   text-white bg-green text-[10px] px-1 z-50 capitalize">
              {elementName}
            </div>
          </div>
        )}
        <Element id="Text" is={MediumWidthContainer} canvas>
          <h1></h1>
        </Element>
      </div>
    </div>
  );
};
const MediumWidthSettings = () => {
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
MediumWidth.craft = {
  related: {
    settings: MediumWidthSettings,
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
export default MediumWidth;
