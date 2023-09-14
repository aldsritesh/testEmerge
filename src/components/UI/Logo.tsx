import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <div className=" py-3">
      <Image
        src={require("../../../public/images/logo/logo.png")}
        alt="Emerge"
        className="w-36 lg:w-44"
      />
    </div>
  );
}
