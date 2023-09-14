import React, { useState, useEffect } from "react";

import ModalDerived from "@/components/Modal";
import { AiOutlineClose } from "react-icons/ai";
import { TbFolderPlus } from "react-icons/tb";
import ValueTableData from "./AllValues/values-table";
import ValueDeletedFolderTabData from "./DeletedValueFolders/deleted-valueFolData";
import ValueFolderTabData from "./ValueFolder/value-folderTabData";
import axios from "axios";
import { baseUrl, userID } from "@/config/APIConstants";
import { useAuthentication } from "@/controllers/auth";

interface RowData {
  [key: string]: any;
}

const ValueType = [
  { title: "All Value" },
  // { title: "Folder" },
  // { title: "Deleted Folder" },
];

export default function CustomValueData(id: any) {
  const [select, setSelect] = useState<any>(0);
  const { location, token }: any = useAuthentication();
  const [ValueData, setValueData] = useState<any>([]);
  const [data, setdata] = useState<RowData[]>([
    {
      id: "1",
      value_Name: "Value 1",
      folder: "Contact",
      unique_Key: "unique",
      created_On: "2023-06-14T09:00:00.000Z",
    },
    {
      id: "2",
      value_Name: "Value 2",
      folder: "Contact",
      unique_Key: "unique",
      created_On: "2023-06-14T09:00:00.000Z",
    },
    {
      id: "3",
      value_Name: "Value 3",
      folder: "Contact",
      unique_Key: "unique",
      created_On: "2023-06-14T09:00:00.000Z",
    },
    {
      id: "4",
      value_Name: "Value 4",
      folder: "Contact",
      unique_Key: "unique",
      created_On: "2023-06-14T09:00:00.000Z",
    },
  ]);
  const [update, setupdate] = useState(1);
  const [arr, setArr] = useState([]);
  useEffect(() => {
    axios
      .get(
        `${baseUrl}custom-values/location/f209ee50-96e6-4ca2-9eb5-80b93d31591f`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(({ data }: any) => {
        setArr(data.customValues);
        // array1 = [data.tasks];
        console.log(
          "firsvalue data table----------new------>",
          data.customValues
        );
      })
      .catch((error: any) => {
        console.log("", error);
      });
  }, [update]);

  const [openValueModel, setOpenValueModel] = useState<any>(false);
  const [errors, setErrors] = useState<any>({});
  const [formValues, setFormValues] = useState<any>({
    valuename: "",
    folder: "",
    key: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormValues((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  // const [update, setupdate]= useState(1) ;
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formValues);

    try {
      axios
        .post(
          `${baseUrl}custom-values `,
          {
            // key: "keydummy",
            // updatedOn: "dummyupdatedon",
            // valuename: "dummy value",
            key: formValues.key,
            folderName: formValues.folder,
            value: formValues.valuename,
            addedOn: "2023-09-07T06:04:03.630732Z",
            id: "9e878802-08f6-47c4-82da-1f7c6982985a",
            locationID: location?.id,
            ownerUserID: userID,
            updatedOn: formValues.addedOn,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then(({ data }: any) => {
          setupdate(update + 1);
          setArr(data.customValues);
          console.log(
            "firsvalue data table---------------->",
            data.customValues
          );
        });
    } catch (error) {
      console.log("", error);
    }

    //validate errors
    const validationErrors: any = {};

    if (!formValues.valuename) {
      validationErrors.valuename = "Required";
    }
    if (!formValues.folder) {
      validationErrors.folder = "Required";
    }
    if (!formValues.key) {
      validationErrors.key = "Required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setValueData((prevValues: any) => [
      ...ValueData,

      {
        valueName: formValues?.valuename,
        folder: formValues?.folder,
        key: formValues?.key,
      },
    ]);

    setdata((prevValues: any) => [
      ...data,

      {
        id: ValueData?.length + 1,
        valuename: formValues?.valuename,
        folder: formValues?.folder,
        created_On: new Date(),
        key: formValues?.key,
      },
    ]);

    setFormValues({
      valuename: "",
      folder: "",
      key: "",
    });

    setErrors({});

    setOpenValueModel(false);
  };
  console.log(location?.id);
  useEffect(() => {}, [formValues]);
  return (
    <>
      <ModalDerived visibility={openValueModel} onClose={openValueModel}>
        <div className=" bg-white rounded-lg  h-[50vh] pb-[5%]  overflow-y-hidden  w-[30vw] scrollbar-hide ">
          <form className="        " onSubmit={handleSubmit}>
            <div className="h-[8vh] flex justify-between items-center border-b-[1px]   px-5">
              <div>
                <p className="text-gray-800 font-semibold md:text-xl pl-6 ">
                  Add New Value
                </p>
                <p className="text-gray-500 font-normal md:text-sm pt-1"></p>
              </div>
              <span onClick={() => setOpenValueModel(false)}>
                <AiOutlineClose className="text-gray-800 h-6 w-6" />
              </span>
            </div>
            <div className="overflow-hidden ">
              <div className="   first-letter:">
                {/*  Add Fields */}
                <div className="mx-12 py-3">
                  <label
                    className="block text-[#47494b] text-base pt-1 font-semibold"
                    htmlFor=""
                  >
                    Value Names
                  </label>

                  <input
                    type="text"
                    id=""
                    name="valuename"
                    value={formValues.valuename}
                    onChange={handleChange}
                    placeholder="Enter valuename"
                    className=" w-full placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300   "
                  />
                  {errors.valuename && (
                    <div className=" text-red-500 text-xs pt-1">
                      {errors.valuename}
                    </div>
                  )}
                </div>

                {/* Folder Name */}
                <div className="mx-12 ">
                  <label
                    className="block text-[#47494b] text-base pt-1 font-semibold"
                    htmlFor=""
                  >
                    Folder Name
                  </label>

                  <input
                    type="text"
                    id=""
                    name="folder"
                    value={formValues.folder}
                    onChange={handleChange}
                    placeholder="Enter Folder name"
                    className=" w-full placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300   "
                  />
                  {errors.folder && (
                    <div className=" text-red-500 text-xs pt-1">
                      {errors.folder}
                    </div>
                  )}
                </div>
                {/* Unique Key */}
                <div className="mx-12 ">
                  <label
                    className="block text-[#47494b] text-base pt-1 font-semibold"
                    htmlFor=""
                  >
                    Unique Keys
                  </label>

                  <input
                    type="text"
                    id=""
                    name="key"
                    value={formValues.key}
                    onChange={handleChange}
                    placeholder="Enter Unique Key"
                    className=" w-full placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300   "
                  />
                  {errors.key && (
                    <div className=" text-red-500 text-xs pt-1">
                      {errors.key}
                    </div>
                  )}
                </div>
                {/* added on */}
                {/* <div className=" mx-5">
                  <label
                    htmlFor=""
                    className="block text-[#47494b] text-sm pt-1 font-semibold"
                  >
                    Created on
                  </label>
                  <input
                    type="text"
                    name="addedOn"
                    value={formValues.addedOn}
                    onChange={handleChange}
                    placeholder="Created on"
                    className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-0.5   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300"
                  />
                  {errors.addedOn && (
                    <div className="mb-3 text-red-500 text-xs  ">
                      {errors.addedOn}
                    </div>
                  )}
                </div> */}
              </div>
            </div>
            <div className="h-[10vh] flex justify-end items-center  pt-3 pb-2 px-12">
              <div className=" flex justify-end items-center gap-3">
                <span
                  onClick={() => setOpenValueModel(!openValueModel)}
                  className=" hover:cursor-pointer text-sm text-gray-600 font-medium flex justify-start items-center border-[1px] border-gray-300 py-2 px-8 rounded-md  "
                >
                  Cancel
                </span>
                <button
                  // onSubmit={handleSubmit}
                  type="submit"
                  className="text-sm px-8 flex justify-start items-center bg-[#0f66cf] py-2   text-white rounded-md  "
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </ModalDerived>
      <div className="w-full px-2 py-2">
        <div className="flex  items-center justify-between">
          {/* <p className="text-[#47494b] text-base font-semibold m-1 pl-2">
            {select == 0 && "All Values"}
            {select == 1 && "Folder"}
            {select == 2 && "Deleted folder"}
          </p> */}
          <div className="flex w-full items-center justify-end">
            {/* <button
              onClick={() => setOpenValueModel(true)}
              className="text-xs flex justify-center gap-1 items-center border text-[#34373a]  m-1 py-2.5 px-5 2xl:px-6 font-semibold rounded-md "
            >
              <TbFolderPlus className="scale-110" />
              Add Folder
            </button> */}
            <button
              onClick={() => setOpenValueModel(true)}
              className="text-xs flex justify-center items-center  mt-3 mb-5  bg-[#1258FC] hover:bg-secondary duration-300 m-1 py-2.5 px-5 2xl:px-6 text-white rounded-md "
            >
              + Add Value
            </button>
          </div>
        </div>
        {/* <div className="mt-3 text-[#34373a] font-semibold bg-gray-100 text-xs border-t border-x rounded-t-md w-fit flex ">
          {ValueType.map((item: any, index: number) => (
            <button
              key={index}
              onClick={() => setSelect(index)}
              className={`px-4 py-2.5  ${
                select == index ? "bg-white rounded-t-md" : ""
              } `}
            >
              {item.title}
            </button>
          ))}
        </div> */}

        <div className="  pb-10 ">
          <ValueTableData data={arr} update={update} />
          {/* {select == 0 && }
          {select == 1 && <ValueFolderTabData data={data} />}
          {select == 2 && <ValueDeletedFolderTabData data={data} />} */}
        </div>
      </div>
    </>
  );
}
