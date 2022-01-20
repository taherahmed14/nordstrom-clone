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
    }, [dispatch, id])

    const { product } = useSelector((state) => ({
        product: state.productsDetailState.product,
    }), function (prev, cur) {
        if (prev.product === cur.product) {
            return true;
        }
        else {
            return false;
        }
    });

    console.log("ProductDetails", product);

    console.log("ProductDetailsName", product.price);


    return <div>
        <span>ProductDetails</span>
        {/* {product.name} */}

    </div>;
};
