import React from 'react'
import { Link } from 'react-router-dom'
// import { Rating } from "@material-ui/lab";
import styles from './Product.module.css'
import ReactStars from 'react-rating-stars-component'
export const ProductCard = ({ product }) => {
  const options = {
    edit: false,
    color: 'rgba(20,20,20,0.2)',
    activeColor: 'tomato',
    size: window.innerWidth < 600 ? 20 : 25,
    value: product.ratings,
    isHalf: true,
  }
  return (
    <table className="ProductCard">
      <tbody>
        <tr>
          <td>
            <Link to={`/products/${product._id} `}>{product.name}</Link>
          </td>
          <td>{product.price}</td>
          <td>{product.category}</td>
          <td>{product.stock}</td>
          <td>{product.rating}</td>
          <td>
            {' '}
            <ReactStars {...options} />{' '}
          </td>
          <td>{product.numOfReviews}</td>
        </tr>
      </tbody>
    </table>
  )
}

// return (
//     <div>
//       {loading ? (
//         <Loader />
//       ) : (
//         <div className={styles.bigcontainer}>
//           <div className={styles.leftw}></div>

//           <div className={styles.rightw}>
//             {products &&
//               products.map((product, idx) => (
//                 <div key={idx} className={styles.prod}>
//                   {/* <Link to={`/products/${product._id} `}>{product.name}</Link> */}
//                   <img
//                     src={product.images[0]}
//                     alt=""
//                     className={styles.image}
//                   />
//                 </div>
//               ))}
//           </div>
//         </div>
//       )}
//     </div>
//   )

// grid formating of product with right dimension
