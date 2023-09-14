import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { BsHouseDoor } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import {
  HiOutlineDocumentReport,
  HiOutlineOfficeBuilding,
  HiOutlineTemplate,
} from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { TfiAnnouncement } from "react-icons/tfi";

const data = [
  {
    title: "Locations",
    icon: <IoLocationOutline className="h-5 w-5 text-FontGray" />,
    link: "/conversations/settings/location",
  },
  {
    title: "Teams",
    icon: <FiUsers className="h-5 w-5 text-FontGray" />,
    link: "",
  },
  {
    title: "Reports",
    icon: <HiOutlineDocumentReport className="h-5 w-5 text-FontGray" />,
    link: "",
  },
  {
    title: "Ticket Status",
    icon: <BiMessageDetail className="h-5 w-5 text-FontGray" />,
    link: "/conversations/settings/ticket-status",
  },
  // {
  //   title: "FAQ Template",
  //   icon: <HiOutlineTemplate className="h-5 w-5 text-FontGray" />,
  //   link: "",
  // },
  // {
  //   title: "FAQ - Location",
  //   icon: <AiOutlineQuestionCircle className="h-5 w-5 text-FontGray" />,
  //   link: "/conversations/settings/location",
  // },
  {
    title: "Company",
    icon: <HiOutlineOfficeBuilding className="h-5 w-5 text-FontGray" />,
    link: "/conversations/settings/company",
  },
  {
    title: "Profile",
    icon: <FaRegUser className="h-5 w-5 text-FontGray" />,
    link: "/conversations/settings/profile",
  },
];

export default data;
