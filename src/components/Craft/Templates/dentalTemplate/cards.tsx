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
import { InputHTMLAttributes, createElement, useState } from "react";
import item from "@/components/Leads/dnd/styles/item";
import { Card } from "@mui/material";
import data from "@/layouts/GlobalLayout/components/data";
import LeftFlyOut from "@/components/LeftLayout";
import { TopbarSection } from "../../TopBarSections";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/solid";


const elementName = "CardBanner";

const defaults = {
  backgroundColor: "#ffffff",
  borderColor: "#313641",
  borderRadius: 0,
};

interface ICardBannersProps extends ICommonSettingsProps {
  size?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;
  itemsBasicProps?: InputHTMLAttributes<HTMLInputElement>;

  addcardBasicProps?: InputHTMLAttributes<HTMLInputElement>;
  addcard?: {
    itemsProps: InputHTMLAttributes<HTMLInputElement>;
    text1: string;
    text2: string;
    text3: string;
    text4: string;
  }[];
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

export const CardBannersText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

CardBannersText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every((incomingNode: any) => false),
  },
};

export const CardBanner = ({
  addcard = [],
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
}: ICardBannersProps) => {
  const [openCreateModal, setOpenCreateModal] = useState(false);

  const [cardSlide, setCardSlide] = useState<any>([]);
  const {
    connectors: { connect, drag },
    hovered,
  }: any = useNode((state) => ({ hovered: state.events.hovered }));

  const cardItem = [
    {
      id: 1,
      title: "Clinical Services",
      image: (
        <BuilderImage
          width={380}
          imageSrc={require("../../../../../public/images/dentalTemplate/services1.jpg")}
        />
      ),
      description:
        "Globally harness multimedia based collaboration and idea haring with backend.",
    },
    {
      id: 2,
      title: "Senior Doctors",
      image: (
        <BuilderImage
          width={380}
          imageSrc={require("../../../../../public/images/dentalTemplate/services2.jpg")}
        />
      ),
      description:
        "Dramatically disseminate standardized metrics after resource-leveling processes.",
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
        className="bg-white p-2 w-full"
        ref={(ref: any) => connect(drag(ref))}
      >
        {/* <div className="card card-compact w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <Element id="heroImage" is={CardImage} canvas>
            <BuilderImage />
          </Element>
        </div>
      </div> */}
        <div
          className={`w-full h-auto ${size} mr-2  ${
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
          <div className="carousel">
            {[...cardItem, ...addcard]?.map((item: any, index: any) => (
              <div
                id={`slide${index + 1}`}
                className="form-control carousel-item   2xl:mx-10"
                key={index}
              >
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href={`#slide${index - 1}`} className="btn btn-circle">
                    ❮
                  </a>
                  <a href={`#slide${index + 1}`} className="btn btn-circle">
                    ❯
                  </a>
                </div>
                {/* <Element
                  id={`CardBannersText${index + 1}`}
                  is={CardBannersText}
                  canvas
                >
                  <div
                    className={`carousel  shadow-lg bg-transparent w-full h-auto`}
                  >
                    <div
                      key={item.id}
                      className="carousel-item w-96 relative mx-2 p-0 card h-auto glass"
                    >
                      <div className="h-auto">{item.image}</div>
                      <div className="card-body">
                        <div className="card-title">
                          <Text
                            alignment="left"
                            text={item.title}
                            fontSize={20}
                            bold="font-bold"
                            color="#000000"
                          />
                        </div>
                        <Text
                          alignment="left"
                          text={item.description}
                          fontSize={15}
                          bold="font-medium"
                          color="#000000"
                        />
                        <div className="card-actions justify-start mt-2 p-0">
                          <Button text="Learn More!" color="white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Element> */}
                <Element
                  id={`CardBannersText${index + 1}`}
                  is={CardBannersText}
                  canvas
                >
                  <div
                    className={`carousel  shadow-lg bg-transparent w-full h-auto`}
                  >
                    <div
                      key={item.id}
                      className="carousel-item w-96 relative mx-2 p-0 card h-auto glass"
                    >
                      <div className="h-auto">
                        <BuilderImage
                          width={380}
                          imageSrc={require("../../../../../public/images/dentalTemplate/services1.jpg")}
                        />
                      </div>
                      <div className="card-body">
                        <div className="card-title">
                          <Text
                            alignment="left"
                            text="title here"
                            fontSize={20}
                            bold="font-bold"
                            color="#000000"
                          />
                        </div>
                        <Text
                          alignment="left"
                          text="discription here adnawilnaw n nalfnfnaoi"
                          fontSize={15}
                          bold="font-medium"
                          color="#000000"
                        />
                        <div className="card-actions justify-start mt-2 p-0">
                          <Button text="Learn More!" color="white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Element>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
const CardBannersSettings = () => {
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
    state.nodes[state.nodes[data.linkedNodes["CardBannersText1"]].data.nodes[0]]
      .related.settings;
  return (
    <div>
      <div className="flex justify-between items-center h-20">
        <label className="text-sm text-gray-400">Add card</label>
        <button
          onClick={() =>
            setProp(
              (props: any) =>
                (props.addcard = [
                  ...props.addcard,
                  {
                    addcardProps: {
                      value: "new item",
                    },
                  },
                ])
            )
          }
          className="btn bg-transparent btn-xs border-none hover:border-none hover:bg-transparent"
        >
          <PlusIcon className="h-4 w-4 text-black" />
        </button>
      </div>
      {props.addcard.map((item: any, index: number) => (
        <div
          key={index}
          className="flex items-center justify-between my-1 hover:border-2 "
        >
          <h2>{`card :${index}`}</h2>
          <button
            className="btn bg-transparent btn-xs border-none hover:border-none hover:bg-transparent"
            onClick={() =>
              setProp((props: any) => props.addcard.splice(index, 1))
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
CardBanner.craft = {
  related: {
    settings: CardBannersSettings,
  },
  props: {
    value: "",
   addcardBasicProps: {},
    ...getCommonSettingsProps(),
    background: defaults.backgroundColor,
    borderRadius: defaults.borderRadius,
    borderColor: defaults.borderColor,
    paddingRight: 10,
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    marginTop: 0,
    marginBottom: 0,
    addcard: [
      {
        addcardprops: {},
      },
    ],
  },
  displayName: elementName,
};
