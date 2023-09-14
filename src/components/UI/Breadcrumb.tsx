import Link from "next/link";
import React from "react";

export default function Breadcrumb({ title, subTitle }: any) {
  return (
    <nav
      className="relative py-3 shadow-md  bg-gray-100 dark:bg-[#141414] border-[1px] dark:border-[#383738]  border-gray-200 rounded-md flex w-full flex-wrap items-center justify-between lg:flex-wrap lg:justify-start"
      data-te-navbar-ref
    >
      <div className="flex w-full flex-wrap items-center justify-between px-6">
        <nav
          className="bg-grey-light w-full rounded-md"
          aria-label="breadcrumb"
        >
          <ol className="list-reset flex">
            <li>
              <Link
                href="/admin"
                className="font-merriweather mr-2 text-gray-800  dark:text-white hover:text-blue-gray-900 dark:hover:text-blue-gray-900"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <span className="font-merriweather mx-2 text-gray-800 dark:text-white hover:text-blue-gray-900 dark:hover:text-blue-gray-900">
                /
              </span>
            </li>
            <li>
              <a
                href="#"
                className="font-merriweather mx-2 text-gray-800 dark:text-white hover:text-blue-gray-900 dark:hover:text-blue-gray-900"
              >
                {title}
              </a>
            </li>
            {subTitle ? (
              <>
                <li>
                  <span className="font-merriweather mx-2 text-gray-800 dark:text-white hover:text-blue-gray-900 dark:hover:text-blue-gray-900">
                    /
                  </span>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-merriweather mx-2 text-gray-800 dark:text-white hover:text-blue-gray-900 dark:hover:text-blue-gray-900"
                  >
                    Data
                  </a>
                </li>
              </>
            ) : null}
          </ol>
        </nav>
      </div>
    </nav>
  );
}
