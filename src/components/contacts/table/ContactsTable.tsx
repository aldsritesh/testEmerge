import Image from "next/image";
import {
  createContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  useContext,
} from "react";
import { FiChevronDown, FiMail, FiSettings } from "react-icons/fi";
import moment from "moment-timezone";
import {
  BsFunnel,
  BsColumns,
  BsClock,
  BsTelephone,
  BsChevronDown,
  BsThreeDots,
} from "react-icons/bs";
import {
  AiOutlineInsertRowAbove,
  AiOutlineBars,
  AiOutlineMail,
} from "react-icons/ai";
import AddContact from "./AddContact";
import MaterialReactTable, { type MRT_ColumnDef } from "material-react-table";
import { IoMailOutline } from "react-icons/io5";
import { ExportToCsv } from "export-to-csv"; //or use your library of choice here
import { Pill } from "../../UI/Pill";
import { Popper } from "@mui/material";
import {
  IContact,
  IAddContactData,
  IContactTag,
  ILeadSource,
  ITag,
} from "../../Interfaces";
import { useRouter } from "next/router";
import axios from "axios";
import ContactFilter from "@/components/Contact/Filter";
import Link from "next/link";
import { Client, HydrationProvider } from "react-hydration-provider";
import { MdPhoneCallback } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { baseUrl, locationID, token } from "../../../config/APIConstants";
import { GlobalContext } from "@/layouts/GlobalLayout";
import { IPipeline, IStage } from "@/components/Leads/Interfaces";
import CustomPagination from "@/components/UI/CustomPagination";

interface IContactsTableProps {
  data: IContact[];
  setData: (data: any) => void;
}

async function addContactToServer(
  addContactData: IAddContactData,
  setData: (data: any) => void
): Promise<boolean> {
  let isSuccessful = true;
  try {
    for (let i = 0; i < addContactData.tags.length; i++) {
      if (addContactData.tags[i].tagID !== "-1") continue;
      const tagResult = await axios.post(
        `${baseUrl}tags`,
        {
          locationID: locationID,
          content: addContactData.tags[i].content,
          tagType: "CONTACT",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      addContactData.tags[i].tagID = tagResult.data.tagID;
    }

    for (let i = 0; i < addContactData.leadSources.length; i++) {
      if (addContactData.leadSources[i].leadSourceID !== "-1") continue;
      const leadSourceResult = await axios.post(
        `${baseUrl}lead-sources`,
        {
          locationID: locationID,
          content: addContactData.leadSources[i].content,
          color: "RED",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      addContactData.leadSources[i].leadSourceID =
        leadSourceResult.data.leadSourceID;
    }

    const contactResult = await axios.post(
      `${baseUrl}contacts`,
      {
        locationID: locationID,
        ownerUserID: addContactData.ownerUserID,
        pipelineID: addContactData.pipelineID,
        pipelineStageID: addContactData.pipelineStageID,
        fullName: addContactData.fullName,
        emailAddress: addContactData.emailAddress,
        phoneNumber: addContactData.phoneNumber,
        contactType: addContactData.contactType,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const contactID = contactResult.data.contact.id;
    const tags: string[] = [];
    const leadSources: string[] = [];
    for (let i = 0; i < addContactData.tags.length; i++) {
      await axios.post(
        `${baseUrl}contacts/${contactID}/tags`,
        {
          contactID: contactID,
          tagID: addContactData.tags[i].tagID,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      tags.push(addContactData.tags[i].tagID);
    }

    for (let i = 0; i < addContactData.leadSources.length; i++) {
      await axios.post(
        `${baseUrl}contacts/${contactID}/lead-sources`,
        {
          contactID: contactID,
          leadSourceID: addContactData.leadSources[i].leadSourceID,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      leadSources.push(addContactData.leadSources[i].leadSourceID);
    }

    const newContact: IContact = {
      id: contactResult.data.contact.id,
      ownerUserID: contactResult.data.contact.ownerUserID,
      pipelineID: contactResult.data.contact.pipelineID,
      pipelineStageID: contactResult.data.contact.pipelineStageID,
      fullName: contactResult.data.contact.fullName,
      emailAddress: contactResult.data.contact.emailAddress,
      phoneNumber: contactResult.data.contact.phoneNumber,
      contactType: contactResult.data.contact.contactType,
      tags: tags,
      leadSources: leadSources,
      addedOn: contactResult.data.contact.addedOn,
    };

    setData((prevData: any) => [newContact, ...prevData]);
  } catch (error) {
    isSuccessful = false;
  }
  return isSuccessful;
}

export default function ContactsTable({ data, setData }: IContactsTableProps) {
  const ctx = useContext(GlobalContext);
  const [isGrid, setIsGrid] = useState(false);
  const router = useRouter();
  const [open, setOpen] = useState<any>(false);

  useEffect(() => {
    ctx.setUpdateLocationDataPing(ctx.updateLocationDataPing + 1);
  }, []);

  const deleteContact = async (id: any) => {
    if (confirm("Are you sure your want to delete")) {
      try {
        const response = await axios.delete(`${baseUrl}contacts/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        router.reload();
      } catch (error) {}
    }
  };

  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: "fullName",
        id: "fullName",
        header: "Name",
        Cell: ({ row }) => (
          <div
            className="font-main flex items-center cursor-pointer"
            onClick={() => {
              router.push("/contact/" + row.original.id);
            }}
            title={moment
              .tz(row.original.addedOn, "YYYY-MM-DDThh:mm:ssZ", "Etc/UTC")
              .local()
              .format("MMMM Do YYYY, h:mm:ss a")}
          >
            <div className="flex-shrink-0 h-12 w-12">
              <Image
                src={require("../../../../public/images/avatar/yellowdog.jpg")}
                width={50}
                height={50}
                alt=""
                className="rounded-full w-12 h-12 object-cover"
              />
            </div>
            <div className="ml-4">
              <div className="text font-medium">{row.original?.fullName}</div>
              <div className="text-sm font-light">
                {moment
                  .tz(row.original.addedOn, "YYYY-MM-DDThh:mm:ssZ", "Etc/UTC")
                  .local()
                  .fromNow()}
              </div>
            </div>
          </div>
        ),
        enableColumnFilter: true,
      },
      {
        accessorKey: "emailAddress",
        id: "emailAddress",
        header: "Email Address",
        Cell: ({ row }) =>
          row.original.emailAddress !== "" && (
            <div className="font-main flex items-center">
              <div className="flex-shrink-0 mt-0.5">
                <IoMailOutline className="w-6 h-6" />
              </div>
              <div className="ml-3">
                <div className="text-sm font-regular">
                  {row.original.emailAddress}
                </div>
              </div>
            </div>
          ),
      },
      {
        accessorKey: "phoneNumber",
        id: "phoneNumber",
        header: "Phone Number",
        Cell: ({ row }) =>
          row.original.phoneNumber !== "" && (
            <div className="font-main flex items-center">
              <div className="flex-shrink-0 mt-0.5">
                <BsTelephone className="w-5 h-5" />
              </div>
              <div className="ml-3">
                <div className="text-sm font-regular">
                  {row.original.phoneNumber}
                </div>
              </div>
            </div>
          ),
      },
      {
        id: "status",
        accessorFn: (row) => {
          return row.pipelineId;
        },
        header: "Lead Status",
        Cell: ({ row }) => {
          if (row.original.pipelineID === null) {
            return (
              <div className="font-main w-full">
                <button
                  className=" border-gray-300 bg-gray-100
              flex justify-start items-center border-[1px] text-center py-1 px-2 rounded-full font-normal text-dark"
                >
                  <div className="bg-gray-500 h-1.5 w-1.5 rounded-full   mr-2 ml-2"></div>
                  <span className="text-gray-600 pr-3">Unassigned</span>
                </button>
              </div>
            );
          } else {
            for (let i = 0; i < ctx.pipelines.length; i++) {
              if (ctx.pipelines[i].id === row.original.pipelineID) {
                for (let j = 0; j < ctx.pipelines[i].stages.length; j++) {
                  if (
                    ctx.pipelines[i].stages[j].id ===
                    row.original.pipelineStageID
                  ) {
                    return (
                      <div className="font-main w-full">
                        <button
                          className=" border-gray-300 bg-gray-100
            flex justify-start items-center border-[1px] text-center py-1 px-2 rounded-full font-normal text-dark"
                        >
                          <div className="bg-gray-500 h-1.5 w-1.5 rounded-full   mr-2 ml-2"></div>
                          <span className="text-gray-600 pr-3">
                            {ctx.pipelines[i].stages[j].name}
                          </span>
                        </button>
                      </div>
                    );
                  }
                }
              }
            }
          }
        },
      },
      {
        id: "owner",
        accessorFn: (row) => {
          return row.ownerUserID;
        },
        header: "Owner",
        Cell: ({ row }) => {
          if (row.original.ownerUserID === null) {
            return (
              <div className="font-main flex items-center w-full space-x-2">
                <p className="font-medium font-main">Unassigned</p>
              </div>
            );
          } else {
            return (
              <div className="font-main flex items-center w-full space-x-2">
                <div className="">
                  <div className="avatar">
                    <div className="w-12">
                      <Image
                        src={require("../../../../public/images/avatar/yellowdog.jpg")}
                        width={50}
                        height={50}
                        alt=""
                        className="rounded-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <p className="font-medium font-main">
                  {
                    ctx.users.filter(
                      (user) => user.id === row.original.ownerUserID
                    )[0]?.fullName
                  }
                </p>
              </div>
            );
          }
        },
      },
      {
        accessorKey: "leadSources",
        id: "leadSources",
        header: "Lead Source",
        size: 150,
        Cell: ({ row }) => {
          const [anchorEl, setAnchorEl] = useState<any>(null);
          const [open, setOpen] = useState(false);

          const value = row.original.leadSources;
          const handleLeadSources = () => {
            if (value.length > 2) {
              setOpen(!open);
            }
          };
          if (value.length > 0) {
            return (
              <div
                className="flex items-center"
                ref={setAnchorEl}
                onClick={() => handleLeadSources()}
                onMouseEnter={() => handleLeadSources()}
                onMouseLeave={() => setOpen(false)}
              >
                {value.slice(0, 2).map((leadSourceId: string, i: number) =>
                  ctx.leadSources.map((leadSource: ILeadSource) => {
                    if (leadSource.id === leadSourceId) {
                      return (
                        <Pill
                          bgColor={"red-100"}
                          textColor={"red-800"}
                          value={leadSource.content}
                          key={`leadSource-${i}`}
                        />
                      );
                    }
                  })
                )}

                {value.length > 2 && (
                  <Pill
                    bgColor={"red-100"}
                    textColor={"red-800"}
                    value={`+${value.length - 2}`}
                    sx={{ mr: 1, mb: 1 }}
                  />
                )}
                <div>
                  <Popper open={open} anchorEl={anchorEl} placement="bottom">
                    <div className="p-4 rounded-lg shadow-sm border border-gray-100 bg-white max-h-40 max-w-60 overflow-y-scroll">
                      {value.slice(2).map((leadSourceID: string, i: number) =>
                        ctx.leadSources.map((leadSource: ILeadSource) => {
                          if (leadSource.id === leadSourceID) {
                            return (
                              <Pill
                                bgColor={"red-100"}
                                textColor={"red-800"}
                                value={leadSource.content}
                                key={`extra-leadSource-${i}`}
                              />
                            );
                          }
                        })
                      )}
                    </div>
                  </Popper>
                </div>
              </div>
            );
          } else {
            return (
              <div className="flex items-center">
                <Pill
                  bgColor={"red-100"}
                  textColor={"red-800"}
                  value={"None"}
                  key={`leadSource-none`}
                />
              </div>
            );
          }
        },
      },
      {
        accessorKey: "tags",
        id: "tags",
        header: "Tags",
        size: 150,
        Cell: ({ row }) => {
          const [anchorEl, setAnchorEl] = useState<any>(null);
          const [open, setOpen] = useState(false);

          const value = row.original.tags;
          const handleTags = () => {
            if (value.length > 2) {
              setOpen(!open);
            }
          };
          if (value.length > 0) {
            return (
              <div
                className="flex items-center"
                ref={setAnchorEl}
                onClick={() => handleTags()}
                onMouseEnter={() => handleTags()}
                onMouseLeave={() => setOpen(false)}
              >
                {value.slice(0, 2).map((tagId: string, i: number) =>
                  ctx.tags.map((tag: ITag) => {
                    if (tag.id === tagId) {
                      return (
                        <Pill
                          bgColor={"blue-100"}
                          textColor={"blue-800"}
                          value={tag.content}
                          key={`tag-${i}`}
                        />
                      );
                    }
                  })
                )}

                {value.length > 2 && (
                  <Pill
                    bgColor={"blue-100"}
                    textColor={"blue-800"}
                    value={`+${value.length - 2}`}
                    sx={{ mr: 1, mb: 1 }}
                  />
                )}
                <div>
                  <Popper open={open} anchorEl={anchorEl} placement="bottom">
                    <div className="p-4 rounded-lg shadow-sm border border-gray-100 bg-white max-h-40 max-w-60 overflow-y-scroll">
                      {value.slice(2).map((tagId: string, i: number) =>
                        ctx.tags.map((tag: ITag) => {
                          if (tag.id === tagId) {
                            return (
                              <Pill
                                bgColor={"blue-100"}
                                textColor={"blue-800"}
                                value={tag.content}
                                key={`extra-tag-${i}`}
                              />
                            );
                          }
                        })
                      )}
                    </div>
                  </Popper>
                </div>
              </div>
            );
          } else {
            return (
              <div className="flex items-center">
                <Pill
                  bgColor={"blue-100"}
                  textColor={"blue-800"}
                  value={"None"}
                  key={`tag-none`}
                />
              </div>
            );
          }
        },
      },
    ],
    [ctx.pipelines, ctx.leadSources, ctx.tags]
  );

  const [openModal, setOpenModal] = useState<any>(false);

  async function handleAddNewItem(item: IAddContactData) {
    let isSuccessful = true;
    await addContactToServer(item, setData).then((res) => {
      isSuccessful = res;
    });
    if (!isSuccessful) return false;
    setOpenModal(false);
    return true;
  }
  // const csvOptions = {
  //   fieldSeparator: ",",
  //   quoteStrings: '"',
  //   decimalSeparator: ".",
  //   showLabels: true,
  //   useBom: true,
  //   useKeysAsHeaders: false,
  //   headers: columns.map((c) => c.header),
  //   filename: "leads",
  // };

  const modifiedData = data.map((item) => {
    // Modify the "Lead Name" field based on your requirements
    return item;
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
      "Name",
      "Email Address",
      "Phone Number",
      "Status",
      "Lead Owner",
      "Tags",
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

  const [openManageColumnModal, setOpenManageColumnModal] = useState(false);
  //modal1
  const [isFlyOutVisible, setIsFlyOutVisible] = useState(false);

  const [filterValue, setFilterValue] = useState("");
  const [filteredData, setFilteredData] = useState<any>([]);
  const [nextContacts, setNextContacts] = useState(false);
  const [prevContacts, setPrevContacts] = useState(false);
  const [nextContactsData, setNextContactsData] = useState<any>([]);
  const [prevContactsData, setPrevContactsData] = useState<any>([]);

  useEffect(() => {
    const filtered = data.filter((category: any) =>
      category?.fullName?.toLowerCase().includes(filterValue.toLowerCase())
    );
    setFilteredData(filtered);
  }, [data, filterValue]);

  const handleFilter = (e: any) => {
    const value = e.target.value || "";
    setFilterValue(value);
  };

  const handleChecked = (e: any) => {
    if (e.target.value == "any") {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  console.log("Nexttt", nextContacts);

  // Pagination
  const [page, setPage] = useState(0);
  let rowsPerPage = 4;

  const paginatedData: any = useMemo(() => {
    const startIndex = page * rowsPerPage;
    return nextContacts
      ? nextContactsData
      : prevContacts
      ? prevContactsData
      : filteredData.slice(startIndex, startIndex + rowsPerPage);
  }, [
    filteredData,
    page,
    rowsPerPage,
    nextContacts,
    nextContactsData,
    prevContactsData,
    prevContacts,
  ]);

  console.log("PaginatedData", paginatedData);

  const prevContactsFunc = async () => {
    let firstId = paginatedData[0];
    console.log("firstId", firstId);
    // Back Contacts post API Call
    await axios
      .post(
        `${baseUrl}contacts/filter`,
        {
          locationID: `${locationID}`,
          paginationDirection: -1,
          lastContactID: `${firstId.id}`,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response: any) => {
        let data = response?.data?.contacts;
        let startIndex = data.length - rowsPerPage;
        let endIndex = data.length;
        let slicedData = data.slice(startIndex, endIndex);
        console.log("Response", slicedData);
        setPrevContactsData(slicedData);
      });
  };
  // console.log("Previous Data", prevContactsData);

  const nextContactsFunc = async () => {
    let lastId = paginatedData[rowsPerPage - 1];
    // Next Contacts post API Call
    await axios
      .post(
        `${baseUrl}contacts/filter`,
        {
          locationID: `${locationID}`,
          paginationDirection: 1,
          lastContactID: nextContacts
            ? nextContactsData[nextContactsData.length - 1].id
            : `${lastId.id}`,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response: any) => {
        if (response?.data?.contacts.length >= rowsPerPage) {
          let data = response?.data?.contacts;
          data.length = rowsPerPage;

          setNextContactsData(data);
        } else {
          setNextContactsData(response?.data?.contacts);
        }
      });
  };

  return (
    <>
      <AddContact
        onClose={() => setOpenModal(false)}
        visibility={openModal}
        onSave={async (item: IAddContactData) => {
          return await handleAddNewItem(item);
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
            updateData={(item: any) => {}}
          />
        </div>
      </div>

      <div className="font-main px-4 bg-white pb-4">
        <h1 className="text-2xl font-semibold text-dark mb-5 pt-5">
          {data?.length} Contacts
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
                className="dropdown-content space-y-3  shadow bg-base-100 rounded-box w-60"
              >
                <li>
                  <div className="flex flex-row justify-between items-center border-b py-3 px-2">
                    <span className="text-[#4B5563] text-md font-semibold">
                      Leads Owned By
                    </span>
                    <span className="text-xs font-semibold text-[#E0987F]">
                      Clear Filters
                    </span>
                  </div>
                </li>
                <li>
                  <div className="form-control w-fit px-2 ">
                    <label className=" cursor-pointer flex items-center gap-3">
                      <input
                        type="radio"
                        name="radio-10"
                        className="radio checked:bg-blue-500"
                        value="all"
                        onChange={handleChecked}
                      />
                      <span className="label-text">All Owner</span>
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-control w-fit px-2 py-1">
                    <label className=" cursor-pointer flex items-center gap-3">
                      <input
                        type="radio"
                        name="radio-10"
                        className="radio checked:bg-blue-500"
                        value="any"
                        onChange={handleChecked}
                      />
                      <span className="label-text">Is any of</span>
                    </label>
                  </div>
                </li>
                {open ? (
                  <li>
                    <div className="pb-2  px-3">
                      <input
                        type="text"
                        className="border outline-none rounded-md w-[13.5rem] px-3 py-1 "
                      />
                    </div>
                  </li>
                ) : (
                  ""
                )}
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
              <Link href="#">
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
        <div className="bg-white shadow-md rounded-md mx-2">
          <div className="bg-white shadow-md lg:px-2 pb-20 rounded-lg">
            <MaterialReactTable
              columns={columns}
              data={
                nextContacts
                  ? nextContactsData.filter((category: any) =>
                      category?.fullName
                        ?.toLowerCase()
                        .includes(filterValue.toLowerCase())
                    )
                  : prevContacts
                  ? prevContactsData.filter((category: any) =>
                      category?.fullName
                        ?.toLowerCase()
                        .includes(filterValue.toLowerCase())
                    )
                  : paginatedData
              }
              enableStickyHeader
              enableColumnOrdering
              enableRowSelection
              initialState={{
                showGlobalFilter: false,
                columnPinning: {
                  left: ["lead_name"],
                },
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

                  <button
                    // onClick={() => {
                    //   table.setEditingRow(row);
                    // }}
                    onClick={() => {
                      router.push("/contact/" + row.original.id);
                    }}
                  >
                    <CiEdit className="h-4 w-4 text-gray-600" />
                  </button>

                  <button
                    // onClick={() => {
                    //   table.setEditingRow(row);
                    // }}
                    onClick={() => {
                      deleteContact(row.original.id);
                    }}
                  >
                    <RiDeleteBin5Line className="h-4 w-4 text-gray-600" />
                  </button>

                  {/* <div className="dropdown">
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
                  </div> */}
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
            <CustomPagination
              count={filteredData.length} // Use the length of the filteredData for total count
              page={page}
              rowsPerPage={rowsPerPage}
              onChangePage={(newPage: any) => setPage(newPage)}
              prevPage={() => {
                setNextContacts(false);
                setPrevContacts(true);
                prevContactsFunc();
              }}
              nextPage={() => {
                setPrevContacts(false);
                setNextContacts(true);
                nextContactsFunc();
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
