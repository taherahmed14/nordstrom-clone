import React from 'react'

import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AddIcon from '@mui/icons-material/Add'
import { ProductCard } from './ProductCard'
import styles from './Product.module.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactStars from 'react-rating-stars-component'
import Loader from '../Loader/Loader'

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

const genders = ['Boys', 'Girls', 'Men', 'Unisex', 'Women']

const brands = ['Adidas', 'Relaince', 'apple']

export const Products = () => {
  const dispatch = useDispatch()
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [price, setPrice] = useState([0, 4000])
  const [category, setCategory] = useState('')
  const [keyword, setKeyword] = useState('')
  const [gender, setGender] = useState('')
  const [brand, setBrand] = useState('')

  const {
    loading,
    filteredProductsCount,
    resultPerPage,
    productsCount,
  } = useSelector((state) => state.productsState)
  const priceHandler = (event, newPrice) => {
    setPrice(newPrice)
  }
  const setCurrentPageNo = (e) => {
    setCurrentPage(e)
  }

  const getData = () => {
    dispatch(getproductsLoading())
    let link = `http://localhost:4500/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}`

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
  }, [dispatch, currentPage, price, category, gender, brand])

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.bigcontainer}>
          <div className={styles.leftw}>
            <div className={styles.leftfunctionality}>
              <Accordion
                sx={{
                  width: '100%',
                }}
              >
                <AccordionSummary
                  expandIcon={<AddIcon sx={{ width: '20px' }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    sx={{
                      fontWeight: '700',
                      lineHeight: '1.4',
                      fontSize: '0.8rem',
                    }}
                  >
                    Category
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ width: '100%' }}>
                <AccordionSummary
                  expandIcon={<AddIcon sx={{ width: '20px' }} />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography
                    sx={{
                      fontWeight: '700',
                      lineHeight: '1.4',
                      fontSize: '0.8rem',
                    }}
                  >
                    Size
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ width: '100%' }}>
                <AccordionSummary
                  expandIcon={<AddIcon sx={{ width: '20px' }} />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography
                    sx={{
                      fontWeight: '700',
                      lineHeight: '1.4',
                      fontSize: '0.8rem',
                    }}
                  >
                    Color
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{
                  width: '100%',
                }}
              >
                <AccordionSummary
                  expandIcon={<AddIcon sx={{ width: '20px' }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    sx={{
                      fontWeight: '700',
                      lineHeight: '1.4',
                      fontSize: '0.8rem',
                    }}
                  >
                    Brand
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{
                  width: '100%',
                }}
              >
                <AccordionSummary
                  expandIcon={<AddIcon sx={{ width: '20px' }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    sx={{
                      fontWeight: '700',
                      lineHeight: '1.4',
                      fontSize: '0.8rem',
                    }}
                  >
                    Length
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{
                  width: '100%',
                }}
              >
                <AccordionSummary
                  expandIcon={<AddIcon sx={{ width: '20px' }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    sx={{
                      fontWeight: '700',
                      lineHeight: '1.4',
                      fontSize: '0.8rem',
                    }}
                  >
                    Material
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{
                  width: '100%',
                }}
              >
                <AccordionSummary
                  expandIcon={<AddIcon sx={{ width: '20px' }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    sx={{
                      fontWeight: '700',
                      lineHeight: '1.4',
                      fontSize: '0.8rem',
                    }}
                  >
                    Neck Style
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{
                  width: '100%',
                }}
              >
                <AccordionSummary
                  expandIcon={<AddIcon sx={{ width: '20px' }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    sx={{
                      fontWeight: '700',
                      lineHeight: '1.4',
                      fontSize: '0.8rem',
                    }}
                  >
                    Occasion
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{
                  width: '100%',
                }}
              >
                <AccordionSummary
                  expandIcon={<AddIcon sx={{ width: '20px' }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    sx={{
                      fontWeight: '700',
                      lineHeight: '1.4',
                      fontSize: '0.8rem',
                    }}
                  >
                    Price
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{
                  width: '100%',
                }}
              >
                <AccordionSummary
                  expandIcon={<AddIcon sx={{ width: '20px' }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    sx={{
                      fontWeight: '700',
                      lineHeight: '1.4',
                      fontSize: '0.8rem',
                    }}
                  >
                    Sale
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{
                  width: '100%',
                }}
              >
                <AccordionSummary
                  expandIcon={<AddIcon sx={{ width: '20px' }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    sx={{
                      fontWeight: '700',
                      lineHeight: '1.4',
                      fontSize: '0.8rem',
                    }}
                  >
                    Sleeve Length
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{
                  width: '100%',
                }}
              >
                <AccordionSummary
                  expandIcon={<AddIcon sx={{ width: '20px' }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    sx={{
                      fontWeight: '700',
                      lineHeight: '1.4',
                      fontSize: '0.8rem',
                    }}
                  >
                    Style
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            {/* <div className="filterBox">
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

              <Typography>Gender</Typography>
              <ul className="categoryBox">
                {genders.map((gender) => (
                  <li
                    className="category-link"
                    key={gender}
                    onClick={() => setGender(gender)}
                  >
                    {gender}
                  </li>
                ))}
              </ul>

              <Typography>Brands</Typography>
              <ul className="categoryBox">
                {brands.map((brand) => (
                  <li
                    className="category-link"
                    key={brand}
                    onClick={() => setBrand(brand)}
                  >
                    {brand}
                  </li>
                ))}
              </ul>
            </div> */}
          </div>

          <div className={styles.righty}>
            <div className={styles.banner}>
              <img
                src="https://n.nordstrommedia.com/id/97c493f1-9ca8-40be-aabb-abf6bed3fc0a.jpeg?h=417&w=1334"
                alt="image"
                className={styles.bannerimage}
              />
            </div>
            <div className={styles.rightw}>
              {products &&
                products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
            </div>
          </div>

          {/* {resultPerPage < productsCount && (
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
          )} */}
        </div>
      )}
    </div>
  )
}
