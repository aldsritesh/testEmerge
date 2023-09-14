import React, { useMemo, useState, useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { RxDotFilled } from "react-icons/rx";
import { MdOutlineFacebook } from "react-icons/md";
import MaterialReactTable, { type MRT_ColumnDef } from "material-react-table";
import { MenuItem } from "@mui/material";
import moment from "moment";
import { FaFolder } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import CustomPagination from "@/components/UI/CustomPagination";
import axios from "axios";
import { baseUrl } from "@/config/APIConstants";
import ModalDerived from "@/components/Modal";

import ValueEdit from "../ValuesEdit";
import { useRouter } from "next/router";
import { useAuthentication } from "@/controllers/auth";

interface RowData {
  id: string;
  [key: string]: any;
}

const ValueTableData = ({ update }: any) => {
  const { location, token }: any = useAuthentication();
  const [arr, setArr] = useState([]);
  useEffect(() => {
    axios
      .get(
        `${baseUrl}custom-values/location/f209ee50-96e6-4ca2-9eb5-80b93d31591f`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(({ data }: any) => {
        setArr(data.customValues);
        // array1 = [data.tasks];
        console.log(
          "firsvalue data table----------new------>",
          data.customValues
        );
      })
      .catch((error: any) => {
        console.log("", error);
      });
  }, [update]);

  // console.log("firstefefesfesfsf data ---", data);
  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: "value_Name",
        id: "value_Name",
        header: "Value Name",
        size: 250,
        Cell: ({ row }) => (
          <p className="  text-gray-700 font-medium text-[15px]">
            {row.original.value}
          </p>
        ),
        enableColumnFilter: true,
      },

      {
        accessorKey: "unique_Key",
        id: "unique_Key",
        header: "Unique Key",
        size: 200,
        Cell: ({ row }) => (
          <div className="flex justify-start items-start gap-2">
            <p className="  text-gray-700 font-medium text-[12px] flex">
              {/* <span>contact.</span> */}
              {row.original.key}
            </p>
          </div>
        ),
        enableColumnFilter: true,
      },
      {
        accessorKey: "created_On",
        id: "created_On",
        header: "Created On",
        size: 200,
        Cell: ({ row }) => (
          <div className="flex justify-start items-start gap-2">
            <p className="  text-gray-700 font-medium text-[12px]">
              {moment(row.original.addedOn).format("DD-mm-yyyy")}
            </p>
          </div>
        ),
        enableColumnFilter: true,
      },
    ],
    []
  );

  const [filterInput, setFilterInput] = useState("");
  // const [tableKey, setTableKey] = useState(Date.now());
  // const [update, setUpdate] = useState<any>(false);
  const router = useRouter();
  // const [tableData, setTableData] = useState([]);

  const handleFilterChange = (e: any) => {
    const value = e.target.value || "";
    setFilterInput(value);
  };

  const filteredData = arr.filter((row: any) =>
    row.value.toLowerCase().includes(filterInput.toLowerCase())
  );

  // Pagination
  const [page, setPage] = useState(0);
  const rowsPerPage = 5;

  const paginatedData = useMemo(() => {
    const startIndex = page * rowsPerPage;
    return filteredData?.slice(startIndex, startIndex + rowsPerPage);
  }, [filteredData, page]);

  const handleDelete = (deleteid: any) => {
    console.log("first delte clicked");

    axios
      .delete(`${baseUrl}custom-values/${deleteid}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ response }: any) => {
        router.reload();
      });
  };

  useEffect(() => {
    if (token) {
      axios
        .get(
          `${baseUrl}custom-values/location/f209ee50-96e6-4ca2-9eb5-80b93d31591f`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then(({ data }: any) => {
          setArr(data.customValues);
          // array1 = [data.tasks];
          console.log(
            "firsvalue data table----------new------>",
            data.customValues
          );
        })
        .catch((error: any) => {
          console.log("", error);
        });
    }
  }, [update, token]);
  const [openModal, setOpenModal] = useState(false);
  const [index, setIndex] = useState();
  const [valuedata, setValuedata] = useState();
  const [keydata, setKeydata] = useState();
  return (
    <div>
      <div className=" border rounded-lg mb-4  muiTable">
        <MaterialReactTable
          // key={tableKey}
          columns={columns}
          data={paginatedData}
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
          renderRowActions={({ row, table }) => (
            <div className="flex justify-between items-center gap-5 pr-10">
              {/* <button
                onClick={() => {
                  table.setEditingRow(row);
                }}
              > */}
              <button
                onClick={() => {
                  setOpenModal(!openModal);
                  setIndex(row.original.id);
                  setValuedata(row.original.value);
                  setKeydata(row.original.key);
                }}
              >
                <CiEdit className="h-4 w-4 text-gray-600" />
              </button>

              <button onClick={() => handleDelete(row.original.id)}>
                <RiDeleteBin5Line className="h-4 w-4 text-gray-600" />
              </button>
              {/* <button
                onClick={() => {
                  data.splice(row.original.index, 1); //assuming simple data table
                  // setData([...data]);
                  console.log("first delte click");
                }}
              >
                <RiDeleteBin5Line className="h-4 w-4 text-gray-600" />
              </button> */}
            </div>
          )}
          enableToolbarInternalActions={false}
          positionToolbarAlertBanner="bottom"
          muiSearchTextFieldProps={{
            placeholder: `Search ${arr?.length} rows`,
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
          renderRowActionMenuItems={({ row }) => [
            <MenuItem key="edit" onClick={() => console.info("Edit")}>
              Edit
            </MenuItem>,
            <MenuItem key="delete" onClick={() => console.info("Delete")}>
              Delete
            </MenuItem>,
          ]}
          muiTableHeadCellProps={{
            sx: {
              borderRight: "2px solid #e9e9e9",
              backgroundColor: "#F5F5F5",
              color: "#47494b",
              paddingTop: "15px",
              paddingBottom: "15px",
            },
          }}
          muiTablePaperProps={{
            elevation: 0,
            sx: {
              padding: "",
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
      <ModalDerived visibility={openModal} onClose={() => setOpenModal(false)}>
        <ValueEdit
          onClose={() => setOpenModal(false)}
          id={index}
          key={keydata}
          value={valuedata}
        />
      </ModalDerived>
    </div>
  );
};

export default ValueTableData;
