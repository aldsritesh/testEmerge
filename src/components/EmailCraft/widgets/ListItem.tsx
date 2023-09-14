import { useNode } from "@craftjs/core";
import {
  CommonSettings,
  ICommonSettingsProps,
  getCommonSettingsProps,
} from "./CommonSettings";
import { ReactNode } from "react";

export interface IListItemsProps extends ICommonSettingsProps {
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;
  borderType?:
    | "border-solid"
    | "border-dashed"
    | "border-dotted"
    | "border-double"
    | "border-hidden"
    | "border-none";
  borderWidth?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  children: ReactNode;
}

const defaults = {
  backgroundColor: "transparent",
  borderColor: "#313641",
  borderRadius: 10,
  borderType: "border-solid",
  borderWidth: 1,
  marginTop: 5,
  marginBottom: 5,
  marginLeft: 0,
  marginRight: 0,
  paddingTop: 5,
  paddingBottom: 5,
  paddingLeft: 0,
  paddingRight: 0,
};

export default function ListItem({
  backgroundColor = defaults.backgroundColor,
  marginTop = defaults.marginTop,
  marginBottom = defaults.marginBottom,
  marginLeft = defaults.marginLeft,
  marginRight = defaults.marginRight,
  paddingTop = defaults.paddingTop,
  paddingBottom = defaults.paddingBottom,
  paddingLeft = defaults.paddingLeft,
  paddingRight = defaults.paddingRight,
  children,
}: IListItemsProps) {
  const {
    connectors: { connect, drag },
    hovered,
  } = useNode((state) => ({ hovered: state.events.hovered }));

  return (
    <li
      className={`py-2 ${
        hovered && "hover:outline-gray-500 hover:outline-1 outline-dashed"
      }`}
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
          List Item
        </div>
      )}
      {children}
    </li>
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
      <CommonSettings />
    </div>
  );
};

ListItem.craft = {
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
  },
  displayName: "List Item",
};
