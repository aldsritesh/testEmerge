import { useEffect, useState } from "react";
import TextInput from "@/components/controls/TextInput";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import ElementToolsLayout from "./tools/ElementToolsLayout";
import AccordionItem from "@/components/UI/AccordionItem";
import {
  BsBuildings,
  BsCalendarDate,
  BsMenuButtonWide,
  BsTelephoneInbound,
} from "react-icons/bs";
import { SiNamecheap } from "react-icons/si";
import {
  AiOutlineFileZip,
  AiOutlineUserAdd,
  AiOutlineUserSwitch,
} from "react-icons/ai";
import { TfiEmail } from "react-icons/tfi";
import { GoOrganization } from "react-icons/go";
import { FaCity, FaGlobeEurope, FaRegAddressCard } from "react-icons/fa";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { RiOpenSourceLine } from "react-icons/ri";
import { FiUserPlus } from "react-icons/fi";
import { MdRadioButtonChecked } from "react-icons/md";
import { TextInputElement } from "../widgets/form/TextInput";
import { RadioInputElement } from "../widgets/form/RadioElement";
import { TextAreaElement } from "../widgets/form/TextareaElement";
import { DatePickerElement } from "../widgets/form/DatePicker";

const tbStyles = {
  backgroundColor: "#fff",
  borderColor: "#d9d6d6",
  borderWidth: 1,
};

const baseTools = [
  {
    index: 1,
    question: "Layout",
    answer: [
      {
        name: "Full Name",
        tool: (
          <ElementToolsLayout
            toolName="Full Name"
            tool={
              <TextInputElement
                textInputProps={{
                  name: "fullName",
                  placeholder: "Full Name",
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
            toolName="First Name"
            tool={
              <TextInputElement
                textInputProps={{
                  name: "firstName",
                  placeholder: "First Name",
                  type: "text",
                }}
                {...tbStyles}
              />
            }
            image="@/../public/craft/hero.png"
            icon={<AiOutlineUserAdd className="h-4 w-4 text-gray-500" />}
          />
        ),
      },
      {
        name: "Last Name",
        tool: (
          <ElementToolsLayout
            toolName="Last Name"
            tool={
              <TextInputElement
                textInputProps={{
                  name: "lastName",
                  placeholder: "Last Name",
                  type: "text",
                }}
                {...tbStyles}
              />
            }
            image="@/../public/craft/hero.png"
            icon={<AiOutlineUserSwitch className="h-4 w-4 text-gray-500" />}
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
                textInputProps={{
                  name: "phone",
                  placeholder: "Phone",
                  type: "number",
                }}
                {...tbStyles}
              />
            }
            image="@/../public/craft/hero.png"
            icon={<BsTelephoneInbound className="h-4 w-4 text-gray-500" />}
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
  },
];

export default function StandardToolbox() {
  const [searchString, setSearchString] = useState("");
  const [tools, setTools] = useState(baseTools);

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

    setTools(filteredTools);
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

      <div className="h-[70vh] overflow-y-scroll scrollbar-hide ">
        <div className={`px-4 pb-2 flex flex-col`}>
          {tools.map((control: any, index: any) => (
            <div key={index}>
              {control?.answer.map((item: any, i: number) => (
                <div
                  key={i}
                  className={`w-full mb-3 hover:border-2 border-[#cadaff] hover:rounded-lg`}
                >
                  <div> {item.tool}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
