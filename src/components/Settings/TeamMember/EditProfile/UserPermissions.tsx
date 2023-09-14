import React, { useContext, useState } from "react";
import { BsQuestionCircleFill } from "react-icons/bs";
import { MenuItem, Select } from "@mui/material";
import { formDataCtx } from "./AddProfile";
import { E } from "@fullcalendar/resource/internal-common";

export default function UserPermissions({ handleNext }: any) {
  const [permissionData, setPermissionData] = useState([
    { id: 1, name: "dashboardStats" },
    { id: 2, name: "appointments" },
    { id: 3, name: "campaigns" },
    { id: 4, name: "bulkRequests" },
    { id: 5, name: "triggers" },
    { id: 6, name: "funnels" },
    { id: 7, name: "opportunities" },
    { id: 8, name: "conversations" },
    { id: 9, name: "contacts" },
    { id: 10, name: "reviews" },
    { id: 11, name: "onlineListings" },
    { id: 12, name: "membership" },
    { id: 13, name: "settings" },
    { id: 14, name: "assignedDataOnly" },
    { id: 15, name: "tags" },
    { id: 16, name: "leadValue" },
    { id: 17, name: "marketing" },
    { id: 18, name: "websites" },
    { id: 19, name: "adwordsReporting" },
    { id: 20, name: "facebookAdsReporting" },
    { id: 21, name: "callReporting" },
    { id: 22, name: "attributionReporting" },
    { id: 23, name: "agentReporting" },
    { id: 24, name: "socialPlanner" },
    { id: 25, name: "workflows" },
    { id: 26, name: "blogging" },
    { id: 27, name: "payments" },
    { id: 28, name: "invoicing" },
    { id: 29, name: "recordPayments" },
    { id: 30, name: "paymentRefund" },
    { id: 31, name: "cancelSubscription" },
    { id: 32, name: "affiliateManager" },
  ]);
  const [formValues, setFormValues] = useState<any>({
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

  const { formDataValues, setFormDataValues } = useContext(formDataCtx);
  const [selectedItems, setSelectedItems] = useState<any>([]);
  const toggleItem = (itemId: any) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id: any) => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  const handleChange = (e: any) => {
    const { name, checked } = e.target;
    setFormValues((prev: any) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: any) => {
    const { name, value } = e.target;
    e.preventDefault();
    setFormDataValues((prev: any) => ({ ...prev, ...formValues }));

    setFormValues({
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
    handleNext();
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="  bg-white h-[60vh] overflow-y-scroll scrollbar-hide px-4">
        <ul className="flex justify-between items-center flex-wrap pt-5">
          {permissionData.map((item: any, index: number) => (
            <li
              key={index}
              className="flex justify-start  w-1/2 mb-5 rounded-lg"
            >
              <p
                className={`w-[40%] capitalize text-gray-600 text-xs font-semibold tracking-wide ml-2`}
              >
                {item.name}
              </p>
              <div>
                <input
                  type="checkbox"
                  name={item.name}
                  onClick={() => toggleItem(item.id)}
                  // onChange={handleChange}
                  className={`toggle  toggle-md toggle-info ${
                    selectedItems.includes(item.id) ? "selected" : "selected"
                  }`}
                  checked
                  // disabled={true}
                />
                {/* {formValues.campaigns == true ||
                formValues.workflows == true ? (
                  <div className="flex justify-start items-center rounded-lg mt-1">
                    <input
                      type="checkbox"
                      name={
                        item.name == "campaigns"
                          ? "campaignRead"
                          : item?.name == "workflows"
                          ? "workflowRead"
                          : ""
                      }
                      onChange={handleChange}
                      className="checkbox checkbox-sm checked:checkbox-info"
                    />

                    <p
                      className={` fontStrawFord text-gray-600 text-xs font-medium tracking-wide ml-2`}
                    >
                      Read Only
                    </p>
                  </div>
                ) : null} */}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-[10vh] flex justify-between items-center border-t-[1px] pb-4 mt-1.5 px-5">
        <button className="border-[1px] rounded-md px-5 py-2 border-gray-300 text-[12px] font-medium">
          Cancel
        </button>

        <button
          onSubmit={handleSubmit}
          className="text-white bg-newBlue rounded-md px-5 py-2  text-[12px] font-medium"
        >
          Save
        </button>
      </div>
    </form>
  );
}
