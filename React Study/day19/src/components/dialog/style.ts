/*
 * @Author: your name
 * @Date: 2020-06-13 12:24:49
 * @LastEditTime: 2020-06-13 18:46:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day19\src\components\dialog\style.ts
 */ 
import style from "styled-components";
import { ElementType } from "react";
export const DialogWrapper:ElementType = style.div`
  position:absolute;
  top:0;
  left:0;

  width:100vw;
  height:100vh;
  background-color:rgba(0,0,0,.5);
  display:flex;
  align-items:center;
  justify-content:center; 
`

export const DialogBorder:ElementType = style.div`
  width:380px;
  height:220px;
  // box-shadow:0 0 5px #10afff;
  background:#fff;
  display:flex;
  justify-content:start;
  align-items:center;
  flex-direction:column;
  border-radius:7px;
  overflow:hidden;
`

export const DialogHeader:ElementType = style.header`
  width:100%;
  height:50px;
  display:flex;
  align-items:center;
  justify-content:center;
  background-color:rgba(240,240,240,.3);
  border-bottom:1px solid #eee;
  font-size:18px;
  letter-spacing:8px;
`

export const DialogContent:ElementType = style.article`
  width:100%;
  height:calc(100% - 100px);
  display:flex;
  align-items:center;
  text-align:center;
  vertical-align:center;
  justify-content:center;
`
export const DialogAffirmWrapper :ElementType= style.div`
  width:100%;
  height:50px;
  display:flex;
  justify-content:end;
  justify-content:felx-end;
  align-items:center;
  border-top:1px solid #eee;
  background-color:rgba(240,240,240,.3);

  button{
    border:0;
    width:80px;
    height:35px;
    margin:5px;
    border-radius:5px;

    &.cancel{
      box-sizing:border-box;
      border:1px solid #ccc;
      background:#eee;
      color:black;
    }
    &.cancel:hover{
      background-color:rgba(0,0,0,.3)
    }

    &.affirm{
      background-color:rgba(20,170,240,.9);
      color:white;
    }

    &.affirm:hover{
      background-color:rgba(40,150,200)
    }
  }
`