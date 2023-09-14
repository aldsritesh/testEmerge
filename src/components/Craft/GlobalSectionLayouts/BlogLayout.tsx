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

const elementName = "BlogLayout";

const defaults = {
  backgroundColor: "#ffffff",
  borderColor: "#313641",
  borderRadius: 10,
};

interface IBlogLayoutsProps extends ICommonSettingsProps {
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

export const GlobalBlogLayoutsText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

GlobalBlogLayoutsText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every((incomingNode: any) => false),
  },
};

export const GlobalBlogLayout = ({
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
}: IBlogLayoutsProps) => {
  const {
    connectors: { connect, drag },
    hovered,
  }: any = useNode((state) => ({ hovered: state.events.hovered }));

  const BlogCards = [{ title: "1" }, { title: "2" }, { title: "3" }];

  return (
    <div
      className=" p-2 w-full rounded-xl"
      ref={(ref: any) => connect(drag(ref))}
    >
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
        <Element id="BlogLayoutsText" is={GlobalBlogLayoutsText} canvas>
          <div className="h-auto  my-3 ">
            <div className="h-auto w-[90%] my-3 flex gap-1 ">
              {BlogCards.map((item: any, index: number) => (
                <div
                  key={index}
                  className="m-3 rounded-b-md border h-80 w-1/3 "
                >
                  <div className="overflow-hidden ">
                    <BuilderImage
                      height={150}
                      width={225}
                      borderRadius={0}
                      type="contain"
                    />
                  </div>
                  <div className="px-3">
                    <p
                      className={`   w-full h-auto  ${size} px-2 ${
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
                        paddingBottom={2}
                        paddingTop={2}
                        alignment="left"
                        text="Heading"
                        fontSize={15}
                        bold="font-bold"
                        color="#645858"
                      />
                    </p>
                    <p
                      className={`   w-full h-24 overflow-y-scroll scrollbar-hide ${size}  ${
                        hovered && "hover:outline-pink-500 hover:outline "
                      }  relative ${shadowColor} ${shadow} ${borderType}`}
                      style={{
                        marginTop: `${marginTop}px`,
                        marginBottom: `${marginBottom}px`,
                        marginLeft: `${marginLeft}px`,
                        marginRight: `${marginRight}px`,

                        paddingBottom: `${paddingBottom}px`,
                        paddingLeft: `${paddingLeft}px`,
                        paddingRight: `${paddingRight}px`,
                        borderWidth: `${borderWidth}px`,
                        borderRadius: `2px`,
                        borderColor,
                      }}
                    >
                      <Text
                        paddingBottom={1}
                        paddingTop={1}
                        alignment="left"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam aliquid sit, impedit distinctio Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam aliquid sit, impedit distinctio "
                        fontSize={12}
                        bold="font-medium"
                        color="#645858"
                      />
                    </p>
                    <p
                      className={`   w-full h-fit flex items-end ${size}  ${
                        hovered && "hover:outline-pink-500 hover:outline "
                      }  relative ${shadowColor} ${shadow} ${borderType}`}
                      style={{
                        marginTop: `${marginTop}px`,
                        marginBottom: `${marginBottom}px`,
                        marginLeft: `${marginLeft}px`,
                        marginRight: `${marginRight}px`,

                        paddingBottom: `${paddingBottom}px`,
                        paddingLeft: `${paddingLeft}px`,
                        paddingRight: `${paddingRight}px`,
                        borderWidth: `${borderWidth}px`,
                        borderRadius: `2px`,
                        borderColor,
                      }}
                    >
                      <Text
                        paddingBottom={3}
                        paddingTop={3}
                        alignment="left"
                        text="August 01, 2022 "
                        fontSize={13}
                        bold="font-medium"
                        color="#9ca3af"
                      />
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="card-actions justify-center mt-2 p-0">
              <Button text="Learn More!" />
            </div>
          </div>
        </Element>
      </div>
    </div>
  );
};

const BlogLayoutsSettings = () => {
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
    state.nodes[state.nodes[data.linkedNodes["BlogLayoutsText"]].data.nodes[0]]
      .related.settings;
  return (
    <div>
      <CommonSettings />

      {textNodeSettings && createElement(textNodeSettings)}
    </div>
  );
};
GlobalBlogLayout.craft = {
  related: {
    settings: BlogLayoutsSettings,
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
