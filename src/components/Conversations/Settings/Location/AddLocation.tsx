import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";

export default function AddLocation() {
  const [selectedItems, setSelectedItems] = useState<any>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const options = [
    {
      id: 1,
      title: "New York City",
    },
    {
      id: 2,
      title: "Los Angeles",
    },
    {
      id: 3,
      title: "San Francisco",
    },
    {
      id: 4,
      title: "Chicago",
    },
    {
      id: 5,
      title: "Las Vegas",
    },
    {
      id: 6,
      title: "Grand Canyon",
    },
    {
      id: 7,
      title: "Yellowstone National Park",
    },
    {
      id: 8,
      title: "Miami",
    },
    {
      id: 9,
      title: "New Orleans",
    },
    {
      id: 10,
      title: "Seattle",
    },

    // Add more options as needed
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleItemClick = (option: any) => {
    const isSelected = selectedItems.some((item: any) => item.id === option.id);
    if (isSelected) {
      const updatedItems = selectedItems.filter(
        (item: any) => item.id !== option.id
      );
      setSelectedItems(updatedItems);
    } else {
      setSelectedItems([...selectedItems, option]);
    }
  };

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const newOption = { id: Date.now(), label: inputValue };
      setSelectedItems([...selectedItems, newOption]);
      setInputValue("");
    }
  };

  const handleDeleteClick = (option: any) => {
    const updatedItems = selectedItems.filter(
      (item: any) => item.id !== option.id
    );
    setSelectedItems(updatedItems);
  };

  return (
    <div className="relative">
      <div
        onClick={toggleDropdown}
        className={` border-[1px] border-gray-300 px-3 flex justify-between items-center
               ${dropdownOpen ? " rounded-t-md py-1.5" : " rounded-md py-3"}  `}
      >
        <ul className="flex flex-wrap justify-start gap-2 items-center">
          {selectedItems.map((item: any, index: number) => (
            <div
              key={item.id}
              className="bg-blue-50 px-1 border-[1px] py-1 border-gray-300 rounded-[3spx] gap-1 flex justify-start items-center"
            >
              <p
                className={`  text-gray-600 text-[13px] font-semibold  tracking-wide mr-1`}
              >
                {item.title}
              </p>
              <button
                className="delete-button"
                onClick={() => handleDeleteClick(item)}
              >
                <RxCross1 className=" h-3 w-3 text-gray-700" />
              </button>
            </div>
          ))}
        </ul>
        <button>
          <BsChevronDown className="h-5 w-5 text-gray-400" />
        </button>
      </div>
      {dropdownOpen && (
        <div className="h-[22vh] overflow-y-scroll scrollbar-hide absolute w-full bg-white border-t-0  border-[1px] border-gray-300 rounded-b-md py-3 px-3">
          <button onClick={toggleDropdown} className="absolute top-3 right-4 ">
            <RxCross1 className=" h-3 w-3 text-secondary" />
          </button>

          <div className="w-full flex flex-wrap justify-start">
            {options.map((option: any) => (
              <div
                key={option.id}
                className="w-full lg:w-1/2 flex justify-start items-center pt-2 pb-2 mb-1 rounded-lg"
              >
                <input
                  type="checkbox"
                  value={option.title}
                  // checked={selectedItems.title.includes(option.title)}
                  onChange={() => handleItemClick(option)}
                  className="border-gray-400 checkbox checkbox-sm checkbox-info"
                />

                <div className="flex justify-start items-center ">
                  <p
                    className={`  text-gray-600 text-[11px] font-medium  tracking-wide ml-2   `}
                  >
                    {option?.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
