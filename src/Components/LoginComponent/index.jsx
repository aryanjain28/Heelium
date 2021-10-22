import React, { useEffect, useState } from "react";
import heeliumLogo from "../../assets/images/heeliumLogo.png"
import {Button, Card, CardBody, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap"
import { Redirect, useHistory } from "react-router";
import { withRouter } from "react-router-dom";
import { ROUTES } from "../../appConstant";

// import { toast } from "react-toastify";

const LoginComponent = () => {

    const history = useHistory();
    const [ infoModalIsOpen, setInfoModalIsOpen ] = useState(false);

    const handleForgotPwd = () => {
        setInfoModalIsOpen(true);
    }

    const handleLoginBtn = () => {

        /**
         * 1. Get credentials and hit API
         * 2. If success, Recieve back token and save loginDetails and token in localstorage
         */

        /**TODO: Will be removed later */
        history.push(`/${ROUTES.inventoryManagement}`)
    }

    return (

        <>
            <Modal isOpen={infoModalIsOpen}>
                <ModalHeader>Information</ModalHeader>
                <ModalBody>
                    Please contact admin for new password.
                </ModalBody>
                <ModalFooter>
                <Button color="light" onClick={() => setInfoModalIsOpen(false)}>Ok</Button>     
                </ModalFooter>
            </Modal>

            <Card className="login-page-card">
                <CardBody className="login-page-card-body">

                    <div className="my-4 company-logo-image-container company-logo-image-cropper">
                    <img className="company-logo-image" src={heeliumLogo} height={"50px"} />
                    </div>

                    <Label style={{marginLeft: "5px",color:"white", fontSize:"13px"}}>Email</Label>

                    <Input 
                        className="mx-auto mt-1 mb-4"
                        type="text"
                        placeholder="Enter Email"
                        // value={"email"}
                        // onChange={}
                        // onFocus={}
                        // onBlur={}
                    />

                    <Label style={{marginLeft: "5px",color:"white", fontSize:"13px"}}>Password</Label>

                    <Input
                        className="mx-auto mt-1 mb-4" 
                        type="password" 
                        placeholder="Enter Password"
                        // value={"email"}
                        // onChange={}
                        // onFocus={}
                        // onBlur={}
                    />
                    <Button 
                        className="login-button mx-auto mt-4 w-100"
                        color="success"
                        onClick={handleLoginBtn}
                    >
                        Log In
                    </Button>

                    <div className="forgot-password my-3" onClick={handleForgotPwd}>
                        Forgot Password?
                    </div>
                </CardBody>
            </Card>

        </>
    )
}

export default withRouter(LoginComponent);