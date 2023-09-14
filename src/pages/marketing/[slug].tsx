import { tableData } from "@/components/Marketing/Campaign/Main/Data";
import Custom404 from "../404";
import { createContext, useContext } from "react";
import Sidebar from "@/components/Marketing/Campaign/Details/MarketingAssets/Sidebar";
import Main from "@/components/Marketing/Campaign/Details/Main";
import { GlobalContext } from "@/layouts/GlobalLayout";

export async function getServerSideProps({ query }: any) {
  try {
    const details = tableData.filter((item: any) => item.id === query.slug);

    // Convert the dateCreated property to a string representation
    details.forEach((detail: any) => {
      detail.dateCreated = detail.dateCreated.toISOString();
    });

    return {
      props: { details },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
}

interface IMarketingDetails {
  details: any;
}

export default function MarketingDetails({ details }: IMarketingDetails) {
  const value: any = {};
  const marketing = details[0];

  const ctx = useContext(GlobalContext);
  ctx.setTitle("Marketing");

  return details.length >= 1 ? (
    <>
      <main className="bg-white md:h-[100vh] pb-24 overflow-hidden  relative">
        <div className="flex">
          <div className="w-[23%]">
            <Sidebar marketing={marketing} />
          </div>
          <div className="w-[78%]">
            <Main marketing={marketing} />
          </div>
        </div>
      </main>
    </>
  ) : (
    <Custom404 />
  );
}
