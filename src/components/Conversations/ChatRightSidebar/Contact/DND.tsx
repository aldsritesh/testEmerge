import React, { useState } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
export default function DND() {
  const [formData, setFormData] = useState<any>({
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
    console.log("Checkbox values:", formData.checkboxValues);
  };

  return (
    <div className=" ">
      <form onSubmit={handleSubmit} className="pt-0.5">
        <div className="px-2 flex flex-wrap pb-2">
          <div className="w-full flex justify-between items-center rounded-lg">
            <p
              className={`  text-gray-800 text-[12px] font-bold  tracking-wide `}
            >
              DND all Channels
            </p>
            <input
              type="checkbox"
              value="All DND"
              checked={formData.checkboxValues.includes("All DND")}
              onChange={handleCheckboxChange}
              className="border-gray-400 checkbox checkbox-xs checkbox-info rounded-sm bg-white"
            />
          </div>
          <div className="flex flex-col w-full border-opacity-50">
            <div className="divider text-gray-800 text-[11px] font-medium  tracking-wide ">
              OR
            </div>
          </div>

          <div className="w-full flex justify-between items-center rounded-lg">
            <div className="flex justify-start items-center mb-1.5  ">
              <MdEmail className="text-[#0077F2] mr-1" />

              <p className="text-gray-800 text-[12px] font-bold  tracking-wide">
                Emails
              </p>
            </div>
            <input
              type="checkbox"
              value="Emails"
              checked={formData.checkboxValues.includes("Emails")}
              onChange={handleCheckboxChange}
              className="border-gray-400 checkbox checkbox-xs checkbox-info rounded-sm bg-white"
            />
          </div>

          <div className="w-full flex justify-between items-center rounded-lg my-2">
            <div className="flex justify-start items-center mb-1.5 ">
              <div className="] mr-1">
                <MdEmail className="text-[#0BAE86]" />
              </div>
              <p className="text-gray-800 text-[12px] font-bold  tracking-wide">
                Text Messages
              </p>
            </div>
            <input
              type="checkbox"
              value="Text Messages"
              checked={formData.checkboxValues.includes("Text Messages")}
              onChange={handleCheckboxChange}
              className="border-gray-400 checkbox checkbox-xs checkbox-info rounded-sm bg-white"
            />
          </div>

          <div className="w-full flex justify-between items-center rounded-lg">
            <div className="flex justify-start items-center mb-1.5  ">
              <div className="  mr-1">
                <MdEmail className="text-[#0077F2]" />
              </div>
              <p className="text-gray-800 text-[12px] font-bold  tracking-wide">
                Calls and Voicemails
              </p>
            </div>
            <input
              type="checkbox"
              value="Calls and Voicemails"
              checked={formData.checkboxValues.includes("Calls and Voicemails")}
              onChange={handleCheckboxChange}
              className="border-gray-400 checkbox checkbox-xs checkbox-info rounded-sm bg-white"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
