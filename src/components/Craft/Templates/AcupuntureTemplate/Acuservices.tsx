import { Text } from "../../../Craft/widgets/Text/Text";
import { useNode, Element, useEditor } from "@craftjs/core";
import { BuilderImage } from "../../../Craft/widgets/Image";
import { useState } from "react";
const elementName = "AcuFeaturedServices";
import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "../../../Craft/widgets/CommonSettings";
import LeftFlyOut from "@/components/LeftLayout";
import { TopbarSection } from "../../TopBarSections";

import { RxDragHandleDots2 } from "react-icons/rx";
import { ServicesCard } from "../../widgets/ServicesCard";
const defaults = {
  backgroundColor: "#fff",
  borderRadius: 0,
};

interface card {
  id: number;
  name: string;
  data: string;
  image: string;
}

interface IAcuFeaturedServicesProps extends ICommonSettingsProps {
  backgroundColor?: string;
  cardsData?: card[];
}
export const AcuFeaturedServices = ({
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
  cardsData = [],
}: IAcuFeaturedServicesProps) => {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const {
    hovered,
    connectors: { connect, drag },
  } = useNode((state) => ({
    hovered: state.events.hovered,
  }));

  return (
    <>
      <LeftFlyOut
        visibility={openCreateModal}
        onClose={() => {
          setOpenCreateModal(false);
        }}
      >
        <TopbarSection />
      </LeftFlyOut>
      <div
        ref={(ref: any) => connect(drag(ref))}
        className={`w-full flex  items-center justify-center hover:z-50  hover:outline-purple-500 hover:outline ${shadow} ${borderType} relative`}
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
            <div className="absolute z-50 top-0 right-0 bg-white text-white text-xs px-1">
              {elementName}
            </div>
            <div
              className="absolute bottom-[-2%] right-[50%] z-50 bg-orange-500 text-white text-xs px-1"
              onClick={() => {
                setOpenCreateModal(true);
              }}
            >
              +
            </div>
          </>
        )}
        {cardsData.map((cardsData: any, index: number) => (
          <div key={index} className="w-[12.5rem]">
            <Element
              is={AcuFeaturedServicesText}
              id={`Cards${cardsData.id}`}
              canvas
            >
              <div
                className={`${
                  cardsData.id == 2 ? "pb-8" : cardsData.id == 0 && "pb-8"
                }`}
              >
                <ServicesCard
                  borderRadius={0}
                  heading={cardsData.name}
                  desc={cardsData.data}
                  imagesrc={cardsData.image}
                />
              </div>
            </Element>
          </div>
        ))}
      </div>
    </>
  );
};
const AcuFeaturedServicesSettings: any = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  const { connectors, query } = useEditor();
  return (
    <div className="w-[95%] ">
      <div
        className=" shadow   py-3 border-gray-200 border-[1px] bg-white rounded-md cursor-pointer"
        ref={(ref: any) =>
          connectors.create(
            ref,
            <ServicesCard
              backgroundColor="white"
              heading="Heading"
              desc="Description"
              imagesrc={require("../../../../../public/images/chiro/chiroDummy.jpg")}
            />
          )
        }
      >
        <div className="flex items-center gap-2">
          <div>
            <RxDragHandleDots2 className="text-gray-500 h-6 w-6" />
          </div>

          <h6 className="text-gray-600 text-lg font-medium text-center pl-2">
            New Service Card
          </h6>
        </div>
      </div>

      <div className="w-full">
        <CommonSettings />
      </div>
    </div>
  );
};
AcuFeaturedServices.craft = {
  related: {
    settings: AcuFeaturedServicesSettings,
  },
  props: {
    ...getCommonSettingsProps(),
    background: defaults.backgroundColor,
    borderRadius: defaults.borderRadius,
    borderWidth: baseDefaults.borderWidth,
    marginTop: baseDefaults.marginTop,
    marginLeft: baseDefaults.marginLeft,
    marginRight: baseDefaults.marginRight,
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 10,
    paddingRight: 10,
    cardsData: [
      {
        id: 0,
        name: "Acupuncture",
        data: " new font pairing Lor e  quis ut? ",
        image: require("../../../../../public/images/Acupunture/acupuncture.png"),
        desc: "abc",
      },
      {
        id: 1,
        name: "Massage Therapy ",
        data: "Lorem ipsum dolor sit aec   mattis,",
        image: require("../../../../../public/images/Acupunture/massages.png"),
        desc: "abc",
      },

      {
        id: 2,
        name: "Aroma Therapy",
        data: "Lorem ipsum dolor sit anec   mattis,",
        image: require("../../../../../public/images/Acupunture/aroma.png"),
        desc: "abc",
      },
      {
        id: 3,
        name: "Massage",
        data: "Lorem ipsum dolor sit ame nec ul ttis,",
        image: require("../../../../../public/images/Acupunture/hydro.png"),
        desc: "abc",
      },
    ],
  },
  displayName: elementName,
};
export const AcuFeaturedServicesText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};
AcuFeaturedServicesText.craft = {
  rules: {
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) =>
          incomingNode.data.type === Text ||
          incomingNode.data.type === BuilderImage ||
          incomingNode.data.type === ServicesCard
      ),
  },
};
