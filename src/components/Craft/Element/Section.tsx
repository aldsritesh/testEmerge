import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

import TextInput from "../../controls/TextInput";
// import { TextInputElement } from "../";

import ElementToolsLayout from "../Toolboxes/tools/ElementToolsLayout";

import { MdWidthFull, MdWidthNormal, MdWidthWide } from "react-icons/md";

import FullWidth from "../SectionsLayouts/FullWidth";
import Wide from "../SectionsLayouts/Wide";
import Medium from "../SectionsLayouts/Medium";
import Small from "../SectionsLayouts/Small";

const baseTools = [
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
];

const ElementSection = () => {
  const [filterValue, setFilterValue] = useState("");

  const handleFilter = (event: any) => {
    setFilterValue(event.target.value);
  };

  const filteredData = baseTools.filter((item: any) => {
    return item.name.toLowerCase().includes(filterValue.toLowerCase());
  });

  return (
    <div className="overflow-y-scroll scrollbar-hide flex justify-around  flex-wrap  w-full">
      <div className=" w-full">
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

export default ElementSection;
