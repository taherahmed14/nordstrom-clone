import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Product.module.css'
import ReactStars from 'react-rating-stars-component'

export const ProductCard = ({ product }) => {
  console.log(product)
  const options = {
    edit: false,
    color: 'rgba(20,20,20,0.2)',
    activeColor: 'tomato',
    size: window.innerWidth < 600 ? 20 : 25,
    value: product.ratings,
    isHalf: true,
  }
  return (
    <div className={styles.prod}>
      <img src={product.images[0]} alt="" className={styles.image} />
      <Link to={`/product/${product._id} `}>{product.name}</Link>
    </div>

    // <table className="ProductCard">
    //   <tbody>
    //     <tr>
    //       <td>
    //         <Link to={`/product/${product._id} `}>{product.name}</Link>
    //       </td>

    //       <td>{product.price}</td>
    //       <td>{product.category}</td>
    //       <td>{product.stock}</td>
    //       <td>{product.rating}</td>
    //       <td>
    //         {' '}
    //         <ReactStars {...options} />{' '}
    //       </td>
    //       <td>{product.numOfReviews}</td>
    //     </tr>
    //   </tbody>
    // </table>
  )
}
