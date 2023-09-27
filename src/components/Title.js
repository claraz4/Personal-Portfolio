import React from "react";
import "../styles.css";

export default function Title(props) {
    return (
        <div className={`title${props.className}`}>
            <div id="blue-box"></div>
            <h1 className="page-title">{props.title}</h1>
        </div>
    )
}