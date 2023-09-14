import React, { useState } from "react";
import { BsQuestionCircleFill } from "react-icons/bs";

import { MenuItem, OutlinedInput, Select, TextField } from "@mui/material";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
const days = [
  { key: "0", div: "S", day: "Sunday" },
  { key: "1", div: "M", day: "Monday" },
  { key: "2", div: "T", day: "Tuesday" },
  { key: "3", div: "W", day: "Wednesday" },
  { key: "4", div: "T", day: "Thursday" },
  { key: "5", div: "F", day: "Friday" },
  { key: "6", div: "S", day: "Saturday" },
];

export default function Availability({
  onClose,
  handleNewTab,
  handleStoreFormData,
}: any) {
  const [select, setSelect] = useState(0);
  const [selectedDays, setSelectedDays] = useState<any[]>([]);
  const [currentDay, setCurrentDay] = useState<number | null>(null);
  const [formValues, setFormValues] = useState<any>({
    slotDuration: "",
    slotInterval: "",
    buffer: "",
    appointmentsPerSlot: "",
    appointmentsPerDay: "",
    minScheduleNotice: "",
    duration: "",
    dateRange: "",
    dateDuration: "",
    officeHour: "standard",
    fromTime: "",
    toTime: "",
    recAppointment: "",
    image: null,
  });
  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormValues((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Validate form fields
    console.log(formValues);

    const validationErrors: any = {};

    if (!formValues.slotDuration.trim()) {
      validationErrors.slotDuration = "required";
    }
    if (!formValues.slotInterval.trim()) {
      validationErrors.slotInterval = "required";
    }
    if (!formValues.buffer.trim()) {
      validationErrors.buffer = "required";
    }
    if (!formValues.appointmentsPerSlot.trim()) {
      validationErrors.appointmentsPerSlot = "required";
    }
    if (!formValues.appointmentsPerDay.trim()) {
      validationErrors.appointmentsPerDay = "required";
    }
    if (!formValues.minScheduleNotice.trim()) {
      validationErrors.minScheduleNotice = "required";
    }
    if (!formValues.duration.trim()) {
      validationErrors.duration = "required";
    }
    if (!formValues.dateRange.trim()) {
      validationErrors.dateRange = "required";
    }
    if (!formValues.dateDuration.trim()) {
      validationErrors.dateDuration = "required";
    }
    // if (!formValues.officeHour.trim()) {
    //   validationErrors.officeHour = "required";
    // }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setFormValues({
      slotDuration: "",
      slotInterval: "",
      buffer: "",
      appointmentsPerSlot: "",
      appointmentsPerDay: "",
      minScheduleNotice: "",
      duration: "",
      dateRange: "",
      dateDuration: "",
      officeHour: "standard",
      fromTime: "",
      toTime: "",
      recAppointment: "",
      image: null,
    });

    setErrors({});

    handleStoreFormData(formValues);
    handleNewTab();
  };

  return (
    <div className="mx-6 w-[95%]">
      <div className="px-4 pt-5">
        <h1 className="text-[#47494b] text-md font-semibold">
          Appointment Slot Setting
        </h1>
        <p className="text-gray-400 text-sm">
          Configure duration and intervals for the appoointment
        </p>
      </div>

      <form action="" onSubmit={handleSubmit}>
        <div className="px-4 mt-5">
          <div>
            <div className="py-2 grid grid-cols-3 gap-3 ">
              <div>
                <label
                  htmlFor=""
                  className="block text-[#47494b] text-sm   font-semibold"
                >
                  Slot Duration
                </label>

                <Select
                  placeholder="Contact Changed"
                  onChange={handleChange}
                  name="slotDuration"
                  value={formValues.slotDuration}
                  className="border-none ouline-none rounded-lg shadow-none mt-2 mb-2  text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark   text-space focus:outline-none focus:border-gray-300 text-black"
                >
                  <MenuItem value="">Select</MenuItem>
                  <MenuItem value="30min">30 Minutes</MenuItem>
                  <MenuItem value="20min">20 Minutes</MenuItem>
                  <MenuItem value="10min">10 Minutes</MenuItem>
                </Select>
                {errors.slotDuration && (
                  <div className="mb-2 text-red-500 text-[12px]">
                    {errors.slotDuration}
                  </div>
                )}
              </div>

              <div>
                <label
                  htmlFor=""
                  className="block text-[#47494b] text-sm    font-semibold"
                >
                  Slot Interval
                </label>
                <Select
                  placeholder="Contact Changed"
                  onChange={handleChange}
                  name="slotInterval"
                  value={formValues.slotInterval}
                  className="border-none ouline-none rounded-lg shadow-none mt-2 mb-2  text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark   text-space focus:outline-none focus:border-gray-300 text-black"
                >
                  <MenuItem value="">Select</MenuItem>
                  <MenuItem value="min1">30 Minutes</MenuItem>
                  <MenuItem value="min2">20 Minutes</MenuItem>
                  <MenuItem value="min3">10 Minutes</MenuItem>
                </Select>
                {errors.slotInterval && (
                  <div className="mb-2 text-red-500 text-[12px]">
                    {errors.slotInterval}
                  </div>
                )}
              </div>

              <div className="w-full">
                <label
                  htmlFor=""
                  className="block text-[#47494b] text-sm   font-semibold "
                >
                  Buffer Duration between appointment
                </label>
                <input
                  type="number"
                  onChange={handleChange}
                  name="buffer"
                  value={formValues.buffer}
                  className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3.5 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
                  placeholder="Duration in Minutes"
                ></input>
                {errors.buffer && (
                  <div className="mb-2 text-red-500 text-[12px]">
                    {errors.buffer}
                  </div>
                )}
              </div>

              <div>
                <label
                  htmlFor=""
                  className="  flex items-center gap-2 text-[#47494b] text-sm   font-semibold"
                >
                  Appointments per slot
                  <BsQuestionCircleFill className="text-xs " />
                </label>
                <input
                  onChange={handleChange}
                  name="appointmentsPerSlot"
                  value={formValues.appointmentsPerSlot}
                  className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
                  placeholder="Appointments per slot"
                />
                {errors.appointmentsPerSlot && (
                  <div className="mb-2 text-red-500 text-[12px]">
                    {errors.appointmentsPerSlot}
                  </div>
                )}
              </div>

              <div>
                <label
                  htmlFor=""
                  className="  text-[#47494b] text-sm   flex items-center gap-2 font-semibold"
                >
                  Appointments Per Day
                  <BsQuestionCircleFill className="text-xs " />
                </label>
                <input
                  onChange={handleChange}
                  name="appointmentsPerDay"
                  value={formValues.appointmentsPerDay}
                  className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
                  placeholder="Appointments per day"
                />
                {errors.appointmentsPerDay && (
                  <div className="mb-2 text-red-500 text-[12px]">
                    {errors.appointmentsPerDay}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 pt-5">
          <h1 className="text-[#47494b] text-md font-semibold">
            Scheduling Notice
          </h1>
          <p className="text-gray-400 text-sm">
            Control and avoid last minute appointments by setting up Scheduling
            notice before away hours
          </p>
        </div>

        <div className="flex px-4 pt-5 gap-10 ">
          <div className=" w-1/2 ">
            <label
              htmlFor=""
              className="block text-[#47494b] text-sm   font-semibold"
            >
              Minimum Scheduling Notice
            </label>
            <div className=" flex gap-3 ">
              <div className="lg:w-1/2">
                <input
                  type="number"
                  onChange={handleChange}
                  name="minScheduleNotice"
                  placeholder="Duration"
                  value={formValues.minScheduleNotice}
                  className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
                />
                {errors.minScheduleNotice && (
                  <div className="mb-2 text-red-500 text-[12px]">
                    {errors.minScheduleNotice}
                  </div>
                )}
              </div>

              <div className="lg:w-1/2">
                <Select
                  name="duration"
                  onChange={handleChange}
                  value={formValues.duration}
                  className="border-none ouline-none rounded-lg shadow-none mt-2 mb-2  text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark   text-space focus:outline-none focus:border-gray-300 text-black"
                >
                  <MenuItem value="days">Days</MenuItem>
                  <MenuItem value="months">Months</MenuItem>
                </Select>
                {errors.duration && (
                  <div className="mb-2 text-red-500 text-[12px]">
                    {errors.duration}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="  w-1/2 ">
            <label
              htmlFor=""
              className="  flex items-center gap-2 text-[#47494b] text-sm   font-semibold"
            >
              Date Range
              <BsQuestionCircleFill className="text-xs " />
            </label>
            <div className=" flex gap-3">
              <div className="lg:w-1/2">
                <input
                  type="number"
                  onChange={handleChange}
                  name="dateRange"
                  placeholder="Duration"
                  value={formValues.dateRange}
                  className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
                />
                {errors.dateRange && (
                  <div className="mb-2 text-red-500 text-[12px]">
                    {errors.dateRange}
                  </div>
                )}
              </div>

              <div className="lg:w-1/2">
                <Select
                  name="dateDuration"
                  onChange={handleChange}
                  value={formValues.dateDuration}
                  className="border-none ouline-none rounded-lg shadow-none mt-2 mb-2  text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark   text-space focus:outline-none focus:border-gray-300 text-black"
                >
                  <MenuItem value="days">Days</MenuItem>
                  <MenuItem value="months">Months</MenuItem>
                </Select>
                {errors.dateDuration && (
                  <div className="mb-2 text-red-500 text-[12px]">
                    {errors.dateDuration}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 pt-5">
          <h1 className="text-[#47494b] text-md font-semibold">Office Hours</h1>
          <p className="text-gray-400 text-[12px] font-medium pt-2">
            Click the days below to choose office hours
          </p>
          <p className="text-gray-400 text-[12px] py-1 font-medium">
            Choosing the Custom option here would cause Scheduling Notice to be
            ineffective.
          </p>
          <div className="flex items-center gap-4  text-xs text-gray-600 font-semibold">
            <div className="px-2 py-3">
              <RadioGroup
                row
                name="officeHour"
                value={formValues.officeHour}
                onChange={handleChange}
              >
                <div className="w-1/2 pr-2">
                  <FormControlLabel
                    value="standard"
                    control={
                      <Radio
                        sx={{
                          color: "#8a9191",
                          fontWeight: "medium",
                          "&.Mui-checked": {
                            color: "#1258fc",
                          },
                        }}
                      />
                    }
                    label="Standard"
                  />
                </div>
                <div className="w-1/2 pr-2">
                  <FormControlLabel
                    value="custom"
                    control={
                      <Radio
                        sx={{
                          color: "#8a9191",
                          fontWeight: "medium",
                          "&.Mui-checked": {
                            color: "#1258fc",
                          },
                        }}
                      />
                    }
                    label="Custom"
                  />
                </div>
              </RadioGroup>
              {errors.officeHour && (
                <div className="mb-2 text-red-500 text-[12px]">
                  {errors.officeHour}
                </div>
              )}
            </div>
          </div>

          <div className="py-3 flex gap-3">
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
        </div>

        <div className=" px-4 pt-5 w-full">
          {selectedDays.length > 0 && (
            <div className="flex justify-start items-center flex-wrap">
              {selectedDays.map((dayIndex, index) => (
                <div
                  className="flex py-1 pl-1 pr-4 border-b border-r w-1/3 "
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

        <div className="px-4 pt-5 ">
          <label className="w-1/2 flex gap-2">
            <input
              type="checkbox"
              name="recAppointment"
              value={formValues.recAppointment}
              onChange={handleChange}
              className="toggle toggle-accent "
            />
            <span className="text-[#47494b] flex items-center gap-2 text-sm py-1 font-semibold">
              Recurring Appointments{" "}
              <BsQuestionCircleFill className="text-xs " />
            </span>
          </label>
        </div>

        <div className="flex justify-end gap-3 p-4 mt-2 border-t ">
          <button
            onClick={onClose()}
            className="border text-[#47494b] rounded-md px-4 py-2"
          >
            Close
          </button>
          <button
            onClick={onClose()}
            className="border text-[#47494b] rounded-md px-4 py-2"
          >
            Back
          </button>
          <button
            onSubmit={handleSubmit}
            className="border bg-[#25992a] text-white rounded-md px-4 py-2"
          >
            Save & continue
          </button>
        </div>
      </form>
    </div>
  );
}
