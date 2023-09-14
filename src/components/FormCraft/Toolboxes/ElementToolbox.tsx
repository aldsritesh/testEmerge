import { useEffect, useState, useContext } from "react";
import TextInput from "@/components/controls/TextInput";
import { MultiboxTextInputElement } from "../widgets/MultiboxTextInput";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import ElementToolsLayout from "./tools/ElementToolsLayout";

import {
  BsCalendarDate,
  BsCardText,
  BsMenuButtonWide,
  BsTextParagraph,
  BsTextareaResize,
  BsChevronDown,
  BsChevronUp,
  BsTelephoneInbound,
  BsBuildings,
  BsGrid1X2,
} from "react-icons/bs";

import PrebuiltToolsLayout from "./tools/PrebuiltToolsLayout";
import DropdownMultipleNext from "../../Settings/CustomFields/AllFields/DropdownMultiple";
import { TextInputElement } from "../widgets/TextInput";
import { Grid } from "@/components/Craft/widgets/Grid";
import AccordionItem from "../AccordionItem";
import { TextAreaElement } from "../widgets/TextareaElement";
import { RadioInputElement } from "../widgets/RadioElement";
import { Text } from "@/components/Craft/widgets/Text/Text";
import { CheckboxInputElement } from "../widgets/CheckboxElement";
import { SelectBoxInputElement } from "../widgets/SelectInputElement";
import { Link } from "@/components/Craft/widgets/Link";
import { AttachmentElement } from "../widgets/Attachment";
import { DatePickerElement } from "../widgets/DatePicker";
import { Button } from "@/components/Craft/widgets/Button";
import { MdRadioButtonChecked } from "react-icons/md";
import { TbCheckbox, TbSelect } from "react-icons/tb";
import {
  AiOutlineClose,
  AiOutlineFileZip,
  AiOutlineLink,
  AiOutlineUserAdd,
  AiOutlineUserSwitch,
} from "react-icons/ai";
import ImageAttachment from "@/components/controls/ImageAttachment";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { FiUserPlus } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { GoOrganization } from "react-icons/go";
import {
  FaCity,
  FaFolderMinus,
  FaGlobeEurope,
  FaRegAddressCard,
} from "react-icons/fa";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { RiOpenSourceLine } from "react-icons/ri";
import { BiAddToQueue, BiLabel } from "react-icons/bi";
import axios from "axios";
import { baseUrl } from "@/config/APIConstants";
import { PhoneInputElement } from "../widgets/PhoneInputElement";
import { MonetoryInputElement } from "../widgets/MonetoryInputElement";
import { FileUploadInputElement } from "../widgets/FileUploadInputElement";
import { SignatureInputElement } from "../widgets/SignatureInputElement";
import Singleline from "@/components/Settings/CustomFields/AllFields/Singleline/Singleline";
import Multiline from "@/components/Settings/CustomFields/AllFields/Multiline/Multiline";
import Textboxlist from "@/components/Settings/CustomFields/AllFields/Textboxlist/Textboxlist";
import Number from "@/components/Settings/CustomFields/AllFields/Number/Number";
import Phone from "@/components/Contact/Filter/ContactInformation/Phone";
import Monetry from "@/components/Settings/CustomFields/AllFields/Monetry";
import DropdownSingle from "@/components/Settings/CustomFields/AllFields/DropdownSingle";
import DropdownMultiple from "@/components/Settings/CustomFields/AllFields/DropdownMultiple";
import RadioSelect from "@/components/Settings/CustomFields/AllFields/RadioSelect";
import Checkboxx from "@/components/Settings/CustomFields/AllFields/Checkbox/Checkbox";
import DatePickers from "@/components/Settings/CustomFields/AllFields/Datepicker";
import FileUpload from "@/components/Settings/CustomFields/AllFields/FileUpload";
import Signature from "@/components/Settings/CustomFields/AllFields/Signature";
import SinglelineNext from "@/components/Settings/CustomFields/AllFields/Singleline/SinglelineNext";
import MultilineNext from "@/components/Settings/CustomFields/AllFields/Multiline/MultilineNext";
import TextboxlistNext from "@/components/Settings/CustomFields/AllFields/Textboxlist/TextboxlistNext";
import NumberNext from "@/components/Settings/CustomFields/AllFields/Number/NumberNext";
import PhoneNext from "@/components/Settings/CustomFields/AllFields/Phone/PhoneNext";
import MonetryNext from "@/components/Settings/CustomFields/AllFields/Monetry/MonetryNext";
import DropdownSingleNext from "@/components/Settings/CustomFields/AllFields/DropdownSingle/DropdownSingleNext";
import RadioNext from "@/components/Settings/CustomFields/AllFields/RadioSelect/RadioNext";
import CheckboxNext from "@/components/Settings/CustomFields/AllFields/Checkbox/CheckboxNext";
import DatePickerNext from "@/components/Settings/CustomFields/AllFields/Datepicker/DatePickerNext";
import FileUploadNext from "@/components/Settings/CustomFields/AllFields/FileUpload/FileUploadNext";
import SignatureNext from "@/components/Settings/CustomFields/AllFields/Signature/SignatureNext";
import ModalDerived from "@/components/Modal";
import { formDataState } from "@/atoms/formData";
import { useRecoilState } from "recoil";
import { GlobalContext } from "@/layouts/GlobalLayout";
import TagSelect from "@/components/controls/TagSelect";
import { CPTSelectElement } from "../widgets/CPTSelect";
import { useAuthentication } from "@/controllers/auth";

const tbStyles = {
  backgroundColor: "#fff",
  borderColor: "#d9d6d6",
  borderWidth: 1,
};

// export const formControls = [
//   {
//     name: "Label",
//     tool: (
//       <ElementToolsLayout
//         toolName="Label"
//         tool={
//           <Text
//             text="Label"
//             fontSize={18}
//             marginBottom={2}
//             color="#4b5563"
//             bold="font-bold"
//           />
//         }
//         image="@/../public/craft/hero.png"
//         icon={<BiLabel className="h-4 w-4 text-gray-500" />}
//       />
//     ),
//   },
//   {
//     name: "Submit Button",
//     tool: (
//       <ElementToolsLayout
//         toolName="Submit Button"
//         tool={<Button type="submit" text="Submit Button" {...tbStyles} />}
//         image="@/../public/craft/hero.png"
//         icon={<FiUserPlus className="h-4 w-4 text-gray-500" />}
//       />
//     ),
//   },
//   {
//     name: "Text Input",
//     tool: (
//       <ElementToolsLayout
//         toolName="Text Input"
//         tool={<TextInputElement text="Text Input" />}
//         image="@/../public/craft/hero.png"
//         icon={<BsCardText className="h-4 w-4 text-gray-500" />}
//       />
//     ),
//   },
//   {
//     name: "Paragraph",
//     tool: (
//       <ElementToolsLayout
//         toolName="Paragraph"
//         tool={<Text text="Start typing here..." />}
//         image="@/../public/craft/hero.png"
//         icon={<BsTextParagraph className="h-4 w-4 text-gray-500" />}
//       />
//     ),
//   },
//   {
//     name: "Textarea",
//     tool: (
//       <ElementToolsLayout
//         toolName="Textarea"
//         tool={<TextAreaElement textLabel="Text Area" />}
//         image="@/../public/craft/hero.png"
//         icon={<BsTextareaResize className="h-4 w-4 text-gray-500" />}
//       />
//     ),
//   },
//   {
//     name: "Radio",
//     tool: (
//       <ElementToolsLayout
//         toolName="Radio"
//         tool={
//           <RadioInputElement
//             radios={[
//               {
//                 radioProps: {
//                   checked: true,
//                   value: "Male",
//                   required: true,
//                 },
//                 label: "Male",
//               },
//               {
//                 radioProps: {
//                   value: "Female",
//                   required: true,
//                 },
//                 label: "Female",
//               },
//             ]}
//           />
//         }
//         image="@/../public/craft/hero.png"
//         icon={<MdRadioButtonChecked className="h-4 w-4 text-gray-500" />}
//       />
//     ),
//   },

//   {
//     name: "Checkbox",
//     tool: (
//       <ElementToolsLayout
//         toolName="Checkbox"
//         tool={<CheckboxInputElement />}
//         image="@/../public/craft/hero.png"
//         icon={<TbCheckbox className="h-4 w-4 text-gray-500" />}
//       />
//     ),
//   },

//   {
//     name: "Dropdown",
//     tool: (
//       <ElementToolsLayout
//         toolName="Dropdown"
//         tool={<SelectBoxInputElement />}
//         image="@/../public/craft/hero.png"
//         icon={<TbSelect className="h-4 w-4 text-gray-500" />}
//       />
//     ),
//   },

//   {
//     name: "Hyperlink",
//     tool: (
//       <ElementToolsLayout
//         toolName="Hyperlink"
//         tool={
//           <Link
//             text="link"
//             href="#"
//             targetData={false}
//             color={""}
//             bold={undefined}
//           />
//         }
//         image="@/../public/craft/hero.png"
//         icon={<AiOutlineLink className="h-4 w-4 text-gray-500" />}
//       />
//     ),
//   },

//   {
//     name: "Attachment",
//     tool: (
//       <ElementToolsLayout
//         toolName="Attachment"
//         tool={<AttachmentElement />}
//         image="@/../public/craft/hero.png"
//         icon={<IoDocumentAttachOutline className="h-4 w-4 text-gray-500" />}
//       />
//     ),
//   },

//   {
//     name: "Date Picker",
//     tool: (
//       <ElementToolsLayout
//         toolName="Date Picker"
//         tool={<DatePickerElement />}
//         image="@/../public/craft/hero.png"
//         icon={<BsCalendarDate className="h-4 w-4 text-gray-500" />}
//       />
//     ),
//   },

//   {
//     name: "Button",
//     tool: (
//       <ElementToolsLayout
//         toolName="Button"
//         tool={<Button />}
//         image="@/../public/craft/hero.png"
//         icon={<BsMenuButtonWide className="h-4 w-4 text-gray-500" />}
//       />
//     ),
//   },
// ];

export const formControls = [
  {
    name: "Label",
    tool: (
      <ElementToolsLayout
        toolName="Label"
        tool={
          <Text
            text="Label"
            fontSize={18}
            marginBottom={2}
            color="#4b5563"
            bold="font-bold"
          />
        }
        image="@/../public/craft/hero.png"
        icon={<BiLabel className="h-4 w-4 text-gray-500" />}
      />
    ),
  },
  {
    name: "Submit Button",
    tool: (
      <ElementToolsLayout
        toolName="Submit Button"
        tool={<Button type="submit" text="Submit Button" {...tbStyles} />}
        image="@/../public/craft/hero.png"
        icon={<FiUserPlus className="h-4 w-4 text-gray-500" />}
      />
    ),
  },
  {
    name: "Text Input",
    tool: (
      <ElementToolsLayout
        toolName="Text Input"
        tool={<TextInputElement text="Text Input" />}
        image="@/../public/craft/hero.png"
        icon={<BsCardText className="h-4 w-4 text-gray-500" />}
      />
    ),
  },
  {
    name: "Paragraph",
    tool: (
      <ElementToolsLayout
        toolName="Paragraph"
        tool={<Text text="Start typing here..." />}
        image="@/../public/craft/hero.png"
        icon={<BsTextParagraph className="h-4 w-4 text-gray-500" />}
      />
    ),
  },
  {
    name: "Textarea",
    tool: (
      <ElementToolsLayout
        toolName="Textarea"
        tool={<TextAreaElement textLabel="Text Area" />}
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
        tool={
          <RadioInputElement
            radios={[
              {
                radioProps: {
                  checked: true,
                  value: "Male",
                  required: true,
                },
                label: "Male",
              },
              {
                radioProps: {
                  value: "Female",
                  required: true,
                },
                label: "Female",
              },
            ]}
          />
        }
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
        tool={<CheckboxInputElement />}
        image="@/../public/craft/hero.png"
        icon={<TbCheckbox className="h-4 w-4 text-gray-500" />}
      />
    ),
  },

  {
    name: "Dropdown",
    tool: (
      <ElementToolsLayout
        toolName="Dropdown"
        tool={<SelectBoxInputElement />}
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
        tool={
          <Link
            text="link"
            href="#"
            targetData={false}
            color={""}
            bold={undefined}
          />
        }
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
];

const baseTools = [
  {
    index: 1,
    question: "Standard",
    answer: [
      {
        name: "Full Name",
        tool: (
          <ElementToolsLayout
            toolName="Full Name"
            tool={
              <TextInputElement
                text="Full Name"
                textInputProps={{
                  name: "fullName",
                  placeholder: "Full Name",
                  type: "text",
                }}
                {...tbStyles}
              />
            }
            image="@/../public/craft/hero.png"
            icon={<FiUserPlus className="h-4 w-4 text-gray-500" />}
          />
        ),
      },
      {
        name: "Label",
        tool: (
          <ElementToolsLayout
            toolName="Label"
            tool={
              <Text
                text="Label"
                fontSize={18}
                marginBottom={2}
                color="#4b5563"
                bold="font-bold"
              />
            }
            image="@/../public/craft/hero.png"
            icon={<BiLabel className="h-4 w-4 text-gray-500" />}
          />
        ),
      },
      {
        name: "First Name",
        tool: (
          <ElementToolsLayout
            toolName="First Name"
            tool={
              <TextInputElement
                text="First Name"
                textInputProps={{
                  name: "firstName",
                  placeholder: "First Name",
                  type: "text",
                }}
                {...tbStyles}
              />
            }
            image="@/../public/craft/hero.png"
            icon={<AiOutlineUserAdd className="h-4 w-4 text-gray-500" />}
          />
        ),
      },
      {
        name: "Last Name",
        tool: (
          <ElementToolsLayout
            toolName="Last Name"
            tool={
              <TextInputElement
                text="Last Name"
                textInputProps={{
                  name: "lastName",
                  placeholder: "Last Name",
                  type: "text",
                }}
                {...tbStyles}
              />
            }
            image="@/../public/craft/hero.png"
            icon={<AiOutlineUserSwitch className="h-4 w-4 text-gray-500" />}
          />
        ),
      },
      {
        name: "Phone",
        tool: (
          <ElementToolsLayout
            toolName="Phone"
            tool={
              <TextInputElement
                text="Phone"
                textInputProps={{
                  name: "phone",
                  placeholder: "Phone",
                  type: "number",
                }}
                {...tbStyles}
              />
            }
            image="@/../public/craft/hero.png"
            icon={<BsTelephoneInbound className="h-4 w-4 text-gray-500" />}
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
      {
        name: "Gender",
        tool: (
          <ElementToolsLayout
            toolName="Gender"
            tool={<RadioInputElement />}
            image="@/../public/craft/hero.png"
            icon={<MdRadioButtonChecked className="h-4 w-4 text-gray-500" />}
          />
        ),
      },
      {
        name: "Email",
        tool: (
          <ElementToolsLayout
            toolName="Email"
            tool={
              <TextInputElement
                text="Email"
                textInputProps={{
                  name: "email",
                  placeholder: "Email",
                  type: "email",
                }}
                {...tbStyles}
              />
            }
            image="@/../public/craft/hero.png"
            icon={<TfiEmail className="h-4 w-4 text-gray-500" />}
          />
        ),
      },
      {
        name: "Organization",
        tool: (
          <ElementToolsLayout
            toolName="Organization"
            tool={
              <TextInputElement
                text="Organization"
                textInputProps={{
                  name: "organization",
                  placeholder: "Organization",
                  type: "text",
                }}
                {...tbStyles}
              />
            }
            image="@/../public/craft/hero.png"
            icon={<GoOrganization className="h-4 w-4 text-gray-500" />}
          />
        ),
      },
      {
        name: "Address",
        tool: (
          <ElementToolsLayout
            toolName="Address"
            tool={
              <TextAreaElement
                text="Address"
                textLabel="Address"
                textInputProps={{
                  name: "address",
                  placeholder: "Address",
                }}
                {...tbStyles}
              />
            }
            image="@/../public/craft/hero.png"
            icon={<FaRegAddressCard className="h-4 w-4 text-gray-500" />}
          />
        ),
      },
      {
        name: "City",
        tool: (
          <ElementToolsLayout
            toolName="City"
            tool={
              <TextInputElement
                text="City"
                textInputProps={{
                  name: "city",
                  placeholder: "City",
                  type: "text",
                }}
                {...tbStyles}
              />
            }
            image="@/../public/craft/hero.png"
            icon={<FaCity className="h-4 w-4 text-gray-500" />}
          />
        ),
      },
      {
        name: "State",
        tool: (
          <ElementToolsLayout
            toolName="State"
            tool={
              <TextInputElement
                text="State"
                textInputProps={{
                  name: "state",
                  placeholder: "State",
                  type: "text",
                }}
                {...tbStyles}
              />
            }
            image="@/../public/craft/hero.png"
            icon={<BsBuildings className="h-4 w-4 text-gray-500" />}
          />
        ),
      },
      {
        name: "Country",
        tool: (
          <ElementToolsLayout
            toolName="Country"
            tool={
              <TextInputElement
                text="Country"
                textInputProps={{
                  name: "country",
                  placeholder: "Country",
                  type: "text",
                }}
                {...tbStyles}
              />
            }
            image="@/../public/craft/hero.png"
            icon={<FaGlobeEurope className="h-4 w-4 text-gray-500" />}
          />
        ),
      },
      {
        name: "Postal Code",
        tool: (
          <ElementToolsLayout
            toolName="Postal Code"
            tool={
              <TextInputElement
                text="Postal Code"
                textInputProps={{
                  name: "postal_code",
                  placeholder: "Postal Code",
                  type: "text",
                }}
                {...tbStyles}
              />
            }
            image="@/../public/craft/hero.png"
            icon={<AiOutlineFileZip className="h-4 w-4 text-gray-500" />}
          />
        ),
      },
      {
        name: "CPT Codes",
        tool: (
          <ElementToolsLayout
            toolName="CPT Codes"
            tool={
              <CPTSelectElement
                text="CPT Codes"
                // textInputProps={{
                //   name: "cpt_code",
                //   placeholder: "CPT Codes",
                //   type: "text",
                // }}
                {...tbStyles}
              />
            }
            image="@/../public/craft/hero.png"
            icon={<BsCalendarDate className="h-4 w-4 text-gray-500" />}
          />
        ),
      },
      {
        name: "Website",
        tool: (
          <ElementToolsLayout
            toolName="Website"
            tool={
              <TextInputElement
                text="Website"
                textInputProps={{
                  name: "website",
                  placeholder: "Website",
                  type: "url",
                }}
                {...tbStyles}
              />
            }
            image="@/../public/craft/hero.png"
            icon={<HiOutlineGlobeAlt className="h-4 w-4 text-gray-500" />}
          />
        ),
      },
      {
        name: "Source",
        tool: (
          <ElementToolsLayout
            toolName="Source"
            tool={
              <TextInputElement
                text="Source"
                textInputProps={{
                  name: "source",
                  placeholder: "Source",
                  type: "text",
                }}
                {...tbStyles}
              />
            }
            image="@/../public/craft/hero.png"
            icon={<RiOpenSourceLine className="h-4 w-4 text-gray-500" />}
          />
        ),
      },
      {
        name: "Date of Birth",
        tool: (
          <ElementToolsLayout
            toolName="Date of Birth"
            tool={<DatePickerElement />}
            image="@/../public/craft/hero.png"
            icon={<BsCalendarDate className="h-4 w-4 text-gray-500" />}
          />
        ),
      },
    ],
  },
  // {
  //   index: 2,
  //   question: "Custom",
  //   answer: customFieldsdata,
  // },
  {
    index: 2,
    question: "Custom",
    answer: [],
  },
];

const ColTab = [
  //   {
  //     index: 1,
  //     question: "Section",
  //     answer: [
  //
  // ],
  {
    index: 1,
    question: "Layout",
    answer: [
      {
        name: "Column 1",
        tool: (
          <PrebuiltToolsLayout
            toolName="Column 1"
            tool={<Grid col={1} />}
            image={require("@/../public/craft/grid/1.png")}
          />
        ),
      },
      {
        name: "Column 2",
        tool: (
          <PrebuiltToolsLayout
            toolName="Column 2"
            tool={<Grid col={2} />}
            image={require("@/../public/craft/grid/2.png")}
          />
        ),
      },
      {
        name: "Column 3",
        tool: (
          <PrebuiltToolsLayout
            toolName="Column 3"
            tool={<Grid col={3} />}
            image={require("@/../public/craft/grid/3.png")}
          />
        ),
      },
      {
        name: "Column 4",
        tool: (
          <PrebuiltToolsLayout
            toolName="Column 4"
            tool={<Grid col={4} />}
            image={require("@/../public/craft/grid/4.png")}
          />
        ),
      },
    ],
  },
];

export default function ElementToolbox() {
  const [searchString, setSearchString] = useState("");
  const [tools, setTools] = useState<any>(baseTools);
  const [tabs, setTabs] = useState<any>(tools[0].index);
  const [selected, setSelected] = useState(1);

  const [customFields, setCustomFields] = useState<any>([]);
  const [openFieldModel, setFieldModel] = useState<any>(false);
  const [next, setNext] = useState(false);
  const [errors, setErrors] = useState<any>({});
  const [fieldData, setFieldData] = useState<any>([]);
  const [folder, setFolder] = useState<any>([]);
  const { location, token }: any = useAuthentication();
  const ctx = useContext(GlobalContext);

  const handleTab = (index: any) => {
    setSelected(index);
  };

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

  useEffect(() => {
    axios
      .get(`${baseUrl}custom-field-folders/location/${location?.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }: any) => {
        setFolder(data);

        // console.log("filterData", folder);
        //
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, [folder]);

  const [clicked, setClicked] = useState(-1);
  const handleToggle = (index: any) => {
    return setClicked(index === clicked ? -1 : index);
  };
  const [formValues, setFormValues] = useState<any>({
    name: "",
    locationID: location?.id,
  });
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setFieldModel(false);
  };
  const [formBuilderState, setFormBuilderState] =
    useRecoilState<any>(formDataState);
  useEffect(() => {
    axios
      .get(`${baseUrl}custom-fields/location/${location?.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }: any) => {
        setCustomFields(data.customFields);
        data.customFields.forEach((objects: any, indexes: number) => {
          tools[1].answer.push({
            name: objects.name.toUpperCase(),
            tool:
              objects.type == "SINGLE_LINE" ? (
                <ElementToolsLayout
                  toolName={objects.name.toUpperCase()}
                  tool={
                    <TextInputElement
                      text={objects.name.toUpperCase()}
                      textInputProps={{
                        name: objects.key,
                        placeholder: objects.name,
                        type: "text",
                      }}
                      {...tbStyles}
                    />
                  }
                  image="@/../public/craft/hero.png"
                  icon={<FaCity className="h-4 w-4 text-gray-500" />}
                />
              ) : objects.type == "MULTI_LINE" ? (
                <ElementToolsLayout
                  toolName={objects.name.toUpperCase()}
                  tool={
                    <TextAreaElement
                      text={objects.name}
                      textLabel={objects.name.toUpperCase()}
                      textInputProps={{
                        name: objects.key,
                        placeholder: "Address",
                      }}
                      {...tbStyles}
                    />
                  }
                  image="@/../public/craft/hero.png"
                  icon={<FaRegAddressCard className="h-4 w-4 text-gray-500" />}
                />
              ) : objects.type == "NUMBER" ? (
                <ElementToolsLayout
                  toolName={objects.name.toUpperCase()}
                  tool={
                    <TextInputElement
                      text={objects.name.toUpperCase()}
                      textInputProps={{
                        name: objects.key,
                        placeholder: "Number",
                        type: "number",
                      }}
                      {...tbStyles}
                    />
                  }
                  image="@/../public/craft/hero.png"
                  icon={
                    <BsTelephoneInbound className="h-4 w-4 text-gray-500" />
                  }
                />
              ) : objects.type == "PHONE" ? (
                <ElementToolsLayout
                  toolName={objects.name.toUpperCase()}
                  tool={
                    <PhoneInputElement
                      text={objects.name.toUpperCase()}
                      textInputProps={{
                        name: objects.key,
                        placeholder: "Phone",
                        type: "number",
                      }}
                      {...tbStyles}
                    />
                  }
                  image="@/../public/craft/hero.png"
                  icon={
                    <BsTelephoneInbound className="h-4 w-4 text-gray-500" />
                  }
                />
              ) : objects.type == "DROPDOWN_SINGLE" ? (
                <ElementToolsLayout
                  toolName={objects.name.toUpperCase()}
                  tool={<SelectBoxInputElement />}
                  image="@/../public/craft/hero.png"
                  icon={<TbSelect className="h-4 w-4 text-gray-500" />}
                />
              ) : objects.type == "DROPDOWN_MULTI" ? (
                <ElementToolsLayout
                  toolName={objects.name.toUpperCase()}
                  tool={<SelectBoxInputElement />}
                  image="@/../public/craft/hero.png"
                  icon={<TbSelect className="h-4 w-4 text-gray-500" />}
                />
              ) : objects.type == "MONETORY" ? (
                <ElementToolsLayout
                  toolName={objects.name.toUpperCase()}
                  tool={
                    <MonetoryInputElement
                      text={objects.name.toUpperCase()}
                      textInputProps={{
                        name: objects.key,
                        placeholder: "Monetory",
                        type: "number",
                      }}
                      {...tbStyles}
                    />
                  }
                  image="@/../public/craft/hero.png"
                  icon={
                    <BsTelephoneInbound className="h-4 w-4 text-gray-500" />
                  }
                />
              ) : objects.type == "RADIO" ? (
                <ElementToolsLayout
                  toolName={objects.name.toUpperCase()}
                  tool={
                    <RadioInputElement
                      radios={[
                        {
                          radioProps: {
                            checked: true,
                            value: "Male",
                            required: true,
                          },
                          label: "RADIO",
                        },
                      ]}
                    />
                  }
                  image="@/../public/craft/hero.png"
                  icon={
                    <MdRadioButtonChecked className="h-4 w-4 text-gray-500" />
                  }
                />
              ) : objects.type == "CHECKBOX" ? (
                <ElementToolsLayout
                  toolName={objects.name.toUpperCase()}
                  tool={<CheckboxInputElement />}
                  image="@/../public/craft/hero.png"
                  icon={<TbCheckbox className="h-4 w-4 text-gray-500" />}
                />
              ) : objects.type == "DATE" ? (
                <ElementToolsLayout
                  toolName={objects.name.toUpperCase()}
                  tool={<DatePickerElement />}
                  image="@/../public/craft/hero.png"
                  icon={<BsCalendarDate className="h-4 w-4 text-gray-500" />}
                />
              ) : objects.type == "FILE_UPLOAD" ? (
                <ElementToolsLayout
                  toolName={objects.name.toUpperCase()}
                  tool={
                    <FileUploadInputElement
                      text={objects.name.toUpperCase()}
                      textInputProps={{
                        name: objects.key,
                        placeholder: "FileUpload",
                        type: "file",
                      }}
                      {...tbStyles}
                    />
                  }
                  image="@/../public/craft/hero.png"
                  icon={
                    <BsTelephoneInbound className="h-4 w-4 text-gray-500" />
                  }
                />
              ) : objects.type == "SIGNATURE" ? (
                <ElementToolsLayout
                  toolName={objects.name.toUpperCase()}
                  tool={
                    <SignatureInputElement
                      text={objects.name.toUpperCase()}
                      textInputProps={{
                        name: objects.key,
                        placeholder: "Signature",
                        type: "file",
                      }}
                      {...tbStyles}
                    />
                  }
                  image="@/../public/craft/hero.png"
                  icon={
                    <BsTelephoneInbound className="h-4 w-4 text-gray-500" />
                  }
                />
              ) : objects.type == "TEXTBOX_LIST" ? (
                <ElementToolsLayout
                  toolName={objects.name.toUpperCase()}
                  tool={
                    <>
                      <TextInputElement
                        text={objects.name.toUpperCase()}
                        textInputProps={{
                          name: objects.key,
                          placeholder: objects.name,
                          type: "text",
                        }}
                        {...tbStyles}
                      />
                      <TextInputElement
                        text={objects.name.toUpperCase()}
                        textInputProps={{
                          name: objects.key,
                          placeholder: objects.name,
                          type: "text",
                        }}
                        {...tbStyles}
                      />
                    </>
                  }
                  image="@/../public/craft/hero.png"
                  icon={
                    <BsTelephoneInbound className="h-4 w-4 text-gray-500" />
                  }
                />
              ) : (
                ""
              ),
          });
        });

        setTools([...tools]);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, [ctx?.customFieldRefresh]);
  // console.log(customFields, ctx?.customFieldRefresh);
  return (
    <>
      <ModalDerived
        visibility={openFieldModel}
        onClose={() => {
          setFieldModel(false), setNext(false);
        }}
      >
        {!next ? (
          <div className=" bg-white rounded-lg overflow-y-auto w-full scrollbar-hide ">
            <form
              className=" pt-5 pb-3 w-screen md:w-[120vh]"
              onSubmit={handleSubmit}
            >
              <div className="h-[8vh] flex justify-between items-start border-b-[1px] pb-4 px-5">
                <div></div>
                <div>
                  <p className="text-gray-800 font-medium md:text-lg text-center">
                    New Custom Fields
                  </p>
                </div>
                <button onClick={() => setFieldModel(false)}>
                  <AiOutlineClose className="text-gray-800 h-6 w-6" />
                </button>
              </div>
              <div className="">
                <div className="relative flex flex-col">
                  <div className="h-[30vh] border border-r border-r-gray-300 px-6 overflow-y-auto ">
                    <div className="pt-4">
                      <h3 className="text-sm text-gray-700"> Text Input</h3>

                      <div className="flex flex-col flex-wrap  pt-3">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleTab(1);
                          }}
                          className={
                            selected == 1
                              ? "flex items-center  w-full text-sm border border-gray-300 px-4 py-4 rounded-md bg-[#113042] text-white font-medium"
                              : "flex items-center  w-full text-sm border border-gray-300 px-4 py-4 rounded-md bg-white"
                          }
                        >
                          <FaFolderMinus size={24} className="text-blue-500" />
                          <div className="md:pl-2">Single line</div>
                        </button>

                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleTab(2);
                          }}
                          className={
                            selected == 2
                              ? "flex items-center  mt-2 w-full text-sm border border-gray-300 px-4 py-4 rounded-md bg-[#113042] text-white font-medium"
                              : "flex items-center  mt-2 w-full text-sm border border-gray-300 px-4 py-4 rounded-md bg-white"
                          }
                        >
                          <FaFolderMinus size={24} className="text-blue-500" />
                          <div className="md:pl-2">Multi Line</div>
                        </button>

                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleTab(3);
                          }}
                          className={
                            selected == 3
                              ? "flex items-center  mt-2 w-full text-sm border border-gray-300 px-4 py-4 rounded-md bg-[#113042] text-white font-medium"
                              : "flex items-center  mt-2 w-full text-sm border border-gray-300 px-4 py-4 rounded-md bg-white"
                          }
                        >
                          <FaFolderMinus size={24} className="text-blue-500" />
                          <div className="md:pl-2">Text Box List</div>
                        </button>
                      </div>
                    </div>
                    {/* 
                <div className="pt-4">
                  <h3 className="text-sm text-gray-700"> Values</h3>
                  

                  <div className="flex flex-wrap space-x-4 pt-3">

                    <button onClick={()=>handleTab(4)} className={selected==4?"w-28 text-sm border px-4 py-4 rounded-md bg-[#113042] text-white font-medium":"w-28 text-sm border px-4 py-4 rounded-md bg-white"}>
                      Number
                    </button>

                    <button onClick={()=>handleTab(5)} className={selected==5?"w-28 text-sm border px-4 py-4 rounded-md bg-[#113042] text-white font-medium":"w-28 text-sm border px-4 py-4 rounded-md bg-white"}>
                      Phone
                    </button>

                    <button onClick={()=>handleTab(6)} className={selected==6?"w-28 text-sm border px-4 py-4 rounded-md bg-[#113042] text-white font-medium":"w-28 text-sm border px-4 py-4 rounded-md bg-white"}>
                     Monetary
                    </button>

                  </div>
                </div> */}

                    <div className="pt-2 ">
                      <h3 className="text-sm text-gray-700"> Values</h3>

                      <div className="flex flex-col flex-wrap  pt-1">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleTab(4);
                          }}
                          className={
                            selected == 4
                              ? "flex items-center mt-2 w-full text-sm border px-4 py-4 rounded-md bg-[#113042] text-white font-medium"
                              : "flex items-center w-full text-sm border px-4 py-4 rounded-md bg-white mt-2"
                          }
                        >
                          <FaFolderMinus size={24} className="text-blue-500" />
                          <div className="md:pl-2">Number</div>
                        </button>

                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleTab(5);
                          }}
                          className={
                            selected == 5
                              ? "flex items-center mt-2 w-full text-sm border px-4 py-4 rounded-md bg-[#113042] text-white font-medium"
                              : "flex items-center w-full text-sm border px-4 py-4 rounded-md bg-white mt-2"
                          }
                        >
                          <FaFolderMinus size={24} className="text-blue-500" />
                          <div className="md:pl-2"> Phone</div>
                        </button>

                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleTab(6);
                          }}
                          className={
                            selected == 6
                              ? "flex  mt-2 w-full text-sm border px-4 py-4 rounded-md bg-[#113042] text-white font-medium"
                              : "flex  w-full text-sm border px-4 py-4 rounded-md bg-white mt-2"
                          }
                        >
                          <FaFolderMinus size={24} className="text-blue-500" />
                          <div className="md:pl-2">Monetary</div>
                        </button>
                      </div>
                    </div>

                    <div className="pt-2 pb-2">
                      <h3 className="text-sm text-gray-700">
                        Choosing Options
                      </h3>

                      <div className="flex flex-col flex-wrap  pt-1">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleTab(7);
                          }}
                          className={
                            selected == 7
                              ? "flex items-center mt-2 w-full text-sm border px-4 py-4 rounded-md bg-[#113042] text-white font-medium"
                              : "flex items-center w-full text-sm border px-4 py-4 rounded-md bg-white mt-2"
                          }
                        >
                          <FaFolderMinus size={24} className="text-blue-500" />
                          <div className="md:pl-2">Dropdown (Single)</div>
                        </button>

                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleTab(8);
                          }}
                          className={
                            selected == 8
                              ? "flex items-center  mt-2 w-full text-sm border px-4 py-4 rounded-md bg-[#113042] text-white font-medium"
                              : "flex items-center w-full text-sm border px-4 py-4 rounded-md bg-white mt-2"
                          }
                        >
                          <FaFolderMinus size={24} className="text-blue-500" />
                          <div className="pl-2">Dropdown (Multiple)</div>
                        </button>

                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleTab(9);
                          }}
                          className={
                            selected == 9
                              ? "flex items-center mt-2 w-full text-sm border px-4 py-4 rounded-md bg-[#113042] text-white font-medium"
                              : "flex items-center w-full text-sm border px-4 py-4 rounded-md bg-white mt-2"
                          }
                        >
                          <FaFolderMinus size={24} className="text-blue-500" />
                          <div className="md:pl-2">Radio Select</div>
                        </button>

                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleTab(10);
                          }}
                          className={
                            selected == 10
                              ? "flex items-center mt-2 w-full text-sm border px-4 py-4 rounded-md bg-[#113042] text-white font-medium"
                              : "flex items-center w-full text-sm border px-4 py-4 rounded-md bg-white mt-2"
                          }
                        >
                          <FaFolderMinus size={24} className="text-blue-500" />
                          <div className="md:pl-2">Checkbox</div>
                        </button>

                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleTab(11);
                          }}
                          className={
                            selected == 11
                              ? "flex items-center mt-2 w-full text-sm border px-4 py-4 rounded-md bg-[#113042] text-white font-medium"
                              : "flex items-center w-full text-sm border px-4 py-4 rounded-md bg-white mt-2"
                          }
                        >
                          <FaFolderMinus size={24} className="text-blue-500" />
                          <div className="md:pl-2">Date Picker</div>
                        </button>
                      </div>
                    </div>

                    <div className="pt-2 pb-2">
                      <h3 className="text-sm text-gray-700">Others</h3>
                      <div className="flex flex-col  pt-1">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleTab(12);
                          }}
                          className={
                            selected == 12
                              ? "flex items-center mt-2 w-full text-sm border px-4 py-4 rounded-md bg-[#113042] text-white font-medium"
                              : "flex items-center w-full text-sm border px-4 py-4 rounded-md bg-white mt-2"
                          }
                        >
                          <FaFolderMinus size={24} className="text-blue-500" />
                          <div className="md:pl-2">File Upload</div>
                        </button>

                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleTab(13);
                          }}
                          className={
                            selected == 13
                              ? "flex items-center mt-2 w-full text-sm border px-4 py-4 rounded-md bg-[#113042] text-white font-medium"
                              : "flex items-center w-full text-sm border px-4 py-4 rounded-md bg-white mt-2"
                          }
                        >
                          <FaFolderMinus size={24} className="text-blue-500" />
                          <div className="md:pl-2">Signature</div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="h-[30vh] px-6 overflow-y-auto ">
                    <h3 className="text-sm text-gray-600 py-2">Preview</h3>
                    {selected == 1 && (
                      <div>
                        <Singleline />
                      </div>
                    )}
                    {selected == 2 && (
                      <div>
                        <Multiline />
                      </div>
                    )}

                    {selected == 3 && (
                      <div>
                        <Textboxlist />
                      </div>
                    )}

                    {selected == 4 && (
                      <div>
                        <Number />
                      </div>
                    )}

                    {selected == 5 && (
                      <div>
                        <Phone />
                      </div>
                    )}

                    {selected == 6 && (
                      <div>
                        <Monetry />
                      </div>
                    )}

                    {selected == 7 && (
                      <div>
                        <DropdownSingle />
                      </div>
                    )}

                    {selected == 8 && (
                      <div>
                        <DropdownMultiple />
                      </div>
                    )}

                    {selected == 9 && (
                      <div>
                        <RadioSelect />
                      </div>
                    )}

                    {selected == 10 && (
                      <div>
                        <Checkboxx />
                      </div>
                    )}

                    {selected == 11 && (
                      <div>
                        <DatePickers />
                      </div>
                    )}

                    {selected == 12 && (
                      <div>
                        <FileUpload />
                      </div>
                    )}

                    {selected == 13 && (
                      <div>
                        <Signature />
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex justify-end items-center border-t-[1px] pt-3 pb-2 px-5">
                  <div className=" flex justify-end items-center gap-3">
                    <button
                      onClick={() => setFieldModel(false)}
                      className="text-base text-gray-600 font-medium flex justify-start items-center border-[1px] border-gray-300 py-2 px-5 rounded-md  "
                    >
                      Cancel
                    </button>

                    <button
                      onClick={() => {
                        setNext(true);
                      }}
                      type="submit"
                      className="text-base flex justify-start items-center bg-[#1258FC] py-2 px-5 text-white rounded-md  "
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        ) : (
          <>
            {selected == 1 && (
              <div>
                <SinglelineNext
                  folderData={folder}
                  setFieldModel={setFieldModel}
                  setNext={setNext}
                />
              </div>
            )}

            {selected == 2 && (
              <div>
                <MultilineNext
                  folderData={folder}
                  setFieldModel={setFieldModel}
                  setNext={setNext}
                />
              </div>
            )}
            {selected == 3 && (
              <div>
                <TextboxlistNext
                  folderData={folder}
                  setFieldModel={setFieldModel}
                  setNext={setNext}
                />
              </div>
            )}

            {selected == 4 && (
              <div>
                <NumberNext
                  folderData={folder}
                  setFieldModel={setFieldModel}
                  setNext={setNext}
                />
              </div>
            )}

            {selected == 5 && (
              <div>
                <PhoneNext
                  folderData={folder}
                  setFieldModel={setFieldModel}
                  setNext={setNext}
                />
              </div>
            )}

            {selected == 6 && (
              <div>
                <MonetryNext
                  folderData={folder}
                  setFieldModel={setFieldModel}
                  setNext={setNext}
                />
              </div>
            )}

            {selected == 7 && (
              <div>
                <DropdownSingleNext
                  folderData={folder}
                  setFieldModel={setFieldModel}
                  setNext={setNext}
                />
              </div>
            )}

            {selected == 8 && (
              <div>
                <DropdownMultipleNext
                  folderData={folder}
                  setFieldModel={setFieldModel}
                  setNext={setNext}
                />
              </div>
            )}

            {selected == 9 && (
              <div>
                <RadioNext
                  folderData={folder}
                  setFieldModel={setFieldModel}
                  setNext={setNext}
                />
              </div>
            )}
            {selected == 10 && (
              <div>
                <CheckboxNext
                  folderData={folder}
                  setFieldModel={setFieldModel}
                  setNext={setNext}
                />
              </div>
            )}
            {selected == 11 && (
              <div>
                <DatePickerNext
                  folderData={folder}
                  setFieldModel={setFieldModel}
                  setNext={setNext}
                />
              </div>
            )}
            {selected == 12 && (
              <div>
                <FileUploadNext
                  folderData={folder}
                  setFieldModel={setFieldModel}
                  setNext={setNext}
                />
              </div>
            )}

            {selected == 13 && (
              <div>
                <SignatureNext
                  folderData={folder}
                  setFieldModel={setFieldModel}
                  setNext={setNext}
                />
              </div>
            )}
          </>
        )}
      </ModalDerived>
      <div>
        <div className="h-full overflow-y-scroll scrollbar-hide ">
          {ColTab.map((item, index) => (
            <>
              <div
                className={` ${`py-5 rounded-sm border-t-[1px] ${
                  clicked === index ? null : "border-b-[1px]"
                } border-gray-200 px-4 bg-white`}   flex flex-row justify-between items-center`}
                onClick={() => handleToggle(index)}
              >
                <p className={`text-gray-600 text-lg font-medium`}>
                  {item.question}
                </p>
                <div className={`text-gray-600`}>
                  {clicked === index ? (
                    <BsChevronDown className="h-4 w-4" />
                  ) : (
                    <BsChevronUp className="h-4 w-4" />
                  )}
                </div>
              </div>
              <div
                className={`px-4 pb-2 flex flex-wrap   ${
                  clicked === index ? "" : "hidden bg-yellow-500"
                }`}
              >
                {item.answer.map((control: any, index: any) => (
                  <div key={index} className={`w-full px-1 mb-2`}>
                    {control.tool}
                  </div>
                ))}
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="mt-3">
        <ul className="border-b-[1px] p-[2px] mx-2 flex-wrap bg-[#eeeef1]  rounded-md border-[#dfdfdf] flex justify-between items-center scrollbar-hide   ">
          {tools.map((tab: any, i: number) => (
            <li key={tab.index} className="w-[50%]">
              <button
                className={`w-full bg-transparent  px-4 py-2 text-center ${
                  tabs === tab.index && "bg-white rounded-md shadow-md"
                }  text-black font-medium border-none capitalize hover:bg-white`}
                onClick={() => setTabs(tab.index)}
              >
                {tab.question}
              </button>
            </li>
          ))}
        </ul>
        <div className="bg-white pb-32">
          <div className="px-2 mt-3">
            <TextInput
              lefticon={
                <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
              }
              placeholder="Search layout"
              value={searchString}
              onChange={({ target: { value } }) => setSearchString(value)}
            />
          </div>
          {tabs == 1 && (
            <div className="h-[70vh] overflow-y-scroll scrollbar-hide ">
              {tools.map((tab: any) => (
                <div
                  key={tab.id}
                  className={`shadow-md transition-all duration-300 rounded-md overflow-scroll ${
                    tabs === tab.index ? "block" : " text-black hidden"
                  }`}
                >
                  {tab.answer.map((item: any, index: number) => (
                    <div
                      key={index}
                      className="mx-2 my-4 rounded-lg hover:border-2"
                    >
                      {item.tool}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
          {tabs == 2 && (
            <div className="h-[70vh] overflow-y-scroll scrollbar-hide pb-36">
              {/* {tools.map((tab: any, IIndex: number) => (
                <div
                  key={tab.id}
                  className={`shadow-md transition-all duration-300 rounded-md overflow-scroll ${
                    tabs === tab.index ? "block" : " text-black hidden"
                  }`}
                > */}
              <div className="mx-2 mt-2 shadow px-2 py-3 border-gray-200 border-[1px] bg-white rounded-md cursor-pointer">
                <div
                  className="flex items-center gap-2"
                  onClick={() => setFieldModel(true)}
                >
                  <BiAddToQueue />
                  <h6 className="text-gray-600 text-base font-medium text-center pl-1">
                    Add Custom Field
                  </h6>
                </div>
              </div>

              {tools[1]?.answer?.map((item: any, index: number) => (
                <div
                  key={index}
                  className="mx-2 my-4 rounded-lg hover:border-2"
                >
                  {item.tool}
                </div>
              ))}
            </div>
            // ))}
            // </div>
          )}
        </div>
      </div>
    </>
  );
}
