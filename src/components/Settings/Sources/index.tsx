import React, { useState } from "react";
import ModalDerived from "@/components/Modal";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { baseUrl } from "@/config/APIConstants";
import { useRouter } from "next/router";
import SourceTablesData from "./Table";
import { useAuthentication } from "@/controllers/auth";

interface RowData {
  [key: string]: any;
}

export default function SourcesData() {
  const [sourceData, setSourceData] = useState<any>([]);
  const { location, token }: any = useAuthentication();
  const [data, setdata] = useState<RowData[]>([
    {
      id: "1",
      name: "Source 1",
      npi: "NPI 1",
      createdOn: "2023-06-14T09:00:00.000Z",
      upDatedOn: "2023-06-14T09:00:00.000Z",
    },
    {
      id: "2",
      name: "Source 2",
      npi: "NPI 2",
      createdOn: "2023-06-14T09:00:00.000Z",
      upDatedOn: "2023-06-14T09:00:00.000Z",
    },
    {
      id: "3",
      name: "Source 3",
      npi: "NPI 3",
      createdOn: "2023-06-14T09:00:00.000Z",
      upDatedOn: "2023-06-14T09:00:00.000Z",
    },
    {
      id: "4",
      name: "Source 4",
      npi: "NPI 4",
      createdOn: "2023-06-14T09:00:00.000Z",
      upDatedOn: "2023-06-14T09:00:00.000Z",
    },
  ]);

  const [openAddSourceModel, setAddSourceModel] = useState<any>(false);
  const [errors, setErrors] = useState<any>({});
  const router = useRouter();
  const [formValues, setFormValues] = useState<any>({
    name: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormValues((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const sourceValues = {
      name: formValues.name,
      sourceType: "CONTACT",
      locationID: location?.id,
    };

    //validate errors
    const validationErrors: any = {};

    if (!formValues.name) {
      validationErrors.name = "Required";
    }
    if (!formValues.npi) {
      validationErrors.npi = "Required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSourceData((prevValues: any) => [
      ...sourceData,

      {
        name: formValues?.name,
      },
    ]);

    setdata((prevValues: any) => [
      ...data,
      {
        id: sourceData?.length + 1,
        source_Name: formValues?.name,
        npi: formValues?.npi,
        createdOn: new Date(),
        upDatedOn: new Date(),
      },
    ]);

    setFormValues({
      name: "",
    });

    setErrors({});

    setAddSourceModel(false);
  };

  return (
    <>
      <ModalDerived
        visibility={openAddSourceModel}
        onClose={() => setAddSourceModel(false)}
      >
        <div className="bg-white rounded-lg w-[25vw] pb-[5%] overflow-y-hidden scrollbar-hide">
          <div className="h-[7vh] flex justify-between items-center border-b-[1px]">
            <div>
              <p className="font-noto text-[#1F2229] font-bold md:text-lg ml-14">
                Add New Source
              </p>
            </div>
            <button onClick={() => setAddSourceModel(false)}>
              <AiOutlineClose className="text-gray-800 h-6 w-6 mx-4" />
            </button>
          </div>
          <form className="pt-5 pb-3" onSubmit={handleSubmit}>
            <div className="overflow-hidden">
              <div className="space-y-2   mx-14">
                {/* Add Source */}
                <div className="  py-1">
                  {/* Enter Source Name */}
                  <div>
                    <div className="flex items-center justify-between ">
                      <label
                        className="block text-[#47494b] text-base pt-1 font-semibold"
                        htmlFor=""
                      >
                        Source Name
                      </label>
                    </div>
                    <input
                      type="text"
                      id=""
                      name="name"
                      value={formValues.name}
                      onChange={handleChange}
                      placeholder="Enter Source Name"
                      className="w-full placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2 font-medium bg-transparent focus:bg-transparent border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300"
                    />
                    {errors.name && (
                      <div className="text-red-500 text-xs pt-1">
                        {errors.name}
                      </div>
                    )}
                  </div>

                  {/* Enter NPI */}
                  <div>
                    <div className="flex items-center justify-between pt-2">
                      <label
                        className="block text-[#47494b] text-base pt-1 font-semibold"
                        htmlFor=""
                      >
                        NPI
                      </label>
                    </div>
                    <input
                      type="text"
                      id=""
                      name="npi"
                      value={formValues.npi}
                      onChange={handleChange}
                      placeholder="Enter NPI"
                      className="w-full placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2 font-medium bg-transparent focus:bg-transparent border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300"
                    />
                    {errors.npi && (
                      <div className="text-red-500 text-xs pt-1">
                        {errors.npi}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end items-center pt-6 pb-8 px-14">
              <div className="flex justify-end items-center gap-3">
                <button
                  onClick={() => setAddSourceModel(false)}
                  className="text-sm text-gray-600 font-medium flex justify-start items-center border-[1px] border-gray-300 py-2 px-9 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  onSubmit={handleSubmit}
                  className="text-sm flex justify-start items-center bg-[#0f66cf] py-2 px-9 text-white rounded-md"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </ModalDerived>

      <div className="w-full">
        <div className="flex gap-4 items-center justify-end">
          <button
            onClick={() => setAddSourceModel(true)}
            className="text-xs flex justify-center items-center   bg-newBlue hover:bg-secondary duration-300 m-1 py-2.5 px-5 2xl:px-6 text-white rounded-md "
          >
            Add Sources
          </button>
        </div>
        <div className="  pt-5 pb-10">
          <SourceTablesData data={data} />
        </div>
      </div>
    </>
  );
}
