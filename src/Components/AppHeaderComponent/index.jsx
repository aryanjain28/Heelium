import React, { useState } from 'react';
import useProfileImage from "../../assets/images/profileImage.jpeg"
import {
  Navbar,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown
} from 'reactstrap';

export const AppHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(prevState => !prevState);

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
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>

        </Dropdown>

      </Navbar>
    </div>
  );
}
