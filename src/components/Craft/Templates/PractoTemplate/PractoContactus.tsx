import { Text } from "../../../Craft/widgets/Text/Text";
import { Button } from "../../../Craft/widgets/Button";
import { useNode, Element } from "@craftjs/core";
import { BuilderImage } from "../../../Craft/widgets/Image";
import { useEffect, useState } from "react";
const elementName = "PractoContactus";

import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "../../../Craft/widgets/CommonSettings";
import { Headline } from "../../../Craft/widgets/Text/Headline";
import { TopbarSection } from "../../TopBarSections";
import LeftFlyOut from "@/components/LeftLayout";
import { GlobalContactusForm } from "../../widgets/form/GlobalContactusForm";
import { GlobalRequestForm } from "../../widgets/form/RequestQoute";
import ListItem from "../../widgets/ListItem";
import { GiTick } from "react-icons/gi";
import { Check, ChecklistRtlOutlined } from "@mui/icons-material";

const defaults = {
  backgroundColor: "#f0f0f3",
  borderRadius: 0,
};

interface PractoContactusProps extends ICommonSettingsProps {
  backgroundColor?: string;
}

export const PractoContactus = ({
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
}: PractoContactusProps) => {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const {
    connectors: { connect, drag },
    hovered,
  }: any = useNode((state) => ({ hovered: state.events.hovered }));
  let x = screen.width;
  let y = 123;

  console.log(y);
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
          <div className="absolute top-0 right-0 bg-purple-500 text-white text-xs px-1">
            {elementName}
          </div>
        )}
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

        <div className="flex relative bg-transparent 2xl:gap-10 gap-5 py-10">
          <div className="  2xl:w-[30%] w-[35%] h-auto  mb-4 md:mb-0 mt-8">
            <Element id="welcomePostImage" is={PractoContactusButton} canvas>
              <GlobalRequestForm
                heading=" Request Service"
                subheading="Enter your contact details here to help us serve you better & faster."
              />
            </Element>
          </div>

          <div className=" 2xl:w-[70%] w-[65%]  flex items-start justify-start  flex-col ">
            <div className="  gap-4 py-1 mx-5 w-full  flex  ">
              <BuilderImage
                height={screen.width > 1366 ? 200 : 150}
                width={screen.width > 1366 ? 300 : 225}
                borderRadius={0}
                imageSrc={require("../../../../../public/images/Practro/c1.webp")}
              />
              <BuilderImage
                height={screen.width > 1366 ? 200 : 150}
                width={screen.width > 1366 ? 300 : 225}
                borderRadius={0}
                imageSrc={require("../../../../../public/images/Practro/c2.webp")}
              />
            </div>
            {/* <div className="flex gap-4 py-1 mx-5 w-full 2xl:hidden ">
              <BuilderImage
                height={150}
                width={225}
                borderRadius={0}
                imageSrc={require("../../../../../public/images/Practro/c1.webp")}
              />
              <BuilderImage
                height={150}
                width={225}
                borderRadius={0}
                imageSrc={require("../../../../../public/images/Practro/c2.webp")}
              />
            </div> */}
            {/* <div className="pt-5 px-5">
              <Element id="welcomePostTitle" is={PractoContactusText} canvas>
                <Text
                  alignment="left"
                  color="black"
                  text="Why Choose Us _______"
                  fontSize={32}
                  bold="font-semibold"
                />
              </Element>
            </div> */}
            <div className="">
              <Element id="welcomePostSubTitle" is={PractoContactusText} canvas>
                <Text
                  color="#4d4d4d"
                  alignment="left"
                  text="In Addition to our commitment towards excellence our advantages are :"
                  fontSize={20}
                  lineHeight={1.5}
                  italic
                  paddingTop={20}
                  paddingLeft={20}
                />
              </Element>
            </div>
            <div className="  ">
              <Element id="welcomePostDesc" is={PractoContactusText} canvas>
                <Text
                  color="#ada2a5"
                  alignment="left"
                  text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium,
                  totam rem aperiam  perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium,
                  totam rem aperiam,,  "
                  fontSize={16}
                  bold="font-light"
                  lineHeight={1.2}
                  paddingTop={10}
                  paddingBottom={10}
                  paddingLeft={20}
                />
              </Element>
            </div>
            <div className="flex justify-between item-center gap-10 py-1 px-4  ">
              <div>
                <div className="flex gap-2 py-1 ">
                  <Check className="text-[#058ec6]" />
                  <Element id="list1" is={PractoContactusText} canvas>
                    <Text
                      text="Head Pain"
                      alignment="left"
                      fontSize={14}
                      color="#4d4d4d"
                    />
                  </Element>
                </div>
                <div className="flex gap-2 py-1 items-center">
                  <Check className="text-[#058ec6]" />
                  <Element id="list2" is={PractoContactusText} canvas>
                    <Text
                      text="Back Pain"
                      alignment="left"
                      fontSize={14}
                      color="#4d4d4d"
                    />
                  </Element>
                </div>
                <div className="flex gap-2 py-1 items-center">
                  <Check className="text-[#058ec6]" />
                  <Element id="list3" is={PractoContactusText} canvas>
                    <Text
                      text="Neck Pain"
                      alignment="left"
                      fontSize={14}
                      color="#4d4d4d"
                    />
                  </Element>
                </div>
                <div className="flex gap-2 py-1 items-center">
                  <Check className="text-[#058ec6]" />
                  <Element id="list4" is={PractoContactusText} canvas>
                    <Text
                      text="Sport Injuries"
                      fontSize={14}
                      alignment="left"
                      color="#4d4d4d"
                    />
                  </Element>
                </div>
                <div className="flex gap-2 py-1 items-center">
                  <Check className="text-[#058ec6]" />
                  <Element id="list5" is={PractoContactusText} canvas>
                    <Text
                      text="Free Estimates"
                      fontSize={14}
                      alignment="left"
                      color="#4d4d4d"
                    />
                  </Element>
                </div>
              </div>
              <div>
                <div className="flex gap-2 py-1 items-center">
                  <Check className="text-[#058ec6]" />
                  <Element id="list6" is={PractoContactusText} canvas>
                    <Text
                      text="24 -Hours Emergency Services"
                      fontSize={14}
                      alignment="left"
                      color="#4d4d4d"
                    />
                  </Element>
                </div>
                <div className="flex gap-2 py-1 items-center">
                  <Check className="text-[#058ec6]" />
                  <Element id="list7" is={PractoContactusText} canvas>
                    <Text
                      text="Uniformed, Licensed Plumbers"
                      fontSize={14}
                      alignment="left"
                      color="#4d4d4d"
                    />
                  </Element>
                </div>
                <div className="flex gap-2 py-1 items-center">
                  <Check className="text-[#058ec6]" />
                  <Element id="list8" is={PractoContactusText} canvas>
                    <Text
                      text="No Travel Charges"
                      fontSize={14}
                      alignment="left"
                      color="#4d4d4d"
                    />
                  </Element>
                </div>
                <div className="flex gap-2 py-1 items-center">
                  <Check className="text-[#058ec6]" />
                  <Element id="list9" is={PractoContactusText} canvas>
                    <Text
                      text="Licensed and Insured"
                      fontSize={14}
                      alignment="left"
                      color="#4d4d4d"
                    />
                  </Element>
                </div>
                <div className="flex gap-2 py-1 items-center">
                  <Check className="text-[#058ec6]" />
                  <Element id="list10" is={PractoContactusText} canvas>
                    <Text
                      text="Free Estimates"
                      fontSize={14}
                      alignment="left"
                      color="#4d4d4d"
                    />
                  </Element>
                </div>
              </div>
            </div>

            {/* <div className="pt-2 px-5 flex gap-4 py-1">
              <div className=" w-fit ">
                <Element id="welcomePostCard1" is={PractoContactusText} canvas>
                  <Text
                    color="black"
                    alignment="left"
                    text="25k"
                    fontSize={30}
                    bold="font-semibold"
                  />
                </Element>
                <Element id="welcomePostCard2" is={PractoContactusText} canvas>
                  <Text
                    color="black"
                    alignment="left"
                    text="Happy Customers"
                    fontSize={13}
                  />
                </Element>
              </div>
              <div className=" w-fit ">
                <Element id="welcomePostCard3" is={PractoContactusText} canvas>
                  <Text
                    color="black"
                    alignment="left"
                    text="5"
                    fontSize={30}
                    bold="font-semibold"
                  />
                </Element>
                <Element id="welcomePostCard4" is={PractoContactusText} canvas>
                  <Text
                    color="black"
                    alignment="left"
                    text="Years Experience"
                    fontSize={13}
                  />
                </Element>
              </div>
              <div className=" w-fit ">
                <Element id="welcomePostCard5" is={PractoContactusText} canvas>
                  <Text
                    color="black"
                    alignment="left"
                    text="100%"
                    fontSize={30}
                    bold="font-semibold"
                  />
                </Element>
                <Element id="welcomePostCard6" is={PractoContactusText} canvas>
                  <Text
                    color="black"
                    alignment="left"
                    text="Satisfaction"
                    fontSize={13}
                  />
                </Element>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

const PractoContactusSettings: any = () => {
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

PractoContactus.craft = {
  related: {
    settings: PractoContactusSettings,
  },
  props: {
    ...getCommonSettingsProps(),
    background: defaults.backgroundColor,
    borderRadius: defaults.borderRadius,
    borderWidth: baseDefaults.borderWidth,
    marginTop: baseDefaults.marginTop,
    marginLeft: baseDefaults.marginLeft,
    marginRight: baseDefaults.marginRight,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  displayName: elementName,
};

export const PractoContactusText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

PractoContactusText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === Text
      ),
  },
};

export const PractoContactusButton = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return <div ref={connect}>{children}</div>;
};

PractoContactusButton.craft = {
  rules: {
    // Only accept Buttons
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === Image
      ),
  },
};
