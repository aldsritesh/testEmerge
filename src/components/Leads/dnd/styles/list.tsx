/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import QuoteItem from "./item";

export const getBackgroundColor = (
  isDraggingOver: boolean,
  isDraggingFrom: boolean
) => {
  if (isDraggingOver) {
    return "#FFEBE6";
  }
  if (isDraggingFrom) {
    return "#E6FCFF";
  }
  return "#EBECF0";
};

const InnerQuoteList = React.memo(function InnerQuoteList(props: any) {
  return props.quotes.map((quote: any, index: number) => (
    <Draggable key={quote.id} draggableId={quote.id} index={index}>
      {(dragProvided, dragSnapshot) => (
        <div>
          <QuoteItem
            key={quote.id}
            quote={quote}
            isDragging={dragSnapshot.isDragging}
            isGroupedOver={Boolean(dragSnapshot.combineTargetFor)}
            provided={dragProvided}
          />
        </div>
      )}
    </Draggable>
  ));
});

function InnerList(props: { quotes: any; dropProvided: any; title: string }) {
  const { quotes, dropProvided } = props;
  const title = props.title ? <div>{props.title}</div> : null;

  return (
    <div className="h-full">
      <div ref={dropProvided.innerRef} className="h-full">
        <InnerQuoteList quotes={quotes} />
        {dropProvided.placeholder}
      </div>
    </div>
  );
}

interface IQuoteList {
  ignoreContainerClipping?: any;
  internalScroll: any;
  isDropDisabled?: boolean;
  isCombineEnabled: boolean;
  listId: string;
  listType: string;
  quotes: any;
  title?: any;
  useClone: any;
}

export default function QuoteList(props: IQuoteList) {
  const {
    ignoreContainerClipping,
    internalScroll,
    isDropDisabled,
    isCombineEnabled,
    listId = "LIST",
    listType,
    quotes,
    title,
    useClone,
  } = props;

  return (
    <Droppable
      droppableId={listId}
      type={listType}
      ignoreContainerClipping={ignoreContainerClipping}
      isDropDisabled={isDropDisabled}
      isCombineEnabled={isCombineEnabled}
    >
      {(dropProvided, dropSnapshot) => (
        <div
          // isDraggingOver={dropSnapshot.isDraggingOver}
          // isDropDisabled={isDropDisabled}
          // isDraggingFrom={Boolean(dropSnapshot.draggingFromThisWith)}
          {...dropProvided.droppableProps}
          className={`mt-0  pt-4 ${
            dropSnapshot.isDraggingOver && "bg-[#f9d9e7] p-1 transition-all"
          } ${Boolean(dropSnapshot.draggingFromThisWith) && "bg-[#e3fcef]"} ${
            quotes.length === 0 && "h-full"
          }`}
        >
          {internalScroll ? (
            <div className="h-full">
              <InnerList
                quotes={quotes}
                title={title}
                dropProvided={dropProvided}
              />
            </div>
          ) : (
            <InnerList
              quotes={quotes}
              title={title}
              dropProvided={dropProvided}
            />
          )}
        </div>
      )}
    </Droppable>
  );
}
