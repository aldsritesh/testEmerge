import { ITextProps, Text } from "../Text/Text";
import { useNode, Element } from "@craftjs/core";

import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "../CommonSettings";
import { Headline } from "../Text/Headline";
import { TextInputElement } from "@/components/FormCraft/widgets/TextInput";
import { SelectBoxInputElement } from "@/components/FormCraft/widgets/SelectInputElement";

const elementName = "Two step order";

const defaults = {
  backgroundColor: "#fff",
  borderRadius: 10,
};

interface Props extends ICommonSettingsProps {
  backgroundColor?: string;
}

export const FormElements = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

FormElements.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) =>
          incomingNode.data.type === TextInputElement ||
          incomingNode.data.type === Text ||
          incomingNode.data.type === Headline
      ),
  },
};

export const OrderTwoStep = ({
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
}: Props) => {
  const {
    hovered,
    connectors: { connect, drag },
  } = useNode((state) => ({
    hovered: state.events.hovered,
  }));

  const tbStyles = {
    backgroundColor: "#fff",
    borderColor: "#d9d6d6",
    borderWidth: 1,
  };

  return (
    <div
      ref={(ref: any) => connect(drag(ref))}
      className={`flex flex-wrap items-center hover:outline-purple-500 hover:outline ${shadow} ${borderType} relative`}
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
      <div className="w-full  ">
        <Element is={FormElements} canvas id="tbName">
          <div className="flex justify-around items-center border-b-[2px] border-b-newBlue mb-3">
            <div className="bg-white flex-col flex-wrap justify-between items-center border-r-[1px] mb-2  w-full lg:w-[1/2]">
              <Headline
                text="Shipping & Your Info"
                fontSize={16}
                color="#1258fc"
                bold="font-medium"
                tagName="h1"
                alignment={"center"}
              />
              <Headline
                text="Upgrade Your Order & Save!"
                fontSize={13}
                color="#263238"
                bold="font-medium"
                tagName="h3"
                alignment={"center"}
                marginBottom={10}
              />
            </div>
            <div className="bg-white flex-col flex-wrap justify-between items-center   w-full lg:w-[1/2] ">
              <Headline
                text="Shipping & Your Info"
                fontSize={16}
                color="#1258fc"
                bold="font-medium"
                tagName="h1"
                alignment={"center"}
              />
              <Headline
                text="Upgrade Your Order & Save!"
                fontSize={13}
                color="#263238"
                bold="font-medium"
                tagName="h3"
                alignment={"center"}
                marginBottom={10}
              />
            </div>
          </div>
          <TextInputElement
            textInputProps={{
              name: "companyName",
              placeholder: "Company Name",
              type: "text",
            }}
            {...tbStyles}
          />
          <TextInputElement
            textInputProps={{
              name: "fullName",
              placeholder: "Full Name",
              type: "text",
            }}
            {...tbStyles}
          />
          <TextInputElement
            textInputProps={{
              name: "email",
              placeholder: "Email Address",
              type: "text",
            }}
            {...tbStyles}
          />
          <TextInputElement
            textInputProps={{
              name: "phoneNo",
              placeholder: "Phone No",
              type: "text",
            }}
            {...tbStyles}
          />
          <div className="relative mb-4">
            <p className="font-semibold tex-base text-gray-600 uppercase">
              Shipping
            </p>
            <div className="  bg-[#e4e4e4] absolute h-[1.5px] left-[17%] top-[12px] w-[83%]"></div>
          </div>
          <TextInputElement
            textInputProps={{
              name: "address",
              placeholder: "Full Address",
              type: "text",
            }}
            {...tbStyles}
          />{" "}
          <TextInputElement
            textInputProps={{
              name: "city",
              placeholder: "City Name",
              type: "text",
            }}
            {...tbStyles}
          />{" "}
          <TextInputElement
            textInputProps={{
              name: "state",
              placeholder: "State/Province",
              type: "text",
            }}
            {...tbStyles}
          />{" "}
          <TextInputElement
            textInputProps={{
              name: "zipCode",
              placeholder: "Zip Code",
              type: "text",
            }}
            {...tbStyles}
          />
          <TextInputElement
            textInputProps={{
              name: "country",
              placeholder: "Select Country",
              type: "text",
            }}
            {...tbStyles}
          />
          <button className="mt-4 bg-newBlue px-4 py-3 w-full flex justify-center items-center gap-3 rounded-md">
            <span className="text-white font-medium text-base">Go To Step</span>
          </button>
          <div className="font-medium text-sm text-center mt-3 text-gray-500">
            We respect your privacy and information
          </div>
        </Element>
      </div>
    </div>
  );
};

const Settings: any = () => {
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

OrderTwoStep.craft = {
  related: {
    settings: Settings,
  },
  props: {
    ...getCommonSettingsProps(),
    background: defaults.backgroundColor,
    borderRadius: defaults.borderRadius,
    borderWidth: baseDefaults.borderWidth,
    marginTop: baseDefaults.marginTop,
    marginBottom: baseDefaults.marginBottom,
    marginLeft: baseDefaults.marginLeft,
    marginRight: baseDefaults.marginRight,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
  displayName: elementName,
};

export const OrderText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

OrderText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === Text
      ),
  },
};
