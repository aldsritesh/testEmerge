import React, { useState, useContext } from "react";
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

export default function FileUploadNext({
  initialData,
  folderData,
  setNext,
  setFieldModel,
}: any) {
  const ctx = useContext(GlobalContext);
  const [fieldData, setFieldData] = useState<any>([]);
  const [selected, setSelected] = useState(0);

  const [errors, setErrors] = useState<any>({});

  const [age, setAge] = React.useState("");
  const { location, token }: any = useAuthentication();
  const [formValues, setFormValues] = useState<any>(
    initialData
      ? initialData
      : {
          name: "",
          // object: "",
          folderID: "",
          maxLimit: "",
          key: "",
          // description: "",
          type: "FILE_UPLOAD",
          locationID: location?.id,
          selectedFiles: [],
        }
  );

  const handleCheckboxChange = (targetValue: string) => {
    if (targetValue === "All") {
      setFormValues({ ...formValues, selectedFiles: ["All"] });
    } else {
      let updatedSelectedInput;
      if (formValues?.selectedFiles?.includes("All")) {
        updatedSelectedInput = [targetValue];
      } else {
        updatedSelectedInput = formValues.selectedFiles.includes(targetValue)
          ? formValues.selectedFiles.filter(
              (item: string) => item !== targetValue
            )
          : [...formValues.selectedFiles, targetValue];
      }
      setFormValues({ ...formValues, selectedFiles: updatedSelectedInput });
    }
  };

  const selectedInput: any = formValues.selectedFiles;

  const router = useRouter();
  const selectedFiles = selectedInput?.includes("All")
    ? "All"
    : selectedInput?.join(",");

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

    // new

    //new
    // Validate form fields
    const validationErrors: any = {};

    if (!formValues.name.trim()) {
      validationErrors.name = "required";
    }
    // if (!formValues.object.trim()) {
    //   validationErrors.object = "required";
    // }
    if (!formValues.folderID.trim()) {
      validationErrors.folderID = "required";
    }

    if (!formValues.key.trim()) {
      validationErrors.key = "required";
    }
    // if (!formValues.description.trim()) {
    //   validationErrors.description = "required";
    // }

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

    // selectedInput;

    let data2 = {
      folderID: data.folderID,
      key: data.key,
      name: data.name,
      selectedFiles: selectedInput,
    };

    // console.log("data 2 in file Upload submit", data2);

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
        ctx?.setCustomFieldRefresh(!ctx?.customFieldRefresh);
        setFormValues({
          name: "",
          // object: "",
          folderID: "",
          key: "",
          description: "",
          maxlimit: "",
          type: "FILE_UPLOAD",
          locationID: location?.id,
          selectedFiles: [],
        });
        setErrors({});
      } else {
        const response = await axios.post(`${baseUrl}custom-fields`, data2, {
          headers: { Authorization: `Bearer ${token}` },
        });
        ctx?.setCustomFieldRefresh(!ctx?.customFieldRefresh);
        setFormValues({
          name: "",
          // object: "",
          folderID: "",
          key: "",
          description: "",
          maxlimit: "",
          type: "FILE_UPLOAD",
          locationID: location?.id,
          selectedFiles: [],
        });
        setErrors({});
      }
      // router.reload();
    } catch (error) {
      console.log(error);
    }
    // handleStoreFormData(formValues);
    // handleNewTab();
  };
  return (
    <>
      <div className=" bg-white rounded-lg h-[69vh]   overflow-y-hidden w-full scrollbar-hide">
        <div className="h-[10vh] flex justify-between items-start border-b-[1px] pb-4 px-5 pt-3">
          <div>
            <p className="text-black font-bold md:text-lg text-center">
              File Upload
            </p>
          </div>
          <button
            onClick={() => {
              setNext(false), setFieldModel(false);
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
          <div className="overflow-y-auto scrollbar-hide ">
            <div>
              <div className="px-6 pb-24">
                <div className="h-[45vh] overflow-y-auto scrollbar-hide overflow-x-hidden">
                  <div>
                    <div>
                      <div className="mt-2">
                        <label className="text-sm ">Name</label>
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

                    {/* <div>
                    <div className="mt-2">
                      <label className="text-sm text-[#34373a] ">Object</label>
                    </div>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="object"
                      value={formValues.object}
                      onChange={handleChange}
                      className="w-full"
                    >
                      <MenuItem value={"contact"}>Contact</MenuItem>
                    </Select>

                    {errors.object && (
                      <div className="mb-2 text-red-500 text-[12px]">
                        {errors.object}
                      </div>
                    )}
                  </div> */}

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
                          value={formValues.folderID}
                          label="Age"
                          className="w-full"
                          onChange={handleChange}
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

                    <div></div>
                  </div>

                  {/* PDF GIF OPTIONS STARTS */}

                  {/* <div className=" grid grid-cols-4 pt-3 space-y-3">
                    <div className="flex items-center">
                      <div className="">
                        <input
                          type="checkbox"
                          checked={selectedInput?.includes("PDF")}
                          onChange={() => handleCheckboxChange("PDF")}
                          className="border boorder-gray-300 rounded-md cursor-pointer"
                        />
                      </div>

                      <div className="pl-2">
                        <p className="text-sm text-gray-600">PDF</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="">
                        <input
                          type="checkbox"
                          checked={selectedInput?.includes("DOCX/DOC")}
                          onChange={() => handleCheckboxChange("DOCX/DOC")}
                          className="border boorder-gray-300 rounded-md cursor-pointer"
                        />
                      </div>

                      <div className="pl-2">
                        <p className="text-sm text-gray-600">DOCX/DOC</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="">
                        <input
                          type="checkbox"
                          checked={selectedInput?.includes("JPG/JPEG")}
                          onChange={() => handleCheckboxChange("JPG/JPEG")}
                          className="border boorder-gray-300 rounded-md cursor-pointer"
                        />
                      </div>

                      <div className="pl-2">
                        <p className="text-sm text-gray-600">JPG/JPEG</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="">
                        <input
                          type="checkbox"
                          checked={selectedInput?.includes("PNG")}
                          onChange={() => handleCheckboxChange("PNG")}
                          className="border boorder-gray-300 rounded-md cursor-pointer"
                        />
                      </div>

                      <div className="pl-2">
                        <p className="text-sm text-gray-600">PNG</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="">
                        <input
                          type="checkbox"
                          checked={selectedInput?.includes("GIF")}
                          onChange={() => handleCheckboxChange("GIF")}
                          className="border boorder-gray-300 rounded-md cursor-pointer"
                        />
                      </div>

                      <div className="pl-2">
                        <p className="text-sm text-gray-600">GIF</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="">
                        <input
                          type="checkbox"
                          checked={selectedInput?.includes("XLS/CSV")}
                          onChange={() => handleCheckboxChange("XLS/CSV")}
                          className="border boorder-gray-300 rounded-md cursor-pointer"
                        />
                      </div>

                      <div className="pl-2">
                        <p className="text-sm text-gray-600">XLS/CSV</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="">
                        <input
                          type="checkbox"
                          checked={selectedInput?.includes("All")}
                          onChange={() => handleCheckboxChange("All")}
                          className="border boorder-gray-300 rounded-md cursor-pointer"
                        />
                      </div>

                      <div className="pl-2">
                        <p className="text-sm text-gray-600">All</p>
                      </div>
                    </div>
                  </div> */}

                  {/* PDF GIF OPTIONS ENDS */}

                  {/* <div className=" grid grid-cols-4 pt-3 space-y-3">
                    <div className="flex items-center">
                      <div className="">
                        <input
                          name="multipleFiles"
                          value={formValues.multipleFiles}
                          onChange={(e) => {
                            console.log(e);
                            setFormValues((prevValues: any) => ({
                              ...prevValues,
                              multipleFiles: e.target.defaultChecked,
                            }));
                          }}
                          type="checkbox"
                          className="border boorder-gray-300 rounded-md"
                        />
                      </div>

                      <div className="pl-2">
                        <p className="text-sm text-gray-600">
                          Allow Multiple Files
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div>
                        <p className="text-sm text-gray-600">Max File Limit</p>
                        <div className="pt-2">
                          <input
                            type="text"
                            name="maxLimit"
                            value={formValues.maxLimit}
                            onChange={handleChange}
                            className="border border-gray-300 py-1 rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                  </div> */}

                  <div className="">
                    <div className="collapse">
                      <input type="checkbox" className="peer" />
                      <div className="flex items-center pl-0 collapse-title bg-white text-[#958F8F] ">
                        <div className="pr-2">
                          <AiOutlinePlus size={20} />
                        </div>
                        Additional preferences{" "}
                      </div>
                      <div className="collapse-content bg-white text-black ">
                        <div>
                          <div className="relative">
                            <p className="absolute left-2 top-3">contact.</p>
                          </div>
                          <div className="w-full mt-2 pl-0">
                            <input
                              type="text"
                              placeholder=""
                              onChange={handleChange}
                              name="key"
                              value={formValues.key}
                              className="border px-2 py-3 rounded-md w-full md:pl-[16.5%] lg:pl-[15.5%] xl:pl-[16%] 2xl:pl-[15.5%]"
                            />
                            {errors.key && (
                              <div className="mb-2 text-red-500 text-[12px]">
                                {errors.key}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end items-center">
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
                      type="button"
                      // onClick={handleSubmit}
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
                      className="px-7 py-2 border bg-[#1258FC] hover:bg-[#1258fcd7] rounded-md text-white font-medium"
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
