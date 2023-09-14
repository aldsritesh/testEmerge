import { Button, ButtonText } from "@/components/Craft/widgets/Button";
import Container from "@/components/Craft/widgets/Container";

import { Grid, GridTop } from "@/components/Craft/widgets/Grid";
import Main from "@/components/FormCraft/Main";
import { Topbar } from "@/components/FormCraft/Topbar";
import App, { MainApp } from "@/components/Craft/widgets/App";
import { RadioInputElement } from "@/components/FormCraft/widgets/RadioElement";
import { TextAreaElement } from "@/components/FormCraft/widgets/TextareaElement";

import { GlobalContext } from "@/layouts/GlobalLayout";
import { Editor } from "@craftjs/core";
import { createContext, useContext, useState } from "react";
import { CheckboxInputElement } from "@/components/FormCraft/widgets/CheckboxElement";
import { SelectBoxInputElement } from "@/components/FormCraft/widgets/SelectInputElement";
import { Link, LinkText } from "@/components/Craft/widgets/Link";
import { AttachmentElement } from "@/components/FormCraft/widgets/Attachment";
import { DatePickerElement } from "@/components/FormCraft/widgets/DatePicker";
import { TextInputElement } from "@/components/FormCraft/widgets/TextInput";
import { Text } from "@/components/Craft/widgets/Text/Text";
import FormContainer from "@/components/FormCraft/Container";
import PreviewSet from "@/components/FormCraft/PreviewSet";
import { useRecoilState } from "recoil";
import { formDataState } from "@/atoms/formData";
import FormDataString from "@/components/contacts/FormDataString";
import { CPTSelectElement } from "@/components/FormCraft/widgets/CPTSelect";

export default function Preview() {
  const ctx = useContext(GlobalContext);
  ctx.setTitle("Form Builder");
  const [formId, setFormId] = useState("");

  const [preview, setPreview] = useState(false);
  const [previewEnabled, setPreviewEnabled] = useState(false);
  const [previewEnable, setPreviewEnable] = useState(false);

  const [tools, setTools] = useState("elements");
  const [device, setDevice] = useState("desktop");

  return (
    <div className="h-full overflow-hidden w-full">
      <Editor
        enabled={false}
        resolver={{
          CPTSelectElement,
          FormDataString,
          FormContainer,
          Container,
          Text,
          TextInputElement,
          Grid,
          GridTop,
          TextAreaElement,
          RadioInputElement,
          CheckboxInputElement,
          Button,
          ButtonText,
          SelectBoxInputElement,
          Link,
          LinkText,
          AttachmentElement,
          DatePickerElement,
        }}
      >
        <PreviewSet />
      </Editor>
    </div>
  );
}
