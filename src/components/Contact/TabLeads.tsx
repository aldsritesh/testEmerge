import Image from "next/image";
import { createContext, useEffect, useMemo, useRef, useState } from "react";
import Kanban from "./Kanban";
import { FiChevronDown, FiMail, FiSettings } from "react-icons/fi";
import {
  BsFunnel,
  BsColumns,
  BsClock,
  BsTelephone,
  BsChevronDown,
  BsFileEarmarkBarGraph,
  BsThreeDots,
} from "react-icons/bs";
import {
  AiOutlineInsertRowAbove,
  AiOutlineBars,
  AiOutlineMail,
  AiOutlineDown,
} from "react-icons/ai";
import moment from "moment";
import { boards, getQuotes } from "./dnd/mockData";
import AddItem from "./AddItem";
import MaterialReactTable, { type MRT_ColumnDef } from "material-react-table";
import { ExportToCsv } from "export-to-csv"; //or use your library of choice here
import { Client, HydrationProvider } from "react-hydration-provider";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import ModalDerived from "../Modal";
import ManageColumns from "./ManageColumns";
import Link from "next/link";
import { MenuItem } from "@mui/material";
import { MdPhoneCallback } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import ContactFilter from "./Filter";
import { itemState } from "@/atoms/item";

export const StoreLeadContext = createContext({
  formValue: {},
  setFormValue: (array: Array<any>) => {},
});

interface RowData {
  [key: string]: any;
}

export default function TabLeads() {
  const [isGrid, setIsGrid] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: "lead_name", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
        id: "lead_name", //id is still required when using accessorFn instead of accessorKey
        header: "Lead Name",
        size: 250,
        Cell: ({ row }) => (
          <div className=" ">
            <div className="flex gap-2 w-[200px]">
              <div className="h-8 w-8 rounded-full bg-cover shadow-md mr-1">
                <Image
                  alt="Image"
                  src={require("../../../public/images/avatar/yellowdog.jpg")}
                  className="h-full w-full rounded-full bg-cover"
                  content="cover"
                />
              </div>
              <div>
                <p className="  text-gray-700 font-medium text-sm">
                  {row.original.lead_name.name}
                </p>
                <div className="flex flex-wrap justify-between items-center mt-0.5">
                  <BsClock className="h-3 w-3 text-darkBlack mr-1  " />
                  <span className=" text-gray-700 font-medium  text-xs">
                    Today at{" "}
                    {moment(row.original.lead_name.time).format("hh:mm A")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ),
        enableColumnFilter: true, // could disable just this column's filter
      },
      {
        accessorKey: "contact", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
        id: "contact", //id is still required when using accessorFn instead of accessorKey
        header: "Contact",
        size: 200,
        Cell: ({ row }) => (
          <div className="flex flex-col">
            <div className="flex justify-start items-center mt-0.5">
              <AiOutlineMail className="h-3 w-3 text-darkBlack mr-1" />
              <span className=" text-gray-700 font-medium text-[13px]">
                {row.original.contact.email}
              </span>
            </div>
            <div className="flex justify-start items-center mt-0.5">
              <BsTelephone className="h-3 w-3 text-darkBlack mr-1" />
              <span className=" text-gray-700 font-medium text-[13px]">
                {row.original.contact.phone}
              </span>
            </div>
          </div>
        ),
      },
      {
        accessorKey: "modules", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
        id: "lead_source", //id is still required when using accessorFn instead of accessorKey
        header: "Lead Source",
        size: 150,
        Cell: ({ row }) => (
          <div className="flex items-center gap-2 w-[130px] bg-[#E8EBF5] py-2 px-4  rounded-full ">
            <p className="  text-gray-700 font-medium text-sm">
              {row.original.lead_source}
            </p>
          </div>
        ),
      },
      {
        accessorKey: "lead_status", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
        id: "lead_status", //id is still required when using accessorFn instead of accessorKey
        header: "Lead Status",
        size: 150,
        Cell: ({ row }) => (
          <div className="w-[200px]">
            <button
              className={` ${
                row.original.lead_status == "Open" ||
                row.original.lead_status == "New"
                  ? " border-newBlue bg-blue-100"
                  : row.original.lead_status == "Deal Unqualified"
                  ? " border-secondary bg-red-200"
                  : row.original.lead_status == "Attempt to a contact"
                  ? " border-green-500 bg-green-200"
                  : row.original.lead_status == "Bad Timing"
                  ? " border-orange-500 bg-orange-200"
                  : " border-gray-300 bg-gray-100"
              }
              flex justify-start items-center border-[1px] text-center py-1 px-2 rounded-full font-normal text-dark`}
            >
              <div
                className={`${
                  row.original.lead_status == "Open" ||
                  row.original.lead_status == "New"
                    ? " bg-newBlue"
                    : row.original.lead_status == "Deal Unqualified"
                    ? " bg-secondary"
                    : row.original.lead_status == "Attempt to a contact"
                    ? " bg-green-500"
                    : row.original.lead_status == "Bad Timing"
                    ? "  bg-orange-500"
                    : " bg-gray-500"
                }

              h-1.5 w-1.5 rounded-full   mr-2 ml-2`}
              ></div>
              <span
                className={`${
                  row.original.lead_status == "Open" ||
                  row.original.lead_status == "New"
                    ? " text-newBlue"
                    : row.original.lead_status == "Deal Unqualified"
                    ? " text-secondary"
                    : row.original.lead_status == "Attempt to a contact"
                    ? " text-green-500"
                    : row.original.lead_status == "Bad Timing"
                    ? " text-orange-500"
                    : " text-gray-600"
                }  pr-3  text-gray-700 font-medium `}
              >
                {" "}
                {row.original.lead_status}
              </span>
            </button>
          </div>
        ),
      },
      {
        accessorKey: "lead_owner",
        id: "lead_owner", //id is still required when using accessorFn instead of accessorKey
        header: "Lead Owner",
        size: 150,
        Cell: ({ row }) => (
          <div className="flex items-center gap-2 w-[200px]">
            <div className="avatar-group -space-x-6">
              <div className="avatar">
                <div className="w-6">
                  <Image
                    src={require("../../../public/images/avatar/yellowdog.jpg")}
                    width={50}
                    height={50}
                    alt=""
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
            <p className=" text-gray-700 font-medium">
              {row.original.lead_owner.name}
            </p>
          </div>
        ),
      },
      {
        accessorKey: "company",
        id: "company", //id is still required when using accessorFn instead of accessorKey
        header: "Company",
        size: 100,
        Cell: ({ row }) => (
          <div className="flex items-center gap-2 w-[200px]">
            <div className="avatar-group -space-x-6">
              <div className="avatar">
                <div className="w-6">
                  <Image
                    src={require("../../../public/images/avatar/yellowdog.jpg")}
                    width={50}
                    height={50}
                    alt=""
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
            <p className=" text-gray-700 font-medium">
              {row.original.company.name}
            </p>
          </div>
        ),
      },
      {
        accessorKey: "created_Date", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
        id: "created_Date", //id is still required when using accessorFn instead of accessorKey
        header: "Date Created",
        size: 200,
        Cell: ({ row }) => (
          <div className="flex flex-col">
            <p className=" text-gray-700 font-medium text-[13px] capitalize">
              {moment(row.original.created_Date).format("MMM dd, yyyy")}
            </p>
          </div>
        ),
      },
      {
        accessorKey: "address", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
        id: "address", //id is still required when using accessorFn instead of accessorKey
        header: "Address",
        size: 300,
        Cell: ({ row }) => (
          <div className="flex flex-col">
            <p className=" text-gray-700 font-medium text-[13px]">
              {row.original.address}
            </p>
          </div>
        ),
      },
      {
        accessorKey: "attachment", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
        id: "attachment", //id is still required when using accessorFn instead of accessorKey
        header: "Attachment",
        size: 150,
        Cell: ({ row }) => (
          <div className="flex flex-col">
            <div className="flex justify-start items-center mt-0.5">
              <BsFileEarmarkBarGraph className="h-3 w-3 text-darkBlack mr-1" />
              <span className=" text-gray-700 font-medium text-[13px]">
                {row.original.attachment}
              </span>
            </div>
          </div>
        ),
      },
    ],
    []
  );
  const [data, setData] = useState<RowData[]>([
    {
      id: "1",
      lead_name: {
        name: "Clifford C. Shultz",
        time: "2023-06-16T11:45:00.000Z",
        image: "../../../public/images/avatar/yellowdog.jpg",
      },
      contact: {
        email: "CliffordCShultz@rhyta.com",
        phone: "6970978525",
      },
      lead_status: "Open",
      lead_source: "Online Store",
      lead_owner: {
        name: "Friest",
        time: "",
        image: "../../../public/images/avatar/yellowdog.jpg",
      },
      company: {
        name: "Google",

        image: "../../../public/images/avatar/yellowdog.jpg",
      },
      created_Date: "2023-06-16T11:45:00.000Z",
      address: "4517 Washington Ave. Manchester",
      attachment: "proposal.pdf",
      board: "boards[0]",
    },
    {
      id: "2",
      lead_name: {
        name: "Clifford C. Shultz",
        time: "2023-06-16T11:45:00.000Z",
        image: "../../../public/images/avatar/yellowdog.jpg",
      },
      contact: {
        email: "CliffordCShultz@rhyta.com",
        phone: "6970978525",
      },
      lead_status: "Deal Unqualified",
      lead_source: "Online Store",
      lead_owner: {
        name: "Friest",
        time: "",
        image: "../../../public/images/avatar/yellowdog.jpg",
      },
      company: {
        name: "Google",

        image: "../../../public/images/avatar/yellowdog.jpg",
      },
      created_Date: "2023-06-16T11:45:00.000Z",
      address: "4517 Washington Ave. Manchester",
      attachment: "inv-455.pdf",
      board: "boards[0]",
    },
    {
      id: "3",
      lead_name: {
        name: "Clifford C. Shultz",
        time: "2023-06-16T11:45:00.000Z",
        image: "../../../public/images/avatar/yellowdog.jpg",
      },
      contact: {
        email: "CliffordCShultz@rhyta.com",
        phone: "6970978525",
      },
      lead_status: "Bad Timing",
      lead_source: "Online Store",
      lead_owner: {
        name: "Friest",
        time: "",
        image: "../../../public/images/avatar/yellowdog.jpg",
      },
      company: {
        name: "Google",

        image: "../../../public/images/avatar/yellowdog.jpg",
      },
      created_Date: "2023-06-16T11:45:00.000Z",
      address: "4517 Washington Ave. Manchester",
      attachment: "",
      board: "boards[0]",
    },
    {
      id: "4",
      lead_name: {
        name: "Clifford C. Shultz",
        time: "2023-06-16T11:45:00.000Z",
        image: "../../../public/images/avatar/yellowdog.jpg",
      },
      contact: {
        email: "CliffordCShultz@rhyta.com",
        phone: "6970978525",
      },
      lead_status: "Attempt to a contact",
      lead_source: "Online Store",
      lead_owner: {
        name: "Friest",
        time: "",
        image: "../../../public/images/avatar/yellowdog.jpg",
      },
      company: {
        name: "Google",

        image: "../../../public/images/avatar/yellowdog.jpg",
      },
      created_Date: "2023-06-16T11:45:00.000Z",
      address: "4517 Washington Ave. Manchester",
      attachment: "new require.pdf",
      board: "boards[0]",
    },
    {
      id: "5",
      lead_name: {
        name: "Clifford C. Shultz",
        time: "2023-06-16T11:45:00.000Z",
        image: "../../../public/images/avatar/yellowdog.jpg",
      },
      contact: {
        email: "CliffordCShultz@rhyta.com",
        phone: "6970978525",
      },
      lead_status: "Bad Timing",
      lead_source: "Online Store",
      lead_owner: {
        name: "Friest",
        time: "",
        image: "../../../public/images/avatar/yellowdog.jpg",
      },
      company: {
        name: "Google",

        image: "../../../public/images/avatar/yellowdog.jpg",
      },
      created_Date: "2023-06-16T11:45:00.000Z",
      address: "4517 Washington Ave. Manchester",
      attachment: "",
      board: "boards[0]",
    },
  ]);

  const [openModal, setOpenModal] = useState<any>(false);
  const [formValue, setFormValue] = useState<any>({});
  const value: any = { formValue, setFormValue };
  function handleAddNewItem(item: any) {
    setOpenModal(false);
    setFormValue(item);
    setData([
      ...data,
      {
        id: `G${Math.floor(Math.random() * 1000000000)}`,
        lead_name: {
          name: item?.fullName,
          time: "",
          image: require("../../../public/images/avatar/yellowdog.jpg"),
        },

        contact: {
          email: item?.email,
          phone: item?.phone,
        },

        lead_status: item?.leadStatus,
        lead_source: item?.leadSource,
        lead_owner: {
          name: item?.leadOwner,
          time: "",
          image: require("../../../public/images/avatar/yellowdog.jpg"),
        },
        board: boards[0],
      },
    ]);
  }

  const modifiedData = data.map((item) => {
    // Modify the "Lead Name" field based on your requirements
    return {
      ...item,
      lead_name: `  ${item.lead_name.name}`,
      contact: `  ${item.contact.email}`,
      lead_status: `  ${item.lead_status}`,
      lead_source: `  ${item.lead_source}`,
      lead_owner: `  ${item.lead_owner.name}`,
      board: ``,
      phone: `  ${item.contact.phone}`,
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
      "ID",
      "Lead Name",
      "Email",
      "Lead Status",
      "Lead Source",
      "Lead Owner",
      "Board",
      "Phone",
    ],
    filename: "leads",
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

  const filteredData = data.filter((category: any) => {
    return (
      category.lead_status.toLowerCase().includes(filterValue.toLowerCase()) ||
      category.lead_source.toLowerCase().includes(filterValue.toLowerCase()) ||
      category.lead_name.name
        .toLowerCase()
        .includes(filterValue.toLowerCase()) ||
      category.contact.email
        .toLowerCase()
        .includes(filterValue.toLowerCase()) ||
      category.contact.phone
        .toLowerCase()
        .includes(filterValue.toLowerCase()) ||
      category.lead_owner.name
        .toLowerCase()
        .includes(filterValue.toLowerCase()) ||
      category.address.toLowerCase().includes(filterValue.toLowerCase()) ||
      category.attachment.toLowerCase().includes(filterValue.toLowerCase()) ||
      category.company.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  });

  const [openManageColumnModal, setOpenManageColumnModal] = useState(false);
  //modal1
  const [isFlyOutVisible, setIsFlyOutVisible] = useState(false);

  return (
    <>
      <ModalDerived
        visibility={openManageColumnModal}
        onClose={() => setOpenManageColumnModal(false)}
      >
        <ManageColumns onClose={() => setOpenManageColumnModal(false)} />
      </ModalDerived>

      <AddItem
        onClose={() => setOpenModal(false)}
        visibility={openModal}
        onSave={(item) => {
          handleAddNewItem(item);
          setFormValue({});
        }}
      />

      <div
        className={`w-full h-screen overflow-y-scroll  scrollbar-hide fixed right-0 top-0  z-50 transition-all bg-black overflow-hidden ${
          isFlyOutVisible
            ? "translate-x-0 opacity-100 bg-opacity-30"
            : "translate-x-[100%] opacity-0 bg-opacity-0"
        }`}
      >
        <div
          className="absolute h-full w-full z-40 "
          onClick={() => setIsFlyOutVisible(false)}
        ></div>
        <div className="bg-white w-full md:w-[50%] lg:w-[40%] absolute right-0 min-h-full h-auto z-50 overflow-y-scroll scrollbar-hide">
          <ContactFilter
            onClose={() => {
              setIsFlyOutVisible(false);
            }}
            updateData={(item: any) => {
              console.log(itemState);
            }}
          />
        </div>
      </div>

      <StoreLeadContext.Provider value={value}>
        <div className="px-4 bg-white pb-2 border-b-[1px] border-gray-200 mb-3">
          <h1 className="text-2xl font-semibold text-dark mb-5 pt-5 pl-2">
            {data?.length} Leads 
          </h1>
          <div className="flex flex-wrap lg:flex-nowrap justify-start lg:justify-between items-center">
            <div className="w-full lg:w-auto flex justify-between items-center mb-2">
              <div className="dropdown dropdown-bottom mr-1">
                <label
                  tabIndex={0}
                  className="border-[1px] border-gray-200 m-1 py-2 px-2  2xl:px-4 2xl:py-2  rounded-md flex flex-wrap justify-between items-center"
                >
                  <span className="text-gray-500 font-semibold text-[12px] 2xl:text-sm">
                    All Leads
                  </span>
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
                  className="border-[1px] border-gray-200 m-1 py-2 px-2  2xl:px-4 2xl:py-2 rounded-md flex flex-wrap justify-between items-center"
                >
                  <span className="text-gray-500 font-semibold text-[12px] 2xl:text-sm">
                    Create date
                  </span>
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
                  className="border-[1px] border-gray-200 m-1 py-2 px-2  2xl:px-4 2xl:py-2 rounded-md flex flex-wrap justify-between items-center"
                >
                  <span className="text-gray-500 font-semibold text-[12px] 2xl:text-sm">
                    Contact Owner
                  </span>
                  <FiChevronDown className="h-5 w-5 text-darkBlack mt-1 ml-2" />
                </label>
                <ul
                  tabIndex={2}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40"
                >
                  <li>
                    <a>Hello</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => setIsFlyOutVisible(!isFlyOutVisible)}
                tabIndex={2}
                className="border-[1px] border-gray-200 m-1 py-2 px-2  2xl:px-4 2xl:py-2 rounded-md flex flex-wrap justify-between items-center"
              >
                <BsFunnel className="h-5 w-5 text-darkBlack mt-1 mr-2" />
                <span className="text-gray-500 font-semibold text-[12px] 2xl:text-sm">
                  More Filter
                </span>
              </button>
            </div>

            <div className="w-full  lg:w-auto flex justify-between items-center mb-2">
              <div className="cursor-pointer m-1 ml-2 py-2 px-2  2xl:px-4 rounded-md flex flex-wrap justify-between items-center">
                <Link href="/settings/pipeline">
                  <FiSettings className="h-4 w-4 text-darkBlack   mr-2" />
                </Link>
                <span
                  onClick={() => setOpenManageColumnModal(true)}
                  className="text-gray-700 font-semibold text-sm "
                >
                  Manage Column
                </span>
              </div>

              <div className="  bg-gray-200 rounded-md mr-4 flex justify-between items-center">
                <div
                  onClick={() => setIsGrid(!isGrid)}
                  className={`py-2 px-2 rounded-sm duration-300 ${
                    isGrid
                      ? "bg-gray-200 text-gray-500"
                      : "bg-white text-darkBlack shadow shadow-gray-300 "
                  }`}
                >
                  <AiOutlineBars className={` h-5 w-5 `} />
                </div>
                <div
                  onClick={() => setIsGrid(!isGrid)}
                  className={`py-2 px-2 rounded-sm duration-300 ${
                    isGrid
                      ? "bg-white text-darkBlack shadow shadow-gray-300 "
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  <AiOutlineInsertRowAbove className={` h-5 w-5`} />
                </div>
              </div>
              <button
                onClick={handleExportData}
                className="mr-3 border-[1px] border-gray-300 text-darkBlack  duration-300 m-1 py-1.5 px-4  rounded-md flex flex-wrap justify-between items-center"
              >
                Export
              </button>

              <div className="border-l-[1px] border-gray-200 ">
                <button
                  onClick={() => setOpenModal(true)}
                  className="text-xs flex justify-center items-center ml-3 bg-secondary hover:bg-newBlue duration-300 m-1 py-3 px-5 2xl:px-6 text-white rounded-md "
                >
                  Create Leads <BsChevronDown className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          {data.length > 0 && (
            <div className="bg-white shadow-md rounded-md mx-2">
              {!isGrid ? (
                <div className="bg-white shadow-md lg:px-2 pb-5 rounded-lg">
                  <MaterialReactTable
                    columns={columns}
                    data={filteredData}
                    enableStickyHeader
                    enableColumnOrdering
                    enableRowSelection
                    initialState={{
                      showGlobalFilter: false,
                      columnPinning: {
                        left: ["lead_name"],
                      },
                    }}
                    positionPagination="bottom"
                    enableToolbarInternalActions={false}
                    positionToolbarAlertBanner="bottom"
                    positionActionsColumn="last"
                    enableRowActions
                    renderRowActions={({ row, table }) => (
                      <div className="flex justify-between items-center gap-5 pr-10">
                        <button
                          onClick={() =>
                            window.open(
                              `mailto:kevinvandy@mailinator.com?subject=Hello ${row.original.firstName}!`
                            )
                          }
                        >
                          <FiMail className="h-4 w-4 text-gray-600" />
                        </button>
                        <button
                          onClick={() => {
                            table.setEditingRow(row);
                          }}
                        >
                          <MdPhoneCallback className="h-4 w-4 text-gray-600" />
                        </button>

                        <div className="dropdown">
                          <label tabIndex={0}>
                            <BsThreeDots className="h-4 w-4 text-gray-600" />
                          </label>
                          <div
                            tabIndex={0}
                            className="dropdown-content menu p-2 shadow bg-base-100 rounded-md w-16"
                          >
                            <div className="flex justify-start items-center gap-3">
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
                                  setData([...data]);
                                }}
                              >
                                <RiDeleteBin5Line className="h-4 w-4 text-gray-600" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
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
              ) : (
                <HydrationProvider>
                  <Client>
                    <Kanban />
                  </Client>
                </HydrationProvider>
              )}
            </div>
          )}
        </div>
      </StoreLeadContext.Provider>
    </>
  );
}
