/*
 * @Author: your name
 * @Date: 2020-06-15 13:37:53
 * @LastEditTime: 2020-06-15 17:08:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\page\Home\store\actionCreators.js
 */

import { GET_USER_INFO,USER_INFO } from "./constants";

export const get_user_info = () => ({
  type: GET_USER_INFO,
});

export const user_info = (data) => ({
  type:USER_INFO,
  data
})