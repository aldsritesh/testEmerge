import React, { useContext, useState } from "react";
import SettingsSidebar from "@/components/SettingsSidebar/TeamsSidebar";
import { TfiPencil } from "react-icons/tfi";
import { RiDeleteBin6Line } from "react-icons/ri";
import ModalDerived from "@/components/Modal";
import { AiOutlineClose } from "react-icons/ai";
import { GlobalContext } from "@/layouts/GlobalLayout";

export default function Domain() {
  const ctx = useContext(GlobalContext);
  ctx.setOpen(false);
  const [domainData, setDomainData] = useState<any>([
    { domainName: "www.pearland.com" },
  ]);
  const [openDomainModel, setOpenDomainModel] = useState<any>(false);
  const [errors, setErrors] = useState<any>({});
  const [formValues, setFormValues] = useState<any>({
    domainName: "",
    RobotTxt: "",
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

    //validate errors
    const validationErrors: any = {};

    if (!formValues.domainName) {
      validationErrors.domainName = "Required";
    }

    if (!formValues.robotTxt) {
      validationErrors.robotTxt = "Required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setDomainData((prevValues: any) => [
      ...domainData,
      {
        domainName: formValues?.domainName,
        robotTxt: formValues?.robotTxt,
      },
    ]);
    setFormValues({
      domainName: "",
      robotTxt: "",
    });
    setErrors({});

    setOpenDomainModel(false);
  };
  return (
    <>
      <div className="flex flex-wrap items-center">
        <ModalDerived
          visibility={openDomainModel}
          onClose={() => setOpenDomainModel(false)}
        >
          <div className=" bg-white rounded-lg  h-[85vh] pb-[5%]  overflow-y-hidden w-full scrollbar-hide ">
            <form
              className=" h-[100vh]  pt-5 pb-3 w-screen md:w-[100vh]"
              onSubmit={handleSubmit}
            >
              <div className="h-[10vh] flex justify-between items-start border-b-[1px] pb-4 px-5">
                <div>
                  <p className="text-gray-800 font-medium md:text-lg ">
                    Add Domain
                  </p>
                  <p className="text-gray-500 font-normal md:text-sm pt-1">
                    Add New Domains
                  </p>
                </div>
                <button onClick={() => setOpenDomainModel(false)}>
                  <AiOutlineClose className="text-gray-800 h-6 w-6" />
                </button>
              </div>
              <div className="overflow-hidden ">
                <div className="h-[60vh]">
                  {/*  Add Domain */}
                  <div className="mx-5 py-3">
                    <div className="flex items-center  justify-between ">
                      <label
                        className="block text-[#47494b] text-sm pt-1 font-semibold"
                        htmlFor=""
                      >
                        Add Your Own Domain
                      </label>
                      {errors.domainName && (
                        <div className=" text-red-500 text-xs pt-1">
                          {errors.domainName}
                        </div>
                      )}
                    </div>
                    <input
                      type="url"
                      id=""
                      name="domainName"
                      value={formValues.domainName}
                      onChange={handleChange}
                      placeholder="www.mywebsite.com"
                      className=" w-full placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300   "
                    />
                    <p className="text-[#9ca3af] text-xs">
                      Note : Please make sure to have either an a record
                      pointing to 34.26.57.4 or a CNAME record pointing to
                      flash.funnels.msgndr.com for in domain()
                    </p>
                  </div>

                  {/*  Add Robots text code */}
                  <div className="mx-5 py-3">
                    <div className="flex justify-between items-center ">
                      <label
                        className="block text-[#47494b] text-sm pt-1 font-semibold"
                        htmlFor=""
                      >
                        Add Robot txt Code
                      </label>
                      {errors.robotTxt && (
                        <div className=" text-red-500 text-xs pt-1">
                          {errors.robotTxt}
                        </div>
                      )}
                    </div>
                    <textarea
                      rows={5}
                      id=""
                      name="robotTxt"
                      value={formValues.robotTxt}
                      onChange={handleChange}
                      placeholder="Add Robot txt Code for this Domain"
                      className=" w-full placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300   "
                    />

                    <div className="text-[#9ca3af] text-xs">
                      Need Help configuring root domain ?
                      <p className="text-blue-400">Watch This Video.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[10vh] flex justify-end items-center border-t-[1px] pt-3 pb-2 px-5">
                <div className=" flex justify-end items-center gap-3">
                  <button
                    onClick={() => setOpenDomainModel(false)}
                    className="text-base text-gray-600 font-medium flex justify-start items-center border-[1px] border-gray-300 py-2 px-5 rounded-md  "
                  >
                    Cancel
                  </button>
                  <button
                    onSubmit={handleSubmit}
                    type="submit"
                    className="text-base flex justify-start items-center bg-secondary py-2 px-5 text-white rounded-md  "
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </ModalDerived>
        <div className="w-full lg:w-[25%] border-r-[1px]   bg-white    ">
          <SettingsSidebar />
        </div>
        <div className="w-full lg:w-[75%]  bg-gray-50 h-[100vh] scrollbar-hide  overflow-y-scroll pb-20">
          <div className=" bg-white border rounded-md ">
            <div className="  border-b flex items-center justify-between pt-4 px-4 pb-3">
              <p className="text-[#47494b] text-lg font-semibold">Domains</p>
            </div>
            <div className="flex items-center justify-between  border-b">
              <div className="text-[#47494b] text-base font-semibold  px-5 ">
                All Domains
              </div>
              <div className="text-[#47494b] text-sm font-semibold flex items-center justify-center gap-3 px-5 py-1">
                <button className="text-blue-400 ">
                  Need Help Configuring Domain ?
                </button>
                <button
                  onClick={() => setOpenDomainModel(true)}
                  className="border bg-newBlue mb-4 mt-2   text-white rounded-md text-sm px-3 py-2"
                >
                  + Add New Domain
                </button>
              </div>
            </div>

            {domainData?.map((item: any, index: number) => (
              <div
                key={index}
                className=" text-sm font-semibold  py-1 px-5 mb-2 flex justify-between"
              >
                <div className="text-gray-400">{item.domainName}</div>
                <div className="flex justify-between gap-3 w-1/4">
                  <button className="text-blue-400 text-xs">
                    XML Site Map
                  </button>
                  <button>
                    <TfiPencil />
                  </button>
                  <button>
                    <RiDeleteBin6Line />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
