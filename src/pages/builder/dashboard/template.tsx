import { Provider } from "react-redux";
import store from "@/redux/Index";
import DashboardTemplate from "@/components/Dashboard/DashboardTemplate";
import { GlobalContext } from "@/layouts/GlobalLayout";
import { useContext } from "react";

export default function Create() {
  const ctx = useContext(GlobalContext);
  ctx.setTitle("Dashboard Builder");

  return (
    <Provider store={store}>
      <DashboardTemplate />
    </Provider>
  );
}
