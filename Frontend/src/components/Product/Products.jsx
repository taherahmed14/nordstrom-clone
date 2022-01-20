import React from 'react'
import './Products.css'
import { ProductCard } from './ProductCard'
import styles from './Product.module.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactStars from 'react-rating-stars-component'
import Loader from '../Loader/Loader'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/core/Slider'
import { useParams } from 'react-router-dom'
import Pagination from 'react-js-pagination'

import {
  getproductsLoading,
  getproductsSuccess,
  productsDetailsFail,
} from '../../Features/Product/action'

const categories = [
  'Accessories',
  'Beauty %26 Grooming',
  'Clothing',
  'Home',
  'Shoes',
]

export const Products = () => {
  const dispatch = useDispatch()
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [price, setPrice] = useState([0, 4000])
  const [category, setCategory] = useState('')
  // const [ratings, setRatings] = useState(0);
  // const [keywords, setKeywords] = useState("");

  const {
    loading,
    filteredProductsCount,
    resultPerPage,
    productsCount,
  } = useSelector((state) => state.productsState)

  // const { keyword } = useParams();
  // console.log("keyword", keyword);

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice)
  }

  const setCurrentPageNo = (e) => {
    setCurrentPage(e)
  }

  const getData = () => {
    dispatch(getproductsLoading())
    let link = `http://localhost:4500/products?page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}`

    if (category) {
      link = `http://localhost:4500/products?keyword=${keywords}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}`
    }

    fetch(link)
      .then((response) => response.json())
      .then((data) => {
        dispatch(getproductsSuccess(data))
        setProducts(data.products)
      })
      .catch((err) => {
        dispatch(productsDetailsFail(err))
      })
  }

  let count = filteredProductsCount

  useEffect(() => {
    getData()
  }, [dispatch, keyword, currentPage, price, category])

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <h1>Products ({count})</h1>

          <div className="filterBox">
            <Typography>Price</Typography>
            <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={1500}
              max={3000}
            />

            <Typography>Product Type</Typography>
            <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>

          <div>
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>

          {resultPerPage < productsCount && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </div>
      )}
    </div>
  )
}
