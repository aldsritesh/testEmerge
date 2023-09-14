import Dashboard from "@/components/Dashboard/Dashboard";
import { GlobalContext } from "@/layouts/GlobalLayout";
import { useContext } from "react";

export default function Create() {
  const ctx = useContext(GlobalContext);
  ctx.setTitle("Dashboard Builder");

  return (
    // <Provider store={store}>
    <Dashboard />
    // </Provider>
  );
}
