import React, { useContext} from 'react'
import classes from "./index.module.css"
import cx from 'classnames';
import {FaSlash} from "react-icons/fa";
import { LuRectangleHorizontal } from "react-icons/lu";
import boardContext from '../../store/board-context';

const ToolBar = () => {

  const {activeToolItem,changeToolHandler}= useContext(boardContext)

  return (
    <div className={classes.container}>
      <div 
        className={
         cx(classes.toolItem,{[classes.active]:activeToolItem==="LINE"})
        }
        onClick={()=>changeToolHandler("LINE")}>
          <FaSlash/>
        </div>
      <div 
        className={
         cx(classes.toolItem,{[classes.active]:activeToolItem==="RECTANGLE"})
        }
        onClick={()=>changeToolHandler("RECTANGLE")}>
          <LuRectangleHorizontal/>
        </div>
    </div>
  );
  
}

export default ToolBar;