import { Text } from "../../../Craft/widgets/Text/Text";
import { Button } from "../../../Craft/widgets/Button";
import { useNode, Element } from "@craftjs/core";
import { BuilderImage } from "../../../Craft/widgets/Image";
import { useState } from "react";

const elementName = "AboutUs";

import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "../../../Craft/widgets/CommonSettings";
import { Headline } from "../../../Craft/widgets/Text/Headline";
import LeftFlyOut from "@/components/LeftLayout";
import { TopbarSection } from "../../TopBarSections";

const defaults = {
  backgroundColor: "#ffffff",
  borderRadius: 0,
};

interface IAboutUsProps extends ICommonSettingsProps {
  backgroundColor?: string;
}

export const AboutUs = ({
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
}: IAboutUsProps) => {
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
        className={` flex flex-wrap items-center hover:z-20 hover:outline-purple-500 hover:outline ${shadow} ${borderType} relative`}
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
          <>
            <div className="absolute z-50 top-0 right-0 bg-blue-500 text-white text-xs px-1">
              {elementName}
            </div>
            <div
              className="absolute bottom-[-2%] right-[50%] z-50 bg-transparent text-white text-xs px-1"
              onClick={() => {
                setOpenCreateModal(true);
              }}
            >
              +
            </div>
          </>
        )}

        <div className="flex items-center bg-transparent py-5 ">
          <div className="w-full md:w-1/2   flex items-start  flex-col ">
            <div className="pb-2 px-5">
              <Element id="AboutUsTitle" is={AboutUsText} canvas>
                <Text
                  alignment="left"
                  color="black"
                  text="How Can Chiropractic
            Care Help You? We give you
            Service to patients."
                  fontSize={20}
                  bold="font-semibold"
                />
              </Element>
            </div>
            <div className="px-5 pb-2">
              <Element id="AboutUsDesc" is={AboutUsText} canvas>
                <Text
                  color="black"
                  alignment="left"
                  text="We plainly comprehend that you need not to lose, but rather to gain more cash over your time of work with us. That is the reason we dismiss all high-chance undertakings, that may prompt a quick heap of money out of the blue however to a primary capital's misfortune the second time."
                  fontSize={13}
                />
              </Element>
            </div>

            <div className="px-5">
              <Element id="button" is={AboutUsText} canvas>
                <Button
                  text="Learn More About Us"
                  backgroundColor="white"
                  color="black"
                  paddingRight={5}
                  paddingLeft={5}
                  paddingTop={1}
                  paddingBottom={1}
                  borderRadius={5}
                />
              </Element>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-full mb-4 md:mb-0 pr-5">
            <Element id="AboutUsImage" is={AboutUsButton} canvas>
              <BuilderImage
                height={270}
                borderRadius={0}
                imageSrc={require("../../../../../public/images/TherapyLogos_files/AboutUs.jpg")}
              />
            </Element>
          </div>
        </div>
      </div>
    </>
  );
};

const AboutUsSettings: any = () => {
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

AboutUs.craft = {
  related: {
    settings: AboutUsSettings,
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
    paddingLeft: 10,
    paddingRight: 10,
  },
  displayName: elementName,
};

export const AboutUsText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

AboutUsText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === Text
      ),
  },
};

export const AboutUsButton = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return <div ref={connect}>{children}</div>;
};

AboutUsButton.craft = {
  rules: {
    // Only accept Buttons
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === Image
      ),
  },
};
