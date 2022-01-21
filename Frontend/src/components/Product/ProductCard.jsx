import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Product.module.css'
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ product }) => {
  let navigate = useNavigate();

  const options = {
    edit: false,
    color: 'rgba(20,20,20,0.2)',
    activeColor: 'tomato',
    size: window.innerWidth < 600 ? 20 : 25,
    value: product.ratings,
    isHalf: true,
  }
  const navigatePage = () => {
    navigate(`/product/${product._id}`);
  }

  return (
    <div onClick={navigatePage} >
      {/* <Link to={`/product/${product._id} `}> */}
      <div className={styles.prod}>
        <img src={product.images[0]} alt="" className={styles.image} />
      </div>

      <div className={styles.nacat}>
        <h5>{product.name.substring(0, 26)}</h5>
        <p>{product.category}</p>
        <p>INR {product.price}</p>
        <p>RATING {product.ratings}</p>
      </div>
      {/* </Link> */}
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


