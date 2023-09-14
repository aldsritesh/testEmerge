import { MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
export default function WorkFlowActive({
  updateData,
  onClose,
  actionData,
}: any) {
  const radioData = [
    { title: "Is", value: "is" },
    { title: "Is Not", value: "isNot" },
  ];

  const [formValues, setFormValues] = useState<any>({
    waitFor: "",
    isLastActivityType: "",
    isNotLastActivityType: "",
  });
  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormValues((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setFormValues({
      waitFor: "",
      isLastActivityType: "",
      isNotLastActivityType: "",
    });
    setErrors({});
    updateData(formValues);
    onClose();
  };

  return (
    <div>
      <div className="h-[75vh] 2xl:h-[75vh] overflow-y-scroll scrollbar-hide">
        <form onSubmit={handleSubmit} className="flex flex-wrap px-2  ">
          <div className="w-full mt-4">
            <p className="w-full mb-2 text-sm text-gray-600 font-semibold fontStrawFord">
              Filter Last Activity Type
            </p>

            <ul className="pt-2 ">
              {radioData?.map((mainData: any, mainIndex: any) => (
                <li className="mb-1" key={mainIndex}>
                  <div className="flex justify-start items-center py-2">
                    <input
                      type="radio"
                      name="waitFor"
                      className="radio checked:bg-blue-500"
                      onChange={() =>
                        setFormValues((prevValues: any) => ({
                          ...prevValues,
                          waitFor: mainData?.value,
                        }))
                      }
                    />
                    <p
                      className={`w-full  text-sm text-gray-600 font-semibold fontStrawFord ml-2 mt-1 `}
                    >
                      {mainData?.title}
                    </p>
                  </div>
                  {/* {formValues.waitFor == "is" && mainData.value == "is" && (
                    <p>Is</p>
                  )}

                  {formValues.waitFor == "isNot" &&
                    mainData.value == "isNot" && <p>isNot</p>} */}
                  {formValues.waitFor === "is" ? (
                    <>
                      {mainData?.title == "Is" && (
                        <Select
                          name="isLastActivityType"
                          onChange={handleChange}
                          className="border-none outline-none rounded-lg mt-2 mb-2  text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark   text-space focus:outline-none focus:border-gray-300 text-black"
                        >
                          <MenuItem value="24HR Removal">
                            {" "}
                            24HR Removal{" "}
                          </MenuItem>
                          <MenuItem value="24HR Workflow">
                            {" "}
                            24HR Workflow{" "}
                          </MenuItem>
                          <MenuItem value="Appointment Cancelled - Update Client &amp; Opportunity">
                            {" "}
                            Appointment Cancelled - Update Client &amp;
                            Opportunity{" "}
                          </MenuItem>
                          <MenuItem value="Appointment Confirmed - Update Client &amp; Opportunity">
                            {" "}
                            Appointment Confirmed - Update Client &amp;
                            Opportunity{" "}
                          </MenuItem>
                          <MenuItem value="Appointment Reporting">
                            {" "}
                            Appointment Reporting{" "}
                          </MenuItem>
                          <MenuItem value="Appointment Request - Update Client &amp; Opportunity">
                            {" "}
                            Appointment Request - Update Client &amp;
                            Opportunity{" "}
                          </MenuItem>
                          <MenuItem value="Company Address">
                            {" "}
                            Company Address{" "}
                          </MenuItem>
                          <MenuItem value="Contacts FB Conversion API Workflow">
                            {" "}
                            Contacts FB Conversion API Workflow{" "}
                          </MenuItem>
                          <MenuItem value="DND"> DND </MenuItem>
                          <MenuItem value="Inbound Call Reply">
                            {" "}
                            Inbound Call Reply{" "}
                          </MenuItem>
                          <MenuItem value="Monthly News Letter">
                            {" "}
                            Monthly News Letter{" "}
                          </MenuItem>
                          <MenuItem value="New Lead - Update Client, Opportunity, User">
                            {" "}
                            New Lead - Update Client, Opportunity, User{" "}
                          </MenuItem>
                          <MenuItem value="New Reply - Update Client &amp; Opportunity">
                            {" "}
                            New Reply - Update Client &amp; Opportunity{" "}
                          </MenuItem>
                          <MenuItem value="New Workflow : 1685084858631">
                            {" "}
                            New Workflow : 1685084858631{" "}
                          </MenuItem>
                          <MenuItem value="Not Interested">
                            {" "}
                            Not Interested{" "}
                          </MenuItem>
                          <MenuItem value="Pain Related Tag">
                            {" "}
                            Pain Related Tag{" "}
                          </MenuItem>
                          <MenuItem value="SMS Not Valid - Remove From Text">
                            {" "}
                            SMS Not Valid - Remove From Text{" "}
                          </MenuItem>
                          <MenuItem value="Submit Application FB Conversion API Workflow">
                            {" "}
                            Submit Application FB Conversion API Workflow{" "}
                          </MenuItem>
                          <MenuItem value="Task Added - Remove From Manual List">
                            {" "}
                            Task Added - Remove From Manual List{" "}
                          </MenuItem>
                          <MenuItem value="Task Reminder - Update Client &amp; Opportunity">
                            {" "}
                            Task Reminder - Update Client &amp; Opportunity{" "}
                          </MenuItem>
                          <MenuItem value="Ticket Status Workflow">
                            {" "}
                            Ticket Status Workflow{" "}
                          </MenuItem>
                          <MenuItem value=" 90 Day Nurture | - After Hours">
                            {" "}
                            | 90 Day Nurture | - After Hours{" "}
                          </MenuItem>
                          <MenuItem value="90 Day Nurture| - Email - Qualified">
                            {" "}
                            |90 Day Nurture| - Email - Qualified{" "}
                          </MenuItem>
                          <MenuItem value="90 Day Nurture| - Manual Call">
                            {" "}
                            |90 Day Nurture| - Manual Call{" "}
                          </MenuItem>
                          <MenuItem value="90 Day Nurture| - Text - Qualified">
                            {" "}
                            |90 Day Nurture| - Text - Qualified{" "}
                          </MenuItem>
                          <MenuItem value="90 Day Nurture| - Text Re-add - Qualified">
                            {" "}
                            |90 Day Nurture| - Text Re-add - Qualified{" "}
                          </MenuItem>
                          <MenuItem value="Appointment| - Confirmed Text">
                            {" "}
                            |Appointment| - Confirmed Text{" "}
                          </MenuItem>
                          <MenuItem value="Appointment| - Here -Update Opp">
                            {" "}
                            |Appointment| - Here -Update Opp{" "}
                          </MenuItem>
                          <MenuItem value="Appointment| - Intro Sequence">
                            {" "}
                            |Appointment| - Intro Sequence{" "}
                          </MenuItem>
                          <MenuItem value="Appointment| - No Show - Update Opportunity">
                            {" "}
                            |Appointment| - No Show - Update Opportunity{" "}
                          </MenuItem>
                          <MenuItem value="Appointment| - Please Cancel">
                            {" "}
                            |Appointment| - Please Cancel{" "}
                          </MenuItem>
                          <MenuItem value="Appointment| - Reminders">
                            {" "}
                            |Appointment| - Reminders{" "}
                          </MenuItem>
                          <MenuItem value="Appointment| - Request Nurture - Call">
                            {" "}
                            |Appointment| - Request Nurture - Call{" "}
                          </MenuItem>
                          <MenuItem value="Appointment| - Request Nurture - Email">
                            {" "}
                            |Appointment| - Request Nurture - Email{" "}
                          </MenuItem>
                          <MenuItem value="Appointment| - Request Nurture - Text">
                            {" "}
                            |Appointment| - Request Nurture - Text{" "}
                          </MenuItem>
                          <MenuItem value="Follow Up| - Appointment Checkin">
                            {" "}
                            |Follow Up| - Appointment Checkin{" "}
                          </MenuItem>
                          <MenuItem value="Reactivation| - First Message">
                            {" "}
                            |Reactivation| - First Message{" "}
                          </MenuItem>
                          <MenuItem value="Reactivation| - Follow Up">
                            {" "}
                            |Reactivation| - Follow Up{" "}
                          </MenuItem>
                        </Select>
                      )}
                    </>
                  ) : (
                    ""
                  )}
                  {formValues.waitFor == "isNot" ? (
                    <>
                      {mainData?.title == "Is Not" && (
                        <Select
                          name="isNotLastActivityType"
                          onChange={handleChange}
                          className="border-none outline-none rounded-lg mt-2 mb-2  text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark   text-space focus:outline-none focus:border-gray-300 text-black"
                        >
                          <MenuItem value="24HR Removal">
                            {" "}
                            24HR Removal{" "}
                          </MenuItem>
                          <MenuItem value="24HR Workflow">
                            {" "}
                            24HR Workflow{" "}
                          </MenuItem>
                          <MenuItem value="Appointment Cancelled - Update Client &amp; Opportunity">
                            {" "}
                            Appointment Cancelled - Update Client &amp;
                            Opportunity{" "}
                          </MenuItem>
                          <MenuItem value="Appointment Confirmed - Update Client &amp; Opportunity">
                            {" "}
                            Appointment Confirmed - Update Client &amp;
                            Opportunity{" "}
                          </MenuItem>
                          <MenuItem value="Appointment Reporting">
                            {" "}
                            Appointment Reporting{" "}
                          </MenuItem>
                          <MenuItem value="Appointment Request - Update Client &amp; Opportunity">
                            {" "}
                            Appointment Request - Update Client &amp;
                            Opportunity{" "}
                          </MenuItem>
                          <MenuItem value="Company Address">
                            {" "}
                            Company Address{" "}
                          </MenuItem>
                          <MenuItem value="Contacts FB Conversion API Workflow">
                            {" "}
                            Contacts FB Conversion API Workflow{" "}
                          </MenuItem>
                          <MenuItem value="DND"> DND </MenuItem>
                          <MenuItem value="Inbound Call Reply">
                            {" "}
                            Inbound Call Reply{" "}
                          </MenuItem>
                          <MenuItem value="Monthly News Letter">
                            {" "}
                            Monthly News Letter{" "}
                          </MenuItem>
                          <MenuItem value="New Lead - Update Client, Opportunity, User">
                            {" "}
                            New Lead - Update Client, Opportunity, User{" "}
                          </MenuItem>
                          <MenuItem value="New Reply - Update Client &amp; Opportunity">
                            {" "}
                            New Reply - Update Client &amp; Opportunity{" "}
                          </MenuItem>
                          <MenuItem value="New Workflow : 1685084858631">
                            {" "}
                            New Workflow : 1685084858631{" "}
                          </MenuItem>
                          <MenuItem value="Not Interested">
                            {" "}
                            Not Interested{" "}
                          </MenuItem>
                          <MenuItem value="Pain Related Tag">
                            {" "}
                            Pain Related Tag{" "}
                          </MenuItem>
                          <MenuItem value="SMS Not Valid - Remove From Text">
                            {" "}
                            SMS Not Valid - Remove From Text{" "}
                          </MenuItem>
                          <MenuItem value="Submit Application FB Conversion API Workflow">
                            {" "}
                            Submit Application FB Conversion API Workflow{" "}
                          </MenuItem>
                          <MenuItem value="Task Added - Remove From Manual List">
                            {" "}
                            Task Added - Remove From Manual List{" "}
                          </MenuItem>
                          <MenuItem value="Task Reminder - Update Client &amp; Opportunity">
                            {" "}
                            Task Reminder - Update Client &amp; Opportunity{" "}
                          </MenuItem>
                          <MenuItem value="Ticket Status Workflow">
                            {" "}
                            Ticket Status Workflow{" "}
                          </MenuItem>
                          <MenuItem value=" 90 Day Nurture | - After Hours">
                            {" "}
                            | 90 Day Nurture | - After Hours{" "}
                          </MenuItem>
                          <MenuItem value="90 Day Nurture| - Email - Qualified">
                            {" "}
                            |90 Day Nurture| - Email - Qualified{" "}
                          </MenuItem>
                          <MenuItem value="90 Day Nurture| - Manual Call">
                            {" "}
                            |90 Day Nurture| - Manual Call{" "}
                          </MenuItem>
                          <MenuItem value="90 Day Nurture| - Text - Qualified">
                            {" "}
                            |90 Day Nurture| - Text - Qualified{" "}
                          </MenuItem>
                          <MenuItem value="90 Day Nurture| - Text Re-add - Qualified">
                            {" "}
                            |90 Day Nurture| - Text Re-add - Qualified{" "}
                          </MenuItem>
                          <MenuItem value="Appointment| - Confirmed Text">
                            {" "}
                            |Appointment| - Confirmed Text{" "}
                          </MenuItem>
                          <MenuItem value="Appointment| - Here -Update Opp">
                            {" "}
                            |Appointment| - Here -Update Opp{" "}
                          </MenuItem>
                          <MenuItem value="Appointment| - Intro Sequence">
                            {" "}
                            |Appointment| - Intro Sequence{" "}
                          </MenuItem>
                          <MenuItem value="Appointment| - No Show - Update Opportunity">
                            {" "}
                            |Appointment| - No Show - Update Opportunity{" "}
                          </MenuItem>
                          <MenuItem value="Appointment| - Please Cancel">
                            {" "}
                            |Appointment| - Please Cancel{" "}
                          </MenuItem>
                          <MenuItem value="Appointment| - Reminders">
                            {" "}
                            |Appointment| - Reminders{" "}
                          </MenuItem>
                          <MenuItem value="Appointment| - Request Nurture - Call">
                            {" "}
                            |Appointment| - Request Nurture - Call{" "}
                          </MenuItem>
                          <MenuItem value="Appointment| - Request Nurture - Email">
                            {" "}
                            |Appointment| - Request Nurture - Email{" "}
                          </MenuItem>
                          <MenuItem value="Appointment| - Request Nurture - Text">
                            {" "}
                            |Appointment| - Request Nurture - Text{" "}
                          </MenuItem>
                          <MenuItem value="Follow Up| - Appointment Checkin">
                            {" "}
                            |Follow Up| - Appointment Checkin{" "}
                          </MenuItem>
                          <MenuItem value="Reactivation| - First Message">
                            {" "}
                            |Reactivation| - First Message{" "}
                          </MenuItem>
                          <MenuItem value="Reactivation| - Follow Up">
                            {" "}
                            |Reactivation| - Follow Up{" "}
                          </MenuItem>
                        </Select>
                      )}
                    </>
                  ) : (
                    ""
                  )}
                </li>
              ))}
            </ul>
          </div>
        </form>
      </div>
      <div className="flex justify-end items-end  py-2 px-4">
        <button
          onClick={onClose}
          className="border-2 mr-5 fontStrawFord border-OrangeBuilder rounded-md flex justify-center items-center px-8 py-1.5 text-OrangeBuilder"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          type="submit"
          className="bg-OrangeBuilder fontStrawFord rounded-md flex justify-center items-center px-8 py-2 text-white"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
