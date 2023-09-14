import { AiOutlinePlus } from "react-icons/ai";
import TextInput from "../../Components/TextInput";
import { MenuItem, Select } from "@mui/material";
import { useState } from "react";
import moment from "moment";

export default function Tasks() {
  const agents = [
    {
      value: "Not Available",
      label: "Not Available",
    },
    // {
    //   value: "Christan Rouche",
    //   label: "Christan Rouche",
    // },
    // {
    //   value: "Tyler Lockwood",
    //   label: "Tyler Lockwood",
    // },
    // {
    //   value: "Austin Garner",
    //   label: "Austin Garner",
    // },
    // {
    //   value: "Chase Buckner",
    //   label: "Chase Buckner",
    // },
    // {
    //   value: "Monica Geller",
    //   label: "Monica Geller",
    // },
  ];

  const types = ["Ascending", "Descending"];
  const [tasks, setTasks] = useState<any>([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    assignee: "",
    dueDate: "",
  });

  const [errors, setErrors] = useState<any>({
    title: "",
    assignee: "",
    dueDate: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear the corresponding error message when the user starts typing
    setErrors((prevErrors: any) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Perform validation
    let formIsValid = true;
    const newErrors: any = {};

    if (!formData.title.trim()) {
      formIsValid = false;
      newErrors.title = "Please enter a title";
    }

    if (!formData.assignee) {
      formIsValid = false;
      newErrors.assignee = "Please select an assignee";
    }
    if (!formData.description) {
      formIsValid = false;
      newErrors.description = "Please enter description";
    }

    if (!formData.dueDate) {
      formIsValid = false;
      newErrors.dueDate = "Please select a due date";
    }

    if (formIsValid) {
      // Submit the form or perform further actions
      setTasks([
        ...tasks,
        {
          title: formData.title,
          description: formData.description,
          assignee: formData.assignee,
          dueDate: formData.dueDate,
        },
      ]);
      setFormData({
        title: "",
        description: "",
        assignee: "",
        dueDate: "",
      });
    } else {
      // Update the error messages
      setErrors(newErrors);
    }
  };

  return (
    <div className="px-4 py-4 h-[100vh] pb-[30%]  overflow-y-scroll w-full scrollbar-hide ">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap gap-5 justify-between">
          <div className="w-full">
            <label htmlFor="title" className="text-sm">
              Title *
            </label>
            <TextInput
              name="title"
              placeholder="Task Title"
              value={formData.title}
              onChange={handleInputChange}
            />
            {errors.title && (
              <p className="text-red-500 text-xs mt-1">{errors.title}</p>
            )}
          </div>
          <div className="w-full">
            <label htmlFor="description" className="text-sm">
              Description
            </label>
            <TextInput
              isTextArea={true}
              name="description"
              placeholder="Task Description"
              value={formData.description}
              onChange={handleInputChange}
            />
            {errors.description && (
              <p className="text-red-500 text-xs mt-1">{errors.description}</p>
            )}
          </div>
          <div className="w-full">
            <label htmlFor="assignee" className="text-sm">
              Assign To
            </label>
            <Select
              className="rounded-md mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark text-space focus:outline-none focus:border-gray-300 text-black"
              name="assignee"
              value={formData.assignee}
              onChange={handleInputChange}
            >
              {agents?.map((item, index) => (
                <MenuItem value={item.value} key={index}>
                  {item.label}
                </MenuItem>
              ))}
            </Select>
            {errors.assignee && (
              <p className="text-red-500 text-xs mt-1">{errors.assignee}</p>
            )}
          </div>
          <div className="w-full">
            <label htmlFor="dueDate" className="text-sm">
              Due Date *
            </label>
            <TextInput
              type="date"
              name="dueDate"
              placeholder="Task Due Date"
              value={formData.dueDate}
              onChange={handleInputChange}
            />
            {errors.dueDate && (
              <p className="text-red-500 text-xs mt-1">{errors.dueDate}</p>
            )}
          </div>
        </div>

        <div className="mt-5 flex justify-between">
          <button className="bg-white px-3 py-1.5 rounded-md w-28 flex justify-center border border-gray-300">
            <span className="text-black text-base">Cancel</span>
          </button>
          <button className="bg-green-600 px-3 py-1.5 rounded-md w-28 flex justify-center items-center">
            <AiOutlinePlus className="text-white mr-1" />
            <span className="text-white text-sm">Save</span>
          </button>
        </div>
      </form>
      <div className="px-2 py-6 flex flex-warp ">
        {tasks.length == 0 ? null : (
          <div className="w-full flex flex-wrap mb-4 justify-between items-center ">
            {tasks.map((item: any, index: number) => (
              <div
                className="w-full px-2 py-2 bg-[#f2f3f6] mb-2 rounded-lg"
                key={index}
              >
                <p className="font-semibold text-base pb-2">{item?.title}</p>
                <p className="font-medium text-sm pb-1">{item?.description}</p>
                <div className="flex justify-between items-center">
                  <p className="font-medium text-sm pb-0.5">
                    By {item?.assignee}
                  </p>
                  <p className="font-medium text-sm pb-0.5">
                    {moment(item?.dueDate).format("DD-MM-YYYY")}{" "}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
