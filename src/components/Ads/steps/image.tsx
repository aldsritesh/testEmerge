import { DeleteForever } from "@mui/icons-material";
import Image from "next/image";
import { useCallback, useContext } from "react";
import { useDropzone } from "react-dropzone";
import { BsImage } from "react-icons/bs";
import { useState } from "react";

export default function AdDetails({ onSubmit }: { onSubmit: Function }) {
  const [adsData, setAdsData] = useState<any>();
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      // Do something with the files
      setAdsData({ ...adsData, image: acceptedFiles[0] });
    },
    [adsData, setAdsData]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  });

  const handleImageDelete = () => {
    setAdsData({ ...adsData, image: null });
  };

  const submit = () => {
    onSubmit();
  };

  return (
    <div className="pl-1">
      <div className="mt-5 md:max-w-[500px] flex flex-col gap-5">
        <div className="border-dashed border-2 border-newBlue rounded-md bg-[#f5f6fd]">
          {adsData.image ? (
            <div className="relative h-[140px]">
              <div className="absolute top-0 z-50  p-1 text-white w-full bg-gradient-to-b from-black/50 via-black/25 to-transparent  text-xs">
                <div className="flex gap-2 flex-wrap justify-between">
                  <div>
                    <p className="line-clamp-1 text-sm">
                      {adsData.image?.name}
                    </p>
                    <p className="text-gray-100 mt-1 text-xs">
                      {(adsData.image?.size / 1024).toFixed(2)} Kb
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
                    adsData.image
                      ? URL.createObjectURL(adsData.image)
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
                  <p className="text-sm text-gray-500">
                    <span className="text-black">Drag & drop</span> files or
                    <span className="text-black"> browse</span> your computer.
                  </p>

                  <p className="mt-2 text-xs text-gray-400">
                    Supports .jpg, .png, .gif max 10Mb
                  </p>

                  <button className="bg-white px-4 py-2 shadow-md rounded hover:shadow-xl hover:drop-shadow-sm transition-all text-xs font-semibold mt-8">
                    Add Image
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
