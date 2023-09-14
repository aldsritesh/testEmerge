import { Text } from "../../../Craft/widgets/Text/Text";
import { useNode, Element, useEditor } from "@craftjs/core";
import { BuilderImage } from "../../../Craft/widgets/Image";
import { InputHTMLAttributes, useState, useEffect } from "react";
import Divider from "../../widgets/Divider";

const elementName = "AcuTeam";

import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "../../../Craft/widgets/CommonSettings";
import LeftFlyOut from "@/components/LeftLayout";
import { TopbarSection } from "../../TopBarSections";

import { TeamCard } from "../../widgets/TeamCard";
import { RxDragHandleDots2 } from "react-icons/rx";
import Container from "../../widgets/Container";
import { PlusIcon } from "@heroicons/react/24/solid";
import { DeleteForever } from "@mui/icons-material";

const defaults = {
  backgroundColor: "white",
  borderRadius: 0,
};
interface card {
  id: number;
  name: string;
  data: string;
  image: string;
  cardsData: string;
  clientImage: string;
}

interface IAcuTeamProps extends ICommonSettingsProps {
  backgroundColor?: string;
  itemsBasicProps?: InputHTMLAttributes<HTMLInputElement>;
  cardsData?: card[];
}

export const AcuTeam = ({
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
}: IAcuTeamProps) => {
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

  const [updatedCard, setUpdatedCard] = useState<any>(cardsData);

  useEffect(() => {
    setUpdatedCard(cardsData);
    console.log(updatedCard);
  }, [cardsData, setUpdatedCard, updatedCard]);
  console.log("effect", updatedCard, cardsData);

  useEffect(() => {
    let newCard = cardsData;
    setUpdatedCard(newCard);
  }, [cardsData, setUpdatedCard, updatedCard]);

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
          <div className="flex flex-col gap-2 justify-center items-center">
            <div className="flex  mt-3 items-center w-72">
              <Element id="AcuAboutusLine" is={AcuTeamText} canvas>
                <div className="w-5">
                  <Divider borderColor="rgb(62, 62, 62)" />
                </div>
              </Element>
              <div className="w-fit">
                <Element id="AcuTeamTag" is={AcuTeamText} canvas>
                  <Text
                    alignment="left"
                    text="TEAM OF PROFESSIONALS"
                    fontSize={15}
                    color="rgb(62, 62, 62)"
                  />
                </Element>
              </div>
            </div>
            <Element id="AcuTeamHeader" is={AcuTeamText} canvas>
              <Text
                alignment="center"
                text="Meet Our Team"
                fontSize={34}
                color="#473B2A"
                bold="font-semibold"
              />
            </Element>
            <div className="w-[31rem] flex justify-center">
              <Element id="AcuTeamDesc" is={AcuTeamText} canvas>
                <Text
                  alignment="center"
                  text="Integer diam nulla, feugiat et consectetur in, sagittis ut turpis. Duis augue erat, venenatis eget turpis lobortis, pulvinar tincidunt orci."
                  fontSize={14}
                  color="#473B2A"
                  bold="font-medium"
                />
              </Element>
            </div>
          </div>

          <div className="flex carousel py-4   bg-transparent">
            {updatedCard.map((item: any, index: number) => {
              return (
                <Element
                  key={index}
                  is={AcuTeamText}
                  id={`AcuTeamCardData${index}`}
                  canvas
                >
                  <TeamCard
                    name={item.name}
                    post={item.post}
                    image={item.image}
                    borderRadius={0}
                    ImgBorderRadius={0}
                    borderType="border-solid"
                    borderColor="border-gray-500"
                    borderWidth={1}
                    headingColor="#473B2A"
                    postColor="#473B2A"
                    IconsData={item.icons}
                    iconColor="#8B9FBF"
                  />
                </Element>
              );
            })}

            {/* {updatedCard.map((item: any, index: number) => (
              <Element
                key={index}
                is={AcuTeamText}
                id={`AcuTeamCardData${index}`}
                canvas
              >
                <TeamCard
                  name={item.name}
                  post={item.post}
                  image={item.image}
                  borderRadius={0}
                  ImgBorderRadius={0}
                  borderType="border-solid"
                  borderColor="border-gray-500"
                  borderWidth={1}
                  headingColor="#473B2A"
                  postColor="#473B2A"
                  IconsData={item.icons}
                  iconColor="#8B9FBF"
                />
              </Element>
            ))} */}
          </div>
        </div>
      </div>
    </>
  );
};

const AcuTeamSettings: any = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
    data: node.data,
  }));

  const handleAddNewItem = () => {
    setProp((props: any) =>
      props.cardsData.push({
        name: "Emily Arnold",
        post: "Chiropractic",
        image: require("../../../../../public/images/Acupunture/team4.jpg"),
        icons: ["Facebook", "Twitter", "Instagram"],
      })
    );
  };

  const deleteItem = (index: number) => {
    console.log(index);
    setProp((props: any) => props.cardsData.splice(index, 1));
  };
  console.log("team", props.cardsData);
  return (
    <div className="w-full relative">
      <div className="mb-4 mt-2 flex flex-col gap-1">
        <label className="text-sm text-gray-400 ">News Cards</label>
        <div className="flex flex-col gap-2">
          {props.cardsData.map((item: any, index: number) => (
            <div key={index} className="flex justify-between items-center">
              <div className="text-gray-500">{item.name}</div>
              <button
                className="btn btn-xs bg-transparent border-none text-gray-500 hover:bg-red-300  p-1"
                onClick={() => deleteItem(index)}
              >
                <DeleteForever className="w-3 h-3" />
              </button>
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

AcuTeam.craft = {
  related: {
    settings: AcuTeamSettings,
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
        name: "Ben Smitt",
        post: "Acupuncturist",
        image: require("../../../../../public/images/Acupunture/team1.jpg"),
        icons: ["Facebook", "Twitter", "Instagram"],
      },
      {
        name: "Theresa Webb",
        post: "Chiropractic",
        image: require("../../../../../public/images/Acupunture/team2.jpg"),
        icons: ["Facebook", "Twitter", "Instagram"],
      },
      {
        name: "Cody Fisher",
        post: "Acupuncturist",
        image: require("../../../../../public/images/Acupunture/team3.jpg"),
        icons: ["Facebook", "Twitter", "Instagram"],
      },
      {
        name: "Emily Arnold",
        post: "Chiropractic",
        image: require("../../../../../public/images/Acupunture/team4.jpg"),
        icons: ["Facebook", "Twitter", "Instagram"],
      },
      {
        name: "George Ross",
        post: "Acupuncturist",
        image: require("../../../../../public/images/Acupunture/team5.jpg"),
        icons: ["Facebook", "Twitter", "Instagram"],
      },
      {
        name: "Betty Pope",
        post: "Chiropractic",
        image: require("../../../../../public/images/Acupunture/team6.jpg"),
        icons: ["Facebook", "Twitter", "Instagram"],
      },
    ],
  },
  displayName: elementName,
};

export const AcuTeamText = ({ children }: any) => {
  const {
    connectors: { connect, drag },
  }: any = useNode();
  return (
    <div ref={(ref: any) => connect(drag(ref))} className="text-only  ">
      {children}
    </div>
  );
};

AcuTeamText.craft = {
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
export const AcuTeamImage = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

AcuTeamImage.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === BuilderImage
      ),
  },
};
