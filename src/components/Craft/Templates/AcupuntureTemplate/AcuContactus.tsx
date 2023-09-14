import { Text } from "../../../Craft/widgets/Text/Text";
import TextInput from "@/components/controls/TextInput";
import { Button } from "../../../Craft/widgets/Button";
import { useNode, Element } from "@craftjs/core";
import { BuilderImage } from "../../../Craft/widgets/Image";

const elementName = "AcuContactus";

import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "../../../Craft/widgets/CommonSettings";
import LeftFlyOut from "@/components/LeftLayout";
import { TopbarSection } from "../../TopBarSections";
import { useState } from "react";
import { TextInputElement } from "../../widgets/form/TextInput";
import { TextAreaElement } from "../../widgets/form/TextareaElement";
import { GlobalContactusForm } from "../../widgets/form/GlobalContactusForm";
import MapElement from "../../widgets/Map";

const defaults = {
  backgroundColor: "white",
  borderRadius: 0,
};

interface AcuContactusProps extends ICommonSettingsProps {
  backgroundColor?: string;
}

export const AcuContactus = ({
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
}: AcuContactusProps) => {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const {
    hovered,
    connectors: { connect, drag },
  } = useNode((state) => ({
    hovered: state.events.hovered,
  }));

  return (
    <>
      <LeftFlyOut
        visibility={openCreateModal}
        onClose={() => {
          setOpenCreateModal(false);
        }}
      >
        <TopbarSection />
      </LeftFlyOut>

      <div
        ref={(ref: any) => connect(drag(ref))}
        className={`  hover:outline-blue-500 hover:outline ${shadow} ${borderType} relative`}
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
          <div className="absolute top-0 right-0 bg-purple-500 text-white text-xs px-1">
            {elementName}
          </div>
        )}
        {hovered && (
          <>
            <div className="absolute z-50 top-0 right-0 bg-blue-500 text-white text-xs px-2">
              {elementName}
            </div>

            <div
              className="absolute bottom-[-2%] right-[50%] z-50 bg-orange-500 text-white text-xs px-1"
              onClick={() => {
                setOpenCreateModal(true);
              }}
            >
              +
            </div>
          </>
        )}

        <Element is={AcuContactusText} id="ContactUsIframe" canvas>
          <MapElement mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57173176.00670386!2d100!3d28.999999999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3663f18a24cbe857%3A0xa9416bfcd3a0f459!2sAsia!5e0!3m2!1sen!2sin!4v1693152687801!5m2!1sen!2sin" />
        </Element>

        <div className="md:absolute right-20 top-20 md:w-[25vw] z-50 h-[50vh]">
          <Element is={AcuContactusText} id="ContactUsDiv" canvas>
            <GlobalContactusForm heading="Write us" backgroundColor="white" />
          </Element>
        </div>
      </div>
    </>
  );
};

const AcuContactusSettings: any = () => {
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

AcuContactus.craft = {
  related: {
    settings: AcuContactusSettings,
  },
  props: {
    ...getCommonSettingsProps(),
    background: defaults.backgroundColor,
    borderRadius: defaults.borderRadius,
    borderWidth: baseDefaults.borderWidth,
    marginTop: baseDefaults.marginTop,
    marginLeft: baseDefaults.marginLeft,
    marginRight: baseDefaults.marginRight,

    // text: defaults.text,
  },
  displayName: elementName,
};

export const AcuContactusText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

AcuContactusText.craft = {
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

export const AcuContactusButton = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return <div ref={connect}>{children}</div>;
};

AcuContactusButton.craft = {
  rules: {
    // Only accept Buttons
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === Button
      ),
  },
};
