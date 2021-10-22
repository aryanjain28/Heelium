import React from "react";
import { ManageUsersComponent } from "../../Components/ManageUsersComponent";
import { AppHeaderContainer } from '../../Container/AppHeaderContainer';

export const ManageUsersContainer = () => {
    return (
        <>
            <AppHeaderContainer />
            <ManageUsersComponent />
        </>
    )
}