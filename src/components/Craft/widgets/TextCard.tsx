import { useNode, Element } from "@craftjs/core";
import { useState } from "react";
import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "./CommonSettings";
import LeftFlyOut from "@/components/LeftLayout";
import { TopbarSection } from "../TopBarSections";
import { Text } from "./Text/Text";
const elementName = "TextCard";
const defaults = {
  backgroundColor: "white",
  borderRadius: 8,
  height: 8,
  width: 12,
};
interface ITextCardProps extends ICommonSettingsProps {
  backgroundColor?: string;
  textHeading: any;
  textDesc?: string;
  height?: number;
  width?: number;
}
export const TextCard = ({
  backgroundColor = defaults.backgroundColor,
  borderRadius = defaults.borderRadius,
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
  height = defaults.height,
  width = defaults.width,
  shadow = "shadow",
  shadowColor = "transparent",
  textHeading,
  textDesc,
}: ITextCardProps) => {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const {
    hovered,
    connectors: { connect, drag },
  } = useNode((state) => ({
    hovered: state.events.hovered,
  }));
  return (
    <>
      <div
        ref={(ref: any) => connect(drag(ref))}
        className={` flex flex-col items-center   hover:z-50 hover:outline-purple-500 hover:outline hover:outline-1 ${shadow} ${borderType} relative w-full`}
        style={{
          borderRadius: borderRadius + "px",
          borderColor,
          borderWidth: `${borderWidth}px`,
          marginTop: `${marginTop}px`,
          marginBottom: `${marginBottom}px`,
          marginLeft: `${marginLeft}px`,
          marginRight: `${marginRight}px`,
          backgroundColor,
          paddingTop: `${paddingTop}px`,
          paddingBottom: `${paddingBottom}px`,
          paddingLeft: `${paddingLeft}px`,
          paddingRight: `${paddingRight}px`,
          height: `${height}rem`,
          width: `${width}rem`,
        }}
      >
        {hovered && (
          <>
            <div className="absolute z-50 top-0 right-0 bg-blue-500 text-white text-xs px-1">
              {elementName}
            </div>
          </>
        )}
        <div className="mt-5">
          <div>
            <Element is={CardTextData} id="CardTextData">
              <Text
                color="#5D4FFF"
                bold="font-semibold"
                alignment="center"
                fontSize={25}
                text={textHeading}
              />
            </Element>
          </div>
          {textDesc != undefined && (
            <div>
              <Element is={CardTextData} id="CardTextData1">
                <Text
                  color="#181443"
                  bold="font-semibold"
                  text={textDesc}
                  alignment="center"
                />
              </Element>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
const TextCardSettings: any = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));
  return (
    <div className="w-full">
      <CommonSettings />
    </div>
  );
};
TextCard.craft = {
  related: {
    settings: TextCardSettings,
  },
  props: {
    
    ...getCommonSettingsProps() ,
    background: defaults.backgroundColor ,
    borderRadius: defaults.borderRadius ,
    borderWidth: baseDefaults.borderWidth ,

    marginTop: baseDefaults.marginTop , 

    marginLeft: baseDefaults.marginLeft ,
    marginRight: baseDefaults.marginRight ,
    paddingTop: 10 ,
    paddingBottom: 10 ,
    paddingLeft: 10 ,
    paddingRight: 10 ,
    
  },
  displayName: elementName,
};
export const CardTextData = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};
CardTextData.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === Text
      ),
  },
};
