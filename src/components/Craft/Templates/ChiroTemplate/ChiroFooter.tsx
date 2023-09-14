import { Text } from "../../../Craft/widgets/Text/Text";
import { Button } from "../../../Craft/widgets/Button";
import { useNode, Element, useEditor } from "@craftjs/core";

const elementName = "ChiroFooter";

import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "../../../Craft/widgets/CommonSettings";

import LeftFlyOut from "@/components/LeftLayout";
import { TopbarSection } from "../../TopBarSections";
import { useState } from "react";
import { BuilderImage } from "../../widgets/Image";
import item from "@/components/Leads/dnd/styles/item";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import ListItem from "../../widgets/ListItem";
import { RxDragHandleDots2 } from "react-icons/rx";

const defaults = {
  backgroundColor: "white",
  borderRadius: 0,
};

interface ChiroFooterProps extends ICommonSettingsProps {
  backgroundColor?: string;
}

export const ChiroFooter = ({
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
}: ChiroFooterProps) => {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const {
    hovered,
    connectors: { connect, drag },
  } = useNode((state) => ({
    hovered: state.events.hovered,
  }));

  const IconData = [
    { name: "facebook", icon: <FaFacebook /> },
    { name: "Twitter", icon: <BsTwitter /> },
    { name: "Youtube", icon: <FaYoutube /> },
  ];

  const FooterData = [
    {
      listName: "Navigation",
      id: "FooterNav",
      listItems: {
        id: "NavList",
        items: {
          item1: "FAQ's",
          item2: "Privacy Policy",
          item3: "Term & Conditions",
        },
      },
    },
    {
      listName: "Company",
      id: "FooterCompany",
      listItems: {
        id: "CompanyList",
        items: {
          item1: "About",
          item2: "Team",
          item3: "Contact",
        },
      },
    },
    {
      listName: "Contact Information",
      id: "FooterContact",
      listItems: {
        id: "ContactList",
        items: {
          item1: "4096 Modesto, CA 95350, USA",
          item2: "+12094728764",
          item3: "info@lutis.com",
        },
      },
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
        className={`flex justify-between w-full   hover:z-50   hover:outline-purple-500 hover:outline ${shadow} ${borderType} relative`}
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
        <div className="w-fit">
          <div className="w-fit">
            <Element is={ChiroFooterImage} id="FooterImage" canvas>
              <BuilderImage
                imageSrc={require("../../../../../public/images/chiro/chirologo-1.png")}
                width={110}
                height={35}
              />
            </Element>
          </div>

          <div className="w-56 py-3">
            <Element is={ChiroFooterText} id="FooterDesc" canvas>
              <Text
                fontSize={14}
                color="#928FA6"
                font="font-medium"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
              />
            </Element>
          </div>

          <Element is={ChiroFooterText} id="Footerside1" canvas>
            <div className="flex w-fit gap-2">
              {IconData.map((item: any, index: number) => (
                <div
                  key={index}
                  className="bg-[#5D4FFF] text-white rounded-full p-3"
                >
                  {item.icon}
                </div>
              ))}
            </div>
          </Element>
        </div>

        <div className="w-fit flex justify-evenly gap-5">
          {FooterData.map((footer: any, index: number) => (
            <div key={index}>
              <Element is={ChiroFooterText} id={footer.id} canvas>
                <Text
                  text={footer.listName}
                  color="#2F2A55"
                  fontSize={18}
                  font="font-semibold"
                />
              </Element>

              <Element is={ChiroFooterText} id={footer.listItems.id} canvas>
                <Text
                  text={footer.listItems.items.item1}
                  marginTop={10}
                  marginBottom={10}
                  fontSize={14}
                  color="#928FA6"
                  font="font-medium"
                />
                <Text
                  text={footer.listItems.items.item2}
                  marginTop={10}
                  marginBottom={10}
                  fontSize={14}
                  color="#928FA6"
                  font="font-medium"
                />
                <Text
                  text={footer.listItems.items.item3}
                  marginTop={10}
                  marginBottom={10}
                  fontSize={14}
                  color="#928FA6"
                  font="font-medium"
                />
              </Element>
            </div>
          ))}

          {/* <div>
                <Element is={ChiroFooterText} id="FooterCompany" canvas>
                  <Text text="Company"  color="#2F2A55" fontSize={18} font="font-semibold"/>
                  </Element>
                  <Element is={ChiroFooterText} id="FooterCompanyList" canvas>

                  <Text text="About" marginTop={10} marginBottom={10} fontSize={14} color="#928FA6" font="font-medium"/>
                <Text text="Team" marginTop={10} marginBottom={10} fontSize={14} color="#928FA6" font="font-medium"/>
                <Text text="Contact" marginTop={10} marginBottom={10} fontSize={14} color="#928FA6" font="font-medium"/>

                  </Element>
                </div>

                <div>
                <Element is={ChiroFooterText} id="FooterContact" canvas>
                  <Text text="Contact Information"  color="#2F2A55" fontSize={18} font="font-semibold"/>
                  </Element>
                  <Element is={ChiroFooterText} id="FooterContactList" canvas>
                  <Text text="4096 Modesto, CA 95350, USA"  marginTop={10} marginBottom={10} fontSize={14} color="#928FA6" font="font-medium"/>
                  <Text text="+12094728764"  marginTop={10} marginBottom={10} fontSize={14} color="#928FA6" font="font-medium"/> 
                  <Text text="info@lutis.com"  marginTop={10} marginBottom={10} fontSize={14} color="#928FA6" font="font-medium"/>
                  </Element>
                </div> */}
        </div>
      </div>
    </>
  );
};

const ChiroFooterSettings: any = () => {
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
            <Text
              text="New Item"
              marginTop={10}
              marginBottom={10}
              fontSize={14}
              color="#928FA6"
              font="font-medium"
            />
          )
        }
      >
        <div className="flex items-center gap-2">
          <div>
            <RxDragHandleDots2 className="text-gray-500 h-6 w-6" />
          </div>

          <h6 className="text-gray-600 text-lg font-medium text-center pl-2">
            New Item
          </h6>
        </div>
      </div>
      <div className="w-full">
        <CommonSettings />
      </div>
    </div>
  );
};

ChiroFooter.craft = {
  related: {
    settings: ChiroFooterSettings,
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

export const ChiroFooterText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

ChiroFooterText.craft = {
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

export const ChiroFooterImage = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return <div ref={connect}>{children}</div>;
};

ChiroFooterImage.craft = {
  rules: {
    // Only accept Buttons
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === BuilderImage
      ),
  },
};
