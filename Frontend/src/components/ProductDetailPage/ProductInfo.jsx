import React from 'react'

import styles from './ProductInfo.module.css'
import Button from '@mui/material/Button'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard'

const ProductInfo = () => {
  return (
    <>
      <div className={styles.line}></div>
      <div className={styles.bigcontainer}>
        <div className={styles.left}>
          <div className={styles.heading}>SIZE INFO</div>
          <div className={styles.subheading}>
            <ul>
              <li>
                XXS=00, XS=0-2, S=4-6, M=8-10, L=12-14, XL=14-16, 2X=16-18,
                3X=20-22, 4X=24-26.
              </li>
            </ul>
          </div>
          <div className={styles.heading}>DETAILS & CARE</div>
          <div className={styles.subheadingt}>
            A classic everyday style, this scoop-neck slipdress in ribbed
            stretch modal from Kim Kardashian West's SKIMS hugs your body with
            relaxed comfort.
          </div>
          <div className={styles.list}>
            <ul>
              <li>50 1/2" center front length (size Medium)</li>
              <li>Slips on over head</li>
              <li>Scoop neck)</li>
              <li>Adjustable straps</li>
              <li>Unlined</li>
              <li>91% modal, 9% spandex</li>
              <li>Machine wash, dry flat</li>
              <li>Imported</li>
              <li>Women's Clothing</li>
              <li>Item #6237065</li>
            </ul>
          </div>
          <div className={styles.free}>Free Shipping & Returns See more</div>
        </div>

        <div className={styles.right}>
          <div className={styles.gif}>
            <CardGiftcardIcon style={{ fontSize: '28px', marginLeft: '1%' }} />
            <span style={{ fontSize: '1rem' }} className={styles.heading}>
              GIFT OPTIONS
            </span>
          </div>
          <div className={styles.subheadingt}>
            Choose your gift options at Checkout. Some items may not be eligible
            for all gift options.
          </div>
          <div className={styles.free1}>
            <div className={styles.heading}>Free Pickup</div>
            <div className={styles.subheadingt}>
              Printed gift message (free)
            </div>
            <div className={styles.subheadingt}>
              DIY Nordstrom gift box (free)
            </div>
          </div>

          <div className={styles.delivery}>
            <div className={styles.heading}>Delivery</div>
            <div className={styles.subheadingt}>Email gift message (free)</div>
            <div className={styles.subheadingt}>
              Printed gift message (free)
            </div>
            <div className={styles.subheadingt}>
              DIY Nordstrom gift box ($3)
            </div>
          </div>
          <div className={styles.free3}>
            Looking for gifts for everyone on your list? We've got you covered.
          </div>
          <Button
            sx={{
              width: '50%',
              border: '1px solid #000',
              color: '#333',
              borderRadius: '0%',
              marginTop: '4%',
              marginLeft: '1%',
              fontSize: '0.8rem',
            }}
          >
            shop Gifts
          </Button>

          <div className={styles.skim}>SKIMS</div>
          <div className={styles.founded}>
            SKIMS was founded by Kim Kardashian West as a new approach to
            figure-enhancing undergarments intended to lift, support and
            flatter. Fueled by Kim's passion to create truly considered, unique
            and highly technical solutions in shapewear and underwear, SKIMS is
            for everyone and for every body. Available in nine tonal colors and
            sizes XXS-5X.
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductInfo
