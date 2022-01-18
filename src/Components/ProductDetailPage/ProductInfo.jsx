import React from 'react'
import styles from './ProductInfo.module.css'
import { FiGift } from 'react-icons/fi'
const ProductInfo = () => {
  return (
    <>
      <div className={styles.bigcontainer}>
        <div className={styles.leftcontainer}>
          <div>
            <h3>SIZE INFO</h3>
            <ul>
              <li>
                XXS=00, XS=0-2, S=4-6, M=8-10, L=12-14, XL=16-18 (14W), XXL=20
                (16W).
              </li>
              <li>High rise.</li>
            </ul>
          </div>
          <div>
            <h3>DETAILS & CARE</h3>
            <p>
              A stretchy, wide waistband and cuffs provide a comfy fit in
              relaxed joggers made from a stretchy knit.
            </p>
            <ul>
              <li>
                27" inseam; 10" leg opening; 11" front rise; 14 1/2" back rise
                (size Medium)
              </li>
              <li>Side-seam pockets</li>
              <li>88% polyester, 12% spandex</li>
              <li>Machine wash, tumble dry</li>
              <li>mported</li>
              <li>Women's Clothing</li>
              <li>Item #6082813</li>
            </ul>
          </div>
          <div>
            <p>Helpful info:</p>
            <p>Defining the Rise-Women's</p>
            <p>See details and tips from a salesperson (video)</p>
          </div>
          <div>
            <p>Free Shipping & Returns See more</p>
          </div>
        </div>
        <div className={styles.rightcontainer}>
          <div className={styles.gift}>
            <div className={styles.takegift}>
              <FiGift className={styles.giftpak} />
            </div>
            <div className={styles.opt}>
              <h3>GIFT OPTIONS</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductInfo
