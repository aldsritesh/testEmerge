import { useNode, Element, useEditor } from "@craftjs/core";
import { Text } from "../Text/Text";
import { createElement, useState, InputHTMLAttributes } from "react";
import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "../CommonSettings";
import { BuilderImage } from "../Image";
import { TopbarSection } from "../../TopBarSections";
import LeftFlyOut from "@/components/LeftLayout";
import { AiFillPlusSquare } from "react-icons/ai";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import TextInput from "@/components/controls/TextInput";
import { IoContract } from "react-icons/io5";

const elementName = "Testimonials";

const defaults = {
  backgroundColor: "#ffffff",
  borderColor: "#313641",
  borderRadius: 0,
};

interface ITestimonialsProps extends ICommonSettingsProps {
  size?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;
  addtestimonialBasicProps?: InputHTMLAttributes<HTMLInputElement>;
  addtestimonial?: {
    itemsProps: InputHTMLAttributes<HTMLInputElement>;
    question: string;
    answer: string;
  }[];
}

export const TestimonialsText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

TestimonialsText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every((incomingNode: any) => false),
  },
};

export const Testimonials = ({
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
  addtestimonial = [],
}: ITestimonialsProps) => {
  // const [showResults, setShowResults] = useState(false);

  // const handleClick = () => {
  //   setShowResults(true);
  // };

  const {
    connectors: { connect, drag },
    hovered,
  } = useNode((state) => ({ hovered: state.events.hovered }));

  const [openCreateModal, setOpenCreateModal] = useState(false);

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
            hovered && "hover:outline-blue-500 hover:outline z-40"
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
                className="absolute bottom-[-3%] z-50 left-[48%]  text-white text-xs px-1"
                onClick={() => {
                  setOpenCreateModal(true);
                }}
              >
                <AiFillPlusSquare color="#FF7A40" size={25} radius={5} />
              </div>
            </>
          )}
          {/* add testimonial */}

          <div className="carousel">
            {addtestimonial?.map((item: any, index: any) => (
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
                <Element
                  id={`TestimonialsText2${index + 1}`}
                  is={TestimonialsText}
                  canvas
                >
                  <section className="relative isolate overflow-hidden 2xl:ml-8 w-full  py-24 sm:py-8 lg:px-0">
                    <div className="absolute inset-0 -z-10 bg-transparent " />
                    {/* <div className="absolute  mr-16 w-[200%] origin-bottom-left  bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" /> */}
                    <div className="mx-auto max-w-2xl lg:max-w-4xl">
                      <figure className="mt-10">
                        <blockquote className="text-center 2xl:w-full w-[80%] mx-auto text-xl  font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                          <p
                            className={`w-full   h-auto ${size}  ${
                              hovered && "hover:blue-pink-500 hover:outline "
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
                            }}
                          >
                            <Text
                              paddingLeft={10}
                              paddingBottom={10}
                              paddingTop={10}
                              alignment="center"
                              text='"Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nemo expedita voluptas culpa sapiente alias molestiae.
                      Numquam corrupti in laborum sed rerum et corporis."'
                              fontSize={18}
                              bold="font-medium"
                              color="#000000"
                            />
                          </p>
                        </blockquote>
                        <figcaption className="mt-10">
                          <div
                            className={` flex justify-center w-full h-auto ${size} mr-2 ${
                              hovered &&
                              "hover:outline-blue-500 hover:outline  bg-transparent"
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
                              borderRadius: `100px`,
                              borderColor,
                            }}
                          >
                            <div
                              className="inline-block h-10 w-10 rounded-full   object-cover justify-center"
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
                                borderRadius: `100px`,
                                borderColor,
                              }}
                            >
                              <BuilderImage
                                height={50}
                                width={50}
                                borderRadius={50}
                                imageSrc={require("../../../../../public/images/dentalTemplate/services1.jpg")}
                              />
                            </div>
                          </div>
                          <div className="mt-3 flex items-center justify-center space-x-3 text-base">
                            <div
                              className={`  bg-transparent  w-full h-auto ${size} mr-2 ${
                                hovered && "hover:blue-pink-500 hover:outline "
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
                                paddingLeft={10}
                                paddingBottom={10}
                                paddingTop={10}
                                alignment="right"
                                text="Judith Black"
                                fontSize={17}
                                bold="font-semibold"
                                color="#000000"
                              />
                            </div>
                            <div>
                              <svg
                                viewBox="0 0 2 2"
                                width={3}
                                height={3}
                                aria-hidden="true"
                                className="fill-gray-900"
                              >
                                <circle cx={1} cy={1} r={1} />
                              </svg>
                            </div>
                            <div
                              className={`  ml-2 w-full h-auto ${size} mr-2 ${
                                hovered &&
                                "hover:outline-blue-500 bg-transparent hover:outline "
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
                                paddingLeft={10}
                                paddingBottom={10}
                                paddingTop={10}
                                alignment="left"
                                text="CEO of Workcation"
                                fontSize={12}
                                mobileFontSize={20}
                                bold="font-normal"
                                color="#000000"
                              />
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                    </div>
                  </section>
                </Element>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const TestimonialsSettings = () => {
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
    state.nodes[
      state.nodes[data.linkedNodes["TestimonialsText21"]].data.nodes[0]
    ].related.settings;
  return (
    <div>
      <div className="flex justify-between items-center">
        <label className="text-sm text-gray-400">Add Testimonial</label>

        <button
          className="btn bg-transparent btn-xs border-none hover:border-none hover:bg-transparent"
          onClick={() =>
            setProp(
              (props: any) =>
                (props.addtestimonial = [
                  ...props.addtestimonial,
                  {
                    addtestimonialProps: {
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
      {props.addtestimonial.map((item: any, index: number) => (
        <div
          key={index}
          className="flex items-center justify-between my-1 hover:border-2 "
        >
          <h2>{`Testimonial :${index}`}</h2>
          <button
            className="btn bg-transparent btn-xs border-none hover:border-none hover:bg-transparent"
            onClick={() =>
              setProp((props: any) => props.addtestimonial.splice(index, 1))
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

Testimonials.craft = {
  related: {
    settings: TestimonialsSettings,
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
    marginTop: 0,
    marginBottom: 10,
    addtestimonial: [
      {
        addtestimonialprops: {},
      },
    ],
  },
  displayName: elementName,
};
