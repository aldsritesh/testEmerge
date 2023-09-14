import DashboardData from "@/components/Dashboard/DashboardData";
import GridLayout from "@/components/DashboardBuilder/GridLayout";
import { baseUrl } from "@/config/APIConstants";
import { GlobalContext } from "@/layouts/GlobalLayout";
import axios from "axios";
import Link from "next/link";
import React, { useContext, useEffect, useReducer, useState } from "react";
import { FiSettings } from "react-icons/fi";

import { dashboardFormConfig } from "@/config/dashboardFormConfig";
import { DashboardBuilderContext } from "./builder/dashboard/playground";
import { AnyARecord } from "dns";
import { useRouter } from "next/router";
import { useAuthentication } from "@/controllers/auth";
type State = {
  layout: any[];
  isReady: boolean;
};

const initialState: State = {
  layout: [
    // { i: "a", x: 0, y: 0, w: 3, h: 3 },
    // { i: "b", x: 1, y: 0, w: 3, h: 3 },
    // { i: "c", x: 4, y: 0, w: 3, h: 3 },
    // { i: "d", x: 0, y: 2, w: 3, h: 3 },
  ],
  isReady: true,
};

type Action = {
  type: "UPDATE_LAYOUT";
  payload: any;
};

const layoutReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "UPDATE_LAYOUT":
      return { ...state, layout: action.payload };
    default:
      return state;
  }
};

export default function Marketing() {
  const [state, dispatchLayout] = useReducer(layoutReducer, initialState);
  const { layout } = state;
  const ctx = useContext(GlobalContext);
  // const ctx = useContext(GlobalContext);
  ctx.setOpen(true);
  ctx.setTitle("Dashboard");

  const [DropDownRole, SetDropDownRole] = useState("");
  const [individualData, setIndividualData] = useState("");
  const [individualName, setIndividualName] = useState("");
  const [individualData1, setIndividualData1] = useState("");
  const [individualName1, setIndividualName1] = useState("");
  const [individualData2, setIndividualData2] = useState("");
  const [individualName2, setIndividualName2] = useState("");
  const [individualData3, setIndividualData3] = useState("");
  const [individualName3, setIndividualName3] = useState("");

  const [arrData, setArrData] = useState();
  const { clearToken, token } = useAuthentication();

  const { formValues } = useContext(DashboardBuilderContext);
  const [dashboardIndId, setDashboardIndId] = useState(
    "1ebd9606-00d7-4eaf-ad5b-b8f041adb782"
  );

  useEffect(() => {
    if (token) {
      axios
        .get(
          `${baseUrl}dashboards/location/f209ee50-96e6-4ca2-9eb5-80b93d31591f/user/9b36de41-f652-4bf2-ba38-7a96103f09a3`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          console.log("resulted data", res.data.dashboards);
          // res.data.dashboards.forEach((item: any, index: number) => {
          //   setDashboardIndId(item.id);
          // });
          console.log(
            "res.data.dashboards.length",
            res.data.dashboards[res.data.dashboards.length - 1]
          );
        })
        .catch((err) => console.log("error", err));
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      axios
        .get(`${baseUrl}dashboards/516ec4b8-15d9-46c3-8ba6-fe06f670ac8e`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setIndividualData(res.data.dashboard.data);
          setIndividualName(res.data.dashboard.name);
        });
    }
  }, [token]);

  const { Buffer } = require("buffer");
  useEffect(() => {
    if (individualData != "") {
      const bufferData = Buffer.from(individualData, "base64");
      const arrayString = bufferData.toString();
      const arrayData = JSON.parse(arrayString);
      console.log("arrayString", arrayData);
      dispatchLayout({ type: "UPDATE_LAYOUT", payload: arrayData });
    }
  }, [individualData, Buffer]);

  const innerTabs = [
    // {
    //   id: "tab1",
    //   label: "Easter Home",
    //   content: <DashboardData />,
    // },
    {
      id: "tab1",
      label: individualName,
      content: <GridLayout layout={layout} />,
    },
    // {
    //   id: "tab3",
    //   label: individualName,
    //   content: <GridLayout layout={layout} />,
    // },
    // {
    //   id: "tab4",
    //   label: individualName,
    //   content: <GridLayout layout={layout} />,
    // },
    // {
    //   id: "tab5",
    //   label: individualName,
    //   content: <GridLayout layout={layout} />,
    // },
    // {
    //   id: "tab6",
    //   label: individualName,
    //   content: <GridLayout layout={layout} />,
    // },
  ];

  // console.log(layout, "layout");

  // const [activeTab, setActiveTab] = useState<any>(tabs[3].id);
  const [activeInnerTab, setActiveInnerTab] = useState(innerTabs[0].id);

  // const [userActivityTimer, setUserActivityTimer] = useState<any>(null);
  const router = useRouter();

  // function to check for inactivity and log out

  const CheckForInactivity = () => {
    //get expire time from local storage
    const expireTime: any = localStorage.getItem("expireTime");
    //if expire time earlier then now logout
    if (expireTime < Date.now()) {
      console.log("logout");
      clearToken();
      router.push("/loginPage");
    }
  };

  //function to upadte expire time
  const updateExpiretime = () => {
    // setexpire time to 1hr from now
    const expireTime: any = Date.now() + 3600000;

    // set expiretime in local storage
    localStorage.setItem("expireTime", expireTime);
  };

  //useeffect to set interval to check inacitvity
  useEffect(() => {
    //check for inactivity every 5 sec
    const interval = setInterval(() => {
      CheckForInactivity();
    }, 5000);
  }, []);

  //update expiretime on any user activity
  useEffect(() => {
    //set initial expiretime
    updateExpiretime();

    // set event listners
    window.addEventListener("click", updateExpiretime);
    window.addEventListener("keypress", updateExpiretime);
    window.addEventListener("scroll", updateExpiretime);
    window.addEventListener("mousemove", updateExpiretime);

    // clean up
    return () => {
      window.addEventListener("click", updateExpiretime);
      window.addEventListener("keypress", updateExpiretime);
      window.addEventListener("scroll", updateExpiretime);
      window.addEventListener("mousemove", updateExpiretime);
    };
  }, []);
  return (
    <div className="overflow-hidden ">
      <div className="lg:px-5 border-b-[1px] border-[#dfdfdf]  bg-white flex justify-between items-center">
        <ul className=" pt-4  flex justify-start items-center overflow-scroll scrollbar-hide gap-6 ">
          {innerTabs.map((tab: any) => (
            <li key={tab.id}>
              <button
                className={`px-3 lg:px-2 transition-all duration-300 font-semibold text-xs md:text-base ${
                  activeInnerTab === tab.id
                    ? "border-b-[4px] border-secondary text-secondary pb-3 "
                    : "text-gray-500 pb-4"
                }`}
                onClick={() => setActiveInnerTab(tab.id)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>

        <Link
          href="/builder"
          className="m-1 ml-2 py-2 px-2  2xl:px-4 rounded-md flex flex-wrap justify-between items-center"
        >
          <FiSettings className="h-4 w-4 text-gray-500   mr-2" />
          <span className="text-gray-500 font-semibold text-sm ">
            Manage Dashboards
          </span>
        </Link>
      </div>
      <div className="  bg-white">
        {innerTabs.map((tab: any) => (
          <div
            key={tab.id}
            className={`shadow-md transition-all duration-300 rounded-md  ${
              activeInnerTab === tab.id ? "block" : " text-black hidden"
            } `}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}
