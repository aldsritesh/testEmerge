import { Text } from "../Text/Text";
import { Button } from "../Button";
import { useNode, Element } from "@craftjs/core";
import { BuilderImage } from "../Image";

const elementName = "Hero Layout";

import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "../CommonSettings";
import { Headline } from "../Text/Headline";
import LeftFlyOut from "@/components/LeftLayout";
import { TopbarSection } from "../../TopBarSections";
import { useState } from "react";
import { AiFillPlusSquare } from "react-icons/ai";
import { MuiColorInput } from "mui-color-input";

const defaults = {
  backgroundColor: "#ffffff",
  borderRadius: 0,
};

interface HeroLayoutProps extends ICommonSettingsProps {
  backgroundColor?: string;
}

export const HeroLayout = ({
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
}: HeroLayoutProps) => {
  const {
    hovered,
    connectors: { connect, drag },
  } = useNode((state) => ({
    hovered: state.events.hovered,
  }));

  const [openCreateModal, setOpenCreateModal] = useState(false);

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
        className={`flex flex-wrap items-center hover:outline-blue-500 hover:outline ${shadow} ${borderType} relative z-40`}
        style={{
          borderRadius: borderRadius + "px",
          borderColor,
          borderWidth: `${borderWidth}px`,
          marginTop: `${marginTop}px`,
          marginBottom: `${marginBottom}px`,
          marginLeft: `${marginLeft}px`,
          marginRight: `${marginRight}px`,
          backgroundColor: backgroundColor,
          paddingTop: `${paddingTop}px`,
          paddingBottom: `${paddingBottom}px`,
          paddingLeft: `${paddingLeft}px`,
          paddingRight: `${paddingRight}px`,
        }}
      >
        {hovered && (
          <>
            <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs px-1">
              {elementName}
            </div>

            <div
              className="absolute bottom-[-8px] left-[48%]  text-white text-xs px-1"
              onClick={() => {
                setOpenCreateModal(true);
              }}
            >
              <AiFillPlusSquare color="#FF7A40" size={25} radius={5} />
            </div>
          </>
        )}

        <div className="w-full md:w-1/2 order-2 md:order-1">
          <Element id="heroTitle" is={HeroText} canvas>
            <Headline
              alignment="left"
              tagName="h2"
              text="Hero Title"
              fontSize={26}
              bold="font-semibold"
            />
          </Element>
          <div className="pt-5">
            <Element id="heroSubtitle" is={HeroText} canvas>
              <Text
                alignment="left"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                fontSize={14}
              />
            </Element>
          </div>
          <div className="pt-4 md:pt-16 w-fit">
            <Element id="heroButton" is={HeroButton} canvas>
              <Button text="Learn More" color="white" />
            </Element>
          </div>
        </div>
        <div className="w-full md:w-1/2 pl-4 order-1 md:order-2 mb-4 md:mb-0">
          <Element id="heroImage" is={HeroButton} canvas>
            <BuilderImage />
          </Element>
        </div>
      </div>
    </>
  );
};

const HeroLayoutSettings: any = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  <div className="mb-4 mt-2 flex flex-col gap-1">
    <label className="text-sm text-gray-400 ">Background Color</label>
    <div className="">
      <MuiColorInput
        format="hex"
        value={props.backgroundColor ? props.backgroundColor : "#ffffff"}
        onChange={(e) => setProp((props: any) => (props.backgroundColor = e))}
      />
    </div>
  </div>;
  return (
    <div className="w-full">
      <CommonSettings />
    </div>
  );
};

HeroLayout.craft = {
  related: {
    settings: HeroLayoutSettings,
  },
  props: {
    ...getCommonSettingsProps(),
    background: defaults.backgroundColor,
    borderRadius: defaults.borderRadius,
    borderWidth: baseDefaults.borderWidth,
    marginTop: baseDefaults.marginTop,
    marginBottom: baseDefaults.marginBottom,
    marginLeft: baseDefaults.marginLeft,
    marginRight: baseDefaults.marginRight,
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
  displayName: elementName,
};

export const HeroText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

HeroText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === Text
      ),
  },
};

export const HeroButton = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return <div ref={connect}>{children}</div>;
};

HeroButton.craft = {
  rules: {
    // Only accept Buttons
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === Button
      ),
  },
};
