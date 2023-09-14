import { useNode, Element, useEditor } from "@craftjs/core";

import { AiFillPlusSquare, AiOutlineShoppingCart } from "react-icons/ai";

import {
  baseDefaults,
  CommonSettings,
  getCommonSettingsProps,
  ICommonSettingsProps,
} from "../../widgets/CommonSettings";
import { createElement, useState } from "react";

import LeftFlyOut from "@/components/LeftLayout";
import { TopbarSection } from "../../TopBarSections";
import { Headline } from "../../widgets/Text/Headline";
import { BlogCardPotrait } from "../../widgets/BlogCardPotrait";
import { Text } from "../../widgets/Text/Text";
import { RxDragHandleDots2 } from "react-icons/rx";
import { BuilderImage } from "../../widgets/Image";

const elementName = "PhysioBlog";

const defaults = {
  backgroundColor: "#ffffff",
  borderColor: "#313641",
  borderRadius: 0,
};

interface IPhysioBlogProps extends ICommonSettingsProps {
  size?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;
}

export const PhysioBlogText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

PhysioBlogText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNode: any) =>
      incomingNode.data.type === Text ||
      incomingNode.data.type === BuilderImage ||
      incomingNode.data.type === BlogCardPotrait,
  },
};

export const PhysioBlog = ({
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
}: IPhysioBlogProps) => {
  const [openCreateModal, setOpenCreateModal] = useState(false);

  const {
    connectors: { connect, drag },
    hovered,
  }: any = useNode((state) => ({ hovered: state.events.hovered }));

  const cardData = [
    {
      id: 1,
      heading: "Heading 1",
      desc: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide...",
      image: require("../../../../../public/images/TherapyLogos_files/blog-1.jpg"),
      date: "27 June 2023",
      summary: "Therapy , Massage ,Healing",
      button: "Learn More",
    },
    {
      id: 2,
      heading: "Heading 2",
      desc: "Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball...",
      image: require("../../../../../public/images/TherapyLogos_files/blog-2.jpg"),
      date: "27 June 2023",
      summary: "Therapy , Massage ,Healing",
      button: "Learn More",
    },
  ];

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
        ref={(ref: any) => connect(drag(ref))}
        className={` bg-white h-auto ${size} hover:z-20 ${
          hovered && "hover:outline-blue-500 hover:outline "
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
            <div className="absolute top-0 right-0 bg-blue-500 text-white text-[10px] px-1 z-10 capitalize">
              {elementName}
            </div>
            <div
              className="absolute -bottom-2 left-[50%]  text-white text-[10px] px-1 z-10 capitalize"
              onClick={() => {
                setOpenCreateModal(true);
              }}
            >
              <AiFillPlusSquare color="#FF7A40" size={25} radius={5} />
            </div>
          </>
        )}

        <div className="text-dark mb-2 px-2 text-3xl font-bold sm:text-4xl tracking-wider md:text-[40px] w-fit">
          <Element id="PhysioBlogText" is={PhysioBlogText} canvas>
            <Text
              text="Latest Blog"
              alignment="left"
              fontSize={20}
              bold="font-semibold"
            />
          </Element>
        </div>

        <div className="flex gap-4 carousel p-4   bg-transparent">
          {cardData.map((item: any, index: number) => (
            <Element
              key={index}
              is={PhysioBlogText}
              id={`PhysioBlogCard${index}`}
            >
              <BlogCardPotrait
                Heading={item.heading}
                Desc={item.desc}
                date={item.date}
                summary={item.summary}
                image={item.image}
                button={item.button}
                backgroundColor="#F2F1FE"
              />
            </Element>
          ))}
        </div>
      </div>
    </>
  );
};

const PhysioBlogSettings = () => {
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

  const { connectors } = useEditor();
  return (
    <div className="w-full">
      <div
        className="w-full shadow px-2 py-3 border-gray-200 border-[1px] bg-white rounded-md cursor-pointer"
        ref={(ref: any) =>
          connectors.create(
            ref,
            <BlogCardPotrait
              Heading="Heading"
              Desc="Description"
              date="Date"
              summary="Summaray"
              image={require("../../../../../public/images/TherapyLogos_files/logo1.png")}
              button="Button"
              backgroundColor="#F2F1FE"
            />
          )
        }
      >
        <div className="flex items-center gap-2">
          <div>
            <RxDragHandleDots2 className="text-gray-500 h-6 w-6" />
          </div>

          <h6 className="text-gray-600 text-lg font-medium text-center pl-2">
            New Blog Card
          </h6>
        </div>
      </div>
      <div className="w-full">
        <CommonSettings />
      </div>
    </div>
  );
};
PhysioBlog.craft = {
  related: {
    settings: PhysioBlogSettings,
  },
  props: {
    ...getCommonSettingsProps(),
    background: defaults.backgroundColor,
    borderRadius: defaults.borderRadius,
    borderColor: defaults.borderColor,
    paddingRight: 0,
    paddingTop: 10,
    paddingLeft: 0,
    paddingBottom: 10,
    marginTop: 0,
    marginBottom: 0,
    marginRight: 0,
  },
  displayName: elementName,
};
