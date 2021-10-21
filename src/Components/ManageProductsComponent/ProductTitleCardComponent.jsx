import React, { useState } from 'react';
import { Button, Collapse, Card } from 'reactstrap';
import { useHistory } from "react-router-dom";
import { ROUTES } from '../../appConstant';

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
                  <p className="mx-3">{lastUpdateBy} on {lastUpdateAt}</p>
                  <h6 className="mx-3">{productTitle}</h6>
                </div>
              </div>
            </div>
        </div>
    );
}