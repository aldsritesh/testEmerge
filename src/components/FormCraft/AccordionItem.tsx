import React from "react";
import { Client, HydrationProvider } from "react-hydration-provider";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

interface IAccordionItem {
  faq: any;
  onToggle: any;
  active: any;
  titleBoxStyle: any;
  titleStyle: any;
  contentStyle: any;
}

export default function AccordionItem({
  faq,
  onToggle,
  active,
  titleBoxStyle,
  titleStyle,
  contentStyle,
}: IAccordionItem) {
  const { question, answer } = faq;

  return (
    <HydrationProvider>
      <Client>
        <div
          className={` ${titleBoxStyle}   flex flex-row justify-between items-center`}
          onClick={onToggle}
        >
          <p className={`${titleStyle}`}>{question}</p>
          <div className={`text-gray-600`}>
            {active ? (
              <BsChevronDown className="h-4 w-4" />
            ) : (
              <BsChevronUp className="h-4 w-4" />
            )}
          </div>
        </div>
        <div
          className={`px-4 pb-2 flex flex-wrap   ${
            active ? "" : "hidden bg-yellow-500"
          }`}
        >
          {answer.map((control: any, index: any) => (
            <div key={index} className={`w-full px-1 mb-2`}>
              {control.tool}
            </div>
          ))}
        </div>
      </Client>
    </HydrationProvider>
  );
}
