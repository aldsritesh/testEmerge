import { Table } from "@mui/material";
import React from "react";
import { RiDeleteBinFill, RiDeleteBinLine } from "react-icons/ri";
import { RxDragHandleDots2 } from "react-icons/rx";

const TableData = [
  { name: "Appointment Booked", shortName: "Booked" },
  { name: "Waiting for customer Response", shortName: "Waiting" },
  { name: "Auto Close", shortName: "AutoClosed" },
];

const DispositionManage = () => {
  return (
    <div className="flex justify-between mx-5 pb-28">
      <div className="w-1/4  text-[#47494b] text-lg py-1 font-semibold">
        Disposition Management
        <p className="text-[#47494b] text-xs">
          You can set the options agent get to choose when they end a
          Conversation.
        </p>
      </div>

      <div className="w-3/4">
        <div className="bg-white border rounded-md my-3 h-fit">
          <div className="m-5 border  rounded-md">
            <table className="table-fixed">
              <thead className="bg-[#f5f5f5] text-[#6a6971] text-xs h-16">
                <tr>
                  <th className="w-38 text-start px-3"> NAME</th>
                  <th className="w-36 text-start ">SHORT NAME</th>
                  <th className="text-start ">DISPOSITION-TAG (OPTIONAL)</th>
                  <th>COMMENTS ALLOWED</th>
                  <th>COMMENTS MANDATORY</th>
                  <th className="w-28">ACTION</th>
                </tr>
              </thead>
              <tbody className="w-28">
                {TableData.map((item: any, index: number) => (
                  <tr
                    key={index}
                    className="border-b text-sm  font-semibold h-24 "
                  >
                    <td className="px-2 w-36">{item.name}</td>
                    <td className="px-2">{item.shortName}</td>
                    <td>
                      <input
                        type="text"
                        name=""
                        className="border rounded w-20 p-1 border-gray-400 "
                      />
                    </td>
                    <td className="text-center">
                      <input type="checkbox" className="toggle scale-75 " />
                    </td>
                    <td className="text-center">
                      <input type="checkbox" className="toggle scale-75" />
                    </td>
                  </tr>
                ))}
                {[...Array(14)].map((item: any, index: number) => (
                  <tr
                    key={index}
                    className="border-b text-sm  font-semibold h-24 "
                  >
                    <td className="flex justify-start px-2 items-center gap-2 h-24 ">
                      {" "}
                      <RxDragHandleDots2 className="text-bold text-lg" />
                      <input
                        type="text"
                        name=""
                        className="border rounded w-36 p-1 border-gray-400 "
                      />
                    </td>
                    <td className="px-2 ">
                      {" "}
                      <input
                        type="text"
                        name=""
                        className="border rounded w-28 p-1 border-gray-400 "
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name=""
                        className="border rounded w-20 p-1 border-gray-400 "
                      />
                    </td>
                    <td className="text-center">
                      <input type="checkbox" className="toggle scale-75 " />
                    </td>
                    <td className="text-center">
                      <input type="checkbox" className="toggle scale-75" />
                    </td>
                    <td className="flex justify-center items-center w-28 h-20">
                      <button>
                        <RiDeleteBinLine className="text-lg" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DispositionManage;
