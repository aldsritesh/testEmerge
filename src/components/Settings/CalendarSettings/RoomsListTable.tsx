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
import { useRouter } from "next/router";
import { baseUrl } from "@/config/APIConstants";
import axios from "axios";
import CustomPagination from "@/components/UI/CustomPagination";
import { useAuthentication } from "@/controllers/auth";

interface RowData {
  [key: string]: any;
}

const RoomsListTable = ({ calendarRoomDataTable }: any) => {
  const { location, token }: any = useAuthentication();
  const router = useRouter();

  const [editRoomModel, setEditRoomModel] = useState(false);
  const [singleRoom, setSingleRoom] = useState<any>({});

  const handleEditRoom = async (id: any) => {
    try {
      const response = await axios.get(`${baseUrl}rooms/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log("rttt", response);
      // router.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteContact = async (id: any) => {
    if (confirm("Are you sure your want to delete")) {
      try {
        const response = await axios.delete(`${baseUrl}rooms/${id}`, {
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
  const [formData, setFormData] = useState<any>({
    room: "",
  });
  const roomAddForm: any = useContext(CalendarSettingsContext);
  const [data, setData] = useState<RowData[]>([
    {
      id: "1",
      room: "Room 1",
      createdOn: "2023-06-14T09:00:00.000Z",
      upDatedOn: "2023-06-14T09:00:00.000Z",
    },
    {
      id: "2",
      room: "Room 2",
      createdOn: "2023-06-14T09:00:00.000Z",
      upDatedOn: "2023-06-14T09:00:00.000Z",
    },
    {
      id: "3",
      room: "Room 3",
      createdOn: "2023-06-14T09:00:00.000Z",
      upDatedOn: "2023-06-14T09:00:00.000Z",
    },
    {
      id: "4",
      room: "Room 4",
      createdOn: "2023-06-14T09:00:00.000Z",
      upDatedOn: "2023-06-14T09:00:00.000Z",
    },
  ]);

  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: "room",
        id: "room",
        header: "Room",
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
              {moment(row.original.createdOn).format("MMM DD, yyyy")}
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

  const handleFilterChange = (e: any) => {
    const value = e.target.value || "";
    setFilterInput(value);
  };
  const [editRoomData, setEditRoomData] = useState<any>({});

  const filteredData = calendarRoomDataTable.filter((row: any) =>
    row.name.toLowerCase().includes(filterInput.toLowerCase())
  );

  const handleChange = (e: any) => {
    setEditRoomData((prevValues1: any) => ({
      ...prevValues1,
      name: e.target.value,
    }));
  };

  const editHandleSubmit = async () => {
    const calendarRoomTab = await axios
      .put(
        `${baseUrl}rooms/${editRoomData.id}`,
        {
          // locationID: locationID,
          name: editRoomData.name,
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
    roomAddForm?.setOpenModal2(false);
  };

  const handleSubmit = async () => {
    const calendarRoomTab = await axios

      .post(
        `${baseUrl}rooms`,
        {
          locationID: location?.id,
          name: editRoomData.name,
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
    // console.log("ygygyg", calendarRoomTab);
    setEditRoomData({
      name: "",
    });
    roomAddForm?.setOpenModal2(false);
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
      {/* edit room table */}
      <ModalDerived
        visibility={editRoomModel}
        onClose={() => setEditRoomModel(true)}
      >
        <div className=" bg-white rounded-lg  lg:h-[85vh] pb-[5%]  overflow-y-hidden w-[100%]  md:w-[85vh] scrollbar-hide ">
          <div className=" h-[100vh]  pt-5 pb-3">
            <div className="h-[10vh] flex justify-between items-start border-b-[1px] pb-4 px-5">
              <div>
                <p className="text-gray-800 font-medium md:text-lg ">Rooms</p>
                <p className="text-gray-500 font-normal md:text-sm pt-1">
                  Edit Room
                </p>
              </div>
              <button onClick={() => setEditRoomModel(false)}>
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
                      Edit Room
                    </label>
                  </div>
                  <input
                    type="text"
                    id=""
                    name="name"
                    value={editRoomData?.name}
                    onChange={(e) => handleChange(e)}
                    placeholder="Enter Room Name"
                    className=" w-full placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300   "
                  />
                </div>
                <div className="h-[10vh] flex justify-end items-center border-t-[1px] pt-3 pb-2 px-5">
                  <div className=" flex justify-end items-center gap-3">
                    <button
                      onClick={() => {
                        setEditRoomModel(true);
                      }}
                      className="text-base text-gray-600 font-medium flex justify-start items-center border-[1px] border-gray-300 py-2 px-5 rounded-md  "
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => editHandleSubmit()}
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
      {/* edit room table */}

      <ModalDerived
        visibility={roomAddForm?.openModal2}
        onClose={() => roomAddForm?.setOpenModal2(false)}
      >
        <div className=" bg-white rounded-lg  lg:h-[85vh] pb-[5%]  overflow-y-hidden w-[100%]  md:w-[85vh] scrollbar-hide ">
          <div className=" h-[100vh]  pt-5 pb-3">
            <div className="h-[10vh] flex justify-between items-start border-b-[1px] pb-4 px-5">
              <div>
                <p className="text-gray-800 font-medium md:text-lg ">Rooms</p>
                <p className="text-gray-500 font-normal md:text-sm pt-1">
                  Add New Room
                </p>
              </div>
              <button onClick={() => roomAddForm?.setOpenModal2(false)}>
                <AiOutlineClose className="text-gray-800 h-6 w-6" />
              </button>
            </div>
            <div className="overflow-hidden ">
              <div className="w-full bg-white">
                <div className="mx-5 py-3 h-[60vh]  2xl:h-[39vh]">
                  <div className="flex items-center  justify-between ">
                    <label
                      className="block text-[#47494b] text-sm pt-1 font-semibold"
                      htmlFor=""
                    >
                      Add Room
                    </label>
                  </div>
                  <input
                    type="text"
                    id=""
                    name="name"
                    value={formData?.name}
                    onChange={handleChange}
                    placeholder="Enter Room Name"
                    className=" w-full placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300   "
                  />
                </div>
                <div className="h-[10vh] flex justify-end items-center border-t-[1px] pt-3 pb-2 px-5">
                  <div className=" flex justify-end items-center gap-3">
                    <button
                      onClick={() => roomAddForm?.setOpenModal2(false)}
                      className="text-base text-gray-600 font-medium flex justify-start items-center border-[1px] border-gray-300 py-2 px-5 rounded-md  "
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => handleSubmit()}
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
              {/* <Link href="/settings/calendar/edit-calendar"> */}
              <div
                // onClick={() => {
                //   handleEditRoom(row.original.id);
                //   setEditRoomModel(true);
                // }}

                onClick={() => {
                  const filterType = calendarRoomDataTable.filter(
                    (row1: any) => row.original.id === row1.id
                  );
                  setEditRoomData(filterType[0]);
                  setEditRoomModel(true);
                }}
              >
                <CiEdit className="h-4 w-4 text-gray-600 cursor-pointer" />
              </div>
              {/* </Link> */}

              <button
                // onClick={() => {
                //   data.splice(row.index, 1); //assuming simple data table
                //   // setData([...data]);
                // }}

                onClick={() => {
                  deleteContact(row.original.id);
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

export default RoomsListTable;
