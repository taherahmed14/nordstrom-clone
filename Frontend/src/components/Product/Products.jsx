import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getproductsLoading, getproductsSuccess, productsDetailsFail } from '../../Features/Product/action';

export const Products = () => {

    const dispatch = useDispatch();

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
                setProducts(data.products);
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

        {products && products.map((product, idx) =>
            <div key={idx}>
                <table>
                    <tbody>
                        <tr>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td><img src={product.images} alt={product.name}></img></td>
                        </tr>

                    </tbody>
                </table>
            </div>

        )}


    </div>;
};

