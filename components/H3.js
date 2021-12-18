import React from "react";
const H3 = (props) => {
    return ( <h3 className={props.className} style={{fontSize : props.fontSize}}>{props.text}</h3> );
}
 
export default H3;