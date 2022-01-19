import React from 'react';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductsDetails } from '../../Features/Product/action';
import { useParams } from 'react-router-dom';

export const ProductDetails = () => {

    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getProductsDetails(id))
    }, [])

    const { loading, product } = useSelector((state) => ({
        product: state.productsDetailState.product,
        loading: state.ProductDetailsState.loading
    }));

    console.log("Product", product);

    return <div>
        <span>ProductDetails</span>
        {/* {product.name} - {product.price} - {product.brand} - {product.rating} */}

    </div>;
};
