import TabLeads from "@/components/Leads/TabLeads";
import { GlobalContext } from "@/layouts/GlobalLayout";
import axios from "axios";
import Image from "next/image";
import { MouseEventHandler, useContext, useEffect, useState } from "react";
import { baseUrl } from "@/config/APIConstants";
import { IPipelineBasic } from "@/components/Leads/Interfaces";
import { useAuthentication } from "@/controllers/auth";

export default function AppointmentDetails() {
  const [innerTabs, setInnerTabs] = useState<any>([]);
  const { location, token }: any = useAuthentication();

  useEffect(() => {
    axios
      .get(`${baseUrl}pipelines/location/${location?.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setInnerTabs(
          res.data.pipelines.map((pipeline: IPipelineBasic) => {
            return {
              id: pipeline.id,
              label: pipeline.name,
            };
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (innerTabs.length > 0) {
      setActiveInnerTab(innerTabs[0].id);
    }
  }, [innerTabs]);

  const ctx = useContext(GlobalContext);
  ctx.setTitle("Pipelines");
  const [activeInnerTab, setActiveInnerTab] = useState("");

  return (
    <div>
      <div className="overflow-hidden ">
        <ul className="lg:px-5 border-b-[1px] border-[#dfdfdf] pt-4 flex justify-start items-center overflow-auto scrollbar-hide gap-6 bg-white  ">
          {innerTabs.map((tab: any) => (
            <li key={tab.id}>
              <button
                className={`px-3 lg:px-2 transition-all font-semibold text-xs md:text-base ${
                  activeInnerTab === tab.id
                    ? "border-b-[4px] border-secondary text-secondary pb-3 mt-0.5"
                    : "text-gray-500 pb-3"
                }`}
                onClick={() => setActiveInnerTab(tab.id)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="  bg-white w-full  overflow-hidden">
          <div className={`shadow-md transition-all rounded-md block`}>
            <TabLeads pipelineID={activeInnerTab} />
          </div>
        </div>
      </div>
    </div>
  );
}
