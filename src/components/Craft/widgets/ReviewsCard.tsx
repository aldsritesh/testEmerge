import { useNode, Element, useEditor } from "@craftjs/core";

import { useEffect, useState } from "react";
import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "./CommonSettings";
import { Text } from "./Text/Text";
import { AiFillStar } from "react-icons/ai";
import { SelectBox } from "./Select";
import { useRecoilState, useRecoilValue } from "recoil";
import { selectDataState } from "@/atoms/SelectData";
import { BuilderImage } from "./Image";
import { AcuReviewsText } from "../Templates/AcupuntureTemplate/AcuReviews";
import Divider from "./Divider";
import { MenuItem, Select } from "@mui/material";

const elementName = "ReviewsCard";

const Opt = ["1", "2", "3", "4", "5"];
const defaults = {
  backgroundColor: "bg-transparent",
  borderRadius: 8,
  Options: Opt,
};

interface IReviewsCardProps extends ICommonSettingsProps {
  backgroundColor?: string;
  desc: string;
  src: string;
  name: string;
  ratingOutOf5: string;
  clientName: string;
  Options?: any;
}

export const ReviewsCard = ({
  backgroundColor = defaults.backgroundColor,
  borderRadius = defaults.borderRadius,
  borderColor = "border-[#313641]",
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
  desc,
  src,
  name,
  ratingOutOf5,
  clientName,
}: IReviewsCardProps) => {
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
    <div
      ref={(ref: any) => connect(drag(ref))}
      className={` flex flex-col items-center  justify-center  hover:z-50   w-[24vw]   top-0 left-0  border-white    
       hover:outline-1  ${borderType} relative w-full     hover:outline-blue-500 hover:outline`}
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
          <div className=" absolute top-0 right-0 bg-blue-500 text-white text-xs px-1">
            {elementName}
          </div>
        </>
      )}

      <Element is={AcuReviewsText} id="cardimage" canvas>
        <div className="w-fit mx-auto z-50  my-2 ">
          <BuilderImage
            width={70}
            height={70}
            borderRadius={45}
            imageSrc={src}
          />
        </div>
      </Element>

      <div className="w-fit mx-auto">
        <Element is={AcuReviewsText} id="cardName">
          <Text
            alignment="center"
            color="white"
            bold="font-medium"
            fontSize={16}
            text={name}
            marginTop={10}
          />
        </Element>
      </div>

      <div className="   w-fit   ">
        <Element is={AcuReviewsText} id="carddesc">
          <Text
            alignment="center"
            color="white"
            fontSize={12}
            text={desc}
            paddingLeft={8}
            paddingRight={8}
            marginBottom={2}
            marginTop={2}
          />
        </Element>
      </div>

      <div className="flex justify-between w-full py-2 border-t border-white">
        <div className="mx-2 ">
          <Element is={ReviewsCardData} id="ReviewsCardDataName">
            <Text
              alignment="left"
              color="white"
              bold="font-medium"
              fontSize={18}
              text={clientName}
            />
          </Element>
        </div>

        <div className="flex gap-[0.1rem] text-[#C59D7E] items-center mx-2">
          <AiFillStar
            className={`scale-125 ${RatingNo >= 1 ? "visible" : "invisible"}`}
          />
          <AiFillStar
            className={`scale-125 ${RatingNo >= 2 ? "visible" : "invisible"}`}
          />
          <AiFillStar
            className={`scale-125 ${RatingNo >= 3 ? "visible" : "invisible"}`}
          />
          <AiFillStar
            className={`scale-125 ${RatingNo >= 4 ? "visible" : "invisible"}`}
          />
          <AiFillStar
            className={`scale-125 ${RatingNo >= 5 ? "visible" : "invisible"}`}
          />
        </div>
      </div>
    </div>
  );
};

const ReviewsCardSettings: any = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));
  const { state } = useEditor((state) => {
    return { state };
  });

  const [selectBoxItem, SetSelectBoxItem] = useRecoilState(selectDataState);
  {
    console.log("valueText", props.text);
  }
  return (
    <div className="w-full">
      <div className="mb-4 mt-2 flex flex-col gap-1">
        <label className="text-sm text-black font-semibold">Select Box</label>

        <Select
          value={props.text == undefined ? "3" : props.text}
          onChange={(e) => {
            setProp((props: any) => (props.text = e.target.value));
            SetSelectBoxItem(e.target.value);
          }}
        >
          {props.Options.map((item: any, index: number) => (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </div>
      <CommonSettings />
    </div>
  );
};

ReviewsCard.craft = {
  related: {
    settings: ReviewsCardSettings,
  },
  props: {
    ...getCommonSettingsProps(),
    background: defaults.backgroundColor,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    marginTop: baseDefaults.marginTop,
    marginLeft: baseDefaults.marginLeft,
    marginRight: baseDefaults.marginRight,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    Options: defaults.Options,
  },
  displayName: elementName,
};

export const ReviewsCardData = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="">
      {children}
    </div>
  );
};

ReviewsCardData.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === Text
      ),
  },
};
