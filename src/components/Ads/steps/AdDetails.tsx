import TextInput from "@/components/controls/TextInput";
import { AdsContext } from "@/pages/builder/ads";
import { DeleteForever } from "@mui/icons-material";
import moment from "moment";
import Image from "next/image";
import { useCallback, useContext } from "react";
import { useDropzone } from "react-dropzone";
import { BsImage } from "react-icons/bs";
import { MenuItem, Select } from "@mui/material";

const imageTypes = [
  {
    title: "Contact Us",
    subTitle: "ContactUs2022",
    created_At: new Date(),
  },
  {
    title: "Learn More",
    subTitle: "Learn more button new",
    created_At: new Date(),
  },
  {
    title: "Talk to us",
    subTitle: "TalkNew Button",
    created_At: new Date(),
  },
];

export default function AdDetails({ onSubmit }: { onSubmit: Function }) {
  const { adsData, setAdsData } = useContext(AdsContext);
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      // Do something with the files
      setAdsData({ ...adsData, image: acceptedFiles[0] });
    },
    [adsData, setAdsData]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [], "video/*": [] },
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
      <div>
        <h1 className="font-semibold text-gray-800 text-2xl">Ads Details</h1>
        <h3 className="text-xs text-gray-500 pt-0.5">
          Complete your ads details, to engage with your audience.
        </h3>
      </div>
      <div className="mt-5 md:max-w-[800px] lg:max-w-[600px] 2xl:w-[1100px] flex flex-col gap-5">
        <p className="font-semibold text-gray-600 text-sm">Ad Image or Video</p>
        <div className="border-dashed border-2 border-newBlue rounded-md bg-[#f5f6fd]">
          {adsData.image ? (
            <div className="relative h-[140px]">
              <div className="absolute top-0 z-50  p-1 text-white w-full bg-gradient-to-b from-gray-800/50 via-gray-800/25 to-transparent  text-xs">
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
                  <p className="text-sm text-gray-600 font-semibold">
                    <span className="text-gray-800">Drag & drop</span> files or
                    <span className="text-gray-800"> browse</span> your
                    computer.
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

        {adsData?.image && (
          <button className="w-36 bg-white border-[1px] text-secondary border-gray-200 px-4 py-2 shadow-sm rounded-md hover:shadow-xl hover:drop-shadow-sm transition-all text-xs font-semibold mt-5">
            Add More Image
          </button>
        )}
        <div className="mt-3">
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-gray-600 text-sm">
              Ad Name
            </label>
            <TextInput
              placeholder="Ex. New Post Engagement"
              onChange={({ target: { value } }) =>
                setAdsData({ ...adsData, adName: value })
              }
              value={adsData.adName}
            />
          </div>
        </div>

        <div className="mt-3">
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-gray-600 text-sm">
              Headline
            </label>
            <TextInput
              placeholder="Ex. Best ice cream in town"
              onChange={({ target: { value } }) =>
                setAdsData({ ...adsData, headline: value })
              }
              value={adsData.headline}
            />
          </div>
        </div>

        <div className="mt-3">
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-gray-600 text-sm">
              Copywriting
            </label>
            <TextInput
              placeholder="Add your copywriting..."
              onChange={({ target: { value } }) =>
                setAdsData({ ...adsData, copywriting: value })
              }
              isTextArea={true}
              value={adsData.copywriting}
            />
          </div>
        </div>

        <div className="mt-3">
          <div className="mb-4 mt-2 flex flex-col gap-1">
            <label className="font-semibold text-gray-600 text-sm">
              CTA Button
            </label>

            <div className="dropdown">
              <label
                tabIndex={0}
                className={`btn hover:bg-transparent hover:text-gray-800 rounded-md pt-3 pb-6 btn-sm bg-transparent border-gray-300 capitalize w-full text-left justify-start text-gray-500`}
              >
                {adsData.cta.name}
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-full"
              >
                {imageTypes.map((item, index) => (
                  <li
                    key={index}
                    onClick={() =>
                      setAdsData({
                        ...adsData,
                        cta: { ...adsData.cta, name: item.title },
                      })
                    }
                    className="pb-0 mb-0 py-1 w-full"
                  >
                    <div className="flex justify-start items-center gap-4">
                      <div className="w-[25%]">
                        <p
                          className={`font-semibold text-gray-700 capitalize ${item} text-sm bg-gray-200 rounded-md px-4 py-1.5`}
                        >
                          {item.title}
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold text-gray-700 text-sm">
                          {item.subTitle}
                        </p>
                        <p className="font-medium text-gray-600 text-xs">
                          Created At{" "}
                          {moment(item.created_At).format("DD MMMM yyyy")}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className=" ">
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-gray-600 text-sm">
              Site URL
            </label>
            <div>
              <div className="flex gap-3 flex-wrap shadow px-2   rounded-md">
                <div className="form-control">
                  <label className="label cursor-pointer flex gap-2">
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio checked:bg-blue-500"
                      value="hubSpot"
                      onChange={({ target: { value } }) =>
                        setAdsData({
                          ...adsData,
                          cta: { ...adsData.cta, urlType: "hubSpot" },
                        })
                      }
                      checked={adsData.cta.urlType === "hubSpot"}
                    />
                    <span className="label-text">Hubspot Pages</span>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer flex gap-2">
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio checked:bg-blue-500"
                      value="Custom"
                      onChange={({ target: { value } }) =>
                        setAdsData({
                          ...adsData,
                          cta: { ...adsData.cta, urlType: "Custom" },
                        })
                      }
                      checked={adsData.cta.urlType === "Custom"}
                    />
                    <span className="label-text">Custom Page</span>
                  </label>
                </div>
              </div>

              {adsData.cta.urlType === "hubSpot" ? (
                <Select
                  onChange={({ target: { value } }) =>
                    setAdsData({
                      ...adsData,
                      cta: { ...adsData.cta, url: value },
                    })
                  }
                  value={adsData.cta.url}
                  className="border-none outline-none rounded-md  text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark border-gray-200 text-space focus:outline-none focus:border-gray-200 text-black"
                >
                  <MenuItem value="Select a method">Select a method</MenuItem>
                  <MenuItem value="http://localhost:3000/">
                    {" "}
                    http://localhost:3000/{" "}
                  </MenuItem>
                  <MenuItem value="http://localhost:3001/">
                    {" "}
                    http://localhost:3001/
                  </MenuItem>
                  <MenuItem value="http://localhost:3002/">
                    {" "}
                    http://localhost:3002/{" "}
                  </MenuItem>
                </Select>
              ) : (
                <TextInput
                  placeholder="Enter the URL"
                  onChange={({ target: { value } }) =>
                    setAdsData({
                      ...adsData,
                      cta: { ...adsData.cta, url: value },
                    })
                  }
                  value={adsData.cta.url}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-14 border-t border-gray-300 flex justify-end gap-3 pt-10 pb-10">
        {/* <button className="bg-white font-medium w-32 text-gray-400 px-4 py-2 shadow-md rounded hover:shadow-xl hover:drop-shadow-sm transition-all text-md mr-3">
          Prev
        </button> */}
        <button
          className="bg-secondary w-32 text-white px-4 py-2 shadow-md rounded hover:shadow-xl hover:drop-shadow-sm transition-all text-md font-medium"
          onClick={() => onSubmit()}
        >
          Next
        </button>
      </div>
    </div>
  );
}
