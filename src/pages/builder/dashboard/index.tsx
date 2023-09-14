import DashboardManager from "@/components/Dashboard/PublishDashboard/DashboardManager";
import { GlobalContext } from "@/layouts/GlobalLayout";
import React, { useContext } from "react";

export default function DashboardBuilder() {
  const ctx = useContext(GlobalContext);
  ctx.setTitle("Dashboard");

  return (
    <div>
      <DashboardManager />
    </div>
  );
}
