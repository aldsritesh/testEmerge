/* eslint-disable react-hooks/exhaustive-deps */
import CalendarSetting from "@/components/Dashboard/DashboardForms/CalendarSetting";
import ChartSetting from "@/components/Dashboard/DashboardForms/ChartSetting";
import DealsRevenueSetting from "@/components/Dashboard/DashboardForms/DealsRevenueSetting";
import EmailChartSetting from "@/components/Dashboard/DashboardForms/EmailChartSetting";
import GanttChartSetting from "@/components/Dashboard/DashboardForms/GanttchartSetting";
import NumberSetting from "@/components/Dashboard/DashboardForms/NumberSetting";
import SalesPipelineSetting from "@/components/Dashboard/DashboardForms/SalesPipelineSetting";
import SimpleDataSetting from "@/components/Dashboard/DashboardForms/SimpleDataSetting";
import TaskSetting from "@/components/Dashboard/DashboardForms/TaskSetting";
import DashboardBuilderHeader from "@/components/Dashboard/Header/DashboardBuilderHeader";
import GridLayout from "@/components/DashboardBuilder/GridLayout";
import { dashboardFormConfig } from "@/config/dashboardFormConfig";
import React, {
  useState,
  createContext,
  useReducer,
  useEffect,
  useContext,
} from "react";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import DashboardBuilderSidebar from "../DashboardBuilderSidebar";
import DashboardTabHeader from "../DashboardTabHeader";
import { dashboardDataState } from "@/atoms/dashboardData";
import { useRecoilState } from "recoil";
import axios from "axios";
import { baseUrl } from "@/config/APIConstants";
import { useRouter } from "next/router";
import { any } from "prop-types";
import { GlobalContext } from "@/layouts/GlobalLayout";
import { useAuthentication } from "@/controllers/auth";

type State = {
  layout: any[];
  isReady: boolean;
};

const initialState: State = {
  layout: [
    // { i: "a", x: 0, y: 0, w: 3, h: 3 },
    // { i: "b", x: 1, y: 0, w: 3, h: 3 },
    // { i: "c", x: 4, y: 0, w: 3, h: 3 },
    // { i: "d", x: 0, y: 2, w: 3, h: 3 },
  ],
  isReady: true,
};

type Action = {
  type:
    | "UPDATE_LAYOUT"
    | "ADD_NEW"
    | "INITIAL_UPDATE"
    | "LOADING_TOGGLE"
    | "DELETE_ELEMENT"
    | "DUPLICATE_ELEMENT"
    | "REFRESH_LAYOUT_ITEM";
  payload: any;
};

const layoutReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "INITIAL_UPDATE":
      return initialState;
    case "UPDATE_LAYOUT":
      return { ...state, layout: action.payload };
    case "ADD_NEW":
      return { ...state, layout: [...state.layout, action.payload] };
    case "LOADING_TOGGLE":
      return { ...state, isReady: !state.isReady };
    case "DELETE_ELEMENT":
      return { ...state, layout: action.payload };
    case "DUPLICATE_ELEMENT":
      return { ...state, layout: action.payload };
    case "REFRESH_LAYOUT_ITEM":
      state.layout[action.payload.index] = action.payload;
      return { ...state, layout: [...state.layout] };
    default:
      return state;
  }
};

export const DashboardBuilderContext = createContext({
  // numberDataCurr: {},
  // setNumberDataCurr: (item:any) => {},
  hidden: {},
  setHidden: {},
  formValues: [],
  setFormValues: (item: any) => {},

  previewEnable: false,
  setPreviewEnable: (item: any) => {},
});

export default function DragFromOutsideLayout() {
  const dashctx: any = useContext(GlobalContext);
  const [state, dispatchLayout] = useReducer(layoutReducer, initialState);
  const { layout } = state;

  const [hidden, setHidden] = useState("hidden");
  // const [numberDataCurr, setNumberDataCurr] = useState("$1000");
  // const [mounted, setMounted] = useState(true);

  const [previewEnable, setPreviewEnable] = useState(false);
  const { location, token }: any = useAuthentication();

  const values: any = {
    // numberDataCurr,
    // setNumberDataCurr,
    hidden,
    setHidden,

    previewEnable,
    setPreviewEnable,
  };

  const [currentBreakPoints, setCurrentBreakPoints] = useState("");

  const [b64Data, setB64Data] = useState<any>("");
  const router = useRouter();

  const defaultProps = {
    className: "layout",
    isDraggable: true,
    isResizable: true,
    breakpoints: { xxl: 1600, xl: 1200, lg: 992, md: 768, sm: 576, xs: 480 },
    cols: { xxl: 12, xl: 10, lg: 8, md: 6, sm: 4, xs: 2 },
    rowHeight: 100,
    margin: [0, 0],
    containerPadding: [0, 0],
    onBreakpointChange: setCurrentBreakPoints,
  };

  // axios.get(`${baseUrl}`);

  const onDrop = (layout: any, layoutItem: any, _event: any) => {
    // alert(
    //   `Dropped element props:\n${JSON.stringify(
    //     layoutItem,
    //     ["x", "y", "w", "h"],
    //     2
    //   )}`
    // );
    const itemType = _event.dataTransfer.getData("text/plain");
    const containerRect = _event.currentTarget.getBoundingClientRect();

    const newItem = {
      h:
        itemType === "Numbers"
          ? 1.2
          : itemType === "Chart"
          ? 3.3
          : itemType === "Deals Revenue Forecast"
          ? 3.3
          : itemType === "Email"
          ? 3
          : itemType === "PipeLine Sales Chart"
          ? 3.3
          : itemType === "Gantt"
          ? 3.3
          : itemType === "Task"
          ? 1.7
          : itemType === "Calendar"
          ? 3.3
          : itemType === "SimpleData"
          ? 3.3
          : null,
      w:
        itemType === "Numbers"
          ? 3
          : itemType === "Chart"
          ? 3
          : itemType === "Deals Revenue Forecast"
          ? 3
          : itemType === "Email"
          ? 3
          : itemType === "PipeLine Sales Chart"
          ? 3
          : itemType === "Gantt"
          ? 3
          : itemType === "Task"
          ? 3
          : itemType === "Calendar"
          ? 3
          : itemType === "SimpleData"
          ? 3
          : null,
      i: itemType,
      x: layoutItem.x,
      y: layoutItem.y,
      data: {
        Source: "New patients",
        PreviousNumber: "$20000",
        CurrentNumber: "$1000",
        ChangePercentage: "2%",
        vsText: "Last Month",
      },
      revenueData: {
        settingName: "Deals Revenue ForeCast",
        name: "Revenue ForeCast",
        mainGoal: "Company Goal",
        goalHeader: "February Goals",
        indiGoal: "Team Goal",
        TotalGoal: "600000",
        cashCollected: {
          cashCollectedBool: true,
          name: "Cash Collected",
          amountInitial: "29000",
          totalAmount: "150000",
        },
        paidClaims: {
          paidClaimsBool: true,
          name: "Paid Claims",
          amountInitial: "120060",
          totalAmount: "150000",
        },
        pendingClaims: {
          pendingClaimsBool: true,
          name: "Pending Claims",
          amountInitial: "139100",
          totalAmount: "150000",
        },
        draftClaims: {
          draftClaimsBool: true,
          name: "Draft Claims",
          amountInitial: "123100",
          totalAmount: "150000",
        },
      },
      chartData: {
        name: "Amount By Stage",
        chartSubHeader: "Total Amount",
        chartAmount: "1195500",
        data: [0.5, 1, 1.5, 2],
        label1value: true,
        label2value: false,
        label3value: false,
        label4value: false,
        compare: true,
        labels: ["Lead", " Day 1", "ROF", " Plan Sent"],
      },
      index: layout.length - 1,
      // id: uuidv4()
    };
    dispatchLayout({ type: "ADD_NEW", payload: newItem });
    console.log("layoutItem.x", layoutItem.x);
  };

  const removeComp = async (index: any) => {
    const newData: any = [...layout];
    newData.splice(index, 1);
    await dispatchLayout({ type: "DELETE_ELEMENT", payload: newData });
    dashctx?.setSelectedId([]);
  };

  const duplicateComp = (item: any) => {
    const spreadLayout = [...layout, item];
    dispatchLayout({ type: "DUPLICATE_ELEMENT", payload: spreadLayout });
  };

  const handleSizeButtonClick = (idx: string, newWidth: number) => {
    dispatchLayout({ type: "LOADING_TOGGLE", payload: null });

    const updatedLayout = layout.map((item: any, index: number) => {
      if (item.i === idx) {
        // Update the width for the selected layout item
        return {
          ...item,
          w: newWidth,
        };
      }
      return item;
    });

    dispatchLayout({ type: "UPDATE_LAYOUT", payload: updatedLayout });
    setTimeout(() => {
      dispatchLayout({ type: "LOADING_TOGGLE", payload: null });
    }, 50);
  };

  const handleSaveAsDraft = () => {
    // Convert the layout data to JSON string
    const jsonLayoutData = JSON.stringify(layout);
    // Create a Blob object with the JSON data
    const blob = new Blob([jsonLayoutData], { type: "application/json" });

    // Create a download link
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);

    // Set the filename for the downloaded file
    a.download = "dashboard_layout.json";

    // Trigger the download
    a.click();
  };

  const { Buffer } = require("buffer");

  useEffect(() => {
    // convert back into array
    if (router.query.data) {
      const bufferData = Buffer.from(router?.query?.data, "base64");
      const arrayString = bufferData.toString();

      const arrayData = JSON.parse(arrayString);
      dispatchLayout({ type: "UPDATE_LAYOUT", payload: arrayData });
    }
  }, []);

  const [dashboardData, setDashboardData] =
    useRecoilState<any>(dashboardDataState);

  const preview = () => {
    // localstorage store
    localStorage.setItem("components", JSON.stringify(layout));

    // Convert layout data to JSON string
    const jsonLayoutData = JSON.stringify(layout);

    // Convert layout data to base64
    setB64Data(Buffer.from(jsonLayoutData).toString("base64"));
  };

  useEffect(() => {
    if (layout.length !== 0) {
      preview();
    }
  }, [layout]);

  const handleSavePublishEdit = async () => {
    // localstorage store
    localStorage.setItem("components", JSON.stringify(layout));

    // Convert layout data to JSON string
    const jsonLayoutData = JSON.stringify(layout);

    // Convert layout data to base64
    const base64Data = Buffer.from(jsonLayoutData).toString("base64");

    // set in state
    setDashboardData((prevData: any) => ({ ...prevData, data: base64Data }));

    // Put API call
    try {
      await axios.put(
        `${baseUrl}dashboards/${router?.query?.DashId}`,
        {
          locationID: "f209ee50-96e6-4ca2-9eb5-80b93d31591f",
          userID: "9b36de41-f652-4bf2-ba38-7a96103f09a3",
          name: dashboardData?.dashboardName, // Assuming dashboardName is set elsewhere
          // user: dashboardData?.user,
          data: base64Data, // Use the base64Data variable
          locationAccess: false,
          assignedUserIDs: ["9b36de41-f652-4bf2-ba38-7a96103f09a3"],
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      router.push("/builder/dashboard");
    } catch (error: any) {
      console.log(error, "error");
      alert(error.response.data.error);
      // Handle the error appropriately
    }
  };
  const handleSavePublish = async () => {
    // localstorage store
    localStorage.setItem("components", JSON.stringify(layout));

    // Convert layout data to JSON string
    const jsonLayoutData = JSON.stringify(layout);

    // Convert layout data to base64
    const base64Data = Buffer.from(jsonLayoutData).toString("base64");

    // set in state
    setDashboardData((prevData: any) => ({ ...prevData, data: base64Data }));

    // Post API call
    try {
      if (dashboardData?.user != undefined) {
        await axios.post(
          `${baseUrl}dashboards`,
          {
            locationID: "f209ee50-96e6-4ca2-9eb5-80b93d31591f",
            userID: "9b36de41-f652-4bf2-ba38-7a96103f09a3",
            name: dashboardData?.dashboardName, // Assuming dashboardName is set elsewhere
            user: dashboardData?.user,
            data: base64Data, // Use the base64Data variable
            locationAccess: dashboardData?.user == "everyone" ? true : false,
            assignedUserIDs:
              dashboardData?.user == "everyone"
                ? []
                : ["9b36de41-f652-4bf2-ba38-7a96103f09a3"],
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        router.push("/builder/dashboard");
      }
    } catch (error: any) {
      console.error("API call failed:", error);
      alert(error.response.data.error);
    }
  };

  return (
    <DashboardBuilderContext.Provider value={values}>
      <div className="w-[100vw] h-[100vh] overflow-hidden">
        <div>
          {previewEnable == false && (
            <div className="sticky top-0 z-50">
              <DashboardBuilderHeader
                onButtonClick={handleSaveAsDraft}
                onSavePublicClick={
                  router.query.page === "edit"
                    ? handleSavePublishEdit
                    : handleSavePublish
                }
              />
            </div>
          )}
          <div>
            <DashboardTabHeader layout={layout} Base64Data={b64Data} />
          </div>

          <div className={`flex w-30% h-[80vh]  `}>
            {previewEnable == false ? (
              dashctx?.selectedId.length == 0 ? (
                <DashboardBuilderSidebar />
              ) : dashctx?.selectedId.i === "Chart" ? (
                <ChartSetting
                  dispatchLayout={dispatchLayout}
                  layout={layout}
                  item={dashctx?.selectedId}
                  ChangeSize={(type: any) => {
                    type === "Small"
                      ? handleSizeButtonClick(dashctx?.selectedId.i, 2)
                      : type === "Medium"
                      ? handleSizeButtonClick(dashctx?.selectedId.i, 3)
                      : handleSizeButtonClick(dashctx?.selectedId.i, 4);
                    // handleSizeButtonClick( dashctx?.selectedId.i, {type === 'Large' ? 8: type === 'Small' ? 3 : type === 'Medium'? 5});
                  }}
                />
              ) : dashctx?.selectedId.i === "Numbers" ? (
                <NumberSetting
                  dispatchLayout={dispatchLayout}
                  layout={layout}
                  item={dashctx?.selectedId}
                  ChangeSize={(type: any) => {
                    type === "Small"
                      ? handleSizeButtonClick(dashctx?.selectedId.i, 2)
                      : type === "Medium"
                      ? handleSizeButtonClick(dashctx?.selectedId.i, 3)
                      : handleSizeButtonClick(dashctx?.selectedId.i, 4);
                    // handleSizeButtonClick( dashctx?.selectedId.i, {type === 'Large' ? 8: type === 'Small' ? 2 : type === 'Medium'? 5});
                  }}
                />
              ) : dashctx?.selectedId.i === "Deals Revenue Forecast" ? (
                <DealsRevenueSetting
                  dispatchLayout={dispatchLayout}
                  layout={layout}
                  item={dashctx?.selectedId}
                  ChangeSize={(type: any) => {
                    type === "Small"
                      ? handleSizeButtonClick(dashctx?.selectedId.i, 3)
                      : type === "Medium"
                      ? handleSizeButtonClick(dashctx?.selectedId.i, 4)
                      : handleSizeButtonClick(dashctx?.selectedId.i, 5);
                    // handleSizeButtonClick( dashctx?.selectedId.i, {type === 'Large' ? 8: type === 'Small' ? 2 : type === 'Medium'? 5});
                  }}
                />
              ) : dashctx?.selectedId.i === "Email" ? (
                <EmailChartSetting
                  ChangeSize={(type: any) => {
                    type === "Small"
                      ? handleSizeButtonClick(dashctx?.selectedId.i, 3)
                      : type === "Medium"
                      ? handleSizeButtonClick(dashctx?.selectedId.i, 3.5)
                      : handleSizeButtonClick(dashctx?.selectedId.i, 4);
                    // handleSizeButtonClick( dashctx?.selectedId.i, {type === 'Large' ? 8: type === 'Small' ? 2 : type === 'Medium'? 5});
                  }}
                />
              ) : dashctx?.selectedId.i === "PipeLine Sales Chart" ? (
                <SalesPipelineSetting
                  ChangeSize={(type: any) => {
                    type === "Small"
                      ? handleSizeButtonClick(dashctx?.selectedId.i, 3)
                      : type === "Medium"
                      ? handleSizeButtonClick(dashctx?.selectedId.i, 4)
                      : handleSizeButtonClick(dashctx?.selectedId.i, 5);
                    // handleSizeButtonClick( dashctx?.selectedId.i, {type === 'Large' ? 8: type === 'Small' ? 2 : type === 'Medium'? 5});
                  }}
                />
              ) : dashctx?.selectedId.i === "Gantt" ? (
                <GanttChartSetting
                  ChangeSize={(type: any) => {
                    type === "Small"
                      ? handleSizeButtonClick(dashctx?.selectedId.i, 2)
                      : type === "Medium"
                      ? handleSizeButtonClick(dashctx?.selectedId.i, 3)
                      : handleSizeButtonClick(dashctx?.selectedId.i, 4);
                    // handleSizeButtonClick( dashctx?.selectedId.i, {type === 'Large' ? 8: type === 'Small' ? 2 : type === 'Medium'? 5});
                  }}
                />
              ) : dashctx?.selectedId.i === "Task" ? (
                <TaskSetting
                  ChangeSize={(type: any) => {
                    type === "Small"
                      ? handleSizeButtonClick(dashctx?.selectedId.i, 2)
                      : type === "Medium"
                      ? handleSizeButtonClick(dashctx?.selectedId.i, 3)
                      : handleSizeButtonClick(dashctx?.selectedId.i, 4);
                    // handleSizeButtonClick( dashctx?.selectedId.i, {type === 'Large' ? 8: type === 'Small' ? 2 : type === 'Medium'? 5});
                  }}
                />
              ) : dashctx?.selectedId.i === "Calendar" ? (
                <CalendarSetting
                  ChangeSize={(type: any) => {
                    type === "Small"
                      ? handleSizeButtonClick(dashctx?.selectedId.i, 2)
                      : type === "Medium"
                      ? handleSizeButtonClick(dashctx?.selectedId.i, 3)
                      : handleSizeButtonClick(dashctx?.selectedId.i, 4);
                    // handleSizeButtonClick( dashctx?.selectedId.i, {type === 'Large' ? 8: type === 'Small' ? 2 : type === 'Medium'? 5});
                  }}
                />
              ) : dashctx?.selectedId.i === "SimpleData" ? (
                <SimpleDataSetting
                  ChangeSize={(type: any) => {
                    type === "Small"
                      ? handleSizeButtonClick(dashctx?.selectedId.i, 2)
                      : type === "Medium"
                      ? handleSizeButtonClick(dashctx?.selectedId.i, 3)
                      : handleSizeButtonClick(dashctx?.selectedId.i, 4);
                    // handleSizeButtonClick( dashctx?.selectedId.i, {type === 'Large' ? 8: type === 'Small' ? 3 : type === 'Medium'? 5});
                  }}
                />
              ) : null
            ) : null}

            {/* <div>
            <button onClick={() => handleSizeButtonClick( dashctx?.selectedId, 2)}>
              Small
            </button>
            <button onClick={() => handleSizeButtonClick( dashctx?.selectedId, 3)}>
              Medium
            </button>
            <button onClick={() => handleSizeButtonClick( dashctx?.selectedId, 4)}>
              Large
            </button>
            <div>Compaction type: {compactType || "No Compaction"}</div>
            <button onClick={onCompactTypeChange}>
              Change Compaction Type
            </button>
            <div
              className="droppable-element"
              draggable={true}
              unselectable="on"
              onDragStart={(e) => e.dataTransfer.setData("text/plain", "")}
            >
              Droppable Element (Drag me!)
            </div>

            <div onClick={() => removeComp( dashctx?.selectedId)}>
              delete { dashctx?.selectedId}
            </div>
          </div> */}

            <div
              className={`flex w-[100%] ${
                !previewEnable ? "h-[84vh]" : "h-[91vh]"
              } overflow-y-scroll  scrollbar-hide`}
              onClick={(e) => {
                e.stopPropagation();
                dashctx?.setSelectedId([]);
              }}
            >
              {state.isReady && (
                <GridLayout
                  layout={layout}
                  onDrop={onDrop}
                  setSelectedIndex={dashctx?.setSelectedId}
                  handleDelete={(index: any) => removeComp(index)}
                  handleDuplicate={() => duplicateComp(dashctx?.selectedId)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </DashboardBuilderContext.Provider>
  );
}
