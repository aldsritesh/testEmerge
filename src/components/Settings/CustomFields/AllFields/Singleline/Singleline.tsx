import React from "react";

export default function Singleline() {
  return (
    <div className="">
      <h1 className="text-gray-600 text-sm">Text Field</h1>

      <input
        className="w-full bg-white border border-gray-300 h-10 mt-1 rounded-md placeholder:text-sm px-3"
        placeholder="Placeholder"
        disabled
      />
    </div>
  );
}
