import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProducts } from '../../Features/Product/action';

export const Products = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts())
    }, [])

    // const { products } = useSelector((state) => ({
    //     products: state.productsState.products,
    // }));

    const { products } = useSelector((state) => ({
        products: state.productsState.products,
    }), function (prev, cur) {
        if (prev.products === cur.products) {
            return true;
        }
        else {
            return false;
        }
    });


    return <div>
        <h1>Hello</h1>
        {products && products.map((product, idx) =>
            <div key={idx}>
                <Link to={`/products/${product._id} `} > {product.name}</Link>
            </div>

        )}

    </div>;
};

