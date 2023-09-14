import React from "react";

export default function Multiline() {
  return (
    <div className=" p-2">
      <textarea
        className="w-full bg-white border border-gray-300 h-24 mt-1 rounded-md placeholder:text-sm px-3 py-2 "
        placeholder="Placeholder"
        disabled
      />
    </div>
  );
}
