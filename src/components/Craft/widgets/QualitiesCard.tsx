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
const elementName = "QualitiesCard";
const defaults = {
  backgroundColor: "#F2F1FE",
  borderRadius: 10,
};
interface IQualitiesCardProps extends ICommonSettingsProps {
  backgroundColor?: string;
  headingimagesrc?: string;
  data?: any;
  width?: string;
  name?: string;
  percent?: string;
}
export const QualitiesCard = ({
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
  data,
}: IQualitiesCardProps) => {
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
      className={`  rounded-lg  shadow hover:z-50  hover:outline-purple-500 hover:outline ${shadow} ${borderType} relative `}
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
        height: "9rem",
        width: "16rem",
      }}
    >
      {hovered && (
        <>
          <div className="absolute z-50 top-0 right-0 bg-blue-500 text-white text-xs px-1">
            {elementName}
          </div>
        </>
      )}
      {/* <Element id="Qualitycarddd" is={QualitiesCardData} canvas>
        {/* {data.map((item: any, index: any) => { */}
      {/* <div>
        <Element id="Qualitycarddd" is={QualitiesCardData} canvas>
         
        </Element>
      </div> */}

      <div className={` w-full rounded-md  `}>
        <Element id="qualitybox" is={QualitiesCardData} canvas>
          <Text text="QualityCard" />
        </Element>
      </div>
    </div>
  );
};
const QualitiesCardSettings: any = () => {
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
QualitiesCard.craft = {
  related: {
    settings: QualitiesCardSettings,
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
export const QualitiesCardData = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};
QualitiesCardData.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === Text
      ),
  },
};
