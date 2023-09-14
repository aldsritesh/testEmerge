import { Text } from "../../../Craft/widgets/Text/Text";
import { Button } from "../../../Craft/widgets/Button";
import { useNode, Element } from "@craftjs/core";
import { BuilderImage } from "../../../Craft/widgets/Image";
import { useState } from "react";
const elementName = "WhyChooseUs";

import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "../../../Craft/widgets/CommonSettings";
import { Headline } from "../../../Craft/widgets/Text/Headline";
import { TopbarSection } from "../../TopBarSections";
import LeftFlyOut from "@/components/LeftLayout";

const defaults = {
  backgroundColor: "#ffffff",
  borderRadius: 0,
};

interface WhyChooseUsProps extends ICommonSettingsProps {
  backgroundColor?: string;
}

export const WhyChooseUs = ({
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
}: WhyChooseUsProps) => {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const {
    connectors: { connect, drag },
    hovered,
  }: any = useNode((state) => ({ hovered: state.events.hovered }));

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

        <div className="flex relative bg-transparent">
          <div className="w-full md:w-1/2  mb-4 md:mb-0">
            <Element id="welcomePostImage" is={WhyChooseUsButton} canvas>
              <BuilderImage
                height={311}
                borderRadius={0}
                imageSrc={require("../../../../../public/images/TherapyLogos_files/pt-2.jpg")}
              />
            </Element>
          </div>

          <div className="w-full md:w-1/2   flex items-start  flex-col ">
            <div className="pt-5 px-5">
              <Element id="welcomePostTitle" is={WhyChooseUsText} canvas>
                <Text
                  alignment="left"
                  color="black"
                  text="Why Choose Us _______"
                  fontSize={20}
                  bold="font-semibold"
                />
              </Element>
            </div>
            <div className="px-5 py-2">
              <Element id="welcomePostSubTitle" is={WhyChooseUsText} canvas>
                <Text
                  color="black"
                  alignment="left"
                  text="We Proudly give quality, thorough chiropractic to the group and the encompassing regions."
                  fontSize={16}
                />
              </Element>
            </div>
            <div className="px-5 py-2">
              <Element id="welcomePostDesc" is={WhyChooseUsText} canvas>
                <Text
                  color="black"
                  alignment="left"
                  text="Chiropractic mind is the act of utilizing spinal arrangement to ease a wide assortment of physical infirmities, including muscle strain, neck torment, endless back torment, and then some.."
                  fontSize={14}
                />
              </Element>
            </div>
            <div className="pt-2 px-5 flex gap-4">
              <div className=" w-fit ">
                <Element id="welcomePostCard1" is={WhyChooseUsText} canvas>
                  <Text
                    color="black"
                    alignment="left"
                    text="25k"
                    fontSize={30}
                    bold="font-semibold"
                  />
                </Element>
                <Element id="welcomePostCard2" is={WhyChooseUsText} canvas>
                  <Text
                    color="black"
                    alignment="left"
                    text="Happy Customers"
                    fontSize={13}
                  />
                </Element>
              </div>
              <div className=" w-fit ">
                <Element id="welcomePostCard3" is={WhyChooseUsText} canvas>
                  <Text
                    color="black"
                    alignment="left"
                    text="5"
                    fontSize={30}
                    bold="font-semibold"
                  />
                </Element>
                <Element id="welcomePostCard4" is={WhyChooseUsText} canvas>
                  <Text
                    color="black"
                    alignment="left"
                    text="Years Experience"
                    fontSize={13}
                  />
                </Element>
              </div>
              <div className=" w-fit ">
                <Element id="welcomePostCard5" is={WhyChooseUsText} canvas>
                  <Text
                    color="black"
                    alignment="left"
                    text="100%"
                    fontSize={30}
                    bold="font-semibold"
                  />
                </Element>
                <Element id="welcomePostCard6" is={WhyChooseUsText} canvas>
                  <Text
                    color="black"
                    alignment="left"
                    text="Satisfaction"
                    fontSize={13}
                  />
                </Element>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const WhyChooseUsSettings: any = () => {
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

WhyChooseUs.craft = {
  related: {
    settings: WhyChooseUsSettings,
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

export const WhyChooseUsText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

WhyChooseUsText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === Text
      ),
  },
};

export const WhyChooseUsButton = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return <div ref={connect}>{children}</div>;
};

WhyChooseUsButton.craft = {
  rules: {
    // Only accept Buttons
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === Image
      ),
  },
};
