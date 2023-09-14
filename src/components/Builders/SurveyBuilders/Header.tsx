import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

export default function Header() {
  const buttonData = [
    {
      id: "tab1",
      label: "Manage",
      content: " ",
    },
    {
      id: "tab2",
      label: "Blog",
      content: " ",
    },
    {
      id: "tab3",
      label: "Site Tree",
      content: " ",
    },
    {
      id: "tab4",
      label: "SEO",
      content: " ",
    },
  ];
  const [buttonDemo, setButtonDemo] = useState<any>(buttonData[0].id);

  return (
    <div>
      <div className="bg-white  py-4 px-5">
        <div className="flex justify-start  items-center">
          <div className="mr-5">
            <p className="mt-2 text-xl font-semibold text-gray-700">
              Survey Builder
            </p>
          </div>
          {/* <div className="bg-gray-200 flex items-center my-2 rounded-lg">
            {buttonData?.map((tab: any, index: any) => (
              <div
                key={index}
                onClick={() => setButtonDemo(tab.id)}
                className={`py-2 px-4   duration-300   ${
                  buttonDemo == tab.id
                    ? "bg-white text-darkBlack shadow-md shadow-gray-400 rounded-md"
                    : "  text-gray-400 "
                } cursor-pointer`}
              >
                {tab.label}
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}
