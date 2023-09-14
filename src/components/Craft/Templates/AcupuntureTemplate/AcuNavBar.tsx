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
import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
} from "../../widgets/CommonSettings";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Button } from "../../widgets/Button";
import LeftFlyOut from "@/components/LeftLayout";
import { TopbarSection } from "../../TopBarSections";
import { Text } from "../../widgets/Text/Text";

const elementName = "AcuNavBar";

const defaults = {
  backgroundColor: "#ffffff",
  borderRadius: 0,
  borderColor: "#313641",
};

interface link {
  text: string;
  href: string;
}

interface IAcuNavBarProps extends ICommonSettingsProps {
  size?: string;
  padding?: number;
  backgroundColor?: string;
  borderRadius?: number;
  menuItems?: link[];
}

export const AcuNavBar = ({
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
}: IAcuNavBarProps) => {
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
        className="w-full relative p-2 md:py-2 md:px-4 flex hover:z-50 justify-between  items-center  hover:outline-blue-500 hover:outline "
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
            <div className="absolute z-50 top-0 right-0 bg-grey-500 text-white text-xs px-1">
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
        <div className="w-fit flex items-center gap-2">
          <Element id="logoImage" is={AcuNavBarLogo} canvas>
            <BuilderImage
              width={90}
              height={65}
              borderRadius={0}
              imageSrc={require("../../../../../public/images/Acupunture/logo.png")}
            />
          </Element>
          <div>
            {/* <div>
              <Element id="heading" is={HeaderMenuAcu} canvas>
                <Text
                  text="ASHLEE STANTON'S"
                  borderRadius={0}
                  color="#899CBC"
                  fontSize={11}
                  bold="font-semibold"
                  italic
                />
                <Text
                  text="ACUPUNCTURE"
                  borderRadius={0}
                  fontSize={16}
                  color="#473B2A"
                />
              </Element>
            </div> */}
            <div></div>
          </div>
        </div>
        <div className=" flex">
          <div className="flex items-center gap-4 pr-3">
            {menuItems.map((item, index) => (
              <Element
                id={`headerItemNew_${index}`}
                is={HeaderMenuAcu}
                key={index}
                canvas
              >
                <Link
                  text={item.text}
                  href={item.href}
                  color="#473B2A"
                  bold={"font-medium"}
                  targetData={false}
                />
              </Element>
            ))}
          </div>
          <div>
            <Element id="AcuButton" is={AcuNavBarButton} canvas>
              <Button
                backgroundColor="#B5825B"
                color="white"
                text="Appointment"
                borderRadius={0}
                paddingRight={25}
                paddingLeft={25}
              />
            </Element>
          </div>
        </div>
      </div>
    </>
  );
};

const AcuNavBarSettings: any = () => {
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

AcuNavBar.craft = {
  related: {
    settings: AcuNavBarSettings,
  },
  props: {
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
        text: "Blog",
        href: "#",
      },

      {
        text: "Contacts",
        href: "#",
      },
    ],
  },
  displayName: elementName,
};

export const AcuNavBarLogo = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

AcuNavBarLogo.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === BuilderImage || Text
      ),
  },
};

export const HeaderMenuAcu = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return <div ref={connect}>{children}</div>;
};

HeaderMenuAcu.craft = {
  rules: {
    // Only accept Buttons
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === false
      ),
  },
};

export const AcuNavBarButton = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return <div ref={connect}>{children}</div>;
};

AcuNavBarButton.craft = {
  rules: {
    // Only accept Buttons
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === Button
      ),
  },
};
