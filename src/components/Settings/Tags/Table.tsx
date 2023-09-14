import React, { useMemo, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import MaterialReactTable, { type MRT_ColumnDef } from "material-react-table";
import { MenuItem } from "@mui/material";
import moment from "moment";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import CustomPagination from "@/components/UI/CustomPagination";
import axios from "axios";
import { baseUrl } from "@/config/APIConstants";
import { useRouter } from "next/router";
import { AiOutlineClose } from "react-icons/ai";
import ModalDerived from "@/components/Modal";
import { useAuthentication } from "@/controllers/auth";

interface RowData {
  [key: string]: any;
}

const TagsTablesData = ({ data }: any) => {
  const router = useRouter();
  const { location, token }: any = useAuthentication();
  const [editAptData, setEditData] = useState<any>({});
  // console.log("haattass", editData);

  const handleDelete = async (id: any) => {
    if (confirm("Are you sure your want to delete")) {
      try {
        const response = await axios.delete(`${baseUrl}tags/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // console.log("rttt", response);

        router.reload();
      } catch (error) {
        console.error(error);
      }
    }
  };
  // console.log( data);
  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: "tag_Name",
        id: "tag_Name",
        header: "Tag Name",
        size: 350,
        Cell: ({ row }) => (
          <p className="  text-gray-700 font-medium text-[15px]">
            {/* {row.original.tag_Name} */}
            {row.original.content}
          </p>
        ),
        enableColumnFilter: true,
      },
      {
        accessorKey: "createdOn",
        id: "createdOn",
        header: "Created On",
        size: 220,
        Cell: ({ row }) => (
          <div className="flex justify-start items-start gap-2">
            <p className="  text-gray-700 font-medium text-[12px]">
              {moment(row.original.addedOn).format("DD-MM-YYYY")}
            </p>
          </div>
        ),
        enableColumnFilter: true,
      },
      {
        accessorKey: "upDatedOn",
        id: "upDatedOn",
        header: "Updated On",
        size: 220,
        Cell: ({ row }) => (
          <div className="flex justify-start items-start gap-2">
            <p className="  text-gray-700 font-medium text-[12px]">
              {moment(row.original.updatedOn).format("DD-MM-YYYY")}
            </p>
          </div>
        ),
        enableColumnFilter: true,
      },
    ],
    []
  );

  const [filterInput, setFilterInput] = useState("");
  const [openAddTagModel, setAddTagModel] = useState<any>(false);

  const handleFilterChange = (e: any) => {
    const value = e.target.value || "";
    setFilterInput(value);
  };

  const filteredData = data.filter((row: any) =>
    row.content.toLowerCase().includes(filterInput.toLowerCase())
  );

  // Pagination
  const [page, setPage] = useState(0);
  const [errors, setErrors] = useState<any>({});
  const rowsPerPage = 20;
  const [formValues, setFormValues] = useState<any>({
    content: "",
  });

  const paginatedData = useMemo(() => {
    const startIndex = page * rowsPerPage;
    return filteredData.slice(startIndex, startIndex + rowsPerPage);
  }, [filteredData, page]);

  const handleChange = (e: any) => {
    setEditData((prevValues: any) => ({
      ...prevValues,
      content: e.target.value,
    }));
  };

  const handleEditSubmit = async (e: any) => {
    e.preventDefault();

    const response = await axios.put(
      `${baseUrl}tags/${editAptData.id}`,
      editAptData,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    router.reload();
  };

  return (
    <div>
      <ModalDerived
        visibility={openAddTagModel}
        onClose={() => setAddTagModel(false)}
      >
        <div className=" bg-white rounded-lg  h-[85vh] pb-[5%]  overflow-y-hidden w-full scrollbar-hide ">
          <div className="h-[10vh] flex justify-between items-start border-b-[1px] pb-4 px-5 pt-4">
            <div>
              <p className="text-gray-800 font-medium md:text-lg ">Tags</p>
              {/* <p className="text-gray-500 font-normal md:text-sm pt-1">
                Add New Tags
              </p> */}
            </div>
            <button onClick={() => setAddTagModel(false)}>
              <AiOutlineClose className="text-gray-800 h-6 w-6" />
            </button>
          </div>
          <form
            className=" h-[100vh] pt-5 pb-3 w-screen md:w-[100vh]"
            onSubmit={handleEditSubmit}
          >
            {/* <div className="h-[10vh] flex justify-between items-start border-b-[1px] pb-4 px-5">
              <div>
                <p className="text-gray-800 font-medium md:text-lg ">Tags</p>
                <p className="text-gray-500 font-normal md:text-sm pt-1">
                  Add New Tags
                </p>
              </div>
              <button onClick={() => setAddTagModel(false)}>
                <AiOutlineClose className="text-gray-800 h-6 w-6" />
              </button>
            </div> */}
            <div className="overflow-hidden">
              <div className="h-[60vh]">
                {/*  Add Tags */}
                <div className="mx-5 py-1">
                  <div className="flex items-center  justify-between ">
                    <label
                      className="block text-[#47494b] text-sm pt-1 font-semibold"
                      htmlFor=""
                    >
                      Edit Tag Name
                    </label>
                  </div>
                  <input
                    type="text"
                    id=""
                    name="content"
                    value={editAptData.content}
                    onChange={(e) => handleChange(e)}
                    placeholder="Enter Tag Name"
                    className=" w-full placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300   "
                  />
                  {errors.content && (
                    <div className=" text-red-500 text-xs pt-1">
                      {errors.content}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="h-[10vh] flex justify-end items-center border-t-[1px] pt-3 pb-2 px-5">
              <div className=" flex justify-end items-center gap-3">
                <button
                  onClick={() => setAddTagModel(false)}
                  className="text-base text-gray-600 font-medium flex justify-start items-center border-[1px] border-gray-300 py-2 px-5 rounded-md  "
                >
                  Cancel
                </button>
                <button
                  // onSubmit={handleEditSubmit}
                  type="submit"
                  // onClick={(e) => e.preventDefault()}
                  className="text-base flex justify-start items-center bg-secondary py-2 px-5 text-white rounded-md  "
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </ModalDerived>
      <div className=" border rounded-lg mb-4  muiTable">
        <MaterialReactTable
          columns={columns}
          data={paginatedData}
          enableStickyHeader
          enableColumnOrdering
          enableRowSelection
          initialState={{
            showGlobalFilter: false,
          }}
          muiTablePaginationProps={{
            // rowsPerPageOptions: [10, 50, 100, 200],
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
              <button
                // onClick={() => {
                //   table.setEditingRow(row);
                // }}
                onClick={() => {
                  const filterType = data.filter(
                    (row1: any) => row.original.id === row1.id
                  );
                  setEditData(filterType[0]);
                  setAddTagModel(true);
                }}
              >
                <CiEdit className="h-4 w-4 text-gray-600" />
              </button>
              <button
                onClick={() => {
                  // data.splice(row.index, 1); //assuming simple data table
                  // setData([...data]);
                  handleDelete(row.original.id);
                }}
              >
                <RiDeleteBin5Line className="h-4 w-4 text-gray-600" />
              </button>
            </div>
          )}
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
          // onChangePage={(newPage: any) => setPage(newPage)}
          onChangePage={(newPage: any) => console.log("pa", newPage)}
        />
      </div>
    </div>
  );
};

export default TagsTablesData;
