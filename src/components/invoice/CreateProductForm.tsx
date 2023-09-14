import React from "react";
import { useState } from "react";
import { MenuItem, Select } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { RiAddFill } from "react-icons/ri";

const CreateProductForm = ({ handleStoreChange }: any) => {
  const [errors, setErrors] = useState<any>({});
  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    cost: "",
    retail: "",
    quantity: "",
 
   
  });



  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };



  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Validate form fields
    const validationErrors: any = {};

    if (!formData.productName) {
      validationErrors.productName = "Product Name is required";
    }

    if (!formData.description) {
      validationErrors.description = "Description is required";
    }

    if (!formData.cost) {
      validationErrors.cost = "Cost is required";
    }

    if (!formData.retail) {
      validationErrors.retail = "Retail is required";
    }

    if (!formData.quantity) {
      validationErrors.quantity = "Quantity is required";
    }


  
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    handleStoreChange(formData);

    setFormData({
      productName: "",
      description: "",
      cost: "",
      retail: "",
      quantity: "",
  
    
    });
    setErrors({});
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>

        {/* Product Info */}
        <div className="h-full">
          <div className="flex justify-between items-center px-3 py-3 border-b-[1px] bg-gray-100 mb-5">
            <p className="text-[#47494b] text-base font-semibold ">
              Product Information
            </p>
          </div>

    <div className="flex flex-col justify-between h-[90vh]">

          <div className="px-4 flex flex-wrap ">
          
          {/* Product Name */}
            <div className="w-full mb-2">
              <label className="block text-[#47494b] text-sm pt-1 font-semibold">
                Product Name
              </label>
              <input
                name="productName"
                type="text"
                value={formData.productName}
                onChange={handleChange}
                className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
              ></input>

              {errors.productName && (
                <span className=" text-red-500 text-xs">
                  {errors.productName}
                </span>
              )}
            </div>

          {/* Description */}
            <div className="w-full mb-2">
              <label className="block text-[#47494b] text-sm pt-1 font-semibold">
                Description
              </label>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
              ></input>
              {errors.description && (
                <span className=" text-red-500 text-xs">
                  {errors.description}
                </span>
              )}
            </div>

            {/* Cost */}
            <div className="w-full">
              <label className="block text-[#47494b] text-sm pt-1 font-semibold">
                Cost
              </label>
              <input
                type="number"
                name="cost"
                value={formData.cost}
                onChange={handleChange}
                className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
              />
              {errors.cost && (
                <span className=" text-red-500 text-xs">
                  {errors.cost}
                </span>
              )}
            </div>
           
           {/* Retail */}
            <div className="w-full">
              <label className="block text-[#47494b] text-sm pt-1 font-semibold">
                Retail
              </label>
              <input
                type="number"
                name="retail"
                value={formData.retail}
                onChange={handleChange}
                className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
              />
              {errors.retail && (
                <span className=" text-red-500 text-xs">
                  {errors.retail}
                </span>
              )}
            </div>
          
          {/* Quantity */}
            <div className="w-full">
              <label className="block text-[#47494b] text-sm pt-1 font-semibold">
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
              />
              {errors.quantity && (
                <span className=" text-red-500 text-xs">
                  {errors.quantity}
                </span>
              )}
            </div>


          </div>
          
            {/* Submit Button */}
            <div className="w-full flex justify-end items-end px-4 my-4">
            <button
              onSubmit={handleSubmit}
              type="submit"
              className="  bg-newBlue font-medium py-2 text-sm  rounded-lg px-5 text-white"
            >
              Submit
            </button>
          </div>
    </div>

        </div>

       
      </form>
    </div>
  );
};

export default CreateProductForm;
