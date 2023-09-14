import { TeamMemberContext } from "@/pages/settings/team-member";
import React, { createContext, useContext, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import UserInfo from "./UserInfo";
import UserRoles from "./UserRole";
import VoiceMailSettings from "./VoiceMailSettings";
import EditUserAvailability from "./EditUserAvailability";
import UserPermissions from "./UserPermissions";
import { baseUrl } from "@/config/APIConstants";
import axios from "axios";
import { useEffect } from "react";
import { useAuthentication } from "@/controllers/auth";

export const formDataCtx = createContext({
  formDataValues: {},
  setFormDataValues: (item: any) => {},
});

export default function AddProfile() {
  const { editProfile, setEditProfile } = useContext(TeamMemberContext);
  const { location, token }: any = useAuthentication();
  const { addProfile, setAddProfile } = useContext(TeamMemberContext);
  const { update, setUpdate } = useContext(TeamMemberContext);
  const [imageUrl, setImageUrl] = useState<any>("");
  const [formDataValues, setFormDataValues] = useState<any>({
    appointments: true,
    dashboardStats: true,
    campaigns: true,
    bulkRequests: true,
    triggers: true,
    funnels: true,
    opportunities: true,
    conversations: true,
    contacts: true,
    reviews: true,
    onlineListings: true,
    membership: true,
    settings: true,
    assignedDataOnly: true,
    tags: true,
    leadValue: true,
    marketing: true,
    websites: true,
    adwordsReporting: true,
    facebookAdsReporting: true,
    callReporting: true,
    attributionReporting: true,
    agentReporting: true,
    socialPlanner: true,
    workflows: true,
    blogging: true,
    payments: true,
    invoicing: true,
    recordPayments: true,
    paymentRefund: true,
    cancelSubscription: true,
    affiliateManager: true,
    campaignsReadOnly: true,
    workflowsReadOnly: true,
  });

  const value: any = {
    formDataValues,
    setFormDataValues,
  };

  console.log("values", formDataValues);

  useEffect(() => {
    if (formDataValues.profileImage) {
      getBase64(formDataValues.profileImage);
    }
  }, [formDataValues.profileImage]);

  function getBase64(file: any) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      const base64Data = reader.result; // Get the base64 data
      setImageUrl(base64Data);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  }

  const handleStore = async () => {
    const values = {
      emailAddress: formDataValues.emailAddress,
      password: formDataValues.password,
      phoneExt: formDataValues.phoneExt,
      phoneNumber: formDataValues.phoneNumber,
      profileImage: imageUrl,
      agentReporting: formDataValues.agentReporting,
      appointments: formDataValues.appointments,
      assignedDataOnly: formDataValues.assignedDataOnly,
      attributionReporting: formDataValues.attributionReporting,
      blogging: formDataValues.blogging,
      bulkRequests: formDataValues.bulkRequests,
      callReporting: formDataValues.callReporting,
      campaigns: formDataValues.campaigns,
      campaignsReadOnly: formDataValues.campaignsReadOnly,
      contacts: formDataValues.contacts,
      conversations: formDataValues.conversations,
      dashboardStats: formDataValues.dashboardStats,
      facebookAdsReporting: formDataValues.facebookAdsReporting,
      fullName: formDataValues?.firstName + formDataValues?.lastName,
      funnels: formDataValues.funnels,
      leadValue: formDataValues.leadValue,
      marketing: formDataValues.marketing,
      membership: formDataValues.membership,
      onlineListings: formDataValues.onlineListings,
      opportunities: formDataValues.opportunities,
      reviews: formDataValues.reviews,
      settings: formDataValues.settings,
      socialPlanner: formDataValues.socialPlanner,
      tags: formDataValues.tags,
      triggers: formDataValues.triggers,
      userRole: formDataValues.userRole,
      userType: formDataValues.userType,
      websites: formDataValues.websites,
      workflows: formDataValues.workflows,
      workflowsReadOnly: formDataValues.workflowsReadOnly,
    };

    const response = await axios.post(`${baseUrl}users`, values, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUpdate(!update);
    console.log("response", response);
  };

  const innerTabs = [
    {
      id: "tab1",
      label: "User Info",
      content: <UserInfo handleNext={() => setActiveInnerTab("tab2")} />,
    },
    {
      id: "tab2",
      label: "User Permission",
      content: <UserPermissions handleNext={() => setActiveInnerTab("tab3")} />,
    },
    {
      id: "tab3",
      label: "User Roles",
      content: <UserRoles handleNext={() => setActiveInnerTab("tab4")} />,
    },
    {
      id: "tab4",
      label: "Call and Voicemail Settings",
      content: (
        <VoiceMailSettings handleNext={() => setActiveInnerTab("tab5")} />
      ),
    },
    {
      id: "tab5",
      label: "User Availability",
      content: (
        <EditUserAvailability
          onClose={() => setAddProfile(false)}
          handleStore={handleStore}
        />
      ),
    },
  ];
  const [activeInnerTab, setActiveInnerTab] = useState(innerTabs[0].id);

  return (
    <div>
      <formDataCtx.Provider value={value}>
        <div className=" h-[85vh] pb-[5%] rounded-lg  bg-white overflow-y-hidden w-full scrollbar-hide ">
          <div className="  h-[100vh] pt-5 pb-3 w-screen md:w-[100vh]">
            <div className="h-[6vh] flex justify-between items-center  pb-4 px-5">
              <p className="text-gray-800 font-medium md:text-lg ">
                Team Management
              </p>
              <button
                onClick={() => {
                  setEditProfile(false);
                  setAddProfile(false);
                }}
              >
                <AiOutlineClose className="text-gray-800 h-6 w-6" />
              </button>
            </div>
            <div className="overflow-hidden ">
              <ul className="h-[7vh]  lg:px-2 border-b-[1px] border-[#dfdfdf] pt-2 flex justify-start items-center overflow-auto scrollbar-hide gap-4 bg-white  ">
                {innerTabs.map((tab: any) => (
                  <li key={tab.id}>
                    <button
                      className={`px-3 lg:px-1 transition-all duration-300 font-medium text-xs   ${
                        activeInnerTab === tab.id
                          ? "border-b-[1px] border-newBlue text-newBlue pb-4 font-semibold md:text-[13px]"
                          : "text-gray-600 pb-4 font-semibold md:text-[13px]"
                      }`}
                      onClick={() => setActiveInnerTab(tab.id)}
                    >
                      {tab.label}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="  bg-white h-[70vh] overflow-y-scroll scrollbar-hide">
                {innerTabs.map((tab: any) => (
                  <div
                    key={tab.id}
                    className={`  transition-all duration-300 rounded-md  ${
                      activeInnerTab === tab.id ? "block" : " text-black hidden"
                    } `}
                  >
                    {tab.content}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </formDataCtx.Provider>
    </div>
  );
}
