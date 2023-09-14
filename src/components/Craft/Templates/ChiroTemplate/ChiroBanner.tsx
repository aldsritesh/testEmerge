import { Text } from "../../../Craft/widgets/Text/Text";
import { Button } from "../../../Craft/widgets/Button";
import { useNode, Element } from "@craftjs/core";
import { BuilderImage } from "../../../Craft/widgets/Image";

const elementName = "ChiroBanner";

import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "../../../Craft/widgets/CommonSettings";
import { Headline } from "../../../Craft/widgets/Text/Headline";
import LeftFlyOut from "@/components/LeftLayout";
import { TopbarSection } from "../../TopBarSections";
import { useState } from "react";

const defaults = {
  backgroundColor: "#F2F1FE",
  borderRadius: 0,
};

interface ChiroBannerProps extends ICommonSettingsProps {
  backgroundColor?: string;
}

export const ChiroBanner = ({
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
}: ChiroBannerProps) => {
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
        className={` flex flex-wrap items-center  hover:outline-blue-500 hover:outline ${shadow} ${borderType} relative`}
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
            <div className="absolute z-50 top-0 right-0 bg-blue-500 text-white text-xs px-1">
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
        <div className="w-full  md:w-1/2 order-2 md:order-1 px-2 flex justify-center flex-col ">
          <div className="">
            <Element id="ChiroBannerTitle" is={ChiroBannerText} canvas>
              <Text
                alignment="left"
                tagName="h2"
                text="The Best Therapy And Injuries Treatment"
                fontSize={45}
                bold="font-semibold"
                color="#181443"
              />
            </Element>
          </div>
          <div className="pt-5">
            <Element id="ChiroBannerSubTitle" is={ChiroBannerText} canvas>
              <Text
                alignment="left"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
                fontSize={14}
                color="#8F8AA2"
              />
            </Element>
          </div>
          <Element id="ChiroButton" is={ChiroBannerButton} canvas>
            <div className="pt-4 md:pt-5 w-full  flex gap-2 ">
              <div>
                <Button
                  backgroundColor="#5D4FFF"
                  color="white"
                  text="Make an Appointment"
                  borderRadius={10}
                  paddingRight={15}
                  paddingLeft={15}
                />
              </div>
              <div>
                <Button
                  backgroundColor="white"
                  color="#5D4FFF"
                  text="Discover More"
                  borderRadius={10}
                  paddingRight={15}
                  paddingLeft={15}
                />
              </div>
            </div>
          </Element>
        </div>
        <div className="w-full md:w-1/2 px-1 order-1 md:order-2 mb-4 md:mb-0 flex justify-end">
          <Element id="ChiroBannerImage" is={ChiroBannerButton} canvas>
            <BuilderImage
              borderRadius={0}
              width={350}
              height={361}
              imageSrc={require("../../../../../public/images/chiro/pic-1.jpg")}
            />
          </Element>
        </div>
      </div>
    </>
  );
};

const ChiroBannerSettings: any = () => {
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

ChiroBanner.craft = {
  related: {
    settings: ChiroBannerSettings,
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
  },
  displayName: elementName,
};

export const ChiroBannerText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

ChiroBannerText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === Text
      ),
  },
};

export const ChiroBannerButton = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return <div ref={connect}>{children}</div>;
};

ChiroBannerButton.craft = {
  rules: {
    // Only accept Buttons
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === Button
      ),
  },
};
