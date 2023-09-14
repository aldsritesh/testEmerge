import React from "react";

export default function Textboxlist() {
  return (
    <>
      <div className="p-2">
        <div className="flex ">
          <div>
            <p className="text-sm">Box1</p>
          </div>

          <div className="pl-3 bg-white">
            <input
              className="w-full border bg-white border-gray-300 py-2 mt-1 rounded-md placeholder:text-sm px-3 "
              placeholder="text 1"
              disabled
            />
          </div>
        </div>

        <div className="flex mt-3">
          <div>
            <p className="text-sm">Box2</p>
          </div>

          <div className="pl-3 bg-white ">
            <input
              className="w-full bg-white border border-gray-300 py-2 mt-1 rounded-md placeholder:text-sm px-3 "
              placeholder="text 2"
              disabled
            />
          </div>
        </div>
      </div>
    </>
  );
}
