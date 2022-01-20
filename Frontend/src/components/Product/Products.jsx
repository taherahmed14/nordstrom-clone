import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getproductsLoading, getproductsSuccess, productsDetailsFail } from '../../Features/Product/action';

export const Products = () => {

    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getProducts())
    // }, [])

    // const { products } = useSelector((state) => ({
    //     products: state.productsState.products,
    // }), function (prev, cur) {
    //     if (prev.products === cur.products) {
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }
    // });

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getData()
    }, [dispatch])


    const getData = () => {
        dispatch(getproductsLoading());
        fetch('http://localhost:4500/products')
            .then((response) => response.json())
            .then((data) => {
                dispatch(getproductsSuccess(data))
                setProducts(data);
            })
            .catch((err) => {
                dispatch(productsDetailsFail(err));
            });
    };



    return <div>
        <h1>Hello</h1>
        {products && products.map((product, idx) =>
            <div key={idx}>
                <Link to={`/products/${product._id} `} > {product.name}</Link>
            </div>

        )}

    </div>;
};

