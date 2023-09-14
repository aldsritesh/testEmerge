import ModalDerived from "@/components/Modal";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TfiPencil } from "react-icons/tfi";

const NumberPool = () => {
  const [noPoolData, setNoPoolData] = useState<any>([]);

  const [openNumberPoolM, setOpenNumberPoolM] = useState(false);
  const [errors, setErrors] = useState<any>({});
  const [formValues, setFormValues] = useState<any>({
    name: "",
    phoneNumber: "",
    forwardingNumber: "",
    timeOut: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormValues((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formValues);
    //validate errors
    const validationErrors: any = {};

    if (!formValues.name) {
      validationErrors.name = "Required";
    }

    if (!formValues.phoneNumber) {
      validationErrors.phoneNumber = "Required";
    }

    if (!formValues.forwardingNumber) {
      validationErrors.forwardingNumber = "Required";
    }

    if (!formValues.timeOut) {
      validationErrors.timeOut = " Required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setNoPoolData((prevValues: any) => [
      ...noPoolData,

      {
        name: formValues?.name,
        phoneNumber: formValues?.phoneNumber,
        forwardingNumber: formValues?.forwardingNumber,
        timeOut: formValues?.timeOut,
      },
    ]);

    setFormValues({
      name: "",
      phoneNumber: "",
      forwardingNumber: "",
      timeOut: "",
    });

    setErrors({});

    setOpenNumberPoolM(false);
  };

  return (
    <div className="border rounded-md  m-5  bg-white  shadow-md">
      <ModalDerived
        visibility={openNumberPoolM}
        onClose={() => setOpenNumberPoolM(false)}
      >
        <div className=" bg-white rounded-lg  w-[30vw]  pb-[5%]  overflow-y-hidden  scrollbar-hide ">
          <form className="   pt-5 pb-3  " onSubmit={handleSubmit}>
            <div className="h-[6vh] flex justify-between items-center border-b-[1px]    ">
              <div>
                <p className=" font-noto    text-[#1F2229] font-bold md:text-xl  ml-14  ">
                  Add Number Pool
                </p>
              </div>
              <button onClick={() => setOpenNumberPoolM(false)}>
                <AiOutlineClose className="text-gray-800 h-6 w-6 mx-4" />
              </button>
            </div>
            <div className="overflow-hidden ">
              <div className="space-y-2 mt-8 mx-14 ">
                {/*  Name */}
                <div className="  ">
                  <div className="flex gap-2 items-center">
                    <label
                      className="block  text-black text-sm   font-semibold"
                      htmlFor=""
                    >
                      Name
                    </label>
                    {errors.name && (
                      <div className=" text-red-500 text-sm italic">
                        *{errors.name}
                      </div>
                    )}
                  </div>

                  <input
                    type="text"
                    id=""
                    name="name"
                    onChange={handleChange}
                    value={formValues.name}
                    placeholder="Enter Name"
                    className=" w-full placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300   "
                  />
                </div>

                {/* Number */}
                <div className=" py-2 ">
                  <div className="flex gap-2 items-center">
                    <label
                      className="block  text-black text-sm   font-semibold"
                      htmlFor=""
                    >
                      Phone Number
                    </label>
                    {errors.phoneNumber && (
                      <div className=" text-red-500 text-sm italic">
                        *{errors.phoneNumber}
                      </div>
                    )}
                  </div>

                  <input
                    type="number"
                    id=""
                    name="phoneNumber"
                    onChange={handleChange}
                    value={formValues.phoneNumber}
                    placeholder="Enter Phone Number"
                    className=" w-full placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2    font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
                  />
                </div>

                {/* forwarding Number */}
                <div className="  py-2">
                  <div className="flex gap-2 items-center">
                    <label
                      className="block  text-black text-sm   font-semibold"
                      htmlFor=""
                    >
                      Forwarding Number
                    </label>
                    {errors.forwardingNumber && (
                      <div className=" text-red-500 text-sm italic">
                        *{errors.forwardingNumber}
                      </div>
                    )}
                  </div>

                  <input
                    type="number"
                    id=""
                    name="forwardingNumber"
                    value={formValues.forwardingNumber}
                    onChange={handleChange}
                    placeholder="Enter Forwarding Number"
                    className=" w-full placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2    font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
                  />
                </div>

                {/*Timeout*/}
                <div className="   py-3">
                  <div className="flex gap-2 items-center">
                    <label
                      className="block  text-black text-sm   font-semibold"
                      htmlFor=""
                    >
                      TimeOut
                    </label>
                    {errors.timeOut && (
                      <div className=" text-red-500 text-sm italic">
                        *{errors.timeOut}
                      </div>
                    )}
                  </div>

                  <input
                    type="time"
                    id=""
                    name="timeOut"
                    value={formValues.timeOut}
                    onChange={handleChange}
                    className=" w-full placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end items-center   pt-6 pb-8 px-14">
              <div className=" flex justify-end items-center gap-3">
                <button
                  onClick={() => setOpenNumberPoolM(false)}
                  className="text-sm text-gray-600 font-medium flex justify-start items-center border-[1px] border-gray-300 py-2 px-9 rounded-md  "
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  onSubmit={handleSubmit}
                  className="text-sm flex justify-start items-center bg-[#0f66cf] py-2 px-9 text-white rounded-md "
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </ModalDerived>
      <div className=" text-[#47494b] text-lg font-semibold  py-1 px-3 border-y">
        <p className="m-2"> Number Pool</p>
      </div>

      {noPoolData?.length > 0 ? (
        <div className="overflow-x-auto px-1">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th className="bg-white">
                  {" "}
                  <span className="label-text text-[#47494b] text-sm font-semibold">
                    {" "}
                    Default Numbers
                  </span>
                </th>
                <th className="bg-white">
                  {" "}
                  <p className="block text-[#47494b] text-sm  font-semibold">
                    Name
                  </p>
                </th>
                <th className="bg-white">
                  {" "}
                  <p className="block text-[#47494b] text-sm  font-semibold">
                    Phone Number
                  </p>
                </th>
                <th className="bg-white">
                  {" "}
                  <p className="block text-[#47494b] text-sm  font-semibold">
                    Forwarding Number
                  </p>
                </th>
                <th className="bg-white">
                  {" "}
                  <p className="block text-[#47494b] text-sm font-semibold">
                    TimeOut
                  </p>
                </th>
                <th className="bg-white"></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {noPoolData?.map((item: any, index: number) => (
                <tr key={index}>
                  <th>
                    {" "}
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary scale-75"
                    />
                  </th>
                  <td>
                    <p className="  text-gray-500 text-[12px]    font-medium    ">
                      {item?.name}
                    </p>
                  </td>
                  <td>
                    <p className="  text-gray-500 text-[12px]   font-medium    ">
                      {" "}
                      {item?.phoneNumber}
                    </p>
                  </td>
                  <td>
                    {" "}
                    <p className="  text-gray-500 text-[12px]   font-medium    ">
                      {" "}
                      {item?.forwardingNumber}
                    </p>
                  </td>
                  <td>
                    {" "}
                    <p className="  text-gray-500 text-[12px]    font-medium  flex items-center  ">
                      {" "}
                      {item.timeOut}
                    </p>
                  </td>
                  <td>
                    {" "}
                    <div className="flex justify-center items-center gap-2 ">
                      <div className="">
                        <TfiPencil className="text-gray-400 scale-90 " />
                      </div>
                      <div className=" ">
                        <RiDeleteBin6Line className="text-gray-400 scale-90 " />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-gray-400 text-center text-sm pt-1 font-semibold my-2">
          You Don t have any Number Pool
        </div>
      )}

      <div className=" flex justify-end mx-4">
        <button
          onClick={() => setOpenNumberPoolM(true)}
          className="border bg-newBlue mb-4 mt-2   text-white rounded-md text-sm px-3 py-2"
        >
          + Add Number Pool
        </button>
      </div>
    </div>
  );
};

export default NumberPool;
