import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import moment from "moment";
import React from "react";
import { useContext, useState } from "react";
import { AiOutlineCreditCard } from "react-icons/ai";
import { FaCcPaypal } from "react-icons/fa";
import DebitCard from "./DebitCard";
import { InvoiceContext } from "./ClaimTab";

export default function InvoicePayment({ handleChange }: any) {
  const ctx: any = useContext(InvoiceContext);
  const [openAccordionBox, setOpenAccordionBox] = useState(false);
  const [paymentType, setPaymentType] = React.useState("debit");
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentType((event.target as HTMLInputElement).value);
  };

  return (
    <div className="overflow-y-scroll scrollbar-hide">
      <div className="w-[40vw]  bg-white  py-5 rounded-xl  overflow-y-scroll scrollbar-hide">
        <div className="border-b-[1px] border-gray-200 mb-3 pb-3  px-4">
          <p className="text-gray-600 text-3xl font-semibold">
            ${ctx?.invoiceData?.total_amount}
          </p>
          <p className=" text-gray-500 mt-2 font-semibold text-sm">
            Due {moment(ctx?.invoiceData?.dueOn).format("MMM DD,yyyy")}
          </p>
        </div>
        <div className="px-4">
          <div className="flex justify-start items-start mb-3 ">
            <div className="w-[12%] ">
              <p className="text-gray-500 font-medium">To :</p>
            </div>
            <div className="w-[88%] ">
              <p className="font-bold ">{ctx?.invoiceData?.email}</p>
            </div>
          </div>{" "}
          <div className="flex justify-start items-start mb-3 ">
            <div className="w-[12%] ">
              <p className="text-gray-500 font-medium">From :</p>
            </div>
            <div className="w-[88%] ">
              <p className="font-bold ">{ctx?.invoiceData?.email}</p>
            </div>{" "}
          </div>{" "}
          <div className="flex justify-start items-start ">
            <div className="w-[12%] ">
              <p className="text-gray-500 font-medium">Notes :</p>
            </div>
            <div className="w-[88%] ">
              <p className="font-bold ">{ctx?.invoiceData?.notes}</p>
            </div>{" "}
          </div>
        </div>
        <div className="relative border-b-[1px] border-gray-200 mb-3 pb-3">
          {!openAccordionBox && (
            <div
              onClick={() => setOpenAccordionBox(true)}
              className="collapse-title flex justify-center items-center   "
            >
              <span className="text-newBlue font-semibold text-sm text-center">
                More Claims Details
              </span>
              <ChevronDownIcon className="h-4 w-4  text-newBlue" />
            </div>
          )}

          {openAccordionBox && (
            <>
              <div
                className={`pl-4 md:pl-0 pr-6 rounded-md ease-in-out duration-300 ${
                  openAccordionBox ? "translate-y-[0%] opacity-1" : "hidden "
                }`}
              >
                <div className="pt-3 translate-[-10%] ease-in-out duration-1000">
                  <div className="px-4  mb-1 font-bold">Claims Items</div>
                  <div className="px-4 pt-2">
                    <table className="border-[1px] border-slate-300 rounded-lg w-full ">
                      <thead className="border-b-2 border-gray-300 bg-gray-100 text-slate-600 ">
                        <tr className="text-sm  ">
                          <td className="w-3/5 p-2 text-gray-500 font-medium">
                            Description
                          </td>
                          <td className="text-gray-500 font-medium">Price</td>
                          <td className="text-center text-gray-500 font-medium">
                            Qty
                          </td>
                          <td className="text-center text-gray-500 font-medium">
                            Total Price
                          </td>
                        </tr>
                      </thead>
                      <tbody className="font-bold text-sm ">
                        {ctx?.invoiceData?.invoice_items?.map(
                          (item: any, index: any) => (
                            <tr
                              key={index}
                              className={` ${
                                index % 2 === 0
                                  ? "bg-[#ffffff]"
                                  : "bg-[#f2f2f2]"
                              } border-b-2 border-gray-300`}
                            >
                              <td className="px-2 pt-6 pb-3">
                                {" "}
                                {item?.ItemName}{" "}
                              </td>
                              <td className="px-2 pt-6 pb-3">
                                ${item?.ItemPrice}
                              </td>
                              <td className="px-2 pt-6 pb-3  text-center">
                                {item?.ItemQty}
                              </td>
                              <td className="px-2 pt-6 pb-3 text-center">
                                ${item?.ItemTotalPrice}
                              </td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>
                  <div className="p-4 flex items-start">
                    <p className="w-[57%] text-gray-500 font-medium text-sm">
                      Here we can write a additional notes for the client to get
                      a better understanding of this claims.
                    </p>
                    <div className="w-[43%]">
                      <div className="flex justify-end items-start  ">
                        <div className="text-gray-500 font-medium text-base mr-5">
                          Total Amount
                        </div>
                        <div className="font-bold">
                          ${ctx?.invoiceData?.total_amount}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => setOpenAccordionBox(false)}
                  className="collapse-title flex justify-center items-center   "
                >
                  <span className="text-newBlue font-semibold text-sm text-center">
                    Less Claims Details
                  </span>
                  <ChevronDownIcon className="h-4 w-4  text-newBlue" />
                </div>
              </div>
            </>
          )}
        </div>

        <p className="px-4  mb-1 font-bold pt-3">Select a payment method</p>
        <div className="px-4  py-3">
          <RadioGroup
            row
            aria-labelledby="demo-error-radios"
            name="quiz"
            value={paymentType}
            onChange={handleRadioChange}
          >
            <div className="w-1/2 pr-2">
              <div
                className={`flex justify-between items-center px-4 rounded-lg border-[1px] ${
                  paymentType == "debit"
                    ? "border-newBlue "
                    : "border-gray-200   "
                }`}
              >
                <FormControlLabel
                  value="debit"
                  control={
                    <Radio
                      sx={{
                        color: "#78808A",
                        "&.Mui-checked": {
                          color: "#1258fc",
                        },
                      }}
                    />
                  }
                  label="Debit Card"
                />
                <AiOutlineCreditCard className="h-5 w-5 text-gray-600" />
              </div>
            </div>
            <div className="w-1/2 pl-2">
              <div
                className={`flex justify-between items-center px-4 rounded-lg border-[1px] ${
                  paymentType == "paypal"
                    ? "border-newBlue  "
                    : "border-gray-200   "
                }`}
              >
                <FormControlLabel
                  value="paypal"
                  control={
                    <Radio
                      sx={{
                        color: "#78808A",
                        "&.Mui-checked": {
                          color: "#1258fc",
                        },
                      }}
                    />
                  }
                  label="Paypal"
                />
                <FaCcPaypal className="h-5 w-5 text-blue-700" />
              </div>
            </div>
          </RadioGroup>
        </div>
        {paymentType == "debit" ? (
          <DebitCard handleChange={handleChange} />
        ) : (
          <>
            <p className=" mb-3 font-bold pt-3">Paypal Details </p>
          </>
        )}
      </div>
    </div>
  );
}
