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
import { BiPhoneCall } from "react-icons/bi";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import LeftFlyOut from "@/components/LeftLayout";
import { TopbarSection } from "../../TopBarSections";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/solid";

const elementName = "Team";

const defaults = {
  backgroundColor: "#ffffff",
  borderColor: "#313641",
  borderRadius: 0,
};

interface ITeamsProps extends ICommonSettingsProps {
  size?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;

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

export const TeamsText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

TeamsText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every((incomingNode: any) => false),
  },
};

export const Team = ({
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
}: ITeamsProps) => {
  const [openCreateModal, setOpenCreateModal] = useState(false);

  // const [cardSlide, setCardSlide] = useState < any > [];
  const {
    connectors: { connect, drag },
    hovered,
  }: any = useNode((state) => ({ hovered: state.events.hovered }));

  const people = [
    {
      id: 1,
      name: "Dr. Leslie Alexander",
      role: "Co-Founder / CEO",
      imageUrl: (
        <BuilderImage
          imageSrc={require("../../../../../public/images/dentalTemplate/teamperson1.avif")}
        />
      ),
    },
    {
      id: 2,
      name: "Dr. Leslie Alexander",
      role: "Senior Neurologist",
      imageUrl: (
        <BuilderImage
          imageSrc={require("../../../../../public/images/dentalTemplate/teamperson1.avif")}
        />
      ),
    },
    {
      id: 3,
      name: "Dr. Leslie Alexander",
      role: "Senior Neurologist",
      imageUrl: (
        <BuilderImage
          imageSrc={require("../../../../../public/images/dentalTemplate/teamperson1.avif")}
        />
      ),
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
          className={`w-full  ${size} mr-2 shadow-lg ${
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

          {/* <!-- ====== Team Section Start --> */}
          <section className="pt-5 pb-5 lg:pt-[10px]">
            <div className="container mx-auto">
              <Element id={`TeamsText`} is={TeamsText} canvas>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4">
                    <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                      <span className="text-primary mb-2 block text-lg font-semibold">
                        <Text
                          alignment="center"
                          text="Our Specialist"
                          fontSize={20}
                          bold="font-bold"
                          color="#0A92F8"
                        />
                      </span>
                      <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                        <Text
                          alignment="center"
                          text="Our Awesome Team"
                          fontSize={28}
                          bold="font-bold"
                        />
                      </h2>
                      <p className="text-body-color text-base">
                        <Text
                          alignment="center"
                          fontSize={16}
                          text="There are many variations of passages of Lorem Ipsum
                        available but the majority have suffered alteration in
                        some form."
                          bold="font-medium"
                          color="#898B8C"
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </Element>

              <div className="carousel">
                {[...addcard, ...people].map((item: any, index: number) => (
                  <div
                    key={index}
                    id={`slide${index + 1}`}
                    className="form-control carousel-item   2xl:mx-10"
                  >
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href={`#slide${index - 1}`} className="btn btn-circle">
                        ❮
                      </a>
                      <a href={`#slide${index + 1}`} className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                    <Element id={`TeamsText${index + 1}`} is={TeamsText} canvas>
                      <div className="carousel -mx-4 justify-center">
                        {[...addcard, ...people].map(
                          (item: any, index: number) => (
                            <div
                              className=" px-4 w-96 carousel-item relative"
                              key={index}
                            >
                              <div className="mx-auto mb-10 w-full max-w-[370px]">
                                <div className="relative overflow-hidden rounded-lg">
                                  <BuilderImage
                                    imageSrc={require("../../../../../public/images/dentalTemplate/teamperson1.avif")}
                                  />
                                  <div className="absolute bottom-5 left-0 w-full text-center">
                                    <div className="relative mx-5 overflow-hidden rounded-lg bg-white py-5 px-3">
                                      <h3 className="text-dark text-base font-semibold">
                                        <Text
                                          alignment="center"
                                          text="dummy name"
                                          bold="font-bold"
                                        />
                                      </h3>
                                      <p className="text-body-color text-sm">
                                        <Text
                                          alignment="center"
                                          text="dummy role"
                                          bold="font-medium"
                                        />
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </Element>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

const TeamsSettings = () => {
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
    state.nodes[state.nodes[data.linkedNodes["TeamsText"]].data.nodes[0]]
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

Team.craft = {
  related: {
    settings: TeamsSettings,
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
    addcard: [
      {
        addcardprops: {},
      },
    ],
  },
  displayName: elementName,
};
