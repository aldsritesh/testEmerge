import Link from "next/link";
import React from "react";


export default function Sidebar(props) {

  return (
   
      <div className="w-64 lg:w-[20rem] flex-none bg-soft border-r border-light-grey/20 h-full ">
        <div className="border-b border-light-grey/20">
          <div className="p-5 flex items-center gap-3">
            <Link
            href="/"
              type="button"
              className="h-6 w-6 rounded-full bg-white shadow flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-chevron-left"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </Link>
            <p>Back to Manage Dashboard</p>
          </div>
          <h1 className="text-2xl font-bold px-5 pb-5">Create Dashboard</h1>
        </div>
        <ol className="relative  ml-10 mt-5"> 
          <li className=" ml-8">
            <div className={`${props.value>=1 ? 'absolute w-8 h-8 flex items-center justify-center text-grey text-base bg-[#62BE54] rounded-full mt-0 -left-4 border border-grey/20' : 'absolute w-8 h-8 flex ring-1 ring-accent items-center justify-center text-white text-base bg-accent rounded-full mt-0 -left-4 border-[3px] border-whit'}`}>
            {
                props.value >=1 ? <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFF"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-check"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>:1
            } 
            </div>
            <h2 className="mb-1 py-2 text-base font-normal leading-none text-grey">
            Dashboard Information
            </h2>
          </li>
          <li className={`w-[2px] h-[50px] ${props.value>=1 ? 'bg-[#4866D4]':'bg-[#d4d4d8]'}`}></li>

          <li className="mt-1 ml-8">
            <div className={`${props.value>=1 ? 'absolute w-8 h-8 flex ring-1 ring-accent items-center justify-center text-white text-base bg-accent rounded-full mt-0 -left-4 border-[3px] border-whi' : 'absolute w-8 h-8 flex items-center justify-center text-grey text-base bg-white rounded-full mt-0 -left-4 border border-grey/20'}`}>
              2
            </div>
            <h2 className="mb-1 py-2 text-base font-normal leading-none text-black">
            Select Template
            </h2>
          </li>
        </ol> 
      </div>

  );
}
