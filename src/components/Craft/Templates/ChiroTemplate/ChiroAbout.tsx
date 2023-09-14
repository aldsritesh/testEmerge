import { Text } from "../../../Craft/widgets/Text/Text";
import { Button } from "../../../Craft/widgets/Button";
import { useNode, Element } from "@craftjs/core";
import { BuilderImage } from "../../../Craft/widgets/Image";
import { useState } from "react";
const elementName = "ChiroAbout";
import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "../../../Craft/widgets/CommonSettings";
import { Headline } from "../../../Craft/widgets/Text/Headline";
import { TextInputElement } from "../../widgets/form/TextInput";
import LeftFlyOut from "@/components/LeftLayout";
import { TopbarSection } from "../../TopBarSections";
import {
  FaBriefcaseMedical,
  FaRegCalendarAlt,
  FaUserAlt,
} from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import Container from "../../widgets/Container";
import { TextCard } from "../../widgets/TextCard";
const defaults = {
  backgroundColor: "white",
  borderRadius: 0,
};
interface IChiroAboutProps extends ICommonSettingsProps {
  backgroundColor?: string;
}
export const CardTop = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};
CardTop.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === Text
      ),
  },
};
export const ChiroAbout = ({
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
}: IChiroAboutProps) => {
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
        className={` flex flex-wrap items-center hover:z-50  hover:outline-purple-500 hover:outline ${shadow} ${borderType} relative w-full`}
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
        <div className="flex flex-col justify-center items-center w-full">
          <div className="w-fit">
            <Element is={ChiroAboutText} id="ChiroAboutHeading">
              <Text
                alignment="center"
                color="#181443"
                bold="font-semibold"
                fontSize={26}
                text="Indivisual Counseling And Therapy"
              />
            </Element>
          </div>
          <div className="w-fit">
            <Element is={ChiroAboutText} id="ChiroAboutDesc">
              <Text
                color="#645F80"
                alignment="center"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
            </Element>
          </div>
        </div>
        <div className="flex w-full justify-between mt-5 gap-3">
          <div className="flex flex-col gap-5 justify-center">
            <div className="w-[12rem] h-[8rem] border rounded-md shadow flex justify-center flex-col gap-3 items-center">
              <Element is={ChiroAboutText} id="ChiroAboutText2">
                <TextCard textHeading="27K+" textDesc="Happy Patients" />
              </Element>
            </div>
            <div className="w-[12rem] h-[8rem] border rounded-md shadow flex justify-center flex-col gap-3 items-center">
              <Element is={ChiroAboutText} id="ChiroAboutText3">
                <TextCard textHeading="45 +" textDesc="Online Appointments" />
              </Element>
            </div>
          </div>
          <div>
            <Element is={ChiroAboutImage} id="chiroAboutImage">
              <BuilderImage
                width={350}
                height={350}
                imageSrc={require("../../../../../public/images/chiro/pic-2.jpg")}
              />
            </Element>
          </div>
          <div className="flex flex-col gap-5 justify-center">
            <div className="w-[12rem] h-[8rem] border rounded-md shadow flex justify-center flex-col gap-3 items-center">
              <Element is={ChiroAboutText} id="ChiroAboutText4">
                <TextCard textHeading="12+" textDesc="Years Of Experience" />
              </Element>
            </div>
            <div className="w-[12rem] h-[8rem] border rounded-md shadow flex justify-center flex-col gap-3 items-center">
              <Element is={ChiroAboutText} id="ChiroAboutText5">
                <TextCard textHeading="22 +" textDesc="Doctors And Staff" />
              </Element>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const ChiroAboutSettings: any = () => {
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
ChiroAbout.craft = {
  related: {
    settings: ChiroAboutSettings,
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
export const ChiroAboutText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};
ChiroAboutText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === Text || BuilderImage
      ),
  },
};
export const ChiroAboutImage = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};
ChiroAboutImage.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === BuilderImage
      ),
  },
};
