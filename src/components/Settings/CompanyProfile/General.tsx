import React, { useState } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
export default function General() {
  const [formData, setFormData] = useState<any>({
    inputValue1: "",
    inputValue2: "",
    checkboxValues: [],
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: any) => {
    const { value, checked } = e.target;
    setFormData((prevData: any) => {
      if (checked) {
        return {
          ...prevData,
          checkboxValues: [...prevData.checkboxValues, value],
        };
      } else {
        return {
          ...prevData,
          checkboxValues: prevData.checkboxValues.filter(
            (item: any) => item !== value
          ),
        };
      }
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Input value:", formData.inputValue1);
    console.log("Input value:", formData.inputValue2);
    console.log("Checkbox values:", formData.checkboxValues);
  };

  return (
    <div className="border rounded-lg mt-5">
      <div className="flex justify-between items-center border-b px-3 py-3">
        <p className="text-[#47494b] text-base font-semibold">General</p>
      </div>
      <form onSubmit={handleSubmit} className=" pt-5 pb-3">
        <div className="px-4 flex flex-wrap pb-6">
          <div className="w-full flex justify-start items-center pt-5  mb-1   rounded-lg">
            <input
              type="checkbox"
              value="Allow Duplicate Contact"
              checked={formData.checkboxValues.includes(
                "Allow Duplicate Contact"
              )}
              onChange={handleCheckboxChange}
              className="border-gray-400 checkbox checkbox-sm checkbox-info"
            />

            <p
              className={` fontStrawFord text-gray-600 text-[11px] font-medium  tracking-wide ml-2   `}
            >
              Allow Duplicate Contact
            </p>
          </div>
          <div className="w-full flex justify-start items-center pt-5  mb-1   rounded-lg">
            <input
              type="checkbox"
              value="Allow Duplicate Opportunity"
              checked={formData.checkboxValues.includes(
                "Allow Duplicate Opportunity"
              )}
              onChange={handleCheckboxChange}
              className="border-gray-400 checkbox checkbox-sm checkbox-info"
            />

            <p
              className={` fontStrawFord text-gray-600 text-[11px] font-medium  tracking-wide ml-2   `}
            >
              Allow Duplicate Opportunity
            </p>
          </div>
          <div className="w-full flex justify-start items-center pt-5  mb-1   rounded-lg">
            <input
              type="checkbox"
              value="Merge Facebook Contacts By Name"
              checked={formData.checkboxValues.includes(
                "Merge Facebook Contacts By Name"
              )}
              onChange={handleCheckboxChange}
              className="border-gray-400 checkbox checkbox-sm checkbox-info"
            />

            <div className="flex justify-start items-center ">
              <p
                className={` fontStrawFord text-gray-600 text-[11px] font-medium  tracking-wide ml-2   `}
              >
                Merge Facebook Contacts By Name
              </p>
              <AiOutlineExclamationCircle className="text-[#47494b] text-sm ml-2 mb-1" />
            </div>
          </div>
          <div className="w-full flex justify-start items-center pt-5  mb-1   rounded-lg">
            <input
              type="checkbox"
              value="Disabled Contact Timezone"
              checked={formData.checkboxValues.includes(
                "Disabled Contact Timezone"
              )}
              onChange={handleCheckboxChange}
              className="border-gray-400 checkbox checkbox-sm checkbox-info"
            />

            <p
              className={` fontStrawFord text-gray-600 text-[11px] font-medium  tracking-wide ml-2   `}
            >
              Disabled Contact Timezone
            </p>
          </div>{" "}
          <div className="w-full flex justify-start items-center pt-5  mb-1   rounded-lg">
            <input
              type="checkbox"
              value="Mark Email as Invalid due to Hard Bounce"
              checked={formData.checkboxValues.includes(
                "Mark Email as Invalid due to Hard Bounce"
              )}
              onChange={handleCheckboxChange}
              className="border-gray-400 checkbox checkbox-sm checkbox-info"
            />

            <div className="flex justify-start items-center ">
              <p
                className={` fontStrawFord text-gray-600 text-[11px] font-medium  tracking-wide ml-2   `}
              >
                Mark Email as Invalid due to Hard Bounce
              </p>
              <AiOutlineExclamationCircle className="text-[#47494b] text-sm ml-2 mb-1" />
            </div>
          </div>
          <div className="w-full flex justify-start items-center pt-5  mb-1   rounded-lg">
            <input
              type="checkbox"
              value="Validate Phone numbers"
              checked={formData.checkboxValues.includes(
                "Validate Phone numbers"
              )}
              onChange={handleCheckboxChange}
              className="border-gray-400 checkbox checkbox-sm checkbox-info"
            />

            <div className="flex justify-start items-center ">
              <p
                className={` fontStrawFord text-gray-600 text-[11px] font-medium  tracking-wide ml-2   `}
              >
                Validate Phone numbers when first SMS is sent to a new contact
              </p>
              <AiOutlineExclamationCircle className="text-[#47494b] text-sm ml-2 mb-1" />
            </div>
          </div>
          <div className="w-full flex justify-start items-center pt-5  mb-1   rounded-lg">
            <input
              type="checkbox"
              value="Make SMS complaint by adding opt out message"
              checked={formData.checkboxValues.includes(
                "Make SMS complaint by adding opt out message"
              )}
              onChange={handleCheckboxChange}
              className="border-gray-400 checkbox checkbox-sm checkbox-info"
            />

            <div className="flex justify-start items-center ">
              <p
                className={` pr-2 fontStrawFord text-gray-600 text-[11px] font-medium  tracking-wide ml-2   `}
              >
                Make SMS complaint by adding opt out message
              </p>
              <div className="flex justify-start items-center ">
                <span className="pr-1"> &#123; </span>
                <AiOutlineExclamationCircle className="text-[#47494b] text-sm " />
                <p className="text-newBlue text-xs"> How does it work </p>
                <span className="pl-1"> &#125; </span>
              </div>
            </div>
          </div>
          <div className="w-full relative">
            <input
              type="text"
              value={formData.inputValue1}
              onChange={handleInputChange}
              name="inputValue1"
              placeholder="Reply STOP to unsubscribe"
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-gray-100 focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            />{" "}
            <p className="text-newBlue text-xs font-medium absolute top-5 right-5">
              {" "}
              Customize{" "}
            </p>
          </div>
          <div className="w-full flex justify-start items-center pt-2  mb-3   rounded-lg">
            <input
              type="checkbox"
              value="Make SMS complaint by adding a sender information"
              checked={formData.checkboxValues.includes(
                "Make SMS complaint by adding a sender information"
              )}
              onChange={handleCheckboxChange}
              className="border-gray-400 checkbox checkbox-sm checkbox-info"
            />

            <div className="flex justify-start items-center ">
              <p
                className={` pr-2 fontStrawFord text-gray-600 text-[11px] font-medium  tracking-wide ml-2   `}
              >
                Make SMS complaint by adding a sender information
              </p>
              <div className="flex justify-start items-center ">
                <span className="pr-1"> &#123; </span>
                <AiOutlineExclamationCircle className="text-[#47494b] text-sm " />
                <p className="text-newBlue text-xs"> How does it work </p>
                <span className="pl-1"> &#125; </span>
              </div>
            </div>
          </div>
          <div className="w-full relative">
            <input
              type="text"
              name="inputValue2"
              value={formData.inputValue2}
              onChange={handleInputChange}
              placeholder="Thanks HealthSource of Pearland"
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-gray-100 focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            />
            <p className="text-newBlue text-xs font-medium absolute top-5 right-5">
              {" "}
              Customize{" "}
            </p>
          </div>
        </div>
        <div className="w-full flex justify-end items-end mt-3 px-4 border-t pt-4">
          <button
            type="submit"
            className="  bg-newBlue font-medium py-2 text-sm  rounded-lg px-5 text-white"
          >
            Update Information
          </button>
        </div>
      </form>
    </div>
  );
}
