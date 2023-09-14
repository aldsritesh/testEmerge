import { useNode, Element, useEditor } from "@craftjs/core";
import { Text } from "../../Craft/widgets/Text/Text";
import { createElement, useState } from "react";
import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "../../Craft/widgets/CommonSettings";
import { BuilderImage } from "../../Craft/widgets/Image";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const elementName = "Footer";

const defaults = {
  backgroundColor: "#ffffff",
  borderColor: "#313641",
  borderRadius: 10,
};

interface IFooterWebsProps extends ICommonSettingsProps {
  size?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;
}

export const GlobalFooterWebsText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

GlobalFooterWebsText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every((incomingNode: any) => false),
  },
};

export const GlobalFooterWeb = ({
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
}: IFooterWebsProps) => {
  // const [showResults, setShowResults] = useState(false);

  // const handleClick = () => {
  //   setShowResults(true);
  // };

  const {
    connectors: { connect, drag },
    hovered,
  } = useNode((state) => ({ hovered: state.events.hovered }));

  // console.log(showResults);
  return (
    <div ref={(ref: any) => connect(drag(ref))}>
      <div
        className={`w-full h-auto ${size} mr-2 ${
          hovered && "hover:outline-pink-500 hover:outline "
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
          <div className="absolute top-0 right-0 bg-purple-500 text-white text-[10px] px-1 z-50 capitalize">
            {elementName}
          </div>
        )}
        <Element id="FooterWebsText" is={GlobalFooterWebsText} canvas>
          {/* <!-- ====== Footer Section Start --> */}
          <footer className="relative z-10 bg-white lg:pt-[20px] pb-2">
            <div className="container mx-auto flex-col">
              <div className="-mx-4 flex flex-wrap justify-between px-10 pt-10">
                <div className="w-full px-4 sm:w-2/3 lg:w-6/12">
                  <div className="mb-10 w-full">
                    <a className="mb-6 ml-4 inline-block max-w-[160px]">
                      <BuilderImage
                        width={70}
                        height={70}
                        imageSrc={require("../../../../public/images/logo/favlogo.png")}
                      />
                    </a>
                    <div className="text-body-color mb-7 text-base">
                      <Text
                        alignment="left"
                        text="Sed ut perspiciatis undmnis is iste natus error sit amet
                        voluptatem totam rem aperiam."
                        fontSize={15}
                        bold="font-medium"
                      />
                    </div>
                    <div className="text-dark flex items-center text-sm font-medium">
                      <span className="text-primary mr-3">
                        <svg
                          width="19"
                          height="21"
                          viewBox="0 0 19 21"
                          className="fill-current"
                        >
                          <path d="M17.8076 11.8129C17.741 11.0475 17.1088 10.5151 16.3434 10.5151H2.16795C1.40261 10.5151 0.803643 11.0808 0.703816 11.8129L0.00502514 18.8008C-0.0282506 19.2001 0.104853 19.6327 0.371059 19.9322C0.637265 20.2317 1.03657 20.398 1.46916 20.398H17.0755C17.4748 20.398 17.8741 20.2317 18.1736 19.9322C18.4398 19.6327 18.5729 19.2334 18.5396 18.8008L17.8076 11.8129ZM17.2751 19.1668C17.2419 19.2001 17.1753 19.2667 17.0422 19.2667H1.46916C1.36933 19.2667 1.2695 19.2001 1.23623 19.1668C1.20295 19.1336 1.1364 19.067 1.16968 18.9339L1.86847 11.9127C1.86847 11.7463 2.00157 11.6465 2.16795 11.6465H16.3767C16.5431 11.6465 16.6429 11.7463 16.6762 11.9127L17.375 18.9339C17.3417 19.0337 17.3084 19.1336 17.2751 19.1668Z" />
                          <path d="M9.25704 13.1106C7.95928 13.1106 6.92773 14.1422 6.92773 15.4399C6.92773 16.7377 7.95928 17.7693 9.25704 17.7693C10.5548 17.7693 11.5863 16.7377 11.5863 15.4399C11.5863 14.1422 10.5548 13.1106 9.25704 13.1106ZM9.25704 16.6046C8.6248 16.6046 8.09239 16.0722 8.09239 15.4399C8.09239 14.8077 8.6248 14.2753 9.25704 14.2753C9.88928 14.2753 10.4217 14.8077 10.4217 15.4399C10.4217 16.0722 9.88928 16.6046 9.25704 16.6046Z" />
                          <path d="M0.802807 6.05619C0.869358 7.52032 2.16711 8.11928 2.83263 8.11928H5.16193C5.19521 8.11928 5.19521 8.11928 5.19521 8.11928C6.19348 8.05273 7.19175 7.38722 7.19175 6.05619V5.25757C8.28985 5.25757 10.8188 5.25757 11.9169 5.25757V6.05619C11.9169 7.38722 12.9152 8.05273 13.9135 8.11928H13.9467H16.2428C16.9083 8.11928 18.206 7.52032 18.2726 6.05619C18.2726 5.95636 18.2726 5.59033 18.2726 5.25757C18.2726 4.99136 18.2726 4.75843 18.2726 4.72516C18.2726 4.69188 18.2726 4.6586 18.2726 4.6586C18.1727 3.72688 17.84 2.96154 17.2743 2.36258L17.241 2.3293C16.4091 1.56396 15.4109 1.13138 14.6455 0.865169C12.416 0 9.62088 0 9.48778 0C7.52451 0.0332757 6.26003 0.199654 4.36331 0.865169C3.63125 1.0981 2.63297 1.53068 1.80108 2.29603L1.7678 2.3293C1.20212 2.92827 0.869359 3.69361 0.769531 4.62533C0.769531 4.6586 0.769531 4.69188 0.769531 4.69188C0.769531 4.75843 0.769531 4.95809 0.769531 5.22429C0.802807 5.52377 0.802807 5.92308 0.802807 6.05619ZM2.5997 3.12792C3.26521 2.52896 4.09711 2.16292 4.7959 1.89672C6.52624 1.26448 7.65761 1.13138 9.55433 1.0981C9.68743 1.0981 12.2829 1.13138 14.2795 1.89672C14.9783 2.16292 15.8102 2.49568 16.4757 3.12792C16.8417 3.52723 17.0746 4.05964 17.1412 4.69188C17.1412 4.79171 17.1412 4.95809 17.1412 5.22429C17.1412 5.55705 17.1412 5.92308 17.1412 6.02291C17.1079 6.78825 16.3759 6.95463 16.276 6.95463H13.98C13.6472 6.92135 13.1148 6.78825 13.1148 6.05619V4.69188C13.1148 4.42567 12.9485 4.22602 12.7155 4.12619C12.5159 4.05964 6.69262 4.05964 6.49296 4.12619C6.26003 4.19274 6.09365 4.42567 6.09365 4.69188V6.05619C6.09365 6.78825 5.56124 6.92135 5.22848 6.95463H2.93246C2.83263 6.95463 2.10056 6.78825 2.06729 6.02291C2.06729 5.92308 2.06729 5.55705 2.06729 5.22429C2.06729 4.95809 2.06729 4.82498 2.06729 4.72516C2.00073 4.05964 2.23366 3.52723 2.5997 3.12792Z" />
                        </svg>
                      </span>
                      <span>
                        <Text
                          alignment="left"
                          text="+012 (345) 678 99"
                          fontSize={15}
                          bold="font-bold"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                {/* <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
                  <div className="mb-10 w-full">
                    <h4 className="text-dark mb-9 text-lg font-semibold">
                      <Text
                        alignment="left"
                        text="Resources"
                        fontSize={15}
                        bold="font-bold"
                      />
                    </h4>
                    <ul>
                      <li>
                        <a
                          
                          className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                        >
                          <Text
                            alignment="left"
                            text="SaaS Development"
                            fontSize={12}
                            bold="font-medium"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          
                          className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                        >
                          <Text
                            alignment="left"
                            text="Our Products"
                            fontSize={12}
                            bold="font-medium"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          
                          className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                        >
                          <Text
                            alignment="left"
                            text="User Flow"
                            fontSize={12}
                            bold="font-medium"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          
                          className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                        >
                          <Text
                            alignment="left"
                            text="User Strategy"
                            fontSize={12}
                            bold="font-medium"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div> */}
                <div className="w-full px-10 sm:w-1/2 lg:w-3/12">
                  <div className="mb-10 w-full flex-col justify-center  ">
                    <div className="text-dark mb-9 text-lg font-semibold">
                      <Text
                        alignment="left"
                        text="Company"
                        fontSize={18}
                        bold="font-bold"
                      />
                    </div>
                    <ul>
                      <li>
                        <a className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose">
                          <Text
                            alignment="left"
                            text="About TailGrids"
                            fontSize={15}
                            bold="font-medium"
                          />
                        </a>
                      </li>
                      <li>
                        <a className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose">
                          <Text
                            alignment="left"
                            text="Contact & Support"
                            fontSize={15}
                            bold="font-medium"
                          />
                        </a>
                      </li>
                      <li>
                        <a className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose">
                          <Text
                            alignment="left"
                            text="Success History"
                            fontSize={15}
                            bold="font-medium"
                          />
                        </a>
                      </li>
                      <li>
                        <a className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose">
                          <Text
                            alignment="left"
                            text="Setting & Privacy"
                            fontSize={15}
                            bold="font-medium"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-full px-10 sm:w-1/2 lg:w-3/12">
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
                            text="Premium Support"
                            fontSize={15}
                            bold="font-medium"
                          />
                        </a>
                      </li>
                      <li>
                        <a className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose">
                          <Text
                            alignment="left"
                            text="Our Services"
                            fontSize={15}
                            bold="font-medium"
                          />
                        </a>
                      </li>
                      <li>
                        <a className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose">
                          <Text
                            alignment="left"
                            text="Know Our Team"
                            fontSize={15}
                            bold="font-medium"
                          />{" "}
                        </a>
                      </li>
                      <li>
                        <a className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose">
                          <Text
                            alignment="left"
                            text="Download App"
                            fontSize={15}
                            bold="font-medium"
                          />
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
                        text="&copy; 2025 TailGrids"
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
          </footer>
          {/* <!-- ====== Footer Section End --> */}
        </Element>
      </div>
    </div>
  );
};

const FooterWebsSettings = () => {
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
    state.nodes[state.nodes[data.linkedNodes["FooterWebsText"]].data.nodes[0]]
      .related.settings;
  return (
    <div>
      <CommonSettings />

      {textNodeSettings && createElement(textNodeSettings)}
    </div>
  );
};

GlobalFooterWeb.craft = {
  related: {
    settings: FooterWebsSettings,
  },
  props: {
    ...getCommonSettingsProps(),
    background: defaults.backgroundColor,
    borderRadius: defaults.borderRadius,
    borderColor: defaults.borderColor,
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 10,
    marginBottom: 0,
  },
  displayName: elementName,
};
