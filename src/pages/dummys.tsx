import React, { useState } from "react";

const App = () => {
  const [mainArray, setMainArray] = useState<any>([
    {
      branch: "",
      firstArray: [
        {
          condition: "",
          secondArray: {
            selectOne: "",
            selectTwo: "",
            selectThree: "",
          },
        },
      ],
    },
  ]);
  const [branchError, setBranchError] = useState<boolean[]>([]);
  const [selectError, setSelectError] = useState<boolean[][]>([]);

  const validateData = () => {
    const branchErrors = mainArray.map((obj: any) => obj.branch === "");
    setBranchError(branchErrors);

    const selectErrors = mainArray.map((obj: any) =>
      obj.firstArray.map(
        (item: any) =>
          (item.secondArray.selectOne === "" ||
            item.secondArray.selectTwo === "" ||
            (item.secondArray.selectTwo &&
              item.secondArray.selectThree === "")) &&
          true
      )
    );
    setSelectError(selectErrors);

    return !branchErrors.includes(true) && !selectErrors.flat().includes(true);
  };

  const handleAddObject = () => {
    if (validateData()) {
      setMainArray([
        ...mainArray,
        {
          branch: "",
          firstArray: [
            {
              condition: "",
              secondArray: {
                selectOne: "",
                selectTwo: "",
                selectThree: "",
              },
            },
          ],
        },
      ]);
    }
  };

  const handleBranchChange = (index: any, value: any) => {
    const updatedArray = [...mainArray];
    updatedArray[index].branch = value;
    setMainArray(updatedArray);
  };
  console.log(mainArray);

  const handleAddFirstArray = (index: any) => {
    if (validateData()) {
      const updatedArray: any = [...mainArray];
      updatedArray[index].firstArray.push({
        condition: "",
        secondArray: { selectOne: "", selectTwo: "", selectThree: "" },
      });
      setMainArray(updatedArray);
    }
  };

  const handleConditionChange = (
    outerIndex: any,
    innerIndex: any,
    value: any
  ) => {
    const updatedArray: any = [...mainArray];
    updatedArray[outerIndex].firstArray[innerIndex].condition = value;
    setMainArray(updatedArray);
  };

  const handleSecondArrayChange = (
    outerIndex: any,
    innerIndex: any,
    fieldName: any,
    value: any
  ) => {
    const updatedArray: any = [...mainArray];
    updatedArray[outerIndex].firstArray[innerIndex].secondArray[fieldName] =
      value;
    setMainArray(updatedArray);
  };

  const handleDeleteFirstArray = (outerIndex: any, innerIndex: any) => {
    const updatedArray = [...mainArray];
    updatedArray[outerIndex].firstArray.splice(innerIndex, 1);
    setMainArray(updatedArray);
  };

  const handleSetConditionForAll = (operation: any) => {
    const updatedArray: any = [...mainArray];
    const selectedValue = operation === "AND" ? "AND" : "OR";

    for (const obj of updatedArray) {
      for (const item of obj.firstArray) {
        item.condition = selectedValue;
      }
    }

    setMainArray(updatedArray);
  };

  console.log(mainArray);

  return (
    <div className="px-5 py-5">
      <div className="bg-white shadow-md px-5 py-4">
        {mainArray.map((obj: any, outerIndex: any) => (
          <div key={outerIndex}>
            <input
              type="text"
              value={obj.branch}
              onChange={(e) => handleBranchChange(outerIndex, e.target.value)}
              placeholder="Branch Name"
              className="bg-gray-200 px-2 py-2 "
            />

            <div>
              {obj.firstArray.map((item: any, innerIndex: any) => (
                <div
                  key={innerIndex}
                  className="bg-gray-100 shadow-md px-5 py-4 mt-5"
                >
                  <div className="flex justify-start items-center gap-4  mt-6">
                    <select
                      className="bg-gray-200 px-2 py-2 "
                      value={item.secondArray.selectOne}
                      onChange={(e) =>
                        handleSecondArrayChange(
                          outerIndex,
                          innerIndex,
                          "selectOne",
                          e.target.value
                        )
                      }
                    >
                      <option>Select 1st item</option>
                      <option value="one">one</option>
                      <option value="two">two</option>
                      <option value="three">three</option>
                    </select>

                    <select
                      className="bg-gray-200 px-2 py-2 "
                      value={item.secondArray.selectTwo}
                      onChange={(e) =>
                        handleSecondArrayChange(
                          outerIndex,
                          innerIndex,
                          "selectTwo",
                          e.target.value
                        )
                      }
                    >
                      {" "}
                      <option>Select 2nd item</option>
                      <option value="one">one</option>
                      <option value="two">two</option>
                      <option value="three">three</option>
                    </select>

                    {item.secondArray.selectTwo && (
                      <select
                        className="bg-gray-200 px-2 py-2 "
                        value={item.secondArray.selectThree}
                        onChange={(e) =>
                          handleSecondArrayChange(
                            outerIndex,
                            innerIndex,
                            "selectThree",
                            e.target.value
                          )
                        }
                      >
                        {" "}
                        <option>Select 3rd item</option>
                        <option value="one">one</option>
                        <option value="two">two</option>
                        <option value="three">three</option>
                      </select>
                    )}

                    <button
                      className="bg-red-400 text-white px-2 py-2"
                      onClick={() =>
                        handleDeleteFirstArray(outerIndex, innerIndex)
                      }
                    >
                      Delete
                    </button>
                  </div>

                  <div className="w-1/2 mt-6">
                    <p> {item.condition} </p>
                  </div>
                </div>
              ))}

              <div className="flex justify-end items-end w-1/2 mt-4">
                <button onClick={() => handleAddFirstArray(outerIndex)}>
                  Add Condition
                </button>
              </div>
            </div>
          </div>
        ))}

        <div className="flex justify-start gap-3 items-center">
          <button
            className="bg-green-200 py-2 px-3"
            onClick={() => handleSetConditionForAll("AND")}
          >
            AND
          </button>
          <button
            className="bg-blue-200 py-2 px-3"
            onClick={() => handleSetConditionForAll("OR")}
          >
            OR
          </button>
        </div>
      </div>

      <div className="flex justify-end items-end w-1/2 mt-8">
        <button onClick={handleAddObject}>Add Segment</button>
      </div>
    </div>
  );
};

export default App;
