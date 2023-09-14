import { Text } from "../../../Craft/widgets/Text/Text";
import { Button } from "../../../Craft/widgets/Button";
import { useNode, Element } from "@craftjs/core";
import { BuilderImage } from "../../../Craft/widgets/Image";

const elementName = "AcuBanner";

import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "../../../Craft/widgets/CommonSettings";
import LeftFlyOut from "@/components/LeftLayout";
import { TopbarSection } from "../../TopBarSections";
import { useState } from "react";
import Divider from "../../widgets/Divider";

const defaults = {
  backgroundColor: "white",
  borderRadius: 0,
};

interface AcuBannerProps extends ICommonSettingsProps {
  backgroundColor?: string;
}

export const AcuBanner = ({
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
}: AcuBannerProps) => {
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
        className={` flex flex-wrap items-center justify-between hover:outline-blue-500 hover:outline ${shadow} ${borderType} relative`}
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
        <div className="  w-full md:w-1/2 pr-2 order-1 md:order-1 mb-4 md:mb-0  flex justify-center items-center">
          <Element id="AcuBannerImage" is={AcuBannerButton} canvas>
            <BuilderImage
              borderRadius={0}
              width={370}
              height={378}
              imageSrc={require("../../../../../public/images/Acupunture/Accu1.png")}
            />
          </Element>
        </div>
        <div className="w-full  md:w-1/2 order-2 md:order-2 px-2 flex justify-center flex-col ">
          <div className="flex items-center gap-2 justify-start">
            <Element id="AcuBannerLine" is={AcuBannerText} canvas>
              <div className="w-10">
                <Divider borderColor="rgb(62, 62, 62)" />
              </div>
            </Element>

            <Element id="AcuBannerTag" is={AcuBannerText} canvas>
              <Text
                alignment="left"
                text="PROCEDURES"
                fontSize={18}
                bold="font-medium"
                color="rgb(62, 62, 62)"
              />
            </Element>
          </div>
          <Element id="AcuBannerTitle" is={AcuBannerText} canvas>
            <div className="w-fit flex flex-col gap-2">
              <Text
                alignment="left"
                lineHeight={1.1}
                text="Hi, I’m Cameron Williamson your acupuncturist"
                bold="font-semibold"
                fontSize={28}
                color="#473B2A"
              />
              <Text
                alignment="left"
                text="Sed ut perspiciatis unde omnis iste natus error"
                bold="font-medium"
                fontSize={18}
                color="#473B2A"
              />
            </div>
          </Element>

          <div className="pt-5">
            <Element id="AcuBannerSubTitle" is={AcuBannerText} canvas>
              <Text
                alignment="left"
                text="Nulla non ipsum sit amet mauris rutrum maximus. Sed lacinia quis dui vel tempor. Curabitur efficitur eu orci at condimentum. Sed rhoncus ex ac odio vulputate, in finibus ante ornare. Integer est quam"
                fontSize={14}
                color="#74706A"
              />
            </Element>
          </div>
          <div className="pt-4 md:pt-5 w-fit  ">
            <Element id="ChiroButton" is={AcuBannerButton} canvas>
              <Button
                backgroundColor="#B5825B"
                color="white"
                text="Read More"
                borderRadius={0}
                paddingRight={25}
                paddingLeft={25}
              />
            </Element>
          </div>
        </div>
      </div>
    </>
  );
};

const AcuBannerSettings: any = () => {
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

AcuBanner.craft = {
  related: {
    settings: AcuBannerSettings,
  },
  props: {
    ...getCommonSettingsProps(),
    background: defaults.backgroundColor,
    borderRadius: defaults.borderRadius,
    borderWidth: baseDefaults.borderWidth,
    marginTop: baseDefaults.marginTop,
    marginLeft: baseDefaults.marginLeft,
    marginRight: baseDefaults.marginRight,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 3,
  },
  displayName: elementName,
};

export const AcuBannerText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

AcuBannerText.craft = {
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

export const AcuBannerButton = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return <div ref={connect}>{children}</div>;
};

AcuBannerButton.craft = {
  rules: {
    // Only accept Buttons
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === Button
      ),
  },
};
