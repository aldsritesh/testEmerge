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

const elementName = "Map";

export interface IMapProps extends ICommonSettingsProps {
  mapUrl?: string;
  mapHeight?: string;
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

export default function MapElement({
  backgroundColor = defaults.backgroundColor,
  marginTop = defaults.marginTop,
  marginBottom = defaults.marginBottom,
  marginLeft = defaults.marginLeft,
  marginRight = defaults.marginRight,
  paddingTop = defaults.paddingTop,
  paddingBottom = defaults.paddingBottom,
  paddingLeft = defaults.paddingLeft,
  paddingRight = defaults.paddingRight,
  mapUrl,
  mapHeight = "450",
}: IMapProps) {
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
            setProp((props: any) => (props.mapUrl = value))
          }
          value={mapUrl}
        />
      ) : (
        <iframe
          src={mapUrl}
          width="100%"
          height={`${mapHeight}px`}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      )}
    </div>
  );
}

const MapSettings = () => {
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
        <label className="text-sm text-gray-400">Map URL</label>
        <TextArea
          onChange={({ target: { value } }) =>
            setProp((props: any) => (props.mapUrl = value))
          }
          value={props.mapUrl}
        />
      </div>

      <div className="mb-4 mt-2 flex flex-col gap-1">
        <label className="text-sm text-gray-400">Height</label>

        <TextInput
          lefticon={<IoContract />}
          value={props.mapHeight}
          placeholder="Enter height"
          onChange={(e) =>
            setProp((props: any) => (props.mapHeight = e.target.value))
          }
          type="number"
        />
      </div>

      <CommonSettings />
    </div>
  );
};

MapElement.craft = {
  related: {
    settings: MapSettings,
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
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113853.9649887784!2d75.63823319726562!3d26.905513299999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db412a7e7b9c3%3A0x9b12e57f66893732!2sALDS%20-%20Web%20and%20Mobile%20App%20Development%20Company%20In%20Jaipur!5e0!3m2!1sen!2sin!4v1685958182380!5m2!1sen!2sin",
    mapHeight: "450",
  },
  displayName: elementName,
};
