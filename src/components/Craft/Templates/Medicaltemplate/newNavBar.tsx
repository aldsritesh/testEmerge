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

const elementName = "NewNavBar Layout";

const defaults = {
  backgroundColor: "#ffffff",
  borderRadius: 0,
  borderColor: "#313641",
};

interface link {
  text: string;
  href: string;
}

interface HeroLayoutProps extends ICommonSettingsProps {
  size?: string;
  padding?: number;
  backgroundColor?: string;
  borderRadius?: number;
  menuItems?: link[];
}

export const NewNavBarLayout = ({
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
}: HeroLayoutProps) => {
  const {
    hovered,
    connectors: { connect, drag },
  } = useNode((state) => ({
    hovered: state.events.hovered,
  }));

  return (
    <div
      ref={(ref: any) => connect(drag(ref))}
      className="w-full relative p-4 md:py-2 md:px-8 flex flex-wrap justify-between items-center hover:outline-yellow-500 hover:outline border-b"
      style={{
        backgroundColor: backgroundColor,
        borderRadius: borderRadius + "px",
      }}
    >
      {hovered && (
        <div className="absolute top-0 right-0 bg-yellow-500 text-white text-xs px-1">
          {elementName}
        </div>
      )}

      <div className="w-[100%] justify-between flex">
        <div className="flex gap-2 flex-wrap items-center ml-0">
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
        <div>
          <button className="btn btn-ghost btn-circle">
            <BsSearch size={20} className="mr-2" />
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              {" "}
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />{" "}
            </svg> */}
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <AiOutlineShoppingCart size={20} className="ml-2" />
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
        {/* <div>
          
        </div> */}
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

NewNavBarLayout.craft = {
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

// export const HeaderLogo = ({ children }: any) => {
//   const {
//     connectors: { connect },
//   }: any = useNode();
//   return (
//     <div ref={connect} className="text-only">
//       {children}
//     </div>
//   );
// };

// HeaderLogo.craft = {
//   rules: {
//     // Only accept Text
//     canMoveIn: (incomingNodes: any) =>
//       incomingNodes.every(
//         (incomingNode: any) => incomingNode.data.type === BuilderImage
//       ),
//   },
// };

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
