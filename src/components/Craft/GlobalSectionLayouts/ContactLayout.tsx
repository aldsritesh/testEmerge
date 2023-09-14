import { useNode, Element, useEditor } from "@craftjs/core";
import { TextInputElement } from "../../Craft/widgets/form/TextInput";
import { TextAreaElement } from "../../Craft/widgets/form/TextareaElement";
import { RadioInputElement } from "../../Craft/widgets/form/RadioElement";
import { CheckboxInputElement } from "../../Craft/widgets/form/CheckboxElement";
import { SelectBoxInputElement } from "../../Craft/widgets/form/SelectInputElement";
import { AttachmentElement } from "../../Craft/widgets/form/Attachment";
import { DatePickerElement } from "../../Craft/widgets/form/DatePicker";
import { Button } from "../../Craft/widgets/Button";
import { Link } from "../../Craft/widgets/Link";
import { Text } from "../../Craft/widgets/Text/Text";
import { CiMail } from "react-icons/ci";
import { BsTelephoneOutbound } from "react-icons/bs";
import { FiHome } from "react-icons/fi";
import {
  baseDefaults,
  CommonSettings,
  getCommonSettingsProps,
  ICommonSettingsProps,
} from "../../Craft/widgets/CommonSettings";
import { createElement } from "react";

const elementName = "Contact";

const defaults = {
  backgroundColor: "#ffffff",
  borderColor: "#313641",
  borderRadius: 10,
};

interface IContactTempsProps extends ICommonSettingsProps {
  size?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;
}

export const GlobalContactTempsText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

GlobalContactTempsText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) =>
          incomingNode.data.type === Text ||
          TextInputElement ||
          TextAreaElement ||
          Button
      ),
  },
};

export const GlobalContactTempTop = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

GlobalContactTempTop.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) =>
          incomingNode.data.type === Text ||
          incomingNode.data.type === TextInputElement ||
          incomingNode.data.type === TextAreaElement ||
          incomingNode.data.type === RadioInputElement ||
          incomingNode.data.type === CheckboxInputElement ||
          incomingNode.data.type === SelectBoxInputElement ||
          incomingNode.data.type === AttachmentElement ||
          incomingNode.data.type === DatePickerElement ||
          incomingNode.data.type === Button ||
          incomingNode.data.type === Link
      ),
  },
};

export const GlobalContactTemp = ({
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
}: IContactTempsProps) => {
  const {
    connectors: { connect, drag },
    hovered,
  }: any = useNode();

  return (
    <>
      <div
        className={`w-full h-auto ${size} mr-2 shadow-lg flex justify-center items-center ${
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
        ref={(ref: any) => connect(drag(ref))}
      >
        {hovered && (
          <div className="absolute top-0 right-0 bg-purple-500 text-white text-[10px] px-1 z-10 capitalize">
            {elementName}
          </div>
        )}
        <div className="w-1/2">
          <Element id="ContactTempsText" is={GlobalContactTempsText} canvas>
            <div className="relative z-10 overflow-hidden bg-transparent py-4 px-4 lg:py-[50px]">
              <div className="container mx-auto">
                <div className="flex flex-wrap lg:justify-between">
                  <div className="w-full pl-4 ">
                    <div className="mb-12 max-w-[570px] lg:mb-0">
                      <div className="text-primary mb-4 block text-base font-semibold">
                        <Text
                          alignment="center"
                          text="Contact Us"
                          fontSize={15}
                          bold="font-bold"
                          color="#0B8EF0"
                        />
                      </div>
                      <div className="text-dark mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                        <Text
                          alignment="center"
                          text="BOOK YOUR VISIT"
                          fontSize={22}
                          bold="font-bold"
                          color="#000000"
                        />
                      </div>
                      <div className="text-body-color mb-9 text-base leading-relaxed">
                        <Text
                          alignment="center"
                          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eius tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim adiqua minim veniam quis nostrud
                        exercitation ullamco"
                          fontSize={12}
                          bold="font-medium"
                          color="#6B6C6D"
                        />{" "}
                      </div>
                      <div className="mb-8 flex w-full max-w-[370px]">
                        <div className="bg-primary text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]">
                          <FiHome />
                        </div>
                        <div className="w-full">
                          <div className="text-dark mb-1 text-xl font-bold">
                            <Text
                              alignment="left"
                              text="Our Location"
                              fontSize={17}
                              bold="font-bold"
                              color="#000000"
                            />
                          </div>
                          <div className="text-body-color text-base">
                            <Text
                              alignment="left"
                              text="24 S.t Palace Park California 28292. USA"
                              fontSize={12}
                              bold="font-medium"
                              color="#6B6C6D"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mb-8 flex w-full max-w-[370px]">
                        <div className="bg-primary text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]">
                          <BsTelephoneOutbound />
                        </div>
                        <div className="w-full">
                          <div className="text-dark mb-1 text-xl font-bold">
                            <Text
                              alignment="left"
                              text=" Phone Number"
                              fontSize={17}
                              bold="font-bold"
                              color="#000000"
                            />
                          </div>
                          <div className="text-body-color text-base">
                            <Text
                              alignment="left"
                              text="(+91)00 00 000 0000"
                              fontSize={12}
                              bold="font-medium"
                              color="#6B6C6D"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mb-8 flex w-full max-w-[370px]">
                        <div className="bg-primary text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]">
                          <CiMail />
                        </div>
                        <div className="w-full">
                          <div className="text-dark mb-1 text-xl font-bold">
                            <Text
                              alignment="left"
                              text="Email Address"
                              fontSize={17}
                              bold="font-bold"
                              color="#000000"
                            />{" "}
                          </div>
                          <div className="text-body-color text-base">
                            <Text
                              alignment="left"
                              text="examle@example.com"
                              fontSize={12}
                              bold="font-medium"
                              color="#000000"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Element>
        </div>
        <div>
          <Element id="text" is={GlobalContactTempTop} canvas>
            <div className="relative rounded-lg bg-white shadow-lg sm:p-12 max-w-7xl">
              <div className="mb-6">
                <TextInputElement
                  textInputProps={{
                    name: "fullName",
                    placeholder: "Your Name",
                    type: "text",
                    // className:
                    //   "text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none",
                  }}
                />
              </div>
              <div className="mb-6">
                <TextInputElement
                  textInputProps={{
                    name: "xyz",
                    placeholder: "Your Email",
                    type: "email",
                    // className:
                    //   "text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none",
                  }}
                />
              </div>
              <div className="mb-6">
                <TextInputElement
                  textInputProps={{
                    name: "phone",
                    placeholder: "Your Phone",
                    type: "text",
                    // className:
                    //   "text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none",
                  }}
                />
              </div>
              <div className="mb-6">
                <TextAreaElement
                  textInputProps={{
                    name: "Message",
                    placeholder: "Your Message",
                  }}
                />
              </div>
              <div>
                <Button text="GET APPOINTMENT" />
              </div>
            </div>
          </Element>
        </div>
      </div>
    </>
  );
};
const ContactTempsSettings = () => {
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
    state.nodes[state.nodes[data.linkedNodes["ContactTempsText"]].data.nodes[0]]
      .related.settings;
  return (
    <div>
      <CommonSettings />

      {textNodeSettings && createElement(textNodeSettings)}
    </div>
  );
};
GlobalContactTemp.craft = {
  related: {
    settings: ContactTempsSettings,
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
