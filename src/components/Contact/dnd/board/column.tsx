import React from "react";
import { Draggable } from "react-beautiful-dnd";
import QuoteList from "../styles/list";

const Column = (props: any) => {
  const title = props.title;
  const quotes = props.quotes;
  const index = props.index;

  return (
    <Draggable draggableId={title} index={index}>
      {(provided, snapshot) => (
        <div
          className={`rounded-[10px] px-3 py-3 container bg-[#f5f7fb] min-w-[250px] relative overflow-y-scroll scrollbar-hide   ${
            snapshot.isDragging && "bg-[#e3fcef]"
          }`}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <header
            className={`shadow sticky top-[-6px]  bg-[#f5f7fb]`}
            //   isDragging={snapshot.isDragging}
          >
            <div
              //   isDragging={snapshot.isDragging}
              {...provided.dragHandleProps}
              aria-label={`${title} quote list`}
              className="bg-white px-2 py-2.5 rounded-md  ring-1 ring-gray-200 shadow-md flex justify-between items-center"
            >
              <div className="flex justify-between items-center">
                <div
                  className={`${
                    title == "New"
                      ? " bg-newBlue "
                      : title == "Open"
                      ? " bg-purple-800"
                      : title == "In Progress"
                      ? " bg-green-700"
                      : title == "Open Deal"
                      ? "  bg-pink-500"
                      : " bg-gray-500"
                  }
                    
                    h-1.5 w-1.5 rounded-full   mr-2 ml-2 `}
                ></div>

                <p
                  className={`${
                    title == "New"
                      ? " text-newBlue "
                      : title == "Open"
                      ? " text-purple-800"
                      : title == "In Progress"
                      ? " text-green-700"
                      : title == "Open Deal"
                      ? " text-pink-500"
                      : " text-gray-600"
                  }  pr-3   font-semibold  text-sm`}
                >
                  {" "}
                  {title}{" "}
                </p>
              </div>
              <p className="text-gray-600 font-semibold text-[12px]">
                {" "}
                6 Leads{" "}
              </p>
            </div>
          </header>
          <QuoteList
            listId={title}
            listType="QUOTE"
            quotes={quotes}
            internalScroll={props.isScrollable}
            isCombineEnabled={Boolean(props.isCombineEnabled)}
            useClone={Boolean(props.useClone)}
          />
        </div>
      )}
    </Draggable>
  );
};

export default Column;
