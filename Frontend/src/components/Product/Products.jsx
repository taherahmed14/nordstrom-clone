import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactStars from "react-rating-stars-component";
import Loader from '../Loader/Loader';

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

    const { loading } = useSelector((state) => state.productsState)
    // console.log("Loading", loading);

    const options = {
        edit: false,
        color: "rgba(20,20,20,0.2)",
        activeColor: "tomato",
        size: window.innerWidth < 600 ? 20 : 25,
        value: 3.5,
        isHalf: true,
    };

    return <div>
        {loading ? (
            <Loader />
        ) : (
            <div>
                <h1>Products</h1>
                {products && products.map((product, idx) =>
                    <div key={idx}>
                        <table >
                            <tbody>
                                <tr>
                                    <td><Link to={`/products/${product._id} `} >{product.name}</Link></td>
                                    <td>{product.price}</td>
                                    {/* <td><img src={product.images} alt={product.name}></img></td> */}
                                    <td>{product.stock}</td>
                                    <td>{product.rating}</td>
                                    <td> <ReactStars {...options} /> {" "}</td>
                                    <td>{product.numOfReviews}</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                )}
            </div>
        )}
    </div>;
};

