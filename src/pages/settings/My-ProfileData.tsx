import ChangePassword from "@/components/Settings/MyProfile/changePassword";
import EmailSignature from "@/components/Settings/MyProfile/emailSignature";
import PersonalData from "@/components/Settings/MyProfile/personalData";
import UserAvailability from "@/components/Settings/MyProfile/userAvailability";
import { baseUrl, userID } from "@/config/APIConstants";
import { useAuthentication } from "@/controllers/auth";
import axios from "axios";
import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";

// export const getServerSideProps: GetServerSideProps = async () => {
//   try {
//     const response = await axios.get(`${baseUrl}users/${userID}`, {
//       headers: { Authorization: `Bearer ${token}` },
//     });

//     const userData = response;

//     return {
//       props: {
//         userData,
//       },
//     };
//   } catch (error) {
//     console.error(error);
//     return {
//       props: {
//         userData: null,
//       },
//     };
//   }
// };

const MyProfileData = ({ lg }: any) => {
  const { location, token }: any = useAuthentication();
  const [userData, setUserData] = useState<any>();
  useEffect(() => {
    axios
      .get(`${baseUrl}users/${userID}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response: any) => {
        setUserData(response.data.user);
        console.log("data", response.data.user);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, []);
  return (
    <div
      className={`w-full lg:w-[${lg}]  bg-gray-50 h-[100vh] scrollbar-hide  overflow-y-scroll pb-20`}
    >
      <div className="  border-b flex items-center justify-between  px-4 pb-3 pt-4">
        <p className="text-[#47494b] text-lg font-semibold">My Profile</p>
      </div>
      <div className="flex flex-wrap px-4 py-4">
        <div className="w-full lg:w-[60%] px-2">
          {userData && <PersonalData data={userData} />}
          <EmailSignature />
        </div>
        <div className="w-full lg:w-[40%]  px-2">
          <ChangePassword />
          <UserAvailability />
        </div>
      </div>
    </div>
  );
};

export default MyProfileData;
