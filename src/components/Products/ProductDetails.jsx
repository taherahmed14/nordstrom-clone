import React from 'react';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductsDetails } from '../../Features/Products/action';
import { useParams } from 'react-router-dom';

export const ProductDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    // console.log(id)

    const product = useSelector((state) => state.productDetailsState.product)
    useEffect(() => {
        dispatch(getProductsDetails(id));
    }, [dispatch, id]);

    return <div>
        ProductDetails
        {/* {product.name} */}
    </div>;
};
