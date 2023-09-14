import { Text } from "./Text/Text";
import { Button } from "./Button";
import { useNode, Element } from "@craftjs/core";
import { BuilderImage } from "./Image";

export const CardTop = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

CardTop.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === Text
      ),
  },
};

export const CardBottom = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return <div ref={connect}>{children}</div>;
};

CardBottom.craft = {
  rules: {
    // Only accept Buttons
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === Button
      ),
  },
};

export const CardImage = ({ children }: any) => {
  const {
    connectors: { connect, drag },
  }: any = useNode();
  return <div ref={connect}>{children}</div>;
};

CardImage.craft = {
  rules: {
    // Only accept Buttons
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === BuilderImage
      ),
  },
};

export const Card = ({ padding = 20 }) => {
  const {
    connectors: { connect, drag },
  }: any = useNode();
  return (
    <div className="bg-white p-4 w-full" ref={(ref: any) => connect(drag(ref))}>
      <div className="card card-compact w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <Element id="heroImage" is={CardImage} canvas>
            <BuilderImage />
          </Element>
          <Element id="text" is={CardTop} canvas>
            <Text alignment="left" text="Title" fontSize={20} />
            <Text alignment="left" text="Subtitle" fontSize={15} />
          </Element>
          <div className="card-actions justify-end">
            <Element id="buttons" is={CardBottom} canvas>
              <Button text="Learn More" />
            </Element>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.craft = {
  displayName: "Card",
};
