import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { AiFillFacebook } from "react-icons/ai";

export default function AddMarketingAsset({ handleChange, onClose }: any) {
  const [data, setData] = useState<any>([]);

  const addMarketingAsset = [
    {
      pages_url: "App Design & Development",
      account: "Emerge Ad Account",
      status: "Published",
      created_by: {
        name: "Darlene Robertson",
        image: "",
      },
      published_date: new Date(),
      assetStatus: "Active",
    },
    {
      pages_url: "Web & Mobile App Design Offer",
      account: "Emerge Ad Account",
      status: "Published",
      created_by: {
        name: "Darlene Robertson",
        image: "",
      },
      published_date: new Date(),
      assetStatus: "Active",
    },
    {
      pages_url: "Web Design Promo",
      account: "Emerge Ad Account",
      status: "Published",
      created_by: {
        name: "Darlene Robertson",
        image: "",
      },
      published_date: new Date(),
      assetStatus: "Active",
    },
    {
      pages_url: "UX Audit Offer",
      account: "Emerge Ad Account",
      status: "Published",
      created_by: {
        name: "Darlene Robertson",
        image: "",
      },
      published_date: new Date(),
      assetStatus: "Active",
    },
  ];

  const handleCheckboxChange = (item: any) => {
    // Check if the item is already selected
    const isSelected = data.some(
      (selectedItem: any) => selectedItem.pages_url === item.pages_url
    );

    if (isSelected) {
      // Remove the item from the data state
      setData(
        data.filter(
          (selectedItem: any) => selectedItem.pages_url !== item.pages_url
        )
      );
    } else {
      // Add the item to the data state
      setData([...data, item]);
    }
  };

  const [filterValue, setFilterValue] = useState("");

  const handleFilter = (event: any) => {
    setFilterValue(event.target.value);
  };

  const filteredData = addMarketingAsset.filter((item: any) => {
    return (
      item.pages_url.toLowerCase().includes(filterValue.toLowerCase()) ||
      item.account.toLowerCase().includes(filterValue.toLowerCase()) ||
      item.status.toLowerCase().includes(filterValue.toLowerCase()) ||
      item.created_by.name.toLowerCase().includes(filterValue.toLowerCase()) ||
      item.assetStatus.toLowerCase().includes(filterValue.toLowerCase())
    );
  });

  return (
    <div className="flex flex-col justify-between h-[100vh]">
      <div className="py-4 h-[76vh] 2xl:h-[83vh]">
        <div className=" pb-4 ">
          <div className="rounded-md px-2 py-2 flex justify-start items-center w-full border-[1px]">
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 font-bold  " />

            <input
              type="text"
              placeholder="Search Ads"
              name="subContentTitle"
              value={filterValue}
              onChange={handleFilter}
              className="w-full py-1 px-2 bg-transparent outline-none border-[none] pl-4 font-fontSource font-medium text-sm "
            />
          </div>
        </div>

        {data?.length >= 1 && (
          <div className="flex justify-between items-center bg-gray-100 rounded-md px-4 py-4 mb-6">
            <p> {data?.length} item selected</p>
            <button
              onClick={() => setData([])}
              className="text-secondary text-sm"
            >
              Unselect All
            </button>
          </div>
        )}

        <div className="flex flex-col mb-4">
          {filteredData.map((item, index) => (
            <div
              key={index}
              className="mb-5 border-[1px] h-16 px-2 rounded-lg flex items-center justify-between"
            >
              <div className="w-10">
                <div className="form-control">
                  <input
                    type="checkbox"
                    checked={data.some(
                      (selectedItem: any) =>
                        selectedItem.pages_url === item.pages_url
                    )}
                    className="checkbox checkbox-info border-gray-300"
                    onChange={() => handleCheckboxChange(item)}
                  />
                </div>
              </div>

              <div className="w-4/5">
                <p className="text-sm font-medium text-gray-700 capitalize pb-0.5">
                  {item.pages_url}
                </p>
                <div className="flex items-center gap-1">
                  <span>
                    <AiFillFacebook className="text-blue-600 h-4 w-4 pb-0.5" />
                  </span>
                  <p className="text-xs font-medium text-gray-500 capitalize pb-0.5">
                    {item.account}
                  </p>
                </div>
              </div>

              <div>
                <button
                  className={`${
                    item.assetStatus === "Active"
                      ? "bg-green-100 border-green-400 text-green-600"
                      : "bg-red-100 border-red-400 text-red-600"
                  }
                  flex justify-center items-center rounded-full border-[1px] py-1 text-[12px] p-1 w-20`}
                >
                  <div
                    className={`${
                      item.assetStatus === "Active"
                        ? "bg-green-500"
                        : "bg-red-500"
                    } h-1 w-1 rounded-full mr-1.5`}
                  ></div>
                  <span className="font-medium">{item.assetStatus}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[26vh] 2xl:h-[18vh] py-2 px-3">
        <div className="flex justify-end items-end">
          <button
            onClick={() => {
              handleChange(data);
              onClose();
            }}
            className="font-semibold   mb-2 bg-secondary rounded-md py-1.5 px-6 text-white"
          >
            Create lead
          </button>
        </div>
      </div>
    </div>
  );
}
