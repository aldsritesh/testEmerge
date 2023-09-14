import React from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function Top() {
  return (
    <div className="px-6">
      <div className="flex justify-start items-center">
        <div className="border-[1px] border-gray-300 h-8 w-8 rounded-full flex justify-center items-center">
          <ChevronLeftIcon className="h-4 w-4 text-tertiary" />
        </div>
        <p className="pl-4 font-semibold text-base text-tertiary">
          {" "}
          Back to leads{" "}
        </p>
      </div>
    </div>
  );
}
