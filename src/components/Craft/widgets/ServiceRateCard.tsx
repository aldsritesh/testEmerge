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
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Button } from "./Button";
import { SelectBox } from "./Select";
import RateCard from "./RateCard";

const elementName = "ServiceRateCard";

const defaults = {
  backgroundColor: "white",
  borderRadius: 0,
};

interface IServiceRateCardProps extends ICommonSettingsProps {
  backgroundColor?: string;
  image: string;
  Heading: string;
  Desc: string;
  button: string;
}

export const ServiceRateCard = ({
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
}: IServiceRateCardProps) => {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const {
    hovered,
    connectors: { connect, drag },
  } = useNode((state) => ({
    hovered: state.events.hovered,
  }));

  const Options = ["$", "€", "£", "₹"];
  return (
    <>
      <div
        ref={(ref: any) => connect(drag(ref))}
        className={`w-fit rounded-lg hover:z-50 hover:outline-purple-500 hover:outline hover:outline-1 carousel-item card flex flex-col justify-center  ${shadow} ${borderType} relative  `}
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
          <Element is={ServiceRateCardData} id="ServiceRateCardData1">
            <BuilderImage
              width={280}
              height={200}
              imageSrc={image}
              borderRadius={0}
            />
          </Element>
          <div className="h-10 w-24  absolute bottom-[-1.2rem] right-0">
            <Element is={ServiceRateCardData} id="RateCard">
              <RateCard
                backgroundColor="#F7F7F7"
                borderRadius={0}
                paddingTop={5}
                paddingBottom={5}
              >
                <div className="flex gap-1 items-center">
                  <div className="flex gap-1">
                    <SelectBox
                      text="$"
                      Options={Options}
                      color="#473B2A"
                      fontSize={18}
                      bold="font-semibold"
                    />
                    <Text
                      text="45"
                      color="#473B2A"
                      fontSize={18}
                      bold="font-semibold"
                    />
                  </div>
                  <div className="w-fit">
                    <Text text="/ Hour" fontSize={12} color="#473B2A" />
                  </div>
                </div>
              </RateCard>
            </Element>
          </div>
        </div>
        {/* top-[11.2rem] */}
        <div className="p-2 w-fit">
          <Element is={ServiceRateCardData} id="ServiceRateCardData2">
            <Text
              color={hovered ? "#B5825B" : "#473B2A"}
              bold="font-semibold"
              text={Heading}
            />
          </Element>
        </div>
        <div className="pb-2 px-2 flex justify-center w-fit">
          <Element is={ServiceRateCardData} id="ServiceRateCardData3">
            <Text
              color="#645F80"
              bold="font-medium"
              text={Desc}
              fontSize={15}
              font="font-medium"
            />
          </Element>
        </div>
        <div className="pb-2 gap-3 px-2 w-fit">
          <Element is={ServiceRateCardData} id="ServiceRateCardDataButton">
            <Button
              backgroundColor="#B5825B"
              color="white"
              text="Read More"
              borderRadius={0}
              size="btn-sm"
              textFontSize={12}
            />
          </Element>
        </div>
      </div>
    </>
  );
};

const ServiceRateCardSettings: any = () => {
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

ServiceRateCard.craft = {
  related: {
    settings: ServiceRateCardSettings,
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

export const ServiceRateCardData = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

ServiceRateCardData.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) =>
          incomingNode.data.type === Text ||
          incomingNode.data.type === BuilderImage ||
          incomingNode.data.type === ServiceRateCard
      ),
  },
};
