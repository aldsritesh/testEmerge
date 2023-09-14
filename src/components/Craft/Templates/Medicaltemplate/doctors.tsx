import { Text } from "../../widgets/Text/Text";
// import { Text } from "./Text/Text";
import { Button } from "../../widgets/Button";
import { useNode, Element, useEditor } from "@craftjs/core";
import { BuilderImage } from "../../widgets/Image";
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
} from "../../widgets/CommonSettings";
import { createElement, useState } from "react";
import item from "@/components/Leads/dnd/styles/item";
import { Card } from "@mui/material";
import data from "@/layouts/GlobalLayout/components/data";

const elementName = "Doctors";

const defaults = {
  backgroundColor: "#ffffff",
  borderColor: "#313641",
  borderRadius: 10,
};

interface ICardDoctorsProps extends ICommonSettingsProps {
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

export const DoctorsText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

DoctorsText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every((incomingNode: any) => false),
  },
};

export const Doctors = ({
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
}: ICardDoctorsProps) => {
  const [cardSlide, setCardSlide] = useState<any>([]);
  const {
    connectors: { connect, drag },
    hovered,
  }: any = useNode((state) => ({ hovered: state.events.hovered }));

  const cardItem = [
    {
      id: 1,
      title: "Dental Services",
      image: (
        <BuilderImage
          width={380}
          imageSrc={require("../../../../../public/images/dentalTemplate/services1.jpg")}
        />
      ),
      description:
        "Globally harness multimedia based collaboration and idea haring with backend.",
    },
    {
      id: 2,
      title: "Dental Implants",
      image: (
        <BuilderImage
          width={380}
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
          width={380}
          imageSrc={require("../../../../../public/images/dentalTemplate/services3.jpg")}
        />
      ),
      description:
        "Proactively fabricate one-to-one materials via effective e-business.",
    },
    {
      id: 4,
      title: "Teeth Whitening",
      image: (
        <BuilderImage
          width={380}
          imageSrc={require("../../../../../public/images/dentalTemplate/services4.jpg")}
        />
      ),
      description:
        "Distinctively re-engineer revolutionary meta-services and premium architectures.",
    },
  ];

  return (
    <div className="bg-white p-2 w-full" ref={(ref: any) => connect(drag(ref))}>
      {/* <div className="card card-compact w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <Element id="heroImage" is={CardImage} canvas>
            <BuilderImage />
          </Element>
        </div>
      </div> */}
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
        <Element id="DoctorsText" is={DoctorsText} canvas>
          <div
            className={`carousel  shadow-lg bg-gray-300 w-full h-auto ${size} mr-2 p-2 ${
              hovered && "hover:outline-pink-500 hover:outline "
            }  relative ${shadowColor} ${shadow} ${borderType} `}
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
            {cardItem.map((item: any) => (
              // <div
              //   key={item.id}
              //   className={`w-[45%] mx-1 my-2 rounded overflow-hidden shadow-lg h-[55vh] ${size} ${
              //     hovered && "hover:outline-pink-500 hover:outline "
              //   }  relative ${shadowColor} ${shadow} ${borderType} `}
              //   style={{
              //     backgroundColor,
              //     marginTop: `${marginTop}px`,
              //     marginBottom: `${marginBottom}px`,
              //     marginLeft: `${marginLeft}px`,
              //     marginRight: `${marginRight}px`,
              //     paddingTop: `${paddingTop}px`,
              //     paddingBottom: `${paddingBottom}px`,
              //     paddingLeft: `${paddingLeft}px`,
              //     paddingRight: `${paddingRight}px`,
              //     borderWidth: `${borderWidth}px`,
              //     borderRadius: `${borderRadius}px`,
              //     borderColor,
              //   }}
              // >
              //   {item.image}
              //   <div className="px-6 py-4">
              //     <div
              //       className={`font-bold text-xl mb-2 w-auto rounded overflow-hidden h-auto ${size} ${
              //         hovered && "hover:outline-pink-500 hover:outline "
              //       }  relative ${shadowColor} ${shadow} ${borderType} `}
              //       style={{
              //         backgroundColor,
              //         marginTop: `${marginTop}px`,
              //         marginBottom: `${marginBottom}px`,
              //         marginLeft: `${marginLeft}px`,
              //         marginRight: `${marginRight}px`,
              //         paddingTop: `${paddingTop}px`,
              //         paddingBottom: `${paddingBottom}px`,
              //         paddingLeft: `${paddingLeft}px`,
              //         paddingRight: `${paddingRight}px`,
              //         borderWidth: `${borderWidth}px`,
              //         borderRadius: `${borderRadius}px`,
              //         borderColor,
              //       }}
              //     >
              //       <Text
              //         alignment="center"
              //         text={item.title}
              //         fontSize={20}
              //         bold="font-bold"
              //         color="#000000"
              //       />
              //     </div>
              //     <p
              //       className={`text-gray-700 text-base font-bold mb-2 w-auto rounded overflow-hidden  h-auto ${size} ${
              //         hovered && "hover:outline-pink-500 hover:outline "
              //       }  relative ${shadowColor} ${shadow} ${borderType} `}
              //       style={{
              //         backgroundColor,
              //         marginTop: `${marginTop}px`,
              //         marginBottom: `${marginBottom}px`,
              //         marginLeft: `${marginLeft}px`,
              //         marginRight: `${marginRight}px`,
              //         paddingTop: `${paddingTop}px`,
              //         paddingBottom: `${paddingBottom}px`,
              //         paddingLeft: `${paddingLeft}px`,
              //         paddingRight: `${paddingRight}px`,
              //         borderWidth: `${borderWidth}px`,
              //         borderRadius: `${borderRadius}px`,
              //         borderColor,
              //       }}
              //     >
              //       <Text
              //         alignment="center"
              //         text={item.description}
              //         fontSize={17}
              //         bold="font-medium"
              //         color="#000000"
              //       />
              //     </p>
              //   </div>
              // </div>
              <div
                key={item.id}
                className="carousel-item w-96 relative mx-2 p-0 card h-auto glass"
              >
                <div className="h-auto">{item.image}</div>
                <div className="card-body">
                  <h2 className="card-title">
                    <Text
                      alignment="left"
                      text={item.title}
                      fontSize={20}
                      bold="font-bold"
                      color="#000000"
                    />
                  </h2>
                  <Text
                    alignment="left"
                    text={item.description}
                    fontSize={15}
                    bold="font-medium"
                    color="#000000"
                  />
                  <div className="card-actions justify-start mt-2 p-0">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                      <Text
                        alignment="left"
                        text="Learn now!"
                        fontSize={15}
                        bold="font-bold"
                        color="#ffffff"
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Element>
      </div>
    </div>
  );
};

const DoctorsSettings = () => {
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
    state.nodes[state.nodes[data.linkedNodes["DoctorsText"]].data.nodes[0]]
      .related.settings;
  return (
    <div>
      <CommonSettings />
      {textNodeSettings && createElement(textNodeSettings)}
    </div>
  );
};
Doctors.craft = {
  related: {
    settings: DoctorsSettings,
  },
  props: {
    ...getCommonSettingsProps(),
    background: defaults.backgroundColor,
    borderRadius: defaults.borderRadius,
    borderColor: defaults.borderColor,
    paddingRight: 10,
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    marginTop: 10,
    marginBottom: 0,
  },
  displayName: "Doctors",
};
