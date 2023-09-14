import React, { useMemo, useState } from "react";
import MaterialReactTable, { type MRT_ColumnDef } from "material-react-table";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

import { FaClock, FaUser } from "react-icons/fa";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { RxCounterClockwiseClock, RxExternalLink } from "react-icons/rx";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import CustomPagination from "@/components/UI/CustomPagination";

export default function WorkFlowTables({ sdata }: any) {
  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: "contact", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
        id: "contact", //id is still required when using accessorFn instead of accessorKey
        header: "Contact",
        size: 200,
        Cell: ({ row }) => (
          <div>
            <div className="flex  gap-2">
              <FaUser className="mt-1" />
              <div>
                <div className="text-gray-700 font-medium text-sm flex items-center gap-3">
                  {row.original.contactName}
                  <RxExternalLink className="scale-90" />
                </div>
                <p className="text-xs">{row.original.contactEmail}</p>
              </div>
            </div>
          </div>
        ),
        enableColumnFilter: true, // could disable just this column's filter
      },
      {
        accessorKey: "action", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
        id: "action", //id is still required when using accessorFn instead of accessorKey
        header: "Action",
        size: 150,
        Cell: ({ row }) => (
          <div className="flex items-center gap-1">
            {row.original.action == "WAIT" ? (
              <FaClock />
            ) : row.original.action == "SMS" ? (
              <BsFillChatSquareTextFill />
            ) : (
              ""
            )}

            <p className="text-gray-700 font-medium text-sm">
              {row.original.action}
            </p>
          </div>
        ),
      },
      {
        accessorKey: "status", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
        id: "status", //id is still required when using accessorFn instead of accessorKey
        header: "Status",
        size: 150,
        Cell: ({ row }) => (
          <button
            className="
              flex justify-start items-center text-center py-1 px-2  font-normal text-dark"
          >
            <div
              className={`${
                row.original.status == "WAITING"
                  ? " bg-secondary"
                  : row.original.status == "EXECUTED"
                  ? " bg-green-500"
                  : " bg-gray-500"
              }

              h-1.5 w-1.5 rounded-full   mr-2 ml-2`}
            ></div>
            <span
              className={`${
                row.original.status == "WAITING"
                  ? " text-secondary"
                  : row.original.status == "EXECUTED"
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
        id: "executedOn", //id is still required when using accessorFn instead of accessorKey
        header: "Executed On",
        size: 150,
        Cell: ({ row }) => (
          <p className="text-gray-700 font-medium text-sm">
            {row.original.executedOn}
          </p>
        ),
        accessorKey: "executedOn", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
      },
      {
        id: "more_Details", //id is still required when using accessorFn instead of accessorKey
        header: "More Details",
        size: 150,
        Cell: ({ row }) => (
          <p className="text-gray-700 font-medium text-xl flex justify-center items-center">
            <HiOutlineClipboardDocumentList />
          </p>
        ),
        accessorKey: "more_Details", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
      },
      {
        id: "execution_Log", //id is still required when using accessorFn instead of accessorKey
        header: "Execution Log ",
        size: 150,
        Cell: ({ row }) => (
          <div>
            <p className="text-gray-700 font-medium text-xl flex items-center justify-center">
              <RxCounterClockwiseClock />
            </p>
          </div>
        ),
        accessorKey: "execution_Log", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
      },
    ],
    []
  );

  const [data, setData] = useState<any[]>([
    {
      contact: "John doe",
      email: "johnDoe@gmail.com",
      status: "Waiting",
      action: "Wait",
      executed_On: "June 19th 2023",
    },
    {
      contact: "John doe",
      email: "johnDoe@gmail.com",
      status: "Executed",
      action: "SMS",
      executed_On: "June 19th 2023",
    },
    {
      contact: "John doe",
      email: "johnDoe@gmail.com",
      status: "Waiting",
      action: "Wait",
      executed_On: "June 19th 2023",
    },
    {
      contact: "John doe",
      email: "johnDoe@gmail.com",
      status: "Waiting",
      action: "Wait",
      executed_On: "June 19th 2023",
    },
    {
      contact: "John doe",
      email: "johnDoe@gmail.com",
      status: "Executed",
      action: "SMS",
      executed_On: "June 19th 2023",
    },
    {
      contact: "John doe",
      email: "johnDoe@gmail.com",
      status: "Waiting",
      action: "Wait",
      executed_On: "June 19th 2023",
    },
  ]);

  const [filterValue, setFilterValue] = useState("");

  const handleFilter = (event: any) => {
    setFilterValue(event.target.value);
  };

  const filteredData = data.filter((category: any) => {
    return (
      category.contact.toLowerCase().includes(filterValue.toLowerCase()) ||
      category.status.toLowerCase().includes(filterValue.toLowerCase()) ||
      category.action.toLowerCase().includes(filterValue.toLowerCase())
    );
  });

  // Pagination
  const [page, setPage] = useState(0);
  const rowsPerPage = 5;

  const paginatedData = useMemo(() => {
    const startIndex = page * rowsPerPage;
    return filteredData.slice(startIndex, startIndex + rowsPerPage);
  }, [filteredData, page]);

  return (
    <div className="bg-white shadow-md lg:px-2 muiTable rounded-lg">
      <MaterialReactTable
        columns={columns}
        data={sdata}
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
              <div className="mb-2 w-[300px] flex items-center shadow px-2 py-2 border-gray-200 border-[1px] bg-white rounded-md">
                <MagnifyingGlassIcon className="w-6 h-6 text-gray-400 font-bold  " />
                <input
                  placeholder="Search"
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
          sx: { border: "2px solid #f2f2f2", borderRadius: "5px" },
        }}
      />
      <CustomPagination
        count={filteredData.length} // Use the length of the filteredData for total count
        page={page}
        rowsPerPage={rowsPerPage}
        onChangePage={(newPage: any) => setPage(newPage)}
      />
    </div>
  );
}
