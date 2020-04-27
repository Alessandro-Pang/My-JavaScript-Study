import React, { useState } from "react";
/*
  Hook 是 React 16.8 的新增特性。
  它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。
*/
// React Hook 是为了方便在function()中修改状态，
// 否则只能转换成Class使用setState
export default function HookStudy() {
  const [count, setCount] = useState(0);
  let onClickCountPlus=()=>{
    setCount(count + 1);
  };

  return (
    <div>
      <p>You Clicked {count} times</p>
      <button onClick={onClickCountPlus}>Click Me</button>
    </div>
  );
}