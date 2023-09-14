import React from "react";

export default function Number() {
  return (
    <>
      <div className="p-2">
        <div>
          <p className="text-sm">Numeric</p>
        </div>

        <div className=" bg-white">
          <input
            className="w-full border border-gray-300 py-2 mt-1 rounded-md placeholder:text-sm px-3 bg-white "
            placeholder="1234"
            disabled
          />
        </div>
      </div>
    </>
  );
}
