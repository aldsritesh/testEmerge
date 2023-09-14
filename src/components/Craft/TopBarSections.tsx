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
  BiArrowToLeft,
  BiArrowToRight,
  BiDesktop,
  BiRedo,
  BiUndo,
} from "react-icons/bi";
import { BsTablet, BsThreeDots } from "react-icons/bs";
import { FaFilter, FaMobileAlt } from "react-icons/fa";
import { GroupAdd } from "@mui/icons-material";
import { IoAddCircleOutline } from "react-icons/io5";
import ModalDerived from "../Modal";
import { PlusIcon } from "@heroicons/react/24/solid";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { AiFillPieChart, AiOutlineClose } from "react-icons/ai";
import FlyOut from "../Flyout";
import { TbDots } from "react-icons/tb";
import { RxDragHandleDots2 } from "react-icons/rx";

import Sections from "../Craft/Element/Section";
import Rows from "../Craft/Element/Row";
import Elements from "./Element/elements";
import GlobalSections from "../Craft/globalSections";
import SectionTemplates from "../Craft/sectionTemplates";

export const TopbarSection = () => {
  const { actions, query, enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const SectionData = [
    // {
    //   id: 1,
    //   title: "Sections",
    //   content: <Sections />,
    // },
    // {
    //   id: 2,
    //   title: "Rows",
    //   content: <Rows />,
    // },
    {
      id: 3,
      title: "Elements",
      content: <Elements />,
    },
    // {
    //   id: 4,
    //   title: "Global Sections",
    //   content: <GlobalSections />,
    // },
    // {
    //   id: 5,
    //   title: "Section Templates",
    //   content: <SectionTemplates />,
    // },
  ];

  const [workFlowData, setWorkFlowData] = useState(null);
  const [activeSectionData, setActiveSectionData] = useState(SectionData[0].id);

  return (
    <>
      <div className=" bg-white rounded-lg pb-[5%]  overflow-y-hidden  scrollbar-hide z-50 flex">
        <div className=" w-[35%] border-r-[1px]   bg-white shadow-lg    ">
          <div
            className={`py-3 flex bg-white overflow-y-scroll scrollbar-hide flex-col justify-start top-0 left-0 pl-0 w-[80%] md:w-[40%]  lg:w-full fixed lg:relative h-screen z-40 `}
          >
            <ul className="w-full pt-3 px-4 ">
              {SectionData.map((item: any, index: any) => (
                <li
                  key={item.id}
                  onClick={() => {
                    setActiveSectionData(item.id);
                  }}
                  className={` ${
                    activeSectionData == item.id
                      ? "   bg-gray-100"
                      : "   bg-white "
                  } cursor-pointer mb-2 py-2   rounded-[5px]`}
                >
                  <p
                    className={`px-3 capitalize text-gray-500 ${
                      activeSectionData == item.id ? " text-gray-900" : null
                    } hover:text-dark text-sm font-semibold  tracking-wide  `}
                  >
                    {item.title}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-[65%] flex-col justify-center items-start ">
          <div className="w-full h-[60px] p-2 font-bold text-gray-500 flex justify-between items-center border-b border-gray-300">
            <div>Add A Section</div>
          </div>

          <div className="h-full  mt-2">
            {SectionData.map((item: any) => (
              <div
                key={item.id}
                className={`shadow-md transition-all duration-300 rounded-md h-[90vh] w-full flex flex-wrap ${
                  activeSectionData === item.id ? "block" : " text-black hidden"
                } `}
              >
                {item.content}
              </div>
            ))}
            E
          </div>
        </div>
      </div>
    </>
  );
};
