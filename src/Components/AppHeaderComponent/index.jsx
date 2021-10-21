import React, { useState } from 'react';
import useProfileImage from "../../assets/images/profileImage.jpeg"
import {
  Navbar,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown
} from 'reactstrap';
import { useHistory } from "react-router";

import { ROUTES } from "../../appConstant";

export const AppHeader = () => {
  
  const history = useHistory()
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(prevState => !prevState);

  const handleManageUsersDropdownItem = () => {
    history.push(`/${ROUTES.manageUsers}`)
  }

  return (
    <div className="header">
      <Navbar className="d-flex px-4 py-2" expand="md">

        <h3>Heelium</h3>

        <Dropdown isOpen={isOpen} toggle={toggle}>
          <DropdownToggle className="profile-drop-down" color="trans">
            <div className="user-details">
              <div className="profile-image-container profile-image-cropper">
                <img className="profile-image" src={useProfileImage}/>
              </div>
            </div>
            <div className="user-role">Operator</div>
          </DropdownToggle>

          <DropdownMenu right>
            <DropdownItem
              onClick={handleManageUsersDropdownItem}
            >
              Manage Users
            </DropdownItem>
            
            <DropdownItem>
              Manage Products
            </DropdownItem>

            <DropdownItem divider/>

            <DropdownItem>
              Settings
            </DropdownItem>

            <DropdownItem>
              Log Out
            </DropdownItem>
          </DropdownMenu>

        </Dropdown>

      </Navbar>
    </div>
  );
}
