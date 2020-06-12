/*
 * @Author: your name
 * @Date: 2020-06-11 21:27:44
 * @LastEditTime: 2020-06-11 21:36:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\nodeJs Study\3、geekTime01\04.userPlay.js
 */

const game = require("./03play");

const userPlay = process.argv[process.argv.length - 1];

let count = 0;
process.stdin.on("data", (e) => {
  const userPlay = e.toString().trim();
  const result = game(userPlay);

  if (result === -1) {
    count++;
  }
  if (count === 3) {
    console.log("woc,you niu bi!,i not gen ni play!!!");
    process.exit();
  }
});
