import { useNode } from "@craftjs/core";
import {
  CommonSettings,
  ICommonSettingsProps,
  getCommonSettingsProps,
} from "./CommonSettings";
import { useState } from "react";
import TextArea from "@/components/controls/Textarea";
import TextInput from "@/components/controls/TextInput";
import { IoContract } from "react-icons/io5";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

const elementName = "Calendar";

export interface IProps extends ICommonSettingsProps {
  height?: number;
}

const defaults = {
  backgroundColor: "#ffffff",
  borderColor: "#313641",
  borderRadius: 10,
  borderType: "border-solid",
  borderWidth: 0.5,
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
  paddingTop: 16,
  paddingBottom: 16,
  paddingLeft: 16,
  paddingRight: 16,
};

export default function CalendarElement({
  backgroundColor = defaults.backgroundColor,
  marginTop = defaults.marginTop,
  marginBottom = defaults.marginBottom,
  marginLeft = defaults.marginLeft,
  marginRight = defaults.marginRight,
  paddingTop = defaults.paddingTop,
  paddingBottom = defaults.paddingBottom,
  paddingLeft = defaults.paddingLeft,
  paddingRight = defaults.paddingRight,
  height = 570,
}: IProps) {
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
        hovered && "hover:outline-gray-500 hover:outline-1 hover:outline-dashed"
      } relative overflow-y-scroll`}
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
        height: `${height}px`,
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

      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
    </div>
  );
}

const Settings = () => {
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
        <label className="text-sm text-gray-400">Height</label>

        <TextInput
          lefticon={<IoContract />}
          value={props.height}
          placeholder="Enter height"
          onChange={(e) =>
            setProp((props: any) => (props.height = e.target.value))
          }
          type="number"
        />
      </div>

      <CommonSettings />
    </div>
  );
};

CalendarElement.craft = {
  related: {
    settings: Settings,
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
    height: 570,
  },
  displayName: elementName,
};
