import React, { useEffect } from "react";
import heeliumLogo from "../../assets/images/heeliumLogo.png"
import {Button, Card, CardBody, CardTitle, Input, Label } from "reactstrap"
import { LoginFormComponent } from "./LoginFormComponent";
import { toast } from "react-toastify";

export const LoginComponent = () => {

    const handleForgotPwd = () => {
        console.log("Clicked");
        toast.error("Please contact admin for new password!", { autoClose: false })
    }

    useEffect(() => {
        document.body.style.setProperty('background-color', '#385e47', 'important');
        document.body.style.setProperty('height', "auto", "important");
    }, []);

    useEffect(() => {
        return () => {
            document.body.style.removeProperty('background-color');
            document.body.style.removeProperty('height');
        }
    }, []);

    return (
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
                >
                    Log In
                </Button>

                <Label 
                    className="forgot-password my-3"
                    size="sm"
                    onClick={handleForgotPwd}
                >
                    Forgot Password?
                </Label>

            </CardBody>
        </Card>
    )
}