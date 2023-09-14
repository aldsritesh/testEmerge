import {
  ArrowsPointingInIcon,
  ArrowsRightLeftIcon,
  Bars4Icon,
  BuildingOfficeIcon,
  ChartBarIcon,
  GlobeAltIcon,
  IdentificationIcon,
  InboxStackIcon,
  MapIcon,
  PhoneArrowDownLeftIcon,
  SpeakerWaveIcon,
  Square3Stack3DIcon,
  TagIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { BsKanbanFill } from "react-icons/bs";
import { GrResources } from "react-icons/gr";
import { MdSpaceDashboard } from "react-icons/md";
import { SiCrowdsource } from "react-icons/si";

const data = [
  {
    title: "Account",
    subContent: [
      {
        title: "My Profile",
        icon: <UserCircleIcon className="h-5 w-5 text-FontGray" />,
        link: "/settings/my-profile",
      },
      // {
      //   title: "General",
      //   icon: <Bars4Icon className="h-5 w-5 text-FontGray" />,
      //   link: "#",
      // },
      // {
      //   title: "Snippets",
      //   icon: <ArrowsRightLeftIcon className="h-5 w-5 text-FontGray" />,
      //   link: "#",
      // },
    ],
  },
  {
    title: "Company",
    subContent: [
      {
        title: "Company Profile",
        icon: <BuildingOfficeIcon className="h-5 w-5 text-FontGray" />,
        link: "/settings/company-profile",
      },
      {
        title: "Team Members",
        icon: <UsersIcon className="h-5 w-5 text-FontGray" />,
        link: "/settings/team-member",
      },
      {
        title: "Integrations",
        icon: <ArrowsPointingInIcon className="h-5 w-5 text-FontGray" />,
        link: "/settings/integrations",
      },
      // {
      //   title: "Analytics",
      //   icon: <ChartBarIcon className="h-5 w-5 text-FontGray" />,
      //   link: "#",
      // },
    ],
  },

  {
    title: "Configuration",
    subContent: [
      {
        title: "Calendar",
        icon: <MdSpaceDashboard className="h-5 w-5 text-FontGray" />,
        link: "/settings/calendar",
      },
      {
        title: "Custom Fields",
        icon: <Square3Stack3DIcon className="h-5 w-5 text-FontGray" />,
        link: "/settings/custom-fields",
      },
      {
        title: "Custom Values",
        icon: <InboxStackIcon className="h-5 w-5 text-FontGray" />,
        link: "/settings/custom-value",
      },
      {
        title: "Tags",
        icon: <TagIcon className="h-5 w-5 text-FontGray" />,
        link: "/settings/tags",
      },
      {
        title: "Pipeline",
        icon: <BsKanbanFill className="h-5 w-5 text-FontGray" />,
        link: "/settings/pipeline",
      },
      {
        title: "Phone Number",
        icon: <PhoneArrowDownLeftIcon className="h-5 w-5 text-FontGray" />,
        link: "/settings/phone-number",
      },
      {
        title: "Sources",
        icon: <SiCrowdsource className="h-5 w-5 text-FontGray" />,
        link: "/settings/sources",
      },
      {
        title: "Domains",
        icon: <GlobeAltIcon className="h-5 w-5 text-FontGray" />,
        link: "/settings/domain",
      },
    ],
  },
];

export default data;
