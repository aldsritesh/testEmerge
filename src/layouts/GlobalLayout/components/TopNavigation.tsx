import {
  ChevronLeftIcon,
  PlusIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useContext } from "react";
import {
  CalendarDaysIcon,
  BellAlertIcon,
  ChatBubbleBottomCenterIcon,
  BellIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";
import Search from "./Search";
import { useRecoilState } from "recoil";
import { titleState } from "@/atoms/title";
import Image from "next/image";
import HeaderTitle from "./HeaderTitle";
import { GlobalContext } from "..";
import { TfiAlignJustify, TfiAlignRight, TfiAngleRight } from "react-icons/tfi";
import {
  IoCallOutline,
  IoChevronBack,
  IoChevronForward,
  IoLogOut,
} from "react-icons/io5";
import Link from "next/link";
import {
  MdArrowDropDown,
  MdArrowDropUp,
  MdKeyboardArrowUp,
} from "react-icons/md";
import axios from "axios";
import { baseUrl, userID } from "@/config/APIConstants";
import { RiShutDownLine } from "react-icons/ri";
import { useAuthentication } from "@/controllers/auth";
import { userState } from "@/atoms/user";
export default function TopNavigation() {
  // const [userData, setUserData] = useState<any>();
  // // useEffect(() => {
  // //   axios
  // //     .get(`${baseUrl}users/${userID}`, {
  // //       headers: { Authorization: `Bearer ${token}` },
  // //     })
  // //     .then((data) => {
  // //       console.log("userData{}{}{}{}{", data);
  // //       setUserData(data);
  // //     });
  // // }, [userData]);
  const { clearToken, location, setLocation, token }: any = useAuthentication();
  const router = useRouter();
  const [locations, setLocations] = useState([]);
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useRecoilState<any>(userState);
  useEffect(() => {
    if (token != null) {
      axios
        .get(`${baseUrl}locations`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((data) => {
          console.log("data?.data?.location", data?.data?.locations);
          setLocations(data?.data?.locations);
          if (location == null) {
            setLocation(data?.data?.locations[0]);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [token]);

  useEffect(() => {
    if (token != null) {
      axios
        .get(`${baseUrl}users/${localStorage.getItem("userID")}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((data) => {
          console.log("data", data);
          setUserName(data?.data?.user?.fullName);
        })
        .catch((err) => console.log(err));
    }
  }, [token]);
  // var local = localStorage.getItem("userID");
  // console.log("userData", userData);
  const ctx = useContext(GlobalContext);

  // console.log("userID from local storage", localStorage.getItem("userID"));
  // console.log("recoil location", location == null);
  return (
    <header className=" block w-full  h-28 lg:h-16 items-center relative z-10">
      {/* {ctx.open.toString()} */}
      <div className="flex flex-wrap lg:flex-nowrap items-center lg:items-start flex-col h-full justify-center mx-auto relative  text-white z-10">
        <div className="flex flex-wrap  lg:flex-nowrap lg:items-start  relative w-full sm:ml-0 sm:pr-2  ">
          <div className="flex justify-between items-center w-full md:w-[45%] pl-2 pr-5 py-1.5 rounded-md">
            <div className={`flex items-center pl-5  w-full justify-start`}>
              {/* <div
                onClick={() => ctx.setOpen(!ctx.open)}
                className="text-lg font-bold mr-3"
              >
                <button className="bg-[#35383E] rounded-full h-5 w-5 p-1 flex justify-center items-center">
                  {ctx.open ? (
                    <IoChevronForward className="h-4 w-4 text-white" />
                  ) : (
                    <IoChevronBack className="h-4 w-4 text-white" />
                  )}
                </button>
              </div> */}
              <div onClick={() => ctx.setOpen(true)}>
                <Link href="/">
                  <Image
                    src={require("../../../../public/images/logo/logo.png")}
                    alt="Emerge"
                    className="w-36 lg:w-40"
                  />
                </Link>
              </div>
              {/* <div className="w-[90%]">
                <HeaderTitle />
              </div> */}
              <div className="pl-4 w-3 ">
                <div className="dropdown inline-block relative group w-[20vw]">
                  <button className=" text-white font-semibold py-1 px-4 border-x-[1px] border-[#a0a0a0] justify-between inline-flex items-center w-[70%]">
                    <span className="mr-1">{location?.fullName}</span>
                    <div className="flex-col items-end justify-start">
                      <MdArrowDropUp className="" />
                      <MdArrowDropDown />
                    </div>
                  </button>
                  <ul className="dropdown-menu absolute  text-white pt-1 hidden group-hover:block rounded-lg w-[80%]">
                    {locations.map((item: any, index: number) => (
                      <li className="" key={index}>
                        <a
                          className="rounded-t bg-[#35383E] hover:bg-[#1F2228] py-2 px-4 block whitespace-no-wrap"
                          href="#"
                          onClick={() => setLocation(item)}
                        >
                          {item.fullName}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className=" flex items-center justify-start lg:justify-end p-1 w-full lg:w-[55%]   ">
            <Search />
            <div
              className="relative ml-3 bg-logoRed p-2 rounded-full shadow-sm mr-3 cursor-pointer"
              onClick={() => {
                ctx.setShowDialer(!ctx.showDialer);
              }}
            >
              <IoCallOutline className="text-white w-4 h-4" />
            </div>

            <div className="border-l border-l-[#a0a0a0] mr-3 h-full">
              <div className="relative ml-3  shadow-sm flex gap-2  py-2">
                <Link href="/chat">
                  <ChatBubbleBottomCenterIcon className="text-[#a0a0a0] w-6 h-6" />
                </Link>
                <Link href="/notifications">
                  <BellIcon className="text-[#a0a0a0] w-6 h-6" />{" "}
                </Link>
                <Link href="/calendar">
                  <CalendarIcon className="text-[#a0a0a0] w-6 h-6" />
                </Link>
              </div>
            </div>

            <div className="border-l border-l-[#a0a0a0]">
              <div className="relative ml-3  shadow-sm flex gap-2 items-center">
                <div className="relative  bg-logoRed p-2 rounded-full shadow-sm">
                  <UserIcon className="text-white w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm">
                    {userName == "" ? (
                      <button
                        className="bg-[#dc4a35] rounded-lg text-white px-2 py-2 font-semibold w-full"
                        onClick={() => router.push("/loginPage")}
                      >
                        Login Here
                      </button>
                    ) : (
                      userName
                    )}
                  </div>
                  <div className="text-sm text-[#a0a0a0]">
                    {userName != "" ? "CEO, Superadmin" : null}
                  </div>
                </div>
                <div
                  onClick={() => {
                    window.alert("Sure You want to Logout??");
                    clearToken();
                    router.push("/loginPage");
                  }}
                  className="relative ml-3 bg-logoRed p-2 rounded-full shadow-sm mr-3 cursor-pointer"
                >
                  <RiShutDownLine className="text-white w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
