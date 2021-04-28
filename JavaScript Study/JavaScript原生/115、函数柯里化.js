/*
 * @Author: zi.yang
 * @Date: 2021-03-28 10:21:52
 * @LastEditors: zi.yang
 * @LastEditTime: 2021-03-28 11:11:55
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\JavaScript Study\JavaScript原生\115、函数柯里化.js
 */


function sum(a,b,c,d){
  return a+b+c+d;
}

function curring(fn){
  const inner = (arg = [])=>{
    return arg.length >= fn.length ? fn(...arg):(...userArgs) => inner([...arg,...userArgs]);
  }
  return inner();
}


const f1 = curring(sum)(1);
const f2 = f1(2,3);
const f3 = f2(4);

console.log(f3)