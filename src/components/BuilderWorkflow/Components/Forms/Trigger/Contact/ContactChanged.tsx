import { nameTrigger } from "@/atoms/nameTrigger";
import { PlusCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { MenuItem, OutlinedInput, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useRecoilState } from "recoil";

const workflowTrigger = [
  {
    title: "A",
  },
  {
    title: "B",
  },
  {
    title: "C",
  },
  {
    title: "D",
  },
  {
    title: "E",
  },
  {
    title: "F",
  },
];

const appointmentFilter = [
  {
    title: "Assigned User",
    subContent: [
      {
        title: "Has Changed",
      },
      {
        title: "Has Changed to",
      },
    ],
  },
  {
    title: "DND",
    subContent: [],
  },
  {
    title: "Tags",
    subContent: [],
  },
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function ContactChanged({ onClose, updateData }: any) {
  const [actionData, setActionData] = useRecoilState(nameTrigger);
  const [state, setState] = useState<any>({
    // workflowTrigger: "",
    workflowName: actionData,

    filters: [],
  });

  const [errors, setErrors] = useState<any>({
    // workflowTrigger: "",
    workflowName: "",
    filters: [],
  });

  const handleInputChange = (e: any, index: any) => {
    const { name, value } = e.target;
    if (name.startsWith("filters")) {
      const newFilters = [...state.filters];
      newFilters[index] = { ...newFilters[index], [name]: value };
      setState((prevState: any) => ({ ...prevState, filters: newFilters }));
    } else {
      setState((prevState: any) => ({ ...prevState, [name]: value }));
    }
  };

  const handleAddField = () => {
    setState((prevState: any) => ({
      ...prevState,
      filters: [...prevState.filters, { filterstype: "", filterssubtype: "" }],
    }));
  };

  const handleRemoveField = (index: any) => {
    const newFilters: any = [...state.filters];
    newFilters.splice(index, 1);
    setState((prevState: any) => ({ ...prevState, filters: newFilters }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Validate form fields
    let formIsValid = true;
    const newErrors = {
      // workflowTrigger: "",
      workflowName: "",
      filters: [{ filterstype: "", filterssubtype: "" }],
    };

    // if (state.workflowTrigger === "") {
    //   formIsValid = false;
    //   newErrors.workflowTrigger = "Workflow Trigger is required";
    // }

    if (state.workflowName === "") {
      formIsValid = false;
      newErrors.workflowName = "Workflow Name is required";
    }

    const filtersErrors: any = [];
    state.filters.forEach((filter: any, index: any) => {
      const filterErrors: any = {};
      if (filter.filterstype === "") {
        formIsValid = false;
        filterErrors.filterstype = "Filter Type is required";
      }
      // if (filter.filterssubtype === "") {
      //   formIsValid = false;
      //   filterErrors.filterssubtype = "Filter Subtype is required";
      // }
      filtersErrors[index] = filterErrors;
    });

    newErrors.filters = filtersErrors;
    setErrors(newErrors);

    if (formIsValid) {
      // Form is valid, proceed with submission

      updateData(state.workflowName, state);
    }
  };

  return (
    <>
      <div className="h-[74vh] 2xl:h-[76vh] mt-2 overflow-y-scroll scrollbar-hide px-2">
        <form onSubmit={handleSubmit}>
          <div className="w-full mb-5 mt-4">
            <label
              className="w-full mb-2 text-sm pl-2 text-gray-600 font-semibold fontStrawFord"
              htmlFor="workflowName"
            >
              Workflow Trigger Name:
            </label>

            <TextField
              placeholder="Contact Changed"
              variant="outlined"
              type="text"
              id="workflowName"
              name="workflowName"
              value={state.workflowName}
              onChange={(e) => handleInputChange(e, 0)} // Assuming it's the first field, index is 0
              className="px-2 rounded-lg mt-2 mb-2 py-1 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark border-[1px] border-gray-400 text-space focus:outline-none focus:border-gray-300 text-black"
            />

            {errors.workflowName && (
              <div className="error">{errors.workflowName}</div>
            )}
          </div>

          {state.filters.map((filter: any, index: any) => (
            <div
              key={index}
              className="pl-2 flex flex-wrap justify-between mb-5 items-center "
            >
              <div className="w-full  md:w-[45%] pr-4">
                <label
                  htmlFor={`filterstype-${index}`}
                  className="w-full mb-2 text-sm   text-gray-500 font-semibold fontStrawFord"
                >
                  Filter Type:
                </label>
                <Select
                  placeholder="Contact Changed"
                  id={`filterstype-${index}`}
                  name="filterstype"
                  value={filter.filterstype}
                  onChange={(e) => handleInputChange(e, index)}
                  className="w-full 
                  border-none outline-none"
                >
                  <MenuItem value="">Select</MenuItem>
                  {appointmentFilter.map((option, optionIndex) => (
                    <MenuItem key={optionIndex} value={option.title}>
                      {option.title}
                    </MenuItem>
                  ))}
                </Select>
                {errors.filters[index] && errors.filters[index].filterstype && (
                  <div className="error">
                    {errors.filters[index].filterstype}
                  </div>
                )}
              </div>

              {filter.filterstype && (
                <div className="w-full  md:w-[45%] pr-4">
                  <label
                    htmlFor={`filterssubtype-${index}`}
                    className="w-full mb-2 text-sm   text-gray-500 font-semibold fontStrawFord"
                  >
                    Filter Subtype:
                  </label>
                  <Select
                    id={`filterssubtype-${index}`}
                    name="filterssubtype"
                    value={filter.filterssubtype}
                    onChange={(e) => handleInputChange(e, index)}
                    className="w-full 
                    border-none outline-none"
                  >
                    <MenuItem value="">Select</MenuItem>
                    {filter.filterstype &&
                      appointmentFilter
                        .find((option) => option.title === filter.filterstype)
                        ?.subContent.map(
                          (subOption: any, subOptionIndex: any) => (
                            <MenuItem
                              key={subOptionIndex}
                              value={subOption?.title}
                            >
                              {subOption?.title}
                            </MenuItem>
                          )
                        )}
                  </Select>
                  {errors.filters[index] &&
                    errors.filters[index].filterssubtype && (
                      <div className="error">
                        {errors.filters[index].filterssubtype}
                      </div>
                    )}
                </div>
              )}

              <div className="w-full md:w-[10%] pr-4">
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveField(index)}
                    className="  px-3 py-2 rounded-md mt-5"
                  >
                    <AiFillDelete className="h-5 w-5 text-gray-600" />
                  </button>
                )}
              </div>
            </div>
          ))}
          <div className="flex justify-start items-center pl-2 text-base text-dark font-semibold ">
            <PlusCircleIcon className="h-5 w-5 mr-1" />
            <button
              type="button"
              className="text-sm text-gray-500 font-semibold fontStrawFord"
              onClick={handleAddField}
            >
              Add Filter
            </button>
          </div>
        </form>
      </div>
      <div className="flex justify-end items-end py-2 px-4">
        <button
          onClick={onClose}
          className="border-2 mr-5 fontStrawFord border-OrangeBuilder rounded-md flex justify-center items-center px-8 py-1.5 text-OrangeBuilder"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          type="submit"
          className="bg-OrangeBuilder fontStrawFord rounded-md flex justify-center items-center px-8 py-2 text-white"
        >
          Submit
        </button>
      </div>
    </>
  );
}
