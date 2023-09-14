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
import CPTSelectElement from "@/components/controls/CPTCodeSelect";
import Preview from "@/components/FormCraft/PreviewSet";
import { PhoneInputElement } from "@/components/FormCraft/widgets/PhoneInputElement";
import { MonetoryInputElement } from "@/components/FormCraft/widgets/MonetoryInputElement";
import { FileUploadInputElement } from "@/components/FormCraft/widgets/FileUploadInputElement";
import { SignatureInputElement } from "@/components/FormCraft/widgets/SignatureInputElement";
import CPTCodeSelect from "@/components/controls/CPTCodeSelect";
FormContainer;
export const CraftContext = createContext({
  previewEnabled: false,
  setPreviewEnabled: (previewEnabled: Boolean) => {},
  previewEnable: "",
  setPreviewEnable: (previewEnable: Boolean) => {},
  formId: "",
  setFormId: (formId: any) => {},
  preview: false,
  setPreview: (preview: boolean) => {},
  tools: "elements",
  setTools: (tool: string) => {},
  device: "desktop",
  setDevice: (device: string) => {},
});

export default function Craft() {
  const ctx = useContext(GlobalContext);
  ctx.setTitle("Form Builder");
  const [formId, setFormId] = useState("");

  const [preview, setPreview] = useState(false);
  const [previewEnabled, setPreviewEnabled] = useState(false);
  const [previewEnable, setPreviewEnable] = useState(false);

  const [tools, setTools] = useState("elements");
  const [device, setDevice] = useState("desktop");

  const value: any = {
    previewEnabled,
    setPreviewEnabled,
    previewEnable,
    setPreviewEnable,
    formId,
    setFormId,
    preview,
    setPreview,
    tools,
    setTools,
    device,
    setDevice,
  };

  return (
    <CraftContext.Provider value={value}>
      <div className="h-full overflow-hidden w-full">
        <Editor
          enabled={!preview}
          resolver={{
            CPTCodeSelect,
            CPTSelectElement,
            FormContainer,
            SignatureInputElement,
            FileUploadInputElement,
            MonetoryInputElement,
            PhoneInputElement,
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
          {!preview ? (
            <Topbar />
          ) : (
            <button
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow normal-case absolute right-[8%] top-20"
              onClick={() => setPreview(false)}
            >
              Edit
            </button>
          )}
          {!previewEnabled ? <Main /> : <Preview />}
        </Editor>
      </div>
    </CraftContext.Provider>
  );
}
