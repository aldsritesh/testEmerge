import React, { useEffect, useState } from "react";
import TagsTablesData from "./Table";
import ModalDerived from "@/components/Modal";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { baseUrl } from "@/config/APIConstants";
import { useRouter } from "next/router";
import { useAuthentication } from "@/controllers/auth";

interface RowData {
  [key: string]: any;
}

export default function TagsData() {
  const [tagsData, setTagsData] = useState<any>([]);
  const { location, token }: any = useAuthentication();

  useEffect(() => {
    axios
      .get(`${baseUrl}tags/location/${location?.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }: any) => {
        setTagsData(data.tags);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  const [tagData, setTagData] = useState<any>([]);
  const [data, setdata] = useState<RowData[]>([
    {
      id: "1",
      tag_Name: "Tag 1",
      createdOn: "2023-06-14T09:00:00.000Z",
      upDatedOn: "2023-06-14T09:00:00.000Z",
    },
    {
      id: "2",
      tag_Name: "Tag 2",
      createdOn: "2023-06-14T09:00:00.000Z",
      upDatedOn: "2023-06-14T09:00:00.000Z",
    },
    {
      id: "3",
      tag_Name: "Tag 3",
      createdOn: "2023-06-14T09:00:00.000Z",
      upDatedOn: "2023-06-14T09:00:00.000Z",
    },
    {
      id: "4",
      tag_Name: "Tag 4",
      createdOn: "2023-06-14T09:00:00.000Z",
      upDatedOn: "2023-06-14T09:00:00.000Z",
    },
  ]);

  const [openAddTagModel, setAddTagModel] = useState<any>(false);
  const [errors, setErrors] = useState<any>({});
  const router = useRouter();
  const [formValues, setFormValues] = useState<any>({
    content: "",
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

    const tagsValues = {
      content: formValues.content,
      tagType: "CONTACT",
      locationID: location?.id,
    };

    try {
      const response = await axios.post(`${baseUrl}tags`, tagsValues, {
        headers: { Authorization: `Bearer ${token}` },
      });
      // router.reload();
    } catch (error) {
      console.log(error);
    }
    //validate errors
    const validationErrors: any = {};

    if (!formValues.content) {
      validationErrors.content = "Required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setTagData((prevValues: any) => [
      ...tagData,

      {
        content: formValues?.content,
      },
    ]);

    setdata((prevValues: any) => [
      ...data,
      {
        id: tagData?.length + 1,
        tag_Name: formValues?.content,
        createdOn: new Date(),
        upDatedOn: new Date(),
      },
    ]);

    setFormValues({
      content: "",
    });

    setErrors({});

    setAddTagModel(false);
  };

  return (
    <>
      <ModalDerived
        visibility={openAddTagModel}
        onClose={() => setAddTagModel(false)}
      >
        <div className=" bg-white rounded-lg  h-[32vh]     overflow-y-hidden w-[28vw] 2xl:w-[26vw] scrollbar-hide ">
          <div className="h-[8vh] flex justify-between items-start border-b-[1px] pb-4 px-5 pt-5">
            <div>
              <p className="text-gray-800 font-semibold md:text-lg  pl-8 ">
                {" "}
                Add New Tag
              </p>
            </div>
            <button onClick={() => setAddTagModel(false)}>
              <AiOutlineClose className="text-gray-800 h-6 w-6" />
            </button>
          </div>
          <form className="   pt-8 pb-3 " onSubmit={handleSubmit}>
            <div className="overflow-hidden">
              <div className=" ">
                {/*  Add Tags */}
                <div className="mx-14  ">
                  <div className="flex items-center  justify-between ">
                    <label
                      className="block text-[#47494b] text-sm   font-semibold"
                      htmlFor=""
                    >
                      Tag Name
                    </label>
                  </div>
                  <input
                    type="text"
                    id=""
                    name="content"
                    value={formValues.content}
                    onChange={handleChange}
                    placeholder="Enter Tag Name"
                    className=" w-full placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300   "
                  />
                  {errors.content && (
                    <div className=" text-red-500 text-xs pt-1">
                      {errors.content}
                    </div>
                  )}
                  <div className="h-[10vh] flex justify-end items-center  first-letter: pt-3 pb-5  ">
                    <div className=" flex justify-end items-center gap-3">
                      <button
                        onClick={() => setAddTagModel(false)}
                        className="text-sm text-gray-600 font-medium flex justify-start items-center border-[1px] border-gray-300 py-2 px-9 rounded-md  "
                      >
                        Cancel
                      </button>
                      <button
                        onSubmit={handleSubmit}
                        type="submit"
                        className="text-sm flex justify-start items-center bg-[#0f66cf] py-2 px-9 text-white rounded-md  "
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
      </ModalDerived>
      <div className="w-full">
        <div className="flex gap-4 items-center justify-end">
          <button
            onClick={() => setAddTagModel(true)}
            className="text-xs flex justify-center items-center   bg-newBlue hover:bg-secondary duration-300 m-1 py-2.5 px-5 2xl:px-6 text-white rounded-md "
          >
            Add Tags
          </button>
        </div>
        <div className="  pt-5 pb-10">
          {/* <TagsTablesData data={data} /> */}
          <TagsTablesData data={tagsData} />
        </div>
      </div>
    </>
  );
}
