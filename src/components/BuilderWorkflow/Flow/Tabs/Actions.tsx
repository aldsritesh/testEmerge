import React, { useState, useContext, useRef, useEffect } from "react";
import FlowBuilder, {
  NodeContext,
  INode,
  IRegisterNode,
  IFlowBuilderMethod,
  useDrawer,
} from "react-flow-builder";
import ConfigForm from "@/components/BuilderWorkflow/ConfigForm";
import {
  DrawerComponent,
  PopconfirmComponent,
} from "@/components/BuilderWorkflow/antd";
import StartComponent from "@/components/BuilderWorkflow/Flow/StartComp";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  ArrowPathIcon,
  ArrowUturnLeftIcon,
  ClockIcon,
  EllipsisHorizontalIcon,
  MinusIcon,
  PlusIcon,
  TrophyIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import ChooseActions from "@/components/BuilderWorkflow/Components/ChooseAction";
import { startNodeState } from "@/atoms/StartNode";
import { offCanvasOpenState } from "@/atoms/offCanvasOpen";
import { modalItemState } from "@/atoms/modalItem";
import { Client, HydrationProvider } from "react-hydration-provider";
import { titleTrigger } from "@/atoms/titleTrigger";
import { nodesAtom } from "@/atoms/nodesAtom";

const StartNodeDisplay: React.FC = () => {
  const node = useContext(NodeContext);
  const setStartNode = useSetRecoilState(startNodeState);
  const startNodes: any = useRecoilValue(nodesAtom);
  const [data, setData] = useState<string>(node.data || "");
  useEffect(() => {
    node.data = startNodes;
  }, [data, setData]);
  console.log(startNodes);
  return (
    <>
      <StartComponent handleChange={() => setStartNode(true)} />
    </>
  );
};

const EndNodeDisplay: React.FC = () => {
  const node = useContext(NodeContext);
  return <div className="end-node">{node.name}</div>;
};

const NodeDisplay: React.FC = () => {
  const node = useContext(NodeContext);
  const { closeDrawer: cancel, saveDrawer: save } = useDrawer();

  const dataItem = useRecoilValue(modalItemState);
  const [newdata, setnewData] = useState<any>(dataItem);
  const titleItem = useRecoilValue(titleTrigger);
  const [mainTitle, setMainTitle] = useState<any>(titleItem);

  const nodesAtomData: any = useRecoilValue(nodesAtom);
  const [data, setData] = useState<string>(node.data || "");
  useEffect(() => {
    node.data = nodesAtomData;
  }, [data, setData]);

  return (
    <div className="overflow-x-hidden scrollbar-hide">
      <div className="bg-white shadow-lg rounded-md w-[55%] lg:w-[100%] mt-5  ">
        <div className="bg-blueHeader py-3 px-5 rounded-tl-lg rounded-tr-md  flex justify-between items-center">
          <div className="bg-white h-7 w-7 rounded-full flex justify-center items-center">
            <ClockIcon className="h-5 w-5 text-blueHeader" />
          </div>
          <p className="ml-2 text-lg text-white font-medium"> {mainTitle}</p>
          <div>
            <EllipsisHorizontalIcon className="h-6 w-6 text-white" />
          </div>
        </div>
        <div className={`opacity-1 px-4 pb-5 pt-5  w-[400px] `}>
          <div className="border-[1px] border-lightGray bg-gray-100 rounded-md px-2 py-2 mb-4 ">
            <p className="text-dark text-sm leading-5 text-center">
              <strong className="text-xs"> {newdata}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// const NodeDisplay: React.FC = () => {
//   const node = useContext(NodeContext);
//   const [data, setData] = useState<string>(node.data || "");
//   console.log("dadasd", data);
//   // Update data when it changes
//   const handleDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setData(event.target.value);
//     node.data = event.target.value; // Update the data property of the node
//   };

//   return (
//     <div>
//       <input type="text" value={data} onChange={handleDataChange} />
//     </div>
//   );
// };

const ConditionNodeDisplay: React.FC = () => {
  const node = useContext(NodeContext);
  return (
    <>
      <div className="bg-white shadow-lg rounded-md w-[55%] lg:w-[100%] mt-5  ">
        <div className="bg-blueHeader py-3 px-5 rounded-md  flex justify-between items-center">
          <p className="ml-2 text-lg text-white font-medium">
            {node.data ? node.data.name : node.name}
          </p>
        </div>
      </div>
    </>
  );
};

const registerNodes: IRegisterNode[] = [
  {
    type: "start",
    name: "start",
    displayComponent: StartNodeDisplay,
    isStart: true,
  },
  {
    type: "end",
    name: "end",
    displayComponent: EndNodeDisplay,
    isEnd: true,
  },
  {
    type: "node",
    name: "node",
    displayComponent: NodeDisplay,
    // configComponent: ConfigForm,
  },
  {
    type: "condition",
    name: "condition",
    displayComponent: ConditionNodeDisplay,
    configComponent: ConfigForm,
  },
  {
    type: "branch",
    name: "branch",
    conditionNodeType: "condition",
  },
  {
    type: "loop",
    name: "loop",
    displayComponent: ConditionNodeDisplay,
    configComponent: ConfigForm,
    isLoop: true,
  },
];

const defaultNodes = [
  {
    id: "node-0d9d4733-e48c-41fd-a41f-d93cc4718d97",
    type: "start",
    name: "start",
    path: ["0"],
  },
];

const Actions = () => {
  const [nodes, setNodes] = useState<INode[]>(defaultNodes);
  console.log(nodes);

  const [start, setStart] = useState<string | null>(null);
  const handleChange = (nodes: INode[]) => {
    setNodes(nodes);
  };
  const [undoDisabled, setUndoDisabled] = useState(true);
  const [redoDisabled, setRedoDisabled] = useState(true);
  const [zoom, setZoom] = useState(100);
  const [outDisabled, setOutDisabled] = useState(false);
  const [inDisabled, setInDisabled] = useState(false);

  const ref: any = useRef<IFlowBuilderMethod>(null);
  const handleZoomChange = (outDisabled: any, value: any, inDisabled: any) => {
    setOutDisabled(outDisabled);
    setInDisabled(inDisabled);
    setZoom(value);
  };

  const handleHistoryChange = (undoDisabled: any, redoDisabled: any) => {
    setUndoDisabled(undoDisabled);
    setRedoDisabled(redoDisabled);
  };
  const startNode = useRecoilValue(startNodeState);

  return (
    <>
      <div>
        <div className="px-4 md:px-8 w-full">
          <div className="bg-gradient-to-r from-[#fdebe8] via-[#fcd4c9] to-[#feece7] rounded-md flex justify-center items-center py-3 mt-5">
            <TrophyIcon className="h-5 w-5 text-dark mr-2" />
            <p className="text-dark font-semibold text-xs md:text-sm">
              Lets set goal for your workflow first!
            </p>
            <p className="text-secondary font-semibold text-xs md:text-sm ml-2">
              See your goals
            </p>
          </div>
        </div>
        <>
          <div className="flex flex-col fixed top-[38%] md:top-[40%] left-5 lg:left-[21%] z-50">
            <button
              disabled={inDisabled}
              onClick={() => ref.current.zoom("in")}
              className="bg-gray-200 p-1 rounded shadow"
            >
              <PlusIcon className="w-5 h-5" />
            </button>
            <button
              disabled={outDisabled}
              onClick={() => ref.current.zoom("out")}
              className="bg-gray-200 p-1 rounded shadow mt-2"
            >
              <MinusIcon className="w-5 h-5" />
            </button>
          </div>
          <div className="flex flex-col fixed top-[38%] md:top-[40%] right-5 md:right-10 z-50">
            <button
              disabled={undoDisabled}
              onClick={() => ref.current.history("undo")}
              className={` ${
                undoDisabled
                  ? "bg-gray-100 text-FontGray"
                  : "bg-gray-300 text-dark"
              }   p-1 rounded shadow} `}
            >
              <ArrowUturnLeftIcon className="w-5 h-5" />
            </button>
            <button
              disabled={redoDisabled}
              onClick={() => ref.current.history("redo")}
              className={` ${
                redoDisabled
                  ? "bg-gray-100 text-FontGray mt-2"
                  : "bg-gray-300 text-dark mt-2"
              }   p-1 rounded shadow  } `}
            >
              <ArrowPathIcon className="w-5 h-5" />
            </button>
          </div>
        </>

        <div className="  mt-20 lg:mt-0 flex flex-col justify-start items-center">
          <HydrationProvider>
            <Client>
              <div className="w-full pb-20">
                <FlowBuilder
                  ref={ref}
                  historyTool={{
                    hidden: true,
                    max: 5,
                  }}
                  nodes={nodes}
                  onChange={handleChange}
                  zoomTool={{
                    hidden: true,
                    min: 10,
                    max: 150,
                    step: 25,
                  }}
                  onZoomChange={handleZoomChange}
                  registerNodes={registerNodes}
                  DrawerComponent={DrawerComponent}
                  onHistoryChange={handleHistoryChange}
                  PopoverComponent={(e) => (
                    <>
                      <PopOverComponent event={e} />
                    </>
                  )}
                  PopconfirmComponent={PopconfirmComponent}
                  //   drawerVisibleWhenAddNode={true}
                  lineColor="#8f8f8f"
                  showArrow={true}
                  arrowIcon={
                    <Image
                      src={require("../../../../../public/images/icons/sortDown.png")}
                      alt=""
                    />
                  }
                />
              </div>
            </Client>
          </HydrationProvider>
        </div>
      </div>
    </>
  );
};

function PopOverComponent({ event }: any) {
  const [actionSheetVisible, setIsActionSheetVisible] = useState(false);
  const startNode = useRecoilValue(startNodeState);
  const node = useContext(NodeContext);
  const [isFlyOutVisible, setIsFlyOutVisible] =
    useRecoilState(offCanvasOpenState);
  const setModalData = useSetRecoilState(modalItemState);

  return (
    <div>
      {startNode ? (
        <>
          {actionSheetVisible ? (
            <div className="flex justify-center items-center">
              <div className="mt-5 bg-white shadow-md rounded-md py-4 px-4 w-[50%] lg:w-[70%]  opacity-1 ease-in-out duration-300 pt-3 h-[50vh] relative   overflow-y-scroll   scrollbar-hide">
                <ChooseActions
                  updateActionData={(itemData: any) => {
                    if (itemData == "If/Else") {
                      event.content.props.children[1].props.onClick();
                    } else if (itemData == "Loop") {
                      event.content.props.children[2].props.onClick();
                    } else {
                      event.content.props.children[0].props.onClick();
                    }
                    // setIsActionSheetVisible(false);
                    // if (isFlyOutVisible == false) {
                    //   setIsFlyOutVisible(true);
                    // }
                  }}
                  onClose={() => {
                    setIsActionSheetVisible(false);
                  }}
                  updateForm={(formData: any) => {
                    setModalData(formData);
                  }}
                />
              </div>
            </div>
          ) : (
            <>
              <button
                onClick={() => {
                  setIsActionSheetVisible(true);
                }}
              >
                <div className="bg-OrangeBuilder h-10 w-10 rounded-md flex justify-center items-center">
                  <PlusIcon className="h-8 w-8 text-white" />
                </div>
              </button>
            </>
          )}
        </>
      ) : null}
    </div>
  );
}

export default Actions;
