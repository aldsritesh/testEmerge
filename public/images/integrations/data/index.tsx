import Image from "next/image";
import React from "react";
export default function index() {
  return (
    <div className="bg-slate-200 flex">
      {/* First Form Starts from here */}
      {/* Image Section */}
      <div className="w-1/3 bg-white  rounded-xl ml-2  text-center shadow-2xl h-full mt-3 mb-5  ">
        <div className="pb-6 pt-6">
          <div className="items-center space-y-4  ">
            <Image
              src={require("./NMI.png")}
              alt=""
              className="w-52 mt-8 m-auto"
            />
            <p className="m-5 font-bold">NMI</p>
          </div>
        </div>
        <div className="w-full h-1 bg-slate-100 mt-6 "></div>
        {/* Image Section */}
        {/* First Half Form Starts from here */}
        <div className="pl-4 pr-4">
          <div className=" flex justify-between text-2xl ">
            <p className="align-top text-[20px] font-bold pl-4">Live</p>
            <p className="text-blue-500 text-sm p-2 pr-4">
              How to find NMI API keys?
            </p>
          </div>
          <div className="flex flex-col">
            <form className="flex p-3 flex-col text-left space-y-2">
              <label className=" font-bold text-gray-400">Gateway Id</label>
              <input
                type="text"
                placeholder="Live Gateway Id"
                className="text-slate-400  w-full rounded-lg p-2 pl-4 border border-black"
              />
            </form>
            <form className="flex p-3 flex-col text-left space-y-2">
              <label className="font-bold text-gray-400">Security Key</label>
              <input
                type="text"
                placeholder="Live Security Key"
                className="text-slate-400 w-full rounded-lg p-2 pl-4 border border-black"
              />
            </form>
            <form className="flex p-3 flex-col text-left space-y-2">
              <label className="font-bold text-gray-400">Public Key</label>
              <input
                type="text"
                placeholder="Live Public Key"
                className="text-slate-400 w-full rounded-lg p-2 pl-4 border border-black"
              />
            </form>
          </div>
          <div>
            <button className="bg-green-500 h-10 w-2/5 rounded-lg text-white hover:text-slate-700 hover:bg-violet-300">
              Save
            </button>
          </div>
        </div>
        <div className="w-full h-1 bg-slate-100 mt-6 "></div>
        {/* First Half Form Ends here */}
        {/* First rest Form Starts from here */}
        {/* First rest Half Form Starts from here */}
        <div className="pl-4 pr-4">
          <div className="pt-2 flex justify-between">
            <p className="align-top text-[20px] font-bold">Sendbox</p>
          </div>
          <div className="flex flex-col">
            <form className="flex p-3 flex-col text-left space-y-2">
              <label className="font-bold text-gray-400">Gateway Id</label>
              <input
                type="text"
                placeholder="Sendbox Gateway Id"
                className="text-slate-400  w-full rounded-lg p-2 pl-4 border border-black"
              />
            </form>
            <form className="flex p-3 flex-col text-left space-y-2">
              <label className="font-bold text-gray-400">Security Key</label>
              <input
                type="text"
                placeholder="Sendbox Security Key"
                className="text-slate-400  w-full rounded-lg p-2 pl-4 border border-black"
              />
            </form>
            <form className="flex p-3 flex-col text-left space-y-2">
              <label className="font-bold text-gray-400">Public Key</label>
              <input
                type="text"
                placeholder="Sendbox Public Key"
                className="text-slate-400  w-full rounded-lg p-2 pl-4 border border-black"
              />
            </form>
          </div>
        </div>
        <div>
          <button className="bg-green-500 h-10 w-2/5 rounded-lg text-white hover:text-slate-700 hover:bg-violet-300 mb-6 mt-4">
            Save
          </button>
        </div>
      </div>
      {/* First rest Form Ends here */}
      {/* First Form ends here */}
      {/* Secound Form Starts from here */}
      {/* Image Section */}
      <div className="w-1/3 bg-white  rounded-xl ml-2  text-center shadow-2xl h-full mt-3 mb-5 ">
        <div>
          <div className="pb-6 pt-6">
            <div className="items-center space-y-6">
              <Image
                src={require("./net.png")}
                alt=""
                className="w-72 mt-7 m-auto"
              />
              <p className="m-auto mt-4 font-bold">Authhrize.net</p>
            </div>
          </div>
          {/* Image Section */}
          {/* Secound Half Form Starts from here */}
          <div className="w-full h-1 bg-slate-100 mt-6 "></div>
          <div className="pl-4 pr-4">
            <div className=" flex justify-between text-2xl ">
              <p className="align-top text-[20px] font-bold pl-4">Live</p>
              <p className="text-blue-500 text-sm p-2 pr-4">
                How to find Authorize.net API keys?
              </p>
            </div>
            <div className="flex flex-col">
              <form className="flex p-3 flex-col text-left space-y-2">
                <label className="font-bold text-gray-400">Login Id</label>
                <input
                  type="text"
                  placeholder="Login Gateway Id"
                  className="text-slate-400  w-full rounded-lg p-2 pl-4 border border-black"
                />
              </form>
              <form className="flex p-3 flex-col text-left space-y-2">
                <label className="font-bold text-gray-400">
                  Transaction Key
                </label>
                <input
                  type="text"
                  placeholder="Live Transaction Key"
                  className="text-slate-400 w-full rounded-lg p-2 pl-4 border border-black"
                />
              </form>
              <form className="flex p-3 flex-col text-left space-y-2">
                <label className="font-bold text-gray-400">Signature Key</label>
                <input
                  type="text"
                  placeholder="Live Signature Key"
                  className="text-slate-400 w-full rounded-lg p-2 pl-4 border border-black"
                />
              </form>
            </div>
            <div>
              <button className="bg-green-500 h-10 w-2/5 rounded-lg text-white hover:text-slate-700 hover:bg-violet-300">
                Save
              </button>
            </div>
          </div>
          <div className="w-full h-1 bg-slate-100 mt-6 rounded-full"></div>
          {/* Secound Half Form Ends here */}
          {/* Secound rest Form Starts from here */}
          {/* Secound rest Half Form Starts from here */}
          <div className="pl-4 pr-4">
            <div className="pt-2 flex justify-between">
              <p className="align-top text-[20px] font-bold">Sendbox</p>
            </div>
            <div className="flex flex-col">
              <form className="flex p-3 flex-col text-left space-y-2">
                <label className="font-bold text-gray-400">Login Id</label>
                <input
                  type="text"
                  placeholder="Sendbox Login Id"
                  className="text-slate-400  w-full rounded-lg p-2 pl-4 border border-black"
                />
              </form>
              <form className="flex p-3 flex-col text-left space-y-2">
                <label className="font-bold text-gray-400">
                  Transaction Key
                </label>
                <input
                  type="text"
                  placeholder="Sendbox Transaction Key"
                  className="text-slate-400  w-full rounded-lg p-2 pl-4 border border-black"
                />
              </form>
              <form className="flex p-3 flex-col text-left space-y-2">
                <label className="font-bold text-gray-400">Signature Key</label>
                <input
                  type="text"
                  placeholder="Sendbox Signature Key"
                  className="text-slate-400  w-full rounded-lg p-2 pl-4 border border-black"
                />
              </form>
            </div>
          </div>
          <div>
            <button className="bg-green-500 h-10 w-2/5 rounded-lg text-white hover:text-slate-700 hover:bg-violet-300 mb-6 mt-4">
              Save
            </button>
          </div>
        </div>
      </div>
      {/* Secound Form ends here */}
      {/* Third Form Starts here  */}
      <div className="w-1/3 rounded-xl ml-2 mr-2 text-center shadow-xl h-full mt-3 mb-5 bg-white">
        {/* Image Section  */}
        <div className="mt-12 mb-12">
          <Image src={require("./stripe.png")} alt="" className="w-40 m-auto" />
          <p className="m-auto mt-4 font-bold">Stripe</p>
        </div>
        {/* Image Section  */}
        <div className="w-full h-1 bg-slate-100 mt-6 "></div>
        <div className="mt-6  pl-4 justify-between flex mb-4">
          <div className="flex flex-col space-y-6">
            <div className="flex space-x-3">
              <input
                type="radio"
                name="radio-5"
                className="radio radio-success "
              />
              <div className=" ">
                <p>Stripe live mode is enable</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <input
                type="radio"
                name="radio-5"
                className="radio radio-success "
              />
              <div className="">
                <p>Stripe Test mode is enable</p>
              </div>
            </div>
          </div>
          <div className="space-y-6 pr-4 pb-4"></div>
        </div>
        <div className="flex space-x-3">
          <div className="text-center pl-4">
            <input type="checkbox" className="toggle toggle-lg " />
          </div>
          <p>Enable Google Play and Apple Play</p>
        </div>
        <div>
          <button className="bg-red-200 h-10 w-2/5 rounded-lg text-red-600 hover:text-slate-700 hover:bg-violet-300 mb-6 mt-6 font-bold">
            Disconnected
          </button>
        </div>
      </div>
      {/* Third Form ends here */}
    </div>
  );
}
