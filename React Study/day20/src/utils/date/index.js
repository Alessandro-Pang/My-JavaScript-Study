/*
 * @Author: your name
 * @Date: 2020-06-15 22:32:48
 * @LastEditTime: 2020-06-16 09:45:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\utils\date\index.js
 */

function formatDate(dateTime, format) {
  const date = new Date(dateTime);
  const year = date.getFullYear();
  const month = date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
  const day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`;
  const hour = date.getHours() >= 10 ? date.getHours() : `0${date.getHours()}`;
  const minute = date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`;
  const second = date.getSeconds() >= 10 ? date.getSeconds() : `0${date.getSeconds()}`;

  const _date = format
    .replace(/YYYY/, year)
    .replace(/MM/, month)
    .replace(/DD/, day)
    .replace(/hh/, hour)
    .replace(/mm/, minute)
    .replace(/ss/, second);
    
  return _date;
}

export default formatDate;
