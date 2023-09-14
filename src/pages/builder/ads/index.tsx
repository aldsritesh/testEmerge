import Main from "@/components/Ads/Main";
import Preview from "@/components/Ads/Preview";
import Link from "next/link";
import { createContext, useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";

interface formDataType {
  image: File | null;
  adName: string;
  headline: string;
  copywriting: string;
  cta: {
    name: string;
    urlType: "hubSpot" | "Custom";
    url: string;
  };
  audience: {
    category: string;
    audienceType: string;
    saveAudType: string;
  };
  sAndB: {
    fbAdAccount: string;
    fbPage: string;
    currency: string;
    budget: string;
    startTime: string;
    endTime: string;
  };
}

const baseData: formDataType = {
  image: null,
  adName: "",
  headline: "",
  copywriting: "",
  cta: { name: "Button", urlType: "hubSpot", url: "" },
  audience: {
    category: "Credit",
    audienceType: "New Audience",
    saveAudType: "General Audience",
  },
  sAndB: {
    fbAdAccount: "",
    fbPage: "",
    currency: "USD",
    budget: "",
    startTime: "",
    endTime: "",
  },
};

export const AdsContext = createContext({
  adsData: baseData,
  setAdsData: (adsData: formDataType) => {},
});

export default function Ads() {
  const [adsData, setAdsData] = useState(baseData);
  const value = { adsData, setAdsData };
  return (
    <AdsContext.Provider value={value}>
      <div className="h-full overflow-hidden">
        <div className="flex flex-wrap h-full">
          <div className="w-full md:w-4/12 p-4 h-full bg-gray-100">
            <Link href="/marketing">
              <div className="flex justify-start items-center mb-2">
                <div className="bg-white h-5 w-5 shadow-md rounded-full flex justify-center items-center">
                  <IoChevronBackOutline className="h-3 w-3 text-gray-900" />
                </div>
                <span className="ml-2 text-xs font-semibold text-gray-700">
                  Back to Ads
                </span>
              </div>
            </Link>
            <Preview />
          </div>
          <div className="w-full md:w-8/12 bg-white px-6 py-5 h-[90%]">
            <Main />
          </div>
        </div>
      </div>
    </AdsContext.Provider>
  );
}
