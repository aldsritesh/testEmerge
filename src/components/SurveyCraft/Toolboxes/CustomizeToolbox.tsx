import { Button } from "../widgets/Button";
import { Link } from "../widgets/Link";
import { useEffect, useState } from "react";
import TextInput from "@/components/controls/TextInput";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import ElementToolsLayout from "./tools/ElementToolsLayout";
import AccordionItem from "@/components/UI/AccordionItem";
import {
  BsCalendarDate,
  BsCardText,
  BsMenuButtonWide,
  BsTextParagraph,
  BsTextareaResize,
} from "react-icons/bs";
import { MdRadioButtonChecked } from "react-icons/md";
import { TbCheckbox, TbSelect } from "react-icons/tb";
import { AiOutlineLink } from "react-icons/ai";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { TextInputElement } from "../widgets/form/TextInput";
import { TextAreaElement } from "../widgets/form/TextareaElement";
import { RadioInputElement } from "../widgets/form/RadioElement";
import { CheckboxInputElement } from "../widgets/form/CheckboxElement";
import { SelectBoxInputElement } from "../widgets/form/SelectInputElement";
import { AttachmentElement } from "../widgets/form/Attachment";
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
        name: "Text Input",
        tool: (
          <ElementToolsLayout
            toolName="Text Input"
            tool={<TextInputElement {...tbStyles} />}
            image="@/../public/craft/hero.png"
            icon={<BsCardText className="h-4 w-4 text-gray-500" />}
          />
        ),
      },
      // {
      //   name: "Paragraph",
      //   tool: (
      //     <ElementToolsLayout
      //       toolName="Paragraph"
      //       tool={<Text text="Start typing here..." />}
      //       image="@/../public/craft/hero.png"
      //       icon={<BsTextParagraph className="h-4 w-4 text-gray-500" />}
      //     />
      //   ),
      // },
      {
        name: "Textarea",
        tool: (
          <ElementToolsLayout
            toolName="Textarea"
            tool={<TextAreaElement {...tbStyles} />}
            image="@/../public/craft/hero.png"
            icon={<BsTextareaResize className="h-4 w-4 text-gray-500" />}
          />
        ),
      },
      {
        name: "Radio",
        tool: (
          <ElementToolsLayout
            toolName="Radio"
            tool={<RadioInputElement />}
            image="@/../public/craft/hero.png"
            icon={<MdRadioButtonChecked className="h-4 w-4 text-gray-500" />}
          />
        ),
      },

      {
        name: "Checkbox",
        tool: (
          <ElementToolsLayout
            toolName="Checkbox"
            tool={<CheckboxInputElement {...tbStyles} />}
            image="@/../public/craft/hero.png"
            icon={<TbCheckbox className="h-4 w-4 text-gray-500" />}
          />
        ),
      },

      {
        name: "Select",
        tool: (
          <ElementToolsLayout
            toolName="Dropdown"
            tool={<SelectBoxInputElement {...tbStyles} />}
            image="@/../public/craft/hero.png"
            icon={<TbSelect className="h-4 w-4 text-gray-500" />}
          />
        ),
      },

      {
        name: "Hyperlink",
        tool: (
          <ElementToolsLayout
            toolName="Hyperlink"
            tool={<Link text="link" href="#" targetData={false} />}
            image="@/../public/craft/hero.png"
            icon={<AiOutlineLink className="h-4 w-4 text-gray-500" />}
          />
        ),
      },

      {
        name: "Attachment",
        tool: (
          <ElementToolsLayout
            toolName="Attachment"
            tool={<AttachmentElement />}
            image="@/../public/craft/hero.png"
            icon={<IoDocumentAttachOutline className="h-4 w-4 text-gray-500" />}
          />
        ),
      },

      {
        name: "Date Picker",
        tool: (
          <ElementToolsLayout
            toolName="Date Picker"
            tool={<DatePickerElement />}
            image="@/../public/craft/hero.png"
            icon={<BsCalendarDate className="h-4 w-4 text-gray-500" />}
          />
        ),
      },

      {
        name: "Button",
        tool: (
          <ElementToolsLayout
            toolName="Button"
            tool={<Button />}
            image="@/../public/craft/hero.png"
            icon={<BsMenuButtonWide className="h-4 w-4 text-gray-500" />}
          />
        ),
      },
    ],
  },
];

export default function CustomizeToolbox() {
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
        <div className={`px-4 pb-2 flex flex-col`}>
          {tools.map((control: any, index: any) => (
            <div key={index}>
              {control?.answer.map((item: any, i: number) => (
                <div
                  key={i}
                  className={`w-full mb-3 hover:border-2 border-[#cadaff] hover:rounded-lg`}
                >
                  <p> {item.tool}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
