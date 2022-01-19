import React from 'react'
import ReactImageZoom from 'react-image-zoom'
import ProductInfo from './ProductInfo'
import styles from './Product.module.css'

const Products = () => {
  const props = {
    width: 380,
    height: 690,
    scale: 1.5,
    img: 'nord-1.jpeg',
    zoomPosition: 'original',
  }
  const next = {
    width: 380,
    height: 690,

    img: 'nord-2.jpeg',
    zoomPosition: 'original',
  }
  return (
    <>
      <div className="styles.bigContainer">
        <div
          style={{
            display: 'flex',
            gap: '2%',
            marginTop: '2%',
            border: '1px solid black',
            width: '56%',
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
            <ReactImageZoom {...props} />
          </div>
          <div
            style={{
              width: 380,
              cursor: 'crosshair',
              margin: '2%',
            }}
          >
            <ReactImageZoom {...next} />
          </div>
          <div
            style={{
              width: 380,
              cursor: 'crosshair',
              margin: '2%',
            }}
          >
            <ReactImageZoom {...next} />
          </div>
          <div
            style={{
              width: 380,
              cursor: 'crosshair',
              margin: '2%',
            }}
          >
            <ReactImageZoom {...next} />
          </div>
          <div
            style={{
              width: 380,
              cursor: 'crosshair',
              margin: '2%',
            }}
          >
            <ReactImageZoom {...next} />
          </div>
        </div>
      </div>

      <ProductInfo />
    </>
  )
}

export default Products
