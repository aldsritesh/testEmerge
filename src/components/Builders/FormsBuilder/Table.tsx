import React, { useMemo, useEffect, useState, useContext } from "react";
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
import lz from "lzutf8";
import { MdOutlineDateRange } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Menu, MenuItem, MenuProps, alpha, styled } from "@mui/material";
import { GoLinkExternal } from "react-icons/go";
import moment from "moment";
import CustomPagination from "@/components/UI/CustomPagination";
import axios from "axios";
import { baseUrl, userID } from "@/config/APIConstants";
import { useRouter } from "next/router";
import { CraftContext } from "@/pages/builder/form/craft";
import { useEditor } from "@craftjs/core";
import { GlobalContext } from "@/layouts/GlobalLayout";
import { useAuthentication } from "@/controllers/auth";

export default function Table({ data, isLoading }: any) {
  // const { actions, query, enabled } = useEditor((state) => ({
  //   enabled: state.options.enabled,
  // }));
  const { setFormId } = useContext(CraftContext);
  const router = useRouter();
  const [form, setForm] = useState({});
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
          </div>
        ),
        enableColumnFilter: true, // could disable just this column's filter
      },
      // {
      //   accessorKey: "status", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
      //   id: "status", //id is still required when using accessorFn instead of accessorKey
      //   header: "Status",
      //   size: 150,
      //   Cell: ({ row }) => (
      //     <button
      //       className={` ${
      //         row.original.status == "Scheduled"
      //           ? " border-newBlue bg-blue-100"
      //           : row.original.status == "Published"
      //           ? " border-green-500 bg-green-100"
      //           : " border-gray-300 bg-gray-100"
      //       }
      //         flex justify-start items-center border-[1px] text-center py-1 px-2 rounded-full font-normal text-dark`}
      //     >
      //       <div
      //         className={`${
      //           row.original.status == "Scheduled"
      //             ? " bg-newBlue"
      //             : row.original.status == "Published"
      //             ? " bg-green-500"
      //             : " bg-gray-500"
      //         }

      //         h-1.5 w-1.5 rounded-full   mr-2 ml-2`}
      //       ></div>
      //       <span
      //         className={`${
      //           row.original.status == "Scheduled"
      //             ? " text-newBlue"
      //             : row.original.status == "Published"
      //             ? " text-green-500"
      //             : " text-gray-600"
      //         }  pr-3  `}
      //       >
      //         {" "}
      //         {row.original.status}
      //       </span>
      //     </button>
      //   ),
      // },
      {
        accessorKey: "addedOn", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
        id: "addedOn", //id is still required when using accessorFn instead of accessorKey
        header: "Created By",
        size: 150,
        Cell: ({ row }) => (
          <p className="text-gray-700 font-medium text-[13px]">John mark</p>
        ),
      },

      {
        id: "updatedOn", //id is still required when using accessorFn instead of accessorKey
        header: "Updated At",
        size: 150,
        Cell: ({ row }) => (
          <p className="text-gray-700 font-medium text-[13px]">
            {moment(row.original.updatedOn).format("DD-MM-YYYY")}
          </p>
        ),
        accessorKey: "updatedOn", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
      },
    ],
    []
  );

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const [filterValue, setFilterValue] = useState("");
  const formctx = useContext(GlobalContext);
  const handleFilter = (event: any) => {
    setFilterValue(event.target.value);
  };
  const deleteForm = async (id: any) => {
    if (confirm("Are you sure your want to delete")) {
      try {
        const response = await axios.delete(`${baseUrl}forms/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        formctx?.setCustomFieldRefresh(!formctx?.customFieldRefresh);
      } catch (error) {}
    }
  };
  const { location, token }: any = useAuthentication();
  const filteredData: any = data?.filter((category: any) => {
    return (
      category.name.toLowerCase().includes(filterValue.toLowerCase()) ||
      category.status.toLowerCase().includes(filterValue.toLowerCase()) ||
      category.created_by.toLowerCase().includes(filterValue.toLowerCase()) ||
      category.created_date.toLowerCase().includes(filterValue.toLowerCase()) ||
      category.published_date.toLowerCase().includes(filterValue.toLowerCase())
    );
  });
  const handleSubmit = async (data: any, name: any) => {
    // setIsReady(true);
    let value = {
      locationID: location?.id,
      userID: userID,
      name: name,
      data: data,
    };
    // console.log("NewValue ===> ", value);
    const formBuilderData = await axios
      .post(`${baseUrl}forms`, value, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data: any) => {
        setForm(data.data.form.id);
        alert("Duplicate Form Stored Successfully");
        router.reload();
      })
      .catch((err: any) => {
        console.log("err", err);
      });
  };

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
  const [formData, setFormData] = useState({
    name: "",
    data: null,
  });

  const open = Boolean(anchorEl);
  // const id = open ? 'simple-popover' : undefined;

  const [selectedPopoverId, setSelectedPopOverId] = useState(null);
  const [selectedPopoverData, setSelectedPopOverData] = useState<any>(null);
  // const [selectedPopoverId, setSelectedPopOverId] = useState(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, id: any) => {
    setAnchorEl(event.currentTarget);
    setSelectedPopOverId(id);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Pagination
  const totalRows = data.length;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const onRowsPerPageChange = (e: any) => {
    const newRowsPerPage = parseInt(e.target.value, 10); // Parse the selected value as an integer
    setRowsPerPage(newRowsPerPage); // Update the rowsPerPage state
    setPage(0); // Reset the page to the first page when changing rows per page
  };

  const paginatedData = useMemo(() => {
    const startIndex = page * rowsPerPage;
    let data = filteredData.slice(startIndex, startIndex + rowsPerPage);
    return data;
  }, [filteredData, page, rowsPerPage]);

  const [rowsOptions, setRowsOption] = useState([1, 5]);

  useEffect(() => {
    const calculateRowOptions = (length: any) => {
      const options = [1, 5];
      let step = 10;
      while (length > step) {
        options.push(step);
        step += 10;
      }
      return options;
    };

    const newDataLength = filteredData.length;
    const newOptions = calculateRowOptions(newDataLength);

    // Only update the state if the newOptions are different from the current rowsOptions
    if (JSON.stringify(newOptions) !== JSON.stringify(rowsOptions)) {
      setRowsOption(newOptions);
    }
  }, [filteredData, rowsOptions]);
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
                href="/builder/form/template"
                className="text-xs flex justify-center items-center ml-3 bg-secondary hover:bg-newBlue duration-300 m-1 py-3 px-5 2xl:px-6 text-white rounded-md "
              >
                Create Forms
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md lg:px-0 rounded-lg h-auto">
          <MaterialReactTable
            // enablePagination={false}
            columns={columns}
            data={paginatedData}
            // rowCount={totalRows}
            enableStickyHeader
            enableColumnOrdering
            enableRowSelection
            initialState={{
              showGlobalFilter: false,
            }}
            // state={{
            //   isLoading,
            // }}
            renderRowActions={({ row, table }) => (
              <div className="flex justify-between items-center gap-5 pr-10">
                <button
                  onClick={() => {
                    setFormId(row.original.id);
                    console.log("edit current line", row.original.data);
                    router.push({
                      pathname: "/builder/form/craft",
                      query: {
                        name: row.original.name,
                        loadfrom: row.original.data,
                        page: "edit",
                        formId: row.original.id,
                      },
                    });
                  }}
                >
                  <CiEdit className="h-4 w-4 text-gray-600" />
                </button>
                <button onClick={() => deleteForm(row.original.id)}>
                  {/* {row.original.id} */}
                  <RiDeleteBin5Line className="h-4 w-4 text-gray-600" />
                </button>
                <button
                  onClick={(e) => {
                    handleClick(e, row.original.id);
                    setSelectedPopOverData(row.original);
                  }}
                >
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
                  <MenuItem
                    onClick={() => {
                      router.push({
                        pathname: `/builder/form/preview/`,
                        query: {
                          id: selectedPopoverId,
                        },
                      });
                    }}
                    className="flex gap-2"
                  >
                    View Form Live{" "}
                    <GoLinkExternal className="text-gray-500  h-4 w-4" />
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setFormId(selectedPopoverId);
                      console.log("edit current line", row.original.data);
                      router.push({
                        pathname: "/builder/form/craft",
                        query: {
                          name: selectedPopoverData?.name,
                          loadfrom: selectedPopoverData?.data,
                          page: "edit",
                          formId: selectedPopoverId,
                        },
                      });
                    }}
                  >
                    View Form Details
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setFormId(selectedPopoverId);
                      console.log("edit current line", row.original.data);
                      router.push({
                        pathname: "/builder/form/craft",
                        query: {
                          name: selectedPopoverData?.name,
                          loadfrom: selectedPopoverData?.data,
                          page: "edit",
                          formId: selectedPopoverId,
                        },
                      });
                    }}
                  >
                    Edit Form
                  </MenuItem>
                  {/* <MenuItem
                    onClick={() => {
                      router.push({
                        pathname: `/builder/form/preview/`,
                        query: { id: selectedPopoverId },
                      });
                    }}
                  >
                    Preview Form
                  </MenuItem> */}
                  <MenuItem
                    onClick={() =>
                      handleSubmit(
                        selectedPopoverData?.data,
                        selectedPopoverData?.name
                      )
                    }
                  >
                    Duplicate Form
                  </MenuItem>
                  {/* <MenuItem onClick={handleClose}>
                    Save Form as Template
                  </MenuItem> */}
                  {/* <MenuItem onClick={handleClose}>Archieve </MenuItem> */}
                  <MenuItem
                    onClick={() => {
                      // alert(row.original.id);
                      deleteForm(selectedPopoverId);
                    }}
                    style={{ color: "red" }}
                  >
                    Delete Form
                  </MenuItem>
                </StyledMenu>
              </div>
            )}
            muiTablePaginationProps={{
              rowsPerPageOptions: rowsOptions.map((item: any) => item),
              onRowsPerPageChange: onRowsPerPageChange,
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
            manualPagination
            rowCount={totalRows} //you can tell the pagination how many rows there are in your back-end data
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
            count={filteredData.length} // Use the length of the filteredData for total count
            page={page}
            rowsPerPage={rowsPerPage}
            onChangePage={(newPage: any) => setPage(newPage)}
          />
        </div>
      </div>
    </>
  );
}
