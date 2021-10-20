import React from "react";
import tick from "../assets/icons/greenTick.png"
import { CheckMark } from "./CheckMark";

export const ColoredCircle = (props) => {
    const { id, color, isSelected, setIsSelected } = props;
    return (
        <div 
            className={`colored-circle${isSelected ? "-with-border": ""}`} 
            style={{backgroundColor:color}}
            onClick={() => setIsSelected(`${id}`)}
        >
        </div>)
}
