/*
 * @Author: your name
 * @Date: 2020-05-05 22:49:03
 * @LastEditTime: 2020-05-05 22:57:12
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day14\src\reduces\visibilityFilter.js
 */
const visibilityFilter = (state="SHOW_ALL",action)=>{
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter
  
    default:
      return state;
  }
}

export default visibilityFilter;