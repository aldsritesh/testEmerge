import React, { useState } from "react";
import Header from "./Header";
import Table from "./Table";

export default function WebsiteBuilder() {
  const [data, setData] = useState<any[]>([
    {
      site_name: {
        title: "Physio Therapy ",
        url: "physiotherapy.com",
      },
      page_views: "29",
      options: "5",
      sales: "125",
      revenue: "24800",
      id: "1",
      other: "",
    },
    {
      site_name: {
        title: "Chirotherapy",
        url: "chirotherapy.com",
      },
      page_views: "29",
      options: "5",
      sales: "125",
      revenue: "24800",
      id: "2",
      other: "",
    },
    {
      site_name: {
        title: "Medical ",
        url: "medical.com",
      },
      page_views: "29",
      options: "5",
      sales: "125",
      revenue: "24800",
      id: "3",
      other: "",
    },
    {
      site_name: {
        title: "AcuTemplate ",
        url: "acutherapytemplate.com",
      },
      page_views: "29",
      options: "5",
      sales: "125",
      revenue: "24800",
      id: "3",
      other: "",
    },
  ]);

  return (
    <div className="w-full ">
      <Header />
      <Table data={data} />
    </div>
  );
}
