import ModalDerived from "@/components/Modal";
import React, { useState } from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import CreatePipLine from "./CreatePipLine";
import { AiOutlineClose } from "react-icons/ai";
import { PlusIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { baseUrl } from "@/config/APIConstants";
import { IPipelineBasic } from "@/components/Leads/Interfaces";
import { useEffect } from "react";
import { useAuthentication } from "@/controllers/auth";
const PipelineTable = () => {
  const [openModal, setOpenModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState<string>("");
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [pipelines, setPipelines] = useState<IPipelineBasic[]>([]);
  const [stage, setStage] = useState<any>([]);
  const [data, setData] = useState<any>();
  const { location, token }: any = useAuthentication();
  const [loadingText, setLoadingText] = useState<any>("Loading...");

  useEffect(() => {
    axios
      .get(`${baseUrl}pipelines/location/${location?.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }: any) => {
        setPipelines(data.pipelines);
        setLoadingText("No pipelines");
      })
      .catch((error: any) => {
        console.log(error);
        setLoadingText("No pipelines");
      });
  }, []);

  const addPipeline = async (data: any) => {
    try {
      await axios
        .post(`${baseUrl}pipelines`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }: any) => {
          setPipelines([...pipelines, data.pipeline]);
        });
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const deletePipeline = async () => {
    try {
      await axios.delete(`${baseUrl}pipelines/${deleteId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const editPipeline = async (id: any) => {
    try {
      await axios
        .get(`${baseUrl}pipelines/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }: any) => {
          // console.log("data",data.pipeline)
          setData(data?.pipeline);
        });
    } catch (error) {
      console.error(error);
    }
  };

  // To get the single Pipeline API
  //   const editSinglePipeline = async (id: any) => {
  //       //  console.log(`${baseUrl}pipelines/${id}`
  //     try {
  //        await axios.put(`${baseUrl}pipelines/${id}`,
  //        {
  //         name: piplineNameInputText,
  //       pipelineStageRanks: [
  //           "f424c169-fbdb-431b-b77e-354434817710",
  //           "2e57c41c-e577-4604-9700-2df5ecd6e756"
  //       ]
  //      }, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       })
  //       .then(({ data }: any) => {
  //         // console.log("data",data.pipeline)
  //         setData(data?.pipeline)
  //       })
  //     } catch (error) {
  //       console.error(error);
  //     }

  // };

  const ShowStages = async (id: any) => {
    try {
      await axios
        .get(`${baseUrl}pipeline-stages/pipeline/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }: any) => {
          // console.log(data , "DataSatges")
          setStage(data?.pipelineStages);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const UpdatePipeline = async (id: any) => {
    try {
      await axios
        .delete(`${baseUrl}pipeline-stages/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }: any) => {
          // console.log(data )
        });
    } catch (error) {
      console.error(error);
    }
  };

  const DeletePipelines = async (id: any) => {
    if (confirm("Are you sure your want to delete")) {
      try {
        await axios
          .delete(`${baseUrl}pipelines/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(({ data }: any) => {
            console.log("deletePipeline", data);
          });
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="font-sans">
      {/* Edit Pipeline */}
      <ModalDerived
        visibility={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
      >
        <div className=" bg-white rounded-lg  h-[85vh] pb-[5%]  overflow-y-hidden w-full scrollbar-hide ">
          <div className=" h-[100vh]  pt-5 pb-3 w-screen md:w-[80vh]">
            <div className="h-[6vh] flex justify-between items-start border-b-[1px] pb-4 px-5">
              <div>
                <p className="text-gray-800 font-medium md:text-lg ">
                  Edit Pipeline
                </p>
              </div>
              <button
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                <AiOutlineClose className="text-gray-800 h-6 w-6" />
              </button>
            </div>
            <div className="overflow-hidden ">
              <div className="h-[65vh] overflow-y-scroll scrollbar-hide px-4 pt-4 ">
                <div className="flex items-center  justify-between ">
                  <label
                    className="block text-[#47494b] text-sm pt-1 font-semibold"
                    htmlFor=""
                  >
                    Pipeline Name
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    value={data?.name}
                    // onChange={(e) => {
                    //   const updatedPipeLine = [...pipelines];
                    //   updatedPipeLine[data?.id - 1].name = e.target.value;
                    //   setPipelines(updatedPipeLine);
                    // }}
                    className=" w-full placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300   "
                  />
                  <div className="flex justify-between items-center px-2  gap-5 py-4">
                    <div className="w-full lg:w-[80%]">
                      <p className="text-gray-800 font-semibold text-base">
                        {" "}
                        Stage Name
                      </p>
                    </div>
                    <div className="w-full lg:w-[20%]">
                      <p className="text-gray-800 font-semibold text-base text-right">
                        {" "}
                        Actions
                      </p>
                    </div>
                  </div>
                </div>

                {stage?.map((item: any, index: number) => {
                  // console.log('sas', item.name);
                  return (
                    <div
                      key={index}
                      className="flex justify-between items-center gap-5"
                    >
                      <div className="w-full lg:w-[80%]">
                        <input
                          type="text"
                          value={item.name}
                          onChange={(e) => {
                            const updatedStage = [...stage];
                            updatedStage[index].name = e.target.value;
                            setStage(updatedStage);
                          }}
                          className="w-full placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2 font-medium bg-transparent focus:bg-transparent border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300"
                        />
                      </div>
                      <div className="w-full lg:w-[20%]">
                        <div className="flex justify-end align-center">
                          <RiDeleteBin6Fill
                            className="text-red-400"
                            // onClick={() => {
                            //   const updatedStage = [...stage];
                            //   updatedStage.splice(index, 1);
                            //   setStage(updatedStage);
                            // }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div
                  // onClick={() => {
                  //   const updatedPipeLine = [...pipelines];
                  //   const lastSubItem =
                  //     updatedPipeLine[data?.id - 1].subData[
                  //       updatedPipeLine[data?.id - 1].subData.length - 1
                  //     ];
                  //   const newSubItem = {
                  //     id: lastSubItem.id + 1,
                  //     name: "",
                  //   };
                  //   updatedPipeLine[data?.id - 1].subData.push(newSubItem);
                  //   setPipelines(updatedPipeLine);
                  // }}
                  className="flex justify-start items-center pl-2 pt-4 text-newBlue gap-1"
                >
                  <PlusIcon className="h-5 w-5" /> Add SubData
                </div>
              </div>
            </div>
            <div className="h-[10vh] flex justify-end items-center border-t-[1px] pt-3 pb-2 px-5">
              <div className=" flex justify-end items-center gap-3">
                <button
                  onClick={() => {
                    setOpenModal(false);
                    setData([]);
                  }}
                  className="text-base text-gray-600 font-medium flex justify-start items-center border-[1px] border-gray-300 py-2 px-5 rounded-md  "
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    // setOpenModal(false);
                    // // setData([]);
                    // UpdatePipeline(stage)
                    // editSinglePipeline(data?.id);
                  }}
                  className="text-base flex justify-start items-center bg-newBlue py-2 px-5 text-white rounded-md  "
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </ModalDerived>

      {/* create pipeline */}
      <ModalDerived
        visibility={openCreateModal}
        onClose={() => {
          setOpenCreateModal(false);
        }}
      >
        <CreatePipLine
          onClose={() => {
            setOpenCreateModal(false);
          }}
          handleChange={async (item: any) => {
            const result = await addPipeline(item);
            return result;
          }}
        />
      </ModalDerived>

      <div className="flex align-center rounded justify-center flex-col">
        {/* Add Button */}
        <div className="w-full">
          <div className="w-full   py-4">
            <div className=" flex items-center justify-between  px-4">
              <p className="text-[#47494b] text-base font-semibold">
                All Pipelines
              </p>
              <button
                className="text-md  flex justify-center items-center  bg-newBlue hover:bg-secondary duration-500 m-1 py-2 px-3 2xl:px-6 text-white rounded-md  "
                onClick={() => {
                  setOpenCreateModal(true);
                }}
              >
                + Create New Pipeline
              </button>
            </div>
          </div>
        </div>

        {/* table */}
        <div className="flex align-center justify-center flex-col bg-white py-2  px-4 rounded">
          {pipelines.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="table w-full">
                {/* head */}
                <thead>
                  <tr>
                    <th className="bg-gray-50">Id</th>
                    <th className="bg-gray-50">Name</th>
                    <th className="bg-gray-50">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {pipelines?.map((item: any, index: number) => (
                    <tr key={index} className="font-strawford">
                      <td> {index + 1} </td>
                      <td className="lg:w-[80%]"> {item.name} </td>
                      <td>
                        <div className="w-[80%] px-4 py-4 flex justify-end align-center h-auto">
                          <div
                            className="px-3 mx-3 cursor-pointer"
                            onClick={() => {
                              setOpenModal(true);
                              ShowStages(item.id);
                              editPipeline(item.id);
                              ShowStages(item.id);
                            }}
                          >
                            <MdOutlineModeEdit />
                          </div>
                          <div
                            onClick={() => {
                              setDeleteModal(true);
                              setDeleteId(item.id);
                            }}
                            className="px-3 mx-3 cursor-pointer"
                          >
                            <RiDeleteBin6Fill />
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="flex justify-center items-center">
              <p className="text-gray-400 text-lg">{loadingText}</p>
            </div>
          )}
        </div>
      </div>

      {/* Delete Pipeline */}
      <ModalDerived
        visibility={deleteModal}
        onClose={() => {
          setDeleteModal(false);
        }}
      >
        <div className="font-strawford bg-white rounded-lg max-h-[70vh] overflow-y-scroll w-full">
          <div className="pt-5 pb-3 w-screen md:w-[50rem]">
            <div className="flex justify-between items-start border-b-[1px] pb-4 px-5">
              <div>
                <p className="text-gray-800 font-medium font-strawford md:text-lg ">
                  Delete Pipeline
                </p>
              </div>
              <button
                onClick={() => {
                  setDeleteModal(false);
                }}
              >
                <AiOutlineClose className="text-gray-800 h-6 w-6" />
              </button>
            </div>
            <div className="overflow-scroll mt-2">
              <div className="mx-5 py-3">
                <label
                  className="block text-[#47494b] text-base pt-1"
                  htmlFor=""
                >
                  Are you sure you want to delete this pipeline? This action
                  will also delete all the stages and the opportunities
                  associated with this pipeline.
                </label>
              </div>
              <div className="mt-4 flex justify-end items-center border-t-[1px] pt-4 pb-2 px-5">
                <div className=" flex justify-end items-center gap-3">
                  <button
                    onClick={() => {
                      setDeleteModal(false);
                    }}
                    className="text-base text-gray-600 font-medium flex justify-start items-center border-[1px] border-gray-300 py-2 px-5 rounded-md  "
                  >
                    Cancel
                  </button>
                  <button
                    onClick={async () => {
                      const updatedPipeLine = pipelines.filter(
                        (i: any) => i.id !== deleteId
                      );
                      const result = await deletePipeline();
                      if (result) {
                        setPipelines(updatedPipeLine);
                        setDeleteId("");
                      }
                      setDeleteModal(false);
                    }}
                    type="submit"
                    className="text-base flex justify-start items-center bg-red-500 py-2 px-5 text-white rounded-md  "
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ModalDerived>
    </div>
  );
};
export default PipelineTable;
