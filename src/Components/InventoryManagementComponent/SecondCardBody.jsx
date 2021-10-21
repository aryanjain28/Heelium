import React, { useState } from "react";
import { Button, CardBody, Input, Toast } from "reactstrap";

export const SecondCardBody = (props) => {
    // const { sex, subCategory, color, value } = props;
    const currentValue = 1000; // assuming from PROPS;

    const value = 10;
    const [totalValue, setTotalValue] = useState(currentValue);
    const [ counterValue, setCounterValue ] = useState(0);
    const [disableSubmit, setDisableSubmit] = useState(false);

    const handlePlusClick = () => {
        let additionValue = parseInt(counterValue);
        setCounterValue(additionValue + 1);
        setTotalValue(prevValue => parseInt(prevValue) + 1);
    }

    const handleMinusClick = () => {
        let subtractionValue = parseInt(counterValue);
        if (subtractionValue <= 0) {
            return;
        }
        setCounterValue(subtractionValue - 1);
        setTotalValue(prevValue => parseInt(prevValue) - 1);
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
            <div className="d-flex">
                <p className="mr-1 p-0">Man</p>
                <p className="m-0 p-0">Ankle-White </p>
            </div>
            <p className="pb-3">Current: {totalValue}</p>
            
            <div className="mx-2">
                <div className="d-flex">
                    <Button className="secondary" onClick={handleMinusClick}><h1 className="p-0 m-0">-</h1></Button>
                    <Input
                        type="number"
                        className="mx-2 w-100 totalCounter" 
                        value={counterValue}
                        onChange={(e) => handleChange(e.target.value)}
                        onBlur={(e) => handleOnBlur(e)}
                        onFocus={(e) => handleOnFocus(e)}
                    />
                    <Button className="secondary" onClick={handlePlusClick}><h1 className="p-0 m-0">+</h1></Button>
                </div>
                
                <div className="d-flex">
                    <Button className="m-3 w-100" color="danger" disabled={disableSubmit}>OUT</Button>
                    <Button className="m-3 w-100" color="info" disabled={disableSubmit}>IN</Button>
                </div>
            </div>


        </CardBody>
    )
}