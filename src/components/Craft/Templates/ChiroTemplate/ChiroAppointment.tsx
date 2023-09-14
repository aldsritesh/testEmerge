import { Text } from "../../../Craft/widgets/Text/Text";
import { Button } from "../../../Craft/widgets/Button";
import { useNode, Element } from "@craftjs/core";
import { BuilderImage } from "../../../Craft/widgets/Image";
import { useState } from "react";

const elementName = "ChiroAppointment";

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
import Icons from "../../widgets/Icons";

const defaults = {
  backgroundColor: "#F2F1FE",
  borderRadius: 0,
};

interface IChiroAppointmentProps extends ICommonSettingsProps {
  backgroundColor?: string;
}

export const ChiroAppointment = ({
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
}: IChiroAppointmentProps) => {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const {
    hovered,
    connectors: { connect, drag },
  } = useNode((state) => ({
    hovered: state.events.hovered,
  }));

  const data = [
    {
      name: "Full Name",
      value: "Full Name",
      icon: "User",
    },
    {
      name: "Your Email",
      value: "Your Email",
      icon: "Email",
    },
    {
      name: "Your Phone",
      value: "Your Phone",
      icon: "Call",
    },
    {
      name: "Doctor",
      value: "Doctor",
      icon: "Medical",
    },
    {
      name: "Date",
      value: "Date",
      icon: "Calendar",
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
        ref={(ref: any) => connect(drag(ref))}
        className={` flex flex-col justify-center w-full items-center hover:z-50  hover:outline-purple-500 hover:outline ${shadow} ${borderType} relative`}
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
            <div className="absolute z-50 top-0 right-0 bg-blue-500 text-white text-xs px-1  border-4">
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

        <div className="w-fit">
          <Element is={ChiroAppointmentText} id="ChiroHeading">
            <Text
              alignment="center"
              text="Book An Appointment"
              color="#181443"
              fontSize={35}
              bold="font-semibold"
            />
          </Element>
        </div>
        <div className="w-fit">
          <Element is={ChiroAppointmentText} id="ChiroDesc">
            <Text
              alignment="center"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
              fontSize={14}
              color="#8F8AA2"
            />
          </Element>
        </div>
        <Element is={ChiroAppointmentText} id="ChiroTextCard">
          <div className="grid grid-cols-3  w-full gap-2 pt-5">
            {data.map((item: any, index: number) => (
              <div
                key={index}
                className="flex mb-3 h-12  rounded-md overflow-hidden"
              >
                <span className="h-12 w-12 flex items-center justify-center rounded-l-md">
                  <Icons
                    href="#"
                    justifyContent="center"
                    alignItems="center"
                    social={{ name: item.icon }}
                    backgroundColor="#5D4FFF"
                    color="white"
                  />
                </span>

                <span>
                  <TextInputElement
                    paddingBottom={12}
                    paddingTop={12}
                    borderRadius={0}
                    backgroundColor="white"
                    textInputProps={{ value: item.value, name: item.name }}
                  />
                </span>
              </div>
            ))}
            <span className=" w-full ">
              <Button
                backgroundColor="#5D4FFF"
                color="white"
                text="Book Now"
                paddingRight={86}
                paddingLeft={86}
                borderRadius={5}
              />
            </span>
          </div>
        </Element>
      </div>
    </>
  );
};

const ChiroAppointmentSettings: any = () => {
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

ChiroAppointment.craft = {
  related: {
    settings: ChiroAppointmentSettings,
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

export const ChiroAppointmentText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

ChiroAppointmentText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === Text || BuilderImage
      ),
  },
};
