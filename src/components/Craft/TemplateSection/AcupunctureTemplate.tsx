import { useNode, Element, useEditor } from "@craftjs/core";

import { AcuNavBar } from "../Templates/AcupuntureTemplate/AcuNavBar";
import { AcuBanner } from "../Templates/AcupuntureTemplate/AcuBanner";
import { AcuProcedures } from "../Templates/AcupuntureTemplate/AcuProcedures";
import { AcuFeaturedServices } from "../Templates/AcupuntureTemplate/Acuservices";
import { AcuAboutus } from "../Templates/AcupuntureTemplate/Aboutus";
import { AcuNews } from "../Templates/AcupuntureTemplate/AcuNews";
import { AcuTeam } from "../Templates/AcupuntureTemplate/AcuTeam";
import { AcuFooter } from "../Templates/AcupuntureTemplate/Acufooter";
import { AcuWelcomeBanner } from "../Templates/AcupuntureTemplate/Acuwelcomebanner";
import { AcuReviews } from "../Templates/AcupuntureTemplate/AcuReviews";
import { AcuContactus } from "../Templates/AcupuntureTemplate/AcuContactus";

const elementName = "AcuTemplate";

export const AcuTemplateSection = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

AcuTemplateSection.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every((incomingNode: any) => true),
  },
};

export const AcuTemplate = ({ padding = 20 }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div className=" py-5 w-full" ref={(ref: any) => connect(drag(ref))}>
      <div className=" ">
        <Element id="AcuTemplate" is={AcuTemplateSection} canvas>
          <AcuNavBar />
          <AcuWelcomeBanner />
          <AcuFeaturedServices />
          <AcuAboutus />
          <AcuProcedures />
          <AcuBanner />
          <AcuNews />
          <AcuReviews />
          <AcuTeam />
          <AcuContactus />
          <AcuFooter />
        </Element>
      </div>
    </div>
  );
};

AcuTemplate.craft = {
  displayName: elementName,
};
