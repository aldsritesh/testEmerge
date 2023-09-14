import { useNode, Element } from "@craftjs/core";

import { useState } from "react";
import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "./CommonSettings";
import { Text } from "./Text/Text";
import { BuilderImage } from "./Image";
import { Button } from "./Button";

const elementName = "ServicesOfferCard";

const defaults = {
  backgroundColor: "white",
  borderRadius: 0,
};

interface IServicesOfferCardProps extends ICommonSettingsProps {
  backgroundColor?: string;
  image: string;
  Heading: string;
  Desc: string;
  button?: string;
  date?: string;
}

export const ServicesOfferCard = ({
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
  shadow = "shadow",
  shadowColor = "transparent",
  image,
  Heading,
  Desc,
  button,
  date,
}: IServicesOfferCardProps) => {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const {
    hovered,
    connectors: { connect, drag },
  } = useNode((state) => ({
    hovered: state.events.hovered,
  }));

  const Options = ["$", "€", "£", "₹"];
  return (
    <div className="px-2 carousel-item card  w-fit ">
      <div
        ref={(ref: any) => connect(drag(ref))}
        className={` rounded-lg hover:z-50 hover:outline-purple-500 hover:outline hover:outline-1  flex flex-col justify-center  ${shadow} ${borderType} relative  `}
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
          </>
        )}
        <div className="relative">
          <Element is={ServicesOfferCardData} id="ServicesOfferCardData1">
            <BuilderImage
              width={270}
              height={175}
              imageSrc={image}
              borderRadius={0}
            />
          </Element>
        </div>
        {date ? (
          <div className=" w-fit">
            <Element is={ServicesOfferCardData} id="ServicesOfferCardDate">
              <Text
                color="#645F80"
                alignment="left"
                fontSize={15}
                bold="font-semibold"
                marginTop={13}
                paddingLeft={4}
                text={date}
              />
            </Element>
          </div>
        ) : (
          ""
        )}
        <div className=" w-fit">
          <Element is={ServicesOfferCardData} id="ServicesOfferCardData2">
            <Text
              color="#1F1F34"
              bold="font-semibold"
              text={Heading}
              marginTop={date ? 0 : 13}
              paddingLeft={7}
            />
          </Element>
        </div>
        <div className="pb-2 px-2 flex justify-center w-fit">
          <Element is={ServicesOfferCardData} id="ServicesOfferCardData3">
            <Text
              color="#A9A9A9"
              bold="font-medium"
              marginTop={3}
              text={Desc}
              fontSize={14}
              font="font-medium"
              lineHeight={1.2}
            />
          </Element>
        </div>
        {button ? (
          <div className="pb-2 gap-3 px-2 w-fit">
            <Element
              is={ServicesOfferCardData}
              id="ServicesOfferCardDataButton"
            >
              <Button
                backgroundColor="#C6C194"
                color="white"
                text="Read More"
                borderRadius={15}
                size="btn-sm"
                textFontSize={12}
                paddingLeft={30}
                paddingRight={30}
              />
            </Element>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

const ServicesOfferCardSettings: any = () => {
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

ServicesOfferCard.craft = {
  related: {
    settings: ServicesOfferCardSettings,
  },
  props: {
    ...getCommonSettingsProps(),
    background: defaults.backgroundColor,
    borderRadius: defaults.borderRadius,
    borderWidth: baseDefaults.borderWidth,
    marginTop: baseDefaults.marginTop,
    marginLeft: baseDefaults.marginLeft,
    marginRight: baseDefaults.marginRight,
    paddingTop: baseDefaults.paddingTop,
    paddingBottom: 10,
    paddingLeft: baseDefaults.paddingLeft,
    paddingRight: baseDefaults.paddingRight,
  },
  displayName: elementName,
};

export const ServicesOfferCardData = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

ServicesOfferCardData.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) =>
          incomingNode.data.type === Text ||
          incomingNode.data.type === BuilderImage ||
          incomingNode.data.type === ServicesOfferCard
      ),
  },
};
