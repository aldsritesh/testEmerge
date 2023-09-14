import { ChevronLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
// import data from "./data";
import WorkflowFlyout from "@/components/workflow/WorkflowFlyout";
import { useEffect, useState } from "react";
import {
  ArrowsRightLeftIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useRecoilState } from "recoil";
import { nameTrigger } from "@/atoms/nameTrigger";
import moment from "moment";
import { HiOutlineExternalLink } from "react-icons/hi";
import BusinessName from "./MostUsed/BusinessName";
import CompanyName from "./MostUsed/CompanyName";
import Email from "./MostUsed/Email";
import FirstName from "./MostUsed/FirstName";
import LastName from "./MostUsed/LastName";
import Tags from "./MostUsed/Tag";
import WildCardName from "./MostUsed/WildCardName";
import Address from "./ContactInformation/Address";
import Assigned from "./ContactInformation/Assigned";
import BirthDate from "./ContactInformation/BirthDate";
import City from "./ContactInformation/City";
import Created from "./ContactInformation/Created";
import Dnd from "./ContactInformation/Dnd";
import Phone from "./ContactInformation/Phone";
import PostalZipCode from "./ContactInformation/PostalZipCode";
import Source from "./ContactInformation/Source";
import State from "./ContactInformation/State";
import StreetName from "./ContactInformation/StreetName";
import TikTokLeadid from "./ContactInformation/TikTokLeadid";
import Type from "./ContactInformation/Type";
import Campaign from "./ContactActivity/Campaign";
import Import from "./ContactActivity/Import";
import LastActivity from "./ContactActivity/LastActivity";
import LastActivityType from "./ContactActivity/LastActivityType";
import LastAppointment from "./ContactActivity/LastAppointment";
import Updated from "./ContactActivity/Updated";
import WorkFlowActive from "./ContactActivity/WorkFlowActive";
import WorkFlowFinished from "./ContactActivity/WorkFlowFinished";
import Age from "./OpportunityInformation/Age";
import PipeLine from "./OpportunityInformation/PipeLine";
import PipeLineStage from "./OpportunityInformation/PipelineStage";
import PipeLineStatus from "./OpportunityInformation/PipeLineStatus";
import Offer from "./MemberShip/Offer";
import Product from "./MemberShip/Product";
import AttributionOccurence from "./Attribution/AttributionOccuence";
import AttributionAdGroupId from "./Attribution/AttributionAdGroupId";
import AttributionAdId from "./Attribution/AttributionAdId";
import AttributionCampaign from "./Attribution/AttributionCampaign";
import AttributionCampaignId from "./Attribution/AttributionCampaignId";
import AttributionContent from "./Attribution/AttributionContent";
import AttributionFbId from "./Attribution/AttributionFbId";
import AttributionGoogleId from "./Attribution/AttributionGoogleId";
import AttributionKeyword from "./Attribution/AttributionKeyword";
import AttributionMatchType from "./Attribution/AttributionMatchType";
import AttributionMedium from "./Attribution/AttributionMedium";
import AttributionSessionSource from "./Attribution/AttributionSessionSource";
import AttributionSource from "./Attribution/AttributionSource";
import AttributionTeam from "./Attribution/AttributionTeam";
import BeforeWe from "./CustomFields/BeforeWe";
import PainAffecting from "./CustomFields/PainAffecting";
import CancellationReason from "./CustomFields/CancellationReason";
import PhysicalTherapist from "./CustomFields/PhysicalTherapist";
import HearAboutUs from "./CustomFields/HearAboutUs";
import ExperiencingPain from "./CustomFields/ExperiencingPain";
import HowOld from "./CustomFields/HowOld";
import UnbearablePain from "./CustomFields/UnbearablePain";
import AppointmentTime from "./CustomFields/AppointmentTime";
import IfYes from "./CustomFields/IfYes";
import PainCause from "./CustomFields/PainCause";
import TicketCompletedBy from "./CustomFields/TicketCompletedBy";
import TicketStatus from "./CustomFields/TicketStatus";
import AlleviatePain from "./CustomFields/alleviatePain";
import PainType from "./CustomFields/PainType";

export default function ContactFilter({ onClose, updateData }: any) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [actionData, setActionData] = useState("");
  const [formItem, setFormItem] = useState<any>(null);

  const data = [
    {
      title: "most used",
      subContent: [
        {
          title: "Business Name ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <BusinessName
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "Company Name ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <CompanyName
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "Email ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <Email
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "First Name ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <FirstName
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "Last Name ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <LastName
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "Tag ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <Tags
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "WildCard Name ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <WildCardName
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
      ],
    },
    {
      title: "contact information",
      subContent: [
        {
          title: "Address ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <Address
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "Assigned ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <Assigned
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "Birth Date ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <BirthDate
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "Business Name ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <BusinessName
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "City ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <City
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "Company Name ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <CompanyName
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "Created ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <Created
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "Dnd ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <Dnd
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "Email ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <Email
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "First Name ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <FirstName
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "Last Name ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <LastName
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "Phone",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <Phone
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "Postal Zip Code ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <PostalZipCode
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "Source ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <Source
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "State ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <State
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "Street Name ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <StreetName
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "Tag ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <Tags
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "TikTok Leadid ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <TikTokLeadid
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "Type ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <Type
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "WildCard Name ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <WildCardName
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
      ],
    },
    {
      title: "contact activity",
      subContent: [
        {
          title: "Campaign ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <Campaign
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "Import ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <Import
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "Last Activity ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <LastActivity
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "Last Activity Type ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <LastActivityType
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "Last Appointment - Confirmed/Open ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <LastAppointment
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "Updated ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <Updated
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "WorkFlow(Active) ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <WorkFlowActive
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "WorkFlow(Finished) ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <WorkFlowFinished
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
      ],
    },
    {
      title: "Opportunity Information",
      subContent: [
        {
          title: "Age ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <Age
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "Pipeline ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <PipeLine
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "Pipeline Stage ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <PipeLineStage
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },

        {
          title: "Pipeline Status ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <PipeLineStatus
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
      ],
    },
    {
      title: "MemberShip",
      subContent: [
        {
          title: "Offer ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <Offer
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "Product ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <Product
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
      ],
    },
    {
      title: "Attribution",
      subContent: [
        {
          title: "Attribution (Occurence)",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <AttributionOccurence
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "Attribution Ad Group Id",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <AttributionAdGroupId
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "Attribution Ad Id",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <AttributionAdId
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "Attribution Campaign",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <AttributionCampaign
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "Attribution Campaign Id",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <AttributionCampaignId
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "Attribution Content ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <AttributionContent
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "Attribution FB ClickId ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <AttributionFbId
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "Attribution Google ClickId ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <AttributionGoogleId
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "Attribution Keyword ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <AttributionKeyword
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "Attribution Match Type ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <AttributionMatchType
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "Attribution Medium ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <AttributionMedium
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "Attribution Session Source ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <AttributionSessionSource
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "Attribution Source ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <AttributionSource
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },

        {
          title: "Attribution Team ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <AttributionTeam
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
      ],
    },
    {
      title: "Custom Fields",
      subContent: [
        {
          title:
            "Before we forward, I wanted to let you know this clinic does accept both cash and insurance when it comes to any future treatments you may receive. Do you have an insurance carrier you'd like me to take note of ?",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <BeforeWe
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "Birth Date",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <BirthDate
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title:
            "Can you tell me a little more about how this pain is affecting you ?",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <PainAffecting
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "Cancellation Reason ?",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <CancellationReason
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title:
            "Have you seen a Physical Therapist/Chiropractor in the past ?",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <PhysicalTherapist
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "How did you hear about us ?",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <HearAboutUs
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "How long have you been experiencing pain ?",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <ExperiencingPain
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "How old are you ?",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <HowOld
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title:
            "How UnbearablePain is this pain , on a scale of 1-5 ? 5 being the worst?",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <UnbearablePain
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title:
            "I have just one last thing to ask before we confirm your Appointment time. That said, our doctors and staff are committed to helping people who are committed to bettering their health and wellness. Will you be able to commit to the time I schedule with you today?",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <AppointmentTime
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "If yes , How long ago",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <IfYes
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "Is this pain caused by a chronic condition ? ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <PainCause
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "Ticket Completed By  ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <TicketCompletedBy
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "Ticket Status Completed As  ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <TicketStatus
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "What else have you tried to alleviate your pain ? ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <AlleviatePain
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
        {
          title: "Where are you experiencing pain ? ",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <PainType
              actionData={actionData}
              onClose={() => {
                setIsOpenModal(false);
                onClose();
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
                onClose();
              }}
            />
          ),
        },
      ],
    },
  ];

  const [newData, setNewData] = useState(data);

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
                Back to Options
              </p>
            </div>

            <div className="px-2  ">{formItem}</div>
          </div>
        }
      />

      <div className={` ${isOpenModal ? "hidden" : "block"}  py-3`}>
        <div className="flex justify-between items-start border-b-[1px] border-gray-300 pb-2 pl-4 pr-4 ">
          <div className="pr-4">
            <p className="fontStrawFord text-xl text-dark font-semibold">
              Filter Contacts
            </p>
            {/* <p className="fontStrawFord text-sm text-gray-500 font-medium py-2">
              Adds a workflow trigger, and on execution, the contacts get added
              to the workflow
            </p> */}
          </div>
          <button onClick={onClose} className="w-10 pt-2">
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
            <li key={index} className="  bg-white mb-3 border-b  px-4 pb-3">
              <p
                className={`fontStrawFord   capitalize text-dark text-lg font-semibold  tracking-wide mb-2`}
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
                        onChange={() => {
                          setFormItem(mainData?.form);
                          setActionData(mainData?.title);
                          setIsOpenModal(true);
                        }}
                      />
                      <div className="pl-2">
                        <p
                          className={`fontStrawFord   capitalize text-gray-600 text-base font-semibold  tracking-wide ml-2 `}
                        >
                          {mainData?.title}
                        </p>
                        <p
                          className={`fontStrawFord  mt-1 capitalize text-gray-500 text-xs font-normal  tracking-wide ml-2 `}
                        >
                          Updated at {moment().format("MMM DD, YYYY")} by John
                          Kuy
                        </p>
                      </div>

                      {/* <div className="absolute top-2 right-2">
                        <HiOutlineExternalLink className="h-4 w-4 text-gray-400" />
                      </div> */}
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
