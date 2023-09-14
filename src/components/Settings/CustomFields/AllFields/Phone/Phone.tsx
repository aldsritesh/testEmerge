import MobileNo from "@/components/UI/MobileNo";
import React, { useState } from "react";

export default function Phone() {
  const [errors, setErrors] = useState<any>({});
  return (
    <>
      <div className="p-2">
        <div className=" bg-white">
          <div className="w-full mb-2">
            <p className="font-semibold text-gray-800 mb-2 pl-1">Phone No</p>
            <MobileNo name="mobile_phone" type="text" />
            {errors.phone && (
              <p className="text-sm text-red-500 mb-2 mt-1">{errors.phone}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
