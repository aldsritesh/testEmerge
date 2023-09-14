import { useNode } from "@craftjs/core";
import { ReactNode } from "react";
import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "./CommonSettings";

interface IContainerProps extends ICommonSettingsProps {
  children: ReactNode;
}

export default function Container({
  children,
  backgroundColor = baseDefaults.backgroundColor,
  borderRadius = baseDefaults.borderRadius,
  borderColor = baseDefaults.borderColor,
  borderType = "border-solid",
  borderWidth = baseDefaults.borderWidth,
  marginTop = baseDefaults.marginTop,
  marginBottom = baseDefaults.marginBottom,
  marginLeft = baseDefaults.marginLeft,
  marginRight = baseDefaults.marginRight,
  paddingTop = baseDefaults.paddingTop,
  paddingBottom = baseDefaults.paddingBottom,
  paddingLeft = baseDefaults.paddingLeft,
  paddingRight = baseDefaults.paddingRight,
  shadow = "shadow-none",
  shadowColor = "transparent",
}: IContainerProps) {
  const {
    connectors: { connect, drag },
    hovered,
  } = useNode((state) => ({
    hovered: state.events.hovered,
  }));

  return (
    <div
      ref={(ref: any) => connect(drag(ref))}
      className={`border-gray-500 h-screen overflow-y-scroll scrollbar-hide ${borderType} ${shadow} shadow-[${shadowColor}] ${
        hovered && "hover:gray-orange-500 hover:outline-1 hover:outline-dashed"
      }`}
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
        borderColor,
        borderBottomWidth: `${borderWidth}px`,
        borderRadius: `${borderRadius}px`,
      }}
    >
      {children}
    </div>
  );
}

Container.craft = {
  related: {
    settings: CommonSettings,
  },
  props: {
    height: 400,
    width: 0,
    type: "cover",
    ...getCommonSettingsProps(),
    borderRadius: 10,
    borderWidth: baseDefaults.borderWidth,
    marginTop: baseDefaults.marginTop,
    marginBottom: baseDefaults.marginBottom,
    marginLeft: baseDefaults.marginLeft,
    marginRight: baseDefaults.marginRight,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  displayName: "Container",
};
