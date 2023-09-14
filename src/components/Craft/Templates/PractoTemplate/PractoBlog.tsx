import { Text } from "../../../Craft/widgets/Text/Text";
import { useNode, Element, useEditor } from "@craftjs/core";
import { BuilderImage } from "../../../Craft/widgets/Image";
import { InputHTMLAttributes, useState } from "react";
import Divider from "../../widgets/Divider";
import { PencilIcon, PlusIcon } from "@heroicons/react/24/solid";

const elementName = "PractoBlog";

import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "../../../Craft/widgets/CommonSettings";

import LeftFlyOut from "@/components/LeftLayout";
import { TopbarSection } from "../../TopBarSections";
import { ServicesOfferCard } from "../../widgets/ServicesOfferCard";

const defaults = {
  backgroundColor: "white",
  borderRadius: 0,
};

interface IPractoBlogProps extends ICommonSettingsProps {
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

export const PractoBlog = ({
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
}: IPractoBlogProps) => {
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

        <div className="w-fit flex items-end  justify-start gap-1">
          <div className="w-fit">
            <Element id="PractoBlogTitle" is={PractoBlogText} canvas>
              <Text
                alignment="left"
                lineHeight={1.1}
                text="Latest Blogs"
                bold="font-semibold"
                fontSize={33}
                color="#373737"
                font="font-Noto"
                marginTop={12}
                paddingBottom={3}
              />
            </Element>
          </div>

          <div className="w-10 ">
            <Element id="AcuAboutusLine" is={PractoBlogText} canvas>
              <Divider borderColor="#73649C" marginTop={5} />
            </Element>
          </div>
        </div>

        <div className="flex carousel py-4   bg-transparent">
          {cardData.map((item: any, index: number) => (
            <Element
              key={index}
              is={PractoBlogText}
              id={`PractoBlog${index}`}
              canvas
            >
              <ServicesOfferCard
                Heading={item.heading}
                Desc={item.desc}
                date={item.date}
                image={item.image}
                button={item.button}
                shadow="shadow"
              />
            </Element>
          ))}
        </div>
      </div>
    </>
  );
};

const PractoBlogSettings: any = () => {
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
        desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa nt ium dolor emque laudantium totam.",
        image: require("../../../../../public/images/Acupunture/Service4.jpg"),
      })
    );
  };

  return (
    <>
      <div className="flex flex-col gap-4 carousel py-4   bg-transparent ">
        {props.cardData.map((item: any, index: number) => (
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

PractoBlog.craft = {
  related: {
    settings: PractoBlogSettings,
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

    cardData: [
      {
        id: 1,
        date: "12 Jan 2018",
        heading: "Financial Adds Value To Your Life Worth How To Know ?",
        desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa nt ium dolor emque laudantium totam.",
        image: require("../../../../../public/images/Practro/blog1.webp"),
      },
      {
        id: 2,
        date: "12 Jan 2018",
        heading: "Financial Adds Value To Your Life Worth How To Know ?",
        desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa nt ium dolor emque laudantium totam.",
        image: require("../../../../../public/images/Practro/blog2.webp"),
      },
      {
        id: 3,
        date: "12 Jan 2018",
        heading: "Financial Adds Value To Your Life Worth How To Know ?",
        desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa nt ium dolor emque laudantium totam.",
        image: require("../../../../../public/images/Practro/blog3.webp"),
      },
      {
        id: 4,
        date: "12 Jan 2018",
        heading: "Financial Adds Value To Your Life Worth How To Know ?",
        desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa nt ium dolor emque laudantium totam.",
        image: require("../../../../../public/images/Practro/blog1.webp"),
      },
      {
        id: 5,
        date: "12 Jan 2018",
        heading: "Financial Adds Value To Your Life Worth How To Know ?",
        desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa nt ium dolor emque laudantium totam.",
        image: require("../../../../../public/images/Practro/blog2.webp"),
      },
    ],
  },
  displayName: elementName,
};

export const PractoBlogText = ({ children }: any) => {
  const {
    connectors: { connect, drag },
  }: any = useNode();
  return (
    <div ref={(ref: any) => connect(drag(ref))} className="text-only">
      {children}
    </div>
  );
};

PractoBlogText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) =>
          incomingNode.data.type === Text ||
          incomingNode.data.type === BuilderImage
      ),
  },
};
export const PractoBlogImage = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

PractoBlogImage.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === BuilderImage
      ),
  },
};
