import { useState, useContext } from "react";
import { BsQuestionCircleFill } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";

import { MenuItem, Select } from "@mui/material";
import { formDataCtx } from "./AddProfile";
const days = [
  { div: "S", day: "Sunday" },
  { div: "M", day: "Monday" },
  { div: "T", day: "Tuesday" },
  { div: "W", day: "Wednesday" },
  { div: "T", day: "Thursday" },
  { div: "F", day: "Friday" },
  { div: "S", day: "Saturday" },
];

export default function EditUserAvailability({ onClose, handleStore }: any) {
  const [selectedDays, setSelectedDays] = useState<any[]>([]);
  const [currentDay, setCurrentDay] = useState<number | null>(null);
  const { formDataValues, setFormDataValues } = useContext(formDataCtx);
  const [errors, setErrors] = useState<any>({});
  const [formValues, setFormValues] = useState<any>({
    meetingLocation: "",
    location: "",
    timeZone: "",
    selectedDays: [],
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormValues((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));

    console.log("chnages", formValues);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    //validate errors
    const validationErrors: any = {};

    if (!formValues.meetingLocation) {
      validationErrors.meetingLocation = "Required";
    }

    if (!formValues.location) {
      validationErrors.location = "Meeting Location is Required";
    }

    if (!formValues.timeZone) {
      validationErrors.timeZone = " Required";
    }

    // set errors
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // reset after submission
    setFormValues({
      meetingLocation: "",
      location: "",
      timeZone: "",
      selectedDays: [],
    });
    setErrors({});
    setFormDataValues((prev: any) => ({ ...prev, ...formValues }));
    handleStore();
    onClose();
  };

  const toggleDaySelection = (dayIndex: any) => {
    if (selectedDays.includes(dayIndex)) {
      setSelectedDays(selectedDays.filter((index) => index !== dayIndex));
    } else {
      setSelectedDays([...selectedDays, dayIndex]);
    }

    setFormValues((prevValues: any) => ({
      ...prevValues,
      selectedDays: selectedDays,
    }));
  };
  console.log("days", selectedDays);

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="  bg-white h-[60vh] overflow-y-scroll scrollbar-hide px-4">
        <div className="pb-3">
          {/* Meeting Location */}
          <div className="py-1 px-4 ">
            <label
              htmlFor=""
              className="block text-[#47494b] text-sm py-1 font-semibold"
            >
              Meeting Location
            </label>
            <Select
              name="meetingLocation"
              value={formValues.meetingLocation}
              onChange={handleChange}
              className="border-none ouline-none rounded-lg shadow-none mt-2 mb-2  text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark   text-space focus:outline-none focus:border-gray-300 text-black"
            >
              <MenuItem value="">Select</MenuItem>
              <MenuItem value="L1">Location 1</MenuItem>
              <MenuItem value="L2">Location 2</MenuItem>
            </Select>
            {errors.meetingLocation && (
              <div className="mb-3 text-red-500 text-xs">
                {errors.meetingLocation}
              </div>
            )}
          </div>

          {formValues.meetingLocation ? (
            <div className="px-4 ">
              <input
                type="text"
                name="location"
                value={formValues.location}
                onChange={handleChange}
                placeholder="Meeting Location"
                className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-0.5   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300"
              />
              {errors.location && (
                <div className="mb-3 text-red-500 text-xs">
                  {errors.location}
                </div>
              )}
            </div>
          ) : (
            ""
          )}

          {/*Time Zone */}
          <div className=" px-4 ">
            <label
              htmlFor=""
              className="block text-[#47494b] text-sm py-1 font-semibold"
            >
              Time Zone
            </label>
            <Select
              name="timeZone"
              value={formValues.timeZone}
              onChange={handleChange}
              className="border-none ouline-none rounded-lg shadow-none mt-2 mb-2  text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark   text-space focus:outline-none focus:border-gray-300 text-black"
            >
              <MenuItem value="">Select</MenuItem>
              <MenuItem value="TZ">TZ 1</MenuItem>
              <MenuItem value="TZ">TZ 2</MenuItem>
            </Select>
            {errors.timeZone && (
              <div className="mb-3 text-red-500 text-xs">{errors.timeZone}</div>
            )}
          </div>

          {/* Available days */}
          <h1 className=" py-2 px-4 block text-[#47494b] text-sm  font-semibold">
            Available Hours
          </h1>
          <div className=" px-4 flex gap-3">
            {days.map((item, index) => (
              <div
                key={index}
                className={`w-10 h-10 flex items-center justify-center font-semibold rounded ${
                  selectedDays.includes(index)
                    ? "bg-newBlue text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => toggleDaySelection(index)}
                style={{ cursor: "pointer" }}
              >
                {item.div}
              </div>
            ))}
          </div>

          <div className=" px-4 pt-5 w-full">
            {selectedDays.length > 0 && (
              <div className="flex justify-start items-center flex-wrap">
                {selectedDays.map((dayIndex, index) => (
                  <div
                    className="flex py-1 pl-1 pr-4 border-b border-r w-full gap-2"
                    key={index}
                  >
                    <div className="w-1/2">
                      <label
                        htmlFor=""
                        className="  text-[#47494b] text-xs py-2 font-semibold flex justify-between"
                      >
                        {days[dayIndex].day}
                        <span className="text-blue-400">+ hours</span>
                      </label>
                      <input
                        type="time"
                        onChange={handleChange}
                        name="fromTime"
                        value={formValues.fromTime}
                        className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-2 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
                      />
                    </div>
                    <div className="w-1/2">
                      <label
                        htmlFor=""
                        className="  text-blue-400 text-xs py-2 font-semibold flex justify-end"
                      >
                        Apply All
                      </label>
                      <input
                        type="time"
                        onChange={handleChange}
                        name="toTime"
                        value={formValues.toTime}
                        className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-2 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="h-[10vh] flex justify-between items-center border-t-[1px] pb-4 mt-1.5 px-5">
        <button className="border-[1px] rounded-md px-5 py-2 border-gray-300 text-[12px] font-medium">
          Cancel
        </button>
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
