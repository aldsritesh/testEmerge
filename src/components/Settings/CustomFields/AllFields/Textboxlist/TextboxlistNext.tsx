import React, { useState, useContext, useEffect } from "react";
import {
  AiOutlineClose,
  AiOutlinePlus,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { MenuItem, Select } from "@mui/material";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiDeleteBinLine } from "react-icons/ri";
import { baseUrl } from "@/config/APIConstants";
import axios from "axios";
import { useRouter } from "next/router";
import { GlobalContext } from "@/layouts/GlobalLayout";
import { useAuthentication } from "@/controllers/auth";

export default function TextboxlistNext({
  folderData,
  setNext,
  setFieldModel,
  initialData,
}: any) {
  const [errors, setErrors] = useState<any>({});
  const { location, token }: any = useAuthentication();
  const ctx = useContext(GlobalContext);
  const router = useRouter();
  const [multiInputError, setMultiInputError] = useState<any>([]);

  const handleAddOption = () => {
    setFormData({
      ...formData,
      options: [...formData.options, { optionLabels: "", optionValues: "" }],
    });
  };

  const handleDeleteOption = (index: any) => {
    const updatedOptions = [...formData.options];
    updatedOptions.splice(index, 1);

    setFormData({
      ...formData,
      options: updatedOptions,
    });
  };

  const [formData, setFormData] = useState(
    initialData
      ? initialData
      : {
          name: "",
          description: "",
          folderID: "",
          type: "TEXTBOX_LIST",
          key: "",
          locationID: location?.id,
          options: [{ optionLabels: "", optionValues: "" }],
        }
  );

  useEffect(() => {
    // console.log("here");
    if (initialData) {
      let options: any = [];
      initialData.optionValues.map((item: any, index: any) => {
        let obj = {
          optionValues: item,
          optionLabels: initialData.optionLabels[index],
        };
        options.push(obj);
      });
      let data = {
        name: initialData.name,
        description: initialData.description,
        folderID: initialData.folderID,
        type: "TEXTBOX_LIST",
        key: initialData.key,
        locationID: location?.id,
        options: options,
      };

      setFormData(data);
    }
  }, [initialData]);

  const handleChange = (e: any, index: any, field: any) => {
    const { name, value } = e.target;

    const updatedOptions: any = [...formData.options];
    updatedOptions[index][field] = value;

    if (field === "optionLabels") {
      updatedOptions[index].optionValues = value;
    }

    if (name == "name") {
      let str = value
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");

      setFormData((prevValues: any) => ({
        ...prevValues,
        key: str,
      }));
    }

    setFormData({
      ...formData,
      [name]: value,
      options: updatedOptions,
    });
  };

  const handleSubmit = async () => {
    // e.preventDefault();
    // console.log(formData);
    // let arr: any = [];
    // formData?.options?.map((item: any, index: any) => {
    //   if (item.optionLabels.length < 1) {
    //     arr.push(index);
    //     setMultiInputError(arr);
    //   }
    // });

    let data = formData;
    data.key = "contact." + data.key;
    // let { optionLabels, optionValues, ...rem } = data;
    let optionLabels: any = [];
    let optionValues: any = [];

    data.options.map((item: any) => {
      optionLabels.push(item.optionLabels),
        optionValues.push(item.optionValues);
    });

    let data2 = {
      folderID: data.folderID,
      key: data.key,
      locationID: data.locationID,
      name: data.name,
      type: data.type,
      optionLabels: optionLabels,
      optionValues: optionValues,
    };

    console.log("ha bha data2", data2);

    // try {
    //   const response = await axios.post(`${baseUrl}custom-fields`, data2, {
    //     headers: { Authorization: `Bearer ${token}` },
    //   });
    //   ctx?.setCustomFieldRefresh(!ctx?.customFieldRefresh);

    //   // router.reload();
    // } catch (error) {
    //   console.log(error);
    // }

    try {
      if (initialData) {
        const response = await axios.put(
          `${baseUrl}custom-fields/${initialData.id}`,
          data2,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        // router.reload();
        setErrors({});
      } else {
        const response = await axios.post(`${baseUrl}custom-fields`, data2, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setErrors({});
      }
      // console.log("ghghgh", response);
    } catch (error) {
      console.log(error);
    }
    // Validate form fields
    const validationErrors: any = {};

    if (!formData.name.trim()) {
      validationErrors.name = "required";
    }
    // if (!formValues.object.trim()) {
    //   validationErrors.object = "required";
    // }
    if (!formData.folderID.trim()) {
      validationErrors.folderID = "required";
    }
    if (!formData.key.trim()) {
      validationErrors.key = "required";
    }
    // if (!formData.description.trim()) {
    //   validationErrors.description = "required";
    // }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setFormData({
      name: "",
      description: "",
      folderID: "",
      type: "TEXTBOX_LIST",
      key: "",
      locationID: location?.id,
      options: [{ optionLabels: "", optionValues: "" }],
    });
    // setFormData({
    //   name: "",
    //   // object: "",
    //   folderID: "",

    //   // prefill: "",
    //   key: "",
    //   description: "",
    // });

    setErrors({});

    // handleStoreFormData(formValues);
    // handleNewTab();
  };
  return (
    <>
      <div className=" bg-white rounded-lg h-[80vh] 2xl:h-[70vh]  overflow-y-hidden w-full scrollbar-hide ">
        <div className="h-[10vh] flex justify-between items-start border-b-[1px] mb-4 px-5 pt-3">
          <div></div>
          <div>
            <p className="text-gray-800 font-medium md:text-lg text-center">
              New Custom Fields
            </p>
          </div>
          <button
            onClick={(e) => {
              if (setNext) {
                setNext(false), setFieldModel(false);
              } else {
                setFieldModel(false);
              }
              e.preventDefault();
            }}
          >
            <AiOutlineClose className="text-gray-800 h-6 w-6" />
          </button>
        </div>

        <form className="  w-screen md:w-[110vh]">
          <div className="overflow-y-auto ">
            <div>
              <div className=" px-6 ">
                <div className="pt-4 h-[48vh] 2xl:h-[40vh] overflow-y-scroll scrollbar-hide">
                  <div>
                    <h1 className="text-gray-600 text-sm">Field Selected</h1>
                    <button className="tex-center px-20 py-4 rounded-md text-sm mt-2 bg-[#113042] text-white font-medium">
                      TextBox List
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="mt-2">
                        <label className="text-sm ">Name</label>
                      </div>
                      <div className="w-full ">
                        <input
                          placeholder="Field Name"
                          name="name"
                          value={formData.name}
                          // if (name == "name") {
                          //   let str = value
                          //     .toLowerCase()
                          //     .trim()
                          //     .replace(/[^\w\s-]/g, "")
                          //     .replace(/[\s_-]+/g, "-")
                          //     .replace(/^-+|-+$/g, "");
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              name: e.target.value,
                              key: e.target.value
                                .toLowerCase()
                                .trim()
                                .replace(/[^\w\s-]/g, "")
                                .replace(/[\s_-]+/g, "-")
                                .replace(/^-+|-+$/g, ""),
                            })
                          }
                          className="border px-2 py-3 rounded-md w-full "
                        />
                        {errors.name && (
                          <div className="mb-2 text-red-500 text-[12px]">
                            {errors.name}
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <div className="mt-2">
                        <label className="text-sm">Folder</label>
                      </div>

                      <div>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          placeholder="contact"
                          name="folderID"
                          value={formData.folderID}
                          label="Age"
                          className="w-full"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              folderID: e.target.value,
                            })
                          }
                        >
                          {folderData?.customFieldFolders?.map(
                            (item: any, index: any) => (
                              <MenuItem value={item.id} key={index}>
                                {item.folderName}
                              </MenuItem>
                            )
                          )}
                        </Select>
                      </div>

                      {errors.folderID && (
                        <div className="mb-2 text-red-500 text-[12px]">
                          {errors.folderID}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="p-3 my-4 shadow-md border border-gray-300 ">
                    <div className="grid md:grid-cols-2 xl:grid-cols-4 bg-gray-100 py-2 mt-2">
                      <div>
                        <p></p>
                      </div>

                      <div>
                        <p>Label</p>
                      </div>

                      <div>
                        <p>Value</p>
                      </div>

                      <div>
                        <p>Action</p>
                      </div>
                    </div>
                    {formData?.options?.map((option: any, index: any) => (
                      <div
                        key={index}
                        className="grid md:grid-cols-2 xl:grid-cols-4  py-2 mt-2"
                      >
                        <div className="flex justify-center">
                          <RxHamburgerMenu size={24} />
                        </div>
                        <div>
                          <input
                            placeholder="Enter Label"
                            name="optionLabels"
                            value={option.optionLabels}
                            onChange={(e) =>
                              handleChange(e, index, "optionLabels")
                            }
                            className="focus:border-blue-600 rounded-md border border-gray-400 w-[70%] placeholder:text-sm px-1 py-2"
                          />
                          {multiInputError.includes(index) && (
                            <div className="mb-2 text-red-500 text-[12px]">
                              <p>required</p>
                            </div>
                          )}
                        </div>

                        <div>
                          <input
                            placeholder="Enter placeholder"
                            name="optionValues"
                            value={option.optionValues}
                            onChange={(e) =>
                              handleChange(e, index, "optionValues")
                            }
                            className="focus:border-blue-600 rounded-md border border-gray-400 w-[70%] placeholder:text-sm px-1 py-2"
                          />
                        </div>

                        <div>
                          <RiDeleteBinLine
                            size={20}
                            onClick={() => handleDeleteOption(index)}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center cursor-pointer">
                    <AiOutlinePlus size={20} />
                    <p
                      className="text-sm text-gray-600 pl-2"
                      onClick={() => handleAddOption()}
                    >
                      Add an option
                    </p>
                  </div>

                  <div className="">
                    <div className="collapse">
                      <input type="checkbox" className="peer" />
                      <div className="flex items-center pl-0 collapse-title bg-white text-black ">
                        Additional preferences{" "}
                        <div className="pl-2">
                          <AiOutlinePlusCircle size={24} />
                        </div>
                      </div>
                      <div className="collapse-content bg-white text-black ">
                        <div>
                          <div className="mt-2 pl-0">
                            <label className="text-sm">Unique Key</label>
                          </div>
                          <div className="w-full mt-2 pl-0">
                            <div className="relative">
                              <p className="absolute left-2 top-3">contact.</p>
                              <input
                                type="text"
                                placeholder=""
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    key: e.target.value,
                                  })
                                }
                                name="key"
                                value={formData.key}
                                className="border px-2 py-3 rounded-md w-full md:pl-[16.5%] lg:pl-[15.5%] xl:pl-[16%] 2xl:pl-[15.5%]"
                              />
                            </div>
                            {errors.key && (
                              <div className="mb-2 text-red-500 text-[12px]">
                                {errors.key}
                              </div>
                            )}
                          </div>
                        </div>

                        <div>
                          <div className="w-full mt-3">
                            <textarea
                              placeholder="Add Description"
                              name="description"
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  description: e.target.value,
                                })
                              }
                              value={formData.description}
                              className="border px-2 py-3 rounded-md w-full "
                            />
                            {/* {errors.description && (
                              <div className="mb-2 text-red-500 text-[12px]">
                                {errors.description}
                              </div>
                            )} */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-[10vh]  flex justify-end items-center pt-2">
                  {!initialData && (
                    <div>
                      <button
                        className="px-7 py-2 border border-gray-300 rounded-md mr-2 hover:bg-gray-50"
                        onClick={() => setNext(false)}
                      >
                        Back
                      </button>
                    </div>
                  )}
                  <div>
                    <button
                      className="px-7 py-2 border bg-[#1258FC] hover:bg-[#1258fcd7]  rounded-md text-white font-medium"
                      // onClick={() => handleSubmit}
                      // onClick={() => {
                      //   handleSubmit();
                      //   setNext(false), setFieldModel(false);
                      // }}
                      onClick={(e) => {
                        if (setNext) {
                          handleSubmit();
                          setNext(false), setFieldModel(false);
                        } else {
                          handleSubmit();
                          setFieldModel(false);
                        }
                        e.preventDefault();
                      }}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
