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

const elementName = "Testimonials";

const defaults = {
  backgroundColor: "#ffffff",
  borderColor: "#313641",
  borderRadius: 10,
};

interface ITestimonialsProps extends ICommonSettingsProps {
  size?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;
}

export const GlobalTestimonialsText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

GlobalTestimonialsText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every((incomingNode: any) => false),
  },
};

export const GlobalTestimonialsLayout = ({
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
}: ITestimonialsProps) => {
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
        <Element id="TestimonialsText" is={GlobalTestimonialsText} canvas>
          <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-8 lg:px-8">
            <div className="absolute inset-0 -z-10 bg-white opacity-20" />
            {/* <div className="absolute  mr-16 w-[200%] origin-bottom-left  bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" /> */}
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
              <figure className="mt-10">
                <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                  <p
                    className={`   w-full h-auto ${size} mr-2 ${
                      hovered && "hover:outline-pink-500 hover:outline "
                    }  relative ${shadowColor} ${shadow} ${borderType}`}
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
                      borderRadius: `2px`,
                      borderColor,
                    }}
                  >
                    <Text
                      paddingLeft={10}
                      paddingBottom={10}
                      paddingTop={10}
                      alignment="center"
                      text='"Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nemo expedita voluptas culpa sapiente alias molestiae.
                      Numquam corrupti in laborum sed rerum et corporis."'
                      fontSize={18}
                      bold="font-medium"
                      color="#000000"
                      backgroundColor="#ffffff"
                    />
                  </p>
                </blockquote>
                <figcaption className="mt-10">
                  <div
                    className={` flex justify-center w-full h-auto ${size} mr-2 ${
                      hovered && "hover:outline-pink-500 hover:outline "
                    }  relative ${shadowColor} ${shadow} ${borderType}`}
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
                      borderRadius: `100px`,
                      borderColor,
                    }}
                  >
                    {/* <img
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    /> */}
                    <div
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover justify-center"
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
                        borderRadius: `100px`,
                        borderColor,
                      }}
                    >
                      <BuilderImage height={50} width={50} borderRadius={50} />
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-center space-x-3 text-base">
                    <div
                      className={`   w-full h-auto ${size} mr-2 ${
                        hovered && "hover:outline-pink-500 hover:outline "
                      }  relative ${shadowColor} ${shadow} ${borderType}`}
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
                        borderRadius: `2px`,
                        borderColor,
                      }}
                    >
                      <Text
                        paddingLeft={10}
                        paddingBottom={10}
                        paddingTop={10}
                        alignment="right"
                        text="Judith Black"
                        fontSize={17}
                        bold="font-semibold"
                        color="#000000"
                        backgroundColor="#ffffff"
                      />
                    </div>
                    <div>
                      <svg
                        viewBox="0 0 2 2"
                        width={3}
                        height={3}
                        aria-hidden="true"
                        className="fill-gray-900"
                      >
                        <circle cx={1} cy={1} r={1} />
                      </svg>
                    </div>
                    <div
                      className={`  ml-2 w-full h-auto ${size} mr-2 ${
                        hovered && "hover:outline-pink-500 hover:outline "
                      }  relative ${shadowColor} ${shadow} ${borderType}`}
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
                        borderRadius: `2px`,
                        borderColor,
                      }}
                    >
                      <Text
                        paddingLeft={10}
                        paddingBottom={10}
                        paddingTop={10}
                        alignment="left"
                        text="CEO of Workcation"
                        fontSize={12}
                        mobileFontSize={20}
                        bold="font-normal"
                        color="#000000"
                        backgroundColor="#ffffff"
                      />
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </section>
        </Element>
      </div>
    </div>
  );
};

const TestimonialsSettings = () => {
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
    state.nodes[state.nodes[data.linkedNodes["TestimonialsText"]].data.nodes[0]]
      .related.settings;
  return (
    <div>
      <CommonSettings />

      {textNodeSettings && createElement(textNodeSettings)}
    </div>
  );
};

GlobalTestimonialsLayout.craft = {
  related: {
    settings: TestimonialsSettings,
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
