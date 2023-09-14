import { useNode, Element, useEditor } from "@craftjs/core";
import { Text } from "../Text/Text";
import { createElement, useState } from "react";
import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "../CommonSettings";
import { BuilderImage } from "../Image";
import { TextInputElement } from "@/components/FormCraft/widgets/TextInput";
import { Button } from "../Button";

const elementName = "Newsletter";

const defaults = {
  backgroundColor: "#ffffff",
  borderColor: "#313641",
  borderRadius: 10,
};

interface INewsletterProps extends ICommonSettingsProps {
  size?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;
}

export const NewsletterText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

NewsletterText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every((incomingNode: any) => false),
  },
};

export const Newsletter = ({
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
}: INewsletterProps) => {
  const tbStyles = {
    backgroundColor: "#fff",
    borderColor: "#d9d6d6",
    borderWidth: 1,
  };
  // const [showResults, setShowResults] = useState(false);

  // const handleClick = () => {
  //   setShowResults(true);
  // };

  const {
    connectors: { connect, drag },
    hovered,
  } = useNode((state) => ({ hovered: state.events.hovered }));

  // console.log(showResults);
  return (
    <div ref={(ref: any) => connect(drag(ref))}>
      <div
        className={`w-full ${size} ${
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
      >
        {hovered && (
          <div className="absolute top-0 right-0 bg-purple-500 text-white text-[10px] px-1 z-10 capitalize">
            {elementName}
          </div>
        )}
        <Element id="NewsletterText" is={NewsletterText} canvas>
          <nav className="flex m-2" aria-label="Newsletter">
            <div className="p-5">
              <div>
                <Text
                  alignment="left"
                  text="Subscribe to our Newsletter"
                  fontSize={17}
                  bold="font-semibold"
                  color="#000000"
                  backgroundColor="#ffffff"
                />

                <div className="pt-3">
                  <Text
                    alignment="left"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore delectus 
                    quia commodi beatae, possimus fuga nisi saepe fugit atque, vitae amet molestias distinctio 
                    ipsa non repellat quasi sunt numquam ut?"
                    fontSize={13}
                    color="#000000"
                    backgroundColor="#ffffff"
                  />
                </div>

                <div className="md:flex justify-center mt-4">
                  <div className="md:w-[70%]">
                    <div>
                      <TextInputElement
                        textInputProps={{
                          name: "email",
                          placeholder: "Email Address",
                          type: "text",
                        }}
                        {...tbStyles}
                      />
                    </div>
                  </div>

                  <div className="md:w-[30%]">
                    <div>
                      <div className="flex justify-center items-center">
                        <Button text="SUBSCRIBE" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </Element>
      </div>
    </div>
  );
};

const NewsletterSettings = () => {
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
    state.nodes[state.nodes[data.linkedNodes["NewsletterText"]].data.nodes[0]]
      .related.settings;
  return (
    <div>
      <CommonSettings />

      {textNodeSettings && createElement(textNodeSettings)}
    </div>
  );
};

Newsletter.craft = {
  related: {
    settings: NewsletterSettings,
  },
  props: {
    ...getCommonSettingsProps(),
    background: defaults.backgroundColor,
    borderRadius: defaults.borderRadius,
    borderColor: defaults.borderColor,
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 0,
    marginBottom: 0,
  },
  displayName: elementName,
};
