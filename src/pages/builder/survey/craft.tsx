import Container from "@/components/SurveyCraft/widgets/Container";
import { Editor } from "@craftjs/core";
import { Button, ButtonText } from "@/components/SurveyCraft/widgets/Button";
import { Text } from "@/components/SurveyCraft/widgets/Text/Text";
import { Topbar } from "@/components/SurveyCraft/Topbar";
import { createContext, useContext, useState } from "react";
import { GlobalContext } from "@/layouts/GlobalLayout";
import Main, { OnlySlide } from "@/components/SurveyCraft/Main";
import { Link, LinkText } from "@/components/SurveyCraft/widgets/Link";
import App, { MainApp } from "@/components/SurveyCraft/widgets/App";
import { Slide, SlideTop } from "@/components/SurveyCraft/widgets/Slide";
import { TextAreaElement } from "@/components/SurveyCraft/widgets/form/TextareaElement";
import { TextInputElement } from "@/components/SurveyCraft/widgets/form/TextInput";
import { RadioInputElement } from "@/components/SurveyCraft/widgets/form/RadioElement";
import { CheckboxInputElement } from "@/components/SurveyCraft/widgets/form/CheckboxElement";
import { SelectBoxInputElement } from "@/components/SurveyCraft/widgets/form/SelectInputElement";
import { AttachmentElement } from "@/components/SurveyCraft/widgets/form/Attachment";
import { DatePickerElement } from "@/components/SurveyCraft/widgets/form/DatePicker";
import SurveyContainer from "@/components/SurveyCraft/widgets/SurveyContainer";

export const CraftContext = createContext({
  tools: "standard",
  setTools: (tool: string) => {},
  device: "desktop",
  setDevice: (device: string) => {},
  openSettings: false,
  setOpenSettings: (boolean: boolean) => {},
});

export default function Craft() {
  const [tools, setTools] = useState("standard");
  const [device, setDevice] = useState("desktop");
  const [openSettings, setOpenSettings] = useState(false);

  const ctx = useContext(GlobalContext);

  const value: any = {
    tools,
    setTools,
    device,
    setDevice,
    openSettings,
    setOpenSettings,
  };
  return (
    <CraftContext.Provider value={value}>
      <div className="h-full overflow-hidden">
        <Editor
          resolver={{
            App,
            Container,
            SurveyContainer,
            Button,
            Text,
            ButtonText,
            Link,
            LinkText,
            Slide,
            SlideTop,
            OnlySlide,
            //Form
            TextInputElement,
            TextAreaElement,
            RadioInputElement,
            CheckboxInputElement,
            SelectBoxInputElement,
            AttachmentElement,
            DatePickerElement,
          }}
        >
          <Topbar />
          <Main />
        </Editor>
      </div>
    </CraftContext.Provider>
  );
}
