
import React, { useState } from "react";
import { Button, CardBody, Input, Toast } from "reactstrap";
import classnames from 'classnames';
import { ColoredCircle } from '../../SharedComponents/ColoredCircle';
import { ColorSelection } from './ColorSelection';

export const FirstCardBody = (props) => {

    const { productSubCategory, isSubCategoryEmpty } = props;

    const [rSelected, setRSelected] = useState(1);
    const [selectedSubCategory, setSelectedSubCategory] = useState("0");

    return (
        <CardBody className={isSubCategoryEmpty(productSubCategory) === true ? "card-body": "card-body-with-round-bottom"}>

            {isSubCategoryEmpty(productSubCategory) === false ?
            <p>Oops! Nothing to show here!</p>
            :
            <>
                <div className="d-flex w-100 p-2">
                <Button
                    className="gender-btn w-50 m-1"
                    color={rSelected === 1 ? "light" : "dark"} 
                    onClick={() => setRSelected(1)} 
                >
                    Man
                </Button>
                
                <Button 
                    className="gender-btn  w-50 m-1"
                    color={rSelected === 2 ? "light" : "dark"}
                    onClick={() => setRSelected(2)} 
                >
                    Woman
                </Button>
                </div>


                
                {productSubCategory.map((prodSubCatObj, index) => {
                    return (
                    <div key={index} className="d-flex my-2">
                        <Input
                            className="my-auto radio-button" 
                            size="10px" 
                            type="radio" 
                            name={`radioBtn`}
                            checked={`${index}` === selectedSubCategory}
                            onClick={() => setSelectedSubCategory(`${index}`)}
                        />
                        <p className="my-auto">{prodSubCatObj.name}</p>
                    </div>)
                })
                }
                <ColorSelection />
            </>
            }

        </CardBody>
    )
}