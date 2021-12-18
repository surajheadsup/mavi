import React from "react";
const P = (props) => {
    return ( <p className={props.className} style={{fontSize : props.fontSize, textAlign : props.align}}>{props.text}</p> );
}
 
export default P;