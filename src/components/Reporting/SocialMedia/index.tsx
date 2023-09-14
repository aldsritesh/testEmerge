import React, { useMemo, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { RxDotFilled } from "react-icons/rx";
import { MdLeaderboard, MdOutlineFacebook } from "react-icons/md";
import MaterialReactTable, { type MRT_ColumnDef } from "material-react-table";
import { MenuItem } from "@mui/material";
import { HiCursorClick } from "react-icons/hi";
import { BsArrowUpRight } from "react-icons/bs";
import { RiDeleteBin5Line, RiMoneyDollarCircleFill } from "react-icons/ri";
import { FiTrendingDown } from "react-icons/fi";
import ReportingStats from "../Stats";
import { FaBookmark } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";

interface RowData {
  [key: string]: any;
}

export default function ReportingSocialMediaTable({ data }: any) {
  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: "campaign_name",
        id: "campaign_name",
        header: "Campaign Name",
        size: 290,
        Cell: ({ row }) => (
          <div className="flex items-center justify-between gap-5">
            <div>
              <p className="  text-gray-700 font-medium text-[15px]">
                {row.original.campaign_name.name}
              </p>
              <div className="flex items-center gap-2">
                <MdOutlineFacebook className="text-blue-600" />
                <span className="  text-gray-500 font-medium text-[12px] ">
                  {row.original.campaign_name.account}
                </span>
              </div>
            </div>
            <div
              className={`${
                row.original.campaign_name.status === "active"
                  ? "bg-green-100 border-green-400 text-green-600"
                  : "bg-red-100 border-red-400 text-red-600"
              }
                  flex justify-center items-center rounded-full border-[1px]  text-[10px] px-1 py-1  w-16`}
            >
              <div
                className={`${
                  row.original.campaign_name.status === "active"
                    ? "bg-green-500"
                    : "bg-red-500"
                } h-1 w-1 rounded-full mr-1.5`}
              ></div>
              <span className="font-medium">
                {row.original.campaign_name.status}
              </span>
            </div>
          </div>
        ),
        enableColumnFilter: true,
      },
      {
        accessorKey: "impression",
        id: "impression",
        header: "Impression",
        size: 80,
        Cell: ({ row }) => (
          <div className="flex justify-start items-start gap-2">
            <p className="  text-gray-700 font-medium text-[12px]">
              {row.original.impression}
            </p>
          </div>
        ),
        enableColumnFilter: true,
      },
      {
        accessorKey: "clicks",
        id: "clicks",
        header: "Clicks",
        size: 80,
        Cell: ({ row }) => (
          <div className="flex justify-start items-start">
            <p className="  text-gray-700 font-medium text-[12px]">
              {row.original.clicks}
            </p>
          </div>
        ),
        enableColumnFilter: true,
      },
      {
        accessorKey: "totalContact",
        id: "totalContact",
        header: "Total Contact",
        size: 80,
        Cell: ({ row }) => (
          <div className="flex justify-start items-start">
            <p className="  text-gray-700 font-medium text-[12px]">
              {row.original.totalContact}
            </p>
          </div>
        ),
        enableColumnFilter: true,
      },
      {
        accessorKey: "costPerContact",
        id: "costPerContact",
        header: "Cost Per Contact",
        size: 80,
        Cell: ({ row }) => (
          <div className="flex justify-start items-start gap-2 ">
            <p className="  text-gray-700 font-medium text-[12px]">
              {row.original.costPerContact}
            </p>
          </div>
        ),
        enableColumnFilter: true,
      },
      {
        accessorKey: "amountSpent",
        id: "amountSpent",
        header: "Amount Spent",
        size: 80,
        Cell: ({ row }) => (
          <div className="flex justify-start items-start gap-2">
            <p className="text-gray-600 text-sm">{row.original.amountSpent}</p>
          </div>
        ),
        enableColumnFilter: true,
      },
    ],
    []
  );

  const [filterInput, setFilterInput] = useState("");

  const handleFilterChange = (e: any) => {
    const value = e.target.value || "";
    setFilterInput(value);
  };

  const filteredData = data.filter(
    (row: any) =>
      row.campaign_name.name
        .toLowerCase()
        .includes(filterInput.toLowerCase()) ||
      row.impression.toLowerCase().includes(filterInput.toLowerCase()) ||
      row.clicks.toLowerCase().includes(filterInput.toLowerCase()) ||
      row.totalContact.toLowerCase().includes(filterInput.toLowerCase()) ||
      row.amountSpent.toLowerCase().includes(filterInput.toLowerCase()) ||
      row.costPerContact.toLowerCase().includes(filterInput.toLowerCase())
  );

  return (
    <div className="px-4 py-5">
      <div className="flex gap-4 items-center ">
        <h1 className="pb-4 px-4 font-semibold text-2xl"> Social Media </h1>
      </div>
      <div className="flex  pl-5 items-center text-xs justify-between w-10/12 gap-5">
        <div className="w-full md:w-1/4">
          <ReportingStats
            title="Impression"
            currency="$"
            titleIcon={<FaBookmark className="text-sm text-newBlue" />}
            subSpanData={"vs Last month:"}
            subIcon={<BsArrowUpRight className="text-[8px]" />}
            index={1}
            numberValue={537}
            numberValueData={"+0.25%"}
            totalNo={4}
          />
        </div>

        <div className="w-full md:w-1/4">
          <ReportingStats
            title="Clicks"
            currency="$"
            titleIcon={<HiCursorClick className="h-4 w-4 text-yellow-500" />}
            subSpanData={"vs Last month:"}
            subIcon={<BsArrowUpRight className="text-[8px]" />}
            index={2}
            numberValue={537}
            numberValueData={"+0.15%"}
            totalNo={4}
          />
        </div>

        <div className="w-full md:w-1/4">
          <ReportingStats
            title="Leads"
            currency="$"
            titleIcon={<MdLeaderboard className="h-4 w-4 text-greenShade" />}
            subSpanData={"vs Last month:"}
            subIcon={<BsArrowUpRight className="text-[8px]" />}
            index={3}
            numberValue={537}
            numberValueData={"+0.08%"}
            totalNo={4}
          />
        </div>

        <div className="w-full md:w-1/4">
          <ReportingStats
            title="Amount Spent"
            currency="$"
            titleIcon={
              <RiMoneyDollarCircleFill className="h-4 w-4 text-secondary" />
            }
            subSpanData={"vs Last month:"}
            subIcon={<FiTrendingDown className="text-[8px]" />}
            index={4}
            numberValue={537}
            numberValueData={"-0.08%"}
            totalNo={4}
          />
        </div>
      </div>

      <div className=" border rounded-lg mb-4 mt-5 muiTable">
        <MaterialReactTable
          columns={columns}
          data={filteredData}
          enableStickyHeader
          enableColumnOrdering
          enableRowSelection
          initialState={{
            showGlobalFilter: false,
          }}
          muiTablePaginationProps={{
            rowsPerPageOptions: [10, 50, 100, 200],
            showFirstButton: false,
            showLastButton: false,
            SelectProps: {
              native: true,
            },
            labelRowsPerPage: "Showing",
          }}
          renderRowActions={({ row, table }) => (
            <div className="flex justify-between items-center gap-5 pr-10">
              <button
                onClick={() => {
                  table.setEditingRow(row);
                }}
              >
                <CiEdit className="h-4 w-4 text-gray-600" />
              </button>
              <button
                onClick={() => {
                  data.splice(row.index, 1); //assuming simple data table
                  // setData([...data]);
                }}
              >
                <RiDeleteBin5Line className="h-4 w-4 text-gray-600" />
              </button>
            </div>
          )}
          positionPagination="bottom"
          enableToolbarInternalActions={false}
          positionToolbarAlertBanner="bottom"
          muiSearchTextFieldProps={{
            placeholder: `Search ${data?.length} rows`,
            sx: {
              minWidth: "400px",
              marginTop: "5px",
              marginBottom: "10px",
              padding: "1px",
              paddingTop: "2px",
              paddingBottom: "2px",
            },
            variant: "outlined",
          }}
          positionGlobalFilter="left"
          enableSorting={true}
          enableGlobalFilterModes
          enableColumnActions={false}
          enableGlobalFilter={false}
          enableFilters={false}
          enableHiding={false}
          renderTopToolbarCustomActions={({ table }: any) => {
            return (
              <>
                <div className="m-2 w-[300px]  flex items-center  px-2 py-2 border-gray-200 border-[1px] bg-white rounded-md">
                  <MagnifyingGlassIcon className="w-6 h-6 text-gray-400 font-bold  " />
                  <input
                    placeholder="Search Campaign"
                    value={filterInput}
                    onChange={handleFilterChange}
                    className="w-full bg-transparent outline-none border-none pl-2 font-fontSource font-medium text-sm"
                  />
                </div>
              </>
            );
          }}
          positionActionsColumn="last"
          enableRowActions
          renderRowActionMenuItems={({ row }) => [
            <MenuItem key="edit" onClick={() => console.info("Edit")}>
              Edit
            </MenuItem>,
            <MenuItem key="delete" onClick={() => console.info("Delete")}>
              Delete
            </MenuItem>,
          ]}
          muiTableHeadCellProps={{
            sx: {
              borderRight: "2px solid #e9e9e9",
              backgroundColor: "#F5F5F5",
              paddingTop: "25x",
              paddingBottom: "25x",
              borderRadius: "5px",
            },
          }}
          muiTablePaperProps={{
            elevation: 0,
            sx: {
              padding: "5px",
            },
          }}
          muiTableProps={{
            sx: { border: "2px solid #f2f2f2", borderRadius: "5px" },
          }}
          muiTableBodyProps={{
            sx: (theme) => ({
              "& tr:nth-of-type(odd)": {
                backgroundColor: "#ffffff",
              },
              "& tr:nth-of-type(even)": {
                backgroundColor: "#f2f2f2",
              },
            }),
          }}
        />
      </div>
    </div>
  );
}
