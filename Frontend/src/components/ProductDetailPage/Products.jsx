import React from 'react'
import ReactImageZoom from 'react-image-zoom'
import ProductInfo from './ProductInfo'
import styles from './Product.module.css'
import ProductDetail from './ProductDetail'
const Products = () => {
  const img1 = {
    width: 380,
    height: 690,

    img: 'test1.jpeg',
    zoomPosition: 'original',
  }
  const img2 = {
    width: 380,
    height: 690,

    img: 'test2.jpeg',
    zoomPosition: 'original',
  }
  const img3 = {
    width: 380,
    height: 690,

    img: 'test3.jpeg',
    zoomPosition: 'original',
  }
  const img4 = {
    width: 380,
    height: 690,

    img: 'test4.jpeg',
    zoomPosition: 'original',
  }
  const img5 = {
    width: 380,
    height: 690,

    img: 'test5.jpeg',
    zoomPosition: 'original',
  }
  return (
    <>
      <div className={styles.bigcontainer}>
        <div
          style={{
            display: 'flex',
            gap: '2%',
            marginTop: '2%',

            width: '61%',
            flexWrap: 'wrap',
            marginLeft: '1%',
          }}
        >
          <div
            style={{
              width: 380,
              cursor: 'crosshair',
              margin: '2%',
            }}
          >
            <ReactImageZoom {...img1} />
          </div>
          <div
            style={{
              width: 380,
              cursor: 'crosshair',
              margin: '2%',
            }}
          >
            <ReactImageZoom {...img2} />
          </div>
          <div
            style={{
              width: 380,
              cursor: 'crosshair',
              margin: '2%',
            }}
          >
            <ReactImageZoom {...img3} />
          </div>
          <div
            style={{
              width: 380,
              cursor: 'crosshair',
              margin: '2%',
            }}
          >
            <ReactImageZoom {...img4} />
          </div>
          <div
            style={{
              width: 380,
              cursor: 'crosshair',
              margin: '2%',
            }}
          >
            <ReactImageZoom {...img5} />
          </div>
        </div>
        <ProductDetail />
      </div>

      <ProductInfo />
    </>
  )
}

export default Products
