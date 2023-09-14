import { DeleteForever } from "@mui/icons-material";
import Image from "next/image";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { BsImage } from "react-icons/bs";

export default function ImageAttachment({
  onChange,
  onDelete,
}: {
  onChange: Function;
  onDelete: Function;
}) {
  const [file, setFile] = useState<null | File>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      // Do something with the files
      setFile(acceptedFiles[0]);
      onChange(acceptedFiles[0]);
    },
    [onChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [], "video/*": [] },
    multiple: false,
    noClick: true,
  });

  const handleImageDelete = () => {
    setFile(null);
    onDelete();
  };

  return file ? (
    <div className="relative h-full" title="drag new image">
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
    <div
      {...getRootProps()}
      className="w-full bg-red-500"
      title="drag new image"
    >
      <input {...getInputProps()} />

      <div className="bg-newBlue h-full w-full p-5">
        <BsImage className="text-white text-sm h-full w-full" />
      </div>
    </div>
  );
}
