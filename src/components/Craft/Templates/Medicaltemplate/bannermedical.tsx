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
import { createElement } from "react";

// export const CardTop = ({ children }: any) => {
//   const {
//     connectors: { connect },
//   }: any = useNode();
//   return (
//     <div ref={connect} className="text-only">
//       {children}
//     </div>
//   );
// };

// CardTop.craft = {
//   rules: {
//     // Only accept Text
//     canMoveIn: (incomingNodes: any) =>
//       incomingNodes.every(
//         (incomingNode: any) => incomingNode.data.type === Text
//       ),
//   },
// };

// export const CardBottom = ({ children }: any) => {
//   const {
//     connectors: { connect },
//   }: any = useNode();
//   return <div ref={connect}>{children}</div>;
// };

// CardBottom.craft = {
//   rules: {
//     // Only accept Buttons
//     canMoveIn: (incomingNodes: any) =>
//       incomingNodes.every(
//         (incomingNode: any) => incomingNode.data.type === Button
//       ),
//   },
// };
const elementName = "bannermedical";

const defaults = {
  backgroundColor: "#ffffff",
  borderColor: "#313641",
  borderRadius: 10,
};

interface IBannersProps extends ICommonSettingsProps {
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

export const BannersText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

BannersText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every((incomingNode: any) => false),
  },
};

export const Banner = ({
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
}: IBannersProps) => {
  const {
    connectors: { connect, drag },
    hovered,
  }: any = useNode((state) => ({ hovered: state.events.hovered }));

  return (
    <div
      className={`w-full h-auto ${size} mr-2 mb-2 ${
        hovered && "hover:outline-pink-500 hover:outline "
      }  relative ${shadowColor} ${shadow} ${borderType} `}
      ref={(ref: any) => connect(drag(ref))}
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
      {/* <div className="card card-compact w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <Element id="heroImage" is={CardImage} canvas>
            <BuilderImage />
          </Element>
        </div>
      </div> */}
      {/* <div
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
      > */}
      {hovered && (
        <div className="absolute top-0 right-0 bg-purple-500 text-white text-[10px] px-1 z-50 capitalize">
          {elementName}
        </div>
      )}
      <Element id="BannersText" is={BannersText} canvas>
        <div className="w-full carousel rounded-box">
          <div className="carousel-item w-full" id="slide1">
            <BuilderImage
              width={1600}
              imageSrc={require("../../../../../public/images/dentalTemplate/dentalTemplatefirst.jpg")}
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-9 top-1/2">
              <a href="#slide7" className="text-black">
                ❮
              </a>
              <a href="#slide2" className="text-black">
                ❯
              </a>
            </div>
          </div>
          <div className="carousel-item w-full" id="slide2">
            <BuilderImage
              width={1600}
              imageSrc={require("../../../../../public/images/dentalTemplate/dentalTemplatesecond.jpg")}
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-9 top-1/2">
              <a href="#slide1" className="text-black">
                ❮
              </a>
              <a href="#slide3" className="text-black">
                ❯
              </a>
            </div>
          </div>
          <div className="carousel-item w-full" id="slide3">
            <BuilderImage
              width={1600}
              imageSrc={require("../../../../../public/images/dentalTemplate/dentalTemplatethird.jpg")}
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-9 top-1/2">
              <a href="#slide2" className="text-black">
                ❮
              </a>
              <a href="#slide4" className="text-black">
                ❯
              </a>
            </div>
          </div>
          <div className="carousel-item w-full" id="slide4">
            <BuilderImage
              width={1600}
              imageSrc={require("../../../../../public/images/dentalTemplate/dentalTemplatesecond.jpg")}
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-9 top-1/2">
              <a href="#slide3" className="text-black">
                ❮
              </a>
              <a href="#slide5" className="text-black">
                ❯
              </a>
            </div>
          </div>
          <div className="carousel-item w-full" id="slide5">
            <BuilderImage
              width={1600}
              imageSrc={require("../../../../../public/images/dentalTemplate/dentalTemplatethird.jpg")}
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-9 top-1/2">
              <a href="#slide4" className="text-black">
                ❮
              </a>
              <a href="#slide6" className="text-black">
                ❯
              </a>
            </div>
          </div>
          <div className="carousel-item w-full" id="slide6">
            <BuilderImage
              width={1600}
              imageSrc={require("../../../../../public/images/dentalTemplate/dentalTemplatefirst.jpg")}
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-9 top-1/2">
              <a href="#slide5" className="text-black">
                ❮
              </a>
              <a href="#slide7" className="text-black">
                ❯
              </a>
            </div>
          </div>
          <div className="carousel-item w-full" id="slide7">
            <BuilderImage
              width={1600}
              imageSrc={require("../../../../../public/images/dentalTemplate/dentalTemplateforth.jpg")}
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-9 top-1/2">
              <a href="#slide6" className="text-black">
                ❮
              </a>
              <a href="#slide1" className="text-black">
                ❯
              </a>
            </div>
          </div>
        </div>
      </Element>
      {/* </div> */}
    </div>
  );
};

const BannersSettings = () => {
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
    state.nodes[state.nodes[data.linkedNodes["BannersText"]].data.nodes[0]]
      .related.settings;
  return (
    <div>
      <CommonSettings />

      {textNodeSettings && createElement(textNodeSettings)}
    </div>
  );
};

Banner.craft = {
  related: {
    settings: BannersSettings,
  },
  props: {
    ...getCommonSettingsProps(),
    background: defaults.backgroundColor,
    borderRadius: defaults.borderRadius,
    borderColor: defaults.borderColor,
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 10,
    marginBottom: 0,
  },
  displayName: elementName,
};
