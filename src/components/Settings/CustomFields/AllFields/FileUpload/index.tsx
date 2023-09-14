import React from "react";

export default function FileUpload() {
  return (
    <div className=" p-2">
      <p className="text-gray-600 text-sm pb-2">File </p>
      <div className="bg-white">
        <input type="file" />
      </div>
    </div>
  );
}
