import React from "react";

const Tags = (props) => {
  /**
   * 返回随机的[from，to]之间的整数(包括from ,也包括to)
   */
  function randomInt(from, to) {
    return parseInt(Math.random() * (to - from + 1) + from);
  }
  return (
    <div
      style={{
        minWidth: 70,
        maxWidth:"max-content",
        minHeight: 25,
        maxHeight:"max-content",
        padding:"2px 5px",
        margin:"7px 5px",
        boxShadow:"0 0 5px "+`rgba(${randomInt(100, 255)},${randomInt(100,255)},${randomInt(100, 255)},${Math.random()+0.3})`,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
      }}
    >
      {props.tagName}
    </div>
  );
};

export default Tags;