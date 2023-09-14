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
import { createElement, useState, InputHTMLAttributes } from "react";
import item from "@/components/Leads/dnd/styles/item";
import { Card } from "@mui/material";
import data from "@/layouts/GlobalLayout/components/data";
import { TopbarSection } from "../../TopBarSections";
import LeftFlyOut from "@/components/LeftLayout";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/solid";

const elementName = "BlogLayout";

const defaults = {
  backgroundColor: "#ffffff",
  borderColor: "#313641",
  borderRadius: 0,
};

interface IBlogLayoutsProps extends ICommonSettingsProps {
  size?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;
  addblogBasicProps?: InputHTMLAttributes<HTMLInputElement>;
  addblog?: {
    itemsProps: InputHTMLAttributes<HTMLInputElement>;
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

export const BlogLayoutsText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

BlogLayoutsText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every((incomingNode: any) => false),
  },
};

export const BlogLayout = ({
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
  addblog = [],
}: IBlogLayoutsProps) => {
  const [cardSlide, setCardSlide] = useState<any>([]);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const {
    connectors: { connect, drag },
    hovered,
  }: any = useNode((state) => ({ hovered: state.events.hovered }));

  const BlogCards = [{ title: "1" }, { title: "2" }, { title: "3" }];

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
        className=" p-2 w-full rounded-xl"
        ref={(ref: any) => connect(drag(ref))}
      >
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
            {addblog.map((item: any, index: number) => (
              <div
                key={index}
                className="  carousel-item  rounded-b-md  h-auto w-1/3 "
              >
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href={`#slide${index - 1}`} className="btn btn-circle">
                    ❮
                  </a>
                  <a href={`#slide${index + 1}`} className="btn btn-circle">
                    ❯
                  </a>
                </div>
                <Element
                  id={`BlogLayoutsText${index}`}
                  is={BlogLayoutsText}
                  canvas
                >
                  <div className="h-auto     ">
                    <div className="h-auto  flex gap-1 ">
                      <div
                        key={index}
                        className="m-3 rounded-b-md border h-[22rem] "
                      >
                        <div className="overflow-hidden ">
                          <BuilderImage
                            height={180}
                            width={220}
                            borderRadius={0}
                            type="contain"
                          />
                        </div>
                        <div className="px-3">
                          <p
                            className={` w-full h-auto  ${size} px-2 ${
                              hovered && "hover:outline-blue-500 hover:outline "
                            }  relative ${shadowColor} ${shadow} ${borderType}`}
                            style={{
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
                          >
                            <Text
                              paddingBottom={2}
                              paddingTop={2}
                              alignment="left"
                              text="Heading"
                              fontSize={15}
                              bold="font-bold"
                              color="#645858"
                            />
                          </p>
                          <p
                            className={`w-full h-24 overflow-y-scroll scrollbar-hide ${size}  ${
                              hovered && "hover:outline-blue-500 hover:outline"
                            }  relative ${shadowColor} ${shadow} ${borderType}`}
                            style={{
                              marginTop: `${marginTop}px`,
                              marginBottom: `${marginBottom}px`,
                              marginLeft: `${marginLeft}px`,
                              marginRight: `${marginRight}px`,

                              paddingBottom: `${paddingBottom}px`,
                              paddingLeft: `${paddingLeft}px`,
                              paddingRight: `${paddingRight}px`,
                              borderWidth: `${borderWidth}px`,
                              borderRadius: `2px`,
                              borderColor,
                            }}
                          >
                            <Text
                              paddingBottom={1}
                              paddingTop={1}
                              alignment="left"
                              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam aliquid sit, impedit distinctio Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam aliquid sit, impedit distinctio "
                              fontSize={12}
                              bold="font-medium"
                              color="#645858"
                            />
                          </p>
                          <p
                            className={`   w-full h-fit flex items-end ${size}  ${
                              hovered && "hover:outline-blue-500 hover:outline "
                            }  relative ${shadowColor} ${shadow} ${borderType}`}
                            style={{
                              marginTop: `${marginTop}px`,
                              marginBottom: `${marginBottom}px`,
                              marginLeft: `${marginLeft}px`,
                              marginRight: `${marginRight}px`,

                              paddingBottom: `${paddingBottom}px`,
                              paddingLeft: `${paddingLeft}px`,
                              paddingRight: `${paddingRight}px`,
                              borderWidth: `${borderWidth}px`,
                              borderRadius: `2px`,
                              borderColor,
                            }}
                          >
                            <Text
                              paddingBottom={3}
                              paddingTop={3}
                              alignment="left"
                              text="August 01111, 2022 "
                              fontSize={13}
                              bold="font-medium"
                              color="#9ca3af"
                            />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Element>
              </div>
            ))}
          </div>

          {/* <Element id="BlogLayoutsText" is={BlogLayoutsText} canvas>
            <div className="h-auto  my-3 ">
              <div className="h-auto   my-3 flex gap-1 ">
                {BlogCards.map((item: any, index: number) => (
                  <div
                    key={index}
                    className="m-3 rounded-b-md border h-80 w-1/3 "
                  >
                    <div className="overflow-hidden ">
                      <BuilderImage
                        height={150}
                        width={238}
                        borderRadius={0}
                        type="contain"
                      />
                    </div>
                    <div className="px-3">
                      <p
                        className={` w-full h-auto  ${size} px-2 ${
                          hovered && "hover:outline-blue-500 hover:outline "
                        }  relative ${shadowColor} ${shadow} ${borderType}`}
                        style={{
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
                      >
                        <Text
                          paddingBottom={2}
                          paddingTop={2}
                          alignment="left"
                          text="Heading"
                          fontSize={15}
                          bold="font-bold"
                          color="#645858"
                        />
                      </p>
                      <p
                        className={`w-full h-24 overflow-y-scroll scrollbar-hide ${size}  ${
                          hovered && "hover:outline-blue-500 hover:outline"
                        }  relative ${shadowColor} ${shadow} ${borderType}`}
                        style={{
                          marginTop: `${marginTop}px`,
                          marginBottom: `${marginBottom}px`,
                          marginLeft: `${marginLeft}px`,
                          marginRight: `${marginRight}px`,

                          paddingBottom: `${paddingBottom}px`,
                          paddingLeft: `${paddingLeft}px`,
                          paddingRight: `${paddingRight}px`,
                          borderWidth: `${borderWidth}px`,
                          borderRadius: `2px`,
                          borderColor,
                        }}
                      >
                        <Text
                          paddingBottom={1}
                          paddingTop={1}
                          alignment="left"
                          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam aliquid sit, impedit distinctio Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam aliquid sit, impedit distinctio "
                          fontSize={12}
                          bold="font-medium"
                          color="#645858"
                        />
                      </p>
                      <p
                        className={`   w-full h-fit flex items-end ${size}  ${
                          hovered && "hover:outline-blue-500 hover:outline "
                        }  relative ${shadowColor} ${shadow} ${borderType}`}
                        style={{
                          marginTop: `${marginTop}px`,
                          marginBottom: `${marginBottom}px`,
                          marginLeft: `${marginLeft}px`,
                          marginRight: `${marginRight}px`,

                          paddingBottom: `${paddingBottom}px`,
                          paddingLeft: `${paddingLeft}px`,
                          paddingRight: `${paddingRight}px`,
                          borderWidth: `${borderWidth}px`,
                          borderRadius: `2px`,
                          borderColor,
                        }}
                      >
                        <Text
                          paddingBottom={3}
                          paddingTop={3}
                          alignment="left"
                          text="August 01111, 2022 "
                          fontSize={13}
                          bold="font-medium"
                          color="#9ca3af"
                        />
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Element> */}
          <div className="card-actions justify-center mt-2   px-3">
            <Button
              text="Learn More!"
              color="white"
              paddingLeft={10}
              paddingRight={10}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const BlogLayoutsSettings = () => {
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
    state.nodes[state.nodes[data.linkedNodes["BlogLayoutsText0"]].data.nodes[0]]
      .related.settings;
  return (
    <div>
      <label className="text-sm text-gray-400">Add Testimonial</label>

      <button
        className="btn bg-transparent btn-xs border-none hover:border-none hover:bg-transparent"
        onClick={() =>
          setProp(
            (props: any) =>
              (props.addblog = [
                ...props.addblog,
                {
                  addblogProps: {
                    value: "new item",
                  },
                },
              ])
          )
        }
      >
        <PlusIcon className="h-4 w-4 text-black" />
      </button>
      {props.addblog.map((item: any, index: number) => (
        <div
          key={index}
          className="flex items-center justify-between my-1 hover:border-2 "
        >
          <h2>{`Testimonial :${index}`}</h2>
          <button
            className="btn bg-transparent btn-xs border-none hover:border-none hover:bg-transparent"
            onClick={() =>
              setProp((props: any) => props.addblog.splice(index, 1))
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
BlogLayout.craft = {
  related: {
    settings: BlogLayoutsSettings,
  },
  props: {
    value: "",
    itemsBasicProps: {},
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
    addblog: [
      {
        addblogprops: {},
      },
    ],
  },
  displayName: elementName,
};
