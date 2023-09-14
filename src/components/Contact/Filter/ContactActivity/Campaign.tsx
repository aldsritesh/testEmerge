import { TextField } from "@mui/material";
import React, { useState } from "react";

export default function Campaign({ updateData, onClose, actionData }: any) {
  const radioData = [
    { title: "Has active campaign", value: "hasActive" },
    { title: "Has paused campaign", value: "hasPaused" },
    { title: "In active campaign", value: "inActive" },
    { title: "In finished campaign", value: "inFinished" },
    { title: "In paused campaign", value: "inPaused" },
    { title: "In cancelled campaign", value: "inCancelled" },
  ];

  const [formValues, setFormValues] = useState<any>({
    waitFor: "",
    inActiveCampaign: "",
    inFinishedCampaign: "",
    inPausedCampaign: "",
    inCancelledCampaign: "",
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
      inActiveCampaign: "",
      inFinishedCampaign: "",
      inPausedCampaign: "",
      inCancelledCampaign: "",
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
              Filter Campaign
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
                  {formValues.waitFor === "inActive" ? (
                    <>
                      {mainData?.title == "In active campaign" && (
                        <TextField
                          variant="outlined"
                          placeholder="Search Campaign"
                          type="text"
                          name="isActiveCampaign"
                          onChange={handleChange}
                          value={formValues.isActiveCampaign}
                          className="px-2 rounded-lg  mb-2 py-1 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark border-[1px] border-gray-400 text-space focus:outline-none focus:border-gray-300 text-black"
                        />
                      )}
                    </>
                  ) : formValues.waitFor === "inFinished" ? (
                    <>
                      {mainData?.title == "In finished campaign" && (
                        <TextField
                          variant="outlined"
                          placeholder="Search Campaign"
                          type="text"
                          name="inFinishedCampaign"
                          onChange={handleChange}
                          value={formValues.inFinishedCampaign}
                          className="px-2 rounded-lg  mb-2 py-1 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark border-[1px] border-gray-400 text-space focus:outline-none focus:border-gray-300 text-black"
                        />
                      )}
                    </>
                  ) : formValues.waitFor === "inPaused" ? (
                    <>
                      {mainData?.title == "In paused campaign" && (
                        <TextField
                          variant="outlined"
                          placeholder="Search Campaign"
                          type="text"
                          name="inPausedCampaign"
                          onChange={handleChange}
                          value={formValues.inPausedCampaign}
                          className="px-2 rounded-lg  mb-2 py-1 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark border-[1px] border-gray-400 text-space focus:outline-none focus:border-gray-300 text-black"
                        />
                      )}
                    </>
                  ) : formValues.waitFor === "inCancelled" ? (
                    <>
                      {mainData?.title == "In cancelled campaign" && (
                        <TextField
                          variant="outlined"
                          placeholder="Search Campaign"
                          type="text"
                          name="inCancelledCampaign"
                          onChange={handleChange}
                          value={formValues.inCancelledCampaign}
                          className="px-2 rounded-lg  mb-2 py-1 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark border-[1px] border-gray-400 text-space focus:outline-none focus:border-gray-300 text-black"
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
