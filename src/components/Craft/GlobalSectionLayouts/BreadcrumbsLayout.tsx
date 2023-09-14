import { useNode, Element, useEditor } from "@craftjs/core";
import { Text } from "../../Craft/widgets/Text/Text";
import { createElement, useState } from "react";
import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "../../Craft/widgets/CommonSettings";

const elementName = "Breadcrumbs";

const defaults = {
  backgroundColor: "#ffffff",
  borderColor: "#313641",
  borderRadius: 10,
};

interface IBreadcrumbsProps extends ICommonSettingsProps {
  size?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;
}

export const GlobalBreadcrumbsText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

GlobalBreadcrumbsText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every((incomingNode: any) => false),
  },
};

export const GlobalBreadcrumbsLayout = ({
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
}: IBreadcrumbsProps) => {
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
        <Element id="BreadcrumbsText" is={GlobalBreadcrumbsText} canvas>
          <nav className="flex m-2" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3 my-3">
              <li className="inline-flex items-center">
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                >
                  <Text
                    alignment="left"
                    text="Home"
                    fontSize={17}
                    bold="font-semibold"
                    color="#000000"
                    backgroundColor="#ffffff"
                  />
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <Text
                    alignment="left"
                    text=">"
                    fontSize={17}
                    bold="font-semibold"
                    color="#cfc8c8"
                    backgroundColor="#ffffff"
                  />
                  <a
                    href="#"
                    className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                  >
                    <Text
                      alignment="left"
                      text="Projects"
                      fontSize={17}
                      bold="font-semibold"
                      color="#000000"
                      backgroundColor="#ffffff"
                    />
                  </a>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <Text
                    alignment="left"
                    text=">"
                    fontSize={17}
                    bold="font-semibold"
                    color="#cfc8c8"
                    backgroundColor="#ffffff"
                  />
                  <a
                    href="#"
                    className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                  >
                    <Text
                      alignment="left"
                      text="Flowbite"
                      fontSize={17}
                      bold="font-semibold"
                      color="#000000"
                      backgroundColor="#ffffff"
                    />
                  </a>
                  {/* <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                    Flowbite
                  </span> */}
                </div>
              </li>
            </ol>
          </nav>
        </Element>
      </div>
    </div>
  );
};

const BreadcrumbsSettings = () => {
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
    state.nodes[state.nodes[data.linkedNodes["BreadcrumbsText"]].data.nodes[0]]
      .related.settings;
  return (
    <div>
      <CommonSettings />

      {textNodeSettings && createElement(textNodeSettings)}
    </div>
  );
};

GlobalBreadcrumbsLayout.craft = {
  related: {
    settings: BreadcrumbsSettings,
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
