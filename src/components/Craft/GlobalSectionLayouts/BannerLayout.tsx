import { Text } from "../../Craft/widgets/Text/Text";

import { useNode, Element, useEditor } from "@craftjs/core";
import { BuilderImage } from "../../Craft/widgets/Image";

import {
  baseDefaults,
  CommonSettings,
  getCommonSettingsProps,
  ICommonSettingsProps,
} from "../../Craft/widgets/CommonSettings";
import { createElement, useState } from "react";
import FlyOut from "@/components/Flyout";
import { MuiColorInput } from "mui-color-input";
import TextInput from "@/components/controls/TextInput";
import { IoContract } from "react-icons/io5";
import { PencilIcon, PlusIcon } from "@heroicons/react/24/solid";
import { DeleteForever } from "@mui/icons-material";

const elementName = "Banner";

const defaults = {
  backgroundColor: "#ffffff",
  borderColor: "#313641",
  borderRadius: 10,
};

interface IBannersProps extends ICommonSettingsProps {
  size?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;
}

export const CardImage = ({ children }: any) => {
  const {
    connectors: { connect, drag },
  }: any = useNode();
  return <div ref={connect}>{children}</div>;
};

CardImage.craft = {
  rules: {
    // Only accept Buttons
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === BuilderImage || Text
      ),
  },
};

export const GlobalBannersText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

GlobalBannersText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every((incomingNode: any) => false),
  },
};

export const GlobalBannerLayout = ({
  size,
  backgroundColor = defaults.backgroundColor,
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
}: IBannersProps) => {
  const {
    connectors: { connect, drag },
    hovered,
  }: any = useNode((state) => ({ hovered: state.events.hovered }));

  const data = [
    {
      id: 1,
      image: (
        <BuilderImage
          width={900}
          imageSrc={require("../../../../public/images/dentalTemplate/dentalTemplatefirst.jpg")}
        />
      ),
    },
    {
      id: 2,
      image: (
        <BuilderImage
          width={900}
          imageSrc={require("../../../../public/images/dentalTemplate/dentalTemplatesecond.jpg")}
        />
      ),
    },
    {
      id: 3,
      image: (
        <BuilderImage
          width={900}
          imageSrc={require("../../../../public/images/dentalTemplate/dentalTemplatethird.jpg")}
        />
      ),
    },
    {
      id: 4,
      image: (
        <BuilderImage
          width={900}
          imageSrc={require("../../../../public/images/dentalTemplate/dentalTemplatesecond.jpg")}
        />
      ),
    },
    {
      id: 5,
      image: (
        <BuilderImage
          width={900}
          imageSrc={require("../../../../public/images/dentalTemplate/dentalTemplatethird.jpg")}
        />
      ),
    },
    {
      id: 6,
      image: (
        <BuilderImage
          width={900}
          imageSrc={require("../../../../public/images/dentalTemplate/dentalTemplatefirst.jpg")}
        />
      ),
    },
    {
      id: 7,
      image: (
        <BuilderImage
          width={900}
          imageSrc={require("../../../../public/images/dentalTemplate/dentalTemplateforth.jpg")}
        />
      ),
    },
  ];

  return (
    <div className="bg-white p-2 w-full" ref={(ref: any) => connect(drag(ref))}>
      <div
        className={`w-full h-auto ${size} mr-2 mb-2 ${
          hovered && "hover:outline-pink-500 hover:outline "
        }  relative ${shadowColor} ${shadow} ${borderType} `}
        style={{
          backgroundColor,
          marginTop: `${marginTop}px`,
          marginBottom: `${marginBottom}px`,
          marginLeft: `${marginLeft}px`,
          marginRight: `${marginRight}px`,
          paddingTop: `${paddingTop}px`,
          paddingBottom: `${paddingBottom}px`,
          paddingLeft: `${paddingLeft}px`,
          paddingRight: `${paddingRight}px`,
          borderWidth: `${borderWidth}px`,
          borderRadius: `${borderRadius}px`,
          borderColor,
        }}
      >
        {hovered && (
          <div className="absolute top-0 right-0 bg-purple-500 text-white text-[10px] px-1 z-50 capitalize">
            {elementName}
          </div>
        )}
        <Element id="BannersText" is={GlobalBannersText} canvas>
          <div className="w-full carousel rounded-box">
            {data.map((item: any, index: number) => (
              <div
                id={`slide${item.id}`}
                className="carousel-item relative w-full"
                key={index}
              >
                {item.image}
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href={`#slide${item.id - 1}`} className="btn btn-circle">
                    ❮
                  </a>
                  <a href={`#slide${item.id + 1}`} className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Element>
        {/* </div> */}
      </div>
    </div>
  );
};

const HeaderLayoutSettings: any = () => {
  const {
    actions: { setProp },
    props,
    id,
    data,
  } = useNode((node) => ({
    props: node.data.props,
    data: node.data,
  }));
  const [selectedMenuItem, setSelectedMenuItem] = useState<any>(null);

  const { state } = useEditor((state) => {
    return { state };
  });

  const handleItemEdit = (index: number) => {
    setSelectedMenuItem(
      state.nodes[state.nodes[data.linkedNodes[`slide_${index}`]].data.nodes[0]]
        .related.settings
    );
  };

  const handleAddNewItem = () => {
    setProp((props: any) =>
      props.data.push({
        image: <BuilderImage />,
      })
    );
  };

  const deleteItem = (index: number) => {
    console.log(index);
    setProp((props: any) => props.data.splice(index, 1));
  };

  return (
    <div className="w-full relative">
      <FlyOut
        visibility={selectedMenuItem != null}
        onClose={() => setSelectedMenuItem(null)}
        width={25}
        disableOverlay={true}
      >
        <div className="mb-4 mt-2 flex flex-col gap-1 p-4 h-screen overflow-y-scroll scrollbar-hide ">
          {selectedMenuItem && selectedMenuItem}
        </div>
      </FlyOut>
      <div className="mb-4 mt-2 flex flex-col gap-1">
        <label className="text-sm text-gray-400 ">Background Color</label>
        <div className="">
          <MuiColorInput
            format="hex"
            value={props.backgroundColor ? props.backgroundColor : "#ffffff"}
            onChange={(e) =>
              setProp((props: any) => (props.backgroundColor = e))
            }
          />
        </div>
      </div>

      <div className="mb-4 mt-2 flex flex-col gap-1">
        <label className="text-sm text-gray-400 ">Border Radius</label>
        <TextInput
          lefticon={<IoContract />}
          value={props.borderRadius}
          placeholder="Border radius in px"
          onChange={(e) =>
            setProp((props: any) => (props.borderRadius = e.target.value))
          }
          type="number"
          min={0}
        />
      </div>

      <div className="mb-4 mt-2 flex flex-col gap-1">
        <label className="text-sm text-gray-400 ">Banner Items</label>
        <div className="flex flex-col gap-2">
          {props.data.map((item: any, index: number) => (
            <div key={index} className="flex justify-between items-center">
              <div className="text-gray-500">{item.image}</div>
              <div className="flex flex-wrap">
                <button
                  className="btn btn-xs bg-transparent border-none text-gray-500 hover:bg-gray-200 p-1"
                  onClick={() => handleItemEdit(index)}
                >
                  <PencilIcon className="w-3 h-3" />
                </button>
                <button
                  className="btn btn-xs bg-transparent border-none text-gray-500 hover:bg-red-300  p-1"
                  onClick={() => deleteItem(index)}
                >
                  <DeleteForever className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}

          <button className="btn btn-sm mt-2" onClick={handleAddNewItem}>
            <PlusIcon className="w-4 h-4" />
            Add Item
          </button>
        </div>
      </div>
    </div>
  );
};

const BannersSettings = () => {
  const {
    actions: { setProp },
    props,
    id,
    data,
  } = useNode((node) => ({
    props: node.data.props,
    data: node.data,
  }));

  const { state } = useEditor((state) => {
    return { state };
  });

  const textNodeSettings =
    state.nodes[state.nodes[data.linkedNodes["BannersText"]].data.nodes[0]]
      .related.settings;
  return (
    <div>
      <HeaderLayoutSettings />
      <CommonSettings />

      {textNodeSettings && createElement(textNodeSettings)}
    </div>
  );
};

GlobalBannerLayout.craft = {
  related: {
    settings: BannersSettings,
  },
  props: {
    ...getCommonSettingsProps(),
    background: defaults.backgroundColor,
    borderRadius: defaults.borderRadius,
    borderColor: defaults.borderColor,
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 10,
    marginBottom: 0,
    data: [
      {
        id: 1,
        image: (
          <BuilderImage
            width={1600}
            imageSrc={require("../../../../public/images/dentalTemplate/dentalTemplatefirst.jpg")}
          />
        ),
      },
      {
        id: 2,
        image: (
          <BuilderImage
            width={1600}
            imageSrc={require("../../../../public/images/dentalTemplate/dentalTemplatesecond.jpg")}
          />
        ),
      },
      {
        id: 3,
        image: (
          <BuilderImage
            width={1600}
            imageSrc={require("../../../../public/images/dentalTemplate/dentalTemplatethird.jpg")}
          />
        ),
      },
      {
        id: 4,
        image: (
          <BuilderImage
            width={1600}
            imageSrc={require("../../../../public/images/dentalTemplate/dentalTemplatesecond.jpg")}
          />
        ),
      },
      {
        id: 5,
        image: (
          <BuilderImage
            width={1600}
            imageSrc={require("../../../../public/images/dentalTemplate/dentalTemplatethird.jpg")}
          />
        ),
      },
      {
        id: 6,
        image: (
          <BuilderImage
            width={1600}
            imageSrc={require("../../../../public/images/dentalTemplate/dentalTemplatefirst.jpg")}
          />
        ),
      },
      {
        id: 7,
        image: (
          <BuilderImage
            width={1600}
            imageSrc={require("../../../../public/images/dentalTemplate/dentalTemplateforth.jpg")}
          />
        ),
      },
    ],
  },
  displayName: elementName,
};
