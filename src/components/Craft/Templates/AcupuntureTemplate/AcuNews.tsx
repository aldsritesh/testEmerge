import { Text } from "../../widgets/Text/Text";
import { useNode, Element, useEditor } from "@craftjs/core";
import { BuilderImage } from "../../widgets/Image";
import { useState } from "react";
const elementName = "AcuNews";
import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "../../widgets/CommonSettings";
import LeftFlyOut from "@/components/LeftLayout";
import { TopbarSection } from "../../TopBarSections";

import { RxDragHandleDots2 } from "react-icons/rx";
import Divider from "../../widgets/Divider";
import { NewsCard } from "../../widgets/NewsCard";
import { PencilIcon, PlusIcon } from "@heroicons/react/24/solid";
import { DeleteForever } from "@mui/icons-material";
import FlyOut from "@/components/Flyout";
const defaults = {
  backgroundColor: "#FAFAFA",
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

interface IAcuNewsProps extends ICommonSettingsProps {
  backgroundColor?: string;
  cardsData?: card[];
}
export const AcuNews = ({
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
}: IAcuNewsProps) => {
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
        className={` flex flex-wrap items-center  py-1 hover:z-50  hover:outline-purple-500 hover:outline ${shadow} ${borderType} relative`}
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

        <div className=" flex flex-col justify-center items-center mb-3 w-full">
          <div className="flex gap-1 items-center justify-center w-[14rem]  pr-8 ">
            <Element id="AcuNewsLine" is={AcuNewsText} canvas>
              <div className="w-5">
                <Divider borderColor="rgb(62, 62, 62)" />
              </div>
            </Element>

            <Element id="AcuNewsTag" is={AcuNewsText} canvas>
              <Text
                alignment="left"
                text="Learn More"
                fontSize={18}
                bold="font-medium"
                color="rgb(62, 62, 62)"
              />
            </Element>
          </div>

          <div className="w-fit">
            <Element id="AcuNewsTextHeader" is={AcuNewsText} canvas>
              <Text
                alignment="center"
                text="Recent News"
                fontSize={34}
                lineHeight={1.3}
                color="#473B2A"
                bold="font-semibold"
              />
            </Element>
          </div>
        </div>

        <div className="flex gap-4 carousel py-4   bg-transparent">
          {cardsData.map((item: any, index: number) => (
            <Element
              key={index}
              is={AcuNewsText}
              id={`AcuNewsCard${index}`}
              canvas
            >
              <NewsCard
                date="2 March"
                backgroundColor="white"
                borderRadius={0}
                Desc={item.data}
                writerName={` by ${item.name}`}
                image={item.image}
                writerImg={item.clientImage}
                paddingBottom={15}
                paddingTop={15}
                paddingLeft={15}
                paddingRight={15}
                borderType="border-solid"
                borderWidth={1}
                borderColor="border-gray-500"
              />
            </Element>
          ))}
        </div>
      </div>
    </>
  );
};
const AcuNewsSettings: any = () => {
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
        name: "Name",
        data: "Lorem ipsum dolor sit aec ulla r orper mattisorem ipsum dolor sit aec ulla ,",
        image: require("../../../../../public/images/Acupunture/news2.jpg"),
        clientImage: require("../../../../../public/images/Acupunture/c2.jpg"),
      })
    );
  };

  console.log("data", props.cardsData);
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
AcuNews.craft = {
  related: {
    settings: AcuNewsSettings,
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
        name: "Jenny Wilson ",
        data: "Lorem ipsum dolor sit aec ulla r orper mattisorem ipsum dolor sit aec ulla",
        image: require("../../../../../public/images/Acupunture/news1.jpg"),
        clientImage: require("../../../../../public/images/Acupunture/c1.jpg"),
      },
      {
        name: "Ronald Richards",
        data: "Lorem ipsum dolor sit aec ulla r orper mattisorem ipsum dolor sit aec ulla ,",
        image: require("../../../../../public/images/Acupunture//news2.jpg"),
        clientImage: require("../../../../../public/images/Acupunture/c2.jpg"),
      },

      {
        name: "Darlene Robertson",
        data: "Lorem ipsum dolor sit aec ulla r orper mattisorem ipsum dolor sit aec ulla ,",
        image: require("../../../../../public/images/Acupunture//news3.jpg"),
        clientImage: require("../../../../../public/images/Acupunture/c3.jpg"),
      },
      {
        name: "Jenny Wilson ",
        data: "Lorem ipsum dolor sit aec ulla r orper mattisorem ipsum dolor sit aec ulla  ",
        image: require("../../../../../public/images/Acupunture/news1.jpg"),
        clientImage: require("../../../../../public/images/Acupunture/c1.jpg"),
      },
      {
        name: "Ronald Richards",
        data: "Lorem ipsum dolor sit aec ulla r orper mattisorem ipsum dolor sit aec ulla ,",
        image: require("../../../../../public/images/Acupunture//news2.jpg"),
        clientImage: require("../../../../../public/images/Acupunture/c2.jpg"),
      },
    ],
  },
  displayName: elementName,
};
export const AcuNewsText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};
AcuNewsText.craft = {
  rules: {
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) =>
          incomingNode.data.type === Text ||
          incomingNode.data.type === BuilderImage
      ),
  },
};
