import { nameTrigger } from "@/atoms/nameTrigger";
import React, { useState } from "react";
import { MdUpload } from "react-icons/md";
import { useRecoilState } from "recoil";

export default function VoiceMail({ onDataStore, onClose }: any) {
  const [actionData, setActionData] = useRecoilState(nameTrigger);

  const [formValues, setFormValues] = useState<any>({
    actionName: actionData,
  });
  const [errors, setErrors] = useState<any>({});
  const [attachment, setAttachment] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormValues((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Validate form fields
    const validationErrors: any = {};

    if (!formValues.actionName.trim()) {
      validationErrors.actionName = "Action name is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Form submission logic goes here
    // You can access the form field values and attachment in the formValues state

    // Reset form after successful submission
    setFormValues({
      actionName: "",
    });
    setErrors({});
    // onDataStore(formValues.actionName);

    onDataStore(formValues.actionName, formValues);
  };

  return (
    <div>
      <div className=" h-[75vh] 2xl:h-[80vh] overflow-y-scroll scrollbar-hide">
        <form onSubmit={handleSubmit} className="flex flex-wrap px-2  ">
          <div className="w-full mt-4">
            <label className="w-full mb-2 text-sm text-gray-600 font-semibold fontStrawFord">
              Action Name
            </label>
            <input
              type="text"
              name="actionName"
              value={formValues.actionName}
              onChange={handleChange}
              placeholder="Voice Mail"
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 rounded-md mt-2 mb-2 py-3.5 font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            />
            {errors.actionName && (
              <span className="mb-5 error text-red-500 ">
                {errors.actionName}
              </span>
            )}
          </div>

          <label className="w-full mt-2 text-sm text-gray-600 font-semibold fontStrawFord">
            Drop-Your-File
          </label>
          {attachment == false ? (
            <button
              onClick={() => {
                setAttachment(true);
              }}
              className="fontStrawFord flex items-center justify-center bg-[#ed754b] text-white px-6 py-1 w-2/4 rounded font-bold mt-2 hover:bg-[#ed825c]"
            >
              {" "}
              <MdUpload />
              Upload File
            </button>
          ) : (
            <input
              type="file"
              name="attachment"
              onChange={(e: any) =>
                setFormValues((prevValues: any) => ({
                  ...prevValues,
                  attachment: e.target.files[0],
                }))
              }
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 rounded-md mt-2 mb-2 py-3.5 font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            />
          )}
        </form>
      </div>
      <div className="flex justify-end items-end  py-2 px-4">
        <button
          onClick={onClose}
          className="border-2 mr-5 fontStrawFord border-OrangeBuilder rounded-md flex justify-center items-center px-8 py-1.5 text-OrangeBuilder"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          type="submit"
          className="bg-OrangeBuilder fontStrawFord rounded-md flex justify-center items-center px-8 py-2 text-white"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
