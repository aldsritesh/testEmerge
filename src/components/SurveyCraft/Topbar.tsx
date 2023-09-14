import React, { useContext, useState } from "react";
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
import { useEditor } from "@craftjs/core";
import { CraftContext } from "@/pages/builder/website/craft";

import lz from "lzutf8";
import copy from "copy-to-clipboard";
import { BiDesktop, BiRedo, BiUndo } from "react-icons/bi";
import { BsTablet } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";
import Link from "next/link";
import { IoChevronBackCircle } from "react-icons/io5";

export const Topbar = () => {
  const { actions, query, enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

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
  const headings = [{ title: "Survey Design" }, { title: "Settings" }];
  const undoRedo = [
    { title: <BiUndo className="text-xl" /> },
    { title: <BiRedo className="text-xl" /> },
  ];

  return (
    <>
      <div className="p-4 bg-[#263238] flex items-center justify-between">
        <div className="w-[30vw]">
          <Link
            href="/builder/survey/template"
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
            <p className="hidden md:block">Back to Survey Manager</p>
          </Link>
        </div>
        <h1 className="text-center   mr-8 pr-7 font-semibold text-lg hidden sm:block text-white w-[25vw]">
          New Survey Template
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
      <div>
        <div className="navbar bg-base-100 flex justify-between items-center border-b">
          <div className="flex justify-between items-center w-[22vw]">
            <div className="flex justify-start items-center">
              {headings.map((item: any, index: number) => (
                <div
                  key={index}
                  className={`${
                    selectHeading == index
                      ? "border-b-2 border-black"
                      : "border-none"
                  } navbar-start w-auto  hover:border-b-2 hover:border-b-black`}
                >
                  <a
                    className={`btn btn-ghost normal-case text-xs hover:bg-white`}
                    onClick={() => setSelectHeading(index)}
                  >
                    {item.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-100 rounded  justify-start  ml-4 border-l-1 w-auto flex">
            {deviceType.map((item: any, index: number) => (
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
          </div>
          <div className=" justify-end">
            <div className="flex justify-start items-center">
              {undoRedo.map((item: any, index: number) => (
                <div
                  key={index}
                  className={`${
                    index == 0 && "border-r-0 "
                  } py-2 px-2  navbar-start w-auto border-black-400 border-2 p-0 m-0 border-spacing-0 rounded`}
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
            <div className="flex-none">
              <ul className="menu menu-horizontal px-1">
                <li tabIndex={0} className="ml-4 p-0">
                  <a className="   bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow normal-case">
                    Save
                  </a>
                </li>
                <li tabIndex={0} className="mx-4 p-0">
                  <a className="   bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow normal-case">
                    Preview
                  </a>
                </li>
                <li>
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
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
{
  /* <div className="py-2 border-b bg-white flex">
      <button className="" onClick={() => setDevice("mobile")}>
        mobile
      </button>
      <button className="" onClick={() => setDevice("desktop")}>
        desktop
      </button>

      <Grid container alignItems="center">
        <Grid item xs>
          <FormControlLabel
            control={
              <Switch
                checked={enabled}
                onChange={(_, value) =>
                  actions.setOptions((options) => (options.enabled = value))
                }
              />
            }
            label="Enable"
          />
        </Grid>

        <MaterialButton
          className="copy-state-btn"
          size="small"
          variant="outlined"
          color="secondary"
          onClick={() => {
            const json = query.serialize();
            copy(lz.encodeBase64(lz.compress(json)));
            alert("copied");
            // setSnackbarMessage("State copied to clipboard")
          }}
        >
          Copy current state
        </MaterialButton>

        <MaterialButton
          className="load-state-btn"
          size="small"
          variant="outlined"
          color="secondary"
          onClick={() => setDialogOpen(true)}
        >
          Load
        </MaterialButton>
        <Dialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          fullWidth
          maxWidth="md"
        >
          <DialogTitle id="alert-dialog-title">Load state</DialogTitle>
          <DialogContent>
            <TextField
              multiline
              fullWidth
              placeholder='Paste the contents that was copied from the "Copy Current State" button'
              size="small"
              value={stateToLoad}
              onChange={(e) => setStateToLoad(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <MaterialButton
              onClick={() => setDialogOpen(false)}
              color="primary"
            >
              Cancel
            </MaterialButton>
            <MaterialButton
              onClick={() => {
                setDialogOpen(false);
                const json = lz.decompress(lz.decodeBase64(stateToLoad!));
                actions.deserialize(json);
              }}
              color="primary"
              autoFocus
            >
              Load
            </MaterialButton>
          </DialogActions>
        </Dialog>

        <Grid item>
          <MaterialButton
            size="small"
            variant="outlined"
            color="secondary"
            onClick={() => {
              console.log(query.serialize());
            }}
          >
            Serialize JSON to console
          </MaterialButton>
        </Grid>
      </Grid>
    </div> */
}
