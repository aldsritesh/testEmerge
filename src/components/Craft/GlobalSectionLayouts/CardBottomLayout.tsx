import { Text } from "../../Craft/widgets/Text/Text";
// import { Text } from "./Text/Text";
import { Button } from "../../Craft/widgets/Button";
import { useNode, Element, useEditor } from "@craftjs/core";
import { BuilderImage } from "../../Craft/widgets/Image";

import {
  baseDefaults,
  CommonSettings,
  getCommonSettingsProps,
  ICommonSettingsProps,
} from "../../Craft/widgets/CommonSettings";
import { createElement, useState } from "react";

const elementName = "CardBottom";

const defaults = {
  backgroundColor: "#ffffff",
  borderColor: "#313641",
  borderRadius: 10,
};

interface ICardBottomsProps extends ICommonSettingsProps {
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

export const GlobalCardBottomsText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

GlobalCardBottomsText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every((incomingNode: any) => false),
  },
};

export const GlobalCardBottom = ({
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
}: ICardBottomsProps) => {
  const [cardSlide, setCardSlide] = useState<any>([]);
  const {
    connectors: { connect, drag },
    hovered,
  }: any = useNode((state) => ({ hovered: state.events.hovered }));

  const cardItem = [
    {
      id: 1,
      icon: (
        <BuilderImage
          type="cover"
          width={100}
          height={100}
          imageSrc={require("../../../../public/images/dentalTemplate/emergency.png")}
        />
      ),
      title: "Emergency Phone",
      description: "415-205-5550 <br> Call us Anytime 24/7",
    },
    {
      id: 2,
      icon: (
        <BuilderImage
          width={100}
          height={100}
          imageSrc={require("../../../../public/images/dentalTemplate/address.png")}
        />
      ),
      title: "Address",
      description:
        "500 Linden Ave, South San Francisco, CA 94080, United States",
    },
    {
      id: 3,
      icon: (
        <BuilderImage
          width={100}
          height={100}
          imageSrc={require("../../../../public/images/dentalTemplate/care.png")}
        />
      ),
      title: "Book By Phone",
      description: "415-205-5550 <br> 405-222-5551",
    },
    {
      id: 4,
      icon: (
        <BuilderImage
          width={100}
          height={100}
          imageSrc={require("../../../../public/images/dentalTemplate/mailus.png")}
        />
      ),
      title: "Email Us",
      description: "example@example.com <br> example@example.com",
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
        className={`w-full h-auto ${size} mr-2 ${
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
        <Element id="CardBottomsText" is={GlobalCardBottomsText} canvas>
          <div className="flex justify-between items-center flex-wrap shadow-lg">
            {cardItem.map((item: any) => (
              <div
                key={item.id}
                className={`w-[23%] mx-1  rounded overflow-hidden shadow-lg h-auto ${size} ${
                  hovered && "hover:outline-pink-500 hover:outline "
                }  relative ${shadowColor} ${shadow} ${borderType} `}
                style={{
                  backgroundColor,
                  marginTop: `${marginTop}px`,
                  marginBottom: `${50}px`,
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
                <div
                  className={`w-full mx-1 my-2 rounded overflow-hidden shadow-lg h-auto p-3 ${size} ${
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
                  {item.icon}
                </div>
                <div className="">
                  <div
                    className={`font-bold text-xl mb-2 w-auto rounded overflow-hidden shadow-lg h-[20%] ${size} ${
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
                    <Text
                      alignment="center"
                      text={item.title}
                      fontSize={16}
                      bold="font-bold"
                      color="#000000"
                    />
                  </div>
                  <p
                    className={`text-gray-700 text-base font-bold mt-4 py-2 w-auto rounded overflow-hidden shadow-lg h-auto] ${size} ${
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
                    <Text
                      alignment="center"
                      text={item.description}
                      fontSize={17}
                      bold="font-medium"
                      color="#000000"
                    />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Element>
      </div>
    </div>
  );
};

const CardBottomNewsSettings = () => {
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
    state.nodes[state.nodes[data.linkedNodes["CardBottomsText"]].data.nodes[0]]
      .related.settings;
  return (
    <div>
      <CommonSettings />

      {textNodeSettings && createElement(textNodeSettings)}
    </div>
  );
};

GlobalCardBottom.craft = {
  related: {
    settings: CardBottomNewsSettings,
  },
  props: {
    ...getCommonSettingsProps(),
    background: defaults.backgroundColor,
    borderRadius: defaults.borderRadius,
    borderColor: defaults.borderColor,
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 0,
    marginBottom: 0,
  },
  displayName: elementName,
};
