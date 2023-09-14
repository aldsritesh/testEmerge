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
import { kMaxLength } from "buffer";

const elementName = "One step order";

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

export const OrderOneStep = ({
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
            marginBottom={20}
          />
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
          <div className="relative mb-4">
            <p className="font-semibold tex-base text-gray-600 uppercase">
              Payment
            </p>
            <div className="  bg-[#e4e4e4] absolute h-[1.5px] left-[17%] top-[12px] w-[83%]"></div>
          </div>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th className="font-semibold tex-sm text-gray-600 uppercase bg-white border-b-[2px] pb-1.5">
                    Item
                  </th>
                  <th className="font-semibold tex-sm text-gray-600 uppercase bg-white border-b-[2px] pb-1.5">
                    Quantity
                  </th>
                  <th className="font-semibold tex-sm text-gray-600 uppercase bg-white border-b-[2px] pb-1.5">
                    Amount
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="font-normal  text-[13px] text-gray-500 py-2">
                    Dynamic Item
                  </td>
                  <td className="font-normal  text-[13px] text-gray-500 py-2">
                    {" "}
                    1
                  </td>
                  <td className="font-normal  text-[13px] text-gray-500 py-2">
                    $99
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-col w-full border-opacity-50 py-2 bg-white">
            <div className="divider font-medium tex-base text-gray-500 uppercase">
              Order Summary
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th className="font-semibold tex-sm text-gray-600 uppercase bg-white border-b-[2px] pb-1.5">
                    Item
                  </th>
                  <th className="font-semibold tex-sm text-gray-600 uppercase bg-white border-b-[2px] pb-1.5">
                    Quantity
                  </th>
                  <th className="font-semibold tex-sm text-gray-600 uppercase bg-white border-b-[2px] pb-1.5">
                    Amount
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="font-normal  text-[13px] text-gray-500 py-2 border-b-[2px] pt-2.5 pb-3">
                    Dynamic Item
                  </td>
                  <td className="font-normal  text-[13px] text-gray-500 py-2 border-b-[2px] pt-2.5 pb-3">
                    <SelectBoxInputElement
                      selectBoxBasicProps={{
                        name: "quantity",
                        placeholder: "Quantity",
                      }}
                      {...tbStyles}
                    />
                  </td>
                  <td className="font-normal  text-[13px] text-gray-500 py-2 border-b-[2px] pt-2.5 pb-3">
                    $99
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={2}
                    className="font-normal  text-[13px] text-gray-500 py-2 border-b-[2px] pt-2.5 pb-3"
                  >
                    Order Total
                  </td>

                  <td className="font-normal  text-[13px] text-gray-500 py-2 border-b-[2px] pt-2.5 pb-3">
                    $99
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="relative mb-4 mt-5">
            <p className="font-semibold tex-base text-gray-600 uppercase">
              Card information
            </p>
            <div className="  bg-[#e4e4e4] absolute h-[1.5px] left-[35%] top-[12px] w-[50%]"></div>
          </div>
          <div className="flex justify-between items-center gap-3">
            <div className="w-full lg:w-[50%]">
              <TextInputElement
                textInputProps={{
                  name: "cardNo",
                  placeholder: "Enter Card No",
                  type: "text",
                  minLength: 16,
                  maxLength: 16,
                }}
                {...tbStyles}
              />
            </div>
            <div className="w-1/2 lg:w-[25%]">
              <TextInputElement
                textInputProps={{
                  name: "expiryDate",
                  placeholder: "Enter Expiry",
                  type: "month",
                }}
                {...tbStyles}
              />
            </div>
            <div className="w-1/2 lg:w-[25%]">
              <TextInputElement
                textInputProps={{
                  name: "cvc",
                  placeholder: "Enter CVC",
                  type: "number",
                  minLength: 3,
                  maxLength: 4,
                }}
                {...tbStyles}
              />
            </div>
          </div>
          <button className="mt-4 bg-newBlue px-4 py-3 w-full flex justify-center items-center gap-3 rounded-md">
            <span className="text-white font-medium text-base">
              Complete Order
            </span>
          </button>
          <div className="font-medium text-sm text-center mt-3 text-gray-500 uppercase">
            * 100% Secure Payments *
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

OrderOneStep.craft = {
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
