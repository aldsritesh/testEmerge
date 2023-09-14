import { Text } from "../../widgets/Text/Text";
// import { Text } from "./Text/Text";
import { Button } from "../../widgets/Button";
import { useNode, Element, useEditor } from "@craftjs/core";
import { BuilderImage } from "../../widgets/Image";
import { BsSearch } from "react-icons/bs";
import { AiFillPlusSquare, AiOutlineShoppingCart } from "react-icons/ai";
import Image from "next/image";
import { FaBriefcaseMedical } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { TbDental } from "react-icons/tb";
import {
  baseDefaults,
  CommonSettings,
  getCommonSettingsProps,
  ICommonSettingsProps,
} from "../../widgets/CommonSettings";
import { InputHTMLAttributes, createElement, useState } from "react";
import item from "@/components/Leads/dnd/styles/item";
import { Card } from "@mui/material";
import data from "@/layouts/GlobalLayout/components/data";
import LeftFlyOut from "@/components/LeftLayout";
import { TopbarSection } from "../../TopBarSections";

const elementName = "Blog";

const defaults = {
  backgroundColor: "#ffffff",
  borderColor: "#313641",
  borderRadius: 0,
};

interface IBlogsProps extends ICommonSettingsProps {
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

export const BlogsText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

BlogsText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every((incomingNode: any) => false),
  },
};

export const Blog = ({
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
}: IBlogsProps) => {
  const [openCreateModal, setOpenCreateModal] = useState(false);

  const [cardSlide, setCardSlide] = useState<any>([]);
  const {
    connectors: { connect, drag },
    hovered,
  }: any = useNode((state) => ({ hovered: state.events.hovered }));

  const cardItem = [
    {
      id: 1,
      title: "Clinical Services",
      image: (
        <BuilderImage
          width={220}
          imageSrc={require("../../../../../public/images/dentalTemplate/services1.jpg")}
        />
      ),
      description:
        "Globally harness multimedia based collaboration and idea haring with backend.",
    },
    {
      id: 2,
      title: "Senior Doctors",
      image: (
        <BuilderImage
          width={220}
          imageSrc={require("../../../../../public/images/dentalTemplate/services2.jpg")}
        />
      ),
      description:
        "Dramatically disseminate standardized metrics after resource-leveling processes.",
    },
    {
      id: 3,
      title: "Surgery",
      image: (
        <BuilderImage
          width={220}
          imageSrc={require("../../../../../public/images/dentalTemplate/services3.jpg")}
        />
      ),
      description:
        "Proactively fabricate one-to-one materials via effective e-business.",
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
        className="bg-white p-2 w-full"
        ref={(ref: any) => connect(drag(ref))}
      >
        <div
          className={`w-full h-auto ${size} mr-2  ${
            hovered && "hover:outline-blue-500 hover:outline "
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
            <>
              <div className="absolute top-0 right-0 bg-blue-500 text-white text-[10px] px-1 z-10 capitalize">
                {elementName}
              </div>
              <div
                className="absolute -bottom-2 left-[50%]  text-white text-[10px] px-1 z-10 capitalize"
                onClick={() => {
                  setOpenCreateModal(true);
                }}
              >
                <AiFillPlusSquare color="#FF7A40" size={25} radius={5} />
              </div>
            </>
          )}
          <Element id="BlogsText" is={BlogsText} canvas>
            <div
              className={`shadow-lg bg-gray-300 w-full h-auto ${size} mr-2 ${
                hovered && "hover:outline-blue-500 hover:outline "
              }  relative ${shadowColor} ${shadow} ${borderType}`}
              style={{
                backgroundColor,
                marginTop: `${marginTop}px`,
                marginBottom: `${10}px`,
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
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <span className="text-primary mb-2 block text-lg font-semibold">
                  <Text
                    alignment="center"
                    text="Our Blogs"
                    fontSize={20}
                    bold="font-bold"
                    color="#0A92F8"
                  />
                </span>
                <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                  <Text
                    alignment="center"
                    text="Our Latest News"
                    fontSize={28}
                    bold="font-bold"
                  />
                </h2>
                <p className="text-body-color text-base">
                  <Text
                    alignment="center"
                    fontSize={16}
                    text="There are many variations of passages of Lorem Ipsum
                        available but the majority have suffered alteration in
                        some form."
                    bold="font-medium"
                    color="#898B8C"
                  />
                </p>
              </div>

              <div className=" flex justify-center pl-2 items-center flex-wrap">
                {cardItem.map((item: any) => (
                  <div key={item.id} className=" w-1/3 p-0 card h-auto">
                    <div className="h-auto overflow-hidden object-cover">
                      {item.image}
                    </div>
                    <div className="card-body pl-1">
                      <div className="card-title">
                        <Text
                          alignment="left"
                          text={item.title}
                          fontSize={20}
                          bold="font-bold"
                          color="#000000"
                          paddingLeft={0}
                        />
                      </div>
                      <Text
                        alignment="left"
                        text={item.description}
                        fontSize={15}
                        bold="font-medium"
                        color="#000000"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Element>
          <div className="card-actions justify-start mt-2 p-0">
            <Button text="Learn More!" />
          </div>
        </div>
      </div>
    </>
  );
};

const BlogsSettings = () => {
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
    state.nodes[state.nodes[data.linkedNodes["BlogsText"]].data.nodes[0]]
      .related.settings;
  return (
    <div>
      
      <CommonSettings />
      {textNodeSettings && createElement(textNodeSettings)}
    </div>
  );
};
Blog.craft = {
  related: {
    settings: BlogsSettings,
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
