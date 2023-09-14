import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useState } from "react";

const WebHook = () => {
  const [errors, setErrors] = useState<any>({});
  const [formValues, setFormValues] = useState<any>({
    webHook: "",
    manualAssignment: "",
    autoAssignment: "",
    unAssignment: "",
    newMessage: "",
    dispositionAssigned: "",
    appointmentBooked: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormValues((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formValues);
    const validationErrors: any = {};

    if (!formValues.webHook) {
      validationErrors.webHook = "Required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setFormValues({
      webHook: "",
      manualAssignment: "",
      autoAssignment: "",
      unAssignment: "",
      newMessage: "",
      dispositionAssigned: "",
      appointmentBooked: "",
    });

    setErrors({});
  };

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const assignmentType = [
    {
      name: "manualAssignment",
      type: "Type: Manual Assignment",
      data: "Keys: Type, LocationName, Priority, Agent Email, Conversation Count, Contact ID, Contact Name",
    },
    {
      name: "autoAssignment",
      type: "Type: Auto Assignment",
      data: "Keys: Type, LocationName, Priority, Agent Email, Conversation Count, Contact ID, Contact Name",
    },
    {
      name: "unAssignment",
      type: "Type: Un Assignment",
      data: "Keys: Type, LocationName, Priority, Agent Email, Conversation Count, Contact ID, Contact Name",
    },
    {
      name: "newMessage",
      type: "Type: New Message",
      data: "Keys: Type, LocationName, Priority, Agent Email, Conversation Count, Contact ID, Contact Name",
    },
    {
      name: "dispositionAssigned",
      type: "Type: Disposition Assigned",
      data: "Keys: Type, LocationName, Priority, Agent Email, Conversation Count, Contact ID, Contact Name",
    },
    {
      name: "appointmentBooked",
      type: "Type: Appointment Booked",
      data: "Keys: Type, LocationName, Priority, Agent Email, Conversation Count, Contact ID, Contact Name",
    },
  ];

  return (
    <div className="flex justify-between mx-5">
      <div className="w-1/4  text-[#47494b] text-lg py-1 font-semibold">
        WebHook
        <p className="text-[#47494b] text-xs">
          You can set a webhook URL to receive notifications about new incoming
          messages.
        </p>
      </div>

      <div className="w-3/4 ">
        <form onSubmit={handleSubmit}>
          <div className="bg-white border rounded-md">
            <div className="mx-5 my-4">
              {/* WebHook */}
              <div className="py-2">
                <label
                  htmlFor=""
                  className="block text-[#47494b] text-sm py-1 font-semibold"
                >
                  WebHook
                </label>
                <input
                  type="url"
                  name="webHook"
                  value={formValues.webHook}
                  onChange={handleChange}
                  className="border rounded-md w-full px-2 py-1 placeholder:text-xs font-semibold"
                />
                {errors.webHook && (
                  <div className="error text-red-500">{errors.webHook}</div>
                )}
              </div>
            </div>
            {/* Save Button */}
            <div className="flex mx-8 my-4 justify-end">
              <button
                type="submit"
                className="border flex justify-center bg-[#5450ee] border-gray-400 rounded-md w-24 px-3 py-2 cursor-pointer text-white font-semibold"
              >
                Save
              </button>
            </div>
          </div>

          <div className="bg-white border rounded-md my-3 h-[55vh]">
            {assignmentType.map((item, index) => (
              <Accordion
                key={index}
                expanded={index === activeIndex}
                onChange={() => handleClick(index)}
              >
                <AccordionSummary>{item.type}</AccordionSummary>
                <AccordionDetails>
                  <div className="text-sm text-gray-600 flex items-center font-semibold justify-between">
                    <p>{item.data}</p>
                    <button className="border flex justify-center bg-[#5450ee] border-gray-400 rounded-md px-4 py-1 mr-6 cursor-pointer text-white font-semibold">
                      Test
                    </button>
                  </div>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default WebHook;
