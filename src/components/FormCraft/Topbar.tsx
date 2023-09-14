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
// import { CraftContext } from "@/pages/builder/website/craft";

import lz from "lzutf8";
import copy from "copy-to-clipboard";
import { BiDesktop, BiRedo, BiUndo } from "react-icons/bi";
import { BsTablet } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";
import Link from "next/link";
import { IoChevronBackCircle } from "react-icons/io5";
import { CraftContext } from "@/pages/builder/form/craft";
import { baseUrl, userID } from "@/config/APIConstants";
import axios from "axios";
import { E } from "@fullcalendar/resource/internal-common";
import { Router } from "@mui/icons-material";
import { useRouter } from "next/router";
import { useAuthentication } from "@/controllers/auth";

export const Topbar = () => {
  // const { formId } = useContext(CraftContext);
  const { actions, query, enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  const [isReady, setIsReady] = useState<Boolean>(false);
  const { previewEnabled, setPreviewEnabled } = useContext(CraftContext);
  const { previewEnable, setPreviewEnable } = useContext(CraftContext);
  const { preview, setPreview } = useContext(CraftContext);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [select, setSelect] = useState(0);
  const [selectHeading, setSelectHeading] = useState(0);
  const [selectIcon, setSelectIcon] = useState(0);
  const [snackbarMessage, setSnackbarMessage] = useState();
  const [stateToLoad, setStateToLoad] = useState<string | null>(null);
  const { location, token }: any = useAuthentication();
  const router: any = useRouter();
  // const { setDevice } = useContext(CraftContext);
  const deviceType = [
    { title: <BiDesktop className="text-lg" /> },
    { title: <BsTablet className="text-lg" /> },
    { title: <FaMobileAlt className="text-lg" /> },
  ];
  const headings = [{ title: "Form Design" }, { title: "Settings" }];
  const undoRedo = [
    { title: <BiUndo className="text-xl" /> },
    { title: <BiRedo className="text-xl" /> },
  ];

  const [formData, setFormData] = useState({
    name: router?.query?.name,
    data: null,
  });
  if (router.query.page == "edit") {
    setPreviewEnable(true);
  }
  const [form, setForm] = useState({});
  const handleUpdate = async (data: any) => {
    // console.log("formID:::::====>>>>", router.query.formId);

    // alert("sure edited");
    // console.log("mainData{{{{{{{{{", data);
    let value = {
      locationID: location?.id,
      userID: userID,
      name: formData?.name,
      data: data,
    };
    const formBuilderData = await axios
      .put(`${baseUrl}forms/${router.query.formId}`, value, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data: any) => {
        // setForm(data);
        alert("Form Edited Successfully");
        console.log("data", data);
        setTimeout(() => {
          // router.push("/builder");
          setPreviewEnable(true);
          setIsReady(false);
        }, 2000);
      })
      .catch((err: any) => {
        console.log("err", err);
      });
  };

  const handleSubmit = async (data: any) => {
    setIsReady(true);
    let value = {
      locationID: location?.id,
      userID: userID,
      name: formData?.name,
      data: data,
    };
    console.log("NewValue ===> ", value);
    const formBuilderData = await axios
      .post(`${baseUrl}forms`, value, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data: any) => {
        console.log("data", data);
        setForm(data.data.form.id);
        alert("Form Stored Successfully");
        setTimeout(() => {
          // router.push("/builder");
          setPreviewEnable(true);
          setIsReady(false);
        }, 2000);
      })
      .catch((err: any) => {
        setIsReady(false);
        console.log("err", err);
      });
  };
  // console.log("ok", formData);

  return (
    <>
      <div className="p-4 bg-[#263238] flex items-center justify-between">
        <div className="w-[30vw]">
          <Link
            href="/builder/form/template"
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
            <p className="hidden md:block">Back to Form Manager</p>
          </Link>
        </div>
        <input
          type="text"
          id=""
          name="room"
          value={formData?.name}
          onChange={(e: any) => {
            setFormData((prevValues: any) => ({
              ...prevValues,
              name: e.target.value,
            }));
          }}
          placeholder="Enter Room Name"
          className="text-center bg-[#263238] mr-5 pr-5  font-semibold text-lg hidden sm:block text-white w-[25vw] border-transparent focus:border-transparent focus:outline-none "
        />
        {/* <h1 className="text-center mr-5 pr-5  font-semibold text-lg hidden sm:block text-white w-[25vw]">
          New Form Template
        </h1> */}
        <div className="flex items-center justify-end gap-3">
          <p className="text-white/80 text-xs hidden lg:block">
            Last Saved: Today at 4:30PM
          </p>
          {
            <button
              // onClick={() => console.log("drafted")}
              onClick={() => {
                const json = query.serialize();
                copy(lz.encodeBase64(lz.compress(json)));
                alert("copied");
                // setSnackbarMessage("State copied to clipboard")
              }}
              type="button"
              className="btn-gray bg-transparent border border-grey/50 px-4 text-sm py-2 hover:bg-grey hover:text-white hover:border-grey text-white"
            >
              Save as Draft
            </button>
          }

          {isReady ? (
            <div className="btn-gray bg-orange-600 border border-orange-600 hover:bg-transparent px-4 py-2 text-sm text-white rounded-lg">
              Loading
            </div>
          ) : (
            <button
              onClick={() => {
                // console.log(
                //   "edit funcgtionality:::::00000",
                //   router.query.page == "edit"
                // );
                const json = query.serialize();
                if (router?.query.page == "edit") {
                  setPreviewEnable(true);
                  setFormData((prevValues: any) => ({
                    ...prevValues,
                    data: lz.encodeBase64(lz.compress(json)),
                  }));
                  setTimeout(
                    () => handleUpdate(lz.encodeBase64(lz.compress(json))),
                    1000
                  );
                } else {
                  setFormData((prevValues: any) => ({
                    ...prevValues,
                    data: lz.encodeBase64(lz.compress(json)),
                  }));
                  setTimeout(
                    () => handleSubmit(lz.encodeBase64(lz.compress(json))),
                    1000
                  );
                }
              }}
              className="btn-gray bg-orange-600 border border-orange-600 hover:bg-transparent px-4 py-2 text-sm text-white rounded-lg"
            >
              Save & Publish
            </button>
          )}
        </div>
      </div>
      <div>
        <div className="navbar bg-base-100 flex justify-between items-center border-b">
          <div className="flex justify-between items-center w-[35%]">
            <div className="flex justify-start items-center">
              {headings.map((item: any, index: number) => (
                <div
                  key={index}
                  className={`${
                    selectHeading == index
                      ? "border-b-2 border-black"
                      : "border-none"
                  } navbar-start w-auto  hover:border-b-4 hover:border-b-black`}
                >
                  <a
                    className={` btn btn-ghost normal-case text-xs hover:bg-white`}
                    onClick={() => setSelectHeading(index)}
                  >
                    {item.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-100 rounded  justify-start  w-[7%] border-l-1">
            {/* {deviceType.map((item: any, index: number) => (
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
            ))} */}
          </div>
          <div className=" justify-end w-[40%]">
            {/* <div className="flex justify-start items-center">
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
            </div> */}
            <div className="flex-none">
              <ul className="menu menu-horizontal px-1">
                <li tabIndex={0} className="ml-4 p-0">
                  <a
                    className="   bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow normal-case"
                    onClick={() => {
                      const json = query.serialize();
                      copy(lz.encodeBase64(lz.compress(json)));
                      alert("copied");
                      // setSnackbarMessage("State copied to clipboard")
                    }}
                  >
                    Save
                  </a>
                </li>
                <li tabIndex={0} className="mx-4 p-0">
                  <button
                    className={`${
                      previewEnable
                        ? "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow normal-case"
                        : "bg-gray-200  text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow normal-case"
                    }   `}
                    onClick={() => {
                      if (previewEnable) {
                        if (router?.query.page == "edit") {
                          router.push({
                            pathname: `/builder/form/preview/`,
                            query: { id: router?.query.formId },
                          });
                        } else {
                          router.push({
                            pathname: `/builder/form/preview/`,
                            query: { id: form },
                          });
                        }
                        // setPreview(true);
                        // setPreviewEnabled(true);
                      } else {
                        null;
                      }
                    }}
                  >
                    Preview
                  </button>
                </li>
                <li>
                  <a
                    className="  bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow normal-case"
                    onClick={() => setDialogOpen(true)}
                  >
                    Load
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Grid container alignItems="center">
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
        </Grid>
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
