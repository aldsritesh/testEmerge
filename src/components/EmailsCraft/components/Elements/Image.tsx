import React, { useRef, useState } from "react";
import { useNode } from "@craftjs/core";
import Image from "next/image";
import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "../CommonSettings";
import TextInput from "@/components/controls/TextInput";
import { IoContract } from "react-icons/io5";
import ImageAttachment from "@/components/controls/ImageAttachment";
import { DeleteForever } from "@mui/icons-material";
import Link from "next/link";
import { BiItalic } from "react-icons/bi";
import {
  CiAlignBottom,
  CiAlignCenterV,
  CiAlignLeft,
  CiAlignRight,
  CiAlignTop,
} from "react-icons/ci";
import FileUpload from "@/components/UI/FileUpload";
import ModalDerived from "@/components/Modal";

const elementName = "Image";

interface BuilderImageProps extends ICommonSettingsProps {
  imageSrc?: string;
  borderRadius?: number;
  height?: number;
  width?: number;
  type?: "cover" | "contain";
  link?: string;
  alt?: string;
}

const imageTypes = ["cover", "contain"];

export const BuilderImage = ({
  imageSrc,
  height = 300,
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
  link = "#",
  alt = "",
}: BuilderImageProps) => {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const {
    hovered,
    connectors: { connect, drag },
    actions: { setProp },
  } = useNode((state) => ({
    hovered: state.events.hovered,
  }));

  return (
    <Link href={link} onClick={(e: any) => e.preventDefault()}>
      <div
        className={`relative flex justify-center ${
          hovered && "hover:outline-blue-500 hover:outline-1  "
        }   ${borderType} ${shadow} shadow-[${shadowColor}]`}
        ref={(ref: any) => connect(drag(ref))}
        style={{
          height: height + "px",
          width: width == 0 ? "100%" : width + "px",
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
          <>
            <div className="absolute top-0 left-0 bg-blue-500 text-white text-xs px-2 z-50">
              {elementName}
            </div>
          </>
        )}

        {imageSrc ? (
          <Image
            src={imageSrc}
            fill={true}
            alt={alt}
            style={{
              objectFit: type,
              borderRadius: borderRadius + "px",
              backgroundColor,
              paddingTop: `${paddingTop}px`,
              paddingBottom: `${paddingBottom}px`,
              paddingLeft: `${paddingLeft}px`,
              paddingRight: `${paddingRight}px`,
            }}
          />
        ) : (
          <ImageAttachment
            onChange={(e: any) =>
              setProp((props: any) => (props.imageSrc = URL.createObjectURL(e)))
            }
            onDelete={() => setProp((props: any) => (props.imageSrc = null))}
          />
        )}
      </div>
    </Link>
  );
};

const BuilderImageSettings = () => {
  const {
    actions: { setProp },
    fontSize,
    borderRadius,
    props,
  } = useNode((node) => ({
    fontSize: node.data.props.imageSrc,
    borderRadius: node.data.props.borderRadius,
    props: node.data.props,
  }));

  const inputFile: any = useRef(null);
  const [openFieldModel, setOpenFieldModel] = useState(false);

  return (
    <div className="flex flex-col gap-2 mb-4">
      <ModalDerived
        visibility={openFieldModel}
        onClose={() => {
          setOpenFieldModel(false);
        }}
      >
        <FileUpload
          onClose={() => setOpenFieldModel(false)}
          onSave={(e: File) => {
            console.log(e);
            setProp((props: any) => (props.imageSrc = URL.createObjectURL(e)));
            setOpenFieldModel(false);
          }}
        />
      </ModalDerived>
      <div className="relative">
        {props.imageSrc && (
          <div className="h-28 w-full p-5 relative">
            <Image
              src={props.imageSrc}
              fill={true}
              alt=""
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        )}

        {props.imageSrc && (
          <DeleteForever
            onClick={() => setProp((props: any) => (props.imageSrc = null))}
            className="absolute top-2 bottom bg-white p-1 text-red-500 shadow-md right-0"
          />
        )}
      </div>

      <input
        type="file"
        className="file-input file-input-bordered file-input-warning w-full max-w-xs hidden"
        onChange={(e) =>
          setProp(
            (props: any) =>
              (props.imageSrc = URL.createObjectURL(e.target.files![0]))
          )
        }
        accept="image/*"
        ref={inputFile}
      />

      <button
        onClick={() => setOpenFieldModel(true)}
        className="bg-white w-48 px-4 py-2 shadow-md rounded hover:shadow-xl hover:drop-shadow-sm transition-all text-xs font-semibold"
      >
        Select Image
      </button>

      <div className="mb-1 mt-2 flex flex-col gap-1 w-full pr-1">
        <label className="text-sm text-gray-400 ">Alt Tag</label>
        <TextInput
          lefticon={<IoContract />}
          value={props.alt}
          placeholder="Alt"
          onChange={(e) =>
            setProp((props: any) => (props.alt = e.target.value))
          }
          type="text"
        />
      </div>

      <div className="flex flex-wrap justify-between">
        <div className="mb-1 mt-2 flex flex-col gap-1 w-1/2 pr-1">
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

        <div className="mb-1 mt-2 flex flex-col gap-1 w-1/2 pl-1">
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

      {/* <div className="mb-1 mt-2 flex flex-col gap-1">
        <label className="text-sm text-gray-500 font-bold ">
          Image Alignment
        </label>
        <div className="btn-group">
          <button
            className={` btn-sm  border-gray-300 hover:text-[#0048BA] hover:bg-[#BCDAF9] capitalize w-1/4 ${
              props.italic
                ? "bg-[#BCDAF9] text-[#0048BA]"
                : "bg-white text-black"
            }`}
            onClick={() =>
              setProp((props: any) => (props.italic = !props.italic))
            }
          >
            <CiAlignBottom size={25} />
          </button>
          <button
            className={` btn-sm  border-gray-300 hover:text-[#0048BA] hover:bg-[#BCDAF9] capitalize w-1/4 ${
              props.italic
                ? "bg-[#BCDAF9] text-[#0048BA]"
                : "bg-white text-black"
            }`}
            onClick={() =>
              setProp((props: any) => (props.italic = !props.italic))
            }
          >
            <CiAlignLeft size={25} />
          </button>
          <button
            className={` btn-sm  border-gray-300 hover:text-[#0048BA] hover:bg-[#BCDAF9] capitalize w-1/4 ${
              props.italic
                ? "bg-[#BCDAF9] text-[#0048BA]"
                : "bg-white text-black"
            }`}
            onClick={() =>
              setProp((props: any) => (props.italic = !props.italic))
            }
          >
            <CiAlignRight size={25} />
          </button>
          <button
            className={` btn-sm  border-gray-300 hover:text-[#0048BA] hover:bg-[#BCDAF9] capitalize w-1/4 ${
              props.italic
                ? "bg-[#BCDAF9] text-[#0048BA]"
                : "bg-white text-black"
            }`}
            onClick={() =>
              setProp((props: any) => (props.italic = !props.italic))
            }
          >
            <CiAlignTop size={25} />
          </button>
          <button
            className={` btn-sm  border-gray-300 hover:text-[#0048BA] hover:bg-[#BCDAF9] capitalize w-1/4 ${
              props.italic
                ? "bg-[#BCDAF9] text-[#0048BA]"
                : "bg-white text-black"
            }`}
            onClick={() =>
              setProp((props: any) => (props.italic = !props.italic))
            }
          >
            <CiAlignCenterV size={25} />
          </button>
          <button
            className={` btn-sm  border-gray-300 hover:text-[#0048BA] hover:bg-[#BCDAF9] capitalize w-1/4 ${
              props.italic
                ? "bg-[#BCDAF9] text-[#0048BA]"
                : "bg-white text-black"
            }`}
            onClick={() =>
              setProp((props: any) => (props.italic = !props.italic))
            }
          >
            <CiAlignTop size={25} />
          </button>
        </div>
      </div> */}

      <div className="py-3 border-t border-b my-3">
        Padding
        <div className="flex flex-wrap justify-between">
          <div className="mb-2 mt-2 flex flex-col gap-1 w-1/2 pr-1">
            <label className="text-sm text-gray-400 line-clamp-1">Top</label>
            <TextInput
              lefticon={<IoContract />}
              value={props.paddingTop == "" ? 0 : props.paddingTop}
              placeholder="Padding Top"
              onChange={(e) =>
                setProp((props: any) => (props.paddingTop = e.target.value))
              }
              type="number"
            />
          </div>
          <div className="mb-2 mt-2 flex flex-col gap-1 pr-1 w-1/2">
            <label className="text-sm text-gray-400 line-clamp-1">Left</label>
            <TextInput
              lefticon={<IoContract />}
              value={props.paddingLeft == "" ? 0 : props.paddingLeft}
              placeholder="Padding Right"
              onChange={(e) =>
                setProp((props: any) => (props.paddingLeft = e.target.value))
              }
              type="number"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="mb-2 mt-2 flex flex-col gap-1 pl-1 w-1/2">
            <label className="text-sm text-gray-400 line-clamp-1">Right</label>
            <TextInput
              lefticon={<IoContract />}
              value={props.paddingRight == "" ? 0 : props.paddingRight}
              placeholder="Padding Right"
              onChange={(e) =>
                setProp((props: any) => (props.paddingRight = e.target.value))
              }
              type="number"
            />
          </div>
          <div className="mb-2 mt-2 flex flex-col gap-1 w-1/2 pl-1">
            <label className="text-sm text-gray-400 line-clamp-1">Bottom</label>
            <TextInput
              lefticon={<IoContract />}
              value={props.paddingBottom == "" ? 0 : props.paddingBottom}
              placeholder="Padding Bottom"
              onChange={(e) =>
                setProp((props: any) => (props.paddingBottom = e.target.value))
              }
              type="number"
            />
          </div>
        </div>
      </div>
      <div className="mb-1 mt-2 flex flex-col gap-1  pl-1">
        <label className="text-sm text-gray-400 ">Image Link (Optional)</label>
        <TextInput
          lefticon={<IoContract />}
          value={props.link == "" ? "#" : props.link}
          placeholder="Enter URL"
          onChange={(e) =>
            setProp((props: any) => (props.link = e.target.value))
          }
          type="text"
        />
      </div>

      <CommonSettings />
    </div>
  );
};

BuilderImage.craft = {
  related: {
    settings: BuilderImageSettings,
  },
  props: {
    height: 300,
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
    link: "#",
    alt: "",
  },
  displayName: "Image",
};
