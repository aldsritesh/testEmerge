import React, { useEffect, useMemo, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import MaterialReactTable, { type MRT_ColumnDef } from "material-react-table";
import { MenuItem, Select } from "@mui/material";
import moment from "moment";
import { FaFolder } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line, RiDeleteBinLine } from "react-icons/ri";
import axios from "axios";
import { baseUrl } from "@/config/APIConstants";
import { useRouter } from "next/router";
import CustomPagination from "@/components/UI/CustomPagination";
import ModalDerived from "@/components/Modal";
import EditForm from "../EditForm";
import { useAuthentication } from "@/controllers/auth";

interface RowData {
  [key: string]: any;
}

const FieldTableData = ({ data1, data }: any) => {
  const [folderData, setFolderData] = useState();
  const { location, token }: any = useAuthentication();
  const [editData, setEditData] = useState({});
  // console.log("haa bhai", editData);

  const router = useRouter();
  const deleteCustomField = async (id: any) => {
    await axios
      .delete(`${baseUrl}custom-fields/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // console.log(response.data);
        router.reload();
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    axios
      .get(`${baseUrl}custom-field-folders/location/${location?.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }: any) => {
        setFolderData(data);
        console.log("filterData", folderData);
        //
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  const handleAddOption = () => {
    setFormData({
      ...formData,
      options: [...formData.options, { optionLabels: "", optionValues: "" }],
    });
  };

  const handleDeleteOption = (index: any) => {
    const updatedOptions = [...formData.options];
    updatedOptions.splice(index, 1);

    setFormData({
      ...formData,
      options: updatedOptions,
    });
  };

  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: "field_name",
        id: "field_name",
        header: "Field Name",
        size: 250,
        Cell: ({ row }) => (
          <p className="  text-gray-700 font-medium text-[15px]">
            {row.original.name}
          </p>
        ),
        enableColumnFilter: true,
      },
      {
        accessorKey: "folder",
        id: "folder",
        header: "Folder",
        size: 150,
        Cell: ({ row }) => (
          <div className="flex justify-start items-start gap-2">
            <p className=" flex items-center gap-1 text-gray-700 font-medium text-[12px]  px-2 rounded-md border py-1">
              <FaFolder />
              {row.original.folderName}
            </p>
          </div>
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
              {row.original.Uniquekey}
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
  const [errors, setErrors] = useState<any>({});
  const [openEditModel, setEditModel] = useState<any>(false);
  const handleFilterChange = (e: any) => {
    const value = e.target.value || "";
    setFilterInput(value);
  };

  const filteredData = data?.filter((row: any) =>
    row.name.toLowerCase().includes(filterInput.toLowerCase())
  );

  // Pagination
  const [page, setPage] = useState(0);

  // const rowsPerPage = 10;
  const rowsPerPage = 20;

  const paginatedData = useMemo(() => {
    const startIndex = page * rowsPerPage;
    return filteredData.slice(startIndex, startIndex + rowsPerPage);
  }, [filteredData, page]);

  const [multiInputError, setMultiInputError] = useState<any>([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    folderID: "",
    type: "TEXTBOX_LIST",
    key: "",
    locationID: location?.id,
    options: [{ optionLabels: "", optionValues: "" }],
  });

  const handleChange = (e: any, index: any, field: any) => {
    const { name, value } = e.target;
    const updatedOptions: any = [...formData.options];
    updatedOptions[index][field] = value;

    if (field === "optionLabels") {
      updatedOptions[index].optionValues = value;
    }

    if (name == "name") {
      let str = value
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");

      setFormData((prevValues: any) => ({
        ...prevValues,
        key: str,
      }));
    }

    setFormData({
      ...formData,
      options: updatedOptions,
    });
  };

  const handleSubmit = async (e: any) => {
    // console.log("here");
    e.preventDefault();

    let arr: any = [];
    formData.options.map((item: any, index: any) => {
      if (item.optionLabels.length < 1) {
        arr.push(index);
        setMultiInputError(arr);
      }
    });

    let data = formData;
    data.key = "contact." + data.key;

    // try {
    //   const response = await axios.post(`${baseUrl}custom-fields`, data, {
    //     headers: { Authorization: `Bearer ${token}` },
    //   });
    //   // router.reload();

    // } catch (error) {
    //   console.log(error);
    // }
    // Validate form fields
    const validationErrors: any = {};

    if (!formData.name.trim()) {
      validationErrors.name = "required";
    }
    // if (!formValues.object.trim()) {
    //   validationErrors.object = "required";
    // }
    if (!formData.folderID.trim()) {
      validationErrors.folderID = "required";
    }
    if (!formData.key.trim()) {
      validationErrors.key = "required";
    }
    if (!formData.description.trim()) {
      validationErrors.description = "required";
    }
    // if (!formData.optionLabels.trim()) {
    //   validationErrors.optionLabels = "required";
    // }
    // if (!formData.optionValues.trim()) {
    //   validationErrors.optionValues = "required";
    // }
    // if (!formValues.eventColor.trim()) {
    //   validationErrors.eventColor = "required";
    // }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setFormData({
      name: "",
      description: "",
      folderID: "",
      type: "DROPDOWN_MULTI",
      key: "",
      locationID: location?.id,
      options: [{ optionLabels: "", optionValues: "" }],
    });
    // setFormData({
    //   name: "",
    //   // object: "",
    //   folderID: "",

    //   // prefill: "",
    //   key: "",
    //   description: "",
    // });

    setErrors({});

    // handleStoreFormData(formValues);
    // handleNewTab();
  };

  return (
    <div>
      <ModalDerived
        visibility={openEditModel}
        onClose={() => {
          setEditModel(false);
        }}
      >
        {editData && (
          <EditForm
            setEditModel={setEditModel}
            editData={editData}
            folderData={folderData}
          />
        )}
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
                  const filterType = data1.filter(
                    (row1: any) => row.original.id === row1.id
                  );

                  setEditData(filterType[0]);
                  setEditModel(true);
                }}
              >
                <CiEdit className="h-4 w-4 text-gray-600" />
              </button>
              <button
                onClick={() => {
                  // data.splice(row.index, 1); //assuming simple data table
                  // setData([...data]);

                  deleteCustomField(row.original.id);
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
          onChangePage={(newPage: any) => setPage(newPage)}
        />
      </div>
    </div>
  );
};

export default FieldTableData;
