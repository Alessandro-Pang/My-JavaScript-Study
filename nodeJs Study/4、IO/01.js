/*
 * @Author: your name
 * @Date: 2020-06-12 15:59:07
 * @LastEditTime: 2020-06-12 16:45:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\nodeJs Study\4、IO\1.js
 */

const glob = require("glob");
const schedule = require('node-schedule');


console.log('同步执行')
console.time('glob')
const result = glob.sync(__dirname+'*/**');
console.timeEnd('glob')

console.log('异步执行')
console.time('glob2')
const result2 = glob(__dirname+'*/**');
console.timeEnd('glob2')


async function t1() {
  await setTimeout(() => {
    console.log(1);
  }, 1000);
};

t1().then(()=>{
  console.log('ok!')
})

//定时任务
const  scheduleCronstyle = ()=>{
  //每分钟的第30秒定时执行一次:
    schedule.scheduleJob('30 * * * * *',()=>{
        console.log('scheduleCronstyle:' + new Date());
    }); 
}

scheduleCronstyle();