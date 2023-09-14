import { useEffect, useState } from "react";
import TextInput from "@/components/controls/TextInput";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import PrebuiltToolsLayout from "./tools/PrebuiltToolsLayout";
import { Headline } from "../widgets/Text/Headline";

const baseTools = [
  {
    name: "Header layout",
    tool: (
      <PrebuiltToolsLayout
        toolName="Header Layout"
        tool={<Headline text="Slide" alignment="center" />}
        image={require("@/../public/craft/hero.png")}
      />
    ),
  },
];

export default function PrebuiltToolbox() {
  const [searchString, setSearchString] = useState("");
  const [tools, setTools] = useState(baseTools);

  useEffect(() => {
    if (searchString === "") {
      setTools(baseTools);
      return;
    }

    setTools(
      baseTools.filter((item) =>
        item.name.toLowerCase().includes(searchString.toLowerCase())
      )
    );
  }, [searchString]);

  return (
    <div className="p-4">
      <div className="mb-2">
        <TextInput
          lefticon={<MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />}
          placeholder="Search layout"
          value={searchString}
          onChange={({ target: { value } }) => setSearchString(value)}
        />
      </div>
      <div className="flex flex-col overflow-hidden gap-3 mt-1 w-full">
        {tools.map((item, index) => (
          <div
            key={index}
            className="w-full hover:border hover:border-blue-500"
          >
            {item.tool}
          </div>
        ))}
      </div>
    </div>
  );
}
