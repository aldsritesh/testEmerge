import TabLeads from "@/components/Contact/TabLeads";
import { GlobalContext } from "@/layouts/GlobalLayout";
import Image from "next/image";
import { MouseEventHandler, useContext, useEffect, useState } from "react";
import { GetServerSidePropsContext } from "next";
import ContactsTable from "@/components/contacts/table/ContactsTable";
import axios from "axios";

import { baseUrl } from "@/config/APIConstants";
import { useAuthentication } from "@/controllers/auth";

interface IAppointmentDetailsProps {
  visibility: boolean;
  onClose: MouseEventHandler;
}

export default function Contacts() {
  const ctx = useContext(GlobalContext);
  ctx.setTitle("Contact");

  const [contactData, setContactData] = useState<any>([]);
  const { location, token }: any = useAuthentication();

  useEffect(() => {
    axios
      .post(
        `${baseUrl}contacts/filter`,
        {
          locationID: location?.id,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(({ data }) => {
        console.log("all Contacts-->", data);
        setContactData(data.contacts);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="overflow-hidden ">
        <div className="  bg-white w-full  overflow-hidden">
          <ContactsTable data={contactData} setData={setContactData} />
        </div>
      </div>
    </div>
  );
}
