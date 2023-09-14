import { MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function BirthDate({ updateData, onClose, actionData }: any) {
  const radioData = [
    { title: "Is Empty", value: "isEmpty" },
    { title: "Is Not Empty", value: "isNotEmpty" },
    { title: "Today", value: "today" },
    { title: "This week", value: "thisWeek" },
    { title: "This Month", value: "thisMonth" },
    { title: "In Month", value: "inMonth" },
    { title: "On Date", value: "onDate" },
  ];

  const [formValues, setFormValues] = useState<any>({
    waitFor: "",
    inMonthBirthDate: "",
    dob: "",
  });
  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormValues((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setFormValues({
      waitFor: "",
      inMonthBirthDate: "",
      dob: "",
    });
    setErrors({});
    updateData(formValues);
    onClose();
  };

  return (
    <div>
      <div className="h-[75vh] 2xl:h-[75vh] overflow-y-scroll scrollbar-hide">
        <form onSubmit={handleSubmit} className="flex flex-wrap px-2  ">
          <div className="w-full mt-4">
            <p className="w-full mb-2 text-sm text-gray-600 font-semibold fontStrawFord">
              Filter BirthDate
            </p>

            <ul className="pt-2 ">
              {radioData?.map((mainData: any, mainIndex: any) => (
                <li className="mb-1" key={mainIndex}>
                  <div className="flex justify-start items-center py-2">
                    <input
                      type="radio"
                      name="waitFor"
                      className="radio checked:bg-blue-500"
                      onChange={() =>
                        setFormValues((prevValues: any) => ({
                          ...prevValues,
                          waitFor: mainData?.value,
                        }))
                      }
                    />
                    <p
                      className={`w-full  text-sm text-gray-600 font-semibold fontStrawFord ml-2 mt-1 `}
                    >
                      {mainData?.title}
                    </p>
                  </div>
                  {formValues.waitFor === "inMonth" ? (
                    <>
                      {mainData?.title == "In Month" && (
                        <TextField
                          variant="outlined"
                          placeholder="Birth Date"
                          onChange={handleChange}
                          type="text"
                          name="inMonthBirthDate"
                          value={formValues.inMonthBirthDate}
                          className="px-2 rounded-lg  mb-2 py-1 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark border-[1px] border-gray-400 text-space focus:outline-none focus:border-gray-300 text-black"
                        />
                      )}
                    </>
                  ) : formValues.waitFor === "onDate" ? (
                    <>
                      {mainData?.title == "On Date" && (
                        <DatePicker
                          name="dob"
                          className={
                            "w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
                          }
                          selected={formValues.dob}
                          placeholderText="Select DOB"
                          onChange={(e: any) => {
                            setFormValues((prevValues: any) => ({
                              ...formValues,
                              dob: e,
                            }));
                          }}
                        />
                      )}
                    </>
                  ) : (
                    ""
                  )}
                </li>
              ))}
            </ul>
          </div>
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
