import { useNode, Element, useEditor } from "@craftjs/core";
import { Text } from "../../Craft/widgets/Text/Text";
import { createElement, useState } from "react";
import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "../../Craft/widgets/CommonSettings";
import { BuilderImage } from "../../Craft/widgets/Image";

const elementName = "Carousel";

const defaults = {
  backgroundColor: "#ffffff",
  borderColor: "#313641",
  borderRadius: 10,
};

interface ICarouselsProps extends ICommonSettingsProps {
  size?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;
}

export const GlobalCarouselsText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

GlobalCarouselsText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every((incomingNode: any) => false),
  },
};

export const GlobalCarouselsLayout = ({
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
}: ICarouselsProps) => {
  // const [showResults, setShowResults] = useState(false);

  // const handleClick = () => {
  //   setShowResults(true);
  // };

  const {
    connectors: { connect, drag },
    hovered,
  } = useNode((state) => ({ hovered: state.events.hovered }));

  // console.log(showResults);
  return (
    <div ref={(ref: any) => connect(drag(ref))}>
      <div
        className={`w-full h-[400px] ${size} mr-2 mb-2 py-4 ${
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
        <Element id="CarouselsText" is={GlobalCarouselsText} canvas>
          <section className="w-full h-[400px] relative isolate overflow-hidden bg-white px-6 py-24 sm:py-8 lg:px-8">
            <div className="h-full carousel w-full">
              <div id="slide1" className="carousel-item relative w-full">
                <div
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-fit justify-center"
                  style={{
                    backgroundColor: "#ffffff",
                    marginTop: `${marginTop}px`,
                    marginBottom: `${marginBottom}px`,
                    marginLeft: `${marginLeft}px`,
                    marginRight: `${marginRight}px`,
                    paddingTop: `${paddingTop}px`,
                    paddingBottom: `${paddingBottom}px`,
                    paddingLeft: `${paddingLeft}px`,
                    paddingRight: `${paddingRight}px`,
                    borderWidth: `${borderWidth}px`,
                    borderRadius,
                    borderColor,
                  }}
                >
                  <BuilderImage
                    height={300}
                    width={520}
                    borderRadius={0}
                    type={"contain"}
                  />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-9 top-1/2">
                  <a href="#slide4" className="text-white">
                    ❮
                  </a>
                  <a href="#slide2" className="text-white">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full">
                <div
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-fit justify-center"
                  style={{
                    backgroundColor: "#ffffff",
                    marginTop: `${marginTop}px`,
                    marginBottom: `${marginBottom}px`,
                    marginLeft: `${marginLeft}px`,
                    marginRight: `${marginRight}px`,
                    paddingTop: `${paddingTop}px`,
                    paddingBottom: `${paddingBottom}px`,
                    paddingLeft: `${paddingLeft}px`,
                    paddingRight: `${paddingRight}px`,
                    borderWidth: `${borderWidth}px`,
                    borderRadius,
                    borderColor,
                  }}
                >
                  <BuilderImage
                    height={300}
                    width={520}
                    borderRadius={0}
                    // type={"fit"}

                    type={"contain"}
                  />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-9 top-1/2">
                  <a href="#slide1" className="text-white">
                    ❮
                  </a>
                  <a href="#slide3" className="text-white">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide3" className="carousel-item relative w-full">
                <div
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-fit justify-center"
                  style={{
                    backgroundColor: "#ffffff",
                    marginTop: `${marginTop}px`,
                    marginBottom: `${marginBottom}px`,
                    marginLeft: `${marginLeft}px`,
                    marginRight: `${marginRight}px`,
                    paddingTop: `${paddingTop}px`,
                    paddingBottom: `${paddingBottom}px`,
                    paddingLeft: `${paddingLeft}px`,
                    paddingRight: `${paddingRight}px`,
                    borderWidth: `${borderWidth}px`,
                    borderRadius,
                    borderColor,
                  }}
                >
                  <BuilderImage
                    height={300}
                    width={520}
                    borderRadius={0}
                    type={"contain"}
                  />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-9 top-1/2">
                  <a href="#slide2" className="text-white">
                    ❮
                  </a>
                  <a href="#slide4" className="text-white">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide4" className="carousel-item relative w-full">
                <div
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-fit justify-center"
                  style={{
                    backgroundColor: "#ffffff",
                    marginTop: `${marginTop}px`,
                    marginBottom: `${marginBottom}px`,
                    marginLeft: `${marginLeft}px`,
                    marginRight: `${marginRight}px`,
                    paddingTop: `${paddingTop}px`,
                    paddingBottom: `${paddingBottom}px`,
                    paddingLeft: `${paddingLeft}px`,
                    paddingRight: `${paddingRight}px`,
                    borderWidth: `${borderWidth}px`,
                    borderRadius,
                    borderColor,
                  }}
                >
                  <BuilderImage
                    height={300}
                    width={520}
                    borderRadius={0}
                    type={"contain"}
                  />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-9 top-1/2">
                  <a href="#slide3" className="text-white">
                    ❮
                  </a>
                  <a href="#slide1" className="text-white">
                    ❯
                  </a>
                </div>
              </div>
              {/* <div className="flex justify-center w-full py-2 gap-2">
                <a href="#slide1" className="btn btn-xs">
                  1
                </a>
                <a href="#slide2" className="btn btn-xs">
                  2
                </a>
                <a href="#slide3" className="btn btn-xs">
                  3
                </a>
                <a href="#slide4" className="btn btn-xs">
                  4
                </a>
              </div> */}
            </div>
          </section>
        </Element>
      </div>
    </div>
  );
};

const CarouselsSettings = () => {
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
    state.nodes[state.nodes[data.linkedNodes["CarouselsText"]].data.nodes[0]]
      .related.settings;
  return (
    <div>
      <CommonSettings />

      {textNodeSettings && createElement(textNodeSettings)}
    </div>
  );
};

GlobalCarouselsLayout.craft = {
  related: {
    settings: CarouselsSettings,
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
