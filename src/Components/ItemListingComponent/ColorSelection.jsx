import React, { useState } from "react";
import { ColoredCircle } from "../../SharedComponents/ColoredCircle";

export const ColorSelection = (props) => {
    const [isSelected, setIsSelected] = useState("0");

    const colorsArr = ["fff", "ffff00", "0000FF", "bbb", "ff0000", "fff", "ffff00", "0000FF", "bbb", "ff0000"]
    return (
        <div className="my-3 p-1 colored-circle-container">
            {
                colorsArr.map((color, index) => {
                    return <ColoredCircle 
                                id={index} 
                                color={`#${color}`} 
                                isSelected={isSelected === `${index}`}
                                setIsSelected={setIsSelected}
                            />
                })
            }
      </div>
    )
}