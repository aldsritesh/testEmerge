import {
  CalendarDaysIcon,
  ClockIcon,
  CodeBracketIcon,
  ListBulletIcon,
  MagnifyingGlassIcon,
  MapIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { AiOutlineLink, AiOutlineVideoCameraAdd } from "react-icons/ai";
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";
import { BsCardText, BsImage, BsMenuButtonWide } from "react-icons/bs";
import { FaWpforms } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { RxDividerHorizontal, RxDragHandleDots2 } from "react-icons/rx";
import { SiProgress } from "react-icons/si";
import {
  TbColumns1,
  TbColumns2,
  TbColumns3,
  TbLayoutColumns,
  TbTextSize,
} from "react-icons/tb";
import TextInput from "../../controls/TextInput";
// import { TextInputElement } from "../";
import { Grid } from "../../SurveyCraft/widgets/Grid";
import AccordionItem from "../../UI/AccordionItem";
import ElementToolsLayout from "../Toolboxes/tools/ElementToolsLayout";
import PrebuiltToolsLayout from "../Toolboxes/tools/PrebuiltToolsLayout";
import { Button } from "../widgets/Button";
import CalendarElement from "../widgets/Calendar";
import { Card } from "../widgets/Card";
import Countdown from "../widgets/Countdown";
import CustomHTML from "../widgets/CustomHTML";
import Divider from "../widgets/Divider";
import { MainForm } from "../widgets/form/MainForm";
import { TextInputElement } from "../widgets/form/TextInput";
import { BuilderImage } from "../widgets/Image";
import { Link } from "../widgets/Link";
import { List } from "../widgets/List";
import MapElement from "../widgets/Map";
import { OrderConfirmation } from "../widgets/prebuilt/OrderConfirmation";
import { OrderOneStep } from "../widgets/prebuilt/OrderOneStep";
import Progress from "../widgets/Progress";
import { Review } from "../widgets/Reviews";
import { Headline } from "../widgets/Text/Headline";
import { Text } from "../widgets/Text/Text";
import { BuilderVideo } from "../widgets/Video";
import {
  MdOutlineCheckBoxOutlineBlank,
  MdWidthFull,
  MdWidthNormal,
  MdWidthWide,
} from "react-icons/md";
import { CiViewColumn } from "react-icons/ci";
import {
  TfiLayoutColumn2,
  TfiLayoutColumn3,
  TfiLayoutColumn4,
} from "react-icons/tfi";
import SectionsLayout from "../SectionsLayouts/FullWidth";
import { CgDisplayFullwidth } from "react-icons/cg";
import FullWidth from "../SectionsLayouts/FullWidth";
import Wide from "../SectionsLayouts/Wide";
import Medium from "../SectionsLayouts/Medium";
import Small from "../SectionsLayouts/Small";
import { ElementSectionToolbox } from "./ElementSectionToolbox";
import Social from "../widgets/Social";

const baseTools = [
  {
    index: 1,
    question: "Content",
    answer: [
      {
        name: "Images",
        tool: (
          <ElementToolsLayout
            toolName="Images"
            tool={<BuilderImage />}
            image="@/../public/craft/hero.png"
            icon={<BsImage className="h-5 w-5 text-gray-500" />}
          />
        ),
      },
      {
        name: "Headline",
        tool: (
          <ElementToolsLayout
            toolName="Headline"
            tool={
              <Headline
                text="Headline"
                fontSize={26}
                color="#000000"
                bold="font-medium"
                alignment={"left"}
                tagName="h1"
              />
            }
            image="@/../public/craft/hero.png"
            icon={<TbTextSize className="h-5 w-5 text-gray-500" />}
          />
        ),
      },
      {
        name: "Sub headline",
        tool: (
          <ElementToolsLayout
            toolName="Sub headline"
            tool={
              <Headline
                text="Sub headline"
                fontSize={20}
                color="#a4a4a4"
                alignment={"left"}
                tagName="h3"
              />
            }
            image="@/../public/craft/hero.png"
            icon={<TbTextSize className="h-5 w-5 text-gray-500" />}
          />
        ),
      },
      {
        name: "Paragraph",
        tool: (
          <ElementToolsLayout
            toolName="Paragraph"
            tool={<Text text="Start writing here..." alignment={"left"} />}
            image="@/../public/craft/hero.png"
            icon={<TbTextSize className="h-5 w-5 text-gray-500" />}
          />
        ),
      },

      {
        name: "List",
        tool: (
          <ElementToolsLayout
            toolName="List"
            tool={<List alignment="left" text="New List" />}
            image="@/../public/craft/hero.png"
            icon={<ListBulletIcon className="h-5 w-5 text-gray-500" />}
          />
        ),
      },
      {
        name: "Button",
        tool: (
          <ElementToolsLayout
            toolName="Button"
            tool={<Button text="Click Me" />}
            image="@/../public/craft/hero.png"
            icon={<BsMenuButtonWide className="h-5 w-5 text-gray-500" />}
          />
        ),
      },
      {
        name: "Divider",
        tool: (
          <ElementToolsLayout
            toolName="Divider"
            tool={<Divider />}
            image="@/../public/craft/hero.png"
            icon={<RxDividerHorizontal className="h-5 w-5 text-gray-500" />}
          />
        ),
      },
      {
        name: "Social",
        tool: (
          <ElementToolsLayout
            toolName="Social"
            tool={
              <Social href="#" justifyContent="center" alignItems="center" />
            }
            image="@/../public/craft/hero.png"
            icon={<IoShareSocialOutline className="h-5 w-5 text-gray-500" />}
          />
        ),
      },
      {
        name: "Video",
        tool: (
          <ElementToolsLayout
            toolName="Video"
            tool={<BuilderVideo />}
            image="@/../public/craft/hero.png"
            icon={<AiOutlineVideoCameraAdd className="h-5 w-5 text-gray-500" />}
          />
        ),
      },

      {
        name: "Link",
        tool: (
          <ElementToolsLayout
            toolName="Link"
            tool={
              <Link
                text="Link"
                href={"#"}
                targetData={false}
                color={""}
                bold={undefined}
              />
            }
            image="@/../public/craft/hero.png"
            icon={<AiOutlineLink className="h-5 w-5 text-gray-500" />}
          />
        ),
      },

      {
        name: "Card",
        tool: (
          <ElementToolsLayout
            toolName="Card"
            tool={<Card />}
            image="@/../public/craft/hero.png"
            icon={<BsCardText className="h-5 w-5 text-gray-500" />}
          />
        ),
      },
      {
        name: "Custom HTML",
        tool: (
          <ElementToolsLayout
            toolName="Custom HTML"
            tool={<CustomHTML />}
            image="@/../public/craft/hero.png"
            icon={<CodeBracketIcon className="h-5 w-5 text-gray-500" />}
          />
        ),
      },
      {
        name: "Map",
        tool: (
          <ElementToolsLayout
            toolName="Map"
            tool={<MapElement />}
            image="@/../public/craft/hero.png"
            icon={<MapIcon className="h-5 w-5 text-gray-500" />}
          />
        ),
      },
      {
        name: "Countdown",
        tool: (
          <ElementToolsLayout
            toolName="Countdown"
            tool={<Countdown />}
            image="@/../public/craft/hero.png"
            icon={<ClockIcon className="h-5 w-5 text-gray-500" />}
          />
        ),
      },
      {
        name: "Progress",
        tool: (
          <ElementToolsLayout
            toolName="Progress"
            tool={<Progress />}
            image="@/../public/craft/hero.png"
            icon={<SiProgress className="h-5 w-5 text-gray-500" />}
          />
        ),
      },
      {
        name: "Calendar",
        tool: (
          <ElementToolsLayout
            toolName="Calendar"
            tool={<CalendarElement />}
            image="@/../public/craft/hero.png"
            icon={<CalendarDaysIcon className="h-5 w-5 text-gray-500" />}
          />
        ),
      },
      {
        name: "Review",
        tool: (
          <ElementToolsLayout
            toolName="Review"
            tool={<Review />}
            image="@/../public/craft/hero.png"
            icon={<UsersIcon className="h-5 w-5 text-gray-500" />}
          />
        ),
      },
      {
        name: "Order Confirmation",
        tool: (
          <ElementToolsLayout
            toolName="Order Confirmation"
            tool={<OrderConfirmation />}
            image="@/../public/craft/hero.png"
            icon={<UsersIcon className="h-5 w-5 text-gray-500" />}
          />
        ),
      },
      {
        name: "One Step Order",
        tool: (
          <ElementToolsLayout
            toolName="One Step Order"
            tool={<OrderOneStep />}
            image="@/../public/craft/hero.png"
            icon={<UsersIcon className="h-5 w-5 text-gray-500" />}
          />
        ),
      },
      {
        name: "Two Step Order",
        tool: (
          <ElementToolsLayout
            toolName="Two Step Order"
            tool={<OrderOneStep />}
            image="@/../public/craft/hero.png"
            icon={<UsersIcon className="h-5 w-5 text-gray-500" />}
          />
        ),
      },
      {
        name: "Forms",
        tool: (
          <ElementToolsLayout
            toolName="Forms"
            tool={<MainForm />}
            image="@/../public/craft/hero.png"
            icon={<FaWpforms className="h-5 w-5 text-gray-500" />}
          />
        ),
      },
    ],
  },
  {
    index: 2,
    question: "Rows",
    answer: [
      {
        name: "Column 1",
        tool: (
          <ElementToolsLayout
            toolName="Column 1"
            tool={<Grid col={1} />}
            icon={<TbColumns1 className="h-5 w-10 text-gray-500" />}
            image={require("@/../public/craft/hero.png")}
          />
        ),
      },
      {
        name: "Column 2",
        tool: (
          <ElementToolsLayout
            toolName="Column 2"
            tool={<Grid col={2} />}
            icon={<TfiLayoutColumn2 className="h-5 w-10 text-gray-500" />}
            image={require("@/../public/craft/hero.png")}
          />
        ),
      },
      {
        name: "Column 3",
        tool: (
          <ElementToolsLayout
            toolName="Column 3"
            tool={<Grid col={3} />}
            icon={<TfiLayoutColumn3 className="h-6 w-10 text-gray-500" />}
            image={require("@/../public/craft/hero.png")}
          />
        ),
      },
      {
        name: "Column 4",
        tool: (
          <ElementToolsLayout
            toolName="Column 4"
            tool={<Grid col={4} />}
            icon={
              <div className="flex gap-[1px] ">
                <TfiLayoutColumn2 className="h-5 w-5 text-gray-500" />
                <TfiLayoutColumn2 className="h-5 w-5 text-gray-500" />
              </div>
            }
            image={require("@/../public/craft/hero.png")}
          />
        ),
      },
      {
        name: "Column 5",
        tool: (
          <ElementToolsLayout
            toolName="Column 5"
            tool={<Grid col={5} />}
            icon={
              <div className="flex gap-[1px]">
                <TfiLayoutColumn3 className="h-6 w-5  text-gray-500" />
                <TfiLayoutColumn2 className="h-6 w-5 text-gray-500" />
              </div>
            }
            image={require("@/../public/craft/hero.png")}
          />
        ),
      },
      {
        name: "Column 6",
        tool: (
          <ElementToolsLayout
            toolName="Column 6"
            tool={<Grid col={6} />}
            icon={
              <div className="flex gap-[1px] ">
                <TfiLayoutColumn2 className="h-5 w-5 text-gray-500" />
                <TfiLayoutColumn2 className="h-5 w-5 text-gray-500" />
                <TfiLayoutColumn2 className="h-5 w-5 text-gray-500" />
              </div>
            }
            image={require("@/../public/craft/hero.png")}
          />
        ),
      },
    ],
  },
  {
    index: 3,
    question: "Sections",
    answer: [
      {
        name: "Full Width",
        tool: (
          <ElementToolsLayout
            toolName="Full Width"
            tool={<FullWidth />}
            icon={<MdWidthFull className="h-5 w-10 text-gray-500" />}
            image={require("@/../public/craft/hero.png")}
          />
        ),
      },
      {
        name: "Wide",
        tool: (
          <ElementToolsLayout
            toolName="Wide"
            tool={<Wide />}
            icon={<MdWidthWide className="h-5 w-10 text-gray-500" />}
            image={require("@/../public/craft/hero.png")}
          />
        ),
      },
      {
        name: "Medium",
        tool: (
          <ElementToolsLayout
            toolName="Medium"
            tool={<Medium />}
            icon={<MdWidthWide className="h-5 w-10 text-gray-500" />}
            image={require("@/../public/craft/hero.png")}
          />
        ),
      },
      {
        name: "Small",
        tool: (
          <ElementToolsLayout
            toolName="Small"
            tool={<Small />}
            icon={<MdWidthNormal className="h-5 w-10 text-gray-500" />}
            image={require("@/../public/craft/hero.png")}
          />
        ),
      },
    ],
  },
];

const Elements = () => {
  const [searchString, setSearchString] = useState("");
  const [tools, setTools] = useState(baseTools);

  // useEffect(() => {
  //   if (searchString === "") {
  //     setTools(baseTools);
  //     return;
  //   }

  //   const filteredTools = baseTools.map((tool) => {
  //     const filteredAnswers = tool.filter((answer) =>
  //       answer.name.toLowerCase().includes(searchString.toLowerCase())
  //     );

  //     return {
  //       ...tool,
  //       answer: filteredAnswers,
  //     };
  //   });

  //   setTools(filteredTools);
  // }, [searchString]);

  const [clicked, setClicked] = useState(0);

  return (
    <div className="overflow-y-scroll scrollbar-hide flex justify-around  flex-wrap  w-full">
      <div className=" w-full">
        <div>
          <ElementSectionToolbox />
        </div>
      </div>
    </div>
  );
};

export default Elements;
