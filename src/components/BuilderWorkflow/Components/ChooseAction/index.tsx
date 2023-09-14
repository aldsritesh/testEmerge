import { XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import WorkflowFlyout from "@/components/workflow/WorkflowFlyout";
import { useRecoilState, useSetRecoilState } from "recoil";
import TriggerList from "../TriggerList";
import { itemState } from "@/atoms/item";
import {
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import SendEmailForm from "../Forms/Actions/ExternalCommunication/SendEmailForm";
import SendSMSForm from "../Forms/Actions/ExternalCommunication/SendSMSForm";
import OtherForm from "../Forms/OtherForm";
import RemoveFromWorkFlow from "../Forms/Actions/CRM/RemoveFromWorkFlow";
import AddContactTag from "../Forms/Actions/CRM/AddContactTag";
import CreateUpdateOpportunity from "../Forms/Actions/CRM/CreateUpdateOpportunity";
import AddToWorkFlow from "../Forms/Actions/CRM/AddToWorkFlow";
import RemoveFromAllWorkFlow from "../Forms/Actions/CRM/RemoveFromAllWorkFlow";
import AppointmentStatus from "../Forms/Actions/CRM/AppointmentStatus";
import FacebookConversion from "../Forms/Actions/CRM/FacebookConversion";
import WebHooks from "../Forms/Actions/ConditionalWorkflow/WebHooks";
import WaitForm from "../Forms/Actions/ConditionalWorkflow/WaitForm";
import Call from "../Forms/Actions/ExternalCommunication/call";
import VoiceMail from "../Forms/Actions/ExternalCommunication/VoiceMail";
import Messenger from "../Forms/Actions/ExternalCommunication/Messanger";
import InstagramDM from "../Forms/Actions/ExternalCommunication/InstagramDM";
import RemoveContactTag from "../Forms/Actions/CRM/RemoveContactTag";
import AddToNotes from "../Forms/Actions/CRM/AddtoNotes";
import AssignToUser from "../Forms/Actions/CRM/AssignToUser";
import RemoveAssignedUser from "../Forms/Actions/CRM/RemoveAssignedUser";
import SetEventStartDate from "../Forms/Actions/CRM/SetEventStartDate";
import RemoveOpportunity from "../Forms/Actions/CRM/RemoveOpportunity";
import ManualSMS from "../Forms/Actions/ExternalCommunication/ManualSMS";
import ManualCall from "../Forms/Actions/ExternalCommunication/ManualCall";
import GMBMessaging from "../Forms/Actions/ExternalCommunication/GMBMessaging";
import GoalEvent from "../Forms/Actions/ConditionalWorkflow/GoalEvent";
import MathOperation from "../Forms/Actions/ConditionalWorkflow/MathOperation";
import SendInternalNotification from "../Forms/Actions/CRM/SendInternalNotification";
import SetContactDND from "../Forms/Actions/CRM/SetContactDND";
import EditConversation from "../Forms/Actions/CRM/EditConversation";
import SendReviewRequest from "../Forms/Actions/CRM/SendReviewRequest";
import StripeOneTimeCharge from "../Forms/Actions/CRM/StripeOneTimeCharge";
import UpdateContactField from "../Forms/Actions/CRM/UpdateContactField";
import AddTask from "../Forms/Actions/CRM/AddTask";
import UpdateCustomValue from "../Forms/Actions/CRM/UpdateCustomValue";
import { AiOutlineContacts, AiOutlineMail } from "react-icons/ai";
import {
  MdEventAvailable,
  MdLoop,
  MdOutlineContactEmergency,
  MdOutlineContactPhone,
  MdOutlinePermContactCalendar,
  MdOutlineRateReview,
  MdOutlineSmsFailed,
  MdOutlineTextsms,
  MdSpeakerNotes,
  MdWebhook,
  MdWorkspaces,
} from "react-icons/md";
import {
  IoCallOutline,
  IoCreateOutline,
  IoGitNetworkOutline,
  IoNotificationsOutline,
} from "react-icons/io5";
import {
  BsArrow90DegRight,
  BsCalendarWeek,
  BsHddNetwork,
  BsPatchExclamation,
  BsVoicemail,
} from "react-icons/bs";
import { RiMessengerLine } from "react-icons/ri";
import {
  FiFacebook,
  FiInstagram,
  FiUserMinus,
  FiUserPlus,
} from "react-icons/fi";
import { BiConversation, BiMath, BiMessageDots } from "react-icons/bi";
import { RxDashboard, RxMagnifyingGlass } from "react-icons/rx";
import { FaNetworkWired, FaPencilRuler, FaTasks } from "react-icons/fa";
import { CgRemove } from "react-icons/cg";
import { TbBrandStripe } from "react-icons/tb";
import { nameTrigger } from "@/atoms/nameTrigger";
import GoTo from "../Forms/Actions/ConditionalWorkflow/GoTo";
import { titleTrigger } from "@/atoms/titleTrigger";
import { nodesAtom } from "@/atoms/nodesAtom";
import SendIfElseForm from "../Forms/Actions/ExternalCommunication/SendIfElseForm";
// import SendInternalNotification from "../Forms/CRM/SendInternalNotification";

export default function ChooseActions({
  updateActionData,
  onClose,
  updateForm,
}: any) {
  const [isFlyOutVisible, setIsFlyOutVisible] = useState(false);
  const [actionTitle, setActionTitle] = useState("");
  const [modalData, setModalData] = useState("");
  const setItem = useSetRecoilState(itemState);
  const [formItem, setFormItem] = useState("");
  const [actionDataState, setActionDataState] = useRecoilState(nameTrigger);
  const [titleTriggerState, setTitleTriggerState] =
    useRecoilState(titleTrigger);

  const [dataNode, setDataNode] = useRecoilState(nodesAtom);

  const actionData = [
    {
      title: "External Communications",
      subContent: [
        {
          title: "Send Email",
          description: "Send an Email",
          icon: <AiOutlineMail className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <SendEmailForm
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any, details: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
                setDataNode(details);
              }}
            />
          ),
        },
        {
          title: "Send SMS",
          description: "Send an SMS",
          icon: <MdOutlineTextsms className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <SendSMSForm
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any, details: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
                setDataNode(details);
              }}
            />
          ),
        },
        {
          title: "Call",
          description: "Call",
          icon: <IoCallOutline className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <Call
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any, actionTitle: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
              }}
            />
          ),
        },
        {
          title: "Voicemail",
          description: "Voicemail",
          icon: <BsVoicemail className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <VoiceMail
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any, details: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
                setDataNode(details);
              }}
            />
          ),
        },
        {
          title: "Messenger",
          description: "Messenger",
          icon: <RiMessengerLine className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <Messenger
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any, details: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
                setDataNode(details);
              }}
            />
          ),
        },
        {
          title: "Instagram DM",
          description: "Instagram DM",
          icon: <FiInstagram className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <InstagramDM
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any, details: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
                setDataNode(details);
              }}
            />
          ),
        },
        {
          title: "Manual SMS",
          description: "Manual SMS",
          icon: <MdOutlineSmsFailed className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <ManualSMS
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any, details: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
                setDataNode(details);
              }}
            />
          ),
        },
        {
          title: "Manual Call",
          description: "Manual Call",
          icon: <IoCallOutline className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <ManualCall
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any, details: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
                setDataNode(details);
              }}
            />
          ),
        },
        {
          title: "GMB Messaging",
          description: "GMB Messaging",
          icon: <BiMessageDots className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <GMBMessaging
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any, details: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
                setDataNode(details);
              }}
            />
          ),
        },
      ],
    },
    {
      title: "CRM",
      subContent: [
        {
          title: "Add Contact Tag ",
          description: "Add Contact Tag ",
          icon: <MdOutlinePermContactCalendar className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <AddContactTag
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any, details: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
                setDataNode(details);
              }}
            />
          ),
        },
        {
          title: "Remove Contact Tag ",
          description: " Remove Contact Tag",
          icon: <MdOutlineContactPhone className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <RemoveContactTag
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any, details: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
                setDataNode(details);
              }}
            />
          ),
        },
        {
          title: "Create/Update Opportunity ",
          description: "Create/Update Opportunity ",
          icon: <FaPencilRuler className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <CreateUpdateOpportunity
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any, details: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
                setDataNode(details);
              }}
            />
          ),
        },
        {
          title: "Add To Notes ",
          description: " Add To Notes",
          icon: <MdSpeakerNotes className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <AddToNotes
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any, details: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
                setDataNode(details);
              }}
            />
          ),
        },
        {
          title: " Assign To User",
          description: " Assign To User",
          icon: <FiUserPlus className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <AssignToUser
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any, details: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
                setDataNode(details);
              }}
            />
          ),
        },
        {
          title: "Remove Assigned User ",
          description: " Remove Assigned User",
          icon: <FiUserMinus className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <RemoveAssignedUser
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any, details: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
                setDataNode(details);
              }}
            />
          ),
        },
        {
          title: "Set Event Start Date ",
          description: "Set Event Start Date ",
          icon: <MdEventAvailable className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <SetEventStartDate
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any, details: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
                setDataNode(details);
              }}
            />
          ),
        },
        {
          title: "Add To Workflow ",
          description: " Add To Workflow",
          icon: <BsHddNetwork className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <AddToWorkFlow
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any, details: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
                setDataNode(details);
              }}
            />
          ),
        },
        {
          title: "Remove From Workflow ",
          description: "Remove From Workflow",
          icon: <IoGitNetworkOutline className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <RemoveFromWorkFlow
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any, details: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
                setDataNode(details);
              }}
            />
          ),
        },
        {
          title: "Remove From All Workflows ",
          description: " Remove From All Workflows",
          icon: <MdWorkspaces className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <RemoveFromAllWorkFlow
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any, details: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
                setDataNode(details);
              }}
            />
          ),
        },
        {
          title: " Remove Opportunity",
          description: "Remove Opportunity ",
          icon: <CgRemove className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <RemoveOpportunity
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any, details: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
                setDataNode(details);
              }}
            />
          ),
        },
        {
          title: " Send Internal Notification",
          description: "Send Internal Notification ",
          icon: <IoNotificationsOutline className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <SendInternalNotification
              onDataStore={(item: any, actionTitle: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
              }}
            />
          ),
        },
        {
          title: "Set Contact DND",
          description: " Set Contact DND",
          icon: <AiOutlineContacts className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <SetContactDND
              onDataStore={(item: any, actionTitle: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
              }}
            />
          ),
        },
        {
          title: " Edit Conversation",
          description: "Edit Conversation ",
          icon: <BiConversation className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <EditConversation
              onDataStore={(item: any, actionTitle: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
              }}
            />
          ),
        },
        {
          title: "Send Review Request ",
          description: " Send Review Request",
          icon: <MdOutlineRateReview className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <SendReviewRequest
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any, details: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
                setDataNode(details);
              }}
            />
          ),
        },
        {
          title: "Stripe One Time Charge ",
          description: "Stripe One Time Charge ",
          icon: <TbBrandStripe className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <StripeOneTimeCharge
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any, details: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
                setDataNode(details);
              }}
            />
          ),
        },
        {
          title: "Update Appointment Status ",
          description: "Update Appointment Status",
          icon: <BsCalendarWeek className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <AppointmentStatus
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any, details: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
                setDataNode(details);
              }}
            />
          ),
        },
        {
          title: "Add Task ",
          description: "Add Task",
          icon: <FaTasks className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <AddTask
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any, details: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
                setDataNode(details);
              }}
            />
          ),
        },
        {
          title: "Update Contact Field",
          description: "Update Contact Field",
          icon: <MdOutlineContactEmergency className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <UpdateContactField
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any, details: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
                setDataNode(details);
              }}
            />
          ),
        },
        {
          title: "Facebook - Conversion API ",
          description: "Facebook - Conversion API ",
          icon: <FiFacebook className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <FacebookConversion
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any, details: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
                setDataNode(details);
              }}
            />
          ),
        },
        {
          title: " Update Custom Value ",
          description: " Update Custom Value ",
          icon: <IoCreateOutline className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <UpdateCustomValue
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any, details: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
                setDataNode(details);
              }}
            />
          ),
        },
      ],
    },
    {
      title: "Conditions and Workflow",
      subContent: [
        {
          title: "If/Else",
          description: "If/Else",
          icon: <FaNetworkWired className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <SendIfElseForm
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any, details: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
                setDataNode(details);
              }}
            />
          ),
        },
        {
          title: "Wait",
          description: " Wait ",
          icon: <BsPatchExclamation className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <WaitForm
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any, details: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
                setDataNode(details);
              }}
            />
          ),
        },
        {
          title: "Webhook ",
          description: " Webhook ",
          icon: <MdWebhook className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <WebHooks
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any, details: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
                setDataNode(details);
              }}
            />
          ),
        },
        {
          title: "Go To",
          description: "Go To",
          icon: <BsArrow90DegRight className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <GoTo
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any, details: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
                setDataNode(details);
              }}
            />
          ),
        },
        {
          title: "Math Operation",
          description: "Math Operation",
          icon: <BiMath className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <MathOperation
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any, details: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
                setDataNode(details);
              }}
            />
          ),
        },
        {
          title: "Goal Event",
          description: "Goal Event",
          icon: <RxMagnifyingGlass className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <GoalEvent
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any, details: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
                setDataNode(details);
              }}
            />
          ),
        },
        // {
        //   title: "Loop",
        //   description: "Loop",
        //   icon: <MdLoop className="h-6 w-6 mr-1" />,
        //   link: "#",
        //   form: (
        //     <OtherForm
        //       onClose={(item: any) => {
        //         setIsFlyOutVisible(false);
        //       }}
        //       onDataStore={(item: any) => {
        //         setModalData(item);
        //         setIsFlyOutVisible(false);
        //         updateActionData(actionTitle);
        //         updateForm(item);
        //       }}
        //     />
        //   ),
        // },
      ],
    },
  ];

  return (
    <div>
      <WorkflowFlyout
        visibility={isFlyOutVisible}
        onClose={() => setIsFlyOutVisible(false)}
        renderData={
          <TriggerList
            components={formItem}
            onClose={() => {
              setIsFlyOutVisible(false);
            }}
          />
        }
      />
      <div className="flex justify-between items-center  ">
        <p className="text-dark font-semibold fontStrawFord text-base pb-3 pt-3 leading-5">
          Choose an
        </p>
        <button onClick={() => onClose(false)}>
          <XMarkIcon className="h-5 w-5 text-FontGray" />
        </button>
      </div>

      <div className="mb-2">
        {actionData.map((item: any, index: any) => (
          <div key={index}>
            <p className="text-gray-600 font-semibold text-base pb-3 pt-3 leading-5 fontStrawFord">
              {item?.title}
            </p>
            <div className="flex flex-wrap overflow-auto scrollbar-hidden">
              {item?.subContent?.map((mainData: any, mainIndex: any) => (
                <div
                  onClick={() =>
                    //   {
                    //   if (mainData?.title == "If/Else") {
                    //     updateActionData(mainData?.title);
                    //     setActionTitle(mainData?.title);
                    //     setItem(mainData?.title);
                    //   } else {
                    //     setFormItem(mainData?.form);
                    //     setIsFlyOutVisible(true);
                    //     setActionTitle(mainData?.title);
                    //     setItem(mainData?.title);
                    //   }
                    //   setTitleTriggerState(item?.title);
                    //   setActionDataState(mainData?.title);
                    // }
                    {
                      setFormItem(mainData?.form);
                      setIsFlyOutVisible(true);
                      setActionTitle(mainData?.title);
                      setItem(mainData?.title);
                      setTitleTriggerState(item?.title);
                      setActionDataState(mainData?.title);
                    }
                  }
                  key={mainIndex}
                  className="cursor-pointer w-full md:w-1/2 lg:w-1/3  pr-4 mb-3"
                >
                  <div className="flex justify-start items-start border-[1px] border-lightGray bg-white rounded-md py-3 px-2">
                    <div className="text-blueHeader">{mainData?.icon}</div>
                    <div className="pl-3">
                      <p className="text-dark font-semibold text-[13px] fontStrawFord">
                        {mainData?.title}
                      </p>
                      <p className="text-gray-500 font-medium text-[11px] fontStrawFord">
                        {mainData?.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
