import React, { useState } from 'react';
import useProfileImage from "../../assets/images/profileImage.jpeg"
import {
  Collapse,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

export const AppHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="header">
      <Navbar className="d-flex px-4" expand="md">
        <h3>Heelium</h3>

        <div className="user-details">
            <div className="profile-image-container profile-image-cropper">
                <img className="profile-image" src={useProfileImage}/>
            </div>
            <h3 className="user-role">Admin</h3>
        </div>
            {/* <NavbarToggler onClick={toggle}/> */}
      </Navbar>
    </div>
  );
}
