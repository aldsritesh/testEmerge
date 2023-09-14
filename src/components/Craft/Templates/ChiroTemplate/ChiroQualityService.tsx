import { Text } from "../../../Craft/widgets/Text/Text";
import { Button } from "../../../Craft/widgets/Button";
import { useNode, Element } from "@craftjs/core";
import { BuilderImage } from "../../../Craft/widgets/Image";
const elementName = "ChiroQualityService";
import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "../../../Craft/widgets/CommonSettings";
import { Headline } from "../../../Craft/widgets/Text/Headline";
import LeftFlyOut from "@/components/LeftLayout";
import { TopbarSection } from "../../TopBarSections";
import { useState } from "react";
import { BsCheckLg } from "react-icons/bs";
const defaults = {
  backgroundColor: "#FAF9FC",
  borderRadius: 0,
};
interface ChiroQualityServiceProps extends ICommonSettingsProps {
  backgroundColor?: string;
}
export const ChiroQualityService = ({
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
}: ChiroQualityServiceProps) => {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const {
    hovered,
    connectors: { connect, drag },
  } = useNode((state) => ({
    hovered: state.events.hovered,
  }));
  // const data = [
  //   { name: "Effective", percent: "95%", width: "10/12" },
  //   { name: "Recommend", percent: "89%", width: "9/12" },
  //   { name: "Back Pain", percent: "97%", width: "11/12" },
  //   { name: "Good Values", percent: "88%", width: "8/12" },
  // ];
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
        className={` flex flex-wrap items-center hover:z-50   hover:outline-purple-500 hover:outline ${shadow} ${borderType} relative`}
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
        <div className=" flex w-full gap-8">
          <div className="w-fit  px-1  mb-4 md:mb-0 relative">
            <Element
              id="ChiroQualityServiceImage"
              is={ChiroQualityServiceButton}
              canvas
            >
              <BuilderImage
                borderRadius={10}
                width={337}
                height={400}
                imageSrc={require("../../../../../public/images/chiro/QualityService1.jpg")}
              />
            </Element>
            {/* <div className="bg-white w-64 h-36  absolute bottom-10 right-0 px-3 py-2 rounded-lg space-y-3">
              {data.map((item: any, index: number) => (
                <div
                  key={index}
                  className="bg-gray-200  h-[22px] relative rounded-md "
                >
                  <div
                    className={`bg-[#5D4FFF] w-${item.width} rounded-md absolute`}
                  >
                    <Element
                      id={`ChiroQualityService${item.name}`}
                      is={ChiroQualityServiceText}
                      canvas
                    >
                      <div className="flex justify-between px-3 py-[0.15rem]">
                        <Text
                          alignment="left"
                          text={item.name}
                          fontSize={12}
                          color="white"
                        />
                        <Text
                          alignment="left"
                          text={item.percent}
                          fontSize={12}
                          color="white"
                        />
                      </div>
                    </Element>
                  </div>
                </div>
              ))}
            </div> */}
          </div>
          <div className="w-full   flex justify-center flex-col ">
            <div className="">
              <Element
                id="ChiroQualityServiceTitle"
                is={ChiroQualityServiceText}
                canvas
              >
                <Text
                  lineHeight={1.2}
                  alignment="left"
                  tagName="h2"
                  text="We Offer You The Best Quality Services"
                  fontSize={25}
                  bold="font-semibold"
                  color="#181443"
                />
              </Element>
            </div>
            <div className="pt-5">
              <Element
                id="ChiroQualityServiceSubTitle"
                is={ChiroQualityServiceText}
                canvas
              >
                <Text
                  alignment="left"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae semper quis lectus nulla at volutpat diam ut."
                  fontSize={14}
                  color="#8F8AA2"
                />
              </Element>
            </div>
            <div className="pt-2">
              <Element
                id="ChiroQualityServiceOption1"
                is={ChiroQualityServiceText}
                canvas
              >
                <div className="flex gap-2 items-center">
                  <div className="bg-[#5D4FFF] w-4 h-4">
                    <BsCheckLg className="text-white scale-110" />
                  </div>
                  <div>
                    <Text
                      alignment="left"
                      text="Lorem ipsum dolor sit amet, consectetur elit ."
                      fontSize={14}
                      color="#8F8AA2"
                    />
                  </div>
                </div>
              </Element>
            </div>
            <div className="pt-2">
              <Element
                id="ChiroQualityServiceOption2"
                is={ChiroQualityServiceText}
                canvas
              >
                <div className="flex gap-2 items-center">
                  <div className="bg-[#5D4FFF] w-4 h-4">
                    <BsCheckLg className="text-white scale-110" />
                  </div>
                  <div>
                    <Text
                      alignment="left"
                      text="Lorem ipsum dolor sit amet, consectetur elit."
                      fontSize={14}
                      color="#8F8AA2"
                    />
                  </div>
                </div>
              </Element>
            </div>
            <div className="pt-2 ">
              <Element
                id="ChiroQualityServiceOption3"
                is={ChiroQualityServiceText}
                canvas
              >
                <div className="flex gap-2 items-center">
                  <div className="bg-[#5D4FFF] w-4 h-4">
                    <BsCheckLg className="text-white scale-110" />
                  </div>
                  <div>
                    <Text
                      alignment="left"
                      text="Lorem ipsum dolor sit amet, consectetur elit ."
                      fontSize={14}
                      color="#8F8AA2"
                    />
                  </div>
                </div>
              </Element>
            </div>
            <div className="w-fit mt-3">
              <Element id="ChiroButton" is={ChiroQualityServiceButton} canvas>
                <Button
                  backgroundColor="#5D4FFF"
                  color="white"
                  text="Read More"
                  borderRadius={10}
                  paddingRight={15}
                  paddingLeft={15}
                />
              </Element>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const ChiroQualityServiceSettings: any = () => {
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
ChiroQualityService.craft = {
  related: {
    settings: ChiroQualityServiceSettings,
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
export const ChiroQualityServiceText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};
ChiroQualityServiceText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === Text
      ),
  },
};
export const ChiroQualityServiceButton = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return <div ref={connect}>{children}</div>;
};
ChiroQualityServiceButton.craft = {
  rules: {
    // Only accept Buttons
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === Button
      ),
  },
};
