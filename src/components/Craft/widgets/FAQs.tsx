import { useNode, Element, useEditor } from "@craftjs/core";
import { Text } from "./Text/Text";
import { InputHTMLAttributes, createElement, useState } from "react";
import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "./CommonSettings";
import LeftFlyOut from "@/components/LeftLayout";
import { TopbarSection } from "../TopBarSections";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import TextInput from "@/components/controls/TextInput";
import { IoContract } from "react-icons/io5";

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
  itemsBasicProps?: InputHTMLAttributes<HTMLInputElement>;
  items?: {
    itemsProps: InputHTMLAttributes<HTMLInputElement>;
    question: string;
    answer: string;
  }[];
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
  items = [],
}: IFAQsProps) => {
  const [content, setContent] = useState<any>([]);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const {
    connectors: { connect, drag },
    hovered,
  } = useNode((state) => ({ hovered: state.events.hovered }));
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
            {items?.map((item: any, index: any) => (
              <div className="form-control" key={index + 1}>
                <Element id={`FAQsText2${index + 1}`} is={FAQsText} canvas>
                  <label className="cursor-pointer flex  flex-col  gap-2 mt-3">
                    <Text
                      paddingLeft={20}
                      paddingBottom={10}
                      paddingTop={10}
                      alignment="left"
                      text={!item.question ? "Question" : item.question}
                      fontSize={20}
                      bold="font-semibold"
                      color="#000000"
                      backgroundColor="#f8f8f8"
                    />

                    <Text
                      paddingLeft={20}
                      paddingBottom={10}
                      paddingTop={10}
                      alignment="left"
                      text={!item.answer ? "Answer" : item.answer}
                      fontSize={20}
                      bold="font-semibold"
                      color="#000000"
                      backgroundColor="#f8f8f8"
                    />
                  </label>
                </Element>
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
      <div className="flex justify-between items-center">
        <label className="text-sm text-gray-400">Add FAQ</label>
        <button
          className="btn bg-transparent btn-xs border-none hover:border-none hover:bg-transparent"
          onClick={() =>
            setProp(
              (props: any) =>
                (props.items = [
                  ...props.items,
                  {
                    itemsProps: {
                      value: "new item",
                    },
                    question: "Question",
                    answer: "Answer",
                  },
                ])
            )
          }
        >
          <PlusIcon className="h-4 w-4 text-black" />
        </button>
      </div>
      {props.items.map((item: any, index: number) => (
        <div
          key={index}
          className="flex items-center justify-between my-1 hover:border-2 "
        >
          <h2 className="text-gray-400 text-sm ">{`FAQ${index}`}</h2>
          <button
            className="btn bg-transparent btn-xs border-none hover:border-none hover:bg-transparent"
            onClick={() =>
              setProp((props: any) => props.items.splice(index, 1))
            }
          >
            <TrashIcon className="h-4 w-4 text-red-500" />
          </button>
        </div>
      ))}

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
    value: "",
    itemsBasicProps: {},

    ...getCommonSettingsProps(),
    background: defaults.backgroundColor,
    borderRadius: defaults.borderRadius,
    borderColor: defaults.borderColor,
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    items: [
      {
        itemsprops: {
          question: "Question",
          answer: "Answer",
        },
      },
    ],
  },
  displayName: elementName,
};
