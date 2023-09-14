import { Text } from "../../../Craft/widgets/Text/Text";
import { Button } from "../../../Craft/widgets/Button";
import { useNode, Element } from "@craftjs/core";
import { BuilderImage } from "../../../Craft/widgets/Image";

const elementName = "ChiroArticles";

import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "../../../Craft/widgets/CommonSettings";
import { Headline } from "../../../Craft/widgets/Text/Headline";
import LeftFlyOut from "@/components/LeftLayout";
import { TopbarSection } from "../../TopBarSections";
import { useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import { BlogCard } from "../../widgets/BlogCard";

const defaults = {
  backgroundColor: "#FAF9FC",
  borderRadius: 0,
};

interface ChiroArticlesProps extends ICommonSettingsProps {
  backgroundColor?: string;
}

export const ChiroArticles = ({
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
}: ChiroArticlesProps) => {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const {
    hovered,
    connectors: { connect, drag },
  } = useNode((state) => ({
    hovered: state.events.hovered,
  }));

  const cardData = [
    {
      image: require("../../../../../public/images/chiro/article1.jpg"),
      title: "The Many Benefits Of Regular Exercise",
      date: "December 19, 2022",
      desc: "The Many Benefits Of Regular Exercise Lorem ipsum dolor sit...",
    },
    {
      image: require("../../../../../public/images/chiro/article2.jpg"),
      title: "Q And A With Katie McBee – Physical Therapy",
      date: "December 18, 2022",
      desc: "Q And A With Katie McBee – Physical Therapy Lorem...",
    },
    {
      image: require("../../../../../public/images/chiro/article3.jpg"),
      title: "Physical Therapy For The Esports Athlete",
      date: "December 18, 2022",
      desc: "Physical Therapy For The Esports Athlete Lorem ipsum dolor sit...",
    },
    {
      image: require("../../../../../public/images/chiro/article4.jpg"),
      title: "The Many Benefits Of Regular Exercise",
      date: "December 18, 2022",
      desc: "The Many Benefits Of Regular Exercise Lorem ipsum dolor sit...",
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
        className={` flex flex-wrap items-center hover:z-50   hover:outline-purple-500 hover:outline ${shadow} ${borderType} relative`}
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
        <div className="w-full  ">
          {/* Header */}
          <div className=" flex pt-2 pb-4 justify-between w-full">
            <div className="w-fit">
              <Element is={ChiroArticlesText} id="ChiroArticlesHeading">
                <Text
                  alignment="left"
                  color="#181443"
                  bold="font-semibold"
                  fontSize={26}
                  text="Latest News & Articles"
                />
              </Element>
            </div>
            <div className="w-1/2">
              <Element is={ChiroArticlesText} id="ChiroArticlesDesc">
                <Text
                  color="#645F80"
                  alignment="center"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
                />
              </Element>
            </div>
          </div>

          <Element is={ChiroArticlesText} id="ChiroArticlesText">
            <div className="grid grid-cols-2 gap-2 py-5">
              {cardData.map((item: any, index: number) => (
                <BlogCard key={index} heading={item.title} date={item.date} desc={item.desc} image={item.image}/>
                // <div key={index} className="border rounded-lg bg-white">
                //   <div className="flex gap-4 p-3">
                //     <Element
                //       id="ChiroArticlesImage"
                //       is={ChiroArticlesButton}
                //       canvas
                //     >
                //       <BuilderImage
                //         borderRadius={10}
                //         width={170}
                //         height={200}
                //         imageSrc={item.image}
                //       />
                //     </Element>
                //     <div className="flex flex-col gap-2 justify-center">
                //       <Text
                //         alignment="left"
                //         text={item.title}
                //         fontSize={17}
                //         bold="font-semibold"
                //         color="#181443"
                //       />
                //       <Text
                //         color="#645F80"
                //         alignment="left"
                //         fontSize={12}
                //         text={item.date}
                //       />
                //       <Text
                //         color="#645F80"
                //         alignment="left"
                //         fontSize={12}
                //         text={item.desc}
                //       />
                //       <Element id="ChiroButton" is={ChiroArticlesButton} canvas>
                //         <Button
                //           backgroundColor="transparent"
                //           color="#5D4FFF"
                //           bold="font-medium"
                //           text="Read More"
                //           borderRadius={10}
                //           paddingLeft={0}
                //         />
                //       </Element>
                //     </div>
                //   </div>
                // </div>
              ))}
            </div>
          </Element>
        </div>
      </div>
    </>
  );
};

const ChiroArticlesSettings: any = () => {
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

ChiroArticles.craft = {
  related: {
    settings: ChiroArticlesSettings,
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

export const ChiroArticlesText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

ChiroArticlesText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === Text
      ),
  },
};

export const ChiroArticlesButton = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return <div ref={connect}>{children}</div>;
};

ChiroArticlesButton.craft = {
  rules: {
    // Only accept Buttons
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === Button
      ),
  },
};
