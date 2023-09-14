import PrebuiltToolsLayout from "./tools/PrebuiltToolsLayout";

import { useEffect, useState } from "react";
import TextInput from "@/components/controls/TextInput";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import AccordionItem from "@/components/UI/AccordionItem";
import { CardHeader } from "@mui/material";

import Loading from "@/components/UI/Loading";
import { MailHeaders } from "../MailTemplates/MailHeader";
import { MailImages } from "../MailTemplates/MailImage";
import { MailHeadings } from "../MailTemplates/MailHeading";
import { MailMessages } from "../MailTemplates/MailMessage";
import { MailPoints } from "../MailTemplates/MailPoints";
import { MailSurveys } from "../MailTemplates/MailSurvey";
import { MailFooters } from "../MailTemplates/MailFooter";

const tbStyles = {
  backgroundColor: "#fff",
  borderColor: "#d9d6d6",
  borderWidth: 1,
};

const baseTools = [
  {
    index: 1,
    question: "Elements",

    answer: [
      {
        name: "Mail Header",
        tool: (
          <PrebuiltToolsLayout
            toolName="Mail Header"
            tool={<MailHeaders />}
            image={require("../../../../../public/mail/emailHeader.png")}
          />
        ),
      },
      {
        name: "Mail Attachment",
        tool: (
          <PrebuiltToolsLayout
            toolName="Mail Attachment"
            tool={<MailImages />}
            image={require("../../../../../public/mail/emailAttachment.png")}
          />
        ),
      },
      {
        name: "Mail Heading",
        tool: (
          <PrebuiltToolsLayout
            toolName="Mail Heading"
            tool={<MailHeadings />}
            image={require("../../../../../public/mail/emailHeading.png")}
          />
        ),
      },
      {
        name: "Mail Message",
        tool: (
          <PrebuiltToolsLayout
            toolName="Messages Layout"
            tool={<MailMessages />}
            image={require("../../../../../public/mail/emailMessage.png")}
          />
        ),
      },
      {
        name: "Mail Points",
        tool: (
          <PrebuiltToolsLayout
            toolName="Mail Points"
            tool={<MailPoints />}
            image={require("../../../../../public/craft/sections/4.png")}
          />
        ),
      },
      {
        name: "Mail Surveys",
        tool: (
          <PrebuiltToolsLayout
            toolName="Mail Surveys"
            tool={<MailSurveys />}
            image={require("../../../../../public/craft/breadcrumbs.png")}
          />
        ),
      },
      {
        name: "Mail Footer",
        tool: (
          <PrebuiltToolsLayout
            toolName="Mail Footer"
            tool={<MailFooters />}
            image={require("../../../../../public/craft/footer.png")}
          />
        ),
      },
    ],
  },
  // {
  //   index: 2,
  //   question: "Templates",
  //   answer: [
  //     {
  //       name: "Chiro Template",
  //       tool: (
  //         <PrebuiltToolsLayout
  //           toolName="Chiro Template"
  //           tool={<ChiroTemplate />}
  //           image={require("@/../public/craft/hero.png")}
  //         />
  //       ),
  //     },
  //     {
  //       name: "Physical Therpay Template",
  //       tool: (
  //         <PrebuiltToolsLayout
  //           toolName="Physical Therpay Template"
  //           tool={<PhysicalTherapyTemplate />}
  //           image={require("@/../public/craft/hero.png")}
  //         />
  //       ),
  //     },
  //   ],
  // },
];

export default function EmailPrebuiltToolbox({ onclick }: any) {
  const [searchString, setSearchString] = useState("");
  const [tools, setTools] = useState(baseTools);
  const [isReady, setIsReady] = useState(true);

  useEffect(() => {
    if (searchString === "") {
      setTools(baseTools);
      return;
    }

    const filteredTools = baseTools.map((tool) => {
      const filteredAnswers = tool.answer.filter((answer: any) =>
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
