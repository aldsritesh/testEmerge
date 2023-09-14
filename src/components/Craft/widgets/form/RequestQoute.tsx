import { useNode, Element } from "@craftjs/core";
import { useState } from "react";
import Divider from "../Divider";

import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "./CommonSettings";
import { BuilderImage } from "../Image";
import { Button } from "../Button";
import { Text } from "../Text/Text";
import {
  AcuContactusButton,
  AcuContactusText,
} from "../../Templates/AcupuntureTemplate/AcuContactus";
import { TextInputElement } from "./TextInput";

const elementName = "GlobalRequestForm";

const defaults = {
  backgroundColor: "#f9f9fa",
  borderRadius: 0,
};
interface IGlobalRequestFormProps extends ICommonSettingsProps {
  backgroundColor?: string;

  heading: string;
  subheading?: string;
}

export const GlobalRequestForm = ({
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
  shadow = "shadow-2xl",
  shadowColor = "black",
  heading,
  subheading,
}: IGlobalRequestFormProps) => {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const {
    hovered,
    connectors: { connect, drag },
  } = useNode((state) => ({
    hovered: state.events.hovered,
  }));
  return (
    <>
      <div
        ref={(ref: any) => connect(drag(ref))}
        className={` flex flex-col rounded-lg w-full  px-4   shadow hover:z-50  hover:outline-purple-500 hover:outline-1 ${shadow} ${shadowColor}
         ${borderType} relative `}
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
          <div className="absolute z-50 top-0 right-0 bg-blue-500 text-white text-xs px-1">
            {elementName}
          </div>
        )}

        <div className=" px-4 py-8 flex  flex-col  gap-3  bg-transparent  mb-4 md:mb-0  ">
          <div className="flex items-center justify-start gap-2   tracking-widest">
            <Element id="AcuProDivider" is={AcuContactusText} canvas>
              {/* <div className="w-10">
                <Divider borderColor="rgb(62, 62, 62)" />
              </div> */}
            </Element>
            <Element id="AcuContactus01" is={AcuContactusText} canvas>
              <Text
                alignment="left"
                bold="font-bold"
                text={heading}
                fontSize={28}
                color="#373737"
                italic
                borderRadius={0}
              />
            </Element>
          </div>
          {/* <Element id="AcuContactus02" is={AcuContactusText} canvas>
            <Text
              alignment="left"
              text=" Request services"
              fontSize={22}
              color="#000"
              font="bold"
              marginBottom={12}
            />
          </Element> */}
          {subheading && (
            <Element id="AcuContactus001" is={AcuContactusText} canvas>
              <Text
                alignment="left"
                text={subheading}
                fontSize={16}
                color="#a2a2ad"
                italic
                paddingLeft={12}
                borderRadius={0}
              />
            </Element>
          )}

          <div className=" flex flex-col ">
            <Element id="AcuContactus1" is={AcuContactusText} canvas>
              <TextInputElement
                textInputProps={{
                  name: "fullName",
                  placeholder: " Name",
                  type: "text",
                }}
                borderType="border-solid"
                borderColor="border-gray-800"
                borderWidth={1.5}
                borderRadius={0}
              />
            </Element>{" "}
            <Element id="AcuContactus3" is={AcuContactusText} canvas>
              <TextInputElement
                textInputProps={{
                  name: "Email",
                  placeholder: "Your Email",
                  type: "text",
                  // className:
                  //   "text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none",
                }}
                borderType="border-solid"
                borderColor="border-gray-400"
                borderWidth={1.5}
                borderRadius={0}
              />
            </Element>{" "}
            <Element id="AcuContactus4" is={AcuContactusText} canvas>
              <TextInputElement
                textInputProps={{
                  name: " Phone",
                  placeholder: "Your Phone",
                  type: "text",
                  // className:
                  //   "text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none",
                }}
                borderType="border-solid"
                borderColor="border-gray-400"
                borderWidth={1.5}
                borderRadius={0}
              />
            </Element>
            <Element id="AcuContactus5" is={AcuContactusText} canvas>
              <TextInputElement
                textInputProps={{
                  name: "Address",
                  placeholder: "Address",
                  type: "text",
                }}
                borderType="border-solid"
                borderColor="border-gray-400"
                borderWidth={1.5}
                borderRadius={0}
              />
            </Element>
          </div>

          <div className="w-fit">
            <Element id="AcuContactus6" is={AcuContactusButton} canvas>
              <Button
                backgroundColor="#c4be8d"
                color="black"
                text="GET QUOTE"
                marginTop={1}
                borderRadius={0}
                paddingLeft={16}
                paddingRight={16}
                marginBottom={20}
                size="btn-xl  "
              />
            </Element>
          </div>
        </div>
      </div>
    </>
  );
};
const GlobalRequestFormSettings: any = () => {
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
GlobalRequestForm.craft = {
  related: {
    settings: GlobalRequestFormSettings,
  },
  props: {
    ...getCommonSettingsProps(),
    background: defaults.backgroundColor,
    borderRadius: defaults.borderRadius,
    borderWidth: baseDefaults.borderWidth,
    marginTop: -34,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
  displayName: elementName,
};
export const GlobalRequestFormData = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};
GlobalRequestFormData.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === Text || BuilderImage
      ),
  },
};
