// @flow
import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

import reorder, { reorderQuoteMap } from "../reorder";
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import Column from "./column";
import { boards } from "../mockData";
import { StoreLeadContext } from "../../TabLeads";

interface IBoard {
  isCombineEnabled?: boolean;
  initial: any;
  useClone?: any;
  containerHeight?: number;
  withScrollableColumns?: any;
}

const Board = ({
  isCombineEnabled,
  initial,
  useClone,
  containerHeight,
  withScrollableColumns,
}: IBoard) => {
  const [columns, setColumns] = useState(initial);
  const [ordered, setOrdered] = useState(Object.keys(initial));

  useEffect(() => {
    setColumns(initial);
    setOrdered(Object.keys(initial));
  }, [initial]);

  const onDragEnd = (result: DropResult) => {
    if (result.combine) {
      if (result.type === "COLUMN") {
        const shallow = [...ordered];
        shallow.splice(result.source.index, 1);
        setOrdered(shallow);
        return;
      }

      const column = columns[result.source.droppableId];
      const withQuoteRemoved = [...column];

      withQuoteRemoved.splice(result.source.index, 1);

      const orderedColumns = {
        ...columns,
        [result.source.droppableId]: withQuoteRemoved,
      };
      setColumns(orderedColumns);
      return;
    }

    // dropped nowhere
    if (!result.destination) {
      return;
    }

    const source = result.source;
    const destination = result.destination;

    // did not move anywhere - can bail early
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    // reordering column
    if (result.type === "COLUMN") {
      const reorderedorder: any = reorder(
        ordered,
        source.index,
        destination.index
      );

      setOrdered(reorderedorder);

      return;
    }

    const data = reorderQuoteMap({
      quoteMap: columns,
      source,
      destination,
    });

    setColumns(data.quoteMap);
  };

  const ctx: any = useContext(StoreLeadContext);
  // console.log("bye", ctx.formValue);

  useEffect(() => {
    if (ctx?.formValue?.email != null) {
      handleAddColumn();
    }
  }, [ctx.formValue]);

  const handleAddColumn = () => {
    const oldData = {
      [boards[1].name]: columns[boards[1].name],
      [boards[2].name]: columns[boards[2].name],
      [boards[3].name]: columns[boards[3].name],
    };

    const newData = [
      {
        id: `G${Math.floor(Math.random() * 1000000000)}`,
        lead_name: {
          name: ctx?.formValue?.fullName,
          time: "",
          image: require("../../../../../public/images/avatar/yellowdog.jpg"),
        },

        contact: {
          email: ctx?.formValue?.email,
          phone: ctx?.formValue?.phone,
        },

        lead_status: ctx?.formValue?.leadStatus,
        lead_source: ctx?.formValue?.leadSource,
        lead_owner: {
          name: ctx?.formValue?.leadOwner,
          time: "",
          image: require("../../../../../public/images/avatar/yellowdog.jpg"),
        },
        board: boards[0],
      },
      ...columns[boards[0].name],
    ];

    setColumns({ [boards[0].name]: newData, ...oldData });
  };

  return (
    <div className="h-full">
      {/* <button className="btn" onClick={handleAddColumn}>
        add
      </button> */}
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable
          droppableId="board"
          type="COLUMN"
          direction="horizontal"
          ignoreContainerClipping={Boolean(containerHeight)}
          isCombineEnabled={isCombineEnabled}
        >
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="flex overflow-x-scroll gap-3 p-2 relative h-full "
            >
              {ordered.map((key, index) => (
                <Column
                  key={key}
                  index={index}
                  title={key}
                  quotes={columns[key]}
                  isScrollable={withScrollableColumns}
                  isCombineEnabled={isCombineEnabled}
                  useClone={useClone}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

Board.defaultProps = {
  isCombineEnabled: false,
};

Board.propTypes = {
  isCombineEnabled: PropTypes.bool,
};

export default Board;
