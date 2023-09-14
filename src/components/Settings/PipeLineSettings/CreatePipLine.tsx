import item from "@/components/Contact/dnd/styles/item";
import { baseUrl } from "@/config/APIConstants";
import { PlusIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const CreatePipLine = ({ onClose, handleChange }: any) => {
  const [pipeline, setPipeline] = useState<any>({
    name: "",
    stages: [""],
  });

  const [errors, setErrors] = useState<any>({
    pipelineError: "",
    stageErrors: [""],
  });

  const handleChangeStage = (i: any, e: any) => {
    setPipeline((pipeline: any) => ({
      ...pipeline,
      stages: pipeline.stages.map((stage: any, j: any) =>
        j === i ? e.target.value : stage
      ),
    }));

    setErrors((errors: any) => ({
      ...errors,
      stageErrors: errors.stageErrors.map((err: any, j: any) =>
        j === i ? "" : err
      ),
    }));
  };

  const addFormFields = () => {
    setPipeline((pipeline: any) => ({
      ...pipeline,
      stages: [...pipeline.stages, ""],
    }));

    setErrors((errors: any) => ({
      ...errors,
      stageErrors: [...errors.stageErrors, ""],
    }));
  };

  const removeFormFields = (i: any) => {
    setPipeline((pipeline: any) => ({
      ...pipeline,
      stages: pipeline.stages.filter((s: any, j: any) => i !== j),
    }));

    setErrors((errors: any) => ({
      ...errors,
      stageErrors: errors.stageErrors.filter((err: any, j: any) => i !== j),
    }));
  };

  const handleSubmit = async () => {
    let pipelineError = "";
    let stageErrors = pipeline.stages.map((stage: any) => "");

    if (pipeline.name === "") {
      pipelineError = "Pipeline name is required";
    }

    pipeline.stages.forEach((stage: any, i: any) => {
      if (stage === "") {
        stageErrors[i] = "Stage name is required";
      }
    });

    if (pipelineError || stageErrors.includes("Stage name is required")) {
      setErrors({ pipelineError, stageErrors });
      return;
    }

    const newPipeline = {
      ...pipeline,
    };
    const result = await handleChange(newPipeline);
    if (result) {
      setPipeline({
        name: "",
        stages: [""],
      });
      setErrors({
        pipelineError: "",
        stageErrors: [""],
      });
      handleClose();
    }
  };

  const handleMoveUp = (i: any) => {
    if (i === 0) return;

    setPipeline((pipeline: any) => ({
      ...pipeline,
      stages: pipeline.stages.map((stage: any, j: any) => {
        if (j === i) return pipeline.stages[i - 1];
        if (j === i - 1) return pipeline.stages[i];
        return stage;
      }),
    }));
  };

  const handleMoveDown = (i: any) => {
    if (i === pipeline.stages.length - 1) return;

    setPipeline((pipeline: any) => ({
      ...pipeline,
      stages: pipeline.stages.map((stage: any, j: any) => {
        if (j === i) return pipeline.stages[i + 1];
        if (j === i + 1) return pipeline.stages[i];
        return stage;
      }),
    }));
  };

  const handleClose = () => {
    setPipeline({
      name: "",
      stages: [""],
    });
    setErrors({
      pipelineError: "",
      stageErrors: [""],
    });
    onClose();
  };

  return (
    <div className="font-strawford bg-white rounded-lg    w-full">
      <div className="pt-5 pb-3  w-[28vw] 2xl:w-[26vw] ">
        <div className="h-[7vh] flex justify-between items-center border-b-[1px]">
          <div>
            <p className="       text-gray-800 font-semibold md:text-xl  pl-14">
              Add Pipeline
            </p>
          </div>
          <button
            onClick={() => {
              handleClose();
            }}
          >
            <AiOutlineClose className="text-gray-800 h-6 w-6 mr-2" />
          </button>
        </div>
        <div className="overflow-hidden">
          <div className="  mx-14  mt-8">
            <label
              className="block  text-black text-base   font-medium"
              htmlFor=""
            >
              Pipeline Name
            </label>
            <input
              type="url"
              name="Pipeline Name"
              value={pipeline.name}
              onChange={(e) => {
                setPipeline((pipeline: any) => ({
                  ...pipeline,
                  name: e.target.value,
                }));

                setErrors((errors: any) => ({
                  ...errors,
                  pipelineError: "",
                }));
              }}
              required
              placeholder="Pipeline Name"
              className=" w-full placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300   "
            />
            {errors.pipelineError && (
              <div className="text-red-500 text-sm">{errors.pipelineError}</div>
            )}

            <div className="flex space-x-8  ">
              <label
                className="block text-black text-base   font-medium"
                htmlFor=""
              >
                Stages
              </label>
            </div>

            {pipeline.stages.map((stage: any, index: any) => (
              <div key={index} className="flex flex-col">
                <div className="relative flex  justify-between items-center">
                  {pipeline.stages.length > 1 && (
                    <div className="flex flex-col space-y-1.5 mr-2">
                      {index !== 0 && (
                        <button
                          className="bg-white hover:bg-gray-100 text-gray-700 font-bold border border-gray-200 rounded-full items-center justify-center flex"
                          onClick={() => handleMoveUp(index)}
                        >
                          <MdKeyboardArrowUp className="" />
                        </button>
                      )}
                      {index !== pipeline.stages.length - 1 && (
                        <button
                          className="bg-white hover:bg-gray-100 text-gray-700 font-bold border border-gray-200 rounded-full items-center justify-center flex"
                          onClick={() => handleMoveDown(index)}
                        >
                          <MdKeyboardArrowDown className="" />
                        </button>
                      )}
                    </div>
                  )}

                  <div className="w-full  ">
                    <input
                      type="text"
                      placeholder={"Stage Name " + (index + 1)}
                      className="w-full placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md   mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300"
                      onChange={(e) => handleChangeStage(index, e)}
                      value={stage}
                      required
                    />
                  </div>

                  <div className=" absolute right-0 mr-2 mb-1">
                    <div
                      className={
                        "flex justify-end align-center" +
                        (pipeline.stages.length === 1 ? "" : " cursor-pointer")
                      }
                      onClick={() => {
                        if (pipeline.stages.length === 1) return;
                        removeFormFields(index);
                      }}
                    >
                      <RiDeleteBin6Fill
                        className={
                          pipeline.stages.length === 1
                            ? "text-gray-400"
                            : "text-red-400"
                        }
                      />
                    </div>
                  </div>
                </div>
                {errors.stageErrors[index] && (
                  <div className="text-red-500 text-sm">
                    {errors.stageErrors[index]}
                  </div>
                )}
                {/* <div
                  onClick={() => {
                    addFormFields();
                  }}
                  className="flex text-newBlue gap-1 cursor-pointer px-14  absolute "
                >
                  <PlusIcon className="mt-1 h-5 w-5" /> Add Stage
                </div> */}
              </div>
            ))}
            <div
              onClick={() => {
                addFormFields();
              }}
              className="flex items-center text-gray-400 text-sm gap-1 cursor-pointer mt-1  "
            >
              <PlusIcon className="mt-1 h-4 w-4 text-gray-400" />{" "}
              <span>Add Stage</span>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center   pt-8 pb-8 px-14">
          <div className=" flex justify-end items-center gap-3">
            <button
              onClick={() => {
                handleClose();
              }}
              className="text-sm text-gray-600 font-medium flex justify-start items-center border-[1px] border-gray-300 py-2 px-9 rounded-md  "
            >
              Cancel
            </button>
            <button
              onClick={() => handleSubmit()}
              type="submit"
              className="text-sm flex justify-start items-center bg-[#0f66cf] py-2 px-9 text-white rounded-md "
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePipLine;
