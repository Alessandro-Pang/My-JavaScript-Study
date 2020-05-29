/*
 * @Author: your name
 * @Date: 2020-05-28 23:24:12
 * @LastEditTime: 2020-05-29 09:58:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day19\src\actions\actionCreators.ts
 */ 
import {HEADER_INPUT_FOCUS,HEADER_INPUT_BLUR} from "./constants" ;

export const input_focus = (focusd:boolean) => ({
  type:HEADER_INPUT_FOCUS,
  focusd
})

export const input_blur = (focusd:boolean) =>({
  type:HEADER_INPUT_BLUR,
  focusd
})