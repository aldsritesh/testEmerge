import { PlusIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";

export default function AddFaq({ onClose, handleChange }: any) {
  const [fields, setFields] = useState([{ question: "", answer: "" }]);
  const [errors, setErrors] = useState([]);

  const handleInputChange = (index: any, field: any, value: any) => {
    const updatedFields: any = [...fields];
    updatedFields[index][field] = value;
    setFields(updatedFields);
  };

  const handleAddFields = () => {
    setFields([...fields, { question: "", answer: "" }]);
  };

  const handleRemoveFields = (index: any) => {
    const updatedFields = [...fields];
    updatedFields.splice(index, 1);
    setFields(updatedFields);
    setErrors(errors.filter((error: any) => error.fieldIndex !== index));
  };

  const validateForm = () => {
    const newErrors: any = [];

    fields.forEach((field, index) => {
      if (!field.question || !field.answer) {
        newErrors.push({
          fieldIndex: index,
          message: "Please fill in all fields",
        });
      }
    });

    setErrors(newErrors);

    return newErrors.length === 0;
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", fields);
      handleChange(fields);
      // You can perform further actions with the form data here
    }
  };

  return (
    <div className="w-full h-full md:w-[100vh] md:h-[80vh] bg-white px-5  py-4 overflow-y-hidden  rounded-lg shadow-lg">
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between items-center">
          <p className="text-gray-700 font-semibold md:text-lg pt-4">
            Add FAQs
          </p>
          <button onClick={onClose}>
            <RxCross1 className="h-4 w-4 text-gray-700" />
          </button>
        </div>

        <div className="md:h-[50vh] pb-4 overflow-y-scroll scrollbar-hide">
          <div className="mt-5">
            {fields.map((field, index) => (
              <div key={index} className="flex flex-wrap items-center mb-3">
                <div className="md:w-[90%]">
                  <div className="w-full  flex flex-wrap items-center">
                    <p className="w-[9%] text-lg text-gray-700 font-medium ">
                      {" "}
                      Q.{index + 1}{" "}
                    </p>
                    <div className="w-[91%]">
                      <input
                        type="text"
                        value={field.question}
                        onChange={(e) =>
                          handleInputChange(index, "question", e.target.value)
                        }
                        placeholder="Enter value for negative keyword list."
                        className="w-full placeholder:text-gray-400 text-gray-500 text-[12px] px-3 rounded-md mt-2 mb-2 py-2  font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
                      />
                    </div>
                  </div>

                  <div className="w-full   flex flex-wrap items-center">
                    <p className="w-[9%] text-lg text-gray-700 font-medium ">
                      {" "}
                      A.{index + 1}{" "}
                    </p>
                    <div className="w-[91%]">
                      <input
                        type="text"
                        value={field.answer}
                        onChange={(e) =>
                          handleInputChange(index, "answer", e.target.value)
                        }
                        placeholder="Enter value for negative keyword list."
                        className="w-full placeholder:text-gray-400 text-gray-500 text-[12px] px-3 rounded-md mt-2 mb-2 py-2  font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-[10%] flex justify-end items-end pr-5">
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveFields(index)}
                    >
                      <RiDeleteBin6Line className="text-red-500 h-6 w-6" />
                    </button>
                  )}
                </div>
                {errors.map(
                  (error: any) =>
                    error.fieldIndex === index && (
                      <div
                        className="text-xs text-red-500 lg:pl-[8%]"
                        key={index}
                      >
                        {error.message}
                      </div>
                    )
                )}
              </div>
            ))}
            <div className="flex justify-center items-center pt-2">
              <button
                onClick={handleAddFields}
                className="flex justify-start items-center bg-white shadow-md border-[1px] border-gray-100 py-2.5 px-8 rounded-md mb-1"
              >
                <PlusIcon className="h-5 w-5" />
                <span className="text-[13px] ml-2 text-gray-800   font-semibold">
                  Add Questions
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-end items-center gap-2 pt-3 pr-4">
          <div
            onClick={onClose}
            className="text-sm text-gray-600 font-medium flex justify-start items-center border-[1px] border-gray-300 py-2 px-6 rounded-md  "
          >
            Cancel
          </div>
          <button
            type="submit"
            className="text-sm flex justify-start items-center bg-newBlue py-2 px-6 text-white rounded-md  "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
