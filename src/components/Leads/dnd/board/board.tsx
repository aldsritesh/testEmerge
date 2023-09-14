// @flow
import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

import reorder, { reorderQuoteMap } from "../reorder";
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import Column from "./column";
import { boards } from "../mockData";
import { StoreLeadContext } from "../../TabLeads";
import { GlobalContext } from "@/layouts/GlobalLayout";
import axios from "axios";
import { baseUrl } from "@/config/APIConstants";
import { useAuthentication } from "@/controllers/auth";

interface IBoard {
  isCombineEnabled?: boolean;
  initial: any;
  setInitial: any;
  pipelineID: string;
  useClone?: any;
  containerHeight?: number;
  withScrollableColumns?: any;
}

const Board = ({
  isCombineEnabled,
  initial,
  setInitial,
  pipelineID,
  useClone,
  containerHeight,
  withScrollableColumns,
}: IBoard) => {
  console.log(initial);
  const globalCtx = useContext(GlobalContext);
  const [columns, setColumns] = useState<any>(null);
  const [ordered, setOrdered] = useState<string[]>([]);
  const { location, token }: any = useAuthentication();

  useEffect(() => {
    const pipeline = globalCtx.pipelines.find(
      (pipeline) => pipeline.id === pipelineID
    );

    if (pipeline) {
      const newColumns: any = {};
      pipeline.stages.forEach((stage) => {
        newColumns[stage.name] = [];
        initial.map((item: any) => {
          if (item.pipelineStageID === stage.id) {
            newColumns[stage.name].push(item);
          }
        });
      });
      console.log(newColumns);
      setColumns(newColumns);
      setOrdered(Object.keys(newColumns));
    }
  }, [initial, globalCtx.pipelines]);

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

      console.log("DROPPED", column, withQuoteRemoved);

      const orderedColumns = {
        ...columns,
        [result.source.droppableId]: withQuoteRemoved,
      };
      console.log("orderedColumns", orderedColumns);
      setColumns(orderedColumns);
      return;
    }

    // dropped nowhere
    if (!result.destination) {
      return;
    }

    const source = result.source;
    const destination = result.destination;

    console.log("result", result);

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

    // get pipline stage id from destination.droppableId which is a stage name
    if (source.droppableId !== destination.droppableId) {
      const pipeline = globalCtx.pipelines.find(
        (pipeline) => pipeline.id === pipelineID
      );
      const stage = pipeline?.stages.find(
        (stage) => stage.name === destination.droppableId
      );
      if (pipeline && stage) {
        axios
          .put(
            `${baseUrl}contacts/${result.draggableId}/pipeline`,
            {
              pipelineID: pipeline.id,
              pipelineStageID: stage.id,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((res) => {
            setInitial((prev: any) => {
              const newData = [...prev];
              const index = newData.findIndex(
                (item: any) => item.id === result.draggableId
              );
              newData[index].pipelineStageID = stage.id;
              return newData;
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }

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
    ];

    setColumns({ [boards[0].name]: newData });
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
