import React, { useEffect, useState } from 'react';
import Select from "react-select";
import deleteBinIcon from "../../assets/icons/deleteBinIcon.png"
import {
    Button, 
    Card, 
    CardBody, 
    Input, 
    Label,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Dropdown } 
from "reactstrap"

export const ProductAdditionForm = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [subCategoryText, setSubCategorytext] = useState("");
    const [hexColourCode, setHexColourCode] = useState("");
    const [inputtedArr, setInputtedArr] = useState([]);
    const [hexCodeArr, setHexCodeArr] = useState([]);

    const toggle = () => setIsOpen(prevState => !prevState);

    const handleAddUserBtn = () => {
        /**
         * Api hit to post user data
         */
    }

    const handleSubCategoryChange = (value) => {
        setSubCategorytext(value);
    }

    const handleAddMore = () => {
        const categoryObj = {
            index: inputtedArr.length,
            title: subCategoryText,
        }
        if (subCategoryText !== "") {
            inputtedArr.push(categoryObj);
            setInputtedArr(inputtedArr);
            setSubCategorytext("");
        }
    }

    const handleDeleteSubCategory = (deleteItemAtIndex) => {
        inputtedArr.splice(deleteItemAtIndex, 1);
        const updatedArr = inputtedArr;

        setInputtedArr([...updatedArr]);
    }



    const handleColorChange = (value) => {
        setHexColourCode("" + value);
    }

    const handleAddMoreColor = () => {
        const hexColorObj = {
            index: hexCodeArr.length,
            title: hexColourCode,
        }
        if (hexColourCode !== "") {
            hexCodeArr.push(hexColorObj);
            setHexCodeArr(hexCodeArr);
            setHexColourCode("");
        }
    }

    const handleDeleteHexColor = (deleteItemAtIndex) => {
        hexCodeArr.splice(deleteItemAtIndex, 1);
        const updatedColorArr = hexCodeArr;

        setHexCodeArr([...updatedColorArr]);
    }

    return (
        <Card className="manage-users-card">
            <CardBody className="manage-users-card-body">

                <Label style={{marginLeft: "5px",color:"white", fontSize:"13px"}}>Product Title*</Label>
                <Input 
                    className="mt-1 mb-4 w-100"
                    type="text"
                    placeholder="Title"
                    style={{marginLeft: "5px"}}
                    // value={"email"}
                    // onChange={}
                    // onFocus={}
                    // onBlur={}
                />

                <Label style={{marginLeft: "5px",color:"white", fontSize:"13px"}}>Add Sub Category*</Label>                
                <div>
                    {
                        inputtedArr.length > 0 && 
                            inputtedArr.map((inputObj, index) => {
                                return (
                                    <div className="d-flex">
                                        <img className="delete-bin-image" src={deleteBinIcon} onClick={() => handleDeleteSubCategory(index)}/>
                                        <div className="d-flex my-1 w-100" style={{background:`${"transparent"}`, borderRadius:"5px"}}>
                                            <p className="ml-3" style={{color: "white", fontSize: "17px"}}>{index+1}. {inputObj.title}</p>
                                        </div>
                                    </div>
                                )
                            })
                    }
                    <Input
                        className="mr-5 mt-1 mb-2 w-100"
                        type="text"
                        placeholder={`Sub Category #${inputtedArr.length + 1}`}
                        value={subCategoryText}
                        onChange={(e) => handleSubCategoryChange(e.target.value)}
                        // onFocus={}
                        // onBlur={}
                    />
                </div>
                

                <div className="d-flex justify-content-between mb-4">
                    <Button className="add-more-btn p-1" color="primary" onClick={handleAddMore}>+ Add More</Button>
                    {/* <Button className="" color="success"> Finish</Button> */}
                </div>




                <Label style={{marginLeft: "5px",color:"white", fontSize:"13px"}}>Add Colours*</Label>                
                <div>
                    {
                        hexCodeArr.length > 0 && 
                            hexCodeArr.map((colorObj, index) => {
                                return (
                                    <div className="d-flex">
                                        <img className="delete-bin-image" src={deleteBinIcon} onClick={() => handleDeleteHexColor(index)}/>
                                        <div className="d-flex my-1 w-100" style={{background:`${colorObj.title}`, borderRadius:"5px"}}>
                                            <p className="ml-3 text-inside-colored-input" style={{ fontSize: "17px"}}>{index+1}. {colorObj.title}</p>
                                        </div>
                                    </div>
                                )
                            })
                    }
                    <Input
                        className="mr-5 mt-1 mb-2 w-100 text-inside-colored-input"
                        style={{background:`${hexColourCode || "white"}`}}
                        type="text"
                        placeholder={`Color #${hexCodeArr.length + 1}`}
                        value={hexColourCode}
                        onChange={(e) => handleColorChange(e.target.value)}
                        // onFocus={}
                        // onBlur={}
                    />
                </div>
                

                <div className="d-flex justify-content-between mb-4">
                    <Button className="add-more-btn p-1" color="primary" onClick={handleAddMoreColor}>+ Add More Color</Button>
                    {/* <Button className="" color="success"> Finish</Button> */}
                </div>





                {/* <Label style={{marginLeft: "5px",color:"white", fontSize:"13px"}}>Colour*</Label> */}
                

                <div className="d-flex justify-content-around my-3">
                    <div>
                        <Input
                            className="" 
                            size="10px" 
                            type="radio" 
                            name={"radioBtn"}
                            // checked={}
                            // onClick={}
                        /> 
                        <Label style={{marginLeft: "5px",color:"white", fontSize:"15px"}}>Man</Label>
                    </div>

                    <div className="ml-3">
                        <Input
                            className="" 
                            size="10px" 
                            type="radio" 
                            name={"radioBtn"}
                            // checked={}
                            // onClick={}
                        /> 
                        <Label style={{marginLeft: "5px",color:"white", fontSize:"15px"}}>Woman</Label>
                    </div>
                </div>

                <Button 
                    className="add-user-button mx-auto mt-4 w-100"
                    color="success"
                    // onClick={handleAddUserBtn}
                >
                    Complete
                </Button>

            </CardBody>
        </Card>
    );
}