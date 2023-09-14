import { Text } from "../../../Craft/widgets/Text/Text";
import { Button } from "../../../Craft/widgets/Button";
import { useNode, Element, useEditor } from "@craftjs/core";
import { BuilderImage } from "../../../Craft/widgets/Image";
import { InputHTMLAttributes, useState } from "react";

const elementName = "ChiroTeam";

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
import { TeamCard } from "../../widgets/TeamCard";
import { RxDragHandleDots2 } from "react-icons/rx";
import Container from "../../widgets/Container";

const defaults = {
  backgroundColor: "white",
  borderRadius: 0,
};

interface IChiroTeamProps extends ICommonSettingsProps {
  backgroundColor?: string;
  itemsBasicProps?: InputHTMLAttributes<HTMLInputElement>;
  items?: {
    itemsProps?: InputHTMLAttributes<HTMLInputElement>;
    name?: string;
    post?: string;
    image?: any;
  }[];
}

export const ChiroTeam = ({
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
  items = [
    {
      name: "Katherine Wong",
      post: "Front Desk Coordinator",
      image: require("../../../../../public/images/chiro/team1.jpg"),
    },
  ],
}: IChiroTeamProps) => {
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

  const cardsData = [
    {
      name: "Katherine Wong",
      post: "Front Desk Coordinator",
      image: require("../../../../../public/images/chiro/team1.jpg"),
      icons: ["Call", "Email"],
    },
    {
      name: "Katherine Wong",
      post: "Front Desk Coordinator",
      image: require("../../../../../public/images/chiro/team2.jpg"),
      icons: ["Call", "Email"],
    },
    {
      name: "Katherine Wong",
      post: "Front Desk Coordinator",
      image: require("../../../../../public/images/chiro/team3.jpg"),
      icons: ["Call", "Email"],
    },
    {
      name: "Katherine Wong",
      post: "Front Desk Coordinator",
      image: require("../../../../../public/images/chiro/team2.jpg"),
      icons: ["Call", "Email"],
    },
    {
      name: "Katherine Wong",
      post: "Front Desk Coordinator",
      image: require("../../../../../public/images/chiro/team3.jpg"),
      icons: ["Call", "Email"],
    },
    {
      name: "Katherine Wong",
      post: "Front Desk Coordinator",
      image: require("../../../../../public/images/chiro/team2.jpg"),
      icons: ["Call", "Email"],
    },
    {
      name: "Katherine Wong",
      post: "Front Desk Coordinator",
      image: require("../../../../../public/images/chiro/team3.jpg"),
      icons: ["Call", "Email"],
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

        <div className="w-full  ">
          <div className=" flex pt-2 pb-4 justify-between w-full">
            <div className="w-fit">
              <Element is={Container} id="ChiroTeamHeading" canvas>
                <Text
                  alignment="left"
                  color="#181443"
                  bold="font-semibold"
                  fontSize={26}
                  text="Meet Our Team"
                />
              </Element>
            </div>
            <div className="w-1/2">
              <Element is={ChiroTeamText} id="ChiroTeamDesc" canvas>
                <Text
                  color="#645F80"
                  alignment="center"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
                />
              </Element>
            </div>
          </div>
          <div className="flex gap-4 carousel py-4 bg-transparent">
            {cardsData.map((item: any, index: number) => (
              <Element
                key={index}
                is={ChiroTeamText}
                id={`ChiroTeam${index}`}
                canvas
              >
                <TeamCard
                  name={item.name}
                  post={item.post}
                  image={item.image}
                  backgroundColor="#F2F1FE"
                  iconColor="white"
                  iconBg="#5D4FFF"
                  IconsData={item.icons}
                />
              </Element>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const ChiroTeamSettings: any = () => {
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
            <TeamCard
              name="Name"
              post="Desgination"
              image={require("../../../../../public/images/chiro/chiroDummy.jpg")}
            />
          )
        }
      >
        <div className="flex items-center gap-2">
          <div>
            <RxDragHandleDots2 className="text-gray-500 h-6 w-6" />
          </div>

          <h6 className="text-gray-600 text-lg font-medium text-center pl-2">
            New Team Card
          </h6>
        </div>
      </div>
      <div className="w-full">
        <CommonSettings />
      </div>
    </div>
  );
};

ChiroTeam.craft = {
  related: {
    settings: ChiroTeamSettings,
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
  },
  displayName: elementName,
};

export const ChiroTeamText = ({ children }: any) => {
  const {
    connectors: { connect, drag },
  }: any = useNode();
  return (
    <div ref={(ref: any) => connect(drag(ref))} className="text-only">
      {children}
    </div>
  );
};

ChiroTeamText.craft = {
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
export const ChiroTeamImage = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

ChiroTeamImage.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === BuilderImage
      ),
  },
};
