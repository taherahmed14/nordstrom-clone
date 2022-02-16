import React from 'react'
import styles from './Product.module.css'
import { useNavigate } from 'react-router-dom'
import HoverImage from 'react-hover-image'
export const ProductCard = ({ product }) => {
  let navigate = useNavigate()

  const options = {
    edit: false,
    color: 'rgba(20,20,20,0.2)',
    activeColor: 'tomato',
    size: window.innerWidth < 600 ? 20 : 25,
    value: product.ratings,
    isHalf: true,
  }
  const navigatePage = () => {
    navigate(`/product/${product._id}`)
  }

  return (
    <div onClick={navigatePage}>
      
      <div className={styles.prod}>
        <HoverImage
          src={product.images[0]}
          hoverSrc={product.images[1]}
          className={styles.image}
        />
       
      </div>

      <div className={styles.nacat}>
        <h5>{product.name.substring(0, 26)}</h5>
        <p>{product.category}</p>
        <p>INR {product.price}</p>
        <p>RATING {product.ratings}</p>
      </div>
      
    </div>

  )
}
