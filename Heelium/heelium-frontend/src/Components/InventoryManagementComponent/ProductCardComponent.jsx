import React, { useState } from 'react';
import rotatingArrowUp from "../../assets/icons/rotatingArrowUp.png"
import nextArrow from "../../assets/icons/nextArrow.png"
import prevArrow from "../../assets/icons/prevArrow.png"

import { Button, Collapse, Card } from 'reactstrap';
import { SecondCardBody } from './SecondCardBody';
import { FirstCardBody } from './FirstCardBody';

export const ProductCardComponent = (props) => {
    const { id, selectedCard, setSelectedCard, productDetails : 
      { productTitle, productBody, lastUpdateBy, lastUpdateAt, currentNumber, productSubCategory } } = props;

    const [showFirstCard, setShowFirstCard] = useState(true);

    const handleCardClick = (clickedCardId) => {

      // if already selected, then close the card and reinitiate 'showFirstCard'
      if (clickedCardId === selectedCard) {
        setSelectedCard(null);

        // change state after 0.5 second i.e. after we have closed our card.
        setTimeout(() => {
          setShowFirstCard(true);
        }, 500);

        return;
      }
      //else open it
      setSelectedCard(`${clickedCardId}`)
    }

    const isSubCategoryEmpty = (array) => {
      if (array.length === 0) {
        return false;
      }
      return true;
    }


    return (
          <Card href={`#${productTitle}`} id={`#${productTitle}`} className="m-3 card-container">
            <div className="card-title" onClick={() => handleCardClick(`${id}`)}>
              <div className="d-flex">
                <div className="product-heading">
                  <p className="mx-3">{lastUpdateBy} on {lastUpdateAt}</p>
                  <h6 className="mx-3">{productTitle}</h6>
                </div>
                <img className={`rotating-arrow arrow-${selectedCard === id ? "down" : "up"}`} src={rotatingArrowUp} height="10px"/>
              </div>
            </div>
              <Collapse isOpen={id === selectedCard}>

                {showFirstCard ? 
                  <FirstCardBody
                    productSubCategory={productSubCategory}
                    isSubCategoryEmpty={isSubCategoryEmpty}
                  />
                  :
                  <SecondCardBody />
                }
              
              {isSubCategoryEmpty(productSubCategory) === true &&                
                <Button 
                  className="product-footer-btn"
                  onClick={() => setShowFirstCard(!showFirstCard)}
                >
                  <div className="ml-auto">
                    {showFirstCard === true && "Next"}
                    <img className="next-arrow-image" src={showFirstCard === true ? nextArrow : prevArrow} height="10px" />
                    {showFirstCard === false && "Back"}
                  </div>
                </Button>
              }

            </Collapse>
          </Card>
    );
}