/*
 * @Author: your name
 * @Date: 2020-05-14 22:13:52
 * @LastEditTime: 2020-05-15 13:14:16
 * @LastEditors: Please set LastEditors
 * @Description: Jest JS 入门
 * @FilePath: \My-JavaScript-Study\React Study\day18\src\index.test.js
 */

//import sum from "./test1.js";
const sum = require("./test1");

it('测试 sum 函数是否能正常解析结果',()=>{
  // expect 断言，判断解析出来的结果是否和 198 相等
  // expect 测试函数 , toEqual 期待结果
  expect(sum(99,99)).toEqual(198);
})

test("测试 SUM 函数是否可以正常解析：test函数与toBe方法",()=>{
  expect(sum(100,100)).toBe(200)
})
/**
 * .toEqual匹配器会递归的检查对象所有属性和属性值是否相等，
 * 所以如果要进行应用类型的比较时，请使用.toEqual匹配器而不是.toBe。
 */
test("测试 99+1 是否不等于101: not 取反",function(){
  expect(sum(99,1)).not.toBe(101)
})