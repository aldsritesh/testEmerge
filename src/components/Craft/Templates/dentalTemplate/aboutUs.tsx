import { Text } from "../../widgets/Text/Text";
// import { Text } from "./Text/Text";
import { Button } from "../../widgets/Button";
import { useNode, Element, useEditor } from "@craftjs/core";
import { BuilderImage } from "../../widgets/Image";
import { BsSearch } from "react-icons/bs";
import { AiFillPlusSquare, AiOutlineShoppingCart } from "react-icons/ai";
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
import { createElement, useState } from "react";
import item from "@/components/Leads/dnd/styles/item";
import { Card } from "@mui/material";
import data from "@/layouts/GlobalLayout/components/data";
import { TextInputElement } from "@/components/SurveyCraft/widgets/form/TextInput";
import LeftFlyOut from "@/components/LeftLayout";
import { TopbarSection } from "../../TopBarSections";

const elementName = "About Us";

const defaults = {
  backgroundColor: "#ffffff",
  borderColor: "#313641",
  borderRadius: 0,
};

interface IAboutTempsProps extends ICommonSettingsProps {
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

export const AboutTempsText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

AboutTempsText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every((incomingNode: any) => false),
  },
};

export const AboutTemp = ({
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
}: IAboutTempsProps) => {
  const [openCreateModal, setOpenCreateModal] = useState(false);

  const [cardSlide, setCardSlide] = useState<any>([]);
  const {
    connectors: { connect, drag },
    hovered,
  }: any = useNode((state) => ({ hovered: state.events.hovered }));

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
      <div
        className="bg-white p-2 w-full"
        ref={(ref: any) => connect(drag(ref))}
      >
        {/* <div classNameName="card card-compact w-full bg-base-100 shadow-xl">
        <div classNameName="card-body">
          <Element id="heroImage" is={CardImage} canvas>
            <BuilderImage />
          </Element>
        </div>
      </div> */}
        <div
          className={`w-full h-auto ${size} mr-2  ${
            hovered && "hover:outline-blue-500  hover:outline "
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
            <>
              <div className="absolute top-0 right-0 bg-blue-500 text-white text-[10px] px-1 z-50 capitalize">
                {elementName}
              </div>
              <div
                className="absolute top-[98%] left-[50%]  text-white text-[10px] px-1 z-50 capitalize"
                onClick={() => {
                  setOpenCreateModal(true);
                }}
              >
                <AiFillPlusSquare color="#FF7A40" size={25} radius={5} />
              </div>
            </>
          )}
          <Element id="AboutTempsText" is={AboutTempsText} canvas>
            {/* <!-- ====== About Section Start --> */}
            <div className="2xl:container 2xl:mx-auto lg:py-8 lg:px-10 md:py-12 md:px-6 py-4 px-4">
              <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-6/12 ">
                  <BuilderImage
                    width={300}
                    height={400}
                    imageSrc={require("../../../../../public/images/dentalTemplate/services3.jpg")}
                  />
                </div>
                <div className="w-full lg:w-6/12 flex flex-col justify-center items-start">
                  <div className="py-2">
                    <Text
                      alignment="left"
                      text=" Do You Have any Queries?"
                      fontSize={15}
                      bold="font-semibold"
                      color="#000000"
                    />{" "}
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
                    <Text
                      alignment="left"
                      text="Joining Hands With Clinical Solutions"
                      fontSize={25}
                      bold="font-bold"
                      color="#107CE8"
                    />
                  </div>
                  <div className="font-normal text-base leading-6 text-gray-600 pb-4">
                    <Text
                      alignment="left"
                      text="There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in some
                      form, by injected humour, or randomised words which dont
                      look..."
                      fontSize={15}
                      bold="font-medium"
                      color="#6B6C6D"
                    />
                  </div>
                  <div className="pb-2">
                    <Text
                      alignment="left"
                      text="+1 (212) 255-5511"
                      fontSize={15}
                      bold="font-bold"
                      color="#6B6C6D"
                    />
                  </div>
                  <Button text="READ MORE +" />
                </div>
              </div>
            </div>
            {/* <!-- ====== About Section End --> */}
          </Element>
        </div>
      </div>
    </>
  );
};

const AboutTempsSettings = () => {
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
    state.nodes[state.nodes[data.linkedNodes["AboutTempsText"]].data.nodes[0]]
      .related.settings;
  return (
    <div>
      <CommonSettings />

      {textNodeSettings && createElement(textNodeSettings)}
    </div>
  );
};
AboutTemp.craft = {
  related: {
    settings: AboutTempsSettings,
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
