import { useNode, Element, useEditor } from "@craftjs/core";
import { Text } from "../Text/Text";
import { createElement, useState } from "react";
import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "../CommonSettings";
import { BuilderImage } from "../Image";
import { TextInputElement } from "@/components/FormCraft/widgets/TextInput";
import { Button } from "../Button";

const elementName = "ImageOverlay";

const defaults = {
  backgroundColor: "#ffffff",
  borderColor: "#313641",
  borderRadius: 10,
};

interface IimageOverlay extends ICommonSettingsProps {
  size?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;
}

export const ImageOverlayText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

ImageOverlayText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every((incomingNode: any) => false),
  },
};

export const ImageOverlay = ({
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
}: IimageOverlay) => {
  const tbStyles = {
    backgroundColor: "#fff",
    borderColor: "#d9d6d6",
    borderWidth: 1,
  };
  // const [showResults, setShowResults] = useState(false);

  // const handleClick = () => {
  //   setShowResults(true);
  // };

  const {
    connectors: { connect, drag },
    hovered,
  } = useNode((state) => ({ hovered: state.events.hovered }));

  const people = [
    {
      id: 1,
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
      imageUrl: (
        <BuilderImage
          imageSrc={require("../../../../../public/images/dentalTemplate/teamperson1.avif")}
        />
      ),
    },
    {
      id: 2,
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
      imageUrl: (
        <BuilderImage
          imageSrc={require("../../../../../public/images/dentalTemplate/teamperson1.avif")}
        />
      ),
    },
    {
      id: 3,
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
      imageUrl: (
        <BuilderImage
          imageSrc={require("../../../../../public/images/dentalTemplate/teamperson1.avif")}
        />
      ),
    },
    {
      id: 4,
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
      imageUrl: (
        <BuilderImage
          imageSrc={require("../../../../../public/images/dentalTemplate/teamperson1.avif")}
        />
      ),
    },
    {
      id: 5,
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
      imageUrl: (
        <BuilderImage
          imageSrc={require("../../../../../public/images/dentalTemplate/teamperson1.avif")}
        />
      ),
    },
  ];

  // console.log(showResults);
  return (
    <div ref={(ref: any) => connect(drag(ref))}>
      <div
        className={`w-full ${size} ${
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
        <Element id="ImageOverlayText" is={ImageOverlayText} canvas>
          <div>
            <div className="p-5">
              <div>
                <Text
                  alignment="center"
                  text="Image Overlay"
                  fontSize={25}
                  bold="font-semibold"
                  color="#000000"
                  backgroundColor="#ffffff"
                />
              </div>
            </div>

            {/* New */}

            <div className="carousel -mx-4 justify-center">
              {people.map((item: any, index: number) => (
                <div
                  className="group relative w-96 carousel-item"
                  key={item.id}
                >
                  <div className="mx-auto mb-10 w-full max-w-[370px]">
                    <div className="relative overflow-hidden rounded-lg">
                      {item.imageUrl}
                    </div>
                  </div>

                  <div className="absolute top-0 left-0 w-full   flex flex-col justify-center items-center bg-[#353f6691] h-[90%] opacity-100 duration-800">
                    <Text
                      alignment="center"
                      text="Image Overlay"
                      fontSize={22}
                      bold="font-semibold"
                      color="#fff"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Element>
      </div>
    </div>
  );
};

const NewsletterSettings = () => {
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
    state.nodes[state.nodes[data.linkedNodes["NewsletterText"]].data.nodes[0]]
      .related.settings;
  return (
    <div>
      <CommonSettings />

      {textNodeSettings && createElement(textNodeSettings)}
    </div>
  );
};

ImageOverlay.craft = {
  related: {
    settings: NewsletterSettings,
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
