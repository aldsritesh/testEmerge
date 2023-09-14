import { useContext } from "react";
import { Toolbox } from "./Toolbox";
import { Element, Frame } from "@craftjs/core";
import Container from "./widgets/Container";
import { HeroLayout } from "./widgets/prebuilt/HeroLayout";
import { SettingsPanel } from "./Settings";
import { CraftContext } from "@/pages/builder/website/craft";
import { HeaderLayout } from "./widgets/prebuilt/Header";
import { BuilderImage } from "./widgets/Image";
import App from "./widgets/App";
import { OrderOneStep } from "./widgets/prebuilt/OrderOneStep";
import { OrderTwoStep } from "./widgets/prebuilt/OrderTwoStep";
import { TemplateOne } from "./Templates/dentalTemplate";
import { Banner } from "./Templates/dentalTemplate/banner";
import { CardHeader } from "./Templates/dentalTemplate/cardHeader";
import { CardBanner } from "./Templates/dentalTemplate/cards";
import { WebTestimonial } from "./Templates/dentalTemplate/webTestimonial";
import { CardBottomNew } from "./Templates/dentalTemplate/cardBottom";
import { FooterWeb } from "./Templates/dentalTemplate/footer";
import { Team } from "./Templates/dentalTemplate/team";
import { ContactTemp } from "./Templates/dentalTemplate/contactUs";
import { NavBar } from "./Templates/Medicaltemplate/navBar";
import { Doctors } from "./Templates/Medicaltemplate/doctors";
import { PracticeAreas } from "./Templates/Medicaltemplate/PracticeAreas";

export default function Medicaltemplate() {
  const { device } = useContext(CraftContext);

  return (
    <div className="flex h-full">
      {/* <div className="w-[22%] pr-2 h-screen">
        <div className="bg-white rounded-md shadow-md h-full overflow-y-scroll pb-40 scrollbar-hide">
          <Toolbox />
        </div>
      </div> */}
      <div className="w-[78%] h-full overflow-y-scroll scrollbar-hide pb-40 px-5">
        <Frame>
          <Element is={Container} canvas>
            {/* <TemplateOne /> */}
            <NavBar />
            <Doctors />
            <PracticeAreas />
            <CardHeader />
            {/* <CardBanner />
            <WebTestimonial />
            <Team />
            <ContactTemp />
            <FooterWebs />   */}
          </Element>
        </Frame>
      </div>
      <div className="w-[22%] pr-2 h-screen">
        <div className="bg-white rounded-md shadow-md h-full overflow-y-scroll pb-40 scrollbar-hide">
          <SettingsPanel />
        </div>
      </div>
    </div>
  );
}
