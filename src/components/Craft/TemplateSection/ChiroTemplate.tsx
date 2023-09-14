// import { useNode, Element } from "@craftjs/core";

import { useNode, Element, useEditor } from "@craftjs/core";

import { ChiroNavBar } from "../Templates/ChiroTemplate/ChiroNavBar";
import { ChiroBanner } from "../Templates/ChiroTemplate/ChiroBanner";
import { ChiroAppointment } from "../Templates/ChiroTemplate/ChiroAppointment";
import { ChiroAbout } from "../Templates/ChiroTemplate/ChiroAbout";
import { ChiroTeam } from "../Templates/ChiroTemplate/ChiroTeam";
import { ChiroFeaturedServices } from "../Templates/ChiroTemplate/ChiroFeaturedServices";
import { ChiroQualityService } from "../Templates/ChiroTemplate/ChiroQualityService";
import { ChiroClientSays } from "../Templates/ChiroTemplate/ChiroClientSays";
import { ChiroArticles } from "../Templates/ChiroTemplate/ChiroArticles";
import { ChiroFooter } from "../Templates/ChiroTemplate/ChiroFooter";

const elementName = "ChiroTemplate";

export const ChiroTemplateSection = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

ChiroTemplateSection.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every((incomingNode: any) => true),
  },
};

export const ChiroTemplate = ({ padding = 20 }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div className=" py-5 w-full" ref={(ref: any) => connect(drag(ref))}>
      <div className=" ">
        <Element id="ChiroTemplate" is={ChiroTemplateSection} canvas>
          <ChiroNavBar />
          <ChiroBanner />
          <ChiroAppointment />
          <ChiroAbout />
          <ChiroTeam />
          <ChiroFeaturedServices />
          <ChiroQualityService />
          <ChiroClientSays />
          <ChiroArticles />
          <ChiroFooter />
        </Element>
      </div>
    </div>
  );
};

ChiroTemplate.craft = {
  displayName: elementName,
};
