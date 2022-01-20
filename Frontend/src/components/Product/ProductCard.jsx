import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
export const ProductCard = ({ product }) => {

    const options = {
        edit: false,
        color: "rgba(20,20,20,0.2)",
        activeColor: "tomato",
        size: window.innerWidth < 600 ? 20 : 25,
        value: product.ratings,
        isHalf: true,
    };
    return (
        <table className="ProductCard" >
            <tbody>
                <tr>
                    <td><Link to={`/product/${product._id} `} >{product.name}</Link></td>
                    <td>{product.price}</td>
                    <td>{product.category}</td>
                    <td>{product.stock}</td>
                    <td>{product.rating}</td>
                    <td>{product.gender}</td>
                    <td>{product.brand}</td>
                    <td> <ReactStars {...options} /> {" "}</td>
                    <td>{product.numOfReviews}</td>
                </tr>

            </tbody>
        </table>
    );
};

