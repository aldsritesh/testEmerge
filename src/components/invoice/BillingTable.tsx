import Image from "next/image";
import { createContext, useEffect, useMemo, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import {
  BsFunnel,
  BsColumns,
  BsClock,
  BsTelephone,
  BsDownload,
} from "react-icons/bs";
import {
  AiOutlineInsertRowAbove,
  AiOutlineBars,
  AiOutlineMail,
} from "react-icons/ai";
import moment from "moment";
import MaterialReactTable, { type MRT_ColumnDef } from "material-react-table";
import { ExportToCsv } from "export-to-csv"; //or use your library of choice here
import { RiDeleteBin5Line } from "react-icons/ri";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { CiEdit } from "react-icons/ci";

export const StoreLeadContext = createContext({
  formValue: {},
  setFormValue: (array: Array<any>) => {},
});

interface RowData {
  [key: string]: any;
}

export default function BillingTable({ data }: any) {
  const [isGrid, setIsGrid] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: "invoice_no",
        id: "invoice_no",
        header: "Claims",
        size: 100,
        Cell: ({ row }) => (
          <div>
            <p className="  text-[#138CC8] font-medium text-base">
              {row.original.invoice_no}
            </p>
          </div>
        ),
        enableColumnFilter: true,
      },
      {
        accessorKey: "customer_name",
        id: "customer_name",
        header: "Customer Name",
        size: 200,
        Cell: ({ row }) => (
          <div>
            <p className="  text-gray-700 font-medium text-sm">
              {" "}
              {row.original.customer_name}
            </p>
          </div>
        ),
        enableColumnFilter: true,
      },
      {
        accessorKey: "status",
        id: "status",
        header: "Status",
        size: 200,
        Cell: ({ row }) => (
          <div>
            <button
              className={`${
                row.original.status == "due in 14 days"
                  ? " border-blue-100 bg-blue-100 text-newBlue px-3 "
                  : row.original.status == "overdue by 1 day"
                  ? " border-red-200 bg-red-200 text-secondary px-3 "
                  : row.original.status == "paid"
                  ? " border-green-200 bg-green-200 text-green-500 px-4"
                  : " border-gray-300 bg-gray-100 text-gray-600 px-4"
              } text-center border-[1px] py-1.5 rounded-full font-light`}
            >
              {row.original.status}
            </button>
          </div>
        ),
        enableColumnFilter: true,
      },
      {
        accessorKey: "date",
        id: "date",
        header: "Date",
        size: 100,
        Cell: ({ row }) => (
          <div>
            <p className="  text-gray-700 font-medium text-sm">
              {row.original.date}
            </p>
          </div>
        ),
        enableColumnFilter: true,
      },
      {
        accessorKey: "dueDate",
        id: "dueDate",
        header: "Due Date",
        size: 100,
        Cell: ({ row }) => (
          <div>
            <p className="  text-gray-700 font-medium text-sm">
              {row.original.dueDate}
            </p>
          </div>
        ),
        enableColumnFilter: true,
      },
      {
        accessorKey: "amount",
        id: "amount",
        header: "Amount",
        size: 100,
        Cell: ({ row }) => (
          <div>
            <p className="  text-gray-700 font-medium text-sm">
              {row.original.amount}
            </p>
          </div>
        ),
        enableColumnFilter: true,
      },
    ],
    []
  );

  const [openModal, setOpenModal] = useState<any>(false);
  const [formValue, setFormValue] = useState<any>({});
  const value: any = { formValue, setFormValue };

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
    filename: "claim",
  };

  const csvExporter = new ExportToCsv(csvOptions);
  const handleExportRows = (rows: any[]) => {
    csvExporter.generateCsv(rows.map((row) => row.original));
  };

  const handleExportData = () => {
    csvExporter.generateCsv(modifiedData);
  };

  // const [filterValue, setFilterValue] = useState("");

  // const handleFilter = (event: any) => {
  //   setFilterValue(event.target.value);
  // };

  // const filteredData = data.filter((category: any) => {
  //   return (
  //     category.invoice_no.toLowerCase().includes(filterValue.toLowerCase()) ||
  //     category.customer_name
  //       .toLowerCase()
  //       .includes(filterValue.toLowerCase()) ||
  //     category.status.toLowerCase().includes(filterValue.toLowerCase()) ||
  //     category.date.toLowerCase().includes(filterValue.toLowerCase()) ||
  //     category.dueDate.toLowerCase().includes(filterValue.toLowerCase()) ||
  //     category.amount.toLowerCase().includes(filterValue.toLowerCase()) ||
  //     category.paymentMode.toLowerCase().includes(filterValue.toLowerCase())
  //   );
  // });

  const [filterInput, setFilterInput] = useState("");

  const handleFilterChange = (e: any) => {
    const value = e.target.value || "";
    setFilterInput(value);
  };

  const filteredData = data.filter(
    (row: any) =>
      row.customer_name.toLowerCase().includes(filterInput.toLowerCase()) ||
      row.status.toLowerCase().includes(filterInput.toLowerCase()) ||
      row.amount.toLowerCase().includes(filterInput.toLowerCase()) ||
      row.dueDate.toLowerCase().includes(filterInput.toLowerCase()) ||
      row.date.toLowerCase().includes(filterInput.toLowerCase()) ||
      row.paymentMode.toLowerCase().includes(filterInput.toLowerCase())
  );

  return (
    <>
      <div className="bg-white shadow-md lg:px-2 muiTable rounded-lg">
        <MaterialReactTable
          columns={columns}
          data={filteredData}
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
                <div className="mb-2 w-[300px] flex items-center shadow px-2 py-2 border-gray-200 border-[1px] bg-white rounded-md">
                  <MagnifyingGlassIcon className="w-6 h-6 text-gray-400 font-bold  " />
                  <input
                    placeholder="Search claims..."
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
      </div>
    </>
  );
}
