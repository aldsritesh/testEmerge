import { Text } from "../../widgets/Text/Text";
import { useNode, Element, useEditor } from "@craftjs/core";
import {
  baseDefaults,
  CommonSettings,
  getCommonSettingsProps,
  ICommonSettingsProps,
} from "../../widgets/CommonSettings";
import { createElement, useState } from "react";
import LeftFlyOut from "@/components/LeftLayout";
import { TopbarSection } from "../../TopBarSections";
import { Headline } from "../../widgets/Text/Headline";
import { BuilderImage } from "../../widgets/Image";
import { ClientSaysCard } from "../../widgets/ClientSaysCard";
import { ReviewsCard } from "../../widgets/ReviewsCard";
import Image from "next/image";
import Divider from "../../widgets/Divider";
import { PlusIcon } from "@heroicons/react/24/solid";

const elementName = "AcuReviews";

const defaults = {
  backgroundColor: "",
  borderColor: "#2F333A",
  borderRadius: 0,
};
interface card {
  id: number;
  name: string;
  clientName: string;
  desc: string;
}

interface IAcuReviewsProps extends ICommonSettingsProps {
  size?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;
  cardsData?: card[];
}

export const AcuReviews = ({
  size,
  backgroundColor = "bg-transparent",
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
  cardsData = [],
}: IAcuReviewsProps) => {
  const [openCreateModal, setOpenCreateModal] = useState(false);

  // const [cardSlide, setCardSlide] = useState < any > [];
  const {
    connectors: { connect, drag },
    hovered,
  }: any = useNode((state) => ({ hovered: state.events.hovered }));

  const AcuReviewsData = [
    {
      id: 1,
      name: "Acupuncture",
      clientName: "Client",
      desc: "Sed malesuada, diam eu fringilla consectetur, sem enim condimentum purus, nec interdum ligula magna consectetur dolor. Sed elementum risus ut diam tincidunt",
      image: require("../../../../../public/images/Acupunture/c3.jpg"),
    },
    {
      id: 2,
      name: "Acupuncture",
      clientName: "Client",
      desc: "Sed malesuada, diam eu fringilla consectetur, sem enim condimentum purus, nec interdum ligula magna consectetur dolor. Sed elementum risus ut diam tincidunt",
      image: require("../../../../../public/images/Acupunture/c2.jpg"),
    },
    {
      id: 3,
      name: "Acupuncture",
      clientName: "Client",
      desc: "Sed malesuada, diam eu fringilla consectetur, sem enim condimentum purus, nec interdum ligula magna consectetur dolor. Sed elementum risus ut diam tincidunt",
      image: require("../../../../../public/images/Acupunture/c3.jpg"),
    },
    {
      id: 4,
      name: "Acupuncture",
      clientName: "Client",
      desc: "Sed malesuada, diam eu fringilla consectetur, sem enim condimentum purus, nec interdum ligula magna consectetur dolor. Sed elementum risus ut diam tincidunt",
      image: require("../../../../../public/images/Acupunture/c2.jpg"),
    },
    {
      id: 5,
      name: "Acupuncture",
      clientName: "Client",
      desc: "Sed malesuada, diam eu fringilla consectetur, sem enim condimentum purus, nec interdum ligula magna consectetur dolor. Sed elementum risus ut diam tincidunt",
      image: require("../../../../../public/images/Acupunture/c1.jpg"),
    },
  ];

  return (
    <>
      <div
        ref={(ref: any) => connect(drag(ref))}
        className={` flex flex-wrap items-center   bg-[#464a51] hover:z-20 hover:outline-purple-500 hover:outline ${shadow} ${borderType} relative`}
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
            <div className="absolute z-40 top-0 right-0 bg-blue-500 text-white text-xs px-1">
              {elementName}
            </div>
            <div
              className="absolute bottom-[2%] right-[50%] z-50 bg-orange-500 text-white text-xs px-1"
              onClick={() => {
                setOpenCreateModal(true);
              }}
            >
              +
            </div>
          </>
        )}

        <div className="    tracking-wider overflow-hidden  ">
          <div className="flex items-center justify-start gap-2  ml-4  tracking-widest">
            <Element id="AcuProDivider" is={AcuReviewsText} canvas>
              <div className="w-5">
                <Divider borderColor="#C59D7E" />
              </div>
            </Element>
            <Element id="AcuContactus01" is={AcuReviewsText} canvas>
              <Text
                alignment="left"
                text="REVIEWS"
                fontSize={16}
                color="#C59D7E"
              />
            </Element>
          </div>

          <div className="mb-3 w-fit pl-4">
            <Element id="AcuReviewDesc" is={AcuReviewsText} canvas>
              <Text
                alignment="left"
                text="Оur Clients Say"
                fontSize={36}
                bold="font-normal"
                color="#fff"
                paddingBottom={3}
              />
            </Element>
          </div>

          <div className="carousel  ">
            {[...AcuReviewsData, ...cardsData]?.map(
              (item: any, index: number) => (
                <div
                  key={index}
                  className="carousel-item   w-[50%] md:1/4  mx-4"
                >
                  <Element id={`cards${index + 1}`} is={AcuReviewsText} canvas>
                    <ReviewsCard
                      borderRadius={0}
                      name={item?.name}
                      desc={item?.desc}
                      src={item.image}
                      clientName={item.clientName}
                      ratingOutOf5="3"
                    />
                  </Element>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const AcuReviewsSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));
  const handleAddNewItem = () => {
    setProp((props: any) =>
      props.cardsData.push({
        id: 11,
        name: "Acupuncture",
        clientName: "Client",
        desc: "Sed malesuada, diam eu fringilla consectetur, sem enim condimentum purus, nec interdum ligula magna consectetur dolor. Sed elementum risus ut diam tincidunt",
        image: require("../../../../../public/images/Acupunture/c2.jpg"),
      })
    );
  };
  return (
    <div className="w-full relative">
      <div className="mb-4 mt-2 flex flex-col gap-1">
        <label className="text-sm text-gray-400 ">News Cards</label>
        <div className="flex flex-col gap-2">
          {props.cardsData.map((item: any, index: number) => (
            <div key={index} className="flex justify-between items-center">
              <div className="text-gray-500">{`Card ${index}`}</div>
            </div>
          ))}

          <button
            className=" flex justify-center items-center border bg-[#B5825B] rounded-md mt-2 text-white font-semibold p-2"
            onClick={handleAddNewItem}
          >
            <PlusIcon className="w-4 h-4" />
            Add Item
          </button>
        </div>
      </div>

      <div className="w-full">
        <CommonSettings />
      </div>
    </div>
  );
};

AcuReviews.craft = {
  related: {
    settings: AcuReviewsSettings,
  },
  props: {
    ...getCommonSettingsProps(),
    background: defaults.backgroundColor,
    borderRadius: defaults.borderRadius,
    borderColor: defaults.borderColor,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 20,
    paddingBottom: 10,
    marginTop: 0,
    cardsData: [
      {
        id: 10,
        name: "Acupuncture",
        clientName: "Client",
        desc: "Sed malesuada, diam eu fringilla consectetur, sem enim condimentum purus, nec interdum ligula magna consectetur dolor. Sed elementum risus ut diam tincidunt",
        image: require("../../../../../public/images/Acupunture/c2.jpg"),
      },
    ],
  },
  displayName: elementName,
};

export const AcuReviewsText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};
AcuReviewsText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) =>
          incomingNode.data.type === Text ||
          //   incomingNode.data.type === ServicesImageCard ||
          incomingNode.data.type === BuilderImage
      ),
  },
};
