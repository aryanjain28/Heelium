import React, { useState } from 'react';
import useProfileImage from "../../assets/images/profileImage.jpeg"
import {
  Navbar,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from 'reactstrap';
import { useHistory } from "react-router";

import { ROUTES } from "../../appConstant";

export const AppHeader = () => {
  
  const history = useHistory()
  const [isOpen, setIsOpen] = useState(false);
  const [ confirmationModalIsOpen, setConfirmationModalIsOpen ] = useState(false);

  const toggle = () => setIsOpen(prevState => !prevState);

  const handleManageUsersDropdownItem = () => {
    history.push(`/${ROUTES.manageUsers}`)
  }

  const handleLogoutDropdownItem = () => {
    /**
     * 1. API hit for logout -> Will change active state + logout time
     * 2. Delete local storage
     * 3. Update reducer with isLoggedIn: false
     * 4. Redirect to login page
     */
    toggleModal();
  }

  const handleManageProductsDropdownItem = () => {
    /**
     * 1. Redirect to next page
     *  
     */ 
    history.push(`/${ROUTES.manageProducts}`)
  }

  const handleViewProductsDropdownItem = () => {
    history.push(`/${ROUTES.inventoryManagement}`)
  }

  const handleLogoClick = () => {
    history.push(`/${ROUTES.inventoryManagement}`)
  }

  const modalSuccessBtnHandle = () => {
    history.push(`/${ROUTES.login}`)
  }

  const toggleModal = () => setConfirmationModalIsOpen(!confirmationModalIsOpen);

  return (

    <>
      <Modal isOpen={confirmationModalIsOpen}>
        <ModalHeader>Confirmation</ModalHeader>
        <ModalBody>
          Are you sure you want to log out?
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={modalSuccessBtnHandle}>Yes</Button>{" "}
          <Button color="secondary" onClick={toggleModal}>No</Button>     
        </ModalFooter>
      </Modal>

      <div className="header">
        <Navbar className="d-flex px-4 py-2" expand="md">

          <div onClick={handleLogoClick} style={{cursor: "pointer", textDecoration: "none"}}>
            <h3>Heelium</h3>
          </div>

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

              <DropdownItem
                onClick={handleViewProductsDropdownItem}
              >
                View Products
              </DropdownItem>
              
              <DropdownItem
                onClick={handleManageProductsDropdownItem}
              >
                Manage Products
              </DropdownItem>

              <DropdownItem>
                Report
              </DropdownItem>

              <DropdownItem divider/>

              <DropdownItem
                disabled
              >
                Settings
              </DropdownItem>

              <DropdownItem
                onClick={handleLogoutDropdownItem}
              >
                Log Out
              </DropdownItem>
            </DropdownMenu>

          </Dropdown>

        </Navbar>
      </div>

    </>
  );
}
