import React, { useState } from 'react';
import {  CardComponent } from './Card';

export const ItemListing = (props) => {
    const { data } = props;

    const [selectedCard, setSelectedCard] = useState(null);

    return (
        data.map((obj, index) => {
            return <CardComponent 
                        id={`${index}`}
                        selectedCard={selectedCard} 
                        productDetails={obj}  
                        setSelectedCard={setSelectedCard}
                    />
        })
    );
}