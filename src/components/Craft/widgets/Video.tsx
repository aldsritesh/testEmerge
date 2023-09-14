import React, { useRef } from "react";
import Container from "./Container";
import { useNode } from "@craftjs/core";
import Image from "next/image";
import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "./CommonSettings";
import TextInput from "@/components/controls/TextInput";
import { IoContract } from "react-icons/io5";
import { DeleteForever } from "@mui/icons-material";

interface BuilderVideoProps extends ICommonSettingsProps {
  videoSrc?: string;
  borderRadius?: number;
  height?: number;
  width?: number;
  type?: "cover" | "contain";
}

const imageTypes = ["cover", "contain"];
const elementName = "Video";

export const BuilderVideo = ({
  videoSrc: videoSrc,
  height = 400,
  width = 0,
  type = "cover",
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
}: BuilderVideoProps) => {
  // console.log(`shadow-[${shadowColor}]`);
  const {
    hovered,
    connectors: { connect, drag },
  } = useNode((state) => ({
    hovered: state.events.hovered,
  }));

  return (
    <div
      className={`relative flex justify-start hover:outline-gray-500 hover:outline-dashed hover:outline-1  ${borderType} ${shadow} shadow-[${shadowColor}]`}
      ref={(ref: any) => connect(drag(ref))}
      style={{
        height: height + "px",
        width: width == 0 ? "100%" : height + "px",
        borderColor,
        borderWidth: `${borderWidth}px`,
        borderRadius: `${borderRadius}px`,
        marginTop: `${marginTop}px`,
        marginBottom: `${marginBottom}px`,
        marginLeft: `${marginLeft}px`,
        marginRight: `${marginRight}px`,
      }}
    >
      {hovered && (
        <div className="absolute top-0 left-0 bg-blue-500 text-white text-xs px-2 z-50">
          {elementName}
        </div>
      )}
      {videoSrc ? (
        <video
          style={{
            objectFit: type,
            borderRadius: borderRadius + "px",
            backgroundColor,
            paddingTop: `${paddingTop}px`,
            paddingBottom: `${paddingBottom}px`,
            paddingLeft: `${paddingLeft}px`,
            paddingRight: `${paddingRight}px`,
          }}
          width="100%"
          controls
        >
          <source src={videoSrc} type="video/mp4" />
          <source src={videoSrc} type="video/ogg" />
          Your browser does not support HTML video.
        </video>
      ) : (
        <div className="w-full text-center h-full flex justify-center items-center text-lg font-main border-dashed border  border-gray-500">
          Choose a video from settings
        </div>
      )}
    </div>
  );
};

const BuilderVideoSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  const inputFile: any = useRef(null);

  return (
    <div className="flex flex-col gap-4 mb-4">
      <div className="relative">
        {props.videoSrc && (
          <div className="h-28 w-full p-5 relative">
            <video
              style={{
                objectFit: "contain",
              }}
              width="100%"
              height="300px"
              controls
            >
              <source src={props.videoSrc} type="video/mp4" />
              <source src={props.videoSrc} type="video/ogg" />
              Your browser does not support HTML video.
            </video>
          </div>
        )}

        {props.videoSrc && (
          <DeleteForever
            onClick={() => setProp((props: any) => (props.videoSrc = null))}
            className="absolute top-2 bottom bg-white p-1 text-red-500 shadow-md right-0"
          />
        )}
      </div>

      <input
        type="file"
        className="file-input w-full max-w-xs hidden"
        onChange={(e) =>
          setProp(
            (props: any) =>
              (props.videoSrc = URL.createObjectURL(e.target.files![0]))
          )
        }
        accept="video/*"
        ref={inputFile}
      />

      <button
        onClick={() => inputFile?.current!.click()}
        className="bg-white w-48 px-4 py-2 shadow-md rounded hover:shadow-xl hover:drop-shadow-sm transition-all text-xs font-semibold"
      >
        Select Video
      </button>

      <div className="flex flex-wrap justify-between">
        <div className="mb-2 mt-2 flex flex-col gap-1 w-1/2 pr-1">
          <label className="text-sm text-gray-400 ">Width</label>
          <TextInput
            lefticon={<IoContract />}
            value={props.width == "" ? 0 : props.width}
            placeholder="Width"
            onChange={(e) =>
              setProp((props: any) => (props.width = e.target.value))
            }
            type="number"
          />
        </div>

        <div className="mb-2 mt-2 flex flex-col gap-1 w-1/2 pl-1">
          <label className="text-sm text-gray-400 ">Height</label>
          <TextInput
            lefticon={<IoContract />}
            value={props.height == "" ? 0 : props.height}
            placeholder="Height"
            onChange={(e) =>
              setProp((props: any) => (props.height = e.target.value))
            }
            type="number"
          />
        </div>
      </div>

      <div className="mb-2 mt-2 flex flex-col gap-1">
        <label className="text-sm text-gray-400 ">Image Type</label>
        <div className="dropdown">
          <label
            tabIndex={0}
            className={`btn hover:bg-transparent hover:text-black rounded-md py-2 btn-sm bg-transparent text-black border-gray-300 capitalize w-full text-left justify-start ${props.type} text-gray-500`}
          >
            {props.type}
          </label>
          <div
            tabIndex={0}
            className="dropdown-content card card-compact w-64 p-2 shadow bg-white text-gray-700 max-h-80 overflow-y-scroll scrollbar-hide"
          >
            <ul tabIndex={0} className="menu w-full bg-transparent">
              {imageTypes.map((item, index) => (
                <li
                  key={index}
                  onClick={() => setProp((props: any) => (props.type = item))}
                  className={`${
                    item === props.type &&
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

      <CommonSettings />
    </div>
  );
};

BuilderVideo.craft = {
  related: {
    settings: BuilderVideoSettings,
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
    paddingTop: baseDefaults.paddingTop,
    paddingBottom: baseDefaults.paddingBottom,
    paddingLeft: baseDefaults.paddingLeft,
    paddingRight: baseDefaults.paddingRight,
  },
  displayName: elementName,
};
