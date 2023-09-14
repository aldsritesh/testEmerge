import { Button } from "../widgets/Button";
import { Text } from "../widgets/Text/Text";
import { Card } from "../widgets/Card";
import { BuilderImage } from "../widgets/Image";
import { Link } from "../widgets/Link";

import { useEffect, useState } from "react";
import TextInput from "@/components/controls/TextInput";
import {
  MagnifyingGlassIcon,
  ClockIcon,
  CodeBracketIcon,
  ListBulletIcon,
  MapIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";
import ElementToolsLayout from "./tools/ElementToolsLayout";

import Divider from "../widgets/Divider";
import AccordionItem from "@/components/UI/AccordionItem";
import {
  BsBuildings,
  BsCardText,
  BsImage,
  BsMenuButtonWide,
} from "react-icons/bs";
import { TbTextSize } from "react-icons/tb";
import { RxDividerHorizontal } from "react-icons/rx";
import { IoShareSocialOutline } from "react-icons/io5";
import { BuilderVideo } from "../widgets/Video";
import { Social } from "../widgets/Social";
import PrebuiltToolsLayout from "./tools/PrebuiltToolsLayout";
import { formControls } from "@/components/FormCraft/Toolboxes/ElementToolbox";
import { Headline } from "../widgets/Text/Headline";
import { List } from "../widgets/List";
import CustomHTML from "../widgets/CustomHTML";
import MapElement from "../widgets/Map";
import Countdown from "../widgets/Countdown";
import Progress from "../widgets/Progress";

import { SiProgress } from "react-icons/si";
import Calendar from "../widgets/Calendar";
import { Review } from "../widgets/Reviews";
import { UsersIcon } from "@heroicons/react/24/solid";
import { OrderConfirmation } from "../widgets/prebuilt/OrderConfirmation";
import { OrderOneStep } from "../widgets/prebuilt/OrderOneStep";
import {
  FaCity,
  FaGlobeEurope,
  FaQq,
  FaRegAddressCard,
  FaWpforms,
} from "react-icons/fa";
import { FAQs } from "../widgets/FAQs";
import { TextInputElement } from "../widgets/form/TextInput";
import { TextAreaElement } from "../widgets/form/TextareaElement";
import { RadioInputElement } from "../widgets/form/RadioElement";
import { CheckboxInputElement } from "../widgets/form/CheckboxElement";
import { SelectBoxInputElement } from "../widgets/form/SelectInputElement";
import { AttachmentElement } from "../widgets/form/Attachment";
import { DatePickerElement } from "../widgets/form/DatePicker";
import {
  BsCalendarDate,
  BsTextParagraph,
  BsTextareaResize,
} from "react-icons/bs";
import {
  MdRadioButtonChecked,
  MdWidthFull,
  MdWidthNormal,
  MdWidthWide,
} from "react-icons/md";
import { TbCheckbox, TbSelect } from "react-icons/tb";
import {
  AiOutlineFileZip,
  AiOutlineLink,
  AiOutlineUserAdd,
  AiOutlineVideoCameraAdd,
} from "react-icons/ai";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { MainForm } from "../widgets/form/MainForm";
import { Grid } from "../widgets/Grid";
// import FullWidth from "../SectionsLayouts/FullWidth";
// import Wide from "../SectionsLayouts/Wide";
// import Medium from "../SectionsLayouts/Medium";
// import Small from "../SectionsLayouts/Small";
// import FullWidth from "../SectionsLayouts/FullWidth";
import Loading from "@/components/UI/Loading";
import { FiUserPlus } from "react-icons/fi";
import { RiOpenSourceLine } from "react-icons/ri";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { TfiEmail } from "react-icons/tfi";
import { GoOrganization } from "react-icons/go";
import FullWidth from "../widgets/SectionsLayouts/FullWidth";
import MediumWidth from "../widgets/SectionsLayouts/Medium";
import SmallWidth from "../widgets/SectionsLayouts/Small";

const tbStyles = {
  backgroundColor: "#fff",
  borderColor: "#d9d6d6",
  borderWidth: 1,
};

const baseTools = [
  {
    index: 1,
    question: "Section",
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
      // {
      //   name: "Wide",
      //   tool: (
      //     <ElementToolsLayout
      //       toolName="Wide"
      //       tool={<WideW />}
      //       icon={<MdWidthWide className="h-5 w-10 text-gray-500" />}
      //       image={require("@/../public/craft/hero.png")}
      //     />
      //   ),
      // },
      {
        name: "Medium",
        tool: (
          <ElementToolsLayout
            toolName="Medium"
            tool={<MediumWidth />}
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
            tool={<SmallWidth />}
            icon={<MdWidthNormal className="h-5 w-10 text-gray-500" />}
            image={require("@/../public/craft/hero.png")}
          />
        ),
      },
    ],
  },
  {
    index: 2,
    question: "Layout",
    answer: [
      {
        name: "Column 1",
        tool: (
          <PrebuiltToolsLayout
            toolName="Column 1"
            tool={<Grid col={1} />}
            image={require("@/../public/craft/grid/1.png")}
          />
        ),
      },
      {
        name: "Column 2",
        tool: (
          <PrebuiltToolsLayout
            toolName="Column 2"
            tool={<Grid col={2} />}
            image={require("@/../public/craft/grid/2.png")}
          />
        ),
      },
      {
        name: "Column 3",
        tool: (
          <PrebuiltToolsLayout
            toolName="Column 3"
            tool={<Grid col={3} />}
            image={require("@/../public/craft/grid/3.png")}
          />
        ),
      },
      {
        name: "Column 4",
        tool: (
          <PrebuiltToolsLayout
            toolName="Column 4"
            tool={<Grid col={4} />}
            image={require("@/../public/craft/grid/4.png")}
          />
        ),
      },
    ],
  },
  {
    index: 3,
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
            tool={<Calendar />}
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
    ],
  },
  {
    index: 4,
    question: "Forms",
    answer: [
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
      {
        name: "First Name",
        tool: (
          <ElementToolsLayout
            toolName="First Name"
            tool={
              <TextInputElement
                text="First Name"
                textInputProps={{
                  name: "FirstName",
                  placeholder: "First Name",
                  type: "text",
                }}
                {...tbStyles}
              />
            }
            image="@/../public/craft/hero.png"
            icon={<FiUserPlus className="h-4 w-4 text-gray-500" />}
          />
        ),
      },
      {
        name: "First Name",
        tool: (
          <ElementToolsLayout
            toolName="Last Name"
            tool={
              <TextInputElement
                text="Last Name"
                textInputProps={{
                  name: "LastName",
                  placeholder: "FLast Name",
                  type: "text",
                }}
                {...tbStyles}
              />
            }
            image="@/../public/craft/hero.png"
            icon={<FiUserPlus className="h-4 w-4 text-gray-500" />}
          />
        ),
      },
      {
        name: "FullName",
        tool: (
          <ElementToolsLayout
            toolName="FullName"
            tool={
              <TextInputElement
                text="FullName"
                textInputProps={{
                  name: "FullName",
                  placeholder: "FullName",
                  type: "text",
                }}
                {...tbStyles}
              />
            }
            image="@/../public/craft/hero.png"
            icon={<FiUserPlus className="h-4 w-4 text-gray-500" />}
          />
        ),
      },
      {
        name: "Phone",
        tool: (
          <ElementToolsLayout
            toolName="Phone"
            tool={
              <TextInputElement
                text="Phone"
                textInputProps={{
                  name: "Phone",
                  placeholder: "Phone",
                  type: "text",
                }}
                {...tbStyles}
              />
            }
            image="@/../public/craft/hero.png"
            icon={<FiUserPlus className="h-4 w-4 text-gray-500" />}
          />
        ),
      },
      {
        name: "Button",
        tool: (
          <ElementToolsLayout
            toolName="Button"
            tool={<Button />}
            image="@/../public/craft/hero.png"
            icon={<BsMenuButtonWide className="h-4 w-4 text-gray-500" />}
          />
        ),
      },
      {
        name: "Gender",
        tool: (
          <ElementToolsLayout
            toolName="Gender"
            tool={<RadioInputElement />}
            image="@/../public/craft/hero.png"
            icon={<MdRadioButtonChecked className="h-4 w-4 text-gray-500" />}
          />
        ),
      },
      {
        name: "Email",
        tool: (
          <ElementToolsLayout
            toolName="Email"
            tool={
              <TextInputElement
                text="Email"
                textInputProps={{
                  name: "email",
                  placeholder: "Email",
                  type: "email",
                }}
                {...tbStyles}
              />
            }
            image="@/../public/craft/hero.png"
            icon={<TfiEmail className="h-4 w-4 text-gray-500" />}
          />
        ),
      },
      {
        name: "Organization",
        tool: (
          <ElementToolsLayout
            toolName="Organization"
            tool={
              <TextInputElement
                text="Organization"
                textInputProps={{
                  name: "organization",
                  placeholder: "Organization",
                  type: "text",
                }}
                {...tbStyles}
              />
            }
            image="@/../public/craft/hero.png"
            icon={<GoOrganization className="h-4 w-4 text-gray-500" />}
          />
        ),
      },
      {
        name: "Address",
        tool: (
          <ElementToolsLayout
            toolName="Address"
            tool={
              <TextAreaElement
                text="Address"
                textLabel="Address"
                textInputProps={{
                  name: "address",
                  placeholder: "Address",
                }}
                {...tbStyles}
              />
            }
            image="@/../public/craft/hero.png"
            icon={<FaRegAddressCard className="h-4 w-4 text-gray-500" />}
          />
        ),
      },
      {
        name: "City",
        tool: (
          <ElementToolsLayout
            toolName="City"
            tool={
              <TextInputElement
                text="City"
                textInputProps={{
                  name: "city",
                  placeholder: "City",
                  type: "text",
                }}
                {...tbStyles}
              />
            }
            image="@/../public/craft/hero.png"
            icon={<FaCity className="h-4 w-4 text-gray-500" />}
          />
        ),
      },
      {
        name: "State",
        tool: (
          <ElementToolsLayout
            toolName="State"
            tool={
              <TextInputElement
                text="State"
                textInputProps={{
                  name: "state",
                  placeholder: "State",
                  type: "text",
                }}
                {...tbStyles}
              />
            }
            image="@/../public/craft/hero.png"
            icon={<BsBuildings className="h-4 w-4 text-gray-500" />}
          />
        ),
      },
      {
        name: "Country",
        tool: (
          <ElementToolsLayout
            toolName="Country"
            tool={
              <TextInputElement
                text="Country"
                textInputProps={{
                  name: "country",
                  placeholder: "Country",
                  type: "text",
                }}
                {...tbStyles}
              />
            }
            image="@/../public/craft/hero.png"
            icon={<FaGlobeEurope className="h-4 w-4 text-gray-500" />}
          />
        ),
      },
      {
        name: "Postal Code",
        tool: (
          <ElementToolsLayout
            toolName="Postal Code"
            tool={
              <TextInputElement
                text="Postal Code"
                textInputProps={{
                  name: "postal_code",
                  placeholder: "Postal Code",
                  type: "text",
                }}
                {...tbStyles}
              />
            }
            image="@/../public/craft/hero.png"
            icon={<AiOutlineFileZip className="h-4 w-4 text-gray-500" />}
          />
        ),
      },
      {
        name: "Website",
        tool: (
          <ElementToolsLayout
            toolName="Website"
            tool={
              <TextInputElement
                text="Website"
                textInputProps={{
                  name: "website",
                  placeholder: "Website",
                  type: "url",
                }}
                {...tbStyles}
              />
            }
            image="@/../public/craft/hero.png"
            icon={<HiOutlineGlobeAlt className="h-4 w-4 text-gray-500" />}
          />
        ),
      },
      {
        name: "Source",
        tool: (
          <ElementToolsLayout
            toolName="Source"
            tool={
              <TextInputElement
                text="Source"
                textInputProps={{
                  name: "source",
                  placeholder: "Source",
                  type: "text",
                }}
                {...tbStyles}
              />
            }
            image="@/../public/craft/hero.png"
            icon={<RiOpenSourceLine className="h-4 w-4 text-gray-500" />}
          />
        ),
      },
      {
        name: "Date of Birth",
        tool: (
          <ElementToolsLayout
            toolName="Date of Birth"
            tool={<DatePickerElement />}
            image="@/../public/craft/hero.png"
            icon={<BsCalendarDate className="h-4 w-4 text-gray-500" />}
          />
        ),
      },
    ],
    //   answer: [
    //     {
    //       name: "Label",
    //       tool: (
    //         <ElementToolsLayout
    //           toolName="Label"
    //           tool={
    //             <Text text="Enter Label..." alignment={"left"} tagName="label" />
    //           }
    //           image="@/../public/craft/hero.png"
    //           icon={<TbTextSize className="h-5 w-5 text-gray-500" />}
    //         />
    //       ),
    //     },
    //     {
    //       name: "Text Input",
    //       tool: (
    //         <ElementToolsLayout
    //           toolName="Text Input"
    //           tool={<TextInputElement {...tbStyles} />}
    //           image="@/../public/craft/hero.png"
    //           icon={<BsCardText className="h-4 w-4 text-gray-500" />}
    //         />
    //       ),
    //     },

    //     {
    //       name: "Textarea",
    //       tool: (
    //         <ElementToolsLayout
    //           toolName="Textarea"
    //           tool={<TextAreaElement {...tbStyles} />}
    //           image="@/../public/craft/hero.png"
    //           icon={<BsTextareaResize className="h-4 w-4 text-gray-500" />}
    //         />
    //       ),
    //     },
    //     {
    //       name: "Radio",
    //       tool: (
    //         <ElementToolsLayout
    //           toolName="Radio"
    //           tool={<RadioInputElement />}
    //           image="@/../public/craft/hero.png"
    //           icon={<MdRadioButtonChecked className="h-4 w-4 text-gray-500" />}
    //         />
    //       ),
    //     },

    //     {
    //       name: "Checkbox",
    //       tool: (
    //         <ElementToolsLayout
    //           toolName="Checkbox"
    //           tool={<CheckboxInputElement {...tbStyles} />}
    //           image="@/../public/craft/hero.png"
    //           icon={<TbCheckbox className="h-4 w-4 text-gray-500" />}
    //         />
    //       ),
    //     },

    //     {
    //       name: "Select",
    //       tool: (
    //         <ElementToolsLayout
    //           toolName="Dropdown"
    //           tool={<SelectBoxInputElement {...tbStyles} />}
    //           image="@/../public/craft/hero.png"
    //           icon={<TbSelect className="h-4 w-4 text-gray-500" />}
    //         />
    //       ),
    //     },

    //     {
    //       name: "Attachment",
    //       tool: (
    //         <ElementToolsLayout
    //           toolName="Attachment"
    //           tool={<AttachmentElement />}
    //           image="@/../public/craft/hero.png"
    //           icon={<IoDocumentAttachOutline className="h-4 w-4 text-gray-500" />}
    //         />
    //       ),
    //     },

    //     {
    //       name: "Date Picker",
    //       tool: (
    //         <ElementToolsLayout
    //           toolName="Date Picker"
    //           tool={<DatePickerElement />}
    //           image="@/../public/craft/hero.png"
    //           icon={<BsCalendarDate className="h-4 w-4 text-gray-500" />}
    //         />
    //       ),
    //     },
    //   ],
    // },
  },
  // {
  //   index: 3,
  //   question: "Forms",
  //   answer: [
  //     {
  //       name: "Label",
  //       tool: (
  //         <ElementToolsLayout
  //           toolName="Label"
  //           tool={
  //             <Text text="Enter Label..." alignment={"left"} tagName="label" />
  //           }
  //           image="@/../public/craft/hero.png"
  //           icon={<TbTextSize className="h-5 w-5 text-gray-500" />}
  //         />
  //       ),
  //     },
  //     {
  //       name: "Text Input",
  //       tool: (
  //         <ElementToolsLayout
  //           toolName="Text Input"
  //           tool={<TextInputElement {...tbStyles} />}
  //           image="@/../public/craft/hero.png"
  //           icon={<BsCardText className="h-4 w-4 text-gray-500" />}
  //         />
  //       ),
  //     },

  //     {
  //       name: "Textarea",
  //       tool: (
  //         <ElementToolsLayout
  //           toolName="Textarea"
  //           tool={<TextAreaElement {...tbStyles} />}
  //           image="@/../public/craft/hero.png"
  //           icon={<BsTextareaResize className="h-4 w-4 text-gray-500" />}
  //         />
  //       ),
  //     },
  //     {
  //       name: "Radio",
  //       tool: (
  //         <ElementToolsLayout
  //           toolName="Radio"
  //           tool={<RadioInputElement />}
  //           image="@/../public/craft/hero.png"
  //           icon={<MdRadioButtonChecked className="h-4 w-4 text-gray-500" />}
  //         />
  //       ),
  //     },

  //     {
  //       name: "Checkbox",
  //       tool: (
  //         <ElementToolsLayout
  //           toolName="Checkbox"
  //           tool={<CheckboxInputElement {...tbStyles} />}
  //           image="@/../public/craft/hero.png"
  //           icon={<TbCheckbox className="h-4 w-4 text-gray-500" />}
  //         />
  //       ),
  //     },

  //     {
  //       name: "Select",
  //       tool: (
  //         <ElementToolsLayout
  //           toolName="Dropdown"
  //           tool={<SelectBoxInputElement {...tbStyles} />}
  //           image="@/../public/craft/hero.png"
  //           icon={<TbSelect className="h-4 w-4 text-gray-500" />}
  //         />
  //       ),
  //     },

  //     {
  //       name: "Attachment",
  //       tool: (
  //         <ElementToolsLayout
  //           toolName="Attachment"
  //           tool={<AttachmentElement />}
  //           image="@/../public/craft/hero.png"
  //           icon={<IoDocumentAttachOutline className="h-4 w-4 text-gray-500" />}
  //         />
  //       ),
  //     },

  //     {
  //       name: "Date Picker",
  //       tool: (
  //         <ElementToolsLayout
  //           toolName="Date Picker"
  //           tool={<DatePickerElement />}
  //           image="@/../public/craft/hero.png"
  //           icon={<BsCalendarDate className="h-4 w-4 text-gray-500" />}
  //         />
  //       ),
  //     },
  //   ],
  // },
];

export default function ElementToolbox() {
  const [searchString, setSearchString] = useState("");
  const [tools, setTools] = useState(baseTools);

  const [isReady, setIsReady] = useState(true);

  useEffect(() => {
    if (searchString === "") {
      setTools(baseTools);
      return;
    }

    const filteredTools = baseTools.map((tool) => {
      const filteredAnswers = tool.answer.filter((answer) =>
        answer.name.toLowerCase().includes(searchString.toLowerCase())
      );

      return {
        ...tool,
        answer: filteredAnswers,
      };
    });
  }, [searchString]);

  const [clicked, setClicked] = useState(0);
  const handleToggle = (index: any) => {
    if (clicked === index) {
      return setClicked(0);
    }
    setClicked(index);
  };

  return (
    <div className="mt-3">
      <div className="mb-2 px-4">
        <TextInput
          lefticon={<MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />}
          placeholder="Search layout"
          value={searchString}
          onChange={({ target: { value } }) => setSearchString(value)}
        />
      </div>
      {isReady ? (
        <div className="h-full overflow-y-scroll scrollbar-hide ">
          {tools.map((item, index) => (
            <AccordionItem
              faq={item}
              key={index}
              onToggle={() => handleToggle(index)}
              active={clicked === index}
              titleBoxStyle={`py-5 rounded-sm border-t-[1px] ${
                clicked === index ? null : "border-b-[1px]"
              } border-gray-200 px-4 bg-white`}
              titleStyle="text-gray-600 text-lg font-medium"
              contentStyle="w-full mb-3 hover:border-2 border-[#cadaff] hover:rounded-lg"
            />
          ))}
        </div>
      ) : (
        <div className="p-4">
          <Loading />
        </div>
      )}
    </div>
  );
}
