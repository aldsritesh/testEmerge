import TextInput from "@/components/controls/TextInput";
import { useNode } from "@craftjs/core";
import { MuiColorInput } from "mui-color-input";
import { IoContract } from "react-icons/io5";

export const baseDefaults = {
  backgroundColor: "transparent",
  borderColor: "transparent",
  borderRadius: 0,
  borderWidth: 0,
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
  borderType: "border-none",
  shadow: "shadow-none",
  shadowColor: "transparent",
};

export interface ICommonSettingsProps {
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
  shadow?:
    | "shadow-sm"
    | "shadow"
    | "shadow-md"
    | "shadow-lg"
    | "shadow-xl"
    | "shadow-2xl"
    | "shadow-inner"
    | "shadow-none";
  shadowColor?: string;
}

const borderTypes = [
  "border-solid",
  "border-dashed",
  "border-dotted",
  "border-double",
  "border-hidden",
  "border-none",
];

const shadowTypes = [
  "shadow-sm",
  "shadow",
  "shadow-md",
  "shadow-lg",
  "shadow-xl",
  "shadow-2xl",
  "shadow-inner",
  "shadow-none",
];

export const CommonSettings = () => {
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
      <div className="collapse collapse-arrow">
        <input type="checkbox" />
        <div className="collapse-title px-0">
          <p className="text-[14px] text-gray-500 font-semibold">
            Common Settings
          </p>
        </div>
        <div className="collapse-content px-0">
          <div>
            <div className="py-3 border-t">
              Margin
              <div className="flex flex-wrap justify-between">
                <div className="mb-2 mt-2 flex flex-col gap-1 w-1/2 pr-1">
                  <label className="text-sm text-gray-400 line-clamp-1">
                    Margin Top
                  </label>
                  <TextInput
                    lefticon={<IoContract />}
                    value={props.marginTop == "" ? 0 : props.marginTop}
                    placeholder="Margin Top"
                    onChange={(e) =>
                      setProp(
                        (props: any) => (props.marginTop = e.target.value)
                      )
                    }
                    type="number"
                  />
                </div>

                <div className="mb-2 mt-2 flex flex-col gap-1 w-1/2 pl-1">
                  <label className="text-sm text-gray-400 line-clamp-1">
                    Margin Bottom
                  </label>
                  <TextInput
                    lefticon={<IoContract />}
                    value={props.marginBottom == "" ? 0 : props.marginBottom}
                    placeholder="Margin Bottom"
                    onChange={(e) =>
                      setProp(
                        (props: any) => (props.marginBottom = e.target.value)
                      )
                    }
                    type="number"
                  />
                </div>
              </div>
              <div className="flex flex-wrap justify-between">
                <div className="mb-2 mt-2 flex flex-col gap-1 pr-1 w-1/2">
                  <label className="text-sm text-gray-400 line-clamp-1">
                    Margin Left
                  </label>
                  <TextInput
                    lefticon={<IoContract />}
                    value={props.marginLeft == "" ? 0 : props.marginLeft}
                    placeholder="Margin Left"
                    onChange={(e) =>
                      setProp(
                        (props: any) => (props.marginLeft = e.target.value)
                      )
                    }
                    type="number"
                  />
                </div>

                <div className="mb-2 mt-2 flex flex-col gap-1 pl-1 w-1/2">
                  <label className="text-sm text-gray-400 line-clamp-1">
                    Margin Right
                  </label>
                  <TextInput
                    lefticon={<IoContract />}
                    value={props.marginRight == "" ? 0 : props.marginRight}
                    placeholder="Margin Right"
                    onChange={(e) =>
                      setProp(
                        (props: any) => (props.marginRight = e.target.value)
                      )
                    }
                    type="number"
                  />
                </div>
              </div>
            </div>
            <div className="py-3 border-t border-b my-3">
              Padding
              <div className="flex flex-wrap justify-between">
                <div className="mb-2 mt-2 flex flex-col gap-1 w-1/2 pr-1">
                  <label className="text-sm text-gray-400 line-clamp-1">
                    Padding Top
                  </label>
                  <TextInput
                    lefticon={<IoContract />}
                    value={props.paddingTop == "" ? 0 : props.paddingTop}
                    placeholder="Padding Top"
                    onChange={(e) =>
                      setProp(
                        (props: any) => (props.paddingTop = e.target.value)
                      )
                    }
                    type="number"
                  />
                </div>

                <div className="mb-2 mt-2 flex flex-col gap-1 w-1/2 pl-1">
                  <label className="text-sm text-gray-400 line-clamp-1">
                    Padding Bottom
                  </label>
                  <TextInput
                    lefticon={<IoContract />}
                    value={props.paddingBottom == "" ? 0 : props.paddingBottom}
                    placeholder="Padding Bottom"
                    onChange={(e) =>
                      setProp(
                        (props: any) => (props.paddingBottom = e.target.value)
                      )
                    }
                    type="number"
                  />
                </div>
              </div>
              <div className="flex flex-wrap justify-between">
                <div className="mb-2 mt-2 flex flex-col gap-1 pr-1 w-1/2">
                  <label className="text-sm text-gray-400 line-clamp-1">
                    Padding Left
                  </label>
                  <TextInput
                    lefticon={<IoContract />}
                    value={props.paddingLeft == "" ? 0 : props.paddingLeft}
                    placeholder="Padding Right"
                    onChange={(e) =>
                      setProp(
                        (props: any) => (props.paddingLeft = e.target.value)
                      )
                    }
                    type="number"
                  />
                </div>

                <div className="mb-2 mt-2 flex flex-col gap-1 pl-1 w-1/2">
                  <label className="text-sm text-gray-400 line-clamp-1">
                    Padding Right
                  </label>
                  <TextInput
                    lefticon={<IoContract />}
                    value={props.paddingRight == "" ? 0 : props.paddingRight}
                    placeholder="Padding Right"
                    onChange={(e) =>
                      setProp(
                        (props: any) => (props.paddingRight = e.target.value)
                      )
                    }
                    type="number"
                  />
                </div>
              </div>
            </div>
            <div className="mb-2 flex flex-col gap-1">
              <label className="text-sm text-gray-400 ">Background Color</label>
              <div className="w-full">
                <MuiColorInput
                  className="w-full"
                  // format="hex"
                  value={
                    props.backgroundColor
                      ? props.backgroundColor
                      : baseDefaults.backgroundColor
                  }
                  onChange={(e) =>
                    setProp((props: any) => (props.backgroundColor = e))
                  }
                />
              </div>
            </div>
            <div className="mb-2 mt-2 flex flex-col gap-1">
              <label className="text-sm text-gray-400 ">Shadow Type</label>
              <div className="dropdown">
                <label
                  tabIndex={0}
                  className={`btn hover:bg-transparent hover:text-black rounded-md pt-4 pb-8 btn-sm bg-transparent text-black border-gray-300 capitalize w-full text-left justify-start ${props.shadow} text-gray-500`}
                >
                  {props.shadow}
                </label>
                <div
                  tabIndex={0}
                  className="dropdown-content card card-compact w-64 p-2 shadow bg-white text-gray-700 max-h-80 overflow-y-scroll scrollbar-hide"
                >
                  <ul tabIndex={0} className="menu w-full bg-transparent">
                    {shadowTypes.map((item, index) => (
                      <li
                        key={index}
                        onClick={() =>
                          setProp((props: any) => (props.shadow = item))
                        }
                        className={`${
                          item === props.shadow &&
                          "bg-primary text-primary-content rounded-md"
                        }`}
                      >
                        <a className={`capitalize ${item} text-sm`}>{item}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mb-2 mt-2 flex flex-col gap-1">
              <label className="text-sm text-gray-400 ">Shadow Color</label>
              <div className="w-full">
                <MuiColorInput
                  // format="hex"
                  value={
                    props.shadowColor
                      ? props.shadowColor
                      : baseDefaults.shadowColor
                  }
                  onChange={(e) =>
                    setProp((props: any) => (props.shadowColor = e))
                  }
                  className="w-full"
                />
              </div>
            </div>
            <div className="mb-2 mt-2 flex flex-col gap-1">
              <label className="text-sm text-gray-400 ">Border Color</label>
              <div className="w-full">
                <MuiColorInput
                  // format="hex"
                  value={
                    props.borderColor
                      ? props.borderColor
                      : baseDefaults.borderColor
                  }
                  onChange={(e) =>
                    setProp((props: any) => (props.borderColor = e))
                  }
                  className="w-full"
                />
              </div>
            </div>
            <div className="mb-2 mt-2 flex flex-col gap-1">
              <label className="text-sm text-gray-400 ">Border Type</label>
              <div className="dropdown">
                <label
                  tabIndex={0}
                  className={`btn hover:bg-transparent hover:text-black rounded-md pt-4 pb-8 btn-sm bg-transparent text-black border-gray-300 capitalize w-full text-left justify-start ${props.borderType} text-gray-500`}
                >
                  {props.borderType}
                </label>
                <div
                  tabIndex={0}
                  className="dropdown-content card card-compact w-64 p-2 shadow bg-white text-gray-700 max-h-80 overflow-y-scroll scrollbar-hide"
                >
                  <ul tabIndex={0} className="menu w-full bg-transparent">
                    {borderTypes.map((item, index) => (
                      <li
                        key={index}
                        onClick={() =>
                          setProp((props: any) => (props.borderType = item))
                        }
                        className={`${
                          item === props.borderType &&
                          "bg-primary text-primary-content rounded-md"
                        }`}
                      >
                        <a className={`capitalize ${item} text-sm`}>
                          {item.replace("-", " ")}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mb-2 mt-2 flex flex-col gap-1">
              <label className="text-sm text-gray-400 ">Border Radius</label>
              <TextInput
                lefticon={<IoContract />}
                value={props.borderRadius}
                placeholder="Border radius in px"
                onChange={(e) =>
                  setProp((props: any) => (props.borderRadius = e.target.value))
                }
                type="number"
                min={0}
              />
            </div>
            <div className="mb-2 mt-2 flex flex-col gap-1">
              <label className="text-sm text-gray-400 ">Border Width</label>
              <TextInput
                lefticon={<IoContract />}
                value={props.borderWidth}
                placeholder="Border radius in px"
                onChange={(e) =>
                  setProp((props: any) => (props.borderWidth = e.target.value))
                }
                type="number"
                min={0.2}
                max={20}
                step={0.05}
              />
            </div>
            <label className="text-sm text-gray-400 pb-1">Box Layout</label>
            <div className="border-[1px] border-[#3a3939] bg-[#fff2ed] px-0 py-1 rounded-md">
              <div className="flex justify-center items-center pl-3 relative">
                <p className="absolute top-0 left-2 text-xs text-[#da7c46]">
                  margin
                </p>
                <p className="text-xs text-[#3a3939]"> mt-</p>
                <div className="flex justify-center items-center">
                  <input
                    value={props.marginTop == "" ? 0 : props.marginTop}
                    placeholder="Margin Top"
                    onChange={(e) =>
                      setProp(
                        (props: any) => (props.marginTop = e.target.value)
                      )
                    }
                    type="number"
                    className="w-10 bg-transparent focus-within:border-0 focus:outline-none pl-2  text-xs placeholder:text-xs"
                  />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="w-[10%] pl-1 pr-0.5">
                  <p className="text-xs text-[#3a3939]"> ml-</p>
                  <input
                    value={props.marginLeft == "" ? 0 : props.marginLeft}
                    placeholder="Margin Left"
                    onChange={(e) =>
                      setProp(
                        (props: any) => (props.marginLeft = e.target.value)
                      )
                    }
                    type="number"
                    className="w-full bg-transparent focus-within:border-0 focus:outline-none text-xs placeholder:text-xs"
                  />
                </div>
                <div className=" w-[80%] px-1 py-1.5">
                  <div className="border-[1px] border-[#b6f0b1] bg-[#e7fce6] px-0 py-1 rounded-md">
                    <div className="flex justify-center items-center pl-3 relative">
                      <p className="absolute top-[-1px] left-2 text-xs text-[#499c41]">
                        padding
                      </p>
                      <p className="text-xs text-[#3a3939]"> pt-</p>
                      <div className="flex justify-center items-center">
                        <input
                          value={props.paddingTop == "" ? 0 : props.paddingTop}
                          placeholder="Padding Top"
                          onChange={(e) =>
                            setProp(
                              (props: any) =>
                                (props.paddingTop = e.target.value)
                            )
                          }
                          type="number"
                          className="w-10 bg-transparent focus-within:border-0 focus:outline-none pl-2  text-xs placeholder:text-xs"
                        />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="w-[15%] pl-1 pr-0.5">
                        <p className="text-xs text-[#3a3939]"> pl-</p>
                        <input
                          value={
                            props.paddingLeft == "" ? 0 : props.paddingLeft
                          }
                          placeholder="Padding Right"
                          onChange={(e) =>
                            setProp(
                              (props: any) =>
                                (props.paddingLeft = e.target.value)
                            )
                          }
                          type="number"
                          className="w-full bg-transparent focus-within:border-0 focus:outline-none text-xs placeholder:text-xs"
                        />
                      </div>
                      <div className=" w-[70%] px-1 py-1.5">
                        <div className="border-[1px] border-[#f0e4b1] bg-[#f7eec7] rounded-md p-3">
                          <p className="text-xs text-center"> Box </p>
                        </div>
                      </div>
                      <div className="w-[15%] px-0.5">
                        <p className="text-xs text-[#3a3939]"> pr-</p>
                        <input
                          value={
                            props.paddingRight == "" ? 0 : props.paddingRight
                          }
                          placeholder="Padding Right"
                          onChange={(e) =>
                            setProp(
                              (props: any) =>
                                (props.paddingRight = e.target.value)
                            )
                          }
                          type="number"
                          className="w-full bg-transparent focus-within:border-0 focus:outline-none  text-xs placeholder:text-xs"
                        />
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <div className="flex justify-center items-center pl-5">
                        <p className="text-xs text-[#3a3939]"> pb-</p>
                        <input
                          value={
                            props.paddingBottom == "" ? 0 : props.paddingBottom
                          }
                          placeholder="Padding Bottom"
                          onChange={(e) =>
                            setProp(
                              (props: any) =>
                                (props.paddingBottom = e.target.value)
                            )
                          }
                          type="number"
                          className="w-10 bg-transparent focus-within:border-0 focus:outline-none pl-2 text-xs placeholder:text-xs"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[10%] px-0.5">
                  <p className="text-xs text-[#3a3939]"> mr-</p>
                  <input
                    value={props.marginRight == "" ? 0 : props.marginRight}
                    placeholder="Margin Right"
                    onChange={(e) =>
                      setProp(
                        (props: any) => (props.marginRight = e.target.value)
                      )
                    }
                    type="number"
                    className="w-full bg-transparent focus-within:border-0 focus:outline-none  text-xs placeholder:text-xs"
                  />
                </div>
              </div>
              <div className="flex justify-center items-center pl-5">
                <p className="text-xs text-[#3a3939]">mb-</p>
                <div className="flex justify-center items-center">
                  <input
                    value={props.marginBottom == "" ? 0 : props.marginBottom}
                    placeholder="Margin Bottom"
                    onChange={(e) =>
                      setProp(
                        (props: any) => (props.marginBottom = e.target.value)
                      )
                    }
                    type="number"
                    className="w-10 bg-transparent focus-within:border-0 focus:outline-none pl-2 text-xs placeholder:text-xs"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export const CommonSettingsContainer = ({children}:{children:ReactNode}) => {
// return ()
// }

export const getCommonSettingsProps = () => {
  return {
    background: baseDefaults.backgroundColor,
    borderRadius: baseDefaults.borderRadius,
    borderColor: baseDefaults.borderColor,
    borderWidth: baseDefaults.borderWidth,
    marginTop: baseDefaults.marginTop,
    marginBottom: baseDefaults.marginBottom,
    marginLeft: baseDefaults.marginLeft,
    marginRight: baseDefaults.marginRight,
    paddingTop: baseDefaults.paddingTop,
    paddingBottom: baseDefaults.paddingBottom,
    paddingLeft: baseDefaults.paddingLeft,
    paddingRight: baseDefaults.paddingRight,
    borderType: "border-solid",
    shadow: baseDefaults.shadow,
    shadowColor: baseDefaults.shadowColor,
  };
};
