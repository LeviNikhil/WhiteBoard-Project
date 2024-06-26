import { useContext, useEffect, useLayoutEffect, useRef } from "react";
import rough from 'roughjs';
import boardContext from "../../store/board-context";
import { TOOL_ACTION_TYPE } from "../../constant";

function Board() {
  const canvasRef=useRef();
  const {
    elements,
    boardMouseDownHandler,
    boardMouseMoveHandler,
    boardMouseUpHandler,
    toolActionType
  } = useContext(boardContext);

  useEffect(()=>{
     const canvas = canvasRef.current;
     canvas.width = window.innerWidth;
     canvas.height = window.innerHeight;
  },[]);

  useLayoutEffect(()=>{
    const canvas = canvasRef.current;
    
    const context= canvas.getContext('2d');
    context.save();
    
    const roughcanvas =rough.canvas(canvas);

    elements.forEach((element)=>{
      roughcanvas.draw(element.roughEle);
    });
    return ()=>{
        context.clearRect(0,0,canvas.width,canvas.height);
    }

  },[elements]);

  const handleMouseDown = (event) => {
    boardMouseDownHandler(event);
  }
  const handleMouseMove = (event) => {
    if(toolActionType === TOOL_ACTION_TYPE.DRAWING)
    {
      boardMouseMoveHandler(event);
    }
  }

  const handleMouseUp = () => {
      boardMouseUpHandler();
  }

  return (
      <canvas
        ref= {canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      />
  );
}

export default Board;
