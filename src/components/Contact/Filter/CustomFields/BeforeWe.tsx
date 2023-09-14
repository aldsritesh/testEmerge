import { MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";
export default function BeforeWe({ updateData, onClose, actionData }: any) {
  const radioData = [{ title: "Is", value: "is" }];

  const [formValues, setFormValues] = useState<any>({
    waitFor: "",
  });
  const [errors, setErrors] = useState<any>({});
  const [show, setShow] = useState<any>(true);
  const [action, setAction] = useState(true);
  const [data, setData] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormValues((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const validationErrors: any = {};

    if (!formValues.accept) {
      validationErrors.accept =
        " Atleast one before we forward, I wanted to let you know this clinic does accept both cash and insurance when it comes to any future treatments you may receive. Do you have an insurance carrier you&apos;d like me to take note of ?";
    }

    setFormValues({
      waitFor: "",
    });
    setErrors({});
    updateData(formValues);
    onClose();
  };

  return (
    <div>
      <div className="h-[75vh] 2xl:h-[75vh] overflow-y-scroll scrollbar-hide">
        <form onSubmit={handleSubmit} className="flex flex-wrap px-2  ">
          <div className="w-full mt-4">
            <p className="w-full mb-2 text-sm text-gray-600 font-semibold fontStrawFord">
              Filter
            </p>

            <ul className="pt-2 ">
              {radioData?.map((mainData: any, mainIndex: any) => (
                <li className="mb-1" key={mainIndex}>
                  <div className="flex justify-start items-center py-2">
                    <input
                      type="radio"
                      name="waitFor"
                      className="radio checked:bg-blue-500"
                      onChange={() =>
                        setFormValues((prevValues: any) => ({
                          ...prevValues,
                          waitFor: mainData?.value,
                        }))
                      }
                    />
                    <p
                      className={`w-full  text-sm text-gray-600 font-semibold fontStrawFord ml-2 mt-1 `}
                    >
                      {mainData?.title}
                    </p>
                  </div>

                  <div className="flex  flex-col ">
                    <div className="dropdown">
                      <label tabIndex={0} className=" ">
                        <p
                          className="px-3 text-xs font-semibold text-blue-400 w-full flex justify-start flex-wrap items-center"
                          onClick={() => setAction(!action)}
                        >
                          <span className="w-[95%]">
                            Before we forward, I wanted to let you know this
                            clinic does accept both cash and insurance when it
                            comes to any future treatments you may receive. Do
                            you have an insurance carrier you&apos;d like me to
                            take note of ?{" "}
                          </span>{" "}
                          <MdArrowDropDown className="scale-150 " />
                        </p>
                      </label>
                      {action ? (
                        <ul
                          tabIndex={0}
                          className="dropdown-content z-[1] menu px-2 shadow  bg-white rounded-box w-52"
                        >
                          <li>
                            <a
                              onClick={() => {
                                setShow(false);
                                setAction(false);
                                setData("Yes");
                              }}
                            >
                              Yes
                            </a>
                          </li>
                          <li>
                            <a
                              onClick={() => {
                                setShow(false);
                                setAction(false);
                                setData("No");
                              }}
                            >
                              No
                            </a>
                          </li>
                        </ul>
                      ) : (
                        ""
                      )}
                    </div>
                    {show ? (
                      <span className=" text-red-500 text-xs font-semibold px-3 py-2">
                        *At least one before we forward, I wanted to let you
                        know this clinic does accept both cash and insurance
                        when it comes to any future treatments you may receive.
                        Do you have an insurance carrier you&apos;d like me to
                        take note of ?
                      </span>
                    ) : (
                      <div>
                        <div className="w-fit flex justify-start items-center py-2 px-3 mt-2  text-blue-400 rounded-2xl bg-blue-100   ">
                          <p className=" px-3  ">{data}</p>
                          <div
                            onClick={() => setShow(true)}
                            className="  text-blue-400"
                          >
                            <AiOutlineCloseCircle />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </form>
      </div>
      <div className="flex justify-end items-end  py-2 px-4">
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
