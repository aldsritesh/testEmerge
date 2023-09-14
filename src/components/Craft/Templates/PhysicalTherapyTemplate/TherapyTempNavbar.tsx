import React, { useState } from "react";

import { useNode, Element, useEditor } from "@craftjs/core";
import { MuiColorInput } from "mui-color-input";
import TextInput from "@/components/controls/TextInput";
import { IoContract } from "react-icons/io5";
import { PencilIcon, PlusIcon } from "@heroicons/react/24/solid";
import FlyOut from "@/components/Flyout";
import { DeleteForever } from "@mui/icons-material";
import { BuilderImage } from "../../widgets/Image";
import { Link } from "../../widgets/Link";
import { baseDefaults } from "../../widgets/CommonSettings";
import { ICommonSettingsProps } from "@/components/SurveyCraft/widgets/form/CommonSettings";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Button } from "../../widgets/Button";
import { Text } from "@/components/SurveyCraft/widgets/Text/Text";
import LeftFlyOut from "@/components/LeftLayout";
import { TopbarSection } from "../../TopBarSections";

const elementName = "TherapyTempNavbar";

const defaults = {
  backgroundColor: "#ffffff",
  borderRadius: 0,
  borderColor: "#313641",
};

interface link {
  text: string;
  href: string;
}

interface ITherapyTempNavBarProps extends ICommonSettingsProps {
  size?: string;
  padding?: number;
  backgroundColor?: string;
  borderRadius?: number;
  menuItems?: link[];
}

export const TherapyTempNavbar = ({
  padding = 10,
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
  menuItems = [],
}: ITherapyTempNavBarProps) => {
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
        className="w-full relative p-2 md:py-2 md:px-8 flex hover:z-20  items-center  hover:outline-blue-500 hover:outline "
        style={{
          backgroundColor: backgroundColor,
          borderRadius: borderRadius + "px",
        }}
      >
        {hovered && (
          <>
            <div className="absolute  top-0 right-0 bg-blue-500 text-white text-xs px-1">
              {elementName}
            </div>
            <div
              className="absolute top-[95%] right-[50%] bg-orange-500 text-white text-xs px-1"
              onClick={() => {
                setOpenCreateModal(true);
              }}
            >
              +
            </div>
          </>
        )}
        <div className=" flex   w-fit">
          <div className="" ref={(ref: any) => connect(drag(ref))}>
            <Element id="logoImage" is={TherapyHeaderLogo} canvas>
              <BuilderImage
                width={80}
                height={70}
                type="contain"
                imageSrc={require("../../../../../public/images/TherapyLogos_files/logo1.png")}
              />
            </Element>
          </div>
        </div>
        <div className="w-[100%] justify-between flex">
          <div className="flex gap-2 flex-wrap items-center ml-2">
            {menuItems.map((item, index) => (
              <Element
                id={`headerItemNew_${index}`}
                is={HeaderMenuTherapy}
                key={index}
                canvas
              >
                <Link
                  text={item.text}
                  href={item.href}
                  color="black"
                  bold="font-semibold"
                  targetData={false}
                />
              </Element>
            ))}
          </div>
          <div>
            <Element id="TherapyButton" is={TherapyButton} canvas>
              <Button
                backgroundColor="#55B6C7"
                color="white"
                text="Book Appointment"
                borderRadius={30}
                paddingRight={15}
                paddingLeft={15}
              />
            </Element>
          </div>
        </div>
      </div>
    </>
  );
};

const TherapyTempNavbarSettings: any = () => {
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
      state.nodes[
        state.nodes[data.linkedNodes[`headerItemNew_${index}`]].data.nodes[0]
      ].related.settings
    );
  };

  const handleAddNewItem = () => {
    setProp((props: any) =>
      props.menuItems.push({
        text: "New Item",
        href: "#",
      })
    );
  };

  const deleteItem = (index: number) => {
    console.log(index);
    setProp((props: any) => props.menuItems.splice(index, 1));
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
      <div className=" mt-2 flex flex-col gap-1">
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

      <div className=" mt-2 flex flex-col gap-1">
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

      <div className=" mt-2 flex flex-col gap-1">
        <label className="text-sm text-gray-400 ">Menu Items</label>
        <div className="flex flex-col gap-2">
          {props.menuItems.map((item: link, index: number) => (
            <div key={index} className="flex justify-between items-center">
              <div className="text-gray-500">{item.text}</div>
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

TherapyTempNavbar.craft = {
  related: {
    settings: TherapyTempNavbarSettings,
  },
  props: {
    background: defaults.backgroundColor,
    borderRadius: defaults.borderRadius,
    menuItems: [
      {
        text: "Home",
        href: "#",
      },
      {
        text: "About",
        href: "#",
      },
      {
        text: "Services",
        href: "#",
      },
      {
        text: "Contact Us",
        href: "#",
      },
    ],
  },
  displayName: elementName,
};

export const TherapyHeaderLogo = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

TherapyHeaderLogo.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === BuilderImage
      ),
  },
};

export const HeaderMenuTherapy = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return <div ref={connect}>{children}</div>;
};

HeaderMenuTherapy.craft = {
  rules: {
    // Only accept Buttons
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === false
      ),
  },
};

export const TherapyButton = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return <div ref={connect}>{children}</div>;
};

TherapyButton.craft = {
  rules: {
    // Only accept Buttons
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === Button
      ),
  },
};
