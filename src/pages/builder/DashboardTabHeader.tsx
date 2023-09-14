import React, { useState, createContext, useContext } from "react";
import { BiDesktop, BiGitMerge, BiRedo, BiUndo } from "react-icons/bi";
import Link from "next/link";
import { BsTablet } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";
import { useRouter } from "next/router";
import { DashboardBuilderContext } from "./dashboard/playground";
import { useRecoilState } from "recoil";
import { dashboardDataState } from "@/atoms/dashboardData";

export default function DashboardTabHeader({ layout, Base64Data }: any) {
  const router = useRouter();
  const dashctx = useContext(DashboardBuilderContext);

  const deviceType = [
    { title: <BiDesktop className="text-lg" /> },
    { title: <BsTablet className="text-lg" /> },
    { title: <FaMobileAlt className="text-lg" /> },
  ];

  const [selectHeading, setSelectHeading] = useState(0);
  const undoRedo = [
    { title: <BiUndo className="text-xl" /> },
    { title: <BiRedo className="text-xl" /> },
  ];

  const handlePreview = () => {
    dashctx?.setPreviewEnable(true);
  };

  // console.log("length", layout.length);

  return (
    <div className="px-4 bg-white flex  justify-between shadow items-center gap-5 relative z-10 py-4 md:py-0">
      <div className="flex items-center w-[45%] justify-between ">
        {dashctx?.previewEnable == false && (
          <div className="md:grid grid-flow-row ">
            <ul className="flex overflow-x-auto overflow-y-hidden mt-2 gap-4 text-light-grey text-base">
              <li>
                <Link
                  href="/"
                  className="px-2 py-3 whitespace-nowrap -mb-[1px] flex items-center font-semibold border-b-[3px] border-black text-black"
                >
                  Content
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="px-2 py-3 whitespace-nowrap -mb-[1px] flex items-center hover:border-b-[3px] border-transparent hover:!border-black hover:text-black"
                >
                  Dashboard Information
                </Link>
              </li>
            </ul>
          </div>
        )}

        {/* <div className="bg-gray-100  rounded   border-l-1  flex">
          {deviceType.map((item, index) => (
            <button
              className={`p-2 text-xs ${
                select == index
                  ? "bg-white  text-black shadow-md font-bold rounded-md text-lg border  "
                  : "text-gray-500   font-bold text-md"
              }`}
              onClick={() => setSelect(index)}
              key={index}
            >
              {item.title}
            </button>
          ))}
        </div> */}
      </div>

      <div className="flex justify-end gap-2">
        {dashctx?.previewEnable == false && (
          <div className="flex justify-start items-center">
            {undoRedo.map((item, index) => (
              <div
                key={index}
                className={`${
                  index == 0 && "border-r-0 "
                } py-2 px-2  navbar-start w-auto border-black-400 border p-0 m-0 border-spacing-0 rounded`}
              >
                <a
                  className={`  normal-case text-xs hover:bg-white m-0 `}
                  onClick={() => setSelectHeading(index)}
                >
                  {item.title}
                </a>
              </div>
            ))}
          </div>
        )}

        {dashctx?.previewEnable == false && (
          <div className="h-[38px] w-px bg-gray-300 mx-3"></div>
        )}
        {dashctx?.previewEnable == false ? (
          <button
            onClick={() => handlePreview()}
            disabled={layout?.length === 0}
            className={`bg-${
              layout?.length === 0 ? "gray-100" : "white"
            }   hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow normal-case`}
          >
            Preview
          </button>
        ) : (
          <button
            onClick={() => dashctx?.setPreviewEnable(false)}
            className={`bg-white my-2 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow normal-case`}
          >
            Close Preview
          </button>
        )}

        {dashctx?.previewEnable == false && (
          <select className="form-select bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow normal-case">
            <option>Action</option>
            <option>Action</option>
            <option>Action</option>
          </select>
        )}
      </div>
    </div>
  );
}
