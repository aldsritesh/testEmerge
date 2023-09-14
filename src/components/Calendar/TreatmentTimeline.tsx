import { PlusCircleIcon } from "@heroicons/react/24/outline";
import moment from "moment";
import React from "react";
import { CalendarDaysIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import {
  BookOpenIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  ClipboardDocumentIcon,
  ClipboardIcon,
  EllipsisHorizontalIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
export default function TreatmentTimeline() {
  return (
    <div className=" px-6 py-6  ">
      <div className="bg-white py-4 px-4 ">
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center bg-gray-100 px-4 py-2">
            <ChevronUpIcon className="h-4 w-4 text-FontGray" />
            <p className="text-FontGray text-xs ml-2 font-medium">
              {" "}
              Scroll to see upcoming appointments
            </p>
          </div>
        </div>
        <div>
          <ol className="relative   ml-3   ">
            <div className=" top-6 absolute bg-newBlue ml-3  h-[90vh] md:h-[55vh] lg:h-[75vh] 2xl:h-[50vh] w-[3px] left-[-4%] lg:left-[-1.3%] md:left-[-2%] 2xl:left-[-1.2%]   "></div>
            <li className="mb-10 ml-10 ">
              <div className="top-4 bg-white absolute w-3.5 h-3.5 bg-darkgray  rounded-full   left-[-4px] lg:left-[-2px] 2xl:-left-1  z-10 border-2 border-newBlue  "></div>

              <div className="mt-5 flex flex-wrap justify-between items-center   ">
                <div className="flex items-center flex-wrap ">
                  <div>
                    <h4 className="font-medium text-xl pt-2 text-dark pb-1 tracking-wide">
                      29 Nov &apos;19
                    </h4>
                    <p className="text-xs text-FontGray font-normal">
                      14:00 - 15:00
                    </p>
                  </div>
                </div>

                <div className="flex items-center flex-wrap mt-2 border-l border-r border-lightGray px-6">
                  <div>
                    <p className="text-xs text-FontGray font-normal pb-0">
                      Treatment
                    </p>
                    <p className="font-medium text-base text-gray-600  tracking-wide">
                      Consultation
                    </p>
                  </div>
                </div>

                <div className="flex items-center flex-wrap mt-2">
                  <div>
                    <p className="text-xs text-FontGray font-normal pb-0">
                      Dentist
                    </p>
                    <p className="font-medium text-xs text-gray-600  tracking-wide">
                      Drg.Adam.H
                    </p>
                  </div>
                </div>
                <div className="flex items-center flex-wrap mt-2">
                  <div>
                    <p className="text-xs text-FontGray font-normal pb-0">
                      Nurse
                    </p>
                    <p className="font-medium text-xs text-gray-600  tracking-wide">
                      Jessicamila
                    </p>
                  </div>
                </div>
                <div className="flex items-center flex-wrap mt-2">
                  <ClipboardDocumentIcon className="h-5 w-5 text-newBlue" />
                  <p className="font-medium text-sm text-newBlue tracking-wide ml-2">
                    Notes
                  </p>
                </div>
              </div>
            </li>

            <li className="mb-10 ml-10  ">
              <div className="mt-3 bg-white absolute w-3.5 h-3.5 bg-darkgray  rounded-full   left-[-4px] lg:left-[-2px] 2xl:-left-1  z-10 border-2 border-newBlue  "></div>

              <div className="mt-5 flex flex-wrap justify-between items-center   ">
                <div className="flex items-center flex-wrap ">
                  <div>
                    <h4 className="font-medium text-xl pt-2 text-dark pb-1 tracking-wide">
                      29 Nov &apos;19
                    </h4>
                    <p className="text-xs text-FontGray font-normal">
                      14:00 - 15:00
                    </p>
                  </div>
                </div>

                <div className="flex items-center flex-wrap mt-2 border-l border-r border-lightGray px-6">
                  <div>
                    <p className="text-xs text-FontGray font-normal pb-0">
                      Treatment
                    </p>
                    <p className="font-medium text-base text-gray-600  tracking-wide">
                      Consultation
                    </p>
                  </div>
                </div>

                <div className="flex items-center flex-wrap mt-2">
                  <div>
                    <p className="text-xs text-FontGray font-normal pb-0">
                      Dentist
                    </p>
                    <p className="font-medium text-xs text-gray-600  tracking-wide">
                      Drg.Adam.H
                    </p>
                  </div>
                </div>
                <div className="flex items-center flex-wrap mt-2">
                  <div>
                    <p className="text-xs text-FontGray font-normal pb-0">
                      Nurse
                    </p>
                    <p className="font-medium text-xs text-gray-600  tracking-wide">
                      Jessicamila
                    </p>
                  </div>
                </div>
                <div className="flex items-center flex-wrap mt-2">
                  <ClipboardDocumentIcon className="h-5 w-5 text-newBlue" />
                  <p className="font-medium text-sm text-newBlue tracking-wide ml-2">
                    Notes
                  </p>
                </div>
              </div>
            </li>

            <li className="mb-10 ml-10  ">
              <div className="mt-3 bg-white absolute w-3.5 h-3.5 bg-darkgray  rounded-full   left-[-4px] lg:left-[-2px] 2xl:-left-1  z-10 border-2 border-newBlue  "></div>

              <div className="mt-5 flex flex-wrap justify-between items-center   ">
                <div className="flex items-center flex-wrap ">
                  <div>
                    <h4 className="font-medium text-xl pt-2 text-dark pb-1 tracking-wide">
                      29 Nov &apos;19
                    </h4>
                    <p className="text-xs text-FontGray font-normal">
                      14:00 - 15:00
                    </p>
                  </div>
                </div>

                <div className="flex items-center flex-wrap mt-2 border-l border-r border-lightGray px-6">
                  <div>
                    <p className="text-xs text-FontGray font-normal pb-0">
                      Treatment
                    </p>
                    <p className="font-medium text-base text-gray-600  tracking-wide">
                      Consultation
                    </p>
                  </div>
                </div>

                <div className="flex items-center flex-wrap mt-2">
                  <div>
                    <p className="text-xs text-FontGray font-normal pb-0">
                      Dentist
                    </p>
                    <p className="font-medium text-xs text-gray-600  tracking-wide">
                      Drg.Adam.H
                    </p>
                  </div>
                </div>
                <div className="flex items-center flex-wrap mt-2">
                  <div>
                    <p className="text-xs text-FontGray font-normal pb-0">
                      Nurse
                    </p>
                    <p className="font-medium text-xs text-gray-600  tracking-wide">
                      Jessicamila
                    </p>
                  </div>
                </div>
                <div className="flex items-center flex-wrap mt-2">
                  <ClipboardDocumentIcon className="h-5 w-5 text-newBlue" />
                  <p className="font-medium text-sm text-newBlue tracking-wide ml-2">
                    Notes
                  </p>
                </div>
              </div>
            </li>

            <li className="mb-10 ml-10  ">
              <div className="mt-3 bg-white absolute w-3.5 h-3.5 bg-darkgray  rounded-full   left-[-4px] lg:left-[-2px] 2xl:-left-1  z-10 border-2 border-newBlue  "></div>

              <div className="mt-5 flex flex-wrap justify-between items-center   ">
                <div className="flex items-center flex-wrap ">
                  <div>
                    <h4 className="font-medium text-xl pt-2 text-dark pb-1 tracking-wide">
                      29 Nov &apos;19
                    </h4>
                    <p className="text-xs text-FontGray font-normal">
                      14:00 - 15:00
                    </p>
                  </div>
                </div>

                <div className="flex items-center flex-wrap mt-2 border-l border-r border-lightGray px-6">
                  <div>
                    <p className="text-xs text-FontGray font-normal pb-0">
                      Treatment
                    </p>
                    <p className="font-medium text-base text-gray-600  tracking-wide">
                      Consultation
                    </p>
                  </div>
                </div>

                <div className="flex items-center flex-wrap mt-2">
                  <div>
                    <p className="text-xs text-FontGray font-normal pb-0">
                      Dentist
                    </p>
                    <p className="font-medium text-xs text-gray-600  tracking-wide">
                      Drg.Adam.H
                    </p>
                  </div>
                </div>
                <div className="flex items-center flex-wrap mt-2">
                  <div>
                    <p className="text-xs text-FontGray font-normal pb-0">
                      Nurse
                    </p>
                    <p className="font-medium text-xs text-gray-600  tracking-wide">
                      Jessicamila
                    </p>
                  </div>
                </div>
                <div className="flex items-center flex-wrap mt-2">
                  <ClipboardDocumentIcon className="h-5 w-5 text-newBlue" />
                  <p className="font-medium text-sm text-newBlue tracking-wide ml-2">
                    Notes
                  </p>
                </div>
              </div>
            </li>

            <li className="mb-10 ml-10  ">
              <div className="mt-3 bg-white absolute w-3.5 h-3.5 bg-darkgray  rounded-full   left-[-4px] lg:left-[-2px] 2xl:-left-1  z-10 border-2 border-newBlue  "></div>

              <div className="mt-5 flex flex-wrap justify-between items-center   ">
                <div className="flex items-center flex-wrap ">
                  <div>
                    <h4 className="font-medium text-xl pt-2 text-dark pb-1 tracking-wide">
                      29 Nov &apos;19
                    </h4>
                    <p className="text-xs text-FontGray font-normal">
                      14:00 - 15:00
                    </p>
                  </div>
                </div>

                <div className="flex items-center flex-wrap mt-2 border-l border-r border-lightGray px-6">
                  <div>
                    <p className="text-xs text-FontGray font-normal pb-0">
                      Treatment
                    </p>
                    <p className="font-medium text-base text-gray-600  tracking-wide">
                      Consultation
                    </p>
                  </div>
                </div>

                <div className="flex items-center flex-wrap mt-2">
                  <div>
                    <p className="text-xs text-FontGray font-normal pb-0">
                      Dentist
                    </p>
                    <p className="font-medium text-xs text-gray-600  tracking-wide">
                      Drg.Adam.H
                    </p>
                  </div>
                </div>
                <div className="flex items-center flex-wrap mt-2">
                  <div>
                    <p className="text-xs text-FontGray font-normal pb-0">
                      Nurse
                    </p>
                    <p className="font-medium text-xs text-gray-600  tracking-wide">
                      Jessicamila
                    </p>
                  </div>
                </div>
                <div className="flex items-center flex-wrap mt-2">
                  <ClipboardDocumentIcon className="h-5 w-5 text-newBlue" />
                  <p className="font-medium text-sm text-newBlue tracking-wide ml-2">
                    Notes
                  </p>
                </div>
              </div>
            </li>

            <li className="mb-10 ml-10  ">
              <div className="mt-3 bg-white absolute w-3.5 h-3.5 bg-darkgray  rounded-full   left-[-4px] lg:left-[-2px] 2xl:-left-1  z-10 border-2 border-newBlue  "></div>

              <div className="mt-5 flex flex-wrap justify-between items-center   ">
                <div className="flex items-center flex-wrap ">
                  <div>
                    <h4 className="font-medium text-xl pt-2 text-dark pb-1 tracking-wide">
                      29 Nov &apos;19
                    </h4>
                    <p className="text-xs text-FontGray font-normal">
                      14:00 - 15:00
                    </p>
                  </div>
                </div>

                <div className="flex items-center flex-wrap mt-2 border-l border-r border-lightGray px-6">
                  <div>
                    <p className="text-xs text-FontGray font-normal pb-0">
                      Treatment
                    </p>
                    <p className="font-medium text-base text-gray-600  tracking-wide">
                      Consultation
                    </p>
                  </div>
                </div>

                <div className="flex items-center flex-wrap mt-2">
                  <div>
                    <p className="text-xs text-FontGray font-normal pb-0">
                      Dentist
                    </p>
                    <p className="font-medium text-xs text-gray-600  tracking-wide">
                      Drg.Adam.H
                    </p>
                  </div>
                </div>
                <div className="flex items-center flex-wrap mt-2">
                  <div>
                    <p className="text-xs text-FontGray font-normal pb-0">
                      Nurse
                    </p>
                    <p className="font-medium text-xs text-gray-600  tracking-wide">
                      Jessicamila
                    </p>
                  </div>
                </div>
                <div className="flex items-center flex-wrap mt-2">
                  <ClipboardDocumentIcon className="h-5 w-5 text-newBlue" />
                  <p className="font-medium text-sm text-newBlue tracking-wide ml-2">
                    Notes
                  </p>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
