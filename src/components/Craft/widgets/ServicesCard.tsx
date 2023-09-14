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
const elementName = "ServicesCard";
const defaults = {
  backgroundColor: "#F2F1FE",
  borderRadius: 10,
  color: "#645F80",
};
interface IServicesCardProps extends ICommonSettingsProps {
  backgroundColor?: string;
  heading: string;
  imagesrc: string;
  desc: string;
}
export const ServicesCard = ({
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
  heading,
  imagesrc,
  desc,
}: IServicesCardProps) => {
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
      className={`  rounded-lg  shadow hover:z-50 hover:outline-purple-500 hover:outline hover:outline-1  ${shadow} ${borderType} relative `}
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
      <div className="flex justify-center">
        <Element is={ServicesCardData} id="ServicesCardData">
          <BuilderImage width={60} height={60} imageSrc={imagesrc} />
        </Element>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <div className="py-2 w-fit">
          <Element is={ServicesCardData} id="ServicesCardData1">
            <Text
              color="#181443"
              bold="font-semibold"
              text={heading}
              fontSize={14}
            />
          </Element>
        </div>
        <div className="mb-2 w-48 mx-2  ">
          <Element is={ServicesCardData} id="ServicesCardData3">
            <Text
              color="#645F80"
              bold="font-medium"
              alignment="center"
              text={desc}
              fontSize={12}
            />
          </Element>
        </div>
      </div>
    </div>
  );
};
const ServicesCardSettings: any = () => {
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
ServicesCard.craft = {
  related: {
    settings: ServicesCardSettings,
  },
  props: {
    ...getCommonSettingsProps(),
    background: defaults.backgroundColor,
    borderRadius: defaults.borderRadius,
    borderWidth: 5,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    paddingTop: 0,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  displayName: elementName,
};
export const ServicesCardData = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};
ServicesCardData.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === Text || BuilderImage
      ),
  },
};
