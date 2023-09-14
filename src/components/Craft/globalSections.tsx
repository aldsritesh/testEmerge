import { ClockIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
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
// import { Carousels } from "./widgets/prebuilt/Carousel";
import { CtaLayout } from "./widgets/prebuilt/CtaLayout";
import { Footers } from "./widgets/prebuilt/Footer";
import { HeroLayout } from "./widgets/prebuilt/HeroLayout";
import { Testimonials } from "./widgets/prebuilt/Testimonials";
import { GlobalHeaderLayout } from "./GlobalSectionLayouts/HeaderLayout";
import ElementToolsLayout from "./Toolboxes/tools/ElementToolsLayout";
import { BsCardHeading, BsChatLeftQuote, BsFileRichtext } from "react-icons/bs";
import { GlobalHeroLayout } from "./GlobalSectionLayouts/HeroLayout";
import { RiQuestionAnswerLine } from "react-icons/ri";
import { TfiLayoutSliderAlt } from "react-icons/tfi";
import { GlobalCarouselsLayout } from "./GlobalSectionLayouts/CarouselsLayout";
import { GlobalBreadcrumbsLayout } from "./GlobalSectionLayouts/BreadcrumbsLayout";
import {
  MdOutlineCallToAction,
  MdOutlineContactPage,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import { CgToolbarBottom } from "react-icons/cg";
import { GiVerticalBanner } from "react-icons/gi";
import { GlobalFooterLayout } from "./GlobalSectionLayouts/FooterLayout";
import { GlobalBannerLayout } from "./GlobalSectionLayouts/BannerLayout";
import { GlobalCardHeader } from "./GlobalSectionLayouts/CardHeaderLayout";
import { GlobalCardBanner } from "./GlobalSectionLayouts/CardBannerLayout";
import { GlobalWebTestimonial } from "./GlobalSectionLayouts/WebTestimonialLayout";
import { GlobalCardBottom } from "./GlobalSectionLayouts/CardBottomLayout";
import { GlobalFooterWeb } from "./GlobalSectionLayouts/WebFooterLayout";
import { GlobalTeam } from "./GlobalSectionLayouts/TeamLayout";
import { AiOutlineTeam } from "react-icons/ai";
import { GlobalContactTemp } from "./GlobalSectionLayouts/ContactLayout";
import { GlobalCtaLayout } from "./GlobalSectionLayouts/CtaLayout";
import { GlobalBlogLayout } from "./GlobalSectionLayouts/BlogLayout";
import { GlobalFAQs } from "./GlobalSectionLayouts/FaqLayout";
import { GlobalTestimonialsLayout } from "./GlobalSectionLayouts/TestimonialLayout";

const tbStyles = {
  backgroundColor: "#fff",
  borderColor: "#d9d6d6",
  borderWidth: 1,
};

const baseTools = [
  {
    name: "Header layout",
    tool: (
      <ElementToolsLayout
        icon={<BsCardHeading className="h-5 w-5 text-gray-500" />}
        toolName="Header Layout"
        tool={<GlobalHeaderLayout />}
        image={require("@/../public/craft/hero.png")}
      />
    ),
  },
  {
    name: "Hero layout",
    tool: (
      <ElementToolsLayout
        icon={<BsCardHeading className="h-5 w-5 text-gray-500" />}
        toolName="Hero Layout"
        tool={<GlobalHeroLayout />}
        image={require("@/../public/craft/hero.png")}
      />
    ),
  },
  {
    name: "FAQ layout",
    tool: (
      <ElementToolsLayout
        icon={<RiQuestionAnswerLine className="h-5 w-5 text-gray-500 " />}
        toolName="FAQ Layout"
        tool={<GlobalFAQs />}
        image={require("@/../public/craft/hero.png")}
      />
    ),
  },
  {
    name: "Testimonial layout",
    tool: (
      <ElementToolsLayout
        icon={<BsChatLeftQuote className="h-5 w-5 text-gray-500 " />}
        toolName="Testimonial Layout"
        tool={<GlobalTestimonialsLayout />}
        image={require("@/../public/craft/hero.png")}
      />
    ),
  },

  // {
  //   name: "Carousels layout",
  //   tool: (
  //     <ElementToolsLayout
  //       icon={<TfiLayoutSliderAlt className="h-5 w-5 text-gray-500 " />}
  //       toolName="Carousels Layout"
  //       tool={<GlobalCarouselsLayout />}
  //       image={require("@/../public/craft/hero.png")}
  //     />
  //   ),
  // },
  {
    name: "Breadcrumbs layout",
    tool: (
      <ElementToolsLayout
        icon={
          <MdOutlineKeyboardDoubleArrowRight className="h-5 w-5 text-gray-500 " />
        }
        toolName="Breadcrumbs Layout"
        tool={<GlobalBreadcrumbsLayout />}
        image={require("@/../public/craft/hero.png")}
      />
    ),
  },
  {
    name: "Footer layout",
    tool: (
      <ElementToolsLayout
        icon={<CgToolbarBottom className="h-5 w-5 text-gray-500 " />}
        toolName="Footer Layout"
        tool={<GlobalFooterLayout />}
        image={require("@/../public/craft/hero.png")}
      />
    ),
  },
  {
    name: "Banner layout",
    tool: (
      <ElementToolsLayout
        icon={<GiVerticalBanner className="h-5 w-5 text-gray-500 " />}
        toolName="Banner Layout"
        tool={<GlobalBannerLayout />}
        image={require("@/../public/craft/hero.png")}
      />
    ),
  },
  {
    name: "Card Header layout",
    tool: (
      <ElementToolsLayout
        icon={<BsCardHeading className="h-5 w-5 text-gray-500" />}
        toolName="Card Header Layout"
        tool={<GlobalCardHeader />}
        image={require("@/../public/craft/hero.png")}
      />
    ),
  },
  {
    name: "Card Banner layout",
    tool: (
      <ElementToolsLayout
        icon={<GiVerticalBanner className="h-5 w-5 text-gray-500 " />}
        toolName="Card Banner Layout"
        tool={<GlobalCardBanner />}
        image={require("@/../public/craft/hero.png")}
      />
    ),
  },
  {
    name: "Web Testimonial layout",
    tool: (
      <ElementToolsLayout
        icon={<BsChatLeftQuote className="h-5 w-5 text-gray-500 " />}
        toolName="Web Testimonial Layout"
        tool={<GlobalWebTestimonial />}
        image={require("@/../public/craft/hero.png")}
      />
    ),
  },
  {
    name: "Card Bottom layout",
    tool: (
      <ElementToolsLayout
        icon={<CgToolbarBottom className="h-5 w-5 text-gray-500 " />}
        toolName="Card Bottom  Layout"
        tool={<GlobalCardBottom />}
        image={require("@/../public/craft/hero.png")}
      />
    ),
  },
  {
    name: "Footer Web layoutt",
    tool: (
      <ElementToolsLayout
        icon={<CgToolbarBottom className="h-5 w-5 text-gray-500 " />}
        toolName="Footer Web layout"
        tool={<GlobalFooterWeb />}
        image={require("@/../public/craft/hero.png")}
      />
    ),
  },
  {
    name: "Team layout",
    tool: (
      <ElementToolsLayout
        icon={<AiOutlineTeam className="h-5 w-5 text-gray-500 " />}
        toolName="Team layout"
        tool={<GlobalTeam />}
        image={require("@/../public/craft/hero.png")}
      />
    ),
  },
  {
    name: "Contact layout",
    tool: (
      <ElementToolsLayout
        icon={<MdOutlineContactPage className="h-5 w-5 text-gray-500 " />}
        toolName="Contact layout"
        tool={<GlobalContactTemp />}
        image={require("@/../public/craft/hero.png")}
      />
    ),
  },
  {
    name: "Cta layout",
    tool: (
      <ElementToolsLayout
        icon={<MdOutlineCallToAction className="h-5 w-5 text-gray-500 " />}
        toolName="Cta layout"
        tool={<GlobalCtaLayout />}
        image={require("@/../public/craft/hero.png")}
      />
    ),
  },
  {
    name: "Blog layout",
    tool: (
      <ElementToolsLayout
        icon={<BsFileRichtext className="h-5 w-5 text-gray-500 " />}
        toolName="Blog layout"
        tool={<GlobalBlogLayout />}
        image={require("@/../public/craft/hero.png")}
      />
    ),
  },
];
const GlobalSections = () => {
  const [filterValue, setFilterValue] = useState("");

  const handleFilter = (event: any) => {
    setFilterValue(event.target.value);
  };

  const filteredData = baseTools.filter((item: any) => {
    return item.name.toLowerCase().includes(filterValue.toLowerCase());
  });

  return (
    <div className="overflow-y-scroll scrollbar-hide flex justify-around  flex-wrap  w-full">
      <div className="w-full">
        <div className="mb-2 px-4">
          <TextInput
            lefticon={<MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />}
            placeholder="Search ..."
            value={filterValue}
            onChange={handleFilter}
          />
        </div>

        <div className="h-[80vh] overflow-y-scroll scrollbar-hide ">
          {filteredData.map((item, index) => (
            <div key={index} className="my-3 mx-4 rounded-lg hover:border-2">
              {item.tool}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlobalSections;
