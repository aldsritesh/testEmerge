import React from "react";

export default function Monetry() {
  return (
    <div className="  p-2 px-5">
      <h1 className="font-bold pb-2">Amount</h1>

      <div className="mb-5 mr-10">
        <label className="relative block">
          <span className="absolute inset-y-0 left-3 flex items-center pr-2 text-slate-300">
            $
          </span>
          <input
            className=" w-full placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="$0.00"
            type="text"
            name="search"
            disabled
          />
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 text-slate-300">
            USD
          </span>
        </label>
      </div>
    </div>
  );
}
