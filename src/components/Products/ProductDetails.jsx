import React from 'react';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductsDetails } from '../../Features/Products/action';
import { useParams } from 'react-router-dom';

export const ProductDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    // console.log(id)
    let dd = {};
    async function getProductDetails() {
        await fetch(`http://localhost:4500/products/${id}`)
            .then((response) => response.json())
            .then((data) =>
                dispatch(getProductsDetails(data)
                    // d = data;
                ))
    }

    // useEffect(() => {
    //     getProductDetails()
    // }, []);


    const product = useSelector((state) => state.productDetailsState.product)

    return <div>
        ProductDetails
        {product.name}
    </div>;
};
