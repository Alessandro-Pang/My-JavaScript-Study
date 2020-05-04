/*
 * @Author: your name
 * @Date: 2020-05-04 19:59:30
 * @LastEditTime: 2020-05-04 22:14:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day12\src\common.js
 */

class Common {
  query(id) {
    return document.getElementById(id);
  }

  create(ele) {
    return document.createElement(ele);
  }
  /**
   * 
   * @param {Array} ele 插入的元素
   * @param {*} el 插入那个元素之后
   */
  append(ele,el) {
    ele.forEach(ele=>{
      if (el) {
        el.appendChild(ele);
      }
      return document.body.appendChild(ele);
    })
  }
}

export default Common;