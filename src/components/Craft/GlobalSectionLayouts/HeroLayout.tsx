import { Text } from "../../Craft/widgets/Text/Text";
import { Button } from "../../Craft/widgets/Button";
import { useNode, Element } from "@craftjs/core";
import { BuilderImage } from "../../Craft/widgets/Image";

const elementName = "Hero Layout";

import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "../../Craft/widgets/CommonSettings";
import { Headline } from "../../Craft/widgets/Text/Headline";

const defaults = {
  backgroundColor: "#ffffff",
  borderRadius: 10,
};

interface HeroLayoutProps extends ICommonSettingsProps {
  backgroundColor?: string;
}

export const GlobalHeroLayout = ({
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
}: HeroLayoutProps) => {
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

      <div className="w-full md:w-1/2 order-2 md:order-1">
        <Element id="heroTitle" is={GlobalHeroText} canvas>
          <Headline
            alignment="left"
            tagName="h2"
            text="Hero Title"
            fontSize={26}
            bold="font-semibold"
          />
        </Element>
        <div className="pt-5">
          <Element id="heroSubtitle" is={GlobalHeroText} canvas>
            <Text
              alignment="left"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              fontSize={14}
            />
          </Element>
        </div>
        <div className="pt-4 md:pt-16 w-fit">
          <Element id="heroButton" is={GlobalHeroButton} canvas>
            <Button text="Learn More" />
          </Element>
        </div>
      </div>
      <div className="w-full md:w-1/2 pl-4 order-1 md:order-2 mb-4 md:mb-0">
        <Element id="heroImage" is={GlobalHeroButton} canvas>
          <BuilderImage />
        </Element>
      </div>
    </div>
  );
};

const HeroLayoutSettings: any = () => {
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

GlobalHeroLayout.craft = {
  related: {
    settings: HeroLayoutSettings,
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
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
  displayName: elementName,
};

export const GlobalHeroText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

GlobalHeroText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === Text
      ),
  },
};

export const GlobalHeroButton = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return <div ref={connect}>{children}</div>;
};

GlobalHeroButton.craft = {
  rules: {
    // Only accept Buttons
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === Button
      ),
  },
};
