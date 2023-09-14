import { MenuItem, Select } from "@mui/material";
import React, { useCallback, useState } from "react";

const RingTone = () => {
  const [errors, setErrors] = useState<any>({});
  const [formValues, setFormValues] = useState<any>({
    mute: "",
    ringtone: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormValues((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log(formValues);
    const validationErrors: any = {};

    if (!formValues.ringtone) {
      validationErrors.ringtone = "Required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setFormValues({
      mute: "",
      ringtone: "",
    });

    setErrors({});
  };

  return (
    <div className="flex justify-between mx-5 my-10">
      <div className="w-1/3  text-[#47494b] text-lg py-1 font-semibold">
        Ringtone
        <p className="text-[#47494b] text-xs">
          You can set the ringtone played while you get incoming call using this
          section.
        </p>
      </div>
      <div className=" w-2/3  bg-white border rounded-md">
        <form action="" onSubmit={handleSubmit}>
          <div className="w-11/12 h-72 m-5">
            {/* Mute */}
            <label className="text-[#47494b] font-semibold text-sm gap-1 flex items-center">
              <input
                type="checkbox"
                name="mute"
                value={formValues.mute}
                className="checkbox scale-75 "
              />
              Mute
            </label>

            {/* Pick a Default Ringtone */}
            <div className="w-full mt-4">
              <label className="w-full mb-2 text-sm text-gray-600 font-semibold fontStrawFord">
                Pick a Default
              </label>
              <Select
                name="ringtone"
                value={formValues.ringtone}
                onChange={handleChange}
                className=" rounded-md my-1 text-sm  bg-transparent focus:bg-transparent w-full placeholder-dark  text-space focus:outline-none focus:border-gray-300 text-black"
              >
                <MenuItem value="">None</MenuItem>
                <MenuItem value="Ding">Ding</MenuItem>
                <MenuItem value="Knock">Knock</MenuItem>
                <MenuItem value="Tada">Tada</MenuItem>
                <MenuItem value="Hi">Hi</MenuItem>{" "}
              </Select>
              {errors.ringtone && (
                <span className="mb-5 error text-red-500 ">
                  {errors.ringtone}
                </span>
              )}
            </div>
          </div>
          {/* Save Button */}
          <div className="flex mx-8 my-4 justify-end ">
            <button
              onSubmit={handleSubmit}
              className="border flex justify-center bg-[#5450ee] border-gray-400 rounded-md w-24 px-3 py-2 cursor-pointer text-white font-semibold"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RingTone;
