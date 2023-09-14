/* eslint-disable react-hooks/exhaustive-deps */
import { dashboardDataState } from "@/atoms/dashboardData";
import { DashboardbuilderContext } from "@/pages/builder/GridDrag";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRecoilState } from "recoil";

export default function DashboardBuilderHeader({
  onButtonClick,
  onSavePublicClick,
}: any) {
  const handleSaveDraftClick = () => {
    onButtonClick();
  };
  const router = useRouter();

  const [dashboardData, setDashboardData] =
    useRecoilState<any>(dashboardDataState);


  // Local state to hold the dashboardName for editing in the input field
  const [localDashboardName, setLocalDashboardName] = useState<any>({});

  // Initialize localDashboardName with router.query.name when the component mounts
  useEffect(() => {
    if (router.query.name) {
      setLocalDashboardName(router.query.name);
      setDashboardData((prevValues: any) => ({
        ...prevValues,
        dashboardName: router.query.name,
      }));
    } else {
      setLocalDashboardName(dashboardData.dashboardName);
    }
  }, [router.query.name]);

  // Event handler for changing localDashboardName
  const handleLocalDashboardNameChange = (e: any) => {
    setLocalDashboardName(e.target.value);
    setDashboardData((prevValues: any) => ({
      ...prevValues,
      dashboardName: e.target.value,
    }));
  };

  // Update Recoil state with localDashboardName when Save & Publish button is clicked
  const handleSavePublishClick = () => {
    onSavePublicClick();
  };


  return (
    <div className="p-4 bg-[#263238] flex items-center justify-between">
      <Link
        href="/builder/dashboard/template"
        className="flex items-center gap-1 text-white/80 text-xs"
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
        <p className="hidden md:block">Back to Dashboard Manager</p>
      </Link>
      <input
        type="text"
        id=""
        name="room"
        value={localDashboardName == undefined ? "Enter Dashboard Name" : localDashboardName}
        onChange={(e) => handleLocalDashboardNameChange(e)}
        placeholder="Enter Room Name"
        className="text-center bg-[#263238] mr-5 pr-5  font-semibold text-lg hidden sm:block text-white w-[25vw] border-transparent focus:border-transparent focus:outline-none "
      />
      <div className="flex items-center justify-end gap-3">
        <p className="text-white/80 text-xs hidden lg:block">
          Last Saved: Today at 4:30PM
        </p>
        {
          <button
            onClick={handleSaveDraftClick}
            type="button"
            className="btn-gray bg-transparent border border-grey/50 px-4 text-sm py-2 hover:bg-grey hover:text-white hover:border-grey text-white"
          >
            Save as Draft
          </button>
        }
        {/* {!save && ( */}
        <button
          onClick={handleSavePublishClick}
          className="btn-gray bg-orange-600 border border-orange-600 hover:bg-transparent px-4 py-2 text-sm text-white rounded-lg"
        >
          Save & Publish
        </button>
      </div>
    </div>
  );
}
