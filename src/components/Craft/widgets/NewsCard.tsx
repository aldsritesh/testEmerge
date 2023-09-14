import { useNode, Element } from "@craftjs/core";

import { useState } from "react";
import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "./CommonSettings";
import { BuilderImage } from "./Image";
import { Text } from "./Text/Text";
import { Button } from "./Button";
import Container from "./Container";

const elementName = "NewsCard";

const defaults = {
  backgroundColor: "white",
  borderRadius: 8,
};

interface INewsCardProps extends ICommonSettingsProps {
  backgroundColor?: string;
  writerImg: string;
  Desc: string;
  date: string;
  image: string;
  writerName: string;
}

export const NewsCard = ({
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
  writerImg,
  writerName,
  image,
  Desc,
  date,
}: INewsCardProps) => {
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

        <Element is={NewsCardData} id="NewsCardData1">
          <BuilderImage
            width={215}
            height={140}
            imageSrc={image}
            borderRadius={0}
          />
        </Element>

        <div className=" w-fit ">
          <Element is={NewsCardData} id="NewsCardTexts">
            <Container
              backgroundColor="#8B9FBF"
              borderRadius={0}
              marginTop={10}
            >
              <Text
                text={date}
                color="white"
                fontSize={12}
                font="font-semibold"
                paddingRight={0}
                paddingLeft={0}
              />
            </Container>
          </Element>
        </div>

        {/* <div className="p-2 w-fit">
          <Element is={NewsCardData} id="NewsCardData2">
            <Text color="#181443" bold="font-semibold" text={Heading} />
          </Element>
        </div> */}

        <div className="w-fit">
          <Element is={NewsCardData} id="NewsCardData3">
            <Text
              color="#473B2A"
              bold="font-medium"
              text={Desc}
              fontSize={16}
              marginTop={5}
              font="font-medium"
            />
          </Element>
        </div>

        <div className="flex gap-3 items-center  py-4 ">
          <Element is={NewsCardData} id="NewsWriterImage">
            <BuilderImage
              borderRadius={40}
              width={35}
              height={35}
              imageSrc={writerImg}
            />
          </Element>
          <Element is={NewsCardData} id="AcuNewsCardData3">
            <Text
              color="#645F80"
              bold="font-medium"
              alignment="center"
              text={writerName}
              fontSize={16}
            />
          </Element>
        </div>
      </div>
    </>
  );
};

const NewsCardSettings: any = () => {
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

NewsCard.craft = {
  related: {
    settings: NewsCardSettings,
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

export const NewsCardData = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

NewsCardData.craft = {
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
