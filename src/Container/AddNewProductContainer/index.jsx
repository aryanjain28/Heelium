import React from "react";
import { data } from "../../appConstant"
import { AppHeaderContainer } from "../../Container/AppHeaderContainer";
import { AddNewProductComponent } from "../../Components/AddNewProductComponent";

export const AddNewProductContainer = () => {
    return (
        <>
            <AppHeaderContainer />
            <AddNewProductComponent />
        </>
    )
}