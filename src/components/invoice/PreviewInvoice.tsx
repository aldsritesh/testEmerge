import { CgCloseR } from "react-icons/cg";
import { BsExclamationCircle } from "react-icons/bs";
import { useContext, useState } from "react";
import moment from "moment";
import { InvoiceContext } from "./ClaimTab";

export default function PreviewInvoice({ handleChange }: any) {
  const ctx: any = useContext(InvoiceContext);

  return (
    <div className="overflow-y-scroll scrollbar-hide">
      <div className="w-[40vw]  bg-white  rounded-xl  overflow-y-scroll scrollbar-hide">
        {/* header */}
        <div className="border-b-2 p-4 ">
          <div className="flex justify-between items-center ">
            <h1 className="flex items-center font-bold text-2xl gap-2">
              Claims
              <span className="text-slate-500 text-xl">
                #
                <span className="text-[#0e8fc3] font-bold ">
                  {ctx?.invoiceData?.invoiceNo}
                </span>
              </span>
            </h1>
            <CgCloseR className="text-2xl text-slate-500 " />
          </div>

          <p className=" text-gray-500 mt-2 font-semibold text-sm">
            LEGAL CONSULTING
          </p>
        </div>

        <div className="text-gray-500 px-4 pt-6 pb-1 font-medium text-sm">
          <p>Bill To</p>
        </div>

        <div className="flex">
          <div className="px-4 w-1/2 text-start">
            <div className="py-1 font-bold text-lg capitalize">
              {ctx?.invoiceData?.email}
            </div>
            <div>
              <p className="text-gray-500 font-medium">
                421 Lesly River Suite 478
              </p>
              <p className="text-gray-500 font-medium">Sydney,Australia</p>
            </div>
          </div>

          <div className="flex justify-around px-4 w-1/2">
            <div>
              <p className="text-gray-500 font-medium">Issued On:</p>
              <p className="font-bold py-2">
                {" "}
                {moment(ctx?.invoiceData?.issuedOn).format("ddd DD,yyyy")}{" "}
              </p>
            </div>
            <div>
              <p className="text-gray-500 font-medium">Due On:</p>
              <p className="font-bold py-2">
                {moment(ctx?.invoiceData?.dueOn).format("ddd DD,yyyy")}
              </p>
            </div>
          </div>
        </div>

        <div className="px-4 mt-6 mb-1 font-bold">Claims Items</div>

        <div className="px-4 pt-2">
          <table className="border-[1px] border-slate-300 rounded-lg w-full ">
            <thead className="border-b-2 border-gray-300 bg-gray-100 text-slate-600 ">
              <tr className="text-sm  ">
                <td className="w-3/5 p-2 text-gray-500 font-medium">
                  Description
                </td>
                <td className="text-gray-500 font-medium">Price</td>
                <td className="text-center text-gray-500 font-medium">Qty</td>
                <td className="text-center text-gray-500 font-medium">
                  Total Price
                </td>
              </tr>
            </thead>
            <tbody className="font-bold text-sm ">
              {ctx?.invoiceData?.invoice_items?.map((item: any, index: any) => (
                <tr
                  key={index}
                  className={` ${
                    index % 2 === 0 ? "bg-[#ffffff]" : "bg-[#f2f2f2]"
                  } border-b-2 border-gray-300`}
                >
                  <td className="px-2 pt-6 pb-3"> {item?.ItemName} </td>
                  <td className="px-2 pt-6 pb-3">${item?.ItemPrice}</td>
                  <td className="px-2 pt-6 pb-3  text-center">
                    {item?.ItemQty}
                  </td>
                  <td className="px-2 pt-6 pb-3 text-center">
                    ${item?.ItemTotalPrice}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 flex items-start">
          <p className="w-[57%] text-gray-500 font-medium text-sm">
            Here we can write a additional notes for the client to get a better
            understanding of this claims.
          </p>
          <div className="w-[43%]">
            <div className="flex justify-end items-start  ">
              <div className="text-gray-500 font-medium text-base mr-5">
                Total Amount
              </div>
              <div className="font-bold">${ctx?.invoiceData?.total_amount}</div>
            </div>
          </div>
        </div>

        <div className="border-b-2 pb-3 ">
          <div className="m-3 p-3 flex gap-3 border-2 rounded-lg font-bold text-[#f88e00] bg-[#fffaed]">
            <BsExclamationCircle className="text-3xl" />
            <p className="text-[#5d5038]  font-medium text-sm">
              {" "}
              Dont worry, client will be get a hosted payment field here to make
              payment with any credit card or bank transfer.
            </p>
          </div>
        </div>

        <div className="flex p-4 justify-between">
          <button
            onClick={() => handleChange(ctx?.invoiceData, "draft")}
            className="px-4 py-1 border-[1px] border-gray-400 rounded-md  font-semibold text-base text-gray-600"
          >
            Save as Draft
          </button>
          <div className="flex justify-between gap-3 px-2">
            <button
              onClick={() => ctx?.setIsInvoicePreviewModalVisible(false)}
              className="px-4 py-1 border-[1px] border-gray-400 rounded-md  font-semibold text-base text-gray-600"
            >
              Close
            </button>
            <button
              onClick={() => {
                ctx.setIsInvoiceFinalDataShow(true);
                ctx?.setIsInvoicePreviewModalVisible(false);
              }}
              className="px-5 py-1 bg-newBlue rounded-md font-semibold text-base text-white"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
