import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  productsDetailsLoading,
  productsDetailsSuccess,
  productsDetailsFail,
} from '../../Features/Product/action'
import { useParams } from 'react-router-dom'
import { Header } from '../Home/Header'
import Zoom from 'react-img-zoom'
import { Footer } from '../Home/Footer'
import Loader from '../Loader/Loader'
import ProductInfo from '../ProductDetailPage/ProductInfo'
import styles from '../ProductDetailPage/Product.module.css'
import ProductDetail from '../ProductDetailPage/ProductDetail'
import ReactImageZoom from 'react-image-zoom'
export const ProductDetails = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const [details, setDetails] = useState({})

  useEffect(() => {
    getData()
  }, [dispatch, id])

  const getData = () => {
    dispatch(productsDetailsLoading())
    fetch(`http://localhost:4500/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(productsDetailsSuccess(data))
        setDetails(data)
      })
      .catch((err) => {
        dispatch(productsDetailsFail(err))
      })
  }
  const { loading } = useSelector((state) => state.productsDetailState)

  return (
    <div>
      <Header />

      {loading ? (
        <Loader />
      ) : (
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
              {details.images &&
                details.images.map((image) => (
                  <div
                    style={{
                      width: 380,
                      cursor: 'crosshair',
                      margin: '2%',
                      overflow: 'hidden',
                    }}
                  >
                    <Zoom
                      img={image}
                      zoomScale={1.9}
                      width="100%"
                      height={690}
                      transitionTime={0.5}
                    />
                    {/* <img
                      src={image}
                      alt={details.name}
                      height="690px"
                      width="380px"
                    ></img> */}
                  </div>
                ))}
            </div>

            <ProductDetail
              name={details.name}
              brand={details.brand}
              category={details.category}
              description={details.description}
              price={details.price}
              image={details.images}
            />
          </div>

          <ProductInfo />
        </>
      )}
      <Footer />
    </div>
  )
}
