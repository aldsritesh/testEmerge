import { useNode } from "@craftjs/core";
import { ReactNode } from "react";
import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "./CommonSettings";

interface IRateCardProps extends ICommonSettingsProps {
  children: ReactNode;
}

export default function RateCard({
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
}: IRateCardProps) {
  const {
    connectors: { connect, drag },
    hovered,
  } = useNode((state) => ({
    hovered: state.events.hovered,
  }));

  return (
    <div
      ref={(ref: any) => connect(drag(ref))}
      className={` overflow-y-scroll scrollbar-hide ${borderType} ${shadow} shadow-[${shadowColor}] ${
        hovered && "hover:outline-blue-500 hover:outline-1 hover:outline z-60"
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

RateCard.craft = {
  related: {
    settings: CommonSettings,
  },
  props: {
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
  displayName: "RateCard",
};