import React, { useContext, useState } from "react";

import Container from "../Container";
import { useNode, Element, useEditor } from "@craftjs/core";
import { BuilderImage } from "../Image";
import { MuiColorInput } from "mui-color-input";
import TextInput from "@/components/controls/TextInput";
import { IoContract } from "react-icons/io5";
import { Link } from "../Link";
import { PencilIcon, PlusIcon } from "@heroicons/react/24/solid";
import FlyOut from "@/components/Flyout";
import { DeleteForever } from "@mui/icons-material";
import LeftFlyOut from "@/components/LeftLayout";
import { TopbarSection } from "../../TopBarSections";
import { AiFillPlusSquare } from "react-icons/ai";
import { CraftContext } from "@/pages/builder/website/craft";

const elementName = "Header Layout";

const defaults = {
  backgroundColor: "#ffffff",
  borderRadius: 0,
};

interface link {
  text: string;
  href: string;
}

interface HeroLayoutProps {
  padding?: number;
  backgroundColor?: string;
  borderRadius?: number;
  menuItems?: link[];
}

export const HeaderLayout = ({
  padding = 20,
  backgroundColor = defaults.backgroundColor,
  borderRadius = defaults.borderRadius,
  menuItems = [],
}: HeroLayoutProps) => {
  const [openCreateModal, setOpenCreateModal] = useState(false);

  const {
    hovered,
    connectors: { connect, drag },
  } = useNode((state) => ({
    hovered: state.events.hovered,
  }));
  // const { tabValue, setTabValue } = useContext(CraftContext);

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
        className="relative p-4 md:py-2 md:px-8 flex flex-wrap justify-between items-center hover:outline-blue-500 hover:outline border-b z-50"
        style={{
          backgroundColor: backgroundColor,
          borderRadius: borderRadius + "px",
        }}
      >
        {hovered && (
          <>
            <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs px-1">
              {elementName}
            </div>
            <div
              className="absolute top-20 left-[48%]  text-white text-xs px-1"
              onClick={() => {
                setOpenCreateModal(true);
              }}
            >
              <AiFillPlusSquare color="#FF7A40" size={25} radius={5} />
            </div>
          </>
        )}
        <div className="">
          <Element id="logoImage" is={HeaderLogo} canvas>
            <BuilderImage width={70} height={70} type="contain" />
          </Element>
        </div>

        <div className="w-auto ml-auto">
          <div className="flex gap-2 flex-wrap">
            {menuItems.map((item, index) => (
              <Element
                id={`headerItem_${index}`}
                is={HeaderMenu}
                key={index}
                canvas
              >
                <Link
                  text={item.text}
                  href={item.href}
                  targetData={false}
                  color={""}
                  bold={undefined}
                />
              </Element>
            ))}
          </div>
        </div>
      </div>
    </>
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
      state.nodes[
        state.nodes[data.linkedNodes[`headerItem_${index}`]].data.nodes[0]
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

HeaderLayout.craft = {
  related: {
    settings: HeaderLayoutSettings,
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
        text: "Category",
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

export const HeaderLogo = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

HeaderLogo.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === BuilderImage
      ),
  },
};

export const HeaderMenu = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return <div ref={connect}>{children}</div>;
};

HeaderMenu.craft = {
  rules: {
    // Only accept Buttons
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === false
      ),
  },
};
