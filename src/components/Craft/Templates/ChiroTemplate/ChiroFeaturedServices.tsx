import { Text } from "../../../Craft/widgets/Text/Text";
import { Button } from "../../../Craft/widgets/Button";
import { useNode, Element, useEditor } from "@craftjs/core";
import { BuilderImage } from "../../../Craft/widgets/Image";
import { useState } from "react";
const elementName = "ChiroFeaturedServices";
import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "../../../Craft/widgets/CommonSettings";
import { Headline } from "../../../Craft/widgets/Text/Headline";
import { TextInputElement } from "../../widgets/form/TextInput";
import LeftFlyOut from "@/components/LeftLayout";
import { TopbarSection } from "../../TopBarSections";
import {
  FaBriefcaseMedical,
  FaRegCalendarAlt,
  FaUserAlt,
} from "react-icons/fa";
import { MdAttachEmail, MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoCallSharp } from "react-icons/io5";
import { RxDragHandleDots2 } from "react-icons/rx";
import { ServicesCard } from "../../widgets/ServicesCard";
const defaults = {
  backgroundColor: "#5D4FFF",
  borderRadius: 0,
};

interface card {
  name: string;
  data: string;
  image: string;
}

interface IChiroFeaturedServicesProps extends ICommonSettingsProps {
  backgroundColor?: string;
  cardsData?: card[];
}
export const ChiroFeaturedServices = ({
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
}: IChiroFeaturedServicesProps) => {
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
        {/* Header */}

        <div className="  py-4 flex flex-col items-center justify-center w-full ">
          <div className="w-fit">
            <Element is={ChiroFeaturedServicesText} id="heading" canvas>
              <Text
                alignment="center"
                color="white"
                bold="font-semibold"
                fontSize={28}
                text="Featured Services"
              />
            </Element>
          </div>
          <div className="w-fit">
            <Element is={ChiroFeaturedServicesText} id="Desc" canvas>
              <Text
                color="white"
                alignment="center"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus."
              />
            </Element>
          </div>
        </div>
        <div className="flex flex-wrap  justify-center items-center mb-3">
          {cardsData.map((item: any, index: number) => (
            <Element
              key={index}
              is={ChiroFeaturedServicesText}
              id={`Cards${index}`}
              canvas
            >
              <ServicesCard
                heading={item.name}
                desc={item.data}
                imagesrc={item.image}
              />
            </Element>
          ))}
        </div>
      </div>
    </>
  );
};
const ChiroFeaturedServicesSettings: any = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  const { connectors, query } = useEditor();
  return (
    <div className="w-full">
      <div
        className="w-full shadow px-2 py-3 border-gray-200 border-[1px] bg-white rounded-md cursor-pointer"
        ref={(ref: any) =>
          connectors.create(
            ref,
            <ServicesCard
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
ChiroFeaturedServices.craft = {
  related: {
    settings: ChiroFeaturedServicesSettings,
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
    cardsData: [
      {
        name: "Chiropractic Care",
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,",
        image: require("../../../../../public/images/chiro/fs1.png"),
      },
      {
        name: "Massage Therapy ",
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,",
        image: require("../../../../../public/images/chiro/fs2.png"),
      },
      {
        name: "Lifestyle Advice",
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,",
        image: require("../../../../../public/images/chiro/fs3.png"),
      },
      {
        name: "Corrective Excercises",
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,",
        image: require("../../../../../public/images/chiro/fs4.png"),
      },
      {
        name: "Nutrition Counseling",
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,",
        image: require("../../../../../public/images/chiro/fs5.png"),
      },
      {
        name: "Spinal Screenings",
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,",
        image: require("../../../../../public/images/chiro/fs6.png"),
      },
    ],
  },
  displayName: elementName,
};
export const ChiroFeaturedServicesText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};
ChiroFeaturedServicesText.craft = {
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
