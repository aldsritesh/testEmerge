import { useNode, Element } from "@craftjs/core";
import { TextInputElement } from "./TextInput";
import { TextAreaElement } from "./TextareaElement";
import { RadioInputElement } from "./RadioElement";
import { CheckboxInputElement } from "./CheckboxElement";
import { SelectBoxInputElement } from "./SelectInputElement";
import { AttachmentElement } from "./Attachment";
import { DatePickerElement } from "./DatePicker";
import { Button } from "../Button";
import { Link } from "../Link";
import { Text } from "../Text/Text";

export const MainFormTop = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

MainFormTop.craft = {
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

export const MainForm = ({ padding = 20 }) => {
  const {
    connectors: { connect, drag },
  }: any = useNode();

  const tbStyles = {
    backgroundColor: "#fff",
    borderColor: "#d9d6d6",
    borderWidth: 1,
  };

  return (
    <>
      <Element id="text" is={MainFormTop} canvas>
        <div className="bg-white px-4 py-4">
          {/* Full name */}
          <div className="flex gap-3 justify-between">
            <div className="w-1/2">
          
              <Text
                text="Full Name"
                fontSize={17}
                marginBottom={2}
                color="#4b5563"
                bold="font-semibold"
              />
              <TextInputElement
                textInputProps={{
                  name: "fullName",
                  placeholder: "Your full name",
                  type: "text",
                }}
                {...tbStyles}
              />
            </div>

            {/* Email */}
            <div className="w-1/2">
              <Text
                text="Email"
                fontSize={17}
                marginBottom={2}
                color="#4b5563"
                bold="font-semibold"
              />
              <TextInputElement
                textInputProps={{
                  name: "email",
                  placeholder: "Your email",
                  type: "email",
                }}
                {...tbStyles}
              />
            </div>
          </div>

          {/* phone */}
          <Text
            text="Phone"
            fontSize={17}
            marginBottom={2}
            color="#4b5563"
            bold="font-semibold"
          />
          <div className="flex w-[80%] gap-1 ">
            <div className="w-28">
              <SelectBoxInputElement
                options={[
                  {
                    optionProps: {
                      checked: true,
                      value: "+91",
                      required: true,
                    },
                    label: "+91",
                  },
                  {
                    optionProps: {
                      checked: true,
                      value: "+75",
                      required: true,
                    },
                    label: "+75",
                  },
                  {
                    optionProps: {
                      checked: true,
                      value: "+83",
                      required: true,
                    },
                    label: "+83",
                  },
                ]}
              />
            </div>
            <TextInputElement
              textInputProps={{
                name: "phoneNumber",
                placeholder: "Your phone number",
                type: "number",
              }}
              {...tbStyles}
            />
          </div>

          {/* portfolio */}
          <div>
            <Text
              text="Portfolio"
              fontSize={17}
              marginBottom={2}
              color="#4b5563"
              bold="font-semibold"
            />
            <AttachmentElement />
          </div>

          {/* Gender */}
          <div className="w-[48.8%]">
            <Text
              text="Gender"
              fontSize={17}
              marginBottom={2}
              color="#4b5563"
              bold="font-semibold"
            />
            <RadioInputElement
              radios={[
                {
                  radioProps: {
                    checked: true,
                    value: "Male",
                    required: true,
                  },
                  label: "Male",
                },
                {
                  radioProps: {
                    value: "Female",
                    required: true,
                  },
                  label: "Female",
                },
              ]}
            />
          </div>

          {/* ZipCode And CountryCode  */}
          <div className="flex gap-3 justify-between">
            <div className="w-1/2">
              <Text
                text="ZIP Code"
                fontSize={17}
                marginBottom={2}
                color="#4b5563"
                bold="font-semibold"
              />
              <TextInputElement
                textInputProps={{
                  name: "zipCode",
                  placeholder: "Your ZIP code",
                  type: "text",
                }}
                {...tbStyles}
              />
            </div>

            {/* Country Code */}
            <div className="w-1/2">
              <Text
                text="Country"
                fontSize={17}
                marginBottom={2}
                color="#4b5563"
                bold="font-semibold"
              />
              <SelectBoxInputElement
                options={[
                  {
                    optionProps: {
                      checked: true,
                      value: "India",
                      required: true,
                    },
                    label: "India",
                  },
                  {
                    optionProps: {
                      checked: true,
                      value: "sriLanka",
                      required: true,
                    },
                    label: "Sri Lanka",
                  },
                  {
                    optionProps: {
                      checked: true,
                      value: "china",
                      required: true,
                    },
                    label: "China",
                  },
                ]}
              />
            </div>
          </div>

          {/* Address */}
          <Text
            text="Address"
            fontSize={17}
            marginBottom={2}
            color="#4b5563"
            bold="font-semibold"
          />
          <TextAreaElement
            textInputProps={{
              name: "address",
              placeholder: "Your address",
              type: "text",
            }}
          />
        </div>
      </Element>
    </>
  );
};

MainForm.craft = {
  displayName: "MainForm",
};
