import React from "react";
import ProfileData from "./profileData";
import RingTone from "./ringTone";
import AdvanceSetting from "./advanceSetting";

import SettingsSidebar from "@/components/Conversations/Settings/Sidebar/SettingsSidebar";

const Profile = () => {
  return (
    <div className="flex flex-wrap justify-center ">
      <div className="w-full lg:w-[20%] border-r-[1px]   bg-white    ">
        <SettingsSidebar />
      </div>
      <div className="px-2 lg:w-[80%] my-5 h-[100vh] overflow-y-scroll scrollbar-hide pb-[5%] ">
        <ProfileData />
        <RingTone />
        <AdvanceSetting />
      </div>
    </div>
  );
};

export default Profile;
