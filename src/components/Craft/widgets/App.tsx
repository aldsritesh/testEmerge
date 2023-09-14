import { Element, useNode } from "@craftjs/core";
import { ReactNode } from "react";
import Container from "./Container";

interface IAppProps {
  children: ReactNode;
}

export const MainApp = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only p-2">
      {children}
    </div>
  );
};

MainApp.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every((incomingNode: any) => true),
  },
};

export default function App({ children }: IAppProps) {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <Container>
      <div
        ref={(ref: any) => connect(drag(ref))}
        className="bg-[#f5f7f9] min-h-16 h-auto"
      >
        <Element id={`main`} is={MainApp} canvas></Element>
      </div>
    </Container>
  );
}
