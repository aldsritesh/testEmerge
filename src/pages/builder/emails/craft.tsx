import Container from "@/components/EmailCraft/widgets/Container";
import WideWidth from "@/components/EmailCraft/widgets/SectionsLayouts/Wide";
import EmailMain from "@/components/EmailsCraft/Mains";
import { Topbar } from "@/components/EmailsCraft/Topbar";
import { BuilderVideo } from "@/components/EmailsCraft/components/Elements/BuilderVideo";
import {
  Button,
  ButtonText,
} from "@/components/EmailsCraft/components/Elements/Button";
import Calendar from "@/components/EmailsCraft/components/Elements/Calendra";
import {
  Card,
  CardBottom,
  CardImage,
  CardTop,
} from "@/components/EmailsCraft/components/Elements/Card";
import Countdown from "@/components/EmailsCraft/components/Elements/CountDown/CountDown";
import CustomHTML from "@/components/EmailsCraft/components/Elements/CustomHTML";
import Divider from "@/components/EmailsCraft/components/Elements/Divider";
import { BuilderImage } from "@/components/EmailsCraft/components/Elements/Image";
import {
  Link,
  LinkText,
} from "@/components/EmailsCraft/components/Elements/Link";
import { List } from "@/components/EmailsCraft/components/Elements/List";
import ListItem from "@/components/EmailsCraft/components/Elements/List/ListItem";
import MapElement from "@/components/EmailsCraft/components/Elements/MapElement";
import Progress from "@/components/EmailsCraft/components/Elements/Progress";
import {
  Review,
  ReviewTitle,
} from "@/components/EmailsCraft/components/Elements/Review";
import { Social } from "@/components/EmailsCraft/components/Elements/Social";
import { Headline } from "@/components/EmailsCraft/components/Elements/Text/Headline";
import { Text } from "@/components/EmailsCraft/components/Elements/Text/Text";
import {
  MailFooters,
  MailFootersText,
} from "@/components/EmailsCraft/components/MailTemplates/MailFooter";
import {
  MailHeaders,
  MailHeadersText,
} from "@/components/EmailsCraft/components/MailTemplates/MailHeader";
import {
  MailHeadings,
  MailHeadingsText,
} from "@/components/EmailsCraft/components/MailTemplates/MailHeading";
import {
  MailImages,
  MailImagesText,
} from "@/components/EmailsCraft/components/MailTemplates/MailImage";
import {
  MailMessages,
  MailMessagesText,
} from "@/components/EmailsCraft/components/MailTemplates/MailMessage";
import {
  MailPoints,
  MailPointsText,
} from "@/components/EmailsCraft/components/MailTemplates/MailPoints";
import {
  MailSurveys,
  MailSurveysText,
} from "@/components/EmailsCraft/components/MailTemplates/MailSurvey";
import FullWidth from "@/components/EmailsCraft/components/Sections/FullWidth";
import FullWidthContainer from "@/components/EmailsCraft/components/Sections/FullWidthContainer";
import {
  Grid,
  GridTop,
} from "@/components/EmailsCraft/components/Sections/Grid";
import MediumWidth from "@/components/EmailsCraft/components/Sections/Medium";
import SmallWidth from "@/components/EmailsCraft/components/Sections/Small";
import { GlobalContext } from "@/layouts/GlobalLayout";
import { Editor } from "@craftjs/core";
import { createContext, useContext, useState } from "react";

export const CraftContext = createContext({
  // tabValue: 0,
  // setTabValue: (tabValue: number) => {},
  tools: "prebuilt",
  setTools: (tool: string) => {},
  section: "Section",
  setSection: (section: string) => {},
  device: "desktop",
  setDevice: (device: string) => {},
});

export default function EmailCraft() {
  // const [tabValue, setTabValue] = useState(0);
  const [tools, setTools] = useState("prebuilt");
  const [section, setSection] = useState("Sections");
  const [device, setDevice] = useState("desktop");
  const ctx = useContext(GlobalContext);
  ctx.setOpen(false);
  const value: any = {
    // tabValue,
    // setTabValue,
    tools,
    setTools,
    device,
    setDevice,
    section,
    setSection,
  };
  const headings = [{ title: "Site Design" }, { title: "Seo Settings" }];
  const [selectHeading, setSelectHeading] = useState(0);

  return (
    <CraftContext.Provider value={value}>
      <div className="h-full overflow-hidden">
        <Editor
          resolver={{
            Grid,
            GridTop,
            Container,
            FullWidth,
            WideWidth,
            MediumWidth,
            SmallWidth,
            FullWidthContainer,

            BuilderImage,
            Headline,
            Text,
            List,
            ListItem,
            Button,
            ButtonText,
            Divider,
            Social,
            BuilderVideo,
            Link,
            LinkText,
            Card,
            CardBottom,
            CardImage,
            CardTop,
            CustomHTML,
            MapElement,
            Countdown,
            Progress,
            Calendar,
            Review,
            ReviewTitle,
            // New Code
            MailHeaders,
            MailImages,
            MailHeadings,
            MailMessages,
            MailPoints,
            MailSurveys,
            MailFooters,
            MailHeadersText,
            MailImagesText,
            MailHeadingsText,
            MailMessagesText,
            MailPointsText,
            MailSurveysText,
            MailFootersText,
          }}
        >
          <Topbar />
          <EmailMain />
        </Editor>
      </div>
    </CraftContext.Provider>
  );
}
