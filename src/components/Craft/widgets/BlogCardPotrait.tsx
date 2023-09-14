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

const elementName = "BlogCardPotrait";

const defaults = {
  backgroundColor: "white",
  borderRadius: 8,
};

interface IBlogCardPotraitProps extends ICommonSettingsProps {
  backgroundColor?: string;
  image: string;
  Heading: string;
  Desc: string;
  date?: string;
  summary: string;
  button: string;
}

export const BlogCardPotrait = ({
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
  date,
  summary,
  button,
}: IBlogCardPotraitProps) => {
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
        className={`w-fit rounded-lg hover:z-50 hover:outline-purple-500 hover:outline hover:outline-1 flex flex-col justify-center  ${shadow} ${borderType} relative  `}
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

        <Element is={BlogCardPotraitData} id="BlogCardPotraitData1">
          <BuilderImage width={380} height={300} imageSrc={image} />
        </Element>

        {date ? (
          <Element is={BlogCardPotraitData} id="BlogCardPotraitTexts">
            <div className="flex gap-2 w-fit p-2">
              <Text
                text={date}
                color="#55B6D0"
                fontSize={14}
                font="font-semibold"
              />
              <Text text={summary} />
            </div>
          </Element>
        ) : null}

        <div className="p-2 w-fit">
          <Element is={BlogCardPotraitData} id="BlogCardPotraitData2">
            <Text color="#181443" bold="font-semibold" text={Heading} />
          </Element>
        </div>

        <div className="pb-2 px-2 flex justify-center w-fit">
          <Element is={BlogCardPotraitData} id="BlogCardPotraitData3">
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
          <Element is={BlogCardPotraitData} id="BlogCardPotraitDataButton">
            <Button
              text={button}
              color="#55B6D0"
              backgroundColor="white"
              marginBottom={2}
            />
          </Element>
        </div>
      </div>
    </div>
  );
};

const BlogCardPotraitSettings: any = () => {
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

BlogCardPotrait.craft = {
  related: {
    settings: BlogCardPotraitSettings,
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

export const BlogCardPotraitData = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

BlogCardPotraitData.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) =>
          incomingNode.data.type === Text ||
          incomingNode.data.type === BuilderImage ||
          incomingNode.data.type === BlogCardPotrait
      ),
  },
};
