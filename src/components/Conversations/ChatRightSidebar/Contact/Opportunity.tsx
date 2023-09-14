import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import ConversationModalDerived from "../../UI/ConversationModalDerived";
import { MenuItem, Select } from "@mui/material";
import { FiEdit } from "react-icons/fi";
import { BsChevronRight } from "react-icons/bs";
export default function Opportunity() {
  const [isModalOpenOpportunity, setIsModalOpenOpportunity] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [data, setData] = useState<any>([
    // Initial array data
    {
      name: "Chase  Bucker",
      pipeline: "A",
      stage: "Pending",
      status: "Active",
      leadValue: 100,
      owner: "Alice",
      source: "Web",
    },
    {
      name: "Chase  Bucker",
      pipeline: "B",
      stage: "Qualified",
      status: "Active",
      leadValue: 200,
      owner: "Bob",
      source: "Referral",
    },
    // Add more initial data here if needed
  ]);

  const [formData, setFormData] = useState({
    name: "",
    pipeline: "",
    stage: "",
    status: "",
    leadValue: "",
    owner: "",
    source: "",
  });

  const [errors, setErrors] = useState<any>({});

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let isValid = true;
    const errors: any = {};

    if (formData.name.trim() === "") {
      errors.name = "Name is required";
      isValid = false;
    }

    if (formData.pipeline.trim() === "") {
      errors.pipeline = "Pipeline is required";
      isValid = false;
    }

    if (formData.stage.trim() === "") {
      errors.stage = "Stage is required";
      isValid = false;
    }

    if (formData.status.trim() === "") {
      errors.status = "Status is required";
      isValid = false;
    }

    if (formData.leadValue.trim() === "" || isNaN(Number(formData.leadValue))) {
      errors.leadValue = "Lead Value must be a number";
      isValid = false;
    }

    if (formData.owner.trim() === "") {
      errors.owner = "Owner is required";
      isValid = false;
    }

    if (formData.source.trim() === "") {
      errors.source = "Source is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (validateForm()) {
      const newData = { ...formData };
      setData([...data, newData]);
      setIsModalOpenOpportunity(false);
      setErrors({});
    }
  };

  //
  const [editIndex, setEditIndex] = useState(-1);

  const handleEditInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEdit = (index: any) => {
    const { name, pipeline, stage, status, leadValue, owner, source } =
      data[index];
    setFormData({
      name,
      pipeline,
      stage,
      status,
      leadValue: String(leadValue),
      owner,
      source,
    });
    setEditIndex(index);
  };

  const handleUpdate = (event: any) => {
    event.preventDefault();

    const updatedData = [...data];
    updatedData[editIndex] = { ...formData };
    setData(updatedData);

    setFormData({
      name: "",
      pipeline: "",
      stage: "",
      status: "",
      leadValue: "",
      owner: "",
      source: "",
    });

    setEditIndex(-1);
    setIsEditModalOpen(false);
  };

  const handleDelete = () => {
    if (editIndex !== -1) {
      const updatedData = [...data];
      updatedData.splice(editIndex, 1);
      setData(updatedData);
      setFormData({
        name: "",
        pipeline: "",
        stage: "",
        status: "",
        leadValue: "",
        owner: "",
        source: "",
      });
      setEditIndex(-1);
      setIsEditModalOpen(false);
    }
  };

  return (
    <div>
      <div>
        {isModalOpenOpportunity && (
          <ConversationModalDerived
            visibility={isModalOpenOpportunity}
            onClose={() => setIsModalOpenOpportunity(false)}
          >
            <div className="bg-white px-5 rounded-lg py-5 pb-[5%] w-screen md:w-[70vh]">
              <p className="text-gray-800 font-medium md:text-lg mb-3">
                Add New Opportunity
              </p>

              <form onSubmit={handleSubmit} className="flex flex-wrap">
                <div className="w-full">
                  <label className="w-full text-sm text-gray-600 font-medium ">
                    Name:
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full placeholder:text-gray-400 text-gray-500 text-[12px] px-3 rounded-md mt-2 mb-2 py-2  font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
                  />
                  {errors.name && (
                    <span className="mb-8 text-xs text-red-500 ">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className="w-1/2 pr-2">
                  <label className="w-full text-sm text-gray-600 font-medium ">
                    Pipeline
                  </label>

                  <Select
                    name="pipeline"
                    value={formData.pipeline}
                    onChange={handleInputChange}
                    className="rounded-md mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark  text-space focus:outline-none focus:border-gray-300 text-black"
                  >
                    <MenuItem value="">Select a pipeline</MenuItem>
                    <MenuItem value="pipeline">pipeline</MenuItem>
                  </Select>
                  {errors.pipeline && (
                    <span className="mb-8 text-xs text-red-500 ">
                      {errors.pipeline}
                    </span>
                  )}
                </div>

                <div className="w-1/2 pl-2">
                  <label className="w-full text-sm text-gray-600 font-medium ">
                    Stage
                  </label>
                  <Select
                    name="stage"
                    value={formData.stage}
                    onChange={handleInputChange}
                    className="rounded-md mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark  text-space focus:outline-none focus:border-gray-300 text-black"
                  >
                    <MenuItem value="">Select a Stage</MenuItem>
                    <MenuItem value="Stage">Stage</MenuItem>
                  </Select>
                  {errors.stage && (
                    <span className="mb-8 text-xs text-red-500 ">
                      {errors.stage}
                    </span>
                  )}
                </div>

                <div className="w-1/2 pr-2">
                  <label className="w-full text-sm text-gray-600 font-medium ">
                    Status
                  </label>
                  <Select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="rounded-md mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark  text-space focus:outline-none focus:border-gray-300 text-black"
                  >
                    <MenuItem value="">Select a status</MenuItem>
                    <MenuItem value="status">status</MenuItem>
                  </Select>

                  {errors.status && (
                    <span className="mb-8 text-xs text-red-500 ">
                      {errors.status}
                    </span>
                  )}
                </div>

                <div className="w-1/2 pl-2">
                  <label className="w-full text-sm text-gray-600 font-medium ">
                    Lead Value:
                  </label>
                  <input
                    type="text"
                    name="leadValue"
                    value={formData.leadValue}
                    onChange={handleInputChange}
                    className="w-full placeholder:text-gray-400 text-gray-500 text-[12px] px-3 rounded-md mt-2 mb-2 py-3 font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
                  />
                  {errors.leadValue && (
                    <span className="mb-8 text-xs text-red-500 ">
                      {errors.leadValue}
                    </span>
                  )}
                </div>

                <div className="w-1/2 pr-2">
                  <label className="w-full text-sm text-gray-600 font-medium ">
                    Owner:
                  </label>
                  <Select
                    name="owner"
                    value={formData.owner}
                    onChange={handleInputChange}
                    className="rounded-md mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark  text-space focus:outline-none focus:border-gray-300 text-black"
                  >
                    <MenuItem value="">Select a status</MenuItem>
                    <MenuItem value="status">status</MenuItem>
                  </Select>
                  {errors.owner && (
                    <span className="mb-8 text-xs text-red-500 ">
                      {errors.owner}
                    </span>
                  )}
                </div>

                <div className="w-1/2 pl-2">
                  <label className="w-full text-sm text-gray-600 font-medium ">
                    Source:
                  </label>
                  <input
                    type="text"
                    name="source"
                    value={formData.source}
                    onChange={handleInputChange}
                    className="w-full placeholder:text-gray-400 text-gray-500 text-[12px] px-3 rounded-md mt-2 mb-2 py-3  font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
                  />
                  {errors.source && (
                    <span className="mb-8 text-xs text-red-500 ">
                      {errors.source}
                    </span>
                  )}
                </div>

                <div className="w-full flex justify-end items-center gap-2 border-t mt-4 pt-4">
                  <button
                    onClick={() => setIsModalOpenOpportunity(false)}
                    className="text-sm text-gray-600 font-medium flex justify-start items-center border-[1px] border-gray-300 py-1.5 px-5 rounded-md  "
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="text-sm flex justify-start items-center bg-newBlue py-1.5 px-5 text-white rounded-md  "
                  >
                    Add
                  </button>
                </div>
                <br />
              </form>
            </div>
          </ConversationModalDerived>
        )}
      </div>

      <div>
        {isEditModalOpen && (
          <ConversationModalDerived
            visibility={isEditModalOpen}
            onClose={() => setIsEditModalOpen(false)}
          >
            <div className="bg-white px-5 rounded-lg py-5 w-screen md:w-[70vh] pb-[10%]">
              <p className="text-gray-800 font-medium md:text-base mb-3 flex justify-start items-center">
                Edit Opportunity ---
                <BsChevronRight />
                {formData.name}
              </p>

              <form
                onSubmit={editIndex !== -1 ? handleUpdate : handleSubmit}
                className="flex flex-wrap"
              >
                <div className="w-full">
                  <label className="w-full text-sm text-gray-600 font-medium ">
                    Name:
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleEditInputChange}
                    className="w-full placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2 font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
                  />
                </div>

                <div className="w-1/2 pr-2">
                  <label className="w-full text-sm text-gray-600 font-medium ">
                    Pipeline
                  </label>

                  <Select
                    name="pipeline"
                    value={formData.pipeline}
                    onChange={handleEditInputChange}
                    className="rounded-md mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark  text-space focus:outline-none focus:border-gray-300 text-black"
                  >
                    <MenuItem value="">Select a pipeline</MenuItem>
                    <MenuItem value="pipeline">pipeline</MenuItem>
                  </Select>
                </div>

                <div className="w-1/2 pl-2">
                  <label className="w-full text-sm text-gray-600 font-medium ">
                    Stage
                  </label>
                  <Select
                    name="stage"
                    value={formData.stage}
                    onChange={handleEditInputChange}
                    className="rounded-md mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark  text-space focus:outline-none focus:border-gray-300 text-black"
                  >
                    <MenuItem value="">Select a Stage</MenuItem>
                    <MenuItem value="Stage">Stage</MenuItem>
                  </Select>
                </div>

                <div className="w-1/2 pr-2">
                  <label className="w-full text-sm text-gray-600 font-medium ">
                    Status
                  </label>
                  <Select
                    name="status"
                    value={formData.status}
                    onChange={handleEditInputChange}
                    className="rounded-md mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark  text-space focus:outline-none focus:border-gray-300 text-black"
                  >
                    <MenuItem value="">Select a status</MenuItem>
                    <MenuItem value="status">status</MenuItem>
                  </Select>
                </div>

                <div className="w-1/2 pl-2">
                  <label className="w-full text-sm text-gray-600 font-medium ">
                    Lead Value:
                  </label>
                  <input
                    type="text"
                    name="leadValue"
                    value={formData.leadValue}
                    onChange={handleEditInputChange}
                    className="w-full placeholder:text-gray-400 text-gray-500 text-[12px] px-3 rounded-md mt-2 mb-2  py-3.5 font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
                  />
                </div>

                <div className="w-1/2 pr-2">
                  <label className="w-full text-sm text-gray-600 font-medium ">
                    Owner:
                  </label>
                  <Select
                    name="owner"
                    value={formData.owner}
                    onChange={handleEditInputChange}
                    className="rounded-md mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark  text-space focus:outline-none focus:border-gray-300 text-black"
                  >
                    <MenuItem value="">Select a status</MenuItem>
                    <MenuItem value="status">status</MenuItem>
                  </Select>
                </div>

                <div className="w-1/2 pl-2">
                  <label className="w-full text-sm text-gray-600 font-medium ">
                    Source:
                  </label>
                  <input
                    type="text"
                    name="source"
                    value={formData.source}
                    onChange={handleEditInputChange}
                    className="w-full placeholder:text-gray-400 text-gray-500 text-[12px] px-3 rounded-md mt-2 mb-2  py-3.5 font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
                  />
                </div>
                <div className="flex justify-between items-center w-full border-t mt-4 pt-4">
                  <button
                    onClick={handleDelete}
                    className="text-sm flex justify-start items-center bg-secondary py-1.5 px-5 text-white rounded-md mb-0.5"
                  >
                    Delete
                  </button>
                  <div className=" flex justify-end items-center gap-2  ">
                    <button
                      onClick={() => setIsEditModalOpen(false)}
                      className="text-sm text-gray-600 font-medium flex justify-start items-center border-[1px] border-gray-300 py-1.5 px-5 rounded-md  "
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="text-sm flex justify-start items-center bg-newBlue py-1.5 px-5 text-white rounded-md  "
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </ConversationModalDerived>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-start mt-1 px-2">
        <div className=" mb-2  flex flex-wrap items-center justify-start bg-blue-200 mr-2 px-2 py-1 rounded-md">
          {data.map((item: any, index: number) => (
            <div
              key={index}
              className="rounded-full mx-2 text-[11px] text-gray-800 font-semibold"
            >
              {item.name}
              <button
                type="button"
                onClick={() => {
                  handleEdit(index);
                  setIsEditModalOpen(true);
                }}
                className="ml-1 text-gray-800  font-semibold focus:outline-none"
              >
                <FiEdit />
              </button>
            </div>
          ))}{" "}
        </div>
        <button
          onClick={() => setIsModalOpenOpportunity(true)}
          className="flex justify-start items-center bg-newBlue py-1 px-3 mb-2 rounded-md  "
        >
          <span className="text-[12px]   text-white font-semibold">Add</span>
          <AiOutlinePlus className="h-4 w-4 text-white ml-2" />
        </button>
      </div>
    </div>
  );
}
