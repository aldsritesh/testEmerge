import { Text } from "../../widgets/Text/Text";
import { useNode, Element, useEditor } from "@craftjs/core";
import {
  baseDefaults,
  CommonSettings,
  getCommonSettingsProps,
  ICommonSettingsProps,
} from "../../widgets/CommonSettings";
import { createElement } from "react";
import { NewNavBarLayout } from "./newNavBar";
import { BuilderImage } from "../../widgets/Image";

const elementName = "NavBar";

const defaults = {
  backgroundColor: "#ffffff",
  borderColor: "#313641",
  borderRadius: 10,
};

interface INavBarsProps extends ICommonSettingsProps {
  size?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;
}

export const NavBarsText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

NavBarsText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every((incomingNode: any) => false),
  },
};

export const NavBar = ({
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
}: INavBarsProps) => {
  const {
    connectors: { connect, drag },
    hovered,
  }: any = useNode((state) => ({ hovered: state.events.hovered }));

  return (
    <div
      className="bg-white p-2 w-full"
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
      <div
        className={`w-full h-auto ${size} mr-2 mb-2 pt-2 ${
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
        <Element id="NavBarsText" is={NavBarsText} canvas>
          <div className=" flex justify-between">
            {/* <div className="navbar-start w-[30%]  "> */}
            <div
              className={` navbar-start w-[30%] h-auto ${size} mr-2 ${
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
              <BuilderImage
                width={50}
                height={50}
                imageSrc={require(".././../../../../public/images/logo/favlogo.png")}
              />
            </div>
            <div className="navbar-end w-[70%] flex justify-end items-center">
              <div className="flex-col  justify-center items-center mx-2">
                <div>
                  <Text
                    alignment="left"
                    text="+91 00-000-000"
                    fontSize={15}
                    bold="font-semibold"
                    color="#000000"
                  />
                </div>
              </div>
              <div className="flex-col justify-center items-center w-auto">
                <div className="flex-col justify-between items-center">
                  <div>
                    <Text
                      alignment="right"
                      text="example@example.com"
                      fontSize={15}
                      bold="font-bold"
                      color="#000000"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="navbar bg-base-100 border-t mt-2 flex justify-between w-full ">
            <NewNavBarLayout /> */}
          {/* </div> */}
          {/* </div> */}
          {/* </div> */}
        </Element>
      </div>
    </div>
  );
};

const NavBarsSettings = () => {
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
    state.nodes[state.nodes[data.linkedNodes["NavBarsText"]].data.nodes[0]]
      .related.settings;
  return (
    <div>
      <CommonSettings />

      {textNodeSettings && createElement(textNodeSettings)}
    </div>
  );
};

NavBar.craft = {
  related: {
    settings: NavBarsSettings,
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
