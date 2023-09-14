import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { AiOutlineCalendar, AiOutlineClose } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaFolderMinus } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import ImageDropBox from "../controls/ImageDropBox";

const foldersData = [
  {
    id: 1,
    name: "Company Info",
    modified: "07/05/2023",
    owner: "Annette Black",
  },

  {
    id: 2,
    name: "Important Note",
    modified: "07/05/2023",
    owner: "Annette Black",
  },
  {
    id: 3,
    name: "Client Meeting Note",
    modified: "07/05/2023",
    owner: "Annette Black",
  },
  {
    id: 4,
    name: "Standard Meeting Note",
    modified: "07/05/2023",
    owner: "Annette Black",
  },
];

export default function FileUpload({
  onClose,
  onSave,
}: {
  onClose: Function;
  onSave: Function;
}) {
  const [selected, setSelected] = useState(true);
  const [imageFile, setImageFile] = useState<null | File>(null);

  const handleTab = (index: any) => {
    setSelected(!selected);
  };

  return (
    <div className=" bg-white rounded-lg overflow-y-auto w-full scrollbar-hide ">
      <div className=" pt-5 pb-3 w-screen md:w-[110vh]">
        <div className="border-b-[1px] pb-4 px-5">
          <div className="h-[8vh] flex justify-between items-start  ">
            <div>
              <p className="text-gray-800 font-medium md:text-lg text-center">
                Select File
              </p>
            </div>

            <button
              onClick={() => {
                onClose();
              }}
            >
              <AiOutlineClose className="text-gray-800 h-6 w-6" />
            </button>
          </div>

          <div className="flex items-center">
            <div
              className={
                selected == true
                  ? ` font-bold border-b-[2px] border-b-black cursor-pointer`
                  : ` text-gray-400 cursor-pointer `
              }
              onClick={() => handleTab(true)}
            >
              <p className="text-center">Upload File</p>
            </div>

            <div className="pl-5">
              <div
                className={
                  selected == false
                    ? ` font-bold border-b-[2px] border-b-black cursor-pointer`
                    : ` text-gray-400 cursor-pointer `
                }
                onClick={() => handleTab(true)}
              >
                <p className="text-center">File & Folders </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-5">
          {selected == true ? (
            <div className="min-h-[65vh]">
              <ImageDropBox
                onChange={(e: File) => setImageFile(e)}
                onDelete={() => setImageFile(null)}
              />

              <div className="relative">
                <p className="pb-1 font-bold text-sm">Upload from URL</p>
                <input className="w-full h-12 rounded-md border border-gray-200 px-2" />

                <div className="absolute bottom-[0.45rem] right-2">
                  <button className="border border-orange-400 px-6 text-orange-400 py-1  rounded-md">
                    Upload
                  </button>
                </div>
              </div>

              <div className="absolute right-4 bottom-3 flex justify-end items-center pt-4">
                <button
                  className="mr-3 px-3 py-2 text-orange-500"
                  onClick={() => onClose()}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-1 bg-orange-500 text-white rounded-md"
                  onClick={() => {
                    if (!imageFile) {
                      alert("Choose an image");
                      return;
                    }
                    onSave(imageFile);
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          ) : (
            <div className=" w-full h-[65vh] mt-2 ">
              {/* <div>File and Folders</div> */}

              <div className="flex items-center">
                <div className="mb-2 w-[250px] flex items-center shadow px-2 py-2 border-gray-200 border-[1px] bg-white rounded-md">
                  <MagnifyingGlassIcon className="w-6 h-6 text-gray-400 font-bold  " />
                  <input
                    placeholder="Search files"
                    className="w-full bg-transparent outline-none border-none pl-2 font-fontSource font-medium text-sm"
                  />
                </div>

                <div className="dropdown dropdown-bottom mr-1">
                  <label
                    tabIndex={0}
                    className="border-[1px] border-gray-200 ml-2 py-2 px-2  2xl:px-4 2xl:py-2  rounded-md flex flex-wrap justify-between items-center"
                  >
                    <span className="flex items-center text-gray-500 font-semibold text-[12px] 2xl:text-sm">
                      <CgProfile size={16} />{" "}
                      <span className="pl-2">All Owner</span>
                    </span>
                    <FiChevronDown className="h-5 w-5 text-darkBlack mt-1 ml-2" />
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40"
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </div>

                <div className="dropdown dropdown-bottom mr-1">
                  <label
                    tabIndex={0}
                    className="border-[1px] border-gray-200 ml-2 py-2 px-2  2xl:px-4 2xl:py-2  rounded-md flex flex-wrap justify-between items-center"
                  >
                    <span className="flex items-center text-gray-500 font-semibold text-[12px] 2xl:text-sm">
                      <AiOutlineCalendar size={16} />
                      <span className="pl-2">Date Upload</span>
                    </span>
                    <FiChevronDown className="h-5 w-5 text-darkBlack mt-1 ml-2" />
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40"
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 overflow-y-scroll">
                <table className="w-full ">
                  <thead>
                    <tr>
                      <th className="w-[40%] font-bold text-start">Name</th>
                      <th className="w-[30%] font-bold text-start">Modified</th>
                      <th className="w-[30%] font-bold text-start">Owner</th>
                    </tr>
                  </thead>

                  {/* <div> */}

                  <tbody>
                    {foldersData.map((item: any, index: any) => (
                      <tr
                        key={index}
                        className="border-b border-b-gray-300 overflow-y-auto "
                      >
                        <td className="w-[50%] flex items-center text-start py-2">
                          <div>
                            <FaFolderMinus
                              size={28}
                              className="text-blue-500"
                            />
                          </div>
                          <div>
                            <p className="text-sm pl-2 font-bold whitespace-nowrap">
                              {item.name}
                            </p>
                          </div>
                        </td>
                        <td className="w-[25%] text-start py-2">
                          {item.modified}
                        </td>
                        <td className="w-[25%] text-start py-2">
                          {item.owner}
                        </td>
                      </tr>
                    ))}
                  </tbody>

                  {/* </div> */}
                </table>

                <div className="absolute right-4 bottom-3 flex justify-end items-center pt-4">
                  <button className="mr-3 px-3 py-2 text-orange-500">
                    Cancel
                  </button>
                  <button
                    className="px-4 py-1 bg-orange-500 text-white rounded-md"
                    onClick={() => {
                      if (!imageFile) {
                        alert("Choose an image");
                        return;
                      }
                      onSave(imageFile);
                    }}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
