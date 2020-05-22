import React from "react";
function TodoLink(props){
    let link = props.link;
    return <iframe className="todolink-iframe" src={link}></iframe>;
}

export default TodoLink;
