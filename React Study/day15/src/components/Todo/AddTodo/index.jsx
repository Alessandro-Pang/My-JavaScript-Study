import React from 'react';

export default function (props){
  let ins;
  return (
    <div>
      <input type="text" ref={inp => ins = inp} placeholder="输入TODO" />
      <button onClick={()=>props.onClickAddTodo(ins.value)}>ADD Button</button>
    </div>
  )
}