import { baseUrl } from "@/config/APIConstants";
import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import Header from "./Header";
import Table from "./Table";
import { GlobalContext } from "@/layouts/GlobalLayout";
import { useAuthentication } from "@/controllers/auth";

export default function FormsBuilder() {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const formctx = useContext(GlobalContext);
  const { location, token }: any = useAuthentication();

  useEffect(() => {
    // if (location != null) {
    axios
      .get(`${baseUrl}forms/location/${location?.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }: any) => {
        setData(data.forms);

        setIsLoading(false);
      })
      .catch((error: any) => {
        console.log(error);
      });
    // }
  }, [formctx?.customFieldRefresh, location, token]);
  return (
    <div className="w-full ">
      <Header />
      <Table data={data} isLoading={isLoading} />
    </div>
  );
}
