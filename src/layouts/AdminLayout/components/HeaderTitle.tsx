/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { titleState } from "@/atoms/title";

import React, { createContext, useContext, useState } from "react";
import { useRecoilState } from "recoil";
import { GlobalContext } from "..";

export default function HeaderTitle() {
  const ctx = useContext(GlobalContext);

  return (
    <>
      <div className={`flex items-center ml-8  w-full justify-start`}>
        <p
          className={`  capitalize text-white text-[20px] font-semibold tracking-wide  `}
        >
          {ctx.title}
        </p>
      </div>
    </>
  );
}
