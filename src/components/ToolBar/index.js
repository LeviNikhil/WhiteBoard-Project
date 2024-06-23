import React, { useContext, useState } from 'react'
import classes from "./index.module.css"
import cx from 'classnames';
import {FaSlash} from "react-icons/fa";
import { LuRectangleHorizontal } from "react-icons/lu";
import boardContext from '../../store/board-context';

const ToolBar = () => {

  const {activeToolItem,handleToolItemClick}= useContext(boardContext)

  return (
    <div className={classes.container}>
      <div 
        className={
         cx(classes.toolItem,{[classes.active]:activeToolItem==="LINE"})
        }
        onClick={()=>handleToolItemClick("LINE")}>
          <FaSlash/>
        </div>
      <div 
        className={
         cx(classes.toolItem,{[classes.active]:activeToolItem==="RECTANGLE"})
        }
        onClick={()=>handleToolItemClick("RECTANGLE")}>
          <LuRectangleHorizontal/>
        </div>
    </div>
  );
  
}

export default ToolBar;