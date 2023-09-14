import React, { useMemo, useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import MaterialReactTable, { type MRT_ColumnDef } from "material-react-table";
import Link from "next/link";
import { ExportToCsv } from "export-to-csv"; //or use your library of choice here
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import CustomPagination from "@/components/UI/CustomPagination";
import moment from "moment";
import { useRouter } from "next/router";
import axios from "axios";
import { baseUrl } from "@/config/APIConstants";
import { useAuthentication } from "@/controllers/auth";

export default function WorkflowTables({ allWorkflows }: any) {
  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: "workflow_name", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
        id: "workflow_name", //id is still required when using accessorFn instead of accessorKey
        header: "WORKFLOW NAME",
        size: 200,
        Cell: ({ row }) => (
          <div className=" ">
            <p
              onClick={() => {
                router.push("/workflow/" + row.original.id);
              }}
              className="text-gray-700 font-medium text-sm cursor-pointer"
            >
              {row.original.workflowTitle}
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
              row.original.isPublished == false
                ? " border-secondary bg-red-100"
                : row.original.isPublished == true
                ? " border-green-500 bg-green-100"
                : " border-gray-300 bg-gray-100"
            }
              flex justify-start items-center border-[1px] text-center py-1 px-2 rounded-full font-normal text-dark`}
          >
            <div
              className={`${
                row.original.isPublished == false
                  ? " bg-secondary"
                  : row.original.isPublished == true
                  ? " bg-green-500"
                  : " bg-gray-500"
              }

              h-1.5 w-1.5 rounded-full   mr-2 ml-2`}
            ></div>
            <span
              className={`${
                row.original.isPublished == false
                  ? " text-secondary"
                  : row.original.isPublished == true
                  ? " text-green-500"
                  : " text-gray-600"
              }  pr-3  `}
            >
              {" "}
              {row.original.isPublished == true ? "Active" : "Inactive"}
              {/* {row.original.isPublished} */}
            </span>
          </button>
        ),
      },
      {
        accessorKey: "modules", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
        id: "modules", //id is still required when using accessorFn instead of accessorKey
        header: "Modules",
        size: 150,
        Cell: ({ row }) => (
          <p className="text-gray-700 font-medium text-sm">
            {row.original.modules ? row.original.modules : "Deals"}
          </p>
        ),
      },
      {
        id: "total_enrolled", //id is still required when using accessorFn instead of accessorKey
        header: "Total Enrolled",
        size: 150,
        Cell: ({ row }) => (
          <p className="text-gray-700 font-medium text-sm">
            {/* {row.original.total_enrolled} */}
            {row.original.totalEnrolled ? row.original.totalEnrolled : "46"}
          </p>
        ),
        accessorKey: "total_enrolled", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
      },
      {
        id: "active_enrolled", //id is still required when using accessorFn instead of accessorKey
        header: "Active Enrolled",
        size: 150,
        Cell: ({ row }) => (
          <p className="text-gray-700 font-medium text-sm">
            {row.original.activeEnrolled ? row.original.activeEnrolled : "12%"}
          </p>
        ),
        accessorKey: "active_enrolled", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
      },
      {
        id: "last_activity", //id is still required when using accessorFn instead of accessorKey
        header: "Last Activity",
        size: 150,
        Cell: ({ row }) => (
          <div>
            <p className="text-gray-700 font-medium text-sm">
              {moment(row.original.updatedOn).format("DD-MM-YYYY")}
            </p>
            {/* <p className="text-gray-500 font-medium text-sm">
              {row.original.last_activity.by_user}
            </p> */}
          </div>
        ),
        accessorKey: "last_activity", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
      },
    ],
    []
  );

  const [data, setData] = useState<any[]>([
    {
      workflow_name: "Auto lead reply",
      status: "Active",
      modules: "Deals",
      total_enrolled: "46",
      active_enrolled: "12%",
      last_activity: {
        dateTime: "Yesterday",
        by_user: "By Esther Howard",
      },
    },
    {
      workflow_name: "Automatic lead reply",
      status: "Inactive",
      modules: "Deals",
      total_enrolled: "46",
      active_enrolled: "12%",
      last_activity: {
        dateTime: "March 12 2023",
        by_user: "By Esther Howard",
      },
    },
    {
      workflow_name: "Automatic lead reply",
      status: "Inactive",
      modules: "Deals",
      total_enrolled: "46",
      active_enrolled: "12%",
      last_activity: {
        dateTime: "March 12 2023",
        by_user: "By Esther Howard",
      },
    },
    {
      workflow_name: "Automatic lead reply",
      status: "Inactive",
      modules: "Deals",
      total_enrolled: "46",
      active_enrolled: "12%",
      last_activity: {
        dateTime: "March 12 2023",
        by_user: "By Esther Howard",
      },
    },
  ]);

  const modifiedData = data.map((item) => {
    // Modify the "Lead Name" field based on your requirements
    return {
      ...item,
      last_activity: `  ${item.last_activity.dateTime}`,
      by_user: `  ${item.last_activity.by_user}`,
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
  const router = useRouter();

  const handleFilter = (event: any) => {
    setFilterValue(event.target.value);
  };

  const filteredData = data.filter((category: any) => {
    return (
      category.workflow_name
        .toLowerCase()
        .includes(filterValue.toLowerCase()) ||
      category.status.toLowerCase().includes(filterValue.toLowerCase()) ||
      category.modules.toLowerCase().includes(filterValue.toLowerCase()) ||
      category.total_enrolled
        .toLowerCase()
        .includes(filterValue.toLowerCase()) ||
      category.active_enrolled
        .toLowerCase()
        .includes(filterValue.toLowerCase()) ||
      category.last_activity.by_user
        .toLowerCase()
        .includes(filterValue.toLowerCase())
    );
  });

  // Delete WorkFlow

  // Pagination
  const [page, setPage] = useState(0);
  const rowsPerPage = 5;

  const paginatedData = useMemo(() => {
    const startIndex = page * rowsPerPage;
    return filteredData.slice(startIndex, startIndex + rowsPerPage);
  }, [filteredData, page]);

  const { token }: any = useAuthentication();

  const deleteWorkflow = async (id: any) => {
    await axios
      .delete(`${baseUrl}workflows/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // console.log(response.data);
        router.reload();
      })
      .catch((error) => console.error(error));
  };
  return (
    <>
      <div>
        <div className="px-2 lg:px-3 py-5">
          <div className="flex gap-4 items-center ">
            <h1 className="pb-4 px-4 font-semibold text-2xl">All Workflow</h1>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap justify-start lg:justify-between items-center">
            <div className="w-full lg:w-auto flex justify-between items-center mb-2">
              <div className="dropdown dropdown-bottom mr-1">
                <label
                  tabIndex={0}
                  className="border-[1px] border-gray-200 m-1 py-2 px-2 rounded-md flex flex-wrap justify-between items-center"
                >
                  <span className="font-semibold text-sm ">All Status</span>
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
                  tabIndex={1}
                  className="border-[1px] border-gray-200 m-1 py-2 px-2 rounded-md flex flex-wrap justify-between items-center"
                >
                  <span className="font-semibold text-sm ">Creator</span>
                  <FiChevronDown className="h-5 w-5 text-darkBlack mt-1 ml-2" />
                </label>
                <ul
                  tabIndex={1}
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
                  tabIndex={2}
                  className="border-[1px] border-gray-200 m-1 py-2 px-2 rounded-md flex flex-wrap justify-between items-center"
                >
                  <span className="font-semibold text-sm ">Type</span>
                  <FiChevronDown className="h-5 w-5 text-darkBlack mt-1 ml-2" />
                </label>
                <ul
                  tabIndex={2}
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

            <div className="w-full  lg:w-auto flex justify-between items-center mb-2">
              <button
                onClick={handleExportData}
                className="mr-3 border-[1px] border-gray-200 text-darkBlack  duration-300 m-1 py-2 px-4  rounded-md flex flex-wrap justify-between items-center"
              >
                Export
              </button>
              <Link
                href="/workflow/create-workflow"
                className="bg-secondary hover:bg-newBlue duration-300 m-1 py-2 px-4 text-white rounded-md flex flex-wrap justify-between items-center"
              >
                Create Workflow
              </Link>
            </div>
          </div>
          <div className="bg-white shadow-md lg:px-2 muiTable rounded-lg">
            <MaterialReactTable
              columns={columns}
              data={allWorkflows}
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
                      router.push("/workflow/" + row.original.id);
                    }}
                  >
                    <CiEdit className="h-4 w-4 text-gray-600" />
                  </button>
                  <button
                    onClick={() => {
                      // data.splice(row.index, 1); //assuming simple data table
                      // setData([...data]);

                      deleteWorkflow(row.original.id);
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
      </div>
    </>
  );
}
