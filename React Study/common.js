/*
 * @Author: your name
 * @Date: 2020-04-22 10:35:51
 * @LastEditTime: 2020-05-22 15:00:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\common.js
 */
class Common{
  create(id){
    let app = document.createElement('div');
    app.setAttribute('id',id);
    document.body.appendChild(app);
    return app;
  }
  query(id){
    return document.getElementById(id)
  }
}