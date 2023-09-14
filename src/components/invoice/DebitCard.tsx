import moment from "moment";
import React from "react";
import { useContext, useState } from "react";
import { InvoiceContext } from "./ClaimTab";

export default function DebitCard({ handleChange }: any) {
  const ctx: any = useContext(InvoiceContext);

  const [formData, setFormData] = useState<any>({
    cardName: "",
    cardNo: "",
    expiryDate: "",
    cvc: "",
  });

  const [errors, setErrors] = useState<any>({});

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e: any) => {
    const storeInvoice = {
      invoice_no: ctx.data.length + 1,
      customer_name: ctx?.invoiceData.email,
      status: "paid",
      date: moment(ctx?.invoiceData.issuedOn).format("DDD/mm/yyyy"),
      dueDate: moment(ctx?.invoiceData.dueOn).format("DDD/mm/yyyy"),
      amount: ctx?.invoiceData.total_amount,
      paymentMode: "debit",
    };

    e.preventDefault();
    const validationErrors = validateFormData();
    if (Object.keys(validationErrors).length === 0) {
      //   console.log("Form submitted:", formData);
      handleChange(storeInvoice);
      ctx?.setIsPaymentModalOpen(false);
    } else {
      setErrors(validationErrors);
    }
  };

  const validateFormData = () => {
    const errors: any = {};

    if (!formData.cardName.trim()) {
      errors.cardName = "Card name is required";
    }

    if (!formData.cardNo.trim()) {
      errors.cardNo = "Card number is required";
    } else if (!/^\d{16}$/.test(formData.cardNo.trim())) {
      errors.cardNo = "Card number must be a 16-digit number";
    }

    if (!formData.expiryDate.trim()) {
      errors.expiryDate = "Expiry date is required";
    } else if (!/^\d{2}\/\d{2}$/.test(formData.expiryDate.trim())) {
      errors.expiryDate = "Expiry date must be in the format MM/YY";
    }

    if (!formData.cvc.trim()) {
      errors.cvc = "CVC is required";
    } else if (!/^\d{3}$/.test(formData.cvc.trim())) {
      errors.cvc = "CVC must be a 3-digit number";
    }

    return errors;
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="px-4">
        <p className=" mb-3 font-bold pt-3">Card Information</p>
        <div className="px-4 bg-[#FAF9FA] py-2 rounded-lg border-[1px] border-gray-200 flex flex-wrap items-center">
          <div className="flex flex-col justify-start items-center w-full">
            <label
              htmlFor="cardName"
              className="w-full text-sm text-[#3e3f3f] font-medium"
            >
              Card Holder Name :
            </label>
            <input
              type="text"
              name="cardName"
              value={formData.cardName}
              onChange={handleInputChange}
              className="placeholder:font-medium placeholder:text-[#9b9b9b] px-2 rounded-lg mt-2 mb-2 py-2 text-sm font-medium bg-transparent focus:bg-transparent w-full  border-[1px] border-[#dbd9d9] text-space focus:outline-none   focus:border-[#dbd9d9] text-[#3e3f3f] "
            />
            {errors.cardName && (
              <span className="error text-xs text-red-500 w-full mb-2 pl-1">
                {errors.cardName}
              </span>
            )}
          </div>
          <div className=" w-full">
            <label htmlFor="cardNo" className="w-full text-sm text-[#808181]">
              Card No :
            </label>
            <input
              type="text"
              name="cardNo"
              value={formData.cardNo}
              onChange={handleInputChange}
              className="placeholder:font-medium placeholder:text-[#9b9b9b] px-2 rounded-lg mt-2 mb-2 py-2 text-sm font-medium bg-transparent focus:bg-transparent w-full  border-[1px] border-[#dbd9d9] text-space focus:outline-none   focus:border-[#dbd9d9] text-[#3e3f3f] "
            />
            {errors.cardNo && (
              <span className="error text-xs text-red-500 w-full mb-2 pl-1">
                {errors.cardNo}
              </span>
            )}
          </div>

          <div className="w-1/2 pr-3">
            <label
              htmlFor="expiry_date"
              className="w-full text-sm text-[#808181]"
            >
              Expiration Date
            </label>
            <input
              type="text"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleInputChange}
              className="placeholder:font-medium placeholder:text-[#9b9b9b] px-2 rounded-lg mt-2 mb-2 py-2 text-sm font-medium bg-transparent focus:bg-transparent w-full  border-[1px] border-[#dbd9d9] text-space focus:outline-none   focus:border-[#dbd9d9] text-[#3e3f3f] "
            />
            {errors.expiryDate && (
              <span className="error text-xs text-red-500 w-full mb-2 pl-1">
                {errors.expiryDate}
              </span>
            )}
          </div>

          <div className="w-1/2 pl-3">
            <label htmlFor="ssn" className="w-full text-sm text-[#808181]">
              CVC
            </label>
            <input
              type="text"
              name="cvc"
              value={formData.cvc}
              onChange={handleInputChange}
              className="placeholder:font-medium placeholder:text-[#9b9b9b] px-2 rounded-lg mt-2 mb-2 py-2 text-sm font-medium bg-transparent focus:bg-transparent w-full  border-[1px] border-[#dbd9d9] text-space focus:outline-none   focus:border-[#dbd9d9] text-[#3e3f3f] "
            />
            {errors.cvc && (
              <span className="error text-xs text-red-500 w-full mb-2 pl-1">
                {errors.cvc}
              </span>
            )}
          </div>
        </div>{" "}
        <div className="flex justify-end pt-4 gap-3 px-2">
          <button
            onClick={() => ctx?.setIsPaymentModalOpen(false)}
            className="px-4 py-1.5 border-[1px] border-gray-400 rounded-md  font-semibold text-base text-gray-600"
          >
            Close
          </button>
          <button
            onClick={() => ctx.setIsPaymentModalOpen(true)}
            className="px-5 py-.5 bg-newBlue rounded-md  font-semibold text-base text-white"
          >
            Pay ${ctx?.invoiceData?.total_amount}
          </button>
        </div>
      </form>
    </>
  );
}
