import ModalDerived from "@/components/Modal";
import TextInput from "@/components/controls/TextInput";
import { MenuItem, Select } from "@mui/material";

import React, { useContext } from "react";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { SingleContactContext } from "@/pages/contact/[id]";

export default function Order() {
  const ctx: any = useContext(SingleContactContext);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  //   Show add form
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [data, setData] = useState<any>([]);

  const [formData, setFormData] = useState({
    service: "",
    description: "",
    status: "",
    closing_date: "",
    orders_sent_date: "",
  });

  const DealCards = [
    { date: "18 Jan 2021", service: "99213", desc: "Manual Therapy" },
    { date: "10 Feb 2022", service: "44586", desc: "Manual Therapy" },
    { date: "25 July 2023", service: "77845", desc: "Manual Therapy" },
  ];

  const [errors, setErrors] = useState<any>({});

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    //validate errors
    const validationErrors: any = {};

    if (!formData.service) {
      validationErrors.service = "Required";
    }
    if (!formData.description) {
      validationErrors.description = "Required";
    }
    if (!formData.status) {
      validationErrors.status = "Required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setData((prevValues: any) => [...data, formData]);

    setFormData({
      service: "",
      description: "",
      status: "",
      closing_date: "",
      orders_sent_date: "",
    });

    setErrors({});
  };

  //   delete
  const handleDelete = (index: any) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  };
  return (
    <>
      <div className="mb-4 flex flex-wrap justify-center rounded-lg border border-gray-100 p-3 shadow-sm text-gray-800 cursor-pointer">
        <button
          onClick={() => ctx.setOpenOrderFieldModel(true)}
          className="flex flex-wrap  items-center justify-center"
        >
          <AiOutlinePlus />
          <div className="font-bold pl-2 ">
            <p>Create New Order</p>
          </div>
        </button>
      </div>
      {DealCards?.map((item: any, index: number) => (
        <div
          key={index}
          className="mb-4 flex flex-wrap px-2 rounded-lg border border-gray-100 py-2 shadow-sm text-gray-800 cursor-pointer"
        >
          <div className="flex justify-between px-1 w-full items-center">
            <span className="text-[0.6rem] text-gray-400">
              Order Date: {item.date}
            </span>
            <span className="text-xs  rounded-2xl py-1 px-2 text-blue-500 font-semibold bg-blue-100">
              Order Sent{" "}
            </span>
          </div>

          <div className="font-semibold px-1 text-sm">
            <p>Service: {item.service}</p>
            <p>Desc: {item.desc}</p>
          </div>
        </div>
      ))}

      {/* {data?.map((item: any, index: any) => (
        <>
          <div  className="mb-4 mt-4 rounded-lg border border-gray-100 p-3 shadow-sm text-gray-800">
            <div className="flex  flex-wrap justify-between items-center">
              <p className=" text-[12px] xl:text-[10px] text-gray-400">
                Clossing date: 18 Jan 2021
              </p>

              <div className="bg-blue-50 px-3 rounded-full">
                <p className="text-blue-600 font-bold text-[12px] 3xl:text-sm">
                  Contract Sent
                </p>
              </div>
            </div>

            <div className="">
              <div>
                <p className="font-bold 3xl:text-[12px] pt-1">{item.title}</p>
                <p className="font-bold pt-1">$ 12000</p>
              </div>
              <div></div>
            </div>
          </div>
          <div
            onClick={() => handleDelete(index)}
            className="text-sm flex justify-start items-center bg-secondary py-1.5 px-5 text-white rounded-md mb-0.5"
          >
            Delete
          </div>
        </>
      ))} */}
    </>
  );
}
