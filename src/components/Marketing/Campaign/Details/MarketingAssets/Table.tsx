import React, { useMemo, useEffect, useState } from "react";
import MaterialReactTable, { type MRT_ColumnDef } from "material-react-table";
import Link from "next/link";
import { ExportToCsv } from "export-to-csv"; //or use your library of choice here
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { FiChevronDown } from "react-icons/fi";
import { BsColumns, BsCalendarDate, BsThreeDots } from "react-icons/bs";
import {
  AiOutlineInsertRowAbove,
  AiOutlineBars,
  AiOutlineMail,
  AiOutlineDown,
} from "react-icons/ai";
import { MdOutlineDateRange } from "react-icons/md";

export default function Table({ data }: any) {
  const status = [
    {
      title: "All",
    },
    {
      title: "Published",
    },
    {
      title: "Scheduled",
    },
    {
      title: "Archived",
    },
  ];

  const [activeStatus, setActiveStatus] = useState(0);
  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: "pages_url", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
        id: "pages_url", //id is still required when using accessorFn instead of accessorKey
        header: "Pages & URL",
        size: 200,
        Cell: ({ row }) => (
          <div className=" ">
            <p className="text-gray-700 font-semibold text-sm">
              {row.original.pages_url.title}
            </p>
            <p className="text-gray-500 font-medium text-xs pt-1">
              {row.original.pages_url.url}
            </p>
          </div>
        ),
        enableColumnFilter: true, // could disable just this column's filter
      },
      {
        accessorKey: "status", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
        id: "status", //id is still required when using accessorFn instead of accessorKey
        header: "Status",
        size: 150,
        Cell: ({ row }) => (
          <button
            className={` ${
              row.original.status == "Scheduled"
                ? " border-newBlue bg-blue-100"
                : row.original.status == "Published"
                ? " border-green-500 bg-green-100"
                : " border-gray-300 bg-gray-100"
            }
              flex justify-start items-center border-[1px] text-center py-1 px-2 rounded-full font-normal text-dark`}
          >
            <div
              className={`${
                row.original.status == "Scheduled"
                  ? " bg-newBlue"
                  : row.original.status == "Published"
                  ? " bg-green-500"
                  : " bg-gray-500"
              }

              h-1.5 w-1.5 rounded-full   mr-2 ml-2`}
            ></div>
            <span
              className={`${
                row.original.status == "Scheduled"
                  ? " text-newBlue"
                  : row.original.status == "Published"
                  ? " text-green-500"
                  : " text-gray-600"
              }  pr-3  `}
            >
              {" "}
              {row.original.status}
            </span>
          </button>
        ),
      },
      {
        accessorKey: "created_by", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
        id: "created_by", //id is still required when using accessorFn instead of accessorKey
        header: "Created By",
        size: 150,
        Cell: ({ row }) => (
          <p className="text-gray-700 font-medium text-[13px]">
            {row.original.created_by}
          </p>
        ),
      },
      {
        id: "created_date", //id is still required when using accessorFn instead of accessorKey
        header: "Created At",
        size: 150,
        Cell: ({ row }) => (
          <div className="flex justify-start items-center">
            <MdOutlineDateRange className="text-gray-700 h-4 w-4 mr-1" />
            <p className="text-gray-700 font-medium text-[13px]">
              {row.original.created_date}
            </p>
          </div>
        ),
        accessorKey: "created_date", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
      },
      {
        id: "published_date", //id is still required when using accessorFn instead of accessorKey
        header: "Published Date",
        size: 150,
        Cell: ({ row }) => (
          <div className="flex justify-start items-center">
            <MdOutlineDateRange className="text-gray-700 h-4 w-4 mr-1" />
            <p className="text-gray-700 font-medium text-[13px]">
              {row.original.published_date}
            </p>
          </div>
        ),
        accessorKey: "published_date", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
      },
      {
        id: "other", //id is still required when using accessorFn instead of accessorKey
        header: " ",
        size: 10,
        Cell: ({ row }) => (
          <div className="text-center flex justify-center items-center">
            <BsThreeDots className="text-gray-700 h-4 w-4 mr-1" />
          </div>
        ),
        accessorKey: "other", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
      },
    ],
    []
  );

  const modifiedData = data.map((item: any) => {
    // Modify the "Lead Name" field based on your requirements
    return {
      ...item,
    };
  });

  // Configure the CSV export options
  const csvOptions = {
    fieldSeparator: ",",
    quoteStrings: '"',
    decimalSeparator: ".",
    showLabels: true,
    useBom: true,
    useKeysAsHeaders: false,
    headers: [
      "Workflow Name",
      "Status",
      "Modules",
      "Total Enrolled",
      "Active Enrolled",
      "Last Activity",
      "By User",
    ],
    filename: "workflow",
  };

  const csvExporter = new ExportToCsv(csvOptions);
  const handleExportRows = (rows: any[]) => {
    csvExporter.generateCsv(rows.map((row) => row.original));
  };

  const handleExportData = () => {
    csvExporter.generateCsv(modifiedData);
  };

  const [newData, setNewData] = useState(data);

  const [filterValue, setFilterValue] = useState("");

  const handleFilter = (event: any) => {
    setFilterValue(event.target.value);
  };

  const filteredData = data?.filter((category: any) => {
    return (
      category.pages_url.title
        .toLowerCase()
        .includes(filterValue.toLowerCase()) ||
      category.pages_url.url
        .toLowerCase()
        .includes(filterValue.toLowerCase()) ||
      category.status.toLowerCase().includes(filterValue.toLowerCase()) ||
      category.created_by.toLowerCase().includes(filterValue.toLowerCase()) ||
      category.created_date.toLowerCase().includes(filterValue.toLowerCase()) ||
      category.published_date.toLowerCase().includes(filterValue.toLowerCase())
    );
  });

  return (
    <>
      <div className="mt-1 mb-6  bg-white px-3 py-2">
        <div className="mb-2 flex flex-wrap lg:flex-nowrap justify-start lg:justify-between items-center">
          <div className="w-full lg:w-auto flex justify-between items-center mb-2">
            <div className="dropdown dropdown-bottom  border-r-[1px] border-gray-200 pr-2 mr-2">
              <div
                tabIndex={0}
                className="border-[1px] border-gray-200 m-1 py-2 px-2  2xl:px-4 2xl:py-2  rounded-md flex flex-wrap justify-between items-center"
              >
                <BsCalendarDate className="h-4 w-4 text-darkBlack" />
                <span className="text-gray-500 font-semibold text-[12px] 2xl:text-sm px-2">
                  Date Created
                </span>
                <FiChevronDown className="h-5 w-5 text-darkBlack" />
              </div>
            </div>
            <div className="flex justify-start items-center pl-1">
              {status?.map((tab: any, index: any) => (
                <div
                  key={index}
                  onClick={() => setActiveStatus(index)}
                  className={`py-2 px-4 duration-300   ${
                    activeStatus == index
                      ? "border-[1px] border-secondary text-secondary"
                      : " border-[1px] border-gray-300 text-gray-600 "
                  } cursor-pointer rounded-md  mr-1.5 text-[12px] font-semibold flex justify-start items-center`}
                >
                  {tab.title == "All" ? null : (
                    <div
                      className={` ${
                        tab.title == "Published"
                          ? " bg-greenShade "
                          : tab.title == "Scheduled"
                          ? " bg-newBlue "
                          : tab.title == "Archived"
                          ? " bg-gray-600 "
                          : null
                      } h-1 w-1 rounded-full mr-2`}
                    ></div>
                  )}

                  {tab.title}
                </div>
              ))}
            </div>
          </div>

          <div className="w-full  lg:w-auto flex justify-between items-center mb-2">
            <div className="m-1 ml-2 py-2 px-2  2xl:px-4 rounded-md flex flex-wrap justify-between items-center">
              <BsColumns className="h-4 w-4 text-darkBlack   mr-2" />
              <span className="text-gray-700 font-semibold text-sm ">
                Manage Column
              </span>
            </div>

            <div className="border-l-[1px] border-gray-200 ">
              <Link
                href="/builder/website/craft"
                className="text-xs flex justify-center items-center ml-3 bg-secondary hover:bg-newBlue duration-300 m-1 py-3 px-5 2xl:px-6 text-white rounded-md "
              >
                Create Web Page
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md lg:px-2 rounded-lg muiTable">
          <MaterialReactTable
            columns={columns}
            data={filteredData}
            enableStickyHeader
            enableColumnOrdering
            enableRowSelection
            positionPagination="bottom"
            enableToolbarInternalActions={false}
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
            positionToolbarAlertBanner="bottom"
            // muiSearchTextFieldProps={{
            //   placeholder: `Search ${data.length} rows`,
            //   sx: {
            //     minWidth: "400px",
            //     marginTop: "5px",
            //     marginBottom: "10px",
            //     padding: "1px",
            //     paddingTop: "2px",
            //     paddingBottom: "2px",
            //   },
            //   variant: "outlined",
            // }}
            // positionGlobalFilter="left"
            enableSorting={true}
            // enableGlobalFilterModes
            enableColumnActions={false}
            enableGlobalFilter={false}
            enableFilters={false}
            enableHiding={false}
            renderTopToolbarCustomActions={({ table }) => {
              return (
                <>
                  <div className="mb-2 w-[300px] flex items-center shadow px-2 py-2 border-gray-200 border-[1px] bg-white rounded-md">
                    <MagnifyingGlassIcon className="w-6 h-6 text-gray-400 font-bold  " />
                    <input
                      placeholder="Search leads..."
                      value={filterValue}
                      onChange={handleFilter}
                      className="w-full bg-transparent outline-none border-none pl-2 font-fontSource font-medium text-sm"
                    />
                  </div>
                </>
              );
            }}
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
              sx: {
                border: "2px solid #f2f2f2",
                borderRadius: "5px",
              },
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
    </>
  );
}
