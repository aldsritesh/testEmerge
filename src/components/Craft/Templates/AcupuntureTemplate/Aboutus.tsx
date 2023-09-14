import { Text } from "../../../Craft/widgets/Text/Text";
import { Button } from "../../../Craft/widgets/Button";
import { useNode, Element } from "@craftjs/core";
import { BuilderImage } from "../../../Craft/widgets/Image";

const elementName = "AcuAboutus";

import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "../../../Craft/widgets/CommonSettings";
import LeftFlyOut from "@/components/LeftLayout";
import { TopbarSection } from "../../TopBarSections";
import { useState } from "react";
import Divider from "../../widgets/Divider";

const defaults = {
  backgroundColor: "#FAFAFA",
  borderRadius: 0,
};

interface AcuAboutusProps extends ICommonSettingsProps {
  backgroundColor?: string;
}

export const AcuAboutus = ({
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
}: AcuAboutusProps) => {
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
        className={` flex flex-wrap items-center  hover:outline-blue-500 hover:outline ${shadow} ${borderType} relative`}
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
        <div className="flex  gap-4 items-start  ">
          <div className="flex flex-col gap-4 justify-start items-center w-[32%]">
            <div>
              <Element id="AcuAboutusImage" is={AcuAboutusButton} canvas>
                <BuilderImage
                  borderRadius={0}
                  width={195}
                  height={265}
                  imageSrc={require("../../../../../public/images/Acupunture/aboutus1.jpg")}
                />
              </Element>
            </div>
            <div>
              <Element id="AcuAboutusImage2" is={AcuAboutusButton} canvas>
                <BuilderImage
                  borderRadius={0}
                  width={195}
                  height={142}
                  imageSrc={require("../../../../../public/images/Acupunture/aboutus2.jpg")}
                />
              </Element>
            </div>
          </div>

          <div className="  flex flex-col  w-[55%]">
            <div className="flex items-center gap-2 justify-start">
              <Element id="AcuAboutusLine" is={AcuAboutusText} canvas>
                <div className="w-10">
                  <Divider borderColor="rgb(62, 62, 62)" />
                </div>
              </Element>

              <Element id="AcuAboutusTitle3" is={AcuAboutusText} canvas>
                <Text
                  alignment="left"
                  tagName="h2"
                  text="About us"
                  fontSize={18}
                  bold="font-medium"
                  color="rgb(62, 62, 62)"
                />
              </Element>
            </div>
            <div>
              <div className="mb-1">
                <Element id="AcuAboutusTitle4" is={AcuAboutusText} canvas>
                  <Text
                    alignment="left"
                    text="Welcome to Acupuncture"
                    fontSize={35}
                    lineHeight={1.1}
                    bold="font-semibold"
                    color="#473B2A"
                  />
                </Element>
              </div>
              <div>
                <Element id="AcuAboutusImage5" is={AcuAboutusButton} canvas>
                  <BuilderImage
                    borderRadius={0}
                    width={250}
                    height={360}
                    imageSrc={require("../../../../../public/images/Acupunture/aboutus3.jpg")}
                  />
                </Element>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-start gap-4 mt-40">
              <Element id="AcuAboutusTitle6" is={AcuAboutusText} canvas>
                <Text
                  alignment="left"
                  text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium aperiam"
                  fontSize={20}
                  bold="font-semibold"
                  color="#473B2A"
                  lineHeight={1.2}
                />
              </Element>
              <Element id="AcuAboutusTitle7" is={AcuAboutusText} canvas>
                <Text
                  alignment="left"
                  marginTop={6}
                  marginBottom={6}
                  lineHeight={1.3}
                  text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. 

                  Voluptate velit.
                  
                  "
                  fontSize={15}
                  bold="font-thin"
                  color="#473B2A"
                />
              </Element>
              <Element id="AcuAboutusTitle8" is={AcuAboutusText} canvas>
                <Button
                  backgroundColor="#B5825B"
                  color="white"
                  text="Read More"
                  borderRadius={0}
                  paddingRight={25}
                  paddingLeft={25}
                />
              </Element>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const AcuAboutusSettings: any = () => {
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

AcuAboutus.craft = {
  related: {
    settings: AcuAboutusSettings,
  },
  props: {
    ...getCommonSettingsProps(),
    background: defaults.backgroundColor,
    borderRadius: defaults.borderRadius,
    borderWidth: baseDefaults.borderWidth,
    marginTop: baseDefaults.marginTop,
    marginLeft: baseDefaults.marginLeft,
    marginRight: baseDefaults.marginRight,
    marginBottom: 3,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  displayName: elementName,
};

export const AcuAboutusText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

AcuAboutusText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === Text
      ),
  },
};

export const AcuAboutusButton = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return <div ref={connect}>{children}</div>;
};

AcuAboutusButton.craft = {
  rules: {
    // Only accept Buttons
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === Button
      ),
  },
};
