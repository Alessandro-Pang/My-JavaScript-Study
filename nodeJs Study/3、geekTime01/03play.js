/*
 * @Author: your name
 * @Date: 2020-06-11 21:00:35
 * @LastEditTime: 2020-06-11 21:32:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\nodeJs Study\3、geekTime01\02.js
 */

// process.argv 获取用户输入参数
// console.log(process.argv);

const game = (playerAction) => {
  const random = Math.round(Math.random() * 3);

  let player = "";
  if (random <= 1) {
    player = "石头";
  } else if (random === 2) {
    player = "剪刀";
  } else {
    player = "布";
  }

  let isPlayer =
    playerAction !== "石头" && playerAction !== "剪刀" && playerAction !== "布";

  if (isPlayer) {
    console.log("请出石头，剪刀，步");
    return false;
  }
  
  if (playerAction === player) {
    console.log("平局");
    return 0
  } else if (
    (playerAction === "石头" && player === "剪刀") ||
    (playerAction === "剪刀" && player === "布") ||
    (playerAction === "布" && player === "石头")
  ) {
    console.log("你赢了");
    return -1
  } else {
    console.log("你输了");
    return 1
  }
};


module.exports=game;