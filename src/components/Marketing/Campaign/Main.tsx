import { useState } from "react";
import { HiPlusSmall } from "react-icons/hi2";
import { AiOutlineUser } from "react-icons/ai";
import { BiCalendarAlt } from "react-icons/bi";
import { BsColumns } from "react-icons/bs";
import TablesData from "./Main/CampaignTable";

interface RowData {
  [key: string]: any;
}

const mDeatails = [
  { title: "Marketing Assets" },
  { title: "Task" },
  { title: "Performance" },
];
const MainData = () => {
  const [select, setSelect] = useState(0);
  const [data, setData] = useState<RowData[]>([
    {
      id: "1",
      campaign_name: "Design Asset Promo",
      owner: {
        name: "Darlene Robertson",
        image: "",
      },
      goals: "$100.000",
      budget: "$10.000",
      dateCreated: "Jan 23 ,2022",
      action: "",
    },
    {
      id: "2",
      campaign_name: "Analysing the Witches",
      owner: {
        name: "Darlene Robertson",
        image: "",
      },
      goals: "$100.000",
      budget: "$10.000",
      dateCreated: "jan 23,2022",
      action: "",
    },
    {
      id: "3",
      campaign_name: "Exam Skills",
      owner: {
        name: "Darlene Robertson",
        image: "",
      },
      goals: "$100.000",
      budget: "$10.000",
      dateCreated: "Jan 23,2023",
      action: "",
    },
    {
      id: "4",
      campaign_name: "Guilt in Macbeth",
      owner: {
        name: "Darlene Robertson",
        image: "",
      },
      goals: "$100.000",
      budget: "$10.000",
      dateCreated: "Jan 23,2023",
      action: "",
    },
    {
      id: "5",
      campaign_name: "English Exam Practise",
      owner: {
        name: "Darlene Robertson",
        image: "",
      },
      goals: "$100.000",
      budget: "$10.000",
      dateCreated: "Jan 23,2023",
      action: "",
    },
    {
      id: "6",
      campaign_name: "Muscular Endurance",
      owner: {
        name: "Darlene Robertson",
        image: "",
      },
      goals: "$100.000",
      budget: "$10.000",
      dateCreated: "Jan 23,2023",
      action: "",
    },
    {
      id: "7",
      campaign_name: "Mi Vida",
      owner: {
        name: "Darlene Robertson",
        image: "",
      },
      goals: "$100.000",
      budget: "$10.000",
      dateCreated: "Jan 23,2023",
      action: "",
    },
  ]);

  return (
    <div className="w-[90vw] p-4 border border-b-0 m-20">
      {/* Section first */}

      <div className="w-full h-16  flex items-center   ">
        <h1 className="text-3xl font-semibold  pt-3">Campaign</h1>
      </div>

      {/* Second Section */}
      <div className="w-full h-20  flex items-center justify-between">
        <div>
          <form className="flex mb-3 gap-2 font-semibold items-center text-sm text-slate-600 ">
            <select className="border rounded-md py-2 px-2 ">
              <option value="">
                {" "}
                <BiCalendarAlt /> Date created
              </option>
              <option value=""> Date 1</option>
              <option value=""> Date 2</option>
            </select>

            <select className="border rounded-md py-2 px-2 ">
              <option value=""> Campaign Owner</option>
              <option value=""> user1</option>
              <option value=""> user2</option>
            </select>

            <select name="" className="border rounded-md py-2 px-2">
              <option value="">Budget range</option>
              <option value="">value2</option>
              <option value="">value3</option>
            </select>
          </form>
        </div>

        {/*  Button */}
        <div className="flex">
          <button
            className=" py-2 px-4 border rounded-md flex items-center m-4 gap-2 text-sm font-semibold hover:bg-red- 
       400"
          >
            <BsColumns className="" />
            Manage Column
          </button>

          <button
            className=" py-2 px-4 bg-red-500 rounded-md flex items-center m-4 text-white text-sm font-semibold hover:bg-red- 
       400"
          >
            Create Campaign
          </button>
        </div>
      </div>

      {/* Third Section table */}
      <div className="">
        <TablesData />
      </div>

      <div></div>
    </div>
  );
};

export default MainData;
