/*
 * @Author: zi.yang
 * @Date: 2021-03-28 11:23:17
 * @LastEditors: zi.yang
 * @LastEditTime: 2021-03-28 14:26:54
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\JavaScript Study\JavaScript原生\116.js
 */
const event = {
  stack:[],
  on:function(callback){
    this.stack.push(callback)
  },
  emit:function(){
    this.stack.forEach(callback => callback())
  }
}


function f1(message){
  event.on(function(){
    console.log(message)
  })
}

function f2 (){
  event.emit();
}

function f3 (){
  event.emit();
}

function f4 (){
  event.emit();
}

f1('hhhhhh')

f2()
f3()
f4()

f2('666666')