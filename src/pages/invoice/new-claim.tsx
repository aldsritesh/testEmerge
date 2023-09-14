import Insurance from "@/components/invoice/NewClaim/Insurance";
import PatientClaimInfo from "@/components/invoice/NewClaim/PatientClaimInfo";
import PatientCondition from "@/components/invoice/NewClaim/PatientCondition";
import PatientOtherDetails from "@/components/invoice/NewClaim/PatientOtherDetails";
import ReferPhysicianData from "@/components/invoice/NewClaim/ReferingPhysician";
import React from "react";

const NewClaim = () => {
  return (
    <div>
      <div className="w-full   bg-white h-[100vh] scrollbar-hide  overflow-y-scroll pb-20">
        <div className="w-full bg-white  py-4">
          <div className="  border-b flex items-center justify-between  px-4 pb-3">
            <p className="text-[#47494b] text-lg font-semibold">Claim Info</p>
          </div>

          <div className="flex flex-wrap">
            <div className="w-1/2 pl-4 pr-2">
              <PatientClaimInfo />
              <Insurance />
            </div>
            <div className="w-1/2 pl-2 pr-4">
              <PatientCondition />
              <ReferPhysicianData />
              <PatientOtherDetails />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewClaim;
