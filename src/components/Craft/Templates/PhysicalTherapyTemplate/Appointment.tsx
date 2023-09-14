import { Text } from "../../../Craft/widgets/Text/Text";
import { Button } from "../../../Craft/widgets/Button";
import { useNode, Element } from "@craftjs/core";
import { BuilderImage } from "../../../Craft/widgets/Image";
import { useState } from "react";
const elementName = "PhysioAppointment";

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
import Container from "../../widgets/Container";

const defaults = {
  backgroundColor: "#ffffff",
  borderRadius: 0,
};

interface IPhysioAppointmentProps extends ICommonSettingsProps {
  backgroundColor?: string;
}

export const PhysioAppointment = ({
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
}: IPhysioAppointmentProps) => {
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

        <div className="flex items-center w-full  py-1 ">
          <div className="w-full md:w-1/2 flex flex-col justify-between  ">
            <div className="w-full    flex items-center   flex-col">
              <div className="px-5 py-2 w-full">
                <div>
                  <Element
                    id="PhysioAppointmentemail"
                    is={PhysioAppointmentText}
                    canvas
                  >
                    <div className="border-b-2 border-[#DADADA] ">
                      <TextInputElement
                        textInputProps={{
                          name: "Email",
                          placeholder: "Enter Email here",
                          value: "abc@gmail.com",
                        }}
                        marginBottom={0}
                        marginLeft={0}
                        paddingLeft={0}
                        borderType="border-none"
                        paddingBottom={10}
                        paddingTop={0}
                        backgroundColor="white"
                      />
                    </div>
                  </Element>
                </div>
              </div>
              <div className="px-5 py-2 w-full">
                <div>
                  <div className="border-b-2 border-[#DADADA]">
                    <Element
                      id="PhysioAppointmentsubject"
                      is={PhysioAppointmentText}
                      canvas
                    >
                      <TextInputElement
                        textInputProps={{
                          name: "subject",
                          placeholder: "Subject",
                          value: "This is Subject",
                        }}
                        marginBottom={0}
                        marginLeft={0}
                        paddingLeft={0}
                        borderType="border-none"
                        paddingBottom={10}
                        paddingTop={0}
                        backgroundColor="white"
                      />
                    </Element>
                  </div>
                </div>
              </div>
              <div className="px-5 py-2 w-full">
                <div>
                  <div className="border-b-2 border-[#DADADA]">
                    <Element
                      id="PhysioAppointmentMessage"
                      is={PhysioAppointmentText}
                      canvas
                    >
                      <TextInputElement
                        textInputProps={{
                          name: "message",
                          placeholder: "Message",
                          value: "Enter Your Message Here",
                        }}
                        marginBottom={0}
                        marginLeft={0}
                        paddingLeft={0}
                        borderType="border-none"
                        paddingBottom={10}
                        paddingTop={0}
                        backgroundColor="white"
                      />
                    </Element>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-5 mt-5 w-fit">
              <Element
                id="PhysioAppointmentbutton"
                is={PhysioAppointmentButton}
                canvas
              >
                <Button
                  backgroundColor="#55B6C7"
                  color="white"
                  text="Book Appointment"
                  borderRadius={30}
                  paddingRight={15}
                  paddingLeft={15}
                />
              </Element>
            </div>
          </div>
          <div className="w-full md:w-1/2  mb-4 md:mb-0 relative">
            <Element
              id="PhysioAppointmentImage"
              is={PhysioAppointmentButton}
              canvas
            >
              <BuilderImage
                height={300}
                borderRadius={0}
                imageSrc={require("../../../../../public/images/TherapyLogos_files/appointment-1.jpg")}
              />
            </Element>

            <div
              className={`absolute right-16 top-11 px-5 h-100px py-6 rounded-xl bg-opacity-90 ${`h-auto`}`}
            >
              <Container height={"auto"} backgroundColor={"#EDCA9A"}>
                <Element id="AppointmentDiv" is={Container} canvas>
                  <div className="w-fit">
                    <Text
                      text="GET APPOINTMENT "
                      fontSize={14}
                      bold="font-semibold"
                      paddingBottom={5}
                    />
                  </div>

                  <Text
                    text="You Can Drop Message For Any Query ___"
                    bold="font-semibold"
                    fontSize={20}
                    paddingBottom={8}
                    paddingTop={5}
                  />
                  <div className="w-fit">
                    <Text
                      text="Call Us On"
                      color="#5F513E"
                      fontSize={14}
                      bold="font-semibold"
                      paddingBottom={5}
                    />
                  </div>
                  <div className="w-fit">
                    <Text
                      text="1800 476 79045"
                      bold="font-semibold"
                      fontSize={20}
                    />
                  </div>
                </Element>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const PhysioAppointmentSettings: any = () => {
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

PhysioAppointment.craft = {
  related: {
    settings: PhysioAppointmentSettings,
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

export const PhysioAppointmentText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

PhysioAppointmentText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === Text
      ),
  },
};

export const PhysioAppointmentButton = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return <div ref={connect}>{children}</div>;
};

PhysioAppointmentButton.craft = {
  rules: {
    // Only accept Buttons
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === Image
      ),
  },
};
