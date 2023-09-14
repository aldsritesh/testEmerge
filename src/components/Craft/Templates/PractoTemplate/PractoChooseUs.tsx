import { Text } from "../../../Craft/widgets/Text/Text";
import { Button } from "../../../Craft/widgets/Button";
import { useNode, Element } from "@craftjs/core";
import { BuilderImage } from "../../../Craft/widgets/Image";
import { useState } from "react";
const elementName = "PractoChooseUs";

import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "../../../Craft/widgets/CommonSettings";
import { Headline } from "../../../Craft/widgets/Text/Headline";
import { TopbarSection } from "../../TopBarSections";
import LeftFlyOut from "@/components/LeftLayout";
import { GlobalContactusForm } from "../../widgets/form/GlobalContactusForm";
import { GlobalRequestForm } from "../../widgets/form/RequestQoute";
import ListItem from "../../widgets/ListItem";
import { GiTick } from "react-icons/gi";
import { Check, ChecklistRtlOutlined } from "@mui/icons-material";
import { FeaturedCard, FeaturedCardData } from "../../widgets/FeaturedCard";

const defaults = {
  backgroundColor: "#ffffff",
  borderRadius: 0,
};

interface PractoChooseUsProps extends ICommonSettingsProps {
  backgroundColor?: string;
}

export const PractoChooseUs = ({
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
}: PractoChooseUsProps) => {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const {
    connectors: { connect, drag },
    hovered,
  }: any = useNode((state) => ({ hovered: state.events.hovered }));
  const data = [
    {
      id: 1,
      heading: "Experience Staff",
      desc: "Tam rem aperiam, eaque ipsa and quae ab illo invent ore veritat.",
      img: require("../../../../../public/images/Practro/peopleicon.webp"),
    },
    {
      id: 2,
      heading: "Second Item",
      desc: "Tam rem aperiam, eaque ipsa and quae ab illo invent ore veritat.",
      img: require("../../../../../public/images/Practro/peopleicon.webp"),
    },
    {
      id: 3,
      heading: "Third Item",
      desc: "Tam rem aperiam, eaque ipsa and quae ab illo invent ore veritat.",
      img: require("../../../../../public/images/Practro/peopleicon.webp"),
    },
    {
      id: 4,
      heading: "Fourth Item",
      desc: "Tam rem aperiam, eaque ipsa and quae ab illo invent ore veritat.",
      img: require("../../../../../public/images/Practro/peopleicon.webp"),
    },
  ];
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
        className={` flex flex-wrap items-center hover:z-20 hover:outline-purple-500 hover:outline ${shadow} ${borderType} relative`}
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

        <div className="flex items-start justify-center relative bg-transparent 2xl:gap-8 gap-4 py-10">
          <div className="    h-auto   md:mb-0    ">
            <Element id="welcomePostImage" is={PractoChooseUsButton} canvas>
              <Text
                alignment="left"
                bold="font-bold"
                text="Why Choose Us"
                fontSize={30}
                color="#373737"
                italic
                borderRadius={0}
                paddingLeft={10}
                lineHeight={1.2}
              />
              <Text
                alignment="left"
                text="Sed ut perspiciatis undeom nis iste natus
                error sit volup tatem accusantium volup
                tatem"
                fontSize={18}
                color="#373737"
                paddingTop={10}
                borderRadius={0}
                paddingLeft={10}
                lineHeight={1.2}
              />

              <Text
                alignment="left"
                text="Tam rem aperiam, eaque ipsa quae ab illo invent ore
                veritatis et perspiciatis unde omnis iste natus error sit
                voluptatem"
                fontSize={17}
                color="#a2aeba"
                borderRadius={0}
                bold="font-thin"
                paddingLeft={10}
                paddingTop={10}
                lineHeight={1.2}
              />
              <Button
                backgroundColor="#524b64"
                color="white"
                text="ABOUT US"
                marginTop={18}
                paddingRight={30}
                marginBottom={30}
                size="btn-sm  "
                borderRadius={50}
                paddingLeft={30}
                marginLeft={10}
              />
            </Element>
          </div>

          <div className="   flex  flex-wrap     ">
            {data.map((item: any, i: number) => (
              <div key={i} className="w-1/2">
                <Element is={FeaturedCardData} id={`FeaturedCardData${i + 2}}`}>
                  <FeaturedCard
                    heading={item.heading}
                    desc={item.desc}
                    imagesrc={item.img}
                  />
                </Element>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const PractoChooseUsSettings: any = () => {
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

PractoChooseUs.craft = {
  related: {
    settings: PractoChooseUsSettings,
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
  },
  displayName: elementName,
};

export const PractoChooseUsText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

PractoChooseUsText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === Text
      ),
  },
};

export const PractoChooseUsButton = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return <div ref={connect}>{children}</div>;
};

PractoChooseUsButton.craft = {
  rules: {
    // Only accept Buttons
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === Image
      ),
  },
};
