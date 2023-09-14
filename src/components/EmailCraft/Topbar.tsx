import React, { useContext, useState } from "react";
// import { PiDotsSix } from "react-icons/pi";
import {
  Box,
  FormControlLabel,
  Switch,
  Grid,
  Button as MaterialButton,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";
import { useNode, Element } from "@craftjs/core";
import { useEditor } from "@craftjs/core";
import { CraftContext } from "@/pages/builder/website/craft";

import lz from "lzutf8";
import copy from "copy-to-clipboard";
import {
  BiArrowBack,
  BiArrowToLeft,
  BiArrowToRight,
  BiDesktop,
  BiRedo,
  BiUndo,
} from "react-icons/bi";
import { BsTablet, BsThreeDots } from "react-icons/bs";
import { FaFilter, FaMobileAlt } from "react-icons/fa";
import { GroupAdd } from "@mui/icons-material";
import { IoAddCircleOutline, IoChevronBackCircle } from "react-icons/io5";
import ModalDerived from "../Modal";
import { PlusIcon } from "@heroicons/react/24/solid";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { AiFillPieChart, AiOutlineClose } from "react-icons/ai";
import FlyOut from "../Flyout";
import { TbDots } from "react-icons/tb";
import { RxDragHandleDots2 } from "react-icons/rx";

// import { TopbarSection } from "./TopBarSections";
import Link from "next/link";
import LeftFlyOut from "../LeftLayout";
import { useSetRecoilState } from "recoil";
import { previewDataState } from "@/atoms/webPreviewAtom";

export const Topbar = () => {
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
  const [selectHeading, setSelectHeading] = useState(0);
  const [selectIcon, setSelectIcon] = useState(0);

  const [snackbarMessage, setSnackbarMessage] = useState();
  const [stateToLoad, setStateToLoad] = useState<string | null>(null);

  const { setDevice } = useContext(CraftContext);
  const deviceType = [
    { title: <BiDesktop className="text-lg" /> },
    { title: <BsTablet className="text-lg" /> },
    { title: <FaMobileAlt className="text-lg" /> },
  ];
  const headings = [{ title: "Email Design" }, { title: "Settings" }];

  const headings2 = [{ title: "Email Design" }, { title: "Settings" }];
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
      <div className="p-4 bg-[#263238] flex items-center justify-between">
        <div className="w-[30vw]">
          <Link
            href="/builder/email/template"
            className="flex items-center gap-1 text-white/80 text-xs"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-chevron-left"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            <p className="hidden md:block">Back to Email Manager</p>
          </Link>
        </div>
        <h1 className="text-center  font-semibold text-lg hidden sm:block text-white w-[30vw]">
          New Email Template
        </h1>
        <div className="flex items-center justify-end gap-3">
          <p className="text-white/80 text-xs hidden lg:block">
            Last Saved: Today at 4:30PM
          </p>
          {
            <button
              onClick={() => console.log("drafted")}
              type="button"
              className="btn-gray bg-transparent border border-grey/50 px-4 text-sm py-2 hover:bg-grey hover:text-white hover:border-grey text-white rounded-lg"
            >
              Save as Draft
            </button>
          }

          <button
            onClick={() => console.log("published")}
            className="btn-gray bg-orange-600 border border-orange-600 hover:bg-transparent px-4 py-2 text-sm text-white rounded-lg"
          >
            Save & Publish
          </button>
        </div>
      </div>
    </>
  );
};
