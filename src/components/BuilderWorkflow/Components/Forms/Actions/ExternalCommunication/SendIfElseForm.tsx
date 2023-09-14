/* eslint-disable react/jsx-key */
import { modalItemState } from "@/atoms/modalItem";
import { offCanvasOpenState } from "@/atoms/offCanvasOpen";
import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { useRecoilState } from "recoil";
import { BiPlusCircle, BiPurchaseTagAlt } from "react-icons/bi";
import { nameTrigger } from "@/atoms/nameTrigger";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";

export default function SendIfElseForm({ onDataStore, onClose }: any) {
  const [isFlyOutVisible, setIsFlyOutVisible] =
    useRecoilState(offCanvasOpenState);
  const [data, setData] = useRecoilState(modalItemState);
  const [actionData, setActionData] = useRecoilState(nameTrigger);

  const [formValues, setFormValues] = useState<any>({
    actionName: actionData,
    template: "",
    message: "",
  });
  const [errors, setErrors] = useState<any>({});
  const [show, setShow] = useState(true);

  const [divs, setDivs] = useState([
    {
      branchName: "",
      condition: "",
      segments: [
        {
          condition: "",
          segmentConditions: [
            {
              operator: "",
              operations: "",
              textInput: "",
            },
          ],
        },
      ],
    },
  ]);

  const [segments, setSegments] = useState([{}]);
  const [condition, setCondition] = useState(true);
  const handleAddSegments = () => {
    setSegments([...segments, {}]);
  };

  const handleAddBranch = () => {
    setDivs([
      ...divs,
      {
        branchName: "",
        condition: "",
        segments: [
          {
            condition: "",
            segmentConditions: [
              {
                operator: "",
                operations: "",
                textInput: "",
              },
            ],
          },
        ],
      },
    ]);
    // setDivs([...divs, { branchName: "" }]);
  };

  // const handleAddCondition = () => {
  //   setCondition([...condition]);
  // };
  // trail start

  const [selectedOption, setSelectedOption] = useState("");
  const [showTextInput, setShowTextInput] = useState(false);
  const [textInputValue, setTextInputValue] = useState("");

  const handleSelectChange = (event: any) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    setShowTextInput(selectedValue !== ""); // Show input if an option is selected
  };

  const handleTextInputChange = (index: number, event: any) => {
    setTextInputValue(event.target.value);
  };

  const handleRemoveBranch = (indexToRemove: number) => {
    setDivs((prevDivs) =>
      prevDivs.filter((_, index) => index !== indexToRemove)
    );
  };
  const handleRemoveSegment = (indexToRemove: number) => {
    setSegments((prevSegments) =>
      prevSegments.filter((_, index) => index !== indexToRemove)
    );
  };
  // trail end

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if (name == "actionName") {
      setData(value);
    }
    setFormValues((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Validate form fields
    const validationErrors: any = {};

    if (!formValues.actionName.trim()) {
      validationErrors.actionName = "Action name is required";
    }
    if (!formValues.template.trim()) {
      validationErrors.template = "Template is required";
    }

    if (!formValues.message.trim()) {
      validationErrors.message = "Message is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Form submission logic goes here
    // You can access the form field values and attachment in the formValues state

    // Reset form after successful submission
    setFormValues({
      actionName: "",
      template: "",
      message: "",
    });
    setErrors({});
    onDataStore(formValues.actionName, formValues);
    setIsFlyOutVisible(false);
  };

  return (
    <div>
      <div className=" h-[75vh] 2xl:h-[80vh]  overflow-y-scroll scrollbar-hide">
        <form onSubmit={handleSubmit} className="flex flex-wrap px-2  ">
          <div className="w-full mt-4">
            <label className="w-full mb-2 text-sm text-gray-600 font-semibold fontStrawFord">
              Action Name:
            </label>
            <input
              type="text"
              name="actionName"
              value={formValues.actionName}
              onChange={handleChange}
              placeholder="Send SMS"
              className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 rounded-md mt-2 mb-2 py-3.5 font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
            />
            {errors.actionName && (
              <span className="mb-5 error text-red-500 ">
                {errors.actionName}
              </span>
            )}
          </div>

          <label className="w-full text-md text-gray-600 font-semibold fontStrawFord">
            Branches:
          </label>

          {divs.map((item: any, index: any) => (
            <div
              key={index}
              className="bg-gray-50 rounded-md p-3 w-full mt-1 relative"
            >
              <div className="flex w-full justify-center items-center">
                {divs.length > 1 ? (
                  <button
                    className="absolute right-0 top-[-4px]"
                    onClick={() => handleRemoveBranch(index)}
                  >
                    <AiFillCloseCircle
                      className="text-red-600 cursor-pointer"
                      size={20}
                    />
                  </button>
                ) : null}
                <div className="w-9/12">
                  <input
                    type="text"
                    name="branchName"
                    //   value={formValues.actionName}
                    // value={item.branchName}
                    onChange={(e) => {
                      let branches: any = divs;
                      branches[index] = { branchName: e.target.value };
                      setDivs(branches);
                    }}
                    placeholder="Branch"
                    className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 rounded-md mt-2 mb-2 py-3.5 font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-400  text-space  focus:outline-none focus:border-gray-400 bg-white focus:bg-white"
                  />
                </div>

                <div className="w-3/12 h-0 relative">
                  <div className="flex flex-col items-center ">
                    {show ? (
                      <BsChevronDown
                        onClick={() => setShow(!show)}
                        className="h-6 w-6 cursor-pointer font-bold absolute top-[-13px]"
                      />
                    ) : (
                      <BsChevronUp
                        onClick={() => setShow(!show)}
                        className="h-6 w-6 cursor-pointer font-bold absolute top-[-13px]"
                      />
                    )}
                  </div>
                </div>
              </div>

              {show && (
                <div className="relative  pt-2">
                  <div className="">
                    <label className="w-full mb-2 text-sm text-gray-600 font-semibold fontStrawFord">
                      Segments
                    </label>

                    {item.segments?.map((item: any, index: any) => (
                      <div
                        className="flex relative  bg-gray-200 w-full mt-2 p-6"
                        key={index}
                      >
                        {segments.length > 1 ? (
                          <button
                            onClick={() => handleRemoveSegment(index)}
                            className="absolute right-0 top-[-4px]"
                          >
                            <AiFillCloseCircle
                              className="text-red-600 cursor-pointer"
                              size={20}
                            />
                          </button>
                        ) : null}

                        {/* Condition Part */}
                        {condition == true && (
                          <>
                            <div>
                              <select
                                name="operator"
                                value={selectedOption}
                                // onChange={(e) => {
                                //   let segment = segments;
                                //   segment[index] = { segment: e.target.value };
                                //   setSegments(segment);
                                // }}
                                onChange={handleSelectChange}
                                className="placeholder:font-semibold  placeholder:text-[#3d3c3c] px-2 rounded-md mb-2 py-3 text-sm font-medium bg-transparent border-[1px] border-[#dbd9d9] text-space focus:outline-none w-44  focus:border-[#dbd9d9] bg-white text-black focus:bg-white"
                              >
                                <option disabled value="">
                                  Select Operator
                                </option>
                                <option value="title1">Is</option>
                                <option value="title2">Is Empty</option>
                              </select>
                            </div>

                            <div className="pl-2">
                              <select
                                name="operations"
                                className="placeholder:font-semibold  placeholder:text-[#3d3c3c] px-2 rounded-md mb-2 py-3 text-sm font-medium bg-transparent border-[1px] border-[#dbd9d9] text-space focus:outline-none w-44  focus:border-[#dbd9d9] bg-white text-black focus:bg-white"
                                value={selectedOption}
                                // onChange={(e) => {
                                //   let segment = segments;
                                //   segment[index] = { segment: e.target.value };
                                //   setSegments(segment);
                                // }}

                                onChange={handleSelectChange}
                              >
                                <option disabled value="">
                                  Select Operations
                                </option>
                                <option value="is">Is</option>
                                <option value="isEmpty">Is Empty</option>
                              </select>
                            </div>
                          </>
                        )}
                        {/* Condition Part */}

                        <div className="pl-2">
                          {showTextInput && (
                            <div className="relative">
                              <div>
                                <input
                                  name="textInput"
                                  type="text"
                                  value={textInputValue}
                                  onChange={(e) =>
                                    handleTextInputChange(index, e)
                                  }
                                  placeholder="Enter text..."
                                  className="input input-bordered w-full max-w-xs"
                                />
                              </div>

                              <div className="absolute right-2 top-4 cursor-pointer">
                                <BiPurchaseTagAlt size={20} />
                              </div>
                            </div>
                          )}
                        </div>

                        <button className="flex items-center absolute right-4 bottom-1 mt-4 cursor-pointer">
                          <BiPlusCircle className="h-4 w-4" />
                          <p className="text-sm">Add Condition</p>
                        </button>
                      </div>
                    ))}

                    <div className="w-full flex items-center justify-end">
                      <button
                        className="flex items-center justify-end pr-2  mt-3 cursor-pointer"
                        onClick={() => handleAddSegments()}
                      >
                        <BiPlusCircle className="h-4 w-4" />
                        <p className="text-sm">Add segments</p>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          <div className="w-full flex items-center justify-end">
            <button
              onClick={() => handleAddBranch()}
              className="flex  items-center  justify-end pr-2  mt-1 cursor-pointer"
            >
              <BiPlusCircle className="h-4 w-4 text-gray-500" />
              <p className="text-sm font-bold text-gray-500">Add Branch</p>
            </button>
          </div>
        </form>
      </div>
      <div className="flex justify-end items-end  py-2 px-4 ">
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
    </div>
  );
}
