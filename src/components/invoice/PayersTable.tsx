import { useRef, useState, useMemo } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsColumns } from "react-icons/bs";
import { HiChevronDown } from "react-icons/hi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import MaterialReactTable, {
  MRT_RowSelectionState,
  type MRT_ColumnDef,
} from "material-react-table";
import { MenuItem } from "@mui/material";
// import { tableData } from "./Data";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useRouter } from "next/router";
import FlyOut from "../Flyout";
import PayersForm from "./PayersForm";
import { TablePagination, TableRow, TableFooter } from "@mui/material";
import CustomPagination from "../UI/CustomPagination";

interface RowData {
  [key: string]: any;
}

const PayersTable = () => {
  const [tableData, setTableData] = useState<any>([
    {
      id: "1",
      payers_name: "Design Asset Promo",
      address: {
        name: "Darlene Robertson",
        image: "",
      },
      amount: "$100.000",

      dateCreated: new Date(),
    },
    {
      id: "2",
      payers_name: "Analysing the Witches",
      address: {
        name: "Darlene Robertson",
        image: "",
      },
      amount: "$100.000",

      dateCreated: new Date(),
    },
    {
      id: "3",
      payers_name: "Exam Skills",
      address: {
        name: "Darlene Robertson",
        image: "",
      },
      amount: "$100.000",

      dateCreated: new Date(),
    },
    {
      id: "4",
      payers_name: "Guilt in Macbeth",
      address: {
        name: "Darlene Robertson",
        image: "",
      },
      amount: "$100.000",

      dateCreated: new Date(),
    },
    {
      id: "5",
      payers_name: "English Exam Practise",
      address: {
        name: "Darlene Robertson",
        image: "",
      },
      amount: "$100.000",

      dateCreated: new Date(),
    },
    {
      id: "6",
      payers_name: "Muscular Endurance",
      address: {
        name: "Darlene Robertson",
        image: "",
      },
      amount: "$100.000",

      dateCreated: new Date(),
    },
    {
      id: "1",
      payers_name: "Design Asset Promo",
      address: {
        name: "Darlene Robertson",
        image: "",
      },
      amount: "$100.000",
      dateCreated: new Date().toISOString(),
    },
    // ... (Add the previous 5 records here)
    {
      id: "6",
      payers_name: "Muscular Endurance",
      address: {
        name: "Darlene Robertson",
        image: "",
      },
      amount: "$100.000",
      dateCreated: new Date().toISOString(),
    },
    // Additional records (10)
    {
      id: "7",
      payers_name: "Record 7",
      address: {
        name: "Darlene Robertson",
        image: "",
      },
      amount: "$100.000",
      dateCreated: new Date().toISOString(),
    },
    {
      id: "8",
      payers_name: "Record 8",
      address: {
        name: "Darlene Robertson",
        image: "",
      },
      amount: "$100.000",
      dateCreated: new Date().toISOString(),
    },
    {
      id: "9",
      payers_name: "Record 9",
      address: {
        name: "Darlene Robertson",
        image: "",
      },
      amount: "$100.000",
      dateCreated: new Date().toISOString(),
    },
    {
      id: "10",
      payers_name: "Record 10",
      address: {
        name: "Darlene Robertson",
        image: "",
      },
      amount: "$100.000",
      dateCreated: new Date().toISOString(),
    },
    // Continue adding records up to 30...
    {
      id: "11",
      payers_name: "Record 11",
      address: {
        name: "Darlene Robertson",
        image: "",
      },
      amount: "$100.000",
      dateCreated: new Date().toISOString(),
    },
    {
      id: "12",
      payers_name: "Record 12",
      address: {
        name: "Darlene Robertson",
        image: "",
      },
      amount: "$100.000",
      dateCreated: new Date().toISOString(),
    },
    {
      id: "13",
      payers_name: "Record 13",
      address: {
        name: "Darlene Robertson",
        image: "",
      },
      amount: "$100.000",
      dateCreated: new Date().toISOString(),
    },
    {
      id: "14",
      payers_name: "Record 14",
      address: {
        name: "Darlene Robertson",
        image: "",
      },
      amount: "$100.000",
      dateCreated: new Date().toISOString(),
    },
    {
      id: "15",
      payers_name: "Record 15",
      address: {
        name: "Darlene Robertson",
        image: "",
      },
      amount: "$100.000",
      dateCreated: new Date().toISOString(),
    },
  ]);

  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: "payers_name",
        id: "payers_name",
        header: "Payer Name",
        size: 100,
        Cell: ({ row }) => (
          <div>
            <p className="  text-gray-700 font-medium text-[15px]">
              {row.original.payers_name}
            </p>
          </div>
        ),
        enableColumnFilter: true,
      },
      {
        accessorKey: " code",
        id: " code",
        header: "Code",
        size: 200,
        Cell: ({ row }) => (
          <div className="flex justify-start items-start gap-2">
            12
            <p className="  text-gray-700 font-medium text-[12px]">
              {row.original.code}
            </p>
          </div>
        ),
        enableColumnFilter: true,
      },
      {
        accessorKey: " address",
        id: " address",
        header: "Address",
        size: 200,
        Cell: ({ row }) => (
          <div className="flex justify-start items-start gap-2">
            <Image
              src={require("../../../public/images/avatar/yellowdog.jpg")}
              alt=""
              className="h-5 w-5 rounded-full"
            />
            <p className="  text-gray-700 font-medium text-[12px]">
              {row.original.address.name}
            </p>
          </div>
        ),
        enableColumnFilter: true,
      },
      {
        accessorKey: " phoneNumber",
        id: " phoneNumber",
        header: "Phone Number",
        size: 200,
        Cell: ({ row }) => (
          <div className="flex justify-start items-start gap-2">
            +00 000 000 00
            <p className="  text-gray-700 font-medium text-[12px]">
              {row.original.phoneNumber}
            </p>
          </div>
        ),
        enableColumnFilter: true,
      },
      // {
      //   accessorKey: "amount",
      //   id: "amount",
      //   header: "amount",
      //   size: 100,
      //   Cell: ({ row }) => (
      //     <div className="flex justify-start items-start">
      //       <p className="  text-gray-700 font-medium text-[12px]">
      //         {row.original.amount}
      //       </p>
      //     </div>
      //   ),
      //   enableColumnFilter: true,
      // },

      {
        accessorKey: "dateCreated",
        id: "dateCreated",
        header: "Date Created",
        size: 100,
        Cell: ({ row }) => (
          <div className="flex justify-start items-start gap-2">
            <AiOutlineCalendar className="h-4 w-4" />
            <p className="  text-gray-700 font-medium text-[12px]">
              {moment(row.original.dateCreated).format("ddd DD, yyyy")}
            </p>
          </div>
        ),
        enableColumnFilter: true,
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

  // address
  const [selectedAddress, setSelectedAddress] = useState(null);
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

  const filteredData = tableData.filter((row: any) => {
    if (filterInput.type === "search") {
      const value = filterInput.value.toLowerCase();
      return (
        row.payers_name.toLowerCase().includes(value) ||
        row.address.name.toLowerCase().includes(value) ||
        row.amount.toLowerCase().includes(value) ||
        row.dateCreated.toLowerCase().includes(value)
      );
    }
    return true;
  });

  // const paginatedData = filteredData.slice(page * rowsPerPage, (page + 1) * rowsPerPage);
  // const handlePrevButtonClick = () => {
  //   setPage((prevPage) => Math.max(prevPage - 1, 0));
  // };

  // const handleNextButtonClick = () => {
  //   setPage((prevPage) => Math.min(prevPage + 1, Math.ceil(filteredData.length / rowsPerPage) - 1));
  // };

  const router = useRouter();

  const [openModal, setOpenModal] = useState<any>(false);

  function handleStore(item: any) {
    setTableData([
      ...tableData,
      {
        id: tableData?.length + 1,
        payers_name: item.payerName,
        address: {
          name: item.customerName,
          image: "",
        },
        amount: item.amount,

        dateCreated: new Date(),
        action: "",
      },
    ]);
    setOpenModal(false);
  }

  const [page, setPage] = useState(0);
  const rowsPerPage = 5;

  const paginatedData = useMemo(() => {
    const startIndex = page * rowsPerPage;
    return filteredData.slice(startIndex, startIndex + rowsPerPage);
  }, [filteredData, page]);
  return (
    <>
      <FlyOut visibility={openModal} onClose={() => setOpenModal(false)}>
        <div className="bg-white  pb-10 h-[100vh] ">
          <div className="flex justify-start items-start gap-5 flex-col">
            <PayersForm
              onClose={() => setOpenModal(false)}
              handleStoreChange={(item: any) => handleStore(item)}
            />
          </div>
        </div>
      </FlyOut>

      <div className="px-4 border border-b-0 rounded-lg pb-10">
        {/* Section first */}

        <div className="w-full h-16  flex items-center   ">
          <h1 className="text-3xl font-semibold  pt-3">Payers</h1>
        </div>

        {/* Second Section */}
        <div className="w-full h-20  flex items-center justify-between">
          <div>
            <form className="flex  gap-2 font-semibold items-center text-sm text-slate-600 ">
              <div className="dropdown dropdown-bottom border rounded-md py-2 px-2 ">
                <div
                  tabIndex={0}
                  onClick={handleButtonClick}
                  className="flex justify-between items-center"
                >
                  <AiOutlineCalendar className="h-4 w-4" />
                  <span className="text-[12px] text-gray-600 px-2">
                    {selectedDate == null
                      ? " Date created"
                      : moment(selectedDate).format("MM-DD-yyyy")}
                  </span>
                  <HiChevronDown className="h-4 w-4" />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-white rounded-box w-40 ml-[-10px]"
                >
                  <DatePicker
                    ref={datepickerRef}
                    selected={selectedDate}
                    onChange={handleDateChange}
                    onClickOutside={() => datepickerRef.current.setOpen(false)}
                  />
                </ul>
              </div>

              <div className="dropdown dropdown-bottom border rounded-md py-2 px-2">
                <div tabIndex={1} className="flex justify-between items-center">
                  <AiOutlineCalendar className="h-4 w-4" />
                  <span className="text-[12px] text-gray-600 px-2">
                    {selectedAddress == null ? " Customer" : selectedAddress}
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

              <div className="dropdown dropdown-bottom border rounded-md py-2 px-2">
                <div tabIndex={1} className="flex justify-between items-center">
                  <span className="text-[12px] text-gray-600 px-2">
                    {budgetRange == null ? "Budget range" : budgetRange}
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
            </form>
          </div>

          {/*  Button */}
          <div className="w-full  lg:w-auto flex justify-between items-center mb-2">
            <div className="m-1 ml-2 py-2 px-2  2xl:px-4 rounded-md flex flex-wrap justify-between items-center">
              <BsColumns className="h-4 w-4 text-gray-500   mr-2" />
              <span className="text-gray-700 font-semibold text-sm ">
                Manage Column
              </span>
            </div>

            <div className="border-l-[1px] border-gray-200 ">
              <button
                onClick={() => setOpenModal(true)}
                className="text-xs flex justify-center items-center ml-3 bg-secondary hover:bg-newBlue duration-300 m-1 py-3 px-5 2xl:px-6 text-white rounded-md "
              >
                Create Payer
              </button>
            </div>
          </div>
        </div>

        {/* Third Section table */}
        <div className="bg-white border rounded-md  muiTable">
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
                    tableData.splice(row.index, 1); //assuming simple data table
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
              placeholder: `Search ${tableData?.length} rows`,
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
                      placeholder="Search Payers"
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
    </>
  );
};

export default PayersTable;
