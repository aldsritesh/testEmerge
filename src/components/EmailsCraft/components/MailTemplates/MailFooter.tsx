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
// import { TopbarSection } from "@/components/Craft/TopBarSections";
import {
  baseDefaults,
  CommonSettings,
  getCommonSettingsProps,
  ICommonSettingsProps,
} from "../CommonSettings";
// import { BuilderImage } from "@/components/Craft/widgets/Image";
import { MailHeaders } from "./MailHeader";
import { Text } from "../Elements/Text/Text";
import { BuilderImage } from "../Elements/Image";
import { TopbarSection } from "@/components/Craft/TopBarSections";

const elementName = "Mail Footer";

const defaults = {
  backgroundColor: "#ffffff",
  borderColor: "#313641",
  borderRadius: 0,
};

interface IMailFootersProps extends ICommonSettingsProps {
  size?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;
}

export const MailFootersText = ({ children }: any) => {
  const {
    connectors: { connect, drag },
  }: any = useNode();
  return (
    <div ref={(ref: any) => connect(drag(ref))} className="text-only">
      {children}
    </div>
  );
};

MailFootersText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === Text || BuilderImage
      ),
  },
};

export const MailFooters = ({
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
}: IMailFootersProps) => {
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

          <div className="flex justify-center items-center py-4 gap-4">
            <Element id="MailFootersText" is={MailFootersText} canvas>
              <BuilderImage
                imageSrc={require("../../../../../public/instagramIcon.png")}
                height={30}
                width={30}
              />
            </Element>
            <Element id="MailFootersText1" is={MailFootersText} canvas>
              <BuilderImage
                imageSrc={require("../../../../../public/facebookIcon.png")}
                height={30}
                width={30}
              />
            </Element>
            <Element id="MailFootersText2" is={MailFootersText} canvas>
              <BuilderImage
                imageSrc={require("../../../../../public/whatsappIcon.png")}
                height={30}
                width={30}
              />
            </Element>
          </div>
          <div className="flex justify-center items-center py-4 ">
            <Element id="MailFootersText3" is={MailFootersText} canvas>
              <BuilderImage
                imageSrc={require("../../../../../public/images/TherapyLogos_files/pngtree-fun-people-healthy-life-logo-template-vector-icon-png-image_8298808.png")}
                height={50}
                width={50}
              />
            </Element>
            <Element id="MailFootersText4" is={MailFootersText} canvas>
              <Text
                paddingLeft={10}
                paddingBottom={10}
                paddingTop={10}
                alignment="center"
                text="Emerge"
                fontSize={20}
                bold="font-semibold"
                color="#000000"
                backgroundColor="white"
              />
            </Element>
          </div>
          <div className="mx-10">
            <Element id="MailFootersText5" is={MailFootersText} canvas>
              <Text
                paddingLeft={10}
                paddingBottom={10}
                paddingTop={10}
                alignment="center"
                text="Want to change how you receive these emails?You can update your preferences or
                unsubscribe"
                fontSize={18}
                bold="font-light"
                color="#000000"
                backgroundColor="white"
              />
            </Element>
          </div>
          <div className="flex justify-center">
            <Element id="MailFootersText6" is={MailFootersText} canvas>
              <Text
                paddingLeft={10}
                paddingBottom={10}
                paddingTop={10}
                alignment="center"
                text="Grow your business with"
                fontSize={18}
                bold="font-light"
                color="#000000"
                backgroundColor="white"
              />
            </Element>
            <Element id="MailFootersText7" is={MailFootersText} canvas>
              <BuilderImage
                imageSrc={require("../../../../../public/images/TherapyLogos_files/pngtree-fun-people-healthy-life-logo-template-vector-icon-png-image_8298808.png")}
                height={50}
                width={50}
              />
            </Element>
          </div>
        </div>
      </div>
    </>
  );
};

const MailFootersSettings = () => {
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
    state.nodes[state.nodes[data.linkedNodes["MailFootersText"]].data.nodes[0]]
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
      {/* {textNodeSettings && createElement(textNodeSettings)} */}
    </div>
  );
};

MailFooters.craft = {
  related: {
    settings: MailFootersSettings,
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
