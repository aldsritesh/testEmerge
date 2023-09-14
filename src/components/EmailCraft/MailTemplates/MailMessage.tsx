import { useNode, Element, useEditor } from "@craftjs/core";
// import { Text } from "./Text/Text";
import { createElement, useState } from "react";
// import {
//   CommonSettings,
//   ICommonSettingsProps,
//   baseDefaults,
//   getCommonSettingsProps,
// } from "./CommonSettings";
import LeftFlyOut from "@/components/LeftLayout";
// import { TopbarSection } from "../TopBarSections";
import { PlusIcon } from "@heroicons/react/24/solid";
import { TopbarSection } from "@/components/Craft/TopBarSections";
import {
  baseDefaults,
  CommonSettings,
  getCommonSettingsProps,
  ICommonSettingsProps,
} from "../widgets/CommonSettings";
import { Text } from "../widgets/Text/Text";
import Container from "../widgets/Container";
import { BuilderImage } from "@/components/Craft/widgets/Image";

const elementName = "Mail Message";

const defaults = {
  backgroundColor: "#ffffff",
  borderColor: "#313641",
  borderRadius: 0,
};

interface IMailMessagesProps extends ICommonSettingsProps {
  size?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;
}

export const MailMessagesText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

MailMessagesText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every((incomingNode: any) => false),
  },
};

export const MailMessages = ({
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
}: IMailMessagesProps) => {
  const [content, setContent] = useState<any>([]);
  const [openCreateModal, setOpenCreateModal] = useState(false);

  const {
    connectors: { connect, drag },
    hovered,
  } = useNode((state) => ({ hovered: state.events.hovered }));

  // console.log(showResults);

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

          <Element id="MailMessagesText" is={MailMessagesText} canvas>
            <div className="flex flex-col justify-start items-start py-4">
              <Text
                paddingLeft={10}
                paddingBottom={10}
                paddingTop={10}
                alignment="left"
                text="Hey Alex"
                fontSize={20}
                bold="font-normal"
                color="#000000"
                font="noto"
                backgroundColor="white"
              />
              <Text
                paddingLeft={10}
                paddingBottom={10}
                paddingTop={10}
                alignment="left"
                text="If You Have a moment, we'd love to learn a bit more about you! We put together a quick survey with questions about what you're most interested in."
                fontSize={20}
                bold="font-normal"
                color="#000000"
                font="noto"
                backgroundColor="white"
              />
            </div>
          </Element>
        </div>
      </div>
    </>
  );
};

const MailMessagesSettings = () => {
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
    state.nodes[state.nodes[data.linkedNodes["MailMessagesText"]].data.nodes[0]]
      .related.settings;
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

MailMessages.craft = {
  related: {
    settings: MailMessagesSettings,
  },
  props: {
    ...getCommonSettingsProps(),
    background: defaults.backgroundColor,
    borderRadius: defaults.borderRadius,
    borderColor: defaults.borderColor,
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 0,
    marginBottom: 2,
  },
  displayName: elementName,
};
