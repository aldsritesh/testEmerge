import React, { useState, useEffect, useContext } from "react";
import {
  AiOutlineClose,
  AiOutlinePlus,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import axios from "axios";
import { baseUrl } from "@/config/APIConstants";
import { useRouter } from "next/router";
import { GlobalContext } from "@/layouts/GlobalLayout";
import { useAuthentication } from "@/controllers/auth";

export default function SignatureNext({
  initialData,
  setNext,
  setFieldModel,
  folderData,
}: any) {
  const [errors, setErrors] = useState<any>({});
  const { location, token }: any = useAuthentication();
  const router = useRouter();
  const ctx = useContext(GlobalContext);
  const [formValues, setFormValues] = useState<any>(
    initialData
      ? initialData
      : {
          name: "",
          locationID: location?.id,
          folderID: "",
          key: "",
          description: "",
          type: "SIGNATURE",
        }
  );

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    if (name == "name") {
      let str = value
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");

      setFormValues((prevValues: any) => ({
        ...prevValues,
        key: str,
      }));
    }
    setFormValues((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    // e.preventDefault();

    const validationErrors: any = {};

    if (!formValues.name.trim()) {
      validationErrors.name = "required";
    }

    if (!formValues.folderID.trim()) {
      validationErrors.folderID = "required";
    }

    if (!formValues.key.trim()) {
      validationErrors.key = "required";
    }
    // if (!formValues.description.trim()) {
    //   validationErrors.description = "required";
    // }

    // Validate form fields
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    let data = formValues;
    if (!initialData) {
      data.key = "contact." + data.key;
    } else {
      data.key = "contact." + data.key;
    }

    try {
      if (initialData) {
        const response = await axios.put(
          `${baseUrl}custom-fields/${initialData.id}`,
          data,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        // router.reload();
        ctx?.setCustomFieldRefresh(!ctx?.customFieldRefresh);
        setFormValues({
          name: "",
          locationID: location?.id,
          folderID: "",
          key: "",
          description: "",
          type: "SIGNATURE",
        });

        setErrors({});
      } else {
        const response = await axios.post(`${baseUrl}custom-fields`, data, {
          headers: { Authorization: `Bearer ${token}` },
        });
        // router.reload();
        ctx?.setCustomFieldRefresh(!ctx?.customFieldRefresh);
        setFormValues({
          name: "",
          locationID: location?.id,
          folderID: "",
          key: "",
          description: "",
          type: "SIGNATURE",
        });

        setErrors({});
      }
      // console.log("ghghgh", response);
    } catch (error) {
      console.log(error);
    }

    setErrors({});
  };

  return (
    <>
      <div className=" bg-white rounded-lg">
        <div className="h-[10vh] flex justify-between items-start border-b-[1px] pb-4 px-5 pt-3">
          <div>
            <p className="text-black font-bold md:text-lg text-center">
              Signature
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
        <form
          className="w-screen md:w-[80vh]"
          onSubmit={handleSubmit}
          action={"#"}
        >
          <div>
            <div className="overflow-y-auto scrollbar-hide h-[52vh]">
              <div className="px-6 h-[70vh]">
                <div>
                  <div>
                    <div className="mt-2">
                      <label className="text-sm">Name</label>
                    </div>
                    <div className="w-full ">
                      <input
                        placeholder="Field Name"
                        name="name"
                        value={formValues.name}
                        onChange={handleChange}
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
                      <>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          placeholder="contact"
                          name="folderID"
                          value={formValues.folderID}
                          label="Age"
                          className="w-full"
                          onChange={handleChange}
                        >
                          {folderData?.customFieldFolders?.map(
                            (item: any, index: any) => (
                              <MenuItem
                                className="text-black"
                                value={item.id}
                                key={index}
                              >
                                {item.folderName}
                              </MenuItem>
                            )
                          )}
                        </Select>
                      </>
                    </div>

                    {errors.folderID && (
                      <div className="mb-2 text-red-500 text-[12px]">
                        {errors.folderID}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <div className="collapse">
                    <input type="checkbox" className="peer" />
                    <div className="flex items-center pl-0 collapse-title bg-white text-[#958F8F] ">
                      <div className="pl-2">
                        <AiOutlinePlus size={20} />
                      </div>
                      Additional preferences{" "}
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
                              onChange={handleChange}
                              name="key"
                              value={formValues.key}
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
                            name="description"
                            onChange={handleChange}
                            value={formValues.description}
                            placeholder="Add Description"
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
            </div>
          </div>
          <div className="md:h-[16vh] 2xl:h-20 flex justify-end items-center border-t-[1px] pt-3 pb-2 px-5">
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
                className="px-7 py-2 border bg-[#1258FC] hover:bg-[#1258fcd7] rounded-md text-white font-medium"
                type="button"
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
        </form>
      </div>
    </>
  );
}
