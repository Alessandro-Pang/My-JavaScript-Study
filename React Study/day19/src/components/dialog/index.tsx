import React, { Fragment } from "react";
import { createPortal } from "react-dom";
import { DialogWrapper, DialogHeader,DialogBorder,DialogContent,DialogAffirmWrapper } from "./style";

interface Prosp {
  text:string,
  show:boolean,
  handleClickAffirm:Function
}

const dialog = (props:Prosp) => {
  if(!props.show){
    return <Fragment></Fragment>
  }
  return createPortal(
    <DialogWrapper>
      <DialogBorder>
        <DialogHeader>提示</DialogHeader>
        <DialogContent>
          {props.text}
          {console.log(props)} 
          {/* {props.children ? props.children : ''} */}
        </DialogContent>
        <DialogAffirmWrapper>
          <button className="cancel" onClick={()=>props.handleClickAffirm(true)}>取消</button>
          <button className="affirm" onClick={()=>props.handleClickAffirm(true)}>确认</button>
        </DialogAffirmWrapper>
      </DialogBorder>
    </DialogWrapper>,
    document.getElementById("dialog") as Element
  );
};

export default dialog;
