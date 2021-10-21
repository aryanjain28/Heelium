import React, { useState } from 'react';
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

export const UserAdditionForm = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedGender, setSelectedGender] = useState("Mr.");

    const toggle = () => setIsOpen(prevState => !prevState);

    const handleAddUserBtn = () => {
        /**
         * Api hit to post user data
         */
    }

    return (
        <Card className="manage-users-card">
            <CardBody className="manage-users-card-body">

                <Label style={{marginLeft: "5px",color:"white", fontSize:"13px"}}>Full Name*</Label>

                <div className="d-flex mr-5 mt-1 mb-2">
                    <Dropdown className="w-auto" isOpen={isOpen} toggle={toggle}>
                        <DropdownToggle className="" color="light">
                            {selectedGender}
                        </DropdownToggle>

                        <DropdownMenu left>
                            <DropdownItem
                                onClick={() => setSelectedGender("Mr.")}
                            >
                                Mr.
                            </DropdownItem>
                            
                            <DropdownItem
                                onClick={() => setSelectedGender("Mrs.")}
                            >
                                Mrs.
                            </DropdownItem>

                            <DropdownItem
                                onClick={() => setSelectedGender("Ms.")}
                            >
                                Ms.
                            </DropdownItem>

                            <DropdownItem
                                onClick={() => setSelectedGender("-")}
                            >
                                Prefer not to say
                            </DropdownItem>

                        </DropdownMenu>

                    </Dropdown>

                    <Input 
                        className="w-100"
                        type="text"
                        placeholder="Name"
                        style={{marginLeft: "5px"}}
                        // value={"email"}
                        // onChange={}
                        // onFocus={}
                        // onBlur={}
                    />
                </div>

                <Label style={{marginLeft: "5px",color:"white", fontSize:"13px"}}>Email*</Label>
                <Input 
                    className="mr-5 mt-1 mb-2 w-100"
                    type="email"
                    placeholder="Email"
                    // value={"email"}
                    // onChange={}
                    // onFocus={}
                    // onBlur={}
                />

                <Label style={{marginLeft: "5px",color:"white", fontSize:"13px"}}>Mobile Number*</Label>
                <Input 
                    className="mr-5 mt-1 mb-2 w-100"
                    type="number"
                    placeholder="Phone"
                    // value={"email"}
                    // onChange={}
                    // onFocus={}
                    // onBlur={}
                />

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
                        <Label style={{marginLeft: "5px",color:"white", fontSize:"15px"}}>isAdmin</Label>
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
                        <Label style={{marginLeft: "5px",color:"white", fontSize:"15px"}}>isOperator</Label>
                    </div>

                </div>

                <Button 
                    className="add-user-button mx-auto mt-4 w-100"
                    color="success"
                    // onClick={handleAddUserBtn}
                >
                    Add User
                </Button>

            </CardBody>
        </Card>
    );
}