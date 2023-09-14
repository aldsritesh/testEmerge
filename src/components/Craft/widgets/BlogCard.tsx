import { useNode, Element } from "@craftjs/core";

import { useState } from "react";
import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "./CommonSettings";
import LeftFlyOut from "@/components/LeftLayout";
import { TopbarSection } from "../TopBarSections";
import { Text } from "./Text/Text";
import { BuilderImage } from "./Image";
import Social from "./Social";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Button } from "./Button";

const elementName = "BlogCard";

const defaults = {
  backgroundColor: "white",
  borderRadius: 8,
  borderWidth:2,
};

interface IBlogCardProps extends ICommonSettingsProps {
  backgroundColor?: string;
  image: string;
  heading: string;
  date: string;
  desc: string;

}

export const BlogCard = ({
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
  shadow = "shadow",
  shadowColor = "transparent",
  image,
  heading,
  date,
  desc,
 
}: IBlogCardProps) => {
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
        className={`  rounded-lg hover:z-50  hover:outline-purple-500 hover:outline hover:outline-1 carousel-item card flex flex-col justify-center  ${shadow} ${borderType} relative `}
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
           
          </>
        )}

                  <div className="flex gap-4 ">
                    <Element
                      id="BlogCardImage"
                      is={BlogCardData}
                      canvas
                    >
                      <BuilderImage
                        borderRadius={10}
                        width={170}
                        height={200}
                        imageSrc={image}
                      />
                    </Element>
                    <div className="flex flex-col gap-2 justify-center">
                    <Element
                      id="BlogCardText"
                      is={BlogCardData}
                      canvas
                    >
                      <Text
                        alignment="left"
                        text={heading}
                        fontSize={17}
                        bold="font-semibold"
                        color="#181443"
                      />
                
                      <Text
                        color="#645F80"
                        alignment="left"
                        fontSize={12}
                        text={date}
                      />
                      <Text
                        color="#645F80"
                        alignment="left"
                        fontSize={12}
                        text={desc}
                      />
                      </Element>

<div className="w-fit">

                      <Element id="BlogButton" is={BlogCardData} canvas>
                        <Button
                          backgroundColor="transparent"
                          color="#5D4FFF"
                          bold="font-medium"
                          text="Read More"
                          borderRadius={10}
                          paddingLeft={0}
                        />
                      </Element>
</div>
                    </div>
                  </div>
                </div>
    
    </>
  );
};

const BlogCardSettings: any = () => {
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

BlogCard.craft = {
  related: {
    settings: BlogCardSettings,
  },
  props: {
    ...getCommonSettingsProps(),
    background: defaults.backgroundColor,
    borderRadius: defaults.borderRadius,
    borderWidth: defaults.borderWidth,
    marginTop: baseDefaults.marginTop,
    marginLeft: baseDefaults.marginLeft,
    marginRight: baseDefaults.marginRight,
    paddingTop: baseDefaults.paddingTop,
    paddingBottom: baseDefaults.paddingBottom,
    paddingLeft: baseDefaults.paddingLeft,
    paddingRight:baseDefaults.paddingRight,
  },
  displayName: elementName,
};

export const BlogCardData = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

BlogCardData.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === Text || BuilderImage || Button
      ),
  },
};
