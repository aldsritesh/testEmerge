import { Text } from "../widgets/Text/Text";
import { useEffect, useState } from "react";
import TextInput from "@/components/controls/TextInput";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import ElementToolsLayout from "./tools/ElementToolsLayout";

import Divider from "../widgets/Divider";
import AccordionItem from "@/components/UI/AccordionItem";
import {
  BsCardText,
  BsImage,
  BsMenuButtonWide,
  BsPlusSquare,
} from "react-icons/bs";
import { TbHeading, TbTextSize } from "react-icons/tb";
import { FaHeading } from "react-icons/fa";
import { MdOutlineLocalParking } from "react-icons/md";
import Container from "../widgets/Container";
import { Headline } from "../widgets/Text/Headline";

const   baseTools = [
  {
    index: 1,
    question: "Layout",
    answer: [
      {
        name: "Slides",
        tool: (
          <ElementToolsLayout
            toolName="Slides"
            tool={
              <Container>
                <Headline text="Slide" alignment="center" />
              </Container>
            }
            image={require("@/../public/craft/grid/1.png")}
            icon={<BsPlusSquare className="h-5 w-5 text-gray-500" />}
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
            icon={<FaHeading className="h-5 w-5 text-gray-500" />}
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
            icon={<TbHeading className="h-5 w-5 text-gray-500" />}
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
            icon={<MdOutlineLocalParking className="h-5 w-5 text-gray-500" />}
          />
        ),
      },
      {
        name: "Label",
        tool: (
          <ElementToolsLayout
            toolName="Label"
            tool={
              <Text text="Enter Label..." alignment={"left"} tagName="label" />
            }
            image="@/../public/craft/hero.png"
            icon={<TbTextSize className="h-5 w-5 text-gray-500" />}
          />
        ),
      },
    ],
  },
];

export default function ElementToolbox() {
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

      <div className="h-[60vh] overflow-y-scroll scrollbar-hide ">
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
    </div>
  );
}
