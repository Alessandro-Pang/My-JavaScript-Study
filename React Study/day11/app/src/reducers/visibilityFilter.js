/*
 * @Author: your name
 * @Date: 2020-05-05 19:56:30
 * @LastEditTime: 2020-05-05 19:56:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day11\app\src\reducers\visibilityFilter.js
 */
const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter