import React from "react";

export default function DataElements({
  options,
  handleChange,
  selectedData,
}: any) {
  return (
    <div className="py-2">
      {options.map((option: any, optionIndex: number) => (
        <div key={optionIndex}>
          <p className="text-gray-800 font-medium md:text-[16px]">
            {option?.title}
          </p>
          {option.subData?.map((subData: any, subDataIndex: number) => (
            <div key={subDataIndex} className="mt-3 mb-5">
              <div className="flex justify-start items-center mb-3">
                <input
                  type="checkbox"
                  checked={
                    selectedData.findIndex(
                      (data: any) =>
                        data.optionIndex === optionIndex &&
                        data.subDataIndex === subDataIndex
                    ) !== -1
                  }
                  onChange={() =>
                    handleChange(optionIndex, subDataIndex, subData)
                  }
                  className="border-gray-400 checkbox checkbox-sm checkbox-info rounded-md bg-white"
                />

                <p className="line-clamp-1 text-gray-700 font-normal md:text-sm ml-1.5">
                  {subData?.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
