// import { useNode, Element } from "@craftjs/core";

import { useNode, Element, useEditor } from "@craftjs/core";
import { Card } from "../../widgets/Card";
import { Text } from "../../widgets/Text/Text";
import { Banner } from "./banner";
import { CardBottomNew } from "./cardBottom";
import { CardHeader } from "./cardHeader";
import { CardBanner, CardImage } from "./cards";
import { FooterWeb } from "./footer";
import { NavBar } from "./navBar";
import { Team } from "./team";
import { WebTestimonial } from "./webTestimonial";

export const TemplateOneTop = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

TemplateOneTop.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every((incomingNode: any) => true),
  },
};

export const TemplateOne = ({ padding = 20 }) => {
  const {
    connectors: { connect, drag },
  }: any = useNode();

  const tbStyles = {
    backgroundColor: "#fff",
    borderColor: "#d9d6d6",
    borderWidth: 1,
  };

  return (
    <div
      className="bg-[#ffffff] py-5 w-full"
      ref={(ref: any) => connect(drag(ref))}
    >
      <div className=" ">
        <Element id="text" is={TemplateOneTop} canvas>
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

TemplateOne.craft = {
  displayName: "TemplateOne",
};
