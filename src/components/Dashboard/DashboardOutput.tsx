import { GlobalContext } from "@/layouts/GlobalLayout";
import store from "@/redux/Index";
import dynamic from "next/dynamic";
import React, { useContext } from "react";
import { Provider } from "react-redux";

const DashboardManager = dynamic(
  () => import("@/components/Dashboard/Header/DashboardPreview"),
  { ssr: false }
);

export default function DashboardOutput() {
  const ctx = useContext(GlobalContext);
  ctx.setTitle("Dashboard");

  return (
    <Provider store={store}>
      <DashboardManager SetBoxId={1} />
    </Provider>
  );
}
