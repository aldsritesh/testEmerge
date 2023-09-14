import { AdsContext } from "@/pages/builder/ads";
import { useContext } from "react";
import { MenuItem, Select } from "@mui/material";
import moment from "moment";
import { BsCalendarCheck, BsGlobe } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

const categories = ["Credit", "Employment", "Housing"];

const savedAudData = [
  {
    title: "General Audience",
    language: "English",
    location: "Singapore",
    createdDate: "Aug 24-40",
  },
  {
    title: "Design Audience",
    language: "English",
    location: "Singapore",
    createdDate: "Aug 24-40",
  },
  {
    title: "Male Based Audience",
    language: "English",
    location: "Singapore",
    createdDate: "Aug 24-40",
  },
];

export default function AudienceDetails({
  onSubmit,
  goBack,
}: {
  onSubmit: Function;
  goBack: Function;
}) {
  const { adsData, setAdsData } = useContext(AdsContext);

  const submit = () => {
    onSubmit();
  };

  return (
    <div className="pl-1">
      <div>
        <h1 className="  text-gray-800 text-2xl">Targeting</h1>
        <h3 className="text-xs text-gray-500 pt-1">
          Tailor your ad to the right audience
        </h3>
      </div>
      <div className="mt-5 md:max-w-[800px] lg:max-w-[600px] 2xl:w-[1100px] flex flex-col gap-5">
        <div className="mt-3">
          <div className="mb-4 mt-2 flex flex-col gap-1">
            <label className="font-semibold text-gray-600 text-sm">
              Ad Category{" "}
            </label>
            <Select
              onChange={(e) => {
                setAdsData({
                  ...adsData,
                  audience: { ...adsData.audience, category: e.target.value },
                });
              }}
              value={adsData.audience.category}
              className=" rounded-md outline-none border-none
           text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark  text-space focus:outline-none focus:border-gray-200 text-black"
            >
              {categories.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </div>
          <p className="text-xs text-gray-600">
            Declare if your ads are related to credit, employment or housing, or
            about social issue. Election or politics requirements are differ by
            countries.
          </p>
        </div>

        <div>
          <div className="flex flex-col gap-1">
            <label className="text-gray-800 text-sm">Audience</label>
            <div>
              <div className="flex gap-3 flex-wrap shadow px-2 border-gray-200 border-[1px]  rounded-md">
                <div className="form-control">
                  <label className="label cursor-pointer flex gap-2">
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio checked:bg-blue-500"
                      value="New Audience"
                      onChange={({ target: { value } }) =>
                        setAdsData({
                          ...adsData,
                          audience: {
                            ...adsData.audience,
                            audienceType: value,
                            saveAudType: "",
                          },
                        })
                      }
                      checked={adsData.audience.audienceType === "New Audience"}
                    />
                    <span className="label-text">New Audience</span>
                  </label>
                </div>

                <div className="form-control">
                  <label className="label cursor-pointer flex gap-2">
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio checked:bg-blue-500"
                      value="Saved Audience"
                      onChange={({ target: { value } }) =>
                        setAdsData({
                          ...adsData,
                          audience: {
                            ...adsData.audience,
                            audienceType: value,
                          },
                        })
                      }
                      checked={
                        adsData.audience.audienceType === "Saved Audience"
                      }
                    />
                    <span className="label-text">Saved Audience</span>
                  </label>
                </div>
              </div>

              {adsData.audience.audienceType === "Saved Audience" && (
                <div className="mt-3">
                  <div className="mb-4 mt-2 flex flex-col gap-1">
                    <div className="dropdown">
                      <label
                        tabIndex={0}
                        className={`btn hover:bg-transparent hover:text-gray-800 rounded-md pt-3 pb-6 btn-sm bg-transparent border-gray-300 capitalize w-full text-left justify-start text-gray-500`}
                      >
                        {adsData.audience.saveAudType}
                      </label>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-full"
                      >
                        {savedAudData.map((item, index) => (
                          <li
                            key={index}
                            onClick={() =>
                              setAdsData({
                                ...adsData,
                                audience: {
                                  ...adsData.audience,
                                  saveAudType: item.title,
                                },
                              })
                            }
                            className="pb-0 mb-0 py-1 w-full hover:bg-white border-b-[1px] "
                          >
                            <p
                              className={`font-semibold text-gray-700 capitalize  text-sm `}
                            >
                              {item.title}
                            </p>

                            <div className="flex justify-around items-center gap-2">
                              <div className="w-1/3">
                                <div className="flex justify-between items-center">
                                  <BsGlobe className="h-3 w-3 text-gray-500 mr-2" />
                                  <span className="text-gray-500  text-xs">
                                    Language
                                  </span>
                                  <span className="text-gray-700 font-medium text-xs ml-1">
                                    {item.language}
                                  </span>
                                </div>
                              </div>
                              <div className="w-1/3">
                                <div className="flex justify-between items-center">
                                  <IoLocationOutline className="h-3 w-3 text-gray-500 mr-2" />
                                  <span className="text-gray-500  text-xs">
                                    Location
                                  </span>
                                  <span className="text-gray-700 font-medium text-xs ml-1">
                                    {item.location}
                                  </span>
                                </div>
                              </div>{" "}
                              <div className="w-1/3">
                                <div className="flex justify-between items-center">
                                  <BsCalendarCheck className="h-3 w-3 text-gray-500 mr-2" />

                                  <span className="text-gray-700 font-medium text-xs ml-1">
                                    {item.createdDate}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-14 border-t border-gray-300 flex justify-end gap-3 pt-10 pb-10">
        <button
          onClick={() => goBack(1)}
          className="bg-white font-medium w-32 text-gray-400 px-4 py-2 shadow-md rounded hover:shadow-xl hover:drop-shadow-sm transition-all text-md mr-3"
        >
          Cancel
        </button>
        <button
          className="bg-secondary w-32 text-white px-4 py-2 shadow-md rounded hover:shadow-xl hover:drop-shadow-sm transition-all text-md font-medium"
          onClick={() => submit()}
        >
          Next
        </button>
      </div>
    </div>
  );
}
