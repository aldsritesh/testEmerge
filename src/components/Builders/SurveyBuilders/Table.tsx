import React, { useMemo, useEffect, useState } from "react";
import MaterialReactTable, { type MRT_ColumnDef } from "material-react-table";
import Link from "next/link";
import { ExportToCsv } from "export-to-csv"; //or use your library of choice here
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { FiChevronDown } from "react-icons/fi";
import {
  BsColumns,
  BsCalendarDate,
  BsThreeDots,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { MdOutlineDateRange } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Menu, MenuItem, MenuProps, alpha, styled } from "@mui/material";
import { GoLinkExternal } from "react-icons/go";
import CustomPagination from "@/components/UI/CustomPagination";

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
        accessorKey: "name", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
        id: "name", //id is still required when using accessorFn instead of accessorKey
        header: "Name",
        size: 200,
        Cell: ({ row }) => (
          <div className=" ">
            <p className="text-gray-700 font-semibold text-sm">
              {row.original.name}
            </p>
            <p className="text-gray-500 font-medium text-xs pt-1">
              {row.original.name}
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
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const [filterValue, setFilterValue] = useState("");

  const handleFilter = (event: any) => {
    setFilterValue(event.target.value);
  };

  const filteredData = data.filter((category: any) => {
    return (
      category.name.toLowerCase().includes(filterValue.toLowerCase()) ||
      category.status.toLowerCase().includes(filterValue.toLowerCase()) ||
      category.created_by.toLowerCase().includes(filterValue.toLowerCase()) ||
      category.created_date.toLowerCase().includes(filterValue.toLowerCase()) ||
      category.published_date.toLowerCase().includes(filterValue.toLowerCase())
    );
  });

  const StyledMenu = styled((props: MenuProps) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === "light"
          ? "rgb(55, 65, 81)"
          : theme.palette.grey[300],
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "4px 0",
      },
      "& .MuiMenuItem-root": {
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        "&:active": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  }));

  const open = Boolean(anchorEl);
  // const id = open ? 'simple-popover' : undefined;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  // Pagination
  const [page, setPage] = useState(0);
  const totalCount = data.length;
  const [rowsPerPage, setRowsPerPage] = useState(5);
  // const rowsPerPage = 5;

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedData = useMemo(() => {
    return filteredData.slice(startIndex, endIndex);
  }, [filteredData, endIndex, startIndex]);

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset the page to the first page when changing rowsPerPage
  };

  return (
    <>
      <div className="mt-1 mb-6  bg-white px-3">
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
                href="/builder/survey/template"
                className="text-xs flex justify-center items-center ml-3 bg-secondary hover:bg-newBlue duration-300 m-1 py-3 px-5 2xl:px-6 text-white rounded-md "
              >
                Create Survey
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md lg:px-0 rounded-lg">
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
                <button onClick={handleClick}>
                  <BsThreeDotsVertical />
                </button>
                <StyledMenu
                  className="text-black"
                  id="demo-customized-menu"
                  MenuListProps={{
                    "aria-labelledby": "demo-customized-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose} className="flex gap-2">
                    View Survey Live{" "}
                    <GoLinkExternal className="text-gray-500  h-4 w-4" />
                  </MenuItem>
                  <MenuItem onClick={handleClose}>View Survey Details</MenuItem>
                  <MenuItem onClick={handleClose}>Edit Survey</MenuItem>
                  <MenuItem onClick={handleClose}>Duplicate Survey</MenuItem>
                  <MenuItem onClick={handleClose}>
                    Save Survey as Template
                  </MenuItem>
                  <MenuItem onClick={handleClose}>Archieve </MenuItem>
                  <MenuItem onClick={handleClose} style={{ color: "red" }}>
                    Delete Survey{" "}
                  </MenuItem>
                </StyledMenu>
              </div>
            )}
            muiTablePaginationProps={{
              rowsPerPageOptions: [5, 10, 15, 50, 100, 200],
              showFirstButton: true,
              showLastButton: true,
              SelectProps: {
                native: true,
                onChange: (event) => {
                  setRowsPerPage(parseInt(event.target.value as string, 10));
                  setPage(0); // Reset the page to the first page when changing rowsPerPage
                },
              },
              sx: {
                minWidth: "400px",
                paddingRight: "5px",
              },
              // component: "div",
              count: filteredData.length,
              page: page,
              // rowsPerPage: rowsPerPage,
              labelRowsPerPage: "Showing", // You can customize the label
              // onChangeRowsPerPage: handleChangeRowsPerPage,
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
                      placeholder="Search ..."
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
            count={totalCount} // Use the length of the filteredData for total count
            page={page}
            rowsPerPage={rowsPerPage}
            onChangePage={(newPage: any) => setPage(newPage)}
          />
        </div>
      </div>
    </>
  );
}
