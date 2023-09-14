import { useNode } from "@craftjs/core";
import {
  CommonSettings,
  ICommonSettingsProps,
  getCommonSettingsProps,
} from "./CommonSettings";
import { useState } from "react";
import TextArea from "@/components/controls/Textarea";

const elementName = "Custom HTML";

export interface ICustomHTMLProps extends ICommonSettingsProps {
  html?: string;
}

const defaults = {
  backgroundColor: "transparent",
  borderColor: "#313641",
  borderRadius: 10,
  borderType: "border-solid",
  borderWidth: 0,
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
  paddingTop: 16,
  paddingBottom: 16,
  paddingLeft: 0,
  paddingRight: 0,
};

export default function CustomHTML({
  backgroundColor = defaults.backgroundColor,
  marginTop = defaults.marginTop,
  marginBottom = defaults.marginBottom,
  marginLeft = defaults.marginLeft,
  marginRight = defaults.marginRight,
  paddingTop = defaults.paddingTop,
  paddingBottom = defaults.paddingBottom,
  paddingLeft = defaults.paddingLeft,
  paddingRight = defaults.paddingRight,
  html,
}: ICustomHTMLProps) {
  const {
    connectors: { connect, drag },
    hovered,
    actions: { setProp },
  } = useNode((state) => ({
    hovered: state.events.hovered,
  }));

  const [selected, setSelected] = useState(false);

  return (
    <div
      className={`py-2 ${
        hovered &&
        "hover:outline-gray-500 hover:outline-dashed hover:outline-1 "
      } relative`}
      ref={(ref: any) => connect(drag(ref))}
      style={{
        backgroundColor,
        marginTop: `${marginTop}px`,
        marginBottom: `${marginBottom}px`,
        marginLeft: `${marginLeft}px`,
        marginRight: `${marginRight}px`,
        paddingTop: `${paddingTop}px`,
        paddingBottom: `${paddingBottom}px`,
        paddingLeft: `${paddingLeft}px`,
        paddingRight: `${paddingRight}px`,
      }}
      onDoubleClick={() => setSelected(true)}
      contentEditable={selected}
      onBlur={() => setSelected(false)}
    >
      {hovered && (
        <div className="absolute top-0 left-0 bg-blue-500 text-white text-xs px-1 z-50">
          {elementName}
        </div>
      )}

      {selected ? (
        <TextArea
          onChange={({ target: { value } }) =>
            setProp((props: any) => (props.html = value))
          }
          value={html}
        />
      ) : (
        <div dangerouslySetInnerHTML={{ __html: html! }}></div>
      )}
    </div>
  );
}

const DividerSettings = () => {
  const {
    actions: { setProp },
    props,
    id,
    data,
  } = useNode((node) => ({
    props: node.data.props,
    data: node.data,
  }));
  return (
    <div>
      <div className="mb-4 mt-2 flex flex-col gap-1">
        <label className="text-sm text-gray-400">Custom HTML</label>
        <TextArea
          onChange={({ target: { value } }) =>
            setProp((props: any) => (props.html = value))
          }
          value={props.html}
        />
      </div>

      <CommonSettings />
    </div>
  );
};

CustomHTML.craft = {
  related: {
    settings: DividerSettings,
  },
  props: {
    ...getCommonSettingsProps(),
    borderColor: "#ddd",
    borderWidth: defaults.borderWidth,
    backgroundColor: defaults.backgroundColor,
    borderType: "border-solid",
    marginTop: defaults.marginTop,
    marginBottom: defaults.marginBottom,
    marginLeft: defaults.marginLeft,
    marginRight: defaults.marginRight,
    paddingTop: defaults.paddingTop,
    paddingBottom: defaults.paddingBottom,
    paddingLeft: defaults.paddingLeft,
    paddingRight: defaults.paddingRight,
    html: `<p>Start typing html</p>`,
  },
  displayName: elementName,
};
