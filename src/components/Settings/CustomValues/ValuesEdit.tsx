import { baseUrl, userID } from "@/config/APIConstants";
import { useAuthentication } from "@/controllers/auth";
import { Close } from "@mui/icons-material";
import axios from "axios";
import { useRouter } from "next/router";

import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function ValueEdit({ onClose, id, value, key }: any) {
  // console.log("new edit table data click ", id, value, key);
  const [errors, setErrors] = useState<any>({});
  const { location, token }: any = useAuthentication();
  const [formValues, setFormValues] = useState<any>({
    value: value,
    addedOn: "",
    key: "key",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormValues((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleStore = async (values: any) => {
    // const data = await axios.post(`${baseUrl}locations`, values, {
    //   headers: { Authorization: `Bearer ${token}` },
    // });
    // console.log("stored", data);
  };
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios
      .put(
        `${baseUrl}custom-values/${id}`,
        {
          addedOn: "2023-09-07T06:04:03.630732Z",
          folderName: "CONTACT",
          id: userID,
          key: formValues.key,
          locationID: location?.id,
          ownerUserID: "9b36de41-f652-4bf2-ba38-7a96103f09a3",
          updatedOn: formValues.addedOn,
          value: formValues.value,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(({ response }: any) => {
        router.reload();
        console.log("response updated here -------------->", response);
      })
      .catch((error: any) => {
        console.log("new error here", error);
      });
    e.preventDefault();

    console.log(formValues);
    const validationErrors: any = {};

    if (!formValues.value.trim()) {
      validationErrors.value = "Required";
    }
    if (!formValues.addedOn.trim()) {
      validationErrors.addedOn = "Required";
    }
    if (!formValues.key.trim()) {
      validationErrors.key = "Required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    handleStore(formValues);

    // axios
    //   .put(
    //     `${baseUrl}custom-values/9e878802-08f6-47c4-82da-1f7c6982985a`,
    //     {
    //       //   value: "testnew11",
    //       //   addedOn: "22/8/2023",
    //       //   key: "contact.test11",
    //       addedOn: "2023-09-07T06:04:03.630732Z",
    //       folderName: "CONTACT",
    //       id: "9e878802-08f6-47c4-82da-1f7c6982985a",
    //       key: "contact.test111",
    //       locationID: "f209ee50-96e6-4ca2-9eb5-80b93d31591f",
    //       ownerUserID: "9b36de41-f652-4bf2-ba38-7a96103f09a3",
    //       updatedOn: "2023-09-07T06:04:03.630733Z",
    //       value: "test update21111",
    //     },
    //     {
    //       headers: { Authorization: `Bearer ${token}` },
    //     }
    //   )
    //   .then(({ response }: any) => {
    //     // array1 = [data.tasks];
    //     console.log("response updated here -------------->", response);
    //   })
    //   .catch((error: any) => {
    //     console.log("new error here", error);
    //   });
    setFormValues({
      value: "",
      addedOn: "",
      key: "",
    });

    setErrors({});

    onClose();
  };

  //   useEffect(() => {
  //     axios
  //       .put(
  //         `${baseUrl}custom-values/location/f209ee50-96e6-4ca2-9eb5-80b93d31591f`,  {
  //             value: "testnew",
  //     addedOn: "22/8/2023",
  //     key: "contact.test",
  //           } ,
  //         {
  //           headers: { Authorization: `Bearer ${token}` },
  //         }
  //       )
  //       .then(({ data }: any) => {
  //         setArr(data);
  //         // array1 = [data.tasks];
  //         console.log("firsvalue data table", data);
  //       })
  //       .catch((error: any) => {
  //         console.log("", error);
  //       });
  //   }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className="   bg-white h-[32vh] w-[40vw] overflow-y-scroll scrollbar-hide  rounded-md">
        <div className="flex justify-between px-4">
          <h1 className="  text-lg text-gray-600  font-bold underline pt-5">
            Edit{" "}
          </h1>
          <span onClick={onClose}>
            <AiOutlineClose className="text-gray-800 h-6 w-6 mt-5" />
          </span>
        </div>

        <div className="py-2 w-full  gap-4 items-center px-4">
          <div className="">
            <label
              htmlFor=""
              className="block text-[#47494b] text-sm pt-1 font-semibold"
            >
              Value Name
            </label>
            <input
              type="text"
              name="value"
              value={formValues.value}
              onChange={handleChange}
              placeholder="Enter Value Name"
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-0.5   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300"
            />
            {errors.value && (
              <div className="mb-3 text-red-500 text-xs  ">{errors.value}</div>
            )}
          </div>

          <div className="">
            <label
              htmlFor=""
              className="block text-[#47494b] text-sm pt-1 font-semibold"
            >
              Unique Key
            </label>
            <input
              type="text"
              name="key"
              value={formValues.key}
              onChange={handleChange}
              placeholder="Enter Unique Key"
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-0.5   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300"
            />
            {errors.key && (
              <div className=" mb-3 text-red-500 text-xs  ">{errors.key}</div>
            )}
          </div>
          {/* <div className="">
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
      <div className="h-[10vh] flex justify-between items-center border-t-[1px] pb-4 mt-1.5 px-5">
        <span
          onClick={onClose}
          className="border-[1px] rounded-md px-5 py-2 border-gray-300 text-[12px] font-medium"
        >
          Cancel
        </span>
        {/* <span className="border-[1px] rounded-md px-5 py-2 border-gray-300 text-[12px] font-medium">
          Cancel
        </span> */}
        <button
          onSubmit={handleSubmit}
          className="text-white bg-newBlue rounded-md px-5 py-2  text-[12px] font-medium"
        >
          Save
        </button>
      </div>
    </form>
  );
}
