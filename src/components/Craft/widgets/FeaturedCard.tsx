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
const elementName = "FeaturedCard";
const defaults = {
  backgroundColor: "transparent",
  borderRadius: 0,
  color: "#645F80",
  borderColor: "#868888",
  borderWidth: 1,
};
interface IFeaturedCardProps extends ICommonSettingsProps {
  backgroundColor?: string;
  heading: string;
  imagesrc: string;
  desc: string;
}
export const FeaturedCard = ({
  backgroundColor = defaults.backgroundColor,
  borderRadius = defaults.borderRadius,
  borderColor = defaults.borderColor,
  borderType = "border-solid",
  borderWidth = defaults.borderWidth,
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
  heading,
  imagesrc,
  desc,
}: IFeaturedCardProps) => {
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
      className={`    shadow hover:z-50  ${borderColor} ${borderWidth}  hover:outline-purple-500 hover:outline hover:outline-1  ${shadow} ${borderType} relative `}
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
        <div className="absolute z-50 top-0 right-0 bg-blue-500 text-white text-xs px-1">
          {elementName}
        </div>
      )}
      <div className="flex  justify-center  ">
        <Element is={FeaturedCardData} id="FeaturedCardData">
          <BuilderImage
            width={30}
            height={30}
            imageSrc={imagesrc}
            marginTop={30}
            marginBottom={10}
            marginLeft={20}
            marginRight={10}
          />
        </Element>
        <div className="flex flex-col justify-start  ">
          <div className="  ">
            <Element is={FeaturedCardData} id="FeaturedCardData1">
              <Text
                color="#4d4d4d"
                bold="font-semibold"
                text={heading}
                paddingTop={25}
                paddingRight={20}
                paddingLeft={10}
                fontSize={22}
                lineHeight={1.2}
                italic
              />
            </Element>
          </div>
          <div className="mb-2   mx-2  ">
            <Element is={FeaturedCardData} id="FeaturedCardData3">
              <Text
                color="#645F80"
                bold="font-medium"
                alignment="left"
                text={desc}
                fontSize={16}
                paddingBottom={20}
              />
            </Element>
          </div>
        </div>
      </div>
    </div>
  );
};
const FeaturedCardSettings: any = () => {
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
FeaturedCard.craft = {
  related: {
    settings: FeaturedCardSettings,
  },
  props: {
    ...getCommonSettingsProps(),
    background: defaults.backgroundColor,
    borderRadius: defaults.borderRadius,
    borderWidth: 1,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    paddingTop: 0,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "transparent",

    color: "#645F80",
    borderColor: "#000",
  },
  displayName: elementName,
};
export const FeaturedCardData = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};
FeaturedCardData.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === Text || BuilderImage
      ),
  },
};
