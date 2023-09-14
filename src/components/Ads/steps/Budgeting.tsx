import TextInput from "@/components/controls/TextInput";
import { AdsContext } from "@/pages/builder/ads";
import { useContext } from "react";
import DatePicker from "react-date-picker";
import { MenuItem, Select } from "@mui/material";
import { useRouter } from "next/router";

const fbAdAccount = ["FB AD 1", "FB AD 2", "FB AD 3"];

const fbPage = ["Page 1", "Page 2", "Page 3"];

const currency = ["USD", "INR", "GBP"];

export default function Budgeting({
  onSubmit,
  goBack,
}: {
  onSubmit: Function;
  goBack: Function;
}) {
  const { adsData, setAdsData } = useContext(AdsContext);
  const router = useRouter();
  const submit = () => {
    // console.log(adsData);
    router.push("/marketing");
  };

  return (
    <div className="pl-1">
      <div>
        <h1 className="  text-gray-800 text-2xl">Schedule & Budgeting</h1>
        <h3 className="text-xs text-gray-500 pt-1">
          Set your ad schedule and total amount to spent on the ad
        </h3>
      </div>
      <div className="mt-5 md:max-w-[800px] lg:max-w-[600px] 2xl:w-[1100px] flex flex-col gap-5">
        <div className="mt-3">
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-gray-600 text-sm">
              Facebook ad account
            </label>
            <Select
              onChange={(e) => {
                setAdsData({
                  ...adsData,
                  sAndB: { ...adsData.sAndB, fbAdAccount: e.target.value },
                });
              }}
              value={adsData.sAndB.fbAdAccount}
              className=" rounded-md border-none outline-none text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark border-gray-200 text-space focus:outline-none focus:border-gray-200 text-black"
            >
              {fbAdAccount.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </div>
        </div>

        <div className="mt-3">
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-gray-600 text-sm">
              Select Facebook Page
            </label>
            <Select
              onChange={(e) => {
                setAdsData({
                  ...adsData,
                  sAndB: { ...adsData.sAndB, fbPage: e.target.value },
                });
              }}
              value={adsData.sAndB.fbPage}
              className=" rounded-md border-none outline-none text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark border-gray-200 text-space focus:outline-none focus:border-gray-200 text-black"
            >
              {fbPage.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </div>
        </div>

        <div className="mt-3">
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-gray-600 text-sm">
              Budget
            </label>

            <div className="flex flex-wrap items-center">
              <div className="w-full">
                <Select
                  onChange={(e) => {
                    setAdsData({
                      ...adsData,
                      sAndB: { ...adsData.sAndB, currency: e.target.value },
                    });
                  }}
                  value={adsData.sAndB.currency}
                  className=" rounded-md border-none outline-none  text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark border-gray-200 text-space focus:outline-none focus:border-gray-200 text-black"
                >
                  {fbPage.map((item, index) => (
                    <MenuItem key={index} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap">
          <div className="w-1/2 pr-1">
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-gray-600 text-sm">
                Campaign Start
              </label>
              <TextInput
                placeholder="Ex. Best ice cream in town"
                onChange={({ target: { value } }) =>
                  setAdsData({
                    ...adsData,
                    sAndB: { ...adsData.sAndB, startTime: value },
                  })
                }
                value={adsData.sAndB.startTime}
                type="date"
              />
            </div>
          </div>

          <div className="w-1/2 pl-1">
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-gray-600 text-sm">
                Campaign End
              </label>
              <TextInput
                placeholder="Ex. Best ice cream in town"
                onChange={({ target: { value } }) =>
                  setAdsData({
                    ...adsData,
                    sAndB: { ...adsData.sAndB, endTime: value },
                  })
                }
                value={adsData.sAndB.endTime}
                type="date"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-14 border-t border-gray-300 flex justify-end gap-3 pt-10 pb-10">
        <button
          onClick={() => goBack(2)}
          className="bg-white font-medium w-32 text-gray-400 px-4 py-2 shadow-md rounded hover:shadow-xl hover:drop-shadow-sm transition-all text-md mr-3"
        >
          Prev
        </button>
        <button
          className="bg-primary w-32 text-white px-4 py-2 shadow-md rounded hover:shadow-xl hover:drop-shadow-sm transition-all text-md font-medium"
          onClick={() => submit()}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
