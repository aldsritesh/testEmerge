import Image from "next/image";
import { MouseEventHandler } from "react";

import Tabs from "../UI/Tabs";
import TreatmentTimeline from "./TreatmentTimeline";

import { TfiAngleDown, TfiAngleUp } from "react-icons/tfi";
import CustomDropDown, { CustomDropDownData } from "../controls/CustomDropDown";
import ChatBody from "../Conversations/ChatBody";
import BasicInfo from "./BasicInfo";

import Center from "@/components/contacts/Center";
import RightSidebar from "@/components/contacts/RightSidebar";
import LeftSidebar from "@/components/contacts/LeftSidebar";
import { GetServerSidePropsContext } from "next";
import { EContactType, IContactData } from "@/components/Interfaces";
import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import { baseUrl, token } from "@/config/APIConstants";
import Notes from "./Notes";

interface IAppointmentDetailsProps {
  visibility: boolean;
  onClose: MouseEventHandler;
}

interface IProps {
  data: IContactData;
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { id } = ctx.query;

  // const token = process.env.NEXT_PUBLIC_API_TOKEN;

  // const token = process.env.NEXT_PUBLIC_API_TOKEN;
  // const token = ctx.req.cookies.jwt;
  // if (!token) {
  //   return {
  //     redirect: {
  //       destination: '/login',
  //       permanent: false,
  //     },
  //   };
  // }

  const res: IContactData = {
    contact: {
      id: "",
      ownerUserID: "",
      pipelineID: "",
      pipelineStageID: "",
      fullName: "",
      emailAddress: "",
      phoneNumber: "",
      addedOn: "",
      contactType: EContactType.LEAD,
      tags: [],
      leadSources: [],
    },
    contactProfile: {
      contactID: "",
      dateOfBirth: "",
      dateOfInjury: "",
      ssn: "",
    },
    contactAddress: {
      contactID: "",
      street: "",
      city: "",
      region: "",
      postalCode: "",
      country: "",
    },
  };

  await axios
    .get(`${baseUrl}/contacts/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      console.log("response.data", response.data);
      res.contact = response.data.contact;
    })
    .catch((err) => {
      console.log(err);
    });

  if (res.contact.id === " ") {
    return {
      notFound: true,
    };
  }

  await axios
    .get(`${baseUrl}/contacts/${id}/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      console.log("response.data", response.data);
      res.contactProfile = response.data;
    })
    .catch((err) => {
      console.log(err);
    });

  await axios
    .get(`${baseUrl}/contacts/${id}/address`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      console.log("response.data", response.data);
      res.contactAddress = response.data;
    })
    .catch((err) => {
      console.log(err);
    });

  // await axios.get(`/api/contacts/${id}/address`, {
  //   headers: { Authorization: `Bearer ${token}` }
  // }).then((response) => {
  //   console.log("response.data", response.data)
  //   res.data.contactAddress = response.data
  // }).catch((err) => {
  //   res.data = err
  // })

  return {
    props: {
      data: res,
    },
  };
}

export default function AppointmentDetails(
  { visibility, onClose }: IAppointmentDetailsProps,
  { data }: IProps
) {
  // console.log("app", data);
  const [isPatientComboBoxVisible, setIsPatientComboBoxVisible] =
    useState(false);
  const [selectedPatient, setSelectedPatient] = useState<any>(null);
  const [selectedStatusIndex, setSelectedStatusIndex] = useState(0);

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const status = [
    {
      label: "Scheduled",
      value: "Scheduled",
      color: "#3773FE",
    },
    {
      label: "Showed",
      value: "Showed",
      color: "#9758D6",
    },
    {
      label: "Showed Late",
      value: "Showed Late",
      color: "#E45F38",
    },
    {
      label: "Completed",
      value: "Completed",
      color: "#54BF6B",
    },
    {
      label: "No Show",
      value: "No Show",
      color: "#FFC107",
    },
    {
      label: "Canceled",
      value: "Canceled",
      color: "#FF0707",
    },
    {
      label: "Rescheduled",
      value: "Rescheduled",
      color: "#9C27B0",
    },
  ];

  const tabs = [
    {
      id: "tab1",
      label: "Basic Info",
      content: <BasicInfo />,
    },
    {
      id: "tab2",
      label: "Treatment Timeline",
      content: <TreatmentTimeline />,
    },
    {
      id: "tab3",
      label: "Conversations",
      content: (
        <div className="overflow-y-hidden h-[80vh]">
          <ChatBody
            chat={{}}
            chatOpen={isChatOpen}
            onClose={() => setIsChatOpen(false)}
            onProfileToggle={() => setShowProfile(!showProfile)}
            chatSelected={false}
          />
        </div>
      ),
    },
    {
      id: "tab4",
      label: "Notes",
      content: <Notes />,
    },
    // {
    //   id: "tab5",
    //   label: "Documents",
    //   content: <TreatmentTimeline />,
    // },
  ];

  return (
    <div
      className={`w-full fixed right-0 top-0 h-full scrollbar-hide z-50 transition-all bg-black overflow-y-scroll ${
        visibility
          ? "translate-x-0 opacity-100 bg-opacity-30"
          : "translate-x-[100%] opacity-0 bg-opacity-0"
      }`}
    >
      <div className="absolute h-full w-full z-40 " onClick={onClose}></div>
      <div className="bg-mainBg w-full  md:w-[95%] lg:w-[55%] absolute right-0 min-h-full h-auto z-50">
        <div className="py-4 px-4 md:px-4">
          <h3 className="font-semibold border-b-gray-200 border-b pb-3">
            Appointment Details
          </h3>

          <div className="mt-5 flex flex-wrap justify-center md:justify-between items-center">
            <div className="flex items-center flex-wrap">
              <div>
                <Image
                  src={require("../../../public/dummy/dummy-doc.png")}
                  alt=""
                  className="rounded-full"
                  width={40}
                  height={40}
                />
              </div>
              <div className="ml-4">
                <div className="flex justify-start items-start">
                  <h4 className="font-bold"> Dimas Rome</h4>
                  <span className="bg-[#ecf0f7] text-FontGray text-[10px] px-1.5 py-1 ml-2 font-medium">
                    Member
                  </span>
                </div>
                <p className="text-xs text-gray-500">dimas.rome@gmail.com</p>
              </div>
            </div>

            <div className="flex justify-end items-end mt-5 lg:mt-0 w-full lg:w-[30%]">
              <CustomDropDown
                data={status}
                onChange={(item: CustomDropDownData, index: number) => {
                  console.log(item);
                  setSelectedStatusIndex(index);
                }}
                activeIndex={selectedStatusIndex}
              />
            </div>
          </div>
        </div>
        <div>
          <Tabs tabs={tabs} />
        </div>
      </div>
    </div>
  );
}
