export const  Box = ({ box }) => {
  
  const _onDragStart = event => {
      event.dataTransfer.setData("text/plain", event.target.id);
  }
  return (
    
    <div className="droppable-element" draggable={true} unselectable="on" id={box.id} onDragStart={_onDragStart}>
      {box.data}
    </div>
  );
};
