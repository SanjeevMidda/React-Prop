import React from "react";
import "../styles.css";

export default function One(props){
    return(
        <div>
            <h1>{props.numberToPass}</h1>
            <button onClick={props.numberUpdate}>+</button>
        </div>
    )
}