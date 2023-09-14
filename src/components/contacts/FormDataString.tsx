import { Element, Frame, useEditor } from "@craftjs/core";
import React, { useEffect } from "react";
import lz from "lzutf8";
import { Button, ButtonText } from "@/components/Craft/widgets/Button";
import Container from "@/components/Craft/widgets/Container";

import { Grid, GridTop } from "@/components/Craft/widgets/Grid";
import Main from "@/components/FormCraft/Main";
import { Topbar } from "@/components/FormCraft/Topbar";
import App, { MainApp } from "@/components/Craft/widgets/App";
import { RadioInputElement } from "@/components/FormCraft/widgets/RadioElement";
import { TextAreaElement } from "@/components/FormCraft/widgets/TextareaElement";

import { GlobalContext } from "@/layouts/GlobalLayout";
import { Editor } from "@craftjs/core";
import { createContext, useContext, useState } from "react";
import { CheckboxInputElement } from "@/components/FormCraft/widgets/CheckboxElement";
import { SelectBoxInputElement } from "@/components/FormCraft/widgets/SelectInputElement";
import { Link, LinkText } from "@/components/Craft/widgets/Link";
import { AttachmentElement } from "@/components/FormCraft/widgets/Attachment";
import { DatePickerElement } from "@/components/FormCraft/widgets/DatePicker";
import { TextInputElement } from "@/components/FormCraft/widgets/TextInput";
import { Text } from "@/components/Craft/widgets/Text/Text";
import FormContainer from "@/components/FormCraft/Container";
import PreviewSet from "@/components/FormCraft/PreviewSet";
import { useRecoilState } from "recoil";
import { formDataState } from "@/atoms/formData";
import { CPTSelectElement } from "../FormCraft/widgets/CPTSelect";
const FormDataStringSub = ({ data }: any) => {
  const { draggedComponent, selected, actions, query, enabled } = useEditor(
    (state, query) => {
      //@ts-ignore
      const [currentNodeId] = state.events.selected;
      let selected;
      // console.log("state", state);

      if (currentNodeId) {
        selected = {
          id: currentNodeId,
          name: state.nodes[currentNodeId].data.name,
          settings:
            state.nodes[currentNodeId].related &&
            state.nodes[currentNodeId].related.settings,
          isDeletable: query.node(currentNodeId).isDeletable(),
        };
      }

      return {
        selected,
        draggedComponent: state?.nodes?.ROOT?.data?.nodes?.length,
        enabled: state.options.enabled,
      };
    }
  );
  const [json, setJson] = useState("");
  useEffect(() => {
    if (data) {
      const json = lz.decompress(lz.decodeBase64(data));

      setJson(json);
      // actions.deserialize(json);
      // console.log("json", json);
      actions.deserialize(json);
      console.log("hela", actions.deserialize(json));
    } else {
      alert("data is empty");
    }
  }, [data, actions]);

  return (
    <div>
      {json && (
        <Frame data={json}>
          <Element is={Container} canvas>
            ...
          </Element>
        </Frame>
      )}
      {/* <button className="absolute top-5 left-5">Clear</button> */}
    </div>
  );
};
const FormDataString = ({ data }: any) => {
  return (
    <Editor
      enabled={false}
      resolver={{
        CPTSelectElement,
        FormContainer,
        Container,
        Text,
        TextInputElement,
        Grid,
        GridTop,
        TextAreaElement,
        RadioInputElement,
        CheckboxInputElement,
        Button,
        ButtonText,
        SelectBoxInputElement,
        Link,
        LinkText,
        AttachmentElement,
        DatePickerElement,
      }}
    >
      <FormDataStringSub data={data} />
    </Editor>
  );
};

export default FormDataString;
