import React, { useEffect, useState } from "react";

import ModalDerived from "@/components/Modal";
import { AiOutlineClose, AiOutlineEye, AiOutlineFolder } from "react-icons/ai";
import { TbFolderPlus } from "react-icons/tb";
import FieldTableData from "./AllFields/field-table";
import FolderTableData from "./Folder/folder-table-data";
import DeletedFolderTabData from "./DeletedFolder/deleted-folderTabData";
import Singleline from "./AllFields/Singleline/Singleline";
import SinglelineNext from "./AllFields/Singleline/SinglelineNext";
import Multiline from "./AllFields/Multiline/Multiline";
import MultilineNext from "./AllFields/Multiline/MultilineNext";
import Textboxlist from "./AllFields/Textboxlist/Textboxlist";
import Number from "./AllFields/Number/Number";
import DropdownSingle from "./AllFields/DropdownSingle";
import DropdownMultiple from "./AllFields/DropdownMultiple";
import RadioSelect from "./AllFields/RadioSelect";
import Checkboxx from "./AllFields/Checkbox/Checkbox";
import TextboxlistNext from "./AllFields/Textboxlist/TextboxlistNext";
import NumberNext from "./AllFields/Number/NumberNext";
import Phone from "./AllFields/Phone/Phone";
import PhoneNext from "./AllFields/Phone/PhoneNext";
import DropdownSingleNext from "./AllFields/DropdownSingle/DropdownSingleNext";
import DropdownMultipleNext from "./AllFields/DropdownMultiple/DropdownMultipleNext";
import RadioNext from "./AllFields/RadioSelect/RadioNext";
import CheckboxNext from "./AllFields/Checkbox/CheckboxNext";
import FileUpload from "./AllFields/FileUpload";
import FileUploadNext from "./AllFields/FileUpload/FileUploadNext";
import Signature from "./AllFields/Signature";
import SignatureNext from "./AllFields/Signature/SignatureNext";
import Monetry from "./AllFields/Monetry";
import DatePickers from "./AllFields/Datepicker";
import MonetryNext from "./AllFields/Monetry/MonetryNext";
import DatePickerNext from "./AllFields/Datepicker/DatePickerNext";
import axios from "axios";
import { baseUrl } from "@/config/APIConstants";
import { useRouter } from "next/router";
import { useAuthentication } from "@/controllers/auth";

interface RowData {
  [key: string]: any;
}

export default function CustomFieldsData() {
  const [selected, setSelected] = useState(1);
  const [folder, setFolder] = useState<any>([]);
  const { location, token }: any = useAuthentication();
  const [customFields, setCustomFields] = useState<any>([]);
  const router = useRouter();

  useEffect(() => {
    axios
      .get(`${baseUrl}custom-field-folders/location/${location?.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }: any) => {
        setFolder(data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${baseUrl}custom-fields/location/${location?.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }: any) => {
        axios
          .get(`${baseUrl}custom-field-folders/location/${location?.id}`, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((data1: any) => {
            const data2 = data1.data.customFieldFolders;

            const tabelData: any = [];
            data2.map((d2: any) => {
              data?.customFields.map((item: any, index: any) => {
                if (item.folderID == d2.id) {
                  tabelData.push({
                    id: item.id,
                    name: item.name,
                    folderName: d2.folderName,
                    Uniquekey: item.key,
                    updatedOn: item.updatedOn,
                  });
                }
              });
            });

            setCustomFields(tabelData);
            setAllCustomFieldData(data?.customFields);
          });
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setFieldModel(false);
  };

  const [next, setNext] = useState(false);
  const handleTab = (index: any) => {
    setSelected(index);
  };

  const [openFieldModel, setFieldModel] = useState<any>(false);
  const [allCustomFieldData, setAllCustomFieldData] = useState();

  // console.log("uuu", allCustomFieldData);
  const [formValues, setFormValues] = useState<any>({
    name: "",
    locationID: location?.id,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormValues((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <>
      <ModalDerived
        visibility={openFieldModel}
        onClose={() => {
          setFieldModel(false), setNext(false);
        }}
      >
        {!next ? (
          <div className=" bg-white rounded-lg overflow-y-auto w-full scrollbar-hide ">
            <form
              className=" pt-4 pb-3 w-screen md:w-[100vh] lg:w-[90vh] 2xl:w-[80vh]"
              onSubmit={handleSubmit}
            >
              <div className="  pb-3 w-screen md:w-[100vh] lg:w-[90vh] 2xl:w-[80vh]">
                <div className=" flex justify-between items-start border-b-[1px] pb-4 px-5">
                  <div>
                    <p className="text-gray-700 font-medium md:text-lg text-center">
                      New Custom Fields
                    </p>
                  </div>
                  <button onClick={() => setFieldModel(false)}>
                    <AiOutlineClose className="text-gray-800 h-6 w-6" />
                  </button>
                </div>
                <div className="">
                  <div className="relative flex flex-col">
                    <div className="h-full 3xl:h-full px-6 overflow-y-auto pt-2 border border-[#958F8F] pb-6">
                      <div className="flex items-center justify-end">
                        <AiOutlineEye size={20} className="mr-1" />
                        <h3 className="text-sm text-gray-600 py-2 ">Preview</h3>
                      </div>
                      {selected == 1 && (
                        <div>
                          <Singleline />
                        </div>
                      )}

                      {selected == 2 && (
                        <div>
                          <Multiline />
                        </div>
                      )}

                      {selected == 3 && (
                        <div>
                          <Textboxlist />
                        </div>
                      )}

                      {selected == 4 && (
                        <div>
                          <Number />
                        </div>
                      )}

                      {selected == 5 && (
                        <div>
                          <Phone />
                        </div>
                      )}

                      {selected == 6 && (
                        <div>
                          <Monetry />
                        </div>
                      )}

                      {selected == 7 && (
                        <div>
                          <DropdownSingle />
                        </div>
                      )}

                      {selected == 8 && (
                        <div>
                          <DropdownMultiple />
                        </div>
                      )}

                      {selected == 9 && (
                        <div>
                          <RadioSelect />
                        </div>
                      )}

                      {selected == 10 && (
                        <div>
                          <Checkboxx />
                        </div>
                      )}

                      {selected == 11 && (
                        <div>
                          <DatePickers />
                        </div>
                      )}

                      {selected == 12 && (
                        <div>
                          <FileUpload />
                        </div>
                      )}

                      {selected == 13 && (
                        <div>
                          <Signature />
                        </div>
                      )}
                    </div>
                    <div className="h-[30vh] border border-r border-r-gray-300 px-6 overflow-y-auto ">
                      <div className="pt-4">
                        <h3 className="text-sm text-[#5D6470]"> Text Input</h3>

                        <div className="flex flex-col flex-wrap  pt-3">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              handleTab(1);
                            }}
                            className={
                              selected == 1
                                ? "flex items-center  w-full text-sm border border-gray-300 px-4 py-3 rounded-md bg-[#143041] text-white font-medium"
                                : "flex items-center  w-full text-sm border border-gray-300 px-4 py-3 rounded-md bg-white"
                            }
                          >
                            <AiOutlineFolder
                              size={24}
                              className={
                                selected == 1 ? "text-white" : "text-gray-400"
                              }
                            />
                            <div className="md:pl-2">Single line</div>
                          </button>

                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              handleTab(2);
                            }}
                            className={
                              selected == 2
                                ? "flex items-center  mt-2 w-full text-sm border border-gray-300 px-4 py-3 rounded-md bg-[#113042] text-white font-medium"
                                : "flex items-center  mt-2 w-full text-sm border border-gray-300 px-4 py-3 rounded-md bg-white"
                            }
                          >
                            <AiOutlineFolder
                              size={24}
                              className={
                                selected == 2 ? "text-white" : "text-gray-400"
                              }
                            />
                            <div className="md:pl-2">Multi Line</div>
                          </button>

                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              handleTab(3);
                            }}
                            className={
                              selected == 3
                                ? "flex items-center  mt-2 w-full text-sm border border-gray-300 px-4 py-3 rounded-md bg-[#113042] text-white font-medium"
                                : "flex items-center  mt-2 w-full text-sm border border-gray-300 px-4 py-3 rounded-md bg-white"
                            }
                          >
                            <AiOutlineFolder
                              size={24}
                              className={
                                selected == 3 ? "text-white" : "text-gray-400"
                              }
                            />
                            <div className="md:pl-2">Text Box List</div>
                          </button>
                        </div>
                      </div>
                      {/* 
                <div className="pt-4">
                  <h3 className="text-sm text-[#5D6470]"> Values</h3>
                  

                  <div className="flex flex-wrap space-x-4 pt-3">

                    <button onClick={()=>handleTab(4)} className={selected==4?"w-28 text-sm border px-4 py-3 rounded-md bg-[#113042] text-white font-medium":"w-28 text-sm border px-4 py-3 rounded-md bg-white"}>
                      Number
                    </button>

                    <button onClick={()=>handleTab(5)} className={selected==5?"w-28 text-sm border px-4 py-3 rounded-md bg-[#113042] text-white font-medium":"w-28 text-sm border px-4 py-3 rounded-md bg-white"}>
                      Phone
                    </button>

                    <button onClick={()=>handleTab(6)} className={selected==6?"w-28 text-sm border px-4 py-3 rounded-md bg-[#113042] text-white font-medium":"w-28 text-sm border px-4 py-3 rounded-md bg-white"}>
                     Monetary
                    </button>

                  </div>
                </div> */}

                      <div className="pt-2 ">
                        <h3 className="text-sm text-[#5D6470]"> Values</h3>

                        <div className="flex flex-col flex-wrap  pt-1">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              handleTab(4);
                            }}
                            className={
                              selected == 4
                                ? "flex items-center mt-2 w-full text-sm border px-4 py-3 rounded-md bg-[#113042] text-white font-medium"
                                : "flex items-center w-full text-sm border px-4 py-3 rounded-md bg-white mt-2"
                            }
                          >
                            <AiOutlineFolder
                              size={24}
                              className={
                                selected == 4 ? "text-white" : "text-gray-400"
                              }
                            />
                            <div className="md:pl-2">Number</div>
                          </button>

                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              handleTab(5);
                            }}
                            className={
                              selected == 5
                                ? "flex items-center mt-2 w-full text-sm border px-4 py-3 rounded-md bg-[#113042] text-white font-medium"
                                : "flex items-center w-full text-sm border px-4 py-3 rounded-md bg-white mt-2"
                            }
                          >
                            <AiOutlineFolder
                              size={24}
                              className={
                                selected == 5 ? "text-white" : "text-gray-400"
                              }
                            />
                            <div className="md:pl-2"> Phone</div>
                          </button>

                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              handleTab(6);
                            }}
                            className={
                              selected == 6
                                ? "flex  mt-2 w-full text-sm border px-4 py-3 rounded-md bg-[#113042] text-white font-medium"
                                : "flex  w-full text-sm border px-4 py-3 rounded-md bg-white mt-2"
                            }
                          >
                            <AiOutlineFolder
                              size={24}
                              className={
                                selected == 6 ? "text-white" : "text-gray-400"
                              }
                            />
                            <div className="md:pl-2">Monitory</div>
                          </button>
                        </div>
                      </div>

                      <div className="pt-2 pb-2">
                        <h3 className="text-sm text-[#5D6470]">
                          {" "}
                          Choosing Options
                        </h3>

                        <div className="flex flex-col flex-wrap  pt-1">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              handleTab(7);
                            }}
                            className={
                              selected == 7
                                ? "flex items-center mt-2 w-full text-sm border px-4 py-3 rounded-md bg-[#113042] text-white font-medium"
                                : "flex items-center w-full text-sm border px-4 py-3 rounded-md bg-white mt-2"
                            }
                          >
                            <AiOutlineFolder
                              size={24}
                              className={
                                selected == 7 ? "text-white" : "text-gray-400"
                              }
                            />
                            <div className="md:pl-2">Dropdown (Single)</div>
                          </button>

                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              handleTab(8);
                            }}
                            className={
                              selected == 8
                                ? "flex items-center  mt-2 w-full text-sm border px-4 py-3 rounded-md bg-[#113042] text-white font-medium"
                                : "flex items-center w-full text-sm border px-4 py-3 rounded-md bg-white mt-2"
                            }
                          >
                            <AiOutlineFolder
                              size={24}
                              className={
                                selected == 8 ? "text-white" : "text-gray-400"
                              }
                            />
                            <div className="pl-2">Dropdown (Multiple)</div>
                          </button>

                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              handleTab(9);
                            }}
                            className={
                              selected == 9
                                ? "flex items-center mt-2 w-full text-sm border px-4 py-3 rounded-md bg-[#113042] text-white font-medium"
                                : "flex items-center w-full text-sm border px-4 py-3 rounded-md bg-white mt-2"
                            }
                          >
                            <AiOutlineFolder
                              size={24}
                              className={
                                selected == 9 ? "text-white" : "text-gray-400"
                              }
                            />
                            <div className="md:pl-2">Radio Select</div>
                          </button>

                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              handleTab(10);
                            }}
                            className={
                              selected == 10
                                ? "flex items-center mt-2 w-full text-sm border px-4 py-3 rounded-md bg-[#113042] text-white font-medium"
                                : "flex items-center w-full text-sm border px-4 py-3 rounded-md bg-white mt-2"
                            }
                          >
                            <AiOutlineFolder
                              size={24}
                              className={
                                selected == 10 ? "text-white" : "text-gray-400"
                              }
                            />
                            <div className="md:pl-2">Checkbox</div>
                          </button>

                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              handleTab(11);
                            }}
                            className={
                              selected == 11
                                ? "flex items-center mt-2 w-full text-sm border px-4 py-3 rounded-md bg-[#113042] text-white font-medium"
                                : "flex items-center w-full text-sm border px-4 py-3 rounded-md bg-white mt-2"
                            }
                          >
                            <AiOutlineFolder
                              size={24}
                              className={
                                selected == 11 ? "text-white" : "text-gray-400"
                              }
                            />
                            <div className="md:pl-2">Date Picker</div>
                          </button>
                        </div>
                      </div>

                      <div className="pt-2 pb-2">
                        <h3 className="text-sm text-[#5D6470]">Others</h3>
                        <div className="flex flex-col  pt-1">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              handleTab(12);
                            }}
                            className={
                              selected == 12
                                ? "flex items-center mt-2 w-full text-sm border px-4 py-3 rounded-md bg-[#113042] text-white font-medium"
                                : "flex items-center w-full text-sm border px-4 py-3 rounded-md bg-white mt-2"
                            }
                          >
                            <AiOutlineFolder
                              size={24}
                              className={
                                selected == 12 ? "text-white" : "text-gray-400"
                              }
                            />
                            <div className="md:pl-2">File Upload</div>
                          </button>

                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              handleTab(13);
                            }}
                            className={
                              selected == 13
                                ? "flex items-center mt-2 w-full text-sm border px-4 py-3 rounded-md bg-[#113042] text-white font-medium"
                                : "flex items-center w-full text-sm border px-4 py-3 rounded-md bg-white mt-2"
                            }
                          >
                            <AiOutlineFolder
                              size={24}
                              className={
                                selected == 13 ? "text-white" : "text-gray-400"
                              }
                            />
                            <div className="md:pl-2">Signature</div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end items-center border-t-[1px] pt-3 px-5">
                    <div className=" flex justify-end items-center gap-3">
                      <button
                        onClick={() => setFieldModel(false)}
                        className="text-base text-gray-600 font-medium flex justify-start items-center border-[1px] border-gray-300 py-2 px-5 rounded-md  "
                      >
                        Cancel
                      </button>

                      <button
                        onClick={() => {
                          setNext(true);
                        }}
                        type="submit"
                        className="text-base flex justify-start items-center bg-[#1258FC] py-2 px-5 text-white rounded-md  "
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        ) : (
          <>
            {selected == 1 && (
              <div>
                <SinglelineNext
                  folderData={folder}
                  setFieldModel={setFieldModel}
                  setNext={setNext}
                />
              </div>
            )}

            {selected == 2 && (
              <div>
                <MultilineNext
                  folderData={folder}
                  setFieldModel={setFieldModel}
                  setNext={setNext}
                />
              </div>
            )}
            {selected == 3 && (
              <div>
                <TextboxlistNext
                  folderData={folder}
                  setFieldModel={setFieldModel}
                  setNext={setNext}
                />
              </div>
            )}

            {selected == 4 && (
              <div>
                <NumberNext
                  folderData={folder}
                  setFieldModel={setFieldModel}
                  setNext={setNext}
                />
              </div>
            )}

            {selected == 5 && (
              <div>
                <PhoneNext
                  folderData={folder}
                  setFieldModel={setFieldModel}
                  setNext={setNext}
                />
              </div>
            )}

            {selected == 6 && (
              <div>
                <MonetryNext
                  folderData={folder}
                  setFieldModel={setFieldModel}
                  setNext={setNext}
                />
              </div>
            )}

            {selected == 7 && (
              <div>
                <DropdownSingleNext
                  folderData={folder}
                  setFieldModel={setFieldModel}
                  setNext={setNext}
                />
              </div>
            )}

            {selected == 8 && (
              <div>
                <DropdownMultipleNext
                  folderData={folder}
                  setFieldModel={setFieldModel}
                  setNext={setNext}
                />
              </div>
            )}

            {selected == 9 && (
              <div>
                <RadioNext
                  folderData={folder}
                  setFieldModel={setFieldModel}
                  setNext={setNext}
                />
              </div>
            )}
            {selected == 10 && (
              <div>
                <CheckboxNext
                  folderData={folder}
                  setFieldModel={setFieldModel}
                  setNext={setNext}
                />
              </div>
            )}
            {selected == 11 && (
              <div>
                <DatePickerNext
                  folderData={folder}
                  setFieldModel={setFieldModel}
                  setNext={setNext}
                />
              </div>
            )}
            {selected == 12 && (
              <div>
                <FileUploadNext
                  folderData={folder}
                  setFieldModel={setFieldModel}
                  setNext={setNext}
                />
              </div>
            )}

            {selected == 13 && (
              <div>
                <SignatureNext
                  folderData={folder}
                  setFieldModel={setFieldModel}
                  setNext={setNext}
                />
              </div>
            )}
          </>
        )}
      </ModalDerived>

      <div className="w-full px-2 py-2">
        <div className="flex  items-center justify-between">
          <div className="flex w-full items-center justify-end">
            <button
              onClick={() => setFieldModel(true)}
              className="text-xs flex justify-center items-center  mt-3 mb-5  bg-[#1258FC] hover:bg-secondary duration-300 m-1 py-2.5 px-5 2xl:px-6 text-white rounded-md "
            >
              + Add Field
            </button>
          </div>
        </div>

        {/* <div className=" text-[#34373a] font-semibold bg-gray-100 text-xs border-t border-x rounded-t-md w-[16.5rem] flex "></div> */}
        <div className="text-[#34373a] font-semibold bg-gray-100 text-xs border-t border-x rounded-t-md w-fit flex ">
          {/* {FieldType.map((item: any, index: number) => (
            <button
              key={index}
              onClick={() => setSelect(index)}
              className={`px-4 py-2.5 ${
                select == index ? "bg-white rounded-t-md" : ""
              } `}
            >
              {item.title}
            </button>
          ))} */}
        </div>

        <div className="pb-10">
          <FieldTableData data={customFields} data1={allCustomFieldData} />

          {/* {select == 0 && }
          {select == 1 && <FolderTableData data={data} />}
          {select == 2 && <DeletedFolderTabData data={data} />} */}
        </div>
      </div>
    </>
  );
}
