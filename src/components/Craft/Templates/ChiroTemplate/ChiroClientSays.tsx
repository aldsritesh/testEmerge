import { Text } from "../../../Craft/widgets/Text/Text";
import { Button } from "../../../Craft/widgets/Button";
import { useNode, Element } from "@craftjs/core";
import { BuilderImage } from "../../../Craft/widgets/Image";

const elementName = "ChiroClientSays";

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
import { BsCheckLg } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { TextTestimonial } from "../../widgets/TextTestimonial";

const defaults = {
  backgroundColor: "white",
  borderRadius: 0,
};

interface ChiroClientSaysProps extends ICommonSettingsProps {
  backgroundColor?: string;
}

export const ChiroClientSays = ({
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
}: ChiroClientSaysProps) => {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const {
    hovered,
    connectors: { connect, drag },
  } = useNode((state) => ({
    hovered: state.events.hovered,
  }));

  const image = [
    { image: require("../../../../../public/images/chiro/client1.jpg") },
    { image: require("../../../../../public/images/chiro/client2.jpg") },
    { image: require("../../../../../public/images/chiro/client3.jpg") },
    { image: require("../../../../../public/images/chiro/client4.jpg") },
  ];

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
        className={` flex flex-wrap items-center hover:z-50   hover:outline-purple-500 hover:outline ${shadow} ${borderType} relative`}
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
        <div className=" flex gap-2 w-full py-10">
          <div>
            <Element
              id="ChiroClientSaysImage"
              is={ChiroClientSaysButton}
              canvas
            >
              <div className="grid grid-cols-2 gap-3">
                {image.map((item: any, index: number) => (
                  <div key={index}>
                    <BuilderImage
                      borderRadius={10}
                      width={125}
                      height={114}
                      imageSrc={item.image}
                    />
                  </div>
                ))}
              </div>
            </Element>
          </div>

          <Element id="ChiroClientSaysClient" is={ChiroClientSaysButton} canvas>
            <BuilderImage
              borderRadius={10}
              width={260}
              height={240}
              imageSrc={require("../../../../../public/images/chiro/client5.jpg")}
            />
          </Element>

          <Element id="ChiroClientSaysCard" is={ChiroClientSaysText} canvas>
            <TextTestimonial
              heading="Our Client Says"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              name="Mark William"
              ratingOutOf5="3"
            />
          </Element>
        </div>
      </div>
    </>
  );
};

const ChiroClientSaysSettings: any = () => {
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

ChiroClientSays.craft = {
  related: {
    settings: ChiroClientSaysSettings,
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

export const ChiroClientSaysText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

ChiroClientSaysText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === Text
      ),
  },
};

export const ChiroClientSaysButton = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return <div ref={connect}>{children}</div>;
};

ChiroClientSaysButton.craft = {
  rules: {
    // Only accept Buttons
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === Button
      ),
  },
};
