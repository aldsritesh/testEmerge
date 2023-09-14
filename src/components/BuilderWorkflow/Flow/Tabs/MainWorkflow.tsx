import {
  ClockIcon,
  EllipsisHorizontalIcon,
  PlusIcon,
  TrophyIcon,
} from "@heroicons/react/24/solid";
import React, { useContext, useState } from "react";
import StartCompsTrigger from "../../Components/StartComponentTriggerList/StartCompsTrigger";
import { WorkflowContext } from "../../WorkflowData";
import Actions from "../../Components/Actions";

export default function MainWorkflow() {
  const [workFlowBuilder, setWorkFlowBuilder] = useState<any>({
    id: "1",
    name: "My very first workflow",
    locationID: "abcdef-ghij-klmo-pqrstuv",
    addedOn: "2023-07-10T06:08:09Z",
    triggers: [],
    actions: [],
  });

  const ctx: any = useContext(WorkflowContext);

  //triggerModal Open
  const [isFlyOutVisible, setIsFlyOutVisible] = useState(false);
  //actionModal Open
  const [actionSheetVisible, setIsActionSheetVisible] = useState(false);

  //to store need this states
  const [selectedIndex, setSelectedIndex] = useState<any>(null);
  const [selectedType, setSelectedType] = useState("Add Last");

  const [selectedActionIndex, setSelectedActionIndex] = useState(-1);
  const [openFirstIndexAction, setOpenFirstIndexAction] = useState(false);

  //storeActions Open
  const storeStep = (item: any, type: any) => {
    if (selectedType === "Add Last") {
      setWorkFlowBuilder((prevState: any) => ({
        ...prevState,
        actions: [
          ...prevState.actions,
          {
            id: prevState.actions.length + 1,
            name: item?.actionName,
            type: type,
            data: item,
          },
        ],
      }));
    } else {
      const actions = {
        id: `temp${Date.now()}`,
        name: item?.actionName,
        type: type,
        data: item,
      };
      const updatedSteps = [...workFlowBuilder.actions];
      updatedSteps.splice(selectedIndex, 0, actions);

      setWorkFlowBuilder((prevState: any) => ({
        ...prevState,
        actions: updatedSteps,
      }));
    }
    setSelectedActionIndex(-1);
    setOpenFirstIndexAction(false);
    setIsActionSheetVisible(false);
  };

  ctx?.setCreatedWorkflow(workFlowBuilder);

  return (
    <div>
      <div
        className={`w-full h-screen overflow-y-scroll  scrollbar-hide fixed right-0 top-0  z-50 transition-all bg-black overflow-hidden ${
          isFlyOutVisible
            ? "translate-x-0 opacity-100 bg-opacity-30"
            : "translate-x-[100%] opacity-0 bg-opacity-0"
        }`}
      >
        <div
          className="absolute h-full w-full z-40 "
          onClick={() => setIsFlyOutVisible(false)}
        ></div>
        <div className="bg-white w-full md:w-[50%] lg:w-[40%] absolute right-0 min-h-full h-auto z-50 overflow-y-scroll scrollbar-hide">
          <StartCompsTrigger
            onClose={() => {
              setIsFlyOutVisible(false);
            }}
            updateData={(item: any, type: any) => {
              const triggers = item?.filters.map((filter: any) => ({
                type: filter.filterstype,
                value: filter.filterssubtype,
              }));
              // console.log("okay", item);
              setWorkFlowBuilder({
                ...workFlowBuilder,
                triggers: [
                  {
                    name: item?.workflowName,
                    type: type,
                    filters: triggers,
                  },
                ],
                // triggers: [...item?.filters ],
              });
              setIsFlyOutVisible(false);
            }}
          />
        </div>
      </div>

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

      <div className=" h-[100vh] pb-[50%] overflow-y-scroll scrollbar-hide  lg:mt-0 flex flex-col justify-start items-center">
        {/* if trigger list then show data here  */}
        {workFlowBuilder?.triggers?.length > 0 ? (
          <div className="relative flex justify-center items-center flex-col">
            {/* workflow data map */}
            {workFlowBuilder?.triggers?.map((item: any, index: number) => (
              <div key={index}>
                <div className="bg-white shadow-lg rounded-md w-[55%] lg:w-[100%] mt-5 ">
                  <div className="bg-blueHeader py-3 px-5 rounded-t-md flex justify-between items-center">
                    <div className="bg-white h-7 w-7 rounded-full flex justify-center items-center">
                      <ClockIcon className="h-5 w-5 text-blueHeader" />
                    </div>
                    <p className="ml-2 text-lg text-white font-medium">
                      Execute
                    </p>
                    <div>
                      <EllipsisHorizontalIcon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className={`opacity-1 px-4 pb-5 pt-5 w-[400px]`}>
                    <p className="text-dark font-semibold text-sm pb-3  text-center  leading-5">
                      Enrollment Trigger
                    </p>
                    <div className="border-[1px] border-lightGray bg-gray-100 rounded-md px-2 py-2 mb-4 ">
                      <p className="text-dark text-sm leading-5 text-center">
                        {item?.name}
                      </p>
                    </div>

                    <button
                      onClick={() => setIsFlyOutVisible(true)}
                      className="py-2 w-full rounded-md text-sm border-[2px] border-OrangeBuilder text-OrangeBuilder"
                    >
                      Edit Enrollment Trigger
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* store first action  */}
            {workFlowBuilder?.actions?.length == 0 && (
              <>
                {actionSheetVisible ? (
                  <div className="w-full flex justify-center items-center">
                    <div className="mt-5 bg-white shadow-md rounded-md py-4 px-4 w-[50%]   pt-3 h-[50vh] relative   overflow-y-scroll   scrollbar-hide">
                      <Actions
                        onClose={() => setIsActionSheetVisible(false)}
                        updateActionData={(itemData: any) => {}}
                        updateForm={(item: any, type: any) => {
                          storeStep(item, type);
                        }}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-center items-center relative h-[20vh]">
                    <div className="absolute top-0 h-[100%] w-1 border-dashed  border-[2px] border-gray-300"></div>
                    <button
                      onClick={() => {
                        setIsActionSheetVisible(true);
                        setSelectedType("Add Last");
                      }}
                      className="relative"
                    >
                      <div className="bg-OrangeBuilder h-10 w-10 rounded-md flex justify-center items-center">
                        <PlusIcon className="h-8 w-8 text-white" />
                      </div>
                    </button>
                  </div>
                )}
              </>
            )}

            {/* workflow actions map */}
            {workFlowBuilder?.actions?.map((item: any, index: number) => (
              <div key={index}>
                {/* store first action  */}
                {index == 0 && (
                  <>
                    {openFirstIndexAction ? (
                      <div className="w-full flex justify-center items-center">
                        <div className="mt-5 bg-white shadow-md rounded-md py-4 px-4 w-[50%]   pt-3 h-[50vh] relative   overflow-y-scroll   scrollbar-hide">
                          <Actions
                            onClose={() => setIsActionSheetVisible(false)}
                            updateActionData={(itemData: any) => {}}
                            updateForm={(item: any, type: any) => {
                              storeStep(item, type);
                            }}
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="flex justify-center items-center relative h-[20vh]">
                        <div className="absolute top-0 h-[100%] w-1 border-dashed  border-[2px] border-gray-300"></div>
                        <button
                          onClick={() => {
                            setIsActionSheetVisible(true);
                            setSelectedType("Add Between");
                            setSelectedIndex(index);
                            setOpenFirstIndexAction(true);
                          }}
                          className="relative"
                        >
                          <div className="bg-OrangeBuilder h-10 w-10 rounded-md flex justify-center items-center">
                            <PlusIcon className="h-8 w-8 text-white" />
                          </div>
                        </button>
                      </div>
                    )}
                  </>
                )}

                <div className="overflow-x-hidden scrollbar-hide flex justify-center items-center">
                  <div className="bg-white shadow-lg rounded-md">
                    <div className="bg-blueHeader py-3 px-5 rounded-tl-lg rounded-tr-md  flex justify-between items-center">
                      <div className="bg-white h-7 w-7 rounded-full flex justify-center items-center">
                        <ClockIcon className="h-5 w-5 text-blueHeader" />
                      </div>
                      <p className="ml-2 text-lg text-white font-medium">
                        {" "}
                        {item?.name}
                      </p>
                      <div>
                        <EllipsisHorizontalIcon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className={`opacity-1 px-4 pb-5 pt-5  w-[400px] `}>
                      <div className="border-[1px] border-lightGray bg-gray-100 rounded-md px-2 py-2 mb-4 ">
                        <p className="text-dark text-sm leading-5 text-center">
                          <strong className="text-xs"> {item?.name}</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* {(selectedActionIndex, index)} */}
                {index === selectedActionIndex ? (
                  <div className="w-full flex justify-center items-center">
                    <div className="mt-5 bg-white shadow-md rounded-md py-4 px-4 w-[50%]   pt-3 h-[50vh] relative   overflow-y-scroll   scrollbar-hide">
                      <Actions
                        onClose={() => setIsActionSheetVisible(false)}
                        updateActionData={(itemData: any) => {}}
                        updateForm={(item: any, type: any) => {
                          storeStep(item, type);
                        }}
                      />
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="flex flex-col justify-center items-center relative h-[20vh]">
                      <div className="absolute top-0 h-[100%] w-1 border-dashed  border-[2px] border-gray-300"></div>

                      {index === workFlowBuilder?.actions?.length - 1 ? (
                        <>
                          {/* If not the last index, show "Add Between" button */}
                          <button
                            onClick={() => {
                              setIsActionSheetVisible(true);
                              setSelectedType("Add Between");
                              setSelectedIndex(index);
                              setSelectedActionIndex(index);
                            }}
                            className="relative"
                          >
                            <div className="bg-OrangeBuilder h-10 w-10 rounded-md flex justify-center items-center">
                              <PlusIcon className="h-8 w-8 text-white" />
                            </div>
                          </button>
                        </>
                      ) : (
                        // If the last index, show "Add Last" button
                        <button
                          onClick={() => {
                            setIsActionSheetVisible(true);
                            setSelectedType("Add Last");
                            setSelectedActionIndex(index);
                          }}
                          className="relative"
                        >
                          <div className="bg-OrangeBuilder h-10 w-10 rounded-md flex justify-center items-center">
                            <PlusIcon className="h-8 w-8 text-white" />
                          </div>
                        </button>
                      )}
                    </div>

                    {/* End Data */}
                    {index === workFlowBuilder?.actions?.length - 1 && (
                      <div className="flex flex-col justify-center items-center relative h-[28vh]">
                        <div className="absolute top-0 h-[50%] w-1 border-dashed  border-[2px] border-gray-200"></div>

                        <div className="relative">
                          <div className="bg-gray-200  px-10 py-3 rounded-md flex justify-center items-center">
                            <p className="text-dark font-semibold text-sm leading-5 text-center">
                              End
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* if trigger not then show empty box here  */}
            <div className="relative flex justify-center items-center flex-col">
              <div className="bg-white shadow-lg rounded-md w-[100%] mt-5 ">
                <div className="bg-blueHeader py-3 px-5 rounded-t-md flex justify-between items-center">
                  <div className="bg-white h-7 w-7 rounded-full flex justify-center items-center">
                    <ClockIcon className="h-5 w-5 text-blueHeader" />
                  </div>
                  <p className="ml-2 text-lg text-white font-medium">
                    Execute When
                  </p>
                  <div>
                    <EllipsisHorizontalIcon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className={`opacity-1 px-4 pb-5 pt-5 `}>
                  <p
                    className={`text-dark text-sm pb-5 w-full leading-5  text-center px-4`}
                  >
                    Choose the trigger that decides how a contacts enters this
                    flow
                  </p>

                  <button
                    onClick={() => setIsFlyOutVisible(true)}
                    className="py-2 w-full rounded-md text-sm bg-OrangeBuilder text-white"
                  >
                    Setup Enrollment Trigger
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
