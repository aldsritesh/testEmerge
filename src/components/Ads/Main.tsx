import { useEffect, useState } from "react";
import AdDetails from "./steps/AdDetails";
import AudienceDetails from "./steps/AudienceDetails";
import Budgeting from "./steps/Budgeting";

export default function Main() {
  const [step, setStep] = useState(1);

  const handleAdDetailsSubmit = () => {
    setStep(2);
  };

  const handleAudienceSubmit = () => {
    setStep(3);
  };

  return (
    <div className="h-full">
      <div className="mb-5">
        <div className="flex justify-between">
          <h3 className="text-gray-800 font-medium text-sm">
            Create Post Engagement
          </h3>
          <p
            className={`${
              step == 1 ? "text-[#f87272]" : "text-gray-800"
            }  font-medium text-sm`}
          >
            Steps {step}/3
          </p>
          <h3
            className={`${
              step == 2 ? "text-[#f87272]" : "text-gray-800"
            }  font-medium text-sm`}
          >
            Ad Details
          </h3>
        </div>
        <progress
          className="progress progress-error w-full"
          value={step}
          max="3"
        ></progress>
      </div>

      <div className="overflow-y-scroll h-[90%] scrollbar-hide pt-2">
        {step === 1 && <AdDetails onSubmit={handleAdDetailsSubmit} />}
        {step === 2 && (
          <AudienceDetails
            onSubmit={handleAudienceSubmit}
            goBack={(e: number) => setStep(e)}
          />
        )}

        {step === 3 && (
          <Budgeting
            onSubmit={handleAudienceSubmit}
            goBack={(e: number) => setStep(e)}
          />
        )}
      </div>
    </div>
  );
}
