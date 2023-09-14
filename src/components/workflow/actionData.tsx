import {
  BellAlertIcon,
  EnvelopeIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";

const actionData = [
  {
    title: "Building Blocks",
    subContent: [
      {
        title: "Delay",
        description: "Delay an action",
        icon: <ExclamationCircleIcon className="h-6 w-6 mr-1" />,
        link: "#",
      },
      {
        title: "If/Then Branch",
        description: "Action base on condition",
        icon: <ExclamationTriangleIcon className="h-6 w-6 mr-1" />,
        link: "#",
      },
    ],
  },
  {
    title: "Productivity",
    subContent: [
      {
        title: "Create Task",
        description: "Add new tasks base on the conditions",
        icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
        link: "#",
      },
      {
        title: "Send Interval SMS",
        description: "SMS involved user",
        icon: <EnvelopeIcon className="h-6 w-6 mr-1" />,
        link: "#",
      },
      {
        title: "Send Notifications",
        description: "Notify involved user",
        icon: <BellAlertIcon className="h-6 w-6 mr-1" />,
        link: "#",
      },
    ],
  },

  {
    title: "Marketing",
  },
];

export default actionData;
