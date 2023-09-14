import { Text } from "../../../Craft/widgets/Text/Text";
import { Button } from "../../../Craft/widgets/Button";
import { useNode, Element } from "@craftjs/core";
import { BuilderImage } from "../../../Craft/widgets/Image";

const elementName = "AcuWelcomeBanner";

import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "../../../Craft/widgets/CommonSettings";
import { Headline } from "../../../Craft/widgets/Text/Headline";
import LeftFlyOut from "@/components/LeftLayout";
import { TopbarSection } from "../../TopBarSections";
import { useState } from "react";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import Icons from "../../widgets/Icons";
import Divider from "../../widgets/Divider";

const defaults = {
  backgroundColor: "#252B33",
  borderRadius: 0,
};

interface AcuWelcomeBannerProps extends ICommonSettingsProps {
  backgroundColor?: string;
}

export const AcuWelcomeBanner = ({
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
}: AcuWelcomeBannerProps) => {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const {
    hovered,
    connectors: { connect, drag },
  } = useNode((state) => ({
    hovered: state.events.hovered,
  }));

  const BannerData = [
    {
      tag: "ACUPUNCTURE",
      heading: "Welcome to Innovative",
      subHeading: "ACUPUNCTURE",
      desc: " Orci varius natoque penatibus et magnis dis parturient montes , nascetur ridiculusmus. Sed nec enim ligula. Sed fermentum nunc eget pretium laoreet. Vestibulum aaccumsan neque.",
      button1: "Buy Now",
      button2: "Read More",
      image: require("../../../../../public/images/Acupunture/banner1.png"),
      IconData: ["Facebook", "Twitter", "Instagram"],
    },
    {
      tag: "ACUPUNCTURE",
      heading: "We are a Professional",
      subHeading: " acupuncture center",
      desc: " Orci varius natoque penatibus et magnis dis parturient montes , nascetur ridiculusmus. Sed nec enim ligula. Sed fermentum nunc eget pretium laoreet. Vestibulum aaccumsan neque.",
      button1: "Buy Now",
      button2: "Read More",
      image: require("../../../../../public/images/Acupunture/banner1.png"),
      IconData: ["Facebook", "Twitter", "Instagram"],
    },
    {
      tag: "ACUPUNCTURE",
      heading: "The Highest Level of",
      subHeading: "Professionalism",
      desc: " Orci varius natoque penatibus et magnis dis parturient montes , nascetur ridiculusmus. Sed nec enim ligula. Sed fermentum nunc eget pretium laoreet. Vestibulum aaccumsan neque.",
      button1: "Buy Now",
      button2: "Read More",
      image: require("../../../../../public/images/Acupunture/banner1.png"),
      IconData: ["Facebook", "Twitter", "Instagram"],
    },
  ];

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
        className={`carousel  hover:outline-blue-500 hover:outline ${shadow} ${borderType} relative bg-[#252b33] overflow-hidden`}
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
          <div className="absolute top-0 right-0 bg-purple-500 text-white text-xs px-1">
            {elementName}
          </div>
        )}
        {hovered && (
          <>
            <div className="absolute z-50 top-0 right-0 bg-blue-500 text-white text-xs px-1">
              {elementName}
            </div>
            <div
              className="absolute bottom-[-1%] right-[50%] z-80 bg-orange-500 text-white text-xs px-1"
              onClick={() => {
                setOpenCreateModal(true);
              }}
            >
              +
            </div>
          </>
        )}
        {BannerData.map((item: any, index: number) => (
          <div key={index} className="flex  carousel-item  w-full">
            <div className="w-1/2  mb-4 md:mb-0  flex justify-between items-center  ">
              <div className=" gap-3  pl-8 flex flex-col justify-center items-center">
                <Element
                  id={`AcuWelcomeBannericon${index}`}
                  is={AcuWelcomeBannerButton}
                  canvas
                >
                  {item.IconData.map((item: any, index: number) => (
                    <Icons
                      key={index}
                      href="#"
                      justifyContent="center"
                      alignItems="center"
                      color="white"
                      social={{ name: item }}
                    />
                  ))}
                </Element>
              </div>
              <div className="w-full   px-2 flex  justify-center flex-col bg-transparent ">
                <div className="w-fit">
                  <Element
                    id={`AcuWelcomeBannerBannerTag${index}`}
                    is={AcuWelcomeBannerText}
                    canvas
                  >
                    <div className="flex items-center gap-2 justify-start">
                      <Element
                        id="AcuWelcomeLine"
                        is={AcuWelcomeBannerText}
                        canvas
                      >
                        <div className="w-5">
                          <Divider borderColor="rgb(255, 183, 183)" />
                        </div>
                      </Element>

                      <Element
                        id="AcuWelcomeTag"
                        is={AcuWelcomeBannerText}
                        canvas
                      >
                        <Text
                          alignment="left"
                          text={item.tag}
                          fontSize={16}
                          bold="font-medium"
                          color="rgb(255, 183, 183)"
                        />
                      </Element>
                    </div>
                  </Element>
                </div>
                <Element
                  id={`AcuWelcomeBannerTitle${index}`}
                  is={AcuWelcomeBannerText}
                  canvas
                >
                  <div className="w-fit flex flex-col gap-2">
                    <Text
                      alignment="left"
                      lineHeight={1.1}
                      text={item.heading}
                      bold="font-semibold"
                      fontSize={28}
                      color="white"
                    />{" "}
                    <Text
                      alignment="left"
                      lineHeight={1.1}
                      text={item.subHeading}
                      bold="font-semibold"
                      fontSize={28}
                      color="#c59d7e"
                    />
                  </div>
                </Element>

                <div className="pt-5 w-fit">
                  <Element
                    id={`AcuWelcomeBannerSubTitle${index}`}
                    is={AcuWelcomeBannerText}
                    canvas
                  >
                    <Text
                      alignment="left"
                      text={item.desc}
                      bold="font-medium"
                      fontSize={14}
                      color="white"
                    />
                  </Element>
                </div>

                <div className="pt-4 md:pt-5 w-fit  flex  gap-4  ">
                  <Element
                    id={`AcuButton1${index}`}
                    is={AcuWelcomeBannerButton}
                    canvas
                  >
                    <Button
                      backgroundColor="#B5825B"
                      color="white"
                      text={item.button1}
                      borderRadius={0}
                      paddingRight={25}
                      paddingLeft={25}
                    />
                  </Element>
                  <Element
                    id={`AcuButton2${index}`}
                    is={AcuWelcomeBannerButton}
                    canvas
                  >
                    <Button
                      backgroundColor="#B5825B"
                      color="white"
                      text={item.button2}
                      borderRadius={0}
                      paddingRight={25}
                      paddingLeft={25}
                    />
                  </Element>
                </div>
              </div>
            </div>
            <div className="w-1/2 flex justify-end items-center">
              <Element
                id={`AcuWelcomeBannerImage${index}`}
                is={AcuWelcomeBannerButton}
                canvas
              >
                <BuilderImage
                  borderRadius={0}
                  width={350}
                  height={365}
                  imageSrc={item.image}
                />
              </Element>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const AcuWelcomeBannerSettings: any = () => {
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

AcuWelcomeBanner.craft = {
  related: {
    settings: AcuWelcomeBannerSettings,
  },
  props: {
    ...getCommonSettingsProps(),
    background: defaults.backgroundColor,
    borderRadius: defaults.borderRadius,
    borderWidth: baseDefaults.borderWidth,
    marginTop: baseDefaults.marginTop,
    marginLeft: baseDefaults.marginLeft,
    marginRight: baseDefaults.marginRight,
    marginBottom: 3,
  },
  displayName: elementName,
};

export const AcuWelcomeBannerText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

AcuWelcomeBannerText.craft = {
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

export const AcuWelcomeBannerButton = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return <div ref={connect}>{children}</div>;
};

AcuWelcomeBannerButton.craft = {
  rules: {
    // Only accept Buttons
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === Button
      ),
  },
};
