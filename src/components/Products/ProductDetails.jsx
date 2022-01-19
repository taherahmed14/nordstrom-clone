import React from 'react';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductsDetails } from '../../Features/Products/action';
import { useParams } from 'react-router-dom';

export const ProductDetails = () => {

    const dispatch = useDispatch();
    const id = useParams();

    useEffect(() => {
        dispatch(getProductsDetails(id))
    }, [])

    const product = useSelector((state) => state.productsDetailState.product)
    console.log("Product", product);
    return <div>
        <span>ProductDetails</span>
        {/* {product.name} */}
    </div>;
};
