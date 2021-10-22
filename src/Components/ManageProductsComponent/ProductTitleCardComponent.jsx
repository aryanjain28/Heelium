import React, { useState } from 'react';
import { Button, Collapse, Card } from 'reactstrap';
import { useHistory } from "react-router-dom";
import { ROUTES } from '../../appConstant';
import deleteIcon from "../../assets/icons/deleteBinIcon.png";
import updateIcon from "../../assets/icons/settingsIcon.png";

export const ProductTitleCardComponent = (props) => {
    const { id, selectedCard, setSelectedCard, productDetails : 
      { productTitle, productBody, lastUpdateBy, lastUpdateAt, currentNumber, productSubCategory } } = props;

    const history = useHistory();

    const handleCardClick = (clickedCardId) => {
        console.log("Card Clicked - ", clickedCardId);

        history.push(`/${ROUTES.updateProduct}`);
    }

    return (
          <div href={`#${productTitle}`} id={`#${productTitle}`} className="m-3 card-container">
            <div className="card-title" onClick={() => handleCardClick(`${id}`)}>
              <div className="d-flex">
                <div className="product-heading">
                  
                  <div className="d-flex">

                    <div>
                      <p className="mx-3">{lastUpdateBy} on {lastUpdateAt}</p>
                      <h6 className="mx-3">{productTitle}</h6>
                    </div>

                    <div className="d-flex ml-auto operations-icons">
                      <img className="" src={updateIcon} height="20px" />
                      <img className="mx-3" src={deleteIcon} height="20px" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    );
}

{/* <Dropdown isOpen={isOpen} toggle={toggle}>
<DropdownToggle className="profile-drop-down" color="trans">
  <div href={`#${productTitle}`} id={`#${productTitle}`} className="m-3 card-container">
    <div className="card-title">
      <div className="d-flex">
        <div className="product-heading">
          <p className="mx-3">{lastUpdateBy} on {lastUpdateAt}</p>
          <h6 className="mx-3">{productTitle}</h6>
        </div>
      </div>
    </div>
</div>  
</DropdownToggle>

<DropdownMenu right>
  <DropdownItem
    onClick={() => handleCardClick(`${id}`)}
  >
    Update
  </DropdownItem>
  
  <DropdownItem
    // onClick={handleManageProductsDropdownItem}
  >
    Delete
  </DropdownItem>
</DropdownMenu>

</Dropdown> */}