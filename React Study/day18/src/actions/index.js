/*
 * @Author: your name
 * @Date: 2020-05-19 08:11:57
 * @LastEditTime: 2020-05-20 08:48:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day18\src\actions\index.js
 */

export const ADD = "ADD";
export const DIFF = "DIFF";
export const INFO = "INFO";

export const showINFO = (info) => ({
  type: INFO,
  info,
});

export const GetUserInfo = () => (dispatch) =>
  fetch("127.0.0.1:3300/db/queryUser/username=庞超").then((info) =>
    dispatch(showINFO(info))
  );
