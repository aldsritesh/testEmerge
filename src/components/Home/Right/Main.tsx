import Tabs from "@/components/UI/Tabs";
import React from "react";
import TextInput from "../../controls/TextInput";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import MainBody from "./Body";
import Other from "./Other";

export default function Main() {
  const tabs = [
    {
      id: "tab1",
      label: "Activity",
      content: <MainBody />,
    },
    {
      id: "tab2",
      label: "Notes",
      content: <Other />,
    },
    {
      id: "tab3",
      label: "Emails",
      content: <Other />,
    },
    {
      id: "tab4",
      label: "Calls",
      content: <Other />,
    },
    {
      id: "tab5",
      label: "Task",
      content: <Other />,
    },
    {
      id: "tab6",
      label: "Meetings",
      content: <Other />,
    },
  ];

  return (
    <div className="w-full h-screen overflow-y-scroll scrollbar-hide p-6">
      <div className="mb-5">
        <TextInput
          placeholder="Search activity, notes, email and more"
          lefticon={
            <MagnifyingGlassIcon className="w-6 h-6 text-gray-400 font-bold" />
          }
        />
      </div>
      <div>
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}
