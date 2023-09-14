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
import { BuilderImage } from "./Image";
import { TextCard } from "./TextCard";
const elementName = "ServicesImageCard";
const defaults = {
  backgroundColor: "white",
  borderRadius: 8,
  height: 20,
  width: 24,
};
interface IServicesImageCardProps extends ICommonSettingsProps {
  backgroundColor?: string;
  heading: string;
  height?: number;
  width?: number;
  image: string;
}
export const ServicesImageCard = ({
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
  heading,
  image,
}: IServicesImageCardProps) => {
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
        className={` rounded-lg hover:z-50 hover:outline-purple-500 hover:outline hover:outline-1 carousel-item card flex flex-col justify-center   ${shadow} ${borderType} relative `}
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

        <div className="relative overflow-hidden ">
          <Element is={ServicesImageCardData} id="ServiceImageData">
            <BuilderImage
              imageSrc={image}
              borderRadius={0}
              width={384}
              height={300}
            />
          </Element>

          <div className="absolute bottom-5 left-0 w-full flex justify-center">
            <Element is={ServicesImageCardData} id="ServiceImageText">
              <TextCard
                textHeading={heading}
                height={5}
                width={20}
                paddingBottom={0}
                paddingLeft={0}
                paddingRight={0}
                paddingTop={0}
                borderRadius={0}
              />
            </Element>
          </div>
        </div>
      </div>
    </>
  );
};
const ServicesImageCardSettings: any = () => {
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
ServicesImageCard.craft = {
  related: {
    settings: ServicesImageCardSettings,
  },
  props: {
    ...getCommonSettingsProps(),
    background: defaults.backgroundColor,
    borderRadius: defaults.borderRadius,
    borderWidth: baseDefaults.borderWidth,
    marginTop: baseDefaults.marginTop,
    marginLeft: baseDefaults.marginLeft,
    marginRight: baseDefaults.marginRight,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
  displayName: elementName,
};
export const ServicesImageCardData = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};
ServicesImageCardData.craft = {
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
