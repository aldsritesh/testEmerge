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

import Icons from "./Icons";

const elementName = "TeamCard";

const defaults = {
  backgroundColor: "white",
  borderRadius: 8,
};

interface ITeamCardProps extends ICommonSettingsProps {
  backgroundColor?: string;
  image: string;
  name: string;
  post: string;
  ImgBorderRadius?: number;
  headingColor?: string;
  postColor?: string;
  IconsData?: any;
  iconColor?: string;
  iconBg?: string;
}

export const TeamCard = ({
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
  name,
  post,
  ImgBorderRadius,
  headingColor,
  postColor,
  IconsData,
  iconColor,
  iconBg,
}: ITeamCardProps) => {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const {
    hovered,
    connectors: { connect, drag },
  } = useNode((state) => ({
    hovered: state.events.hovered,
  }));
  return (
    <div className="px-4 carousel-item card   ">
      <div
        ref={(ref: any) => connect(drag(ref))}
        className={`w-fit  rounded-lg hover:z-50 hover:outline-purple-500 hover:outline hover:outline-1 flex flex-col justify-center  ${shadow} ${borderType} relative `}
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

        <Element is={TeamCardData} id="TeamCardData1">
          <BuilderImage
            width={265}
            height={260}
            imageSrc={image}
            borderRadius={ImgBorderRadius}
          />
        </Element>

        <div className="py-2 flex justify-center">
          <Element is={TeamCardData} id="TeamCardData2">
            <Text color={headingColor} bold="font-semibold" text={name} />
          </Element>
        </div>

        <div className="pb-2 flex justify-center">
          <Element is={TeamCardData} id="TeamCardData3">
            <Text color={postColor} bold="font-medium" text={post} />
          </Element>
        </div>

        <div className="pb-2 flex justify-center ">
          <Element is={TeamCardData} id="TeamIcons" canvas>
            <div className="flex justify-center items-center gap-2 w-fit">
              {IconsData?.map((item: any, index: number) => (
                <Icons
                  key={index}
                  href="#"
                  justifyContent="center"
                  alignItems="center"
                  color={iconColor}
                  backgroundColor={iconBg}
                  social={{ name: item }}
                />
              ))}
            </div>
          </Element>
        </div>
      </div>{" "}
    </div>
  );
};

const TeamCardSettings: any = () => {
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

TeamCard.craft = {
  related: {
    settings: TeamCardSettings,
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

export const TeamCardData = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

TeamCardData.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === Text || BuilderImage
      ),
  },
};
