import { useNode } from "@craftjs/core";
import {
  CommonSettings,
  ICommonSettingsProps,
  getCommonSettingsProps,
} from "./CommonSettings";
import { useEffect, useRef, useState } from "react";
import TextInput from "@/components/controls/TextInput";
import { IoContract } from "react-icons/io5";
import moment from "moment";
import CountdownComp from "./CountdownComp";

const elementName = "CountDown";

export interface CountDownProps extends ICommonSettingsProps {
  dateTime?: string;
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
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
};

export default function Countdown({
  backgroundColor = defaults.backgroundColor,
  marginTop = defaults.marginTop,
  marginBottom = defaults.marginBottom,
  marginLeft = defaults.marginLeft,
  marginRight = defaults.marginRight,
  paddingTop = defaults.paddingTop,
  paddingBottom = defaults.paddingBottom,
  paddingLeft = defaults.paddingLeft,
  paddingRight = defaults.paddingRight,
  dateTime = "2023-07-01",
}: CountDownProps) {
  const {
    connectors: { connect, drag },
    hovered,
    actions: { setProp },
  } = useNode((state) => ({
    hovered: state.events.hovered,
  }));

  return (
    <div
      className={`py-2 ${
        hovered && "hover:outline-gray-500 hover:outline-dashed hover:outline-1"
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
    >
      {hovered && (
        <div className="absolute top-0 left-0 bg-blue-500 text-white text-xs px-1 z-50">
          {elementName}
        </div>
      )}

      <CountdownComp dateTime={dateTime} />
    </div>
  );
}

const CountdownSettings = () => {
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
        <label className="text-sm text-gray-400">Select Date</label>

        <TextInput
          lefticon={<IoContract />}
          value={props.dateTime}
          placeholder="Enter Date"
          onChange={(e) =>
            setProp((props: any) => (props.dateTime = e.target.value))
          }
          type="date"
        />
      </div>

      <CommonSettings />
    </div>
  );
};

Countdown.craft = {
  related: {
    settings: CountdownSettings,
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
    dateTime: "2023-07-01",
  },
  displayName: elementName,
};
