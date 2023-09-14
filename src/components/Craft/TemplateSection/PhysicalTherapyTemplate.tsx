// import { useNode, Element } from "@craftjs/core";

import { useNode, Element, useEditor } from "@craftjs/core";
import { TherapyTempNavbar } from "../../Craft/Templates/PhysicalTherapyTemplate/TherapyTempNavbar";
import { WelcomePost } from "../../Craft/Templates/PhysicalTherapyTemplate/WelcomePost";
import { WhyChooseUs } from "../../Craft/Templates/PhysicalTherapyTemplate/WhyChooseUs";
import { ServicesLayout } from "../../Craft/Templates/PhysicalTherapyTemplate/Services";
import { AboutUs } from "../../Craft/Templates/PhysicalTherapyTemplate/AboutUs";
import { Testimonial } from "../../Craft/Templates/PhysicalTherapyTemplate/Testimonials";
import { PhysioBlog } from "../../Craft/Templates/PhysicalTherapyTemplate/PhysioBlog";
import { PhysioAppointment } from "../../Craft/Templates/PhysicalTherapyTemplate/Appointment";
import { PhysioFooter } from "../../Craft/Templates/PhysicalTherapyTemplate/PhysioFooter";


const elementName = "PhysicalTherapyTemplate";

export const PhysicalTherapyTemplateSection = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

PhysicalTherapyTemplateSection.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every((incomingNode: any) => true),
  },
};

export const PhysicalTherapyTemplate = ({ padding = 20 }) => {
   const {
    connectors: { connect, drag },
  } = useNode();


  return (
    <div
      className=" py-5 w-full"
      ref={(ref: any) => connect(drag(ref))}
    >
      <div className=" ">
        <Element id="PhysicalTherapyTemplate" is={PhysicalTherapyTemplateSection} canvas>
        <TherapyTempNavbar />
            <WelcomePost />
            <WhyChooseUs />
            <ServicesLayout />
            <AboutUs />
            <Testimonial />
            <PhysioBlog />
            <PhysioAppointment />
            <PhysioFooter />
            </Element>
      </div>
    </div>
  );
};

PhysicalTherapyTemplate.craft = {
  displayName: elementName,
};