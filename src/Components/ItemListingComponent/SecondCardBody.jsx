import React, { useState } from "react";
import { Button, CardBody, Input, Toast } from "reactstrap";

export const SecondCardBody = (props) => {
    // const { sex, subCategory, color, value } = props;

    const value = 10;
    const [ counterValue, setCounterValue ] = useState(value);
    const [disableSubmit, setDisableSubmit] = useState(false);

    const handlePlusClick = () => {
        let additionValue = counterValue;
        setCounterValue(additionValue + 1);
    }

    const handleMinusClick = () => {
        let subtractionValue = counterValue;
        if (subtractionValue <= 0) {
            return;
        }
        setCounterValue(subtractionValue - 1);
    }

    const handleChange = (valueToUpdate) => {
        setCounterValue(valueToUpdate);   

        // if value is not a number - then we disable submit button
        if (isNaN(valueToUpdate) || parseInt(valueToUpdate) < 0) {
            setDisableSubmit(true);
            return;
        }else {
            setDisableSubmit(false);
        }
    }

    const handleOnBlur = () => {}

    const handleOnFocus = () => {}

    return (
        <CardBody>
            <p className="pt-3">Man</p>
            <p className="pb-3">Ankle - White</p>
            
            <div className="mx-2">
                <div className="d-flex">
                    <Button className="secondary" onClick={handleMinusClick}><h1 className="p-0 m-0">-</h1></Button>
                    <Input
                        className="mx-2 w-100 totalCounter" 
                        value={counterValue}
                        onChange={(e) => handleChange(e.target.value)}
                        onBlur={(e) => handleOnBlur(e)}
                        onFocus={(e) => handleOnFocus(e)}
                    />
                    <Button className="secondary" onClick={handlePlusClick}><h1 className="p-0 m-0">+</h1></Button>
                </div>
                <Button className="mt-3 w-100" color="info" disabled={disableSubmit}>Submit</Button>
            </div>


        </CardBody>
    )
}