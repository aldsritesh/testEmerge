import React, { useCallback, useState } from "react";

const AdvanceSetting = () => {
  const [formValues, setFormValues] = useState<any>({
    radio: "",
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
  };

  return (
    <div className="flex justify-between mx-5 pb-20">
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
            <h1 className="text-[#47494b]  py-1 font-semibold">
              When writing a message , press Enter to...
            </h1>

            <form action="" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className=" cursor-pointer flex items-center gap-2 text-[#47494b]  py-1 font-semibold">
                  <input
                    type="radio"
                    name="radio"
                    onChange={handleChange}
                    value={formValues.radio}
                    className="radio checked:bg-blue-500 scale-75"
                    checked
                  />
                  <span className="label-text">Send the message</span>
                </label>
              </div>

              <div className="form-control">
                <label className=" cursor-pointer flex items-center gap-2 text-[#47494b]  py-1 font-semibold">
                  <input
                    type="radio"
                    name="radio"
                    onChange={handleChange}
                    value={formValues.radio}
                    className="radio checked:bg-blue-500 scale-75"
                    checked
                  />
                  <span className="label-text">
                    Start a new Line (Use CtrlEnter to send)
                  </span>
                </label>
              </div>
            </form>
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

export default AdvanceSetting;
