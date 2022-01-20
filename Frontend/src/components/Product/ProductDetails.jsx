import React from 'react';
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { productsDetailsLoading, productsDetailsSuccess, productsDetailsFail } from '../../Features/Product/action';
import { useParams } from 'react-router-dom';

export const ProductDetails = () => {

    const dispatch = useDispatch();
    const { id } = useParams();
    const [details, setDetails] = useState({});

    useEffect(() => {
        getData()
    }, [dispatch, id])


    const getData = () => {
        dispatch(productsDetailsLoading());
        fetch(`http://localhost:4500/products/${id}`)
            .then((response) => response.json())
            .then((data) => {
                dispatch(productsDetailsSuccess(data))
                setDetails(data);
            })
            .catch((err) => {
                dispatch(productsDetailsFail(err));
            });
    };

    return <div>
        <span>ProductDetails</span>
        <table>
            <tbody>
                <tr>
                    <td>{details._id}</td>
                    <td>{details.name}</td>
                    <td>{details.description}</td>
                    <td>{details.price}</td>

                </tr>
            </tbody>
        </table>
    </div>;
};