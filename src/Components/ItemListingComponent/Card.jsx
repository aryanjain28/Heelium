import React, { useState } from 'react';
import rotatingArrowDown from "../../assets/icons/rotatingArrowDown.png"
import rotatingArrowUp from "../../assets/icons/rotatingArrowUp.png"
import nextArrow from "../../assets/icons/nextArrow.png"
import prevArrow from "../../assets/icons/prevArrow.png"

import { Collapse, Card, CardBody, Input, Badge, Nav, NavItem, NavLink, ButtonGroup, Button, CardFooter } from 'reactstrap';
import classnames from 'classnames';
import { ColoredCircle } from '../../SharedComponents/ColoredCircle';
import { ColorSelection } from './ColorSelection';
import { SecondCardBody } from './SecondCardBody';

export const CardComponent = (props) => {
    const { id, selectedCard, setSelectedCard, productDetails : 
      { productTitle, productBody, lastUpdateBy, lastUpdateAt, currentNumber, productSubCategory } } = props;

    const [showFirstCard, setShowFirstCard] = useState(true);
    const [rSelected, setRSelected] = useState(1);
    const [selectedSubCategory, setSelectedSubCategory] = useState("0");
  
    const isSubCategoryEmpty = (array) => {
      if (array.length === 0) {
        return false;
      }
      return true;
    }

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
                  <CardBody className={isSubCategoryEmpty(productSubCategory) === true ? "card-body": "card-body-with-round-bottom"}>

                    {isSubCategoryEmpty(productSubCategory) === false ?
                    <p>Oops! Nothing to show here!</p>
                    :
                    <>
                      <div className="d-flex w-100 p-2">
                        <Button 
                          className="gender-btn w-50 m-1"
                          color={rSelected === 1 ? "light" : "dark"} 
                          onClick={() => setRSelected(1)} 
                        >
                            Man
                        </Button>
                        
                        <Button 
                          className="gender-btn  w-50 m-1"
                          color={rSelected === 2 ? "light" : "dark"}
                          onClick={() => setRSelected(2)} 
                        >
                            Woman
                        </Button>
                      </div>


                      
                      {productSubCategory.map((prodSubCatObj, index) => {
                          return (
                            <div className="d-flex my-2">
                              <Input 
                                className="my-auto radio-button" 
                                size="10px" 
                                type="radio" 
                                name={`radioBtn`}
                                checked={`${index}` === selectedSubCategory}
                                onClick={() => setSelectedSubCategory(`${index}`)}
                              />
                              <p className="my-auto">{prodSubCatObj.name}</p>
                            </div>)
                        })
                      }

                      <ColorSelection />
                    </>
                  }

                  </CardBody>

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