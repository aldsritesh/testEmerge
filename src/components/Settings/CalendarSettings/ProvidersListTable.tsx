import React, { useContext, useMemo, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import MaterialReactTable, { type MRT_ColumnDef } from "material-react-table";
import moment from "moment";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import Link from "next/link";
import ModalDerived from "@/components/Modal";
import { CalendarSettingsContext } from "./CalendarListData";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { baseUrl } from "@/config/APIConstants";
import { useRouter } from "next/router";
import CustomPagination from "@/components/UI/CustomPagination";
import { useAuthentication } from "@/controllers/auth";

interface RowData {
  [key: string]: any;
}

const ProvidersListTable = ({ calendarProviderDataTable }: any) => {
  // console.log("fafaffa", calendarProviderDataTable);
  const router = useRouter();
  const { location, token }: any = useAuthentication();

  // const handleEditRoom = async (id: any) => {
  //   try {
  //     const response = await axios.get(`${baseUrl}rooms/${id}`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     console.log("rttt", response);
  //     router.reload();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const deleteProvider = async (id: any) => {
    // console.log("or id ", id);
    if (confirm("Are you sure your want to delete")) {
      try {
        const response = await axios.delete(`${baseUrl}providers/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("rttt", response);

        router.reload();
      } catch (error) {
        console.error(error);
      }
    }
  };
  const [editAptData, setEditAptData] = useState<any>({});
  // console.log("haa bhai", editAptData);
  const [formData, setFormData] = useState<any>({
    name: "",
  });

  const providerAddForm: any = useContext(CalendarSettingsContext);
  const [data, setData] = useState<RowData[]>([
    {
      id: "1",
      provider: "Provider 1",
      createdOn: "2023-06-14T09:00:00.000Z",
      upDatedOn: "2023-06-14T09:00:00.000Z",
    },
    {
      id: "2",
      provider: "Provider 2",
      createdOn: "2023-06-14T09:00:00.000Z",
      upDatedOn: "2023-06-14T09:00:00.000Z",
    },
    {
      id: "3",
      provider: "Provider 3",
      createdOn: "2023-06-14T09:00:00.000Z",
      upDatedOn: "2023-06-14T09:00:00.000Z",
    },
    {
      id: "4",
      provider: "Provider 4",
      createdOn: "2023-06-14T09:00:00.000Z",
      upDatedOn: "2023-06-14T09:00:00.000Z",
    },
  ]);

  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: "provider",
        id: "provider",
        header: "Provider Name",
        size: 350,
        Cell: ({ row }) => (
          <p className="  text-gray-700 font-medium text-[15px]">
            {row.original.name}
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
              {moment(row.original.addedOn).format("MMM DD, yyyy")}
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
              {moment(row.original.upDatedOn).format("MMM DD, yyyy")}
            </p>
          </div>
        ),
        enableColumnFilter: true,
      },
    ],
    []
  );

  const [filterInput, setFilterInput] = useState("");
  const [editProvider, setEditProvider] = useState(false);

  const handleFilterChange = (e: any) => {
    const value = e.target.value || "";
    setFilterInput(value);
  };

  const filteredData = calendarProviderDataTable.filter((row: any) =>
    row.name.toLowerCase().includes(filterInput.toLowerCase())
  );

  const handleChange = (e: any) => {
    setEditAptData((prevValues1: any) => ({
      ...prevValues1,
      name: e.target.value,
    }));
  };

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   setData((prevValues: any) => [
  //     ...data,
  //     {
  //       id: data?.length + 1,
  //       provider: formData?.provider,
  //       createdOn: new Date(),
  //       upDatedOn: new Date(),
  //     },
  //   ]);
  //   setFormData({
  //     provider: "",
  //   });
  //   providerAddForm?.setOpenModal3(false);
  // };

  // const handleEditSubmit = async (id: any) => {
  //   try {
  //     const response = await axios.get(`${baseUrl}providers/${id}`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     console.log("rttt", response);
  //     router.reload();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const editHandleSubmit = async () => {
    console.log("hssa", editAptData);

    const calendarProviderTab = await axios
      .put(
        `${baseUrl}rooms/${editAptData.id}`,
        {
          // locationID: locationID,
          name: editAptData.name,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        router.reload();
      })
      .catch((err) => {
        console.log(err);
      });

    setFormData({
      name: "",
    });
    providerAddForm?.setOpenModal2(false);
  };

  const handleSubmit = async () => {
    const calendarProviderTab = await axios

      .post(
        `${baseUrl}providers`,
        {
          locationID: location?.id,
          name: formData.name,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        // router.reload();
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log("ygygyg", calendarRoomTab);
    setEditAptData({
      name: "",
    });
    providerAddForm?.setOpenModal3(false);
  };

  // Pagination
  const [page, setPage] = useState(0);
  const rowsPerPage = 5;

  const paginatedData = useMemo(() => {
    const startIndex = page * rowsPerPage;
    return filteredData.slice(startIndex, startIndex + rowsPerPage);
  }, [filteredData, page]);

  return (
    <>
      {/* Edit Provider start */}

      <ModalDerived
        visibility={editProvider}
        onClose={() => setEditProvider(true)}
      >
        <div className=" bg-white rounded-lg  lg:h-[85vh] pb-[5%]  overflow-y-hidden w-[100%]  md:w-[85vh] scrollbar-hide ">
          <div className=" h-[100vh]  pt-5 pb-3">
            <div className="h-[10vh] flex justify-between items-start border-b-[1px] pb-4 px-5">
              <div>
                <p className="text-gray-800 font-medium md:text-lg ">
                  Provider
                </p>
                <p className="text-gray-500 font-normal md:text-sm pt-1">
                  Edit Provider
                </p>
              </div>
              <button onClick={() => setEditProvider(false)}>
                <AiOutlineClose className="text-gray-800 h-6 w-6" />
              </button>
            </div>
            <div className="overflow-hidden ">
              <div className="w-full   bg-white  ">
                <div className="mx-5 py-3 h-[60vh]  2xl:h-[39vh]">
                  <div className="flex items-center  justify-between ">
                    <label
                      className="block text-[#47494b] text-sm pt-1 font-semibold"
                      htmlFor=""
                    >
                      Edit Provider Name
                    </label>
                  </div>
                  <input
                    type="text"
                    id=""
                    name="provider"
                    value={editAptData?.name}
                    onChange={(e) => handleChange(e)}
                    placeholder="Edit Provider Name"
                    className=" w-full placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300   "
                  />
                </div>
                <div className="h-[10vh] flex justify-end items-center border-t-[1px] pt-3 pb-2 px-5">
                  <div className=" flex justify-end items-center gap-3">
                    <button
                      onClick={() => providerAddForm?.setOpenModal3(false)}
                      className="text-base text-gray-600 font-medium flex justify-start items-center border-[1px] border-gray-300 py-2 px-5 rounded-md  "
                    >
                      Cancel
                    </button>
                    <button
                      onClick={editHandleSubmit}
                      type="submit"
                      className="text-base flex justify-start items-center bg-secondary py-2 px-5 text-white rounded-md  "
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ModalDerived>

      {/* Edit Provider end*/}

      <ModalDerived
        visibility={providerAddForm?.openModal3}
        onClose={() => providerAddForm?.setOpenModal3(false)}
      >
        <div className=" bg-white rounded-lg  lg:h-[85vh] pb-[5%]  overflow-y-hidden w-[100%]  md:w-[85vh] scrollbar-hide ">
          <div className=" h-[100vh]  pt-5 pb-3">
            <div className="h-[10vh] flex justify-between items-start border-b-[1px] pb-4 px-5">
              <div>
                <p className="text-gray-800 font-medium md:text-lg ">
                  Provider
                </p>
                <p className="text-gray-500 font-normal md:text-sm pt-1">
                  Add New Provider
                </p>
              </div>
              <button onClick={() => providerAddForm?.setOpenModal3(false)}>
                <AiOutlineClose className="text-gray-800 h-6 w-6" />
              </button>
            </div>
            <div className="overflow-hidden ">
              <div className="w-full   bg-white  ">
                <div className="mx-5 py-3 h-[60vh]  2xl:h-[39vh]">
                  <div className="flex items-center  justify-between ">
                    <label
                      className="block text-[#47494b] text-sm pt-1 font-semibold"
                      htmlFor=""
                    >
                      Add Provider Name
                    </label>
                  </div>
                  <input
                    type="text"
                    id=""
                    name="name"
                    value={formData?.name}
                    onChange={handleChange}
                    placeholder="Enter Provider Name"
                    className=" w-full placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300   "
                  />
                </div>
                <div className="h-[10vh] flex justify-end items-center border-t-[1px] pt-3 pb-2 px-5">
                  <div className=" flex justify-end items-center gap-3">
                    <button
                      onClick={() => providerAddForm?.setOpenModal3(false)}
                      className="text-base text-gray-600 font-medium flex justify-start items-center border-[1px] border-gray-300 py-2 px-5 rounded-md  "
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => handleSubmit()}
                      type="submit"
                      className="text-base flex justify-start items-center bg-secondary py-2 px-5 text-white rounded-md  "
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
          renderRowActions={({ row }) => (
            <div className="flex justify-between items-center gap-5 pr-10">
              <div
                // onClick={() => {
                //   handleEditRoom(row.original.id);
                //   setEditProvider(true);
                // }}
                onClick={() => {
                  const filterType = calendarProviderDataTable.filter(
                    (row1: any) => row.original.id === row1.id
                  );
                  setEditAptData(filterType[0]);

                  setEditProvider(true);
                }}
              >
                <CiEdit className="cursor-pointer h-4 w-4 text-gray-600" />
              </div>

              <button
                // onClick={() => {
                //   data.splice(row.index, 1); //assuming simple data table
                //   // setData([...data]);
                // }}
                onClick={() => {
                  deleteProvider(row.original.id);
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
                    placeholder="Search Calendar"
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
    </>
  );
};

export default ProvidersListTable;
