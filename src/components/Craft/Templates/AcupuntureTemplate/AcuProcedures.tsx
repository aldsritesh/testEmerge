import { Text } from "../../../Craft/widgets/Text/Text";
import { useNode, Element, useEditor } from "@craftjs/core";
import { BuilderImage } from "../../../Craft/widgets/Image";
import { InputHTMLAttributes, useState } from "react";
import Divider from "../../widgets/Divider";
import { PencilIcon, PlusIcon } from "@heroicons/react/24/solid";

const elementName = "AcuProcedures";

import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "../../../Craft/widgets/CommonSettings";

import LeftFlyOut from "@/components/LeftLayout";
import { TopbarSection } from "../../TopBarSections";

import { TeamCard } from "../../widgets/TeamCard";
import { Button } from "../../widgets/Button";
import { ServiceRateCard } from "../../widgets/ServiceRateCard";
import src from "react-select/dist/declarations/src";

const defaults = {
  backgroundColor: "#FAFAFA",
  borderRadius: 0,
};

interface IAcuProceduresProps extends ICommonSettingsProps {
  backgroundColor?: string;
  itemsBasicProps?: InputHTMLAttributes<HTMLInputElement>;
  cardData?: {
    cardDataProps?: InputHTMLAttributes<HTMLInputElement>;
    id?: number;
    heading?: string;
    desc?: string;
    image?: any;
    button?: string;
  }[];
  items?: {
    itemsProps?: InputHTMLAttributes<HTMLInputElement>;
    name?: string;
    post?: string;
    image?: any;
  }[];
}

export const AcuProcedures = ({
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
  cardData = [],
}: IAcuProceduresProps) => {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const {
    connectors: { connect, drag },
    hasSelectedNode,
    hovered,
    actions: { setProp },
  } = useNode((state) => ({
    hasSelectedNode: state.events.selected,
    hasDraggedNode: state.events.dragged,
    isActive: state.events.selected,
    hovered: state.events.hovered,
    selected: state.related,
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
        className={` flex flex-wrap items-center  hover:z-50  hover:outline-purple-500 hover:outline ${shadow} ${borderType} relative`}
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

        <div className="w-full flex pt-2 pb-4 justify-between mt-3">
          <div>
            <div className="w-fit flex items-center  justify-start gap-1">
              {/* <div className="w-10 h-[1.5px] bg-slate-500 "></div> */}
              <Element id="AcuAboutusLine" is={AcuProceduresText} canvas>
                <div className="w-10">
                  <Divider borderColor="rgb(62, 62, 62)" />
                </div>
              </Element>
              <Element
                id="AcuProceduresBannerTag"
                is={AcuProceduresText}
                canvas
              >
                <Text
                  alignment="left"
                  text="PROCEDURES"
                  fontSize={14}
                  color="rgb(62, 62, 62)"
                />
              </Element>
            </div>
            <Element id="AcuProceduresTitle" is={AcuProceduresText} canvas>
              <div className="w-fit">
                <Text
                  alignment="left"
                  lineHeight={1.1}
                  text="Popular Procedures"
                  bold="font-medium"
                  fontSize={33}
                  color="#473B2A"
                />
              </div>
            </Element>
          </div>
          <div className="w-fit">
            <Element is={AcuProceduresText} id="AcuProceduresButton" canvas>
              <Button
                backgroundColor="#B5825B"
                color="white"
                text="View All"
                borderRadius={0}
                paddingRight={35}
                paddingLeft={35}
              />
            </Element>
          </div>
        </div>

        <div className="flex gap-4 carousel py-4   bg-transparent">
          {cardData.map((item: any, index: number) => (
            <Element
              key={index}
              is={AcuProceduresText}
              id={`AcuProcedures${index}`}
              canvas
            >
              <ServiceRateCard
                Heading={item.heading}
                Desc={item.desc}
                image={item.image}
                button={item.button}
              />
            </Element>
          ))}
        </div>
      </div>
    </>
  );
};

const AcuProceduresSettings: any = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));
  const { connectors, query } = useEditor();
  const handleAddNewItem = () => {
    setProp((props: any) =>
      props.cardData.push({
        id: 4,
        heading: "Herbal Spa",
        desc: "Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball...",
        image: require("../../../../../public/images/Acupunture/Service4.jpg"),
        button: "Read More",
      })
    );
  };

  return (
    <>
      <div className="flex flex-col gap-4 carousel py-4   bg-transparent ">
        {props.cardData.map((item: any, index: number) => (
          // <Element
          //   key={index}
          //   is={AcuProceduresText}
          //   id={`AcuProcedures${index}`}
          //   canvas
          // >
          //   <ServiceRateCard
          //     Heading={item.heading}
          //     Desc={item.desc}
          //     image={item.image}
          //     button={item.button}
          //   />
          // </Element>
          <div key={index} className="flex">
            <div className="text-grantery-500">{`Card ${index + 1}`}</div>
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
      <div className="w-full">
        <CommonSettings />
      </div>
    </>
  );
};

AcuProcedures.craft = {
  related: {
    settings: AcuProceduresSettings,
  },
  props: {
    ...getCommonSettingsProps(),
    background: defaults.backgroundColor,
    borderRadius: defaults.borderRadius,
    borderWidth: baseDefaults.borderWidth,
    marginTop: baseDefaults.marginTop,
    marginLeft: baseDefaults.marginLeft,
    marginRight: baseDefaults.marginRight,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    items: [
      {
        name: "Katherine Wong1",
        post: "Front Desk Coordinator",
        image: require("../../../../../public/images/chiro/team1.jpg"),
      },
    ],
    cardData: [
      {
        id: 1,
        heading: "Accupunture",
        desc: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide...",
        image: require("../../../../../public/images/Acupunture/Service1.jpg"),
        button: "Read More",
      },
      {
        id: 2,
        heading: "Skin Care",
        desc: "Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball...",
        image: require("../../../../../public/images/Acupunture/Service2.jpg"),
        button: "Read More",
      },
      {
        id: 3,
        heading: "Herbal Spa",
        desc: "Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball...",
        image: require("../../../../../public/images/Acupunture/Service3.jpg"),
        button: "Read More",
      },
      {
        id: 4,
        heading: "Herbal Spa",
        desc: "Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball...",
        image: require("../../../../../public/images/Acupunture/Service4.jpg"),
        button: "Read More",
      },
      {
        id: 5,
        heading: "Herbal Spa",
        desc: "Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball...",
        image: require("../../../../../public/images/Acupunture/Service5.jpg"),
        button: "Read More",
      },
      {
        id: 6,
        heading: "Herbal Spa",
        desc: "Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball...",
        image: require("../../../../../public/images/Acupunture/Service6.jpg"),
        button: "Read More",
      },
    ],
  },
  displayName: elementName,
};

export const AcuProceduresText = ({ children }: any) => {
  const {
    connectors: { connect, drag },
  }: any = useNode();
  return (
    <div ref={(ref: any) => connect(drag(ref))} className="text-only">
      {children}
    </div>
  );
};

AcuProceduresText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) =>
          incomingNode.data.type === Text ||
          incomingNode.data.type === BuilderImage ||
          incomingNode.data.type === TeamCard
      ),
  },
};
export const AcuProceduresImage = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

AcuProceduresImage.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === BuilderImage
      ),
  },
};
