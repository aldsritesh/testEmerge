// import { locationID } from "@/config/APIConstants";
import React, { useEffect, useState } from "react";
import SignatureNext from "../AllFields/Signature/SignatureNext";
import FileUploadNext from "../AllFields/FileUpload/FileUploadNext";
import SinglelineNext from "../AllFields/Singleline/SinglelineNext";
import MultilineNext from "../AllFields/Multiline/MultilineNext";
import NumberNext from "../AllFields/Number/NumberNext";
import PhoneNext from "../AllFields/Phone/PhoneNext";
import MonetryNext from "../AllFields/Monetry/MonetryNext";
import DatePickerNext from "../AllFields/Datepicker/DatePickerNext";
import DropdownSingleNext from "../AllFields/DropdownSingle/DropdownSingleNext";
import DropdownMultipleNext from "../AllFields/DropdownMultiple/DropdownMultipleNext";
import TextboxlistNext from "../AllFields/Textboxlist/TextboxlistNext";
import CheckboxNext from "../AllFields/Checkbox/CheckboxNext";
import { useAuthentication } from "@/controllers/auth";

export default function EditForm({ setEditModel, editData, folderData }: any) {
  const [errors, setErrors] = useState<any>({});
  const [selected, setSelected] = useState(-1);
  const tabs = [
    {
      type: "SINGLE_LINE",
      id: 1,
    },
    {
      type: "MULTI_LINE",
      id: 2,
    },
    {
      type: "TEXTBOX_LIST",
      id: 3,
    },
    {
      type: "SIGNATURE",
      id: 13,
    },
    {
      type: "FILE_UPLOAD",
      id: 12,
    },
    {
      type: "NUMBER",
      id: 4,
    },
    {
      type: "PHONE",
      id: 5,
    },
    {
      type: "MONETORY",
      id: 6,
    },
    {
      type: "DROPDOWN_SINGLE",
      id: 7,
    },
    {
      type: "DROPDOWN_MULTI",
      id: 8,
    },
    {
      type: "DATE",
      id: 11,
    },
    {
      type: "CHECKBOX",
      id: 10,
    },
  ];

  useEffect(() => {
    let tab = tabs.filter((item: any) => editData.type == item.type);

    if (tab.length > 0) {
      setSelected(tab[0].id);
    }
  }, [editData]);
  const handleAddOption = () => {
    setFormData({
      ...formData,
      options: [...formData.options, { optionLabels: "", optionValues: "" }],
    });
  };
  const { location, token }: any = useAuthentication();
  const handleDeleteOption = (index: any) => {
    const updatedOptions = [...formData.options];
    updatedOptions.splice(index, 1);

    setFormData({
      ...formData,
      options: updatedOptions,
    });
  };
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

  return (
    <>
      <div className=" bg-white rounded-lg h-[74vh] 2xl:h-[70vh]  overflow-y-hidden w-full scrollbar-hide ">
        <div className=" pb-3 w-screen md:w-[110vh]">
          {/* {console.log("sssaaawwd", selected)} */}
          {selected == 1 && (
            <SinglelineNext
              setFieldModel={setEditModel}
              initialData={editData}
              folderData={folderData}
            />
          )}
          {selected == 2 && (
            <MultilineNext
              setFieldModel={setEditModel}
              initialData={editData}
              folderData={folderData}
            />
          )}
          {selected == 3 && (
            <TextboxlistNext
              setFieldModel={setEditModel}
              initialData={editData}
              folderData={folderData}
            />
          )}
          {selected == 4 && (
            <NumberNext
              setFieldModel={setEditModel}
              initialData={editData}
              folderData={folderData}
            />
          )}
          {selected == 12 && (
            <FileUploadNext
              setFieldModel={setEditModel}
              initialData={editData}
              folderData={folderData}
            />
          )}

          {selected == 13 && (
            <SignatureNext
              setFieldModel={setEditModel}
              initialData={editData}
              folderData={folderData}
            />
          )}
          {selected == 5 && (
            <PhoneNext
              setFieldModel={setEditModel}
              initialData={editData}
              folderData={folderData}
            />
          )}
          {selected == 6 && (
            <MonetryNext
              setFieldModel={setEditModel}
              initialData={editData}
              folderData={folderData}
            />
          )}
          {selected == 11 && (
            <DatePickerNext
              setFieldModel={setEditModel}
              initialData={editData}
              folderData={folderData}
            />
          )}
          {selected == 7 && (
            <DropdownSingleNext
              setFieldModel={setEditModel}
              initialData={editData}
              folderData={folderData}
            />
          )}
          {selected == 8 && (
            <DropdownMultipleNext
              setFieldModel={setEditModel}
              initialData={editData}
              folderData={folderData}
            />
          )}
          {selected == 10 && (
            <CheckboxNext
              setFieldModel={setEditModel}
              initialData={editData}
              folderData={folderData}
            />
          )}
        </div>
      </div>
    </>
  );
}
