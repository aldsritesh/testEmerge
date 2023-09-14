import { Text } from "../../widgets/Text/Text";
import { ServicesCard } from "../../widgets/ServicesCard";
// import { Text } from "./Text/Text";
import { Button } from "../../widgets/Button";
import { useNode, Element, useEditor } from "@craftjs/core";
import { BuilderImage } from "../../widgets/Image";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
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
import { BiPhoneCall } from "react-icons/bi";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import LeftFlyOut from "@/components/LeftLayout";
import { TopbarSection } from "../../TopBarSections";
import { Headline } from "../../widgets/Text/Headline";
import { TextCard } from "../../widgets/TextCard";
import { Height } from "@mui/icons-material";
import { ServicesImageCard } from "../../widgets/ServicesImageCard";

const elementName = "Services";

const defaults = {
  backgroundColor: "#ffffff",
  borderColor: "#313641",
  borderRadius: 0,
};

interface IServicesProps extends ICommonSettingsProps {
  size?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;
}

export const ServicesLayout = ({
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
}: IServicesProps) => {
  const [openCreateModal, setOpenCreateModal] = useState(false);

  // const [cardSlide, setCardSlide] = useState < any > [];
  const {
    connectors: { connect, drag },
    hovered,
  }: any = useNode((state) => ({ hovered: state.events.hovered }));

  const ServicesData = [
    {
      id: "item1",
      title: "Physio Therapy",
      src: require("../../../../../public/images/TherapyLogos_files/services-1.jpg"),
    },
    {
      id: "item2",
      title: "Massage Therapy",
      src: require("../../../../../public/images/TherapyLogos_files/services-2.jpg"),
    },
    {
      id: "item3",
      title: "Chiropractic Therapy",
      src: require("../../../../../public/images/TherapyLogos_files/services-3.jpg"),
    },
    {
      id: "item4",
      title: "Sport Injury",
      src: require("../../../../../public/images/TherapyLogos_files/services-4.jpg"),
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
        className={` flex flex-wrap items-center hover:z-20 hover:outline-purple-500 hover:outline ${shadow} ${borderType} relative`}
        style={{
          borderRadius: borderRadius + "px",
          borderColor,
          borderWidth: `${borderWidth}px`,
          marginTop: `${marginTop}px`,
          marginBottom: `${marginBottom}px`,
          marginLeft: `${marginLeft}px`,
          marginRight: `${marginRight}px`,
          backgroundColor,
          paddingTop: `${paddingTop}px`,
          paddingBottom: `${paddingBottom}px`,
          paddingLeft: `${paddingLeft}px`,
          paddingRight: `${paddingRight}px`,
        }}
      >
        {hovered && (
          <>
            <div className="absolute z-50 top-0 right-0 bg-blue-500 text-white text-xs px-1">
              {elementName}
            </div>
            <div
              className="absolute bottom-[2%] right-[50%] z-50 bg-orange-500 text-white text-xs px-1"
              onClick={() => {
                setOpenCreateModal(true);
              }}
            >
              +
            </div>
          </>
        )}

        <div className="py-1 pb-2 lg:pt-[10px] tracking-wider overflow-hidden">
          <div className="w-fit">
            <Element id="ServicesText" is={ServicesText} canvas>
              <Headline
                text="Our Services"
                alignment="left"
                tagName="h2"
                fontSize={20}
                bold="font-semibold"
              />
            </Element>
          </div>

          <div className="my-3 flex flex-wrap">
            <Element id="ServicesDesc" is={ServicesText} canvas>
              <Text
                alignment="left"
                text="At Healing Chiropractic our chiropractic group is prepared to address with you to talk about your issues. We will outline a program that is appropriate for you. We anticipate meeting you."
                fontSize={14}
                color="#797979"
                paddingBottom={3}
              />
            </Element>
          </div>

          <div className="container  ">
            <div className="carousel gap-2 py-2 justify-center">
              {ServicesData.map((item: any, index: number) => (
                <Element
                  key={index}
                  id={`ServicesCard${index}`}
                  is={ServicesText}
                  canvas
                >
                  <ServicesImageCard heading={item.title} image={item.src} />
                </Element>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ServicesSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));
  return (
    <div className="w-full">
      <CommonSettings />
    </div>
  );
};

ServicesLayout.craft = {
  related: {
    settings: ServicesSettings,
  },
  props: {
    ...getCommonSettingsProps(),
    background: defaults.backgroundColor,
    borderRadius: defaults.borderRadius,
    borderColor: defaults.borderColor,
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 0,
  },
  displayName: elementName,
};

export const ServicesText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};
ServicesText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) =>
          incomingNode.data.type === Text ||
          incomingNode.data.type === ServicesImageCard ||
          incomingNode.data.type === BuilderImage
      ),
  },
};
