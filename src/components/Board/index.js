import { useEffect, useRef } from "react";
import rough from 'roughjs';

function Board() {
  const canvasRef=useRef();

  useEffect(()=>{
     const canvas = canvasRef.current;
     canvas.width = window.innerWidth;
     canvas.height = window.innerHeight;
     const ctx = canvas.getContext("2d");

     const roughcanvas =rough.canvas(canvas);
     const generator = roughcanvas.generator;
     let rect1 = generator.rectangle(10,10,100,100);
     let rect2 = generator.rectangle(10,120,500,200,{fill: "red"});
     roughcanvas.draw(rect1);
     roughcanvas.draw(rect2);
    //  ctx.fillStyle = "#FF0000";
    //  ctx.fillRect(0, 0, 100, 100);
  },[]);

  return (<canvas ref={canvasRef}/>);
}

export default Board;
