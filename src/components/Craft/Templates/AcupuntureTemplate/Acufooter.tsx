import { useNode, Element, useEditor } from "@craftjs/core";

import { createElement, useState } from "react";
import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "../../widgets/CommonSettings";
import { Text } from "../../widgets/Text/Text";
import { BuilderImage } from "../../widgets/Image";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { BsArrowLeftRight, BsArrowRight } from "react-icons/bs";
import { Link } from "../../widgets/Link";
import Icons from "../../widgets/Icons";

const elementName = "Footers";

const defaults = {
  backgroundColor: "#21252E",
  borderColor: "#313641",
  borderRadius: 0,
};

interface IFootersProps extends ICommonSettingsProps {
  size?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;
}

export const AcuFooterText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="">
      {children}
    </div>
  );
};

AcuFooterText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every((incomingNode: any) => false),
  },
};

export const AcuFooterImage = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return <div ref={connect}>{children}</div>;
};

AcuFooterImage.craft = {
  rules: {
    // Only accept Buttons
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === BuilderImage
      ),
  },
};

export const AcuFooter = ({
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
}: IFootersProps) => {
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
        className={`w-full h-auto ${size}  ${
          hovered && "hover:outline-pink-500 hover:outline "
        }  relative ${shadowColor} ${shadow} ${borderType} py-6 `}
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
          <div className="absolute top-0 right-0 bg-purple-500 text-white text-[10px] px-1 z-10 capitalize">
            {elementName}
          </div>
        )}

        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <div className="mb-3 text-sm font-semibold  uppercase xt-white flex item-center gap-2  ">
              <Element id="AcuFooterImage" is={AcuFooterImage} canvas>
                <BuilderImage
                  width={80}
                  height={80}
                  imageSrc={require("../../../../../public/images/Acupunture/logo.png")}
                />
              </Element>
            </div>
            <div className="w-fit">
              <Element id="FootersText4" is={AcuFooterText} canvas>
                <Text
                  text="Acupunture"
                  fontSize={19}
                  bold="font-medium"
                  color="#fff"
                />
              </Element>
            </div>
            <div className="mt-2">
              <Element id="FootersText23" is={AcuFooterText} canvas>
                <Text
                  text="Nemo enim ipsam voluptatem quia voluptas aspernatur autodit fugit."
                  fontSize={12}
                  bold="font-medium"
                  color="#fff"
                />
              </Element>
            </div>
          </div>
          <div>
            <div className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white w-fit">
              <Element id="FootersText5" is={AcuFooterText} canvas>
                <Text
                  fontSize={20}
                  text="Find us at"
                  bold="font-medium"
                  color="#fff"
                />
              </Element>
            </div>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4 w-fit">
                <a href="#" className="hover:underline flex items-center gap-2">
                  <Element id="FootersFacebook" is={AcuFooterText} canvas>
                    <Icons
                      href="#"
                      padding={0}
                      justifyContent="center"
                      alignItems="center"
                      color="#e2c08d"
                      social={{ name: "Facebook" }}
                    />
                  </Element>
                  <Element id="FootersText6" is={AcuFooterText} canvas>
                    <Link
                      fontSize={15}
                      href="#"
                      targetData={false}
                      text="Facebook"
                      bold="font-medium"
                      color="#fff"
                    />
                  </Element>
                </a>
              </li>
              <li className="mb-4 w-fit">
                <a href="#" className="hover:underline flex items-center gap-2">
                  <Element id="FootersTwitter" is={AcuFooterText} canvas>
                    <Icons
                      href="#"
                      padding={0}
                      justifyContent="center"
                      alignItems="center"
                      color="#e2c08d"
                      social={{ name: "Twitter" }}
                    />
                  </Element>
                  <Element id="FootersText7" is={AcuFooterText} canvas>
                    <Link
                      fontSize={15}
                      href="#"
                      targetData={false}
                      text="Twitter"
                      bold="font-medium"
                      color="#fff"
                    />
                  </Element>
                </a>
              </li>
              <li className="mb-4 w-fit">
                <a
                  href="#"
                  className="hover:underline   flex items-center gap-2"
                >
                  <Element id="FootersInsatgram" is={AcuFooterText} canvas>
                    <Icons
                      href="#"
                      justifyContent="center"
                      alignItems="center"
                      color="#e2c08d"
                      social={{ name: "Instagram" }}
                      padding={0}
                    />
                  </Element>
                  <Element id="FootersText8" is={AcuFooterText} canvas>
                    <Link
                      fontSize={15}
                      href="#"
                      targetData={false}
                      text="Instagram"
                      bold="font-medium"
                      color="#fff"
                    />
                  </Element>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white w-fit">
              <Element id="FootersText9" is={AcuFooterText} canvas>
                <Text
                  fontSize={20}
                  text="Who We Are"
                  bold="font-medium"
                  color="#fff"
                />
              </Element>
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4 w-fit">
                <a
                  href="#"
                  className="hover:underline   flex items-center gap-2 "
                >
                  <span> &#8827; </span>
                  <Element id="FootersText10" is={AcuFooterText} canvas>
                    <Link
                      fontSize={15}
                      href="#"
                      targetData={false}
                      text="Home"
                      bold="font-medium"
                      color="#fff"
                    />
                  </Element>
                </a>
              </li>
              <li className="mb-4 w-fit">
                <a
                  href="#"
                  className="hover:underline   flex items-center gap-2"
                >
                  <span> &#8827; </span>
                  <Element id="FootersText11" is={AcuFooterText} canvas>
                    <Link
                      fontSize={15}
                      href="#"
                      targetData={false}
                      text="Blog"
                      bold="font-medium"
                      color="#fff"
                    />
                  </Element>
                </a>
              </li>
              <li className="mb-4 w-fit">
                <a
                  href="#"
                  className="hover:underline   flex items-center gap-2"
                >
                  <span> &#8827; </span>
                  <Element id="FootersText12" is={AcuFooterText} canvas>
                    <Link
                      fontSize={15}
                      href="#"
                      targetData={false}
                      text="Appointment"
                      bold="font-medium"
                      color="#fff"
                    />
                  </Element>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white w-fit">
              <Element id="FootersText13" is={AcuFooterText} canvas>
                <Text
                  fontSize={20}
                  text="Our Experience"
                  bold="font-medium"
                  color="#fff"
                />
              </Element>
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4 w-fit">
                <a href="#" className="hover:underline ">
                  <Element id="FootersText14" is={AcuFooterText} canvas>
                    <Link
                      fontSize={15}
                      href="#"
                      targetData={false}
                      text="What we do"
                      bold="font-medium"
                      color="#fff"
                    />
                  </Element>
                </a>
              </li>
              <li className="mb-4  w-fit">
                <a href="#" className="hover:underline w-fit">
                  <Element id="FootersText15" is={AcuFooterText} canvas>
                    <Link
                      fontSize={15}
                      href="#"
                      targetData={false}
                      text="Our Services"
                      bold="font-medium"
                      color="#fff"
                    />
                  </Element>
                </a>
              </li>

              <li className="mb-4  w-fit">
                <a href="#" className="hover:underline w-fit">
                  <Element id="FootersText16" is={AcuFooterText} canvas>
                    <Link
                      fontSize={15}
                      href="#"
                      targetData={false}
                      text="Our Markers"
                      bold="font-medium"
                      color="#fff"
                    />
                  </Element>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const FootersSettings = () => {
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

  // const textNodeSettings =
  //   state.nodes[state.nodes[data.linkedNodes["FootersText"]].data.nodes[0]]
  //     .related.settings;
  return (
    <div>
      <CommonSettings />

      {/* {textNodeSettings && createElement(textNodeSettings)} */}
    </div>
  );
};

AcuFooter.craft = {
  related: {
    settings: FootersSettings,
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
