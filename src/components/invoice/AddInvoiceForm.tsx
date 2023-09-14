import { useContext } from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiFillDelete, AiOutlineLink, AiOutlinePlus } from "react-icons/ai";
import { HiDotsVertical } from "react-icons/hi";
import { InvoiceContext } from "./ClaimTab";

export default function AddInvoiceForm({ handleChange }: any) {
  const ctx: any = useContext(InvoiceContext);

  const [checkBoxStatus, setCheckBoxStatus] = useState<any>();

  const [formData, setFormData] = useState<any>({
    invoiceNo: ctx.data.length + 1,
    email: "",
    project_desc: "",
    issuedOn: new Date(),
    dueOn: new Date(),
    invoice_items: [
      { ItemName: "", ItemPrice: "", ItemQty: "", ItemTotalPrice: "" },
    ],
    total_amount: 0,
    notes: "",
    invoiceRecurring: checkBoxStatus,
    status: "",
  });

  const [errors, setErrors] = useState<any>({
    email: "",
    project_desc: "",
    issuedOn: new Date(),
    dueOn: new Date(),
    invoice_items: [
      { ItemName: "", ItemPrice: "", ItemQty: "", ItemTotalPrice: "" },
    ],
    notes: "",
  });

  const handleAddField = () => {
    setFormData((prevState: any) => ({
      ...prevState,
      invoice_items: [
        ...prevState.invoice_items,
        { ItemName: "", ItemPrice: "", ItemQty: "", ItemTotalPrice: "" },
      ],
    }));
  };

  const handleRemoveField = (index: any) => {
    const newInvoiceItems: any = [...formData.invoice_items];
    newInvoiceItems.splice(index, 1);

    // Update ItemTotalPrice values
    const updatedInvoiceItems = newInvoiceItems.map((item: any) => {
      const itemPrice = parseFloat(item.ItemPrice);
      const itemQty = parseFloat(item.ItemQty);
      const itemTotalPrice = (itemPrice * itemQty).toFixed(0);
      return { ...item, ItemTotalPrice: itemTotalPrice };
    });

    setFormData((prevState: any) => ({
      ...prevState,
      invoice_items: updatedInvoiceItems,
      total_amount: calculateTotalAmount(updatedInvoiceItems),
    }));
  };

  const handleInputChange = (e: any, index: any) => {
    const { name, value } = e.target;
    if (name.startsWith("Item")) {
      const newFormData = [...formData.invoice_items];
      newFormData[index] = { ...newFormData[index], [name]: value };

      // Calculate ItemTotalPrice based on ItemPrice and ItemQty
      const itemPrice = parseFloat(newFormData[index].ItemPrice);
      const itemQty = parseFloat(newFormData[index].ItemQty);
      newFormData[index].ItemTotalPrice = (itemPrice * itemQty).toFixed(0);

      setFormData((prevState: any) => ({
        ...prevState,
        invoice_items: newFormData,
        total_amount: calculateTotalAmount(newFormData),
      }));
    } else {
      setFormData((prevState: any) => ({ ...prevState, [name]: value }));
    }
  };

  const calculateTotalAmount = (invoiceItems: any[]) => {
    let totalAmount = 0;
    invoiceItems.forEach((item) => {
      const itemTotalPrice = parseFloat(item.ItemTotalPrice);
      if (!isNaN(itemTotalPrice)) {
        totalAmount += itemTotalPrice;
      }
    });
    return totalAmount.toFixed(0);
  };

  const handleSubmitDraft = (e: any) => {
    e.preventDefault();
    setFormData((prevState: any) => ({
      ...prevState,
      invoiceRecurring: checkBoxStatus,
    }));
    let formIsValid = true;
    const newErrors = {
      email: "",
      project_desc: "",
      issuedOn: new Date(),
      dueOn: new Date(),
      invoice_items: [
        { ItemName: "", ItemPrice: "", ItemQty: "", ItemTotalPrice: "" },
      ],
      notes: "",
    };

    if (formData.email === "") {
      formIsValid = false;
      newErrors.email = "required";
    }
    if (formData.project_desc === "") {
      formIsValid = false;
      newErrors.project_desc = "required";
    }
    if (formData.notes === "") {
      formIsValid = false;
      newErrors.notes = "required";
    }
    const InvoiceItemsErrors: any = [];
    formData.invoice_items.forEach((filter: any, index: any) => {
      const InvoiceErrors: any = {};
      if (filter.ItemName === "") {
        formIsValid = false;
        InvoiceErrors.ItemName = "required";
      }
      if (filter.ItemPrice === "") {
        formIsValid = false;
        InvoiceErrors.ItemPrice = "required";
      }

      if (filter.ItemQty === "") {
        formIsValid = false;
        InvoiceErrors.ItemQty = "required";
      }

      if (filter.ItemTotalPrice === "") {
        formIsValid = false;
        InvoiceErrors.ItemTotalPrice = "required";
      }

      InvoiceItemsErrors[index] = InvoiceErrors;
    });

    newErrors.invoice_items = InvoiceItemsErrors;
    setErrors(newErrors);

    if (formIsValid) {
      handleChange(formData, "draft");
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFormData((prevState: any) => ({
      ...prevState,
      invoiceRecurring: checkBoxStatus,
    }));
    let formIsValid = true;
    const newErrors = {
      email: "",
      project_desc: "",
      issuedOn: new Date(),
      dueOn: new Date(),
      invoice_items: [
        { ItemName: "", ItemPrice: "", ItemQty: "", ItemTotalPrice: "" },
      ],
      notes: "",
    };

    if (formData.email === "") {
      formIsValid = false;
      newErrors.email = "required";
    }
    if (formData.project_desc === "") {
      formIsValid = false;
      newErrors.project_desc = "required";
    }
    if (formData.notes === "") {
      formIsValid = false;
      newErrors.notes = "required";
    }
    const InvoiceItemsErrors: any = [];
    formData.invoice_items.forEach((filter: any, index: any) => {
      const InvoiceErrors: any = {};
      if (filter.ItemName === "") {
        formIsValid = false;
        InvoiceErrors.ItemName = "required";
      }
      if (filter.ItemPrice === "") {
        formIsValid = false;
        InvoiceErrors.ItemPrice = "required";
      }

      if (filter.ItemQty === "") {
        formIsValid = false;
        InvoiceErrors.ItemQty = "required";
      }

      if (filter.ItemTotalPrice === "") {
        formIsValid = false;
        InvoiceErrors.ItemTotalPrice = "required";
      }

      InvoiceItemsErrors[index] = InvoiceErrors;
    });

    newErrors.invoice_items = InvoiceItemsErrors;
    setErrors(newErrors);
    if (formIsValid) {
      handleChange(formData, "");
      ctx?.setInvoiceData(formData);
    }
  };

  return (
    <div className="m-0 pb-6  bg-mainBg pr-3 ">
      <div className="bg-white rounded-tr-[50px] shadow-md h-screen overflow-y-scroll scrollbar-hide ">
        <div className="flex border-b-2 py-4 px-4">
          <h1 className="font-medium text-2xl">Create New Claims</h1>
        </div>

        <div>
          <div className="flex justify-between items-center mt-4 mb-2 px-4">
            <h1 className="font-bold text-xl flex gap-2">
              Claims
              <p className="text-[#0e8fc3] font-bold">
                <span className="text-slate-500 ">#</span> {formData.invoiceNo}
              </p>
            </h1>

            <button className="flex items-center gap-1 text-slate-400 btn bg-transparent border-none hover:bg-transparent">
              <AiOutlineLink />
              COPY LINK
            </button>
          </div>
        </div>

        <div className="px-3">
          <div className="bg-[#f9f9f9] border-gray-300 rounded-lg border px-4 py-4">
            <label className="font-bold block" htmlFor="">
              Recipient Email
            </label>
            <input
              className="border border-gray-300 outline-none rounded-lg  p-2 mt-1 w-full"
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={(e) => handleInputChange(e, 0)}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
        </div>

        <div className="m-3 mt-4">
          <form action="">
            <label className="block text-slate-500 " htmlFor="">
              Project Description
            </label>
            <input
              className="border border-gray-300 outline-none rounded-lg w-full p-2"
              type="text"
              name="project_desc"
              placeholder="Enter Project"
              value={formData.project_desc}
              onChange={(e) => handleInputChange(e, 0)}
            />
            {errors.project_desc && (
              <div className="error">{errors.project_desc}</div>
            )}
          </form>
        </div>

        <div className="flex justify-between m-3 gap-3">
          <div className="w-1/2 ">
            <label className="block text-slate-500" htmlFor="">
              Issued On
            </label>
            <DatePicker
              selected={formData.issuedOn}
              onChange={(e: any) => {
                setFormData((prevValues: any) => ({
                  ...prevValues,
                  issuedOn: e,
                }));
              }}
              placeholderText={formData.issuedOn}
              minDate={new Date()}
            />
          </div>

          <div className="w-1/2">
            <label className="block text-slate-500" htmlFor="">
              Due On
            </label>
            <DatePicker
              selected={formData.dueOn}
              onChange={(e: any) => {
                setFormData((prevValues: any) => ({
                  ...prevValues,
                  dueOn: e,
                }));
              }}
              placeholderText={formData.dueOn}
              minDate={new Date()}
            />
          </div>
        </div>

        <div className="px-4 mb-4 flex items-stretch gap-1">
          <input
            type="checkbox"
            name="invoiceRecurring"
            onChange={() => setCheckBoxStatus(!checkBoxStatus)}
          />
          <label htmlFor="">This is a recurring Claims (Monthly)</label>
        </div>
        <div className="font-bold p-4 pb-2">
          <h1>Invoice Items</h1>
        </div>

        {formData.invoice_items.map((item: any, index: any) => (
          <div key={index}>
            <div className="flex   gap-4 px-4">
              <div className="w-[49%]">
                <label className="text-slate-500" htmlFor="">
                  Item
                </label>
                <input
                  className="border border-gray-300 outline-none rounded-md p-1 w-full mt-2"
                  type="text"
                  name="ItemName"
                  value={item.ItemName}
                  placeholder="Item Name"
                  onChange={(e) => handleInputChange(e, index)}
                />
                {errors.invoice_items[index] &&
                  errors.invoice_items[index].ItemName && (
                    <div className="error">
                      {errors.invoice_items[index].ItemName}
                    </div>
                  )}
              </div>
              <div className="w-[51%]">
                <div className="flex  gap-2">
                  <div className="  ">
                    <label className="flex w-1/4 text-slate-500 " htmlFor="">
                      Price
                    </label>
                    <input
                      className="border border-gray-300 outline-none rounded-md w-20 p-1 mt-2"
                      type="number"
                      name="ItemPrice"
                      value={item.ItemPrice}
                      placeholder="0"
                      onChange={(e) => handleInputChange(e, index)}
                    />
                    {errors.invoice_items[index] &&
                      errors.invoice_items[index].ItemPrice && (
                        <div className="error">
                          {errors.invoice_items[index].ItemPrice}
                        </div>
                      )}
                  </div>

                  <div className="  ">
                    <label className="flex text-slate-500" htmlFor="">
                      Qty
                    </label>
                    <input
                      className="border border-gray-300 outline-none rounded-md  p-1 w-16 mt-2 "
                      type="number"
                      name="ItemQty"
                      value={item.ItemQty}
                      placeholder="0"
                      onChange={(e) => {
                        handleInputChange(e, index);
                      }}
                    />
                    {errors.invoice_items[index] &&
                      errors.invoice_items[index].ItemQty && (
                        <div className="error">
                          {errors.invoice_items[index].ItemQty}
                        </div>
                      )}
                  </div>

                  <div className="  w-1/4  ">
                    <label className="flex text-slate-500" htmlFor="">
                      Total
                    </label>
                    <input
                      className="border border-gray-300 outline-none rounded-md  p-1 w-20 mt-2"
                      type="number"
                      name="ItemTotalPrice"
                      value={item.ItemTotalPrice}
                      placeholder="0"
                      onChange={(e) => handleInputChange(e, index)}
                    />
                    {errors.invoice_items[index] &&
                      errors.invoice_items[index].ItemTotalPrice && (
                        <div className="error">
                          {errors.invoice_items[index].ItemTotalPrice}
                        </div>
                      )}
                  </div>

                  <div className="flex w-1/3 m-3  ">
                    <div className="dropdown dropdown-bottom dropdown-end">
                      <button tabIndex={0} className="slate-500 mt-7 ">
                        <HiDotsVertical />
                      </button>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu  shadow bg-gray-100 rounded-md w-28"
                      >
                        <li>
                          <button
                            type="button"
                            onClick={() => handleRemoveField(index)}
                            className="rounded-md "
                          >
                            <AiFillDelete className="h-5 w-5 text-red-600" />
                            <span className="text-sm text-slate-500">
                              Delete
                            </span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="flex justify-between  items-center">
          <button
            onClick={handleAddField}
            className="flex items-center text-blue-600 font-bold gap-1 btn bg-transparent border-none hover:bg-transparent"
          >
            <AiOutlinePlus /> Add Item
          </button>

          <div className="flex justify-end w-80 pr-10">
            <span className="text-slate-500 mr-2 ">Total Amount</span>
            {formData.total_amount == 0 ? (
              <span className="font-bold text-lg ">$0</span>
            ) : (
              <span className="font-bold text-lg ">
                {formData.total_amount}
              </span>
            )}
          </div>
        </div>

        <div className="p-4 text-slate-500 border-b-2 ">
          <span>Additional Notes</span>
          <textarea
            className="border border-gray-300 outline-none rounded-md p-2  "
            cols={59}
            rows={5}
            name="notes"
            placeholder="Some additional notes for the client"
            value={formData.notes}
            onChange={(e) => handleInputChange(e, 0)}
          ></textarea>
          {errors.notes && <div className="error">{errors.notes}</div>}
        </div>

        <div className="flex justify-between px-4 py-4 ">
          <button
            type="submit"
            onClick={handleSubmit}
            className="text-blue-600  font-bold btn bg-transparent border-none hover:bg-transparent"
          >
            PREVIEW
          </button>
          <div className="flex gap-4">
            <button
              onClick={handleSubmitDraft}
              className="border border-gray-300 outline-none rounded-md p-2 font-bold btn bg-transparent hover:bg-transparent text-black"
              type="submit"
            >
              Save as Draft
            </button>

            <button
              onClick={handleSubmitDraft}
              className="rounded-md bg-blue-600 text-white btn hover:bg-blue-600 border-none "
              type="submit"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
