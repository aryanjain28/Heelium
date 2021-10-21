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
import { data } from "../../appConstant";

export const ProductUpdationForm = (props) => {

    // const { data }  = props;
    const { productTitle, productSubCategory, colors } = data[0];
    const categoriesArr = productSubCategory.map((product, index) => {
        return { index: index, title: product.name }
    });

    const colorsArr = colors.map((colorName, index) => {
        return { index: index, title: colorName }
    });

    const [isOpen, setIsOpen] = useState(false);
    const [productTitleText, setProductTitleText] = useState(productTitle || "");
    const [subCategoryText, setSubCategorytext] = useState("");
    const [hexColourCode, setHexColourCode] = useState("");
    const [subCategoryArr, setSubCategoryArr] = useState([...categoriesArr]);
    const [hexCodeArr, setHexCodeArr] = useState([...colorsArr]);

    const toggle = () => setIsOpen(prevState => !prevState);

    const handleAddUserBtn = () => {
        /**
         * Api hit to post user data
         */ 
    }

    const handleProductTitleChange = (newValue) => {
        setProductTitleText(newValue);
    }

    const handleSubCategoryChange = (value) => {
        setSubCategorytext(value);
    }

    const handleAddMore = () => {
        const categoryObj = {
            index: subCategoryArr.length,
            title: subCategoryText,
        }
        if (subCategoryText !== "") {
            subCategoryArr.push(categoryObj);
            setSubCategoryArr(subCategoryArr);
            setSubCategorytext("");
        }
    }

    const handleDeleteSubCategory = (deleteItemAtIndex) => {
        subCategoryArr.splice(deleteItemAtIndex, 1);
        const updatedArr = subCategoryArr;

        setSubCategoryArr([...updatedArr]);
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
                    value={productTitleText}
                    placeholder="Title"
                    style={{marginLeft: "5px"}}
                    // value={"email"}
                    onChange={(e) => handleProductTitleChange(e.target.value)}
                    // onFocus={}
                    // onBlur={}
                />

                <Label style={{marginLeft: "5px",color:"white", fontSize:"13px"}}>Add Sub Category*</Label>                
                <div>
                    {
                        subCategoryArr.length > 0 && 
                            subCategoryArr.map((inputObj, index) => {
                                return (
                                    <div className="d-flex">
                                        <img className="delete-bin-image" src={deleteBinIcon} onClick={() => handleDeleteSubCategory(index)}/>
                                        <div className="d-flex my-1 w-100" style={{background:`${"transparent"}`, borderRadius:"5px"}}>
                                            <p className="ml-3" style={{color: "white", fontSize: "15px"}}>{index+1}. {inputObj.title}</p>
                                        </div>
                                    </div>
                                )
                            })
                    }
                    <Input
                        className="mr-5 mt-1 mb-2 w-100"
                        type="text"
                        placeholder={`Sub Category #${subCategoryArr.length + 1}`}
                        value={subCategoryText}
                        onChange={(e) => handleSubCategoryChange(e.target.value)}
                        // onFocus={}
                        // onBlur={}
                    />
                </div>
                

                <div className="d-flex justify-content-between mb-4">
                    <Button className="add-more-btn p-1" color="primary" onClick={handleAddMore}>+ Add</Button>
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
                    <div className="d=flex">
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
                </div>
                

                <div className="d-flex justify-content-between mb-4">
                    <Button className="add-more-btn p-1" color="primary" onClick={handleAddMoreColor}>+ Add</Button>
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
                    Update
                </Button>

            </CardBody>
        </Card>
    );
}