import React, { createContext, useEffect, useState } from "react";
import Image from "next/image";
import { memo } from "react";
import AdminSidebar from "./components/AdminSidebar";
import TopNavigation from "./components/TopNavigation";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import { useRouter } from "next/router";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { IPipeline } from "@/components/Leads/Interfaces";
import { ITag } from "@/components/Interfaces";
import { ILeadSource, IUser } from "@/components/Interfaces";
import { baseUrl, locationID, token } from "@/config/APIConstants";
import axios from "axios";
import Head from "next/head";
import { Phone } from "@/components/UI/Phone";
import { dashboardFormConfig } from "@/config/dashboardFormConfig";
import { useAuthentication } from "@/controllers/auth";
import { useRecoilState } from "recoil";
import { userState } from "@/atoms/user";

interface IAdminLayoutProps {
  children: React.ReactNode;
}
export const GlobalContext = createContext({
  selectedId: [],
  setSelectedId: (item: any) => {},
  compare: {},
  setCompare: (item: any) => {},
  formValues: [],
  setFormValues: (array: any) => {},
  title: "en",
  setTitle: (string: string) => {},
  open: true,
  setOpen: (boolean: boolean) => {},
  locationData: {
    timezone: "",
  },
  setLocationData: (object: any) => {},
  pipelines: [] as IPipeline[],
  setPipelines: (array: IPipeline[]) => {},
  tags: [] as ITag[],
  setTags: (array: ITag[]) => {},
  leadSources: [] as ILeadSource[],
  setLeadSources: (array: ILeadSource[]) => {},
  users: [] as IUser[],
  setUsers: (array: IUser[]) => {},
  updateLocationDataPing: 0,
  setUpdateLocationDataPing: (number: number) => {},
  showDialer: false,
  setShowDialer: (boolean: boolean) => {},
  twilioDevice: null,
  setTwilioDevice: (device: any) => {},
  dialerNumber: "",
  setDialerNumber: (number: string) => {},
  customFieldRefresh: false,
  setCustomFieldRefresh: (boolean: boolean) => {},
});

export default memo(function GlobalLayout({ children }: IAdminLayoutProps) {
  const [title, setTitle] = useState("");
  // const [formSotredData, setFormStoredData] = useState({});
  const [open, setOpen] = useState(true);
  const [formValues, setFormValues] = useState<any>(dashboardFormConfig);
  const [locationData, setLocationData] = useState(null);
  const [users, setUsers] = useState<IUser[]>([]);
  const [pipelines, setPipelines] = useState<IPipeline[]>([]);
  const [tags, setTags] = useState<ITag[]>([]);
  const [leadSources, setLeadSources] = useState<ILeadSource[]>([]);
  const [updateLocationDataPing, setUpdateLocationDataPing] = useState(0);
  const [showDialer, setShowDialer] = useState(false);
  const [selectedId, setSelectedId] = useState<any>([]);
  const [dialerNumber, setDialerNumber] = useState("");
  const [compare, setCompare] = useState(false);
  const [customFieldRefresh, setCustomFieldRefresh] = useState(false);

  const [twilioDevice, setTwilioDevice] = useState(null);
  const value: any = {
    // formSotredData,
    // setFormStoredData,
    selectedId,
    setSelectedId,
    compare,
    setCompare,
    formValues,
    setFormValues,
    title,
    setTitle,
    open,
    setOpen,
    users,
    setUsers,
    pipelines,
    setPipelines,
    tags,
    setTags,
    leadSources,
    setLeadSources,
    updateLocationDataPing,
    setUpdateLocationDataPing,
    showDialer,
    setShowDialer,
    dialerNumber,
    setDialerNumber,
    twilioDevice,
    setTwilioDevice,
    locationData,
    setLocationData,
    customFieldRefresh,
    setCustomFieldRefresh,
  };
  const router = useRouter();
  const [userData, setUserData] = useRecoilState<any>(userState);
  const { isTokenReady, checkIfUserLoggedIn, user, location, token }: any =
    useAuthentication();
  useEffect(() => {
    if (location != null) {
      axios
        .get(`${baseUrl}pipelines/location/${location?.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setPipelines(res.data.pipelines);
          console.log("Pipelines", res.data);
        })
        .catch((err) => {
          console.log(err);
        });

      axios
        .get(`${baseUrl}tags/location/${location?.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setTags(res.data.tags);
          // console.log("Tags", res.data);
        })
        .catch((err) => {
          console.log(err);
        });

      axios
        .get(`${baseUrl}lead-sources/location/${location?.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setLeadSources(res.data.leadSources);
          // console.log("Lead Sources", res.data);
        })
        .catch((err) => {
          console.log(err);
        });

      axios
        .get(`${baseUrl}users/location/${location?.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setUsers(res.data.users);
          // console.log("Users", res.data);
        })
        .catch((err) => {
          console.log(err);
        });

      axios
        .get(`${baseUrl}locations/${location?.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setLocationData(res.data.location);
          // console.log("Location", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [location, token]);
  // console.log(router, open);

  useEffect(() => {
    if (!isTokenReady) checkIfUserLoggedIn();
  }, []);
  // if (user == null) {
  //   // useEffect(() => {
  //   axios
  //     .get(`${baseUrl}users/9b36de41-f652-4bf2-ba38-7a96103f09a3`, {
  //       headers: { Authorization: `Bearer ${token}` },
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setUserData(data);
  //     })
  //     .catch((err) => console.log(err));
  //   // }, []);
  // }

  return (
    <>
      <GlobalContext.Provider value={value}>
        <div
          className={` ${
            router.asPath == "/calendar" ? "h-full" : null
          }     bg-mainBg bg-cover flex flex-wrap justify-center  `}
        >
          <Head>
            <title>{title} Emerge</title>
          </Head>
          <div className="z-50 -left-[500px] fixed">
            <div className="absolute">
              <Phone />
            </div>
          </div>
          <div
            className={`  ${
              router.asPath != "/workflow/new-workflow" && "border-b-[1px]"
            } ${
              router.pathname.startsWith("/builder/form/craft") ||
              router.pathname.startsWith("/builder/survey/craft") ||
              router.pathname.startsWith("/builder/website/craft") ||
              router.pathname.startsWith("/builder/emails/craft") ||
              router.pathname.startsWith("/builder/dashboard/playground") ||
              router.pathname.startsWith(
                "/builder/dashboard/DashboardPreview"
              ) ||
              router.pathname.startsWith("/builder/form/craft?") ||
              router.pathname.startsWith("/builder/form/preview") ||
              router.pathname.startsWith("/workflow/new-workflow") ||
              router.pathname.startsWith("/workflow/create-workflow") ||
              router.pathname.startsWith("/workflow/") ||
              router.pathname.startsWith("/builder/email/craft") ||
              router.pathname.startsWith("/demo") ||
              router.pathname.startsWith("/builder/website/preview")
                ? `hidden`
                : "w-full"
            }  w-full  bg-[#1F2228] py-1.5 border-gray-200  lg:sticky top-0 z-50`}
          >
            <TopNavigation />
          </div>

          {router.pathname == "/builder/form/craft" ||
          router.pathname == "/builder/form/craft/" ? null : (
            <div
              className={` ${
                router.pathname.startsWith("/builder/form/craft") ||
                router.pathname.startsWith("/builder/survey/craft") ||
                router.pathname.startsWith("/builder/website/craft") ||
                router.pathname.startsWith("/builder/emails/craft") ||
                router.pathname.startsWith("/builder/dashboard/playground") ||
                router.pathname.startsWith("/workflow/new-workflow") ||
                router.pathname.startsWith("/workflow/create-workflow") ||
                router.pathname.startsWith("/workflow/") ||
                router.pathname.startsWith(
                  "/builder/dashboard/DashboardPreview"
                ) ||
                router.pathname.startsWith("/builder/form/preview") ||
                router.pathname.startsWith("/builder/email/craft") ||
                router.pathname.startsWith("/builder/website/preview") ||
                router.pathname.startsWith("/demo")
                  ? `hidden`
                  : router.pathname.startsWith("/settings")
                  ? `${
                      open
                        ? "w-full block lg:w-[5%]  2xl:w-[4%]"
                        : "hidden lg:w-[15%] lg:hidden "
                    }`
                  : `${
                      open
                        ? "hidden lg:w-[15%] lg:block "
                        : "w-full block lg:w-[5%] 2xl:w-[4%]"
                    }`
              }   border-r-[1px] bg-white relative`}
            >
              <div
                onClick={() => setOpen(!open)}
                className={`  ${
                  open
                    ? "left-48  2xl:left-[14.5%]  bottom-5 2xl:bottom-6 "
                    : "left-[4%]  2xl:left-12  bottom-[2%] 2xl:bottom-[3%] "
                } text-lg font-bold mr-3 fixed   z-50`}
              >
                <button className="bg-gray-200 shadow-md rounded-full h-5 w-5 p-1 flex justify-center items-center">
                  {open ? (
                    <IoChevronBack className="h-4 w-4 text-gray-700" />
                  ) : (
                    <IoChevronForward className="h-4 w-4 text-gray-700" />
                  )}
                </button>
              </div>

              <AdminSidebar />
            </div>
          )}

          <div
            className={`   ${
              router.asPath == "/calendar" ? "h-[100vh]" : null
            }   ${
              router.asPath == "/builder/website/craft" ||
              router.asPath == "/builder/emails/craft" ||
              router.asPath == "/builder/form/craft" ||
              router.asPath == "/builder/survey/craft" ||
              router.pathname.startsWith("/builder/dashboard/playground") ||
              router.pathname.startsWith("/builder/newDashboardBuilder") ||
              router.pathname == "/builder/form/craft" ||
              router.pathname == "/builder/form/craft/" ||
              router.pathname.startsWith("/builder/form/preview") ||
              router.pathname.startsWith("/workflow/new-workflow") ||
              router.pathname.startsWith("/workflow/create-workflow") ||
              router.pathname.startsWith("/workflow/") ||
              router.pathname.startsWith("/builder/email/craft") ||
              router.pathname.startsWith(
                "/builder/dashboard/DashboardPreview"
              ) ||
              router.pathname.startsWith("/settings")
                ? `${value.open ? "lg:w-[95%]  2xl:w-[96%]" : " w-full"}`
                : `${
                    value.open
                      ? " w-full  lg:w-[85%]"
                      : "w-full lg:w-[95%]  2xl:w-[96%]"
                  }`
            } flex flex-col    justify-between items-start`}
          >
            <main
              className={` ${
                router.asPath == "/builder/website/craft" ||
                router.asPath == "/builder/emails/craft" ||
                router.asPath == "/builder/form/craft" ||
                router.asPath == "/builder/survey/craft" ||
                router.pathname.startsWith("/builder/dashboard/playground") ||
                router.pathname.startsWith("/builder/newDashboardBuilder") ||
                router.pathname == "/builder/form/craft" ||
                router.pathname == "/builder/form/craft/" ||
                router.pathname.startsWith("/builder/form/preview") ||
                router.pathname.startsWith("/workflow/new-workflow") ||
                router.pathname.startsWith("/workflow/create-workflow") ||
                router.pathname.startsWith("/workflow/") ||
                router.pathname.startsWith("/builder/email/craft") ||
                router.pathname.startsWith("/builder/website/preview") ||
                router.pathname.startsWith(
                  "/builder/dashboard/DashboardPreview"
                ) ||
                router.pathname.startsWith("/settings")
                  ? "h-[100vh] lg:h-[100vh] 2xl:h-[100vh]"
                  : "h-[100vh] lg:h-[90vh] 2xl:h-screen"
              }  relative   overflow-y-scroll bg-bgGray scrollbar-hide w-full overflow-hidden`}
            >
              {children}
            </main>
          </div>
        </div>
      </GlobalContext.Provider>
    </>
  );
});
