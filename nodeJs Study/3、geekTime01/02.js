/*
 * @Author: your name
 * @Date: 2020-06-11 21:00:35
 * @LastEditTime: 2020-06-11 21:18:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\nodeJs Study\3、geekTime01\02.js
 */

// process.argv 获取用户输入参数
// console.log(process.argv);

const playerAction = process.argv[process.argv.length - 1];

const random = Math.random() * 3;

let tag = 0;
let timer = setInterval(function () {
  const random = Math.random() * 3;
  //如果你调用外面的random,那么会形成闭包
  console.log(random);
  if (tag == 5) {
    clearInterval(timer);
    return;
  }
  tag++;
}, 1000);

let player = "";
if (random < 1) {
  player = "石头";
} else if (random > 2) {
  player = "剪刀";
} else {
  player = "布";
}

let isPlayer =
  playerAction !== "石头" && playerAction !== "剪刀" && playerAction !== "布";

if (isPlayer) {
  console.log("请出石头，剪刀，步");
} else {
  if (playerAction === player) {
    console.log("平局");
  } else if (
    (playerAction === "石头" && player === "剪刀") ||
    (playerAction === "剪刀" && player === "布") ||
    (playerAction === "布" && player === "石头")
  ) {
    console.log("你赢了")
  }else{
    console.log("你输了")
  }
}
