import React from "react";
import { data } from "../../appConstant"
import { InventoryManagementComponent } from "../../Components/InventoryManagementComponent";

export const InventoryManagementContainer = () => {
    return <InventoryManagementComponent data={data} />
}