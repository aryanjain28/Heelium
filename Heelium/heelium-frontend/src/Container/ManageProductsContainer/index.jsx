import React from "react";
import { data } from "../../appConstant";
import { ManageProductsComponent } from "../../Components/ManageProductsComponent";

export const ManageProductsContainer = () => {
    return <ManageProductsComponent data={data}/>
}