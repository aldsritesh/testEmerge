import React, { useContext, useState } from "react";
// import { PiDotsSix } from "react-icons/pi";
import { useEditor } from "@craftjs/core";
import { CraftContext } from "@/pages/builder/website/craft";

import lz from "lzutf8";
import copy from "copy-to-clipboard";
import { BiDesktop, BiRedo, BiUndo } from "react-icons/bi";
import { BsTablet, BsThreeDots } from "react-icons/bs";
import { FaFilter, FaMobileAlt } from "react-icons/fa";

export const SubTopHeader = ({ heading, onChange, selectHeading }: any) => {
  const { actions, query, enabled, canUndo, canRedo } = useEditor(
    (state, query) => ({
      enabled: state.options.enabled,

      canUndo: query.history.canUndo(),
      canRedo: query.history.canRedo(),
    })
  );
  const [openCreateModal, setOpenCreateModal] = useState(false);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [select, setSelect] = useState(0);
  const [selectIcon, setSelectIcon] = useState(0);

  const [snackbarMessage, setSnackbarMessage] = useState();
  const [stateToLoad, setStateToLoad] = useState<string | null>(null);

  const { setDevice } = useContext(CraftContext);
  const deviceType = [
    { title: <BiDesktop className="text-lg" /> },
    { title: <BsTablet className="text-lg" /> },
    { title: <FaMobileAlt className="text-lg" /> },
  ];

  const headings2 = [{ title: "Site Design" }, { title: "Settings" }];
  const undoRedo = [
    { title: <BiUndo className="text-xl" /> },
    { title: <BiRedo className="text-xl" /> },
  ];

  // const {
  //   connectors: { connect, drag },
  //   hovered,
  // } = useNode((state) => ({ hovered: state.events.hovered }));
  const [workFlowData, setWorkFlowData] = useState(null);

  return (
    <>
      <div>
        <div className="navbar bg-base-100 flex justify-between items-center border-b">
          <div className=" w-[55%] flex justify-between">
            <div className="flex justify-between items-center">
              <div className="flex justify-between items-center mr-16">
                {heading.map((item: any, index: number) => (
                  <div
                    key={index}
                    className={`${
                      selectHeading == index
                        ? "border-b-2 border-black"
                        : "border-none"
                    } navbar-start w-auto  hover:border-b-4 hover:border-b-black`}
                  >
                    <a
                      className={`btn btn-ghost normal-case text-xs hover:bg-white`}
                      onClick={() => onChange(index)}
                    >
                      {item.title}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            {/* <div className="bg-gray-100 rounded w-auto mr-10 border-l-1">
              {deviceType.map((item: any, index: number) => (
                <button
                  className={`p-2 text-xs ${
                    select == index
                      ? "bg-white  text-black shadow-md font-bold rounded-md text-lg border  "
                      : "text-gray-500   font-bold text-md"
                  }`}
                  onClick={() => {
                    setSelect(index);
                    console.log(`Clicked ${index}`);
                  }}
                  key={index}
                >
                  {item.title}
                </button>
              ))}
            </div> */}
          </div>

          {/* <div>
            <button
              onClick={() => {
                setOpenCreateModal(true);
              }}
              className="mx-2"
            >
              <IoAddCircleOutline size={20} />
            </button>
          </div> */}
          <div className="w-1/3 justify-end">
            <div className="flex justify-start items-center">
              <button
                disabled={!canUndo}
                onClick={() => actions.history.undo()}
                className={`${"border-r-0 "} py-2 px-2  navbar-start w-auto border-black-400 border-2 p-0 m-0 border-spacing-0 rounded`}
              >
                <BiUndo
                  className={`text-xl ${
                    canUndo ? "text-black" : "text-gray-400"
                  }`}
                />
              </button>
              <button
                disabled={!canRedo}
                onClick={() => actions.history.redo()}
                className={` py-2 px-2  navbar-start w-auto border-black-400 border-2 p-0 m-0 border-spacing-0 rounded`}
              >
                <BiRedo
                  className={`text-xl ${
                    canRedo ? "text-black" : "text-gray-400"
                  }`}
                />
              </button>
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal px-1">
                <li tabIndex={0} className="ml-4 p-0">
                  <button
                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow normal-case"
                    onClick={() => {
                      const json = query.serialize();
                      copy(lz.encodeBase64(lz.compress(json)));
                      alert("Data is being saved.");
                      // console.log(lz.encodeBase64(lz.compress(json)));
                      // setSnackbarMessage("State copied to clipboard")
                    }}
                  >
                    Save
                  </button>
                </li>
                <li tabIndex={0} className="mx-4 p-0">
                  <a
                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow normal-case"
                    onClick={() => {
                      const json = query.serialize();
                      const enc_data = lz.encodeBase64(lz.compress(json));
                      copy(enc_data);
                      localStorage.setItem("previewData", enc_data);
                      window.open("/builder/website/preview", "_blank");
                    }}
                  >
                    Preview
                  </a>
                </li>
                {/* <li>
                  <a className="  bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow normal-case">
                    Action
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                  </a>
                  <ul className="p-2">
                    <li>
                      <a className="  bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow normal-case">
                        Submenu 1
                      </a>
                    </li>
                    <li>
                      <a className="  bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow normal-case">
                        Submenu 2
                      </a>
                    </li>
                  </ul>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
