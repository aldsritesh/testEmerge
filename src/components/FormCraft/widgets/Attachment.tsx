import TextInput from "@/components/controls/TextInput";
import { Element, useNode } from "@craftjs/core";
import { MuiColorInput } from "mui-color-input";
import { InputHTMLAttributes, useCallback, useEffect, useState } from "react";
import { IoContract } from "react-icons/io5";
import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "./CommonSettings";
import { useDropzone } from "react-dropzone";
import { BsImage } from "react-icons/bs";
import Image from "next/image";
import { DeleteForever } from "@mui/icons-material";
import FormContainer from "../Container";
import { Text } from "@/components/Craft/widgets/Text/Text";
const elementName = "Attachment";

interface ITextProps extends ICommonSettingsProps {
  color?: string;
  file?: File | null;
}

export const AttachmentElement = ({
  color = "#000000",
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
  file,
}: ITextProps) => {
  const {
    connectors: { connect, drag },
    hasSelectedNode,
    hasDraggedNode,
    isActive,
    id,
    hovered,
    actions: { setProp },
  } = useNode((state) => ({
    hasSelectedNode: state.events.selected,
    hasDraggedNode: state.events.dragged,
    isActive: state.events.selected,
    hovered: state.events.hovered,
  }));

  const [editable, setEditable] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
    setProp((props: any) => (props.file = acceptedFiles[0]));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [], "video/*": [] },
    multiple: false,
    noClick: true,
  });

  useEffect(() => {
    !hasSelectedNode && setEditable(false);
  }, [hasSelectedNode]);

  const handleImageDelete = () => {
    setProp((props: any) => (props.file = null));
  };

  return (
    <div
      ref={(ref: any) => connect(drag(ref))}
      onClick={(e) => setEditable(true)}
      style={{
        borderColor,
        borderWidth: `${borderWidth}px`,
        borderRadius: `${borderRadius}px`,
        marginTop: `${marginTop}px`,
        marginBottom: `${marginBottom}px`,
        marginLeft: `${marginLeft}px`,
        marginRight: `${marginRight}px`,
      }}
      className={`${
        hovered && "hover:outline-gray-500 hover:outline-dashed hover:outline-1"
      }  relative`}
    >
      {hovered && (
        <div className="absolute top-0 left-0 bg-blue-500 text-white text-[10px] px-1 capitalize">
          {elementName}
        </div>
      )}

      <Element is={FormContainer} id="demo_text" canvas>
        <Text
          text="Portfolio"
          fontSize={17}
          marginBottom={2}
          alignment="left"
          color="#4b5563"
          bold="font-semibold"
        />
      </Element>

      <div
        className={`border-dashed border border-gray-500 rounded-md bg-[#f5f6fd] ${shadow} ${borderType} ${borderColor}`}
        style={{
          color: color,
          borderRadius: borderRadius + "px",
          backgroundColor,
          paddingTop: `${paddingTop}px`,
          paddingBottom: `${paddingBottom}px`,
          paddingLeft: `${paddingLeft}px`,
          paddingRight: `${paddingRight}px`,
        }}
      >
        {file ? (
          <div className="relative h-[140px]">
            <div className="absolute top-0 z-50  p-1 text-white w-full bg-gradient-to-b from-gray-800/50 via-gray-800/25 to-transparent  text-xs">
              <div className="flex gap-2 flex-wrap justify-between">
                <div>
                  <p className="line-clamp-1 text-sm">{file?.name}</p>
                  <p className="text-gray-100 mt-1 text-xs">
                    {(file?.size / 1024).toFixed(2)} Kb
                  </p>
                </div>
                <div onClick={handleImageDelete}>
                  <DeleteForever />
                </div>
              </div>
            </div>

            <div {...getRootProps()}>
              <input {...getInputProps()} />

              <Image
                fill={true}
                src={
                  file
                    ? URL.createObjectURL(file)
                    : require("@/../public/images/avatar/blackdog.jpg")
                }
                style={{ objectFit: "cover" }}
                alt="image"
              />
            </div>
          </div>
        ) : (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <div className="flex gap-3 p-4">
              <div className="bg-newBlue justify-center rounded-full h-8 w-8 flex items-center">
                <BsImage className="text-white text-sm" />
              </div>
              <div>
                <p className="text-sm text-gray-600 font-semibold">
                  <span className="text-gray-800">Drag & drop</span> files or
                  <span className="text-gray-800"> browse</span> your computer.
                </p>
                <p className="text-xs text-gray-500 font-medium pt-1">
                  you can add more than one
                </p>

                <p className="mt-2 text-xs text-gray-400 font-medium ">
                  Supports .jpg, .png, .gif, .mp4 max 10Mb
                </p>

                <button className="bg-white border-[1px] border-gray-300 px-4 py-2 shadow-sm rounded-md hover:shadow-xl hover:drop-shadow-sm transition-all text-xs font-semibold mt-5">
                  Add Image
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const TextSettings: any = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div className="w-full">
      <div className="mb-4 mt-2 flex flex-col gap-1">
        <label className="text-sm text-gray-400">Default Attachment</label>
        <TextInput
          //   lefticon={<IoContract />}
          //   value={props.file?.name}
          placeholder={"Enter field name"}
          onChange={(e) =>
            setProp(
              (props: any) =>
                (props.file = e.target.files ? e.target.files[0] : null)
            )
          }
          type="file"
          accept="image/*"
        />
      </div>

      <div className="form-control">
        <label className=" flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={props.textInputProps.required}
            className="checkbox"
            onChange={({ target: { value } }) =>
              setProp(
                (props: any) =>
                  (props.textInputProps.required =
                    !props.textInputProps.required)
              )
            }
          />
          <span className="label-text">Is Required?</span>
        </label>
      </div>

      <div className="mb-4 mt-2 flex flex-col gap-1">
        <label className="text-sm text-gray-400 ">Text Color</label>
        <div className="">
          <MuiColorInput
            format="hex"
            value={props.color ? props.color : "#000000"}
            onChange={(e) => setProp((props: any) => (props.color = e))}
          />
        </div>
      </div>

      <CommonSettings />
    </div>
  );
};

AttachmentElement.craft = {
  related: {
    settings: TextSettings,
  },
  props: {
    value: "",
    textInputProps: {
      placeholder: "placeholder",
      value: "",
      name: "",
      required: true,
      type: "text",
    },
    ...getCommonSettingsProps(),
    borderRadius: 5,
    borderWidth: baseDefaults.borderWidth,
    marginTop: baseDefaults.marginTop,
    marginBottom: 16,
    marginLeft: baseDefaults.marginLeft,
    marginRight: baseDefaults.marginRight,
    paddingTop: baseDefaults.paddingTop,
    paddingBottom: baseDefaults.paddingBottom,
    paddingLeft: baseDefaults.paddingLeft,
    paddingRight: baseDefaults.paddingRight,
    backgroundColor: "#f6f6fc",
  },
};
