import React from 'react'
import Rating from '@mui/material/Rating'
import styles from './ProductDetail.module.css'
import MultipleSelectChip from './MultipleSelectChip'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import { Button } from '@mui/material'
const ProductDetail = () => {
  return (
    <>
      <div className={styles.bigcontainer}>
        <div className={styles.proddesc}>
          <Rating
            name="half-rating-read"
            defaultValue={4.5}
            precision={0.5}
            readOnly
            style={{ color: '#000', fontSize: '20px' }}
          />
          <p className={styles.prodn}>Ribbed Long Slipdress</p>
          <p className={styles.skim}>SKIMS</p>
          <p className={styles.regular}>Regular & Plus</p>
          <p className={styles.money}>INR 6,256.37</p>
          <p className={styles.proddet}>
            Price varies with currency exchange rates and may be different than
            in store. A classic everyday style, this scoop-neck slipdress in
            ribbed stretch modal from Kim Kardashian West's SKIMS hugs your body
            with relaxed comfort.
          </p>
          <MultipleSelectChip
            style={{ color: '#000', border: '1px solid #000' }}
          />
          <div className={styles.colorpal}>
            <MultipleSelectChip
              style={{
                color: '#000',
                border: '1px solid #000',
                marginTop: '10%',
              }}
            />
          </div>

          <div className={styles.colorpicker}></div>

          <Button
            sx={{
              backgroundColor: '#000',
              color: '#fff',
              marginTop: '10%',
              width: '100%',
              borderRadius: '0%',
              height: '6vh',
              '&:hover': {
                backgroundColor: '#333',
                color: '#fff',
              },
            }}
            startIcon={
              <LocalMallIcon sx={{ color: '#fff' }} className={styles.btn} />
            }
          >
            Add to Bag
          </Button>
        </div>
      </div>
    </>
  )
}

export default ProductDetail
