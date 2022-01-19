import React from 'react';
import { Link } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import { ProductDetails } from './ProductDetails'

const Products = ({ products }) => {
    return <div>
        <h1>Hello</h1>
        {products && products.map((product, idx) =>
            <div key={idx}>
                <Link to={`/products/${product._id} `} > {product.name}</Link>
            </div>

        )}

    </div>;
};

export default Products;
