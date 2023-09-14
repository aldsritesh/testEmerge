import { useRef, useState, useMemo } from "react";
import { HiChevronDown } from "react-icons/hi";
import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/solid";
import MaterialReactTable, {
  MRT_RowSelectionState,
  type MRT_ColumnDef,
} from "material-react-table";
import { MenuItem } from "@mui/material";
import { useRouter } from "next/router";

import { BsThreeDots } from "react-icons/bs";
import { MdOutlineDateRange } from "react-icons/md";
import Image from "next/image";
import AddAssets from "./AddAssets";
import moment from "moment";

interface RowData {
  [key: string]: any;
}

export default function MarketingAssets({ marketing }: any) {
  const [data, setData] = useState<any[]>([
    {
      pages_url: "Emerge Site",
      status: "Published",
      created_by: {
        name: "Darlene Robertson",
        image: "",
      },
      published_date: new Date(),
    },
    {
      pages_url: "Emerge Site",
      status: "Scheduled",
      created_by: {
        name: "Darlene Robertson",
        image: "",
      },
      published_date: new Date(),
    },
    {
      pages_url: "Emerge Site",
      status: "Published",
      created_by: {
        name: "Darlene Robertson",
        image: "",
      },
      published_date: new Date(),
    },
    {
      pages_url: "Emerge Site",
      status: "Scheduled",
      created_by: {
        name: "Darlene Robertson",
        image: "",
      },
      published_date: new Date(),
    },
    {
      pages_url: "Emerge Site",
      status: "Published",
      created_by: {
        name: "Darlene Robertson",
        image: "",
      },
      published_date: new Date(),
    },
  ]);

  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: "pages_url", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
        id: "pages_url", //id is still required when using accessorFn instead of accessorKey
        header: "Pages & URL",
        size: 200,
        Cell: ({ row }) => (
          <div className=" ">
            <p className="  text-gray-700 font-medium text-[14px]">
              {row.original.pages_url}
            </p>
          </div>
        ),
        enableColumnFilter: true, // could disable just this column's filter
      },
      {
        accessorKey: "status", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
        id: "status", //id is still required when using accessorFn instead of accessorKey
        header: "Status",
        size: 120,
        Cell: ({ row }) => (
          <button
            className={` ${
              row.original.status == "Scheduled"
                ? " border-newBlue bg-blue-100"
                : row.original.status == "Published"
                ? " border-green-500 bg-green-100"
                : " border-gray-300 bg-gray-100"
            }
                  flex justify-start items-center border-[1px] text-center py-1 px-1 rounded-full font-normal text-dark`}
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
              }  pr-3  text-xs`}
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
        size: 200,
        Cell: ({ row }) => (
          <div className="flex justify-start items-start gap-2">
            <Image
              src={require("../../../../../../public/images/avatar/yellowdog.jpg")}
              alt=""
              className="h-5 w-5 rounded-full"
            />
            <p className="  text-gray-700 font-medium text-[12px]">
              {row.original?.created_by?.name}
            </p>
          </div>
        ),
      },
      {
        id: "published_date", //id is still required when using accessorFn instead of accessorKey
        header: "Published Date",
        size: 100,
        Cell: ({ row }) => (
          <div className="flex justify-start items-center">
            <MdOutlineDateRange className="text-gray-700 h-4 w-4 mr-1" />
            <p className="text-gray-700 font-medium text-[13px]">
              {moment(row.original.published_date).format("MMM DD, yyyy")}
            </p>
          </div>
        ),
        accessorKey: "published_date", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
      },
    ],
    []
  );

  const [rowSelection, setRowSelection] = useState<MRT_RowSelectionState>({});

  //date
  const [selectedDate, setSelectedDate] = useState(null);
  const datepickerRef: any = useRef(null);
  const handleButtonClick = () => {
    datepickerRef.current.setOpen(true);
  };
  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };

  //campaignOwner
  const [selectedOwner, setSelectedOwner] = useState(null);
  //budget Ranger
  const [budgetRange, setBudgetRange] = useState(null);

  const [filterInput, setFilterInput] = useState({
    value: "",
    type: "",
  });

  const handleFilterChange = (e: any, type: any) => {
    setFilterInput({
      ...filterInput,
      value: e,
      type: type,
    });
  };

  const filteredData = data.filter((row: any) => {
    if (filterInput.type === "search") {
      const value = filterInput.value.toLowerCase();
      return (
        row.pages_url.toLowerCase().includes(value) ||
        row.status.toLowerCase().includes(value) ||
        row.created_by.name.toLowerCase().includes(value) ||
        row.published_date.toLowerCase().includes(value)
      );
    }
    return true;
  });
  const router = useRouter();
  const [openModal, setOpenModal] = useState<any>(false);
  const [formValue, setFormValue] = useState<any>({});
  const value: any = { formValue, setFormValue };
  function handleAddNewItem(item: any) {
    setOpenModal(false);
    setFormValue(item);
    setData([
      ...data,
      {
        id: data?.length + 1,
        pages_url: "Emerge Site",
        status: "Published",
        created_by: {
          name: "Darlene Robertson",
          image: "",
        },
        published_date: new Date(),
      },
    ]);
  }

  return (
    <>
      <AddAssets
        onClose={() => setOpenModal(false)}
        visibility={openModal}
        onSave={(item: any) => {
          setData((prevData) => [...prevData, ...item]);
        }}
      />

      <div className=" px-4 pt-2 ">
        {/* Second Section */}
        <div className="w-full h-20  flex items-center justify-between">
          <div>
            <div className="flex  gap-2 font-semibold items-center text-sm text-slate-600 ">
              <div className="dropdown dropdown-bottom border rounded-md py-2 px-1">
                <div tabIndex={1} className="flex justify-between items-center">
                  <span className="text-[12px] text-gray-600 px-2">
                    Ads campaigns
                  </span>
                  <HiChevronDown className="h-4 w-4" />
                </div>
                <ul
                  tabIndex={1}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52  ml-[-10px]"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>
              <div className="dropdown dropdown-bottom border rounded-md py-2 px-1">
                <div tabIndex={1} className="flex justify-between items-center">
                  <span className="text-[12px] text-gray-600 px-2">
                    Asset status
                  </span>
                  <HiChevronDown className="h-4 w-4" />
                </div>
                <ul
                  tabIndex={1}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52  ml-[-10px]"
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
          </div>
          <div
            onClick={() => setOpenModal(true)}
            className="dropdown dropdown-bottom border rounded-md py-2 px-4 bg-secondary text-white"
          >
            <div tabIndex={1} className="flex justify-between items-center">
              <PlusIcon className="h-4 w-4 text-white" />
              <span className="text-[12px]  px-1"> Add Assets </span>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-md muiTable">
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
                  <div className="m-2 w-[300px] flex items-center  px-2 py-2 border-gray-200 border-[1px] bg-white rounded-md">
                    <MagnifyingGlassIcon className="w-6 h-6 text-gray-400 font-bold  " />
                    <input
                      placeholder="Search Campaign"
                      value={filterInput.value}
                      onChange={(e) =>
                        handleFilterChange(e.target.value, "search")
                      }
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
            // muiTableBodyRowProps={({ row }) => ({
            //   //implement row selection click events manually
            //   onClick: () => router.push(`/marketing/${row.original.id}`),
            //   selected: rowSelection[row.id],
            //   sx: {
            //     cursor: "pointer",
            //   },
            // })}
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
    </>
  );
}
