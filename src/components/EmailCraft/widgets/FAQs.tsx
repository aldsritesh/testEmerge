import { useNode, Element, useEditor } from "@craftjs/core";
import { Text } from "./Text/Text";
import { createElement, useState } from "react";
import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "./CommonSettings";
import LeftFlyOut from "@/components/LeftLayout";
// import { TopbarSection } from "../TopBarSections";
import { PlusIcon } from "@heroicons/react/24/solid";
import { TopbarSection } from "@/components/Craft/TopBarSections";

const elementName = "FAQs";

const defaults = {
  backgroundColor: "#ffffff",
  borderColor: "#313641",
  borderRadius: 0,
};

interface IFAQsProps extends ICommonSettingsProps {
  size?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;
}

export const FAQsText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

FAQsText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every((incomingNode: any) => false),
  },
};

export const FAQs = ({
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
}: IFAQsProps) => {
  const [content, setContent] = useState<any>([]);
  const [openCreateModal, setOpenCreateModal] = useState(false);

  const {
    connectors: { connect, drag },
    hovered,
  } = useNode((state) => ({ hovered: state.events.hovered }));

  // console.log(showResults);

  const handleMultiply = (i: any) => {
    const newContent = content.concat(
      <div key={i}>
        <Element id={`FAQsText-${i}`} is={FAQsText} canvas>
          <div
            className={`   w-full h-auto ${size} mr-2 ${
              hovered && "hover:outline-pink-500 hover:outline "
            }  relative ${shadowColor} ${shadow} ${borderType}`}
            style={{
              backgroundColor: "#f8f8f8",
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
            // onClick={handleClick}
            // onClick={() => setShowResults(true)}
          >
            <Text
              paddingLeft={10}
              paddingBottom={10}
              paddingTop={10}
              alignment="left"
              text="Question"
              fontSize={20}
              bold="font-semibold"
              color="#000000"
              backgroundColor="#f8f8f8"
            />
          </div>
          <div
            className={` w-full h-auto ${size} mr-2 ${
              hovered && "hover:outline-pink-500 hover:outline "
            }  relative ${shadowColor} ${shadow} ${borderType} `}
            style={{
              backgroundColor: "#f8f8f8",
              marginTop: `${marginBottom}px`,
              marginBottom: `${marginBottom}px`,
              marginLeft: `${marginLeft}px`,
              marginRight: `${marginRight}px`,
              paddingTop: `${"0px"}`,
              paddingBottom: `${"5px"}`,
              paddingLeft: `${paddingLeft}px`,
              paddingRight: `${paddingRight}px`,
              borderWidth: `${borderWidth}px`,
              borderRadius: `2px`,
              borderColor,
            }}
          >
            <Text
              paddingLeft={15}
              paddingBottom={10}
              paddingTop={10}
              marginTop={1}
              alignment="left"
              text="Answer"
              fontSize={16}
              bold="font-medium"
              color="#474343"
              backgroundColor="#f8f8f8"
            />
          </div>
        </Element>
      </div>
    );
    setContent(newContent);
  };
  const handleDelete = (index: number) => {
    const newContent = [...content];
    newContent.splice(index, 1);
    setContent(newContent);
  };
  let i = 1;
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
      <div ref={(ref: any) => connect(drag(ref))}>
        <div
          className={`w-full h-auto ${size} mr-2 ${
            hovered && "hover:outline-blue-500 hover:outline hover:outline-1  "
          }  relative ${shadowColor} ${shadow} ${borderType} `}
          style={{
            backgroundColor,
            marginTop: `${marginTop}px`,
            marginBottom: `${marginBottom}px`,
            marginLeft: `${marginLeft}px`,
            marginRight: `${marginRight}px`,
            paddingTop: `${5}px`,
            paddingBottom: `${5}px`,
            paddingLeft: `${paddingLeft}px`,
            paddingRight: `${paddingRight}px`,
            borderWidth: `${borderWidth}px`,
            borderRadius: `${borderRadius}px`,
            borderColor,
          }}
        >
          {hovered && (
            <>
              <div className="absolute top-0 right-0 bg-blue-500 text-white text-[10px] px-1 capitalize">
                {elementName}
              </div>

              <div
                className="absolute bottom-[-8px] left-[48%] bg-orange-500 text-white text-xs px-1"
                onClick={() => {
                  setOpenCreateModal(true);
                }}
              >
                +
              </div>
            </>
          )}
          <div>
            {content.map((item: any, i: number) => (
              <div key={i}>
                {item}
                <button
                  onClick={() => handleDelete(i)}
                  className={`${
                    hovered
                      ? "text-red-600 hover:text-red-800 text-[10px] "
                      : "hidden"
                  }`}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
          <Element id="FAQsText" is={FAQsText} canvas>
            <div
              className={`   w-full h-auto ${size} mr-2 ${
                hovered && "hover:outline-pink-500 hover:outline "
              }  relative ${shadowColor} ${shadow} ${borderType}`}
              style={{
                backgroundColor: "#f8f8f8",
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
              // onClick={handleClick}
              // onClick={() => setShowResults(true)}
            >
              <Text
                paddingLeft={10}
                paddingBottom={10}
                paddingTop={10}
                alignment="left"
                text="Question"
                fontSize={20}
                bold="font-semibold"
                color="#000000"
                backgroundColor="#f8f8f8"
              />
            </div>
            <div
              className={` w-full h-auto ${size} mr-2 ${
                hovered && "hover:outline-pink-500 hover:outline "
              }  relative ${shadowColor} ${shadow} ${borderType} `}
              style={{
                backgroundColor: "#f8f8f8",
                marginTop: `${marginBottom}px`,
                marginBottom: `${marginBottom}px`,
                marginLeft: `${marginLeft}px`,
                marginRight: `${marginRight}px`,
                paddingTop: `${"0px"}`,
                paddingBottom: `${"5px"}`,
                paddingLeft: `${paddingLeft}px`,
                paddingRight: `${paddingRight}px`,
                borderWidth: `${borderWidth}px`,
                borderRadius: `2px`,
                borderColor,
              }}
            >
              <Text
                paddingLeft={15}
                paddingBottom={10}
                paddingTop={10}
                marginTop={1}
                alignment="left"
                text="Answer"
                fontSize={16}
                bold="font-medium"
                color="#474343"
                backgroundColor="#f8f8f8"
              />
            </div>
          </Element>
          {}
          <div className="absolute -top-0 right-10 w-[70px]">
            <button
              onClick={() => handleMultiply(i)}
              className={`${
                hovered
                  ? "bg-blue-500 flex text-white text-[10px] px-1  text-center  w-full outline outline-1  "
                  : "hidden"
              }`}
            >
              <PlusIcon className=" w-3 h-3" />
              <span>Add more</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const FAQsSettings = () => {
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
    state.nodes[state.nodes[data.linkedNodes["FAQsText"]].data.nodes[0]].related
      .settings;
  return (
    <div>
      {/* <div>
        <button
          onClick={() => handleMultiply}
          className="bg-white text-gray-500 py-1 text-sm text-center  w-full outline outline-1 rounded-sm "
        >
          Add MORE
        </button>
      </div> */}
      <CommonSettings />
      {textNodeSettings && createElement(textNodeSettings)}
    </div>
  );
};

FAQs.craft = {
  related: {
    settings: FAQsSettings,
  },
  props: {
    ...getCommonSettingsProps(),
    background: defaults.backgroundColor,
    borderRadius: defaults.borderRadius,
    borderColor: defaults.borderColor,
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  displayName: elementName,
};
