import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Link from "next/link";
import { useRouter } from "next/router";

export default function DashboardTemplate() {
  const router = useRouter();
  return (
    <div>
      <div className="w-full h-full bg-white">
        <div className="flex items-start">
          <Sidebar value={1} />
          <div className="w-full flex-1">
            <div className="border-b border-grey/20 px-6 pt-6 lg:px-12 lg:pt-12">
              <h2 className="text-xl font-bold text-black mb-8">
                Dashboard Template
              </h2>
              <div className="grid grid-cols-1">
                <ul className="flex overflow-x-auto overflow-y-hidden mt-2 gap-4 text-light-grey text-base">
                  <li>
                    <a className="cursor-pointer px-2 py-3 whitespace-nowrap -mb-[1px] flex items-center font-semibold border-b-[3px] border-black text-black">
                      All Dashboard
                    </a>
                  </li>
                  <li>
                    <a className="cursor-pointer px-2 py-3 whitespace-nowrap -mb-[1px] flex items-center hover:border-b-[3px] border-transparent hover:!border-black hover:text-black">
                      CMS
                    </a>
                  </li>
                  <li>
                    <a className="cursor-pointer px-2 py-3 whitespace-nowrap -mb-[1px] flex items-center hover:border-b-[3px] border-transparent hover:!border-black hover:text-black">
                      Marketing
                    </a>
                  </li>
                  <li>
                    <a className="cursor-pointer px-2 py-3 whitespace-nowrap -mb-[1px] flex items-center hover:border-b-[3px] border-transparent hover:!border-black hover:text-black">
                      sales
                    </a>
                  </li>
                  <li>
                    <a className="cursor-pointer px-2 py-3 whitespace-nowrap -mb-[1px] flex items-center hover:border-b-[3px] border-transparent hover:!border-black hover:text-black">
                      Service
                    </a>
                  </li>
                  <li>
                    <a className="cursor-pointer px-2 py-3 whitespace-nowrap -mb-[1px] flex items-center hover:border-b-[3px] border-transparent hover:!border-black hover:text-black">
                      Target account
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="h-[calc(100vh-248px)] p-6 lg:px-12 lg:py-8 overflow-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
                <Link href="/builder/dashboard/playground">
                  <div className="border border-grey/20 rounded-md p-4 cursor-pointer hover:shadow-2xl transition-all duration-300">
                    <div className="w-full h-32 overflow-hidden mb-4 bg-soft flex items-center justify-center text-accent">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-plus"
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </div>
                    <h3 className="mb-1 font-semibold text-lg text-black">
                      Blank Dashboard
                    </h3>
                    <p>
                      Start with a blank Dashboard and add any reports you need.
                    </p>
                  </div>
                </Link>
                <Link href="playground">
                  <div className="border border-grey/20 rounded-md p-4 cursor-pointer hover:shadow-2xl transition-all duration-300">
                    <div className="w-full h-32 overflow-hidden mb-4 bg-soft flex items-center justify-center text-accent">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-plus"
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </div>
                    <h3 className="mb-1 font-semibold text-lg text-black">
                      Blank Dashboard
                    </h3>
                    <p>
                      Start with a blank Dashboard and add any reports you need.
                    </p>
                  </div>
                </Link>{" "}
                <Link href="playground">
                  <div className="border border-grey/20 rounded-md p-4 cursor-pointer hover:shadow-2xl transition-all duration-300">
                    <div className="w-full h-32 overflow-hidden mb-4 bg-soft flex items-center justify-center text-accent">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-plus"
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </div>
                    <h3 className="mb-1 font-semibold text-lg text-black">
                      Blank Dashboard
                    </h3>
                    <p>
                      Start with a blank Dashboard and add any reports you need.
                    </p>
                  </div>
                </Link>{" "}
                <Link href="playground">
                  <div className="border border-grey/20 rounded-md p-4 cursor-pointer hover:shadow-2xl transition-all duration-300">
                    <div className="w-full h-32 overflow-hidden mb-4 bg-soft flex items-center justify-center text-accent">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-plus"
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </div>
                    <h3 className="mb-1 font-semibold text-lg text-black">
                      Blank Dashboard
                    </h3>
                    <p>
                      Start with a blank Dashboard and add any reports you need.
                    </p>
                  </div>
                </Link>{" "}
                <Link href="playground">
                  <div className="border border-grey/20 rounded-md p-4 cursor-pointer hover:shadow-2xl transition-all duration-300">
                    <div className="w-full h-32 overflow-hidden mb-4 bg-soft flex items-center justify-center text-accent">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-plus"
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </div>
                    <h3 className="mb-1 font-semibold text-lg text-black">
                      Blank Dashboard
                    </h3>
                    <p>
                      Start with a blank Dashboard and add any reports you need.
                    </p>
                  </div>
                </Link>{" "}
                <Link href="playground">
                  <div className="border border-grey/20 rounded-md p-4 cursor-pointer hover:shadow-2xl transition-all duration-300">
                    <div className="w-full h-32 overflow-hidden mb-4 bg-soft flex items-center justify-center text-accent">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-plus"
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </div>
                    <h3 className="mb-1 font-semibold text-lg text-black">
                      Blank Dashboard
                    </h3>
                    <p>
                      Start with a blank Dashboard and add any reports you need.
                    </p>
                  </div>
                </Link>{" "}
                <Link href="playground">
                  <div className="border border-grey/20 rounded-md p-4 cursor-pointer hover:shadow-2xl transition-all duration-300">
                    <div className="w-full h-32 overflow-hidden mb-4 bg-soft flex items-center justify-center text-accent">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-plus"
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </div>
                    <h3 className="mb-1 font-semibold text-lg text-black">
                      Blank Dashboard
                    </h3>
                    <p>
                      Start with a blank Dashboard and add any reports you need.
                    </p>
                  </div>
                </Link>{" "}
                <Link href="playground">
                  <div className="border border-grey/20 rounded-md p-4 cursor-pointer hover:shadow-2xl transition-all duration-300">
                    <div className="w-full h-32 overflow-hidden mb-4 bg-soft flex items-center justify-center text-accent">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-plus"
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </div>
                    <h3 className="mb-1 font-semibold text-lg text-black">
                      Blank Dashboard
                    </h3>
                    <p>
                      Start with a blank Dashboard and add any reports you need.
                    </p>
                  </div>
                </Link>{" "}
                <Link href="playground">
                  <div className="border border-grey/20 rounded-md p-4 cursor-pointer hover:shadow-2xl transition-all duration-300">
                    <div className="w-full h-32 overflow-hidden mb-4 bg-soft flex items-center justify-center text-accent">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-plus"
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </div>
                    <h3 className="mb-1 font-semibold text-lg text-black">
                      Blank Dashboard
                    </h3>
                    <p>
                      Start with a blank Dashboard and add any reports you need.
                    </p>
                  </div>
                </Link>
                <Link href="playground">
                  <div className="border border-grey/20 rounded-md p-4 cursor-pointer hover:shadow-2xl transition-all duration-300">
                    <div className="w-full h-32 overflow-hidden mb-4 bg-soft flex items-center justify-center text-accent">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-plus"
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </div>
                    <h3 className="mb-1 font-semibold text-lg text-black">
                      Blank Dashboard
                    </h3>
                    <p>
                      Start with a blank Dashboard and add any reports you need.
                    </p>
                  </div>
                </Link>
                <Link href="/maindashboard">
                  <div className="border border-grey/20 rounded-md p-4 cursor-pointer hover:shadow-2xl transition-all duration-300">
                    <div className="w-full h-32 overflow-hidden mb-4 bg-soft flex items-center justify-center text-accent">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-plus"
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </div>
                    <h3 className="mb-1 font-semibold text-lg text-black">
                      Blank Dashboard
                    </h3>
                    <p>
                      Start with a blank Dashboard and add any reports you need.
                    </p>
                  </div>
                </Link>
                <Link href="/maindashboard">
                  <div className="border border-grey/20 rounded-md p-4 cursor-pointer hover:shadow-2xl transition-all duration-300">
                    <div className="w-full h-32 overflow-hidden mb-4 bg-soft flex items-center justify-center text-accent">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-plus"
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </div>
                    <h3 className="mb-1 font-semibold text-lg text-black">
                      Blank Dashboard
                    </h3>
                    <p>
                      Start with a blank Dashboard and add any reports you need.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="border-t border-grey/20 py-5 px-12 flex items-center justify-start gap-2 fixed bottom-0 bg-white w-full">
              <Link
                className="header-brand btn-gray"
                href="/builder/dashboard/create"
              >
                Previous
              </Link>
              <button
                onClick={() => router.push("/builder")}
                type="button"
                className="btn-white"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
