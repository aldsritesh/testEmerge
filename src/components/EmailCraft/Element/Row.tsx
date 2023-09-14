import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

import { TbColumns1 } from "react-icons/tb";
import TextInput from "../../controls/TextInput";
// import { TextInputElement } from "../";
import { Grid } from "../../SurveyCraft/widgets/Grid";

import ElementToolsLayout from "../Toolboxes/tools/ElementToolsLayout";

import { TfiLayoutColumn2, TfiLayoutColumn3 } from "react-icons/tfi";

const baseTools = [
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
];

const ElementRow = () => {
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
        <div className="h-[70vh] overflow-y-scroll scrollbar-hide ">
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

export default ElementRow;
