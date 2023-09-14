import { useContext, useState } from "react";
import { Element, Frame } from "@craftjs/core";
// import { HeroLayout } from "./widgets/prebuilt/HeroLayout";
import { SettingsPanel } from "./Settings";
import { CraftContext } from "@/pages/builder/website/craft";
import { useRouter } from "next/router";
import { Toolbox } from "./Toolbox";
import Container from "../EmailCraft/widgets/Container";
import { MailHeaders } from "./components/MailTemplates/MailHeader";
import { MailImages } from "./components/MailTemplates/MailImage";
import { MailHeadings } from "./components/MailTemplates/MailHeading";
import { MailMessages } from "./components/MailTemplates/MailMessage";
import { MailPoints } from "./components/MailTemplates/MailPoints";
import { MailSurveys } from "./components/MailTemplates/MailSurvey";
import { MailFooters } from "./components/MailTemplates/MailFooter";
export default function EmailMain() {
  const router = useRouter();
  const stateToLoad = router?.query;
  const { device } = useContext(CraftContext);
  const [viewportSize, setViewportSize] = useState("desktop");
  const [view, setView] = useState(false);
  const [elementIdToRender, setElementIdToRender] = useState(null);
  console.log("stateToLoad", stateToLoad);
  const handleViewportChange = (size: any) => {
    setView(true);
    console.log(viewportSize);
    setViewportSize(size);
  };
  const frameStyles = {
    width:
      viewportSize === "mobile"
        ? "375px"
        : viewportSize === "tablet"
        ? "768px"
        : "100%",
    height: "100vh",
    border: "1px solid #ccc",
    overflow: "hidden",
  };
  const handleElementSelect = (elementId: any) => {
    setElementIdToRender(elementId);
    setView(true);
  };
  return (
    <div>
      <div className="flex h-full pb-20">
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
            <button
              onClick={() => setView(false)}
              className="btn btn-outline mx-2"
            >
              Disable View
            </button>
          </div> */}
          {/* <div  className="flex justify-center"> */}
          <div className="h-full overflow-y-scroll mb-10">
            <Frame>
              <Element is={Container} canvas>
                <MailHeaders />
                <MailImages />
                <MailHeadings />
                <MailMessages />
                <MailPoints />
                <MailSurveys />
                <MailFooters />
              </Element>
            </Frame>
          </div>
          {/* </div> */}
        </div>
        <div className="w-[22%] pr-2 h-screen">
          <div className="bg-white rounded-md shadow-md h-full overflow-y-scroll pb-40 scrollbar-hide">
            <SettingsPanel />
          </div>
        </div>
      </div>
      {/* )} */}
    </div>
  );
}
