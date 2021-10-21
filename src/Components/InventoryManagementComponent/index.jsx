import React, { useState } from 'react';
import { AppHeaderContainer } from '../../Container/AppHeaderContainer';
import { ProductCardComponent } from './ProductCardComponent';

export const InventoryManagementComponent = (props) => {
    const { data } = props;

    const [selectedCard, setSelectedCard] = useState(null);

    return (
        <>
            <AppHeaderContainer />
            {
                data.map((dataObj, index) => {
                    return (
                        <ProductCardComponent 
                            key={index}
                            id={`${index}`}
                            selectedCard={selectedCard} 
                            productDetails={dataObj}  
                            setSelectedCard={setSelectedCard}
                        />)
                })
            }
        </>
    );
}