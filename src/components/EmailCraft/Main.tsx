import { useContext, useState } from "react";
// import { Toolbox } from "./Toolbox";
import { Element, Frame } from "@craftjs/core";
import Container from "./widgets/Container";

import { CraftContext } from "@/pages/builder/website/craft";
// import { SettingsPanel } from "./Settings";
import { Toolbox } from "./Toolbox";
import { SettingsPanel } from "./Settings";
import { MailHeaders } from "./MailTemplates/MailHeader";
import { MailImages } from "./MailTemplates/MailImage";
import { MailHeadings } from "./MailTemplates/MailHeading";
import { MailMessages } from "./MailTemplates/MailMessage";
import { MailPoints } from "./MailTemplates/MailPoints";
import { MailSurveys } from "./MailTemplates/MailSurvey";
import { MailFooters } from "./MailTemplates/MailFooter";

export default function Main() {
  const { device } = useContext(CraftContext);

  return (
    <div className="flex h-full">
      <div className="w-[22%] pr-2 h-screen">
        <div className="bg-white rounded-md shadow-md h-full overflow-y-scroll pb-40 scrollbar-hide">
          <Toolbox />
        </div>
      </div>
      <div className="w-[78%] h-full overflow-y-scroll scrollbar-hide pb-40 px-5">
        {/* <div className="flex justify-center mb-2">
          <button
            onClick={() => handleViewportChange("mobile")}
            className="btn btn-outline mx-2"
          >
            Mobile
          </button>
          <button
            onClick={() => handleViewportChange("tablet")}
            className="btn btn-outline mx-2"
          >
            Tablet
          </button>
          <button
            onClick={() => handleViewportChange("desktop")}
            className="btn btn-outline mx-2"
          >
            Desktop
          </button>
        </div> */}
        {/* <div style={frameStyles} className="flex justify-center"> */}
        {/* <Frame>
          <Element is={Container} canvas>
            <MailHeaders />
            <MailImages />
            <MailHeadings />
            <MailMessages />
            <MailPoints />
            <MailSurveys />
            <MailFooters />
          </Element>
        </Frame> */}
        {/* </div> */}
      </div>
      <div className="w-[22%] pr-2 h-screen">
        <div className="bg-white rounded-md shadow-md h-full overflow-y-scroll pb-40 scrollbar-hide">
          <SettingsPanel />
        </div>
      </div>
    </div>
  );
}
