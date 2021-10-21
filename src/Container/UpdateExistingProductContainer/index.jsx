import React from "react";
import { data } from "../../appConstant"
import { AppHeaderContainer } from "../../Container/AppHeaderContainer";
import { UpdateExistingProductComponent } from "../../Components/UpdateExistingProduct";

export const UpdateExistingProductContainer = () => {
    return (
        <>
            <AppHeaderContainer />
            <UpdateExistingProductComponent />
        </>
    )
}