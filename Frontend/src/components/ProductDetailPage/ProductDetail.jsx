import React from 'react'
import Rating from '@mui/material/Rating'
import styles from './ProductDetail.module.css'
import MultipleSelectChip from './MultipleSelectChip'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import { Button } from '@mui/material'

const ProductDetail = (props) => {
  // console.log(props.image)
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
          <p className={styles.prodn}>{props.name}</p>
          <p className={styles.skim}>{props.brand}</p>
          <p className={styles.regular}>Regular & Plus</p>
          <p className={styles.money}>INR {props.price}</p>
          <p className={styles.proddet}>{props.description}</p>
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
            onClick={() => {
              const payload = {
                brand: props.brand,
                price: props.price,
                name: props.name,

                images: props.image,
                description: props.description,
              }

              fetch('http://localhost:4500/cart', {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                  'content-type': 'application/json',
                },
              }).then(() => { })
            }}
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
