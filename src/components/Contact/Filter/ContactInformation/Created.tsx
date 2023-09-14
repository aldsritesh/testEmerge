import { DateRangePicker } from "@mui/lab";
import "react-datepicker/dist/react-datepicker.css";
import { MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
export default function Created({ updateData, onClose, actionData }: any) {
  const radioData = [
    { title: "More Than", value: "moreThan" },
    { title: "Less Than", value: "lessThan" },
    { title: "Range", value: "range" },
  ];

  const [formValues, setFormValues] = useState<any>({
    waitFor: "",
    createdRange: "",
    moreThanNum: "",
    moreThanSelect: "",
    lessThanSelect: "",
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
      createdRange: "",
      moreThanNum: "",
      lessThanSelect: "",
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
              Filter Created
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
                  {formValues.waitFor === "moreThan" ? (
                    <>
                      {mainData.title === "More Than" && (
                        <div className="flex items-center ">
                          <TextField
                            variant="outlined"
                            type="number"
                            name="moreThanNum"
                            onChange={handleChange}
                            value={formValues.moreThanNum}
                            className="px-2 rounded-lg  mb-2 py-1 text-sm font-medium bg-transparent focus:bg-transparent w-1/4 placeholder-dark border-[1px] border-gray-400 text-space focus:outline-none focus:border-gray-300 text-black"
                          />
                          <Select
                            name="moreThanSelect"
                            onChange={handleChange}
                            className="border-none outline-none rounded-lg  mb-2  text-sm font-medium bg-transparent focus:bg-transparent w-3/4 placeholder-dark   text-space focus:outline-none focus:border-gray-300 text-black"
                          >
                            <MenuItem value="">Select </MenuItem>
                            <MenuItem value="min">Minutes Ago</MenuItem>
                            <MenuItem value="hours">Hours ago</MenuItem>
                            <MenuItem value="days">Days Ago</MenuItem>
                            <MenuItem value="months">Months Ago</MenuItem>
                            <MenuItem value="years">Years Ago</MenuItem>
                          </Select>
                        </div>
                      )}
                    </>
                  ) : formValues.waitFor === "lessThan" ? (
                    <>
                      {mainData.title === "Less Than" && (
                        <div className="flex items-center">
                          <TextField
                            variant="outlined"
                            type="number"
                            name="lessThanNum"
                            onChange={handleChange}
                            value={formValues.lessThanNum}
                            className="px-2 rounded-lg  mb-2 py-1 text-sm font-medium bg-transparent focus:bg-transparent w-1/4 placeholder-dark border-[1px] border-gray-400 text-space focus:outline-none focus:border-gray-300 text-black"
                          />
                          <Select
                            name="lessThanSelect"
                            onChange={handleChange}
                            className="border-none outline-none rounded-lg  mb-2  text-sm font-medium bg-transparent focus:bg-transparent w-3/4 placeholder-dark   text-space focus:outline-none focus:border-gray-300 text-black"
                          >
                            <MenuItem value="">Select </MenuItem>
                            <MenuItem value="min">Minutes Ago</MenuItem>
                            <MenuItem value="hours">Hours ago</MenuItem>
                            <MenuItem value="days">Days Ago</MenuItem>
                            <MenuItem value="months">Months Ago</MenuItem>
                            <MenuItem value="years">Years Ago</MenuItem>
                          </Select>
                        </div>
                      )}
                    </>
                  ) : (
                    ""
                  )}
                  {/* {formValues.waitFor === "range" ? (
                    <>
                      {mainData?.title == "Range" && (
                         <LocalizationProvider dateAdapter={AdapterDayjs}>
                         <DemoContainer components={['DateRangePicker']}>
                           <DateRangePicker localeText={{ start: 'Check-in', end: 'Check-out' }} />
                         </DemoContainer>
                       </LocalizationProvider>
                        <DateRangePicker
                          name="createdRange"
                          className={
                            "w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
                          }
                          selected={formValues.createdRange}
                          onChange={(e: any) => {
                            setFormValues((prevValues: any) => ({
                              ...formValues,
                              createdRange: e,
                            }));
                          }}
                        />
                      )}
                    </>
                  ) : (
                    ""
                  )} */}
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
