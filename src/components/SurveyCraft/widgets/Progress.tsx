import { useNode } from "@craftjs/core";
import {
  CommonSettings,
  ICommonSettingsProps,
  getCommonSettingsProps,
} from "./CommonSettings";
import TextArea from "@/components/controls/Textarea";
import TextInput from "@/components/controls/TextInput";

const elementName = "Progress";

const prgTypes = [
  "progress-primary",
  "progress-secondary",
  "progress-accent",
  "progress-warning",
  "progress-success",
  "progress-error",
];

export interface IProps extends ICommonSettingsProps {
  value?: number;
  max?: number;
  progressType?:
    | "progress-primary"
    | "progress-secondary"
    | "progress-accent"
    | "progress-warning"
    | "progress-success"
    | "progress-error";
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

export default function Progress({
  backgroundColor = defaults.backgroundColor,
  marginTop = defaults.marginTop,
  marginBottom = defaults.marginBottom,
  marginLeft = defaults.marginLeft,
  marginRight = defaults.marginRight,
  paddingTop = defaults.paddingTop,
  paddingBottom = defaults.paddingBottom,
  paddingLeft = defaults.paddingLeft,
  paddingRight = defaults.paddingRight,
  value,
  max,
  progressType = "progress-primary",
}: IProps) {
  const {
    connectors: { connect, drag },
    hovered,
  } = useNode((state) => ({
    hovered: state.events.hovered,
  }));

  return (
    <div
      className={`py-2 ${
        hovered && "hover:outline-orange-500 hover:outline"
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
        <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs px-1 z-50">
          {elementName}
        </div>
      )}

      <progress
        className={`progress ${progressType} w-full`}
        value={value}
        max={max}
      ></progress>
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
        <label className="text-sm text-gray-400 ">Progress Type</label>
        <div className="dropdown">
          <label
            tabIndex={0}
            className={`btn hover:bg-transparent hover:text-black rounded-md py-2 btn-sm bg-transparent  border-gray-300 capitalize w-full text-left justify-start text-gray-500`}
          >
            {props.progressType}
          </label>
          <div
            tabIndex={0}
            className="dropdown-content card card-compact w-64 p-2 shadow bg-white text-gray-700 max-h-80 overflow-y-scroll scrollbar-hide"
          >
            <ul tabIndex={0} className="menu w-full bg-transparent">
              {prgTypes.map((item, index) => (
                <li
                  key={index}
                  onClick={() =>
                    setProp((props: any) => (props.progressType = item))
                  }
                  className={`${
                    item === props.progressType &&
                    "bg-primary text-primary-content rounded-md"
                  }`}
                >
                  <p className={`${item} text-sm`}>{item.replace("-", " ")}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-4 mt-2 flex flex-col gap-1">
        <label className="text-sm text-gray-400">Default Value</label>
        <TextInput
          onChange={({ target: { value } }) =>
            setProp((props: any) => (props.value = value))
          }
          value={props.value}
        />
      </div>

      <div className="mb-4 mt-2 flex flex-col gap-1">
        <label className="text-sm text-gray-400">Max</label>
        <TextInput
          onChange={({ target: { value } }) =>
            setProp((props: any) => (props.max = value))
          }
          value={props.max}
        />
      </div>

      <CommonSettings />
    </div>
  );
};

Progress.craft = {
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
    value: 20,
    max: 100,
    progressType: "progress-primary",
  },
  displayName: elementName,
};
