import FormDataString from "@/components/contacts/FormDataString";
import React, { useState } from "react";

function DemoFile() {
  // const [fruitArr, setFruitArr] = useState<any>([]);
  // const [vegArr, setVegArr] = useState<any>([]);
  // const [payments, setPayments] = useState<any>([]);
  // const [branchName, setBranchName] = useState("");
  // const [cart, setCart] = useState<any>([
  //   {
  //     Vegetable: "",
  //     Fruits: "",
  //     Payment: "",
  //   },
  // ]);

  // const [branch, setBranch] = useState([
  //   {
  //     name: branchName,
  //     segment: [
  //       {
  //         conditionType: "",
  //         conditions: [
  //           {
  //             key: fruitArr,
  //             operator: vegArr,
  //             value: payments,
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ]);
  // // console.log("fruitArr", fruitArr);
  // // console.log("vegArr", vegArr);
  // console.log("cart===> ", branch);
  const [branches, setBranches] = useState([
    {
      name: "",
      segments: [
        {
          conditionType: "",
          conditions: [
            {
              key: "",
              operator: "",
              value: "",
            },
          ],
        },
      ],
    },
  ]);
  console.log("branchData====>>>", branches);
  return (
    <div className="flex flex-col justify-center items-center p-10">
      <div className="font-bold text-lg">Automation Condition For If Else</div>
      <div className="flex flex-col justify-center items-center bg-gray-200 my-[10%] w-auto p-4">
        {branches.map((branch, index) => (
          <div key={index} className="bg-slate-400 py-2 px-4 mb-2">
            <div className="my-4">
              <div className="flex gap-5 justify-start items-center">
                <p className="font-semibold">Branch name:</p>
                <input
                  placeholder="Enter Branch Name"
                  className="p-2 w-full"
                  onChange={(e) => {
                    const newBranches = [...branches];
                    newBranches[index].name = e.target.value;
                    setBranches([...newBranches]);
                  }}
                  value={branch.name}
                />
                {branches.length > 1 ? (
                  <button
                    className="bg-red-300 py-2 px-4"
                    onClick={() => {
                      const newBranches = [...branches];
                      newBranches.splice(index, 1);
                      // console.log("newBranches[index]", newBranches);
                      setBranches([...newBranches]);
                    }}
                  >
                    x
                  </button>
                ) : null}
              </div>
            </div>
            {branch.segments.map((segment, segIndex) => {
              return (
                <div key={segIndex} className="gap-2 py-4 px-2 mb-2 bg-red-100">
                  <div>
                    {segment.conditions.map((condition, condIndex) => (
                      <div
                        key={condIndex}
                        className="flex justify-start items-center"
                      >
                        <select
                          className="m-2 px-2 py-4 rounded-lg"
                          value={condition.key}
                          placeholder="Key"
                          onChange={(e) => {
                            const newBranches = [...branches];
                            newBranches[index].segments[segIndex].conditions[
                              condIndex
                            ].key = e.target.value;
                            setBranches([...newBranches]);
                          }}
                        >
                          <option>Select Address</option>
                          <option value={"Address 1"}>Address 1</option>
                          <option value={"Address 2"}>Address 2</option>
                          <option value={"Address 3"}>Address 3</option>
                        </select>
                        <select
                          className="m-2 px-2 py-4 rounded-lg"
                          value={condition.operator}
                          placeholder="Operator"
                          onChange={(e) => {
                            const newBranches = [...branches];
                            newBranches[index].segments[segIndex].conditions[
                              condIndex
                            ].operator = e.target.value;
                            setBranches([...newBranches]);
                          }}
                        >
                          <option>Select Operator</option>
                          <option value={"IS Equal"}>IS Equal</option>
                          <option value={"IS NOT EQUAL"}>IS NOT EQUAL</option>
                        </select>
                        {branches[index].segments[segIndex].conditions[
                          condIndex
                        ].operator && (
                          <input
                            className="m-2 px-2 py-4 rounded-lg"
                            value={condition.value}
                            onChange={(e) => {
                              const newBranches = [...branches];
                              newBranches[index].segments[segIndex].conditions[
                                condIndex
                              ].value = e.target.value;
                              setBranches([...newBranches]);
                            }}
                          />
                        )}
                        {branches[index].segments[segIndex].conditions.length >
                        1 ? (
                          <button
                            className="bg-red-300 py-2 px-4"
                            onClick={() => {
                              const newBranches = [...branches];
                              newBranches[index].segments[
                                segIndex
                              ].conditions.splice(condIndex, 1);

                              console.log("asdasd====>", newBranches);
                              // newBranches.segments.
                              // console.log("newBranches[index]", newBranches);
                              setBranches([...newBranches]);
                            }}
                          >
                            x
                          </button>
                        ) : null}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex justify-center items-center">
                      <p className="font-semibold">Condition Type:</p>

                      <button
                        className="bg-gray-300 px-4 py-2 rounded-lg m-2"
                        onClick={() => {
                          const newBranches = [...branches];
                          newBranches[index].segments[segIndex].conditionType =
                            "AND";
                          setBranches([...newBranches]);
                        }}
                      >
                        And
                      </button>
                      <button
                        className={`bg-gray-300 px-4 py-2 rounded-lg m-2`}
                        onClick={() => {
                          const newBranches = [...branches];
                          newBranches[index].segments[segIndex].conditionType =
                            "OR";
                          setBranches([...newBranches]);
                        }}
                      >
                        OR
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-end items-center">
                    <button
                      className="bg-gray-300 px-4 py-2 rounded-lg m-2 flex justify-end"
                      onClick={() => {
                        const newBranches = [...branches];
                        newBranches[index].segments[segIndex].conditions.push({
                          key: "",
                          operator: "",
                          value: "",
                        });
                        setBranches([...newBranches]);
                      }}
                    >
                      + Add Condition
                    </button>
                  </div>
                </div>
              );
            })}
            <div className="flex justify-end items-center">
              <button
                className="bg-gray-300 px-4 py-2 rounded-lg m-2"
                onClick={() => {
                  const newBranches = [...branches];
                  newBranches[index].segments.push({
                    conditionType: "AND",
                    conditions: [
                      {
                        key: "",
                        operator: "",
                        value: "",
                      },
                    ],
                  });
                  setBranches([...newBranches]);
                }}
              >
                + Add Segment
              </button>
            </div>
          </div>
        ))}
        <button
          className="bg-orange-200 px-4 py-2 rounded-lg m-2"
          onClick={() => {
            const newBranches = [...branches];
            newBranches.push({
              name: `Branch ${newBranches.length + 1}`,
              segments: [
                {
                  conditionType: "AND",
                  conditions: [
                    {
                      key: "",
                      operator: "",
                      value: "",
                    },
                  ],
                },
              ],
            });
            setBranches([...newBranches]);
          }}
        >
          Add Branch
        </button>
      </div>
    </div>
  );
}

export default DemoFile;
