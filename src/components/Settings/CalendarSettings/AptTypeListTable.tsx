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
import { useAuthentication } from "@/controllers/auth";

interface RowData {
  [key: string]: any;
}

const AptTypListTable = ({ CalendarAppointmentData }: any) => {
  const [editAptData, setEditAptData] = useState<any>({});

  const router = useRouter();
  const [editApt, setEditApt] = useState(false);
  const { location, token }: any = useAuthentication();
  const [formData, setFormData] = useState<any>({
    aptTyp: "",
  });

  // console.log("gg bhai ji", formData);
  const AptTypAddForm: any = useContext(CalendarSettingsContext);
  const [data, setData] = useState<RowData[]>([
    {
      id: "1",
      aptTyp: "Apt Type 1",
      createdOn: "2023-06-14T09:00:00.000Z",
      upDatedOn: "2023-06-14T09:00:00.000Z",
    },
    {
      id: "2",
      aptTyp: "Apt Type 2",
      createdOn: "2023-06-14T09:00:00.000Z",
      upDatedOn: "2023-06-14T09:00:00.000Z",
    },
    {
      id: "3",
      aptTyp: "Apt Type 3",
      createdOn: "2023-06-14T09:00:00.000Z",
      upDatedOn: "2023-06-14T09:00:00.000Z",
    },
    {
      id: "4",
      aptTyp: "Apt Type 4",
      createdOn: "2023-06-14T09:00:00.000Z",
      upDatedOn: "2023-06-14T09:00:00.000Z",
    },
  ]);

  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: "aptTyp",
        id: "aptTyp",
        header: "Apt Type",
        size: 350,
        Cell: ({ row }) => (
          <p className="  text-gray-700 font-medium text-[15px]">
            {row.original.type}
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

  const handleFilterChange = (e: any) => {
    const value = e.target.value || "";
    setFilterInput(value);
  };

  // if (calendarAppointmentDataTable != undefined){
  const filteredData = CalendarAppointmentData?.filter((row: any) =>
    row.type.toLowerCase().includes(filterInput.toLowerCase())
  );
  // }

  const handleEditApt = async (id: any) => {
    try {
      const response = await axios.put(`${baseUrl}appointment-types/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      router.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleChangeApt = (e: any) => {
    setEditApt((prevValues: any) => ({
      ...prevValues,
      aptTyp: e.target.value,
    }));
  };

  const handleDelete = async (id: any) => {
    if (confirm("Are you sure your want to delete")) {
      await axios
        .delete(`${baseUrl}appointment-types/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          router.reload();
          console.log(res);
        });
    }
  };

  const handleSubmit = async () => {
    // console.log("uuss", formData);
    const calendarAptTab = await axios
      .post(
        `${baseUrl}appointment-types`,
        {
          locationID: location?.id,
          type: formData.aptTyp,
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
    // setData((prevValues: any) => [
    //   ...data,
    //   {
    //     id: data?.length + 1,
    //     aptTyp: formData?.aptTyp,
    //     createdOn: new Date(),
    //     upDatedOn: new Date(),
    //   },
    // ]);
    setFormData({
      aptTyp: "",
    });
    AptTypAddForm?.setOpenModal4(false);
  };

  // const handleEditSubmit = async () => {
  //   console.log("edit", formData);
  //   const calendarAptTab = await axios
  //     .put(
  //       `${baseUrl}appointment-types`,
  //       {
  //         locationID: locationID,
  //         type: formData.aptTyp,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     )
  //     .then(() => {
  //       // router.reload();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   // setData((prevValues: any) => [
  //   //   ...data,
  //   //   {
  //   //     id: data?.length + 1,
  //   //     aptTyp: formData?.aptTyp,
  //   //     createdOn: new Date(),
  //   //     upDatedOn: new Date(),
  //   //   },
  //   // ]);
  //   setFormData({
  //     aptTyp: "",
  //   });
  //   AptTypAddForm?.setOpenModal4(false);
  // };

  return (
    <>
      {/* Edit apt type start */}
      <ModalDerived visibility={editApt} onClose={() => setEditApt(true)}>
        <div className=" bg-white rounded-lg  lg:h-[85vh] pb-[5%]  overflow-y-hidden w-[100%]  md:w-[85vh] scrollbar-hide ">
          <div className=" h-[100vh]  pt-5 pb-3">
            <div className="h-[10vh] flex justify-between items-start border-b-[1px] pb-4 px-5">
              <div>
                <p className="text-gray-800 font-medium md:text-lg ">Apt</p>
                <p className="text-gray-500 font-normal md:text-sm pt-1">
                  Edit Apt
                </p>
              </div>
              <button onClick={() => setEditApt(false)}>
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
                      Edit Apt Type
                    </label>
                  </div>
                  <input
                    type="text"
                    id=""
                    name="aptTyp"
                    value={editAptData?.type}
                    onChange={(e) => handleChangeApt(e)}
                    placeholder="Enter Apt Type"
                    className=" w-full placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300   "
                  />
                </div>
                <div className="h-[10vh] flex justify-end items-center border-t-[1px] pt-3 pb-2 px-5">
                  <div className=" flex justify-end items-center gap-3">
                    <button
                      onClick={() => setEditApt(false)}
                      className="text-base text-gray-600 font-medium flex justify-start items-center border-[1px] border-gray-300 py-2 px-5 rounded-md  "
                    >
                      Cancel
                    </button>
                    <button
                      // onClick={() => handleEditSubmit()}
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
      {/* Edit apt type end */}

      <ModalDerived
        visibility={AptTypAddForm?.openModal4}
        onClose={() => AptTypAddForm?.setOpenModal4(false)}
      >
        <div className=" bg-white rounded-lg  lg:h-[85vh] pb-[5%]  overflow-y-hidden w-[100%]  md:w-[85vh] scrollbar-hide ">
          <div className=" h-[100vh]  pt-5 pb-3">
            <div className="h-[10vh] flex justify-between items-start border-b-[1px] pb-4 px-5">
              <div>
                <p className="text-gray-800 font-medium md:text-lg ">
                  Apt Type
                </p>
                <p className="text-gray-500 font-normal md:text-sm pt-1">
                  Add New Apt Type
                </p>
              </div>
              <button onClick={() => AptTypAddForm?.setOpenModal4(false)}>
                <AiOutlineClose className="text-gray-800 h-6 w-6" />
              </button>
            </div>
            <div className="overflow-hidden ">
              <div className="w-full   bg-white  ">
                <div className="mx-5 py-3 h-[60vh]">
                  <div className="flex items-center  justify-between ">
                    <label
                      className="block text-[#47494b] text-sm pt-1 font-semibold"
                      htmlFor=""
                    >
                      Add Apt Type
                    </label>
                  </div>
                  <input
                    type="text"
                    id=""
                    name="aptTyp"
                    value={formData?.aptTyp}
                    onChange={handleChange}
                    placeholder="Enter Apt Type"
                    className=" w-full placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300   "
                  />
                </div>
                <div className="h-[10vh] flex justify-end items-center border-t-[1px] pt-3 pb-2 px-5">
                  <div className=" flex justify-end items-center gap-3">
                    <button
                      onClick={() => AptTypAddForm?.setOpenModal4(false)}
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
          renderRowActions={({ row }) => (
            <div className="flex justify-between items-center gap-5 pr-10">
              {/* <Link href="/settings/calendar/edit-calendar"> */}
              <div
                // onClick={() => {
                //   handleEditApt(row.original.id);
                //   setEditApt(true);
                // }}
                onClick={() => {
                  const filterType = CalendarAppointmentData.filter(
                    (row1: any) => row.original.id === row1.id
                  );
                  setEditAptData(filterType[0]);
                  console.log("uts", filterType[0]);
                  setEditApt(true);
                }}
              >
                <CiEdit className="h-4 w-4 text-gray-600 cursor-pointer" />
              </div>
              {/* </Link> */}

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
      </div>
    </>
  );
};

export default AptTypListTable;

// import React from "react";

// export default function AptTypListTable() {
//   return <div>AptTypeListTable</div>;
// }
