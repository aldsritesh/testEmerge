import { useNode, Element, useEditor } from "@craftjs/core";
import { Text } from "../../widgets/Text/Text";
import { createElement, useState } from "react";
import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "../../widgets/CommonSettings";
import { BuilderImage } from "../../widgets/Image";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import LeftFlyOut from "@/components/LeftLayout";
import { TopbarSection } from "../../TopBarSections";
import { AiFillPlusSquare } from "react-icons/ai";

const elementName = "PhysioFooter";

const defaults = {
  backgroundColor: "#ffffff",
  borderColor: "#313641",
  borderRadius: 0,
};

interface IPhysioFooterProps extends ICommonSettingsProps {
  size?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;
}

export const PhysioFooterText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

PhysioFooterText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every((incomingNode: any) => false),
  },
};

export const PhysioFooter = ({
  backgroundColor = defaults.backgroundColor,
  borderRadius = defaults.borderRadius,
  borderColor = baseDefaults.borderColor,
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
  shadow = "shadow-none",
  shadowColor = "transparent",
}: IPhysioFooterProps) => {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const {
    hovered,
    connectors: { connect, drag },
  } = useNode((state) => ({
    hovered: state.events.hovered,
  }));
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
        className={` flex flex-wrap items-center mb-2 hover:z-20 hover:outline-purple-500 hover:outline ${shadow} ${borderType} relative`}
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
              className="absolute bottom-[-2%] right-[50%] z-50 bg-orange-500 text-white text-xs px-1"
              onClick={() => {
                setOpenCreateModal(true);
              }}
            >
              +
            </div>
          </>
        )}

        <div>
          {/* <!-- ====== Footer Section Start --> */}

          <div className="relative z-10 bg-transparent lg:pt-[20px] pb-2">
            <Element id="PhysioFooterText" is={PhysioFooterText} canvas>
              <div className="container mx-auto flex-col">
                <div className="-mx-4 flex justify-evenly px-5 pt-10">
                  <div className="flex justify-evenly px-4 ">
                    <div className="w-full px-4 sm:w-1/4 lg:w-4/12 ">
                      <div className="mb-10 w-full">
                        <a className="mb-6 ml-4 inline-block max-w-[160px] ">
                          <BuilderImage
                            width={70}
                            height={70}
                            imageSrc={require("../../../../../public/images/TherapyLogos_files/logo1.png")}
                          />
                        </a>
                        <div className="text-body-color mb-7 text-base">
                          <Text
                            alignment="left"
                            text="we address the cause of your pain, not just the symptom."
                            fontSize={15}
                            bold="font-medium"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="w-full px-4 sm:w-1/4 lg:w-4/12 ">
                      <div className="mb-10 w-full">
                        <div className="text-dark mb-9 text-lg font-semibold">
                          <Text
                            alignment="left"
                            text="Quick Links"
                            fontSize={18}
                            bold="font-bold"
                          />
                        </div>
                        <ul>
                          <li>
                            <a className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose">
                              <Text
                                alignment="left"
                                text="Home"
                                fontSize={15}
                                bold="font-medium"
                              />
                            </a>
                          </li>
                          <li>
                            <a className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose">
                              <Text
                                alignment="left"
                                text="About Us"
                                fontSize={15}
                                bold="font-medium"
                              />
                            </a>
                          </li>
                          <li>
                            <a className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose">
                              <Text
                                alignment="left"
                                text="Request Callback"
                                fontSize={15}
                                bold="font-medium"
                              />{" "}
                            </a>
                          </li>
                          <li>
                            <a className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose">
                              <Text
                                alignment="left"
                                text="Testimonials"
                                fontSize={15}
                                bold="font-medium"
                              />
                            </a>
                          </li>
                          <li>
                            <a className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose">
                              <Text
                                alignment="left"
                                text="Contact Us"
                                fontSize={15}
                                bold="font-medium"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="w-full px-4 sm:w-1/4 lg:w-4/12 ">
                      <div className="mb-10 w-full flex-col justify-center  ">
                        <div className="text-dark mb-9 text-lg font-semibold">
                          <Text
                            alignment="left"
                            text="Symptom"
                            fontSize={18}
                            bold="font-bold"
                          />
                        </div>
                        <ul>
                          <li>
                            <a className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose">
                              <Text
                                alignment="left"
                                text="Neck Pain"
                                fontSize={15}
                                bold="font-medium"
                              />
                            </a>
                          </li>
                          <li>
                            <a className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose">
                              <Text
                                alignment="left"
                                text="Head Pain"
                                fontSize={15}
                                bold="font-medium"
                              />
                            </a>
                          </li>
                          <li>
                            <a className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose">
                              <Text
                                alignment="left"
                                text="Back Pain"
                                fontSize={15}
                                bold="font-medium"
                              />
                            </a>
                          </li>
                          <li>
                            <a className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose">
                              <Text
                                alignment="left"
                                text="Whiplash"
                                fontSize={15}
                                bold="font-medium"
                              />
                            </a>
                          </li>
                          <li>
                            <a className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose">
                              <Text
                                alignment="left"
                                text="Work Injury"
                                fontSize={15}
                                bold="font-medium"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="w-full px-7 sm:w-1/4 lg:w-4/12">
                    <div className="mb-10 w-full">
                      <div className="text-dark mb-9 text-lg font-semibold">
                        <Text
                          alignment="left"
                          text="Get in Touch"
                          fontSize={18}
                          bold="font-bold"
                        />
                      </div>
                      <ul>
                        <li>
                          <a className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose">
                            <Text
                              alignment="left"
                              text="+012 (345) 678 99"
                              fontSize={15}
                              bold="font-bold"
                            />
                          </a>
                        </li>
                        <li>
                          <a className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose">
                            <Text
                              alignment="left"
                              text="contact@physio.com"
                              fontSize={15}
                              bold="font-medium"
                            />
                          </a>
                        </li>
                        <li>
                          <a className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose">
                            <Text
                              alignment="left"
                              text="121 Lato Street, Melbourne, PAT 3000"
                              fontSize={15}
                              bold="font-medium"
                            />{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="w-full px-4 sm:w-1/2 lg:w-full">
                    <div className="mb-2 w-full flex justify-center items-center">
                      <div className="text-dark mr-2 text-lg font-semibold flex items-center justify-center">
                        <Text
                          alignment="center"
                          text="
                        Follow Us On"
                          fontSize={18}
                          bold="font-bold"
                        />{" "}
                      </div>
                      <div className=" flex items-center justify-between">
                        <a className="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4">
                          <FaFacebook />
                        </a>
                        <a className="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4">
                          <FaTwitter />
                        </a>
                        <a className="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4">
                          <FaYoutube />
                        </a>
                        <a className="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4">
                          <FaLinkedin />
                        </a>
                      </div>
                      <div className="text-body-color text-base">
                        <Text
                          alignment="center"
                          text="&copy; 2025 Physio"
                          fontSize={18}
                          bold="font-bold"
                        />{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <span className="absolute left-0 bottom-0 z-[-1]">
                  <svg
                    width="217"
                    height="229"
                    viewBox="0 0 217 229"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
                      fill="url(#paint0_linear_1179_5)"
                    />
                  </svg>
                </span>
                <span className="absolute top-10 right-10 z-[-1]">
                  <svg
                    width="75"
                    height="75"
                    viewBox="0 0 75 75"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
                      fill="url(#paint0_linear_1179_4)"
                    />
                  </svg>
                </span>
              </div>
            </Element>
          </div>

          {/* <!-- ====== Footer Section End --> */}
        </div>
      </div>
    </>
  );
};

const PhysioFooterSettings = () => {
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
    state.nodes[state.nodes[data.linkedNodes["PhysioFooterText"]].data.nodes[0]]
      .related.settings;
  return (
    <div>
      <CommonSettings />

      {textNodeSettings && createElement(textNodeSettings)}
    </div>
  );
};

PhysioFooter.craft = {
  related: {
    settings: PhysioFooterSettings,
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
