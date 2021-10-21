import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Button, Card } from 'reactstrap';
import { ROUTES } from '../../appConstant';
import { AppHeaderContainer } from '../../Container/AppHeaderContainer';
import { ProductTitleCardComponent } from './ProductTitleCardComponent';

export const ManageProductsComponent = (props) => {
    const { data } = props;

    const history = useHistory()

    const [selectedCard, setSelectedCard] = useState(null);

    const handleAddNewProduct = () => {
        /**
         * 1. Redirect to new page
         */

        history.push(`/${ROUTES.addNewProduct}`)
    }

    return (
        <>
            <AppHeaderContainer />

            <div>
                <Button className="add-product-button" color="light" onClick={handleAddNewProduct}>+ Add New Product</Button>
                {
                    data.map((dataObj, index) => {
                        return (
                            <ProductTitleCardComponent
                                key={index}
                                id={`${index}`}
                                productDetails={dataObj}  
                                selectedCard={selectedCard} 
                                setSelectedCard={setSelectedCard}
                            />)
                    })
                }
            </div>
    </>
    );
}