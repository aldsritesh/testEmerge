import React, { useState } from "react";
import DataElements from "./DataElements";
import DragElements from "./DragElements";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Main() {
  const options = [
    {
      title: "Contact Information",
      subData: [
        {
          name: "Contact Name",
        },
      ],
    },
    {
      title: "Contact",
      subData: [
        {
          name: "Contact",
        },
      ],
    },
    {
      title: "Lead Information",
      subData: [
        {
          name: "Lead Source",
        },
      ],
    },
    {
      title: "Company Information",
      subData: [
        {
          name: "Company",
        },
      ],
    },
    {
      title: "Contact Activity",
      subData: [
        {
          name: "Last Contact",
        },
      ],
    },
    {
      title: "Contact Information",
      subData: [
        {
          name: "Contact",
        },
        {
          name: "Contact Id",
        },
      ],
    },
    {
      title: "Contact Activity",
      subData: [
        {
          name: "Contact owner",
        },
        {
          name: "Contact unworked",
        },
      ],
    },
  ];

  const [filterValue, setFilterValue] = useState("");

  const handleFilter = (event: any) => {
    setFilterValue(event.target.value);
  };

  const filteredData = options.filter((item: any) => {
    return (
      item.title.toLowerCase().includes(filterValue.toLowerCase()) ||
      item.subData.some((item: any) =>
        item.name.toLowerCase().includes(filterValue.toLowerCase())
      )
    );
  });

  //   const [selectedData, setSelectedData] = useState<number[]>([]);

  const handleDataStore = (item: any, checked: boolean) => {
    if (checked) {
      setSelectedData([...selectedData, item?.id]);
    } else {
      setSelectedData(selectedData.filter((id: any) => id !== item?.id));
    }
  };

  const [selectedData, setSelectedData] = useState<any>([
    { optionIndex: 0, subDataIndex: 0 },
    { optionIndex: 2, subDataIndex: 0 },
    { optionIndex: 3, subDataIndex: 0 },
    { optionIndex: 6, subDataIndex: 0 },
    { optionIndex: 5, subDataIndex: 1 },
  ]);
  const [optionData, setOptionData] = useState<any>([
    { name: "Contact Name" },
    { name: "Contact" },
    { name: "Lead Source" },
    { name: "Company" },
    { name: "Contact owner" },
    { name: "Last Contact" },
  ]);

  const handleCheckboxChange = (
    optionIndex: any,
    subDataIndex: any,
    item: any
  ) => {
    const isSelected =
      selectedData.findIndex(
        (data: any) =>
          data.optionIndex === optionIndex && data.subDataIndex === subDataIndex
      ) !== -1;
    if (!isSelected) {
      const selectedOption = options[optionIndex];
      const selectedSubData = selectedOption.subData[subDataIndex];
      setOptionData((prevValues: any) => [...optionData, { item }]);
      setSelectedData((prevSelectedData: any) => [
        ...prevSelectedData,
        { optionIndex, subDataIndex },
      ]);
    } else {
      const updatedSubData = [...optionData];
      updatedSubData.splice(subDataIndex, 1);
      setOptionData(updatedSubData);
      setSelectedData((prevSelectedData: any) =>
        prevSelectedData.filter(
          (data: any) =>
            !(
              data.optionIndex === optionIndex &&
              data.subDataIndex === subDataIndex
            )
        )
      );
    }
  };

  const [filterOptionValue, setFilterOptionValue] = useState("");

  const handleDelete = (index: any) => {
    const updatedSubData = [...optionData];
    updatedSubData.splice(index, 1);
    setOptionData(updatedSubData);
  };

  const handleFilterChange = (e: any) => {
    setFilterValue(e.target.value);
  };

  const filteredOptionData = optionData.filter((item: any) =>
    item?.name?.toLowerCase().includes(filterValue.toLowerCase())
  );

  //   console.log("bye", selectedData, "hye", optionData);

  return (
    <div>
      <div className="flex justify-between items-center flex-wrap">
        <div className="w-full lg:w-1/2 border-r-[1px]">
          <div className="h-[100vh] overflow-y-hidden pt-4 px-6 pb-4">
            <p className="text-gray-800 font-medium md:text-base">
              Column Options
            </p>
            <div className="h-[90vh] overflow-y-scroll scrollbar-hide">
              <div className="py-2">
                <div className="rounded-md px-2 py-2 flex justify-start items-center w-full  border-[1px] border-gray-200">
                  <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 font-bold  " />

                  <input
                    type="text"
                    placeholder="Search Options"
                    name="data"
                    value={filterValue}
                    onChange={handleFilter}
                    className="font-medium w-[60%] py-1 px-1 bg-transparent outline-none border-[none] pl-4  text-sm "
                  />
                </div>
              </div>

              <DataElements
                options={filteredData}
                handleChange={(id: any, checked: boolean, item: any) =>
                  handleCheckboxChange(id, checked, item)
                }
                selectedData={selectedData}
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="h-[100vh] overflow-y-hidden pt-4 px-6 pb-4">
            <p className="text-gray-800 font-medium md:text-base">
              Selected Columns
            </p>
            <div className="h-[90vh] overflow-y-scroll scrollbar-hide">
              <div className="py-2 mb-3">
                <div className="rounded-md px-2 py-2 flex justify-start items-center w-full  border-[1px] border-gray-200">
                  <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 font-bold  " />

                  <input
                    type="text"
                    placeholder="Search Options"
                    name="optionData"
                    value={filterValue}
                    onChange={handleFilterChange}
                    className="font-medium w-[60%] py-1 px-1 bg-transparent outline-none border-[none] pl-4  text-sm "
                  />
                </div>
              </div>
              <DragElements columns={filteredOptionData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
