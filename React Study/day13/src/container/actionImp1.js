/*
 * @Author: your name
 * @Date: 2020-05-05 11:54:08
 * @LastEditTime: 2020-05-05 16:49:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day13\src\container\actionImp.js
 */
import {createStore} from 'redux'
import todo from '@/reducers';
import {add_todo,remove_todo,set_todo_state} from '@/action'
let store = createStore(todo);
/**
 * 之所以将这样的函数称之为reducer，
 * 是因为这种函数与被传入 Array.prototype.reduce(reducer, ?initialValue) 里的回调函数属于相同的类型。
 * 保持 reducer 纯净非常重要。
 * 
 * 永远不要在 reducer 里做这些操作：
 *  (1) 修改传入参数;
 *  (2) 执行有副作用的操作，如 API 请求和路由跳转；
 *  (3) 调用非纯函数，如 Date.now() 或 Math.random()。
 * 
 * 现在只需要谨记 reducer 一定要保持纯净。
 * 只要传入参数相同，返回计算得到的下一个 state 就一定相同。
 * 没有特殊情况、没有副作用，没有 API 请求、没有变量修改，单纯执行计算。
 */
let unsubscribe = store.subscribe(()=>{
  console.info("\n------------------分割线--------------------\n")
  console.log("%c show state : %c"+store.getState().showState ,"font-size:16px;color:green;font-weight:bold","color:black")
  console.log("%ctodos : %c"+JSON.stringify(store.getState().todos),"font-size:16px;color:green;font-weight:bold","color:black")
  console.info("\n------------------分割线--------------------\n")
})
store.dispatch(add_todo("哈哈哈哈哈哈"));
store.dispatch(add_todo("第二条TODO"))
store.dispatch(set_todo_state("SHOW_SMALL"))
//下标从0开始，移除第一条
store.dispatch(remove_todo(0))

//如果第一条被删除，那么数组中钙元素后面的的元素下标将会全部前进一位
store.dispatch(add_todo("第三条TODO信息"));
//这里删除其实是 "第三条TODO信息"
store.dispatch(remove_todo(1))
store.dispatch(set_todo_state("SHOW_SCRNNER"))

//通过subscribe返回的函数，注销更新订阅
unsubscribe();
/*********************************************Object.assign Demo*************************************************/

let obj = {a:"abc",b:"123",c:"a1w2e3",d:"password"}
let obj2 = {c:"q1w2e3r4",d:"12345678",f:"ziyang",g:"xiaoxiaolong",n:{a:1,b:2}};

//Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
let obj_2 = Object.assign(obj2,obj);

console.log("%c OBJ返回值与 OBJ2是否相等: %c "+(obj_2==obj2),"color:green","color:blue")
//如果 %c 占位符 没有获取参数，那么将以源数据输出
console.log("%c OBJ2合并对象: %c"+JSON.stringify(obj2),"color:green","color:black")

let obj3 = Object.assign({},obj2)
let obj4 = JSON.stringify(obj2);
console.log("%c OBJ3拷贝: %c"+JSON.stringify(obj3),"color:green","color:black");

obj2.n.a = "abcd";
obj2.n.b = "123456";
console.log("%c OBJ3测试是否是深拷贝: %c"+JSON.stringify(obj3),"color:green","color:black")
//Deep Copy
console.log("%c OBJ4测试是否是深拷贝: %c"+(obj4),"color:green","color:black")


