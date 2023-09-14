import React, { useState } from "react";
import { ClockIcon } from "@heroicons/react/24/outline";
import {
  ChevronLeftIcon,
  EllipsisHorizontalIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import TriggerList from "@/components/workflow/TriggerList";
import StartComponentTriggerList from "../Components/StartComponentTriggerList";

import WorkflowFlyout from "../Workflowflyout";

import {
  ArrowsRightLeftIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useRecoilState } from "recoil";
import { nameTrigger } from "@/atoms/nameTrigger";
import moment from "moment";
import { HiOutlineExternalLink } from "react-icons/hi";
import { nodesAtom } from "@/atoms/nodesAtom";
import AppointmentStatus from "../Components/Forms/Trigger/Appointments/AppointmentStatus";
import PaymentReceived from "../Components/Forms/Trigger/Payments/PaymentReceived";
import Invoice from "../Components/Forms/Trigger/Payments/Invoice";
import StaleOpportunities from "../Components/Forms/Trigger/Opportunity/StaleOpportunities";
import PipelineStatusChanged from "../Components/Forms/Trigger/Opportunity/PipelineStageChanged";
import OpportunityStatusChanged from "../Components/Forms/Trigger/Opportunity/OpportunityStatusChanged";
import FacebookLeadForm from "../Components/Forms/Trigger/Facebook/FacebookLeadForm";
import EmailEvents from "../Components/Forms/Trigger/Events/EmailEvents";
import CallStatus from "../Components/Forms/Trigger/Events/CallStatus";
import TriggerValidationError from "../Components/Forms/Trigger/Contact/TriggerValidationError";
import SurveySubmitted from "../Components/Forms/Trigger/Contact/SurveySubmitted";
import OrderSubmitted from "../Components/Forms/Trigger/Contact/OrderSubmitted";
import OrderFormSubmission from "../Components/Forms/Trigger/Contact/OrderFormSubmission";
import FormSubmitted from "../Components/Forms/Trigger/Contact/FormSubmitted";
import CustomerReplied from "../Components/Forms/Trigger/Contact/CustomerReplied";
import TaskReminder from "../Components/Forms/Trigger/Contact/TaskReminder";
import TaskAdded from "../Components/Forms/Trigger/Contact/TaskAdded";
import NoteChanged from "../Components/Forms/Trigger/Contact/NoteChanged";
import NoteTag from "../Components/Forms/Trigger/Contact/NoteTag";
import CustomDateReminder from "../Components/Forms/Trigger/Contact/CustomDateReminder";
import ContactTag from "../Components/Forms/Trigger/Contact/ContactTag";
import ContactDND from "../Components/Forms/Trigger/Contact/ContactDND";
import ContactCreated from "../Components/Forms/Trigger/Contact/ContactCreated";
import ContactChanged from "../Components/Forms/Trigger/Contact/ContactChanged";
import BirthdayReminder from "../Components/Forms/Trigger/Contact/BirthdayReminder";
import CustomerBookedAppointment from "../Components/Forms/Trigger/Appointments/CustomerBookedAppointment";
import { AiOutlineDelete } from "react-icons/ai";
import Link from "next/link";

export default function StartComp({
  handleChange,
}: {
  handleChange: Function;
}) {
  function RenderActionData({
    currentIndex,
  }: {
    currentIndex: number;
    title: string;
  }) {
    return (
      <div>
        <div>{actionComponents[currentIndex].comp}</div>
      </div>
    );
  }

  function ComponentFirst({ currentIndex }: { currentIndex: number }) {
    return (
      <>
        <div className="bg-white shadow-lg rounded-md w-[100%] mt-5 ">
          <div className="bg-blueHeader py-3 px-5 rounded-t-md flex justify-between items-center">
            <div className="bg-white h-7 w-7 rounded-full flex justify-center items-center">
              <ClockIcon className="h-5 w-5 text-blueHeader" />
            </div>
            <p className="ml-2 text-lg text-white font-medium">Execute When</p>
            <div>
              <EllipsisHorizontalIcon className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className={`opacity-1 px-4 pb-5 pt-5 `}>
            <p
              className={`text-dark text-sm pb-5 w-full leading-5  text-center px-4`}
            >
              Choose the trigger that decides how a contacts enters this flow
            </p>
            <button
              onClick={() => setIsFlyOutVisible(true)}
              className="py-2 w-full rounded-md text-sm bg-OrangeBuilder text-white"
            >
              Setup Enrollment Trigger
            </button>
          </div>
        </div>
      </>
    );
  }

  function ComponentTwo({
    actionData,
  }: // currentIndex,
  // title,
  {
    // currentIndex: number;
    // title: string;
    actionData: any;
  }) {
    const handleDeleteOption = (index: any) => {
      const updatedActionComponent = [...actionComponents];
      updatedActionComponent.splice(index, 1);
      setActionComponents(updatedActionComponent);
      setFormItem({
        ...formItem,
      });
    };

    console.log("formItem", formItem, "action", actionData);
    return (
      <>
        <div className="bg-white shadow-lg rounded-md w-[55%] lg:w-[100%] mt-5 ">
          <div className="bg-blueHeader py-3 px-5 rounded-t-md flex justify-between items-center">
            <div className="bg-white h-7 w-7 rounded-full flex justify-center items-center">
              <ClockIcon className="h-5 w-5 text-blueHeader" />
            </div>
            <p className="ml-2 text-lg text-white font-medium">Execute When</p>
            <div>
              <EllipsisHorizontalIcon className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className={`opacity-1 px-4 pb-5 pt-5 w-[400px]`}>
            <p className="text-dark font-semibold text-sm pb-3  text-center  leading-5">
              Enrollment Trigger
            </p>
            {console.log("Action ", actionIndex)}
            {actionComponents.map((item: any, index: any) => (
              <div key={index}>
                <button className="border-[1px] border-lightGray bg-gray-100 rounded-md px-2 py-2 mb-4 w-full relative flex items-center justify-center">
                  <div
                    className="w-10/12"
                    onClick={() => {
                      setActionIndex(index), setIsOpenModal(true);

                      let filObj: any = "";
                      data.map((i: any) => {
                        let obj = i.subContent.find(
                          (it: any) => it.title == item?.workflowName
                        );
                        if (obj) {
                          filObj = obj;
                          return;
                        }
                      });
                      setEditData(filObj);
                      setFormItem(filObj?.form);
                      setActionData(filObj?.title);
                      setIsOpenModal(true);
                    }}
                  >
                    <p className="text-dark text-sm leading-5 text-center relative">
                      {item.workflowName}
                    </p>
                  </div>

                  <div className="w-2/12">
                    <AiOutlineDelete
                      onClick={() => handleDeleteOption(index)}
                      className="h-5 w-5 text-secondary absolute top-2 right-1"
                    />
                  </div>
                </button>
              </div>
            ))}

            <button
              className="py-2 w-full rounded-md text-sm border-[2px] border-OrangeBuilder text-OrangeBuilder"
              onClick={() => {
                setIsFlyOutVisible(true);
              }}
            >
              Add Enrollment Trigger
            </button>
          </div>
        </div>
      </>
    );
  }

  //1trigger
  const [triggerTitle, setTriggerTitle] = useState("");
  const [workflowName, setWorkflowName] = useState();

  //modal1
  const [isFlyOutVisible, setIsFlyOutVisible] = useState(false);

  const handleAddMore = (currentIndex: number, titleHeading: any) => {
    // console.log("currentIndex ///////", currentIndex);
    console.log("newdata ///////", newData);
    console.log("newtitleheading ===> ", titleHeading);

    setActionComponents([
      ...actionComponents,
      // {
      //   // comp: <ComponentTwo currentIndex={newData} title={titleHeading} />,
      //   // currentIndex: currentIndex,
      //   title: titleHeading,
      // },
      titleHeading,
    ]);

    setNewData(newData + 1);
  };

  const [newData, setNewData] = useState<any>(0);
  const [actionComponents, setActionComponents] = useState<any>([]);
  const [title, setTitle] = useState<any>("");

  // trail
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [actionIndex, setActionIndex] = useState<any>();
  const [actionData, setActionData] = useRecoilState<any>(nameTrigger);
  const [formItem, setFormItem] = useState<any>(null);
  const [dataNode, setDataNode] = useRecoilState(nodesAtom);
  const [editData, setEditData] = useState<any>();
  console.log("Action ", editData);

  const updateData = (item: any, detail: any) => {
    let inde: any;
    actionComponents.map((i: any, index: any) => {
      if (i.workflowName == editData?.title) {
        inde == index;
        return;
      }
    });
    if (inde) {
      console.log("if con");
      // let updateData: any = actionComponents;
      // updateData[actionIndex] = detail;
      // setActionComponents(updateData);
      setActionComponents((prevState: any) => {
        const newData = [...prevState]; // Create a copy of the array
        newData[actionIndex] = detail; // Update the value at the specified index
        return newData; // Update the state with the new array
      });
      setEditData("");
      setActionIndex(-1);
    } else {
      setIsOpenModal(false);
      setTriggerTitle(item);
      setIsFlyOutVisible(false);
      handleAddMore(newData + 1, detail);
      handleChange();
      setDataNode(detail);
    }
  };
  const data = [
    {
      // title: "Appointments",
      title: "Appointments",
      subContent: [
        {
          title: "Appointment Status",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <AppointmentStatus
              initalData={editData}
              onClose={() => {
                setIsOpenModal(false);
              }}
              updateData={(item: any, detail: any) => {
                updateData(item, detail);
              }}
            />
          ),
        },
        {
          title: "Customer Booked Appointment",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <CustomerBookedAppointment
              initalData={editData}
              onClose={() => {
                setIsOpenModal(false);
              }}
              // updateData={(item: any, detail: any) => {
              //   setIsOpenModal(false);
              //   setTriggerTitle(item);
              //   setIsFlyOutVisible(false);
              //   handleAddMore(newData + 1, detail);
              //   handleChange();
              //   setDataNode(detail);
              // }}

              updateData={(item: any, detail: any) => {
                updateData(item, detail);
              }}
              actionData={actionData}
            />
          ),
        },
      ],
    },
    {
      title: "Contact",
      subContent: [
        {
          title: "Birthday Reminder",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <BirthdayReminder
              initalData={editData}
              onClose={() => {
                setIsOpenModal(false);
              }}
              // updateData={(item: any, detail: any) => {
              //   setIsOpenModal(false);
              //   setTriggerTitle(item);
              //   setIsFlyOutVisible(false);
              //   handleAddMore(newData + 1, detail);
              //   handleChange();
              //   setDataNode(detail);
              // }}
              updateData={(item: any, detail: any) => {
                updateData(item, detail);
              }}
            />
          ),
        },
        {
          title: "Contact Changed",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <ContactChanged
              initalData={editData}
              onClose={() => {
                setIsOpenModal(false);
              }}
              // updateData={(item: any, detail: any) => {
              //   setIsOpenModal(false);
              //   setTriggerTitle(item);
              //   setIsFlyOutVisible(false);
              //   handleAddMore(newData + 1, detail);
              //   handleChange();
              //   setDataNode(detail);
              // }}
              updateData={(item: any, detail: any) => {
                updateData(item, detail);
              }}
            />
          ),
        },
        {
          title: "Contact Created",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <ContactCreated
              initalData={editData}
              onClose={() => {
                setIsOpenModal(false);
              }}
              // updateData={(item: any, detail: any) => {
              //   setIsOpenModal(false);
              //   setTriggerTitle(item);
              //   setIsFlyOutVisible(false);
              //   handleAddMore(newData + 1, detail);
              //   handleChange();
              //   setDataNode(detail);
              // }}
              updateData={(item: any, detail: any) => {
                updateData(item, detail);
              }}
            />
          ),
        },
        {
          title: "Contact DND",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <ContactDND
              onClose={() => {
                setIsOpenModal(false);
              }}
              initalData={editData}
              // updateData={(item: any, detail: any) => {
              //   setIsOpenModal(false);
              //   setTriggerTitle(item);
              //   setIsFlyOutVisible(false);
              //   handleAddMore(newData + 1, detail);
              //   handleChange();
              //   setDataNode(detail);
              // }}
              updateData={(item: any, detail: any) => {
                updateData(item, detail);
              }}
            />
          ),
        },
        {
          title: "Contact Tag",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <ContactTag
              initalData={editData}
              onClose={() => {
                setIsOpenModal(false);
              }}
              // updateData={(item: any, detail: any) => {
              //   setIsOpenModal(false);
              //   setTriggerTitle(item);
              //   setIsFlyOutVisible(false);
              //   handleAddMore(newData + 1, detail);
              //   handleChange();
              //   setDataNode(detail);
              // }}
              updateData={(item: any, detail: any) => {
                updateData(item, detail);
              }}
            />
          ),
        },
        {
          title: "Custom Date Reminder",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <CustomDateReminder
              initalData={editData}
              onClose={() => {
                setIsOpenModal(false);
              }}
              // updateData={(item: any, detail: any) => {
              //   setIsOpenModal(false);
              //   setTriggerTitle(item);
              //   setIsFlyOutVisible(false);
              //   handleAddMore(newData + 1, detail);
              //   handleChange();
              //   setDataNode(detail);
              // }}
              updateData={(item: any, detail: any) => {
                updateData(item, detail);
              }}
            />
          ),
        },
        {
          title: "Note Added",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <NoteTag
              initalData={editData}
              onClose={() => {
                setIsOpenModal(false);
              }}
              // updateData={(item: any, detail: any) => {
              //   setIsOpenModal(false);
              //   setTriggerTitle(item);
              //   setIsFlyOutVisible(false);
              //   handleAddMore(newData + 1, detail);
              //   handleChange();
              //   setDataNode(detail);
              // }}

              updateData={(item: any, detail: any) => {
                updateData(item, detail);
              }}
            />
          ),
        },
        {
          title: "Note Changed",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <NoteChanged
              initalData={editData}
              onClose={() => {
                setIsOpenModal(false);
              }}
              // updateData={(item: any, detail: any) => {
              //   setIsOpenModal(false);
              //   setTriggerTitle(item);
              //   setIsFlyOutVisible(false);
              //   handleAddMore(newData + 1, detail);
              //   handleChange();
              //   setDataNode(detail);
              // }}ss
              updateData={(item: any, detail: any) => {
                updateData(item, detail);
              }}
            />
          ),
        },
        {
          title: "Task Added",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <TaskAdded
              onClose={() => {
                setIsOpenModal(false);
              }}
              initalData={editData}
              updateData={(item: any, detail: any) => {
                updateData(item, detail);
              }}
              // updateData={(item: any, detail: any) => {
              //   setIsOpenModal(false);
              //   setTriggerTitle(item);
              //   setIsFlyOutVisible(false);
              //   handleAddMore(newData + 1, detail);
              //   handleChange();
              //   setDataNode(detail);
              // }}
            />
          ),
        },
        {
          title: "Task Reminder",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <TaskReminder
              onClose={() => {
                setIsOpenModal(false);
              }}
              initalData={editData}
              updateData={(item: any, detail: any) => {
                updateData(item, detail);
              }}
              // updateData={(item: any, detail: any) => {
              //   setIsOpenModal(false);
              //   setTriggerTitle(item);
              //   setIsFlyOutVisible(false);
              //   handleAddMore(newData + 1, detail);
              //   handleChange();
              //   setDataNode(detail);
              // }}
            />
          ),
        },
      ],
    },
    {
      title: "Contact Actions",
      subContent: [
        {
          title: "Customer Replied",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <CustomerReplied
              onClose={() => {
                setIsOpenModal(false);
              }}
              initalData={editData}
              updateData={(item: any, detail: any) => {
                updateData(item, detail);
              }}
              // updateData={(item: any, detail: any) => {
              //   setIsOpenModal(false);
              //   setTriggerTitle(item);
              //   setIsFlyOutVisible(false);
              //   handleAddMore(newData + 1, detail);
              //   handleChange();
              //   setDataNode(detail);
              // }}
            />
          ),
        },
        {
          title: "Form Submitted",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <FormSubmitted
              onClose={() => {
                setIsOpenModal(false);
              }}
              initalData={editData}
              updateData={(item: any, detail: any) => {
                updateData(item, detail);
              }}
              // updateData={(item: any, detail: any) => {
              //   setIsOpenModal(false);
              //   setTriggerTitle(item);
              //   setIsFlyOutVisible(false);
              //   handleAddMore(newData + 1, detail);
              //   handleChange();
              //   setDataNode(detail);
              // }}
            />
          ),
        },
        {
          title: "Order Form Submission",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <OrderFormSubmission
              onClose={() => {
                setIsOpenModal(false);
              }}
              // updateData={(item: any, detail: any) => {
              //   setIsOpenModal(false);
              //   setTriggerTitle(item);
              //   setIsFlyOutVisible(false);
              //   handleAddMore(newData + 1, detail);
              //   handleChange();
              //   setDataNode(detail);
              // }}

              initalData={editData}
              updateData={(item: any, detail: any) => {
                updateData(item, detail);
              }}
            />
          ),
        },
        {
          title: "Order Submitted",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <OrderSubmitted
              onClose={() => {
                setIsOpenModal(false);
              }}
              // updateData={(item: any, detail: any) => {
              //   setIsOpenModal(false);
              //   setTriggerTitle(item);
              //   setIsFlyOutVisible(false);
              //   handleAddMore(newData + 1, detail);
              //   handleChange();
              //   setDataNode(detail);
              // }}
              initalData={editData}
              updateData={(item: any, detail: any) => {
                updateData(item, detail);
              }}
            />
          ),
        },
        {
          title: "Survey Submit",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <SurveySubmitted
              onClose={() => {
                setIsOpenModal(false);
              }}
              // updateData={(item: any, detail: any) => {
              //   setIsOpenModal(false);
              //   setTriggerTitle(item);
              //   setIsFlyOutVisible(false);
              //   handleAddMore(newData + 1, detail);
              //   handleChange();
              //   setDataNode(detail);
              // }}
              initalData={editData}
              updateData={(item: any, detail: any) => {
                updateData(item, detail);
              }}
            />
          ),
        },
        {
          title: "Trigger Link Clicked",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: "",
        },
        {
          title: "Twilio Validation Error",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <TriggerValidationError
              onClose={() => {
                setIsOpenModal(false);
              }}
              // updateData={(item: any, detail: any) => {
              //   setIsOpenModal(false);
              //   setTriggerTitle(item);
              //   setIsFlyOutVisible(false);
              //   handleAddMore(newData + 1, detail);
              //   handleChange();
              //   setDataNode(detail);
              // }}
              initalData={editData}
              updateData={(item: any, detail: any) => {
                updateData(item, detail);
              }}
            />
          ),
        },
      ],
    },
    {
      title: "Events",
      subContent: [
        {
          title: "Call Status",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <CallStatus
              onClose={() => {
                setIsOpenModal(false);
              }}
              // updateData={(item: any, detail: any) => {
              //   setIsOpenModal(false);
              //   setTriggerTitle(item);
              //   setIsFlyOutVisible(false);
              //   handleAddMore(newData + 1, detail);
              //   handleChange();
              //   setDataNode(detail);
              // }}
              initalData={editData}
              updateData={(item: any, detail: any) => {
                updateData(item, detail);
              }}
            />
          ),
        },
        {
          title: "Email Events",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <EmailEvents
              onClose={() => {
                setIsOpenModal(false);
              }}
              // updateData={(item: any, detail: any) => {
              //   setIsOpenModal(false);
              //   setTriggerTitle(item);
              //   setIsFlyOutVisible(false);
              //   handleAddMore(newData + 1, detail);
              //   handleChange();
              //   setDataNode(detail);
              // }}
              initalData={editData}
              updateData={(item: any, detail: any) => {
                updateData(item, detail);
              }}
            />
          ),
        },
      ],
    },
    {
      title: "Facebook",
      subContent: [
        {
          title: "Facebook Lead Form Submitted",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <FacebookLeadForm
              onClose={() => {
                setIsOpenModal(false);
              }}
              // updateData={(item: any, detail: any) => {
              //   setIsOpenModal(false);
              //   setTriggerTitle(item);
              //   setIsFlyOutVisible(false);
              //   handleAddMore(newData + 1, detail);
              //   handleChange();
              //   setDataNode(detail);
              // }}
              initalData={editData}
              updateData={(item: any, detail: any) => {
                updateData(item, detail);
              }}
            />
          ),
        },
      ],
    },
    {
      title: "Opportunities",
      subContent: [
        {
          title: "Opportunity Status Changed",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <OpportunityStatusChanged
              onClose={() => {
                setIsOpenModal(false);
              }}
              // updateData={(item: any, detail: any) => {
              //   setIsOpenModal(false);
              //   setTriggerTitle(item);
              //   setIsFlyOutVisible(false);
              //   handleAddMore(newData + 1, detail);
              //   handleChange();
              //   setDataNode(detail);
              // }}
              initalData={editData}
              updateData={(item: any, detail: any) => {
                updateData(item, detail);
              }}
            />
          ),
        },
        {
          title: "Pipeline Stage Changed",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <PipelineStatusChanged
              onClose={() => {
                setIsOpenModal(false);
              }}
              // updateData={(item: any, detail: any) => {
              //   setIsOpenModal(false);
              //   setTriggerTitle(item);
              //   setIsFlyOutVisible(false);
              //   handleAddMore(newData + 1, detail);
              //   handleChange();
              //   setDataNode(detail);
              // }}
              initalData={editData}
              updateData={(item: any, detail: any) => {
                updateData(item, detail);
              }}
            />
          ),
        },
        {
          title: "Stale Opportunities",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <StaleOpportunities
              onClose={() => {
                setIsOpenModal(false);
              }}
              // updateData={(item: any, detail: any) => {
              //   setIsOpenModal(false);
              //   setTriggerTitle(item);
              //   setIsFlyOutVisible(false);
              //   handleAddMore(newData + 1, detail);
              //   handleChange();
              //   setDataNode(detail);
              // }}
              initalData={editData}
              updateData={(item: any, detail: any) => {
                updateData(item, detail);
              }}
            />
          ),
        },
      ],
    },
    {
      title: "Payments",
      subContent: [
        {
          title: "Invoice",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <Invoice
              onClose={() => {
                setIsOpenModal(false);
              }}
              // updateData={(item: any, detail: any) => {
              //   setIsOpenModal(false);
              //   setTriggerTitle(item);
              //   setIsFlyOutVisible(false);
              //   handleAddMore(newData + 1, detail);
              //   handleChange();
              //   setDataNode(detail);
              // }}

              initalData={editData}
              updateData={(item: any, detail: any) => {
                updateData(item, detail);
              }}
            />
          ),
        },
        {
          title: "Payment Received",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <PaymentReceived
              onClose={() => {
                setIsOpenModal(false);
              }}
              // updateData={(item: any, detail: any) => {
              //   setIsOpenModal(false);
              //   setTriggerTitle(item);
              //   setIsFlyOutVisible(false);
              //   handleAddMore(newData + 1, detail);
              //   handleChange();
              //   setDataNode(detail);
              // }}
              initalData={editData}
              updateData={(item: any, detail: any) => {
                updateData(item, detail);
              }}
            />
          ),
        },
      ],
    },
    {
      title: "Tiktok",
      subContent: [
        {
          title: "Tikt",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: "",
        },
      ],
    },
  ];

  const [filterValue, setFilterValue] = useState("");

  const handleFilter = (event: any) => {
    setFilterValue(event.target.value);
  };

  const filteredData = data.filter((category) => {
    return (
      category.title.toLowerCase().includes(filterValue.toLowerCase()) ||
      category.subContent.some((subItem) =>
        subItem.title.toLowerCase().includes(filterValue.toLowerCase())
      )
    );
  });

  return (
    <>
      {/*  */}
      <WorkflowFlyout
        visibility={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        renderData={
          <div className="py-3  ">
            <div className="pt-3 flex justify-between items-center border-b-[1px] border-gray-300 pb-5 px-5">
              <p className="  text-xl text-dark font-semibold fontStrawFord ">
                {actionData}
              </p>
              <button onClick={() => setIsOpenModal(false)}>
                <XMarkIcon className="h-5 w-5 text-FontGray" />
              </button>
            </div>
            <div
              onClick={() => setIsOpenModal(false)}
              className="flex justify-start pt-5 pl-5"
            >
              <div className="h-5 w-5 bg-white rounded-full shadow-md flex justify-center items-center">
                <ChevronLeftIcon className="h-3 w-3 text-gray-600" />
              </div>

              <p className="text-xs pl-2 pt-0.5 text-gray-600 fontStrawFord  font-semibold">
                Back to Workflow
              </p>
            </div>

            <div className="px-2">{formItem}</div>
          </div>
        }
      />
      {/*  */}
      <div
        onClick={() => setIsFlyOutVisible(false)}
        className={`w-full h-screen overflow-y-scroll scrollbar-hide fixed right-0 top-0  z-50 transition-all bg-black overflow-hidden ${
          isFlyOutVisible
            ? "translate-x-0 opacity-100 bg-opacity-30"
            : "translate-x-[100%] opacity-0 bg-opacity-0"
        }`}
      >
        <div className="absolute h-full w-full z-40"></div>
        <div className="bg-white w-full md:w-[50%] lg:w-[50%] absolute right-0 min-h-full h-auto z-50 overflow-y-scroll scrollbar-hide">
          {/*  */}
          <div className={` ${isOpenModal ? "hidden" : "block"}  py-3`}>
            <div className="flex justify-between items-start border-b-[1px] border-gray-300 pb-2 pl-4 pr-4 ">
              <div className="pr-4">
                <p className="fontStrawFord text-xl text-dark font-semibold">
                  Workflow Triggers
                </p>
                <p className="fontStrawFord text-sm text-gray-500 font-medium py-2">
                  Adds a workflow trigger, and on execution, the contacts get
                  added to the workflow
                </p>
              </div>
              <button
                onClick={() => {
                  setIsFlyOutVisible(false);
                }}
                className="w-10 pt-2"
              >
                <XMarkIcon className="h-5 w-5 text-secondary" />
              </button>
            </div>

            <div className="px-4 py-4">
              <div className="rounded-md px-2 py-2 flex justify-start items-center w-full  border-[1px] border-gray-200">
                <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 font-bold  " />
                <input
                  type="text"
                  placeholder="Filter by actions"
                  name="subContentTitle"
                  value={filterValue}
                  onChange={handleFilter}
                  className="fontStrawFord font-medium   w-[60%] py-1 px-2  bg-transparent outline-none border-[none] pl-4  text-sm "
                />
              </div>
            </div>

            <ul className="w-full  pt-2">
              {filteredData.map((item, index) => (
                <li key={index} className="mb-3 border-b px-4 pb-3">
                  <p
                    className={`fontStrawFord capitalize text-dark text-lg font-semibold  tracking-wide mb-2`}
                  >
                    {item?.title}
                  </p>
                  <ul className="pt-2 ">
                    {item?.subContent?.map((mainData, mainIndex) => (
                      <li className="mb-3" key={mainIndex}>
                        <div
                          onClick={() => {
                            setFormItem(mainData?.form);
                            setActionData(mainData?.title);
                            setIsOpenModal(true);
                          }}
                          className="relative py-3 hover:border-[1px] hover:border-newBlue flex justify-start items-center border-[1px] border-gray-200 mb-3 p-2 rounded-lg"
                        >
                          <input
                            type="radio"
                            name="radio"
                            className="radio checked:bg-blue-500 ml-2 mt-1"
                            checked={
                              actionData == mainData.title ? true : false
                            }
                            onChange={() => {
                              setFormItem(mainData?.form);
                              setActionData(mainData?.title);
                              setIsOpenModal(true);
                            }}
                          />
                          <div className="pl-2">
                            <p
                              className={`fontStrawFord capitalize text-gray-600 text-base font-semibold  tracking-wide ml-2 `}
                            >
                              {mainData?.title}
                            </p>
                            <p
                              className={`fontStrawFord  mt-1 capitalize text-gray-500 text-xs font-normal  tracking-wide ml-2 `}
                            >
                              Updated at {moment().format("MMM DD, YYYY")} by
                              John Kuy
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          {/*  */}
        </div>
      </div>

      <div>
        {/* {actionComponents.map((item: any, index: any) => (
          <div key={index}>
          
            <ComponentTwo actionData={actionComponents} />
          </div>
        ))} */}
        {actionComponents.length == 0 && (
          <ComponentFirst currentIndex={newData} />
        )}
        {actionComponents.length > 0 && (
          <ComponentTwo actionData={actionComponents} />
        )}
      </div>
    </>
  );
}
