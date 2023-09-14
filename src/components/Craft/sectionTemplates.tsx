import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";
import { RxDragHandleDots2 } from "react-icons/rx";
import TextInput from "../controls/TextInput";
import AccordionItem from "../UI/AccordionItem";
import { TemplateOne } from "./Templates/dentalTemplate";
import { Banner } from "./Templates/dentalTemplate/banner";
import { CardBottomNew } from "./Templates/dentalTemplate/cardBottom";
import { CardHeader } from "./Templates/dentalTemplate/cardHeader";
import { CardBanner } from "./Templates/dentalTemplate/cards";
import { ContactTemp } from "./Templates/dentalTemplate/contactUs";
import { FooterWeb } from "./Templates/dentalTemplate/footer";
import { Team } from "./Templates/dentalTemplate/team";
import { WebTestimonial } from "./Templates/dentalTemplate/webTestimonial";
import PrebuiltToolsLayout from "./Toolboxes/tools/PrebuiltToolsLayout";
import { FAQs } from "./widgets/FAQs";
import { BlogLayout } from "./widgets/prebuilt/BlogLayout";
import { Breadcrumbs } from "./widgets/prebuilt/Breadcrumbs";
import { Carousels } from "./widgets/prebuilt/Carousel";
import { CtaLayout } from "./widgets/prebuilt/CtaLayout";
import { Footers } from "./widgets/prebuilt/Footer";
import { HeaderLayout } from "./widgets/prebuilt/Header";
import { HeroLayout } from "./widgets/prebuilt/HeroLayout";
import { Testimonials } from "./widgets/prebuilt/Testimonials";
import ElementToolsLayout from "./Toolboxes/tools/ElementToolsLayout";
import { HiOutlineTemplate } from "react-icons/hi";
import { ChiroTemplate } from "./TemplateSection/ChiroTemplate";

const tbStyles = {
  backgroundColor: "#fff",
  borderColor: "#d9d6d6",
  borderWidth: 1,
};

const baseTools = [
  {
    index: 1,
    question: "Templates",
    answer: [
      {
        name: "Chiro Template",
        tool: (
          <ElementToolsLayout
            icon={<HiOutlineTemplate className="h-5 w-5 text-gray-500" />}
            toolName="Chiro Template"
            tool={<ChiroTemplate />}
            image={require("@/../public/craft/hero.png")}
          />
        ),
      },
    ],
  },
];
const SectionTemplates = () => {
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
    <div className="overflow-y-scroll scrollbar-hide flex justify-around  flex-wrap  w-full ">
      <div className="w-full">
        <div className="mb-2 px-4">
          <TextInput
            lefticon={<MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />}
            placeholder="Search layout"
            value={searchString}
            onChange={({ target: { value } }) => setSearchString(value)}
          />
        </div>

        <div className="h-[80vh] overflow-y-scroll scrollbar-hide ">
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
    </div>
  );
};

export default SectionTemplates;
