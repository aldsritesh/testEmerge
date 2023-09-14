import moment from "moment";
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsClipboard2Check } from "react-icons/bs";
import { TbColumns3, TbSettings } from "react-icons/tb";
import { MenuItem, Select } from "@mui/material";
import { CiCalendar } from "react-icons/ci";
import AccountCard from "../../../components/SuperAdmin/subAccount/accountCard";
import axios from "axios";
import { baseUrl } from "@/config/APIConstants";
import ModalDerived from "@/components/Modal";
import EditProfile from "@/components/Settings/TeamMember/EditProfile/AddProfile";
import SubaccForm from "./SubaccForm";
import { useAuthentication } from "@/controllers/auth";

// export async function getServerSideProps() {
//   let { data } = await axios.get(`${baseUrl}locations/${locationID}`, {
//     headers: { Authorization: `Bearer ${token}` },
//   });
//   // console.log("subAccounts", data);
//   return {
//     props: {
//       res: data,
//     },
//   };
// }

export default function SubAccount() {
  const { location, token }: any = useAuthentication();
  const [rangeDate, setRangeDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const [data, setData] = useState<any>([]);
  console.log("dataaa", data);

  const [openModal, setOpenModal] = useState(false);
  const [refreshData, setRefreshData] = useState(false);

  useEffect(() => {
    console.log("Page Updated");
  }, [refreshData]);

  useEffect(() => {
    axios
      .get(`${baseUrl}locations`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log("response", [res.data.locations]);
        setData(res.data.locations);
      })
      .catch((errror) => {
        console.log(errror);
      });
  }, [refreshData]);

  return (
    <div className="bg-white">
      <div className="mx-5">
        {/* Header Section */}
        <div className="flex justify-between py-5 ">
          <div className="text-[#4b5563] text-xl font-semibold">
            Sub-Accounts
          </div>
          <div className="flex gap-2">
            <button className="border border-gray-300 rounded-md px-4 flex items-center gap-1 text-xs font-semibold ">
              <BsClipboard2Check className="text-[#4b5563]" />
              Submit Feedback
            </button>

            <ModalDerived
              visibility={openModal}
              onClose={() => setOpenModal(false)}
            >
              <SubaccForm
                onClose={() => setOpenModal(false)}
                update={() => setRefreshData(!refreshData)}
              />
            </ModalDerived>

            <button
              onClick={() => setOpenModal(true)}
              className="border rounded-md bg-[#155eef] text-white flex items-center gap-1 px-4 py-2 text-xs "
            >
              <AiOutlineUserAdd />
              Create Sub-Account
            </button>
          </div>
        </div>

        {/* Second Section */}
        <div className="flex justify-between">
          {/* Date */}
          <div className="flex  gap-2">
            <div className="relative w-36">
              <DatePicker
                selected={rangeDate.startDate}
                onChange={(e: any) => {
                  const dateFormat = moment(e).format("yyyy-MM-DD");
                  console.log(dateFormat);
                  setRangeDate((formData: any) => ({
                    ...rangeDate,
                    startDate: e,
                  }));
                }}
                placeholderText={rangeDate.startDate}
                className={"text-gray-500"}
              />
              <div className="absolute top-[.9rem] right-3">
                <CiCalendar className="scale-125" />
              </div>
            </div>
            <div className="relative w-36">
              <DatePicker
                selected={rangeDate.endDate}
                onChange={(e: any) => {
                  const dateFormat = moment(e).format("yyyy-MM-DD");
                  console.log(dateFormat);
                  setRangeDate((formData: any) => ({
                    ...rangeDate,
                    endDate: e,
                  }));
                }}
                placeholderText={rangeDate.endDate}
                className={"text-gray-500 "}
              />
              <div className="absolute top-[.9rem] right-3">
                <CiCalendar className="scale-125" />
              </div>
            </div>
          </div>
          <form action="">
            <div className="flex gap-2">
              <div className="relative">
                <input
                  type="search"
                  name="searchbox"
                  className="border h-12  px-3 rounded-md placeholder:font-semibold text-sm placeholder:pl-5 focus:outline-none focus:border-gray-300 "
                  placeholder="Search by sub-account"
                />
                <div className="absolute top-4 left-2 text-gray-400 text-xl ">
                  <BiSearchAlt2 />
                </div>
              </div>
              <button className="border border-gray-300 flex items-center gap-1 px-3 py-2 text-sm rounded-md text-[#4b5563] font-semibold">
                Columns
                <TbColumns3 />
              </button>
              <div>
                <Select
                  name="range"
                  className="rounded-md  text-sm font-medium bg-transparent focus:bg-transparent  placeholder-dark  text-space focus:outline-none focus:border-gray-300 text-black w-28 "
                >
                  <MenuItem value="none">A-Z</MenuItem>
                  <MenuItem value="a">A</MenuItem>
                  <MenuItem value="b">B</MenuItem>
                  <MenuItem value="c">C</MenuItem>
                </Select>
              </div>
              <button className="border border-gray-300  rounded-md text-[#4b5563] w-14 flex items-center justify-around">
                <TbSettings className="scale-125 " />
              </button>
            </div>
          </form>
        </div>

        {/* card */}
        {data?.map((item: any, index: number) => (
          <div key={index}>
            <AccountCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
