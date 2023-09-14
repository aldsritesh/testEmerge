// import { useNode, Element } from "@craftjs/core";

import { useNode, Element, useEditor } from "@craftjs/core";

import { NavBar } from "../Templates/dentalTemplate/navBar";
import { Banner } from "../Templates/dentalTemplate/banner";
import { CardHeader } from "../Templates/dentalTemplate/cardHeader";
import { CardBanner } from "../Templates/dentalTemplate/cards";
import { WebTestimonial } from "../Templates/dentalTemplate/webTestimonial";
import { CardBottomNew } from "../Templates/dentalTemplate/cardBottom";
import { Team } from "../Templates/dentalTemplate/team";
import { FooterWeb } from "../Templates/dentalTemplate/footer";

const elementName = "DentleTemplate";

export const DentleTemplateSection = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

DentleTemplateSection.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every((incomingNode: any) => true),
  },
};

export const DentleTemplate = ({ padding = 20 }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div className=" py-5 w-full" ref={(ref: any) => connect(drag(ref))}>
      <div className=" ">
        <Element id="DentleTemplate" is={DentleTemplateSection} canvas>
        <NavBar />
          <Banner />
          <CardHeader />
          <CardBanner />
          <WebTestimonial />
          <CardBottomNew />
          <Team />
          <FooterWeb />
        </Element>
      </div>
    </div>
  );
};

DentleTemplate.craft = {
  displayName: elementName,
};
