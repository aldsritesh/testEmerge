import { Element, useNode } from "@craftjs/core";
import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "./CommonSettings";
import { useState } from "react";
import LeftFlyOut from "@/components/LeftLayout";
import { TopbarSection } from "../TopBarSections";
import { BuilderImage } from "./Image";
import { Text } from "./Text/Text";
import { Button } from "./Button";

const elementName = "ContactUsBanner";

const defaults = {
  backgroundColor: "#white",
  borderRadius: 0,
};

interface ContactUsBannerProps extends ICommonSettingsProps {
  backgroundColor?: string;
  text: string;
  button: string;
  buttonBackground: string;
  buttonColor: string;
  textColor: string;
}

export const ContactUsBanner = ({
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
  shadow = "shadow-none",
  shadowColor = "transparent",
  text,
  button,
  buttonBackground,
  buttonColor,
  textColor,
}: ContactUsBannerProps) => {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const {
    hovered,
    connectors: { connect, drag },
  } = useNode((state) => ({
    hovered: state.events.hovered,
  }));

  return (
    <div
      ref={(ref: any) => connect(drag(ref))}
      className={`flex items-center justify-around w-full  hover:outline-purple-500 hover:outline hover:outline-1  ${shadow} ${borderType} relative  overflow-hidden`}
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
      }}
    >
      {hovered && (
        <div className="absolute top-0 left-0 bg-purple-500 text-white text-xs px-1">
          {elementName}
        </div>
      )}
      {hovered && (
        <div className="absolute z-50 top-0 left-0 bg-blue-500 text-white text-xs px-1">
          {elementName}
        </div>
      )}

      <Element is={ContactUsBannerText} id="ContactUsBannerText" canvas>
        <Text text={text} color={textColor} fontSize={22} font="font-Poppins" />
      </Element>

      <Element is={ContactUsBannerText} id="ContactUsBannerButton" canvas>
        <Button
          backgroundColor={buttonBackground}
          color={buttonColor}
          text={button}
          borderRadius={15}
          textFontSize={12}
          paddingLeft={30}
          paddingRight={30}
        />
      </Element>
    </div>
  );
};

const ContactUsBannerSettings: any = () => {
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

ContactUsBanner.craft = {
  related: {
    settings: ContactUsBannerSettings,
  },
  props: {
    ...getCommonSettingsProps(),
    background: defaults.backgroundColor,
    borderRadius: defaults.borderRadius,
    borderWidth: baseDefaults.borderWidth,
    marginTop: baseDefaults.marginTop,
    marginLeft: baseDefaults.marginLeft,
    marginRight: baseDefaults.marginRight,
    marginBottom: 3,
    paddingTop: 40,
    paddingBottom: 40,
  },
  displayName: elementName,
};

export const ContactUsBannerText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

ContactUsBannerText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) =>
          incomingNode.data.type === Text ||
          incomingNode.data.type === BuilderImage
      ),
  },
};
