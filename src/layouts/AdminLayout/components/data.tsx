import {
  BsDropbox,
  BsFillCalendarCheckFill,
  BsJournalBookmark,
  BsJournalBookmarkFill,
} from "react-icons/bs";
import { MdLeaderboard, MdSpaceDashboard } from "react-icons/md";
import { SiGooglechat } from "react-icons/si";
import { RiContactsFill } from "react-icons/ri";
import {
  BsKanbanFill,
  BsFillCreditCard2BackFill,
  BsDiagram2Fill,
} from "react-icons/bs";
import { TfiAnnouncement } from "react-icons/tfi";
import { AiFillSound, AiOutlineBuild, AiTwotoneBook } from "react-icons/ai";

const data = [
  {
    title: "First",
    subContent: [
      {
        title: "Dashboard",
        iconCustom: <MdSpaceDashboard className="h-5 w-5" />,
        icon: require("../../../../public/images/layouts/1.svg"),
        activeIcon: require("../../../../public/images/layouts/11.svg"),
        link: " ",
      },
      {
        title: "PGD Revenue",
        iconCustom: <BsFillCalendarCheckFill className="h-5 w-5" />,
        icon: require("../../../../public/images/layouts/2.svg"),
        activeIcon: require("../../../../public/images/layouts/22.svg"),
        link: " ",
      },
      {
        title: "Rebilling Configurator",
        iconCustom: <SiGooglechat className="h-5 w-5" />,
        icon: require("../../../../public/images/layouts/3.svg"),
        activeIcon: require("../../../../public/images/layouts/33.svg"),
        link: " ",
      },
      {
        title: "Sub Accounts",
        iconCustom: <RiContactsFill className="h-5 w-5" />,
        icon: require("../../../../public/images/layouts/4.svg"),
        activeIcon: require("../../../../public/images/layouts/44.svg"),
        link: "/superadmin/subaccount",
      },
      {
        title: "Snapshots",
        iconCustom: <BsKanbanFill className="h-5 w-5" />,
        icon: require("../../../../public/images/layouts/5.svg"),
        activeIcon: require("../../../../public/images/layouts/55.svg"),
        link: " ",
      },
      {
        title: "Media Reporting ",
        iconCustom: <BsFillCreditCard2BackFill className="h-5 w-5" />,
        icon: require("../../../../public/images/layouts/6.svg"),
        activeIcon: require("../../../../public/images/layouts/66.svg"),
        link: " ",
      },
      {
        title: "Call Center Reporting ",
        iconCustom: <BsFillCreditCard2BackFill className="h-5 w-5" />,
        icon: require("../../../../public/images/layouts/6.svg"),
        activeIcon: require("../../../../public/images/layouts/66.svg"),
        link: " ",
      },
    ],
  },
];

export default data;
