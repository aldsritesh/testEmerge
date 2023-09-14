import { Text } from "../../Craft/widgets/Text/Text";
// import { Text } from "./Text/Text";
import { Button } from "../../Craft/widgets/Button";
import { useNode, Element, useEditor } from "@craftjs/core";
import { BuilderImage } from "../../Craft/widgets/Image";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Image from "next/image";
import { FaBriefcaseMedical } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { TbDental } from "react-icons/tb";
import {
  baseDefaults,
  CommonSettings,
  getCommonSettingsProps,
  ICommonSettingsProps,
} from "../../Craft/widgets/CommonSettings";
import { createElement, useState } from "react";
import item from "@/components/Leads/dnd/styles/item";
import { Card } from "@mui/material";
import data from "@/layouts/GlobalLayout/components/data";

const elementName = "CtaLayout";

const defaults = {
  backgroundColor: "#ffffff",
  borderColor: "#313641",
  borderRadius: 10,
};

interface ICtaLayoutProps extends ICommonSettingsProps {
  size?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;
}

export const CardImage = ({ children }: any) => {
  const {
    connectors: { connect, drag },
  }: any = useNode();
  return <div ref={connect}>{children}</div>;
};

CardImage.craft = {
  rules: {
    // Only accept Buttons
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === BuilderImage || Text
      ),
  },
};

export const GlobalCtaLayoutText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

GlobalCtaLayoutText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every((incomingNode: any) => false),
  },
};

export const GlobalCtaLayout = ({
  size,
  backgroundColor = defaults.backgroundColor,
  borderRadius = defaults.borderRadius,
  borderColor = defaults.borderColor,
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
  shadow,
  shadowColor,
}: ICtaLayoutProps) => {
  const [cardSlide, setCardSlide] = useState<any>([]);
  const {
    connectors: { connect, drag },
    hovered,
  }: any = useNode((state) => ({ hovered: state.events.hovered }));

  return (
    <div className=" p-2 w-full " ref={(ref: any) => connect(drag(ref))}>
      <div
        className={`w-full h-auto ${size} mr-2  ${
          hovered && "hover:outline-pink-500 hover:outline "
        }  relative ${shadowColor} ${shadow} ${borderType} `}
        style={{
          backgroundColor,
          marginTop: `${marginTop}px`,
          marginBottom: `${marginBottom}px`,
          marginLeft: `${marginLeft}px`,
          marginRight: `${marginRight}px`,
          paddingTop: `${paddingTop}px`,
          paddingBottom: `${paddingBottom}px`,
          paddingLeft: `${paddingLeft}px`,
          paddingRight: `${paddingRight}px`,
          borderWidth: `${borderWidth}px`,
          borderRadius: `${borderRadius}px`,
          borderColor,
        }}
      >
        {hovered && (
          <div className="absolute top-0 right-0 bg-purple-500 text-white text-[10px] px-1 z-10 capitalize">
            {elementName}
          </div>
        )}
        <div>
          <Element id="CtaLayoutText" is={GlobalCtaLayoutText} canvas>
            <section className="relative isolate overflow-hidden  px-6  sm:py-8 sm:my-1  lg:px-8">
              <div className="absolute inset-0 -z-10 opacity-20  " />

              <div className="mx-auto max-w-2xl lg:max-w-4xl ">
                <figure className="my-3 ">
                  <blockquote className="text-center text-xl  font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                    <p
                      className={`   w-full h-auto ${size} mr-2 ${
                        hovered && "hover:outline-pink-500 hover:outline "
                      }  relative ${shadowColor} ${shadow} ${borderType}`}
                      style={{
                        marginTop: `${marginTop}px`,
                        marginBottom: `${marginBottom}px`,
                        marginLeft: `${marginLeft}px`,
                        marginRight: `${marginRight}px`,
                        paddingTop: `${paddingTop}px`,
                        paddingBottom: `${paddingBottom}px`,
                        paddingLeft: `${paddingLeft}px`,
                        paddingRight: `${paddingRight}px`,
                        borderWidth: `${borderWidth}px`,
                        borderRadius: `2px`,
                        borderColor,
                      }}
                    >
                      <Text
                        paddingBottom={10}
                        paddingTop={5}
                        alignment="center"
                        text="Heading"
                        fontSize={30}
                        bold="font-bold"
                        color="#000000"
                      />
                    </p>
                    <p
                      className={`   w-full h-auto ${size} mr-2 ${
                        hovered && "hover:outline-pink-500 hover:outline "
                      }  relative ${shadowColor} ${shadow} ${borderType}`}
                      style={{
                        marginTop: `${marginTop}px`,
                        marginBottom: `${marginBottom}px`,
                        marginLeft: `${marginLeft}px`,
                        marginRight: `${marginRight}px`,
                        paddingTop: `${paddingTop}px`,
                        paddingBottom: `${paddingBottom}px`,
                        paddingLeft: `${paddingLeft}px`,
                        paddingRight: `${paddingRight}px`,
                        borderWidth: `${borderWidth}px`,
                        borderRadius: `2px`,
                        borderColor,
                      }}
                    >
                      <Text
                        paddingLeft={10}
                        paddingBottom={10}
                        paddingTop={10}
                        alignment="center"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nemo expedita voluptas culpa sapiente alias molestiae.
                      Numquam corrupti in laborum sed rerum et corporis."
                        fontSize={15}
                        bold="font-medium"
                        color="#6B6C6D"
                      />
                    </p>
                  </blockquote>

                  <div className="flex justify-center">
                    <Button
                      text="Learn More"
                      backgroundColor="#4633b6"
                      marginTop={5}
                      paddingLeft={20}
                      paddingRight={20}
                    />
                  </div>
                </figure>
              </div>
            </section>
          </Element>
        </div>
      </div>
    </div>
  );
};

const CtaLayoutSettings = () => {
  const {
    actions: { setProp },
    props,
    id,
    data,
  } = useNode((node) => ({
    props: node.data.props,
    data: node.data,
  }));

  const { state } = useEditor((state) => {
    return { state };
  });

  const textNodeSettings =
    state.nodes[state.nodes[data.linkedNodes["CtaLayoutText"]].data.nodes[0]]
      .related.settings;
  return (
    <div>
      <CommonSettings />

      {textNodeSettings && createElement(textNodeSettings)}
    </div>
  );
};
GlobalCtaLayout.craft = {
  related: {
    settings: CtaLayoutSettings,
  },
  props: {
    ...getCommonSettingsProps(),
    background: defaults.backgroundColor,
    borderRadius: defaults.borderRadius,
    borderColor: defaults.borderColor,
    paddingRight: 0,
    paddingTop: 10,
    paddingLeft: 0,
    paddingBottom: 10,
    marginTop: 0,
    marginBottom: 0,
  },
  displayName: elementName,
};
