import { useNode, Element, useEditor } from "@craftjs/core";
import { PractoNavbar } from "../Templates/PractoTemplate/PractoNavbar";
import { PractoContactus } from "../Templates/PractoTemplate/PractoContactus";

const elementName = "PractoTemplate";

export const PractoTemplateSection = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

PractoTemplateSection.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every((incomingNode: any) => true),
  },
};

export const PractoTemplate = ({ padding = 20 }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div className=" py-5 w-full" ref={(ref: any) => connect(drag(ref))}>
      <div className=" ">
        <Element id="PractoTemplate" is={PractoTemplateSection} canvas>
          <PractoNavbar />
          <PractoContactus />
        </Element>
      </div>
    </div>
  );
};

PractoTemplate.craft = {
  displayName: elementName,
};
