import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { CiLock } from "react-icons/ci";
import { RxCross1, RxDragHandleDots2 } from "react-icons/rx";

const reorder = (list: any, startIndex: any, endIndex: any) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const grid = 8;
const getItemStyle = (isDragging: any, draggableStyle: any) => ({
  userSelect: "none",
  padding: grid * 1,
  background: isDragging ? "#f5f5f5" : "white",
  ...draggableStyle,
});

const getListStyle = (isDraggingOver: any) => ({
  background: isDraggingOver ? "#f2f6ff" : "white",
});
const DragElements = ({ columns }: any) => {
  const [items, setItems] = useState<any>(columns);
  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }

    const reorderedItems = reorder(
      items,
      result.source.index,
      result.destination.index
    );

    setItems(reorderedItems);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            {items.map((item: any, index: any) => (
              <Draggable
                key={index}
                draggableId={`id${index.toString()}`}
                index={index}
              >
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                    )}
                  >
                    <div className="flex items-center justify-between w-full shadow px-2 py-3 border-gray-200 border-[1px] bg-white rounded-md cursor-pointer">
                      <div className="flex items-center gap-2">
                        <div>
                          <RxDragHandleDots2 className="text-gray-500 h-6 w-6" />
                        </div>

                        <h6 className="text-gray-600 text-base font-medium text-center pl-2">
                          {item.name}
                        </h6>
                      </div>
                      <div>
                        {item.name == "Contact Name" ? (
                          <CiLock className="text-gray-500 h-6 w-6" />
                        ) : (
                          <button>
                            <RxCross1 className="text-gray-500 h-4 w-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DragElements;
