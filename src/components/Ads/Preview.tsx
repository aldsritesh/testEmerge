import { AdsContext } from "@/pages/builder/ads";
import { ShareIcon } from "@heroicons/react/24/outline";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { useContext } from "react";
import { BiComment } from "react-icons/bi";
import { FaHeart, FaThumbsUp } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import { IoEarth } from "react-icons/io5";

export default function Preview() {
  const { adsData } = useContext(AdsContext);

  return (
    <div>
      <div className="bg-white max-w-[400px] shadow-md rounded-md">
        <div className="flex justify-between items-center flex-wrap p-2">
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <div className="relative h-10 w-10 rounded-full">
                <Image
                  src={require("@/../public/images/avatar/blackdog.jpg")}
                  fill={true}
                  alt="Logo"
                  className="relative h-10 w-10 rounded-full"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <div>
                <h3 className="text-gray-800 text-sm font-medium">
                  Emerge Studio
                </h3>
                <div className="flex items-center text-[10px] text-gray-400 gap-2">
                  <p>Sponsored</p>
                  <IoEarth />
                </div>
              </div>
            </div>
          </div>
          <div>
            <FiMoreHorizontal className="text-gray-600" />
          </div>
        </div>
        <div className="relative h-96 2xl:h-[58vh]">
          <Image
            fill={true}
            src={
              adsData.image
                ? URL.createObjectURL(adsData.image)
                : require("../../../public/craft/image.png")
            }
            style={{ objectFit: "cover" }}
            alt="image"
          />
        </div>

        <div className="flex justify-between p-2 bg-[#eef0f2] items-center flex-wrap">
          <div>
            <h6 className="text-[11px] text-gray-600">
              {adsData.cta.url == "" ? "Link" : adsData.cta.url}
            </h6>
            <h4 className="text-base text-gray-800 font-medium line-clamp-1">
              {adsData.headline == "" ? "TITLE" : adsData.headline}
            </h4>
          </div>
          <div>
            <a
              href={adsData.cta.url}
              className="btn bg-gray-200 border-gray-200 text-gray-800 text-xs capitalize btn-xs btn-sm hover:bg-gray-200"
            >
              {adsData.cta.name == "" ? "Button" : adsData.cta.name}
            </a>
          </div>
        </div>

        <div className="p-2">
          <div className="flex gap-2 items-center">
            <div className="flex">
              <div className="bg-[#259aea] justify-center rounded-full h-4 w-4 flex items-center shadow">
                <FaThumbsUp className="text-white text-[8px]" />
              </div>

              <div className="bg-[#d72d35] justify-center rounded-full h-4 w-4 flex items-center -ml-[5px] shadow">
                <FaHeart className="text-white text-[8px]" />
              </div>
            </div>
            <div className="bg-gray-200 w-[100px] h-[10px] rounded-md"></div>
          </div>

          <div className="flex flex-wrap justify-evenly items-center mt-3 border-t pt-2 gap-3">
            <div className="flex items-center gap-1">
              <HandThumbUpIcon className="text-gray-500 w-4 h-4" />
              <p className="text-gray-500 text-xs">Like</p>
            </div>
            <div className="flex items-center gap-1">
              <BiComment className="text-gray-500" />
              <p className="text-gray-500 text-xs">Comment</p>
            </div>
            <div className="flex items-center gap-1">
              <ShareIcon className="text-gray-500 w-4 h-4" />
              <p className="text-gray-500 text-xs">Share</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
