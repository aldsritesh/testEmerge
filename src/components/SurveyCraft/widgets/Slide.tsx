import { Text } from "./Text/Text";
import { Button, ButtonText } from "./Button";
import { useNode, Element } from "@craftjs/core";
import { Link } from "./Link";
import { TextInputElement } from "./form/TextInput";
import { TextAreaElement } from "./form/TextareaElement";
import { RadioInputElement } from "./form/RadioElement";
import { CheckboxInputElement } from "./form/CheckboxElement";
import { SelectBoxInputElement } from "./form/SelectInputElement";
import { AttachmentElement } from "./form/Attachment";
import { DatePickerElement } from "./form/DatePicker";
import { useState } from "react";

export const SlideTop = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

SlideTop.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) =>
          incomingNode.data.type === Text ||
          incomingNode.data.type === TextInputElement ||
          incomingNode.data.type === TextAreaElement ||
          incomingNode.data.type === RadioInputElement ||
          incomingNode.data.type === CheckboxInputElement ||
          incomingNode.data.type === SelectBoxInputElement ||
          incomingNode.data.type === AttachmentElement ||
          incomingNode.data.type === DatePickerElement ||
          incomingNode.data.type === Button ||
          incomingNode.data.type === Link
      ),
  },
};

export const Slide = ({ padding = 20 }) => {
  const {
    connectors: { connect, drag },
  }: any = useNode();

  const tbStyles = {
    backgroundColor: "#fff",
    borderColor: "#d9d6d6",
    borderWidth: 1,
  };
  const [slideArr, setSlideArr] = useState([]);

  return (
    <div
      className="bg-[#ffffff] py-5 w-full"
      ref={(ref: any) => connect(drag(ref))}
    >
      {/* {slideArr.push( */}
      <div className="flex justify-between pb-5 gap-4">
        <div className="w-[15%] relative">
          <Element id="text" is={SlideTop} canvas>
            <Text
              alignment="center"
              text="Step 1"
              fontSize={20}
              marginBottom={20}
              color="#fff"
              backgroundColor="#262222"
              bold="font-medium"
              paddingTop={5}
              paddingBottom={5}
            />
          </Element>
          <div className="absolute top-10 bg-gray-300 h-32 w-[1.5px] left-12"></div>
        </div>
        <div className="w-[85%] bg-gray-100 rounded-md px-4 py-4">
          <Element id="Container" is={SlideTop} canvas>
            <TextInputElement
              textInputProps={{
                name: "question",
                placeholder: "Question",
                type: "text",
              }}
              {...tbStyles}
            />

            <TextAreaElement
              textInputProps={{
                name: "answer",
                placeholder: "Answer",
              }}
              {...tbStyles}
            />
          </Element>
        </div>{" "}
      </div>
      {/* )} */}
    </div>
  );
};

Slide.craft = {
  displayName: "Slide",
};
