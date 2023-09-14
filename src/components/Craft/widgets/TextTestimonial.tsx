import { useNode, Element } from "@craftjs/core";

import { useEffect, useState } from "react";
import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "./CommonSettings";
import { Text } from "./Text/Text";
import { AiFillStar } from "react-icons/ai";
import Divider from "./Divider";
import { SelectBox } from "./Select";
import { useRecoilValue } from "recoil";
import { selectDataState } from "@/atoms/SelectData";
import { number } from "prop-types";

const elementName = "TextTestimonial";

const defaults = {
  backgroundColor: "#5D4FFF",
  borderRadius: 8,
};

interface ITextTestimonialProps extends ICommonSettingsProps {
  backgroundColor?: string;
  heading: string;
  desc: string;
  ratingOutOf5: string;
  name: string;
}

export const TextTestimonial = ({
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
  heading,
  desc,
  ratingOutOf5,
  name,
}: ITextTestimonialProps) => {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const {
    hovered,
    connectors: { connect, drag },
  } = useNode((state) => ({
    hovered: state.events.hovered,
  }));

  const selectBoxItem = useRecoilValue(selectDataState);
  const RatingNo = Number(selectBoxItem);
  console.log("state", selectBoxItem);
  return (
    <>
      <div
        ref={(ref: any) => connect(drag(ref))}
        className={` flex flex-col items-center   justify-center px-2   hover:z-50 hover:outline-purple-500 hover:outline hover:outline-1 ${shadow} ${borderType} relative w-full`}
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
          height: "15rem",
          width: "15rem",
        }}
      >
        {hovered && (
          <>
            <div className="absolute z-50 top-0 right-0 bg-blue-500 text-white text-xs px-1">
              {elementName}
            </div>
          </>
        )}
        <Element is={TextTestimonialData} id="TextTestimonialHeading">
          <Text
            alignment="left"
            color="white"
            bold="font-semibold"
            fontSize={28}
            text={heading}
          />
        </Element>
        <div className=" py-3">
          <Element is={TextTestimonialData} id="TextTestimonialDesc">
            <Text
              alignment="left"
              color="white"
              bold="font-medium"
              fontSize={14}
              text={desc}
            />
          </Element>
        </div>
        <div className=" w-full">
          <Element is={TextTestimonialData} id="TextTestimonialDivider">
            <Divider />
          </Element>
        </div>

        <div className="flex justify-between w-11/12 py-2">
          <div className="flex justify-between items-center gap-2 ">
            <div className="flex gap-[0.01rem] text-white">
              <AiFillStar
                className={`scale-90 ${
                  RatingNo >= 1 ? "visible" : "invisible"
                }`}
              />
              <AiFillStar
                className={`scale-90 ${
                  RatingNo >= 2 ? "visible" : "invisible"
                }`}
              />
              <AiFillStar
                className={`scale-90 ${
                  RatingNo >= 3 ? "visible" : "invisible"
                }`}
              />
              <AiFillStar
                className={`scale-90 ${
                  RatingNo >= 4 ? "visible" : "invisible"
                }`}
              />
              <AiFillStar
                className={`scale-90 ${
                  RatingNo >= 5 ? "visible" : "invisible"
                }`}
              />
            </div>

            <div className="flex  justify-center ">
              <Element is={TextTestimonialData} id="TextTestimonialRating">
                <SelectBox
                  alignment="left"
                  color="white"
                  bold="font-medium"
                  fontSize={14}
                  text={ratingOutOf5}
                />
              </Element>
              <span className="text-[14px] text-white font-medium">/5</span>
            </div>
          </div>
          <div>
            <Element is={TextTestimonialData} id="TextTestimonialName">
              <Text
                alignment="left"
                color="white"
                bold="font-medium"
                fontSize={14}
                text={name}
              />
            </Element>
          </div>
        </div>
      </div>
    </>
  );
};

const TextTestimonialSettings: any = () => {
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

TextTestimonial.craft = {
  related: {
    settings: TextTestimonialSettings,
  },
  props: {
    ...getCommonSettingsProps(),
    background: defaults.backgroundColor,
    borderRadius: 10,
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

export const TextTestimonialData = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

TextTestimonialData.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === Text
      ),
  },
};
