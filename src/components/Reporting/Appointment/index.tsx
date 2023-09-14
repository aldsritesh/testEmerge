import React, { useMemo, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import MaterialReactTable, { type MRT_ColumnDef } from "material-react-table";
import {
  BsArrowUpRight,
  BsBookmarkCheck,
  BsBookmarkCheckFill,
  BsBookmarkDash,
  BsBookmarkPlus,
  BsBookmarkStar,
  BsBookmarkX,
} from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FiBookmark, FiTrendingDown } from "react-icons/fi";
import ReportingStats from "../Stats";
import moment from "moment";
import Image from "next/image";
import { CiEdit } from "react-icons/ci";
import CustomPagination from "@/components/UI/CustomPagination";

interface RowData {
  [key: string]: any;
}

export default function ReportingCallTable() {
  const [data, setData] = useState<RowData[]>([
    {
      id: 1,
      name: "Robert I. Millet",
      created_date: "2023-06-20T14:30:00.000Z",
      duration: "2023-06-20T15:30:00.000Z",
      answered: "website",
      outcome: "dummy",
      user: {
        name: "Clifford C. Shultz",
        time: "",
        image: "../../../../public/images/avatar/yellowdog.jpg",
      },
    },
    {
      id: 2,
      name: "Robert I. Millet",
      created_date: "2023-06-20T14:30:00.000Z",
      duration: "2023-06-20T15:30:00.000Z",
      answered: "facebook",
      outcome: "dummy",

      user: {
        name: "Clifford C. Shultz",
        time: "",
        image: "../../../../public/images/avatar/yellowdog.jpg",
      },
    },
    {
      id: 3,
      name: "Robert I. Millet",
      created_date: "2023-06-20T14:30:00.000Z",
      duration: "2023-06-20T15:30:00.000Z",
      answered: "website",
      outcome: "dummy",

      user: {
        name: "Clifford C. Shultz",
        time: "",
        image: "../../../../public/images/avatar/yellowdog.jpg",
      },
    },
    {
      id: 4,
      name: "Robert I. Millet",
      created_date: "2023-06-20T14:30:00.000Z",
      duration: "2023-06-20T15:30:00.000Z",
      answered: "facebook",
      outcome: "dummy",

      user: {
        name: "Clifford C. Shultz",
        time: "",
        image: "../../../../public/images/avatar/yellowdog.jpg",
      },
    },
    {
      id: 5,
      name: "Robert I. Millet",
      created_date: "2023-06-20T14:30:00.000Z",
      duration: "2023-06-20T15:30:00.000Z",
      answered: "website",
      outcome: "dummy",

      user: {
        name: "Clifford C. Shultz",
        time: "",
        image: "../../../../public/images/avatar/yellowdog.jpg",
      },
    },
  ]);

  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: "name",
        id: "name",
        header: "Name",
        size: 250,
        Cell: ({ row }) => (
          <div className="flex items-center justify-between gap-5">
            <div>
              <p className="  text-gray-700 font-medium text-[15px]">
                {row.original.name}
              </p>
            </div>
          </div>
        ),
        enableColumnFilter: true,
      },
      {
        accessorKey: "created_date",
        id: "created_date",
        header: "Date Booked",
        size: 100,
        Cell: ({ row }) => (
          <div className="flex justify-start items-start gap-2">
            <p className="  text-gray-700 font-medium text-[12px]">
              {moment(row.original.created_date).format("MMM DD, yyy")}
            </p>
          </div>
        ),
        enableColumnFilter: true,
      },
      {
        accessorKey: "duration",
        id: "duration",
        header: "Date Added",
        size: 100,
        Cell: ({ row }) => (
          <div className="flex justify-start items-start">
            <p className="  text-gray-700 font-medium text-[12px]">
              {moment(row.original.duration).format("MMM DD, yyy")}
            </p>
          </div>
        ),
        enableColumnFilter: true,
      },

      {
        accessorKey: "user",
        id: "user",
        header: "Users",
        size: 100,
        Cell: ({ row }) => (
          <div className="flex justify-start items-start">
            <p className="  text-gray-700 font-medium text-[12px]">
              {row.original.user.name}
            </p>
          </div>
        ),
        enableColumnFilter: true,
      },
      {
        accessorKey: "answered", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
        id: "answered", //id is still required when using accessorFn instead of accessorKey
        header: "Source",
        size: 100,
        Cell: ({ row }) => (
          <div className=" ">
            <button
              className={` ${
                row.original.answered == "website"
                  ? " border-greenShade bg-green-100"
                  : row.original.answered == "facebook"
                  ? " border-secondary bg-red-100"
                  : " border-gray-300 bg-gray-100"
              }
              flex justify-start items-center border-[1px] text-center py-1 px-2 rounded-full font-normal text-dark`}
            >
              <div
                className={`${
                  row.original.answered == "website"
                    ? " bg-greenShade"
                    : row.original.answered == "facebook"
                    ? " bg-secondary"
                    : " bg-gray-500"
                }

              h-1.5 w-1.5 rounded-full   mr-2 ml-2`}
              ></div>
              <span
                className={`${
                  row.original.answered == "website"
                    ? " text-greenShade"
                    : row.original.answered == "facebook"
                    ? " text-secondary"
                    : " text-gray-600"
                }  pr-3  text-gray-700 font-medium `}
              >
                {" "}
                {row.original.answered}
              </span>
            </button>
          </div>
        ),
      },
      {
        accessorKey: "outcome",
        id: "outcome",
        header: "Outcome",
        size: 100,
        Cell: ({ row }) => (
          <div className="flex justify-start items-start">
            <p className="  text-gray-700 font-medium text-[12px]">
              {row.original.outcome}
            </p>
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
      row.name.toLowerCase().includes(filterInput.toLowerCase()) ||
      row.duration.toLowerCase().includes(filterInput.toLowerCase()) ||
      row.answered.toLowerCase().includes(filterInput.toLowerCase()) ||
      row.user.name.toLowerCase().includes(filterInput.toLowerCase())
  );

  // Pagination
  const [page, setPage] = useState(0);
  const rowsPerPage = 5;

  const paginatedData = useMemo(() => {
    const startIndex = page * rowsPerPage;
    return filteredData.slice(startIndex, startIndex + rowsPerPage);
  }, [filteredData, page]);

  return (
    <div className="px-4 py-5">
      <div className="flex gap-4 items-center ">
        <h1 className="pb-4 px-4 font-semibold text-2xl"> Appointment </h1>
      </div>
      <div className="flex  pl-5 items-center text-xs justify-between w-full gap-5">
        <div className="w-full md:w-1/6">
          <ReportingStats
            title="Booked"
            currency="$"
            titleIcon={<BsBookmarkPlus className="text-sm text-newBlue" />}
            subSpanData={"vs Last month:"}
            subIcon={<BsArrowUpRight className="text-[8px]" />}
            index={1}
            numberValue={537}
            numberValueData={"+0.25%"}
            totalNo={6}
          />
        </div>

        <div className="w-full md:w-1/6">
          <ReportingStats
            title="Confirmed"
            currency="$"
            titleIcon={<BsBookmarkCheck className="h-4 w-4 text-yellow-500" />}
            subSpanData={"vs Last month:"}
            subIcon={<BsArrowUpRight className="text-[8px]" />}
            index={2}
            numberValue={537}
            numberValueData={"+0.15%"}
            totalNo={6}
          />
        </div>

        <div className="w-full md:w-1/6">
          <ReportingStats
            title="Showed"
            currency="$"
            titleIcon={<BsBookmarkStar className="h-4 w-4 text-greenShade" />}
            subSpanData={"vs Last month:"}
            subIcon={<BsArrowUpRight className="text-[8px]" />}
            index={3}
            numberValue={537}
            numberValueData={"+0.08%"}
            totalNo={6}
          />
        </div>
        <div className="w-full md:w-1/6">
          <ReportingStats
            title="ROF"
            currency="$"
            titleIcon={<BsBookmarkCheck className="h-4 w-4 text-pink-600" />}
            subSpanData={"vs Last month:"}
            subIcon={<BsArrowUpRight className="text-[8px]" />}
            index={3}
            numberValue={537}
            numberValueData={"+0.08%"}
            totalNo={6}
          />
        </div>

        <div className="w-full md:w-1/6">
          <ReportingStats
            title="No Showed"
            currency="$"
            titleIcon={<BsBookmarkDash className="h-4 w-4 text-secondary" />}
            subSpanData={"vs Last month:"}
            subIcon={<FiTrendingDown className="text-[8px]" />}
            index={4}
            numberValue={537}
            numberValueData={"-0.08%"}
            totalNo={6}
          />
        </div>
        <div className="w-full md:w-1/6">
          <ReportingStats
            title="Cancelled"
            currency="$"
            titleIcon={<BsBookmarkX className="h-4 w-4 text-purple-500" />}
            subSpanData={"vs Last month:"}
            subIcon={<FiTrendingDown className="text-[8px]" />}
            index={5}
            numberValue={537}
            numberValueData={"-0.08%"}
            totalNo={6}
          />
        </div>
        <div className="w-full md:w-1/6">
          <ReportingStats
            title="Invalid"
            currency="$"
            titleIcon={<FiBookmark className="h-4 w-4 text-cyan-500" />}
            subSpanData={"vs Last month:"}
            subIcon={<FiTrendingDown className="text-[8px]" />}
            index={6}
            numberValue={537}
            numberValueData={"-0.08%"}
            totalNo={6}
          />
        </div>
      </div>

      <div className=" border rounded-lg mb-4 mt-5 muiTable">
        <MaterialReactTable
          columns={columns}
          data={paginatedData}
          enableStickyHeader
          enableColumnOrdering
          enableRowSelection
          initialState={{
            showGlobalFilter: false,
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
          muiTablePaginationProps={{
            rowsPerPageOptions: [10, 50, 100, 200],
            showFirstButton: false,
            showLastButton: false,
            SelectProps: {
              native: true,
            },
            sx: {
              minWidth: "400px",
              paddingRight: "5px",
            },
            labelRowsPerPage: "Showing",
          }}
          positionPagination="top"
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
        <CustomPagination
          count={filteredData.length} // Use the length of the filteredData for total count
          page={page}
          rowsPerPage={rowsPerPage}
          onChangePage={(newPage: any) => setPage(newPage)}
        />
      </div>
    </div>
  );
}
