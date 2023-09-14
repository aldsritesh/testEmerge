import { Text } from "../Text/Text";
import { useNode, Element } from "@craftjs/core";

import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "../CommonSettings";
import { Headline } from "../Text/Headline";

const elementName = "Order Confirmation";

const defaults = {
  backgroundColor: "#ffffff",
  borderRadius: 10,
};

interface Props extends ICommonSettingsProps {
  backgroundColor?: string;
}

export const OrderConfirmation = ({
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

      <div className="w-full">
        <Element id="orderText" is={OrderText} canvas>
          <Headline
            alignment="left"
            tagName="h2"
            text="Order Confirmation"
            fontSize={20}
            bold="font-semibold"
          />
        </Element>
        <div className="pt-1">
          <div className="flex justify-between pb-2 border-b border-b-gray-300">
            <div>
              <h3>Product</h3>
            </div>
            <div className="flex gap-2">
              <h3>Quantity</h3>
              <h3>Price</h3>
            </div>
          </div>

          <div className="flex justify-between pb-2 border-b border-b-gray-300 mt-2">
            <div>
              <p>Dynamic Item</p>
            </div>
            <div className="flex gap-2">
              <p>1</p>
              <p>$99</p>
            </div>
          </div>

          <div className="flex justify-between pb-2  mt-2">
            <div>
              <p className="font-semibold">Total</p>
            </div>
            <div className="flex gap-2">
              <p></p>
              <p className="font-semibold">$99</p>
            </div>
          </div>

          <div className="pb-2  mt-2">
            <div>
              <p>Shipping Details:</p>
              <p>
                Larry Page
                <br />
                4165 Hiney Road,
                <br />
                Las Vegas, Nevada, 89102
              </p>
            </div>
          </div>
        </div>
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

OrderConfirmation.craft = {
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
